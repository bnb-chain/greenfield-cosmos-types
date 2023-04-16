export const MsgSubmitEvidenceSDKTypeEIP712 = {
  "Msg": [
    {
      "type": "string",
      "name": "type"
    },
    {
      "type": "string",
      "name": "submitter"
    },
    {
      "type": "TypeEvidence",
      "name": "evidence"
    }
  ],
  "TypeEvidence": [
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

