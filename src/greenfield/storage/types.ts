//@ts-nocheck
/* eslint-disable */
import { VisibilityType, SourceType, BucketStatus, LocalVirtualGroup, LocalVirtualGroupAmino, LocalVirtualGroupSDKType, ObjectStatus, RedundancyType, visibilityTypeFromJSON, sourceTypeFromJSON, bucketStatusFromJSON, visibilityTypeToJSON, sourceTypeToJSON, bucketStatusToJSON, objectStatusFromJSON, redundancyTypeFromJSON, objectStatusToJSON, redundancyTypeToJSON } from "./common";
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
  /** tags defines a list of tags the bucket has */
  tags?: ResourceTags;
  /**
   * sp_as_delegated_agent_disabled indicates that whether bucket owner disable SP as the upload agent.
   * when a bucket is created, by default, this is false, means SP is allowed to create object for delegator
   */
  spAsDelegatedAgentDisabled: boolean;
}
export interface BucketInfoProtoMsg {
  typeUrl: "/greenfield.storage.BucketInfo";
  value: Uint8Array;
}
export interface BucketInfoAmino {
  /** owner is the account address of bucket creator, it is also the bucket owner. */
  owner?: string;
  /** bucket_name is a globally unique name of bucket */
  bucket_name?: string;
  /** visibility defines the highest permissions for bucket. When a bucket is public, everyone can get storage objects in it. */
  visibility?: VisibilityType;
  /** id is the unique identification for bucket. */
  id?: string;
  /** source_type defines which chain the user should send the bucket management transactions to */
  source_type?: SourceType;
  /** create_at define the block timestamp when the bucket created. */
  create_at?: string;
  /** payment_address is the address of the payment account */
  payment_address?: string;
  /** global_virtual_group_family_id defines the unique id of gvg family */
  global_virtual_group_family_id?: number;
  /**
   * charged_read_quota defines the traffic quota for read in bytes per month.
   * The available read data for each user is the sum of the free read data provided by SP and
   * the ChargeReadQuota specified here.
   */
  charged_read_quota?: string;
  /** bucket_status define the status of the bucket. */
  bucket_status?: BucketStatus;
  /** tags defines a list of tags the bucket has */
  tags?: ResourceTagsAmino;
  /**
   * sp_as_delegated_agent_disabled indicates that whether bucket owner disable SP as the upload agent.
   * when a bucket is created, by default, this is false, means SP is allowed to create object for delegator
   */
  sp_as_delegated_agent_disabled?: boolean;
}
export interface BucketInfoAminoMsg {
  type: "/greenfield.storage.BucketInfo";
  value: BucketInfoAmino;
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
  tags?: ResourceTagsSDKType;
  sp_as_delegated_agent_disabled: boolean;
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
export interface InternalBucketInfoProtoMsg {
  typeUrl: "/greenfield.storage.InternalBucketInfo";
  value: Uint8Array;
}
export interface InternalBucketInfoAmino {
  /** the time of the payment price, used to calculate the charge rate of the bucket */
  price_time?: string;
  /** the total size of the objects in the bucket, used to calculate the charge rate of the bucket */
  total_charge_size?: string;
  /** local_virtual_groups contains all the lvg of this bucket. */
  local_virtual_groups?: LocalVirtualGroupAmino[];
  /** next_local_virtual_group_id store the next id used by local virtual group */
  next_local_virtual_group_id?: number;
}
export interface InternalBucketInfoAminoMsg {
  type: "/greenfield.storage.InternalBucketInfo";
  value: InternalBucketInfoAmino;
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
  /** tags defines a list of tags the object has */
  tags?: ResourceTags;
  /** is_updating indicates whether a object is being updated. */
  isUpdating: boolean;
  /** updated_at define the block timestamp when the object is updated. Will not be visible until object is re-sealed. */
  updatedAt: Long;
  /** updated_by defined the account address of updater(if there is). Will not be visible until object is re-sealed. */
  updatedBy: string;
  /** version define the version of object */
  version: Long;
}
export interface ObjectInfoProtoMsg {
  typeUrl: "/greenfield.storage.ObjectInfo";
  value: Uint8Array;
}
export interface ObjectInfoAmino {
  /** owner is the object owner */
  owner?: string;
  /** creator is the address of the uploader, it always be same as owner address */
  creator?: string;
  /** bucket_name is the name of the bucket */
  bucket_name?: string;
  /** object_name is the name of object */
  object_name?: string;
  /** id is the unique identifier of object */
  id?: string;
  local_virtual_group_id?: number;
  /** payloadSize is the total size of the object payload */
  payload_size?: string;
  /** visibility defines the highest permissions for object. When an object is public, everyone can access it. */
  visibility?: VisibilityType;
  /** content_type define the format of the object which should be a standard MIME type. */
  content_type?: string;
  /** create_at define the block timestamp when the object is created */
  create_at?: string;
  /** object_status define the upload status of the object. */
  object_status?: ObjectStatus;
  /** redundancy_type define the type of the redundancy which can be multi-replication or EC. */
  redundancy_type?: RedundancyType;
  /** source_type define the source of the object. */
  source_type?: SourceType;
  /**
   * checksums define the root hash of the pieces which stored in a SP.
   * add omit tag to omit the field when converting to NFT metadata
   */
  checksums?: string[];
  /** tags defines a list of tags the object has */
  tags?: ResourceTagsAmino;
  /** is_updating indicates whether a object is being updated. */
  is_updating?: boolean;
  /** updated_at define the block timestamp when the object is updated. Will not be visible until object is re-sealed. */
  updated_at?: string;
  /** updated_by defined the account address of updater(if there is). Will not be visible until object is re-sealed. */
  updated_by?: string;
  /** version define the version of object */
  version?: string;
}
export interface ObjectInfoAminoMsg {
  type: "/greenfield.storage.ObjectInfo";
  value: ObjectInfoAmino;
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
  tags?: ResourceTagsSDKType;
  is_updating: boolean;
  updated_at: Long;
  updated_by: string;
  version: Long;
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
  /** tags defines a list of tags the group has */
  tags?: ResourceTags;
}
export interface GroupInfoProtoMsg {
  typeUrl: "/greenfield.storage.GroupInfo";
  value: Uint8Array;
}
export interface GroupInfoAmino {
  /** owner is the owner of the group. It can not changed once it created. */
  owner?: string;
  /** group_name is the name of group which is unique under an account. */
  group_name?: string;
  /** source_type */
  source_type?: SourceType;
  /** id is the unique identifier of group */
  id?: string;
  /** extra is used to store extra info for the group */
  extra?: string;
  /** tags defines a list of tags the group has */
  tags?: ResourceTagsAmino;
}
export interface GroupInfoAminoMsg {
  type: "/greenfield.storage.GroupInfo";
  value: GroupInfoAmino;
}
export interface GroupInfoSDKType {
  owner: string;
  group_name: string;
  source_type: SourceType;
  id: string;
  extra: string;
  tags?: ResourceTagsSDKType;
}
export interface Trait {
  traitType: string;
  value: string;
}
export interface TraitProtoMsg {
  typeUrl: "/greenfield.storage.Trait";
  value: Uint8Array;
}
export interface TraitAmino {
  trait_type?: string;
  value?: string;
}
export interface TraitAminoMsg {
  type: "/greenfield.storage.Trait";
  value: TraitAmino;
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
export interface BucketMetaDataProtoMsg {
  typeUrl: "/greenfield.storage.BucketMetaData";
  value: Uint8Array;
}
export interface BucketMetaDataAmino {
  /** description */
  description?: string;
  /** externalUrl a link to external site to view NFT */
  external_url?: string;
  /** name of bucket NFT */
  bucket_name?: string;
  /** image is the link to image */
  image?: string;
  /** attributes */
  attributes?: TraitAmino[];
}
export interface BucketMetaDataAminoMsg {
  type: "/greenfield.storage.BucketMetaData";
  value: BucketMetaDataAmino;
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
export interface ObjectMetaDataProtoMsg {
  typeUrl: "/greenfield.storage.ObjectMetaData";
  value: Uint8Array;
}
export interface ObjectMetaDataAmino {
  /** description */
  description?: string;
  /** externalUrl a link to external site to view NFT */
  external_url?: string;
  /** name of object NFT */
  object_name?: string;
  /** image is the link to image */
  image?: string;
  /** attributes */
  attributes?: TraitAmino[];
}
export interface ObjectMetaDataAminoMsg {
  type: "/greenfield.storage.ObjectMetaData";
  value: ObjectMetaDataAmino;
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
export interface GroupMetaDataProtoMsg {
  typeUrl: "/greenfield.storage.GroupMetaData";
  value: Uint8Array;
}
export interface GroupMetaDataAmino {
  /** description */
  description?: string;
  /** externalUrl a link to external site to view NFT */
  external_url?: string;
  /** name of group NFT */
  group_name?: string;
  /** image is the link to image */
  image?: string;
  /** attributes */
  attributes?: TraitAmino[];
}
export interface GroupMetaDataAminoMsg {
  type: "/greenfield.storage.GroupMetaData";
  value: GroupMetaDataAmino;
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
export interface IdsProtoMsg {
  typeUrl: "/greenfield.storage.Ids";
  value: Uint8Array;
}
export interface IdsAmino {
  /** ids of the objects or buckets */
  id?: string[];
}
export interface IdsAminoMsg {
  type: "/greenfield.storage.Ids";
  value: IdsAmino;
}
export interface IdsSDKType {
  id: string[];
}
export interface DeleteInfo {
  bucketIds?: Ids;
  objectIds?: Ids;
  groupIds?: Ids;
}
export interface DeleteInfoProtoMsg {
  typeUrl: "/greenfield.storage.DeleteInfo";
  value: Uint8Array;
}
export interface DeleteInfoAmino {
  bucket_ids?: IdsAmino;
  object_ids?: IdsAmino;
  group_ids?: IdsAmino;
}
export interface DeleteInfoAminoMsg {
  type: "/greenfield.storage.DeleteInfo";
  value: DeleteInfoAmino;
}
export interface DeleteInfoSDKType {
  bucket_ids?: IdsSDKType;
  object_ids?: IdsSDKType;
  group_ids?: IdsSDKType;
}
export interface MigrationBucketInfo {
  srcSpId: number;
  srcGlobalVirtualGroupFamilyId: number;
  dstSpId: number;
  /** id is the unique identifier of bucket */
  bucketId: string;
}
export interface MigrationBucketInfoProtoMsg {
  typeUrl: "/greenfield.storage.MigrationBucketInfo";
  value: Uint8Array;
}
export interface MigrationBucketInfoAmino {
  src_sp_id?: number;
  src_global_virtual_group_family_id?: number;
  dst_sp_id?: number;
  /** id is the unique identifier of bucket */
  bucket_id?: string;
}
export interface MigrationBucketInfoAminoMsg {
  type: "/greenfield.storage.MigrationBucketInfo";
  value: MigrationBucketInfoAmino;
}
export interface MigrationBucketInfoSDKType {
  src_sp_id: number;
  src_global_virtual_group_family_id: number;
  dst_sp_id: number;
  bucket_id: string;
}
export interface ResourceTags {
  /** tags defines a list of tags the resource has */
  tags: ResourceTags_Tag[];
}
export interface ResourceTagsProtoMsg {
  typeUrl: "/greenfield.storage.ResourceTags";
  value: Uint8Array;
}
export interface ResourceTagsAmino {
  /** tags defines a list of tags the resource has */
  tags?: ResourceTags_TagAmino[];
}
export interface ResourceTagsAminoMsg {
  type: "/greenfield.storage.ResourceTags";
  value: ResourceTagsAmino;
}
export interface ResourceTagsSDKType {
  tags: ResourceTags_TagSDKType[];
}
export interface ResourceTags_Tag {
  key: string;
  value: string;
}
export interface ResourceTags_TagProtoMsg {
  typeUrl: "/greenfield.storage.Tag";
  value: Uint8Array;
}
export interface ResourceTags_TagAmino {
  key?: string;
  value?: string;
}
export interface ResourceTags_TagAminoMsg {
  type: "/greenfield.storage.Tag";
  value: ResourceTags_TagAmino;
}
export interface ResourceTags_TagSDKType {
  key: string;
  value: string;
}
export interface ShadowObjectInfo {
  /** operator defines the account address of the operator, either the object owner or the updater with granted permission. */
  operator: string;
  /** id defines the object id */
  id: string;
  /** content_type define the content type of the payload data */
  contentType: string;
  /** payload_size is the total size of the object payload */
  payloadSize: Long;
  /** checksums define the root hash of the pieces which stored in a SP. */
  checksums: Uint8Array[];
  /** updated_at define the block timestamp when the object is updated */
  updatedAt: Long;
  /** version define the version of object */
  version: Long;
}
export interface ShadowObjectInfoProtoMsg {
  typeUrl: "/greenfield.storage.ShadowObjectInfo";
  value: Uint8Array;
}
export interface ShadowObjectInfoAmino {
  /** operator defines the account address of the operator, either the object owner or the updater with granted permission. */
  operator?: string;
  /** id defines the object id */
  id?: string;
  /** content_type define the content type of the payload data */
  content_type?: string;
  /** payload_size is the total size of the object payload */
  payload_size?: string;
  /** checksums define the root hash of the pieces which stored in a SP. */
  checksums?: string[];
  /** updated_at define the block timestamp when the object is updated */
  updated_at?: string;
  /** version define the version of object */
  version?: string;
}
export interface ShadowObjectInfoAminoMsg {
  type: "/greenfield.storage.ShadowObjectInfo";
  value: ShadowObjectInfoAmino;
}
export interface ShadowObjectInfoSDKType {
  operator: string;
  id: string;
  content_type: string;
  payload_size: Long;
  checksums: Uint8Array[];
  updated_at: Long;
  version: Long;
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
    bucketStatus: 0,
    tags: undefined,
    spAsDelegatedAgentDisabled: false
  };
}
export const BucketInfo = {
  typeUrl: "/greenfield.storage.BucketInfo",
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
    if (message.tags !== undefined) {
      ResourceTags.encode(message.tags, writer.uint32(90).fork()).ldelim();
    }
    if (message.spAsDelegatedAgentDisabled === true) {
      writer.uint32(96).bool(message.spAsDelegatedAgentDisabled);
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
        case 11:
          message.tags = ResourceTags.decode(reader, reader.uint32());
          break;
        case 12:
          message.spAsDelegatedAgentDisabled = reader.bool();
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
      bucketStatus: isSet(object.bucketStatus) ? bucketStatusFromJSON(object.bucketStatus) : -1,
      tags: isSet(object.tags) ? ResourceTags.fromJSON(object.tags) : undefined,
      spAsDelegatedAgentDisabled: isSet(object.spAsDelegatedAgentDisabled) ? Boolean(object.spAsDelegatedAgentDisabled) : false
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
    message.tags !== undefined && (obj.tags = message.tags ? ResourceTags.toJSON(message.tags) : undefined);
    message.spAsDelegatedAgentDisabled !== undefined && (obj.spAsDelegatedAgentDisabled = message.spAsDelegatedAgentDisabled);
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
    message.tags = object.tags !== undefined && object.tags !== null ? ResourceTags.fromPartial(object.tags) : undefined;
    message.spAsDelegatedAgentDisabled = object.spAsDelegatedAgentDisabled ?? false;
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
      bucketStatus: isSet(object.bucket_status) ? bucketStatusFromJSON(object.bucket_status) : -1,
      tags: object.tags ? ResourceTags.fromSDK(object.tags) : undefined,
      spAsDelegatedAgentDisabled: object?.sp_as_delegated_agent_disabled
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
    message.tags !== undefined && (obj.tags = message.tags ? ResourceTags.toSDK(message.tags) : undefined);
    obj.sp_as_delegated_agent_disabled = message.spAsDelegatedAgentDisabled;
    return obj;
  },
  fromAmino(object: BucketInfoAmino): BucketInfo {
    const message = createBaseBucketInfo();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    if (object.visibility !== undefined && object.visibility !== null) {
      message.visibility = visibilityTypeFromJSON(object.visibility);
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.source_type !== undefined && object.source_type !== null) {
      message.sourceType = sourceTypeFromJSON(object.source_type);
    }
    if (object.create_at !== undefined && object.create_at !== null) {
      message.createAt = Long.fromString(object.create_at);
    }
    if (object.payment_address !== undefined && object.payment_address !== null) {
      message.paymentAddress = object.payment_address;
    }
    if (object.global_virtual_group_family_id !== undefined && object.global_virtual_group_family_id !== null) {
      message.globalVirtualGroupFamilyId = object.global_virtual_group_family_id;
    }
    if (object.charged_read_quota !== undefined && object.charged_read_quota !== null) {
      message.chargedReadQuota = Long.fromString(object.charged_read_quota);
    }
    if (object.bucket_status !== undefined && object.bucket_status !== null) {
      message.bucketStatus = bucketStatusFromJSON(object.bucket_status);
    }
    if (object.tags !== undefined && object.tags !== null) {
      message.tags = ResourceTags.fromAmino(object.tags);
    }
    if (object.sp_as_delegated_agent_disabled !== undefined && object.sp_as_delegated_agent_disabled !== null) {
      message.spAsDelegatedAgentDisabled = object.sp_as_delegated_agent_disabled;
    }
    return message;
  },
  toAmino(message: BucketInfo): BucketInfoAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.bucket_name = message.bucketName;
    obj.visibility = visibilityTypeToJSON(message.visibility);
    obj.id = message.id;
    obj.source_type = sourceTypeToJSON(message.sourceType);
    obj.create_at = message.createAt ? message.createAt.toString() : undefined;
    obj.payment_address = message.paymentAddress;
    obj.global_virtual_group_family_id = message.globalVirtualGroupFamilyId;
    obj.charged_read_quota = message.chargedReadQuota ? message.chargedReadQuota.toString() : undefined;
    obj.bucket_status = bucketStatusToJSON(message.bucketStatus);
    obj.tags = message.tags ? ResourceTags.toAmino(message.tags) : undefined;
    obj.sp_as_delegated_agent_disabled = message.spAsDelegatedAgentDisabled;
    return obj;
  },
  fromAminoMsg(object: BucketInfoAminoMsg): BucketInfo {
    return BucketInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: BucketInfoProtoMsg): BucketInfo {
    return BucketInfo.decode(message.value);
  },
  toProto(message: BucketInfo): Uint8Array {
    return BucketInfo.encode(message).finish();
  },
  toProtoMsg(message: BucketInfo): BucketInfoProtoMsg {
    return {
      typeUrl: "/greenfield.storage.BucketInfo",
      value: BucketInfo.encode(message).finish()
    };
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
  typeUrl: "/greenfield.storage.InternalBucketInfo",
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
  },
  fromAmino(object: InternalBucketInfoAmino): InternalBucketInfo {
    const message = createBaseInternalBucketInfo();
    if (object.price_time !== undefined && object.price_time !== null) {
      message.priceTime = Long.fromString(object.price_time);
    }
    if (object.total_charge_size !== undefined && object.total_charge_size !== null) {
      message.totalChargeSize = Long.fromString(object.total_charge_size);
    }
    message.localVirtualGroups = object.local_virtual_groups?.map(e => LocalVirtualGroup.fromAmino(e)) || [];
    if (object.next_local_virtual_group_id !== undefined && object.next_local_virtual_group_id !== null) {
      message.nextLocalVirtualGroupId = object.next_local_virtual_group_id;
    }
    return message;
  },
  toAmino(message: InternalBucketInfo): InternalBucketInfoAmino {
    const obj: any = {};
    obj.price_time = message.priceTime ? message.priceTime.toString() : undefined;
    obj.total_charge_size = message.totalChargeSize ? message.totalChargeSize.toString() : undefined;
    if (message.localVirtualGroups) {
      obj.local_virtual_groups = message.localVirtualGroups.map(e => e ? LocalVirtualGroup.toAmino(e) : undefined);
    } else {
      obj.local_virtual_groups = [];
    }
    obj.next_local_virtual_group_id = message.nextLocalVirtualGroupId;
    return obj;
  },
  fromAminoMsg(object: InternalBucketInfoAminoMsg): InternalBucketInfo {
    return InternalBucketInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: InternalBucketInfoProtoMsg): InternalBucketInfo {
    return InternalBucketInfo.decode(message.value);
  },
  toProto(message: InternalBucketInfo): Uint8Array {
    return InternalBucketInfo.encode(message).finish();
  },
  toProtoMsg(message: InternalBucketInfo): InternalBucketInfoProtoMsg {
    return {
      typeUrl: "/greenfield.storage.InternalBucketInfo",
      value: InternalBucketInfo.encode(message).finish()
    };
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
    checksums: [],
    tags: undefined,
    isUpdating: false,
    updatedAt: Long.ZERO,
    updatedBy: "",
    version: Long.ZERO
  };
}
export const ObjectInfo = {
  typeUrl: "/greenfield.storage.ObjectInfo",
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
    if (message.tags !== undefined) {
      ResourceTags.encode(message.tags, writer.uint32(122).fork()).ldelim();
    }
    if (message.isUpdating === true) {
      writer.uint32(128).bool(message.isUpdating);
    }
    if (!message.updatedAt.isZero()) {
      writer.uint32(136).int64(message.updatedAt);
    }
    if (message.updatedBy !== "") {
      writer.uint32(146).string(message.updatedBy);
    }
    if (!message.version.isZero()) {
      writer.uint32(152).int64(message.version);
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
        case 15:
          message.tags = ResourceTags.decode(reader, reader.uint32());
          break;
        case 16:
          message.isUpdating = reader.bool();
          break;
        case 17:
          message.updatedAt = (reader.int64() as Long);
          break;
        case 18:
          message.updatedBy = reader.string();
          break;
        case 19:
          message.version = (reader.int64() as Long);
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
      checksums: Array.isArray(object?.checksums) ? object.checksums.map((e: any) => bytesFromBase64(e)) : [],
      tags: isSet(object.tags) ? ResourceTags.fromJSON(object.tags) : undefined,
      isUpdating: isSet(object.isUpdating) ? Boolean(object.isUpdating) : false,
      updatedAt: isSet(object.updatedAt) ? Long.fromValue(object.updatedAt) : Long.ZERO,
      updatedBy: isSet(object.updatedBy) ? String(object.updatedBy) : "",
      version: isSet(object.version) ? Long.fromValue(object.version) : Long.ZERO
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
    message.tags !== undefined && (obj.tags = message.tags ? ResourceTags.toJSON(message.tags) : undefined);
    message.isUpdating !== undefined && (obj.isUpdating = message.isUpdating);
    message.updatedAt !== undefined && (obj.updatedAt = (message.updatedAt || Long.ZERO).toString());
    message.updatedBy !== undefined && (obj.updatedBy = message.updatedBy);
    message.version !== undefined && (obj.version = (message.version || Long.ZERO).toString());
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
    message.tags = object.tags !== undefined && object.tags !== null ? ResourceTags.fromPartial(object.tags) : undefined;
    message.isUpdating = object.isUpdating ?? false;
    message.updatedAt = object.updatedAt !== undefined && object.updatedAt !== null ? Long.fromValue(object.updatedAt) : Long.ZERO;
    message.updatedBy = object.updatedBy ?? "";
    message.version = object.version !== undefined && object.version !== null ? Long.fromValue(object.version) : Long.ZERO;
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
      checksums: Array.isArray(object?.checksums) ? object.checksums.map((e: any) => e) : [],
      tags: object.tags ? ResourceTags.fromSDK(object.tags) : undefined,
      isUpdating: object?.is_updating,
      updatedAt: object?.updated_at,
      updatedBy: object?.updated_by,
      version: object?.version
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
    message.tags !== undefined && (obj.tags = message.tags ? ResourceTags.toSDK(message.tags) : undefined);
    obj.is_updating = message.isUpdating;
    obj.updated_at = message.updatedAt;
    obj.updated_by = message.updatedBy;
    obj.version = message.version;
    return obj;
  },
  fromAmino(object: ObjectInfoAmino): ObjectInfo {
    const message = createBaseObjectInfo();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    if (object.object_name !== undefined && object.object_name !== null) {
      message.objectName = object.object_name;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.local_virtual_group_id !== undefined && object.local_virtual_group_id !== null) {
      message.localVirtualGroupId = object.local_virtual_group_id;
    }
    if (object.payload_size !== undefined && object.payload_size !== null) {
      message.payloadSize = Long.fromString(object.payload_size);
    }
    if (object.visibility !== undefined && object.visibility !== null) {
      message.visibility = visibilityTypeFromJSON(object.visibility);
    }
    if (object.content_type !== undefined && object.content_type !== null) {
      message.contentType = object.content_type;
    }
    if (object.create_at !== undefined && object.create_at !== null) {
      message.createAt = Long.fromString(object.create_at);
    }
    if (object.object_status !== undefined && object.object_status !== null) {
      message.objectStatus = objectStatusFromJSON(object.object_status);
    }
    if (object.redundancy_type !== undefined && object.redundancy_type !== null) {
      message.redundancyType = redundancyTypeFromJSON(object.redundancy_type);
    }
    if (object.source_type !== undefined && object.source_type !== null) {
      message.sourceType = sourceTypeFromJSON(object.source_type);
    }
    message.checksums = object.checksums?.map(e => bytesFromBase64(e)) || [];
    if (object.tags !== undefined && object.tags !== null) {
      message.tags = ResourceTags.fromAmino(object.tags);
    }
    if (object.is_updating !== undefined && object.is_updating !== null) {
      message.isUpdating = object.is_updating;
    }
    if (object.updated_at !== undefined && object.updated_at !== null) {
      message.updatedAt = Long.fromString(object.updated_at);
    }
    if (object.updated_by !== undefined && object.updated_by !== null) {
      message.updatedBy = object.updated_by;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = Long.fromString(object.version);
    }
    return message;
  },
  toAmino(message: ObjectInfo): ObjectInfoAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.creator = message.creator;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    obj.id = message.id;
    obj.local_virtual_group_id = message.localVirtualGroupId;
    obj.payload_size = message.payloadSize ? message.payloadSize.toString() : undefined;
    obj.visibility = visibilityTypeToJSON(message.visibility);
    obj.content_type = message.contentType;
    obj.create_at = message.createAt ? message.createAt.toString() : undefined;
    obj.object_status = objectStatusToJSON(message.objectStatus);
    obj.redundancy_type = redundancyTypeToJSON(message.redundancyType);
    obj.source_type = sourceTypeToJSON(message.sourceType);
    if (message.checksums) {
      obj.checksums = message.checksums.map(e => base64FromBytes(e));
    } else {
      obj.checksums = [];
    }
    obj.tags = message.tags ? ResourceTags.toAmino(message.tags) : undefined;
    obj.is_updating = message.isUpdating;
    obj.updated_at = message.updatedAt ? message.updatedAt.toString() : undefined;
    obj.updated_by = message.updatedBy;
    obj.version = message.version ? message.version.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ObjectInfoAminoMsg): ObjectInfo {
    return ObjectInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: ObjectInfoProtoMsg): ObjectInfo {
    return ObjectInfo.decode(message.value);
  },
  toProto(message: ObjectInfo): Uint8Array {
    return ObjectInfo.encode(message).finish();
  },
  toProtoMsg(message: ObjectInfo): ObjectInfoProtoMsg {
    return {
      typeUrl: "/greenfield.storage.ObjectInfo",
      value: ObjectInfo.encode(message).finish()
    };
  }
};
function createBaseGroupInfo(): GroupInfo {
  return {
    owner: "",
    groupName: "",
    sourceType: 0,
    id: "",
    extra: "",
    tags: undefined
  };
}
export const GroupInfo = {
  typeUrl: "/greenfield.storage.GroupInfo",
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
    if (message.tags !== undefined) {
      ResourceTags.encode(message.tags, writer.uint32(50).fork()).ldelim();
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
        case 6:
          message.tags = ResourceTags.decode(reader, reader.uint32());
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
      extra: isSet(object.extra) ? String(object.extra) : "",
      tags: isSet(object.tags) ? ResourceTags.fromJSON(object.tags) : undefined
    };
  },
  toJSON(message: GroupInfo): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.groupName !== undefined && (obj.groupName = message.groupName);
    message.sourceType !== undefined && (obj.sourceType = sourceTypeToJSON(message.sourceType));
    message.id !== undefined && (obj.id = message.id);
    message.extra !== undefined && (obj.extra = message.extra);
    message.tags !== undefined && (obj.tags = message.tags ? ResourceTags.toJSON(message.tags) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GroupInfo>, I>>(object: I): GroupInfo {
    const message = createBaseGroupInfo();
    message.owner = object.owner ?? "";
    message.groupName = object.groupName ?? "";
    message.sourceType = object.sourceType ?? 0;
    message.id = object.id ?? "";
    message.extra = object.extra ?? "";
    message.tags = object.tags !== undefined && object.tags !== null ? ResourceTags.fromPartial(object.tags) : undefined;
    return message;
  },
  fromSDK(object: GroupInfoSDKType): GroupInfo {
    return {
      owner: object?.owner,
      groupName: object?.group_name,
      sourceType: isSet(object.source_type) ? sourceTypeFromJSON(object.source_type) : -1,
      id: object?.id,
      extra: object?.extra,
      tags: object.tags ? ResourceTags.fromSDK(object.tags) : undefined
    };
  },
  toSDK(message: GroupInfo): GroupInfoSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.group_name = message.groupName;
    message.sourceType !== undefined && (obj.source_type = sourceTypeToJSON(message.sourceType));
    obj.id = message.id;
    obj.extra = message.extra;
    message.tags !== undefined && (obj.tags = message.tags ? ResourceTags.toSDK(message.tags) : undefined);
    return obj;
  },
  fromAmino(object: GroupInfoAmino): GroupInfo {
    const message = createBaseGroupInfo();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.group_name !== undefined && object.group_name !== null) {
      message.groupName = object.group_name;
    }
    if (object.source_type !== undefined && object.source_type !== null) {
      message.sourceType = sourceTypeFromJSON(object.source_type);
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.extra !== undefined && object.extra !== null) {
      message.extra = object.extra;
    }
    if (object.tags !== undefined && object.tags !== null) {
      message.tags = ResourceTags.fromAmino(object.tags);
    }
    return message;
  },
  toAmino(message: GroupInfo): GroupInfoAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.group_name = message.groupName;
    obj.source_type = sourceTypeToJSON(message.sourceType);
    obj.id = message.id;
    obj.extra = message.extra;
    obj.tags = message.tags ? ResourceTags.toAmino(message.tags) : undefined;
    return obj;
  },
  fromAminoMsg(object: GroupInfoAminoMsg): GroupInfo {
    return GroupInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: GroupInfoProtoMsg): GroupInfo {
    return GroupInfo.decode(message.value);
  },
  toProto(message: GroupInfo): Uint8Array {
    return GroupInfo.encode(message).finish();
  },
  toProtoMsg(message: GroupInfo): GroupInfoProtoMsg {
    return {
      typeUrl: "/greenfield.storage.GroupInfo",
      value: GroupInfo.encode(message).finish()
    };
  }
};
function createBaseTrait(): Trait {
  return {
    traitType: "",
    value: ""
  };
}
export const Trait = {
  typeUrl: "/greenfield.storage.Trait",
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
  },
  fromAmino(object: TraitAmino): Trait {
    const message = createBaseTrait();
    if (object.trait_type !== undefined && object.trait_type !== null) {
      message.traitType = object.trait_type;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: Trait): TraitAmino {
    const obj: any = {};
    obj.trait_type = message.traitType;
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object: TraitAminoMsg): Trait {
    return Trait.fromAmino(object.value);
  },
  fromProtoMsg(message: TraitProtoMsg): Trait {
    return Trait.decode(message.value);
  },
  toProto(message: Trait): Uint8Array {
    return Trait.encode(message).finish();
  },
  toProtoMsg(message: Trait): TraitProtoMsg {
    return {
      typeUrl: "/greenfield.storage.Trait",
      value: Trait.encode(message).finish()
    };
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
  typeUrl: "/greenfield.storage.BucketMetaData",
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
  },
  fromAmino(object: BucketMetaDataAmino): BucketMetaData {
    const message = createBaseBucketMetaData();
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.external_url !== undefined && object.external_url !== null) {
      message.externalUrl = object.external_url;
    }
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    if (object.image !== undefined && object.image !== null) {
      message.image = object.image;
    }
    message.attributes = object.attributes?.map(e => Trait.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: BucketMetaData): BucketMetaDataAmino {
    const obj: any = {};
    obj.description = message.description;
    obj.external_url = message.externalUrl;
    obj.bucket_name = message.bucketName;
    obj.image = message.image;
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Trait.toAmino(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromAminoMsg(object: BucketMetaDataAminoMsg): BucketMetaData {
    return BucketMetaData.fromAmino(object.value);
  },
  fromProtoMsg(message: BucketMetaDataProtoMsg): BucketMetaData {
    return BucketMetaData.decode(message.value);
  },
  toProto(message: BucketMetaData): Uint8Array {
    return BucketMetaData.encode(message).finish();
  },
  toProtoMsg(message: BucketMetaData): BucketMetaDataProtoMsg {
    return {
      typeUrl: "/greenfield.storage.BucketMetaData",
      value: BucketMetaData.encode(message).finish()
    };
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
  typeUrl: "/greenfield.storage.ObjectMetaData",
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
  },
  fromAmino(object: ObjectMetaDataAmino): ObjectMetaData {
    const message = createBaseObjectMetaData();
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.external_url !== undefined && object.external_url !== null) {
      message.externalUrl = object.external_url;
    }
    if (object.object_name !== undefined && object.object_name !== null) {
      message.objectName = object.object_name;
    }
    if (object.image !== undefined && object.image !== null) {
      message.image = object.image;
    }
    message.attributes = object.attributes?.map(e => Trait.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ObjectMetaData): ObjectMetaDataAmino {
    const obj: any = {};
    obj.description = message.description;
    obj.external_url = message.externalUrl;
    obj.object_name = message.objectName;
    obj.image = message.image;
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Trait.toAmino(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromAminoMsg(object: ObjectMetaDataAminoMsg): ObjectMetaData {
    return ObjectMetaData.fromAmino(object.value);
  },
  fromProtoMsg(message: ObjectMetaDataProtoMsg): ObjectMetaData {
    return ObjectMetaData.decode(message.value);
  },
  toProto(message: ObjectMetaData): Uint8Array {
    return ObjectMetaData.encode(message).finish();
  },
  toProtoMsg(message: ObjectMetaData): ObjectMetaDataProtoMsg {
    return {
      typeUrl: "/greenfield.storage.ObjectMetaData",
      value: ObjectMetaData.encode(message).finish()
    };
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
  typeUrl: "/greenfield.storage.GroupMetaData",
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
  },
  fromAmino(object: GroupMetaDataAmino): GroupMetaData {
    const message = createBaseGroupMetaData();
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.external_url !== undefined && object.external_url !== null) {
      message.externalUrl = object.external_url;
    }
    if (object.group_name !== undefined && object.group_name !== null) {
      message.groupName = object.group_name;
    }
    if (object.image !== undefined && object.image !== null) {
      message.image = object.image;
    }
    message.attributes = object.attributes?.map(e => Trait.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GroupMetaData): GroupMetaDataAmino {
    const obj: any = {};
    obj.description = message.description;
    obj.external_url = message.externalUrl;
    obj.group_name = message.groupName;
    obj.image = message.image;
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Trait.toAmino(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromAminoMsg(object: GroupMetaDataAminoMsg): GroupMetaData {
    return GroupMetaData.fromAmino(object.value);
  },
  fromProtoMsg(message: GroupMetaDataProtoMsg): GroupMetaData {
    return GroupMetaData.decode(message.value);
  },
  toProto(message: GroupMetaData): Uint8Array {
    return GroupMetaData.encode(message).finish();
  },
  toProtoMsg(message: GroupMetaData): GroupMetaDataProtoMsg {
    return {
      typeUrl: "/greenfield.storage.GroupMetaData",
      value: GroupMetaData.encode(message).finish()
    };
  }
};
function createBaseIds(): Ids {
  return {
    id: []
  };
}
export const Ids = {
  typeUrl: "/greenfield.storage.Ids",
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
  },
  fromAmino(object: IdsAmino): Ids {
    const message = createBaseIds();
    message.id = object.id?.map(e => e) || [];
    return message;
  },
  toAmino(message: Ids): IdsAmino {
    const obj: any = {};
    if (message.id) {
      obj.id = message.id.map(e => e);
    } else {
      obj.id = [];
    }
    return obj;
  },
  fromAminoMsg(object: IdsAminoMsg): Ids {
    return Ids.fromAmino(object.value);
  },
  fromProtoMsg(message: IdsProtoMsg): Ids {
    return Ids.decode(message.value);
  },
  toProto(message: Ids): Uint8Array {
    return Ids.encode(message).finish();
  },
  toProtoMsg(message: Ids): IdsProtoMsg {
    return {
      typeUrl: "/greenfield.storage.Ids",
      value: Ids.encode(message).finish()
    };
  }
};
function createBaseDeleteInfo(): DeleteInfo {
  return {
    bucketIds: undefined,
    objectIds: undefined,
    groupIds: undefined
  };
}
export const DeleteInfo = {
  typeUrl: "/greenfield.storage.DeleteInfo",
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
  },
  fromAmino(object: DeleteInfoAmino): DeleteInfo {
    const message = createBaseDeleteInfo();
    if (object.bucket_ids !== undefined && object.bucket_ids !== null) {
      message.bucketIds = Ids.fromAmino(object.bucket_ids);
    }
    if (object.object_ids !== undefined && object.object_ids !== null) {
      message.objectIds = Ids.fromAmino(object.object_ids);
    }
    if (object.group_ids !== undefined && object.group_ids !== null) {
      message.groupIds = Ids.fromAmino(object.group_ids);
    }
    return message;
  },
  toAmino(message: DeleteInfo): DeleteInfoAmino {
    const obj: any = {};
    obj.bucket_ids = message.bucketIds ? Ids.toAmino(message.bucketIds) : undefined;
    obj.object_ids = message.objectIds ? Ids.toAmino(message.objectIds) : undefined;
    obj.group_ids = message.groupIds ? Ids.toAmino(message.groupIds) : undefined;
    return obj;
  },
  fromAminoMsg(object: DeleteInfoAminoMsg): DeleteInfo {
    return DeleteInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: DeleteInfoProtoMsg): DeleteInfo {
    return DeleteInfo.decode(message.value);
  },
  toProto(message: DeleteInfo): Uint8Array {
    return DeleteInfo.encode(message).finish();
  },
  toProtoMsg(message: DeleteInfo): DeleteInfoProtoMsg {
    return {
      typeUrl: "/greenfield.storage.DeleteInfo",
      value: DeleteInfo.encode(message).finish()
    };
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
  typeUrl: "/greenfield.storage.MigrationBucketInfo",
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
  },
  fromAmino(object: MigrationBucketInfoAmino): MigrationBucketInfo {
    const message = createBaseMigrationBucketInfo();
    if (object.src_sp_id !== undefined && object.src_sp_id !== null) {
      message.srcSpId = object.src_sp_id;
    }
    if (object.src_global_virtual_group_family_id !== undefined && object.src_global_virtual_group_family_id !== null) {
      message.srcGlobalVirtualGroupFamilyId = object.src_global_virtual_group_family_id;
    }
    if (object.dst_sp_id !== undefined && object.dst_sp_id !== null) {
      message.dstSpId = object.dst_sp_id;
    }
    if (object.bucket_id !== undefined && object.bucket_id !== null) {
      message.bucketId = object.bucket_id;
    }
    return message;
  },
  toAmino(message: MigrationBucketInfo): MigrationBucketInfoAmino {
    const obj: any = {};
    obj.src_sp_id = message.srcSpId;
    obj.src_global_virtual_group_family_id = message.srcGlobalVirtualGroupFamilyId;
    obj.dst_sp_id = message.dstSpId;
    obj.bucket_id = message.bucketId;
    return obj;
  },
  fromAminoMsg(object: MigrationBucketInfoAminoMsg): MigrationBucketInfo {
    return MigrationBucketInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: MigrationBucketInfoProtoMsg): MigrationBucketInfo {
    return MigrationBucketInfo.decode(message.value);
  },
  toProto(message: MigrationBucketInfo): Uint8Array {
    return MigrationBucketInfo.encode(message).finish();
  },
  toProtoMsg(message: MigrationBucketInfo): MigrationBucketInfoProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MigrationBucketInfo",
      value: MigrationBucketInfo.encode(message).finish()
    };
  }
};
function createBaseResourceTags(): ResourceTags {
  return {
    tags: []
  };
}
export const ResourceTags = {
  typeUrl: "/greenfield.storage.ResourceTags",
  encode(message: ResourceTags, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tags) {
      ResourceTags_Tag.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceTags {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceTags();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tags.push(ResourceTags_Tag.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ResourceTags {
    return {
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => ResourceTags_Tag.fromJSON(e)) : []
    };
  },
  toJSON(message: ResourceTags): unknown {
    const obj: any = {};
    if (message.tags) {
      obj.tags = message.tags.map(e => e ? ResourceTags_Tag.toJSON(e) : undefined);
    } else {
      obj.tags = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ResourceTags>, I>>(object: I): ResourceTags {
    const message = createBaseResourceTags();
    message.tags = object.tags?.map(e => ResourceTags_Tag.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ResourceTagsSDKType): ResourceTags {
    return {
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => ResourceTags_Tag.fromSDK(e)) : []
    };
  },
  toSDK(message: ResourceTags): ResourceTagsSDKType {
    const obj: any = {};
    if (message.tags) {
      obj.tags = message.tags.map(e => e ? ResourceTags_Tag.toSDK(e) : undefined);
    } else {
      obj.tags = [];
    }
    return obj;
  },
  fromAmino(object: ResourceTagsAmino): ResourceTags {
    const message = createBaseResourceTags();
    message.tags = object.tags?.map(e => ResourceTags_Tag.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ResourceTags): ResourceTagsAmino {
    const obj: any = {};
    if (message.tags) {
      obj.tags = message.tags.map(e => e ? ResourceTags_Tag.toAmino(e) : undefined);
    } else {
      obj.tags = [];
    }
    return obj;
  },
  fromAminoMsg(object: ResourceTagsAminoMsg): ResourceTags {
    return ResourceTags.fromAmino(object.value);
  },
  fromProtoMsg(message: ResourceTagsProtoMsg): ResourceTags {
    return ResourceTags.decode(message.value);
  },
  toProto(message: ResourceTags): Uint8Array {
    return ResourceTags.encode(message).finish();
  },
  toProtoMsg(message: ResourceTags): ResourceTagsProtoMsg {
    return {
      typeUrl: "/greenfield.storage.ResourceTags",
      value: ResourceTags.encode(message).finish()
    };
  }
};
function createBaseResourceTags_Tag(): ResourceTags_Tag {
  return {
    key: "",
    value: ""
  };
}
export const ResourceTags_Tag = {
  typeUrl: "/greenfield.storage.Tag",
  encode(message: ResourceTags_Tag, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceTags_Tag {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceTags_Tag();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
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
  fromJSON(object: any): ResourceTags_Tag {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  toJSON(message: ResourceTags_Tag): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ResourceTags_Tag>, I>>(object: I): ResourceTags_Tag {
    const message = createBaseResourceTags_Tag();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromSDK(object: ResourceTags_TagSDKType): ResourceTags_Tag {
    return {
      key: object?.key,
      value: object?.value
    };
  },
  toSDK(message: ResourceTags_Tag): ResourceTags_TagSDKType {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: ResourceTags_TagAmino): ResourceTags_Tag {
    const message = createBaseResourceTags_Tag();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: ResourceTags_Tag): ResourceTags_TagAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object: ResourceTags_TagAminoMsg): ResourceTags_Tag {
    return ResourceTags_Tag.fromAmino(object.value);
  },
  fromProtoMsg(message: ResourceTags_TagProtoMsg): ResourceTags_Tag {
    return ResourceTags_Tag.decode(message.value);
  },
  toProto(message: ResourceTags_Tag): Uint8Array {
    return ResourceTags_Tag.encode(message).finish();
  },
  toProtoMsg(message: ResourceTags_Tag): ResourceTags_TagProtoMsg {
    return {
      typeUrl: "/greenfield.storage.Tag",
      value: ResourceTags_Tag.encode(message).finish()
    };
  }
};
function createBaseShadowObjectInfo(): ShadowObjectInfo {
  return {
    operator: "",
    id: "",
    contentType: "",
    payloadSize: Long.UZERO,
    checksums: [],
    updatedAt: Long.ZERO,
    version: Long.ZERO
  };
}
export const ShadowObjectInfo = {
  typeUrl: "/greenfield.storage.ShadowObjectInfo",
  encode(message: ShadowObjectInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.contentType !== "") {
      writer.uint32(26).string(message.contentType);
    }
    if (!message.payloadSize.isZero()) {
      writer.uint32(32).uint64(message.payloadSize);
    }
    for (const v of message.checksums) {
      writer.uint32(42).bytes(v!);
    }
    if (!message.updatedAt.isZero()) {
      writer.uint32(48).int64(message.updatedAt);
    }
    if (!message.version.isZero()) {
      writer.uint32(56).int64(message.version);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ShadowObjectInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShadowObjectInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.contentType = reader.string();
          break;
        case 4:
          message.payloadSize = (reader.uint64() as Long);
          break;
        case 5:
          message.checksums.push(reader.bytes());
          break;
        case 6:
          message.updatedAt = (reader.int64() as Long);
          break;
        case 7:
          message.version = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ShadowObjectInfo {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      id: isSet(object.id) ? String(object.id) : "",
      contentType: isSet(object.contentType) ? String(object.contentType) : "",
      payloadSize: isSet(object.payloadSize) ? Long.fromValue(object.payloadSize) : Long.UZERO,
      checksums: Array.isArray(object?.checksums) ? object.checksums.map((e: any) => bytesFromBase64(e)) : [],
      updatedAt: isSet(object.updatedAt) ? Long.fromValue(object.updatedAt) : Long.ZERO,
      version: isSet(object.version) ? Long.fromValue(object.version) : Long.ZERO
    };
  },
  toJSON(message: ShadowObjectInfo): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.id !== undefined && (obj.id = message.id);
    message.contentType !== undefined && (obj.contentType = message.contentType);
    message.payloadSize !== undefined && (obj.payloadSize = (message.payloadSize || Long.UZERO).toString());
    if (message.checksums) {
      obj.checksums = message.checksums.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.checksums = [];
    }
    message.updatedAt !== undefined && (obj.updatedAt = (message.updatedAt || Long.ZERO).toString());
    message.version !== undefined && (obj.version = (message.version || Long.ZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ShadowObjectInfo>, I>>(object: I): ShadowObjectInfo {
    const message = createBaseShadowObjectInfo();
    message.operator = object.operator ?? "";
    message.id = object.id ?? "";
    message.contentType = object.contentType ?? "";
    message.payloadSize = object.payloadSize !== undefined && object.payloadSize !== null ? Long.fromValue(object.payloadSize) : Long.UZERO;
    message.checksums = object.checksums?.map(e => e) || [];
    message.updatedAt = object.updatedAt !== undefined && object.updatedAt !== null ? Long.fromValue(object.updatedAt) : Long.ZERO;
    message.version = object.version !== undefined && object.version !== null ? Long.fromValue(object.version) : Long.ZERO;
    return message;
  },
  fromSDK(object: ShadowObjectInfoSDKType): ShadowObjectInfo {
    return {
      operator: object?.operator,
      id: object?.id,
      contentType: object?.content_type,
      payloadSize: object?.payload_size,
      checksums: Array.isArray(object?.checksums) ? object.checksums.map((e: any) => e) : [],
      updatedAt: object?.updated_at,
      version: object?.version
    };
  },
  toSDK(message: ShadowObjectInfo): ShadowObjectInfoSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.id = message.id;
    obj.content_type = message.contentType;
    obj.payload_size = message.payloadSize;
    if (message.checksums) {
      obj.checksums = message.checksums.map(e => e);
    } else {
      obj.checksums = [];
    }
    obj.updated_at = message.updatedAt;
    obj.version = message.version;
    return obj;
  },
  fromAmino(object: ShadowObjectInfoAmino): ShadowObjectInfo {
    const message = createBaseShadowObjectInfo();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.content_type !== undefined && object.content_type !== null) {
      message.contentType = object.content_type;
    }
    if (object.payload_size !== undefined && object.payload_size !== null) {
      message.payloadSize = Long.fromString(object.payload_size);
    }
    message.checksums = object.checksums?.map(e => bytesFromBase64(e)) || [];
    if (object.updated_at !== undefined && object.updated_at !== null) {
      message.updatedAt = Long.fromString(object.updated_at);
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = Long.fromString(object.version);
    }
    return message;
  },
  toAmino(message: ShadowObjectInfo): ShadowObjectInfoAmino {
    const obj: any = {};
    obj.operator = message.operator;
    obj.id = message.id;
    obj.content_type = message.contentType;
    obj.payload_size = message.payloadSize ? message.payloadSize.toString() : undefined;
    if (message.checksums) {
      obj.checksums = message.checksums.map(e => base64FromBytes(e));
    } else {
      obj.checksums = [];
    }
    obj.updated_at = message.updatedAt ? message.updatedAt.toString() : undefined;
    obj.version = message.version ? message.version.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ShadowObjectInfoAminoMsg): ShadowObjectInfo {
    return ShadowObjectInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: ShadowObjectInfoProtoMsg): ShadowObjectInfo {
    return ShadowObjectInfo.decode(message.value);
  },
  toProto(message: ShadowObjectInfo): Uint8Array {
    return ShadowObjectInfo.encode(message).finish();
  },
  toProtoMsg(message: ShadowObjectInfo): ShadowObjectInfoProtoMsg {
    return {
      typeUrl: "/greenfield.storage.ShadowObjectInfo",
      value: ShadowObjectInfo.encode(message).finish()
    };
  }
};