//@ts-nocheck
/* eslint-disable */
import { MsgCreateStorageProvider, MsgDeposit, MsgEditStorageProvider, MsgUpdateSpStoragePrice, MsgUpdateStorageProviderStatus, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/greenfield.sp.MsgCreateStorageProvider": {
    aminoType: "/greenfield.sp.MsgCreateStorageProvider",
    toAmino: MsgCreateStorageProvider.toAmino,
    fromAmino: MsgCreateStorageProvider.fromAmino
  },
  "/greenfield.sp.MsgDeposit": {
    aminoType: "/greenfield.sp.MsgDeposit",
    toAmino: MsgDeposit.toAmino,
    fromAmino: MsgDeposit.fromAmino
  },
  "/greenfield.sp.MsgEditStorageProvider": {
    aminoType: "/greenfield.sp.MsgEditStorageProvider",
    toAmino: MsgEditStorageProvider.toAmino,
    fromAmino: MsgEditStorageProvider.fromAmino
  },
  "/greenfield.sp.MsgUpdateSpStoragePrice": {
    aminoType: "/greenfield.sp.MsgUpdateSpStoragePrice",
    toAmino: MsgUpdateSpStoragePrice.toAmino,
    fromAmino: MsgUpdateSpStoragePrice.fromAmino
  },
  "/greenfield.sp.MsgUpdateStorageProviderStatus": {
    aminoType: "/greenfield.sp.MsgUpdateStorageProviderStatus",
    toAmino: MsgUpdateStorageProviderStatus.toAmino,
    fromAmino: MsgUpdateStorageProviderStatus.fromAmino
  },
  "/greenfield.sp.MsgUpdateParams": {
    aminoType: "/greenfield.sp.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};