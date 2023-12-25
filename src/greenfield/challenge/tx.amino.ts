//@ts-nocheck
/* eslint-disable */
import { MsgSubmit, MsgAttest, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/greenfield.challenge.MsgSubmit": {
    aminoType: "/greenfield.challenge.MsgSubmit",
    toAmino: MsgSubmit.toAmino,
    fromAmino: MsgSubmit.fromAmino
  },
  "/greenfield.challenge.MsgAttest": {
    aminoType: "/greenfield.challenge.MsgAttest",
    toAmino: MsgAttest.toAmino,
    fromAmino: MsgAttest.fromAmino
  },
  "/greenfield.challenge.MsgUpdateParams": {
    aminoType: "/greenfield.challenge.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};