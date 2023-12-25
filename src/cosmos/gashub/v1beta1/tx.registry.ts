//@ts-nocheck
/* eslint-disable */
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgSetMsgGasParams } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/cosmos.gashub.v1beta1.MsgUpdateParams", MsgUpdateParams], ["/cosmos.gashub.v1beta1.MsgSetMsgGasParams", MsgSetMsgGasParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.gashub.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    setMsgGasParams(value: MsgSetMsgGasParams) {
      return {
        typeUrl: "/cosmos.gashub.v1beta1.MsgSetMsgGasParams",
        value: MsgSetMsgGasParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.gashub.v1beta1.MsgUpdateParams",
        value
      };
    },
    setMsgGasParams(value: MsgSetMsgGasParams) {
      return {
        typeUrl: "/cosmos.gashub.v1beta1.MsgSetMsgGasParams",
        value
      };
    }
  },
  toJSON: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.gashub.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value)
      };
    },
    setMsgGasParams(value: MsgSetMsgGasParams) {
      return {
        typeUrl: "/cosmos.gashub.v1beta1.MsgSetMsgGasParams",
        value: MsgSetMsgGasParams.toJSON(value)
      };
    }
  },
  fromJSON: {
    updateParams(value: any) {
      return {
        typeUrl: "/cosmos.gashub.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    },
    setMsgGasParams(value: any) {
      return {
        typeUrl: "/cosmos.gashub.v1beta1.MsgSetMsgGasParams",
        value: MsgSetMsgGasParams.fromJSON(value)
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.gashub.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    setMsgGasParams(value: MsgSetMsgGasParams) {
      return {
        typeUrl: "/cosmos.gashub.v1beta1.MsgSetMsgGasParams",
        value: MsgSetMsgGasParams.fromPartial(value)
      };
    }
  }
};