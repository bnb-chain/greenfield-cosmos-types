/* eslint-disable */
import { Params } from "./params";
import { BucketInfo, ObjectInfo } from "./types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Exact, isSet, Rpc } from "../../helpers";
export const protobufPackage = "bnbchain.greenfield.storage";
/** QueryParamsRequest is request type for the Query/Params RPC method. */

export interface QueryParamsRequest {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */

export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}
/** this line is used by starport scaffolding # 3 */

export interface QueryBucketRequest {
  bucketName: string;
}
export interface QueryBucketResponse {
  bucketInfo?: BucketInfo;
}
export interface QueryObjectRequest {
  bucketName: string;
  objectName: string;
}
export interface QueryObjectResponse {
  objectInfo?: ObjectInfo;
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

function createBaseQueryBucketRequest(): QueryBucketRequest {
  return {
    bucketName: ""
  };
}

export const QueryBucketRequest = {
  encode(message: QueryBucketRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bucketName !== "") {
      writer.uint32(10).string(message.bucketName);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBucketRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBucketRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bucketName = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryBucketRequest {
    return {
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : ""
    };
  },

  toJSON(message: QueryBucketRequest): unknown {
    const obj: any = {};
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBucketRequest>, I>>(object: I): QueryBucketRequest {
    const message = createBaseQueryBucketRequest();
    message.bucketName = object.bucketName ?? "";
    return message;
  }

};

function createBaseQueryBucketResponse(): QueryBucketResponse {
  return {
    bucketInfo: undefined
  };
}

export const QueryBucketResponse = {
  encode(message: QueryBucketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bucketInfo !== undefined) {
      BucketInfo.encode(message.bucketInfo, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBucketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBucketResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bucketInfo = BucketInfo.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryBucketResponse {
    return {
      bucketInfo: isSet(object.bucketInfo) ? BucketInfo.fromJSON(object.bucketInfo) : undefined
    };
  },

  toJSON(message: QueryBucketResponse): unknown {
    const obj: any = {};
    message.bucketInfo !== undefined && (obj.bucketInfo = message.bucketInfo ? BucketInfo.toJSON(message.bucketInfo) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBucketResponse>, I>>(object: I): QueryBucketResponse {
    const message = createBaseQueryBucketResponse();
    message.bucketInfo = object.bucketInfo !== undefined && object.bucketInfo !== null ? BucketInfo.fromPartial(object.bucketInfo) : undefined;
    return message;
  }

};

function createBaseQueryObjectRequest(): QueryObjectRequest {
  return {
    bucketName: "",
    objectName: ""
  };
}

export const QueryObjectRequest = {
  encode(message: QueryObjectRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bucketName !== "") {
      writer.uint32(10).string(message.bucketName);
    }

    if (message.objectName !== "") {
      writer.uint32(18).string(message.objectName);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryObjectRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryObjectRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bucketName = reader.string();
          break;

        case 2:
          message.objectName = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryObjectRequest {
    return {
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      objectName: isSet(object.objectName) ? String(object.objectName) : ""
    };
  },

  toJSON(message: QueryObjectRequest): unknown {
    const obj: any = {};
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.objectName !== undefined && (obj.objectName = message.objectName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryObjectRequest>, I>>(object: I): QueryObjectRequest {
    const message = createBaseQueryObjectRequest();
    message.bucketName = object.bucketName ?? "";
    message.objectName = object.objectName ?? "";
    return message;
  }

};

function createBaseQueryObjectResponse(): QueryObjectResponse {
  return {
    objectInfo: undefined
  };
}

export const QueryObjectResponse = {
  encode(message: QueryObjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.objectInfo !== undefined) {
      ObjectInfo.encode(message.objectInfo, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryObjectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryObjectResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.objectInfo = ObjectInfo.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryObjectResponse {
    return {
      objectInfo: isSet(object.objectInfo) ? ObjectInfo.fromJSON(object.objectInfo) : undefined
    };
  },

  toJSON(message: QueryObjectResponse): unknown {
    const obj: any = {};
    message.objectInfo !== undefined && (obj.objectInfo = message.objectInfo ? ObjectInfo.toJSON(message.objectInfo) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryObjectResponse>, I>>(object: I): QueryObjectResponse {
    const message = createBaseQueryObjectResponse();
    message.objectInfo = object.objectInfo !== undefined && object.objectInfo !== null ? ObjectInfo.fromPartial(object.objectInfo) : undefined;
    return message;
  }

};
/** Query defines the gRPC querier service. */

export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of Bucket items. */

  Bucket(request: QueryBucketRequest): Promise<QueryBucketResponse>;
  /** Queries a list of Object items. */

  Object(request: QueryObjectRequest): Promise<QueryObjectResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Bucket = this.Bucket.bind(this);
    this.Object = this.Object.bind(this);
  }

  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.storage.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  Bucket(request: QueryBucketRequest): Promise<QueryBucketResponse> {
    const data = QueryBucketRequest.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.storage.Query", "Bucket", data);
    return promise.then(data => QueryBucketResponse.decode(new _m0.Reader(data)));
  }

  Object(request: QueryObjectRequest): Promise<QueryObjectResponse> {
    const data = QueryObjectRequest.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.storage.Query", "Object", data);
    return promise.then(data => QueryObjectResponse.decode(new _m0.Reader(data)));
  }

}