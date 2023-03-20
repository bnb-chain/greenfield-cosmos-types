/* eslint-disable */
import { Params, ParamsSDKType } from "./crosschain";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Exact, isSet, Long, bytesFromBase64, base64FromBytes, Rpc } from "../../../helpers";
export const protobufPackage = "cosmos.crosschain.v1";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */

export interface QueryParamsRequest {}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */

export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */

export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params?: Params;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */

export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
/** QueryCrossChainPackageRequest is the request type for the Query/CrossChainPackage RPC method. */

export interface QueryCrossChainPackageRequest {
  /** channel id of the cross chain package */
  channelId: number;
  /** sequence of the cross chain package */

  sequence: Long;
}
/** QueryCrossChainPackageRequest is the request type for the Query/CrossChainPackage RPC method. */

export interface QueryCrossChainPackageRequestSDKType {
  channel_id: number;
  sequence: Long;
}
/** QueryCrossChainPackageResponse is the response type for the Query/CrossChainPackage RPC method. */

export interface QueryCrossChainPackageResponse {
  /** content of the cross chain package */
  package: Uint8Array;
}
/** QueryCrossChainPackageResponse is the response type for the Query/CrossChainPackage RPC method. */

export interface QueryCrossChainPackageResponseSDKType {
  package: Uint8Array;
}
/** QuerySendSequenceRequest is the request type for the Query/SendSequence RPC method. */

export interface QuerySendSequenceRequest {
  /** channel id of the cross chain package */
  channelId: number;
}
/** QuerySendSequenceRequest is the request type for the Query/SendSequence RPC method. */

export interface QuerySendSequenceRequestSDKType {
  channel_id: number;
}
/** QuerySendSequenceResponse is the response type for the Query/SendSequence RPC method. */

export interface QuerySendSequenceResponse {
  /** sequence of the cross chain package */
  sequence: Long;
}
/** QuerySendSequenceResponse is the response type for the Query/SendSequence RPC method. */

export interface QuerySendSequenceResponseSDKType {
  sequence: Long;
}
/** QuerySendSequenceRequest is the request type for the Query/ReceiveSequence RPC method. */

export interface QueryReceiveSequenceRequest {
  /** channel id of the cross chain package */
  channelId: number;
}
/** QuerySendSequenceRequest is the request type for the Query/ReceiveSequence RPC method. */

export interface QueryReceiveSequenceRequestSDKType {
  channel_id: number;
}
/** QuerySendSequenceResponse is the response type for the Query/ReceiveSequence RPC method. */

export interface QueryReceiveSequenceResponse {
  /** sequence of the cross chain package */
  sequence: Long;
}
/** QuerySendSequenceResponse is the response type for the Query/ReceiveSequence RPC method. */

export interface QueryReceiveSequenceResponseSDKType {
  sequence: Long;
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

function createBaseQueryCrossChainPackageRequest(): QueryCrossChainPackageRequest {
  return {
    channelId: 0,
    sequence: Long.UZERO
  };
}

export const QueryCrossChainPackageRequest = {
  encode(message: QueryCrossChainPackageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelId !== 0) {
      writer.uint32(8).uint32(message.channelId);
    }

    if (!message.sequence.isZero()) {
      writer.uint32(16).uint64(message.sequence);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCrossChainPackageRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCrossChainPackageRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.uint32();
          break;

        case 2:
          message.sequence = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryCrossChainPackageRequest {
    return {
      channelId: isSet(object.channelId) ? Number(object.channelId) : 0,
      sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO
    };
  },

  toJSON(message: QueryCrossChainPackageRequest): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = Math.round(message.channelId));
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCrossChainPackageRequest>, I>>(object: I): QueryCrossChainPackageRequest {
    const message = createBaseQueryCrossChainPackageRequest();
    message.channelId = object.channelId ?? 0;
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    return message;
  },

  fromSDK(object: QueryCrossChainPackageRequestSDKType): QueryCrossChainPackageRequest {
    return {
      channelId: object?.channel_id,
      sequence: object?.sequence
    };
  },

  toSDK(message: QueryCrossChainPackageRequest): QueryCrossChainPackageRequestSDKType {
    const obj: any = {};
    obj.channel_id = message.channelId;
    obj.sequence = message.sequence;
    return obj;
  }

};

function createBaseQueryCrossChainPackageResponse(): QueryCrossChainPackageResponse {
  return {
    package: new Uint8Array()
  };
}

export const QueryCrossChainPackageResponse = {
  encode(message: QueryCrossChainPackageResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.package.length !== 0) {
      writer.uint32(10).bytes(message.package);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCrossChainPackageResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCrossChainPackageResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.package = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryCrossChainPackageResponse {
    return {
      package: isSet(object.package) ? bytesFromBase64(object.package) : new Uint8Array()
    };
  },

  toJSON(message: QueryCrossChainPackageResponse): unknown {
    const obj: any = {};
    message.package !== undefined && (obj.package = base64FromBytes(message.package !== undefined ? message.package : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCrossChainPackageResponse>, I>>(object: I): QueryCrossChainPackageResponse {
    const message = createBaseQueryCrossChainPackageResponse();
    message.package = object.package ?? new Uint8Array();
    return message;
  },

  fromSDK(object: QueryCrossChainPackageResponseSDKType): QueryCrossChainPackageResponse {
    return {
      package: object?.package
    };
  },

  toSDK(message: QueryCrossChainPackageResponse): QueryCrossChainPackageResponseSDKType {
    const obj: any = {};
    obj.package = message.package;
    return obj;
  }

};

function createBaseQuerySendSequenceRequest(): QuerySendSequenceRequest {
  return {
    channelId: 0
  };
}

export const QuerySendSequenceRequest = {
  encode(message: QuerySendSequenceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelId !== 0) {
      writer.uint32(8).uint32(message.channelId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySendSequenceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySendSequenceRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QuerySendSequenceRequest {
    return {
      channelId: isSet(object.channelId) ? Number(object.channelId) : 0
    };
  },

  toJSON(message: QuerySendSequenceRequest): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = Math.round(message.channelId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySendSequenceRequest>, I>>(object: I): QuerySendSequenceRequest {
    const message = createBaseQuerySendSequenceRequest();
    message.channelId = object.channelId ?? 0;
    return message;
  },

  fromSDK(object: QuerySendSequenceRequestSDKType): QuerySendSequenceRequest {
    return {
      channelId: object?.channel_id
    };
  },

  toSDK(message: QuerySendSequenceRequest): QuerySendSequenceRequestSDKType {
    const obj: any = {};
    obj.channel_id = message.channelId;
    return obj;
  }

};

function createBaseQuerySendSequenceResponse(): QuerySendSequenceResponse {
  return {
    sequence: Long.UZERO
  };
}

export const QuerySendSequenceResponse = {
  encode(message: QuerySendSequenceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.sequence.isZero()) {
      writer.uint32(8).uint64(message.sequence);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySendSequenceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySendSequenceResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sequence = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QuerySendSequenceResponse {
    return {
      sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO
    };
  },

  toJSON(message: QuerySendSequenceResponse): unknown {
    const obj: any = {};
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySendSequenceResponse>, I>>(object: I): QuerySendSequenceResponse {
    const message = createBaseQuerySendSequenceResponse();
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    return message;
  },

  fromSDK(object: QuerySendSequenceResponseSDKType): QuerySendSequenceResponse {
    return {
      sequence: object?.sequence
    };
  },

  toSDK(message: QuerySendSequenceResponse): QuerySendSequenceResponseSDKType {
    const obj: any = {};
    obj.sequence = message.sequence;
    return obj;
  }

};

function createBaseQueryReceiveSequenceRequest(): QueryReceiveSequenceRequest {
  return {
    channelId: 0
  };
}

export const QueryReceiveSequenceRequest = {
  encode(message: QueryReceiveSequenceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelId !== 0) {
      writer.uint32(8).uint32(message.channelId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryReceiveSequenceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReceiveSequenceRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryReceiveSequenceRequest {
    return {
      channelId: isSet(object.channelId) ? Number(object.channelId) : 0
    };
  },

  toJSON(message: QueryReceiveSequenceRequest): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = Math.round(message.channelId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryReceiveSequenceRequest>, I>>(object: I): QueryReceiveSequenceRequest {
    const message = createBaseQueryReceiveSequenceRequest();
    message.channelId = object.channelId ?? 0;
    return message;
  },

  fromSDK(object: QueryReceiveSequenceRequestSDKType): QueryReceiveSequenceRequest {
    return {
      channelId: object?.channel_id
    };
  },

  toSDK(message: QueryReceiveSequenceRequest): QueryReceiveSequenceRequestSDKType {
    const obj: any = {};
    obj.channel_id = message.channelId;
    return obj;
  }

};

function createBaseQueryReceiveSequenceResponse(): QueryReceiveSequenceResponse {
  return {
    sequence: Long.UZERO
  };
}

export const QueryReceiveSequenceResponse = {
  encode(message: QueryReceiveSequenceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.sequence.isZero()) {
      writer.uint32(8).uint64(message.sequence);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryReceiveSequenceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReceiveSequenceResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sequence = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryReceiveSequenceResponse {
    return {
      sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO
    };
  },

  toJSON(message: QueryReceiveSequenceResponse): unknown {
    const obj: any = {};
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryReceiveSequenceResponse>, I>>(object: I): QueryReceiveSequenceResponse {
    const message = createBaseQueryReceiveSequenceResponse();
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    return message;
  },

  fromSDK(object: QueryReceiveSequenceResponseSDKType): QueryReceiveSequenceResponse {
    return {
      sequence: object?.sequence
    };
  },

  toSDK(message: QueryReceiveSequenceResponse): QueryReceiveSequenceResponseSDKType {
    const obj: any = {};
    obj.sequence = message.sequence;
    return obj;
  }

};
/** Query provides defines the gRPC querier service. */

export interface Query {
  /** Params returns the total set of cross chain parameters. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** CrossChainPackage returns the specified cross chain package */

  CrossChainPackage(request: QueryCrossChainPackageRequest): Promise<QueryCrossChainPackageResponse>;
  /** SendSequence returns the send sequence of the channel */

  SendSequence(request: QuerySendSequenceRequest): Promise<QuerySendSequenceResponse>;
  /** ReceiveSequence returns the receive sequence of the channel */

  ReceiveSequence(request: QueryReceiveSequenceRequest): Promise<QueryReceiveSequenceResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.CrossChainPackage = this.CrossChainPackage.bind(this);
    this.SendSequence = this.SendSequence.bind(this);
    this.ReceiveSequence = this.ReceiveSequence.bind(this);
  }

  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.crosschain.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  CrossChainPackage(request: QueryCrossChainPackageRequest): Promise<QueryCrossChainPackageResponse> {
    const data = QueryCrossChainPackageRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.crosschain.v1.Query", "CrossChainPackage", data);
    return promise.then(data => QueryCrossChainPackageResponse.decode(new _m0.Reader(data)));
  }

  SendSequence(request: QuerySendSequenceRequest): Promise<QuerySendSequenceResponse> {
    const data = QuerySendSequenceRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.crosschain.v1.Query", "SendSequence", data);
    return promise.then(data => QuerySendSequenceResponse.decode(new _m0.Reader(data)));
  }

  ReceiveSequence(request: QueryReceiveSequenceRequest): Promise<QueryReceiveSequenceResponse> {
    const data = QueryReceiveSequenceRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.crosschain.v1.Query", "ReceiveSequence", data);
    return promise.then(data => QueryReceiveSequenceResponse.decode(new _m0.Reader(data)));
  }

}