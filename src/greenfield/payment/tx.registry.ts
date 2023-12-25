//@ts-nocheck
/* eslint-disable */
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgCreatePaymentAccount, MsgDeposit, MsgWithdraw, MsgDisableRefund } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/greenfield.payment.MsgUpdateParams", MsgUpdateParams], ["/greenfield.payment.MsgCreatePaymentAccount", MsgCreatePaymentAccount], ["/greenfield.payment.MsgDeposit", MsgDeposit], ["/greenfield.payment.MsgWithdraw", MsgWithdraw], ["/greenfield.payment.MsgDisableRefund", MsgDisableRefund]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/greenfield.payment.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    createPaymentAccount(value: MsgCreatePaymentAccount) {
      return {
        typeUrl: "/greenfield.payment.MsgCreatePaymentAccount",
        value: MsgCreatePaymentAccount.encode(value).finish()
      };
    },
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/greenfield.payment.MsgDeposit",
        value: MsgDeposit.encode(value).finish()
      };
    },
    withdraw(value: MsgWithdraw) {
      return {
        typeUrl: "/greenfield.payment.MsgWithdraw",
        value: MsgWithdraw.encode(value).finish()
      };
    },
    disableRefund(value: MsgDisableRefund) {
      return {
        typeUrl: "/greenfield.payment.MsgDisableRefund",
        value: MsgDisableRefund.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/greenfield.payment.MsgUpdateParams",
        value
      };
    },
    createPaymentAccount(value: MsgCreatePaymentAccount) {
      return {
        typeUrl: "/greenfield.payment.MsgCreatePaymentAccount",
        value
      };
    },
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/greenfield.payment.MsgDeposit",
        value
      };
    },
    withdraw(value: MsgWithdraw) {
      return {
        typeUrl: "/greenfield.payment.MsgWithdraw",
        value
      };
    },
    disableRefund(value: MsgDisableRefund) {
      return {
        typeUrl: "/greenfield.payment.MsgDisableRefund",
        value
      };
    }
  },
  toJSON: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/greenfield.payment.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value)
      };
    },
    createPaymentAccount(value: MsgCreatePaymentAccount) {
      return {
        typeUrl: "/greenfield.payment.MsgCreatePaymentAccount",
        value: MsgCreatePaymentAccount.toJSON(value)
      };
    },
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/greenfield.payment.MsgDeposit",
        value: MsgDeposit.toJSON(value)
      };
    },
    withdraw(value: MsgWithdraw) {
      return {
        typeUrl: "/greenfield.payment.MsgWithdraw",
        value: MsgWithdraw.toJSON(value)
      };
    },
    disableRefund(value: MsgDisableRefund) {
      return {
        typeUrl: "/greenfield.payment.MsgDisableRefund",
        value: MsgDisableRefund.toJSON(value)
      };
    }
  },
  fromJSON: {
    updateParams(value: any) {
      return {
        typeUrl: "/greenfield.payment.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    },
    createPaymentAccount(value: any) {
      return {
        typeUrl: "/greenfield.payment.MsgCreatePaymentAccount",
        value: MsgCreatePaymentAccount.fromJSON(value)
      };
    },
    deposit(value: any) {
      return {
        typeUrl: "/greenfield.payment.MsgDeposit",
        value: MsgDeposit.fromJSON(value)
      };
    },
    withdraw(value: any) {
      return {
        typeUrl: "/greenfield.payment.MsgWithdraw",
        value: MsgWithdraw.fromJSON(value)
      };
    },
    disableRefund(value: any) {
      return {
        typeUrl: "/greenfield.payment.MsgDisableRefund",
        value: MsgDisableRefund.fromJSON(value)
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/greenfield.payment.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    createPaymentAccount(value: MsgCreatePaymentAccount) {
      return {
        typeUrl: "/greenfield.payment.MsgCreatePaymentAccount",
        value: MsgCreatePaymentAccount.fromPartial(value)
      };
    },
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/greenfield.payment.MsgDeposit",
        value: MsgDeposit.fromPartial(value)
      };
    },
    withdraw(value: MsgWithdraw) {
      return {
        typeUrl: "/greenfield.payment.MsgWithdraw",
        value: MsgWithdraw.fromPartial(value)
      };
    },
    disableRefund(value: MsgDisableRefund) {
      return {
        typeUrl: "/greenfield.payment.MsgDisableRefund",
        value: MsgDisableRefund.fromPartial(value)
      };
    }
  }
};