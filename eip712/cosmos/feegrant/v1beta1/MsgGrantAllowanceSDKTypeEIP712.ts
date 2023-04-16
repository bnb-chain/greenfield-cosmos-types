export const MsgGrantAllowanceSDKTypeEIP712 = {
  "Msg": [
    {
      "type": "string",
      "name": "type"
    },
    {
      "type": "string",
      "name": "granter"
    },
    {
      "type": "string",
      "name": "grantee"
    },
    {
      "type": "TypeAllowance",
      "name": "allowance"
    }
  ],
  "TypeAllowance": [
    {
      "type": "string",
      "name": "type_url"
    },
    {
      "type": "Uint8Array",
      "name": "value"
    }
  ]
} 
