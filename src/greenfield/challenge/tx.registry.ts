//@ts-nocheck
/* eslint-disable */
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSubmit, MsgAttest, MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/greenfield.challenge.MsgSubmit", MsgSubmit], ["/greenfield.challenge.MsgAttest", MsgAttest], ["/greenfield.challenge.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    submit(value: MsgSubmit) {
      return {
        typeUrl: "/greenfield.challenge.MsgSubmit",
        value: MsgSubmit.encode(value).finish()
      };
    },
    attest(value: MsgAttest) {
      return {
        typeUrl: "/greenfield.challenge.MsgAttest",
        value: MsgAttest.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/greenfield.challenge.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    submit(value: MsgSubmit) {
      return {
        typeUrl: "/greenfield.challenge.MsgSubmit",
        value
      };
    },
    attest(value: MsgAttest) {
      return {
        typeUrl: "/greenfield.challenge.MsgAttest",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/greenfield.challenge.MsgUpdateParams",
        value
      };
    }
  },
  toJSON: {
    submit(value: MsgSubmit) {
      return {
        typeUrl: "/greenfield.challenge.MsgSubmit",
        value: MsgSubmit.toJSON(value)
      };
    },
    attest(value: MsgAttest) {
      return {
        typeUrl: "/greenfield.challenge.MsgAttest",
        value: MsgAttest.toJSON(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/greenfield.challenge.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value)
      };
    }
  },
  fromJSON: {
    submit(value: any) {
      return {
        typeUrl: "/greenfield.challenge.MsgSubmit",
        value: MsgSubmit.fromJSON(value)
      };
    },
    attest(value: any) {
      return {
        typeUrl: "/greenfield.challenge.MsgAttest",
        value: MsgAttest.fromJSON(value)
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/greenfield.challenge.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    }
  },
  fromPartial: {
    submit(value: MsgSubmit) {
      return {
        typeUrl: "/greenfield.challenge.MsgSubmit",
        value: MsgSubmit.fromPartial(value)
      };
    },
    attest(value: MsgAttest) {
      return {
        typeUrl: "/greenfield.challenge.MsgAttest",
        value: MsgAttest.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/greenfield.challenge.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};