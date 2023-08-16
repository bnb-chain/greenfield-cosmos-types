//@ts-nocheck
/* eslint-disable */
import { VisibilityType, SourceType, BucketStatus, LocalVirtualGroup, LocalVirtualGroupSDKType, ObjectStatus, RedundancyType, visibilityTypeFromJSON, sourceTypeFromJSON, bucketStatusFromJSON, visibilityTypeToJSON, sourceTypeToJSON, bucketStatusToJSON, objectStatusFromJSON, redundancyTypeFromJSON, objectStatusToJSON, redundancyTypeToJSON } from "./common";
import { Long, isSet, DeepPartial, Exact, bytesFromBase64, base64FromBytes } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "greenfield.storage";
export interface BucketInfo {
  /** owner is the account address of bucket creator, it is also the bucket owner. */
  owner: string;
  /** bucket_name is a globally unique name of bucket */
  bucketName: string;
  /** visibility defines the highest permissions for bucket. When a bucket is public, everyone can get storage objects in it. */
  visibility: VisibilityType;
  /** id is the unique identification for bucket. */
  id: string;
  /** source_type defines which chain the user should send the bucket management transactions to */
  sourceType: SourceType;
  /** create_at define the block timestamp when the bucket created. */
  createAt: Long;
  /** payment_address is the address of the payment account */
  paymentAddress: string;
  /** global_virtual_group_family_id defines the unique id of gvg family */
  globalVirtualGroupFamilyId: number;
  /**
   * charged_read_quota defines the traffic quota for read in bytes per month.
   * The available read data for each user is the sum of the free read data provided by SP and
   * the ChargeReadQuota specified here.
   */
  chargedReadQuota: Long;
  /** bucket_status define the status of the bucket. */
  bucketStatus: BucketStatus;
}
export interface BucketInfoSDKType {
  owner: string;
  bucket_name: string;
  visibility: VisibilityType;
  id: string;
  source_type: SourceType;
  create_at: Long;
  payment_address: string;
  global_virtual_group_family_id: number;
  charged_read_quota: Long;
  bucket_status: BucketStatus;
}
export interface InternalBucketInfo {
  /** the time of the payment price, used to calculate the charge rate of the bucket */
  priceTime: Long;
  /** the total size of the objects in the bucket, used to calculate the charge rate of the bucket */
  totalChargeSize: Long;
  /** local_virtual_groups contains all the lvg of this bucket. */
  localVirtualGroups: LocalVirtualGroup[];
  /** next_local_virtual_group_id store the next id used by local virtual group */
  nextLocalVirtualGroupId: number;
}
export interface InternalBucketInfoSDKType {
  price_time: Long;
  total_charge_size: Long;
  local_virtual_groups: LocalVirtualGroupSDKType[];
  next_local_virtual_group_id: number;
}
export interface ObjectInfo {
  /** owner is the object owner */
  owner: string;
  /** creator is the address of the uploader, it always be same as owner address */
  creator: string;
  /** bucket_name is the name of the bucket */
  bucketName: string;
  /** object_name is the name of object */
  objectName: string;
  /** id is the unique identifier of object */
  id: string;
  localVirtualGroupId: number;
  /** payloadSize is the total size of the object payload */
  payloadSize: Long;
  /** visibility defines the highest permissions for object. When an object is public, everyone can access it. */
  visibility: VisibilityType;
  /** content_type define the format of the object which should be a standard MIME type. */
  contentType: string;
  /** create_at define the block timestamp when the object is created */
  createAt: Long;
  /** object_status define the upload status of the object. */
  objectStatus: ObjectStatus;
  /** redundancy_type define the type of the redundancy which can be multi-replication or EC. */
  redundancyType: RedundancyType;
  /** source_type define the source of the object. */
  sourceType: SourceType;
  /**
   * checksums define the root hash of the pieces which stored in a SP.
   * add omit tag to omit the field when converting to NFT metadata
   */
  checksums: Uint8Array[];
}
export interface ObjectInfoSDKType {
  owner: string;
  creator: string;
  bucket_name: string;
  object_name: string;
  id: string;
  local_virtual_group_id: number;
  payload_size: Long;
  visibility: VisibilityType;
  content_type: string;
  create_at: Long;
  object_status: ObjectStatus;
  redundancy_type: RedundancyType;
  source_type: SourceType;
  checksums: Uint8Array[];
}
export interface GroupInfo {
  /** owner is the owner of the group. It can not changed once it created. */
  owner: string;
  /** group_name is the name of group which is unique under an account. */
  groupName: string;
  /** source_type */
  sourceType: SourceType;
  /** id is the unique identifier of group */
  id: string;
  /** extra is used to store extra info for the group */
  extra: string;
}
export interface GroupInfoSDKType {
  owner: string;
  group_name: string;
  source_type: SourceType;
  id: string;
  extra: string;
}
export interface Trait {
  traitType: string;
  value: string;
}
export interface TraitSDKType {
  trait_type: string;
  value: string;
}
export interface BucketMetaData {
  /** description */
  description: string;
  /** externalUrl a link to external site to view NFT */
  externalUrl: string;
  /** name of bucket NFT */
  bucketName: string;
  /** image is the link to image */
  image: string;
  /** attributes */
  attributes: Trait[];
}
export interface BucketMetaDataSDKType {
  description: string;
  external_url: string;
  bucket_name: string;
  image: string;
  attributes: TraitSDKType[];
}
export interface ObjectMetaData {
  /** description */
  description: string;
  /** externalUrl a link to external site to view NFT */
  externalUrl: string;
  /** name of object NFT */
  objectName: string;
  /** image is the link to image */
  image: string;
  /** attributes */
  attributes: Trait[];
}
export interface ObjectMetaDataSDKType {
  description: string;
  external_url: string;
  object_name: string;
  image: string;
  attributes: TraitSDKType[];
}
export interface GroupMetaData {
  /** description */
  description: string;
  /** externalUrl a link to external site to view NFT */
  externalUrl: string;
  /** name of group NFT */
  groupName: string;
  /** image is the link to image */
  image: string;
  /** attributes */
  attributes: Trait[];
}
export interface GroupMetaDataSDKType {
  description: string;
  external_url: string;
  group_name: string;
  image: string;
  attributes: TraitSDKType[];
}
export interface Ids {
  /** ids of the objects or buckets */
  id: string[];
}
export interface IdsSDKType {
  id: string[];
}
export interface DeleteInfo {
  bucketIds: Ids;
  objectIds: Ids;
  groupIds: Ids;
}
export interface DeleteInfoSDKType {
  bucket_ids: IdsSDKType;
  object_ids: IdsSDKType;
  group_ids: IdsSDKType;
}
export interface MigrationBucketInfo {
  srcSpId: number;
  srcGlobalVirtualGroupFamilyId: number;
  dstSpId: number;
  /** id is the unique identifier of bucket */
  bucketId: string;
}
export interface MigrationBucketInfoSDKType {
  src_sp_id: number;
  src_global_virtual_group_family_id: number;
  dst_sp_id: number;
  bucket_id: string;
}
function createBaseBucketInfo(): BucketInfo {
  return {
    owner: "",
    bucketName: "",
    visibility: 0,
    id: "",
    sourceType: 0,
    createAt: Long.ZERO,
    paymentAddress: "",
    globalVirtualGroupFamilyId: 0,
    chargedReadQuota: Long.UZERO,
    bucketStatus: 0
  };
}
export const BucketInfo = {
  encode(message: BucketInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }
    if (message.visibility !== 0) {
      writer.uint32(24).int32(message.visibility);
    }
    if (message.id !== "") {
      writer.uint32(34).string(message.id);
    }
    if (message.sourceType !== 0) {
      writer.uint32(40).int32(message.sourceType);
    }
    if (!message.createAt.isZero()) {
      writer.uint32(48).int64(message.createAt);
    }
    if (message.paymentAddress !== "") {
      writer.uint32(58).string(message.paymentAddress);
    }
    if (message.globalVirtualGroupFamilyId !== 0) {
      writer.uint32(64).uint32(message.globalVirtualGroupFamilyId);
    }
    if (!message.chargedReadQuota.isZero()) {
      writer.uint32(72).uint64(message.chargedReadQuota);
    }
    if (message.bucketStatus !== 0) {
      writer.uint32(80).int32(message.bucketStatus);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BucketInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBucketInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.bucketName = reader.string();
          break;
        case 3:
          message.visibility = (reader.int32() as any);
          break;
        case 4:
          message.id = reader.string();
          break;
        case 5:
          message.sourceType = (reader.int32() as any);
          break;
        case 6:
          message.createAt = (reader.int64() as Long);
          break;
        case 7:
          message.paymentAddress = reader.string();
          break;
        case 8:
          message.globalVirtualGroupFamilyId = reader.uint32();
          break;
        case 9:
          message.chargedReadQuota = (reader.uint64() as Long);
          break;
        case 10:
          message.bucketStatus = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BucketInfo {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      visibility: isSet(object.visibility) ? visibilityTypeFromJSON(object.visibility) : -1,
      id: isSet(object.id) ? String(object.id) : "",
      sourceType: isSet(object.sourceType) ? sourceTypeFromJSON(object.sourceType) : -1,
      createAt: isSet(object.createAt) ? Long.fromValue(object.createAt) : Long.ZERO,
      paymentAddress: isSet(object.paymentAddress) ? String(object.paymentAddress) : "",
      globalVirtualGroupFamilyId: isSet(object.globalVirtualGroupFamilyId) ? Number(object.globalVirtualGroupFamilyId) : 0,
      chargedReadQuota: isSet(object.chargedReadQuota) ? Long.fromValue(object.chargedReadQuota) : Long.UZERO,
      bucketStatus: isSet(object.bucketStatus) ? bucketStatusFromJSON(object.bucketStatus) : -1
    };
  },
  toJSON(message: BucketInfo): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.visibility !== undefined && (obj.visibility = visibilityTypeToJSON(message.visibility));
    message.id !== undefined && (obj.id = message.id);
    message.sourceType !== undefined && (obj.sourceType = sourceTypeToJSON(message.sourceType));
    message.createAt !== undefined && (obj.createAt = (message.createAt || Long.ZERO).toString());
    message.paymentAddress !== undefined && (obj.paymentAddress = message.paymentAddress);
    message.globalVirtualGroupFamilyId !== undefined && (obj.globalVirtualGroupFamilyId = Math.round(message.globalVirtualGroupFamilyId));
    message.chargedReadQuota !== undefined && (obj.chargedReadQuota = (message.chargedReadQuota || Long.UZERO).toString());
    message.bucketStatus !== undefined && (obj.bucketStatus = bucketStatusToJSON(message.bucketStatus));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<BucketInfo>, I>>(object: I): BucketInfo {
    const message = createBaseBucketInfo();
    message.owner = object.owner ?? "";
    message.bucketName = object.bucketName ?? "";
    message.visibility = object.visibility ?? 0;
    message.id = object.id ?? "";
    message.sourceType = object.sourceType ?? 0;
    message.createAt = object.createAt !== undefined && object.createAt !== null ? Long.fromValue(object.createAt) : Long.ZERO;
    message.paymentAddress = object.paymentAddress ?? "";
    message.globalVirtualGroupFamilyId = object.globalVirtualGroupFamilyId ?? 0;
    message.chargedReadQuota = object.chargedReadQuota !== undefined && object.chargedReadQuota !== null ? Long.fromValue(object.chargedReadQuota) : Long.UZERO;
    message.bucketStatus = object.bucketStatus ?? 0;
    return message;
  },
  fromSDK(object: BucketInfoSDKType): BucketInfo {
    return {
      owner: object?.owner,
      bucketName: object?.bucket_name,
      visibility: isSet(object.visibility) ? visibilityTypeFromJSON(object.visibility) : -1,
      id: object?.id,
      sourceType: isSet(object.source_type) ? sourceTypeFromJSON(object.source_type) : -1,
      createAt: object?.create_at,
      paymentAddress: object?.payment_address,
      globalVirtualGroupFamilyId: object?.global_virtual_group_family_id,
      chargedReadQuota: object?.charged_read_quota,
      bucketStatus: isSet(object.bucket_status) ? bucketStatusFromJSON(object.bucket_status) : -1
    };
  },
  toSDK(message: BucketInfo): BucketInfoSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.bucket_name = message.bucketName;
    message.visibility !== undefined && (obj.visibility = visibilityTypeToJSON(message.visibility));
    obj.id = message.id;
    message.sourceType !== undefined && (obj.source_type = sourceTypeToJSON(message.sourceType));
    obj.create_at = message.createAt;
    obj.payment_address = message.paymentAddress;
    obj.global_virtual_group_family_id = message.globalVirtualGroupFamilyId;
    obj.charged_read_quota = message.chargedReadQuota;
    message.bucketStatus !== undefined && (obj.bucket_status = bucketStatusToJSON(message.bucketStatus));
    return obj;
  }
};
function createBaseInternalBucketInfo(): InternalBucketInfo {
  return {
    priceTime: Long.ZERO,
    totalChargeSize: Long.UZERO,
    localVirtualGroups: [],
    nextLocalVirtualGroupId: 0
  };
}
export const InternalBucketInfo = {
  encode(message: InternalBucketInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.priceTime.isZero()) {
      writer.uint32(8).int64(message.priceTime);
    }
    if (!message.totalChargeSize.isZero()) {
      writer.uint32(16).uint64(message.totalChargeSize);
    }
    for (const v of message.localVirtualGroups) {
      LocalVirtualGroup.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.nextLocalVirtualGroupId !== 0) {
      writer.uint32(32).uint32(message.nextLocalVirtualGroupId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): InternalBucketInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInternalBucketInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.priceTime = (reader.int64() as Long);
          break;
        case 2:
          message.totalChargeSize = (reader.uint64() as Long);
          break;
        case 3:
          message.localVirtualGroups.push(LocalVirtualGroup.decode(reader, reader.uint32()));
          break;
        case 4:
          message.nextLocalVirtualGroupId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): InternalBucketInfo {
    return {
      priceTime: isSet(object.priceTime) ? Long.fromValue(object.priceTime) : Long.ZERO,
      totalChargeSize: isSet(object.totalChargeSize) ? Long.fromValue(object.totalChargeSize) : Long.UZERO,
      localVirtualGroups: Array.isArray(object?.localVirtualGroups) ? object.localVirtualGroups.map((e: any) => LocalVirtualGroup.fromJSON(e)) : [],
      nextLocalVirtualGroupId: isSet(object.nextLocalVirtualGroupId) ? Number(object.nextLocalVirtualGroupId) : 0
    };
  },
  toJSON(message: InternalBucketInfo): unknown {
    const obj: any = {};
    message.priceTime !== undefined && (obj.priceTime = (message.priceTime || Long.ZERO).toString());
    message.totalChargeSize !== undefined && (obj.totalChargeSize = (message.totalChargeSize || Long.UZERO).toString());
    if (message.localVirtualGroups) {
      obj.localVirtualGroups = message.localVirtualGroups.map(e => e ? LocalVirtualGroup.toJSON(e) : undefined);
    } else {
      obj.localVirtualGroups = [];
    }
    message.nextLocalVirtualGroupId !== undefined && (obj.nextLocalVirtualGroupId = Math.round(message.nextLocalVirtualGroupId));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<InternalBucketInfo>, I>>(object: I): InternalBucketInfo {
    const message = createBaseInternalBucketInfo();
    message.priceTime = object.priceTime !== undefined && object.priceTime !== null ? Long.fromValue(object.priceTime) : Long.ZERO;
    message.totalChargeSize = object.totalChargeSize !== undefined && object.totalChargeSize !== null ? Long.fromValue(object.totalChargeSize) : Long.UZERO;
    message.localVirtualGroups = object.localVirtualGroups?.map(e => LocalVirtualGroup.fromPartial(e)) || [];
    message.nextLocalVirtualGroupId = object.nextLocalVirtualGroupId ?? 0;
    return message;
  },
  fromSDK(object: InternalBucketInfoSDKType): InternalBucketInfo {
    return {
      priceTime: object?.price_time,
      totalChargeSize: object?.total_charge_size,
      localVirtualGroups: Array.isArray(object?.local_virtual_groups) ? object.local_virtual_groups.map((e: any) => LocalVirtualGroup.fromSDK(e)) : [],
      nextLocalVirtualGroupId: object?.next_local_virtual_group_id
    };
  },
  toSDK(message: InternalBucketInfo): InternalBucketInfoSDKType {
    const obj: any = {};
    obj.price_time = message.priceTime;
    obj.total_charge_size = message.totalChargeSize;
    if (message.localVirtualGroups) {
      obj.local_virtual_groups = message.localVirtualGroups.map(e => e ? LocalVirtualGroup.toSDK(e) : undefined);
    } else {
      obj.local_virtual_groups = [];
    }
    obj.next_local_virtual_group_id = message.nextLocalVirtualGroupId;
    return obj;
  }
};
function createBaseObjectInfo(): ObjectInfo {
  return {
    owner: "",
    creator: "",
    bucketName: "",
    objectName: "",
    id: "",
    localVirtualGroupId: 0,
    payloadSize: Long.UZERO,
    visibility: 0,
    contentType: "",
    createAt: Long.ZERO,
    objectStatus: 0,
    redundancyType: 0,
    sourceType: 0,
    checksums: []
  };
}
export const ObjectInfo = {
  encode(message: ObjectInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.bucketName !== "") {
      writer.uint32(26).string(message.bucketName);
    }
    if (message.objectName !== "") {
      writer.uint32(34).string(message.objectName);
    }
    if (message.id !== "") {
      writer.uint32(42).string(message.id);
    }
    if (message.localVirtualGroupId !== 0) {
      writer.uint32(48).uint32(message.localVirtualGroupId);
    }
    if (!message.payloadSize.isZero()) {
      writer.uint32(56).uint64(message.payloadSize);
    }
    if (message.visibility !== 0) {
      writer.uint32(64).int32(message.visibility);
    }
    if (message.contentType !== "") {
      writer.uint32(74).string(message.contentType);
    }
    if (!message.createAt.isZero()) {
      writer.uint32(80).int64(message.createAt);
    }
    if (message.objectStatus !== 0) {
      writer.uint32(88).int32(message.objectStatus);
    }
    if (message.redundancyType !== 0) {
      writer.uint32(96).int32(message.redundancyType);
    }
    if (message.sourceType !== 0) {
      writer.uint32(104).int32(message.sourceType);
    }
    for (const v of message.checksums) {
      writer.uint32(114).bytes(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.bucketName = reader.string();
          break;
        case 4:
          message.objectName = reader.string();
          break;
        case 5:
          message.id = reader.string();
          break;
        case 6:
          message.localVirtualGroupId = reader.uint32();
          break;
        case 7:
          message.payloadSize = (reader.uint64() as Long);
          break;
        case 8:
          message.visibility = (reader.int32() as any);
          break;
        case 9:
          message.contentType = reader.string();
          break;
        case 10:
          message.createAt = (reader.int64() as Long);
          break;
        case 11:
          message.objectStatus = (reader.int32() as any);
          break;
        case 12:
          message.redundancyType = (reader.int32() as any);
          break;
        case 13:
          message.sourceType = (reader.int32() as any);
          break;
        case 14:
          message.checksums.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ObjectInfo {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      objectName: isSet(object.objectName) ? String(object.objectName) : "",
      id: isSet(object.id) ? String(object.id) : "",
      localVirtualGroupId: isSet(object.localVirtualGroupId) ? Number(object.localVirtualGroupId) : 0,
      payloadSize: isSet(object.payloadSize) ? Long.fromValue(object.payloadSize) : Long.UZERO,
      visibility: isSet(object.visibility) ? visibilityTypeFromJSON(object.visibility) : -1,
      contentType: isSet(object.contentType) ? String(object.contentType) : "",
      createAt: isSet(object.createAt) ? Long.fromValue(object.createAt) : Long.ZERO,
      objectStatus: isSet(object.objectStatus) ? objectStatusFromJSON(object.objectStatus) : -1,
      redundancyType: isSet(object.redundancyType) ? redundancyTypeFromJSON(object.redundancyType) : -1,
      sourceType: isSet(object.sourceType) ? sourceTypeFromJSON(object.sourceType) : -1,
      checksums: Array.isArray(object?.checksums) ? object.checksums.map((e: any) => bytesFromBase64(e)) : []
    };
  },
  toJSON(message: ObjectInfo): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.creator !== undefined && (obj.creator = message.creator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.objectName !== undefined && (obj.objectName = message.objectName);
    message.id !== undefined && (obj.id = message.id);
    message.localVirtualGroupId !== undefined && (obj.localVirtualGroupId = Math.round(message.localVirtualGroupId));
    message.payloadSize !== undefined && (obj.payloadSize = (message.payloadSize || Long.UZERO).toString());
    message.visibility !== undefined && (obj.visibility = visibilityTypeToJSON(message.visibility));
    message.contentType !== undefined && (obj.contentType = message.contentType);
    message.createAt !== undefined && (obj.createAt = (message.createAt || Long.ZERO).toString());
    message.objectStatus !== undefined && (obj.objectStatus = objectStatusToJSON(message.objectStatus));
    message.redundancyType !== undefined && (obj.redundancyType = redundancyTypeToJSON(message.redundancyType));
    message.sourceType !== undefined && (obj.sourceType = sourceTypeToJSON(message.sourceType));
    if (message.checksums) {
      obj.checksums = message.checksums.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.checksums = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ObjectInfo>, I>>(object: I): ObjectInfo {
    const message = createBaseObjectInfo();
    message.owner = object.owner ?? "";
    message.creator = object.creator ?? "";
    message.bucketName = object.bucketName ?? "";
    message.objectName = object.objectName ?? "";
    message.id = object.id ?? "";
    message.localVirtualGroupId = object.localVirtualGroupId ?? 0;
    message.payloadSize = object.payloadSize !== undefined && object.payloadSize !== null ? Long.fromValue(object.payloadSize) : Long.UZERO;
    message.visibility = object.visibility ?? 0;
    message.contentType = object.contentType ?? "";
    message.createAt = object.createAt !== undefined && object.createAt !== null ? Long.fromValue(object.createAt) : Long.ZERO;
    message.objectStatus = object.objectStatus ?? 0;
    message.redundancyType = object.redundancyType ?? 0;
    message.sourceType = object.sourceType ?? 0;
    message.checksums = object.checksums?.map(e => e) || [];
    return message;
  },
  fromSDK(object: ObjectInfoSDKType): ObjectInfo {
    return {
      owner: object?.owner,
      creator: object?.creator,
      bucketName: object?.bucket_name,
      objectName: object?.object_name,
      id: object?.id,
      localVirtualGroupId: object?.local_virtual_group_id,
      payloadSize: object?.payload_size,
      visibility: isSet(object.visibility) ? visibilityTypeFromJSON(object.visibility) : -1,
      contentType: object?.content_type,
      createAt: object?.create_at,
      objectStatus: isSet(object.object_status) ? objectStatusFromJSON(object.object_status) : -1,
      redundancyType: isSet(object.redundancy_type) ? redundancyTypeFromJSON(object.redundancy_type) : -1,
      sourceType: isSet(object.source_type) ? sourceTypeFromJSON(object.source_type) : -1,
      checksums: Array.isArray(object?.checksums) ? object.checksums.map((e: any) => e) : []
    };
  },
  toSDK(message: ObjectInfo): ObjectInfoSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.creator = message.creator;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    obj.id = message.id;
    obj.local_virtual_group_id = message.localVirtualGroupId;
    obj.payload_size = message.payloadSize;
    message.visibility !== undefined && (obj.visibility = visibilityTypeToJSON(message.visibility));
    obj.content_type = message.contentType;
    obj.create_at = message.createAt;
    message.objectStatus !== undefined && (obj.object_status = objectStatusToJSON(message.objectStatus));
    message.redundancyType !== undefined && (obj.redundancy_type = redundancyTypeToJSON(message.redundancyType));
    message.sourceType !== undefined && (obj.source_type = sourceTypeToJSON(message.sourceType));
    if (message.checksums) {
      obj.checksums = message.checksums.map(e => e);
    } else {
      obj.checksums = [];
    }
    return obj;
  }
};
function createBaseGroupInfo(): GroupInfo {
  return {
    owner: "",
    groupName: "",
    sourceType: 0,
    id: "",
    extra: ""
  };
}
export const GroupInfo = {
  encode(message: GroupInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.groupName !== "") {
      writer.uint32(18).string(message.groupName);
    }
    if (message.sourceType !== 0) {
      writer.uint32(24).int32(message.sourceType);
    }
    if (message.id !== "") {
      writer.uint32(34).string(message.id);
    }
    if (message.extra !== "") {
      writer.uint32(42).string(message.extra);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GroupInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.groupName = reader.string();
          break;
        case 3:
          message.sourceType = (reader.int32() as any);
          break;
        case 4:
          message.id = reader.string();
          break;
        case 5:
          message.extra = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GroupInfo {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      groupName: isSet(object.groupName) ? String(object.groupName) : "",
      sourceType: isSet(object.sourceType) ? sourceTypeFromJSON(object.sourceType) : -1,
      id: isSet(object.id) ? String(object.id) : "",
      extra: isSet(object.extra) ? String(object.extra) : ""
    };
  },
  toJSON(message: GroupInfo): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.groupName !== undefined && (obj.groupName = message.groupName);
    message.sourceType !== undefined && (obj.sourceType = sourceTypeToJSON(message.sourceType));
    message.id !== undefined && (obj.id = message.id);
    message.extra !== undefined && (obj.extra = message.extra);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GroupInfo>, I>>(object: I): GroupInfo {
    const message = createBaseGroupInfo();
    message.owner = object.owner ?? "";
    message.groupName = object.groupName ?? "";
    message.sourceType = object.sourceType ?? 0;
    message.id = object.id ?? "";
    message.extra = object.extra ?? "";
    return message;
  },
  fromSDK(object: GroupInfoSDKType): GroupInfo {
    return {
      owner: object?.owner,
      groupName: object?.group_name,
      sourceType: isSet(object.source_type) ? sourceTypeFromJSON(object.source_type) : -1,
      id: object?.id,
      extra: object?.extra
    };
  },
  toSDK(message: GroupInfo): GroupInfoSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.group_name = message.groupName;
    message.sourceType !== undefined && (obj.source_type = sourceTypeToJSON(message.sourceType));
    obj.id = message.id;
    obj.extra = message.extra;
    return obj;
  }
};
function createBaseTrait(): Trait {
  return {
    traitType: "",
    value: ""
  };
}
export const Trait = {
  encode(message: Trait, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.traitType !== "") {
      writer.uint32(10).string(message.traitType);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Trait {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrait();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.traitType = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Trait {
    return {
      traitType: isSet(object.traitType) ? String(object.traitType) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  toJSON(message: Trait): unknown {
    const obj: any = {};
    message.traitType !== undefined && (obj.traitType = message.traitType);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Trait>, I>>(object: I): Trait {
    const message = createBaseTrait();
    message.traitType = object.traitType ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromSDK(object: TraitSDKType): Trait {
    return {
      traitType: object?.trait_type,
      value: object?.value
    };
  },
  toSDK(message: Trait): TraitSDKType {
    const obj: any = {};
    obj.trait_type = message.traitType;
    obj.value = message.value;
    return obj;
  }
};
function createBaseBucketMetaData(): BucketMetaData {
  return {
    description: "",
    externalUrl: "",
    bucketName: "",
    image: "",
    attributes: []
  };
}
export const BucketMetaData = {
  encode(message: BucketMetaData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.description !== "") {
      writer.uint32(10).string(message.description);
    }
    if (message.externalUrl !== "") {
      writer.uint32(18).string(message.externalUrl);
    }
    if (message.bucketName !== "") {
      writer.uint32(26).string(message.bucketName);
    }
    if (message.image !== "") {
      writer.uint32(34).string(message.image);
    }
    for (const v of message.attributes) {
      Trait.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BucketMetaData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBucketMetaData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.description = reader.string();
          break;
        case 2:
          message.externalUrl = reader.string();
          break;
        case 3:
          message.bucketName = reader.string();
          break;
        case 4:
          message.image = reader.string();
          break;
        case 5:
          message.attributes.push(Trait.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BucketMetaData {
    return {
      description: isSet(object.description) ? String(object.description) : "",
      externalUrl: isSet(object.externalUrl) ? String(object.externalUrl) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      image: isSet(object.image) ? String(object.image) : "",
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Trait.fromJSON(e)) : []
    };
  },
  toJSON(message: BucketMetaData): unknown {
    const obj: any = {};
    message.description !== undefined && (obj.description = message.description);
    message.externalUrl !== undefined && (obj.externalUrl = message.externalUrl);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.image !== undefined && (obj.image = message.image);
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Trait.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<BucketMetaData>, I>>(object: I): BucketMetaData {
    const message = createBaseBucketMetaData();
    message.description = object.description ?? "";
    message.externalUrl = object.externalUrl ?? "";
    message.bucketName = object.bucketName ?? "";
    message.image = object.image ?? "";
    message.attributes = object.attributes?.map(e => Trait.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: BucketMetaDataSDKType): BucketMetaData {
    return {
      description: object?.description,
      externalUrl: object?.external_url,
      bucketName: object?.bucket_name,
      image: object?.image,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Trait.fromSDK(e)) : []
    };
  },
  toSDK(message: BucketMetaData): BucketMetaDataSDKType {
    const obj: any = {};
    obj.description = message.description;
    obj.external_url = message.externalUrl;
    obj.bucket_name = message.bucketName;
    obj.image = message.image;
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Trait.toSDK(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  }
};
function createBaseObjectMetaData(): ObjectMetaData {
  return {
    description: "",
    externalUrl: "",
    objectName: "",
    image: "",
    attributes: []
  };
}
export const ObjectMetaData = {
  encode(message: ObjectMetaData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.description !== "") {
      writer.uint32(10).string(message.description);
    }
    if (message.externalUrl !== "") {
      writer.uint32(18).string(message.externalUrl);
    }
    if (message.objectName !== "") {
      writer.uint32(26).string(message.objectName);
    }
    if (message.image !== "") {
      writer.uint32(34).string(message.image);
    }
    for (const v of message.attributes) {
      Trait.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectMetaData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectMetaData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.description = reader.string();
          break;
        case 2:
          message.externalUrl = reader.string();
          break;
        case 3:
          message.objectName = reader.string();
          break;
        case 4:
          message.image = reader.string();
          break;
        case 5:
          message.attributes.push(Trait.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ObjectMetaData {
    return {
      description: isSet(object.description) ? String(object.description) : "",
      externalUrl: isSet(object.externalUrl) ? String(object.externalUrl) : "",
      objectName: isSet(object.objectName) ? String(object.objectName) : "",
      image: isSet(object.image) ? String(object.image) : "",
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Trait.fromJSON(e)) : []
    };
  },
  toJSON(message: ObjectMetaData): unknown {
    const obj: any = {};
    message.description !== undefined && (obj.description = message.description);
    message.externalUrl !== undefined && (obj.externalUrl = message.externalUrl);
    message.objectName !== undefined && (obj.objectName = message.objectName);
    message.image !== undefined && (obj.image = message.image);
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Trait.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ObjectMetaData>, I>>(object: I): ObjectMetaData {
    const message = createBaseObjectMetaData();
    message.description = object.description ?? "";
    message.externalUrl = object.externalUrl ?? "";
    message.objectName = object.objectName ?? "";
    message.image = object.image ?? "";
    message.attributes = object.attributes?.map(e => Trait.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ObjectMetaDataSDKType): ObjectMetaData {
    return {
      description: object?.description,
      externalUrl: object?.external_url,
      objectName: object?.object_name,
      image: object?.image,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Trait.fromSDK(e)) : []
    };
  },
  toSDK(message: ObjectMetaData): ObjectMetaDataSDKType {
    const obj: any = {};
    obj.description = message.description;
    obj.external_url = message.externalUrl;
    obj.object_name = message.objectName;
    obj.image = message.image;
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Trait.toSDK(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  }
};
function createBaseGroupMetaData(): GroupMetaData {
  return {
    description: "",
    externalUrl: "",
    groupName: "",
    image: "",
    attributes: []
  };
}
export const GroupMetaData = {
  encode(message: GroupMetaData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.description !== "") {
      writer.uint32(10).string(message.description);
    }
    if (message.externalUrl !== "") {
      writer.uint32(18).string(message.externalUrl);
    }
    if (message.groupName !== "") {
      writer.uint32(26).string(message.groupName);
    }
    if (message.image !== "") {
      writer.uint32(34).string(message.image);
    }
    for (const v of message.attributes) {
      Trait.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GroupMetaData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupMetaData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.description = reader.string();
          break;
        case 2:
          message.externalUrl = reader.string();
          break;
        case 3:
          message.groupName = reader.string();
          break;
        case 4:
          message.image = reader.string();
          break;
        case 5:
          message.attributes.push(Trait.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GroupMetaData {
    return {
      description: isSet(object.description) ? String(object.description) : "",
      externalUrl: isSet(object.externalUrl) ? String(object.externalUrl) : "",
      groupName: isSet(object.groupName) ? String(object.groupName) : "",
      image: isSet(object.image) ? String(object.image) : "",
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Trait.fromJSON(e)) : []
    };
  },
  toJSON(message: GroupMetaData): unknown {
    const obj: any = {};
    message.description !== undefined && (obj.description = message.description);
    message.externalUrl !== undefined && (obj.externalUrl = message.externalUrl);
    message.groupName !== undefined && (obj.groupName = message.groupName);
    message.image !== undefined && (obj.image = message.image);
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Trait.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GroupMetaData>, I>>(object: I): GroupMetaData {
    const message = createBaseGroupMetaData();
    message.description = object.description ?? "";
    message.externalUrl = object.externalUrl ?? "";
    message.groupName = object.groupName ?? "";
    message.image = object.image ?? "";
    message.attributes = object.attributes?.map(e => Trait.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GroupMetaDataSDKType): GroupMetaData {
    return {
      description: object?.description,
      externalUrl: object?.external_url,
      groupName: object?.group_name,
      image: object?.image,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Trait.fromSDK(e)) : []
    };
  },
  toSDK(message: GroupMetaData): GroupMetaDataSDKType {
    const obj: any = {};
    obj.description = message.description;
    obj.external_url = message.externalUrl;
    obj.group_name = message.groupName;
    obj.image = message.image;
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Trait.toSDK(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  }
};
function createBaseIds(): Ids {
  return {
    id: []
  };
}
export const Ids = {
  encode(message: Ids, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.id) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Ids {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIds();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Ids {
    return {
      id: Array.isArray(object?.id) ? object.id.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: Ids): unknown {
    const obj: any = {};
    if (message.id) {
      obj.id = message.id.map(e => e);
    } else {
      obj.id = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Ids>, I>>(object: I): Ids {
    const message = createBaseIds();
    message.id = object.id?.map(e => e) || [];
    return message;
  },
  fromSDK(object: IdsSDKType): Ids {
    return {
      id: Array.isArray(object?.id) ? object.id.map((e: any) => e) : []
    };
  },
  toSDK(message: Ids): IdsSDKType {
    const obj: any = {};
    if (message.id) {
      obj.id = message.id.map(e => e);
    } else {
      obj.id = [];
    }
    return obj;
  }
};
function createBaseDeleteInfo(): DeleteInfo {
  return {
    bucketIds: Ids.fromPartial({}),
    objectIds: Ids.fromPartial({}),
    groupIds: Ids.fromPartial({})
  };
}
export const DeleteInfo = {
  encode(message: DeleteInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bucketIds !== undefined) {
      Ids.encode(message.bucketIds, writer.uint32(10).fork()).ldelim();
    }
    if (message.objectIds !== undefined) {
      Ids.encode(message.objectIds, writer.uint32(18).fork()).ldelim();
    }
    if (message.groupIds !== undefined) {
      Ids.encode(message.groupIds, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bucketIds = Ids.decode(reader, reader.uint32());
          break;
        case 2:
          message.objectIds = Ids.decode(reader, reader.uint32());
          break;
        case 3:
          message.groupIds = Ids.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DeleteInfo {
    return {
      bucketIds: isSet(object.bucketIds) ? Ids.fromJSON(object.bucketIds) : undefined,
      objectIds: isSet(object.objectIds) ? Ids.fromJSON(object.objectIds) : undefined,
      groupIds: isSet(object.groupIds) ? Ids.fromJSON(object.groupIds) : undefined
    };
  },
  toJSON(message: DeleteInfo): unknown {
    const obj: any = {};
    message.bucketIds !== undefined && (obj.bucketIds = message.bucketIds ? Ids.toJSON(message.bucketIds) : undefined);
    message.objectIds !== undefined && (obj.objectIds = message.objectIds ? Ids.toJSON(message.objectIds) : undefined);
    message.groupIds !== undefined && (obj.groupIds = message.groupIds ? Ids.toJSON(message.groupIds) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<DeleteInfo>, I>>(object: I): DeleteInfo {
    const message = createBaseDeleteInfo();
    message.bucketIds = object.bucketIds !== undefined && object.bucketIds !== null ? Ids.fromPartial(object.bucketIds) : undefined;
    message.objectIds = object.objectIds !== undefined && object.objectIds !== null ? Ids.fromPartial(object.objectIds) : undefined;
    message.groupIds = object.groupIds !== undefined && object.groupIds !== null ? Ids.fromPartial(object.groupIds) : undefined;
    return message;
  },
  fromSDK(object: DeleteInfoSDKType): DeleteInfo {
    return {
      bucketIds: object.bucket_ids ? Ids.fromSDK(object.bucket_ids) : undefined,
      objectIds: object.object_ids ? Ids.fromSDK(object.object_ids) : undefined,
      groupIds: object.group_ids ? Ids.fromSDK(object.group_ids) : undefined
    };
  },
  toSDK(message: DeleteInfo): DeleteInfoSDKType {
    const obj: any = {};
    message.bucketIds !== undefined && (obj.bucket_ids = message.bucketIds ? Ids.toSDK(message.bucketIds) : undefined);
    message.objectIds !== undefined && (obj.object_ids = message.objectIds ? Ids.toSDK(message.objectIds) : undefined);
    message.groupIds !== undefined && (obj.group_ids = message.groupIds ? Ids.toSDK(message.groupIds) : undefined);
    return obj;
  }
};
function createBaseMigrationBucketInfo(): MigrationBucketInfo {
  return {
    srcSpId: 0,
    srcGlobalVirtualGroupFamilyId: 0,
    dstSpId: 0,
    bucketId: ""
  };
}
export const MigrationBucketInfo = {
  encode(message: MigrationBucketInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.srcSpId !== 0) {
      writer.uint32(8).uint32(message.srcSpId);
    }
    if (message.srcGlobalVirtualGroupFamilyId !== 0) {
      writer.uint32(16).uint32(message.srcGlobalVirtualGroupFamilyId);
    }
    if (message.dstSpId !== 0) {
      writer.uint32(24).uint32(message.dstSpId);
    }
    if (message.bucketId !== "") {
      writer.uint32(34).string(message.bucketId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MigrationBucketInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMigrationBucketInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.srcSpId = reader.uint32();
          break;
        case 2:
          message.srcGlobalVirtualGroupFamilyId = reader.uint32();
          break;
        case 3:
          message.dstSpId = reader.uint32();
          break;
        case 4:
          message.bucketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MigrationBucketInfo {
    return {
      srcSpId: isSet(object.srcSpId) ? Number(object.srcSpId) : 0,
      srcGlobalVirtualGroupFamilyId: isSet(object.srcGlobalVirtualGroupFamilyId) ? Number(object.srcGlobalVirtualGroupFamilyId) : 0,
      dstSpId: isSet(object.dstSpId) ? Number(object.dstSpId) : 0,
      bucketId: isSet(object.bucketId) ? String(object.bucketId) : ""
    };
  },
  toJSON(message: MigrationBucketInfo): unknown {
    const obj: any = {};
    message.srcSpId !== undefined && (obj.srcSpId = Math.round(message.srcSpId));
    message.srcGlobalVirtualGroupFamilyId !== undefined && (obj.srcGlobalVirtualGroupFamilyId = Math.round(message.srcGlobalVirtualGroupFamilyId));
    message.dstSpId !== undefined && (obj.dstSpId = Math.round(message.dstSpId));
    message.bucketId !== undefined && (obj.bucketId = message.bucketId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MigrationBucketInfo>, I>>(object: I): MigrationBucketInfo {
    const message = createBaseMigrationBucketInfo();
    message.srcSpId = object.srcSpId ?? 0;
    message.srcGlobalVirtualGroupFamilyId = object.srcGlobalVirtualGroupFamilyId ?? 0;
    message.dstSpId = object.dstSpId ?? 0;
    message.bucketId = object.bucketId ?? "";
    return message;
  },
  fromSDK(object: MigrationBucketInfoSDKType): MigrationBucketInfo {
    return {
      srcSpId: object?.src_sp_id,
      srcGlobalVirtualGroupFamilyId: object?.src_global_virtual_group_family_id,
      dstSpId: object?.dst_sp_id,
      bucketId: object?.bucket_id
    };
  },
  toSDK(message: MigrationBucketInfo): MigrationBucketInfoSDKType {
    const obj: any = {};
    obj.src_sp_id = message.srcSpId;
    obj.src_global_virtual_group_family_id = message.srcGlobalVirtualGroupFamilyId;
    obj.dst_sp_id = message.dstSpId;
    obj.bucket_id = message.bucketId;
    return obj;
  }
};