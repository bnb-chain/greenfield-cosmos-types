//@ts-nocheck
/* eslint-disable */
import { Config, ConfigSDKType } from "./config";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Exact, isSet, Rpc } from "../../../helpers";
export const protobufPackage = "cosmos.app.v1alpha1";
/** QueryConfigRequest is the Query/Config request type. */
export interface QueryConfigRequest {}
export interface QueryConfigRequestProtoMsg {
  typeUrl: "/cosmos.app.v1alpha1.QueryConfigRequest";
  value: Uint8Array;
}
/** QueryConfigRequest is the Query/Config request type. */
export interface QueryConfigRequestSDKType {}
/** QueryConfigRequest is the Query/Config response type. */
export interface QueryConfigResponse {
  /** config is the current app config. */
  config?: Config;
}
export interface QueryConfigResponseProtoMsg {
  typeUrl: "/cosmos.app.v1alpha1.QueryConfigResponse";
  value: Uint8Array;
}
/** QueryConfigRequest is the Query/Config response type. */
export interface QueryConfigResponseSDKType {
  config?: ConfigSDKType;
}
function createBaseQueryConfigRequest(): QueryConfigRequest {
  return {};
}
export const QueryConfigRequest = {
  typeUrl: "/cosmos.app.v1alpha1.QueryConfigRequest",
  encode(_: QueryConfigRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConfigRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConfigRequest();
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
  fromJSON(_: any): QueryConfigRequest {
    return {};
  },
  toJSON(_: QueryConfigRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryConfigRequest>, I>>(_: I): QueryConfigRequest {
    const message = createBaseQueryConfigRequest();
    return message;
  },
  fromSDK(_: QueryConfigRequestSDKType): QueryConfigRequest {
    return {};
  },
  toSDK(_: QueryConfigRequest): QueryConfigRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryConfigRequestAmino): QueryConfigRequest {
    const message = createBaseQueryConfigRequest();
    return message;
  },
  toAmino(_: QueryConfigRequest): QueryConfigRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryConfigRequestAminoMsg): QueryConfigRequest {
    return QueryConfigRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryConfigRequest): QueryConfigRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryConfigRequest",
      value: QueryConfigRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryConfigRequestProtoMsg): QueryConfigRequest {
    return QueryConfigRequest.decode(message.value);
  },
  toProto(message: QueryConfigRequest): Uint8Array {
    return QueryConfigRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryConfigRequest): QueryConfigRequestProtoMsg {
    return {
      typeUrl: "/cosmos.app.v1alpha1.QueryConfigRequest",
      value: QueryConfigRequest.encode(message).finish()
    };
  }
};
function createBaseQueryConfigResponse(): QueryConfigResponse {
  return {
    config: undefined
  };
}
export const QueryConfigResponse = {
  typeUrl: "/cosmos.app.v1alpha1.QueryConfigResponse",
  encode(message: QueryConfigResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      Config.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConfigResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = Config.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryConfigResponse {
    return {
      config: isSet(object.config) ? Config.fromJSON(object.config) : undefined
    };
  },
  toJSON(message: QueryConfigResponse): unknown {
    const obj: any = {};
    message.config !== undefined && (obj.config = message.config ? Config.toJSON(message.config) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryConfigResponse>, I>>(object: I): QueryConfigResponse {
    const message = createBaseQueryConfigResponse();
    message.config = object.config !== undefined && object.config !== null ? Config.fromPartial(object.config) : undefined;
    return message;
  },
  fromSDK(object: QueryConfigResponseSDKType): QueryConfigResponse {
    return {
      config: object.config ? Config.fromSDK(object.config) : undefined
    };
  },
  toSDK(message: QueryConfigResponse): QueryConfigResponseSDKType {
    const obj: any = {};
    message.config !== undefined && (obj.config = message.config ? Config.toSDK(message.config) : undefined);
    return obj;
  },
  fromAmino(object: QueryConfigResponseAmino): QueryConfigResponse {
    const message = createBaseQueryConfigResponse();
    if (object.config !== undefined && object.config !== null) {
      message.config = Config.fromAmino(object.config);
    }
    return message;
  },
  toAmino(message: QueryConfigResponse): QueryConfigResponseAmino {
    const obj: any = {};
    obj.config = message.config ? Config.toAmino(message.config) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryConfigResponseAminoMsg): QueryConfigResponse {
    return QueryConfigResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryConfigResponse): QueryConfigResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryConfigResponse",
      value: QueryConfigResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryConfigResponseProtoMsg): QueryConfigResponse {
    return QueryConfigResponse.decode(message.value);
  },
  toProto(message: QueryConfigResponse): Uint8Array {
    return QueryConfigResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryConfigResponse): QueryConfigResponseProtoMsg {
    return {
      typeUrl: "/cosmos.app.v1alpha1.QueryConfigResponse",
      value: QueryConfigResponse.encode(message).finish()
    };
  }
};
/** Query is the app module query service. */
export interface Query {
  /** Config returns the current app config. */
  Config(request?: QueryConfigRequest): Promise<QueryConfigResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Config = this.Config.bind(this);
  }
  Config(request: QueryConfigRequest = {}): Promise<QueryConfigResponse> {
    const data = QueryConfigRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.app.v1alpha1.Query", "Config", data);
    return promise.then(data => QueryConfigResponse.decode(new _m0.Reader(data)));
  }
}