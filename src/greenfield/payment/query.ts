//@ts-nocheck
/* eslint-disable */
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { OutFlow, OutFlowSDKType } from "./out_flow";
import { StreamRecord, StreamRecordSDKType } from "./stream_record";
import { PaymentAccountCount, PaymentAccountCountSDKType } from "./payment_account_count";
import { PaymentAccount, PaymentAccountSDKType } from "./payment_account";
import { AutoSettleRecord, AutoSettleRecordSDKType } from "./auto_settle_record";
import { DelayedWithdrawalRecord, DelayedWithdrawalRecordSDKType } from "./delayed_withdrawal_record";
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial, Exact, isSet, Rpc } from "../../helpers";
export const protobufPackage = "greenfield.payment";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/greenfield.payment.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/greenfield.payment.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** QueryParamsByTimestampRequest is request type for the Query/ParamsByTimestamp RPC method with timestamp. */
export interface QueryParamsByTimestampRequest {
  /** the timestamp of the block time you want to query */
  timestamp: bigint;
}
export interface QueryParamsByTimestampRequestProtoMsg {
  typeUrl: "/greenfield.payment.QueryParamsByTimestampRequest";
  value: Uint8Array;
}
/** QueryParamsByTimestampRequest is request type for the Query/ParamsByTimestamp RPC method with timestamp. */
export interface QueryParamsByTimestampRequestSDKType {
  timestamp: bigint;
}
/** QueryParamsByTimestampResponse is response type for the Query/ParamsByTimestamp RPC method with timestamp. */
export interface QueryParamsByTimestampResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsByTimestampResponseProtoMsg {
  typeUrl: "/greenfield.payment.QueryParamsByTimestampResponse";
  value: Uint8Array;
}
/** QueryParamsByTimestampResponse is response type for the Query/ParamsByTimestamp RPC method with timestamp. */
export interface QueryParamsByTimestampResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryOutFlowsRequest {
  account: string;
}
export interface QueryOutFlowsRequestProtoMsg {
  typeUrl: "/greenfield.payment.QueryOutFlowsRequest";
  value: Uint8Array;
}
export interface QueryOutFlowsRequestSDKType {
  account: string;
}
export interface QueryOutFlowsResponse {
  outFlows: OutFlow[];
}
export interface QueryOutFlowsResponseProtoMsg {
  typeUrl: "/greenfield.payment.QueryOutFlowsResponse";
  value: Uint8Array;
}
export interface QueryOutFlowsResponseSDKType {
  out_flows: OutFlowSDKType[];
}
export interface QueryGetStreamRecordRequest {
  account: string;
}
export interface QueryGetStreamRecordRequestProtoMsg {
  typeUrl: "/greenfield.payment.QueryGetStreamRecordRequest";
  value: Uint8Array;
}
export interface QueryGetStreamRecordRequestSDKType {
  account: string;
}
export interface QueryGetStreamRecordResponse {
  streamRecord: StreamRecord;
}
export interface QueryGetStreamRecordResponseProtoMsg {
  typeUrl: "/greenfield.payment.QueryGetStreamRecordResponse";
  value: Uint8Array;
}
export interface QueryGetStreamRecordResponseSDKType {
  stream_record: StreamRecordSDKType;
}
export interface QueryStreamRecordsRequest {
  pagination?: PageRequest;
}
export interface QueryStreamRecordsRequestProtoMsg {
  typeUrl: "/greenfield.payment.QueryStreamRecordsRequest";
  value: Uint8Array;
}
export interface QueryStreamRecordsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryStreamRecordsResponse {
  streamRecords: StreamRecord[];
  pagination?: PageResponse;
}
export interface QueryStreamRecordsResponseProtoMsg {
  typeUrl: "/greenfield.payment.QueryStreamRecordsResponse";
  value: Uint8Array;
}
export interface QueryStreamRecordsResponseSDKType {
  stream_records: StreamRecordSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryPaymentAccountCountRequest {
  owner: string;
}
export interface QueryPaymentAccountCountRequestProtoMsg {
  typeUrl: "/greenfield.payment.QueryPaymentAccountCountRequest";
  value: Uint8Array;
}
export interface QueryPaymentAccountCountRequestSDKType {
  owner: string;
}
export interface QueryPaymentAccountCountResponse {
  paymentAccountCount: PaymentAccountCount;
}
export interface QueryPaymentAccountCountResponseProtoMsg {
  typeUrl: "/greenfield.payment.QueryPaymentAccountCountResponse";
  value: Uint8Array;
}
export interface QueryPaymentAccountCountResponseSDKType {
  payment_account_count: PaymentAccountCountSDKType;
}
export interface QueryPaymentAccountCountsRequest {
  pagination?: PageRequest;
}
export interface QueryPaymentAccountCountsRequestProtoMsg {
  typeUrl: "/greenfield.payment.QueryPaymentAccountCountsRequest";
  value: Uint8Array;
}
export interface QueryPaymentAccountCountsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryPaymentAccountCountsResponse {
  paymentAccountCounts: PaymentAccountCount[];
  pagination?: PageResponse;
}
export interface QueryPaymentAccountCountsResponseProtoMsg {
  typeUrl: "/greenfield.payment.QueryPaymentAccountCountsResponse";
  value: Uint8Array;
}
export interface QueryPaymentAccountCountsResponseSDKType {
  payment_account_counts: PaymentAccountCountSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryPaymentAccountRequest {
  addr: string;
}
export interface QueryPaymentAccountRequestProtoMsg {
  typeUrl: "/greenfield.payment.QueryPaymentAccountRequest";
  value: Uint8Array;
}
export interface QueryPaymentAccountRequestSDKType {
  addr: string;
}
export interface QueryPaymentAccountResponse {
  paymentAccount: PaymentAccount;
}
export interface QueryPaymentAccountResponseProtoMsg {
  typeUrl: "/greenfield.payment.QueryPaymentAccountResponse";
  value: Uint8Array;
}
export interface QueryPaymentAccountResponseSDKType {
  payment_account: PaymentAccountSDKType;
}
export interface QueryPaymentAccountsRequest {
  pagination?: PageRequest;
}
export interface QueryPaymentAccountsRequestProtoMsg {
  typeUrl: "/greenfield.payment.QueryPaymentAccountsRequest";
  value: Uint8Array;
}
export interface QueryPaymentAccountsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryPaymentAccountsResponse {
  paymentAccounts: PaymentAccount[];
  pagination?: PageResponse;
}
export interface QueryPaymentAccountsResponseProtoMsg {
  typeUrl: "/greenfield.payment.QueryPaymentAccountsResponse";
  value: Uint8Array;
}
export interface QueryPaymentAccountsResponseSDKType {
  payment_accounts: PaymentAccountSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryDynamicBalanceRequest {
  account: string;
}
export interface QueryDynamicBalanceRequestProtoMsg {
  typeUrl: "/greenfield.payment.QueryDynamicBalanceRequest";
  value: Uint8Array;
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
  currentTimestamp: bigint;
  /** bank_balance is the BNB balance of the bank module */
  bankBalance: string;
  /** available_balance is bank balance + static balance */
  availableBalance: string;
  /** locked_fee is buffer balance + locked balance */
  lockedFee: string;
  /** change_rate is the netflow rate of the given account */
  changeRate: string;
}
export interface QueryDynamicBalanceResponseProtoMsg {
  typeUrl: "/greenfield.payment.QueryDynamicBalanceResponse";
  value: Uint8Array;
}
export interface QueryDynamicBalanceResponseSDKType {
  dynamic_balance: string;
  stream_record: StreamRecordSDKType;
  current_timestamp: bigint;
  bank_balance: string;
  available_balance: string;
  locked_fee: string;
  change_rate: string;
}
export interface QueryPaymentAccountsByOwnerRequest {
  owner: string;
}
export interface QueryPaymentAccountsByOwnerRequestProtoMsg {
  typeUrl: "/greenfield.payment.QueryPaymentAccountsByOwnerRequest";
  value: Uint8Array;
}
export interface QueryPaymentAccountsByOwnerRequestSDKType {
  owner: string;
}
export interface QueryPaymentAccountsByOwnerResponse {
  paymentAccounts: string[];
}
export interface QueryPaymentAccountsByOwnerResponseProtoMsg {
  typeUrl: "/greenfield.payment.QueryPaymentAccountsByOwnerResponse";
  value: Uint8Array;
}
export interface QueryPaymentAccountsByOwnerResponseSDKType {
  paymentAccounts: string[];
}
export interface QueryAutoSettleRecordsRequest {
  pagination?: PageRequest;
}
export interface QueryAutoSettleRecordsRequestProtoMsg {
  typeUrl: "/greenfield.payment.QueryAutoSettleRecordsRequest";
  value: Uint8Array;
}
export interface QueryAutoSettleRecordsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAutoSettleRecordsResponse {
  autoSettleRecords: AutoSettleRecord[];
  pagination?: PageResponse;
}
export interface QueryAutoSettleRecordsResponseProtoMsg {
  typeUrl: "/greenfield.payment.QueryAutoSettleRecordsResponse";
  value: Uint8Array;
}
export interface QueryAutoSettleRecordsResponseSDKType {
  auto_settle_records: AutoSettleRecordSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryDelayedWithdrawalRequest {
  account: string;
}
export interface QueryDelayedWithdrawalRequestProtoMsg {
  typeUrl: "/greenfield.payment.QueryDelayedWithdrawalRequest";
  value: Uint8Array;
}
export interface QueryDelayedWithdrawalRequestSDKType {
  account: string;
}
export interface QueryDelayedWithdrawalResponse {
  delayedWithdrawal: DelayedWithdrawalRecord;
}
export interface QueryDelayedWithdrawalResponseProtoMsg {
  typeUrl: "/greenfield.payment.QueryDelayedWithdrawalResponse";
  value: Uint8Array;
}
export interface QueryDelayedWithdrawalResponseSDKType {
  delayed_withdrawal: DelayedWithdrawalRecordSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/greenfield.payment.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/greenfield.payment.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/greenfield.payment.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/greenfield.payment.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsByTimestampRequest(): QueryParamsByTimestampRequest {
  return {
    timestamp: BigInt(0)
  };
}
export const QueryParamsByTimestampRequest = {
  typeUrl: "/greenfield.payment.QueryParamsByTimestampRequest",
  encode(message: QueryParamsByTimestampRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(8).int64(message.timestamp);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsByTimestampRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsByTimestampRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = reader.int64();
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
      timestamp: isSet(object.timestamp) ? BigInt(object.timestamp.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryParamsByTimestampRequest): unknown {
    const obj: any = {};
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsByTimestampRequest>, I>>(object: I): QueryParamsByTimestampRequest {
    const message = createBaseQueryParamsByTimestampRequest();
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
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
  },
  fromAmino(object: QueryParamsByTimestampRequestAmino): QueryParamsByTimestampRequest {
    const message = createBaseQueryParamsByTimestampRequest();
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp);
    }
    return message;
  },
  toAmino(message: QueryParamsByTimestampRequest): QueryParamsByTimestampRequestAmino {
    const obj: any = {};
    obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsByTimestampRequestAminoMsg): QueryParamsByTimestampRequest {
    return QueryParamsByTimestampRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsByTimestampRequestProtoMsg): QueryParamsByTimestampRequest {
    return QueryParamsByTimestampRequest.decode(message.value);
  },
  toProto(message: QueryParamsByTimestampRequest): Uint8Array {
    return QueryParamsByTimestampRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsByTimestampRequest): QueryParamsByTimestampRequestProtoMsg {
    return {
      typeUrl: "/greenfield.payment.QueryParamsByTimestampRequest",
      value: QueryParamsByTimestampRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsByTimestampResponse(): QueryParamsByTimestampResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsByTimestampResponse = {
  typeUrl: "/greenfield.payment.QueryParamsByTimestampResponse",
  encode(message: QueryParamsByTimestampResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsByTimestampResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryParamsByTimestampResponseAmino): QueryParamsByTimestampResponse {
    const message = createBaseQueryParamsByTimestampResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsByTimestampResponse): QueryParamsByTimestampResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsByTimestampResponseAminoMsg): QueryParamsByTimestampResponse {
    return QueryParamsByTimestampResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsByTimestampResponseProtoMsg): QueryParamsByTimestampResponse {
    return QueryParamsByTimestampResponse.decode(message.value);
  },
  toProto(message: QueryParamsByTimestampResponse): Uint8Array {
    return QueryParamsByTimestampResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsByTimestampResponse): QueryParamsByTimestampResponseProtoMsg {
    return {
      typeUrl: "/greenfield.payment.QueryParamsByTimestampResponse",
      value: QueryParamsByTimestampResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOutFlowsRequest(): QueryOutFlowsRequest {
  return {
    account: ""
  };
}
export const QueryOutFlowsRequest = {
  typeUrl: "/greenfield.payment.QueryOutFlowsRequest",
  encode(message: QueryOutFlowsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOutFlowsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryOutFlowsRequestAmino): QueryOutFlowsRequest {
    const message = createBaseQueryOutFlowsRequest();
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    return message;
  },
  toAmino(message: QueryOutFlowsRequest): QueryOutFlowsRequestAmino {
    const obj: any = {};
    obj.account = message.account;
    return obj;
  },
  fromAminoMsg(object: QueryOutFlowsRequestAminoMsg): QueryOutFlowsRequest {
    return QueryOutFlowsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOutFlowsRequestProtoMsg): QueryOutFlowsRequest {
    return QueryOutFlowsRequest.decode(message.value);
  },
  toProto(message: QueryOutFlowsRequest): Uint8Array {
    return QueryOutFlowsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOutFlowsRequest): QueryOutFlowsRequestProtoMsg {
    return {
      typeUrl: "/greenfield.payment.QueryOutFlowsRequest",
      value: QueryOutFlowsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOutFlowsResponse(): QueryOutFlowsResponse {
  return {
    outFlows: []
  };
}
export const QueryOutFlowsResponse = {
  typeUrl: "/greenfield.payment.QueryOutFlowsResponse",
  encode(message: QueryOutFlowsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.outFlows) {
      OutFlow.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOutFlowsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryOutFlowsResponseAmino): QueryOutFlowsResponse {
    const message = createBaseQueryOutFlowsResponse();
    message.outFlows = object.out_flows?.map(e => OutFlow.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryOutFlowsResponse): QueryOutFlowsResponseAmino {
    const obj: any = {};
    if (message.outFlows) {
      obj.out_flows = message.outFlows.map(e => e ? OutFlow.toAmino(e) : undefined);
    } else {
      obj.out_flows = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryOutFlowsResponseAminoMsg): QueryOutFlowsResponse {
    return QueryOutFlowsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOutFlowsResponseProtoMsg): QueryOutFlowsResponse {
    return QueryOutFlowsResponse.decode(message.value);
  },
  toProto(message: QueryOutFlowsResponse): Uint8Array {
    return QueryOutFlowsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOutFlowsResponse): QueryOutFlowsResponseProtoMsg {
    return {
      typeUrl: "/greenfield.payment.QueryOutFlowsResponse",
      value: QueryOutFlowsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetStreamRecordRequest(): QueryGetStreamRecordRequest {
  return {
    account: ""
  };
}
export const QueryGetStreamRecordRequest = {
  typeUrl: "/greenfield.payment.QueryGetStreamRecordRequest",
  encode(message: QueryGetStreamRecordRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetStreamRecordRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryGetStreamRecordRequestAmino): QueryGetStreamRecordRequest {
    const message = createBaseQueryGetStreamRecordRequest();
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    return message;
  },
  toAmino(message: QueryGetStreamRecordRequest): QueryGetStreamRecordRequestAmino {
    const obj: any = {};
    obj.account = message.account;
    return obj;
  },
  fromAminoMsg(object: QueryGetStreamRecordRequestAminoMsg): QueryGetStreamRecordRequest {
    return QueryGetStreamRecordRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetStreamRecordRequestProtoMsg): QueryGetStreamRecordRequest {
    return QueryGetStreamRecordRequest.decode(message.value);
  },
  toProto(message: QueryGetStreamRecordRequest): Uint8Array {
    return QueryGetStreamRecordRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetStreamRecordRequest): QueryGetStreamRecordRequestProtoMsg {
    return {
      typeUrl: "/greenfield.payment.QueryGetStreamRecordRequest",
      value: QueryGetStreamRecordRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetStreamRecordResponse(): QueryGetStreamRecordResponse {
  return {
    streamRecord: StreamRecord.fromPartial({})
  };
}
export const QueryGetStreamRecordResponse = {
  typeUrl: "/greenfield.payment.QueryGetStreamRecordResponse",
  encode(message: QueryGetStreamRecordResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.streamRecord !== undefined) {
      StreamRecord.encode(message.streamRecord, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetStreamRecordResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryGetStreamRecordResponseAmino): QueryGetStreamRecordResponse {
    const message = createBaseQueryGetStreamRecordResponse();
    if (object.stream_record !== undefined && object.stream_record !== null) {
      message.streamRecord = StreamRecord.fromAmino(object.stream_record);
    }
    return message;
  },
  toAmino(message: QueryGetStreamRecordResponse): QueryGetStreamRecordResponseAmino {
    const obj: any = {};
    obj.stream_record = message.streamRecord ? StreamRecord.toAmino(message.streamRecord) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetStreamRecordResponseAminoMsg): QueryGetStreamRecordResponse {
    return QueryGetStreamRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetStreamRecordResponseProtoMsg): QueryGetStreamRecordResponse {
    return QueryGetStreamRecordResponse.decode(message.value);
  },
  toProto(message: QueryGetStreamRecordResponse): Uint8Array {
    return QueryGetStreamRecordResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetStreamRecordResponse): QueryGetStreamRecordResponseProtoMsg {
    return {
      typeUrl: "/greenfield.payment.QueryGetStreamRecordResponse",
      value: QueryGetStreamRecordResponse.encode(message).finish()
    };
  }
};
function createBaseQueryStreamRecordsRequest(): QueryStreamRecordsRequest {
  return {
    pagination: undefined
  };
}
export const QueryStreamRecordsRequest = {
  typeUrl: "/greenfield.payment.QueryStreamRecordsRequest",
  encode(message: QueryStreamRecordsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStreamRecordsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryStreamRecordsRequestAmino): QueryStreamRecordsRequest {
    const message = createBaseQueryStreamRecordsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryStreamRecordsRequest): QueryStreamRecordsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryStreamRecordsRequestAminoMsg): QueryStreamRecordsRequest {
    return QueryStreamRecordsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStreamRecordsRequestProtoMsg): QueryStreamRecordsRequest {
    return QueryStreamRecordsRequest.decode(message.value);
  },
  toProto(message: QueryStreamRecordsRequest): Uint8Array {
    return QueryStreamRecordsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryStreamRecordsRequest): QueryStreamRecordsRequestProtoMsg {
    return {
      typeUrl: "/greenfield.payment.QueryStreamRecordsRequest",
      value: QueryStreamRecordsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryStreamRecordsResponse(): QueryStreamRecordsResponse {
  return {
    streamRecords: [],
    pagination: undefined
  };
}
export const QueryStreamRecordsResponse = {
  typeUrl: "/greenfield.payment.QueryStreamRecordsResponse",
  encode(message: QueryStreamRecordsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.streamRecords) {
      StreamRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStreamRecordsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryStreamRecordsResponseAmino): QueryStreamRecordsResponse {
    const message = createBaseQueryStreamRecordsResponse();
    message.streamRecords = object.stream_records?.map(e => StreamRecord.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryStreamRecordsResponse): QueryStreamRecordsResponseAmino {
    const obj: any = {};
    if (message.streamRecords) {
      obj.stream_records = message.streamRecords.map(e => e ? StreamRecord.toAmino(e) : undefined);
    } else {
      obj.stream_records = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryStreamRecordsResponseAminoMsg): QueryStreamRecordsResponse {
    return QueryStreamRecordsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStreamRecordsResponseProtoMsg): QueryStreamRecordsResponse {
    return QueryStreamRecordsResponse.decode(message.value);
  },
  toProto(message: QueryStreamRecordsResponse): Uint8Array {
    return QueryStreamRecordsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryStreamRecordsResponse): QueryStreamRecordsResponseProtoMsg {
    return {
      typeUrl: "/greenfield.payment.QueryStreamRecordsResponse",
      value: QueryStreamRecordsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPaymentAccountCountRequest(): QueryPaymentAccountCountRequest {
  return {
    owner: ""
  };
}
export const QueryPaymentAccountCountRequest = {
  typeUrl: "/greenfield.payment.QueryPaymentAccountCountRequest",
  encode(message: QueryPaymentAccountCountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPaymentAccountCountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryPaymentAccountCountRequestAmino): QueryPaymentAccountCountRequest {
    const message = createBaseQueryPaymentAccountCountRequest();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: QueryPaymentAccountCountRequest): QueryPaymentAccountCountRequestAmino {
    const obj: any = {};
    obj.owner = message.owner;
    return obj;
  },
  fromAminoMsg(object: QueryPaymentAccountCountRequestAminoMsg): QueryPaymentAccountCountRequest {
    return QueryPaymentAccountCountRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPaymentAccountCountRequestProtoMsg): QueryPaymentAccountCountRequest {
    return QueryPaymentAccountCountRequest.decode(message.value);
  },
  toProto(message: QueryPaymentAccountCountRequest): Uint8Array {
    return QueryPaymentAccountCountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPaymentAccountCountRequest): QueryPaymentAccountCountRequestProtoMsg {
    return {
      typeUrl: "/greenfield.payment.QueryPaymentAccountCountRequest",
      value: QueryPaymentAccountCountRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPaymentAccountCountResponse(): QueryPaymentAccountCountResponse {
  return {
    paymentAccountCount: PaymentAccountCount.fromPartial({})
  };
}
export const QueryPaymentAccountCountResponse = {
  typeUrl: "/greenfield.payment.QueryPaymentAccountCountResponse",
  encode(message: QueryPaymentAccountCountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.paymentAccountCount !== undefined) {
      PaymentAccountCount.encode(message.paymentAccountCount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPaymentAccountCountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryPaymentAccountCountResponseAmino): QueryPaymentAccountCountResponse {
    const message = createBaseQueryPaymentAccountCountResponse();
    if (object.payment_account_count !== undefined && object.payment_account_count !== null) {
      message.paymentAccountCount = PaymentAccountCount.fromAmino(object.payment_account_count);
    }
    return message;
  },
  toAmino(message: QueryPaymentAccountCountResponse): QueryPaymentAccountCountResponseAmino {
    const obj: any = {};
    obj.payment_account_count = message.paymentAccountCount ? PaymentAccountCount.toAmino(message.paymentAccountCount) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPaymentAccountCountResponseAminoMsg): QueryPaymentAccountCountResponse {
    return QueryPaymentAccountCountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPaymentAccountCountResponseProtoMsg): QueryPaymentAccountCountResponse {
    return QueryPaymentAccountCountResponse.decode(message.value);
  },
  toProto(message: QueryPaymentAccountCountResponse): Uint8Array {
    return QueryPaymentAccountCountResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPaymentAccountCountResponse): QueryPaymentAccountCountResponseProtoMsg {
    return {
      typeUrl: "/greenfield.payment.QueryPaymentAccountCountResponse",
      value: QueryPaymentAccountCountResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPaymentAccountCountsRequest(): QueryPaymentAccountCountsRequest {
  return {
    pagination: undefined
  };
}
export const QueryPaymentAccountCountsRequest = {
  typeUrl: "/greenfield.payment.QueryPaymentAccountCountsRequest",
  encode(message: QueryPaymentAccountCountsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPaymentAccountCountsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryPaymentAccountCountsRequestAmino): QueryPaymentAccountCountsRequest {
    const message = createBaseQueryPaymentAccountCountsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPaymentAccountCountsRequest): QueryPaymentAccountCountsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPaymentAccountCountsRequestAminoMsg): QueryPaymentAccountCountsRequest {
    return QueryPaymentAccountCountsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPaymentAccountCountsRequestProtoMsg): QueryPaymentAccountCountsRequest {
    return QueryPaymentAccountCountsRequest.decode(message.value);
  },
  toProto(message: QueryPaymentAccountCountsRequest): Uint8Array {
    return QueryPaymentAccountCountsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPaymentAccountCountsRequest): QueryPaymentAccountCountsRequestProtoMsg {
    return {
      typeUrl: "/greenfield.payment.QueryPaymentAccountCountsRequest",
      value: QueryPaymentAccountCountsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPaymentAccountCountsResponse(): QueryPaymentAccountCountsResponse {
  return {
    paymentAccountCounts: [],
    pagination: undefined
  };
}
export const QueryPaymentAccountCountsResponse = {
  typeUrl: "/greenfield.payment.QueryPaymentAccountCountsResponse",
  encode(message: QueryPaymentAccountCountsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.paymentAccountCounts) {
      PaymentAccountCount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPaymentAccountCountsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryPaymentAccountCountsResponseAmino): QueryPaymentAccountCountsResponse {
    const message = createBaseQueryPaymentAccountCountsResponse();
    message.paymentAccountCounts = object.payment_account_counts?.map(e => PaymentAccountCount.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPaymentAccountCountsResponse): QueryPaymentAccountCountsResponseAmino {
    const obj: any = {};
    if (message.paymentAccountCounts) {
      obj.payment_account_counts = message.paymentAccountCounts.map(e => e ? PaymentAccountCount.toAmino(e) : undefined);
    } else {
      obj.payment_account_counts = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPaymentAccountCountsResponseAminoMsg): QueryPaymentAccountCountsResponse {
    return QueryPaymentAccountCountsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPaymentAccountCountsResponseProtoMsg): QueryPaymentAccountCountsResponse {
    return QueryPaymentAccountCountsResponse.decode(message.value);
  },
  toProto(message: QueryPaymentAccountCountsResponse): Uint8Array {
    return QueryPaymentAccountCountsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPaymentAccountCountsResponse): QueryPaymentAccountCountsResponseProtoMsg {
    return {
      typeUrl: "/greenfield.payment.QueryPaymentAccountCountsResponse",
      value: QueryPaymentAccountCountsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPaymentAccountRequest(): QueryPaymentAccountRequest {
  return {
    addr: ""
  };
}
export const QueryPaymentAccountRequest = {
  typeUrl: "/greenfield.payment.QueryPaymentAccountRequest",
  encode(message: QueryPaymentAccountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.addr !== "") {
      writer.uint32(10).string(message.addr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPaymentAccountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryPaymentAccountRequestAmino): QueryPaymentAccountRequest {
    const message = createBaseQueryPaymentAccountRequest();
    if (object.addr !== undefined && object.addr !== null) {
      message.addr = object.addr;
    }
    return message;
  },
  toAmino(message: QueryPaymentAccountRequest): QueryPaymentAccountRequestAmino {
    const obj: any = {};
    obj.addr = message.addr;
    return obj;
  },
  fromAminoMsg(object: QueryPaymentAccountRequestAminoMsg): QueryPaymentAccountRequest {
    return QueryPaymentAccountRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPaymentAccountRequestProtoMsg): QueryPaymentAccountRequest {
    return QueryPaymentAccountRequest.decode(message.value);
  },
  toProto(message: QueryPaymentAccountRequest): Uint8Array {
    return QueryPaymentAccountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPaymentAccountRequest): QueryPaymentAccountRequestProtoMsg {
    return {
      typeUrl: "/greenfield.payment.QueryPaymentAccountRequest",
      value: QueryPaymentAccountRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPaymentAccountResponse(): QueryPaymentAccountResponse {
  return {
    paymentAccount: PaymentAccount.fromPartial({})
  };
}
export const QueryPaymentAccountResponse = {
  typeUrl: "/greenfield.payment.QueryPaymentAccountResponse",
  encode(message: QueryPaymentAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.paymentAccount !== undefined) {
      PaymentAccount.encode(message.paymentAccount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPaymentAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryPaymentAccountResponseAmino): QueryPaymentAccountResponse {
    const message = createBaseQueryPaymentAccountResponse();
    if (object.payment_account !== undefined && object.payment_account !== null) {
      message.paymentAccount = PaymentAccount.fromAmino(object.payment_account);
    }
    return message;
  },
  toAmino(message: QueryPaymentAccountResponse): QueryPaymentAccountResponseAmino {
    const obj: any = {};
    obj.payment_account = message.paymentAccount ? PaymentAccount.toAmino(message.paymentAccount) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPaymentAccountResponseAminoMsg): QueryPaymentAccountResponse {
    return QueryPaymentAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPaymentAccountResponseProtoMsg): QueryPaymentAccountResponse {
    return QueryPaymentAccountResponse.decode(message.value);
  },
  toProto(message: QueryPaymentAccountResponse): Uint8Array {
    return QueryPaymentAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPaymentAccountResponse): QueryPaymentAccountResponseProtoMsg {
    return {
      typeUrl: "/greenfield.payment.QueryPaymentAccountResponse",
      value: QueryPaymentAccountResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPaymentAccountsRequest(): QueryPaymentAccountsRequest {
  return {
    pagination: undefined
  };
}
export const QueryPaymentAccountsRequest = {
  typeUrl: "/greenfield.payment.QueryPaymentAccountsRequest",
  encode(message: QueryPaymentAccountsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPaymentAccountsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryPaymentAccountsRequestAmino): QueryPaymentAccountsRequest {
    const message = createBaseQueryPaymentAccountsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPaymentAccountsRequest): QueryPaymentAccountsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPaymentAccountsRequestAminoMsg): QueryPaymentAccountsRequest {
    return QueryPaymentAccountsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPaymentAccountsRequestProtoMsg): QueryPaymentAccountsRequest {
    return QueryPaymentAccountsRequest.decode(message.value);
  },
  toProto(message: QueryPaymentAccountsRequest): Uint8Array {
    return QueryPaymentAccountsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPaymentAccountsRequest): QueryPaymentAccountsRequestProtoMsg {
    return {
      typeUrl: "/greenfield.payment.QueryPaymentAccountsRequest",
      value: QueryPaymentAccountsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPaymentAccountsResponse(): QueryPaymentAccountsResponse {
  return {
    paymentAccounts: [],
    pagination: undefined
  };
}
export const QueryPaymentAccountsResponse = {
  typeUrl: "/greenfield.payment.QueryPaymentAccountsResponse",
  encode(message: QueryPaymentAccountsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.paymentAccounts) {
      PaymentAccount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPaymentAccountsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryPaymentAccountsResponseAmino): QueryPaymentAccountsResponse {
    const message = createBaseQueryPaymentAccountsResponse();
    message.paymentAccounts = object.payment_accounts?.map(e => PaymentAccount.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPaymentAccountsResponse): QueryPaymentAccountsResponseAmino {
    const obj: any = {};
    if (message.paymentAccounts) {
      obj.payment_accounts = message.paymentAccounts.map(e => e ? PaymentAccount.toAmino(e) : undefined);
    } else {
      obj.payment_accounts = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPaymentAccountsResponseAminoMsg): QueryPaymentAccountsResponse {
    return QueryPaymentAccountsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPaymentAccountsResponseProtoMsg): QueryPaymentAccountsResponse {
    return QueryPaymentAccountsResponse.decode(message.value);
  },
  toProto(message: QueryPaymentAccountsResponse): Uint8Array {
    return QueryPaymentAccountsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPaymentAccountsResponse): QueryPaymentAccountsResponseProtoMsg {
    return {
      typeUrl: "/greenfield.payment.QueryPaymentAccountsResponse",
      value: QueryPaymentAccountsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDynamicBalanceRequest(): QueryDynamicBalanceRequest {
  return {
    account: ""
  };
}
export const QueryDynamicBalanceRequest = {
  typeUrl: "/greenfield.payment.QueryDynamicBalanceRequest",
  encode(message: QueryDynamicBalanceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDynamicBalanceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryDynamicBalanceRequestAmino): QueryDynamicBalanceRequest {
    const message = createBaseQueryDynamicBalanceRequest();
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    return message;
  },
  toAmino(message: QueryDynamicBalanceRequest): QueryDynamicBalanceRequestAmino {
    const obj: any = {};
    obj.account = message.account;
    return obj;
  },
  fromAminoMsg(object: QueryDynamicBalanceRequestAminoMsg): QueryDynamicBalanceRequest {
    return QueryDynamicBalanceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDynamicBalanceRequestProtoMsg): QueryDynamicBalanceRequest {
    return QueryDynamicBalanceRequest.decode(message.value);
  },
  toProto(message: QueryDynamicBalanceRequest): Uint8Array {
    return QueryDynamicBalanceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDynamicBalanceRequest): QueryDynamicBalanceRequestProtoMsg {
    return {
      typeUrl: "/greenfield.payment.QueryDynamicBalanceRequest",
      value: QueryDynamicBalanceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDynamicBalanceResponse(): QueryDynamicBalanceResponse {
  return {
    dynamicBalance: "",
    streamRecord: StreamRecord.fromPartial({}),
    currentTimestamp: BigInt(0),
    bankBalance: "",
    availableBalance: "",
    lockedFee: "",
    changeRate: ""
  };
}
export const QueryDynamicBalanceResponse = {
  typeUrl: "/greenfield.payment.QueryDynamicBalanceResponse",
  encode(message: QueryDynamicBalanceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.dynamicBalance !== "") {
      writer.uint32(10).string(message.dynamicBalance);
    }
    if (message.streamRecord !== undefined) {
      StreamRecord.encode(message.streamRecord, writer.uint32(18).fork()).ldelim();
    }
    if (message.currentTimestamp !== BigInt(0)) {
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
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDynamicBalanceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.currentTimestamp = reader.int64();
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
      currentTimestamp: isSet(object.currentTimestamp) ? BigInt(object.currentTimestamp.toString()) : BigInt(0),
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
    message.currentTimestamp !== undefined && (obj.currentTimestamp = (message.currentTimestamp || BigInt(0)).toString());
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
    message.currentTimestamp = object.currentTimestamp !== undefined && object.currentTimestamp !== null ? BigInt(object.currentTimestamp.toString()) : BigInt(0);
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
  },
  fromAmino(object: QueryDynamicBalanceResponseAmino): QueryDynamicBalanceResponse {
    const message = createBaseQueryDynamicBalanceResponse();
    if (object.dynamic_balance !== undefined && object.dynamic_balance !== null) {
      message.dynamicBalance = object.dynamic_balance;
    }
    if (object.stream_record !== undefined && object.stream_record !== null) {
      message.streamRecord = StreamRecord.fromAmino(object.stream_record);
    }
    if (object.current_timestamp !== undefined && object.current_timestamp !== null) {
      message.currentTimestamp = BigInt(object.current_timestamp);
    }
    if (object.bank_balance !== undefined && object.bank_balance !== null) {
      message.bankBalance = object.bank_balance;
    }
    if (object.available_balance !== undefined && object.available_balance !== null) {
      message.availableBalance = object.available_balance;
    }
    if (object.locked_fee !== undefined && object.locked_fee !== null) {
      message.lockedFee = object.locked_fee;
    }
    if (object.change_rate !== undefined && object.change_rate !== null) {
      message.changeRate = object.change_rate;
    }
    return message;
  },
  toAmino(message: QueryDynamicBalanceResponse): QueryDynamicBalanceResponseAmino {
    const obj: any = {};
    obj.dynamic_balance = message.dynamicBalance;
    obj.stream_record = message.streamRecord ? StreamRecord.toAmino(message.streamRecord) : undefined;
    obj.current_timestamp = message.currentTimestamp ? message.currentTimestamp.toString() : undefined;
    obj.bank_balance = message.bankBalance;
    obj.available_balance = message.availableBalance;
    obj.locked_fee = message.lockedFee;
    obj.change_rate = message.changeRate;
    return obj;
  },
  fromAminoMsg(object: QueryDynamicBalanceResponseAminoMsg): QueryDynamicBalanceResponse {
    return QueryDynamicBalanceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDynamicBalanceResponseProtoMsg): QueryDynamicBalanceResponse {
    return QueryDynamicBalanceResponse.decode(message.value);
  },
  toProto(message: QueryDynamicBalanceResponse): Uint8Array {
    return QueryDynamicBalanceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDynamicBalanceResponse): QueryDynamicBalanceResponseProtoMsg {
    return {
      typeUrl: "/greenfield.payment.QueryDynamicBalanceResponse",
      value: QueryDynamicBalanceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPaymentAccountsByOwnerRequest(): QueryPaymentAccountsByOwnerRequest {
  return {
    owner: ""
  };
}
export const QueryPaymentAccountsByOwnerRequest = {
  typeUrl: "/greenfield.payment.QueryPaymentAccountsByOwnerRequest",
  encode(message: QueryPaymentAccountsByOwnerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPaymentAccountsByOwnerRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryPaymentAccountsByOwnerRequestAmino): QueryPaymentAccountsByOwnerRequest {
    const message = createBaseQueryPaymentAccountsByOwnerRequest();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: QueryPaymentAccountsByOwnerRequest): QueryPaymentAccountsByOwnerRequestAmino {
    const obj: any = {};
    obj.owner = message.owner;
    return obj;
  },
  fromAminoMsg(object: QueryPaymentAccountsByOwnerRequestAminoMsg): QueryPaymentAccountsByOwnerRequest {
    return QueryPaymentAccountsByOwnerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPaymentAccountsByOwnerRequestProtoMsg): QueryPaymentAccountsByOwnerRequest {
    return QueryPaymentAccountsByOwnerRequest.decode(message.value);
  },
  toProto(message: QueryPaymentAccountsByOwnerRequest): Uint8Array {
    return QueryPaymentAccountsByOwnerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPaymentAccountsByOwnerRequest): QueryPaymentAccountsByOwnerRequestProtoMsg {
    return {
      typeUrl: "/greenfield.payment.QueryPaymentAccountsByOwnerRequest",
      value: QueryPaymentAccountsByOwnerRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPaymentAccountsByOwnerResponse(): QueryPaymentAccountsByOwnerResponse {
  return {
    paymentAccounts: []
  };
}
export const QueryPaymentAccountsByOwnerResponse = {
  typeUrl: "/greenfield.payment.QueryPaymentAccountsByOwnerResponse",
  encode(message: QueryPaymentAccountsByOwnerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.paymentAccounts) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPaymentAccountsByOwnerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryPaymentAccountsByOwnerResponseAmino): QueryPaymentAccountsByOwnerResponse {
    const message = createBaseQueryPaymentAccountsByOwnerResponse();
    message.paymentAccounts = object.paymentAccounts?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryPaymentAccountsByOwnerResponse): QueryPaymentAccountsByOwnerResponseAmino {
    const obj: any = {};
    if (message.paymentAccounts) {
      obj.paymentAccounts = message.paymentAccounts.map(e => e);
    } else {
      obj.paymentAccounts = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryPaymentAccountsByOwnerResponseAminoMsg): QueryPaymentAccountsByOwnerResponse {
    return QueryPaymentAccountsByOwnerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPaymentAccountsByOwnerResponseProtoMsg): QueryPaymentAccountsByOwnerResponse {
    return QueryPaymentAccountsByOwnerResponse.decode(message.value);
  },
  toProto(message: QueryPaymentAccountsByOwnerResponse): Uint8Array {
    return QueryPaymentAccountsByOwnerResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPaymentAccountsByOwnerResponse): QueryPaymentAccountsByOwnerResponseProtoMsg {
    return {
      typeUrl: "/greenfield.payment.QueryPaymentAccountsByOwnerResponse",
      value: QueryPaymentAccountsByOwnerResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAutoSettleRecordsRequest(): QueryAutoSettleRecordsRequest {
  return {
    pagination: undefined
  };
}
export const QueryAutoSettleRecordsRequest = {
  typeUrl: "/greenfield.payment.QueryAutoSettleRecordsRequest",
  encode(message: QueryAutoSettleRecordsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAutoSettleRecordsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryAutoSettleRecordsRequestAmino): QueryAutoSettleRecordsRequest {
    const message = createBaseQueryAutoSettleRecordsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAutoSettleRecordsRequest): QueryAutoSettleRecordsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAutoSettleRecordsRequestAminoMsg): QueryAutoSettleRecordsRequest {
    return QueryAutoSettleRecordsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAutoSettleRecordsRequestProtoMsg): QueryAutoSettleRecordsRequest {
    return QueryAutoSettleRecordsRequest.decode(message.value);
  },
  toProto(message: QueryAutoSettleRecordsRequest): Uint8Array {
    return QueryAutoSettleRecordsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAutoSettleRecordsRequest): QueryAutoSettleRecordsRequestProtoMsg {
    return {
      typeUrl: "/greenfield.payment.QueryAutoSettleRecordsRequest",
      value: QueryAutoSettleRecordsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAutoSettleRecordsResponse(): QueryAutoSettleRecordsResponse {
  return {
    autoSettleRecords: [],
    pagination: undefined
  };
}
export const QueryAutoSettleRecordsResponse = {
  typeUrl: "/greenfield.payment.QueryAutoSettleRecordsResponse",
  encode(message: QueryAutoSettleRecordsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.autoSettleRecords) {
      AutoSettleRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAutoSettleRecordsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryAutoSettleRecordsResponseAmino): QueryAutoSettleRecordsResponse {
    const message = createBaseQueryAutoSettleRecordsResponse();
    message.autoSettleRecords = object.auto_settle_records?.map(e => AutoSettleRecord.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAutoSettleRecordsResponse): QueryAutoSettleRecordsResponseAmino {
    const obj: any = {};
    if (message.autoSettleRecords) {
      obj.auto_settle_records = message.autoSettleRecords.map(e => e ? AutoSettleRecord.toAmino(e) : undefined);
    } else {
      obj.auto_settle_records = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAutoSettleRecordsResponseAminoMsg): QueryAutoSettleRecordsResponse {
    return QueryAutoSettleRecordsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAutoSettleRecordsResponseProtoMsg): QueryAutoSettleRecordsResponse {
    return QueryAutoSettleRecordsResponse.decode(message.value);
  },
  toProto(message: QueryAutoSettleRecordsResponse): Uint8Array {
    return QueryAutoSettleRecordsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAutoSettleRecordsResponse): QueryAutoSettleRecordsResponseProtoMsg {
    return {
      typeUrl: "/greenfield.payment.QueryAutoSettleRecordsResponse",
      value: QueryAutoSettleRecordsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelayedWithdrawalRequest(): QueryDelayedWithdrawalRequest {
  return {
    account: ""
  };
}
export const QueryDelayedWithdrawalRequest = {
  typeUrl: "/greenfield.payment.QueryDelayedWithdrawalRequest",
  encode(message: QueryDelayedWithdrawalRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelayedWithdrawalRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelayedWithdrawalRequest();
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
  fromJSON(object: any): QueryDelayedWithdrawalRequest {
    return {
      account: isSet(object.account) ? String(object.account) : ""
    };
  },
  toJSON(message: QueryDelayedWithdrawalRequest): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDelayedWithdrawalRequest>, I>>(object: I): QueryDelayedWithdrawalRequest {
    const message = createBaseQueryDelayedWithdrawalRequest();
    message.account = object.account ?? "";
    return message;
  },
  fromSDK(object: QueryDelayedWithdrawalRequestSDKType): QueryDelayedWithdrawalRequest {
    return {
      account: object?.account
    };
  },
  toSDK(message: QueryDelayedWithdrawalRequest): QueryDelayedWithdrawalRequestSDKType {
    const obj: any = {};
    obj.account = message.account;
    return obj;
  },
  fromAmino(object: QueryDelayedWithdrawalRequestAmino): QueryDelayedWithdrawalRequest {
    const message = createBaseQueryDelayedWithdrawalRequest();
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    return message;
  },
  toAmino(message: QueryDelayedWithdrawalRequest): QueryDelayedWithdrawalRequestAmino {
    const obj: any = {};
    obj.account = message.account;
    return obj;
  },
  fromAminoMsg(object: QueryDelayedWithdrawalRequestAminoMsg): QueryDelayedWithdrawalRequest {
    return QueryDelayedWithdrawalRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelayedWithdrawalRequestProtoMsg): QueryDelayedWithdrawalRequest {
    return QueryDelayedWithdrawalRequest.decode(message.value);
  },
  toProto(message: QueryDelayedWithdrawalRequest): Uint8Array {
    return QueryDelayedWithdrawalRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelayedWithdrawalRequest): QueryDelayedWithdrawalRequestProtoMsg {
    return {
      typeUrl: "/greenfield.payment.QueryDelayedWithdrawalRequest",
      value: QueryDelayedWithdrawalRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDelayedWithdrawalResponse(): QueryDelayedWithdrawalResponse {
  return {
    delayedWithdrawal: DelayedWithdrawalRecord.fromPartial({})
  };
}
export const QueryDelayedWithdrawalResponse = {
  typeUrl: "/greenfield.payment.QueryDelayedWithdrawalResponse",
  encode(message: QueryDelayedWithdrawalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delayedWithdrawal !== undefined) {
      DelayedWithdrawalRecord.encode(message.delayedWithdrawal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelayedWithdrawalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelayedWithdrawalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delayedWithdrawal = DelayedWithdrawalRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelayedWithdrawalResponse {
    return {
      delayedWithdrawal: isSet(object.delayedWithdrawal) ? DelayedWithdrawalRecord.fromJSON(object.delayedWithdrawal) : undefined
    };
  },
  toJSON(message: QueryDelayedWithdrawalResponse): unknown {
    const obj: any = {};
    message.delayedWithdrawal !== undefined && (obj.delayedWithdrawal = message.delayedWithdrawal ? DelayedWithdrawalRecord.toJSON(message.delayedWithdrawal) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDelayedWithdrawalResponse>, I>>(object: I): QueryDelayedWithdrawalResponse {
    const message = createBaseQueryDelayedWithdrawalResponse();
    message.delayedWithdrawal = object.delayedWithdrawal !== undefined && object.delayedWithdrawal !== null ? DelayedWithdrawalRecord.fromPartial(object.delayedWithdrawal) : undefined;
    return message;
  },
  fromSDK(object: QueryDelayedWithdrawalResponseSDKType): QueryDelayedWithdrawalResponse {
    return {
      delayedWithdrawal: object.delayed_withdrawal ? DelayedWithdrawalRecord.fromSDK(object.delayed_withdrawal) : undefined
    };
  },
  toSDK(message: QueryDelayedWithdrawalResponse): QueryDelayedWithdrawalResponseSDKType {
    const obj: any = {};
    message.delayedWithdrawal !== undefined && (obj.delayed_withdrawal = message.delayedWithdrawal ? DelayedWithdrawalRecord.toSDK(message.delayedWithdrawal) : undefined);
    return obj;
  },
  fromAmino(object: QueryDelayedWithdrawalResponseAmino): QueryDelayedWithdrawalResponse {
    const message = createBaseQueryDelayedWithdrawalResponse();
    if (object.delayed_withdrawal !== undefined && object.delayed_withdrawal !== null) {
      message.delayedWithdrawal = DelayedWithdrawalRecord.fromAmino(object.delayed_withdrawal);
    }
    return message;
  },
  toAmino(message: QueryDelayedWithdrawalResponse): QueryDelayedWithdrawalResponseAmino {
    const obj: any = {};
    obj.delayed_withdrawal = message.delayedWithdrawal ? DelayedWithdrawalRecord.toAmino(message.delayedWithdrawal) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelayedWithdrawalResponseAminoMsg): QueryDelayedWithdrawalResponse {
    return QueryDelayedWithdrawalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelayedWithdrawalResponseProtoMsg): QueryDelayedWithdrawalResponse {
    return QueryDelayedWithdrawalResponse.decode(message.value);
  },
  toProto(message: QueryDelayedWithdrawalResponse): Uint8Array {
    return QueryDelayedWithdrawalResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelayedWithdrawalResponse): QueryDelayedWithdrawalResponseProtoMsg {
    return {
      typeUrl: "/greenfield.payment.QueryDelayedWithdrawalResponse",
      value: QueryDelayedWithdrawalResponse.encode(message).finish()
    };
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
  /** Queries delayed withdrawal of a account. */
  DelayedWithdrawal(request: QueryDelayedWithdrawalRequest): Promise<QueryDelayedWithdrawalResponse>;
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
    this.DelayedWithdrawal = this.DelayedWithdrawal.bind(this);
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.payment.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  ParamsByTimestamp(request: QueryParamsByTimestampRequest): Promise<QueryParamsByTimestampResponse> {
    const data = QueryParamsByTimestampRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.payment.Query", "ParamsByTimestamp", data);
    return promise.then(data => QueryParamsByTimestampResponse.decode(new BinaryReader(data)));
  }
  OutFlows(request: QueryOutFlowsRequest): Promise<QueryOutFlowsResponse> {
    const data = QueryOutFlowsRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.payment.Query", "OutFlows", data);
    return promise.then(data => QueryOutFlowsResponse.decode(new BinaryReader(data)));
  }
  StreamRecord(request: QueryGetStreamRecordRequest): Promise<QueryGetStreamRecordResponse> {
    const data = QueryGetStreamRecordRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.payment.Query", "StreamRecord", data);
    return promise.then(data => QueryGetStreamRecordResponse.decode(new BinaryReader(data)));
  }
  StreamRecords(request: QueryStreamRecordsRequest = {
    pagination: undefined
  }): Promise<QueryStreamRecordsResponse> {
    const data = QueryStreamRecordsRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.payment.Query", "StreamRecords", data);
    return promise.then(data => QueryStreamRecordsResponse.decode(new BinaryReader(data)));
  }
  PaymentAccountCount(request: QueryPaymentAccountCountRequest): Promise<QueryPaymentAccountCountResponse> {
    const data = QueryPaymentAccountCountRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.payment.Query", "PaymentAccountCount", data);
    return promise.then(data => QueryPaymentAccountCountResponse.decode(new BinaryReader(data)));
  }
  PaymentAccountCounts(request: QueryPaymentAccountCountsRequest = {
    pagination: undefined
  }): Promise<QueryPaymentAccountCountsResponse> {
    const data = QueryPaymentAccountCountsRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.payment.Query", "PaymentAccountCounts", data);
    return promise.then(data => QueryPaymentAccountCountsResponse.decode(new BinaryReader(data)));
  }
  PaymentAccount(request: QueryPaymentAccountRequest): Promise<QueryPaymentAccountResponse> {
    const data = QueryPaymentAccountRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.payment.Query", "PaymentAccount", data);
    return promise.then(data => QueryPaymentAccountResponse.decode(new BinaryReader(data)));
  }
  PaymentAccounts(request: QueryPaymentAccountsRequest = {
    pagination: undefined
  }): Promise<QueryPaymentAccountsResponse> {
    const data = QueryPaymentAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.payment.Query", "PaymentAccounts", data);
    return promise.then(data => QueryPaymentAccountsResponse.decode(new BinaryReader(data)));
  }
  DynamicBalance(request: QueryDynamicBalanceRequest): Promise<QueryDynamicBalanceResponse> {
    const data = QueryDynamicBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.payment.Query", "DynamicBalance", data);
    return promise.then(data => QueryDynamicBalanceResponse.decode(new BinaryReader(data)));
  }
  PaymentAccountsByOwner(request: QueryPaymentAccountsByOwnerRequest): Promise<QueryPaymentAccountsByOwnerResponse> {
    const data = QueryPaymentAccountsByOwnerRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.payment.Query", "PaymentAccountsByOwner", data);
    return promise.then(data => QueryPaymentAccountsByOwnerResponse.decode(new BinaryReader(data)));
  }
  AutoSettleRecords(request: QueryAutoSettleRecordsRequest = {
    pagination: undefined
  }): Promise<QueryAutoSettleRecordsResponse> {
    const data = QueryAutoSettleRecordsRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.payment.Query", "AutoSettleRecords", data);
    return promise.then(data => QueryAutoSettleRecordsResponse.decode(new BinaryReader(data)));
  }
  DelayedWithdrawal(request: QueryDelayedWithdrawalRequest): Promise<QueryDelayedWithdrawalResponse> {
    const data = QueryDelayedWithdrawalRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.payment.Query", "DelayedWithdrawal", data);
    return promise.then(data => QueryDelayedWithdrawalResponse.decode(new BinaryReader(data)));
  }
}