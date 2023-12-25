//@ts-nocheck
/* eslint-disable */
import { MsgUpdateParams, MsgUpdateChannelPermissions, MsgMintModuleTokens } from "./tx";
export const AminoConverter = {
  "/cosmos.crosschain.v1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/cosmos.crosschain.v1.MsgUpdateChannelPermissions": {
    aminoType: "cosmos-sdk/MsgUpdateChannelPermissions",
    toAmino: MsgUpdateChannelPermissions.toAmino,
    fromAmino: MsgUpdateChannelPermissions.fromAmino
  },
  "/cosmos.crosschain.v1.MsgMintModuleTokens": {
    aminoType: "cosmos-sdk/MsgMintModuleTokens",
    toAmino: MsgMintModuleTokens.toAmino,
    fromAmino: MsgMintModuleTokens.fromAmino
  }
};