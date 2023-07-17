/* eslint-disable */
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { GlobalVirtualGroup, GlobalVirtualGroupSDKType, GlobalVirtualGroupFamily, GlobalVirtualGroupFamilySDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Exact, isSet, Rpc } from "../../helpers";
export const protobufPackage = "greenfield.virtualgroup";
/** QueryParamsRequest is request type for the Query/Params RPC method. */

export interface QueryParamsRequest {}
/** QueryParamsRequest is request type for the Query/Params RPC method. */

export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */

export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */

export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
export interface QueryGlobalVirtualGroupRequest {
  globalVirtualGroupId: number;
}
export interface QueryGlobalVirtualGroupRequestSDKType {
  global_virtual_group_id: number;
}
export interface QueryGlobalVirtualGroupResponse {
  globalVirtualGroup?: GlobalVirtualGroup;
}
export interface QueryGlobalVirtualGroupResponseSDKType {
  global_virtual_group?: GlobalVirtualGroupSDKType;
}
export interface QueryGlobalVirtualGroupByFamilyIDRequest {
  storageProviderId: number;
  globalVirtualGroupFamilyId: number;
}
export interface QueryGlobalVirtualGroupByFamilyIDRequestSDKType {
  storage_provider_id: number;
  global_virtual_group_family_id: number;
}
export interface QueryGlobalVirtualGroupByFamilyIDResponse {
  globalVirtualGroups: GlobalVirtualGroup[];
}
export interface QueryGlobalVirtualGroupByFamilyIDResponseSDKType {
  global_virtual_groups: GlobalVirtualGroupSDKType[];
}
export interface QueryGlobalVirtualGroupFamiliesRequest {
  storageProviderId: number;
  pagination?: PageRequest;
}
export interface QueryGlobalVirtualGroupFamiliesRequestSDKType {
  storage_provider_id: number;
  pagination?: PageRequestSDKType;
}
export interface QueryGlobalVirtualGroupFamiliesResponse {
  globalVirtualGroupFamilies: GlobalVirtualGroupFamily[];
  pagination?: PageResponse;
}
export interface QueryGlobalVirtualGroupFamiliesResponseSDKType {
  global_virtual_group_families: GlobalVirtualGroupFamilySDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGlobalVirtualGroupFamilyRequest {
  storageProviderId: number;
  familyId: number;
}
export interface QueryGlobalVirtualGroupFamilyRequestSDKType {
  storage_provider_id: number;
  family_id: number;
}
export interface QueryGlobalVirtualGroupFamilyResponse {
  globalVirtualGroupFamily?: GlobalVirtualGroupFamily;
}
export interface QueryGlobalVirtualGroupFamilyResponseSDKType {
  global_virtual_group_family?: GlobalVirtualGroupFamilySDKType;
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

function createBaseQueryGlobalVirtualGroupRequest(): QueryGlobalVirtualGroupRequest {
  return {
    globalVirtualGroupId: 0
  };
}

export const QueryGlobalVirtualGroupRequest = {
  encode(message: QueryGlobalVirtualGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.globalVirtualGroupId !== 0) {
      writer.uint32(8).uint32(message.globalVirtualGroupId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGlobalVirtualGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGlobalVirtualGroupRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.globalVirtualGroupId = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGlobalVirtualGroupRequest {
    return {
      globalVirtualGroupId: isSet(object.globalVirtualGroupId) ? Number(object.globalVirtualGroupId) : 0
    };
  },

  toJSON(message: QueryGlobalVirtualGroupRequest): unknown {
    const obj: any = {};
    message.globalVirtualGroupId !== undefined && (obj.globalVirtualGroupId = Math.round(message.globalVirtualGroupId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGlobalVirtualGroupRequest>, I>>(object: I): QueryGlobalVirtualGroupRequest {
    const message = createBaseQueryGlobalVirtualGroupRequest();
    message.globalVirtualGroupId = object.globalVirtualGroupId ?? 0;
    return message;
  },

  fromSDK(object: QueryGlobalVirtualGroupRequestSDKType): QueryGlobalVirtualGroupRequest {
    return {
      globalVirtualGroupId: object?.global_virtual_group_id
    };
  },

  toSDK(message: QueryGlobalVirtualGroupRequest): QueryGlobalVirtualGroupRequestSDKType {
    const obj: any = {};
    obj.global_virtual_group_id = message.globalVirtualGroupId;
    return obj;
  }

};

function createBaseQueryGlobalVirtualGroupResponse(): QueryGlobalVirtualGroupResponse {
  return {
    globalVirtualGroup: undefined
  };
}

export const QueryGlobalVirtualGroupResponse = {
  encode(message: QueryGlobalVirtualGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.globalVirtualGroup !== undefined) {
      GlobalVirtualGroup.encode(message.globalVirtualGroup, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGlobalVirtualGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGlobalVirtualGroupResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.globalVirtualGroup = GlobalVirtualGroup.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGlobalVirtualGroupResponse {
    return {
      globalVirtualGroup: isSet(object.globalVirtualGroup) ? GlobalVirtualGroup.fromJSON(object.globalVirtualGroup) : undefined
    };
  },

  toJSON(message: QueryGlobalVirtualGroupResponse): unknown {
    const obj: any = {};
    message.globalVirtualGroup !== undefined && (obj.globalVirtualGroup = message.globalVirtualGroup ? GlobalVirtualGroup.toJSON(message.globalVirtualGroup) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGlobalVirtualGroupResponse>, I>>(object: I): QueryGlobalVirtualGroupResponse {
    const message = createBaseQueryGlobalVirtualGroupResponse();
    message.globalVirtualGroup = object.globalVirtualGroup !== undefined && object.globalVirtualGroup !== null ? GlobalVirtualGroup.fromPartial(object.globalVirtualGroup) : undefined;
    return message;
  },

  fromSDK(object: QueryGlobalVirtualGroupResponseSDKType): QueryGlobalVirtualGroupResponse {
    return {
      globalVirtualGroup: object.global_virtual_group ? GlobalVirtualGroup.fromSDK(object.global_virtual_group) : undefined
    };
  },

  toSDK(message: QueryGlobalVirtualGroupResponse): QueryGlobalVirtualGroupResponseSDKType {
    const obj: any = {};
    message.globalVirtualGroup !== undefined && (obj.global_virtual_group = message.globalVirtualGroup ? GlobalVirtualGroup.toSDK(message.globalVirtualGroup) : undefined);
    return obj;
  }

};

function createBaseQueryGlobalVirtualGroupByFamilyIDRequest(): QueryGlobalVirtualGroupByFamilyIDRequest {
  return {
    storageProviderId: 0,
    globalVirtualGroupFamilyId: 0
  };
}

export const QueryGlobalVirtualGroupByFamilyIDRequest = {
  encode(message: QueryGlobalVirtualGroupByFamilyIDRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storageProviderId !== 0) {
      writer.uint32(8).uint32(message.storageProviderId);
    }

    if (message.globalVirtualGroupFamilyId !== 0) {
      writer.uint32(16).uint32(message.globalVirtualGroupFamilyId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGlobalVirtualGroupByFamilyIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGlobalVirtualGroupByFamilyIDRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.storageProviderId = reader.uint32();
          break;

        case 2:
          message.globalVirtualGroupFamilyId = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGlobalVirtualGroupByFamilyIDRequest {
    return {
      storageProviderId: isSet(object.storageProviderId) ? Number(object.storageProviderId) : 0,
      globalVirtualGroupFamilyId: isSet(object.globalVirtualGroupFamilyId) ? Number(object.globalVirtualGroupFamilyId) : 0
    };
  },

  toJSON(message: QueryGlobalVirtualGroupByFamilyIDRequest): unknown {
    const obj: any = {};
    message.storageProviderId !== undefined && (obj.storageProviderId = Math.round(message.storageProviderId));
    message.globalVirtualGroupFamilyId !== undefined && (obj.globalVirtualGroupFamilyId = Math.round(message.globalVirtualGroupFamilyId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGlobalVirtualGroupByFamilyIDRequest>, I>>(object: I): QueryGlobalVirtualGroupByFamilyIDRequest {
    const message = createBaseQueryGlobalVirtualGroupByFamilyIDRequest();
    message.storageProviderId = object.storageProviderId ?? 0;
    message.globalVirtualGroupFamilyId = object.globalVirtualGroupFamilyId ?? 0;
    return message;
  },

  fromSDK(object: QueryGlobalVirtualGroupByFamilyIDRequestSDKType): QueryGlobalVirtualGroupByFamilyIDRequest {
    return {
      storageProviderId: object?.storage_provider_id,
      globalVirtualGroupFamilyId: object?.global_virtual_group_family_id
    };
  },

  toSDK(message: QueryGlobalVirtualGroupByFamilyIDRequest): QueryGlobalVirtualGroupByFamilyIDRequestSDKType {
    const obj: any = {};
    obj.storage_provider_id = message.storageProviderId;
    obj.global_virtual_group_family_id = message.globalVirtualGroupFamilyId;
    return obj;
  }

};

function createBaseQueryGlobalVirtualGroupByFamilyIDResponse(): QueryGlobalVirtualGroupByFamilyIDResponse {
  return {
    globalVirtualGroups: []
  };
}

export const QueryGlobalVirtualGroupByFamilyIDResponse = {
  encode(message: QueryGlobalVirtualGroupByFamilyIDResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.globalVirtualGroups) {
      GlobalVirtualGroup.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGlobalVirtualGroupByFamilyIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGlobalVirtualGroupByFamilyIDResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.globalVirtualGroups.push(GlobalVirtualGroup.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGlobalVirtualGroupByFamilyIDResponse {
    return {
      globalVirtualGroups: Array.isArray(object?.globalVirtualGroups) ? object.globalVirtualGroups.map((e: any) => GlobalVirtualGroup.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryGlobalVirtualGroupByFamilyIDResponse): unknown {
    const obj: any = {};

    if (message.globalVirtualGroups) {
      obj.globalVirtualGroups = message.globalVirtualGroups.map(e => e ? GlobalVirtualGroup.toJSON(e) : undefined);
    } else {
      obj.globalVirtualGroups = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGlobalVirtualGroupByFamilyIDResponse>, I>>(object: I): QueryGlobalVirtualGroupByFamilyIDResponse {
    const message = createBaseQueryGlobalVirtualGroupByFamilyIDResponse();
    message.globalVirtualGroups = object.globalVirtualGroups?.map(e => GlobalVirtualGroup.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: QueryGlobalVirtualGroupByFamilyIDResponseSDKType): QueryGlobalVirtualGroupByFamilyIDResponse {
    return {
      globalVirtualGroups: Array.isArray(object?.global_virtual_groups) ? object.global_virtual_groups.map((e: any) => GlobalVirtualGroup.fromSDK(e)) : []
    };
  },

  toSDK(message: QueryGlobalVirtualGroupByFamilyIDResponse): QueryGlobalVirtualGroupByFamilyIDResponseSDKType {
    const obj: any = {};

    if (message.globalVirtualGroups) {
      obj.global_virtual_groups = message.globalVirtualGroups.map(e => e ? GlobalVirtualGroup.toSDK(e) : undefined);
    } else {
      obj.global_virtual_groups = [];
    }

    return obj;
  }

};

function createBaseQueryGlobalVirtualGroupFamiliesRequest(): QueryGlobalVirtualGroupFamiliesRequest {
  return {
    storageProviderId: 0,
    pagination: undefined
  };
}

export const QueryGlobalVirtualGroupFamiliesRequest = {
  encode(message: QueryGlobalVirtualGroupFamiliesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storageProviderId !== 0) {
      writer.uint32(8).uint32(message.storageProviderId);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGlobalVirtualGroupFamiliesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGlobalVirtualGroupFamiliesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.storageProviderId = reader.uint32();
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGlobalVirtualGroupFamiliesRequest {
    return {
      storageProviderId: isSet(object.storageProviderId) ? Number(object.storageProviderId) : 0,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryGlobalVirtualGroupFamiliesRequest): unknown {
    const obj: any = {};
    message.storageProviderId !== undefined && (obj.storageProviderId = Math.round(message.storageProviderId));
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGlobalVirtualGroupFamiliesRequest>, I>>(object: I): QueryGlobalVirtualGroupFamiliesRequest {
    const message = createBaseQueryGlobalVirtualGroupFamiliesRequest();
    message.storageProviderId = object.storageProviderId ?? 0;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: QueryGlobalVirtualGroupFamiliesRequestSDKType): QueryGlobalVirtualGroupFamiliesRequest {
    return {
      storageProviderId: object?.storage_provider_id,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: QueryGlobalVirtualGroupFamiliesRequest): QueryGlobalVirtualGroupFamiliesRequestSDKType {
    const obj: any = {};
    obj.storage_provider_id = message.storageProviderId;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  }

};

function createBaseQueryGlobalVirtualGroupFamiliesResponse(): QueryGlobalVirtualGroupFamiliesResponse {
  return {
    globalVirtualGroupFamilies: [],
    pagination: undefined
  };
}

export const QueryGlobalVirtualGroupFamiliesResponse = {
  encode(message: QueryGlobalVirtualGroupFamiliesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.globalVirtualGroupFamilies) {
      GlobalVirtualGroupFamily.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGlobalVirtualGroupFamiliesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGlobalVirtualGroupFamiliesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.globalVirtualGroupFamilies.push(GlobalVirtualGroupFamily.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryGlobalVirtualGroupFamiliesResponse {
    return {
      globalVirtualGroupFamilies: Array.isArray(object?.globalVirtualGroupFamilies) ? object.globalVirtualGroupFamilies.map((e: any) => GlobalVirtualGroupFamily.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryGlobalVirtualGroupFamiliesResponse): unknown {
    const obj: any = {};

    if (message.globalVirtualGroupFamilies) {
      obj.globalVirtualGroupFamilies = message.globalVirtualGroupFamilies.map(e => e ? GlobalVirtualGroupFamily.toJSON(e) : undefined);
    } else {
      obj.globalVirtualGroupFamilies = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGlobalVirtualGroupFamiliesResponse>, I>>(object: I): QueryGlobalVirtualGroupFamiliesResponse {
    const message = createBaseQueryGlobalVirtualGroupFamiliesResponse();
    message.globalVirtualGroupFamilies = object.globalVirtualGroupFamilies?.map(e => GlobalVirtualGroupFamily.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: QueryGlobalVirtualGroupFamiliesResponseSDKType): QueryGlobalVirtualGroupFamiliesResponse {
    return {
      globalVirtualGroupFamilies: Array.isArray(object?.global_virtual_group_families) ? object.global_virtual_group_families.map((e: any) => GlobalVirtualGroupFamily.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: QueryGlobalVirtualGroupFamiliesResponse): QueryGlobalVirtualGroupFamiliesResponseSDKType {
    const obj: any = {};

    if (message.globalVirtualGroupFamilies) {
      obj.global_virtual_group_families = message.globalVirtualGroupFamilies.map(e => e ? GlobalVirtualGroupFamily.toSDK(e) : undefined);
    } else {
      obj.global_virtual_group_families = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  }

};

function createBaseQueryGlobalVirtualGroupFamilyRequest(): QueryGlobalVirtualGroupFamilyRequest {
  return {
    storageProviderId: 0,
    familyId: 0
  };
}

export const QueryGlobalVirtualGroupFamilyRequest = {
  encode(message: QueryGlobalVirtualGroupFamilyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storageProviderId !== 0) {
      writer.uint32(8).uint32(message.storageProviderId);
    }

    if (message.familyId !== 0) {
      writer.uint32(16).uint32(message.familyId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGlobalVirtualGroupFamilyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGlobalVirtualGroupFamilyRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.storageProviderId = reader.uint32();
          break;

        case 2:
          message.familyId = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGlobalVirtualGroupFamilyRequest {
    return {
      storageProviderId: isSet(object.storageProviderId) ? Number(object.storageProviderId) : 0,
      familyId: isSet(object.familyId) ? Number(object.familyId) : 0
    };
  },

  toJSON(message: QueryGlobalVirtualGroupFamilyRequest): unknown {
    const obj: any = {};
    message.storageProviderId !== undefined && (obj.storageProviderId = Math.round(message.storageProviderId));
    message.familyId !== undefined && (obj.familyId = Math.round(message.familyId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGlobalVirtualGroupFamilyRequest>, I>>(object: I): QueryGlobalVirtualGroupFamilyRequest {
    const message = createBaseQueryGlobalVirtualGroupFamilyRequest();
    message.storageProviderId = object.storageProviderId ?? 0;
    message.familyId = object.familyId ?? 0;
    return message;
  },

  fromSDK(object: QueryGlobalVirtualGroupFamilyRequestSDKType): QueryGlobalVirtualGroupFamilyRequest {
    return {
      storageProviderId: object?.storage_provider_id,
      familyId: object?.family_id
    };
  },

  toSDK(message: QueryGlobalVirtualGroupFamilyRequest): QueryGlobalVirtualGroupFamilyRequestSDKType {
    const obj: any = {};
    obj.storage_provider_id = message.storageProviderId;
    obj.family_id = message.familyId;
    return obj;
  }

};

function createBaseQueryGlobalVirtualGroupFamilyResponse(): QueryGlobalVirtualGroupFamilyResponse {
  return {
    globalVirtualGroupFamily: undefined
  };
}

export const QueryGlobalVirtualGroupFamilyResponse = {
  encode(message: QueryGlobalVirtualGroupFamilyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.globalVirtualGroupFamily !== undefined) {
      GlobalVirtualGroupFamily.encode(message.globalVirtualGroupFamily, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGlobalVirtualGroupFamilyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGlobalVirtualGroupFamilyResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.globalVirtualGroupFamily = GlobalVirtualGroupFamily.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGlobalVirtualGroupFamilyResponse {
    return {
      globalVirtualGroupFamily: isSet(object.globalVirtualGroupFamily) ? GlobalVirtualGroupFamily.fromJSON(object.globalVirtualGroupFamily) : undefined
    };
  },

  toJSON(message: QueryGlobalVirtualGroupFamilyResponse): unknown {
    const obj: any = {};
    message.globalVirtualGroupFamily !== undefined && (obj.globalVirtualGroupFamily = message.globalVirtualGroupFamily ? GlobalVirtualGroupFamily.toJSON(message.globalVirtualGroupFamily) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGlobalVirtualGroupFamilyResponse>, I>>(object: I): QueryGlobalVirtualGroupFamilyResponse {
    const message = createBaseQueryGlobalVirtualGroupFamilyResponse();
    message.globalVirtualGroupFamily = object.globalVirtualGroupFamily !== undefined && object.globalVirtualGroupFamily !== null ? GlobalVirtualGroupFamily.fromPartial(object.globalVirtualGroupFamily) : undefined;
    return message;
  },

  fromSDK(object: QueryGlobalVirtualGroupFamilyResponseSDKType): QueryGlobalVirtualGroupFamilyResponse {
    return {
      globalVirtualGroupFamily: object.global_virtual_group_family ? GlobalVirtualGroupFamily.fromSDK(object.global_virtual_group_family) : undefined
    };
  },

  toSDK(message: QueryGlobalVirtualGroupFamilyResponse): QueryGlobalVirtualGroupFamilyResponseSDKType {
    const obj: any = {};
    message.globalVirtualGroupFamily !== undefined && (obj.global_virtual_group_family = message.globalVirtualGroupFamily ? GlobalVirtualGroupFamily.toSDK(message.globalVirtualGroupFamily) : undefined);
    return obj;
  }

};
/** Query defines the gRPC query service. */

export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a global virtual group by its id. */

  GlobalVirtualGroup(request: QueryGlobalVirtualGroupRequest): Promise<QueryGlobalVirtualGroupResponse>;
  /** Queries a list of global virtual groups by family id. */

  GlobalVirtualGroupByFamilyID(request: QueryGlobalVirtualGroupByFamilyIDRequest): Promise<QueryGlobalVirtualGroupByFamilyIDResponse>;
  /** Queries a list of global virtual group families by storage provider id. */

  GlobalVirtualGroupFamilies(request: QueryGlobalVirtualGroupFamiliesRequest): Promise<QueryGlobalVirtualGroupFamiliesResponse>;
  /** Queries a global virtual group family by its id. */

  GlobalVirtualGroupFamily(request: QueryGlobalVirtualGroupFamilyRequest): Promise<QueryGlobalVirtualGroupFamilyResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.GlobalVirtualGroup = this.GlobalVirtualGroup.bind(this);
    this.GlobalVirtualGroupByFamilyID = this.GlobalVirtualGroupByFamilyID.bind(this);
    this.GlobalVirtualGroupFamilies = this.GlobalVirtualGroupFamilies.bind(this);
    this.GlobalVirtualGroupFamily = this.GlobalVirtualGroupFamily.bind(this);
  }

  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.virtualgroup.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  GlobalVirtualGroup(request: QueryGlobalVirtualGroupRequest): Promise<QueryGlobalVirtualGroupResponse> {
    const data = QueryGlobalVirtualGroupRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.virtualgroup.Query", "GlobalVirtualGroup", data);
    return promise.then(data => QueryGlobalVirtualGroupResponse.decode(new _m0.Reader(data)));
  }

  GlobalVirtualGroupByFamilyID(request: QueryGlobalVirtualGroupByFamilyIDRequest): Promise<QueryGlobalVirtualGroupByFamilyIDResponse> {
    const data = QueryGlobalVirtualGroupByFamilyIDRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.virtualgroup.Query", "GlobalVirtualGroupByFamilyID", data);
    return promise.then(data => QueryGlobalVirtualGroupByFamilyIDResponse.decode(new _m0.Reader(data)));
  }

  GlobalVirtualGroupFamilies(request: QueryGlobalVirtualGroupFamiliesRequest): Promise<QueryGlobalVirtualGroupFamiliesResponse> {
    const data = QueryGlobalVirtualGroupFamiliesRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.virtualgroup.Query", "GlobalVirtualGroupFamilies", data);
    return promise.then(data => QueryGlobalVirtualGroupFamiliesResponse.decode(new _m0.Reader(data)));
  }

  GlobalVirtualGroupFamily(request: QueryGlobalVirtualGroupFamilyRequest): Promise<QueryGlobalVirtualGroupFamilyResponse> {
    const data = QueryGlobalVirtualGroupFamilyRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.virtualgroup.Query", "GlobalVirtualGroupFamily", data);
    return promise.then(data => QueryGlobalVirtualGroupFamilyResponse.decode(new _m0.Reader(data)));
  }

}