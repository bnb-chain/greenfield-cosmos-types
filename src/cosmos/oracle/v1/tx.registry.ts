//@ts-nocheck
/* eslint-disable */
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgClaim, MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/cosmos.oracle.v1.MsgClaim", MsgClaim], ["/cosmos.oracle.v1.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    claim(value: MsgClaim) {
      return {
        typeUrl: "/cosmos.oracle.v1.MsgClaim",
        value: MsgClaim.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.oracle.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    claim(value: MsgClaim) {
      return {
        typeUrl: "/cosmos.oracle.v1.MsgClaim",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.oracle.v1.MsgUpdateParams",
        value
      };
    }
  },
  toJSON: {
    claim(value: MsgClaim) {
      return {
        typeUrl: "/cosmos.oracle.v1.MsgClaim",
        value: MsgClaim.toJSON(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.oracle.v1.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value)
      };
    }
  },
  fromJSON: {
    claim(value: any) {
      return {
        typeUrl: "/cosmos.oracle.v1.MsgClaim",
        value: MsgClaim.fromJSON(value)
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/cosmos.oracle.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    }
  },
  fromPartial: {
    claim(value: MsgClaim) {
      return {
        typeUrl: "/cosmos.oracle.v1.MsgClaim",
        value: MsgClaim.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.oracle.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};