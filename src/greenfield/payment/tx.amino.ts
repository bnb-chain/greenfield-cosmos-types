//@ts-nocheck
/* eslint-disable */
import { MsgUpdateParams, MsgCreatePaymentAccount, MsgDeposit, MsgWithdraw, MsgDisableRefund } from "./tx";
export const AminoConverter = {
  "/greenfield.payment.MsgUpdateParams": {
    aminoType: "/greenfield.payment.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/greenfield.payment.MsgCreatePaymentAccount": {
    aminoType: "/greenfield.payment.MsgCreatePaymentAccount",
    toAmino: MsgCreatePaymentAccount.toAmino,
    fromAmino: MsgCreatePaymentAccount.fromAmino
  },
  "/greenfield.payment.MsgDeposit": {
    aminoType: "/greenfield.payment.MsgDeposit",
    toAmino: MsgDeposit.toAmino,
    fromAmino: MsgDeposit.fromAmino
  },
  "/greenfield.payment.MsgWithdraw": {
    aminoType: "/greenfield.payment.MsgWithdraw",
    toAmino: MsgWithdraw.toAmino,
    fromAmino: MsgWithdraw.fromAmino
  },
  "/greenfield.payment.MsgDisableRefund": {
    aminoType: "/greenfield.payment.MsgDisableRefund",
    toAmino: MsgDisableRefund.toAmino,
    fromAmino: MsgDisableRefund.fromAmino
  }
};