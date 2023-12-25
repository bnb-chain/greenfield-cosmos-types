//@ts-nocheck
/* eslint-disable */
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUnjail, MsgUpdateParams, MsgImpeach } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/cosmos.slashing.v1beta1.MsgUnjail", MsgUnjail], ["/cosmos.slashing.v1beta1.MsgUpdateParams", MsgUpdateParams], ["/cosmos.slashing.v1beta1.MsgImpeach", MsgImpeach]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    unjail(value: MsgUnjail) {
      return {
        typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
        value: MsgUnjail.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.slashing.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    impeach(value: MsgImpeach) {
      return {
        typeUrl: "/cosmos.slashing.v1beta1.MsgImpeach",
        value: MsgImpeach.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    unjail(value: MsgUnjail) {
      return {
        typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.slashing.v1beta1.MsgUpdateParams",
        value
      };
    },
    impeach(value: MsgImpeach) {
      return {
        typeUrl: "/cosmos.slashing.v1beta1.MsgImpeach",
        value
      };
    }
  },
  toJSON: {
    unjail(value: MsgUnjail) {
      return {
        typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
        value: MsgUnjail.toJSON(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.slashing.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value)
      };
    },
    impeach(value: MsgImpeach) {
      return {
        typeUrl: "/cosmos.slashing.v1beta1.MsgImpeach",
        value: MsgImpeach.toJSON(value)
      };
    }
  },
  fromJSON: {
    unjail(value: any) {
      return {
        typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
        value: MsgUnjail.fromJSON(value)
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/cosmos.slashing.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    },
    impeach(value: any) {
      return {
        typeUrl: "/cosmos.slashing.v1beta1.MsgImpeach",
        value: MsgImpeach.fromJSON(value)
      };
    }
  },
  fromPartial: {
    unjail(value: MsgUnjail) {
      return {
        typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
        value: MsgUnjail.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.slashing.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    impeach(value: MsgImpeach) {
      return {
        typeUrl: "/cosmos.slashing.v1beta1.MsgImpeach",
        value: MsgImpeach.fromPartial(value)
      };
    }
  }
};