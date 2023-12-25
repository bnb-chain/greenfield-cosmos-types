//@ts-nocheck
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial, Exact } from "../../helpers";
export const protobufPackage = "greenfield.storage";
/**
 * SourceType represents the source of resource creation, which can
 * from Greenfield native or from a cross-chain transfer from BSC
 */
export enum SourceType {
  SOURCE_TYPE_ORIGIN = 0,
  SOURCE_TYPE_MIRROR_PENDING = 1,
  SOURCE_TYPE_BSC_CROSS_CHAIN = 2,
  SOURCE_TYPE_OP_CROSS_CHAIN = 3,
  UNRECOGNIZED = -1,
}
export const SourceTypeSDKType = SourceType;
export function sourceTypeFromJSON(object: any): SourceType {
  switch (object) {
    case 0:
    case "SOURCE_TYPE_ORIGIN":
      return SourceType.SOURCE_TYPE_ORIGIN;
    case 1:
    case "SOURCE_TYPE_MIRROR_PENDING":
      return SourceType.SOURCE_TYPE_MIRROR_PENDING;
    case 2:
    case "SOURCE_TYPE_BSC_CROSS_CHAIN":
      return SourceType.SOURCE_TYPE_BSC_CROSS_CHAIN;
    case 3:
    case "SOURCE_TYPE_OP_CROSS_CHAIN":
      return SourceType.SOURCE_TYPE_OP_CROSS_CHAIN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SourceType.UNRECOGNIZED;
  }
}
export function sourceTypeToJSON(object: SourceType): string {
  switch (object) {
    case SourceType.SOURCE_TYPE_ORIGIN:
      return "SOURCE_TYPE_ORIGIN";
    case SourceType.SOURCE_TYPE_MIRROR_PENDING:
      return "SOURCE_TYPE_MIRROR_PENDING";
    case SourceType.SOURCE_TYPE_BSC_CROSS_CHAIN:
      return "SOURCE_TYPE_BSC_CROSS_CHAIN";
    case SourceType.SOURCE_TYPE_OP_CROSS_CHAIN:
      return "SOURCE_TYPE_OP_CROSS_CHAIN";
    case SourceType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * BucketStatus represents the status of a bucket. After a user successfully
 * sends a CreateBucket transaction onto the chain, the status is set to 'Created'.
 * When a Discontinue Object transaction is received on chain, the status is set to 'Discontinued'.
 */
export enum BucketStatus {
  BUCKET_STATUS_CREATED = 0,
  BUCKET_STATUS_DISCONTINUED = 1,
  BUCKET_STATUS_MIGRATING = 2,
  UNRECOGNIZED = -1,
}
export const BucketStatusSDKType = BucketStatus;
export function bucketStatusFromJSON(object: any): BucketStatus {
  switch (object) {
    case 0:
    case "BUCKET_STATUS_CREATED":
      return BucketStatus.BUCKET_STATUS_CREATED;
    case 1:
    case "BUCKET_STATUS_DISCONTINUED":
      return BucketStatus.BUCKET_STATUS_DISCONTINUED;
    case 2:
    case "BUCKET_STATUS_MIGRATING":
      return BucketStatus.BUCKET_STATUS_MIGRATING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BucketStatus.UNRECOGNIZED;
  }
}
export function bucketStatusToJSON(object: BucketStatus): string {
  switch (object) {
    case BucketStatus.BUCKET_STATUS_CREATED:
      return "BUCKET_STATUS_CREATED";
    case BucketStatus.BUCKET_STATUS_DISCONTINUED:
      return "BUCKET_STATUS_DISCONTINUED";
    case BucketStatus.BUCKET_STATUS_MIGRATING:
      return "BUCKET_STATUS_MIGRATING";
    case BucketStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * RedundancyType represents the redundancy algorithm type for object data,
 * which can be either multi-replica or erasure coding.
 */
export enum RedundancyType {
  REDUNDANCY_EC_TYPE = 0,
  REDUNDANCY_REPLICA_TYPE = 1,
  UNRECOGNIZED = -1,
}
export const RedundancyTypeSDKType = RedundancyType;
export function redundancyTypeFromJSON(object: any): RedundancyType {
  switch (object) {
    case 0:
    case "REDUNDANCY_EC_TYPE":
      return RedundancyType.REDUNDANCY_EC_TYPE;
    case 1:
    case "REDUNDANCY_REPLICA_TYPE":
      return RedundancyType.REDUNDANCY_REPLICA_TYPE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RedundancyType.UNRECOGNIZED;
  }
}
export function redundancyTypeToJSON(object: RedundancyType): string {
  switch (object) {
    case RedundancyType.REDUNDANCY_EC_TYPE:
      return "REDUNDANCY_EC_TYPE";
    case RedundancyType.REDUNDANCY_REPLICA_TYPE:
      return "REDUNDANCY_REPLICA_TYPE";
    case RedundancyType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * ObjectStatus represents the creation status of an object. After a user successfully
 * sends a CreateObject transaction onto the chain, the status is set to 'Created'.
 * After the Primary Service Provider successfully sends a Seal Object transaction onto
 * the chain, the status is set to 'Sealed'. When a Discontinue Object transaction is
 * received on chain, the status is set to 'Discontinued'.
 */
export enum ObjectStatus {
  OBJECT_STATUS_CREATED = 0,
  OBJECT_STATUS_SEALED = 1,
  OBJECT_STATUS_DISCONTINUED = 2,
  UNRECOGNIZED = -1,
}
export const ObjectStatusSDKType = ObjectStatus;
export function objectStatusFromJSON(object: any): ObjectStatus {
  switch (object) {
    case 0:
    case "OBJECT_STATUS_CREATED":
      return ObjectStatus.OBJECT_STATUS_CREATED;
    case 1:
    case "OBJECT_STATUS_SEALED":
      return ObjectStatus.OBJECT_STATUS_SEALED;
    case 2:
    case "OBJECT_STATUS_DISCONTINUED":
      return ObjectStatus.OBJECT_STATUS_DISCONTINUED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ObjectStatus.UNRECOGNIZED;
  }
}
export function objectStatusToJSON(object: ObjectStatus): string {
  switch (object) {
    case ObjectStatus.OBJECT_STATUS_CREATED:
      return "OBJECT_STATUS_CREATED";
    case ObjectStatus.OBJECT_STATUS_SEALED:
      return "OBJECT_STATUS_SEALED";
    case ObjectStatus.OBJECT_STATUS_DISCONTINUED:
      return "OBJECT_STATUS_DISCONTINUED";
    case ObjectStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** VisibilityType is the resources public status. */
export enum VisibilityType {
  VISIBILITY_TYPE_UNSPECIFIED = 0,
  VISIBILITY_TYPE_PUBLIC_READ = 1,
  VISIBILITY_TYPE_PRIVATE = 2,
  /** VISIBILITY_TYPE_INHERIT - If the bucket Visibility is inherit, it's finally set to private. If the object Visibility is inherit, it's the same as bucket. */
  VISIBILITY_TYPE_INHERIT = 3,
  UNRECOGNIZED = -1,
}
export const VisibilityTypeSDKType = VisibilityType;
export function visibilityTypeFromJSON(object: any): VisibilityType {
  switch (object) {
    case 0:
    case "VISIBILITY_TYPE_UNSPECIFIED":
      return VisibilityType.VISIBILITY_TYPE_UNSPECIFIED;
    case 1:
    case "VISIBILITY_TYPE_PUBLIC_READ":
      return VisibilityType.VISIBILITY_TYPE_PUBLIC_READ;
    case 2:
    case "VISIBILITY_TYPE_PRIVATE":
      return VisibilityType.VISIBILITY_TYPE_PRIVATE;
    case 3:
    case "VISIBILITY_TYPE_INHERIT":
      return VisibilityType.VISIBILITY_TYPE_INHERIT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return VisibilityType.UNRECOGNIZED;
  }
}
export function visibilityTypeToJSON(object: VisibilityType): string {
  switch (object) {
    case VisibilityType.VISIBILITY_TYPE_UNSPECIFIED:
      return "VISIBILITY_TYPE_UNSPECIFIED";
    case VisibilityType.VISIBILITY_TYPE_PUBLIC_READ:
      return "VISIBILITY_TYPE_PUBLIC_READ";
    case VisibilityType.VISIBILITY_TYPE_PRIVATE:
      return "VISIBILITY_TYPE_PRIVATE";
    case VisibilityType.VISIBILITY_TYPE_INHERIT:
      return "VISIBILITY_TYPE_INHERIT";
    case VisibilityType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * SecondarySpSealObjectSignDoc used to generate seal signature of secondary SP
 * If the secondary SP only signs the checksum to declare the object pieces are saved,
 * it might be reused by the primary SP to fake it's declaration.
 * Then the primary SP can challenge and slash the secondary SP.
 * So the id of the object is needed to prevent this.
 */
export interface SecondarySpSealObjectSignDoc {
  chainId: string;
  globalVirtualGroupId: number;
  objectId: string;
  /** checksum is the sha256 hash of slice of integrity hash from secondary sps */
  checksum: Uint8Array;
}
export interface SecondarySpSealObjectSignDocProtoMsg {
  typeUrl: "/greenfield.storage.SecondarySpSealObjectSignDoc";
  value: Uint8Array;
}
/**
 * SecondarySpSealObjectSignDoc used to generate seal signature of secondary SP
 * If the secondary SP only signs the checksum to declare the object pieces are saved,
 * it might be reused by the primary SP to fake it's declaration.
 * Then the primary SP can challenge and slash the secondary SP.
 * So the id of the object is needed to prevent this.
 */
export interface SecondarySpSealObjectSignDocSDKType {
  chain_id: string;
  global_virtual_group_id: number;
  object_id: string;
  checksum: Uint8Array;
}
export interface GVGMapping {
  srcGlobalVirtualGroupId: number;
  dstGlobalVirtualGroupId: number;
  secondarySpBlsSignature: Uint8Array;
}
export interface GVGMappingProtoMsg {
  typeUrl: "/greenfield.storage.GVGMapping";
  value: Uint8Array;
}
export interface GVGMappingSDKType {
  src_global_virtual_group_id: number;
  dst_global_virtual_group_id: number;
  secondary_sp_bls_signature: Uint8Array;
}
export interface SecondarySpMigrationBucketSignDoc {
  chainId: string;
  dstPrimarySpId: number;
  srcGlobalVirtualGroupId: number;
  dstGlobalVirtualGroupId: number;
  bucketId: string;
}
export interface SecondarySpMigrationBucketSignDocProtoMsg {
  typeUrl: "/greenfield.storage.SecondarySpMigrationBucketSignDoc";
  value: Uint8Array;
}
export interface SecondarySpMigrationBucketSignDocSDKType {
  chain_id: string;
  dst_primary_sp_id: number;
  src_global_virtual_group_id: number;
  dst_global_virtual_group_id: number;
  bucket_id: string;
}
/**
 * Local virtual group(LVG) uniquely associated with a global virtual group.
 * Each bucket maintains a mapping from local virtual group to global virtual group
 * Each local virtual group is associated with a unique virtual payment account,
 * where all object fees are streamed to.
 */
export interface LocalVirtualGroup {
  /** id is the identifier of the local virtual group. */
  id: number;
  /** global_virtual_group_id is the identifier of the global virtual group. */
  globalVirtualGroupId: number;
  /** stored_size is the size of the stored data in the local virtual group. */
  storedSize: bigint;
  /**
   * total_charge_size is the total charged size of the objects in the LVG.
   * Notice that the minimum unit of charge is 128K
   */
  totalChargeSize: bigint;
}
export interface LocalVirtualGroupProtoMsg {
  typeUrl: "/greenfield.storage.LocalVirtualGroup";
  value: Uint8Array;
}
/**
 * Local virtual group(LVG) uniquely associated with a global virtual group.
 * Each bucket maintains a mapping from local virtual group to global virtual group
 * Each local virtual group is associated with a unique virtual payment account,
 * where all object fees are streamed to.
 */
export interface LocalVirtualGroupSDKType {
  id: number;
  global_virtual_group_id: number;
  stored_size: bigint;
  total_charge_size: bigint;
}
function createBaseSecondarySpSealObjectSignDoc(): SecondarySpSealObjectSignDoc {
  return {
    chainId: "",
    globalVirtualGroupId: 0,
    objectId: "",
    checksum: new Uint8Array()
  };
}
export const SecondarySpSealObjectSignDoc = {
  typeUrl: "/greenfield.storage.SecondarySpSealObjectSignDoc",
  encode(message: SecondarySpSealObjectSignDoc, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.globalVirtualGroupId !== 0) {
      writer.uint32(16).uint32(message.globalVirtualGroupId);
    }
    if (message.objectId !== "") {
      writer.uint32(26).string(message.objectId);
    }
    if (message.checksum.length !== 0) {
      writer.uint32(34).bytes(message.checksum);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SecondarySpSealObjectSignDoc {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSecondarySpSealObjectSignDoc();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.globalVirtualGroupId = reader.uint32();
          break;
        case 3:
          message.objectId = reader.string();
          break;
        case 4:
          message.checksum = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SecondarySpSealObjectSignDoc {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      globalVirtualGroupId: isSet(object.globalVirtualGroupId) ? Number(object.globalVirtualGroupId) : 0,
      objectId: isSet(object.objectId) ? String(object.objectId) : "",
      checksum: isSet(object.checksum) ? bytesFromBase64(object.checksum) : new Uint8Array()
    };
  },
  toJSON(message: SecondarySpSealObjectSignDoc): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.globalVirtualGroupId !== undefined && (obj.globalVirtualGroupId = Math.round(message.globalVirtualGroupId));
    message.objectId !== undefined && (obj.objectId = message.objectId);
    message.checksum !== undefined && (obj.checksum = base64FromBytes(message.checksum !== undefined ? message.checksum : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SecondarySpSealObjectSignDoc>, I>>(object: I): SecondarySpSealObjectSignDoc {
    const message = createBaseSecondarySpSealObjectSignDoc();
    message.chainId = object.chainId ?? "";
    message.globalVirtualGroupId = object.globalVirtualGroupId ?? 0;
    message.objectId = object.objectId ?? "";
    message.checksum = object.checksum ?? new Uint8Array();
    return message;
  },
  fromSDK(object: SecondarySpSealObjectSignDocSDKType): SecondarySpSealObjectSignDoc {
    return {
      chainId: object?.chain_id,
      globalVirtualGroupId: object?.global_virtual_group_id,
      objectId: object?.object_id,
      checksum: object?.checksum
    };
  },
  toSDK(message: SecondarySpSealObjectSignDoc): SecondarySpSealObjectSignDocSDKType {
    const obj: any = {};
    obj.chain_id = message.chainId;
    obj.global_virtual_group_id = message.globalVirtualGroupId;
    obj.object_id = message.objectId;
    obj.checksum = message.checksum;
    return obj;
  },
  fromAmino(object: SecondarySpSealObjectSignDocAmino): SecondarySpSealObjectSignDoc {
    const message = createBaseSecondarySpSealObjectSignDoc();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.global_virtual_group_id !== undefined && object.global_virtual_group_id !== null) {
      message.globalVirtualGroupId = object.global_virtual_group_id;
    }
    if (object.object_id !== undefined && object.object_id !== null) {
      message.objectId = object.object_id;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = bytesFromBase64(object.checksum);
    }
    return message;
  },
  toAmino(message: SecondarySpSealObjectSignDoc): SecondarySpSealObjectSignDocAmino {
    const obj: any = {};
    obj.chain_id = message.chainId;
    obj.global_virtual_group_id = message.globalVirtualGroupId;
    obj.object_id = message.objectId;
    obj.checksum = message.checksum ? base64FromBytes(message.checksum) : undefined;
    return obj;
  },
  fromAminoMsg(object: SecondarySpSealObjectSignDocAminoMsg): SecondarySpSealObjectSignDoc {
    return SecondarySpSealObjectSignDoc.fromAmino(object.value);
  },
  fromProtoMsg(message: SecondarySpSealObjectSignDocProtoMsg): SecondarySpSealObjectSignDoc {
    return SecondarySpSealObjectSignDoc.decode(message.value);
  },
  toProto(message: SecondarySpSealObjectSignDoc): Uint8Array {
    return SecondarySpSealObjectSignDoc.encode(message).finish();
  },
  toProtoMsg(message: SecondarySpSealObjectSignDoc): SecondarySpSealObjectSignDocProtoMsg {
    return {
      typeUrl: "/greenfield.storage.SecondarySpSealObjectSignDoc",
      value: SecondarySpSealObjectSignDoc.encode(message).finish()
    };
  }
};
function createBaseGVGMapping(): GVGMapping {
  return {
    srcGlobalVirtualGroupId: 0,
    dstGlobalVirtualGroupId: 0,
    secondarySpBlsSignature: new Uint8Array()
  };
}
export const GVGMapping = {
  typeUrl: "/greenfield.storage.GVGMapping",
  encode(message: GVGMapping, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.srcGlobalVirtualGroupId !== 0) {
      writer.uint32(8).uint32(message.srcGlobalVirtualGroupId);
    }
    if (message.dstGlobalVirtualGroupId !== 0) {
      writer.uint32(16).uint32(message.dstGlobalVirtualGroupId);
    }
    if (message.secondarySpBlsSignature.length !== 0) {
      writer.uint32(26).bytes(message.secondarySpBlsSignature);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GVGMapping {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGVGMapping();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.srcGlobalVirtualGroupId = reader.uint32();
          break;
        case 2:
          message.dstGlobalVirtualGroupId = reader.uint32();
          break;
        case 3:
          message.secondarySpBlsSignature = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GVGMapping {
    return {
      srcGlobalVirtualGroupId: isSet(object.srcGlobalVirtualGroupId) ? Number(object.srcGlobalVirtualGroupId) : 0,
      dstGlobalVirtualGroupId: isSet(object.dstGlobalVirtualGroupId) ? Number(object.dstGlobalVirtualGroupId) : 0,
      secondarySpBlsSignature: isSet(object.secondarySpBlsSignature) ? bytesFromBase64(object.secondarySpBlsSignature) : new Uint8Array()
    };
  },
  toJSON(message: GVGMapping): unknown {
    const obj: any = {};
    message.srcGlobalVirtualGroupId !== undefined && (obj.srcGlobalVirtualGroupId = Math.round(message.srcGlobalVirtualGroupId));
    message.dstGlobalVirtualGroupId !== undefined && (obj.dstGlobalVirtualGroupId = Math.round(message.dstGlobalVirtualGroupId));
    message.secondarySpBlsSignature !== undefined && (obj.secondarySpBlsSignature = base64FromBytes(message.secondarySpBlsSignature !== undefined ? message.secondarySpBlsSignature : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GVGMapping>, I>>(object: I): GVGMapping {
    const message = createBaseGVGMapping();
    message.srcGlobalVirtualGroupId = object.srcGlobalVirtualGroupId ?? 0;
    message.dstGlobalVirtualGroupId = object.dstGlobalVirtualGroupId ?? 0;
    message.secondarySpBlsSignature = object.secondarySpBlsSignature ?? new Uint8Array();
    return message;
  },
  fromSDK(object: GVGMappingSDKType): GVGMapping {
    return {
      srcGlobalVirtualGroupId: object?.src_global_virtual_group_id,
      dstGlobalVirtualGroupId: object?.dst_global_virtual_group_id,
      secondarySpBlsSignature: object?.secondary_sp_bls_signature
    };
  },
  toSDK(message: GVGMapping): GVGMappingSDKType {
    const obj: any = {};
    obj.src_global_virtual_group_id = message.srcGlobalVirtualGroupId;
    obj.dst_global_virtual_group_id = message.dstGlobalVirtualGroupId;
    obj.secondary_sp_bls_signature = message.secondarySpBlsSignature;
    return obj;
  },
  fromAmino(object: GVGMappingAmino): GVGMapping {
    const message = createBaseGVGMapping();
    if (object.src_global_virtual_group_id !== undefined && object.src_global_virtual_group_id !== null) {
      message.srcGlobalVirtualGroupId = object.src_global_virtual_group_id;
    }
    if (object.dst_global_virtual_group_id !== undefined && object.dst_global_virtual_group_id !== null) {
      message.dstGlobalVirtualGroupId = object.dst_global_virtual_group_id;
    }
    if (object.secondary_sp_bls_signature !== undefined && object.secondary_sp_bls_signature !== null) {
      message.secondarySpBlsSignature = bytesFromBase64(object.secondary_sp_bls_signature);
    }
    return message;
  },
  toAmino(message: GVGMapping): GVGMappingAmino {
    const obj: any = {};
    obj.src_global_virtual_group_id = message.srcGlobalVirtualGroupId;
    obj.dst_global_virtual_group_id = message.dstGlobalVirtualGroupId;
    obj.secondary_sp_bls_signature = message.secondarySpBlsSignature ? base64FromBytes(message.secondarySpBlsSignature) : undefined;
    return obj;
  },
  fromAminoMsg(object: GVGMappingAminoMsg): GVGMapping {
    return GVGMapping.fromAmino(object.value);
  },
  fromProtoMsg(message: GVGMappingProtoMsg): GVGMapping {
    return GVGMapping.decode(message.value);
  },
  toProto(message: GVGMapping): Uint8Array {
    return GVGMapping.encode(message).finish();
  },
  toProtoMsg(message: GVGMapping): GVGMappingProtoMsg {
    return {
      typeUrl: "/greenfield.storage.GVGMapping",
      value: GVGMapping.encode(message).finish()
    };
  }
};
function createBaseSecondarySpMigrationBucketSignDoc(): SecondarySpMigrationBucketSignDoc {
  return {
    chainId: "",
    dstPrimarySpId: 0,
    srcGlobalVirtualGroupId: 0,
    dstGlobalVirtualGroupId: 0,
    bucketId: ""
  };
}
export const SecondarySpMigrationBucketSignDoc = {
  typeUrl: "/greenfield.storage.SecondarySpMigrationBucketSignDoc",
  encode(message: SecondarySpMigrationBucketSignDoc, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.dstPrimarySpId !== 0) {
      writer.uint32(16).uint32(message.dstPrimarySpId);
    }
    if (message.srcGlobalVirtualGroupId !== 0) {
      writer.uint32(24).uint32(message.srcGlobalVirtualGroupId);
    }
    if (message.dstGlobalVirtualGroupId !== 0) {
      writer.uint32(32).uint32(message.dstGlobalVirtualGroupId);
    }
    if (message.bucketId !== "") {
      writer.uint32(42).string(message.bucketId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SecondarySpMigrationBucketSignDoc {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSecondarySpMigrationBucketSignDoc();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.dstPrimarySpId = reader.uint32();
          break;
        case 3:
          message.srcGlobalVirtualGroupId = reader.uint32();
          break;
        case 4:
          message.dstGlobalVirtualGroupId = reader.uint32();
          break;
        case 5:
          message.bucketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SecondarySpMigrationBucketSignDoc {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      dstPrimarySpId: isSet(object.dstPrimarySpId) ? Number(object.dstPrimarySpId) : 0,
      srcGlobalVirtualGroupId: isSet(object.srcGlobalVirtualGroupId) ? Number(object.srcGlobalVirtualGroupId) : 0,
      dstGlobalVirtualGroupId: isSet(object.dstGlobalVirtualGroupId) ? Number(object.dstGlobalVirtualGroupId) : 0,
      bucketId: isSet(object.bucketId) ? String(object.bucketId) : ""
    };
  },
  toJSON(message: SecondarySpMigrationBucketSignDoc): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.dstPrimarySpId !== undefined && (obj.dstPrimarySpId = Math.round(message.dstPrimarySpId));
    message.srcGlobalVirtualGroupId !== undefined && (obj.srcGlobalVirtualGroupId = Math.round(message.srcGlobalVirtualGroupId));
    message.dstGlobalVirtualGroupId !== undefined && (obj.dstGlobalVirtualGroupId = Math.round(message.dstGlobalVirtualGroupId));
    message.bucketId !== undefined && (obj.bucketId = message.bucketId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SecondarySpMigrationBucketSignDoc>, I>>(object: I): SecondarySpMigrationBucketSignDoc {
    const message = createBaseSecondarySpMigrationBucketSignDoc();
    message.chainId = object.chainId ?? "";
    message.dstPrimarySpId = object.dstPrimarySpId ?? 0;
    message.srcGlobalVirtualGroupId = object.srcGlobalVirtualGroupId ?? 0;
    message.dstGlobalVirtualGroupId = object.dstGlobalVirtualGroupId ?? 0;
    message.bucketId = object.bucketId ?? "";
    return message;
  },
  fromSDK(object: SecondarySpMigrationBucketSignDocSDKType): SecondarySpMigrationBucketSignDoc {
    return {
      chainId: object?.chain_id,
      dstPrimarySpId: object?.dst_primary_sp_id,
      srcGlobalVirtualGroupId: object?.src_global_virtual_group_id,
      dstGlobalVirtualGroupId: object?.dst_global_virtual_group_id,
      bucketId: object?.bucket_id
    };
  },
  toSDK(message: SecondarySpMigrationBucketSignDoc): SecondarySpMigrationBucketSignDocSDKType {
    const obj: any = {};
    obj.chain_id = message.chainId;
    obj.dst_primary_sp_id = message.dstPrimarySpId;
    obj.src_global_virtual_group_id = message.srcGlobalVirtualGroupId;
    obj.dst_global_virtual_group_id = message.dstGlobalVirtualGroupId;
    obj.bucket_id = message.bucketId;
    return obj;
  },
  fromAmino(object: SecondarySpMigrationBucketSignDocAmino): SecondarySpMigrationBucketSignDoc {
    const message = createBaseSecondarySpMigrationBucketSignDoc();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.dst_primary_sp_id !== undefined && object.dst_primary_sp_id !== null) {
      message.dstPrimarySpId = object.dst_primary_sp_id;
    }
    if (object.src_global_virtual_group_id !== undefined && object.src_global_virtual_group_id !== null) {
      message.srcGlobalVirtualGroupId = object.src_global_virtual_group_id;
    }
    if (object.dst_global_virtual_group_id !== undefined && object.dst_global_virtual_group_id !== null) {
      message.dstGlobalVirtualGroupId = object.dst_global_virtual_group_id;
    }
    if (object.bucket_id !== undefined && object.bucket_id !== null) {
      message.bucketId = object.bucket_id;
    }
    return message;
  },
  toAmino(message: SecondarySpMigrationBucketSignDoc): SecondarySpMigrationBucketSignDocAmino {
    const obj: any = {};
    obj.chain_id = message.chainId;
    obj.dst_primary_sp_id = message.dstPrimarySpId;
    obj.src_global_virtual_group_id = message.srcGlobalVirtualGroupId;
    obj.dst_global_virtual_group_id = message.dstGlobalVirtualGroupId;
    obj.bucket_id = message.bucketId;
    return obj;
  },
  fromAminoMsg(object: SecondarySpMigrationBucketSignDocAminoMsg): SecondarySpMigrationBucketSignDoc {
    return SecondarySpMigrationBucketSignDoc.fromAmino(object.value);
  },
  fromProtoMsg(message: SecondarySpMigrationBucketSignDocProtoMsg): SecondarySpMigrationBucketSignDoc {
    return SecondarySpMigrationBucketSignDoc.decode(message.value);
  },
  toProto(message: SecondarySpMigrationBucketSignDoc): Uint8Array {
    return SecondarySpMigrationBucketSignDoc.encode(message).finish();
  },
  toProtoMsg(message: SecondarySpMigrationBucketSignDoc): SecondarySpMigrationBucketSignDocProtoMsg {
    return {
      typeUrl: "/greenfield.storage.SecondarySpMigrationBucketSignDoc",
      value: SecondarySpMigrationBucketSignDoc.encode(message).finish()
    };
  }
};
function createBaseLocalVirtualGroup(): LocalVirtualGroup {
  return {
    id: 0,
    globalVirtualGroupId: 0,
    storedSize: BigInt(0),
    totalChargeSize: BigInt(0)
  };
}
export const LocalVirtualGroup = {
  typeUrl: "/greenfield.storage.LocalVirtualGroup",
  encode(message: LocalVirtualGroup, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.globalVirtualGroupId !== 0) {
      writer.uint32(16).uint32(message.globalVirtualGroupId);
    }
    if (message.storedSize !== BigInt(0)) {
      writer.uint32(24).uint64(message.storedSize);
    }
    if (message.totalChargeSize !== BigInt(0)) {
      writer.uint32(32).uint64(message.totalChargeSize);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LocalVirtualGroup {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLocalVirtualGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.globalVirtualGroupId = reader.uint32();
          break;
        case 3:
          message.storedSize = reader.uint64();
          break;
        case 4:
          message.totalChargeSize = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LocalVirtualGroup {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      globalVirtualGroupId: isSet(object.globalVirtualGroupId) ? Number(object.globalVirtualGroupId) : 0,
      storedSize: isSet(object.storedSize) ? BigInt(object.storedSize.toString()) : BigInt(0),
      totalChargeSize: isSet(object.totalChargeSize) ? BigInt(object.totalChargeSize.toString()) : BigInt(0)
    };
  },
  toJSON(message: LocalVirtualGroup): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.globalVirtualGroupId !== undefined && (obj.globalVirtualGroupId = Math.round(message.globalVirtualGroupId));
    message.storedSize !== undefined && (obj.storedSize = (message.storedSize || BigInt(0)).toString());
    message.totalChargeSize !== undefined && (obj.totalChargeSize = (message.totalChargeSize || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<LocalVirtualGroup>, I>>(object: I): LocalVirtualGroup {
    const message = createBaseLocalVirtualGroup();
    message.id = object.id ?? 0;
    message.globalVirtualGroupId = object.globalVirtualGroupId ?? 0;
    message.storedSize = object.storedSize !== undefined && object.storedSize !== null ? BigInt(object.storedSize.toString()) : BigInt(0);
    message.totalChargeSize = object.totalChargeSize !== undefined && object.totalChargeSize !== null ? BigInt(object.totalChargeSize.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: LocalVirtualGroupSDKType): LocalVirtualGroup {
    return {
      id: object?.id,
      globalVirtualGroupId: object?.global_virtual_group_id,
      storedSize: object?.stored_size,
      totalChargeSize: object?.total_charge_size
    };
  },
  toSDK(message: LocalVirtualGroup): LocalVirtualGroupSDKType {
    const obj: any = {};
    obj.id = message.id;
    obj.global_virtual_group_id = message.globalVirtualGroupId;
    obj.stored_size = message.storedSize;
    obj.total_charge_size = message.totalChargeSize;
    return obj;
  },
  fromAmino(object: LocalVirtualGroupAmino): LocalVirtualGroup {
    const message = createBaseLocalVirtualGroup();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.global_virtual_group_id !== undefined && object.global_virtual_group_id !== null) {
      message.globalVirtualGroupId = object.global_virtual_group_id;
    }
    if (object.stored_size !== undefined && object.stored_size !== null) {
      message.storedSize = BigInt(object.stored_size);
    }
    if (object.total_charge_size !== undefined && object.total_charge_size !== null) {
      message.totalChargeSize = BigInt(object.total_charge_size);
    }
    return message;
  },
  toAmino(message: LocalVirtualGroup): LocalVirtualGroupAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.global_virtual_group_id = message.globalVirtualGroupId;
    obj.stored_size = message.storedSize ? message.storedSize.toString() : undefined;
    obj.total_charge_size = message.totalChargeSize ? message.totalChargeSize.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: LocalVirtualGroupAminoMsg): LocalVirtualGroup {
    return LocalVirtualGroup.fromAmino(object.value);
  },
  fromProtoMsg(message: LocalVirtualGroupProtoMsg): LocalVirtualGroup {
    return LocalVirtualGroup.decode(message.value);
  },
  toProto(message: LocalVirtualGroup): Uint8Array {
    return LocalVirtualGroup.encode(message).finish();
  },
  toProtoMsg(message: LocalVirtualGroup): LocalVirtualGroupProtoMsg {
    return {
      typeUrl: "/greenfield.storage.LocalVirtualGroup",
      value: LocalVirtualGroup.encode(message).finish()
    };
  }
};