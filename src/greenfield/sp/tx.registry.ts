//@ts-nocheck
/* eslint-disable */
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateStorageProvider, MsgDeposit, MsgEditStorageProvider, MsgUpdateSpStoragePrice, MsgUpdateStorageProviderStatus, MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/greenfield.sp.MsgCreateStorageProvider", MsgCreateStorageProvider], ["/greenfield.sp.MsgDeposit", MsgDeposit], ["/greenfield.sp.MsgEditStorageProvider", MsgEditStorageProvider], ["/greenfield.sp.MsgUpdateSpStoragePrice", MsgUpdateSpStoragePrice], ["/greenfield.sp.MsgUpdateStorageProviderStatus", MsgUpdateStorageProviderStatus], ["/greenfield.sp.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createStorageProvider(value: MsgCreateStorageProvider) {
      return {
        typeUrl: "/greenfield.sp.MsgCreateStorageProvider",
        value: MsgCreateStorageProvider.encode(value).finish()
      };
    },
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/greenfield.sp.MsgDeposit",
        value: MsgDeposit.encode(value).finish()
      };
    },
    editStorageProvider(value: MsgEditStorageProvider) {
      return {
        typeUrl: "/greenfield.sp.MsgEditStorageProvider",
        value: MsgEditStorageProvider.encode(value).finish()
      };
    },
    updateSpStoragePrice(value: MsgUpdateSpStoragePrice) {
      return {
        typeUrl: "/greenfield.sp.MsgUpdateSpStoragePrice",
        value: MsgUpdateSpStoragePrice.encode(value).finish()
      };
    },
    updateSpStatus(value: MsgUpdateStorageProviderStatus) {
      return {
        typeUrl: "/greenfield.sp.MsgUpdateStorageProviderStatus",
        value: MsgUpdateStorageProviderStatus.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/greenfield.sp.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createStorageProvider(value: MsgCreateStorageProvider) {
      return {
        typeUrl: "/greenfield.sp.MsgCreateStorageProvider",
        value
      };
    },
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/greenfield.sp.MsgDeposit",
        value
      };
    },
    editStorageProvider(value: MsgEditStorageProvider) {
      return {
        typeUrl: "/greenfield.sp.MsgEditStorageProvider",
        value
      };
    },
    updateSpStoragePrice(value: MsgUpdateSpStoragePrice) {
      return {
        typeUrl: "/greenfield.sp.MsgUpdateSpStoragePrice",
        value
      };
    },
    updateSpStatus(value: MsgUpdateStorageProviderStatus) {
      return {
        typeUrl: "/greenfield.sp.MsgUpdateStorageProviderStatus",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/greenfield.sp.MsgUpdateParams",
        value
      };
    }
  },
  toJSON: {
    createStorageProvider(value: MsgCreateStorageProvider) {
      return {
        typeUrl: "/greenfield.sp.MsgCreateStorageProvider",
        value: MsgCreateStorageProvider.toJSON(value)
      };
    },
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/greenfield.sp.MsgDeposit",
        value: MsgDeposit.toJSON(value)
      };
    },
    editStorageProvider(value: MsgEditStorageProvider) {
      return {
        typeUrl: "/greenfield.sp.MsgEditStorageProvider",
        value: MsgEditStorageProvider.toJSON(value)
      };
    },
    updateSpStoragePrice(value: MsgUpdateSpStoragePrice) {
      return {
        typeUrl: "/greenfield.sp.MsgUpdateSpStoragePrice",
        value: MsgUpdateSpStoragePrice.toJSON(value)
      };
    },
    updateSpStatus(value: MsgUpdateStorageProviderStatus) {
      return {
        typeUrl: "/greenfield.sp.MsgUpdateStorageProviderStatus",
        value: MsgUpdateStorageProviderStatus.toJSON(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/greenfield.sp.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value)
      };
    }
  },
  fromJSON: {
    createStorageProvider(value: any) {
      return {
        typeUrl: "/greenfield.sp.MsgCreateStorageProvider",
        value: MsgCreateStorageProvider.fromJSON(value)
      };
    },
    deposit(value: any) {
      return {
        typeUrl: "/greenfield.sp.MsgDeposit",
        value: MsgDeposit.fromJSON(value)
      };
    },
    editStorageProvider(value: any) {
      return {
        typeUrl: "/greenfield.sp.MsgEditStorageProvider",
        value: MsgEditStorageProvider.fromJSON(value)
      };
    },
    updateSpStoragePrice(value: any) {
      return {
        typeUrl: "/greenfield.sp.MsgUpdateSpStoragePrice",
        value: MsgUpdateSpStoragePrice.fromJSON(value)
      };
    },
    updateSpStatus(value: any) {
      return {
        typeUrl: "/greenfield.sp.MsgUpdateStorageProviderStatus",
        value: MsgUpdateStorageProviderStatus.fromJSON(value)
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/greenfield.sp.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    }
  },
  fromPartial: {
    createStorageProvider(value: MsgCreateStorageProvider) {
      return {
        typeUrl: "/greenfield.sp.MsgCreateStorageProvider",
        value: MsgCreateStorageProvider.fromPartial(value)
      };
    },
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/greenfield.sp.MsgDeposit",
        value: MsgDeposit.fromPartial(value)
      };
    },
    editStorageProvider(value: MsgEditStorageProvider) {
      return {
        typeUrl: "/greenfield.sp.MsgEditStorageProvider",
        value: MsgEditStorageProvider.fromPartial(value)
      };
    },
    updateSpStoragePrice(value: MsgUpdateSpStoragePrice) {
      return {
        typeUrl: "/greenfield.sp.MsgUpdateSpStoragePrice",
        value: MsgUpdateSpStoragePrice.fromPartial(value)
      };
    },
    updateSpStatus(value: MsgUpdateStorageProviderStatus) {
      return {
        typeUrl: "/greenfield.sp.MsgUpdateStorageProviderStatus",
        value: MsgUpdateStorageProviderStatus.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/greenfield.sp.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};