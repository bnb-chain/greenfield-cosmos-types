//@ts-nocheck
/* eslint-disable */
import { MsgCreateGlobalVirtualGroup, MsgDeleteGlobalVirtualGroup, MsgDeposit, MsgWithdraw, MsgSwapOut, MsgSettle, MsgUpdateParams, MsgStorageProviderExit, MsgCompleteStorageProviderExit, MsgCompleteSwapOut, MsgCancelSwapOut, MsgReserveSwapIn, MsgCancelSwapIn, MsgCompleteSwapIn, MsgStorageProviderForcedExit } from "./tx";
export const AminoConverter = {
  "/greenfield.virtualgroup.MsgCreateGlobalVirtualGroup": {
    aminoType: "/greenfield.virtualgroup.MsgCreateGlobalVirtualGroup",
    toAmino: MsgCreateGlobalVirtualGroup.toAmino,
    fromAmino: MsgCreateGlobalVirtualGroup.fromAmino
  },
  "/greenfield.virtualgroup.MsgDeleteGlobalVirtualGroup": {
    aminoType: "/greenfield.virtualgroup.MsgDeleteGlobalVirtualGroup",
    toAmino: MsgDeleteGlobalVirtualGroup.toAmino,
    fromAmino: MsgDeleteGlobalVirtualGroup.fromAmino
  },
  "/greenfield.virtualgroup.MsgDeposit": {
    aminoType: "/greenfield.virtualgroup.MsgDeposit",
    toAmino: MsgDeposit.toAmino,
    fromAmino: MsgDeposit.fromAmino
  },
  "/greenfield.virtualgroup.MsgWithdraw": {
    aminoType: "/greenfield.virtualgroup.MsgWithdraw",
    toAmino: MsgWithdraw.toAmino,
    fromAmino: MsgWithdraw.fromAmino
  },
  "/greenfield.virtualgroup.MsgSwapOut": {
    aminoType: "/greenfield.virtualgroup.MsgSwapOut",
    toAmino: MsgSwapOut.toAmino,
    fromAmino: MsgSwapOut.fromAmino
  },
  "/greenfield.virtualgroup.MsgSettle": {
    aminoType: "/greenfield.virtualgroup.MsgSettle",
    toAmino: MsgSettle.toAmino,
    fromAmino: MsgSettle.fromAmino
  },
  "/greenfield.virtualgroup.MsgUpdateParams": {
    aminoType: "/greenfield.virtualgroup.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/greenfield.virtualgroup.MsgStorageProviderExit": {
    aminoType: "/greenfield.virtualgroup.MsgStorageProviderExit",
    toAmino: MsgStorageProviderExit.toAmino,
    fromAmino: MsgStorageProviderExit.fromAmino
  },
  "/greenfield.virtualgroup.MsgCompleteStorageProviderExit": {
    aminoType: "/greenfield.virtualgroup.MsgCompleteStorageProviderExit",
    toAmino: MsgCompleteStorageProviderExit.toAmino,
    fromAmino: MsgCompleteStorageProviderExit.fromAmino
  },
  "/greenfield.virtualgroup.MsgCompleteSwapOut": {
    aminoType: "/greenfield.virtualgroup.MsgCompleteSwapOut",
    toAmino: MsgCompleteSwapOut.toAmino,
    fromAmino: MsgCompleteSwapOut.fromAmino
  },
  "/greenfield.virtualgroup.MsgCancelSwapOut": {
    aminoType: "/greenfield.virtualgroup.MsgCancelSwapOut",
    toAmino: MsgCancelSwapOut.toAmino,
    fromAmino: MsgCancelSwapOut.fromAmino
  },
  "/greenfield.virtualgroup.MsgReserveSwapIn": {
    aminoType: "/greenfield.virtualgroup.MsgReserveSwapIn",
    toAmino: MsgReserveSwapIn.toAmino,
    fromAmino: MsgReserveSwapIn.fromAmino
  },
  "/greenfield.virtualgroup.MsgCancelSwapIn": {
    aminoType: "/greenfield.virtualgroup.MsgCancelSwapIn",
    toAmino: MsgCancelSwapIn.toAmino,
    fromAmino: MsgCancelSwapIn.fromAmino
  },
  "/greenfield.virtualgroup.MsgCompleteSwapIn": {
    aminoType: "/greenfield.virtualgroup.MsgCompleteSwapIn",
    toAmino: MsgCompleteSwapIn.toAmino,
    fromAmino: MsgCompleteSwapIn.fromAmino
  },
  "/greenfield.virtualgroup.MsgStorageProviderForcedExit": {
    aminoType: "/greenfield.virtualgroup.MsgStorageProviderForcedExit",
    toAmino: MsgStorageProviderForcedExit.toAmino,
    fromAmino: MsgStorageProviderForcedExit.fromAmino
  }
};