//@ts-nocheck
/* eslint-disable */
import { Long, isSet, DeepPartial, Exact } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "greenfield.virtualgroup";
/**
 * A global virtual group consists of one primary SP (SP) and multiple secondary SP.
 * Every global virtual group must belong to a GVG family, and the objects of each
 * bucket must be stored in a GVG within a group family.
 */
export interface GlobalVirtualGroup {
  /** ID represents the unique identifier of the global virtual group. */
  id: number;
  /** Family ID represents the identifier of the GVG family that the group belongs to. */
  familyId: number;
  /** Primary SP ID represents the unique identifier of the primary storage provider in the group. */
  primarySpId: number;
  /** Secondary SP IDs represents the list of unique identifiers of the secondary storage providers in the group. */
  secondarySpIds: number[];
  /** Stored size represents the size of the stored objects within the group. */
  storedSize: Long;
  /** Virtual payment address represents the payment address associated with the group. */
  virtualPaymentAddress: string;
  /** Total deposit represents the number of tokens deposited by this storage provider for staking. */
  totalDeposit: string;
}
export interface GlobalVirtualGroupProtoMsg {
  typeUrl: "/greenfield.virtualgroup.GlobalVirtualGroup";
  value: Uint8Array;
}
/**
 * A global virtual group consists of one primary SP (SP) and multiple secondary SP.
 * Every global virtual group must belong to a GVG family, and the objects of each
 * bucket must be stored in a GVG within a group family.
 */
export interface GlobalVirtualGroupSDKType {
  id: number;
  family_id: number;
  primary_sp_id: number;
  secondary_sp_ids: number[];
  stored_size: Long;
  virtual_payment_address: string;
  total_deposit: string;
}
/**
 * Global virtual group family serve as a means of grouping global virtual groups.
 * Each bucket must be associated with a unique global virtual group family and cannot cross families.
 */
export interface GlobalVirtualGroupFamily {
  /** id is the identifier of the global virtual group family. */
  id: number;
  /** primary_sp_id */
  primarySpId: number;
  /** global_virtual_group_ids is a list of identifiers of the global virtual groups associated with the family. */
  globalVirtualGroupIds: number[];
  /** virtual_payment_address is the payment address associated with the global virtual group family. */
  virtualPaymentAddress: string;
}
export interface GlobalVirtualGroupFamilyProtoMsg {
  typeUrl: "/greenfield.virtualgroup.GlobalVirtualGroupFamily";
  value: Uint8Array;
}
/**
 * Global virtual group family serve as a means of grouping global virtual groups.
 * Each bucket must be associated with a unique global virtual group family and cannot cross families.
 */
export interface GlobalVirtualGroupFamilySDKType {
  id: number;
  primary_sp_id: number;
  global_virtual_group_ids: number[];
  virtual_payment_address: string;
}
export interface GlobalVirtualGroupsBindingOnBucket {
  /** bucket_id is the unique identification for the bucket. */
  bucketId: string;
  /** global_virtual_group_ids is a list of identifiers of the global virtual groups associated with the bucket. */
  globalVirtualGroupIds: number[];
  /** local_virtual_group_ids is a list of identifiers of the local virtual groups associated with the bucket. */
  localVirtualGroupIds: number[];
}
export interface GlobalVirtualGroupsBindingOnBucketProtoMsg {
  typeUrl: "/greenfield.virtualgroup.GlobalVirtualGroupsBindingOnBucket";
  value: Uint8Array;
}
export interface GlobalVirtualGroupsBindingOnBucketSDKType {
  bucket_id: string;
  global_virtual_group_ids: number[];
  local_virtual_group_ids: number[];
}
export interface GVGStatisticsWithinSP {
  /** storage_provider_id defines the id of the sp which the statistics associated to */
  storageProviderId: number;
  /** primary_sp_family_count defines the number of the family which this sp serves as primary sp */
  primaryCount: number;
  /**
   * secondary_count defines the number of global virtual groups (GVGs) in
   * which this storage provider serves as a secondary storage provider.
   */
  secondaryCount: number;
}
export interface GVGStatisticsWithinSPProtoMsg {
  typeUrl: "/greenfield.virtualgroup.GVGStatisticsWithinSP";
  value: Uint8Array;
}
export interface GVGStatisticsWithinSPSDKType {
  storage_provider_id: number;
  primary_count: number;
  secondary_count: number;
}
export interface SwapOutInfo {
  /** sp_id is the unique id of the storage provider who want to swap out. */
  spId: number;
  /** successor_sp_id is the id of the successor storage provider. */
  successorSpId: number;
}
export interface SwapOutInfoProtoMsg {
  typeUrl: "/greenfield.virtualgroup.SwapOutInfo";
  value: Uint8Array;
}
export interface SwapOutInfoSDKType {
  sp_id: number;
  successor_sp_id: number;
}
function createBaseGlobalVirtualGroup(): GlobalVirtualGroup {
  return {
    id: 0,
    familyId: 0,
    primarySpId: 0,
    secondarySpIds: [],
    storedSize: Long.UZERO,
    virtualPaymentAddress: "",
    totalDeposit: ""
  };
}
export const GlobalVirtualGroup = {
  typeUrl: "/greenfield.virtualgroup.GlobalVirtualGroup",
  encode(message: GlobalVirtualGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.familyId !== 0) {
      writer.uint32(16).uint32(message.familyId);
    }
    if (message.primarySpId !== 0) {
      writer.uint32(24).uint32(message.primarySpId);
    }
    writer.uint32(34).fork();
    for (const v of message.secondarySpIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (!message.storedSize.isZero()) {
      writer.uint32(40).uint64(message.storedSize);
    }
    if (message.virtualPaymentAddress !== "") {
      writer.uint32(50).string(message.virtualPaymentAddress);
    }
    if (message.totalDeposit !== "") {
      writer.uint32(58).string(message.totalDeposit);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GlobalVirtualGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGlobalVirtualGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.familyId = reader.uint32();
          break;
        case 3:
          message.primarySpId = reader.uint32();
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.secondarySpIds.push(reader.uint32());
            }
          } else {
            message.secondarySpIds.push(reader.uint32());
          }
          break;
        case 5:
          message.storedSize = (reader.uint64() as Long);
          break;
        case 6:
          message.virtualPaymentAddress = reader.string();
          break;
        case 7:
          message.totalDeposit = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GlobalVirtualGroup {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      familyId: isSet(object.familyId) ? Number(object.familyId) : 0,
      primarySpId: isSet(object.primarySpId) ? Number(object.primarySpId) : 0,
      secondarySpIds: Array.isArray(object?.secondarySpIds) ? object.secondarySpIds.map((e: any) => Number(e)) : [],
      storedSize: isSet(object.storedSize) ? Long.fromValue(object.storedSize) : Long.UZERO,
      virtualPaymentAddress: isSet(object.virtualPaymentAddress) ? String(object.virtualPaymentAddress) : "",
      totalDeposit: isSet(object.totalDeposit) ? String(object.totalDeposit) : ""
    };
  },
  toJSON(message: GlobalVirtualGroup): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.familyId !== undefined && (obj.familyId = Math.round(message.familyId));
    message.primarySpId !== undefined && (obj.primarySpId = Math.round(message.primarySpId));
    if (message.secondarySpIds) {
      obj.secondarySpIds = message.secondarySpIds.map(e => Math.round(e));
    } else {
      obj.secondarySpIds = [];
    }
    message.storedSize !== undefined && (obj.storedSize = (message.storedSize || Long.UZERO).toString());
    message.virtualPaymentAddress !== undefined && (obj.virtualPaymentAddress = message.virtualPaymentAddress);
    message.totalDeposit !== undefined && (obj.totalDeposit = message.totalDeposit);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GlobalVirtualGroup>, I>>(object: I): GlobalVirtualGroup {
    const message = createBaseGlobalVirtualGroup();
    message.id = object.id ?? 0;
    message.familyId = object.familyId ?? 0;
    message.primarySpId = object.primarySpId ?? 0;
    message.secondarySpIds = object.secondarySpIds?.map(e => e) || [];
    message.storedSize = object.storedSize !== undefined && object.storedSize !== null ? Long.fromValue(object.storedSize) : Long.UZERO;
    message.virtualPaymentAddress = object.virtualPaymentAddress ?? "";
    message.totalDeposit = object.totalDeposit ?? "";
    return message;
  },
  fromSDK(object: GlobalVirtualGroupSDKType): GlobalVirtualGroup {
    return {
      id: object?.id,
      familyId: object?.family_id,
      primarySpId: object?.primary_sp_id,
      secondarySpIds: Array.isArray(object?.secondary_sp_ids) ? object.secondary_sp_ids.map((e: any) => e) : [],
      storedSize: object?.stored_size,
      virtualPaymentAddress: object?.virtual_payment_address,
      totalDeposit: object?.total_deposit
    };
  },
  toSDK(message: GlobalVirtualGroup): GlobalVirtualGroupSDKType {
    const obj: any = {};
    obj.id = message.id;
    obj.family_id = message.familyId;
    obj.primary_sp_id = message.primarySpId;
    if (message.secondarySpIds) {
      obj.secondary_sp_ids = message.secondarySpIds.map(e => e);
    } else {
      obj.secondary_sp_ids = [];
    }
    obj.stored_size = message.storedSize;
    obj.virtual_payment_address = message.virtualPaymentAddress;
    obj.total_deposit = message.totalDeposit;
    return obj;
  },
  fromAmino(object: GlobalVirtualGroupAmino): GlobalVirtualGroup {
    const message = createBaseGlobalVirtualGroup();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.family_id !== undefined && object.family_id !== null) {
      message.familyId = object.family_id;
    }
    if (object.primary_sp_id !== undefined && object.primary_sp_id !== null) {
      message.primarySpId = object.primary_sp_id;
    }
    message.secondarySpIds = object.secondary_sp_ids?.map(e => e) || [];
    if (object.stored_size !== undefined && object.stored_size !== null) {
      message.storedSize = Long.fromString(object.stored_size);
    }
    if (object.virtual_payment_address !== undefined && object.virtual_payment_address !== null) {
      message.virtualPaymentAddress = object.virtual_payment_address;
    }
    if (object.total_deposit !== undefined && object.total_deposit !== null) {
      message.totalDeposit = object.total_deposit;
    }
    return message;
  },
  toAmino(message: GlobalVirtualGroup): GlobalVirtualGroupAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.family_id = message.familyId;
    obj.primary_sp_id = message.primarySpId;
    if (message.secondarySpIds) {
      obj.secondary_sp_ids = message.secondarySpIds.map(e => e);
    } else {
      obj.secondary_sp_ids = [];
    }
    obj.stored_size = message.storedSize ? message.storedSize.toString() : undefined;
    obj.virtual_payment_address = message.virtualPaymentAddress;
    obj.total_deposit = message.totalDeposit;
    return obj;
  },
  fromAminoMsg(object: GlobalVirtualGroupAminoMsg): GlobalVirtualGroup {
    return GlobalVirtualGroup.fromAmino(object.value);
  },
  fromProtoMsg(message: GlobalVirtualGroupProtoMsg): GlobalVirtualGroup {
    return GlobalVirtualGroup.decode(message.value);
  },
  toProto(message: GlobalVirtualGroup): Uint8Array {
    return GlobalVirtualGroup.encode(message).finish();
  },
  toProtoMsg(message: GlobalVirtualGroup): GlobalVirtualGroupProtoMsg {
    return {
      typeUrl: "/greenfield.virtualgroup.GlobalVirtualGroup",
      value: GlobalVirtualGroup.encode(message).finish()
    };
  }
};
function createBaseGlobalVirtualGroupFamily(): GlobalVirtualGroupFamily {
  return {
    id: 0,
    primarySpId: 0,
    globalVirtualGroupIds: [],
    virtualPaymentAddress: ""
  };
}
export const GlobalVirtualGroupFamily = {
  typeUrl: "/greenfield.virtualgroup.GlobalVirtualGroupFamily",
  encode(message: GlobalVirtualGroupFamily, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.primarySpId !== 0) {
      writer.uint32(16).uint32(message.primarySpId);
    }
    writer.uint32(26).fork();
    for (const v of message.globalVirtualGroupIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.virtualPaymentAddress !== "") {
      writer.uint32(34).string(message.virtualPaymentAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GlobalVirtualGroupFamily {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGlobalVirtualGroupFamily();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.primarySpId = reader.uint32();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.globalVirtualGroupIds.push(reader.uint32());
            }
          } else {
            message.globalVirtualGroupIds.push(reader.uint32());
          }
          break;
        case 4:
          message.virtualPaymentAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GlobalVirtualGroupFamily {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      primarySpId: isSet(object.primarySpId) ? Number(object.primarySpId) : 0,
      globalVirtualGroupIds: Array.isArray(object?.globalVirtualGroupIds) ? object.globalVirtualGroupIds.map((e: any) => Number(e)) : [],
      virtualPaymentAddress: isSet(object.virtualPaymentAddress) ? String(object.virtualPaymentAddress) : ""
    };
  },
  toJSON(message: GlobalVirtualGroupFamily): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.primarySpId !== undefined && (obj.primarySpId = Math.round(message.primarySpId));
    if (message.globalVirtualGroupIds) {
      obj.globalVirtualGroupIds = message.globalVirtualGroupIds.map(e => Math.round(e));
    } else {
      obj.globalVirtualGroupIds = [];
    }
    message.virtualPaymentAddress !== undefined && (obj.virtualPaymentAddress = message.virtualPaymentAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GlobalVirtualGroupFamily>, I>>(object: I): GlobalVirtualGroupFamily {
    const message = createBaseGlobalVirtualGroupFamily();
    message.id = object.id ?? 0;
    message.primarySpId = object.primarySpId ?? 0;
    message.globalVirtualGroupIds = object.globalVirtualGroupIds?.map(e => e) || [];
    message.virtualPaymentAddress = object.virtualPaymentAddress ?? "";
    return message;
  },
  fromSDK(object: GlobalVirtualGroupFamilySDKType): GlobalVirtualGroupFamily {
    return {
      id: object?.id,
      primarySpId: object?.primary_sp_id,
      globalVirtualGroupIds: Array.isArray(object?.global_virtual_group_ids) ? object.global_virtual_group_ids.map((e: any) => e) : [],
      virtualPaymentAddress: object?.virtual_payment_address
    };
  },
  toSDK(message: GlobalVirtualGroupFamily): GlobalVirtualGroupFamilySDKType {
    const obj: any = {};
    obj.id = message.id;
    obj.primary_sp_id = message.primarySpId;
    if (message.globalVirtualGroupIds) {
      obj.global_virtual_group_ids = message.globalVirtualGroupIds.map(e => e);
    } else {
      obj.global_virtual_group_ids = [];
    }
    obj.virtual_payment_address = message.virtualPaymentAddress;
    return obj;
  },
  fromAmino(object: GlobalVirtualGroupFamilyAmino): GlobalVirtualGroupFamily {
    const message = createBaseGlobalVirtualGroupFamily();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.primary_sp_id !== undefined && object.primary_sp_id !== null) {
      message.primarySpId = object.primary_sp_id;
    }
    message.globalVirtualGroupIds = object.global_virtual_group_ids?.map(e => e) || [];
    if (object.virtual_payment_address !== undefined && object.virtual_payment_address !== null) {
      message.virtualPaymentAddress = object.virtual_payment_address;
    }
    return message;
  },
  toAmino(message: GlobalVirtualGroupFamily): GlobalVirtualGroupFamilyAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.primary_sp_id = message.primarySpId;
    if (message.globalVirtualGroupIds) {
      obj.global_virtual_group_ids = message.globalVirtualGroupIds.map(e => e);
    } else {
      obj.global_virtual_group_ids = [];
    }
    obj.virtual_payment_address = message.virtualPaymentAddress;
    return obj;
  },
  fromAminoMsg(object: GlobalVirtualGroupFamilyAminoMsg): GlobalVirtualGroupFamily {
    return GlobalVirtualGroupFamily.fromAmino(object.value);
  },
  fromProtoMsg(message: GlobalVirtualGroupFamilyProtoMsg): GlobalVirtualGroupFamily {
    return GlobalVirtualGroupFamily.decode(message.value);
  },
  toProto(message: GlobalVirtualGroupFamily): Uint8Array {
    return GlobalVirtualGroupFamily.encode(message).finish();
  },
  toProtoMsg(message: GlobalVirtualGroupFamily): GlobalVirtualGroupFamilyProtoMsg {
    return {
      typeUrl: "/greenfield.virtualgroup.GlobalVirtualGroupFamily",
      value: GlobalVirtualGroupFamily.encode(message).finish()
    };
  }
};
function createBaseGlobalVirtualGroupsBindingOnBucket(): GlobalVirtualGroupsBindingOnBucket {
  return {
    bucketId: "",
    globalVirtualGroupIds: [],
    localVirtualGroupIds: []
  };
}
export const GlobalVirtualGroupsBindingOnBucket = {
  typeUrl: "/greenfield.virtualgroup.GlobalVirtualGroupsBindingOnBucket",
  encode(message: GlobalVirtualGroupsBindingOnBucket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bucketId !== "") {
      writer.uint32(10).string(message.bucketId);
    }
    writer.uint32(18).fork();
    for (const v of message.globalVirtualGroupIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(26).fork();
    for (const v of message.localVirtualGroupIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GlobalVirtualGroupsBindingOnBucket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGlobalVirtualGroupsBindingOnBucket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bucketId = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.globalVirtualGroupIds.push(reader.uint32());
            }
          } else {
            message.globalVirtualGroupIds.push(reader.uint32());
          }
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.localVirtualGroupIds.push(reader.uint32());
            }
          } else {
            message.localVirtualGroupIds.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GlobalVirtualGroupsBindingOnBucket {
    return {
      bucketId: isSet(object.bucketId) ? String(object.bucketId) : "",
      globalVirtualGroupIds: Array.isArray(object?.globalVirtualGroupIds) ? object.globalVirtualGroupIds.map((e: any) => Number(e)) : [],
      localVirtualGroupIds: Array.isArray(object?.localVirtualGroupIds) ? object.localVirtualGroupIds.map((e: any) => Number(e)) : []
    };
  },
  toJSON(message: GlobalVirtualGroupsBindingOnBucket): unknown {
    const obj: any = {};
    message.bucketId !== undefined && (obj.bucketId = message.bucketId);
    if (message.globalVirtualGroupIds) {
      obj.globalVirtualGroupIds = message.globalVirtualGroupIds.map(e => Math.round(e));
    } else {
      obj.globalVirtualGroupIds = [];
    }
    if (message.localVirtualGroupIds) {
      obj.localVirtualGroupIds = message.localVirtualGroupIds.map(e => Math.round(e));
    } else {
      obj.localVirtualGroupIds = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GlobalVirtualGroupsBindingOnBucket>, I>>(object: I): GlobalVirtualGroupsBindingOnBucket {
    const message = createBaseGlobalVirtualGroupsBindingOnBucket();
    message.bucketId = object.bucketId ?? "";
    message.globalVirtualGroupIds = object.globalVirtualGroupIds?.map(e => e) || [];
    message.localVirtualGroupIds = object.localVirtualGroupIds?.map(e => e) || [];
    return message;
  },
  fromSDK(object: GlobalVirtualGroupsBindingOnBucketSDKType): GlobalVirtualGroupsBindingOnBucket {
    return {
      bucketId: object?.bucket_id,
      globalVirtualGroupIds: Array.isArray(object?.global_virtual_group_ids) ? object.global_virtual_group_ids.map((e: any) => e) : [],
      localVirtualGroupIds: Array.isArray(object?.local_virtual_group_ids) ? object.local_virtual_group_ids.map((e: any) => e) : []
    };
  },
  toSDK(message: GlobalVirtualGroupsBindingOnBucket): GlobalVirtualGroupsBindingOnBucketSDKType {
    const obj: any = {};
    obj.bucket_id = message.bucketId;
    if (message.globalVirtualGroupIds) {
      obj.global_virtual_group_ids = message.globalVirtualGroupIds.map(e => e);
    } else {
      obj.global_virtual_group_ids = [];
    }
    if (message.localVirtualGroupIds) {
      obj.local_virtual_group_ids = message.localVirtualGroupIds.map(e => e);
    } else {
      obj.local_virtual_group_ids = [];
    }
    return obj;
  },
  fromAmino(object: GlobalVirtualGroupsBindingOnBucketAmino): GlobalVirtualGroupsBindingOnBucket {
    const message = createBaseGlobalVirtualGroupsBindingOnBucket();
    if (object.bucket_id !== undefined && object.bucket_id !== null) {
      message.bucketId = object.bucket_id;
    }
    message.globalVirtualGroupIds = object.global_virtual_group_ids?.map(e => e) || [];
    message.localVirtualGroupIds = object.local_virtual_group_ids?.map(e => e) || [];
    return message;
  },
  toAmino(message: GlobalVirtualGroupsBindingOnBucket): GlobalVirtualGroupsBindingOnBucketAmino {
    const obj: any = {};
    obj.bucket_id = message.bucketId;
    if (message.globalVirtualGroupIds) {
      obj.global_virtual_group_ids = message.globalVirtualGroupIds.map(e => e);
    } else {
      obj.global_virtual_group_ids = [];
    }
    if (message.localVirtualGroupIds) {
      obj.local_virtual_group_ids = message.localVirtualGroupIds.map(e => e);
    } else {
      obj.local_virtual_group_ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: GlobalVirtualGroupsBindingOnBucketAminoMsg): GlobalVirtualGroupsBindingOnBucket {
    return GlobalVirtualGroupsBindingOnBucket.fromAmino(object.value);
  },
  fromProtoMsg(message: GlobalVirtualGroupsBindingOnBucketProtoMsg): GlobalVirtualGroupsBindingOnBucket {
    return GlobalVirtualGroupsBindingOnBucket.decode(message.value);
  },
  toProto(message: GlobalVirtualGroupsBindingOnBucket): Uint8Array {
    return GlobalVirtualGroupsBindingOnBucket.encode(message).finish();
  },
  toProtoMsg(message: GlobalVirtualGroupsBindingOnBucket): GlobalVirtualGroupsBindingOnBucketProtoMsg {
    return {
      typeUrl: "/greenfield.virtualgroup.GlobalVirtualGroupsBindingOnBucket",
      value: GlobalVirtualGroupsBindingOnBucket.encode(message).finish()
    };
  }
};
function createBaseGVGStatisticsWithinSP(): GVGStatisticsWithinSP {
  return {
    storageProviderId: 0,
    primaryCount: 0,
    secondaryCount: 0
  };
}
export const GVGStatisticsWithinSP = {
  typeUrl: "/greenfield.virtualgroup.GVGStatisticsWithinSP",
  encode(message: GVGStatisticsWithinSP, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storageProviderId !== 0) {
      writer.uint32(8).uint32(message.storageProviderId);
    }
    if (message.primaryCount !== 0) {
      writer.uint32(16).uint32(message.primaryCount);
    }
    if (message.secondaryCount !== 0) {
      writer.uint32(24).uint32(message.secondaryCount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GVGStatisticsWithinSP {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGVGStatisticsWithinSP();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storageProviderId = reader.uint32();
          break;
        case 2:
          message.primaryCount = reader.uint32();
          break;
        case 3:
          message.secondaryCount = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GVGStatisticsWithinSP {
    return {
      storageProviderId: isSet(object.storageProviderId) ? Number(object.storageProviderId) : 0,
      primaryCount: isSet(object.primaryCount) ? Number(object.primaryCount) : 0,
      secondaryCount: isSet(object.secondaryCount) ? Number(object.secondaryCount) : 0
    };
  },
  toJSON(message: GVGStatisticsWithinSP): unknown {
    const obj: any = {};
    message.storageProviderId !== undefined && (obj.storageProviderId = Math.round(message.storageProviderId));
    message.primaryCount !== undefined && (obj.primaryCount = Math.round(message.primaryCount));
    message.secondaryCount !== undefined && (obj.secondaryCount = Math.round(message.secondaryCount));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GVGStatisticsWithinSP>, I>>(object: I): GVGStatisticsWithinSP {
    const message = createBaseGVGStatisticsWithinSP();
    message.storageProviderId = object.storageProviderId ?? 0;
    message.primaryCount = object.primaryCount ?? 0;
    message.secondaryCount = object.secondaryCount ?? 0;
    return message;
  },
  fromSDK(object: GVGStatisticsWithinSPSDKType): GVGStatisticsWithinSP {
    return {
      storageProviderId: object?.storage_provider_id,
      primaryCount: object?.primary_count,
      secondaryCount: object?.secondary_count
    };
  },
  toSDK(message: GVGStatisticsWithinSP): GVGStatisticsWithinSPSDKType {
    const obj: any = {};
    obj.storage_provider_id = message.storageProviderId;
    obj.primary_count = message.primaryCount;
    obj.secondary_count = message.secondaryCount;
    return obj;
  },
  fromAmino(object: GVGStatisticsWithinSPAmino): GVGStatisticsWithinSP {
    const message = createBaseGVGStatisticsWithinSP();
    if (object.storage_provider_id !== undefined && object.storage_provider_id !== null) {
      message.storageProviderId = object.storage_provider_id;
    }
    if (object.primary_count !== undefined && object.primary_count !== null) {
      message.primaryCount = object.primary_count;
    }
    if (object.secondary_count !== undefined && object.secondary_count !== null) {
      message.secondaryCount = object.secondary_count;
    }
    return message;
  },
  toAmino(message: GVGStatisticsWithinSP): GVGStatisticsWithinSPAmino {
    const obj: any = {};
    obj.storage_provider_id = message.storageProviderId;
    obj.primary_count = message.primaryCount;
    obj.secondary_count = message.secondaryCount;
    return obj;
  },
  fromAminoMsg(object: GVGStatisticsWithinSPAminoMsg): GVGStatisticsWithinSP {
    return GVGStatisticsWithinSP.fromAmino(object.value);
  },
  fromProtoMsg(message: GVGStatisticsWithinSPProtoMsg): GVGStatisticsWithinSP {
    return GVGStatisticsWithinSP.decode(message.value);
  },
  toProto(message: GVGStatisticsWithinSP): Uint8Array {
    return GVGStatisticsWithinSP.encode(message).finish();
  },
  toProtoMsg(message: GVGStatisticsWithinSP): GVGStatisticsWithinSPProtoMsg {
    return {
      typeUrl: "/greenfield.virtualgroup.GVGStatisticsWithinSP",
      value: GVGStatisticsWithinSP.encode(message).finish()
    };
  }
};
function createBaseSwapOutInfo(): SwapOutInfo {
  return {
    spId: 0,
    successorSpId: 0
  };
}
export const SwapOutInfo = {
  typeUrl: "/greenfield.virtualgroup.SwapOutInfo",
  encode(message: SwapOutInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spId !== 0) {
      writer.uint32(8).uint32(message.spId);
    }
    if (message.successorSpId !== 0) {
      writer.uint32(16).uint32(message.successorSpId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SwapOutInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapOutInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spId = reader.uint32();
          break;
        case 2:
          message.successorSpId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SwapOutInfo {
    return {
      spId: isSet(object.spId) ? Number(object.spId) : 0,
      successorSpId: isSet(object.successorSpId) ? Number(object.successorSpId) : 0
    };
  },
  toJSON(message: SwapOutInfo): unknown {
    const obj: any = {};
    message.spId !== undefined && (obj.spId = Math.round(message.spId));
    message.successorSpId !== undefined && (obj.successorSpId = Math.round(message.successorSpId));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SwapOutInfo>, I>>(object: I): SwapOutInfo {
    const message = createBaseSwapOutInfo();
    message.spId = object.spId ?? 0;
    message.successorSpId = object.successorSpId ?? 0;
    return message;
  },
  fromSDK(object: SwapOutInfoSDKType): SwapOutInfo {
    return {
      spId: object?.sp_id,
      successorSpId: object?.successor_sp_id
    };
  },
  toSDK(message: SwapOutInfo): SwapOutInfoSDKType {
    const obj: any = {};
    obj.sp_id = message.spId;
    obj.successor_sp_id = message.successorSpId;
    return obj;
  },
  fromAmino(object: SwapOutInfoAmino): SwapOutInfo {
    const message = createBaseSwapOutInfo();
    if (object.sp_id !== undefined && object.sp_id !== null) {
      message.spId = object.sp_id;
    }
    if (object.successor_sp_id !== undefined && object.successor_sp_id !== null) {
      message.successorSpId = object.successor_sp_id;
    }
    return message;
  },
  toAmino(message: SwapOutInfo): SwapOutInfoAmino {
    const obj: any = {};
    obj.sp_id = message.spId;
    obj.successor_sp_id = message.successorSpId;
    return obj;
  },
  fromAminoMsg(object: SwapOutInfoAminoMsg): SwapOutInfo {
    return SwapOutInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: SwapOutInfoProtoMsg): SwapOutInfo {
    return SwapOutInfo.decode(message.value);
  },
  toProto(message: SwapOutInfo): Uint8Array {
    return SwapOutInfo.encode(message).finish();
  },
  toProtoMsg(message: SwapOutInfo): SwapOutInfoProtoMsg {
    return {
      typeUrl: "/greenfield.virtualgroup.SwapOutInfo",
      value: SwapOutInfo.encode(message).finish()
    };
  }
};