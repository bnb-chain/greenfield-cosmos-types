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
  bucket_name: string;
}
export interface QueryHeadBucketByIdRequest {
  bucket_id: string;
}
export interface QueryHeadBucketResponse {
  bucket_info?: BucketInfo;
}
export interface QueryHeadObjectRequest {
  bucket_name: string;
  object_name: string;
}
export interface QueryHeadObjectByIdRequest {
  object_id: string;
}
export interface QueryHeadObjectResponse {
  object_info?: ObjectInfo;
}
export interface QueryListBucketsRequest {
  pagination?: PageRequest;
}
export interface QueryListBucketsResponse {
  bucket_infos: BucketInfo[];
  pagination?: PageResponse;
}
export interface QueryListObjectsRequest {
  pagination?: PageRequest;
  bucket_name: string;
}
export interface QueryListObjectsByBucketIdRequest {
  pagination?: PageRequest;
  bucket_id: string;
}
export interface QueryListObjectsResponse {
  object_infos: ObjectInfo[];
  pagination?: PageResponse;
}
export interface QueryNFTRequest {
  token_id: string;
}
export interface QueryBucketNFTResponse {
  meta_data?: BucketMetaData;
}
export interface QueryObjectNFTResponse {
  meta_data?: ObjectMetaData;
}
export interface QueryGroupNFTResponse {
  meta_data?: GroupMetaData;
}
export interface QueryGetPolicyRequest {
  policy_id: string;
}
export interface QueryGetPolicyResponse {
  policy?: Policy;
}
export interface QueryVerifyPermissionRequest {
  operator: string;
  bucket_name: string;
  object_name: string;
  action_type: ActionType;
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
    bucket_name: ""
  };
}

export const QueryHeadBucketRequest = {
  encode(message: QueryHeadBucketRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bucket_name !== "") {
      writer.uint32(10).string(message.bucket_name);
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
          message.bucket_name = reader.string();
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
      bucket_name: isSet(object.bucket_name) ? String(object.bucket_name) : ""
    };
  },

  toJSON(message: QueryHeadBucketRequest): unknown {
    const obj: any = {};
    message.bucket_name !== undefined && (obj.bucket_name = message.bucket_name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryHeadBucketRequest>, I>>(object: I): QueryHeadBucketRequest {
    const message = createBaseQueryHeadBucketRequest();
    message.bucket_name = object.bucket_name ?? "";
    return message;
  }

};

function createBaseQueryHeadBucketByIdRequest(): QueryHeadBucketByIdRequest {
  return {
    bucket_id: ""
  };
}

export const QueryHeadBucketByIdRequest = {
  encode(message: QueryHeadBucketByIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bucket_id !== "") {
      writer.uint32(10).string(message.bucket_id);
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
          message.bucket_id = reader.string();
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
      bucket_id: isSet(object.bucket_id) ? String(object.bucket_id) : ""
    };
  },

  toJSON(message: QueryHeadBucketByIdRequest): unknown {
    const obj: any = {};
    message.bucket_id !== undefined && (obj.bucket_id = message.bucket_id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryHeadBucketByIdRequest>, I>>(object: I): QueryHeadBucketByIdRequest {
    const message = createBaseQueryHeadBucketByIdRequest();
    message.bucket_id = object.bucket_id ?? "";
    return message;
  }

};

function createBaseQueryHeadBucketResponse(): QueryHeadBucketResponse {
  return {
    bucket_info: undefined
  };
}

export const QueryHeadBucketResponse = {
  encode(message: QueryHeadBucketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bucket_info !== undefined) {
      BucketInfo.encode(message.bucket_info, writer.uint32(10).fork()).ldelim();
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
          message.bucket_info = BucketInfo.decode(reader, reader.uint32());
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
      bucket_info: isSet(object.bucket_info) ? BucketInfo.fromJSON(object.bucket_info) : undefined
    };
  },

  toJSON(message: QueryHeadBucketResponse): unknown {
    const obj: any = {};
    message.bucket_info !== undefined && (obj.bucket_info = message.bucket_info ? BucketInfo.toJSON(message.bucket_info) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryHeadBucketResponse>, I>>(object: I): QueryHeadBucketResponse {
    const message = createBaseQueryHeadBucketResponse();
    message.bucket_info = object.bucket_info !== undefined && object.bucket_info !== null ? BucketInfo.fromPartial(object.bucket_info) : undefined;
    return message;
  }

};

function createBaseQueryHeadObjectRequest(): QueryHeadObjectRequest {
  return {
    bucket_name: "",
    object_name: ""
  };
}

export const QueryHeadObjectRequest = {
  encode(message: QueryHeadObjectRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bucket_name !== "") {
      writer.uint32(10).string(message.bucket_name);
    }

    if (message.object_name !== "") {
      writer.uint32(18).string(message.object_name);
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
          message.bucket_name = reader.string();
          break;

        case 2:
          message.object_name = reader.string();
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
      bucket_name: isSet(object.bucket_name) ? String(object.bucket_name) : "",
      object_name: isSet(object.object_name) ? String(object.object_name) : ""
    };
  },

  toJSON(message: QueryHeadObjectRequest): unknown {
    const obj: any = {};
    message.bucket_name !== undefined && (obj.bucket_name = message.bucket_name);
    message.object_name !== undefined && (obj.object_name = message.object_name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryHeadObjectRequest>, I>>(object: I): QueryHeadObjectRequest {
    const message = createBaseQueryHeadObjectRequest();
    message.bucket_name = object.bucket_name ?? "";
    message.object_name = object.object_name ?? "";
    return message;
  }

};

function createBaseQueryHeadObjectByIdRequest(): QueryHeadObjectByIdRequest {
  return {
    object_id: ""
  };
}

export const QueryHeadObjectByIdRequest = {
  encode(message: QueryHeadObjectByIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.object_id !== "") {
      writer.uint32(10).string(message.object_id);
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
          message.object_id = reader.string();
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
      object_id: isSet(object.object_id) ? String(object.object_id) : ""
    };
  },

  toJSON(message: QueryHeadObjectByIdRequest): unknown {
    const obj: any = {};
    message.object_id !== undefined && (obj.object_id = message.object_id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryHeadObjectByIdRequest>, I>>(object: I): QueryHeadObjectByIdRequest {
    const message = createBaseQueryHeadObjectByIdRequest();
    message.object_id = object.object_id ?? "";
    return message;
  }

};

function createBaseQueryHeadObjectResponse(): QueryHeadObjectResponse {
  return {
    object_info: undefined
  };
}

export const QueryHeadObjectResponse = {
  encode(message: QueryHeadObjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.object_info !== undefined) {
      ObjectInfo.encode(message.object_info, writer.uint32(10).fork()).ldelim();
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
          message.object_info = ObjectInfo.decode(reader, reader.uint32());
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
      object_info: isSet(object.object_info) ? ObjectInfo.fromJSON(object.object_info) : undefined
    };
  },

  toJSON(message: QueryHeadObjectResponse): unknown {
    const obj: any = {};
    message.object_info !== undefined && (obj.object_info = message.object_info ? ObjectInfo.toJSON(message.object_info) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryHeadObjectResponse>, I>>(object: I): QueryHeadObjectResponse {
    const message = createBaseQueryHeadObjectResponse();
    message.object_info = object.object_info !== undefined && object.object_info !== null ? ObjectInfo.fromPartial(object.object_info) : undefined;
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
    bucket_infos: [],
    pagination: undefined
  };
}

export const QueryListBucketsResponse = {
  encode(message: QueryListBucketsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.bucket_infos) {
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
          message.bucket_infos.push(BucketInfo.decode(reader, reader.uint32()));
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
      bucket_infos: Array.isArray(object?.bucket_infos) ? object.bucket_infos.map((e: any) => BucketInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryListBucketsResponse): unknown {
    const obj: any = {};

    if (message.bucket_infos) {
      obj.bucket_infos = message.bucket_infos.map(e => e ? BucketInfo.toJSON(e) : undefined);
    } else {
      obj.bucket_infos = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryListBucketsResponse>, I>>(object: I): QueryListBucketsResponse {
    const message = createBaseQueryListBucketsResponse();
    message.bucket_infos = object.bucket_infos?.map(e => BucketInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryListObjectsRequest(): QueryListObjectsRequest {
  return {
    pagination: undefined,
    bucket_name: ""
  };
}

export const QueryListObjectsRequest = {
  encode(message: QueryListObjectsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    if (message.bucket_name !== "") {
      writer.uint32(18).string(message.bucket_name);
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
          message.bucket_name = reader.string();
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
      bucket_name: isSet(object.bucket_name) ? String(object.bucket_name) : ""
    };
  },

  toJSON(message: QueryListObjectsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.bucket_name !== undefined && (obj.bucket_name = message.bucket_name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryListObjectsRequest>, I>>(object: I): QueryListObjectsRequest {
    const message = createBaseQueryListObjectsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.bucket_name = object.bucket_name ?? "";
    return message;
  }

};

function createBaseQueryListObjectsByBucketIdRequest(): QueryListObjectsByBucketIdRequest {
  return {
    pagination: undefined,
    bucket_id: ""
  };
}

export const QueryListObjectsByBucketIdRequest = {
  encode(message: QueryListObjectsByBucketIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    if (message.bucket_id !== "") {
      writer.uint32(18).string(message.bucket_id);
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
          message.bucket_id = reader.string();
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
      bucket_id: isSet(object.bucket_id) ? String(object.bucket_id) : ""
    };
  },

  toJSON(message: QueryListObjectsByBucketIdRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.bucket_id !== undefined && (obj.bucket_id = message.bucket_id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryListObjectsByBucketIdRequest>, I>>(object: I): QueryListObjectsByBucketIdRequest {
    const message = createBaseQueryListObjectsByBucketIdRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.bucket_id = object.bucket_id ?? "";
    return message;
  }

};

function createBaseQueryListObjectsResponse(): QueryListObjectsResponse {
  return {
    object_infos: [],
    pagination: undefined
  };
}

export const QueryListObjectsResponse = {
  encode(message: QueryListObjectsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.object_infos) {
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
          message.object_infos.push(ObjectInfo.decode(reader, reader.uint32()));
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
      object_infos: Array.isArray(object?.object_infos) ? object.object_infos.map((e: any) => ObjectInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryListObjectsResponse): unknown {
    const obj: any = {};

    if (message.object_infos) {
      obj.object_infos = message.object_infos.map(e => e ? ObjectInfo.toJSON(e) : undefined);
    } else {
      obj.object_infos = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryListObjectsResponse>, I>>(object: I): QueryListObjectsResponse {
    const message = createBaseQueryListObjectsResponse();
    message.object_infos = object.object_infos?.map(e => ObjectInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryNFTRequest(): QueryNFTRequest {
  return {
    token_id: ""
  };
}

export const QueryNFTRequest = {
  encode(message: QueryNFTRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token_id !== "") {
      writer.uint32(10).string(message.token_id);
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
          message.token_id = reader.string();
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
      token_id: isSet(object.token_id) ? String(object.token_id) : ""
    };
  },

  toJSON(message: QueryNFTRequest): unknown {
    const obj: any = {};
    message.token_id !== undefined && (obj.token_id = message.token_id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryNFTRequest>, I>>(object: I): QueryNFTRequest {
    const message = createBaseQueryNFTRequest();
    message.token_id = object.token_id ?? "";
    return message;
  }

};

function createBaseQueryBucketNFTResponse(): QueryBucketNFTResponse {
  return {
    meta_data: undefined
  };
}

export const QueryBucketNFTResponse = {
  encode(message: QueryBucketNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.meta_data !== undefined) {
      BucketMetaData.encode(message.meta_data, writer.uint32(10).fork()).ldelim();
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
          message.meta_data = BucketMetaData.decode(reader, reader.uint32());
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
      meta_data: isSet(object.meta_data) ? BucketMetaData.fromJSON(object.meta_data) : undefined
    };
  },

  toJSON(message: QueryBucketNFTResponse): unknown {
    const obj: any = {};
    message.meta_data !== undefined && (obj.meta_data = message.meta_data ? BucketMetaData.toJSON(message.meta_data) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBucketNFTResponse>, I>>(object: I): QueryBucketNFTResponse {
    const message = createBaseQueryBucketNFTResponse();
    message.meta_data = object.meta_data !== undefined && object.meta_data !== null ? BucketMetaData.fromPartial(object.meta_data) : undefined;
    return message;
  }

};

function createBaseQueryObjectNFTResponse(): QueryObjectNFTResponse {
  return {
    meta_data: undefined
  };
}

export const QueryObjectNFTResponse = {
  encode(message: QueryObjectNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.meta_data !== undefined) {
      ObjectMetaData.encode(message.meta_data, writer.uint32(10).fork()).ldelim();
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
          message.meta_data = ObjectMetaData.decode(reader, reader.uint32());
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
      meta_data: isSet(object.meta_data) ? ObjectMetaData.fromJSON(object.meta_data) : undefined
    };
  },

  toJSON(message: QueryObjectNFTResponse): unknown {
    const obj: any = {};
    message.meta_data !== undefined && (obj.meta_data = message.meta_data ? ObjectMetaData.toJSON(message.meta_data) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryObjectNFTResponse>, I>>(object: I): QueryObjectNFTResponse {
    const message = createBaseQueryObjectNFTResponse();
    message.meta_data = object.meta_data !== undefined && object.meta_data !== null ? ObjectMetaData.fromPartial(object.meta_data) : undefined;
    return message;
  }

};

function createBaseQueryGroupNFTResponse(): QueryGroupNFTResponse {
  return {
    meta_data: undefined
  };
}

export const QueryGroupNFTResponse = {
  encode(message: QueryGroupNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.meta_data !== undefined) {
      GroupMetaData.encode(message.meta_data, writer.uint32(10).fork()).ldelim();
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
          message.meta_data = GroupMetaData.decode(reader, reader.uint32());
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
      meta_data: isSet(object.meta_data) ? GroupMetaData.fromJSON(object.meta_data) : undefined
    };
  },

  toJSON(message: QueryGroupNFTResponse): unknown {
    const obj: any = {};
    message.meta_data !== undefined && (obj.meta_data = message.meta_data ? GroupMetaData.toJSON(message.meta_data) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGroupNFTResponse>, I>>(object: I): QueryGroupNFTResponse {
    const message = createBaseQueryGroupNFTResponse();
    message.meta_data = object.meta_data !== undefined && object.meta_data !== null ? GroupMetaData.fromPartial(object.meta_data) : undefined;
    return message;
  }

};

function createBaseQueryGetPolicyRequest(): QueryGetPolicyRequest {
  return {
    policy_id: ""
  };
}

export const QueryGetPolicyRequest = {
  encode(message: QueryGetPolicyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.policy_id !== "") {
      writer.uint32(10).string(message.policy_id);
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
          message.policy_id = reader.string();
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
      policy_id: isSet(object.policy_id) ? String(object.policy_id) : ""
    };
  },

  toJSON(message: QueryGetPolicyRequest): unknown {
    const obj: any = {};
    message.policy_id !== undefined && (obj.policy_id = message.policy_id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPolicyRequest>, I>>(object: I): QueryGetPolicyRequest {
    const message = createBaseQueryGetPolicyRequest();
    message.policy_id = object.policy_id ?? "";
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
    bucket_name: "",
    object_name: "",
    action_type: 0
  };
}

export const QueryVerifyPermissionRequest = {
  encode(message: QueryVerifyPermissionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }

    if (message.bucket_name !== "") {
      writer.uint32(18).string(message.bucket_name);
    }

    if (message.object_name !== "") {
      writer.uint32(26).string(message.object_name);
    }

    if (message.action_type !== 0) {
      writer.uint32(32).int32(message.action_type);
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
          message.bucket_name = reader.string();
          break;

        case 3:
          message.object_name = reader.string();
          break;

        case 4:
          message.action_type = (reader.int32() as any);
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
      bucket_name: isSet(object.bucket_name) ? String(object.bucket_name) : "",
      object_name: isSet(object.object_name) ? String(object.object_name) : "",
      action_type: isSet(object.action_type) ? actionTypeFromJSON(object.action_type) : 0
    };
  },

  toJSON(message: QueryVerifyPermissionRequest): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucket_name !== undefined && (obj.bucket_name = message.bucket_name);
    message.object_name !== undefined && (obj.object_name = message.object_name);
    message.action_type !== undefined && (obj.action_type = actionTypeToJSON(message.action_type));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryVerifyPermissionRequest>, I>>(object: I): QueryVerifyPermissionRequest {
    const message = createBaseQueryVerifyPermissionRequest();
    message.operator = object.operator ?? "";
    message.bucket_name = object.bucket_name ?? "";
    message.object_name = object.object_name ?? "";
    message.action_type = object.action_type ?? 0;
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