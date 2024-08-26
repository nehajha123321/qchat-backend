/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import { useState } from "react";

export default function CDNImageLoader() {
  const [api, setApi] = useState("58e5d2c0-c811-11ee-b06c-027cd065f77f");
  const [expiryTime, setExpiryTime] = useState(30);
  const [cdnResponse, setCdnResponse] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  let url;

  async function handleSubmission(path: string) {
    if (path === "apigw") {
      url = `https://ikn1e62e45.execute-api.ap-south-1.amazonaws.com/dev/token?api_key=${api}&expiry_time=${expiryTime}`;
    } else {
      url = `https://d2v5ib085kdu34.cloudfront.net/dev/token?api_key=${api}&expiry_time=${expiryTime}`;
    }
    try {
      const response = await fetch(url, { credentials: "include" });
      const data = await response.json();
      console.log(response);
      setCdnResponse(data);
      setImageUrl(data.imgURL);
      //setTokenStatus(data.tokenStatus);
    } catch (err) {
      console.log(err);
      setImageUrl("");
    }
  }

  return (
    <>
      <div className="bg-blue-200 m-2 rounded p-4 flex-wrap space-y-4">
        Enter the details below:
        <br />
        <div className="container flex-auto grow">
          <label>API Key: </label>
          <input
            type="text"
            placeholder="Enter API Key..."
            value={api}
            className="grow w-2/3"
            onChange={(e) => setApi(e.target.value)}
          />
        </div>
        <div>
          <label>Expiry Time (in seconds): </label>
          <input
            type="number"
            value={expiryTime}
            width="4"
            onChange={(e) => setExpiryTime(parseInt(e.target.value))}
            className="grow w-2/3"
          />
        </div>
        <button
          className="btn btn-primary min-w-20 mx-4"
          onClick={() => handleSubmission("apigw")}
        >
          API Gateway
        </button>
        <button
          className="btn btn-primary min-w-20"
          onClick={() => handleSubmission("cdn")}
        >
          CDN - Cloudfront
        </button>
      </div>
      {imageUrl != "" ? (
        <>
          <div className="flex flex-auto text-xl bg-yellow-300">
            Faded Image: Cache-Miss, Clear Image: Cache Hit from CDN
          </div>

          <img src={imageUrl} alt="Image loaded from CDN" />
        </>
      ) : (
        ""
      )}
    </>
  );
}
