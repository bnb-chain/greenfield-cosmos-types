//@ts-nocheck
/* eslint-disable */
import { MsgClaim, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/cosmos.oracle.v1.MsgClaim": {
    aminoType: "cosmos-sdk/MsgClaim",
    toAmino: MsgClaim.toAmino,
    fromAmino: MsgClaim.fromAmino
  },
  "/cosmos.oracle.v1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};