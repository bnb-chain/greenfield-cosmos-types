//@ts-nocheck
/* eslint-disable */
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgTransferOut, MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/greenfield.bridge.MsgTransferOut", MsgTransferOut], ["/greenfield.bridge.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    transferOut(value: MsgTransferOut) {
      return {
        typeUrl: "/greenfield.bridge.MsgTransferOut",
        value: MsgTransferOut.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/greenfield.bridge.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    transferOut(value: MsgTransferOut) {
      return {
        typeUrl: "/greenfield.bridge.MsgTransferOut",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/greenfield.bridge.MsgUpdateParams",
        value
      };
    }
  },
  toJSON: {
    transferOut(value: MsgTransferOut) {
      return {
        typeUrl: "/greenfield.bridge.MsgTransferOut",
        value: MsgTransferOut.toJSON(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/greenfield.bridge.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value)
      };
    }
  },
  fromJSON: {
    transferOut(value: any) {
      return {
        typeUrl: "/greenfield.bridge.MsgTransferOut",
        value: MsgTransferOut.fromJSON(value)
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/greenfield.bridge.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    }
  },
  fromPartial: {
    transferOut(value: MsgTransferOut) {
      return {
        typeUrl: "/greenfield.bridge.MsgTransferOut",
        value: MsgTransferOut.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/greenfield.bridge.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};