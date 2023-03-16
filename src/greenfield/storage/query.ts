/* eslint-disable */
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { ActionType, Effect, actionTypeFromJSON, actionTypeToJSON, effectFromJSON, effectToJSON } from "../permission/common";
import { Params } from "./params";
import { BucketInfo, ObjectInfo, BucketMetaData, ObjectMetaData, GroupMetaData } from "./types";
import { Policy } from "../permission/types";
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
export interface QueryHeadBucketByIdRequest {
  bucketId: string;
}
export interface QueryHeadBucketResponse {
  bucketInfo?: BucketInfo;
}
export interface QueryHeadObjectRequest {
  bucketName: string;
  objectName: string;
}
export interface QueryHeadObjectByIdRequest {
  objectId: string;
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
export interface QueryListObjectsByBucketIdRequest {
  pagination?: PageRequest;
  bucketId: string;
}
export interface QueryListObjectsResponse {
  objectInfos: ObjectInfo[];
  pagination?: PageResponse;
}
export interface QueryNFTRequest {
  tokenId: string;
}
export interface QueryBucketNFTResponse {
  metaData?: BucketMetaData;
}
export interface QueryObjectNFTResponse {
  metaData?: ObjectMetaData;
}
export interface QueryGroupNFTResponse {
  metaData?: GroupMetaData;
}
export interface QueryGetPolicyRequest {
  policyId: string;
}
export interface QueryGetPolicyResponse {
  policy?: Policy;
}
export interface QueryVerifyPermissionRequest {
  operator: string;
  bucketName: string;
  objectName: string;
  actionType: ActionType;
}
export interface QueryVerifyPermissionResponse {
  effect: Effect;
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

function createBaseQueryHeadBucketByIdRequest(): QueryHeadBucketByIdRequest {
  return {
    bucketId: ""
  };
}

export const QueryHeadBucketByIdRequest = {
  encode(message: QueryHeadBucketByIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bucketId !== "") {
      writer.uint32(10).string(message.bucketId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHeadBucketByIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHeadBucketByIdRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bucketId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryHeadBucketByIdRequest {
    return {
      bucketId: isSet(object.bucketId) ? String(object.bucketId) : ""
    };
  },

  toJSON(message: QueryHeadBucketByIdRequest): unknown {
    const obj: any = {};
    message.bucketId !== undefined && (obj.bucketId = message.bucketId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryHeadBucketByIdRequest>, I>>(object: I): QueryHeadBucketByIdRequest {
    const message = createBaseQueryHeadBucketByIdRequest();
    message.bucketId = object.bucketId ?? "";
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

function createBaseQueryHeadObjectByIdRequest(): QueryHeadObjectByIdRequest {
  return {
    objectId: ""
  };
}

export const QueryHeadObjectByIdRequest = {
  encode(message: QueryHeadObjectByIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.objectId !== "") {
      writer.uint32(10).string(message.objectId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHeadObjectByIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHeadObjectByIdRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.objectId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryHeadObjectByIdRequest {
    return {
      objectId: isSet(object.objectId) ? String(object.objectId) : ""
    };
  },

  toJSON(message: QueryHeadObjectByIdRequest): unknown {
    const obj: any = {};
    message.objectId !== undefined && (obj.objectId = message.objectId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryHeadObjectByIdRequest>, I>>(object: I): QueryHeadObjectByIdRequest {
    const message = createBaseQueryHeadObjectByIdRequest();
    message.objectId = object.objectId ?? "";
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

function createBaseQueryListObjectsByBucketIdRequest(): QueryListObjectsByBucketIdRequest {
  return {
    pagination: undefined,
    bucketId: ""
  };
}

export const QueryListObjectsByBucketIdRequest = {
  encode(message: QueryListObjectsByBucketIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    if (message.bucketId !== "") {
      writer.uint32(18).string(message.bucketId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListObjectsByBucketIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListObjectsByBucketIdRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        case 2:
          message.bucketId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryListObjectsByBucketIdRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      bucketId: isSet(object.bucketId) ? String(object.bucketId) : ""
    };
  },

  toJSON(message: QueryListObjectsByBucketIdRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.bucketId !== undefined && (obj.bucketId = message.bucketId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryListObjectsByBucketIdRequest>, I>>(object: I): QueryListObjectsByBucketIdRequest {
    const message = createBaseQueryListObjectsByBucketIdRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.bucketId = object.bucketId ?? "";
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

function createBaseQueryNFTRequest(): QueryNFTRequest {
  return {
    tokenId: ""
  };
}

export const QueryNFTRequest = {
  encode(message: QueryNFTRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenId !== "") {
      writer.uint32(10).string(message.tokenId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.tokenId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryNFTRequest {
    return {
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : ""
    };
  },

  toJSON(message: QueryNFTRequest): unknown {
    const obj: any = {};
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryNFTRequest>, I>>(object: I): QueryNFTRequest {
    const message = createBaseQueryNFTRequest();
    message.tokenId = object.tokenId ?? "";
    return message;
  }

};

function createBaseQueryBucketNFTResponse(): QueryBucketNFTResponse {
  return {
    metaData: undefined
  };
}

export const QueryBucketNFTResponse = {
  encode(message: QueryBucketNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metaData !== undefined) {
      BucketMetaData.encode(message.metaData, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBucketNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBucketNFTResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.metaData = BucketMetaData.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryBucketNFTResponse {
    return {
      metaData: isSet(object.metaData) ? BucketMetaData.fromJSON(object.metaData) : undefined
    };
  },

  toJSON(message: QueryBucketNFTResponse): unknown {
    const obj: any = {};
    message.metaData !== undefined && (obj.metaData = message.metaData ? BucketMetaData.toJSON(message.metaData) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBucketNFTResponse>, I>>(object: I): QueryBucketNFTResponse {
    const message = createBaseQueryBucketNFTResponse();
    message.metaData = object.metaData !== undefined && object.metaData !== null ? BucketMetaData.fromPartial(object.metaData) : undefined;
    return message;
  }

};

function createBaseQueryObjectNFTResponse(): QueryObjectNFTResponse {
  return {
    metaData: undefined
  };
}

export const QueryObjectNFTResponse = {
  encode(message: QueryObjectNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metaData !== undefined) {
      ObjectMetaData.encode(message.metaData, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryObjectNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryObjectNFTResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.metaData = ObjectMetaData.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryObjectNFTResponse {
    return {
      metaData: isSet(object.metaData) ? ObjectMetaData.fromJSON(object.metaData) : undefined
    };
  },

  toJSON(message: QueryObjectNFTResponse): unknown {
    const obj: any = {};
    message.metaData !== undefined && (obj.metaData = message.metaData ? ObjectMetaData.toJSON(message.metaData) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryObjectNFTResponse>, I>>(object: I): QueryObjectNFTResponse {
    const message = createBaseQueryObjectNFTResponse();
    message.metaData = object.metaData !== undefined && object.metaData !== null ? ObjectMetaData.fromPartial(object.metaData) : undefined;
    return message;
  }

};

function createBaseQueryGroupNFTResponse(): QueryGroupNFTResponse {
  return {
    metaData: undefined
  };
}

export const QueryGroupNFTResponse = {
  encode(message: QueryGroupNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metaData !== undefined) {
      GroupMetaData.encode(message.metaData, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupNFTResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.metaData = GroupMetaData.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGroupNFTResponse {
    return {
      metaData: isSet(object.metaData) ? GroupMetaData.fromJSON(object.metaData) : undefined
    };
  },

  toJSON(message: QueryGroupNFTResponse): unknown {
    const obj: any = {};
    message.metaData !== undefined && (obj.metaData = message.metaData ? GroupMetaData.toJSON(message.metaData) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGroupNFTResponse>, I>>(object: I): QueryGroupNFTResponse {
    const message = createBaseQueryGroupNFTResponse();
    message.metaData = object.metaData !== undefined && object.metaData !== null ? GroupMetaData.fromPartial(object.metaData) : undefined;
    return message;
  }

};

function createBaseQueryGetPolicyRequest(): QueryGetPolicyRequest {
  return {
    policyId: ""
  };
}

export const QueryGetPolicyRequest = {
  encode(message: QueryGetPolicyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.policyId !== "") {
      writer.uint32(10).string(message.policyId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPolicyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPolicyRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.policyId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetPolicyRequest {
    return {
      policyId: isSet(object.policyId) ? String(object.policyId) : ""
    };
  },

  toJSON(message: QueryGetPolicyRequest): unknown {
    const obj: any = {};
    message.policyId !== undefined && (obj.policyId = message.policyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPolicyRequest>, I>>(object: I): QueryGetPolicyRequest {
    const message = createBaseQueryGetPolicyRequest();
    message.policyId = object.policyId ?? "";
    return message;
  }

};

function createBaseQueryGetPolicyResponse(): QueryGetPolicyResponse {
  return {
    policy: undefined
  };
}

export const QueryGetPolicyResponse = {
  encode(message: QueryGetPolicyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.policy !== undefined) {
      Policy.encode(message.policy, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPolicyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPolicyResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.policy = Policy.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetPolicyResponse {
    return {
      policy: isSet(object.policy) ? Policy.fromJSON(object.policy) : undefined
    };
  },

  toJSON(message: QueryGetPolicyResponse): unknown {
    const obj: any = {};
    message.policy !== undefined && (obj.policy = message.policy ? Policy.toJSON(message.policy) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPolicyResponse>, I>>(object: I): QueryGetPolicyResponse {
    const message = createBaseQueryGetPolicyResponse();
    message.policy = object.policy !== undefined && object.policy !== null ? Policy.fromPartial(object.policy) : undefined;
    return message;
  }

};

function createBaseQueryVerifyPermissionRequest(): QueryVerifyPermissionRequest {
  return {
    operator: "",
    bucketName: "",
    objectName: "",
    actionType: 0
  };
}

export const QueryVerifyPermissionRequest = {
  encode(message: QueryVerifyPermissionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }

    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }

    if (message.objectName !== "") {
      writer.uint32(26).string(message.objectName);
    }

    if (message.actionType !== 0) {
      writer.uint32(32).int32(message.actionType);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVerifyPermissionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVerifyPermissionRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;

        case 2:
          message.bucketName = reader.string();
          break;

        case 3:
          message.objectName = reader.string();
          break;

        case 4:
          message.actionType = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryVerifyPermissionRequest {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      objectName: isSet(object.objectName) ? String(object.objectName) : "",
      actionType: isSet(object.actionType) ? actionTypeFromJSON(object.actionType) : 0
    };
  },

  toJSON(message: QueryVerifyPermissionRequest): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.objectName !== undefined && (obj.objectName = message.objectName);
    message.actionType !== undefined && (obj.actionType = actionTypeToJSON(message.actionType));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryVerifyPermissionRequest>, I>>(object: I): QueryVerifyPermissionRequest {
    const message = createBaseQueryVerifyPermissionRequest();
    message.operator = object.operator ?? "";
    message.bucketName = object.bucketName ?? "";
    message.objectName = object.objectName ?? "";
    message.actionType = object.actionType ?? 0;
    return message;
  }

};

function createBaseQueryVerifyPermissionResponse(): QueryVerifyPermissionResponse {
  return {
    effect: 0
  };
}

export const QueryVerifyPermissionResponse = {
  encode(message: QueryVerifyPermissionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.effect !== 0) {
      writer.uint32(8).int32(message.effect);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVerifyPermissionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVerifyPermissionResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.effect = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryVerifyPermissionResponse {
    return {
      effect: isSet(object.effect) ? effectFromJSON(object.effect) : 0
    };
  },

  toJSON(message: QueryVerifyPermissionResponse): unknown {
    const obj: any = {};
    message.effect !== undefined && (obj.effect = effectToJSON(message.effect));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryVerifyPermissionResponse>, I>>(object: I): QueryVerifyPermissionResponse {
    const message = createBaseQueryVerifyPermissionResponse();
    message.effect = object.effect ?? 0;
    return message;
  }

};
/** Query defines the gRPC querier service. */

export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a bucket with specify name. */

  HeadBucket(request: QueryHeadBucketRequest): Promise<QueryHeadBucketResponse>;
  /** Queries a bucket by id */

  HeadBucketById(request: QueryHeadBucketByIdRequest): Promise<QueryHeadBucketResponse>;
  /** Queries a bucket with EIP712 standard metadata info */

  HeadBucketNFT(request: QueryNFTRequest): Promise<QueryBucketNFTResponse>;
  /** Queries a object with specify name. */

  HeadObject(request: QueryHeadObjectRequest): Promise<QueryHeadObjectResponse>;
  /** Queries a object by id */

  HeadObjectById(request: QueryHeadObjectByIdRequest): Promise<QueryHeadObjectResponse>;
  /** Queries a object with EIP712 standard metadata info */

  HeadObjectNFT(request: QueryNFTRequest): Promise<QueryObjectNFTResponse>;
  /** Queries a list of bucket items. */

  ListBuckets(request?: QueryListBucketsRequest): Promise<QueryListBucketsResponse>;
  /** Queries a list of object items under the bucket. */

  ListObjects(request: QueryListObjectsRequest): Promise<QueryListObjectsResponse>;
  /** Queries a list of object items under the bucket. */

  ListObjectsByBucketId(request: QueryListObjectsByBucketIdRequest): Promise<QueryListObjectsResponse>;
  /** Queries a group with EIP712 standard metadata info */

  HeadGroupNFT(request: QueryNFTRequest): Promise<QueryGroupNFTResponse>;
  /** Queries policy by policyID */

  GetPolicy(request: QueryGetPolicyRequest): Promise<QueryGetPolicyResponse>;
  /** Queries a list of VerifyPermission items. */

  VerifyPermission(request: QueryVerifyPermissionRequest): Promise<QueryVerifyPermissionResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.HeadBucket = this.HeadBucket.bind(this);
    this.HeadBucketById = this.HeadBucketById.bind(this);
    this.HeadBucketNFT = this.HeadBucketNFT.bind(this);
    this.HeadObject = this.HeadObject.bind(this);
    this.HeadObjectById = this.HeadObjectById.bind(this);
    this.HeadObjectNFT = this.HeadObjectNFT.bind(this);
    this.ListBuckets = this.ListBuckets.bind(this);
    this.ListObjects = this.ListObjects.bind(this);
    this.ListObjectsByBucketId = this.ListObjectsByBucketId.bind(this);
    this.HeadGroupNFT = this.HeadGroupNFT.bind(this);
    this.GetPolicy = this.GetPolicy.bind(this);
    this.VerifyPermission = this.VerifyPermission.bind(this);
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

  HeadBucketById(request: QueryHeadBucketByIdRequest): Promise<QueryHeadBucketResponse> {
    const data = QueryHeadBucketByIdRequest.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.storage.Query", "HeadBucketById", data);
    return promise.then(data => QueryHeadBucketResponse.decode(new _m0.Reader(data)));
  }

  HeadBucketNFT(request: QueryNFTRequest): Promise<QueryBucketNFTResponse> {
    const data = QueryNFTRequest.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.storage.Query", "HeadBucketNFT", data);
    return promise.then(data => QueryBucketNFTResponse.decode(new _m0.Reader(data)));
  }

  HeadObject(request: QueryHeadObjectRequest): Promise<QueryHeadObjectResponse> {
    const data = QueryHeadObjectRequest.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.storage.Query", "HeadObject", data);
    return promise.then(data => QueryHeadObjectResponse.decode(new _m0.Reader(data)));
  }

  HeadObjectById(request: QueryHeadObjectByIdRequest): Promise<QueryHeadObjectResponse> {
    const data = QueryHeadObjectByIdRequest.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.storage.Query", "HeadObjectById", data);
    return promise.then(data => QueryHeadObjectResponse.decode(new _m0.Reader(data)));
  }

  HeadObjectNFT(request: QueryNFTRequest): Promise<QueryObjectNFTResponse> {
    const data = QueryNFTRequest.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.storage.Query", "HeadObjectNFT", data);
    return promise.then(data => QueryObjectNFTResponse.decode(new _m0.Reader(data)));
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

  ListObjectsByBucketId(request: QueryListObjectsByBucketIdRequest): Promise<QueryListObjectsResponse> {
    const data = QueryListObjectsByBucketIdRequest.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.storage.Query", "ListObjectsByBucketId", data);
    return promise.then(data => QueryListObjectsResponse.decode(new _m0.Reader(data)));
  }

  HeadGroupNFT(request: QueryNFTRequest): Promise<QueryGroupNFTResponse> {
    const data = QueryNFTRequest.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.storage.Query", "HeadGroupNFT", data);
    return promise.then(data => QueryGroupNFTResponse.decode(new _m0.Reader(data)));
  }

  GetPolicy(request: QueryGetPolicyRequest): Promise<QueryGetPolicyResponse> {
    const data = QueryGetPolicyRequest.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.storage.Query", "GetPolicy", data);
    return promise.then(data => QueryGetPolicyResponse.decode(new _m0.Reader(data)));
  }

  VerifyPermission(request: QueryVerifyPermissionRequest): Promise<QueryVerifyPermissionResponse> {
    const data = QueryVerifyPermissionRequest.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.storage.Query", "VerifyPermission", data);
    return promise.then(data => QueryVerifyPermissionResponse.decode(new _m0.Reader(data)));
  }

}