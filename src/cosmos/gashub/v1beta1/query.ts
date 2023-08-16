//@ts-nocheck
/* eslint-disable */
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Params, ParamsSDKType, MsgGasParams, MsgGasParamsSDKType } from "./gashub";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Exact, isSet, Rpc } from "../../../helpers";
export const protobufPackage = "cosmos.gashub.v1beta1";
/** QueryParamsRequest defines the request type for querying x/gashub parameters. */
export interface QueryParamsRequest {}
/** QueryParamsRequest defines the request type for querying x/gashub parameters. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse defines the response type for querying x/gashub parameters. */
export interface QueryParamsResponse {
  params: Params;
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
  pagination: PageRequest;
}
/** QueryMsgGasParamsRequest defines the RPC request for looking up MsgGasParams entries. */
export interface QueryMsgGasParamsRequestSDKType {
  msg_type_urls: string[];
  pagination: PageRequestSDKType;
}
/** QueryMsgGasParamsResponse defines the RPC response of a MsgGasParams query. */
export interface QueryMsgGasParamsResponse {
  msgGasParams: MsgGasParams[];
  /**
   * pagination defines the pagination in the response. This field is only
   * populated if the msg_type_urls field in the request is empty.
   */
  pagination: PageResponse;
}
/** QueryMsgGasParamsResponse defines the RPC response of a MsgGasParams query. */
export interface QueryMsgGasParamsResponseSDKType {
  msg_gas_params: MsgGasParamsSDKType[];
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
function createBaseQueryMsgGasParamsRequest(): QueryMsgGasParamsRequest {
  return {
    msgTypeUrls: [],
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryMsgGasParamsRequest = {
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
  }
};
function createBaseQueryMsgGasParamsResponse(): QueryMsgGasParamsResponse {
  return {
    msgGasParams: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryMsgGasParamsResponse = {
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