import * as apigateway from 'aws-cdk-lib/aws-apigateway';

// Define a model schema for JSON validation
export const GSTNB2BSchema: apigateway.JsonSchema = {
    type: apigateway.JsonSchemaType.OBJECT,
    properties: {
        AckNo1: { type: apigateway.JsonSchemaType.NUMBER },
        AckDt: { type: apigateway.JsonSchemaType.STRING },
        Irn: { type: apigateway.JsonSchemaType.STRING },
        Version: { type: apigateway.JsonSchemaType.STRING },
        TranDtls: {
            type: apigateway.JsonSchemaType.OBJECT,
            properties: {
                TaxSch: { type: apigateway.JsonSchemaType.STRING },
                SupTyp: { type: apigateway.JsonSchemaType.STRING },
                RegRev: { type: apigateway.JsonSchemaType.STRING },
                IgstOnIntra: { type: apigateway.JsonSchemaType.STRING }
            },
            required: ['TaxSch', 'SupTyp', 'RegRev', 'IgstOnIntra']
        },
        DocDtls: {
            type: apigateway.JsonSchemaType.OBJECT,
            properties: {
                Typ: { type: apigateway.JsonSchemaType.STRING },
                No: { type: apigateway.JsonSchemaType.STRING },
                Dt: { type: apigateway.JsonSchemaType.STRING }
            },
            required: ['Typ', 'No', 'Dt']
        },
        SellerDtls: {
            type: apigateway.JsonSchemaType.OBJECT,
            properties: {
                Gstin: { type: apigateway.JsonSchemaType.STRING },
                LglNm: { type: apigateway.JsonSchemaType.STRING },
                Addr1: { type: apigateway.JsonSchemaType.STRING },
                Loc: { type: apigateway.JsonSchemaType.STRING },
                Pin: { type: apigateway.JsonSchemaType.NUMBER },
                Stcd: { type: apigateway.JsonSchemaType.STRING }
            },
            required: ['Gstin', 'LglNm', 'Addr1', 'Loc', 'Pin', 'Stcd']
        },
        BuyerDtls: {
            type: apigateway.JsonSchemaType.OBJECT,
            properties: {
                Gstin: { type: apigateway.JsonSchemaType.STRING },
                LglNm: { type: apigateway.JsonSchemaType.STRING },
                Pos: { type: apigateway.JsonSchemaType.STRING },
                Addr1: { type: apigateway.JsonSchemaType.STRING },
                Loc: { type: apigateway.JsonSchemaType.STRING },
                Pin: { type: apigateway.JsonSchemaType.NUMBER },
                Stcd: { type: apigateway.JsonSchemaType.STRING }
            },
            required: ['Gstin', 'LglNm', 'Pos', 'Addr1', 'Loc', 'Pin', 'Stcd']
        },
        DispDtls: {
            type: apigateway.JsonSchemaType.OBJECT,
            properties: {
                Nm: { type: apigateway.JsonSchemaType.STRING },
                Addr1: { type: apigateway.JsonSchemaType.STRING },
                Loc: { type: apigateway.JsonSchemaType.STRING },
                Pin: { type: apigateway.JsonSchemaType.NUMBER },
                Stcd: { type: apigateway.JsonSchemaType.STRING }
            },
            required: ['Nm', 'Addr1', 'Loc', 'Pin', 'Stcd']
        },
        ShipDtls: {
            type: apigateway.JsonSchemaType.OBJECT,
            properties: {
                Gstin: { type: apigateway.JsonSchemaType.STRING },
                LglNm: { type: apigateway.JsonSchemaType.STRING },
                Addr1: { type: apigateway.JsonSchemaType.STRING },
                Loc: { type: apigateway.JsonSchemaType.STRING },
                Pin: { type: apigateway.JsonSchemaType.NUMBER },
                Stcd: { type: apigateway.JsonSchemaType.STRING }
            },
            required: ['Gstin', 'LglNm', 'Addr1', 'Loc', 'Pin', 'Stcd']
        },
        ItemList: {
            type: apigateway.JsonSchemaType.ARRAY,
            items: {
                type: apigateway.JsonSchemaType.OBJECT,
                properties: {
                    ItemNo: { type: apigateway.JsonSchemaType.NUMBER },
                    SlNo: { type: apigateway.JsonSchemaType.STRING },
                    IsServc: { type: apigateway.JsonSchemaType.STRING },
                    PrdDesc: { type: apigateway.JsonSchemaType.STRING },
                    HsnCd: { type: apigateway.JsonSchemaType.STRING },
                    Qty: { type: apigateway.JsonSchemaType.NUMBER },
                    FreeQty: { type: apigateway.JsonSchemaType.NUMBER },
                    Unit: { type: apigateway.JsonSchemaType.STRING },
                    UnitPrice: { type: apigateway.JsonSchemaType.NUMBER },
                    TotAmt: { type: apigateway.JsonSchemaType.NUMBER },
                    Discount: { type: apigateway.JsonSchemaType.NUMBER },
                    PreTaxVal: { type: apigateway.JsonSchemaType.NUMBER },
                    AssAmt: { type: apigateway.JsonSchemaType.NUMBER },
                    GstRt: { type: apigateway.JsonSchemaType.NUMBER },
                    IgstAmt: { type: apigateway.JsonSchemaType.NUMBER },
                    CgstAmt: { type: apigateway.JsonSchemaType.NUMBER },
                    SgstAmt: { type: apigateway.JsonSchemaType.NUMBER },
                    CesRt: { type: apigateway.JsonSchemaType.NUMBER },
                    CesAmt: { type: apigateway.JsonSchemaType.NUMBER },
                    CesNonAdvlAmt: { type: apigateway.JsonSchemaType.NUMBER },
                    StateCesRt: { type: apigateway.JsonSchemaType.NUMBER },
                    StateCesAmt: { type: apigateway.JsonSchemaType.NUMBER },
                    StateCesNonAdvlAmt: { type: apigateway.JsonSchemaType.NUMBER },
                    OthChrg: { type: apigateway.JsonSchemaType.NUMBER },
                    TotItemVal: { type: apigateway.JsonSchemaType.NUMBER }
                },
                required: ['ItemNo', 'SlNo', 'IsServc', 'PrdDesc', 'HsnCd', 'Qty', 'FreeQty', 'Unit', 'UnitPrice', 'TotAmt', 'Discount', 'PreTaxVal', 'AssAmt', 'GstRt', 'IgstAmt', 'CgstAmt', 'SgstAmt', 'CesRt', 'CesAmt', 'CesNonAdvlAmt', 'StateCesRt', 'StateCesAmt', 'StateCesNonAdvlAmt', 'OthChrg', 'TotItemVal']
            }
        },
        ValDtls: {
            type: apigateway.JsonSchemaType.OBJECT,
            properties: {
                AssVal: { type: apigateway.JsonSchemaType.NUMBER },
                CgstVal: { type: apigateway.JsonSchemaType.NUMBER },
                SgstVal: { type: apigateway.JsonSchemaType.NUMBER },
                IgstVal: { type: apigateway.JsonSchemaType.NUMBER },
                CesVal: { type: apigateway.JsonSchemaType.NUMBER },
                StCesVal: { type: apigateway.JsonSchemaType.NUMBER },
                Discount: { type: apigateway.JsonSchemaType.NUMBER },
                OthChrg: { type: apigateway.JsonSchemaType.NUMBER },
                RndOffAmt: { type: apigateway.JsonSchemaType.NUMBER },
                TotInvVal: { type: apigateway.JsonSchemaType.NUMBER }
            },
            required: ['AssVal', 'CgstVal', 'SgstVal', 'IgstVal', 'CesVal', 'StCesVal', 'Discount', 'OthChrg', 'RndOffAmt', 'TotInvVal']
        },
        EwbDtls: {
            type: apigateway.JsonSchemaType.OBJECT,
            properties: {
                TransId: { type: apigateway.JsonSchemaType.STRING },
                TransName: { type: apigateway.JsonSchemaType.STRING },
                TransMode: { type: apigateway.JsonSchemaType.STRING },
                Distance: { type: apigateway.JsonSchemaType.NUMBER },
                VehNo: { type: apigateway.JsonSchemaType.STRING },
                VehType: { type: apigateway.JsonSchemaType.STRING }
            },
            required: ['TransId', 'TransName', 'TransMode', 'Distance', 'VehNo', 'VehType']
        }
    },
    required: [
        'AckNo', 'AckDt', 'Irn', 'Version', 'TranDtls', 'DocDtls', 'SellerDtls', 'BuyerDtls',
        'DispDtls', 'ShipDtls', 'ItemList', 'ValDtls', 'EwbDtls'
    ]
}