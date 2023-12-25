//@ts-nocheck
/* eslint-disable */
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateGlobalVirtualGroup, MsgDeleteGlobalVirtualGroup, MsgDeposit, MsgWithdraw, MsgSwapOut, MsgSettle, MsgUpdateParams, MsgStorageProviderExit, MsgCompleteStorageProviderExit, MsgCompleteSwapOut, MsgCancelSwapOut } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/greenfield.virtualgroup.MsgCreateGlobalVirtualGroup", MsgCreateGlobalVirtualGroup], ["/greenfield.virtualgroup.MsgDeleteGlobalVirtualGroup", MsgDeleteGlobalVirtualGroup], ["/greenfield.virtualgroup.MsgDeposit", MsgDeposit], ["/greenfield.virtualgroup.MsgWithdraw", MsgWithdraw], ["/greenfield.virtualgroup.MsgSwapOut", MsgSwapOut], ["/greenfield.virtualgroup.MsgSettle", MsgSettle], ["/greenfield.virtualgroup.MsgUpdateParams", MsgUpdateParams], ["/greenfield.virtualgroup.MsgStorageProviderExit", MsgStorageProviderExit], ["/greenfield.virtualgroup.MsgCompleteStorageProviderExit", MsgCompleteStorageProviderExit], ["/greenfield.virtualgroup.MsgCompleteSwapOut", MsgCompleteSwapOut], ["/greenfield.virtualgroup.MsgCancelSwapOut", MsgCancelSwapOut]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createGlobalVirtualGroup(value: MsgCreateGlobalVirtualGroup) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgCreateGlobalVirtualGroup",
        value: MsgCreateGlobalVirtualGroup.encode(value).finish()
      };
    },
    deleteGlobalVirtualGroup(value: MsgDeleteGlobalVirtualGroup) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgDeleteGlobalVirtualGroup",
        value: MsgDeleteGlobalVirtualGroup.encode(value).finish()
      };
    },
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgDeposit",
        value: MsgDeposit.encode(value).finish()
      };
    },
    withdraw(value: MsgWithdraw) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgWithdraw",
        value: MsgWithdraw.encode(value).finish()
      };
    },
    swapOut(value: MsgSwapOut) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgSwapOut",
        value: MsgSwapOut.encode(value).finish()
      };
    },
    settle(value: MsgSettle) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgSettle",
        value: MsgSettle.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    storageProviderExit(value: MsgStorageProviderExit) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgStorageProviderExit",
        value: MsgStorageProviderExit.encode(value).finish()
      };
    },
    completeStorageProviderExit(value: MsgCompleteStorageProviderExit) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgCompleteStorageProviderExit",
        value: MsgCompleteStorageProviderExit.encode(value).finish()
      };
    },
    completeSwapOut(value: MsgCompleteSwapOut) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgCompleteSwapOut",
        value: MsgCompleteSwapOut.encode(value).finish()
      };
    },
    cancelSwapOut(value: MsgCancelSwapOut) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgCancelSwapOut",
        value: MsgCancelSwapOut.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createGlobalVirtualGroup(value: MsgCreateGlobalVirtualGroup) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgCreateGlobalVirtualGroup",
        value
      };
    },
    deleteGlobalVirtualGroup(value: MsgDeleteGlobalVirtualGroup) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgDeleteGlobalVirtualGroup",
        value
      };
    },
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgDeposit",
        value
      };
    },
    withdraw(value: MsgWithdraw) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgWithdraw",
        value
      };
    },
    swapOut(value: MsgSwapOut) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgSwapOut",
        value
      };
    },
    settle(value: MsgSettle) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgSettle",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgUpdateParams",
        value
      };
    },
    storageProviderExit(value: MsgStorageProviderExit) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgStorageProviderExit",
        value
      };
    },
    completeStorageProviderExit(value: MsgCompleteStorageProviderExit) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgCompleteStorageProviderExit",
        value
      };
    },
    completeSwapOut(value: MsgCompleteSwapOut) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgCompleteSwapOut",
        value
      };
    },
    cancelSwapOut(value: MsgCancelSwapOut) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgCancelSwapOut",
        value
      };
    }
  },
  toJSON: {
    createGlobalVirtualGroup(value: MsgCreateGlobalVirtualGroup) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgCreateGlobalVirtualGroup",
        value: MsgCreateGlobalVirtualGroup.toJSON(value)
      };
    },
    deleteGlobalVirtualGroup(value: MsgDeleteGlobalVirtualGroup) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgDeleteGlobalVirtualGroup",
        value: MsgDeleteGlobalVirtualGroup.toJSON(value)
      };
    },
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgDeposit",
        value: MsgDeposit.toJSON(value)
      };
    },
    withdraw(value: MsgWithdraw) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgWithdraw",
        value: MsgWithdraw.toJSON(value)
      };
    },
    swapOut(value: MsgSwapOut) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgSwapOut",
        value: MsgSwapOut.toJSON(value)
      };
    },
    settle(value: MsgSettle) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgSettle",
        value: MsgSettle.toJSON(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value)
      };
    },
    storageProviderExit(value: MsgStorageProviderExit) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgStorageProviderExit",
        value: MsgStorageProviderExit.toJSON(value)
      };
    },
    completeStorageProviderExit(value: MsgCompleteStorageProviderExit) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgCompleteStorageProviderExit",
        value: MsgCompleteStorageProviderExit.toJSON(value)
      };
    },
    completeSwapOut(value: MsgCompleteSwapOut) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgCompleteSwapOut",
        value: MsgCompleteSwapOut.toJSON(value)
      };
    },
    cancelSwapOut(value: MsgCancelSwapOut) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgCancelSwapOut",
        value: MsgCancelSwapOut.toJSON(value)
      };
    }
  },
  fromJSON: {
    createGlobalVirtualGroup(value: any) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgCreateGlobalVirtualGroup",
        value: MsgCreateGlobalVirtualGroup.fromJSON(value)
      };
    },
    deleteGlobalVirtualGroup(value: any) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgDeleteGlobalVirtualGroup",
        value: MsgDeleteGlobalVirtualGroup.fromJSON(value)
      };
    },
    deposit(value: any) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgDeposit",
        value: MsgDeposit.fromJSON(value)
      };
    },
    withdraw(value: any) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgWithdraw",
        value: MsgWithdraw.fromJSON(value)
      };
    },
    swapOut(value: any) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgSwapOut",
        value: MsgSwapOut.fromJSON(value)
      };
    },
    settle(value: any) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgSettle",
        value: MsgSettle.fromJSON(value)
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    },
    storageProviderExit(value: any) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgStorageProviderExit",
        value: MsgStorageProviderExit.fromJSON(value)
      };
    },
    completeStorageProviderExit(value: any) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgCompleteStorageProviderExit",
        value: MsgCompleteStorageProviderExit.fromJSON(value)
      };
    },
    completeSwapOut(value: any) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgCompleteSwapOut",
        value: MsgCompleteSwapOut.fromJSON(value)
      };
    },
    cancelSwapOut(value: any) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgCancelSwapOut",
        value: MsgCancelSwapOut.fromJSON(value)
      };
    }
  },
  fromPartial: {
    createGlobalVirtualGroup(value: MsgCreateGlobalVirtualGroup) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgCreateGlobalVirtualGroup",
        value: MsgCreateGlobalVirtualGroup.fromPartial(value)
      };
    },
    deleteGlobalVirtualGroup(value: MsgDeleteGlobalVirtualGroup) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgDeleteGlobalVirtualGroup",
        value: MsgDeleteGlobalVirtualGroup.fromPartial(value)
      };
    },
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgDeposit",
        value: MsgDeposit.fromPartial(value)
      };
    },
    withdraw(value: MsgWithdraw) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgWithdraw",
        value: MsgWithdraw.fromPartial(value)
      };
    },
    swapOut(value: MsgSwapOut) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgSwapOut",
        value: MsgSwapOut.fromPartial(value)
      };
    },
    settle(value: MsgSettle) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgSettle",
        value: MsgSettle.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    storageProviderExit(value: MsgStorageProviderExit) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgStorageProviderExit",
        value: MsgStorageProviderExit.fromPartial(value)
      };
    },
    completeStorageProviderExit(value: MsgCompleteStorageProviderExit) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgCompleteStorageProviderExit",
        value: MsgCompleteStorageProviderExit.fromPartial(value)
      };
    },
    completeSwapOut(value: MsgCompleteSwapOut) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgCompleteSwapOut",
        value: MsgCompleteSwapOut.fromPartial(value)
      };
    },
    cancelSwapOut(value: MsgCancelSwapOut) {
      return {
        typeUrl: "/greenfield.virtualgroup.MsgCancelSwapOut",
        value: MsgCancelSwapOut.fromPartial(value)
      };
    }
  }
};