//@ts-nocheck
/* eslint-disable */
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { GlobalVirtualGroup, GlobalVirtualGroupSDKType, GlobalVirtualGroupFamily, GlobalVirtualGroupFamilySDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial, Exact, isSet, Rpc } from "../../helpers";
export const protobufPackage = "greenfield.virtualgroup";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/greenfield.virtualgroup.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/greenfield.virtualgroup.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryGlobalVirtualGroupRequest {
  globalVirtualGroupId: number;
}
export interface QueryGlobalVirtualGroupRequestProtoMsg {
  typeUrl: "/greenfield.virtualgroup.QueryGlobalVirtualGroupRequest";
  value: Uint8Array;
}
export interface QueryGlobalVirtualGroupRequestSDKType {
  global_virtual_group_id: number;
}
export interface QueryGlobalVirtualGroupResponse {
  globalVirtualGroup?: GlobalVirtualGroup;
}
export interface QueryGlobalVirtualGroupResponseProtoMsg {
  typeUrl: "/greenfield.virtualgroup.QueryGlobalVirtualGroupResponse";
  value: Uint8Array;
}
export interface QueryGlobalVirtualGroupResponseSDKType {
  global_virtual_group?: GlobalVirtualGroupSDKType;
}
export interface QueryGlobalVirtualGroupByFamilyIDRequest {
  globalVirtualGroupFamilyId: number;
}
export interface QueryGlobalVirtualGroupByFamilyIDRequestProtoMsg {
  typeUrl: "/greenfield.virtualgroup.QueryGlobalVirtualGroupByFamilyIDRequest";
  value: Uint8Array;
}
export interface QueryGlobalVirtualGroupByFamilyIDRequestSDKType {
  global_virtual_group_family_id: number;
}
export interface QueryGlobalVirtualGroupByFamilyIDResponse {
  globalVirtualGroups: GlobalVirtualGroup[];
}
export interface QueryGlobalVirtualGroupByFamilyIDResponseProtoMsg {
  typeUrl: "/greenfield.virtualgroup.QueryGlobalVirtualGroupByFamilyIDResponse";
  value: Uint8Array;
}
export interface QueryGlobalVirtualGroupByFamilyIDResponseSDKType {
  global_virtual_groups: GlobalVirtualGroupSDKType[];
}
export interface QueryGlobalVirtualGroupFamilyRequest {
  familyId: number;
}
export interface QueryGlobalVirtualGroupFamilyRequestProtoMsg {
  typeUrl: "/greenfield.virtualgroup.QueryGlobalVirtualGroupFamilyRequest";
  value: Uint8Array;
}
export interface QueryGlobalVirtualGroupFamilyRequestSDKType {
  family_id: number;
}
export interface QueryGlobalVirtualGroupFamilyResponse {
  globalVirtualGroupFamily?: GlobalVirtualGroupFamily;
}
export interface QueryGlobalVirtualGroupFamilyResponseProtoMsg {
  typeUrl: "/greenfield.virtualgroup.QueryGlobalVirtualGroupFamilyResponse";
  value: Uint8Array;
}
export interface QueryGlobalVirtualGroupFamilyResponseSDKType {
  global_virtual_group_family?: GlobalVirtualGroupFamilySDKType;
}
export interface QueryGlobalVirtualGroupFamiliesRequest {
  pagination?: PageRequest;
}
export interface QueryGlobalVirtualGroupFamiliesRequestProtoMsg {
  typeUrl: "/greenfield.virtualgroup.QueryGlobalVirtualGroupFamiliesRequest";
  value: Uint8Array;
}
export interface QueryGlobalVirtualGroupFamiliesRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryGlobalVirtualGroupFamiliesResponse {
  gvgFamilies: GlobalVirtualGroupFamily[];
  pagination?: PageResponse;
}
export interface QueryGlobalVirtualGroupFamiliesResponseProtoMsg {
  typeUrl: "/greenfield.virtualgroup.QueryGlobalVirtualGroupFamiliesResponse";
  value: Uint8Array;
}
export interface QueryGlobalVirtualGroupFamiliesResponseSDKType {
  gvg_families: GlobalVirtualGroupFamilySDKType[];
  pagination?: PageResponseSDKType;
}
export interface AvailableGlobalVirtualGroupFamiliesRequest {
  globalVirtualGroupFamilyIds: number[];
}
export interface AvailableGlobalVirtualGroupFamiliesRequestProtoMsg {
  typeUrl: "/greenfield.virtualgroup.AvailableGlobalVirtualGroupFamiliesRequest";
  value: Uint8Array;
}
export interface AvailableGlobalVirtualGroupFamiliesRequestSDKType {
  global_virtual_group_family_ids: number[];
}
export interface AvailableGlobalVirtualGroupFamiliesResponse {
  globalVirtualGroupFamilyIds: number[];
}
export interface AvailableGlobalVirtualGroupFamiliesResponseProtoMsg {
  typeUrl: "/greenfield.virtualgroup.AvailableGlobalVirtualGroupFamiliesResponse";
  value: Uint8Array;
}
export interface AvailableGlobalVirtualGroupFamiliesResponseSDKType {
  global_virtual_group_family_ids: number[];
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/greenfield.virtualgroup.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/greenfield.virtualgroup.QueryParamsRequest",
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
  typeUrl: "/greenfield.virtualgroup.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/greenfield.virtualgroup.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGlobalVirtualGroupRequest(): QueryGlobalVirtualGroupRequest {
  return {
    globalVirtualGroupId: 0
  };
}
export const QueryGlobalVirtualGroupRequest = {
  typeUrl: "/greenfield.virtualgroup.QueryGlobalVirtualGroupRequest",
  encode(message: QueryGlobalVirtualGroupRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.globalVirtualGroupId !== 0) {
      writer.uint32(8).uint32(message.globalVirtualGroupId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGlobalVirtualGroupRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryGlobalVirtualGroupRequestAmino): QueryGlobalVirtualGroupRequest {
    const message = createBaseQueryGlobalVirtualGroupRequest();
    if (object.global_virtual_group_id !== undefined && object.global_virtual_group_id !== null) {
      message.globalVirtualGroupId = object.global_virtual_group_id;
    }
    return message;
  },
  toAmino(message: QueryGlobalVirtualGroupRequest): QueryGlobalVirtualGroupRequestAmino {
    const obj: any = {};
    obj.global_virtual_group_id = message.globalVirtualGroupId;
    return obj;
  },
  fromAminoMsg(object: QueryGlobalVirtualGroupRequestAminoMsg): QueryGlobalVirtualGroupRequest {
    return QueryGlobalVirtualGroupRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGlobalVirtualGroupRequestProtoMsg): QueryGlobalVirtualGroupRequest {
    return QueryGlobalVirtualGroupRequest.decode(message.value);
  },
  toProto(message: QueryGlobalVirtualGroupRequest): Uint8Array {
    return QueryGlobalVirtualGroupRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGlobalVirtualGroupRequest): QueryGlobalVirtualGroupRequestProtoMsg {
    return {
      typeUrl: "/greenfield.virtualgroup.QueryGlobalVirtualGroupRequest",
      value: QueryGlobalVirtualGroupRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGlobalVirtualGroupResponse(): QueryGlobalVirtualGroupResponse {
  return {
    globalVirtualGroup: undefined
  };
}
export const QueryGlobalVirtualGroupResponse = {
  typeUrl: "/greenfield.virtualgroup.QueryGlobalVirtualGroupResponse",
  encode(message: QueryGlobalVirtualGroupResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.globalVirtualGroup !== undefined) {
      GlobalVirtualGroup.encode(message.globalVirtualGroup, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGlobalVirtualGroupResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryGlobalVirtualGroupResponseAmino): QueryGlobalVirtualGroupResponse {
    const message = createBaseQueryGlobalVirtualGroupResponse();
    if (object.global_virtual_group !== undefined && object.global_virtual_group !== null) {
      message.globalVirtualGroup = GlobalVirtualGroup.fromAmino(object.global_virtual_group);
    }
    return message;
  },
  toAmino(message: QueryGlobalVirtualGroupResponse): QueryGlobalVirtualGroupResponseAmino {
    const obj: any = {};
    obj.global_virtual_group = message.globalVirtualGroup ? GlobalVirtualGroup.toAmino(message.globalVirtualGroup) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGlobalVirtualGroupResponseAminoMsg): QueryGlobalVirtualGroupResponse {
    return QueryGlobalVirtualGroupResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGlobalVirtualGroupResponseProtoMsg): QueryGlobalVirtualGroupResponse {
    return QueryGlobalVirtualGroupResponse.decode(message.value);
  },
  toProto(message: QueryGlobalVirtualGroupResponse): Uint8Array {
    return QueryGlobalVirtualGroupResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGlobalVirtualGroupResponse): QueryGlobalVirtualGroupResponseProtoMsg {
    return {
      typeUrl: "/greenfield.virtualgroup.QueryGlobalVirtualGroupResponse",
      value: QueryGlobalVirtualGroupResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGlobalVirtualGroupByFamilyIDRequest(): QueryGlobalVirtualGroupByFamilyIDRequest {
  return {
    globalVirtualGroupFamilyId: 0
  };
}
export const QueryGlobalVirtualGroupByFamilyIDRequest = {
  typeUrl: "/greenfield.virtualgroup.QueryGlobalVirtualGroupByFamilyIDRequest",
  encode(message: QueryGlobalVirtualGroupByFamilyIDRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.globalVirtualGroupFamilyId !== 0) {
      writer.uint32(8).uint32(message.globalVirtualGroupFamilyId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGlobalVirtualGroupByFamilyIDRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGlobalVirtualGroupByFamilyIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
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
      globalVirtualGroupFamilyId: isSet(object.globalVirtualGroupFamilyId) ? Number(object.globalVirtualGroupFamilyId) : 0
    };
  },
  toJSON(message: QueryGlobalVirtualGroupByFamilyIDRequest): unknown {
    const obj: any = {};
    message.globalVirtualGroupFamilyId !== undefined && (obj.globalVirtualGroupFamilyId = Math.round(message.globalVirtualGroupFamilyId));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGlobalVirtualGroupByFamilyIDRequest>, I>>(object: I): QueryGlobalVirtualGroupByFamilyIDRequest {
    const message = createBaseQueryGlobalVirtualGroupByFamilyIDRequest();
    message.globalVirtualGroupFamilyId = object.globalVirtualGroupFamilyId ?? 0;
    return message;
  },
  fromSDK(object: QueryGlobalVirtualGroupByFamilyIDRequestSDKType): QueryGlobalVirtualGroupByFamilyIDRequest {
    return {
      globalVirtualGroupFamilyId: object?.global_virtual_group_family_id
    };
  },
  toSDK(message: QueryGlobalVirtualGroupByFamilyIDRequest): QueryGlobalVirtualGroupByFamilyIDRequestSDKType {
    const obj: any = {};
    obj.global_virtual_group_family_id = message.globalVirtualGroupFamilyId;
    return obj;
  },
  fromAmino(object: QueryGlobalVirtualGroupByFamilyIDRequestAmino): QueryGlobalVirtualGroupByFamilyIDRequest {
    const message = createBaseQueryGlobalVirtualGroupByFamilyIDRequest();
    if (object.global_virtual_group_family_id !== undefined && object.global_virtual_group_family_id !== null) {
      message.globalVirtualGroupFamilyId = object.global_virtual_group_family_id;
    }
    return message;
  },
  toAmino(message: QueryGlobalVirtualGroupByFamilyIDRequest): QueryGlobalVirtualGroupByFamilyIDRequestAmino {
    const obj: any = {};
    obj.global_virtual_group_family_id = message.globalVirtualGroupFamilyId;
    return obj;
  },
  fromAminoMsg(object: QueryGlobalVirtualGroupByFamilyIDRequestAminoMsg): QueryGlobalVirtualGroupByFamilyIDRequest {
    return QueryGlobalVirtualGroupByFamilyIDRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGlobalVirtualGroupByFamilyIDRequestProtoMsg): QueryGlobalVirtualGroupByFamilyIDRequest {
    return QueryGlobalVirtualGroupByFamilyIDRequest.decode(message.value);
  },
  toProto(message: QueryGlobalVirtualGroupByFamilyIDRequest): Uint8Array {
    return QueryGlobalVirtualGroupByFamilyIDRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGlobalVirtualGroupByFamilyIDRequest): QueryGlobalVirtualGroupByFamilyIDRequestProtoMsg {
    return {
      typeUrl: "/greenfield.virtualgroup.QueryGlobalVirtualGroupByFamilyIDRequest",
      value: QueryGlobalVirtualGroupByFamilyIDRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGlobalVirtualGroupByFamilyIDResponse(): QueryGlobalVirtualGroupByFamilyIDResponse {
  return {
    globalVirtualGroups: []
  };
}
export const QueryGlobalVirtualGroupByFamilyIDResponse = {
  typeUrl: "/greenfield.virtualgroup.QueryGlobalVirtualGroupByFamilyIDResponse",
  encode(message: QueryGlobalVirtualGroupByFamilyIDResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.globalVirtualGroups) {
      GlobalVirtualGroup.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGlobalVirtualGroupByFamilyIDResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryGlobalVirtualGroupByFamilyIDResponseAmino): QueryGlobalVirtualGroupByFamilyIDResponse {
    const message = createBaseQueryGlobalVirtualGroupByFamilyIDResponse();
    message.globalVirtualGroups = object.global_virtual_groups?.map(e => GlobalVirtualGroup.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryGlobalVirtualGroupByFamilyIDResponse): QueryGlobalVirtualGroupByFamilyIDResponseAmino {
    const obj: any = {};
    if (message.globalVirtualGroups) {
      obj.global_virtual_groups = message.globalVirtualGroups.map(e => e ? GlobalVirtualGroup.toAmino(e) : undefined);
    } else {
      obj.global_virtual_groups = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryGlobalVirtualGroupByFamilyIDResponseAminoMsg): QueryGlobalVirtualGroupByFamilyIDResponse {
    return QueryGlobalVirtualGroupByFamilyIDResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGlobalVirtualGroupByFamilyIDResponseProtoMsg): QueryGlobalVirtualGroupByFamilyIDResponse {
    return QueryGlobalVirtualGroupByFamilyIDResponse.decode(message.value);
  },
  toProto(message: QueryGlobalVirtualGroupByFamilyIDResponse): Uint8Array {
    return QueryGlobalVirtualGroupByFamilyIDResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGlobalVirtualGroupByFamilyIDResponse): QueryGlobalVirtualGroupByFamilyIDResponseProtoMsg {
    return {
      typeUrl: "/greenfield.virtualgroup.QueryGlobalVirtualGroupByFamilyIDResponse",
      value: QueryGlobalVirtualGroupByFamilyIDResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGlobalVirtualGroupFamilyRequest(): QueryGlobalVirtualGroupFamilyRequest {
  return {
    familyId: 0
  };
}
export const QueryGlobalVirtualGroupFamilyRequest = {
  typeUrl: "/greenfield.virtualgroup.QueryGlobalVirtualGroupFamilyRequest",
  encode(message: QueryGlobalVirtualGroupFamilyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.familyId !== 0) {
      writer.uint32(8).uint32(message.familyId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGlobalVirtualGroupFamilyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGlobalVirtualGroupFamilyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
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
      familyId: isSet(object.familyId) ? Number(object.familyId) : 0
    };
  },
  toJSON(message: QueryGlobalVirtualGroupFamilyRequest): unknown {
    const obj: any = {};
    message.familyId !== undefined && (obj.familyId = Math.round(message.familyId));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGlobalVirtualGroupFamilyRequest>, I>>(object: I): QueryGlobalVirtualGroupFamilyRequest {
    const message = createBaseQueryGlobalVirtualGroupFamilyRequest();
    message.familyId = object.familyId ?? 0;
    return message;
  },
  fromSDK(object: QueryGlobalVirtualGroupFamilyRequestSDKType): QueryGlobalVirtualGroupFamilyRequest {
    return {
      familyId: object?.family_id
    };
  },
  toSDK(message: QueryGlobalVirtualGroupFamilyRequest): QueryGlobalVirtualGroupFamilyRequestSDKType {
    const obj: any = {};
    obj.family_id = message.familyId;
    return obj;
  },
  fromAmino(object: QueryGlobalVirtualGroupFamilyRequestAmino): QueryGlobalVirtualGroupFamilyRequest {
    const message = createBaseQueryGlobalVirtualGroupFamilyRequest();
    if (object.family_id !== undefined && object.family_id !== null) {
      message.familyId = object.family_id;
    }
    return message;
  },
  toAmino(message: QueryGlobalVirtualGroupFamilyRequest): QueryGlobalVirtualGroupFamilyRequestAmino {
    const obj: any = {};
    obj.family_id = message.familyId;
    return obj;
  },
  fromAminoMsg(object: QueryGlobalVirtualGroupFamilyRequestAminoMsg): QueryGlobalVirtualGroupFamilyRequest {
    return QueryGlobalVirtualGroupFamilyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGlobalVirtualGroupFamilyRequestProtoMsg): QueryGlobalVirtualGroupFamilyRequest {
    return QueryGlobalVirtualGroupFamilyRequest.decode(message.value);
  },
  toProto(message: QueryGlobalVirtualGroupFamilyRequest): Uint8Array {
    return QueryGlobalVirtualGroupFamilyRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGlobalVirtualGroupFamilyRequest): QueryGlobalVirtualGroupFamilyRequestProtoMsg {
    return {
      typeUrl: "/greenfield.virtualgroup.QueryGlobalVirtualGroupFamilyRequest",
      value: QueryGlobalVirtualGroupFamilyRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGlobalVirtualGroupFamilyResponse(): QueryGlobalVirtualGroupFamilyResponse {
  return {
    globalVirtualGroupFamily: undefined
  };
}
export const QueryGlobalVirtualGroupFamilyResponse = {
  typeUrl: "/greenfield.virtualgroup.QueryGlobalVirtualGroupFamilyResponse",
  encode(message: QueryGlobalVirtualGroupFamilyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.globalVirtualGroupFamily !== undefined) {
      GlobalVirtualGroupFamily.encode(message.globalVirtualGroupFamily, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGlobalVirtualGroupFamilyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryGlobalVirtualGroupFamilyResponseAmino): QueryGlobalVirtualGroupFamilyResponse {
    const message = createBaseQueryGlobalVirtualGroupFamilyResponse();
    if (object.global_virtual_group_family !== undefined && object.global_virtual_group_family !== null) {
      message.globalVirtualGroupFamily = GlobalVirtualGroupFamily.fromAmino(object.global_virtual_group_family);
    }
    return message;
  },
  toAmino(message: QueryGlobalVirtualGroupFamilyResponse): QueryGlobalVirtualGroupFamilyResponseAmino {
    const obj: any = {};
    obj.global_virtual_group_family = message.globalVirtualGroupFamily ? GlobalVirtualGroupFamily.toAmino(message.globalVirtualGroupFamily) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGlobalVirtualGroupFamilyResponseAminoMsg): QueryGlobalVirtualGroupFamilyResponse {
    return QueryGlobalVirtualGroupFamilyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGlobalVirtualGroupFamilyResponseProtoMsg): QueryGlobalVirtualGroupFamilyResponse {
    return QueryGlobalVirtualGroupFamilyResponse.decode(message.value);
  },
  toProto(message: QueryGlobalVirtualGroupFamilyResponse): Uint8Array {
    return QueryGlobalVirtualGroupFamilyResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGlobalVirtualGroupFamilyResponse): QueryGlobalVirtualGroupFamilyResponseProtoMsg {
    return {
      typeUrl: "/greenfield.virtualgroup.QueryGlobalVirtualGroupFamilyResponse",
      value: QueryGlobalVirtualGroupFamilyResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGlobalVirtualGroupFamiliesRequest(): QueryGlobalVirtualGroupFamiliesRequest {
  return {
    pagination: undefined
  };
}
export const QueryGlobalVirtualGroupFamiliesRequest = {
  typeUrl: "/greenfield.virtualgroup.QueryGlobalVirtualGroupFamiliesRequest",
  encode(message: QueryGlobalVirtualGroupFamiliesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGlobalVirtualGroupFamiliesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGlobalVirtualGroupFamiliesRequest();
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
  fromJSON(object: any): QueryGlobalVirtualGroupFamiliesRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryGlobalVirtualGroupFamiliesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGlobalVirtualGroupFamiliesRequest>, I>>(object: I): QueryGlobalVirtualGroupFamiliesRequest {
    const message = createBaseQueryGlobalVirtualGroupFamiliesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryGlobalVirtualGroupFamiliesRequestSDKType): QueryGlobalVirtualGroupFamiliesRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryGlobalVirtualGroupFamiliesRequest): QueryGlobalVirtualGroupFamiliesRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryGlobalVirtualGroupFamiliesRequestAmino): QueryGlobalVirtualGroupFamiliesRequest {
    const message = createBaseQueryGlobalVirtualGroupFamiliesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGlobalVirtualGroupFamiliesRequest): QueryGlobalVirtualGroupFamiliesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGlobalVirtualGroupFamiliesRequestAminoMsg): QueryGlobalVirtualGroupFamiliesRequest {
    return QueryGlobalVirtualGroupFamiliesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGlobalVirtualGroupFamiliesRequestProtoMsg): QueryGlobalVirtualGroupFamiliesRequest {
    return QueryGlobalVirtualGroupFamiliesRequest.decode(message.value);
  },
  toProto(message: QueryGlobalVirtualGroupFamiliesRequest): Uint8Array {
    return QueryGlobalVirtualGroupFamiliesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGlobalVirtualGroupFamiliesRequest): QueryGlobalVirtualGroupFamiliesRequestProtoMsg {
    return {
      typeUrl: "/greenfield.virtualgroup.QueryGlobalVirtualGroupFamiliesRequest",
      value: QueryGlobalVirtualGroupFamiliesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGlobalVirtualGroupFamiliesResponse(): QueryGlobalVirtualGroupFamiliesResponse {
  return {
    gvgFamilies: [],
    pagination: undefined
  };
}
export const QueryGlobalVirtualGroupFamiliesResponse = {
  typeUrl: "/greenfield.virtualgroup.QueryGlobalVirtualGroupFamiliesResponse",
  encode(message: QueryGlobalVirtualGroupFamiliesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.gvgFamilies) {
      GlobalVirtualGroupFamily.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGlobalVirtualGroupFamiliesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGlobalVirtualGroupFamiliesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gvgFamilies.push(GlobalVirtualGroupFamily.decode(reader, reader.uint32()));
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
      gvgFamilies: Array.isArray(object?.gvgFamilies) ? object.gvgFamilies.map((e: any) => GlobalVirtualGroupFamily.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryGlobalVirtualGroupFamiliesResponse): unknown {
    const obj: any = {};
    if (message.gvgFamilies) {
      obj.gvgFamilies = message.gvgFamilies.map(e => e ? GlobalVirtualGroupFamily.toJSON(e) : undefined);
    } else {
      obj.gvgFamilies = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGlobalVirtualGroupFamiliesResponse>, I>>(object: I): QueryGlobalVirtualGroupFamiliesResponse {
    const message = createBaseQueryGlobalVirtualGroupFamiliesResponse();
    message.gvgFamilies = object.gvgFamilies?.map(e => GlobalVirtualGroupFamily.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryGlobalVirtualGroupFamiliesResponseSDKType): QueryGlobalVirtualGroupFamiliesResponse {
    return {
      gvgFamilies: Array.isArray(object?.gvg_families) ? object.gvg_families.map((e: any) => GlobalVirtualGroupFamily.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryGlobalVirtualGroupFamiliesResponse): QueryGlobalVirtualGroupFamiliesResponseSDKType {
    const obj: any = {};
    if (message.gvgFamilies) {
      obj.gvg_families = message.gvgFamilies.map(e => e ? GlobalVirtualGroupFamily.toSDK(e) : undefined);
    } else {
      obj.gvg_families = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryGlobalVirtualGroupFamiliesResponseAmino): QueryGlobalVirtualGroupFamiliesResponse {
    const message = createBaseQueryGlobalVirtualGroupFamiliesResponse();
    message.gvgFamilies = object.gvg_families?.map(e => GlobalVirtualGroupFamily.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGlobalVirtualGroupFamiliesResponse): QueryGlobalVirtualGroupFamiliesResponseAmino {
    const obj: any = {};
    if (message.gvgFamilies) {
      obj.gvg_families = message.gvgFamilies.map(e => e ? GlobalVirtualGroupFamily.toAmino(e) : undefined);
    } else {
      obj.gvg_families = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGlobalVirtualGroupFamiliesResponseAminoMsg): QueryGlobalVirtualGroupFamiliesResponse {
    return QueryGlobalVirtualGroupFamiliesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGlobalVirtualGroupFamiliesResponseProtoMsg): QueryGlobalVirtualGroupFamiliesResponse {
    return QueryGlobalVirtualGroupFamiliesResponse.decode(message.value);
  },
  toProto(message: QueryGlobalVirtualGroupFamiliesResponse): Uint8Array {
    return QueryGlobalVirtualGroupFamiliesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGlobalVirtualGroupFamiliesResponse): QueryGlobalVirtualGroupFamiliesResponseProtoMsg {
    return {
      typeUrl: "/greenfield.virtualgroup.QueryGlobalVirtualGroupFamiliesResponse",
      value: QueryGlobalVirtualGroupFamiliesResponse.encode(message).finish()
    };
  }
};
function createBaseAvailableGlobalVirtualGroupFamiliesRequest(): AvailableGlobalVirtualGroupFamiliesRequest {
  return {
    globalVirtualGroupFamilyIds: []
  };
}
export const AvailableGlobalVirtualGroupFamiliesRequest = {
  typeUrl: "/greenfield.virtualgroup.AvailableGlobalVirtualGroupFamiliesRequest",
  encode(message: AvailableGlobalVirtualGroupFamiliesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.globalVirtualGroupFamilyIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AvailableGlobalVirtualGroupFamiliesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAvailableGlobalVirtualGroupFamiliesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.globalVirtualGroupFamilyIds.push(reader.uint32());
            }
          } else {
            message.globalVirtualGroupFamilyIds.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AvailableGlobalVirtualGroupFamiliesRequest {
    return {
      globalVirtualGroupFamilyIds: Array.isArray(object?.globalVirtualGroupFamilyIds) ? object.globalVirtualGroupFamilyIds.map((e: any) => Number(e)) : []
    };
  },
  toJSON(message: AvailableGlobalVirtualGroupFamiliesRequest): unknown {
    const obj: any = {};
    if (message.globalVirtualGroupFamilyIds) {
      obj.globalVirtualGroupFamilyIds = message.globalVirtualGroupFamilyIds.map(e => Math.round(e));
    } else {
      obj.globalVirtualGroupFamilyIds = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AvailableGlobalVirtualGroupFamiliesRequest>, I>>(object: I): AvailableGlobalVirtualGroupFamiliesRequest {
    const message = createBaseAvailableGlobalVirtualGroupFamiliesRequest();
    message.globalVirtualGroupFamilyIds = object.globalVirtualGroupFamilyIds?.map(e => e) || [];
    return message;
  },
  fromSDK(object: AvailableGlobalVirtualGroupFamiliesRequestSDKType): AvailableGlobalVirtualGroupFamiliesRequest {
    return {
      globalVirtualGroupFamilyIds: Array.isArray(object?.global_virtual_group_family_ids) ? object.global_virtual_group_family_ids.map((e: any) => e) : []
    };
  },
  toSDK(message: AvailableGlobalVirtualGroupFamiliesRequest): AvailableGlobalVirtualGroupFamiliesRequestSDKType {
    const obj: any = {};
    if (message.globalVirtualGroupFamilyIds) {
      obj.global_virtual_group_family_ids = message.globalVirtualGroupFamilyIds.map(e => e);
    } else {
      obj.global_virtual_group_family_ids = [];
    }
    return obj;
  },
  fromAmino(object: AvailableGlobalVirtualGroupFamiliesRequestAmino): AvailableGlobalVirtualGroupFamiliesRequest {
    const message = createBaseAvailableGlobalVirtualGroupFamiliesRequest();
    message.globalVirtualGroupFamilyIds = object.global_virtual_group_family_ids?.map(e => e) || [];
    return message;
  },
  toAmino(message: AvailableGlobalVirtualGroupFamiliesRequest): AvailableGlobalVirtualGroupFamiliesRequestAmino {
    const obj: any = {};
    if (message.globalVirtualGroupFamilyIds) {
      obj.global_virtual_group_family_ids = message.globalVirtualGroupFamilyIds.map(e => e);
    } else {
      obj.global_virtual_group_family_ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: AvailableGlobalVirtualGroupFamiliesRequestAminoMsg): AvailableGlobalVirtualGroupFamiliesRequest {
    return AvailableGlobalVirtualGroupFamiliesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: AvailableGlobalVirtualGroupFamiliesRequestProtoMsg): AvailableGlobalVirtualGroupFamiliesRequest {
    return AvailableGlobalVirtualGroupFamiliesRequest.decode(message.value);
  },
  toProto(message: AvailableGlobalVirtualGroupFamiliesRequest): Uint8Array {
    return AvailableGlobalVirtualGroupFamiliesRequest.encode(message).finish();
  },
  toProtoMsg(message: AvailableGlobalVirtualGroupFamiliesRequest): AvailableGlobalVirtualGroupFamiliesRequestProtoMsg {
    return {
      typeUrl: "/greenfield.virtualgroup.AvailableGlobalVirtualGroupFamiliesRequest",
      value: AvailableGlobalVirtualGroupFamiliesRequest.encode(message).finish()
    };
  }
};
function createBaseAvailableGlobalVirtualGroupFamiliesResponse(): AvailableGlobalVirtualGroupFamiliesResponse {
  return {
    globalVirtualGroupFamilyIds: []
  };
}
export const AvailableGlobalVirtualGroupFamiliesResponse = {
  typeUrl: "/greenfield.virtualgroup.AvailableGlobalVirtualGroupFamiliesResponse",
  encode(message: AvailableGlobalVirtualGroupFamiliesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.globalVirtualGroupFamilyIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AvailableGlobalVirtualGroupFamiliesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAvailableGlobalVirtualGroupFamiliesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.globalVirtualGroupFamilyIds.push(reader.uint32());
            }
          } else {
            message.globalVirtualGroupFamilyIds.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AvailableGlobalVirtualGroupFamiliesResponse {
    return {
      globalVirtualGroupFamilyIds: Array.isArray(object?.globalVirtualGroupFamilyIds) ? object.globalVirtualGroupFamilyIds.map((e: any) => Number(e)) : []
    };
  },
  toJSON(message: AvailableGlobalVirtualGroupFamiliesResponse): unknown {
    const obj: any = {};
    if (message.globalVirtualGroupFamilyIds) {
      obj.globalVirtualGroupFamilyIds = message.globalVirtualGroupFamilyIds.map(e => Math.round(e));
    } else {
      obj.globalVirtualGroupFamilyIds = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AvailableGlobalVirtualGroupFamiliesResponse>, I>>(object: I): AvailableGlobalVirtualGroupFamiliesResponse {
    const message = createBaseAvailableGlobalVirtualGroupFamiliesResponse();
    message.globalVirtualGroupFamilyIds = object.globalVirtualGroupFamilyIds?.map(e => e) || [];
    return message;
  },
  fromSDK(object: AvailableGlobalVirtualGroupFamiliesResponseSDKType): AvailableGlobalVirtualGroupFamiliesResponse {
    return {
      globalVirtualGroupFamilyIds: Array.isArray(object?.global_virtual_group_family_ids) ? object.global_virtual_group_family_ids.map((e: any) => e) : []
    };
  },
  toSDK(message: AvailableGlobalVirtualGroupFamiliesResponse): AvailableGlobalVirtualGroupFamiliesResponseSDKType {
    const obj: any = {};
    if (message.globalVirtualGroupFamilyIds) {
      obj.global_virtual_group_family_ids = message.globalVirtualGroupFamilyIds.map(e => e);
    } else {
      obj.global_virtual_group_family_ids = [];
    }
    return obj;
  },
  fromAmino(object: AvailableGlobalVirtualGroupFamiliesResponseAmino): AvailableGlobalVirtualGroupFamiliesResponse {
    const message = createBaseAvailableGlobalVirtualGroupFamiliesResponse();
    message.globalVirtualGroupFamilyIds = object.global_virtual_group_family_ids?.map(e => e) || [];
    return message;
  },
  toAmino(message: AvailableGlobalVirtualGroupFamiliesResponse): AvailableGlobalVirtualGroupFamiliesResponseAmino {
    const obj: any = {};
    if (message.globalVirtualGroupFamilyIds) {
      obj.global_virtual_group_family_ids = message.globalVirtualGroupFamilyIds.map(e => e);
    } else {
      obj.global_virtual_group_family_ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: AvailableGlobalVirtualGroupFamiliesResponseAminoMsg): AvailableGlobalVirtualGroupFamiliesResponse {
    return AvailableGlobalVirtualGroupFamiliesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: AvailableGlobalVirtualGroupFamiliesResponseProtoMsg): AvailableGlobalVirtualGroupFamiliesResponse {
    return AvailableGlobalVirtualGroupFamiliesResponse.decode(message.value);
  },
  toProto(message: AvailableGlobalVirtualGroupFamiliesResponse): Uint8Array {
    return AvailableGlobalVirtualGroupFamiliesResponse.encode(message).finish();
  },
  toProtoMsg(message: AvailableGlobalVirtualGroupFamiliesResponse): AvailableGlobalVirtualGroupFamiliesResponseProtoMsg {
    return {
      typeUrl: "/greenfield.virtualgroup.AvailableGlobalVirtualGroupFamiliesResponse",
      value: AvailableGlobalVirtualGroupFamiliesResponse.encode(message).finish()
    };
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
  /** Queries a global virtual group family by its id. */
  GlobalVirtualGroupFamily(request: QueryGlobalVirtualGroupFamilyRequest): Promise<QueryGlobalVirtualGroupFamilyResponse>;
  /** Queries a list of GlobalVirtualGroupFamilies items. */
  GlobalVirtualGroupFamilies(request?: QueryGlobalVirtualGroupFamiliesRequest): Promise<QueryGlobalVirtualGroupFamiliesResponse>;
  /** AvailableGlobalVirtualGroupFamilies filters a list of GlobalVirtualGroupFamilies ID which are qualified to create bucket on */
  AvailableGlobalVirtualGroupFamilies(request: AvailableGlobalVirtualGroupFamiliesRequest): Promise<AvailableGlobalVirtualGroupFamiliesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.GlobalVirtualGroup = this.GlobalVirtualGroup.bind(this);
    this.GlobalVirtualGroupByFamilyID = this.GlobalVirtualGroupByFamilyID.bind(this);
    this.GlobalVirtualGroupFamily = this.GlobalVirtualGroupFamily.bind(this);
    this.GlobalVirtualGroupFamilies = this.GlobalVirtualGroupFamilies.bind(this);
    this.AvailableGlobalVirtualGroupFamilies = this.AvailableGlobalVirtualGroupFamilies.bind(this);
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.virtualgroup.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  GlobalVirtualGroup(request: QueryGlobalVirtualGroupRequest): Promise<QueryGlobalVirtualGroupResponse> {
    const data = QueryGlobalVirtualGroupRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.virtualgroup.Query", "GlobalVirtualGroup", data);
    return promise.then(data => QueryGlobalVirtualGroupResponse.decode(new BinaryReader(data)));
  }
  GlobalVirtualGroupByFamilyID(request: QueryGlobalVirtualGroupByFamilyIDRequest): Promise<QueryGlobalVirtualGroupByFamilyIDResponse> {
    const data = QueryGlobalVirtualGroupByFamilyIDRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.virtualgroup.Query", "GlobalVirtualGroupByFamilyID", data);
    return promise.then(data => QueryGlobalVirtualGroupByFamilyIDResponse.decode(new BinaryReader(data)));
  }
  GlobalVirtualGroupFamily(request: QueryGlobalVirtualGroupFamilyRequest): Promise<QueryGlobalVirtualGroupFamilyResponse> {
    const data = QueryGlobalVirtualGroupFamilyRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.virtualgroup.Query", "GlobalVirtualGroupFamily", data);
    return promise.then(data => QueryGlobalVirtualGroupFamilyResponse.decode(new BinaryReader(data)));
  }
  GlobalVirtualGroupFamilies(request: QueryGlobalVirtualGroupFamiliesRequest = {
    pagination: undefined
  }): Promise<QueryGlobalVirtualGroupFamiliesResponse> {
    const data = QueryGlobalVirtualGroupFamiliesRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.virtualgroup.Query", "GlobalVirtualGroupFamilies", data);
    return promise.then(data => QueryGlobalVirtualGroupFamiliesResponse.decode(new BinaryReader(data)));
  }
  AvailableGlobalVirtualGroupFamilies(request: AvailableGlobalVirtualGroupFamiliesRequest): Promise<AvailableGlobalVirtualGroupFamiliesResponse> {
    const data = AvailableGlobalVirtualGroupFamiliesRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.virtualgroup.Query", "AvailableGlobalVirtualGroupFamilies", data);
    return promise.then(data => AvailableGlobalVirtualGroupFamiliesResponse.decode(new BinaryReader(data)));
  }
}