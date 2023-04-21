export const MsgDiscontinueBucketSDKTypeEIP712 = {
  "Msg": [
    {
      "type": "string",
      "name": "type"
    },
    {
      "type": "string",
      "name": "creator"
    },
    {
      "type": "string",
      "name": "bucket_name"
    },
    {
      "type": "string",
      "name": "visibility"
    },
    {
      "type": "string",
      "name": "payment_address"
    },
    {
      "type": "string",
      "name": "primary_sp_address"
    },
    {
      "type": "TypePrimarySpApproval",
      "name": "primary_sp_approval"
    },
    {
      "type": "uint64",
      "name": "charged_read_quota"
    },
    {
      "type": "string",
      "name": "operator"
    },
    {
      "type": "string",
      "name": "bucket_name"
    },
    {
      "type": "string",
      "name": "operator"
    },
    {
      "type": "string",
      "name": "bucket_name"
    },
    {
      "type": "string",
      "name": "reason"
    }
  ],
  "TypePrimarySpApproval": [
    {
      "type": "Long",
      "name": "expired_height"
    },
    {
      "type": "Uint8Array",
      "name": "sig"
    }
  ]
} 

