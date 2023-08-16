//@ts-nocheck
/* eslint-disable */
import { Params, ParamsSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
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
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/** MsgUpdateParamsResponse defines the response structure for executing a MsgUpdateParams message. */
export interface MsgUpdateParamsResponse {}
/** MsgUpdateParamsResponse defines the response structure for executing a MsgUpdateParams message. */
export interface MsgUpdateParamsResponseSDKType {}
export interface MsgCreatePaymentAccount {
  /** creator is the address of the stream account that created the payment account */
  creator: string;
}
export interface MsgCreatePaymentAccountSDKType {
  creator: string;
}
export interface MsgCreatePaymentAccountResponse {}
export interface MsgCreatePaymentAccountResponseSDKType {}
export interface MsgDeposit {
  /** creator is the message signer for MsgDeposit and the address of the account to deposit from */
  creator: string;
  /** to is the address of the account to deposit to */
  to: string;
  /** amount is the amount to deposit */
  amount: string;
}
export interface MsgDepositSDKType {
  creator: string;
  to: string;
  amount: string;
}
export interface MsgDepositResponse {}
export interface MsgDepositResponseSDKType {}
export interface MsgWithdraw {
  /** creator is the message signer for MsgWithdraw and the address of the receive account */
  creator: string;
  /** from is the address of the account to withdraw from */
  from: string;
  /** amount is the amount to withdraw */
  amount: string;
}
export interface MsgWithdrawSDKType {
  creator: string;
  from: string;
  amount: string;
}
export interface MsgWithdrawResponse {}
export interface MsgWithdrawResponseSDKType {}
export interface MsgDisableRefund {
  /** owner is the message signer for MsgDisableRefund and the address of the payment account owner */
  owner: string;
  /** addr is the address of the payment account to disable refund */
  addr: string;
}
export interface MsgDisableRefundSDKType {
  owner: string;
  addr: string;
}
export interface MsgDisableRefundResponse {}
export interface MsgDisableRefundResponseSDKType {}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }
};
function createBaseMsgCreatePaymentAccount(): MsgCreatePaymentAccount {
  return {
    creator: ""
  };
}
export const MsgCreatePaymentAccount = {
  encode(message: MsgCreatePaymentAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePaymentAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }
};
function createBaseMsgCreatePaymentAccountResponse(): MsgCreatePaymentAccountResponse {
  return {};
}
export const MsgCreatePaymentAccountResponse = {
  encode(_: MsgCreatePaymentAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePaymentAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  encode(message: MsgDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }
};
function createBaseMsgDepositResponse(): MsgDepositResponse {
  return {};
}
export const MsgDepositResponse = {
  encode(_: MsgDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  encode(message: MsgWithdraw, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdraw {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }
};
function createBaseMsgWithdrawResponse(): MsgWithdrawResponse {
  return {};
}
export const MsgWithdrawResponse = {
  encode(_: MsgWithdrawResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }
};
function createBaseMsgDisableRefund(): MsgDisableRefund {
  return {
    owner: "",
    addr: ""
  };
}
export const MsgDisableRefund = {
  encode(message: MsgDisableRefund, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.addr !== "") {
      writer.uint32(18).string(message.addr);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDisableRefund {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }
};
function createBaseMsgDisableRefundResponse(): MsgDisableRefundResponse {
  return {};
}
export const MsgDisableRefundResponse = {
  encode(_: MsgDisableRefundResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDisableRefundResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return promise.then(data => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
  }
  CreatePaymentAccount(request: MsgCreatePaymentAccount): Promise<MsgCreatePaymentAccountResponse> {
    const data = MsgCreatePaymentAccount.encode(request).finish();
    const promise = this.rpc.request("greenfield.payment.Msg", "CreatePaymentAccount", data);
    return promise.then(data => MsgCreatePaymentAccountResponse.decode(new _m0.Reader(data)));
  }
  Deposit(request: MsgDeposit): Promise<MsgDepositResponse> {
    const data = MsgDeposit.encode(request).finish();
    const promise = this.rpc.request("greenfield.payment.Msg", "Deposit", data);
    return promise.then(data => MsgDepositResponse.decode(new _m0.Reader(data)));
  }
  Withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse> {
    const data = MsgWithdraw.encode(request).finish();
    const promise = this.rpc.request("greenfield.payment.Msg", "Withdraw", data);
    return promise.then(data => MsgWithdrawResponse.decode(new _m0.Reader(data)));
  }
  DisableRefund(request: MsgDisableRefund): Promise<MsgDisableRefundResponse> {
    const data = MsgDisableRefund.encode(request).finish();
    const promise = this.rpc.request("greenfield.payment.Msg", "DisableRefund", data);
    return promise.then(data => MsgDisableRefundResponse.decode(new _m0.Reader(data)));
  }
}