export const MsgDeleteObjectSDKTypeEIP712 = {
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
      "name": "object_name"
    },
    {
      "type": "uint64",
      "name": "payload_size"
    },
    {
      "type": "string",
      "name": "visibility"
    },
    {
      "type": "string",
      "name": "content_type"
    },
    {
      "type": "TypePrimarySpApproval",
      "name": "primary_sp_approval"
    },
    {
      "type": "bytes[]",
      "name": "expect_checksums"
    },
    {
      "type": "string",
      "name": "redundancy_type"
    },
    {
      "type": "string[]",
      "name": "expect_secondary_sp_addresses"
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
      "name": "object_name"
    },
    {
      "type": "string[]",
      "name": "secondary_sp_addresses"
    },
    {
      "type": "bytes[]",
      "name": "secondary_sp_signatures"
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
      "name": "object_name"
    },
    {
      "type": "string",
      "name": "operator"
    },
    {
      "type": "string",
      "name": "src_bucket_name"
    },
    {
      "type": "string",
      "name": "dst_bucket_name"
    },
    {
      "type": "string",
      "name": "src_object_name"
    },
    {
      "type": "string",
      "name": "dst_object_name"
    },
    {
      "type": "TypeDstPrimarySpApproval",
      "name": "dst_primary_sp_approval"
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
      "name": "object_name"
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
  ],
  "TypeDstPrimarySpApproval": [
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

