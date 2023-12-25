//@ts-nocheck
/* eslint-disable */
import { Params, ParamsAmino, ParamsSDKType } from "./crosschain";
import { Long, DeepPartial, Exact, isSet, bytesFromBase64, base64FromBytes, Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmos.crosschain.v1";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/cosmos.crosschain.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "cosmos-sdk/QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/cosmos.crosschain.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params defines the parameters of the module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "cosmos-sdk/QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** QueryCrossChainPackageRequest is the request type for the Query/CrossChainPackage RPC method. */
export interface QueryCrossChainPackageRequest {
  /** destination chain id */
  destChainId: number;
  /** channel id of the cross chain package */
  channelId: number;
  /** sequence of the cross chain package */
  sequence: Long;
}
export interface QueryCrossChainPackageRequestProtoMsg {
  typeUrl: "/cosmos.crosschain.v1.QueryCrossChainPackageRequest";
  value: Uint8Array;
}
/** QueryCrossChainPackageRequest is the request type for the Query/CrossChainPackage RPC method. */
export interface QueryCrossChainPackageRequestAmino {
  /** destination chain id */
  dest_chain_id?: number;
  /** channel id of the cross chain package */
  channel_id?: number;
  /** sequence of the cross chain package */
  sequence?: string;
}
export interface QueryCrossChainPackageRequestAminoMsg {
  type: "cosmos-sdk/QueryCrossChainPackageRequest";
  value: QueryCrossChainPackageRequestAmino;
}
/** QueryCrossChainPackageRequest is the request type for the Query/CrossChainPackage RPC method. */
export interface QueryCrossChainPackageRequestSDKType {
  dest_chain_id: number;
  channel_id: number;
  sequence: Long;
}
/** QueryCrossChainPackageResponse is the response type for the Query/CrossChainPackage RPC method. */
export interface QueryCrossChainPackageResponse {
  /** content of the cross chain package */
  package: Uint8Array;
}
export interface QueryCrossChainPackageResponseProtoMsg {
  typeUrl: "/cosmos.crosschain.v1.QueryCrossChainPackageResponse";
  value: Uint8Array;
}
/** QueryCrossChainPackageResponse is the response type for the Query/CrossChainPackage RPC method. */
export interface QueryCrossChainPackageResponseAmino {
  /** content of the cross chain package */
  package?: string;
}
export interface QueryCrossChainPackageResponseAminoMsg {
  type: "cosmos-sdk/QueryCrossChainPackageResponse";
  value: QueryCrossChainPackageResponseAmino;
}
/** QueryCrossChainPackageResponse is the response type for the Query/CrossChainPackage RPC method. */
export interface QueryCrossChainPackageResponseSDKType {
  package: Uint8Array;
}
/** QuerySendSequenceRequest is the request type for the Query/SendSequence RPC method. */
export interface QuerySendSequenceRequest {
  /** destination chain id */
  destChainId: number;
  /** channel id of the cross chain package */
  channelId: number;
}
export interface QuerySendSequenceRequestProtoMsg {
  typeUrl: "/cosmos.crosschain.v1.QuerySendSequenceRequest";
  value: Uint8Array;
}
/** QuerySendSequenceRequest is the request type for the Query/SendSequence RPC method. */
export interface QuerySendSequenceRequestAmino {
  /** destination chain id */
  dest_chain_id?: number;
  /** channel id of the cross chain package */
  channel_id?: number;
}
export interface QuerySendSequenceRequestAminoMsg {
  type: "cosmos-sdk/QuerySendSequenceRequest";
  value: QuerySendSequenceRequestAmino;
}
/** QuerySendSequenceRequest is the request type for the Query/SendSequence RPC method. */
export interface QuerySendSequenceRequestSDKType {
  dest_chain_id: number;
  channel_id: number;
}
/** QuerySendSequenceResponse is the response type for the Query/SendSequence RPC method. */
export interface QuerySendSequenceResponse {
  /** sequence of the cross chain package */
  sequence: Long;
}
export interface QuerySendSequenceResponseProtoMsg {
  typeUrl: "/cosmos.crosschain.v1.QuerySendSequenceResponse";
  value: Uint8Array;
}
/** QuerySendSequenceResponse is the response type for the Query/SendSequence RPC method. */
export interface QuerySendSequenceResponseAmino {
  /** sequence of the cross chain package */
  sequence?: string;
}
export interface QuerySendSequenceResponseAminoMsg {
  type: "cosmos-sdk/QuerySendSequenceResponse";
  value: QuerySendSequenceResponseAmino;
}
/** QuerySendSequenceResponse is the response type for the Query/SendSequence RPC method. */
export interface QuerySendSequenceResponseSDKType {
  sequence: Long;
}
/** QuerySendSequenceRequest is the request type for the Query/ReceiveSequence RPC method. */
export interface QueryReceiveSequenceRequest {
  /** destination chain id */
  destChainId: number;
  /** channel id of the cross chain package */
  channelId: number;
}
export interface QueryReceiveSequenceRequestProtoMsg {
  typeUrl: "/cosmos.crosschain.v1.QueryReceiveSequenceRequest";
  value: Uint8Array;
}
/** QuerySendSequenceRequest is the request type for the Query/ReceiveSequence RPC method. */
export interface QueryReceiveSequenceRequestAmino {
  /** destination chain id */
  dest_chain_id?: number;
  /** channel id of the cross chain package */
  channel_id?: number;
}
export interface QueryReceiveSequenceRequestAminoMsg {
  type: "cosmos-sdk/QueryReceiveSequenceRequest";
  value: QueryReceiveSequenceRequestAmino;
}
/** QuerySendSequenceRequest is the request type for the Query/ReceiveSequence RPC method. */
export interface QueryReceiveSequenceRequestSDKType {
  dest_chain_id: number;
  channel_id: number;
}
/** QuerySendSequenceResponse is the response type for the Query/ReceiveSequence RPC method. */
export interface QueryReceiveSequenceResponse {
  /** sequence of the cross chain package */
  sequence: Long;
}
export interface QueryReceiveSequenceResponseProtoMsg {
  typeUrl: "/cosmos.crosschain.v1.QueryReceiveSequenceResponse";
  value: Uint8Array;
}
/** QuerySendSequenceResponse is the response type for the Query/ReceiveSequence RPC method. */
export interface QueryReceiveSequenceResponseAmino {
  /** sequence of the cross chain package */
  sequence?: string;
}
export interface QueryReceiveSequenceResponseAminoMsg {
  type: "cosmos-sdk/QueryReceiveSequenceResponse";
  value: QueryReceiveSequenceResponseAmino;
}
/** QuerySendSequenceResponse is the response type for the Query/ReceiveSequence RPC method. */
export interface QueryReceiveSequenceResponseSDKType {
  sequence: Long;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/cosmos.crosschain.v1.QueryParamsRequest",
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
      typeUrl: "/cosmos.crosschain.v1.QueryParamsRequest",
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
  typeUrl: "/cosmos.crosschain.v1.QueryParamsResponse",
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
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
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
      typeUrl: "/cosmos.crosschain.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCrossChainPackageRequest(): QueryCrossChainPackageRequest {
  return {
    destChainId: 0,
    channelId: 0,
    sequence: Long.UZERO
  };
}
export const QueryCrossChainPackageRequest = {
  typeUrl: "/cosmos.crosschain.v1.QueryCrossChainPackageRequest",
  encode(message: QueryCrossChainPackageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.destChainId !== 0) {
      writer.uint32(8).uint32(message.destChainId);
    }
    if (message.channelId !== 0) {
      writer.uint32(16).uint32(message.channelId);
    }
    if (!message.sequence.isZero()) {
      writer.uint32(24).uint64(message.sequence);
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
          message.destChainId = reader.uint32();
          break;
        case 2:
          message.channelId = reader.uint32();
          break;
        case 3:
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
      destChainId: isSet(object.destChainId) ? Number(object.destChainId) : 0,
      channelId: isSet(object.channelId) ? Number(object.channelId) : 0,
      sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO
    };
  },
  toJSON(message: QueryCrossChainPackageRequest): unknown {
    const obj: any = {};
    message.destChainId !== undefined && (obj.destChainId = Math.round(message.destChainId));
    message.channelId !== undefined && (obj.channelId = Math.round(message.channelId));
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryCrossChainPackageRequest>, I>>(object: I): QueryCrossChainPackageRequest {
    const message = createBaseQueryCrossChainPackageRequest();
    message.destChainId = object.destChainId ?? 0;
    message.channelId = object.channelId ?? 0;
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    return message;
  },
  fromSDK(object: QueryCrossChainPackageRequestSDKType): QueryCrossChainPackageRequest {
    return {
      destChainId: object?.dest_chain_id,
      channelId: object?.channel_id,
      sequence: object?.sequence
    };
  },
  toSDK(message: QueryCrossChainPackageRequest): QueryCrossChainPackageRequestSDKType {
    const obj: any = {};
    obj.dest_chain_id = message.destChainId;
    obj.channel_id = message.channelId;
    obj.sequence = message.sequence;
    return obj;
  },
  fromAmino(object: QueryCrossChainPackageRequestAmino): QueryCrossChainPackageRequest {
    const message = createBaseQueryCrossChainPackageRequest();
    if (object.dest_chain_id !== undefined && object.dest_chain_id !== null) {
      message.destChainId = object.dest_chain_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = Long.fromString(object.sequence);
    }
    return message;
  },
  toAmino(message: QueryCrossChainPackageRequest): QueryCrossChainPackageRequestAmino {
    const obj: any = {};
    obj.dest_chain_id = message.destChainId;
    obj.channel_id = message.channelId;
    obj.sequence = message.sequence ? message.sequence.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCrossChainPackageRequestAminoMsg): QueryCrossChainPackageRequest {
    return QueryCrossChainPackageRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCrossChainPackageRequest): QueryCrossChainPackageRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryCrossChainPackageRequest",
      value: QueryCrossChainPackageRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryCrossChainPackageRequestProtoMsg): QueryCrossChainPackageRequest {
    return QueryCrossChainPackageRequest.decode(message.value);
  },
  toProto(message: QueryCrossChainPackageRequest): Uint8Array {
    return QueryCrossChainPackageRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCrossChainPackageRequest): QueryCrossChainPackageRequestProtoMsg {
    return {
      typeUrl: "/cosmos.crosschain.v1.QueryCrossChainPackageRequest",
      value: QueryCrossChainPackageRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCrossChainPackageResponse(): QueryCrossChainPackageResponse {
  return {
    package: new Uint8Array()
  };
}
export const QueryCrossChainPackageResponse = {
  typeUrl: "/cosmos.crosschain.v1.QueryCrossChainPackageResponse",
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
  },
  fromAmino(object: QueryCrossChainPackageResponseAmino): QueryCrossChainPackageResponse {
    const message = createBaseQueryCrossChainPackageResponse();
    if (object.package !== undefined && object.package !== null) {
      message.package = bytesFromBase64(object.package);
    }
    return message;
  },
  toAmino(message: QueryCrossChainPackageResponse): QueryCrossChainPackageResponseAmino {
    const obj: any = {};
    obj.package = message.package ? base64FromBytes(message.package) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCrossChainPackageResponseAminoMsg): QueryCrossChainPackageResponse {
    return QueryCrossChainPackageResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCrossChainPackageResponse): QueryCrossChainPackageResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryCrossChainPackageResponse",
      value: QueryCrossChainPackageResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryCrossChainPackageResponseProtoMsg): QueryCrossChainPackageResponse {
    return QueryCrossChainPackageResponse.decode(message.value);
  },
  toProto(message: QueryCrossChainPackageResponse): Uint8Array {
    return QueryCrossChainPackageResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCrossChainPackageResponse): QueryCrossChainPackageResponseProtoMsg {
    return {
      typeUrl: "/cosmos.crosschain.v1.QueryCrossChainPackageResponse",
      value: QueryCrossChainPackageResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySendSequenceRequest(): QuerySendSequenceRequest {
  return {
    destChainId: 0,
    channelId: 0
  };
}
export const QuerySendSequenceRequest = {
  typeUrl: "/cosmos.crosschain.v1.QuerySendSequenceRequest",
  encode(message: QuerySendSequenceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.destChainId !== 0) {
      writer.uint32(8).uint32(message.destChainId);
    }
    if (message.channelId !== 0) {
      writer.uint32(16).uint32(message.channelId);
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
          message.destChainId = reader.uint32();
          break;
        case 2:
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
      destChainId: isSet(object.destChainId) ? Number(object.destChainId) : 0,
      channelId: isSet(object.channelId) ? Number(object.channelId) : 0
    };
  },
  toJSON(message: QuerySendSequenceRequest): unknown {
    const obj: any = {};
    message.destChainId !== undefined && (obj.destChainId = Math.round(message.destChainId));
    message.channelId !== undefined && (obj.channelId = Math.round(message.channelId));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySendSequenceRequest>, I>>(object: I): QuerySendSequenceRequest {
    const message = createBaseQuerySendSequenceRequest();
    message.destChainId = object.destChainId ?? 0;
    message.channelId = object.channelId ?? 0;
    return message;
  },
  fromSDK(object: QuerySendSequenceRequestSDKType): QuerySendSequenceRequest {
    return {
      destChainId: object?.dest_chain_id,
      channelId: object?.channel_id
    };
  },
  toSDK(message: QuerySendSequenceRequest): QuerySendSequenceRequestSDKType {
    const obj: any = {};
    obj.dest_chain_id = message.destChainId;
    obj.channel_id = message.channelId;
    return obj;
  },
  fromAmino(object: QuerySendSequenceRequestAmino): QuerySendSequenceRequest {
    const message = createBaseQuerySendSequenceRequest();
    if (object.dest_chain_id !== undefined && object.dest_chain_id !== null) {
      message.destChainId = object.dest_chain_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    return message;
  },
  toAmino(message: QuerySendSequenceRequest): QuerySendSequenceRequestAmino {
    const obj: any = {};
    obj.dest_chain_id = message.destChainId;
    obj.channel_id = message.channelId;
    return obj;
  },
  fromAminoMsg(object: QuerySendSequenceRequestAminoMsg): QuerySendSequenceRequest {
    return QuerySendSequenceRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QuerySendSequenceRequest): QuerySendSequenceRequestAminoMsg {
    return {
      type: "cosmos-sdk/QuerySendSequenceRequest",
      value: QuerySendSequenceRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QuerySendSequenceRequestProtoMsg): QuerySendSequenceRequest {
    return QuerySendSequenceRequest.decode(message.value);
  },
  toProto(message: QuerySendSequenceRequest): Uint8Array {
    return QuerySendSequenceRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySendSequenceRequest): QuerySendSequenceRequestProtoMsg {
    return {
      typeUrl: "/cosmos.crosschain.v1.QuerySendSequenceRequest",
      value: QuerySendSequenceRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySendSequenceResponse(): QuerySendSequenceResponse {
  return {
    sequence: Long.UZERO
  };
}
export const QuerySendSequenceResponse = {
  typeUrl: "/cosmos.crosschain.v1.QuerySendSequenceResponse",
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
  },
  fromAmino(object: QuerySendSequenceResponseAmino): QuerySendSequenceResponse {
    const message = createBaseQuerySendSequenceResponse();
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = Long.fromString(object.sequence);
    }
    return message;
  },
  toAmino(message: QuerySendSequenceResponse): QuerySendSequenceResponseAmino {
    const obj: any = {};
    obj.sequence = message.sequence ? message.sequence.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySendSequenceResponseAminoMsg): QuerySendSequenceResponse {
    return QuerySendSequenceResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QuerySendSequenceResponse): QuerySendSequenceResponseAminoMsg {
    return {
      type: "cosmos-sdk/QuerySendSequenceResponse",
      value: QuerySendSequenceResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QuerySendSequenceResponseProtoMsg): QuerySendSequenceResponse {
    return QuerySendSequenceResponse.decode(message.value);
  },
  toProto(message: QuerySendSequenceResponse): Uint8Array {
    return QuerySendSequenceResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySendSequenceResponse): QuerySendSequenceResponseProtoMsg {
    return {
      typeUrl: "/cosmos.crosschain.v1.QuerySendSequenceResponse",
      value: QuerySendSequenceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryReceiveSequenceRequest(): QueryReceiveSequenceRequest {
  return {
    destChainId: 0,
    channelId: 0
  };
}
export const QueryReceiveSequenceRequest = {
  typeUrl: "/cosmos.crosschain.v1.QueryReceiveSequenceRequest",
  encode(message: QueryReceiveSequenceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.destChainId !== 0) {
      writer.uint32(8).uint32(message.destChainId);
    }
    if (message.channelId !== 0) {
      writer.uint32(16).uint32(message.channelId);
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
          message.destChainId = reader.uint32();
          break;
        case 2:
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
      destChainId: isSet(object.destChainId) ? Number(object.destChainId) : 0,
      channelId: isSet(object.channelId) ? Number(object.channelId) : 0
    };
  },
  toJSON(message: QueryReceiveSequenceRequest): unknown {
    const obj: any = {};
    message.destChainId !== undefined && (obj.destChainId = Math.round(message.destChainId));
    message.channelId !== undefined && (obj.channelId = Math.round(message.channelId));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryReceiveSequenceRequest>, I>>(object: I): QueryReceiveSequenceRequest {
    const message = createBaseQueryReceiveSequenceRequest();
    message.destChainId = object.destChainId ?? 0;
    message.channelId = object.channelId ?? 0;
    return message;
  },
  fromSDK(object: QueryReceiveSequenceRequestSDKType): QueryReceiveSequenceRequest {
    return {
      destChainId: object?.dest_chain_id,
      channelId: object?.channel_id
    };
  },
  toSDK(message: QueryReceiveSequenceRequest): QueryReceiveSequenceRequestSDKType {
    const obj: any = {};
    obj.dest_chain_id = message.destChainId;
    obj.channel_id = message.channelId;
    return obj;
  },
  fromAmino(object: QueryReceiveSequenceRequestAmino): QueryReceiveSequenceRequest {
    const message = createBaseQueryReceiveSequenceRequest();
    if (object.dest_chain_id !== undefined && object.dest_chain_id !== null) {
      message.destChainId = object.dest_chain_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    return message;
  },
  toAmino(message: QueryReceiveSequenceRequest): QueryReceiveSequenceRequestAmino {
    const obj: any = {};
    obj.dest_chain_id = message.destChainId;
    obj.channel_id = message.channelId;
    return obj;
  },
  fromAminoMsg(object: QueryReceiveSequenceRequestAminoMsg): QueryReceiveSequenceRequest {
    return QueryReceiveSequenceRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryReceiveSequenceRequest): QueryReceiveSequenceRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryReceiveSequenceRequest",
      value: QueryReceiveSequenceRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryReceiveSequenceRequestProtoMsg): QueryReceiveSequenceRequest {
    return QueryReceiveSequenceRequest.decode(message.value);
  },
  toProto(message: QueryReceiveSequenceRequest): Uint8Array {
    return QueryReceiveSequenceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryReceiveSequenceRequest): QueryReceiveSequenceRequestProtoMsg {
    return {
      typeUrl: "/cosmos.crosschain.v1.QueryReceiveSequenceRequest",
      value: QueryReceiveSequenceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryReceiveSequenceResponse(): QueryReceiveSequenceResponse {
  return {
    sequence: Long.UZERO
  };
}
export const QueryReceiveSequenceResponse = {
  typeUrl: "/cosmos.crosschain.v1.QueryReceiveSequenceResponse",
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
  },
  fromAmino(object: QueryReceiveSequenceResponseAmino): QueryReceiveSequenceResponse {
    const message = createBaseQueryReceiveSequenceResponse();
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = Long.fromString(object.sequence);
    }
    return message;
  },
  toAmino(message: QueryReceiveSequenceResponse): QueryReceiveSequenceResponseAmino {
    const obj: any = {};
    obj.sequence = message.sequence ? message.sequence.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryReceiveSequenceResponseAminoMsg): QueryReceiveSequenceResponse {
    return QueryReceiveSequenceResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryReceiveSequenceResponse): QueryReceiveSequenceResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryReceiveSequenceResponse",
      value: QueryReceiveSequenceResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryReceiveSequenceResponseProtoMsg): QueryReceiveSequenceResponse {
    return QueryReceiveSequenceResponse.decode(message.value);
  },
  toProto(message: QueryReceiveSequenceResponse): Uint8Array {
    return QueryReceiveSequenceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryReceiveSequenceResponse): QueryReceiveSequenceResponseProtoMsg {
    return {
      typeUrl: "/cosmos.crosschain.v1.QueryReceiveSequenceResponse",
      value: QueryReceiveSequenceResponse.encode(message).finish()
    };
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