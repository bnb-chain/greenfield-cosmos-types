//@ts-nocheck
/* eslint-disable */
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgUpdateChannelPermissions, MsgMintModuleTokens } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/cosmos.crosschain.v1.MsgUpdateParams", MsgUpdateParams], ["/cosmos.crosschain.v1.MsgUpdateChannelPermissions", MsgUpdateChannelPermissions], ["/cosmos.crosschain.v1.MsgMintModuleTokens", MsgMintModuleTokens]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.crosschain.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    updateChannelPermissions(value: MsgUpdateChannelPermissions) {
      return {
        typeUrl: "/cosmos.crosschain.v1.MsgUpdateChannelPermissions",
        value: MsgUpdateChannelPermissions.encode(value).finish()
      };
    },
    mintModuleTokens(value: MsgMintModuleTokens) {
      return {
        typeUrl: "/cosmos.crosschain.v1.MsgMintModuleTokens",
        value: MsgMintModuleTokens.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.crosschain.v1.MsgUpdateParams",
        value
      };
    },
    updateChannelPermissions(value: MsgUpdateChannelPermissions) {
      return {
        typeUrl: "/cosmos.crosschain.v1.MsgUpdateChannelPermissions",
        value
      };
    },
    mintModuleTokens(value: MsgMintModuleTokens) {
      return {
        typeUrl: "/cosmos.crosschain.v1.MsgMintModuleTokens",
        value
      };
    }
  },
  toJSON: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.crosschain.v1.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value)
      };
    },
    updateChannelPermissions(value: MsgUpdateChannelPermissions) {
      return {
        typeUrl: "/cosmos.crosschain.v1.MsgUpdateChannelPermissions",
        value: MsgUpdateChannelPermissions.toJSON(value)
      };
    },
    mintModuleTokens(value: MsgMintModuleTokens) {
      return {
        typeUrl: "/cosmos.crosschain.v1.MsgMintModuleTokens",
        value: MsgMintModuleTokens.toJSON(value)
      };
    }
  },
  fromJSON: {
    updateParams(value: any) {
      return {
        typeUrl: "/cosmos.crosschain.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    },
    updateChannelPermissions(value: any) {
      return {
        typeUrl: "/cosmos.crosschain.v1.MsgUpdateChannelPermissions",
        value: MsgUpdateChannelPermissions.fromJSON(value)
      };
    },
    mintModuleTokens(value: any) {
      return {
        typeUrl: "/cosmos.crosschain.v1.MsgMintModuleTokens",
        value: MsgMintModuleTokens.fromJSON(value)
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.crosschain.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    updateChannelPermissions(value: MsgUpdateChannelPermissions) {
      return {
        typeUrl: "/cosmos.crosschain.v1.MsgUpdateChannelPermissions",
        value: MsgUpdateChannelPermissions.fromPartial(value)
      };
    },
    mintModuleTokens(value: MsgMintModuleTokens) {
      return {
        typeUrl: "/cosmos.crosschain.v1.MsgMintModuleTokens",
        value: MsgMintModuleTokens.fromPartial(value)
      };
    }
  }
};