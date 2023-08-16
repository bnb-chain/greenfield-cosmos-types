//@ts-nocheck
/* eslint-disable */
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { OutFlow, OutFlowSDKType } from "./out_flow";
import { StreamRecord, StreamRecordSDKType } from "./stream_record";
import { PaymentAccountCount, PaymentAccountCountSDKType } from "./payment_account_count";
import { PaymentAccount, PaymentAccountSDKType } from "./payment_account";
import { AutoSettleRecord, AutoSettleRecordSDKType } from "./auto_settle_record";
import { Long, DeepPartial, Exact, isSet, Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "greenfield.payment";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
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
  params: Params;
}
/** QueryParamsByTimestampResponse is response type for the Query/ParamsByTimestamp RPC method with timestamp. */
export interface QueryParamsByTimestampResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryOutFlowsRequest {
  account: string;
}
export interface QueryOutFlowsRequestSDKType {
  account: string;
}
export interface QueryOutFlowsResponse {
  outFlows: OutFlow[];
}
export interface QueryOutFlowsResponseSDKType {
  out_flows: OutFlowSDKType[];
}
export interface QueryGetStreamRecordRequest {
  account: string;
}
export interface QueryGetStreamRecordRequestSDKType {
  account: string;
}
export interface QueryGetStreamRecordResponse {
  streamRecord: StreamRecord;
}
export interface QueryGetStreamRecordResponseSDKType {
  stream_record: StreamRecordSDKType;
}
export interface QueryStreamRecordsRequest {
  pagination: PageRequest;
}
export interface QueryStreamRecordsRequestSDKType {
  pagination: PageRequestSDKType;
}
export interface QueryStreamRecordsResponse {
  streamRecords: StreamRecord[];
  pagination: PageResponse;
}
export interface QueryStreamRecordsResponseSDKType {
  stream_records: StreamRecordSDKType[];
  pagination: PageResponseSDKType;
}
export interface QueryPaymentAccountCountRequest {
  owner: string;
}
export interface QueryPaymentAccountCountRequestSDKType {
  owner: string;
}
export interface QueryPaymentAccountCountResponse {
  paymentAccountCount: PaymentAccountCount;
}
export interface QueryPaymentAccountCountResponseSDKType {
  payment_account_count: PaymentAccountCountSDKType;
}
export interface QueryPaymentAccountCountsRequest {
  pagination: PageRequest;
}
export interface QueryPaymentAccountCountsRequestSDKType {
  pagination: PageRequestSDKType;
}
export interface QueryPaymentAccountCountsResponse {
  paymentAccountCounts: PaymentAccountCount[];
  pagination: PageResponse;
}
export interface QueryPaymentAccountCountsResponseSDKType {
  payment_account_counts: PaymentAccountCountSDKType[];
  pagination: PageResponseSDKType;
}
export interface QueryPaymentAccountRequest {
  addr: string;
}
export interface QueryPaymentAccountRequestSDKType {
  addr: string;
}
export interface QueryPaymentAccountResponse {
  paymentAccount: PaymentAccount;
}
export interface QueryPaymentAccountResponseSDKType {
  payment_account: PaymentAccountSDKType;
}
export interface QueryPaymentAccountsRequest {
  pagination: PageRequest;
}
export interface QueryPaymentAccountsRequestSDKType {
  pagination: PageRequestSDKType;
}
export interface QueryPaymentAccountsResponse {
  paymentAccounts: PaymentAccount[];
  pagination: PageResponse;
}
export interface QueryPaymentAccountsResponseSDKType {
  payment_accounts: PaymentAccountSDKType[];
  pagination: PageResponseSDKType;
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
  streamRecord: StreamRecord;
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
  stream_record: StreamRecordSDKType;
  current_timestamp: Long;
  bank_balance: string;
  available_balance: string;
  locked_fee: string;
  change_rate: string;
}
export interface QueryPaymentAccountsByOwnerRequest {
  owner: string;
}
export interface QueryPaymentAccountsByOwnerRequestSDKType {
  owner: string;
}
export interface QueryPaymentAccountsByOwnerResponse {
  paymentAccounts: string[];
}
export interface QueryPaymentAccountsByOwnerResponseSDKType {
  paymentAccounts: string[];
}
export interface QueryAutoSettleRecordsRequest {
  pagination: PageRequest;
}
export interface QueryAutoSettleRecordsRequestSDKType {
  pagination: PageRequestSDKType;
}
export interface QueryAutoSettleRecordsResponse {
  autoSettleRecords: AutoSettleRecord[];
  pagination: PageResponse;
}
export interface QueryAutoSettleRecordsResponseSDKType {
  auto_settle_records: AutoSettleRecordSDKType[];
  pagination: PageResponseSDKType;
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
    params: Params.fromPartial({})
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
    params: Params.fromPartial({})
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
function createBaseQueryOutFlowsRequest(): QueryOutFlowsRequest {
  return {
    account: ""
  };
}
export const QueryOutFlowsRequest = {
  encode(message: QueryOutFlowsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOutFlowsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOutFlowsRequest();
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
  fromJSON(object: any): QueryOutFlowsRequest {
    return {
      account: isSet(object.account) ? String(object.account) : ""
    };
  },
  toJSON(message: QueryOutFlowsRequest): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryOutFlowsRequest>, I>>(object: I): QueryOutFlowsRequest {
    const message = createBaseQueryOutFlowsRequest();
    message.account = object.account ?? "";
    return message;
  },
  fromSDK(object: QueryOutFlowsRequestSDKType): QueryOutFlowsRequest {
    return {
      account: object?.account
    };
  },
  toSDK(message: QueryOutFlowsRequest): QueryOutFlowsRequestSDKType {
    const obj: any = {};
    obj.account = message.account;
    return obj;
  }
};
function createBaseQueryOutFlowsResponse(): QueryOutFlowsResponse {
  return {
    outFlows: []
  };
}
export const QueryOutFlowsResponse = {
  encode(message: QueryOutFlowsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.outFlows) {
      OutFlow.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOutFlowsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOutFlowsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.outFlows.push(OutFlow.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryOutFlowsResponse {
    return {
      outFlows: Array.isArray(object?.outFlows) ? object.outFlows.map((e: any) => OutFlow.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryOutFlowsResponse): unknown {
    const obj: any = {};
    if (message.outFlows) {
      obj.outFlows = message.outFlows.map(e => e ? OutFlow.toJSON(e) : undefined);
    } else {
      obj.outFlows = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryOutFlowsResponse>, I>>(object: I): QueryOutFlowsResponse {
    const message = createBaseQueryOutFlowsResponse();
    message.outFlows = object.outFlows?.map(e => OutFlow.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryOutFlowsResponseSDKType): QueryOutFlowsResponse {
    return {
      outFlows: Array.isArray(object?.out_flows) ? object.out_flows.map((e: any) => OutFlow.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryOutFlowsResponse): QueryOutFlowsResponseSDKType {
    const obj: any = {};
    if (message.outFlows) {
      obj.out_flows = message.outFlows.map(e => e ? OutFlow.toSDK(e) : undefined);
    } else {
      obj.out_flows = [];
    }
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
    streamRecord: StreamRecord.fromPartial({})
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
function createBaseQueryStreamRecordsRequest(): QueryStreamRecordsRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryStreamRecordsRequest = {
  encode(message: QueryStreamRecordsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStreamRecordsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStreamRecordsRequest();
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
  fromJSON(object: any): QueryStreamRecordsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryStreamRecordsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryStreamRecordsRequest>, I>>(object: I): QueryStreamRecordsRequest {
    const message = createBaseQueryStreamRecordsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryStreamRecordsRequestSDKType): QueryStreamRecordsRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryStreamRecordsRequest): QueryStreamRecordsRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  }
};
function createBaseQueryStreamRecordsResponse(): QueryStreamRecordsResponse {
  return {
    streamRecords: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryStreamRecordsResponse = {
  encode(message: QueryStreamRecordsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.streamRecords) {
      StreamRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStreamRecordsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStreamRecordsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.streamRecords.push(StreamRecord.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryStreamRecordsResponse {
    return {
      streamRecords: Array.isArray(object?.streamRecords) ? object.streamRecords.map((e: any) => StreamRecord.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryStreamRecordsResponse): unknown {
    const obj: any = {};
    if (message.streamRecords) {
      obj.streamRecords = message.streamRecords.map(e => e ? StreamRecord.toJSON(e) : undefined);
    } else {
      obj.streamRecords = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryStreamRecordsResponse>, I>>(object: I): QueryStreamRecordsResponse {
    const message = createBaseQueryStreamRecordsResponse();
    message.streamRecords = object.streamRecords?.map(e => StreamRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryStreamRecordsResponseSDKType): QueryStreamRecordsResponse {
    return {
      streamRecords: Array.isArray(object?.stream_records) ? object.stream_records.map((e: any) => StreamRecord.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryStreamRecordsResponse): QueryStreamRecordsResponseSDKType {
    const obj: any = {};
    if (message.streamRecords) {
      obj.stream_records = message.streamRecords.map(e => e ? StreamRecord.toSDK(e) : undefined);
    } else {
      obj.stream_records = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  }
};
function createBaseQueryPaymentAccountCountRequest(): QueryPaymentAccountCountRequest {
  return {
    owner: ""
  };
}
export const QueryPaymentAccountCountRequest = {
  encode(message: QueryPaymentAccountCountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPaymentAccountCountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPaymentAccountCountRequest();
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
  fromJSON(object: any): QueryPaymentAccountCountRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },
  toJSON(message: QueryPaymentAccountCountRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryPaymentAccountCountRequest>, I>>(object: I): QueryPaymentAccountCountRequest {
    const message = createBaseQueryPaymentAccountCountRequest();
    message.owner = object.owner ?? "";
    return message;
  },
  fromSDK(object: QueryPaymentAccountCountRequestSDKType): QueryPaymentAccountCountRequest {
    return {
      owner: object?.owner
    };
  },
  toSDK(message: QueryPaymentAccountCountRequest): QueryPaymentAccountCountRequestSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    return obj;
  }
};
function createBaseQueryPaymentAccountCountResponse(): QueryPaymentAccountCountResponse {
  return {
    paymentAccountCount: PaymentAccountCount.fromPartial({})
  };
}
export const QueryPaymentAccountCountResponse = {
  encode(message: QueryPaymentAccountCountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.paymentAccountCount !== undefined) {
      PaymentAccountCount.encode(message.paymentAccountCount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPaymentAccountCountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPaymentAccountCountResponse();
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
  fromJSON(object: any): QueryPaymentAccountCountResponse {
    return {
      paymentAccountCount: isSet(object.paymentAccountCount) ? PaymentAccountCount.fromJSON(object.paymentAccountCount) : undefined
    };
  },
  toJSON(message: QueryPaymentAccountCountResponse): unknown {
    const obj: any = {};
    message.paymentAccountCount !== undefined && (obj.paymentAccountCount = message.paymentAccountCount ? PaymentAccountCount.toJSON(message.paymentAccountCount) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryPaymentAccountCountResponse>, I>>(object: I): QueryPaymentAccountCountResponse {
    const message = createBaseQueryPaymentAccountCountResponse();
    message.paymentAccountCount = object.paymentAccountCount !== undefined && object.paymentAccountCount !== null ? PaymentAccountCount.fromPartial(object.paymentAccountCount) : undefined;
    return message;
  },
  fromSDK(object: QueryPaymentAccountCountResponseSDKType): QueryPaymentAccountCountResponse {
    return {
      paymentAccountCount: object.payment_account_count ? PaymentAccountCount.fromSDK(object.payment_account_count) : undefined
    };
  },
  toSDK(message: QueryPaymentAccountCountResponse): QueryPaymentAccountCountResponseSDKType {
    const obj: any = {};
    message.paymentAccountCount !== undefined && (obj.payment_account_count = message.paymentAccountCount ? PaymentAccountCount.toSDK(message.paymentAccountCount) : undefined);
    return obj;
  }
};
function createBaseQueryPaymentAccountCountsRequest(): QueryPaymentAccountCountsRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryPaymentAccountCountsRequest = {
  encode(message: QueryPaymentAccountCountsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPaymentAccountCountsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPaymentAccountCountsRequest();
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
  fromJSON(object: any): QueryPaymentAccountCountsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryPaymentAccountCountsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryPaymentAccountCountsRequest>, I>>(object: I): QueryPaymentAccountCountsRequest {
    const message = createBaseQueryPaymentAccountCountsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryPaymentAccountCountsRequestSDKType): QueryPaymentAccountCountsRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryPaymentAccountCountsRequest): QueryPaymentAccountCountsRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  }
};
function createBaseQueryPaymentAccountCountsResponse(): QueryPaymentAccountCountsResponse {
  return {
    paymentAccountCounts: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryPaymentAccountCountsResponse = {
  encode(message: QueryPaymentAccountCountsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.paymentAccountCounts) {
      PaymentAccountCount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPaymentAccountCountsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPaymentAccountCountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.paymentAccountCounts.push(PaymentAccountCount.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryPaymentAccountCountsResponse {
    return {
      paymentAccountCounts: Array.isArray(object?.paymentAccountCounts) ? object.paymentAccountCounts.map((e: any) => PaymentAccountCount.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryPaymentAccountCountsResponse): unknown {
    const obj: any = {};
    if (message.paymentAccountCounts) {
      obj.paymentAccountCounts = message.paymentAccountCounts.map(e => e ? PaymentAccountCount.toJSON(e) : undefined);
    } else {
      obj.paymentAccountCounts = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryPaymentAccountCountsResponse>, I>>(object: I): QueryPaymentAccountCountsResponse {
    const message = createBaseQueryPaymentAccountCountsResponse();
    message.paymentAccountCounts = object.paymentAccountCounts?.map(e => PaymentAccountCount.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryPaymentAccountCountsResponseSDKType): QueryPaymentAccountCountsResponse {
    return {
      paymentAccountCounts: Array.isArray(object?.payment_account_counts) ? object.payment_account_counts.map((e: any) => PaymentAccountCount.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryPaymentAccountCountsResponse): QueryPaymentAccountCountsResponseSDKType {
    const obj: any = {};
    if (message.paymentAccountCounts) {
      obj.payment_account_counts = message.paymentAccountCounts.map(e => e ? PaymentAccountCount.toSDK(e) : undefined);
    } else {
      obj.payment_account_counts = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  }
};
function createBaseQueryPaymentAccountRequest(): QueryPaymentAccountRequest {
  return {
    addr: ""
  };
}
export const QueryPaymentAccountRequest = {
  encode(message: QueryPaymentAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.addr !== "") {
      writer.uint32(10).string(message.addr);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPaymentAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPaymentAccountRequest();
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
  fromJSON(object: any): QueryPaymentAccountRequest {
    return {
      addr: isSet(object.addr) ? String(object.addr) : ""
    };
  },
  toJSON(message: QueryPaymentAccountRequest): unknown {
    const obj: any = {};
    message.addr !== undefined && (obj.addr = message.addr);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryPaymentAccountRequest>, I>>(object: I): QueryPaymentAccountRequest {
    const message = createBaseQueryPaymentAccountRequest();
    message.addr = object.addr ?? "";
    return message;
  },
  fromSDK(object: QueryPaymentAccountRequestSDKType): QueryPaymentAccountRequest {
    return {
      addr: object?.addr
    };
  },
  toSDK(message: QueryPaymentAccountRequest): QueryPaymentAccountRequestSDKType {
    const obj: any = {};
    obj.addr = message.addr;
    return obj;
  }
};
function createBaseQueryPaymentAccountResponse(): QueryPaymentAccountResponse {
  return {
    paymentAccount: PaymentAccount.fromPartial({})
  };
}
export const QueryPaymentAccountResponse = {
  encode(message: QueryPaymentAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.paymentAccount !== undefined) {
      PaymentAccount.encode(message.paymentAccount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPaymentAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPaymentAccountResponse();
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
  fromJSON(object: any): QueryPaymentAccountResponse {
    return {
      paymentAccount: isSet(object.paymentAccount) ? PaymentAccount.fromJSON(object.paymentAccount) : undefined
    };
  },
  toJSON(message: QueryPaymentAccountResponse): unknown {
    const obj: any = {};
    message.paymentAccount !== undefined && (obj.paymentAccount = message.paymentAccount ? PaymentAccount.toJSON(message.paymentAccount) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryPaymentAccountResponse>, I>>(object: I): QueryPaymentAccountResponse {
    const message = createBaseQueryPaymentAccountResponse();
    message.paymentAccount = object.paymentAccount !== undefined && object.paymentAccount !== null ? PaymentAccount.fromPartial(object.paymentAccount) : undefined;
    return message;
  },
  fromSDK(object: QueryPaymentAccountResponseSDKType): QueryPaymentAccountResponse {
    return {
      paymentAccount: object.payment_account ? PaymentAccount.fromSDK(object.payment_account) : undefined
    };
  },
  toSDK(message: QueryPaymentAccountResponse): QueryPaymentAccountResponseSDKType {
    const obj: any = {};
    message.paymentAccount !== undefined && (obj.payment_account = message.paymentAccount ? PaymentAccount.toSDK(message.paymentAccount) : undefined);
    return obj;
  }
};
function createBaseQueryPaymentAccountsRequest(): QueryPaymentAccountsRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryPaymentAccountsRequest = {
  encode(message: QueryPaymentAccountsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPaymentAccountsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPaymentAccountsRequest();
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
  fromJSON(object: any): QueryPaymentAccountsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryPaymentAccountsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryPaymentAccountsRequest>, I>>(object: I): QueryPaymentAccountsRequest {
    const message = createBaseQueryPaymentAccountsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryPaymentAccountsRequestSDKType): QueryPaymentAccountsRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryPaymentAccountsRequest): QueryPaymentAccountsRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  }
};
function createBaseQueryPaymentAccountsResponse(): QueryPaymentAccountsResponse {
  return {
    paymentAccounts: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryPaymentAccountsResponse = {
  encode(message: QueryPaymentAccountsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.paymentAccounts) {
      PaymentAccount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPaymentAccountsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPaymentAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.paymentAccounts.push(PaymentAccount.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryPaymentAccountsResponse {
    return {
      paymentAccounts: Array.isArray(object?.paymentAccounts) ? object.paymentAccounts.map((e: any) => PaymentAccount.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryPaymentAccountsResponse): unknown {
    const obj: any = {};
    if (message.paymentAccounts) {
      obj.paymentAccounts = message.paymentAccounts.map(e => e ? PaymentAccount.toJSON(e) : undefined);
    } else {
      obj.paymentAccounts = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryPaymentAccountsResponse>, I>>(object: I): QueryPaymentAccountsResponse {
    const message = createBaseQueryPaymentAccountsResponse();
    message.paymentAccounts = object.paymentAccounts?.map(e => PaymentAccount.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryPaymentAccountsResponseSDKType): QueryPaymentAccountsResponse {
    return {
      paymentAccounts: Array.isArray(object?.payment_accounts) ? object.payment_accounts.map((e: any) => PaymentAccount.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryPaymentAccountsResponse): QueryPaymentAccountsResponseSDKType {
    const obj: any = {};
    if (message.paymentAccounts) {
      obj.payment_accounts = message.paymentAccounts.map(e => e ? PaymentAccount.toSDK(e) : undefined);
    } else {
      obj.payment_accounts = [];
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
    streamRecord: StreamRecord.fromPartial({}),
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
function createBaseQueryPaymentAccountsByOwnerRequest(): QueryPaymentAccountsByOwnerRequest {
  return {
    owner: ""
  };
}
export const QueryPaymentAccountsByOwnerRequest = {
  encode(message: QueryPaymentAccountsByOwnerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPaymentAccountsByOwnerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPaymentAccountsByOwnerRequest();
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
  fromJSON(object: any): QueryPaymentAccountsByOwnerRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },
  toJSON(message: QueryPaymentAccountsByOwnerRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryPaymentAccountsByOwnerRequest>, I>>(object: I): QueryPaymentAccountsByOwnerRequest {
    const message = createBaseQueryPaymentAccountsByOwnerRequest();
    message.owner = object.owner ?? "";
    return message;
  },
  fromSDK(object: QueryPaymentAccountsByOwnerRequestSDKType): QueryPaymentAccountsByOwnerRequest {
    return {
      owner: object?.owner
    };
  },
  toSDK(message: QueryPaymentAccountsByOwnerRequest): QueryPaymentAccountsByOwnerRequestSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    return obj;
  }
};
function createBaseQueryPaymentAccountsByOwnerResponse(): QueryPaymentAccountsByOwnerResponse {
  return {
    paymentAccounts: []
  };
}
export const QueryPaymentAccountsByOwnerResponse = {
  encode(message: QueryPaymentAccountsByOwnerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.paymentAccounts) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPaymentAccountsByOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPaymentAccountsByOwnerResponse();
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
  fromJSON(object: any): QueryPaymentAccountsByOwnerResponse {
    return {
      paymentAccounts: Array.isArray(object?.paymentAccounts) ? object.paymentAccounts.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: QueryPaymentAccountsByOwnerResponse): unknown {
    const obj: any = {};
    if (message.paymentAccounts) {
      obj.paymentAccounts = message.paymentAccounts.map(e => e);
    } else {
      obj.paymentAccounts = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryPaymentAccountsByOwnerResponse>, I>>(object: I): QueryPaymentAccountsByOwnerResponse {
    const message = createBaseQueryPaymentAccountsByOwnerResponse();
    message.paymentAccounts = object.paymentAccounts?.map(e => e) || [];
    return message;
  },
  fromSDK(object: QueryPaymentAccountsByOwnerResponseSDKType): QueryPaymentAccountsByOwnerResponse {
    return {
      paymentAccounts: Array.isArray(object?.paymentAccounts) ? object.paymentAccounts.map((e: any) => e) : []
    };
  },
  toSDK(message: QueryPaymentAccountsByOwnerResponse): QueryPaymentAccountsByOwnerResponseSDKType {
    const obj: any = {};
    if (message.paymentAccounts) {
      obj.paymentAccounts = message.paymentAccounts.map(e => e);
    } else {
      obj.paymentAccounts = [];
    }
    return obj;
  }
};
function createBaseQueryAutoSettleRecordsRequest(): QueryAutoSettleRecordsRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAutoSettleRecordsRequest = {
  encode(message: QueryAutoSettleRecordsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAutoSettleRecordsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAutoSettleRecordsRequest();
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
  fromJSON(object: any): QueryAutoSettleRecordsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAutoSettleRecordsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAutoSettleRecordsRequest>, I>>(object: I): QueryAutoSettleRecordsRequest {
    const message = createBaseQueryAutoSettleRecordsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryAutoSettleRecordsRequestSDKType): QueryAutoSettleRecordsRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryAutoSettleRecordsRequest): QueryAutoSettleRecordsRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  }
};
function createBaseQueryAutoSettleRecordsResponse(): QueryAutoSettleRecordsResponse {
  return {
    autoSettleRecords: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAutoSettleRecordsResponse = {
  encode(message: QueryAutoSettleRecordsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.autoSettleRecords) {
      AutoSettleRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAutoSettleRecordsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAutoSettleRecordsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.autoSettleRecords.push(AutoSettleRecord.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryAutoSettleRecordsResponse {
    return {
      autoSettleRecords: Array.isArray(object?.autoSettleRecords) ? object.autoSettleRecords.map((e: any) => AutoSettleRecord.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAutoSettleRecordsResponse): unknown {
    const obj: any = {};
    if (message.autoSettleRecords) {
      obj.autoSettleRecords = message.autoSettleRecords.map(e => e ? AutoSettleRecord.toJSON(e) : undefined);
    } else {
      obj.autoSettleRecords = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAutoSettleRecordsResponse>, I>>(object: I): QueryAutoSettleRecordsResponse {
    const message = createBaseQueryAutoSettleRecordsResponse();
    message.autoSettleRecords = object.autoSettleRecords?.map(e => AutoSettleRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryAutoSettleRecordsResponseSDKType): QueryAutoSettleRecordsResponse {
    return {
      autoSettleRecords: Array.isArray(object?.auto_settle_records) ? object.auto_settle_records.map((e: any) => AutoSettleRecord.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryAutoSettleRecordsResponse): QueryAutoSettleRecordsResponseSDKType {
    const obj: any = {};
    if (message.autoSettleRecords) {
      obj.auto_settle_records = message.autoSettleRecords.map(e => e ? AutoSettleRecord.toSDK(e) : undefined);
    } else {
      obj.auto_settle_records = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  }
};
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** ParamsByTimestamp queries the parameter of the module by timestamp. */
  ParamsByTimestamp(request: QueryParamsByTimestampRequest): Promise<QueryParamsByTimestampResponse>;
  /** Queries our flows by account. */
  OutFlows(request: QueryOutFlowsRequest): Promise<QueryOutFlowsResponse>;
  /** Queries a stream record by account. */
  StreamRecord(request: QueryGetStreamRecordRequest): Promise<QueryGetStreamRecordResponse>;
  /** Queries all stream records. */
  StreamRecords(request?: QueryStreamRecordsRequest): Promise<QueryStreamRecordsResponse>;
  /** Queries the count of payment account by owner. */
  PaymentAccountCount(request: QueryPaymentAccountCountRequest): Promise<QueryPaymentAccountCountResponse>;
  /** Queries all counts of payment account for all owners. */
  PaymentAccountCounts(request?: QueryPaymentAccountCountsRequest): Promise<QueryPaymentAccountCountsResponse>;
  /** Queries a payment account by payment account address. */
  PaymentAccount(request: QueryPaymentAccountRequest): Promise<QueryPaymentAccountResponse>;
  /** Queries all payment accounts. */
  PaymentAccounts(request?: QueryPaymentAccountsRequest): Promise<QueryPaymentAccountsResponse>;
  /** Queries dynamic balance of a payment account. */
  DynamicBalance(request: QueryDynamicBalanceRequest): Promise<QueryDynamicBalanceResponse>;
  /** Queries all payment accounts by a owner. */
  PaymentAccountsByOwner(request: QueryPaymentAccountsByOwnerRequest): Promise<QueryPaymentAccountsByOwnerResponse>;
  /** Queries all auto settle records. */
  AutoSettleRecords(request?: QueryAutoSettleRecordsRequest): Promise<QueryAutoSettleRecordsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.ParamsByTimestamp = this.ParamsByTimestamp.bind(this);
    this.OutFlows = this.OutFlows.bind(this);
    this.StreamRecord = this.StreamRecord.bind(this);
    this.StreamRecords = this.StreamRecords.bind(this);
    this.PaymentAccountCount = this.PaymentAccountCount.bind(this);
    this.PaymentAccountCounts = this.PaymentAccountCounts.bind(this);
    this.PaymentAccount = this.PaymentAccount.bind(this);
    this.PaymentAccounts = this.PaymentAccounts.bind(this);
    this.DynamicBalance = this.DynamicBalance.bind(this);
    this.PaymentAccountsByOwner = this.PaymentAccountsByOwner.bind(this);
    this.AutoSettleRecords = this.AutoSettleRecords.bind(this);
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
  OutFlows(request: QueryOutFlowsRequest): Promise<QueryOutFlowsResponse> {
    const data = QueryOutFlowsRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.payment.Query", "OutFlows", data);
    return promise.then(data => QueryOutFlowsResponse.decode(new _m0.Reader(data)));
  }
  StreamRecord(request: QueryGetStreamRecordRequest): Promise<QueryGetStreamRecordResponse> {
    const data = QueryGetStreamRecordRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.payment.Query", "StreamRecord", data);
    return promise.then(data => QueryGetStreamRecordResponse.decode(new _m0.Reader(data)));
  }
  StreamRecords(request: QueryStreamRecordsRequest = {
    pagination: undefined
  }): Promise<QueryStreamRecordsResponse> {
    const data = QueryStreamRecordsRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.payment.Query", "StreamRecords", data);
    return promise.then(data => QueryStreamRecordsResponse.decode(new _m0.Reader(data)));
  }
  PaymentAccountCount(request: QueryPaymentAccountCountRequest): Promise<QueryPaymentAccountCountResponse> {
    const data = QueryPaymentAccountCountRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.payment.Query", "PaymentAccountCount", data);
    return promise.then(data => QueryPaymentAccountCountResponse.decode(new _m0.Reader(data)));
  }
  PaymentAccountCounts(request: QueryPaymentAccountCountsRequest = {
    pagination: undefined
  }): Promise<QueryPaymentAccountCountsResponse> {
    const data = QueryPaymentAccountCountsRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.payment.Query", "PaymentAccountCounts", data);
    return promise.then(data => QueryPaymentAccountCountsResponse.decode(new _m0.Reader(data)));
  }
  PaymentAccount(request: QueryPaymentAccountRequest): Promise<QueryPaymentAccountResponse> {
    const data = QueryPaymentAccountRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.payment.Query", "PaymentAccount", data);
    return promise.then(data => QueryPaymentAccountResponse.decode(new _m0.Reader(data)));
  }
  PaymentAccounts(request: QueryPaymentAccountsRequest = {
    pagination: undefined
  }): Promise<QueryPaymentAccountsResponse> {
    const data = QueryPaymentAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.payment.Query", "PaymentAccounts", data);
    return promise.then(data => QueryPaymentAccountsResponse.decode(new _m0.Reader(data)));
  }
  DynamicBalance(request: QueryDynamicBalanceRequest): Promise<QueryDynamicBalanceResponse> {
    const data = QueryDynamicBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.payment.Query", "DynamicBalance", data);
    return promise.then(data => QueryDynamicBalanceResponse.decode(new _m0.Reader(data)));
  }
  PaymentAccountsByOwner(request: QueryPaymentAccountsByOwnerRequest): Promise<QueryPaymentAccountsByOwnerResponse> {
    const data = QueryPaymentAccountsByOwnerRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.payment.Query", "PaymentAccountsByOwner", data);
    return promise.then(data => QueryPaymentAccountsByOwnerResponse.decode(new _m0.Reader(data)));
  }
  AutoSettleRecords(request: QueryAutoSettleRecordsRequest = {
    pagination: undefined
  }): Promise<QueryAutoSettleRecordsResponse> {
    const data = QueryAutoSettleRecordsRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.payment.Query", "AutoSettleRecords", data);
    return promise.then(data => QueryAutoSettleRecordsResponse.decode(new _m0.Reader(data)));
  }
}