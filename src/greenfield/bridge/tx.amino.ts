//@ts-nocheck
/* eslint-disable */
import { MsgTransferOut, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/greenfield.bridge.MsgTransferOut": {
    aminoType: "/greenfield.bridge.MsgTransferOut",
    toAmino: MsgTransferOut.toAmino,
    fromAmino: MsgTransferOut.fromAmino
  },
  "/greenfield.bridge.MsgUpdateParams": {
    aminoType: "/greenfield.bridge.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};