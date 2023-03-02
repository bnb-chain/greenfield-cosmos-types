/* eslint-disable */
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
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

export interface QueryHeadBucketRequest {
  bucketName: string;
}
export interface QueryHeadBucketResponse {
  bucketInfo?: BucketInfo;
}
export interface QueryHeadObjectRequest {
  bucketName: string;
  objectName: string;
}
export interface QueryHeadObjectResponse {
  objectInfo?: ObjectInfo;
}
export interface QueryListBucketsRequest {
  pagination?: PageRequest;
}
export interface QueryListBucketsResponse {
  bucketInfos: BucketInfo[];
  pagination?: PageResponse;
}
export interface QueryListObjectsRequest {
  pagination?: PageRequest;
  bucketName: string;
}
export interface QueryListObjectsResponse {
  objectInfos: ObjectInfo[];
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

function createBaseQueryHeadBucketRequest(): QueryHeadBucketRequest {
  return {
    bucketName: ""
  };
}

export const QueryHeadBucketRequest = {
  encode(message: QueryHeadBucketRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bucketName !== "") {
      writer.uint32(10).string(message.bucketName);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHeadBucketRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHeadBucketRequest();

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

  fromJSON(object: any): QueryHeadBucketRequest {
    return {
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : ""
    };
  },

  toJSON(message: QueryHeadBucketRequest): unknown {
    const obj: any = {};
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryHeadBucketRequest>, I>>(object: I): QueryHeadBucketRequest {
    const message = createBaseQueryHeadBucketRequest();
    message.bucketName = object.bucketName ?? "";
    return message;
  }

};

function createBaseQueryHeadBucketResponse(): QueryHeadBucketResponse {
  return {
    bucketInfo: undefined
  };
}

export const QueryHeadBucketResponse = {
  encode(message: QueryHeadBucketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bucketInfo !== undefined) {
      BucketInfo.encode(message.bucketInfo, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHeadBucketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHeadBucketResponse();

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

  fromJSON(object: any): QueryHeadBucketResponse {
    return {
      bucketInfo: isSet(object.bucketInfo) ? BucketInfo.fromJSON(object.bucketInfo) : undefined
    };
  },

  toJSON(message: QueryHeadBucketResponse): unknown {
    const obj: any = {};
    message.bucketInfo !== undefined && (obj.bucketInfo = message.bucketInfo ? BucketInfo.toJSON(message.bucketInfo) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryHeadBucketResponse>, I>>(object: I): QueryHeadBucketResponse {
    const message = createBaseQueryHeadBucketResponse();
    message.bucketInfo = object.bucketInfo !== undefined && object.bucketInfo !== null ? BucketInfo.fromPartial(object.bucketInfo) : undefined;
    return message;
  }

};

function createBaseQueryHeadObjectRequest(): QueryHeadObjectRequest {
  return {
    bucketName: "",
    objectName: ""
  };
}

export const QueryHeadObjectRequest = {
  encode(message: QueryHeadObjectRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bucketName !== "") {
      writer.uint32(10).string(message.bucketName);
    }

    if (message.objectName !== "") {
      writer.uint32(18).string(message.objectName);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHeadObjectRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHeadObjectRequest();

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

  fromJSON(object: any): QueryHeadObjectRequest {
    return {
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      objectName: isSet(object.objectName) ? String(object.objectName) : ""
    };
  },

  toJSON(message: QueryHeadObjectRequest): unknown {
    const obj: any = {};
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.objectName !== undefined && (obj.objectName = message.objectName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryHeadObjectRequest>, I>>(object: I): QueryHeadObjectRequest {
    const message = createBaseQueryHeadObjectRequest();
    message.bucketName = object.bucketName ?? "";
    message.objectName = object.objectName ?? "";
    return message;
  }

};

function createBaseQueryHeadObjectResponse(): QueryHeadObjectResponse {
  return {
    objectInfo: undefined
  };
}

export const QueryHeadObjectResponse = {
  encode(message: QueryHeadObjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.objectInfo !== undefined) {
      ObjectInfo.encode(message.objectInfo, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHeadObjectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHeadObjectResponse();

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

  fromJSON(object: any): QueryHeadObjectResponse {
    return {
      objectInfo: isSet(object.objectInfo) ? ObjectInfo.fromJSON(object.objectInfo) : undefined
    };
  },

  toJSON(message: QueryHeadObjectResponse): unknown {
    const obj: any = {};
    message.objectInfo !== undefined && (obj.objectInfo = message.objectInfo ? ObjectInfo.toJSON(message.objectInfo) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryHeadObjectResponse>, I>>(object: I): QueryHeadObjectResponse {
    const message = createBaseQueryHeadObjectResponse();
    message.objectInfo = object.objectInfo !== undefined && object.objectInfo !== null ? ObjectInfo.fromPartial(object.objectInfo) : undefined;
    return message;
  }

};

function createBaseQueryListBucketsRequest(): QueryListBucketsRequest {
  return {
    pagination: undefined
  };
}

export const QueryListBucketsRequest = {
  encode(message: QueryListBucketsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListBucketsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListBucketsRequest();

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

  fromJSON(object: any): QueryListBucketsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryListBucketsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryListBucketsRequest>, I>>(object: I): QueryListBucketsRequest {
    const message = createBaseQueryListBucketsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryListBucketsResponse(): QueryListBucketsResponse {
  return {
    bucketInfos: [],
    pagination: undefined
  };
}

export const QueryListBucketsResponse = {
  encode(message: QueryListBucketsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.bucketInfos) {
      BucketInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListBucketsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListBucketsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bucketInfos.push(BucketInfo.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryListBucketsResponse {
    return {
      bucketInfos: Array.isArray(object?.bucketInfos) ? object.bucketInfos.map((e: any) => BucketInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryListBucketsResponse): unknown {
    const obj: any = {};

    if (message.bucketInfos) {
      obj.bucketInfos = message.bucketInfos.map(e => e ? BucketInfo.toJSON(e) : undefined);
    } else {
      obj.bucketInfos = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryListBucketsResponse>, I>>(object: I): QueryListBucketsResponse {
    const message = createBaseQueryListBucketsResponse();
    message.bucketInfos = object.bucketInfos?.map(e => BucketInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryListObjectsRequest(): QueryListObjectsRequest {
  return {
    pagination: undefined,
    bucketName: ""
  };
}

export const QueryListObjectsRequest = {
  encode(message: QueryListObjectsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListObjectsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListObjectsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        case 2:
          message.bucketName = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryListObjectsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : ""
    };
  },

  toJSON(message: QueryListObjectsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryListObjectsRequest>, I>>(object: I): QueryListObjectsRequest {
    const message = createBaseQueryListObjectsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.bucketName = object.bucketName ?? "";
    return message;
  }

};

function createBaseQueryListObjectsResponse(): QueryListObjectsResponse {
  return {
    objectInfos: [],
    pagination: undefined
  };
}

export const QueryListObjectsResponse = {
  encode(message: QueryListObjectsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.objectInfos) {
      ObjectInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListObjectsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListObjectsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.objectInfos.push(ObjectInfo.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryListObjectsResponse {
    return {
      objectInfos: Array.isArray(object?.objectInfos) ? object.objectInfos.map((e: any) => ObjectInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryListObjectsResponse): unknown {
    const obj: any = {};

    if (message.objectInfos) {
      obj.objectInfos = message.objectInfos.map(e => e ? ObjectInfo.toJSON(e) : undefined);
    } else {
      obj.objectInfos = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryListObjectsResponse>, I>>(object: I): QueryListObjectsResponse {
    const message = createBaseQueryListObjectsResponse();
    message.objectInfos = object.objectInfos?.map(e => ObjectInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};
/** Query defines the gRPC querier service. */

export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a bucket with specify name. */

  HeadBucket(request: QueryHeadBucketRequest): Promise<QueryHeadBucketResponse>;
  /** Queries a object with specify name. */

  HeadObject(request: QueryHeadObjectRequest): Promise<QueryHeadObjectResponse>;
  /** Queries a list of bucket items. */

  ListBuckets(request?: QueryListBucketsRequest): Promise<QueryListBucketsResponse>;
  /** Queries a list of object items under the bucket. */

  ListObjects(request: QueryListObjectsRequest): Promise<QueryListObjectsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.HeadBucket = this.HeadBucket.bind(this);
    this.HeadObject = this.HeadObject.bind(this);
    this.ListBuckets = this.ListBuckets.bind(this);
    this.ListObjects = this.ListObjects.bind(this);
  }

  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.storage.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  HeadBucket(request: QueryHeadBucketRequest): Promise<QueryHeadBucketResponse> {
    const data = QueryHeadBucketRequest.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.storage.Query", "HeadBucket", data);
    return promise.then(data => QueryHeadBucketResponse.decode(new _m0.Reader(data)));
  }

  HeadObject(request: QueryHeadObjectRequest): Promise<QueryHeadObjectResponse> {
    const data = QueryHeadObjectRequest.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.storage.Query", "HeadObject", data);
    return promise.then(data => QueryHeadObjectResponse.decode(new _m0.Reader(data)));
  }

  ListBuckets(request: QueryListBucketsRequest = {
    pagination: undefined
  }): Promise<QueryListBucketsResponse> {
    const data = QueryListBucketsRequest.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.storage.Query", "ListBuckets", data);
    return promise.then(data => QueryListBucketsResponse.decode(new _m0.Reader(data)));
  }

  ListObjects(request: QueryListObjectsRequest): Promise<QueryListObjectsResponse> {
    const data = QueryListObjectsRequest.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.storage.Query", "ListObjects", data);
    return promise.then(data => QueryListObjectsResponse.decode(new _m0.Reader(data)));
  }

}