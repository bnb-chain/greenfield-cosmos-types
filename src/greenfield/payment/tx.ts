//@ts-nocheck
/* eslint-disable */
import { Params, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact, Rpc } from "../../helpers";
export const protobufPackage = "greenfield.payment";
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /**
   * params defines the x/payment parameters to update.
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/greenfield.payment.MsgUpdateParams";
  value: Uint8Array;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/** MsgUpdateParamsResponse defines the response structure for executing a MsgUpdateParams message. */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/greenfield.payment.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/** MsgUpdateParamsResponse defines the response structure for executing a MsgUpdateParams message. */
export interface MsgUpdateParamsResponseSDKType {}
export interface MsgCreatePaymentAccount {
  /** creator is the address of the stream account that created the payment account */
  creator: string;
}
export interface MsgCreatePaymentAccountProtoMsg {
  typeUrl: "/greenfield.payment.MsgCreatePaymentAccount";
  value: Uint8Array;
}
export interface MsgCreatePaymentAccountSDKType {
  creator: string;
}
export interface MsgCreatePaymentAccountResponse {}
export interface MsgCreatePaymentAccountResponseProtoMsg {
  typeUrl: "/greenfield.payment.MsgCreatePaymentAccountResponse";
  value: Uint8Array;
}
export interface MsgCreatePaymentAccountResponseSDKType {}
export interface MsgDeposit {
  /** creator is the message signer for MsgDeposit and the address of the account to deposit from */
  creator: string;
  /** to is the address of the account to deposit to */
  to: string;
  /** amount is the amount to deposit */
  amount: string;
}
export interface MsgDepositProtoMsg {
  typeUrl: "/greenfield.payment.MsgDeposit";
  value: Uint8Array;
}
export interface MsgDepositSDKType {
  creator: string;
  to: string;
  amount: string;
}
export interface MsgDepositResponse {}
export interface MsgDepositResponseProtoMsg {
  typeUrl: "/greenfield.payment.MsgDepositResponse";
  value: Uint8Array;
}
export interface MsgDepositResponseSDKType {}
export interface MsgWithdraw {
  /** creator is the message signer for MsgWithdraw and the address of the receive account */
  creator: string;
  /** from is the address of the account to withdraw from */
  from: string;
  /** amount is the amount to withdraw */
  amount: string;
}
export interface MsgWithdrawProtoMsg {
  typeUrl: "/greenfield.payment.MsgWithdraw";
  value: Uint8Array;
}
export interface MsgWithdrawSDKType {
  creator: string;
  from: string;
  amount: string;
}
export interface MsgWithdrawResponse {}
export interface MsgWithdrawResponseProtoMsg {
  typeUrl: "/greenfield.payment.MsgWithdrawResponse";
  value: Uint8Array;
}
export interface MsgWithdrawResponseSDKType {}
export interface MsgDisableRefund {
  /** owner is the message signer for MsgDisableRefund and the address of the payment account owner */
  owner: string;
  /** addr is the address of the payment account to disable refund */
  addr: string;
}
export interface MsgDisableRefundProtoMsg {
  typeUrl: "/greenfield.payment.MsgDisableRefund";
  value: Uint8Array;
}
export interface MsgDisableRefundSDKType {
  owner: string;
  addr: string;
}
export interface MsgDisableRefundResponse {}
export interface MsgDisableRefundResponseProtoMsg {
  typeUrl: "/greenfield.payment.MsgDisableRefundResponse";
  value: Uint8Array;
}
export interface MsgDisableRefundResponseSDKType {}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/greenfield.payment.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromSDK(object: MsgUpdateParamsSDKType): MsgUpdateParams {
    return {
      authority: object?.authority,
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },
  toSDK(message: MsgUpdateParams): MsgUpdateParamsSDKType {
    const obj: any = {};
    obj.authority = message.authority;
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/greenfield.payment.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/greenfield.payment.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromSDK(_: MsgUpdateParamsResponseSDKType): MsgUpdateParamsResponse {
    return {};
  },
  toSDK(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/greenfield.payment.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreatePaymentAccount(): MsgCreatePaymentAccount {
  return {
    creator: ""
  };
}
export const MsgCreatePaymentAccount = {
  typeUrl: "/greenfield.payment.MsgCreatePaymentAccount",
  encode(message: MsgCreatePaymentAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreatePaymentAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePaymentAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreatePaymentAccount {
    return {
      creator: isSet(object.creator) ? String(object.creator) : ""
    };
  },
  toJSON(message: MsgCreatePaymentAccount): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreatePaymentAccount>, I>>(object: I): MsgCreatePaymentAccount {
    const message = createBaseMsgCreatePaymentAccount();
    message.creator = object.creator ?? "";
    return message;
  },
  fromSDK(object: MsgCreatePaymentAccountSDKType): MsgCreatePaymentAccount {
    return {
      creator: object?.creator
    };
  },
  toSDK(message: MsgCreatePaymentAccount): MsgCreatePaymentAccountSDKType {
    const obj: any = {};
    obj.creator = message.creator;
    return obj;
  },
  fromAmino(object: MsgCreatePaymentAccountAmino): MsgCreatePaymentAccount {
    const message = createBaseMsgCreatePaymentAccount();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    return message;
  },
  toAmino(message: MsgCreatePaymentAccount): MsgCreatePaymentAccountAmino {
    const obj: any = {};
    obj.creator = message.creator;
    return obj;
  },
  fromAminoMsg(object: MsgCreatePaymentAccountAminoMsg): MsgCreatePaymentAccount {
    return MsgCreatePaymentAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreatePaymentAccountProtoMsg): MsgCreatePaymentAccount {
    return MsgCreatePaymentAccount.decode(message.value);
  },
  toProto(message: MsgCreatePaymentAccount): Uint8Array {
    return MsgCreatePaymentAccount.encode(message).finish();
  },
  toProtoMsg(message: MsgCreatePaymentAccount): MsgCreatePaymentAccountProtoMsg {
    return {
      typeUrl: "/greenfield.payment.MsgCreatePaymentAccount",
      value: MsgCreatePaymentAccount.encode(message).finish()
    };
  }
};
function createBaseMsgCreatePaymentAccountResponse(): MsgCreatePaymentAccountResponse {
  return {};
}
export const MsgCreatePaymentAccountResponse = {
  typeUrl: "/greenfield.payment.MsgCreatePaymentAccountResponse",
  encode(_: MsgCreatePaymentAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreatePaymentAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePaymentAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgCreatePaymentAccountResponse {
    return {};
  },
  toJSON(_: MsgCreatePaymentAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreatePaymentAccountResponse>, I>>(_: I): MsgCreatePaymentAccountResponse {
    const message = createBaseMsgCreatePaymentAccountResponse();
    return message;
  },
  fromSDK(_: MsgCreatePaymentAccountResponseSDKType): MsgCreatePaymentAccountResponse {
    return {};
  },
  toSDK(_: MsgCreatePaymentAccountResponse): MsgCreatePaymentAccountResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgCreatePaymentAccountResponseAmino): MsgCreatePaymentAccountResponse {
    const message = createBaseMsgCreatePaymentAccountResponse();
    return message;
  },
  toAmino(_: MsgCreatePaymentAccountResponse): MsgCreatePaymentAccountResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreatePaymentAccountResponseAminoMsg): MsgCreatePaymentAccountResponse {
    return MsgCreatePaymentAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreatePaymentAccountResponseProtoMsg): MsgCreatePaymentAccountResponse {
    return MsgCreatePaymentAccountResponse.decode(message.value);
  },
  toProto(message: MsgCreatePaymentAccountResponse): Uint8Array {
    return MsgCreatePaymentAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreatePaymentAccountResponse): MsgCreatePaymentAccountResponseProtoMsg {
    return {
      typeUrl: "/greenfield.payment.MsgCreatePaymentAccountResponse",
      value: MsgCreatePaymentAccountResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeposit(): MsgDeposit {
  return {
    creator: "",
    to: "",
    amount: ""
  };
}
export const MsgDeposit = {
  typeUrl: "/greenfield.payment.MsgDeposit",
  encode(message: MsgDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeposit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.to = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDeposit {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      to: isSet(object.to) ? String(object.to) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  toJSON(message: MsgDeposit): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.to !== undefined && (obj.to = message.to);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeposit>, I>>(object: I): MsgDeposit {
    const message = createBaseMsgDeposit();
    message.creator = object.creator ?? "";
    message.to = object.to ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromSDK(object: MsgDepositSDKType): MsgDeposit {
    return {
      creator: object?.creator,
      to: object?.to,
      amount: object?.amount
    };
  },
  toSDK(message: MsgDeposit): MsgDepositSDKType {
    const obj: any = {};
    obj.creator = message.creator;
    obj.to = message.to;
    obj.amount = message.amount;
    return obj;
  },
  fromAmino(object: MsgDepositAmino): MsgDeposit {
    const message = createBaseMsgDeposit();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: MsgDeposit): MsgDepositAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.to = message.to;
    obj.amount = message.amount;
    return obj;
  },
  fromAminoMsg(object: MsgDepositAminoMsg): MsgDeposit {
    return MsgDeposit.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDepositProtoMsg): MsgDeposit {
    return MsgDeposit.decode(message.value);
  },
  toProto(message: MsgDeposit): Uint8Array {
    return MsgDeposit.encode(message).finish();
  },
  toProtoMsg(message: MsgDeposit): MsgDepositProtoMsg {
    return {
      typeUrl: "/greenfield.payment.MsgDeposit",
      value: MsgDeposit.encode(message).finish()
    };
  }
};
function createBaseMsgDepositResponse(): MsgDepositResponse {
  return {};
}
export const MsgDepositResponse = {
  typeUrl: "/greenfield.payment.MsgDepositResponse",
  encode(_: MsgDepositResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgDepositResponse {
    return {};
  },
  toJSON(_: MsgDepositResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDepositResponse>, I>>(_: I): MsgDepositResponse {
    const message = createBaseMsgDepositResponse();
    return message;
  },
  fromSDK(_: MsgDepositResponseSDKType): MsgDepositResponse {
    return {};
  },
  toSDK(_: MsgDepositResponse): MsgDepositResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgDepositResponseAmino): MsgDepositResponse {
    const message = createBaseMsgDepositResponse();
    return message;
  },
  toAmino(_: MsgDepositResponse): MsgDepositResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDepositResponseAminoMsg): MsgDepositResponse {
    return MsgDepositResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDepositResponseProtoMsg): MsgDepositResponse {
    return MsgDepositResponse.decode(message.value);
  },
  toProto(message: MsgDepositResponse): Uint8Array {
    return MsgDepositResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDepositResponse): MsgDepositResponseProtoMsg {
    return {
      typeUrl: "/greenfield.payment.MsgDepositResponse",
      value: MsgDepositResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdraw(): MsgWithdraw {
  return {
    creator: "",
    from: "",
    amount: ""
  };
}
export const MsgWithdraw = {
  typeUrl: "/greenfield.payment.MsgWithdraw",
  encode(message: MsgWithdraw, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdraw {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdraw();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.from = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdraw {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      from: isSet(object.from) ? String(object.from) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  toJSON(message: MsgWithdraw): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.from !== undefined && (obj.from = message.from);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgWithdraw>, I>>(object: I): MsgWithdraw {
    const message = createBaseMsgWithdraw();
    message.creator = object.creator ?? "";
    message.from = object.from ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromSDK(object: MsgWithdrawSDKType): MsgWithdraw {
    return {
      creator: object?.creator,
      from: object?.from,
      amount: object?.amount
    };
  },
  toSDK(message: MsgWithdraw): MsgWithdrawSDKType {
    const obj: any = {};
    obj.creator = message.creator;
    obj.from = message.from;
    obj.amount = message.amount;
    return obj;
  },
  fromAmino(object: MsgWithdrawAmino): MsgWithdraw {
    const message = createBaseMsgWithdraw();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: MsgWithdraw): MsgWithdrawAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.from = message.from;
    obj.amount = message.amount;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawAminoMsg): MsgWithdraw {
    return MsgWithdraw.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawProtoMsg): MsgWithdraw {
    return MsgWithdraw.decode(message.value);
  },
  toProto(message: MsgWithdraw): Uint8Array {
    return MsgWithdraw.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdraw): MsgWithdrawProtoMsg {
    return {
      typeUrl: "/greenfield.payment.MsgWithdraw",
      value: MsgWithdraw.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawResponse(): MsgWithdrawResponse {
  return {};
}
export const MsgWithdrawResponse = {
  typeUrl: "/greenfield.payment.MsgWithdrawResponse",
  encode(_: MsgWithdrawResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgWithdrawResponse {
    return {};
  },
  toJSON(_: MsgWithdrawResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgWithdrawResponse>, I>>(_: I): MsgWithdrawResponse {
    const message = createBaseMsgWithdrawResponse();
    return message;
  },
  fromSDK(_: MsgWithdrawResponseSDKType): MsgWithdrawResponse {
    return {};
  },
  toSDK(_: MsgWithdrawResponse): MsgWithdrawResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgWithdrawResponseAmino): MsgWithdrawResponse {
    const message = createBaseMsgWithdrawResponse();
    return message;
  },
  toAmino(_: MsgWithdrawResponse): MsgWithdrawResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawResponseAminoMsg): MsgWithdrawResponse {
    return MsgWithdrawResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawResponseProtoMsg): MsgWithdrawResponse {
    return MsgWithdrawResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawResponse): Uint8Array {
    return MsgWithdrawResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawResponse): MsgWithdrawResponseProtoMsg {
    return {
      typeUrl: "/greenfield.payment.MsgWithdrawResponse",
      value: MsgWithdrawResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDisableRefund(): MsgDisableRefund {
  return {
    owner: "",
    addr: ""
  };
}
export const MsgDisableRefund = {
  typeUrl: "/greenfield.payment.MsgDisableRefund",
  encode(message: MsgDisableRefund, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.addr !== "") {
      writer.uint32(18).string(message.addr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDisableRefund {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDisableRefund();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.addr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDisableRefund {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      addr: isSet(object.addr) ? String(object.addr) : ""
    };
  },
  toJSON(message: MsgDisableRefund): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.addr !== undefined && (obj.addr = message.addr);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDisableRefund>, I>>(object: I): MsgDisableRefund {
    const message = createBaseMsgDisableRefund();
    message.owner = object.owner ?? "";
    message.addr = object.addr ?? "";
    return message;
  },
  fromSDK(object: MsgDisableRefundSDKType): MsgDisableRefund {
    return {
      owner: object?.owner,
      addr: object?.addr
    };
  },
  toSDK(message: MsgDisableRefund): MsgDisableRefundSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.addr = message.addr;
    return obj;
  },
  fromAmino(object: MsgDisableRefundAmino): MsgDisableRefund {
    const message = createBaseMsgDisableRefund();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.addr !== undefined && object.addr !== null) {
      message.addr = object.addr;
    }
    return message;
  },
  toAmino(message: MsgDisableRefund): MsgDisableRefundAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.addr = message.addr;
    return obj;
  },
  fromAminoMsg(object: MsgDisableRefundAminoMsg): MsgDisableRefund {
    return MsgDisableRefund.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDisableRefundProtoMsg): MsgDisableRefund {
    return MsgDisableRefund.decode(message.value);
  },
  toProto(message: MsgDisableRefund): Uint8Array {
    return MsgDisableRefund.encode(message).finish();
  },
  toProtoMsg(message: MsgDisableRefund): MsgDisableRefundProtoMsg {
    return {
      typeUrl: "/greenfield.payment.MsgDisableRefund",
      value: MsgDisableRefund.encode(message).finish()
    };
  }
};
function createBaseMsgDisableRefundResponse(): MsgDisableRefundResponse {
  return {};
}
export const MsgDisableRefundResponse = {
  typeUrl: "/greenfield.payment.MsgDisableRefundResponse",
  encode(_: MsgDisableRefundResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDisableRefundResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDisableRefundResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgDisableRefundResponse {
    return {};
  },
  toJSON(_: MsgDisableRefundResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDisableRefundResponse>, I>>(_: I): MsgDisableRefundResponse {
    const message = createBaseMsgDisableRefundResponse();
    return message;
  },
  fromSDK(_: MsgDisableRefundResponseSDKType): MsgDisableRefundResponse {
    return {};
  },
  toSDK(_: MsgDisableRefundResponse): MsgDisableRefundResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgDisableRefundResponseAmino): MsgDisableRefundResponse {
    const message = createBaseMsgDisableRefundResponse();
    return message;
  },
  toAmino(_: MsgDisableRefundResponse): MsgDisableRefundResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDisableRefundResponseAminoMsg): MsgDisableRefundResponse {
    return MsgDisableRefundResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDisableRefundResponseProtoMsg): MsgDisableRefundResponse {
    return MsgDisableRefundResponse.decode(message.value);
  },
  toProto(message: MsgDisableRefundResponse): Uint8Array {
    return MsgDisableRefundResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDisableRefundResponse): MsgDisableRefundResponseProtoMsg {
    return {
      typeUrl: "/greenfield.payment.MsgDisableRefundResponse",
      value: MsgDisableRefundResponse.encode(message).finish()
    };
  }
};
/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a governance operation for updating the x/payment module parameters.
   * The authority is defined in the keeper.
   * 
   * Since: cosmos-sdk 0.47
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  CreatePaymentAccount(request: MsgCreatePaymentAccount): Promise<MsgCreatePaymentAccountResponse>;
  Deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
  Withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse>;
  DisableRefund(request: MsgDisableRefund): Promise<MsgDisableRefundResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.UpdateParams = this.UpdateParams.bind(this);
    this.CreatePaymentAccount = this.CreatePaymentAccount.bind(this);
    this.Deposit = this.Deposit.bind(this);
    this.Withdraw = this.Withdraw.bind(this);
    this.DisableRefund = this.DisableRefund.bind(this);
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("greenfield.payment.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  CreatePaymentAccount(request: MsgCreatePaymentAccount): Promise<MsgCreatePaymentAccountResponse> {
    const data = MsgCreatePaymentAccount.encode(request).finish();
    const promise = this.rpc.request("greenfield.payment.Msg", "CreatePaymentAccount", data);
    return promise.then(data => MsgCreatePaymentAccountResponse.decode(new BinaryReader(data)));
  }
  Deposit(request: MsgDeposit): Promise<MsgDepositResponse> {
    const data = MsgDeposit.encode(request).finish();
    const promise = this.rpc.request("greenfield.payment.Msg", "Deposit", data);
    return promise.then(data => MsgDepositResponse.decode(new BinaryReader(data)));
  }
  Withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse> {
    const data = MsgWithdraw.encode(request).finish();
    const promise = this.rpc.request("greenfield.payment.Msg", "Withdraw", data);
    return promise.then(data => MsgWithdrawResponse.decode(new BinaryReader(data)));
  }
  DisableRefund(request: MsgDisableRefund): Promise<MsgDisableRefundResponse> {
    const data = MsgDisableRefund.encode(request).finish();
    const promise = this.rpc.request("greenfield.payment.Msg", "DisableRefund", data);
    return promise.then(data => MsgDisableRefundResponse.decode(new BinaryReader(data)));
  }
}