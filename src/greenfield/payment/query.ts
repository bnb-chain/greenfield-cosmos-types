/* eslint-disable */
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { StreamRecord } from "./stream_record";
import { PaymentAccountCount } from "./payment_account_count";
import { PaymentAccount } from "./payment_account";
import { AutoSettleRecord } from "./auto_settle_record";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Exact, isSet, Long, Rpc } from "../../helpers";
export const protobufPackage = "bnbchain.greenfield.payment";
/** QueryParamsRequest is request type for the Query/Params RPC method. */

export interface QueryParamsRequest {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */

export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}
export interface QueryGetStreamRecordRequest {
  account: string;
}
export interface QueryGetStreamRecordResponse {
  streamRecord?: StreamRecord;
}
export interface QueryAllStreamRecordRequest {
  pagination?: PageRequest;
}
export interface QueryAllStreamRecordResponse {
  streamRecord: StreamRecord[];
  pagination?: PageResponse;
}
export interface QueryGetPaymentAccountCountRequest {
  owner: string;
}
export interface QueryGetPaymentAccountCountResponse {
  paymentAccountCount?: PaymentAccountCount;
}
export interface QueryAllPaymentAccountCountRequest {
  pagination?: PageRequest;
}
export interface QueryAllPaymentAccountCountResponse {
  paymentAccountCount: PaymentAccountCount[];
  pagination?: PageResponse;
}
export interface QueryGetPaymentAccountRequest {
  addr: string;
}
export interface QueryGetPaymentAccountResponse {
  paymentAccount?: PaymentAccount;
}
export interface QueryAllPaymentAccountRequest {
  pagination?: PageRequest;
}
export interface QueryAllPaymentAccountResponse {
  paymentAccount: PaymentAccount[];
  pagination?: PageResponse;
}
export interface QueryDynamicBalanceRequest {
  account: string;
}
export interface QueryDynamicBalanceResponse {
  dynamicBalance: string;
  streamRecord?: StreamRecord;
  currentTimestamp: Long;
}
export interface QueryGetPaymentAccountsByOwnerRequest {
  owner: string;
}
export interface QueryGetPaymentAccountsByOwnerResponse {
  paymentAccounts: string[];
}
export interface QueryGetAutoSettleRecordRequest {
  timestamp: Long;
  addr: string;
}
export interface QueryGetAutoSettleRecordResponse {
  autoSettleRecord?: AutoSettleRecord;
}
export interface QueryAllAutoSettleRecordRequest {
  pagination?: PageRequest;
}
export interface QueryAllAutoSettleRecordResponse {
  autoSettleRecord: AutoSettleRecord[];
  pagination?: PageResponse;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();

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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }

};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};

function createBaseQueryGetStreamRecordRequest(): QueryGetStreamRecordRequest {
  return {
    account: ""
  };
}

export const QueryGetStreamRecordRequest = {
  encode(message: QueryGetStreamRecordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetStreamRecordRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetStreamRecordRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetStreamRecordRequest {
    return {
      account: isSet(object.account) ? String(object.account) : ""
    };
  },

  toJSON(message: QueryGetStreamRecordRequest): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetStreamRecordRequest>, I>>(object: I): QueryGetStreamRecordRequest {
    const message = createBaseQueryGetStreamRecordRequest();
    message.account = object.account ?? "";
    return message;
  }

};

function createBaseQueryGetStreamRecordResponse(): QueryGetStreamRecordResponse {
  return {
    streamRecord: undefined
  };
}

export const QueryGetStreamRecordResponse = {
  encode(message: QueryGetStreamRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.streamRecord !== undefined) {
      StreamRecord.encode(message.streamRecord, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetStreamRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetStreamRecordResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.streamRecord = StreamRecord.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetStreamRecordResponse {
    return {
      streamRecord: isSet(object.streamRecord) ? StreamRecord.fromJSON(object.streamRecord) : undefined
    };
  },

  toJSON(message: QueryGetStreamRecordResponse): unknown {
    const obj: any = {};
    message.streamRecord !== undefined && (obj.streamRecord = message.streamRecord ? StreamRecord.toJSON(message.streamRecord) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetStreamRecordResponse>, I>>(object: I): QueryGetStreamRecordResponse {
    const message = createBaseQueryGetStreamRecordResponse();
    message.streamRecord = object.streamRecord !== undefined && object.streamRecord !== null ? StreamRecord.fromPartial(object.streamRecord) : undefined;
    return message;
  }

};

function createBaseQueryAllStreamRecordRequest(): QueryAllStreamRecordRequest {
  return {
    pagination: undefined
  };
}

export const QueryAllStreamRecordRequest = {
  encode(message: QueryAllStreamRecordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllStreamRecordRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStreamRecordRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAllStreamRecordRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAllStreamRecordRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllStreamRecordRequest>, I>>(object: I): QueryAllStreamRecordRequest {
    const message = createBaseQueryAllStreamRecordRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAllStreamRecordResponse(): QueryAllStreamRecordResponse {
  return {
    streamRecord: [],
    pagination: undefined
  };
}

export const QueryAllStreamRecordResponse = {
  encode(message: QueryAllStreamRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.streamRecord) {
      StreamRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllStreamRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStreamRecordResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.streamRecord.push(StreamRecord.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAllStreamRecordResponse {
    return {
      streamRecord: Array.isArray(object?.streamRecord) ? object.streamRecord.map((e: any) => StreamRecord.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAllStreamRecordResponse): unknown {
    const obj: any = {};

    if (message.streamRecord) {
      obj.streamRecord = message.streamRecord.map(e => e ? StreamRecord.toJSON(e) : undefined);
    } else {
      obj.streamRecord = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllStreamRecordResponse>, I>>(object: I): QueryAllStreamRecordResponse {
    const message = createBaseQueryAllStreamRecordResponse();
    message.streamRecord = object.streamRecord?.map(e => StreamRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryGetPaymentAccountCountRequest(): QueryGetPaymentAccountCountRequest {
  return {
    owner: ""
  };
}

export const QueryGetPaymentAccountCountRequest = {
  encode(message: QueryGetPaymentAccountCountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPaymentAccountCountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPaymentAccountCountRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetPaymentAccountCountRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },

  toJSON(message: QueryGetPaymentAccountCountRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPaymentAccountCountRequest>, I>>(object: I): QueryGetPaymentAccountCountRequest {
    const message = createBaseQueryGetPaymentAccountCountRequest();
    message.owner = object.owner ?? "";
    return message;
  }

};

function createBaseQueryGetPaymentAccountCountResponse(): QueryGetPaymentAccountCountResponse {
  return {
    paymentAccountCount: undefined
  };
}

export const QueryGetPaymentAccountCountResponse = {
  encode(message: QueryGetPaymentAccountCountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.paymentAccountCount !== undefined) {
      PaymentAccountCount.encode(message.paymentAccountCount, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPaymentAccountCountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPaymentAccountCountResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.paymentAccountCount = PaymentAccountCount.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetPaymentAccountCountResponse {
    return {
      paymentAccountCount: isSet(object.paymentAccountCount) ? PaymentAccountCount.fromJSON(object.paymentAccountCount) : undefined
    };
  },

  toJSON(message: QueryGetPaymentAccountCountResponse): unknown {
    const obj: any = {};
    message.paymentAccountCount !== undefined && (obj.paymentAccountCount = message.paymentAccountCount ? PaymentAccountCount.toJSON(message.paymentAccountCount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPaymentAccountCountResponse>, I>>(object: I): QueryGetPaymentAccountCountResponse {
    const message = createBaseQueryGetPaymentAccountCountResponse();
    message.paymentAccountCount = object.paymentAccountCount !== undefined && object.paymentAccountCount !== null ? PaymentAccountCount.fromPartial(object.paymentAccountCount) : undefined;
    return message;
  }

};

function createBaseQueryAllPaymentAccountCountRequest(): QueryAllPaymentAccountCountRequest {
  return {
    pagination: undefined
  };
}

export const QueryAllPaymentAccountCountRequest = {
  encode(message: QueryAllPaymentAccountCountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPaymentAccountCountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPaymentAccountCountRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAllPaymentAccountCountRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAllPaymentAccountCountRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPaymentAccountCountRequest>, I>>(object: I): QueryAllPaymentAccountCountRequest {
    const message = createBaseQueryAllPaymentAccountCountRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAllPaymentAccountCountResponse(): QueryAllPaymentAccountCountResponse {
  return {
    paymentAccountCount: [],
    pagination: undefined
  };
}

export const QueryAllPaymentAccountCountResponse = {
  encode(message: QueryAllPaymentAccountCountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.paymentAccountCount) {
      PaymentAccountCount.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPaymentAccountCountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPaymentAccountCountResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.paymentAccountCount.push(PaymentAccountCount.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAllPaymentAccountCountResponse {
    return {
      paymentAccountCount: Array.isArray(object?.paymentAccountCount) ? object.paymentAccountCount.map((e: any) => PaymentAccountCount.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAllPaymentAccountCountResponse): unknown {
    const obj: any = {};

    if (message.paymentAccountCount) {
      obj.paymentAccountCount = message.paymentAccountCount.map(e => e ? PaymentAccountCount.toJSON(e) : undefined);
    } else {
      obj.paymentAccountCount = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPaymentAccountCountResponse>, I>>(object: I): QueryAllPaymentAccountCountResponse {
    const message = createBaseQueryAllPaymentAccountCountResponse();
    message.paymentAccountCount = object.paymentAccountCount?.map(e => PaymentAccountCount.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryGetPaymentAccountRequest(): QueryGetPaymentAccountRequest {
  return {
    addr: ""
  };
}

export const QueryGetPaymentAccountRequest = {
  encode(message: QueryGetPaymentAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.addr !== "") {
      writer.uint32(10).string(message.addr);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPaymentAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPaymentAccountRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.addr = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetPaymentAccountRequest {
    return {
      addr: isSet(object.addr) ? String(object.addr) : ""
    };
  },

  toJSON(message: QueryGetPaymentAccountRequest): unknown {
    const obj: any = {};
    message.addr !== undefined && (obj.addr = message.addr);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPaymentAccountRequest>, I>>(object: I): QueryGetPaymentAccountRequest {
    const message = createBaseQueryGetPaymentAccountRequest();
    message.addr = object.addr ?? "";
    return message;
  }

};

function createBaseQueryGetPaymentAccountResponse(): QueryGetPaymentAccountResponse {
  return {
    paymentAccount: undefined
  };
}

export const QueryGetPaymentAccountResponse = {
  encode(message: QueryGetPaymentAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.paymentAccount !== undefined) {
      PaymentAccount.encode(message.paymentAccount, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPaymentAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPaymentAccountResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.paymentAccount = PaymentAccount.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetPaymentAccountResponse {
    return {
      paymentAccount: isSet(object.paymentAccount) ? PaymentAccount.fromJSON(object.paymentAccount) : undefined
    };
  },

  toJSON(message: QueryGetPaymentAccountResponse): unknown {
    const obj: any = {};
    message.paymentAccount !== undefined && (obj.paymentAccount = message.paymentAccount ? PaymentAccount.toJSON(message.paymentAccount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPaymentAccountResponse>, I>>(object: I): QueryGetPaymentAccountResponse {
    const message = createBaseQueryGetPaymentAccountResponse();
    message.paymentAccount = object.paymentAccount !== undefined && object.paymentAccount !== null ? PaymentAccount.fromPartial(object.paymentAccount) : undefined;
    return message;
  }

};

function createBaseQueryAllPaymentAccountRequest(): QueryAllPaymentAccountRequest {
  return {
    pagination: undefined
  };
}

export const QueryAllPaymentAccountRequest = {
  encode(message: QueryAllPaymentAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPaymentAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPaymentAccountRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAllPaymentAccountRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAllPaymentAccountRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPaymentAccountRequest>, I>>(object: I): QueryAllPaymentAccountRequest {
    const message = createBaseQueryAllPaymentAccountRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAllPaymentAccountResponse(): QueryAllPaymentAccountResponse {
  return {
    paymentAccount: [],
    pagination: undefined
  };
}

export const QueryAllPaymentAccountResponse = {
  encode(message: QueryAllPaymentAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.paymentAccount) {
      PaymentAccount.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPaymentAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPaymentAccountResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.paymentAccount.push(PaymentAccount.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAllPaymentAccountResponse {
    return {
      paymentAccount: Array.isArray(object?.paymentAccount) ? object.paymentAccount.map((e: any) => PaymentAccount.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAllPaymentAccountResponse): unknown {
    const obj: any = {};

    if (message.paymentAccount) {
      obj.paymentAccount = message.paymentAccount.map(e => e ? PaymentAccount.toJSON(e) : undefined);
    } else {
      obj.paymentAccount = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPaymentAccountResponse>, I>>(object: I): QueryAllPaymentAccountResponse {
    const message = createBaseQueryAllPaymentAccountResponse();
    message.paymentAccount = object.paymentAccount?.map(e => PaymentAccount.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryDynamicBalanceRequest(): QueryDynamicBalanceRequest {
  return {
    account: ""
  };
}

export const QueryDynamicBalanceRequest = {
  encode(message: QueryDynamicBalanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDynamicBalanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDynamicBalanceRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryDynamicBalanceRequest {
    return {
      account: isSet(object.account) ? String(object.account) : ""
    };
  },

  toJSON(message: QueryDynamicBalanceRequest): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDynamicBalanceRequest>, I>>(object: I): QueryDynamicBalanceRequest {
    const message = createBaseQueryDynamicBalanceRequest();
    message.account = object.account ?? "";
    return message;
  }

};

function createBaseQueryDynamicBalanceResponse(): QueryDynamicBalanceResponse {
  return {
    dynamicBalance: "",
    streamRecord: undefined,
    currentTimestamp: Long.ZERO
  };
}

export const QueryDynamicBalanceResponse = {
  encode(message: QueryDynamicBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dynamicBalance !== "") {
      writer.uint32(10).string(message.dynamicBalance);
    }

    if (message.streamRecord !== undefined) {
      StreamRecord.encode(message.streamRecord, writer.uint32(18).fork()).ldelim();
    }

    if (!message.currentTimestamp.isZero()) {
      writer.uint32(24).int64(message.currentTimestamp);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDynamicBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDynamicBalanceResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.dynamicBalance = reader.string();
          break;

        case 2:
          message.streamRecord = StreamRecord.decode(reader, reader.uint32());
          break;

        case 3:
          message.currentTimestamp = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryDynamicBalanceResponse {
    return {
      dynamicBalance: isSet(object.dynamicBalance) ? String(object.dynamicBalance) : "",
      streamRecord: isSet(object.streamRecord) ? StreamRecord.fromJSON(object.streamRecord) : undefined,
      currentTimestamp: isSet(object.currentTimestamp) ? Long.fromValue(object.currentTimestamp) : Long.ZERO
    };
  },

  toJSON(message: QueryDynamicBalanceResponse): unknown {
    const obj: any = {};
    message.dynamicBalance !== undefined && (obj.dynamicBalance = message.dynamicBalance);
    message.streamRecord !== undefined && (obj.streamRecord = message.streamRecord ? StreamRecord.toJSON(message.streamRecord) : undefined);
    message.currentTimestamp !== undefined && (obj.currentTimestamp = (message.currentTimestamp || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDynamicBalanceResponse>, I>>(object: I): QueryDynamicBalanceResponse {
    const message = createBaseQueryDynamicBalanceResponse();
    message.dynamicBalance = object.dynamicBalance ?? "";
    message.streamRecord = object.streamRecord !== undefined && object.streamRecord !== null ? StreamRecord.fromPartial(object.streamRecord) : undefined;
    message.currentTimestamp = object.currentTimestamp !== undefined && object.currentTimestamp !== null ? Long.fromValue(object.currentTimestamp) : Long.ZERO;
    return message;
  }

};

function createBaseQueryGetPaymentAccountsByOwnerRequest(): QueryGetPaymentAccountsByOwnerRequest {
  return {
    owner: ""
  };
}

export const QueryGetPaymentAccountsByOwnerRequest = {
  encode(message: QueryGetPaymentAccountsByOwnerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPaymentAccountsByOwnerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPaymentAccountsByOwnerRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetPaymentAccountsByOwnerRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },

  toJSON(message: QueryGetPaymentAccountsByOwnerRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPaymentAccountsByOwnerRequest>, I>>(object: I): QueryGetPaymentAccountsByOwnerRequest {
    const message = createBaseQueryGetPaymentAccountsByOwnerRequest();
    message.owner = object.owner ?? "";
    return message;
  }

};

function createBaseQueryGetPaymentAccountsByOwnerResponse(): QueryGetPaymentAccountsByOwnerResponse {
  return {
    paymentAccounts: []
  };
}

export const QueryGetPaymentAccountsByOwnerResponse = {
  encode(message: QueryGetPaymentAccountsByOwnerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.paymentAccounts) {
      writer.uint32(10).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPaymentAccountsByOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPaymentAccountsByOwnerResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.paymentAccounts.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetPaymentAccountsByOwnerResponse {
    return {
      paymentAccounts: Array.isArray(object?.paymentAccounts) ? object.paymentAccounts.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: QueryGetPaymentAccountsByOwnerResponse): unknown {
    const obj: any = {};

    if (message.paymentAccounts) {
      obj.paymentAccounts = message.paymentAccounts.map(e => e);
    } else {
      obj.paymentAccounts = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPaymentAccountsByOwnerResponse>, I>>(object: I): QueryGetPaymentAccountsByOwnerResponse {
    const message = createBaseQueryGetPaymentAccountsByOwnerResponse();
    message.paymentAccounts = object.paymentAccounts?.map(e => e) || [];
    return message;
  }

};

function createBaseQueryGetAutoSettleRecordRequest(): QueryGetAutoSettleRecordRequest {
  return {
    timestamp: Long.ZERO,
    addr: ""
  };
}

export const QueryGetAutoSettleRecordRequest = {
  encode(message: QueryGetAutoSettleRecordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.timestamp.isZero()) {
      writer.uint32(8).int64(message.timestamp);
    }

    if (message.addr !== "") {
      writer.uint32(18).string(message.addr);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAutoSettleRecordRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAutoSettleRecordRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.timestamp = (reader.int64() as Long);
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

  fromJSON(object: any): QueryGetAutoSettleRecordRequest {
    return {
      timestamp: isSet(object.timestamp) ? Long.fromValue(object.timestamp) : Long.ZERO,
      addr: isSet(object.addr) ? String(object.addr) : ""
    };
  },

  toJSON(message: QueryGetAutoSettleRecordRequest): unknown {
    const obj: any = {};
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || Long.ZERO).toString());
    message.addr !== undefined && (obj.addr = message.addr);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetAutoSettleRecordRequest>, I>>(object: I): QueryGetAutoSettleRecordRequest {
    const message = createBaseQueryGetAutoSettleRecordRequest();
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.ZERO;
    message.addr = object.addr ?? "";
    return message;
  }

};

function createBaseQueryGetAutoSettleRecordResponse(): QueryGetAutoSettleRecordResponse {
  return {
    autoSettleRecord: undefined
  };
}

export const QueryGetAutoSettleRecordResponse = {
  encode(message: QueryGetAutoSettleRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.autoSettleRecord !== undefined) {
      AutoSettleRecord.encode(message.autoSettleRecord, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAutoSettleRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAutoSettleRecordResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.autoSettleRecord = AutoSettleRecord.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetAutoSettleRecordResponse {
    return {
      autoSettleRecord: isSet(object.autoSettleRecord) ? AutoSettleRecord.fromJSON(object.autoSettleRecord) : undefined
    };
  },

  toJSON(message: QueryGetAutoSettleRecordResponse): unknown {
    const obj: any = {};
    message.autoSettleRecord !== undefined && (obj.autoSettleRecord = message.autoSettleRecord ? AutoSettleRecord.toJSON(message.autoSettleRecord) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetAutoSettleRecordResponse>, I>>(object: I): QueryGetAutoSettleRecordResponse {
    const message = createBaseQueryGetAutoSettleRecordResponse();
    message.autoSettleRecord = object.autoSettleRecord !== undefined && object.autoSettleRecord !== null ? AutoSettleRecord.fromPartial(object.autoSettleRecord) : undefined;
    return message;
  }

};

function createBaseQueryAllAutoSettleRecordRequest(): QueryAllAutoSettleRecordRequest {
  return {
    pagination: undefined
  };
}

export const QueryAllAutoSettleRecordRequest = {
  encode(message: QueryAllAutoSettleRecordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAutoSettleRecordRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAutoSettleRecordRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAllAutoSettleRecordRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAllAutoSettleRecordRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllAutoSettleRecordRequest>, I>>(object: I): QueryAllAutoSettleRecordRequest {
    const message = createBaseQueryAllAutoSettleRecordRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAllAutoSettleRecordResponse(): QueryAllAutoSettleRecordResponse {
  return {
    autoSettleRecord: [],
    pagination: undefined
  };
}

export const QueryAllAutoSettleRecordResponse = {
  encode(message: QueryAllAutoSettleRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.autoSettleRecord) {
      AutoSettleRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAutoSettleRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAutoSettleRecordResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.autoSettleRecord.push(AutoSettleRecord.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAllAutoSettleRecordResponse {
    return {
      autoSettleRecord: Array.isArray(object?.autoSettleRecord) ? object.autoSettleRecord.map((e: any) => AutoSettleRecord.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAllAutoSettleRecordResponse): unknown {
    const obj: any = {};

    if (message.autoSettleRecord) {
      obj.autoSettleRecord = message.autoSettleRecord.map(e => e ? AutoSettleRecord.toJSON(e) : undefined);
    } else {
      obj.autoSettleRecord = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllAutoSettleRecordResponse>, I>>(object: I): QueryAllAutoSettleRecordResponse {
    const message = createBaseQueryAllAutoSettleRecordResponse();
    message.autoSettleRecord = object.autoSettleRecord?.map(e => AutoSettleRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};
/** Query defines the gRPC querier service. */

export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a StreamRecord by index. */

  StreamRecord(request: QueryGetStreamRecordRequest): Promise<QueryGetStreamRecordResponse>;
  /** Queries a list of StreamRecord items. */

  StreamRecordAll(request?: QueryAllStreamRecordRequest): Promise<QueryAllStreamRecordResponse>;
  /** Queries a PaymentAccountCount by index. */

  PaymentAccountCount(request: QueryGetPaymentAccountCountRequest): Promise<QueryGetPaymentAccountCountResponse>;
  /** Queries a list of PaymentAccountCount items. */

  PaymentAccountCountAll(request?: QueryAllPaymentAccountCountRequest): Promise<QueryAllPaymentAccountCountResponse>;
  /** Queries a PaymentAccount by index. */

  PaymentAccount(request: QueryGetPaymentAccountRequest): Promise<QueryGetPaymentAccountResponse>;
  /** Queries a list of PaymentAccount items. */

  PaymentAccountAll(request?: QueryAllPaymentAccountRequest): Promise<QueryAllPaymentAccountResponse>;
  /** Queries a list of DynamicBalance items. */

  DynamicBalance(request: QueryDynamicBalanceRequest): Promise<QueryDynamicBalanceResponse>;
  /** Queries a list of GetPaymentAccountsByOwner items. */

  GetPaymentAccountsByOwner(request: QueryGetPaymentAccountsByOwnerRequest): Promise<QueryGetPaymentAccountsByOwnerResponse>;
  /** Queries a list of AutoSettleRecord items. */

  AutoSettleRecord(request: QueryGetAutoSettleRecordRequest): Promise<QueryGetAutoSettleRecordResponse>;
  AutoSettleRecordAll(request?: QueryAllAutoSettleRecordRequest): Promise<QueryAllAutoSettleRecordResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.StreamRecord = this.StreamRecord.bind(this);
    this.StreamRecordAll = this.StreamRecordAll.bind(this);
    this.PaymentAccountCount = this.PaymentAccountCount.bind(this);
    this.PaymentAccountCountAll = this.PaymentAccountCountAll.bind(this);
    this.PaymentAccount = this.PaymentAccount.bind(this);
    this.PaymentAccountAll = this.PaymentAccountAll.bind(this);
    this.DynamicBalance = this.DynamicBalance.bind(this);
    this.GetPaymentAccountsByOwner = this.GetPaymentAccountsByOwner.bind(this);
    this.AutoSettleRecord = this.AutoSettleRecord.bind(this);
    this.AutoSettleRecordAll = this.AutoSettleRecordAll.bind(this);
  }

  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.payment.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  StreamRecord(request: QueryGetStreamRecordRequest): Promise<QueryGetStreamRecordResponse> {
    const data = QueryGetStreamRecordRequest.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.payment.Query", "StreamRecord", data);
    return promise.then(data => QueryGetStreamRecordResponse.decode(new _m0.Reader(data)));
  }

  StreamRecordAll(request: QueryAllStreamRecordRequest = {
    pagination: undefined
  }): Promise<QueryAllStreamRecordResponse> {
    const data = QueryAllStreamRecordRequest.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.payment.Query", "StreamRecordAll", data);
    return promise.then(data => QueryAllStreamRecordResponse.decode(new _m0.Reader(data)));
  }

  PaymentAccountCount(request: QueryGetPaymentAccountCountRequest): Promise<QueryGetPaymentAccountCountResponse> {
    const data = QueryGetPaymentAccountCountRequest.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.payment.Query", "PaymentAccountCount", data);
    return promise.then(data => QueryGetPaymentAccountCountResponse.decode(new _m0.Reader(data)));
  }

  PaymentAccountCountAll(request: QueryAllPaymentAccountCountRequest = {
    pagination: undefined
  }): Promise<QueryAllPaymentAccountCountResponse> {
    const data = QueryAllPaymentAccountCountRequest.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.payment.Query", "PaymentAccountCountAll", data);
    return promise.then(data => QueryAllPaymentAccountCountResponse.decode(new _m0.Reader(data)));
  }

  PaymentAccount(request: QueryGetPaymentAccountRequest): Promise<QueryGetPaymentAccountResponse> {
    const data = QueryGetPaymentAccountRequest.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.payment.Query", "PaymentAccount", data);
    return promise.then(data => QueryGetPaymentAccountResponse.decode(new _m0.Reader(data)));
  }

  PaymentAccountAll(request: QueryAllPaymentAccountRequest = {
    pagination: undefined
  }): Promise<QueryAllPaymentAccountResponse> {
    const data = QueryAllPaymentAccountRequest.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.payment.Query", "PaymentAccountAll", data);
    return promise.then(data => QueryAllPaymentAccountResponse.decode(new _m0.Reader(data)));
  }

  DynamicBalance(request: QueryDynamicBalanceRequest): Promise<QueryDynamicBalanceResponse> {
    const data = QueryDynamicBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.payment.Query", "DynamicBalance", data);
    return promise.then(data => QueryDynamicBalanceResponse.decode(new _m0.Reader(data)));
  }

  GetPaymentAccountsByOwner(request: QueryGetPaymentAccountsByOwnerRequest): Promise<QueryGetPaymentAccountsByOwnerResponse> {
    const data = QueryGetPaymentAccountsByOwnerRequest.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.payment.Query", "GetPaymentAccountsByOwner", data);
    return promise.then(data => QueryGetPaymentAccountsByOwnerResponse.decode(new _m0.Reader(data)));
  }

  AutoSettleRecord(request: QueryGetAutoSettleRecordRequest): Promise<QueryGetAutoSettleRecordResponse> {
    const data = QueryGetAutoSettleRecordRequest.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.payment.Query", "AutoSettleRecord", data);
    return promise.then(data => QueryGetAutoSettleRecordResponse.decode(new _m0.Reader(data)));
  }

  AutoSettleRecordAll(request: QueryAllAutoSettleRecordRequest = {
    pagination: undefined
  }): Promise<QueryAllAutoSettleRecordResponse> {
    const data = QueryAllAutoSettleRecordRequest.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.payment.Query", "AutoSettleRecordAll", data);
    return promise.then(data => QueryAllAutoSettleRecordResponse.decode(new _m0.Reader(data)));
  }

}