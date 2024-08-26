const crypto = require('crypto');
const querystring = require('querystring');

//Response when JWT is not valid.
const response401 = {
    statusCode: 401,
    statusDescription: 'Unauthorized'
};

function jwt_decode(request, token, key, noVerify, algorithm) {
    // check token
    if (!token) {
        throw new Error('No token supplied');
    }
    // check segments
    const segments = token.split('.');
    if (segments.length !== 3) {
        throw new Error('Not enough or too many segments');
    }

    // All segment should be base64
    const headerSeg = segments[0];
    const payloadSeg = segments[1];
    const signatureSeg = segments[2];

    // base64 decode and parse JSON
    const header = JSON.parse(_base64urlDecode(headerSeg));
    const payload = JSON.parse(_base64urlDecode(payloadSeg));

    if (!noVerify) {
        const signingMethod = 'sha256';
        const signingType = 'hmac';

        // Verify signature. `sign` will return base64 string.
        const signingInput = [headerSeg, payloadSeg].join('.');

        if (!_verify(signingInput, key, signingMethod, signingType, signatureSeg)) {
            throw new Error('Signature verification failed');
        }

        // Support for nbf and exp claims.
        // According to the RFC, they should be in seconds.
        if (payload.nbf && Date.now() < payload.nbf*1000) {
            throw new Error('Token not yet active');
        }

        if (payload.exp && Date.now() > payload.exp*1000) {
            //throw new Error('Token expired');
            //var headers = request.headers;
            //headers['forceauthheader'] = { value: 'random-'+ Math.round(Math.random()*100) + "-12345"}; 
            addRandomQueryString(request)
            //delete request.cookies['jwt_token'];
            return request;
        }
    }

    return payload;
}

//Function to ensure a constant time comparison to prevent
//timing side channels.
function _constantTimeEquals(a, b) {
    if (a.length != b.length) {
        return false;
    }
    
    var xor = 0;
    for (var i = 0; i < a.length; i++) {
    xor |= (a.charCodeAt(i) ^ b.charCodeAt(i));
    }
    
    return 0 === xor;
}

function _verify(input, key, method, type, signature) {
    if(type === "hmac") {
        return _constantTimeEquals(signature, _sign(input, key, method));
    }
    else {
        throw new Error('Algorithm type not recognized');
    }
}

function _sign(input, key, method) {
    return crypto.createHmac(method, key).update(input).digest('base64url');
}

function _base64urlDecode(str) {
    return Buffer.from(str, 'base64url')
}

function addRandomQueryString(request) {
    const headers = request.headers;
    
    // Add a random query string parameter
        const randomNumber = Math.floor(Math.random() * 1000);
        const randomQueryString = `jwt_missing=${randomNumber}`;
        
        console.log(request.querystring);
    // Append random query string to the request URL
        //const qs = querystring.stringify(request.querystring) + "&jwt_missing=" + randomNumber;
        //console.log(qs);
        // Modify the request to include the updated URL
        request.querystring.jwt_missing = {"value": "randomstring-" + randomNumber};
        console.log(request.querystring);
}

function handler(event) {
    const request = event.request;
    
    var key = "MY_TOP_SECRET_CLOUD_EVANGELIST";
    
    //Get Token from Cookie
    const jwtToken = request.cookies['jwt_token'];

    // If no JWT token, then generate HTTP redirect 401 response.
    if(!jwtToken) {
        //var headers = request.headers;
        //headers['forceauthheader'] = { value: 'random-'+ Math.round(Math.random()*100) + "-12345"};
        addRandomQueryString(request);
        return request;
    }

    //const jwtToken = jtoken.value;

    try{ 
        jwt_decode(request, jwtToken.value, key);
    }
    catch(e) {
        console.log(e);
        return response401;
    }

    //Remove the JWT from the query string if valid and return.
    //delete request.querystring.jwt;
    delete request.cookies['jwt_token'];
    console.log("Valid JWT token");
    return request
}