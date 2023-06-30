/* eslint-disable */
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { StreamRecord, StreamRecordSDKType } from "./stream_record";
import { PaymentAccountCount, PaymentAccountCountSDKType } from "./payment_account_count";
import { PaymentAccount, PaymentAccountSDKType } from "./payment_account";
import { AutoSettleRecord, AutoSettleRecordSDKType } from "./auto_settle_record";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Exact, isSet, Long, Rpc } from "../../helpers";
export const protobufPackage = "greenfield.payment";
/** QueryParamsRequest is request type for the Query/Params RPC method. */

export interface QueryParamsRequest {}
/** QueryParamsRequest is request type for the Query/Params RPC method. */

export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */

export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */

export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
/** QueryParamsByTimestampRequest is request type for the Query/ParamsByTimestamp RPC method with timestamp. */

export interface QueryParamsByTimestampRequest {
  /** the timestamp of the block time you want to query */
  timestamp: Long;
}
/** QueryParamsByTimestampRequest is request type for the Query/ParamsByTimestamp RPC method with timestamp. */

export interface QueryParamsByTimestampRequestSDKType {
  timestamp: Long;
}
/** QueryParamsByTimestampResponse is response type for the Query/ParamsByTimestamp RPC method with timestamp. */

export interface QueryParamsByTimestampResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}
/** QueryParamsByTimestampResponse is response type for the Query/ParamsByTimestamp RPC method with timestamp. */

export interface QueryParamsByTimestampResponseSDKType {
  params?: ParamsSDKType;
}
export interface QueryGetStreamRecordRequest {
  account: string;
}
export interface QueryGetStreamRecordRequestSDKType {
  account: string;
}
export interface QueryGetStreamRecordResponse {
  streamRecord?: StreamRecord;
}
export interface QueryGetStreamRecordResponseSDKType {
  stream_record?: StreamRecordSDKType;
}
export interface QueryAllStreamRecordRequest {
  pagination?: PageRequest;
}
export interface QueryAllStreamRecordRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllStreamRecordResponse {
  streamRecord: StreamRecord[];
  pagination?: PageResponse;
}
export interface QueryAllStreamRecordResponseSDKType {
  stream_record: StreamRecordSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetPaymentAccountCountRequest {
  owner: string;
}
export interface QueryGetPaymentAccountCountRequestSDKType {
  owner: string;
}
export interface QueryGetPaymentAccountCountResponse {
  paymentAccountCount?: PaymentAccountCount;
}
export interface QueryGetPaymentAccountCountResponseSDKType {
  payment_account_count?: PaymentAccountCountSDKType;
}
export interface QueryAllPaymentAccountCountRequest {
  pagination?: PageRequest;
}
export interface QueryAllPaymentAccountCountRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllPaymentAccountCountResponse {
  paymentAccountCount: PaymentAccountCount[];
  pagination?: PageResponse;
}
export interface QueryAllPaymentAccountCountResponseSDKType {
  payment_account_count: PaymentAccountCountSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetPaymentAccountRequest {
  addr: string;
}
export interface QueryGetPaymentAccountRequestSDKType {
  addr: string;
}
export interface QueryGetPaymentAccountResponse {
  paymentAccount?: PaymentAccount;
}
export interface QueryGetPaymentAccountResponseSDKType {
  payment_account?: PaymentAccountSDKType;
}
export interface QueryAllPaymentAccountRequest {
  pagination?: PageRequest;
}
export interface QueryAllPaymentAccountRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllPaymentAccountResponse {
  paymentAccount: PaymentAccount[];
  pagination?: PageResponse;
}
export interface QueryAllPaymentAccountResponseSDKType {
  payment_account: PaymentAccountSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryDynamicBalanceRequest {
  account: string;
}
export interface QueryDynamicBalanceRequestSDKType {
  account: string;
}
export interface QueryDynamicBalanceResponse {
  /** dynamic balance is static balance + flowDelta */
  dynamicBalance: string;
  /** the stream record of the given account, if it does not exist, it will be default values */

  streamRecord?: StreamRecord;
  /** the timestamp of the current block */

  currentTimestamp: Long;
  /** bank_balance is the BNB balance of the bank module */

  bankBalance: string;
  /** available_balance is bank balance + static balance */

  availableBalance: string;
  /** locked_fee is buffer balance + locked balance */

  lockedFee: string;
  /** change_rate is the netflow rate of the given account */

  changeRate: string;
}
export interface QueryDynamicBalanceResponseSDKType {
  dynamic_balance: string;
  stream_record?: StreamRecordSDKType;
  current_timestamp: Long;
  bank_balance: string;
  available_balance: string;
  locked_fee: string;
  change_rate: string;
}
export interface QueryGetPaymentAccountsByOwnerRequest {
  owner: string;
}
export interface QueryGetPaymentAccountsByOwnerRequestSDKType {
  owner: string;
}
export interface QueryGetPaymentAccountsByOwnerResponse {
  paymentAccounts: string[];
}
export interface QueryGetPaymentAccountsByOwnerResponseSDKType {
  paymentAccounts: string[];
}
export interface QueryAllAutoSettleRecordRequest {
  pagination?: PageRequest;
}
export interface QueryAllAutoSettleRecordRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllAutoSettleRecordResponse {
  autoSettleRecord: AutoSettleRecord[];
  pagination?: PageResponse;
}
export interface QueryAllAutoSettleRecordResponseSDKType {
  auto_settle_record: AutoSettleRecordSDKType[];
  pagination?: PageResponseSDKType;
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
  },

  fromSDK(_: QueryParamsRequestSDKType): QueryParamsRequest {
    return {};
  },

  toSDK(_: QueryParamsRequest): QueryParamsRequestSDKType {
    const obj: any = {};
    return obj;
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
  },

  fromSDK(object: QueryParamsResponseSDKType): QueryParamsResponse {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },

  toSDK(message: QueryParamsResponse): QueryParamsResponseSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  }

};

function createBaseQueryParamsByTimestampRequest(): QueryParamsByTimestampRequest {
  return {
    timestamp: Long.ZERO
  };
}

export const QueryParamsByTimestampRequest = {
  encode(message: QueryParamsByTimestampRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.timestamp.isZero()) {
      writer.uint32(8).int64(message.timestamp);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsByTimestampRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsByTimestampRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.timestamp = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryParamsByTimestampRequest {
    return {
      timestamp: isSet(object.timestamp) ? Long.fromValue(object.timestamp) : Long.ZERO
    };
  },

  toJSON(message: QueryParamsByTimestampRequest): unknown {
    const obj: any = {};
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsByTimestampRequest>, I>>(object: I): QueryParamsByTimestampRequest {
    const message = createBaseQueryParamsByTimestampRequest();
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.ZERO;
    return message;
  },

  fromSDK(object: QueryParamsByTimestampRequestSDKType): QueryParamsByTimestampRequest {
    return {
      timestamp: object?.timestamp
    };
  },

  toSDK(message: QueryParamsByTimestampRequest): QueryParamsByTimestampRequestSDKType {
    const obj: any = {};
    obj.timestamp = message.timestamp;
    return obj;
  }

};

function createBaseQueryParamsByTimestampResponse(): QueryParamsByTimestampResponse {
  return {
    params: undefined
  };
}

export const QueryParamsByTimestampResponse = {
  encode(message: QueryParamsByTimestampResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsByTimestampResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsByTimestampResponse();

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

  fromJSON(object: any): QueryParamsByTimestampResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },

  toJSON(message: QueryParamsByTimestampResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsByTimestampResponse>, I>>(object: I): QueryParamsByTimestampResponse {
    const message = createBaseQueryParamsByTimestampResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },

  fromSDK(object: QueryParamsByTimestampResponseSDKType): QueryParamsByTimestampResponse {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },

  toSDK(message: QueryParamsByTimestampResponse): QueryParamsByTimestampResponseSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
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
  },

  fromSDK(object: QueryGetStreamRecordRequestSDKType): QueryGetStreamRecordRequest {
    return {
      account: object?.account
    };
  },

  toSDK(message: QueryGetStreamRecordRequest): QueryGetStreamRecordRequestSDKType {
    const obj: any = {};
    obj.account = message.account;
    return obj;
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
  },

  fromSDK(object: QueryGetStreamRecordResponseSDKType): QueryGetStreamRecordResponse {
    return {
      streamRecord: object.stream_record ? StreamRecord.fromSDK(object.stream_record) : undefined
    };
  },

  toSDK(message: QueryGetStreamRecordResponse): QueryGetStreamRecordResponseSDKType {
    const obj: any = {};
    message.streamRecord !== undefined && (obj.stream_record = message.streamRecord ? StreamRecord.toSDK(message.streamRecord) : undefined);
    return obj;
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
  },

  fromSDK(object: QueryAllStreamRecordRequestSDKType): QueryAllStreamRecordRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: QueryAllStreamRecordRequest): QueryAllStreamRecordRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
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
  },

  fromSDK(object: QueryAllStreamRecordResponseSDKType): QueryAllStreamRecordResponse {
    return {
      streamRecord: Array.isArray(object?.stream_record) ? object.stream_record.map((e: any) => StreamRecord.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: QueryAllStreamRecordResponse): QueryAllStreamRecordResponseSDKType {
    const obj: any = {};

    if (message.streamRecord) {
      obj.stream_record = message.streamRecord.map(e => e ? StreamRecord.toSDK(e) : undefined);
    } else {
      obj.stream_record = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
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
  },

  fromSDK(object: QueryGetPaymentAccountCountRequestSDKType): QueryGetPaymentAccountCountRequest {
    return {
      owner: object?.owner
    };
  },

  toSDK(message: QueryGetPaymentAccountCountRequest): QueryGetPaymentAccountCountRequestSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    return obj;
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
  },

  fromSDK(object: QueryGetPaymentAccountCountResponseSDKType): QueryGetPaymentAccountCountResponse {
    return {
      paymentAccountCount: object.payment_account_count ? PaymentAccountCount.fromSDK(object.payment_account_count) : undefined
    };
  },

  toSDK(message: QueryGetPaymentAccountCountResponse): QueryGetPaymentAccountCountResponseSDKType {
    const obj: any = {};
    message.paymentAccountCount !== undefined && (obj.payment_account_count = message.paymentAccountCount ? PaymentAccountCount.toSDK(message.paymentAccountCount) : undefined);
    return obj;
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
  },

  fromSDK(object: QueryAllPaymentAccountCountRequestSDKType): QueryAllPaymentAccountCountRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: QueryAllPaymentAccountCountRequest): QueryAllPaymentAccountCountRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
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
  },

  fromSDK(object: QueryAllPaymentAccountCountResponseSDKType): QueryAllPaymentAccountCountResponse {
    return {
      paymentAccountCount: Array.isArray(object?.payment_account_count) ? object.payment_account_count.map((e: any) => PaymentAccountCount.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: QueryAllPaymentAccountCountResponse): QueryAllPaymentAccountCountResponseSDKType {
    const obj: any = {};

    if (message.paymentAccountCount) {
      obj.payment_account_count = message.paymentAccountCount.map(e => e ? PaymentAccountCount.toSDK(e) : undefined);
    } else {
      obj.payment_account_count = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
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
  },

  fromSDK(object: QueryGetPaymentAccountRequestSDKType): QueryGetPaymentAccountRequest {
    return {
      addr: object?.addr
    };
  },

  toSDK(message: QueryGetPaymentAccountRequest): QueryGetPaymentAccountRequestSDKType {
    const obj: any = {};
    obj.addr = message.addr;
    return obj;
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
  },

  fromSDK(object: QueryGetPaymentAccountResponseSDKType): QueryGetPaymentAccountResponse {
    return {
      paymentAccount: object.payment_account ? PaymentAccount.fromSDK(object.payment_account) : undefined
    };
  },

  toSDK(message: QueryGetPaymentAccountResponse): QueryGetPaymentAccountResponseSDKType {
    const obj: any = {};
    message.paymentAccount !== undefined && (obj.payment_account = message.paymentAccount ? PaymentAccount.toSDK(message.paymentAccount) : undefined);
    return obj;
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
  },

  fromSDK(object: QueryAllPaymentAccountRequestSDKType): QueryAllPaymentAccountRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: QueryAllPaymentAccountRequest): QueryAllPaymentAccountRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
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
  },

  fromSDK(object: QueryAllPaymentAccountResponseSDKType): QueryAllPaymentAccountResponse {
    return {
      paymentAccount: Array.isArray(object?.payment_account) ? object.payment_account.map((e: any) => PaymentAccount.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: QueryAllPaymentAccountResponse): QueryAllPaymentAccountResponseSDKType {
    const obj: any = {};

    if (message.paymentAccount) {
      obj.payment_account = message.paymentAccount.map(e => e ? PaymentAccount.toSDK(e) : undefined);
    } else {
      obj.payment_account = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
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
  },

  fromSDK(object: QueryDynamicBalanceRequestSDKType): QueryDynamicBalanceRequest {
    return {
      account: object?.account
    };
  },

  toSDK(message: QueryDynamicBalanceRequest): QueryDynamicBalanceRequestSDKType {
    const obj: any = {};
    obj.account = message.account;
    return obj;
  }

};

function createBaseQueryDynamicBalanceResponse(): QueryDynamicBalanceResponse {
  return {
    dynamicBalance: "",
    streamRecord: undefined,
    currentTimestamp: Long.ZERO,
    bankBalance: "",
    availableBalance: "",
    lockedFee: "",
    changeRate: ""
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

    if (message.bankBalance !== "") {
      writer.uint32(34).string(message.bankBalance);
    }

    if (message.availableBalance !== "") {
      writer.uint32(42).string(message.availableBalance);
    }

    if (message.lockedFee !== "") {
      writer.uint32(50).string(message.lockedFee);
    }

    if (message.changeRate !== "") {
      writer.uint32(58).string(message.changeRate);
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

        case 4:
          message.bankBalance = reader.string();
          break;

        case 5:
          message.availableBalance = reader.string();
          break;

        case 6:
          message.lockedFee = reader.string();
          break;

        case 7:
          message.changeRate = reader.string();
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
      currentTimestamp: isSet(object.currentTimestamp) ? Long.fromValue(object.currentTimestamp) : Long.ZERO,
      bankBalance: isSet(object.bankBalance) ? String(object.bankBalance) : "",
      availableBalance: isSet(object.availableBalance) ? String(object.availableBalance) : "",
      lockedFee: isSet(object.lockedFee) ? String(object.lockedFee) : "",
      changeRate: isSet(object.changeRate) ? String(object.changeRate) : ""
    };
  },

  toJSON(message: QueryDynamicBalanceResponse): unknown {
    const obj: any = {};
    message.dynamicBalance !== undefined && (obj.dynamicBalance = message.dynamicBalance);
    message.streamRecord !== undefined && (obj.streamRecord = message.streamRecord ? StreamRecord.toJSON(message.streamRecord) : undefined);
    message.currentTimestamp !== undefined && (obj.currentTimestamp = (message.currentTimestamp || Long.ZERO).toString());
    message.bankBalance !== undefined && (obj.bankBalance = message.bankBalance);
    message.availableBalance !== undefined && (obj.availableBalance = message.availableBalance);
    message.lockedFee !== undefined && (obj.lockedFee = message.lockedFee);
    message.changeRate !== undefined && (obj.changeRate = message.changeRate);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDynamicBalanceResponse>, I>>(object: I): QueryDynamicBalanceResponse {
    const message = createBaseQueryDynamicBalanceResponse();
    message.dynamicBalance = object.dynamicBalance ?? "";
    message.streamRecord = object.streamRecord !== undefined && object.streamRecord !== null ? StreamRecord.fromPartial(object.streamRecord) : undefined;
    message.currentTimestamp = object.currentTimestamp !== undefined && object.currentTimestamp !== null ? Long.fromValue(object.currentTimestamp) : Long.ZERO;
    message.bankBalance = object.bankBalance ?? "";
    message.availableBalance = object.availableBalance ?? "";
    message.lockedFee = object.lockedFee ?? "";
    message.changeRate = object.changeRate ?? "";
    return message;
  },

  fromSDK(object: QueryDynamicBalanceResponseSDKType): QueryDynamicBalanceResponse {
    return {
      dynamicBalance: object?.dynamic_balance,
      streamRecord: object.stream_record ? StreamRecord.fromSDK(object.stream_record) : undefined,
      currentTimestamp: object?.current_timestamp,
      bankBalance: object?.bank_balance,
      availableBalance: object?.available_balance,
      lockedFee: object?.locked_fee,
      changeRate: object?.change_rate
    };
  },

  toSDK(message: QueryDynamicBalanceResponse): QueryDynamicBalanceResponseSDKType {
    const obj: any = {};
    obj.dynamic_balance = message.dynamicBalance;
    message.streamRecord !== undefined && (obj.stream_record = message.streamRecord ? StreamRecord.toSDK(message.streamRecord) : undefined);
    obj.current_timestamp = message.currentTimestamp;
    obj.bank_balance = message.bankBalance;
    obj.available_balance = message.availableBalance;
    obj.locked_fee = message.lockedFee;
    obj.change_rate = message.changeRate;
    return obj;
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
  },

  fromSDK(object: QueryGetPaymentAccountsByOwnerRequestSDKType): QueryGetPaymentAccountsByOwnerRequest {
    return {
      owner: object?.owner
    };
  },

  toSDK(message: QueryGetPaymentAccountsByOwnerRequest): QueryGetPaymentAccountsByOwnerRequestSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    return obj;
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
  },

  fromSDK(object: QueryGetPaymentAccountsByOwnerResponseSDKType): QueryGetPaymentAccountsByOwnerResponse {
    return {
      paymentAccounts: Array.isArray(object?.paymentAccounts) ? object.paymentAccounts.map((e: any) => e) : []
    };
  },

  toSDK(message: QueryGetPaymentAccountsByOwnerResponse): QueryGetPaymentAccountsByOwnerResponseSDKType {
    const obj: any = {};

    if (message.paymentAccounts) {
      obj.paymentAccounts = message.paymentAccounts.map(e => e);
    } else {
      obj.paymentAccounts = [];
    }

    return obj;
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
  },

  fromSDK(object: QueryAllAutoSettleRecordRequestSDKType): QueryAllAutoSettleRecordRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: QueryAllAutoSettleRecordRequest): QueryAllAutoSettleRecordRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
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
  },

  fromSDK(object: QueryAllAutoSettleRecordResponseSDKType): QueryAllAutoSettleRecordResponse {
    return {
      autoSettleRecord: Array.isArray(object?.auto_settle_record) ? object.auto_settle_record.map((e: any) => AutoSettleRecord.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: QueryAllAutoSettleRecordResponse): QueryAllAutoSettleRecordResponseSDKType {
    const obj: any = {};

    if (message.autoSettleRecord) {
      obj.auto_settle_record = message.autoSettleRecord.map(e => e ? AutoSettleRecord.toSDK(e) : undefined);
    } else {
      obj.auto_settle_record = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  }

};
/** Query defines the gRPC querier service. */

export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** ParamsByTimestamp queries the parameters of the module. */

  ParamsByTimestamp(request: QueryParamsByTimestampRequest): Promise<QueryParamsByTimestampResponse>;
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

  AutoSettleRecordAll(request?: QueryAllAutoSettleRecordRequest): Promise<QueryAllAutoSettleRecordResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.ParamsByTimestamp = this.ParamsByTimestamp.bind(this);
    this.StreamRecord = this.StreamRecord.bind(this);
    this.StreamRecordAll = this.StreamRecordAll.bind(this);
    this.PaymentAccountCount = this.PaymentAccountCount.bind(this);
    this.PaymentAccountCountAll = this.PaymentAccountCountAll.bind(this);
    this.PaymentAccount = this.PaymentAccount.bind(this);
    this.PaymentAccountAll = this.PaymentAccountAll.bind(this);
    this.DynamicBalance = this.DynamicBalance.bind(this);
    this.GetPaymentAccountsByOwner = this.GetPaymentAccountsByOwner.bind(this);
    this.AutoSettleRecordAll = this.AutoSettleRecordAll.bind(this);
  }

  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.payment.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  ParamsByTimestamp(request: QueryParamsByTimestampRequest): Promise<QueryParamsByTimestampResponse> {
    const data = QueryParamsByTimestampRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.payment.Query", "ParamsByTimestamp", data);
    return promise.then(data => QueryParamsByTimestampResponse.decode(new _m0.Reader(data)));
  }

  StreamRecord(request: QueryGetStreamRecordRequest): Promise<QueryGetStreamRecordResponse> {
    const data = QueryGetStreamRecordRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.payment.Query", "StreamRecord", data);
    return promise.then(data => QueryGetStreamRecordResponse.decode(new _m0.Reader(data)));
  }

  StreamRecordAll(request: QueryAllStreamRecordRequest = {
    pagination: undefined
  }): Promise<QueryAllStreamRecordResponse> {
    const data = QueryAllStreamRecordRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.payment.Query", "StreamRecordAll", data);
    return promise.then(data => QueryAllStreamRecordResponse.decode(new _m0.Reader(data)));
  }

  PaymentAccountCount(request: QueryGetPaymentAccountCountRequest): Promise<QueryGetPaymentAccountCountResponse> {
    const data = QueryGetPaymentAccountCountRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.payment.Query", "PaymentAccountCount", data);
    return promise.then(data => QueryGetPaymentAccountCountResponse.decode(new _m0.Reader(data)));
  }

  PaymentAccountCountAll(request: QueryAllPaymentAccountCountRequest = {
    pagination: undefined
  }): Promise<QueryAllPaymentAccountCountResponse> {
    const data = QueryAllPaymentAccountCountRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.payment.Query", "PaymentAccountCountAll", data);
    return promise.then(data => QueryAllPaymentAccountCountResponse.decode(new _m0.Reader(data)));
  }

  PaymentAccount(request: QueryGetPaymentAccountRequest): Promise<QueryGetPaymentAccountResponse> {
    const data = QueryGetPaymentAccountRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.payment.Query", "PaymentAccount", data);
    return promise.then(data => QueryGetPaymentAccountResponse.decode(new _m0.Reader(data)));
  }

  PaymentAccountAll(request: QueryAllPaymentAccountRequest = {
    pagination: undefined
  }): Promise<QueryAllPaymentAccountResponse> {
    const data = QueryAllPaymentAccountRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.payment.Query", "PaymentAccountAll", data);
    return promise.then(data => QueryAllPaymentAccountResponse.decode(new _m0.Reader(data)));
  }

  DynamicBalance(request: QueryDynamicBalanceRequest): Promise<QueryDynamicBalanceResponse> {
    const data = QueryDynamicBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.payment.Query", "DynamicBalance", data);
    return promise.then(data => QueryDynamicBalanceResponse.decode(new _m0.Reader(data)));
  }

  GetPaymentAccountsByOwner(request: QueryGetPaymentAccountsByOwnerRequest): Promise<QueryGetPaymentAccountsByOwnerResponse> {
    const data = QueryGetPaymentAccountsByOwnerRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.payment.Query", "GetPaymentAccountsByOwner", data);
    return promise.then(data => QueryGetPaymentAccountsByOwnerResponse.decode(new _m0.Reader(data)));
  }

  AutoSettleRecordAll(request: QueryAllAutoSettleRecordRequest = {
    pagination: undefined
  }): Promise<QueryAllAutoSettleRecordResponse> {
    const data = QueryAllAutoSettleRecordRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.payment.Query", "AutoSettleRecordAll", data);
    return promise.then(data => QueryAllAutoSettleRecordResponse.decode(new _m0.Reader(data)));
  }

}