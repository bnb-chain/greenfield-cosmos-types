/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact, Long, Rpc } from "../../helpers";
export const protobufPackage = "bnbchain.greenfield.payment";
export interface MsgCreatePaymentAccount {
  /** creator is the address of the stream account that created the payment account */
  creator: string;
}
export interface MsgCreatePaymentAccountResponse {}
export interface MsgDeposit {
  /** creator is the message signer for MsgDeposit and the address of the account to deposit from */
  creator: string;
  /** to is the address of the account to deposit to */

  to: string;
  /** amount is the amount to deposit */

  amount: string;
}
export interface MsgDepositResponse {}
export interface MsgWithdraw {
  /** creator is the message signer for MsgWithdraw and the address of the receive account */
  creator: string;
  /** from is the address of the account to withdraw from */

  from: string;
  /** amount is the amount to withdraw */

  amount: string;
}
export interface MsgWithdrawResponse {}
export interface MsgDisableRefund {
  /** owner is the message signer for MsgDisableRefund and the address of the payment account owner */
  owner: string;
  /** addr is the address of the payment account to disable refund */

  addr: string;
}
export interface MsgDisableRefundResponse {}
export interface MsgMockCreateBucket {
  operator: string;
  bucketName: string;
  readPaymentAccount: string;
  storePaymentAccount: string;
  spAddress: string;
  readPacket: string;
}
export interface MsgMockCreateBucketResponse {}
export interface MsgMockPutObject {
  owner: string;
  bucketName: string;
  objectName: string;
  size: Long;
}
export interface MsgMockPutObjectResponse {}
export interface MsgMockSealObject {
  operator: string;
  bucketName: string;
  objectName: string;
  secondarySPs: string[];
}
export interface MsgMockSealObjectResponse {}
export interface MsgMockDeleteObject {
  operator: string;
  bucketName: string;
  objectName: string;
}
export interface MsgMockDeleteObjectResponse {}
export interface MsgMockSetBucketPaymentAccount {
  operator: string;
  bucketName: string;
  readPaymentAccount: string;
  storePaymentAccount: string;
}
export interface MsgMockSetBucketPaymentAccountResponse {}
export interface MsgMockUpdateBucketReadPacket {
  operator: string;
  bucketName: string;
  readPacket: string;
}
export interface MsgMockUpdateBucketReadPacketResponse {}

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
  }

};

function createBaseMsgMockCreateBucket(): MsgMockCreateBucket {
  return {
    operator: "",
    bucketName: "",
    readPaymentAccount: "",
    storePaymentAccount: "",
    spAddress: "",
    readPacket: ""
  };
}

export const MsgMockCreateBucket = {
  encode(message: MsgMockCreateBucket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }

    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }

    if (message.readPaymentAccount !== "") {
      writer.uint32(26).string(message.readPaymentAccount);
    }

    if (message.storePaymentAccount !== "") {
      writer.uint32(34).string(message.storePaymentAccount);
    }

    if (message.spAddress !== "") {
      writer.uint32(42).string(message.spAddress);
    }

    if (message.readPacket !== "") {
      writer.uint32(50).string(message.readPacket);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMockCreateBucket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMockCreateBucket();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;

        case 2:
          message.bucketName = reader.string();
          break;

        case 3:
          message.readPaymentAccount = reader.string();
          break;

        case 4:
          message.storePaymentAccount = reader.string();
          break;

        case 5:
          message.spAddress = reader.string();
          break;

        case 6:
          message.readPacket = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgMockCreateBucket {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      readPaymentAccount: isSet(object.readPaymentAccount) ? String(object.readPaymentAccount) : "",
      storePaymentAccount: isSet(object.storePaymentAccount) ? String(object.storePaymentAccount) : "",
      spAddress: isSet(object.spAddress) ? String(object.spAddress) : "",
      readPacket: isSet(object.readPacket) ? String(object.readPacket) : ""
    };
  },

  toJSON(message: MsgMockCreateBucket): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.readPaymentAccount !== undefined && (obj.readPaymentAccount = message.readPaymentAccount);
    message.storePaymentAccount !== undefined && (obj.storePaymentAccount = message.storePaymentAccount);
    message.spAddress !== undefined && (obj.spAddress = message.spAddress);
    message.readPacket !== undefined && (obj.readPacket = message.readPacket);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMockCreateBucket>, I>>(object: I): MsgMockCreateBucket {
    const message = createBaseMsgMockCreateBucket();
    message.operator = object.operator ?? "";
    message.bucketName = object.bucketName ?? "";
    message.readPaymentAccount = object.readPaymentAccount ?? "";
    message.storePaymentAccount = object.storePaymentAccount ?? "";
    message.spAddress = object.spAddress ?? "";
    message.readPacket = object.readPacket ?? "";
    return message;
  }

};

function createBaseMsgMockCreateBucketResponse(): MsgMockCreateBucketResponse {
  return {};
}

export const MsgMockCreateBucketResponse = {
  encode(_: MsgMockCreateBucketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMockCreateBucketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMockCreateBucketResponse();

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

  fromJSON(_: any): MsgMockCreateBucketResponse {
    return {};
  },

  toJSON(_: MsgMockCreateBucketResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMockCreateBucketResponse>, I>>(_: I): MsgMockCreateBucketResponse {
    const message = createBaseMsgMockCreateBucketResponse();
    return message;
  }

};

function createBaseMsgMockPutObject(): MsgMockPutObject {
  return {
    owner: "",
    bucketName: "",
    objectName: "",
    size: Long.UZERO
  };
}

export const MsgMockPutObject = {
  encode(message: MsgMockPutObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }

    if (message.objectName !== "") {
      writer.uint32(26).string(message.objectName);
    }

    if (!message.size.isZero()) {
      writer.uint32(32).uint64(message.size);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMockPutObject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMockPutObject();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.bucketName = reader.string();
          break;

        case 3:
          message.objectName = reader.string();
          break;

        case 4:
          message.size = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgMockPutObject {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      objectName: isSet(object.objectName) ? String(object.objectName) : "",
      size: isSet(object.size) ? Long.fromValue(object.size) : Long.UZERO
    };
  },

  toJSON(message: MsgMockPutObject): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.objectName !== undefined && (obj.objectName = message.objectName);
    message.size !== undefined && (obj.size = (message.size || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMockPutObject>, I>>(object: I): MsgMockPutObject {
    const message = createBaseMsgMockPutObject();
    message.owner = object.owner ?? "";
    message.bucketName = object.bucketName ?? "";
    message.objectName = object.objectName ?? "";
    message.size = object.size !== undefined && object.size !== null ? Long.fromValue(object.size) : Long.UZERO;
    return message;
  }

};

function createBaseMsgMockPutObjectResponse(): MsgMockPutObjectResponse {
  return {};
}

export const MsgMockPutObjectResponse = {
  encode(_: MsgMockPutObjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMockPutObjectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMockPutObjectResponse();

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

  fromJSON(_: any): MsgMockPutObjectResponse {
    return {};
  },

  toJSON(_: MsgMockPutObjectResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMockPutObjectResponse>, I>>(_: I): MsgMockPutObjectResponse {
    const message = createBaseMsgMockPutObjectResponse();
    return message;
  }

};

function createBaseMsgMockSealObject(): MsgMockSealObject {
  return {
    operator: "",
    bucketName: "",
    objectName: "",
    secondarySPs: []
  };
}

export const MsgMockSealObject = {
  encode(message: MsgMockSealObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }

    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }

    if (message.objectName !== "") {
      writer.uint32(26).string(message.objectName);
    }

    for (const v of message.secondarySPs) {
      writer.uint32(34).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMockSealObject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMockSealObject();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;

        case 2:
          message.bucketName = reader.string();
          break;

        case 3:
          message.objectName = reader.string();
          break;

        case 4:
          message.secondarySPs.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgMockSealObject {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      objectName: isSet(object.objectName) ? String(object.objectName) : "",
      secondarySPs: Array.isArray(object?.secondarySPs) ? object.secondarySPs.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: MsgMockSealObject): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.objectName !== undefined && (obj.objectName = message.objectName);

    if (message.secondarySPs) {
      obj.secondarySPs = message.secondarySPs.map(e => e);
    } else {
      obj.secondarySPs = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMockSealObject>, I>>(object: I): MsgMockSealObject {
    const message = createBaseMsgMockSealObject();
    message.operator = object.operator ?? "";
    message.bucketName = object.bucketName ?? "";
    message.objectName = object.objectName ?? "";
    message.secondarySPs = object.secondarySPs?.map(e => e) || [];
    return message;
  }

};

function createBaseMsgMockSealObjectResponse(): MsgMockSealObjectResponse {
  return {};
}

export const MsgMockSealObjectResponse = {
  encode(_: MsgMockSealObjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMockSealObjectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMockSealObjectResponse();

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

  fromJSON(_: any): MsgMockSealObjectResponse {
    return {};
  },

  toJSON(_: MsgMockSealObjectResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMockSealObjectResponse>, I>>(_: I): MsgMockSealObjectResponse {
    const message = createBaseMsgMockSealObjectResponse();
    return message;
  }

};

function createBaseMsgMockDeleteObject(): MsgMockDeleteObject {
  return {
    operator: "",
    bucketName: "",
    objectName: ""
  };
}

export const MsgMockDeleteObject = {
  encode(message: MsgMockDeleteObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }

    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }

    if (message.objectName !== "") {
      writer.uint32(26).string(message.objectName);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMockDeleteObject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMockDeleteObject();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;

        case 2:
          message.bucketName = reader.string();
          break;

        case 3:
          message.objectName = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgMockDeleteObject {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      objectName: isSet(object.objectName) ? String(object.objectName) : ""
    };
  },

  toJSON(message: MsgMockDeleteObject): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.objectName !== undefined && (obj.objectName = message.objectName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMockDeleteObject>, I>>(object: I): MsgMockDeleteObject {
    const message = createBaseMsgMockDeleteObject();
    message.operator = object.operator ?? "";
    message.bucketName = object.bucketName ?? "";
    message.objectName = object.objectName ?? "";
    return message;
  }

};

function createBaseMsgMockDeleteObjectResponse(): MsgMockDeleteObjectResponse {
  return {};
}

export const MsgMockDeleteObjectResponse = {
  encode(_: MsgMockDeleteObjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMockDeleteObjectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMockDeleteObjectResponse();

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

  fromJSON(_: any): MsgMockDeleteObjectResponse {
    return {};
  },

  toJSON(_: MsgMockDeleteObjectResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMockDeleteObjectResponse>, I>>(_: I): MsgMockDeleteObjectResponse {
    const message = createBaseMsgMockDeleteObjectResponse();
    return message;
  }

};

function createBaseMsgMockSetBucketPaymentAccount(): MsgMockSetBucketPaymentAccount {
  return {
    operator: "",
    bucketName: "",
    readPaymentAccount: "",
    storePaymentAccount: ""
  };
}

export const MsgMockSetBucketPaymentAccount = {
  encode(message: MsgMockSetBucketPaymentAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }

    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }

    if (message.readPaymentAccount !== "") {
      writer.uint32(26).string(message.readPaymentAccount);
    }

    if (message.storePaymentAccount !== "") {
      writer.uint32(34).string(message.storePaymentAccount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMockSetBucketPaymentAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMockSetBucketPaymentAccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;

        case 2:
          message.bucketName = reader.string();
          break;

        case 3:
          message.readPaymentAccount = reader.string();
          break;

        case 4:
          message.storePaymentAccount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgMockSetBucketPaymentAccount {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      readPaymentAccount: isSet(object.readPaymentAccount) ? String(object.readPaymentAccount) : "",
      storePaymentAccount: isSet(object.storePaymentAccount) ? String(object.storePaymentAccount) : ""
    };
  },

  toJSON(message: MsgMockSetBucketPaymentAccount): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.readPaymentAccount !== undefined && (obj.readPaymentAccount = message.readPaymentAccount);
    message.storePaymentAccount !== undefined && (obj.storePaymentAccount = message.storePaymentAccount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMockSetBucketPaymentAccount>, I>>(object: I): MsgMockSetBucketPaymentAccount {
    const message = createBaseMsgMockSetBucketPaymentAccount();
    message.operator = object.operator ?? "";
    message.bucketName = object.bucketName ?? "";
    message.readPaymentAccount = object.readPaymentAccount ?? "";
    message.storePaymentAccount = object.storePaymentAccount ?? "";
    return message;
  }

};

function createBaseMsgMockSetBucketPaymentAccountResponse(): MsgMockSetBucketPaymentAccountResponse {
  return {};
}

export const MsgMockSetBucketPaymentAccountResponse = {
  encode(_: MsgMockSetBucketPaymentAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMockSetBucketPaymentAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMockSetBucketPaymentAccountResponse();

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

  fromJSON(_: any): MsgMockSetBucketPaymentAccountResponse {
    return {};
  },

  toJSON(_: MsgMockSetBucketPaymentAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMockSetBucketPaymentAccountResponse>, I>>(_: I): MsgMockSetBucketPaymentAccountResponse {
    const message = createBaseMsgMockSetBucketPaymentAccountResponse();
    return message;
  }

};

function createBaseMsgMockUpdateBucketReadPacket(): MsgMockUpdateBucketReadPacket {
  return {
    operator: "",
    bucketName: "",
    readPacket: ""
  };
}

export const MsgMockUpdateBucketReadPacket = {
  encode(message: MsgMockUpdateBucketReadPacket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }

    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }

    if (message.readPacket !== "") {
      writer.uint32(26).string(message.readPacket);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMockUpdateBucketReadPacket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMockUpdateBucketReadPacket();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;

        case 2:
          message.bucketName = reader.string();
          break;

        case 3:
          message.readPacket = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgMockUpdateBucketReadPacket {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      readPacket: isSet(object.readPacket) ? String(object.readPacket) : ""
    };
  },

  toJSON(message: MsgMockUpdateBucketReadPacket): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.readPacket !== undefined && (obj.readPacket = message.readPacket);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMockUpdateBucketReadPacket>, I>>(object: I): MsgMockUpdateBucketReadPacket {
    const message = createBaseMsgMockUpdateBucketReadPacket();
    message.operator = object.operator ?? "";
    message.bucketName = object.bucketName ?? "";
    message.readPacket = object.readPacket ?? "";
    return message;
  }

};

function createBaseMsgMockUpdateBucketReadPacketResponse(): MsgMockUpdateBucketReadPacketResponse {
  return {};
}

export const MsgMockUpdateBucketReadPacketResponse = {
  encode(_: MsgMockUpdateBucketReadPacketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMockUpdateBucketReadPacketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMockUpdateBucketReadPacketResponse();

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

  fromJSON(_: any): MsgMockUpdateBucketReadPacketResponse {
    return {};
  },

  toJSON(_: MsgMockUpdateBucketReadPacketResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMockUpdateBucketReadPacketResponse>, I>>(_: I): MsgMockUpdateBucketReadPacketResponse {
    const message = createBaseMsgMockUpdateBucketReadPacketResponse();
    return message;
  }

};
/** Msg defines the Msg service. */

export interface Msg {
  CreatePaymentAccount(request: MsgCreatePaymentAccount): Promise<MsgCreatePaymentAccountResponse>;
  Deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
  Withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse>;
  DisableRefund(request: MsgDisableRefund): Promise<MsgDisableRefundResponse>;
  MockCreateBucket(request: MsgMockCreateBucket): Promise<MsgMockCreateBucketResponse>;
  MockPutObject(request: MsgMockPutObject): Promise<MsgMockPutObjectResponse>;
  MockSealObject(request: MsgMockSealObject): Promise<MsgMockSealObjectResponse>;
  MockDeleteObject(request: MsgMockDeleteObject): Promise<MsgMockDeleteObjectResponse>;
  MockSetBucketPaymentAccount(request: MsgMockSetBucketPaymentAccount): Promise<MsgMockSetBucketPaymentAccountResponse>;
  MockUpdateBucketReadPacket(request: MsgMockUpdateBucketReadPacket): Promise<MsgMockUpdateBucketReadPacketResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreatePaymentAccount = this.CreatePaymentAccount.bind(this);
    this.Deposit = this.Deposit.bind(this);
    this.Withdraw = this.Withdraw.bind(this);
    this.DisableRefund = this.DisableRefund.bind(this);
    this.MockCreateBucket = this.MockCreateBucket.bind(this);
    this.MockPutObject = this.MockPutObject.bind(this);
    this.MockSealObject = this.MockSealObject.bind(this);
    this.MockDeleteObject = this.MockDeleteObject.bind(this);
    this.MockSetBucketPaymentAccount = this.MockSetBucketPaymentAccount.bind(this);
    this.MockUpdateBucketReadPacket = this.MockUpdateBucketReadPacket.bind(this);
  }

  CreatePaymentAccount(request: MsgCreatePaymentAccount): Promise<MsgCreatePaymentAccountResponse> {
    const data = MsgCreatePaymentAccount.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.payment.Msg", "CreatePaymentAccount", data);
    return promise.then(data => MsgCreatePaymentAccountResponse.decode(new _m0.Reader(data)));
  }

  Deposit(request: MsgDeposit): Promise<MsgDepositResponse> {
    const data = MsgDeposit.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.payment.Msg", "Deposit", data);
    return promise.then(data => MsgDepositResponse.decode(new _m0.Reader(data)));
  }

  Withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse> {
    const data = MsgWithdraw.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.payment.Msg", "Withdraw", data);
    return promise.then(data => MsgWithdrawResponse.decode(new _m0.Reader(data)));
  }

  DisableRefund(request: MsgDisableRefund): Promise<MsgDisableRefundResponse> {
    const data = MsgDisableRefund.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.payment.Msg", "DisableRefund", data);
    return promise.then(data => MsgDisableRefundResponse.decode(new _m0.Reader(data)));
  }

  MockCreateBucket(request: MsgMockCreateBucket): Promise<MsgMockCreateBucketResponse> {
    const data = MsgMockCreateBucket.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.payment.Msg", "MockCreateBucket", data);
    return promise.then(data => MsgMockCreateBucketResponse.decode(new _m0.Reader(data)));
  }

  MockPutObject(request: MsgMockPutObject): Promise<MsgMockPutObjectResponse> {
    const data = MsgMockPutObject.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.payment.Msg", "MockPutObject", data);
    return promise.then(data => MsgMockPutObjectResponse.decode(new _m0.Reader(data)));
  }

  MockSealObject(request: MsgMockSealObject): Promise<MsgMockSealObjectResponse> {
    const data = MsgMockSealObject.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.payment.Msg", "MockSealObject", data);
    return promise.then(data => MsgMockSealObjectResponse.decode(new _m0.Reader(data)));
  }

  MockDeleteObject(request: MsgMockDeleteObject): Promise<MsgMockDeleteObjectResponse> {
    const data = MsgMockDeleteObject.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.payment.Msg", "MockDeleteObject", data);
    return promise.then(data => MsgMockDeleteObjectResponse.decode(new _m0.Reader(data)));
  }

  MockSetBucketPaymentAccount(request: MsgMockSetBucketPaymentAccount): Promise<MsgMockSetBucketPaymentAccountResponse> {
    const data = MsgMockSetBucketPaymentAccount.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.payment.Msg", "MockSetBucketPaymentAccount", data);
    return promise.then(data => MsgMockSetBucketPaymentAccountResponse.decode(new _m0.Reader(data)));
  }

  MockUpdateBucketReadPacket(request: MsgMockUpdateBucketReadPacket): Promise<MsgMockUpdateBucketReadPacketResponse> {
    const data = MsgMockUpdateBucketReadPacket.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.payment.Msg", "MockUpdateBucketReadPacket", data);
    return promise.then(data => MsgMockUpdateBucketReadPacketResponse.decode(new _m0.Reader(data)));
  }

}