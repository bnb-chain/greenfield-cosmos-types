export const MsgRevokeSDKTypeEIP712 = {
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
    },
    {
      "type": "string",
      "name": "grantee"
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
      "type": "string",
      "name": "msg_type_url"
    }
  ],
  "TypeGrant": [
    {
      "type": "import(\"/Users/gaoyibo/bnb/green-cosmos-types/src/google/protobuf/any\").AnySDKType",
      "name": "authorization"
    },
    {
      "type": "import(\"/Users/gaoyibo/bnb/green-cosmos-types/src/google/protobuf/timestamp\").TimestampSDKType",
      "name": "expiration"
    }
  ]
} 

