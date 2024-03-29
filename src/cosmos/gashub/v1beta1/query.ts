//@ts-nocheck
/* eslint-disable */
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType, MsgGasParams, MsgGasParamsAmino, MsgGasParamsSDKType } from "./gashub";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Exact, isSet, Rpc } from "../../../helpers";
export const protobufPackage = "cosmos.gashub.v1beta1";
/** QueryParamsRequest defines the request type for querying x/gashub parameters. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/cosmos.gashub.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest defines the request type for querying x/gashub parameters. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "cosmos-sdk/QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest defines the request type for querying x/gashub parameters. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse defines the response type for querying x/gashub parameters. */
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/cosmos.gashub.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse defines the response type for querying x/gashub parameters. */
export interface QueryParamsResponseAmino {
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "cosmos-sdk/QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse defines the response type for querying x/gashub parameters. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** QueryMsgGasParamsRequest defines the RPC request for looking up MsgGasParams entries. */
export interface QueryMsgGasParamsRequest {
  /** msg_type_urls is the specific type urls you want look up. Leave empty to get all entries. */
  msgTypeUrls: string[];
  /**
   * pagination defines an optional pagination for the request. This field is
   * only read if the msg_type_urls field is empty.
   */
  pagination?: PageRequest;
}
export interface QueryMsgGasParamsRequestProtoMsg {
  typeUrl: "/cosmos.gashub.v1beta1.QueryMsgGasParamsRequest";
  value: Uint8Array;
}
/** QueryMsgGasParamsRequest defines the RPC request for looking up MsgGasParams entries. */
export interface QueryMsgGasParamsRequestAmino {
  /** msg_type_urls is the specific type urls you want look up. Leave empty to get all entries. */
  msg_type_urls?: string[];
  /**
   * pagination defines an optional pagination for the request. This field is
   * only read if the msg_type_urls field is empty.
   */
  pagination?: PageRequestAmino;
}
export interface QueryMsgGasParamsRequestAminoMsg {
  type: "cosmos-sdk/QueryMsgGasParamsRequest";
  value: QueryMsgGasParamsRequestAmino;
}
/** QueryMsgGasParamsRequest defines the RPC request for looking up MsgGasParams entries. */
export interface QueryMsgGasParamsRequestSDKType {
  msg_type_urls: string[];
  pagination?: PageRequestSDKType;
}
/** QueryMsgGasParamsResponse defines the RPC response of a MsgGasParams query. */
export interface QueryMsgGasParamsResponse {
  msgGasParams: MsgGasParams[];
  /**
   * pagination defines the pagination in the response. This field is only
   * populated if the msg_type_urls field in the request is empty.
   */
  pagination?: PageResponse;
}
export interface QueryMsgGasParamsResponseProtoMsg {
  typeUrl: "/cosmos.gashub.v1beta1.QueryMsgGasParamsResponse";
  value: Uint8Array;
}
/** QueryMsgGasParamsResponse defines the RPC response of a MsgGasParams query. */
export interface QueryMsgGasParamsResponseAmino {
  msg_gas_params?: MsgGasParamsAmino[];
  /**
   * pagination defines the pagination in the response. This field is only
   * populated if the msg_type_urls field in the request is empty.
   */
  pagination?: PageResponseAmino;
}
export interface QueryMsgGasParamsResponseAminoMsg {
  type: "cosmos-sdk/QueryMsgGasParamsResponse";
  value: QueryMsgGasParamsResponseAmino;
}
/** QueryMsgGasParamsResponse defines the RPC response of a MsgGasParams query. */
export interface QueryMsgGasParamsResponseSDKType {
  msg_gas_params: MsgGasParamsSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/cosmos.gashub.v1beta1.QueryParamsRequest",
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
  toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryParamsRequest",
      value: QueryParamsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.gashub.v1beta1.QueryParamsRequest",
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
  typeUrl: "/cosmos.gashub.v1beta1.QueryParamsResponse",
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
    obj.params = message.params ? Params.toAmino(message.params) : Params.fromPartial({});
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryParamsResponse",
      value: QueryParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.gashub.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryMsgGasParamsRequest(): QueryMsgGasParamsRequest {
  return {
    msgTypeUrls: [],
    pagination: undefined
  };
}
export const QueryMsgGasParamsRequest = {
  typeUrl: "/cosmos.gashub.v1beta1.QueryMsgGasParamsRequest",
  encode(message: QueryMsgGasParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.msgTypeUrls) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(794).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMsgGasParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMsgGasParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgTypeUrls.push(reader.string());
          break;
        case 99:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryMsgGasParamsRequest {
    return {
      msgTypeUrls: Array.isArray(object?.msgTypeUrls) ? object.msgTypeUrls.map((e: any) => String(e)) : [],
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryMsgGasParamsRequest): unknown {
    const obj: any = {};
    if (message.msgTypeUrls) {
      obj.msgTypeUrls = message.msgTypeUrls.map(e => e);
    } else {
      obj.msgTypeUrls = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryMsgGasParamsRequest>, I>>(object: I): QueryMsgGasParamsRequest {
    const message = createBaseQueryMsgGasParamsRequest();
    message.msgTypeUrls = object.msgTypeUrls?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryMsgGasParamsRequestSDKType): QueryMsgGasParamsRequest {
    return {
      msgTypeUrls: Array.isArray(object?.msg_type_urls) ? object.msg_type_urls.map((e: any) => e) : [],
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryMsgGasParamsRequest): QueryMsgGasParamsRequestSDKType {
    const obj: any = {};
    if (message.msgTypeUrls) {
      obj.msg_type_urls = message.msgTypeUrls.map(e => e);
    } else {
      obj.msg_type_urls = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryMsgGasParamsRequestAmino): QueryMsgGasParamsRequest {
    const message = createBaseQueryMsgGasParamsRequest();
    message.msgTypeUrls = object.msg_type_urls?.map(e => e) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryMsgGasParamsRequest): QueryMsgGasParamsRequestAmino {
    const obj: any = {};
    if (message.msgTypeUrls) {
      obj.msg_type_urls = message.msgTypeUrls.map(e => e);
    } else {
      obj.msg_type_urls = [];
    }
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMsgGasParamsRequestAminoMsg): QueryMsgGasParamsRequest {
    return QueryMsgGasParamsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryMsgGasParamsRequest): QueryMsgGasParamsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryMsgGasParamsRequest",
      value: QueryMsgGasParamsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryMsgGasParamsRequestProtoMsg): QueryMsgGasParamsRequest {
    return QueryMsgGasParamsRequest.decode(message.value);
  },
  toProto(message: QueryMsgGasParamsRequest): Uint8Array {
    return QueryMsgGasParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMsgGasParamsRequest): QueryMsgGasParamsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.gashub.v1beta1.QueryMsgGasParamsRequest",
      value: QueryMsgGasParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryMsgGasParamsResponse(): QueryMsgGasParamsResponse {
  return {
    msgGasParams: [],
    pagination: undefined
  };
}
export const QueryMsgGasParamsResponse = {
  typeUrl: "/cosmos.gashub.v1beta1.QueryMsgGasParamsResponse",
  encode(message: QueryMsgGasParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.msgGasParams) {
      MsgGasParams.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(794).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMsgGasParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMsgGasParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgGasParams.push(MsgGasParams.decode(reader, reader.uint32()));
          break;
        case 99:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryMsgGasParamsResponse {
    return {
      msgGasParams: Array.isArray(object?.msgGasParams) ? object.msgGasParams.map((e: any) => MsgGasParams.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryMsgGasParamsResponse): unknown {
    const obj: any = {};
    if (message.msgGasParams) {
      obj.msgGasParams = message.msgGasParams.map(e => e ? MsgGasParams.toJSON(e) : undefined);
    } else {
      obj.msgGasParams = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryMsgGasParamsResponse>, I>>(object: I): QueryMsgGasParamsResponse {
    const message = createBaseQueryMsgGasParamsResponse();
    message.msgGasParams = object.msgGasParams?.map(e => MsgGasParams.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryMsgGasParamsResponseSDKType): QueryMsgGasParamsResponse {
    return {
      msgGasParams: Array.isArray(object?.msg_gas_params) ? object.msg_gas_params.map((e: any) => MsgGasParams.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryMsgGasParamsResponse): QueryMsgGasParamsResponseSDKType {
    const obj: any = {};
    if (message.msgGasParams) {
      obj.msg_gas_params = message.msgGasParams.map(e => e ? MsgGasParams.toSDK(e) : undefined);
    } else {
      obj.msg_gas_params = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryMsgGasParamsResponseAmino): QueryMsgGasParamsResponse {
    const message = createBaseQueryMsgGasParamsResponse();
    message.msgGasParams = object.msg_gas_params?.map(e => MsgGasParams.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryMsgGasParamsResponse): QueryMsgGasParamsResponseAmino {
    const obj: any = {};
    if (message.msgGasParams) {
      obj.msg_gas_params = message.msgGasParams.map(e => e ? MsgGasParams.toAmino(e) : undefined);
    } else {
      obj.msg_gas_params = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMsgGasParamsResponseAminoMsg): QueryMsgGasParamsResponse {
    return QueryMsgGasParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryMsgGasParamsResponse): QueryMsgGasParamsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryMsgGasParamsResponse",
      value: QueryMsgGasParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryMsgGasParamsResponseProtoMsg): QueryMsgGasParamsResponse {
    return QueryMsgGasParamsResponse.decode(message.value);
  },
  toProto(message: QueryMsgGasParamsResponse): Uint8Array {
    return QueryMsgGasParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMsgGasParamsResponse): QueryMsgGasParamsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.gashub.v1beta1.QueryMsgGasParamsResponse",
      value: QueryMsgGasParamsResponse.encode(message).finish()
    };
  }
};
/** Query defines the gRPC querier service. */
export interface Query {
  /** Params queries the parameters of x/gashub module. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /**
   * MsgGasParams queries for MsgGasParams entries.
   * 
   * This query only returns params that have specific MsgGasParams settings.
   * Any msg type that does not have a specific setting will not be returned by this query.
   */
  MsgGasParams(request: QueryMsgGasParamsRequest): Promise<QueryMsgGasParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.MsgGasParams = this.MsgGasParams.bind(this);
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gashub.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  MsgGasParams(request: QueryMsgGasParamsRequest): Promise<QueryMsgGasParamsResponse> {
    const data = QueryMsgGasParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gashub.v1beta1.Query", "MsgGasParams", data);
    return promise.then(data => QueryMsgGasParamsResponse.decode(new _m0.Reader(data)));
  }
}