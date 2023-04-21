export const MsgGrantSDKTypeEIP712 = {
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
      "type": "TypeGrant",
      "name": "grant"
    }
  ],
  "TypeGrant": [
    {
      "type": "import(\"/Users/rqzheng/Documents/work/greenfield-cosmos-types/src/google/protobuf/any\").AnySDKType",
      "name": "authorization"
    },
    {
      "type": "import(\"/Users/rqzheng/Documents/work/greenfield-cosmos-types/src/google/protobuf/timestamp\").TimestampSDKType",
      "name": "expiration"
    }
  ]
} 

