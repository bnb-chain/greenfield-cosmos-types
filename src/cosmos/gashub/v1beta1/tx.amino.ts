//@ts-nocheck
/* eslint-disable */
import { MsgUpdateParams, MsgSetMsgGasParams } from "./tx";
export const AminoConverter = {
  "/cosmos.gashub.v1beta1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/x/gashub/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/cosmos.gashub.v1beta1.MsgSetMsgGasParams": {
    aminoType: "cosmos-sdk/MsgSetMsgGasParams",
    toAmino: MsgSetMsgGasParams.toAmino,
    fromAmino: MsgSetMsgGasParams.fromAmino
  }
};