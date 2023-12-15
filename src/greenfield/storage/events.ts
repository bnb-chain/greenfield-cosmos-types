//@ts-nocheck
/* eslint-disable */
import { VisibilityType, SourceType, BucketStatus, ObjectStatus, RedundancyType, visibilityTypeFromJSON, sourceTypeFromJSON, bucketStatusFromJSON, visibilityTypeToJSON, sourceTypeToJSON, bucketStatusToJSON, objectStatusFromJSON, redundancyTypeFromJSON, objectStatusToJSON, redundancyTypeToJSON } from "./common";
import { ResourceTags, ResourceTagsSDKType, DeleteInfo, DeleteInfoSDKType } from "./types";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Long, isSet, DeepPartial, Exact, bytesFromBase64, base64FromBytes, fromJsonTimestamp, fromTimestamp } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "greenfield.storage";
/** EventCreateBucket is emitted on MsgCreateBucket */
export interface EventCreateBucket {
  /** owner define the account address of bucket owner */
  owner: string;
  /** bucket_name is a globally unique name of bucket */
  bucketName: string;
  /** visibility defines the highest permissions for bucket. When a bucket is public, everyone can get the object under it. */
  visibility: VisibilityType;
  /** create_at define the block timestamp when the bucket has been created */
  createAt: Long;
  /** bucket_id is the unique u256 for bucket. Not global, only unique in buckets. */
  bucketId: string;
  /** source_type define the source of the bucket. CrossChain or Greenfield origin */
  sourceType: SourceType;
  /** read_quota defines the charged traffic quota for read, not include free quota which provided by each storage provider */
  chargedReadQuota: Long;
  /** payment_address is the address of the payment account */
  paymentAddress: string;
  /** primary_sp_id is the unique id of primary sp. */
  primarySpId: number;
  /** global_virtual_group_family_id defines the unique id of gvg family */
  globalVirtualGroupFamilyId: number;
  /** status define the status of the bucket. */
  status: BucketStatus;
  /** tags define the tag of the bucket */
  tags: ResourceTags;
}
/** EventCreateBucket is emitted on MsgCreateBucket */
export interface EventCreateBucketSDKType {
  owner: string;
  bucket_name: string;
  visibility: VisibilityType;
  create_at: Long;
  bucket_id: string;
  source_type: SourceType;
  charged_read_quota: Long;
  payment_address: string;
  primary_sp_id: number;
  global_virtual_group_family_id: number;
  status: BucketStatus;
  tags: ResourceTagsSDKType;
}
/** EventDeleteBucket is emitted on MsgDeleteBucket */
export interface EventDeleteBucket {
  /** operator define the account address of operator who delete the bucket */
  operator: string;
  /** owner define the account address of the bucket owner */
  owner: string;
  /** bucket_name define the name of the deleted bucket */
  bucketName: string;
  /** bucket_id define an u256 id for bucket */
  bucketId: string;
  /** global_virtual_group_family_id defines the unique id of gvg family */
  globalVirtualGroupFamilyId: number;
}
/** EventDeleteBucket is emitted on MsgDeleteBucket */
export interface EventDeleteBucketSDKType {
  operator: string;
  owner: string;
  bucket_name: string;
  bucket_id: string;
  global_virtual_group_family_id: number;
}
/** EventUpdateBucketInfo is emitted on MsgUpdateBucketInfo */
export interface EventUpdateBucketInfo {
  /** operator define the account address of operator who update the bucket */
  operator: string;
  /** bucket_name define the name of the bucket */
  bucketName: string;
  /** bucket_id define an u256 id for bucket */
  bucketId: string;
  /** charged_read_quota_after define the read quota after updated */
  chargedReadQuota: Long;
  /** payment_address define the payment address after updated */
  paymentAddress: string;
  /** visibility defines the highest permission of object. */
  visibility: VisibilityType;
  /** global_virtual_group_family_id defines the gvg family id after migrated. */
  globalVirtualGroupFamilyId: number;
}
/** EventUpdateBucketInfo is emitted on MsgUpdateBucketInfo */
export interface EventUpdateBucketInfoSDKType {
  operator: string;
  bucket_name: string;
  bucket_id: string;
  charged_read_quota: Long;
  payment_address: string;
  visibility: VisibilityType;
  global_virtual_group_family_id: number;
}
/** EventDiscontinueBucket is emitted on MsgDiscontinueBucket */
export interface EventDiscontinueBucket {
  /** bucket_id define id of the bucket */
  bucketId: string;
  /** bucket_name define the name of the bucket */
  bucketName: string;
  /** the reason */
  reason: string;
  /** the timestamp after which the metadata will be deleted */
  deleteAt: Long;
}
/** EventDiscontinueBucket is emitted on MsgDiscontinueBucket */
export interface EventDiscontinueBucketSDKType {
  bucket_id: string;
  bucket_name: string;
  reason: string;
  delete_at: Long;
}
/** EventCreateObject is emitted on MsgCreateObject */
export interface EventCreateObject {
  /** creator define the account address of msg creator */
  creator: string;
  /** owner define the account address of object owner */
  owner: string;
  /** bucket_name define the name of bucket */
  bucketName: string;
  /** object_name define the name of object */
  objectName: string;
  /** bucket_id define an u256 id for bucket */
  bucketId: string;
  /** object_id define an u256 id for object */
  objectId: string;
  /** primary_sp_id define the unique id of primary sp */
  primarySpId: number;
  /** payload_size define the size of payload data which you want upload */
  payloadSize: Long;
  /** visibility defines the highest permission of object. */
  visibility: VisibilityType;
  /** content_type define the content type of the payload data */
  contentType: string;
  /** create_at define the block timestamp when the object created */
  createAt: Long;
  /** status define the status of the object. INIT or IN_SERVICE or others */
  status: ObjectStatus;
  /** redundancy_type define the type of redundancy. Replication or EC */
  redundancyType: RedundancyType;
  /** source_type define the source of the object.  CrossChain or Greenfield origin */
  sourceType: SourceType;
  /** checksums define the total checksums of the object which generated by redundancy */
  checksums: Uint8Array[];
  /** local_virtual_group_id defines the unique id of lvg which the object stored */
  localVirtualGroupId: number;
  /** tags define the tag of the object */
  tags: ResourceTags;
}
/** EventCreateObject is emitted on MsgCreateObject */
export interface EventCreateObjectSDKType {
  creator: string;
  owner: string;
  bucket_name: string;
  object_name: string;
  bucket_id: string;
  object_id: string;
  primary_sp_id: number;
  payload_size: Long;
  visibility: VisibilityType;
  content_type: string;
  create_at: Long;
  status: ObjectStatus;
  redundancy_type: RedundancyType;
  source_type: SourceType;
  checksums: Uint8Array[];
  local_virtual_group_id: number;
  tags: ResourceTagsSDKType;
}
/** EventCancelCreateObject is emitted on MsgCancelCreateObject */
export interface EventCancelCreateObject {
  /** operator define the account address of operator who cancel create object */
  operator: string;
  /** bucket_name define the name of the bucket */
  bucketName: string;
  /** object_name define the name of the object */
  objectName: string;
  /** primary_sp_id define the unique id of primary sp */
  primarySpId: number;
  /** id define an u256 id for object */
  objectId: string;
}
/** EventCancelCreateObject is emitted on MsgCancelCreateObject */
export interface EventCancelCreateObjectSDKType {
  operator: string;
  bucket_name: string;
  object_name: string;
  primary_sp_id: number;
  object_id: string;
}
/** EventSealObject is emitted on MsgSealObject */
export interface EventSealObject {
  /** operator define the account address of operator who seal object */
  operator: string;
  /** bucket_name define the name of the bucket */
  bucketName: string;
  /** object_name define the name of the object */
  objectName: string;
  /** id define an u256 id for object */
  objectId: string;
  /** status define the status of the object. INIT or IN_SERVICE or others */
  status: ObjectStatus;
  /** global_virtual_group_id defines the unique id of gvg which the object stored */
  globalVirtualGroupId: number;
  /** local_virtual_group_id defines the unique id of lvg which the object stored */
  localVirtualGroupId: number;
}
/** EventSealObject is emitted on MsgSealObject */
export interface EventSealObjectSDKType {
  operator: string;
  bucket_name: string;
  object_name: string;
  object_id: string;
  status: ObjectStatus;
  global_virtual_group_id: number;
  local_virtual_group_id: number;
}
/** EventCopyObject is emitted on MsgCopyObject */
export interface EventCopyObject {
  /** operator define the account address of operator who copy the object */
  operator: string;
  /** src_bucket_name define the name of the src bucket */
  srcBucketName: string;
  /** src_object_name define the name of the src object */
  srcObjectName: string;
  /** dst_bucket_name define the name of the dst bucket */
  dstBucketName: string;
  /** dst_object_name define the name of the dst object */
  dstObjectName: string;
  /** src_object_id define the u256 id for src object */
  srcObjectId: string;
  /** dst_object_id define the u256 id for dst object */
  dstObjectId: string;
  /** local_virtual_group_id defines the unique id of lvg which the object stored */
  localVirtualGroupId: number;
}
/** EventCopyObject is emitted on MsgCopyObject */
export interface EventCopyObjectSDKType {
  operator: string;
  src_bucket_name: string;
  src_object_name: string;
  dst_bucket_name: string;
  dst_object_name: string;
  src_object_id: string;
  dst_object_id: string;
  local_virtual_group_id: number;
}
/** EventDeleteObject is emitted on MsgDeleteObject */
export interface EventDeleteObject {
  /** operator define the account address of operator who delete the object */
  operator: string;
  /** bucket_name define the name of the bucket */
  bucketName: string;
  /** object_name define the name of the object */
  objectName: string;
  /** id define an u256 id for object */
  objectId: string;
  /** local_virtual_group_id defines the unique id of lvg which the object stored */
  localVirtualGroupId: number;
}
/** EventDeleteObject is emitted on MsgDeleteObject */
export interface EventDeleteObjectSDKType {
  operator: string;
  bucket_name: string;
  object_name: string;
  object_id: string;
  local_virtual_group_id: number;
}
/** EventRejectSealObject is emitted on MsgRejectSealObject */
export interface EventRejectSealObject {
  /** operator define the account address of operator who reject seal object */
  operator: string;
  /** bucket_name define the name of the bucket */
  bucketName: string;
  /** object_name define the name of the object */
  objectName: string;
  /** id define an u256 id for object */
  objectId: string;
}
/** EventRejectSealObject is emitted on MsgRejectSealObject */
export interface EventRejectSealObjectSDKType {
  operator: string;
  bucket_name: string;
  object_name: string;
  object_id: string;
}
/** EventDiscontinueObject is emitted on MsgDiscontinueObject */
export interface EventDiscontinueObject {
  /** bucket_name define the name of the bucket */
  bucketName: string;
  /** object_id defines id of the object */
  objectId: string;
  /** the reason */
  reason: string;
  /** the timestamp after which the metadata will be deleted */
  deleteAt: Long;
}
/** EventDiscontinueObject is emitted on MsgDiscontinueObject */
export interface EventDiscontinueObjectSDKType {
  bucket_name: string;
  object_id: string;
  reason: string;
  delete_at: Long;
}
/** EventUpdateObjectInfo is emitted on MsgUpdateObjectInfo */
export interface EventUpdateObjectInfo {
  /** operator define the account address of operator who update the bucket */
  operator: string;
  /** bucket_name define the name of the bucket */
  bucketName: string;
  /** object_name define the name of the object */
  objectName: string;
  /** object_id define an u256 id for object */
  objectId: string;
  /** visibility defines the highest permission of object. */
  visibility: VisibilityType;
}
/** EventUpdateObjectInfo is emitted on MsgUpdateObjectInfo */
export interface EventUpdateObjectInfoSDKType {
  operator: string;
  bucket_name: string;
  object_name: string;
  object_id: string;
  visibility: VisibilityType;
}
/** EventCreateGroup is emitted on MsgCreateGroup */
export interface EventCreateGroup {
  /** owner define the account address of group owner */
  owner: string;
  /** group_name define the name of the group */
  groupName: string;
  /** id define an u256 id for group */
  groupId: string;
  /** source_type define the source of the group. CrossChain or Greenfield origin */
  sourceType: SourceType;
  /** extra defines extra info for the group */
  extra: string;
  /** tags define the tag of the group */
  tags: ResourceTags;
}
/** EventCreateGroup is emitted on MsgCreateGroup */
export interface EventCreateGroupSDKType {
  owner: string;
  group_name: string;
  group_id: string;
  source_type: SourceType;
  extra: string;
  tags: ResourceTagsSDKType;
}
/** EventDeleteGroup is emitted on MsgDeleteGroup */
export interface EventDeleteGroup {
  /** owner define the account address of group owner */
  owner: string;
  /** group_name define the name of the group */
  groupName: string;
  /** id define an u256 id for group */
  groupId: string;
}
/** EventDeleteGroup is emitted on MsgDeleteGroup */
export interface EventDeleteGroupSDKType {
  owner: string;
  group_name: string;
  group_id: string;
}
/** EventLeaveGroup is emitted on MsgLeaveGroup */
export interface EventLeaveGroup {
  /** member_address define the address of the member who leave the group */
  memberAddress: string;
  /** owner define the account address of group owner */
  owner: string;
  /** group_name define the name of the group */
  groupName: string;
  /** id define an u256 id for group */
  groupId: string;
}
/** EventLeaveGroup is emitted on MsgLeaveGroup */
export interface EventLeaveGroupSDKType {
  member_address: string;
  owner: string;
  group_name: string;
  group_id: string;
}
/** EventUpdateGroupMember is emitted on MsgUpdateGroupMember */
export interface EventUpdateGroupMember {
  /** operator define the account address of operator who update the group member */
  operator: string;
  /** owner define the account address of group owner */
  owner: string;
  /** group_name define the name of the group */
  groupName: string;
  /** id define an u256 id for group */
  groupId: string;
  /** members_to_add defines all the members to be added to the group */
  membersToAdd: EventGroupMemberDetail[];
  /** members_to_add defines all the members to be deleted from the group */
  membersToDelete: string[];
}
/** EventUpdateGroupMember is emitted on MsgUpdateGroupMember */
export interface EventUpdateGroupMemberSDKType {
  operator: string;
  owner: string;
  group_name: string;
  group_id: string;
  members_to_add: EventGroupMemberDetailSDKType[];
  members_to_delete: string[];
}
export interface EventRenewGroupMember {
  /** operator define the account address of operator who update the group member */
  operator: string;
  /** owner define the account address of group owner */
  owner: string;
  /** group_name define the name of the group */
  groupName: string;
  /** id define an u256 id for group */
  groupId: string;
  /** source_type define the source of the group. CrossChain or Greenfield origin */
  sourceType: SourceType;
  /** members define the all the address of the members. */
  members: EventGroupMemberDetail[];
}
export interface EventRenewGroupMemberSDKType {
  operator: string;
  owner: string;
  group_name: string;
  group_id: string;
  source_type: SourceType;
  members: EventGroupMemberDetailSDKType[];
}
export interface EventGroupMemberDetail {
  /** member defines the account address of the group member */
  member: string;
  /** expiration_time defines the expiration time of the group member */
  expirationTime: Timestamp;
}
export interface EventGroupMemberDetailSDKType {
  member: string;
  expiration_time: TimestampSDKType;
}
/** EventUpdateGroupExtra is emitted on MsgUpdateGroupExtra */
export interface EventUpdateGroupExtra {
  /** operator define the account address of operator who update the group member */
  operator: string;
  /** owner define the account address of group owner */
  owner: string;
  /** group_name define the name of the group */
  groupName: string;
  /** id define an u256 id for group */
  groupId: string;
  /** extra defines extra info for the group to update */
  extra: string;
}
/** EventUpdateGroupExtra is emitted on MsgUpdateGroupExtra */
export interface EventUpdateGroupExtraSDKType {
  operator: string;
  owner: string;
  group_name: string;
  group_id: string;
  extra: string;
}
/** EventMirrorBucket is emitted on MirrorBucket */
export interface EventMirrorBucket {
  /** operator define the account address of operator who mirror the bucket */
  operator: string;
  /** bucket_name defines the name of the bucket */
  bucketName: string;
  /** bucket_id define an u256 id for bucket */
  bucketId: string;
  /** chain id of the destination chain */
  destChainId: number;
}
/** EventMirrorBucket is emitted on MirrorBucket */
export interface EventMirrorBucketSDKType {
  operator: string;
  bucket_name: string;
  bucket_id: string;
  dest_chain_id: number;
}
/** EventMirrorBucketResult is emitted on receiving ack package from destination chain */
export interface EventMirrorBucketResult {
  /** status define the status of the result */
  status: number;
  /** bucket_name defines the name of the bucket */
  bucketName: string;
  /** bucket_id define an u256 id for bucket */
  bucketId: string;
  /** chain id of the destination chain */
  destChainId: number;
}
/** EventMirrorBucketResult is emitted on receiving ack package from destination chain */
export interface EventMirrorBucketResultSDKType {
  status: number;
  bucket_name: string;
  bucket_id: string;
  dest_chain_id: number;
}
/** EventMirrorObject is emitted on MirrorObject */
export interface EventMirrorObject {
  /** operator define the account address of operator who delete the object */
  operator: string;
  /** bucket_name define the name of the bucket */
  bucketName: string;
  /** object_name define the name of the object */
  objectName: string;
  /** object_id define an u256 id for object */
  objectId: string;
  /** chain id of the destination chain */
  destChainId: number;
}
/** EventMirrorObject is emitted on MirrorObject */
export interface EventMirrorObjectSDKType {
  operator: string;
  bucket_name: string;
  object_name: string;
  object_id: string;
  dest_chain_id: number;
}
/** EventMirrorObjectResult is emitted on receiving ack package from destination chain */
export interface EventMirrorObjectResult {
  /** status define the status of the result */
  status: number;
  /** bucket_name define the name of the bucket */
  bucketName: string;
  /** object_name define the name of the object */
  objectName: string;
  /** object_id define an u256 id for object */
  objectId: string;
  /** chain id of the destination chain */
  destChainId: number;
}
/** EventMirrorObjectResult is emitted on receiving ack package from destination chain */
export interface EventMirrorObjectResultSDKType {
  status: number;
  bucket_name: string;
  object_name: string;
  object_id: string;
  dest_chain_id: number;
}
/** EventMirrorGroup is emitted on MirrorGroup */
export interface EventMirrorGroup {
  /** owner define the account address of group owner */
  owner: string;
  /** group_name define the name of the group */
  groupName: string;
  /** group_id define an u256 id for group */
  groupId: string;
  /** chain id of the destination chain */
  destChainId: number;
}
/** EventMirrorGroup is emitted on MirrorGroup */
export interface EventMirrorGroupSDKType {
  owner: string;
  group_name: string;
  group_id: string;
  dest_chain_id: number;
}
/** EventMirrorGroupResult is emitted on receiving ack package from destination chain */
export interface EventMirrorGroupResult {
  /** status define the status of the result */
  status: number;
  /** group_name define the name of the group */
  groupName: string;
  /** group_id define an u256 id for group */
  groupId: string;
  /** chain id of the destination chain */
  destChainId: number;
}
/** EventMirrorGroupResult is emitted on receiving ack package from destination chain */
export interface EventMirrorGroupResultSDKType {
  status: number;
  group_name: string;
  group_id: string;
  dest_chain_id: number;
}
/** EventStalePolicyCleanup is emitted when specified block height's stale policies need to be Garbage collected */
export interface EventStalePolicyCleanup {
  blockNum: Long;
  deleteInfo: DeleteInfo;
}
/** EventStalePolicyCleanup is emitted when specified block height's stale policies need to be Garbage collected */
export interface EventStalePolicyCleanupSDKType {
  blockNum: Long;
  delete_info: DeleteInfoSDKType;
}
export interface EventMigrationBucket {
  /**
   * The address of the operator that initiated the bucket migration,
   * usually the owner of the bucket or another account which has permission to operate
   */
  operator: string;
  /** The name of the bucket to be migrated */
  bucketName: string;
  /** bucket_id define an u256 id for bucket */
  bucketId: string;
  /** The id of the destination primary sp */
  dstPrimarySpId: number;
}
export interface EventMigrationBucketSDKType {
  operator: string;
  bucket_name: string;
  bucket_id: string;
  dst_primary_sp_id: number;
}
export interface EventCancelMigrationBucket {
  /**
   * The address of the operator that canceled the bucket migration,
   * usually the owner of the bucket or another account which has permission to operate
   */
  operator: string;
  /** The name of the bucket to be migrated */
  bucketName: string;
  /** bucket_id define an u256 id for bucket */
  bucketId: string;
}
export interface EventCancelMigrationBucketSDKType {
  operator: string;
  bucket_name: string;
  bucket_id: string;
}
export interface EventRejectMigrateBucket {
  /** The address of the operator that reject the bucket migration, must be the dest SP */
  operator: string;
  /** The name of the bucket to be migrated */
  bucketName: string;
  /** bucket_id define an u256 id for bucket */
  bucketId: string;
}
export interface EventRejectMigrateBucketSDKType {
  operator: string;
  bucket_name: string;
  bucket_id: string;
}
export interface EventCompleteMigrationBucket {
  /**
   * The address of the operator that initiated the bucket migration,
   * usually the owner of the bucket or another account which has permission to operate
   */
  operator: string;
  /** The name of the bucket to be migrated */
  bucketName: string;
  /** bucket_id define an u256 id for bucket */
  bucketId: string;
  /** The family id that the bucket to be migrated to */
  globalVirtualGroupFamilyId: number;
  /** The src_primary_sp_id defines the primary sp id of the bucket before migrate. */
  srcPrimarySpId: number;
}
export interface EventCompleteMigrationBucketSDKType {
  operator: string;
  bucket_name: string;
  bucket_id: string;
  global_virtual_group_family_id: number;
  src_primary_sp_id: number;
}
export interface EventSetTag {
  /** resource defines a greenfield standard resource name that can be generated by GRN structure */
  resource: string;
  /** tags define the tag of the source */
  tags: ResourceTags;
}
export interface EventSetTagSDKType {
  resource: string;
  tags: ResourceTagsSDKType;
}
function createBaseEventCreateBucket(): EventCreateBucket {
  return {
    owner: "",
    bucketName: "",
    visibility: 0,
    createAt: Long.ZERO,
    bucketId: "",
    sourceType: 0,
    chargedReadQuota: Long.UZERO,
    paymentAddress: "",
    primarySpId: 0,
    globalVirtualGroupFamilyId: 0,
    status: 0,
    tags: ResourceTags.fromPartial({})
  };
}
export const EventCreateBucket = {
  encode(message: EventCreateBucket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }
    if (message.visibility !== 0) {
      writer.uint32(24).int32(message.visibility);
    }
    if (!message.createAt.isZero()) {
      writer.uint32(32).int64(message.createAt);
    }
    if (message.bucketId !== "") {
      writer.uint32(42).string(message.bucketId);
    }
    if (message.sourceType !== 0) {
      writer.uint32(48).int32(message.sourceType);
    }
    if (!message.chargedReadQuota.isZero()) {
      writer.uint32(56).uint64(message.chargedReadQuota);
    }
    if (message.paymentAddress !== "") {
      writer.uint32(66).string(message.paymentAddress);
    }
    if (message.primarySpId !== 0) {
      writer.uint32(72).uint32(message.primarySpId);
    }
    if (message.globalVirtualGroupFamilyId !== 0) {
      writer.uint32(80).uint32(message.globalVirtualGroupFamilyId);
    }
    if (message.status !== 0) {
      writer.uint32(88).int32(message.status);
    }
    if (message.tags !== undefined) {
      ResourceTags.encode(message.tags, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateBucket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateBucket();
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
          message.createAt = (reader.int64() as Long);
          break;
        case 5:
          message.bucketId = reader.string();
          break;
        case 6:
          message.sourceType = (reader.int32() as any);
          break;
        case 7:
          message.chargedReadQuota = (reader.uint64() as Long);
          break;
        case 8:
          message.paymentAddress = reader.string();
          break;
        case 9:
          message.primarySpId = reader.uint32();
          break;
        case 10:
          message.globalVirtualGroupFamilyId = reader.uint32();
          break;
        case 11:
          message.status = (reader.int32() as any);
          break;
        case 12:
          message.tags = ResourceTags.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventCreateBucket {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      visibility: isSet(object.visibility) ? visibilityTypeFromJSON(object.visibility) : -1,
      createAt: isSet(object.createAt) ? Long.fromValue(object.createAt) : Long.ZERO,
      bucketId: isSet(object.bucketId) ? String(object.bucketId) : "",
      sourceType: isSet(object.sourceType) ? sourceTypeFromJSON(object.sourceType) : -1,
      chargedReadQuota: isSet(object.chargedReadQuota) ? Long.fromValue(object.chargedReadQuota) : Long.UZERO,
      paymentAddress: isSet(object.paymentAddress) ? String(object.paymentAddress) : "",
      primarySpId: isSet(object.primarySpId) ? Number(object.primarySpId) : 0,
      globalVirtualGroupFamilyId: isSet(object.globalVirtualGroupFamilyId) ? Number(object.globalVirtualGroupFamilyId) : 0,
      status: isSet(object.status) ? bucketStatusFromJSON(object.status) : -1,
      tags: isSet(object.tags) ? ResourceTags.fromJSON(object.tags) : undefined
    };
  },
  toJSON(message: EventCreateBucket): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.visibility !== undefined && (obj.visibility = visibilityTypeToJSON(message.visibility));
    message.createAt !== undefined && (obj.createAt = (message.createAt || Long.ZERO).toString());
    message.bucketId !== undefined && (obj.bucketId = message.bucketId);
    message.sourceType !== undefined && (obj.sourceType = sourceTypeToJSON(message.sourceType));
    message.chargedReadQuota !== undefined && (obj.chargedReadQuota = (message.chargedReadQuota || Long.UZERO).toString());
    message.paymentAddress !== undefined && (obj.paymentAddress = message.paymentAddress);
    message.primarySpId !== undefined && (obj.primarySpId = Math.round(message.primarySpId));
    message.globalVirtualGroupFamilyId !== undefined && (obj.globalVirtualGroupFamilyId = Math.round(message.globalVirtualGroupFamilyId));
    message.status !== undefined && (obj.status = bucketStatusToJSON(message.status));
    message.tags !== undefined && (obj.tags = message.tags ? ResourceTags.toJSON(message.tags) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventCreateBucket>, I>>(object: I): EventCreateBucket {
    const message = createBaseEventCreateBucket();
    message.owner = object.owner ?? "";
    message.bucketName = object.bucketName ?? "";
    message.visibility = object.visibility ?? 0;
    message.createAt = object.createAt !== undefined && object.createAt !== null ? Long.fromValue(object.createAt) : Long.ZERO;
    message.bucketId = object.bucketId ?? "";
    message.sourceType = object.sourceType ?? 0;
    message.chargedReadQuota = object.chargedReadQuota !== undefined && object.chargedReadQuota !== null ? Long.fromValue(object.chargedReadQuota) : Long.UZERO;
    message.paymentAddress = object.paymentAddress ?? "";
    message.primarySpId = object.primarySpId ?? 0;
    message.globalVirtualGroupFamilyId = object.globalVirtualGroupFamilyId ?? 0;
    message.status = object.status ?? 0;
    message.tags = object.tags !== undefined && object.tags !== null ? ResourceTags.fromPartial(object.tags) : undefined;
    return message;
  },
  fromSDK(object: EventCreateBucketSDKType): EventCreateBucket {
    return {
      owner: object?.owner,
      bucketName: object?.bucket_name,
      visibility: isSet(object.visibility) ? visibilityTypeFromJSON(object.visibility) : -1,
      createAt: object?.create_at,
      bucketId: object?.bucket_id,
      sourceType: isSet(object.source_type) ? sourceTypeFromJSON(object.source_type) : -1,
      chargedReadQuota: object?.charged_read_quota,
      paymentAddress: object?.payment_address,
      primarySpId: object?.primary_sp_id,
      globalVirtualGroupFamilyId: object?.global_virtual_group_family_id,
      status: isSet(object.status) ? bucketStatusFromJSON(object.status) : -1,
      tags: object.tags ? ResourceTags.fromSDK(object.tags) : undefined
    };
  },
  toSDK(message: EventCreateBucket): EventCreateBucketSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.bucket_name = message.bucketName;
    message.visibility !== undefined && (obj.visibility = visibilityTypeToJSON(message.visibility));
    obj.create_at = message.createAt;
    obj.bucket_id = message.bucketId;
    message.sourceType !== undefined && (obj.source_type = sourceTypeToJSON(message.sourceType));
    obj.charged_read_quota = message.chargedReadQuota;
    obj.payment_address = message.paymentAddress;
    obj.primary_sp_id = message.primarySpId;
    obj.global_virtual_group_family_id = message.globalVirtualGroupFamilyId;
    message.status !== undefined && (obj.status = bucketStatusToJSON(message.status));
    message.tags !== undefined && (obj.tags = message.tags ? ResourceTags.toSDK(message.tags) : undefined);
    return obj;
  }
};
function createBaseEventDeleteBucket(): EventDeleteBucket {
  return {
    operator: "",
    owner: "",
    bucketName: "",
    bucketId: "",
    globalVirtualGroupFamilyId: 0
  };
}
export const EventDeleteBucket = {
  encode(message: EventDeleteBucket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.bucketName !== "") {
      writer.uint32(26).string(message.bucketName);
    }
    if (message.bucketId !== "") {
      writer.uint32(34).string(message.bucketId);
    }
    if (message.globalVirtualGroupFamilyId !== 0) {
      writer.uint32(40).uint32(message.globalVirtualGroupFamilyId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventDeleteBucket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDeleteBucket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.bucketName = reader.string();
          break;
        case 4:
          message.bucketId = reader.string();
          break;
        case 5:
          message.globalVirtualGroupFamilyId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventDeleteBucket {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      bucketId: isSet(object.bucketId) ? String(object.bucketId) : "",
      globalVirtualGroupFamilyId: isSet(object.globalVirtualGroupFamilyId) ? Number(object.globalVirtualGroupFamilyId) : 0
    };
  },
  toJSON(message: EventDeleteBucket): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.owner !== undefined && (obj.owner = message.owner);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.bucketId !== undefined && (obj.bucketId = message.bucketId);
    message.globalVirtualGroupFamilyId !== undefined && (obj.globalVirtualGroupFamilyId = Math.round(message.globalVirtualGroupFamilyId));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventDeleteBucket>, I>>(object: I): EventDeleteBucket {
    const message = createBaseEventDeleteBucket();
    message.operator = object.operator ?? "";
    message.owner = object.owner ?? "";
    message.bucketName = object.bucketName ?? "";
    message.bucketId = object.bucketId ?? "";
    message.globalVirtualGroupFamilyId = object.globalVirtualGroupFamilyId ?? 0;
    return message;
  },
  fromSDK(object: EventDeleteBucketSDKType): EventDeleteBucket {
    return {
      operator: object?.operator,
      owner: object?.owner,
      bucketName: object?.bucket_name,
      bucketId: object?.bucket_id,
      globalVirtualGroupFamilyId: object?.global_virtual_group_family_id
    };
  },
  toSDK(message: EventDeleteBucket): EventDeleteBucketSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.owner = message.owner;
    obj.bucket_name = message.bucketName;
    obj.bucket_id = message.bucketId;
    obj.global_virtual_group_family_id = message.globalVirtualGroupFamilyId;
    return obj;
  }
};
function createBaseEventUpdateBucketInfo(): EventUpdateBucketInfo {
  return {
    operator: "",
    bucketName: "",
    bucketId: "",
    chargedReadQuota: Long.UZERO,
    paymentAddress: "",
    visibility: 0,
    globalVirtualGroupFamilyId: 0
  };
}
export const EventUpdateBucketInfo = {
  encode(message: EventUpdateBucketInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }
    if (message.bucketId !== "") {
      writer.uint32(26).string(message.bucketId);
    }
    if (!message.chargedReadQuota.isZero()) {
      writer.uint32(32).uint64(message.chargedReadQuota);
    }
    if (message.paymentAddress !== "") {
      writer.uint32(42).string(message.paymentAddress);
    }
    if (message.visibility !== 0) {
      writer.uint32(48).int32(message.visibility);
    }
    if (message.globalVirtualGroupFamilyId !== 0) {
      writer.uint32(56).uint32(message.globalVirtualGroupFamilyId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateBucketInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateBucketInfo();
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
          message.bucketId = reader.string();
          break;
        case 4:
          message.chargedReadQuota = (reader.uint64() as Long);
          break;
        case 5:
          message.paymentAddress = reader.string();
          break;
        case 6:
          message.visibility = (reader.int32() as any);
          break;
        case 7:
          message.globalVirtualGroupFamilyId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventUpdateBucketInfo {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      bucketId: isSet(object.bucketId) ? String(object.bucketId) : "",
      chargedReadQuota: isSet(object.chargedReadQuota) ? Long.fromValue(object.chargedReadQuota) : Long.UZERO,
      paymentAddress: isSet(object.paymentAddress) ? String(object.paymentAddress) : "",
      visibility: isSet(object.visibility) ? visibilityTypeFromJSON(object.visibility) : -1,
      globalVirtualGroupFamilyId: isSet(object.globalVirtualGroupFamilyId) ? Number(object.globalVirtualGroupFamilyId) : 0
    };
  },
  toJSON(message: EventUpdateBucketInfo): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.bucketId !== undefined && (obj.bucketId = message.bucketId);
    message.chargedReadQuota !== undefined && (obj.chargedReadQuota = (message.chargedReadQuota || Long.UZERO).toString());
    message.paymentAddress !== undefined && (obj.paymentAddress = message.paymentAddress);
    message.visibility !== undefined && (obj.visibility = visibilityTypeToJSON(message.visibility));
    message.globalVirtualGroupFamilyId !== undefined && (obj.globalVirtualGroupFamilyId = Math.round(message.globalVirtualGroupFamilyId));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventUpdateBucketInfo>, I>>(object: I): EventUpdateBucketInfo {
    const message = createBaseEventUpdateBucketInfo();
    message.operator = object.operator ?? "";
    message.bucketName = object.bucketName ?? "";
    message.bucketId = object.bucketId ?? "";
    message.chargedReadQuota = object.chargedReadQuota !== undefined && object.chargedReadQuota !== null ? Long.fromValue(object.chargedReadQuota) : Long.UZERO;
    message.paymentAddress = object.paymentAddress ?? "";
    message.visibility = object.visibility ?? 0;
    message.globalVirtualGroupFamilyId = object.globalVirtualGroupFamilyId ?? 0;
    return message;
  },
  fromSDK(object: EventUpdateBucketInfoSDKType): EventUpdateBucketInfo {
    return {
      operator: object?.operator,
      bucketName: object?.bucket_name,
      bucketId: object?.bucket_id,
      chargedReadQuota: object?.charged_read_quota,
      paymentAddress: object?.payment_address,
      visibility: isSet(object.visibility) ? visibilityTypeFromJSON(object.visibility) : -1,
      globalVirtualGroupFamilyId: object?.global_virtual_group_family_id
    };
  },
  toSDK(message: EventUpdateBucketInfo): EventUpdateBucketInfoSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.bucket_id = message.bucketId;
    obj.charged_read_quota = message.chargedReadQuota;
    obj.payment_address = message.paymentAddress;
    message.visibility !== undefined && (obj.visibility = visibilityTypeToJSON(message.visibility));
    obj.global_virtual_group_family_id = message.globalVirtualGroupFamilyId;
    return obj;
  }
};
function createBaseEventDiscontinueBucket(): EventDiscontinueBucket {
  return {
    bucketId: "",
    bucketName: "",
    reason: "",
    deleteAt: Long.ZERO
  };
}
export const EventDiscontinueBucket = {
  encode(message: EventDiscontinueBucket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bucketId !== "") {
      writer.uint32(10).string(message.bucketId);
    }
    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    if (!message.deleteAt.isZero()) {
      writer.uint32(32).int64(message.deleteAt);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventDiscontinueBucket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDiscontinueBucket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bucketId = reader.string();
          break;
        case 2:
          message.bucketName = reader.string();
          break;
        case 3:
          message.reason = reader.string();
          break;
        case 4:
          message.deleteAt = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventDiscontinueBucket {
    return {
      bucketId: isSet(object.bucketId) ? String(object.bucketId) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      reason: isSet(object.reason) ? String(object.reason) : "",
      deleteAt: isSet(object.deleteAt) ? Long.fromValue(object.deleteAt) : Long.ZERO
    };
  },
  toJSON(message: EventDiscontinueBucket): unknown {
    const obj: any = {};
    message.bucketId !== undefined && (obj.bucketId = message.bucketId);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.reason !== undefined && (obj.reason = message.reason);
    message.deleteAt !== undefined && (obj.deleteAt = (message.deleteAt || Long.ZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventDiscontinueBucket>, I>>(object: I): EventDiscontinueBucket {
    const message = createBaseEventDiscontinueBucket();
    message.bucketId = object.bucketId ?? "";
    message.bucketName = object.bucketName ?? "";
    message.reason = object.reason ?? "";
    message.deleteAt = object.deleteAt !== undefined && object.deleteAt !== null ? Long.fromValue(object.deleteAt) : Long.ZERO;
    return message;
  },
  fromSDK(object: EventDiscontinueBucketSDKType): EventDiscontinueBucket {
    return {
      bucketId: object?.bucket_id,
      bucketName: object?.bucket_name,
      reason: object?.reason,
      deleteAt: object?.delete_at
    };
  },
  toSDK(message: EventDiscontinueBucket): EventDiscontinueBucketSDKType {
    const obj: any = {};
    obj.bucket_id = message.bucketId;
    obj.bucket_name = message.bucketName;
    obj.reason = message.reason;
    obj.delete_at = message.deleteAt;
    return obj;
  }
};
function createBaseEventCreateObject(): EventCreateObject {
  return {
    creator: "",
    owner: "",
    bucketName: "",
    objectName: "",
    bucketId: "",
    objectId: "",
    primarySpId: 0,
    payloadSize: Long.UZERO,
    visibility: 0,
    contentType: "",
    createAt: Long.ZERO,
    status: 0,
    redundancyType: 0,
    sourceType: 0,
    checksums: [],
    localVirtualGroupId: 0,
    tags: ResourceTags.fromPartial({})
  };
}
export const EventCreateObject = {
  encode(message: EventCreateObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.bucketName !== "") {
      writer.uint32(26).string(message.bucketName);
    }
    if (message.objectName !== "") {
      writer.uint32(34).string(message.objectName);
    }
    if (message.bucketId !== "") {
      writer.uint32(50).string(message.bucketId);
    }
    if (message.objectId !== "") {
      writer.uint32(58).string(message.objectId);
    }
    if (message.primarySpId !== 0) {
      writer.uint32(64).uint32(message.primarySpId);
    }
    if (!message.payloadSize.isZero()) {
      writer.uint32(72).uint64(message.payloadSize);
    }
    if (message.visibility !== 0) {
      writer.uint32(80).int32(message.visibility);
    }
    if (message.contentType !== "") {
      writer.uint32(90).string(message.contentType);
    }
    if (!message.createAt.isZero()) {
      writer.uint32(96).int64(message.createAt);
    }
    if (message.status !== 0) {
      writer.uint32(104).int32(message.status);
    }
    if (message.redundancyType !== 0) {
      writer.uint32(112).int32(message.redundancyType);
    }
    if (message.sourceType !== 0) {
      writer.uint32(120).int32(message.sourceType);
    }
    for (const v of message.checksums) {
      writer.uint32(130).bytes(v!);
    }
    if (message.localVirtualGroupId !== 0) {
      writer.uint32(136).uint32(message.localVirtualGroupId);
    }
    if (message.tags !== undefined) {
      ResourceTags.encode(message.tags, writer.uint32(146).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateObject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateObject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.bucketName = reader.string();
          break;
        case 4:
          message.objectName = reader.string();
          break;
        case 6:
          message.bucketId = reader.string();
          break;
        case 7:
          message.objectId = reader.string();
          break;
        case 8:
          message.primarySpId = reader.uint32();
          break;
        case 9:
          message.payloadSize = (reader.uint64() as Long);
          break;
        case 10:
          message.visibility = (reader.int32() as any);
          break;
        case 11:
          message.contentType = reader.string();
          break;
        case 12:
          message.createAt = (reader.int64() as Long);
          break;
        case 13:
          message.status = (reader.int32() as any);
          break;
        case 14:
          message.redundancyType = (reader.int32() as any);
          break;
        case 15:
          message.sourceType = (reader.int32() as any);
          break;
        case 16:
          message.checksums.push(reader.bytes());
          break;
        case 17:
          message.localVirtualGroupId = reader.uint32();
          break;
        case 18:
          message.tags = ResourceTags.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventCreateObject {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      objectName: isSet(object.objectName) ? String(object.objectName) : "",
      bucketId: isSet(object.bucketId) ? String(object.bucketId) : "",
      objectId: isSet(object.objectId) ? String(object.objectId) : "",
      primarySpId: isSet(object.primarySpId) ? Number(object.primarySpId) : 0,
      payloadSize: isSet(object.payloadSize) ? Long.fromValue(object.payloadSize) : Long.UZERO,
      visibility: isSet(object.visibility) ? visibilityTypeFromJSON(object.visibility) : -1,
      contentType: isSet(object.contentType) ? String(object.contentType) : "",
      createAt: isSet(object.createAt) ? Long.fromValue(object.createAt) : Long.ZERO,
      status: isSet(object.status) ? objectStatusFromJSON(object.status) : -1,
      redundancyType: isSet(object.redundancyType) ? redundancyTypeFromJSON(object.redundancyType) : -1,
      sourceType: isSet(object.sourceType) ? sourceTypeFromJSON(object.sourceType) : -1,
      checksums: Array.isArray(object?.checksums) ? object.checksums.map((e: any) => bytesFromBase64(e)) : [],
      localVirtualGroupId: isSet(object.localVirtualGroupId) ? Number(object.localVirtualGroupId) : 0,
      tags: isSet(object.tags) ? ResourceTags.fromJSON(object.tags) : undefined
    };
  },
  toJSON(message: EventCreateObject): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.owner !== undefined && (obj.owner = message.owner);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.objectName !== undefined && (obj.objectName = message.objectName);
    message.bucketId !== undefined && (obj.bucketId = message.bucketId);
    message.objectId !== undefined && (obj.objectId = message.objectId);
    message.primarySpId !== undefined && (obj.primarySpId = Math.round(message.primarySpId));
    message.payloadSize !== undefined && (obj.payloadSize = (message.payloadSize || Long.UZERO).toString());
    message.visibility !== undefined && (obj.visibility = visibilityTypeToJSON(message.visibility));
    message.contentType !== undefined && (obj.contentType = message.contentType);
    message.createAt !== undefined && (obj.createAt = (message.createAt || Long.ZERO).toString());
    message.status !== undefined && (obj.status = objectStatusToJSON(message.status));
    message.redundancyType !== undefined && (obj.redundancyType = redundancyTypeToJSON(message.redundancyType));
    message.sourceType !== undefined && (obj.sourceType = sourceTypeToJSON(message.sourceType));
    if (message.checksums) {
      obj.checksums = message.checksums.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.checksums = [];
    }
    message.localVirtualGroupId !== undefined && (obj.localVirtualGroupId = Math.round(message.localVirtualGroupId));
    message.tags !== undefined && (obj.tags = message.tags ? ResourceTags.toJSON(message.tags) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventCreateObject>, I>>(object: I): EventCreateObject {
    const message = createBaseEventCreateObject();
    message.creator = object.creator ?? "";
    message.owner = object.owner ?? "";
    message.bucketName = object.bucketName ?? "";
    message.objectName = object.objectName ?? "";
    message.bucketId = object.bucketId ?? "";
    message.objectId = object.objectId ?? "";
    message.primarySpId = object.primarySpId ?? 0;
    message.payloadSize = object.payloadSize !== undefined && object.payloadSize !== null ? Long.fromValue(object.payloadSize) : Long.UZERO;
    message.visibility = object.visibility ?? 0;
    message.contentType = object.contentType ?? "";
    message.createAt = object.createAt !== undefined && object.createAt !== null ? Long.fromValue(object.createAt) : Long.ZERO;
    message.status = object.status ?? 0;
    message.redundancyType = object.redundancyType ?? 0;
    message.sourceType = object.sourceType ?? 0;
    message.checksums = object.checksums?.map(e => e) || [];
    message.localVirtualGroupId = object.localVirtualGroupId ?? 0;
    message.tags = object.tags !== undefined && object.tags !== null ? ResourceTags.fromPartial(object.tags) : undefined;
    return message;
  },
  fromSDK(object: EventCreateObjectSDKType): EventCreateObject {
    return {
      creator: object?.creator,
      owner: object?.owner,
      bucketName: object?.bucket_name,
      objectName: object?.object_name,
      bucketId: object?.bucket_id,
      objectId: object?.object_id,
      primarySpId: object?.primary_sp_id,
      payloadSize: object?.payload_size,
      visibility: isSet(object.visibility) ? visibilityTypeFromJSON(object.visibility) : -1,
      contentType: object?.content_type,
      createAt: object?.create_at,
      status: isSet(object.status) ? objectStatusFromJSON(object.status) : -1,
      redundancyType: isSet(object.redundancy_type) ? redundancyTypeFromJSON(object.redundancy_type) : -1,
      sourceType: isSet(object.source_type) ? sourceTypeFromJSON(object.source_type) : -1,
      checksums: Array.isArray(object?.checksums) ? object.checksums.map((e: any) => e) : [],
      localVirtualGroupId: object?.local_virtual_group_id,
      tags: object.tags ? ResourceTags.fromSDK(object.tags) : undefined
    };
  },
  toSDK(message: EventCreateObject): EventCreateObjectSDKType {
    const obj: any = {};
    obj.creator = message.creator;
    obj.owner = message.owner;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    obj.bucket_id = message.bucketId;
    obj.object_id = message.objectId;
    obj.primary_sp_id = message.primarySpId;
    obj.payload_size = message.payloadSize;
    message.visibility !== undefined && (obj.visibility = visibilityTypeToJSON(message.visibility));
    obj.content_type = message.contentType;
    obj.create_at = message.createAt;
    message.status !== undefined && (obj.status = objectStatusToJSON(message.status));
    message.redundancyType !== undefined && (obj.redundancy_type = redundancyTypeToJSON(message.redundancyType));
    message.sourceType !== undefined && (obj.source_type = sourceTypeToJSON(message.sourceType));
    if (message.checksums) {
      obj.checksums = message.checksums.map(e => e);
    } else {
      obj.checksums = [];
    }
    obj.local_virtual_group_id = message.localVirtualGroupId;
    message.tags !== undefined && (obj.tags = message.tags ? ResourceTags.toSDK(message.tags) : undefined);
    return obj;
  }
};
function createBaseEventCancelCreateObject(): EventCancelCreateObject {
  return {
    operator: "",
    bucketName: "",
    objectName: "",
    primarySpId: 0,
    objectId: ""
  };
}
export const EventCancelCreateObject = {
  encode(message: EventCancelCreateObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }
    if (message.objectName !== "") {
      writer.uint32(26).string(message.objectName);
    }
    if (message.primarySpId !== 0) {
      writer.uint32(32).uint32(message.primarySpId);
    }
    if (message.objectId !== "") {
      writer.uint32(50).string(message.objectId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventCancelCreateObject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCancelCreateObject();
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
          message.primarySpId = reader.uint32();
          break;
        case 6:
          message.objectId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventCancelCreateObject {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      objectName: isSet(object.objectName) ? String(object.objectName) : "",
      primarySpId: isSet(object.primarySpId) ? Number(object.primarySpId) : 0,
      objectId: isSet(object.objectId) ? String(object.objectId) : ""
    };
  },
  toJSON(message: EventCancelCreateObject): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.objectName !== undefined && (obj.objectName = message.objectName);
    message.primarySpId !== undefined && (obj.primarySpId = Math.round(message.primarySpId));
    message.objectId !== undefined && (obj.objectId = message.objectId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventCancelCreateObject>, I>>(object: I): EventCancelCreateObject {
    const message = createBaseEventCancelCreateObject();
    message.operator = object.operator ?? "";
    message.bucketName = object.bucketName ?? "";
    message.objectName = object.objectName ?? "";
    message.primarySpId = object.primarySpId ?? 0;
    message.objectId = object.objectId ?? "";
    return message;
  },
  fromSDK(object: EventCancelCreateObjectSDKType): EventCancelCreateObject {
    return {
      operator: object?.operator,
      bucketName: object?.bucket_name,
      objectName: object?.object_name,
      primarySpId: object?.primary_sp_id,
      objectId: object?.object_id
    };
  },
  toSDK(message: EventCancelCreateObject): EventCancelCreateObjectSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    obj.primary_sp_id = message.primarySpId;
    obj.object_id = message.objectId;
    return obj;
  }
};
function createBaseEventSealObject(): EventSealObject {
  return {
    operator: "",
    bucketName: "",
    objectName: "",
    objectId: "",
    status: 0,
    globalVirtualGroupId: 0,
    localVirtualGroupId: 0
  };
}
export const EventSealObject = {
  encode(message: EventSealObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }
    if (message.objectName !== "") {
      writer.uint32(26).string(message.objectName);
    }
    if (message.objectId !== "") {
      writer.uint32(42).string(message.objectId);
    }
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }
    if (message.globalVirtualGroupId !== 0) {
      writer.uint32(56).uint32(message.globalVirtualGroupId);
    }
    if (message.localVirtualGroupId !== 0) {
      writer.uint32(64).uint32(message.localVirtualGroupId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventSealObject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSealObject();
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
        case 5:
          message.objectId = reader.string();
          break;
        case 6:
          message.status = (reader.int32() as any);
          break;
        case 7:
          message.globalVirtualGroupId = reader.uint32();
          break;
        case 8:
          message.localVirtualGroupId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSealObject {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      objectName: isSet(object.objectName) ? String(object.objectName) : "",
      objectId: isSet(object.objectId) ? String(object.objectId) : "",
      status: isSet(object.status) ? objectStatusFromJSON(object.status) : -1,
      globalVirtualGroupId: isSet(object.globalVirtualGroupId) ? Number(object.globalVirtualGroupId) : 0,
      localVirtualGroupId: isSet(object.localVirtualGroupId) ? Number(object.localVirtualGroupId) : 0
    };
  },
  toJSON(message: EventSealObject): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.objectName !== undefined && (obj.objectName = message.objectName);
    message.objectId !== undefined && (obj.objectId = message.objectId);
    message.status !== undefined && (obj.status = objectStatusToJSON(message.status));
    message.globalVirtualGroupId !== undefined && (obj.globalVirtualGroupId = Math.round(message.globalVirtualGroupId));
    message.localVirtualGroupId !== undefined && (obj.localVirtualGroupId = Math.round(message.localVirtualGroupId));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventSealObject>, I>>(object: I): EventSealObject {
    const message = createBaseEventSealObject();
    message.operator = object.operator ?? "";
    message.bucketName = object.bucketName ?? "";
    message.objectName = object.objectName ?? "";
    message.objectId = object.objectId ?? "";
    message.status = object.status ?? 0;
    message.globalVirtualGroupId = object.globalVirtualGroupId ?? 0;
    message.localVirtualGroupId = object.localVirtualGroupId ?? 0;
    return message;
  },
  fromSDK(object: EventSealObjectSDKType): EventSealObject {
    return {
      operator: object?.operator,
      bucketName: object?.bucket_name,
      objectName: object?.object_name,
      objectId: object?.object_id,
      status: isSet(object.status) ? objectStatusFromJSON(object.status) : -1,
      globalVirtualGroupId: object?.global_virtual_group_id,
      localVirtualGroupId: object?.local_virtual_group_id
    };
  },
  toSDK(message: EventSealObject): EventSealObjectSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    obj.object_id = message.objectId;
    message.status !== undefined && (obj.status = objectStatusToJSON(message.status));
    obj.global_virtual_group_id = message.globalVirtualGroupId;
    obj.local_virtual_group_id = message.localVirtualGroupId;
    return obj;
  }
};
function createBaseEventCopyObject(): EventCopyObject {
  return {
    operator: "",
    srcBucketName: "",
    srcObjectName: "",
    dstBucketName: "",
    dstObjectName: "",
    srcObjectId: "",
    dstObjectId: "",
    localVirtualGroupId: 0
  };
}
export const EventCopyObject = {
  encode(message: EventCopyObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.srcBucketName !== "") {
      writer.uint32(18).string(message.srcBucketName);
    }
    if (message.srcObjectName !== "") {
      writer.uint32(26).string(message.srcObjectName);
    }
    if (message.dstBucketName !== "") {
      writer.uint32(34).string(message.dstBucketName);
    }
    if (message.dstObjectName !== "") {
      writer.uint32(42).string(message.dstObjectName);
    }
    if (message.srcObjectId !== "") {
      writer.uint32(50).string(message.srcObjectId);
    }
    if (message.dstObjectId !== "") {
      writer.uint32(58).string(message.dstObjectId);
    }
    if (message.localVirtualGroupId !== 0) {
      writer.uint32(64).uint32(message.localVirtualGroupId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventCopyObject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCopyObject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.srcBucketName = reader.string();
          break;
        case 3:
          message.srcObjectName = reader.string();
          break;
        case 4:
          message.dstBucketName = reader.string();
          break;
        case 5:
          message.dstObjectName = reader.string();
          break;
        case 6:
          message.srcObjectId = reader.string();
          break;
        case 7:
          message.dstObjectId = reader.string();
          break;
        case 8:
          message.localVirtualGroupId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventCopyObject {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      srcBucketName: isSet(object.srcBucketName) ? String(object.srcBucketName) : "",
      srcObjectName: isSet(object.srcObjectName) ? String(object.srcObjectName) : "",
      dstBucketName: isSet(object.dstBucketName) ? String(object.dstBucketName) : "",
      dstObjectName: isSet(object.dstObjectName) ? String(object.dstObjectName) : "",
      srcObjectId: isSet(object.srcObjectId) ? String(object.srcObjectId) : "",
      dstObjectId: isSet(object.dstObjectId) ? String(object.dstObjectId) : "",
      localVirtualGroupId: isSet(object.localVirtualGroupId) ? Number(object.localVirtualGroupId) : 0
    };
  },
  toJSON(message: EventCopyObject): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.srcBucketName !== undefined && (obj.srcBucketName = message.srcBucketName);
    message.srcObjectName !== undefined && (obj.srcObjectName = message.srcObjectName);
    message.dstBucketName !== undefined && (obj.dstBucketName = message.dstBucketName);
    message.dstObjectName !== undefined && (obj.dstObjectName = message.dstObjectName);
    message.srcObjectId !== undefined && (obj.srcObjectId = message.srcObjectId);
    message.dstObjectId !== undefined && (obj.dstObjectId = message.dstObjectId);
    message.localVirtualGroupId !== undefined && (obj.localVirtualGroupId = Math.round(message.localVirtualGroupId));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventCopyObject>, I>>(object: I): EventCopyObject {
    const message = createBaseEventCopyObject();
    message.operator = object.operator ?? "";
    message.srcBucketName = object.srcBucketName ?? "";
    message.srcObjectName = object.srcObjectName ?? "";
    message.dstBucketName = object.dstBucketName ?? "";
    message.dstObjectName = object.dstObjectName ?? "";
    message.srcObjectId = object.srcObjectId ?? "";
    message.dstObjectId = object.dstObjectId ?? "";
    message.localVirtualGroupId = object.localVirtualGroupId ?? 0;
    return message;
  },
  fromSDK(object: EventCopyObjectSDKType): EventCopyObject {
    return {
      operator: object?.operator,
      srcBucketName: object?.src_bucket_name,
      srcObjectName: object?.src_object_name,
      dstBucketName: object?.dst_bucket_name,
      dstObjectName: object?.dst_object_name,
      srcObjectId: object?.src_object_id,
      dstObjectId: object?.dst_object_id,
      localVirtualGroupId: object?.local_virtual_group_id
    };
  },
  toSDK(message: EventCopyObject): EventCopyObjectSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.src_bucket_name = message.srcBucketName;
    obj.src_object_name = message.srcObjectName;
    obj.dst_bucket_name = message.dstBucketName;
    obj.dst_object_name = message.dstObjectName;
    obj.src_object_id = message.srcObjectId;
    obj.dst_object_id = message.dstObjectId;
    obj.local_virtual_group_id = message.localVirtualGroupId;
    return obj;
  }
};
function createBaseEventDeleteObject(): EventDeleteObject {
  return {
    operator: "",
    bucketName: "",
    objectName: "",
    objectId: "",
    localVirtualGroupId: 0
  };
}
export const EventDeleteObject = {
  encode(message: EventDeleteObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }
    if (message.objectName !== "") {
      writer.uint32(26).string(message.objectName);
    }
    if (message.objectId !== "") {
      writer.uint32(34).string(message.objectId);
    }
    if (message.localVirtualGroupId !== 0) {
      writer.uint32(40).uint32(message.localVirtualGroupId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventDeleteObject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDeleteObject();
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
          message.objectId = reader.string();
          break;
        case 5:
          message.localVirtualGroupId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventDeleteObject {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      objectName: isSet(object.objectName) ? String(object.objectName) : "",
      objectId: isSet(object.objectId) ? String(object.objectId) : "",
      localVirtualGroupId: isSet(object.localVirtualGroupId) ? Number(object.localVirtualGroupId) : 0
    };
  },
  toJSON(message: EventDeleteObject): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.objectName !== undefined && (obj.objectName = message.objectName);
    message.objectId !== undefined && (obj.objectId = message.objectId);
    message.localVirtualGroupId !== undefined && (obj.localVirtualGroupId = Math.round(message.localVirtualGroupId));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventDeleteObject>, I>>(object: I): EventDeleteObject {
    const message = createBaseEventDeleteObject();
    message.operator = object.operator ?? "";
    message.bucketName = object.bucketName ?? "";
    message.objectName = object.objectName ?? "";
    message.objectId = object.objectId ?? "";
    message.localVirtualGroupId = object.localVirtualGroupId ?? 0;
    return message;
  },
  fromSDK(object: EventDeleteObjectSDKType): EventDeleteObject {
    return {
      operator: object?.operator,
      bucketName: object?.bucket_name,
      objectName: object?.object_name,
      objectId: object?.object_id,
      localVirtualGroupId: object?.local_virtual_group_id
    };
  },
  toSDK(message: EventDeleteObject): EventDeleteObjectSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    obj.object_id = message.objectId;
    obj.local_virtual_group_id = message.localVirtualGroupId;
    return obj;
  }
};
function createBaseEventRejectSealObject(): EventRejectSealObject {
  return {
    operator: "",
    bucketName: "",
    objectName: "",
    objectId: ""
  };
}
export const EventRejectSealObject = {
  encode(message: EventRejectSealObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }
    if (message.objectName !== "") {
      writer.uint32(26).string(message.objectName);
    }
    if (message.objectId !== "") {
      writer.uint32(34).string(message.objectId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventRejectSealObject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRejectSealObject();
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
          message.objectId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventRejectSealObject {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      objectName: isSet(object.objectName) ? String(object.objectName) : "",
      objectId: isSet(object.objectId) ? String(object.objectId) : ""
    };
  },
  toJSON(message: EventRejectSealObject): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.objectName !== undefined && (obj.objectName = message.objectName);
    message.objectId !== undefined && (obj.objectId = message.objectId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventRejectSealObject>, I>>(object: I): EventRejectSealObject {
    const message = createBaseEventRejectSealObject();
    message.operator = object.operator ?? "";
    message.bucketName = object.bucketName ?? "";
    message.objectName = object.objectName ?? "";
    message.objectId = object.objectId ?? "";
    return message;
  },
  fromSDK(object: EventRejectSealObjectSDKType): EventRejectSealObject {
    return {
      operator: object?.operator,
      bucketName: object?.bucket_name,
      objectName: object?.object_name,
      objectId: object?.object_id
    };
  },
  toSDK(message: EventRejectSealObject): EventRejectSealObjectSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    obj.object_id = message.objectId;
    return obj;
  }
};
function createBaseEventDiscontinueObject(): EventDiscontinueObject {
  return {
    bucketName: "",
    objectId: "",
    reason: "",
    deleteAt: Long.ZERO
  };
}
export const EventDiscontinueObject = {
  encode(message: EventDiscontinueObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bucketName !== "") {
      writer.uint32(10).string(message.bucketName);
    }
    if (message.objectId !== "") {
      writer.uint32(18).string(message.objectId);
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    if (!message.deleteAt.isZero()) {
      writer.uint32(32).int64(message.deleteAt);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventDiscontinueObject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDiscontinueObject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bucketName = reader.string();
          break;
        case 2:
          message.objectId = reader.string();
          break;
        case 3:
          message.reason = reader.string();
          break;
        case 4:
          message.deleteAt = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventDiscontinueObject {
    return {
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      objectId: isSet(object.objectId) ? String(object.objectId) : "",
      reason: isSet(object.reason) ? String(object.reason) : "",
      deleteAt: isSet(object.deleteAt) ? Long.fromValue(object.deleteAt) : Long.ZERO
    };
  },
  toJSON(message: EventDiscontinueObject): unknown {
    const obj: any = {};
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.objectId !== undefined && (obj.objectId = message.objectId);
    message.reason !== undefined && (obj.reason = message.reason);
    message.deleteAt !== undefined && (obj.deleteAt = (message.deleteAt || Long.ZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventDiscontinueObject>, I>>(object: I): EventDiscontinueObject {
    const message = createBaseEventDiscontinueObject();
    message.bucketName = object.bucketName ?? "";
    message.objectId = object.objectId ?? "";
    message.reason = object.reason ?? "";
    message.deleteAt = object.deleteAt !== undefined && object.deleteAt !== null ? Long.fromValue(object.deleteAt) : Long.ZERO;
    return message;
  },
  fromSDK(object: EventDiscontinueObjectSDKType): EventDiscontinueObject {
    return {
      bucketName: object?.bucket_name,
      objectId: object?.object_id,
      reason: object?.reason,
      deleteAt: object?.delete_at
    };
  },
  toSDK(message: EventDiscontinueObject): EventDiscontinueObjectSDKType {
    const obj: any = {};
    obj.bucket_name = message.bucketName;
    obj.object_id = message.objectId;
    obj.reason = message.reason;
    obj.delete_at = message.deleteAt;
    return obj;
  }
};
function createBaseEventUpdateObjectInfo(): EventUpdateObjectInfo {
  return {
    operator: "",
    bucketName: "",
    objectName: "",
    objectId: "",
    visibility: 0
  };
}
export const EventUpdateObjectInfo = {
  encode(message: EventUpdateObjectInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }
    if (message.objectName !== "") {
      writer.uint32(26).string(message.objectName);
    }
    if (message.objectId !== "") {
      writer.uint32(34).string(message.objectId);
    }
    if (message.visibility !== 0) {
      writer.uint32(40).int32(message.visibility);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateObjectInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateObjectInfo();
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
          message.objectId = reader.string();
          break;
        case 5:
          message.visibility = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventUpdateObjectInfo {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      objectName: isSet(object.objectName) ? String(object.objectName) : "",
      objectId: isSet(object.objectId) ? String(object.objectId) : "",
      visibility: isSet(object.visibility) ? visibilityTypeFromJSON(object.visibility) : -1
    };
  },
  toJSON(message: EventUpdateObjectInfo): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.objectName !== undefined && (obj.objectName = message.objectName);
    message.objectId !== undefined && (obj.objectId = message.objectId);
    message.visibility !== undefined && (obj.visibility = visibilityTypeToJSON(message.visibility));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventUpdateObjectInfo>, I>>(object: I): EventUpdateObjectInfo {
    const message = createBaseEventUpdateObjectInfo();
    message.operator = object.operator ?? "";
    message.bucketName = object.bucketName ?? "";
    message.objectName = object.objectName ?? "";
    message.objectId = object.objectId ?? "";
    message.visibility = object.visibility ?? 0;
    return message;
  },
  fromSDK(object: EventUpdateObjectInfoSDKType): EventUpdateObjectInfo {
    return {
      operator: object?.operator,
      bucketName: object?.bucket_name,
      objectName: object?.object_name,
      objectId: object?.object_id,
      visibility: isSet(object.visibility) ? visibilityTypeFromJSON(object.visibility) : -1
    };
  },
  toSDK(message: EventUpdateObjectInfo): EventUpdateObjectInfoSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    obj.object_id = message.objectId;
    message.visibility !== undefined && (obj.visibility = visibilityTypeToJSON(message.visibility));
    return obj;
  }
};
function createBaseEventCreateGroup(): EventCreateGroup {
  return {
    owner: "",
    groupName: "",
    groupId: "",
    sourceType: 0,
    extra: "",
    tags: ResourceTags.fromPartial({})
  };
}
export const EventCreateGroup = {
  encode(message: EventCreateGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.groupName !== "") {
      writer.uint32(18).string(message.groupName);
    }
    if (message.groupId !== "") {
      writer.uint32(26).string(message.groupId);
    }
    if (message.sourceType !== 0) {
      writer.uint32(32).int32(message.sourceType);
    }
    if (message.extra !== "") {
      writer.uint32(42).string(message.extra);
    }
    if (message.tags !== undefined) {
      ResourceTags.encode(message.tags, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateGroup();
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
          message.groupId = reader.string();
          break;
        case 4:
          message.sourceType = (reader.int32() as any);
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
  fromJSON(object: any): EventCreateGroup {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      groupName: isSet(object.groupName) ? String(object.groupName) : "",
      groupId: isSet(object.groupId) ? String(object.groupId) : "",
      sourceType: isSet(object.sourceType) ? sourceTypeFromJSON(object.sourceType) : -1,
      extra: isSet(object.extra) ? String(object.extra) : "",
      tags: isSet(object.tags) ? ResourceTags.fromJSON(object.tags) : undefined
    };
  },
  toJSON(message: EventCreateGroup): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.groupName !== undefined && (obj.groupName = message.groupName);
    message.groupId !== undefined && (obj.groupId = message.groupId);
    message.sourceType !== undefined && (obj.sourceType = sourceTypeToJSON(message.sourceType));
    message.extra !== undefined && (obj.extra = message.extra);
    message.tags !== undefined && (obj.tags = message.tags ? ResourceTags.toJSON(message.tags) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventCreateGroup>, I>>(object: I): EventCreateGroup {
    const message = createBaseEventCreateGroup();
    message.owner = object.owner ?? "";
    message.groupName = object.groupName ?? "";
    message.groupId = object.groupId ?? "";
    message.sourceType = object.sourceType ?? 0;
    message.extra = object.extra ?? "";
    message.tags = object.tags !== undefined && object.tags !== null ? ResourceTags.fromPartial(object.tags) : undefined;
    return message;
  },
  fromSDK(object: EventCreateGroupSDKType): EventCreateGroup {
    return {
      owner: object?.owner,
      groupName: object?.group_name,
      groupId: object?.group_id,
      sourceType: isSet(object.source_type) ? sourceTypeFromJSON(object.source_type) : -1,
      extra: object?.extra,
      tags: object.tags ? ResourceTags.fromSDK(object.tags) : undefined
    };
  },
  toSDK(message: EventCreateGroup): EventCreateGroupSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.group_name = message.groupName;
    obj.group_id = message.groupId;
    message.sourceType !== undefined && (obj.source_type = sourceTypeToJSON(message.sourceType));
    obj.extra = message.extra;
    message.tags !== undefined && (obj.tags = message.tags ? ResourceTags.toSDK(message.tags) : undefined);
    return obj;
  }
};
function createBaseEventDeleteGroup(): EventDeleteGroup {
  return {
    owner: "",
    groupName: "",
    groupId: ""
  };
}
export const EventDeleteGroup = {
  encode(message: EventDeleteGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.groupName !== "") {
      writer.uint32(26).string(message.groupName);
    }
    if (message.groupId !== "") {
      writer.uint32(34).string(message.groupId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventDeleteGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDeleteGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.groupName = reader.string();
          break;
        case 4:
          message.groupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventDeleteGroup {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      groupName: isSet(object.groupName) ? String(object.groupName) : "",
      groupId: isSet(object.groupId) ? String(object.groupId) : ""
    };
  },
  toJSON(message: EventDeleteGroup): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.groupName !== undefined && (obj.groupName = message.groupName);
    message.groupId !== undefined && (obj.groupId = message.groupId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventDeleteGroup>, I>>(object: I): EventDeleteGroup {
    const message = createBaseEventDeleteGroup();
    message.owner = object.owner ?? "";
    message.groupName = object.groupName ?? "";
    message.groupId = object.groupId ?? "";
    return message;
  },
  fromSDK(object: EventDeleteGroupSDKType): EventDeleteGroup {
    return {
      owner: object?.owner,
      groupName: object?.group_name,
      groupId: object?.group_id
    };
  },
  toSDK(message: EventDeleteGroup): EventDeleteGroupSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.group_name = message.groupName;
    obj.group_id = message.groupId;
    return obj;
  }
};
function createBaseEventLeaveGroup(): EventLeaveGroup {
  return {
    memberAddress: "",
    owner: "",
    groupName: "",
    groupId: ""
  };
}
export const EventLeaveGroup = {
  encode(message: EventLeaveGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.memberAddress !== "") {
      writer.uint32(10).string(message.memberAddress);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.groupName !== "") {
      writer.uint32(26).string(message.groupName);
    }
    if (message.groupId !== "") {
      writer.uint32(34).string(message.groupId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventLeaveGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventLeaveGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.memberAddress = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.groupName = reader.string();
          break;
        case 4:
          message.groupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventLeaveGroup {
    return {
      memberAddress: isSet(object.memberAddress) ? String(object.memberAddress) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      groupName: isSet(object.groupName) ? String(object.groupName) : "",
      groupId: isSet(object.groupId) ? String(object.groupId) : ""
    };
  },
  toJSON(message: EventLeaveGroup): unknown {
    const obj: any = {};
    message.memberAddress !== undefined && (obj.memberAddress = message.memberAddress);
    message.owner !== undefined && (obj.owner = message.owner);
    message.groupName !== undefined && (obj.groupName = message.groupName);
    message.groupId !== undefined && (obj.groupId = message.groupId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventLeaveGroup>, I>>(object: I): EventLeaveGroup {
    const message = createBaseEventLeaveGroup();
    message.memberAddress = object.memberAddress ?? "";
    message.owner = object.owner ?? "";
    message.groupName = object.groupName ?? "";
    message.groupId = object.groupId ?? "";
    return message;
  },
  fromSDK(object: EventLeaveGroupSDKType): EventLeaveGroup {
    return {
      memberAddress: object?.member_address,
      owner: object?.owner,
      groupName: object?.group_name,
      groupId: object?.group_id
    };
  },
  toSDK(message: EventLeaveGroup): EventLeaveGroupSDKType {
    const obj: any = {};
    obj.member_address = message.memberAddress;
    obj.owner = message.owner;
    obj.group_name = message.groupName;
    obj.group_id = message.groupId;
    return obj;
  }
};
function createBaseEventUpdateGroupMember(): EventUpdateGroupMember {
  return {
    operator: "",
    owner: "",
    groupName: "",
    groupId: "",
    membersToAdd: [],
    membersToDelete: []
  };
}
export const EventUpdateGroupMember = {
  encode(message: EventUpdateGroupMember, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.groupName !== "") {
      writer.uint32(26).string(message.groupName);
    }
    if (message.groupId !== "") {
      writer.uint32(34).string(message.groupId);
    }
    for (const v of message.membersToAdd) {
      EventGroupMemberDetail.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.membersToDelete) {
      writer.uint32(50).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateGroupMember {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateGroupMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.groupName = reader.string();
          break;
        case 4:
          message.groupId = reader.string();
          break;
        case 5:
          message.membersToAdd.push(EventGroupMemberDetail.decode(reader, reader.uint32()));
          break;
        case 6:
          message.membersToDelete.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventUpdateGroupMember {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      groupName: isSet(object.groupName) ? String(object.groupName) : "",
      groupId: isSet(object.groupId) ? String(object.groupId) : "",
      membersToAdd: Array.isArray(object?.membersToAdd) ? object.membersToAdd.map((e: any) => EventGroupMemberDetail.fromJSON(e)) : [],
      membersToDelete: Array.isArray(object?.membersToDelete) ? object.membersToDelete.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: EventUpdateGroupMember): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.owner !== undefined && (obj.owner = message.owner);
    message.groupName !== undefined && (obj.groupName = message.groupName);
    message.groupId !== undefined && (obj.groupId = message.groupId);
    if (message.membersToAdd) {
      obj.membersToAdd = message.membersToAdd.map(e => e ? EventGroupMemberDetail.toJSON(e) : undefined);
    } else {
      obj.membersToAdd = [];
    }
    if (message.membersToDelete) {
      obj.membersToDelete = message.membersToDelete.map(e => e);
    } else {
      obj.membersToDelete = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventUpdateGroupMember>, I>>(object: I): EventUpdateGroupMember {
    const message = createBaseEventUpdateGroupMember();
    message.operator = object.operator ?? "";
    message.owner = object.owner ?? "";
    message.groupName = object.groupName ?? "";
    message.groupId = object.groupId ?? "";
    message.membersToAdd = object.membersToAdd?.map(e => EventGroupMemberDetail.fromPartial(e)) || [];
    message.membersToDelete = object.membersToDelete?.map(e => e) || [];
    return message;
  },
  fromSDK(object: EventUpdateGroupMemberSDKType): EventUpdateGroupMember {
    return {
      operator: object?.operator,
      owner: object?.owner,
      groupName: object?.group_name,
      groupId: object?.group_id,
      membersToAdd: Array.isArray(object?.members_to_add) ? object.members_to_add.map((e: any) => EventGroupMemberDetail.fromSDK(e)) : [],
      membersToDelete: Array.isArray(object?.members_to_delete) ? object.members_to_delete.map((e: any) => e) : []
    };
  },
  toSDK(message: EventUpdateGroupMember): EventUpdateGroupMemberSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.owner = message.owner;
    obj.group_name = message.groupName;
    obj.group_id = message.groupId;
    if (message.membersToAdd) {
      obj.members_to_add = message.membersToAdd.map(e => e ? EventGroupMemberDetail.toSDK(e) : undefined);
    } else {
      obj.members_to_add = [];
    }
    if (message.membersToDelete) {
      obj.members_to_delete = message.membersToDelete.map(e => e);
    } else {
      obj.members_to_delete = [];
    }
    return obj;
  }
};
function createBaseEventRenewGroupMember(): EventRenewGroupMember {
  return {
    operator: "",
    owner: "",
    groupName: "",
    groupId: "",
    sourceType: 0,
    members: []
  };
}
export const EventRenewGroupMember = {
  encode(message: EventRenewGroupMember, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.groupName !== "") {
      writer.uint32(26).string(message.groupName);
    }
    if (message.groupId !== "") {
      writer.uint32(34).string(message.groupId);
    }
    if (message.sourceType !== 0) {
      writer.uint32(40).int32(message.sourceType);
    }
    for (const v of message.members) {
      EventGroupMemberDetail.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventRenewGroupMember {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRenewGroupMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.groupName = reader.string();
          break;
        case 4:
          message.groupId = reader.string();
          break;
        case 5:
          message.sourceType = (reader.int32() as any);
          break;
        case 6:
          message.members.push(EventGroupMemberDetail.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventRenewGroupMember {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      groupName: isSet(object.groupName) ? String(object.groupName) : "",
      groupId: isSet(object.groupId) ? String(object.groupId) : "",
      sourceType: isSet(object.sourceType) ? sourceTypeFromJSON(object.sourceType) : -1,
      members: Array.isArray(object?.members) ? object.members.map((e: any) => EventGroupMemberDetail.fromJSON(e)) : []
    };
  },
  toJSON(message: EventRenewGroupMember): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.owner !== undefined && (obj.owner = message.owner);
    message.groupName !== undefined && (obj.groupName = message.groupName);
    message.groupId !== undefined && (obj.groupId = message.groupId);
    message.sourceType !== undefined && (obj.sourceType = sourceTypeToJSON(message.sourceType));
    if (message.members) {
      obj.members = message.members.map(e => e ? EventGroupMemberDetail.toJSON(e) : undefined);
    } else {
      obj.members = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventRenewGroupMember>, I>>(object: I): EventRenewGroupMember {
    const message = createBaseEventRenewGroupMember();
    message.operator = object.operator ?? "";
    message.owner = object.owner ?? "";
    message.groupName = object.groupName ?? "";
    message.groupId = object.groupId ?? "";
    message.sourceType = object.sourceType ?? 0;
    message.members = object.members?.map(e => EventGroupMemberDetail.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: EventRenewGroupMemberSDKType): EventRenewGroupMember {
    return {
      operator: object?.operator,
      owner: object?.owner,
      groupName: object?.group_name,
      groupId: object?.group_id,
      sourceType: isSet(object.source_type) ? sourceTypeFromJSON(object.source_type) : -1,
      members: Array.isArray(object?.members) ? object.members.map((e: any) => EventGroupMemberDetail.fromSDK(e)) : []
    };
  },
  toSDK(message: EventRenewGroupMember): EventRenewGroupMemberSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.owner = message.owner;
    obj.group_name = message.groupName;
    obj.group_id = message.groupId;
    message.sourceType !== undefined && (obj.source_type = sourceTypeToJSON(message.sourceType));
    if (message.members) {
      obj.members = message.members.map(e => e ? EventGroupMemberDetail.toSDK(e) : undefined);
    } else {
      obj.members = [];
    }
    return obj;
  }
};
function createBaseEventGroupMemberDetail(): EventGroupMemberDetail {
  return {
    member: "",
    expirationTime: Timestamp.fromPartial({})
  };
}
export const EventGroupMemberDetail = {
  encode(message: EventGroupMemberDetail, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.member !== "") {
      writer.uint32(10).string(message.member);
    }
    if (message.expirationTime !== undefined) {
      Timestamp.encode(message.expirationTime, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventGroupMemberDetail {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventGroupMemberDetail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.member = reader.string();
          break;
        case 2:
          message.expirationTime = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventGroupMemberDetail {
    return {
      member: isSet(object.member) ? String(object.member) : "",
      expirationTime: isSet(object.expirationTime) ? fromJsonTimestamp(object.expirationTime) : undefined
    };
  },
  toJSON(message: EventGroupMemberDetail): unknown {
    const obj: any = {};
    message.member !== undefined && (obj.member = message.member);
    message.expirationTime !== undefined && (obj.expirationTime = fromTimestamp(message.expirationTime).toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventGroupMemberDetail>, I>>(object: I): EventGroupMemberDetail {
    const message = createBaseEventGroupMemberDetail();
    message.member = object.member ?? "";
    message.expirationTime = object.expirationTime !== undefined && object.expirationTime !== null ? Timestamp.fromPartial(object.expirationTime) : undefined;
    return message;
  },
  fromSDK(object: EventGroupMemberDetailSDKType): EventGroupMemberDetail {
    return {
      member: object?.member,
      expirationTime: object.expiration_time ? Timestamp.fromSDK(object.expiration_time) : undefined
    };
  },
  toSDK(message: EventGroupMemberDetail): EventGroupMemberDetailSDKType {
    const obj: any = {};
    obj.member = message.member;
    message.expirationTime !== undefined && (obj.expiration_time = message.expirationTime ? Timestamp.toSDK(message.expirationTime) : undefined);
    return obj;
  }
};
function createBaseEventUpdateGroupExtra(): EventUpdateGroupExtra {
  return {
    operator: "",
    owner: "",
    groupName: "",
    groupId: "",
    extra: ""
  };
}
export const EventUpdateGroupExtra = {
  encode(message: EventUpdateGroupExtra, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.groupName !== "") {
      writer.uint32(26).string(message.groupName);
    }
    if (message.groupId !== "") {
      writer.uint32(34).string(message.groupId);
    }
    if (message.extra !== "") {
      writer.uint32(42).string(message.extra);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateGroupExtra {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateGroupExtra();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.groupName = reader.string();
          break;
        case 4:
          message.groupId = reader.string();
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
  fromJSON(object: any): EventUpdateGroupExtra {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      groupName: isSet(object.groupName) ? String(object.groupName) : "",
      groupId: isSet(object.groupId) ? String(object.groupId) : "",
      extra: isSet(object.extra) ? String(object.extra) : ""
    };
  },
  toJSON(message: EventUpdateGroupExtra): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.owner !== undefined && (obj.owner = message.owner);
    message.groupName !== undefined && (obj.groupName = message.groupName);
    message.groupId !== undefined && (obj.groupId = message.groupId);
    message.extra !== undefined && (obj.extra = message.extra);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventUpdateGroupExtra>, I>>(object: I): EventUpdateGroupExtra {
    const message = createBaseEventUpdateGroupExtra();
    message.operator = object.operator ?? "";
    message.owner = object.owner ?? "";
    message.groupName = object.groupName ?? "";
    message.groupId = object.groupId ?? "";
    message.extra = object.extra ?? "";
    return message;
  },
  fromSDK(object: EventUpdateGroupExtraSDKType): EventUpdateGroupExtra {
    return {
      operator: object?.operator,
      owner: object?.owner,
      groupName: object?.group_name,
      groupId: object?.group_id,
      extra: object?.extra
    };
  },
  toSDK(message: EventUpdateGroupExtra): EventUpdateGroupExtraSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.owner = message.owner;
    obj.group_name = message.groupName;
    obj.group_id = message.groupId;
    obj.extra = message.extra;
    return obj;
  }
};
function createBaseEventMirrorBucket(): EventMirrorBucket {
  return {
    operator: "",
    bucketName: "",
    bucketId: "",
    destChainId: 0
  };
}
export const EventMirrorBucket = {
  encode(message: EventMirrorBucket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }
    if (message.bucketId !== "") {
      writer.uint32(34).string(message.bucketId);
    }
    if (message.destChainId !== 0) {
      writer.uint32(40).uint32(message.destChainId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventMirrorBucket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMirrorBucket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.bucketName = reader.string();
          break;
        case 4:
          message.bucketId = reader.string();
          break;
        case 5:
          message.destChainId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventMirrorBucket {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      bucketId: isSet(object.bucketId) ? String(object.bucketId) : "",
      destChainId: isSet(object.destChainId) ? Number(object.destChainId) : 0
    };
  },
  toJSON(message: EventMirrorBucket): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.bucketId !== undefined && (obj.bucketId = message.bucketId);
    message.destChainId !== undefined && (obj.destChainId = Math.round(message.destChainId));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventMirrorBucket>, I>>(object: I): EventMirrorBucket {
    const message = createBaseEventMirrorBucket();
    message.operator = object.operator ?? "";
    message.bucketName = object.bucketName ?? "";
    message.bucketId = object.bucketId ?? "";
    message.destChainId = object.destChainId ?? 0;
    return message;
  },
  fromSDK(object: EventMirrorBucketSDKType): EventMirrorBucket {
    return {
      operator: object?.operator,
      bucketName: object?.bucket_name,
      bucketId: object?.bucket_id,
      destChainId: object?.dest_chain_id
    };
  },
  toSDK(message: EventMirrorBucket): EventMirrorBucketSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.bucket_id = message.bucketId;
    obj.dest_chain_id = message.destChainId;
    return obj;
  }
};
function createBaseEventMirrorBucketResult(): EventMirrorBucketResult {
  return {
    status: 0,
    bucketName: "",
    bucketId: "",
    destChainId: 0
  };
}
export const EventMirrorBucketResult = {
  encode(message: EventMirrorBucketResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).uint32(message.status);
    }
    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }
    if (message.bucketId !== "") {
      writer.uint32(34).string(message.bucketId);
    }
    if (message.destChainId !== 0) {
      writer.uint32(40).uint32(message.destChainId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventMirrorBucketResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMirrorBucketResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.uint32();
          break;
        case 2:
          message.bucketName = reader.string();
          break;
        case 4:
          message.bucketId = reader.string();
          break;
        case 5:
          message.destChainId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventMirrorBucketResult {
    return {
      status: isSet(object.status) ? Number(object.status) : 0,
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      bucketId: isSet(object.bucketId) ? String(object.bucketId) : "",
      destChainId: isSet(object.destChainId) ? Number(object.destChainId) : 0
    };
  },
  toJSON(message: EventMirrorBucketResult): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = Math.round(message.status));
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.bucketId !== undefined && (obj.bucketId = message.bucketId);
    message.destChainId !== undefined && (obj.destChainId = Math.round(message.destChainId));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventMirrorBucketResult>, I>>(object: I): EventMirrorBucketResult {
    const message = createBaseEventMirrorBucketResult();
    message.status = object.status ?? 0;
    message.bucketName = object.bucketName ?? "";
    message.bucketId = object.bucketId ?? "";
    message.destChainId = object.destChainId ?? 0;
    return message;
  },
  fromSDK(object: EventMirrorBucketResultSDKType): EventMirrorBucketResult {
    return {
      status: object?.status,
      bucketName: object?.bucket_name,
      bucketId: object?.bucket_id,
      destChainId: object?.dest_chain_id
    };
  },
  toSDK(message: EventMirrorBucketResult): EventMirrorBucketResultSDKType {
    const obj: any = {};
    obj.status = message.status;
    obj.bucket_name = message.bucketName;
    obj.bucket_id = message.bucketId;
    obj.dest_chain_id = message.destChainId;
    return obj;
  }
};
function createBaseEventMirrorObject(): EventMirrorObject {
  return {
    operator: "",
    bucketName: "",
    objectName: "",
    objectId: "",
    destChainId: 0
  };
}
export const EventMirrorObject = {
  encode(message: EventMirrorObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }
    if (message.objectName !== "") {
      writer.uint32(26).string(message.objectName);
    }
    if (message.objectId !== "") {
      writer.uint32(34).string(message.objectId);
    }
    if (message.destChainId !== 0) {
      writer.uint32(40).uint32(message.destChainId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventMirrorObject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMirrorObject();
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
          message.objectId = reader.string();
          break;
        case 5:
          message.destChainId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventMirrorObject {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      objectName: isSet(object.objectName) ? String(object.objectName) : "",
      objectId: isSet(object.objectId) ? String(object.objectId) : "",
      destChainId: isSet(object.destChainId) ? Number(object.destChainId) : 0
    };
  },
  toJSON(message: EventMirrorObject): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.objectName !== undefined && (obj.objectName = message.objectName);
    message.objectId !== undefined && (obj.objectId = message.objectId);
    message.destChainId !== undefined && (obj.destChainId = Math.round(message.destChainId));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventMirrorObject>, I>>(object: I): EventMirrorObject {
    const message = createBaseEventMirrorObject();
    message.operator = object.operator ?? "";
    message.bucketName = object.bucketName ?? "";
    message.objectName = object.objectName ?? "";
    message.objectId = object.objectId ?? "";
    message.destChainId = object.destChainId ?? 0;
    return message;
  },
  fromSDK(object: EventMirrorObjectSDKType): EventMirrorObject {
    return {
      operator: object?.operator,
      bucketName: object?.bucket_name,
      objectName: object?.object_name,
      objectId: object?.object_id,
      destChainId: object?.dest_chain_id
    };
  },
  toSDK(message: EventMirrorObject): EventMirrorObjectSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    obj.object_id = message.objectId;
    obj.dest_chain_id = message.destChainId;
    return obj;
  }
};
function createBaseEventMirrorObjectResult(): EventMirrorObjectResult {
  return {
    status: 0,
    bucketName: "",
    objectName: "",
    objectId: "",
    destChainId: 0
  };
}
export const EventMirrorObjectResult = {
  encode(message: EventMirrorObjectResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).uint32(message.status);
    }
    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }
    if (message.objectName !== "") {
      writer.uint32(26).string(message.objectName);
    }
    if (message.objectId !== "") {
      writer.uint32(34).string(message.objectId);
    }
    if (message.destChainId !== 0) {
      writer.uint32(40).uint32(message.destChainId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventMirrorObjectResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMirrorObjectResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.uint32();
          break;
        case 2:
          message.bucketName = reader.string();
          break;
        case 3:
          message.objectName = reader.string();
          break;
        case 4:
          message.objectId = reader.string();
          break;
        case 5:
          message.destChainId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventMirrorObjectResult {
    return {
      status: isSet(object.status) ? Number(object.status) : 0,
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      objectName: isSet(object.objectName) ? String(object.objectName) : "",
      objectId: isSet(object.objectId) ? String(object.objectId) : "",
      destChainId: isSet(object.destChainId) ? Number(object.destChainId) : 0
    };
  },
  toJSON(message: EventMirrorObjectResult): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = Math.round(message.status));
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.objectName !== undefined && (obj.objectName = message.objectName);
    message.objectId !== undefined && (obj.objectId = message.objectId);
    message.destChainId !== undefined && (obj.destChainId = Math.round(message.destChainId));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventMirrorObjectResult>, I>>(object: I): EventMirrorObjectResult {
    const message = createBaseEventMirrorObjectResult();
    message.status = object.status ?? 0;
    message.bucketName = object.bucketName ?? "";
    message.objectName = object.objectName ?? "";
    message.objectId = object.objectId ?? "";
    message.destChainId = object.destChainId ?? 0;
    return message;
  },
  fromSDK(object: EventMirrorObjectResultSDKType): EventMirrorObjectResult {
    return {
      status: object?.status,
      bucketName: object?.bucket_name,
      objectName: object?.object_name,
      objectId: object?.object_id,
      destChainId: object?.dest_chain_id
    };
  },
  toSDK(message: EventMirrorObjectResult): EventMirrorObjectResultSDKType {
    const obj: any = {};
    obj.status = message.status;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    obj.object_id = message.objectId;
    obj.dest_chain_id = message.destChainId;
    return obj;
  }
};
function createBaseEventMirrorGroup(): EventMirrorGroup {
  return {
    owner: "",
    groupName: "",
    groupId: "",
    destChainId: 0
  };
}
export const EventMirrorGroup = {
  encode(message: EventMirrorGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.groupName !== "") {
      writer.uint32(18).string(message.groupName);
    }
    if (message.groupId !== "") {
      writer.uint32(26).string(message.groupId);
    }
    if (message.destChainId !== 0) {
      writer.uint32(32).uint32(message.destChainId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventMirrorGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMirrorGroup();
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
          message.groupId = reader.string();
          break;
        case 4:
          message.destChainId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventMirrorGroup {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      groupName: isSet(object.groupName) ? String(object.groupName) : "",
      groupId: isSet(object.groupId) ? String(object.groupId) : "",
      destChainId: isSet(object.destChainId) ? Number(object.destChainId) : 0
    };
  },
  toJSON(message: EventMirrorGroup): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.groupName !== undefined && (obj.groupName = message.groupName);
    message.groupId !== undefined && (obj.groupId = message.groupId);
    message.destChainId !== undefined && (obj.destChainId = Math.round(message.destChainId));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventMirrorGroup>, I>>(object: I): EventMirrorGroup {
    const message = createBaseEventMirrorGroup();
    message.owner = object.owner ?? "";
    message.groupName = object.groupName ?? "";
    message.groupId = object.groupId ?? "";
    message.destChainId = object.destChainId ?? 0;
    return message;
  },
  fromSDK(object: EventMirrorGroupSDKType): EventMirrorGroup {
    return {
      owner: object?.owner,
      groupName: object?.group_name,
      groupId: object?.group_id,
      destChainId: object?.dest_chain_id
    };
  },
  toSDK(message: EventMirrorGroup): EventMirrorGroupSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.group_name = message.groupName;
    obj.group_id = message.groupId;
    obj.dest_chain_id = message.destChainId;
    return obj;
  }
};
function createBaseEventMirrorGroupResult(): EventMirrorGroupResult {
  return {
    status: 0,
    groupName: "",
    groupId: "",
    destChainId: 0
  };
}
export const EventMirrorGroupResult = {
  encode(message: EventMirrorGroupResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).uint32(message.status);
    }
    if (message.groupName !== "") {
      writer.uint32(18).string(message.groupName);
    }
    if (message.groupId !== "") {
      writer.uint32(26).string(message.groupId);
    }
    if (message.destChainId !== 0) {
      writer.uint32(32).uint32(message.destChainId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventMirrorGroupResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMirrorGroupResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.uint32();
          break;
        case 2:
          message.groupName = reader.string();
          break;
        case 3:
          message.groupId = reader.string();
          break;
        case 4:
          message.destChainId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventMirrorGroupResult {
    return {
      status: isSet(object.status) ? Number(object.status) : 0,
      groupName: isSet(object.groupName) ? String(object.groupName) : "",
      groupId: isSet(object.groupId) ? String(object.groupId) : "",
      destChainId: isSet(object.destChainId) ? Number(object.destChainId) : 0
    };
  },
  toJSON(message: EventMirrorGroupResult): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = Math.round(message.status));
    message.groupName !== undefined && (obj.groupName = message.groupName);
    message.groupId !== undefined && (obj.groupId = message.groupId);
    message.destChainId !== undefined && (obj.destChainId = Math.round(message.destChainId));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventMirrorGroupResult>, I>>(object: I): EventMirrorGroupResult {
    const message = createBaseEventMirrorGroupResult();
    message.status = object.status ?? 0;
    message.groupName = object.groupName ?? "";
    message.groupId = object.groupId ?? "";
    message.destChainId = object.destChainId ?? 0;
    return message;
  },
  fromSDK(object: EventMirrorGroupResultSDKType): EventMirrorGroupResult {
    return {
      status: object?.status,
      groupName: object?.group_name,
      groupId: object?.group_id,
      destChainId: object?.dest_chain_id
    };
  },
  toSDK(message: EventMirrorGroupResult): EventMirrorGroupResultSDKType {
    const obj: any = {};
    obj.status = message.status;
    obj.group_name = message.groupName;
    obj.group_id = message.groupId;
    obj.dest_chain_id = message.destChainId;
    return obj;
  }
};
function createBaseEventStalePolicyCleanup(): EventStalePolicyCleanup {
  return {
    blockNum: Long.ZERO,
    deleteInfo: DeleteInfo.fromPartial({})
  };
}
export const EventStalePolicyCleanup = {
  encode(message: EventStalePolicyCleanup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.blockNum.isZero()) {
      writer.uint32(8).int64(message.blockNum);
    }
    if (message.deleteInfo !== undefined) {
      DeleteInfo.encode(message.deleteInfo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventStalePolicyCleanup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventStalePolicyCleanup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockNum = (reader.int64() as Long);
          break;
        case 2:
          message.deleteInfo = DeleteInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventStalePolicyCleanup {
    return {
      blockNum: isSet(object.blockNum) ? Long.fromValue(object.blockNum) : Long.ZERO,
      deleteInfo: isSet(object.deleteInfo) ? DeleteInfo.fromJSON(object.deleteInfo) : undefined
    };
  },
  toJSON(message: EventStalePolicyCleanup): unknown {
    const obj: any = {};
    message.blockNum !== undefined && (obj.blockNum = (message.blockNum || Long.ZERO).toString());
    message.deleteInfo !== undefined && (obj.deleteInfo = message.deleteInfo ? DeleteInfo.toJSON(message.deleteInfo) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventStalePolicyCleanup>, I>>(object: I): EventStalePolicyCleanup {
    const message = createBaseEventStalePolicyCleanup();
    message.blockNum = object.blockNum !== undefined && object.blockNum !== null ? Long.fromValue(object.blockNum) : Long.ZERO;
    message.deleteInfo = object.deleteInfo !== undefined && object.deleteInfo !== null ? DeleteInfo.fromPartial(object.deleteInfo) : undefined;
    return message;
  },
  fromSDK(object: EventStalePolicyCleanupSDKType): EventStalePolicyCleanup {
    return {
      blockNum: object?.blockNum,
      deleteInfo: object.delete_info ? DeleteInfo.fromSDK(object.delete_info) : undefined
    };
  },
  toSDK(message: EventStalePolicyCleanup): EventStalePolicyCleanupSDKType {
    const obj: any = {};
    obj.blockNum = message.blockNum;
    message.deleteInfo !== undefined && (obj.delete_info = message.deleteInfo ? DeleteInfo.toSDK(message.deleteInfo) : undefined);
    return obj;
  }
};
function createBaseEventMigrationBucket(): EventMigrationBucket {
  return {
    operator: "",
    bucketName: "",
    bucketId: "",
    dstPrimarySpId: 0
  };
}
export const EventMigrationBucket = {
  encode(message: EventMigrationBucket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }
    if (message.bucketId !== "") {
      writer.uint32(26).string(message.bucketId);
    }
    if (message.dstPrimarySpId !== 0) {
      writer.uint32(32).uint32(message.dstPrimarySpId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventMigrationBucket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMigrationBucket();
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
          message.bucketId = reader.string();
          break;
        case 4:
          message.dstPrimarySpId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventMigrationBucket {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      bucketId: isSet(object.bucketId) ? String(object.bucketId) : "",
      dstPrimarySpId: isSet(object.dstPrimarySpId) ? Number(object.dstPrimarySpId) : 0
    };
  },
  toJSON(message: EventMigrationBucket): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.bucketId !== undefined && (obj.bucketId = message.bucketId);
    message.dstPrimarySpId !== undefined && (obj.dstPrimarySpId = Math.round(message.dstPrimarySpId));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventMigrationBucket>, I>>(object: I): EventMigrationBucket {
    const message = createBaseEventMigrationBucket();
    message.operator = object.operator ?? "";
    message.bucketName = object.bucketName ?? "";
    message.bucketId = object.bucketId ?? "";
    message.dstPrimarySpId = object.dstPrimarySpId ?? 0;
    return message;
  },
  fromSDK(object: EventMigrationBucketSDKType): EventMigrationBucket {
    return {
      operator: object?.operator,
      bucketName: object?.bucket_name,
      bucketId: object?.bucket_id,
      dstPrimarySpId: object?.dst_primary_sp_id
    };
  },
  toSDK(message: EventMigrationBucket): EventMigrationBucketSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.bucket_id = message.bucketId;
    obj.dst_primary_sp_id = message.dstPrimarySpId;
    return obj;
  }
};
function createBaseEventCancelMigrationBucket(): EventCancelMigrationBucket {
  return {
    operator: "",
    bucketName: "",
    bucketId: ""
  };
}
export const EventCancelMigrationBucket = {
  encode(message: EventCancelMigrationBucket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }
    if (message.bucketId !== "") {
      writer.uint32(26).string(message.bucketId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventCancelMigrationBucket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCancelMigrationBucket();
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
          message.bucketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventCancelMigrationBucket {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      bucketId: isSet(object.bucketId) ? String(object.bucketId) : ""
    };
  },
  toJSON(message: EventCancelMigrationBucket): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.bucketId !== undefined && (obj.bucketId = message.bucketId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventCancelMigrationBucket>, I>>(object: I): EventCancelMigrationBucket {
    const message = createBaseEventCancelMigrationBucket();
    message.operator = object.operator ?? "";
    message.bucketName = object.bucketName ?? "";
    message.bucketId = object.bucketId ?? "";
    return message;
  },
  fromSDK(object: EventCancelMigrationBucketSDKType): EventCancelMigrationBucket {
    return {
      operator: object?.operator,
      bucketName: object?.bucket_name,
      bucketId: object?.bucket_id
    };
  },
  toSDK(message: EventCancelMigrationBucket): EventCancelMigrationBucketSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.bucket_id = message.bucketId;
    return obj;
  }
};
function createBaseEventRejectMigrateBucket(): EventRejectMigrateBucket {
  return {
    operator: "",
    bucketName: "",
    bucketId: ""
  };
}
export const EventRejectMigrateBucket = {
  encode(message: EventRejectMigrateBucket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }
    if (message.bucketId !== "") {
      writer.uint32(26).string(message.bucketId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventRejectMigrateBucket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRejectMigrateBucket();
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
          message.bucketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventRejectMigrateBucket {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      bucketId: isSet(object.bucketId) ? String(object.bucketId) : ""
    };
  },
  toJSON(message: EventRejectMigrateBucket): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.bucketId !== undefined && (obj.bucketId = message.bucketId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventRejectMigrateBucket>, I>>(object: I): EventRejectMigrateBucket {
    const message = createBaseEventRejectMigrateBucket();
    message.operator = object.operator ?? "";
    message.bucketName = object.bucketName ?? "";
    message.bucketId = object.bucketId ?? "";
    return message;
  },
  fromSDK(object: EventRejectMigrateBucketSDKType): EventRejectMigrateBucket {
    return {
      operator: object?.operator,
      bucketName: object?.bucket_name,
      bucketId: object?.bucket_id
    };
  },
  toSDK(message: EventRejectMigrateBucket): EventRejectMigrateBucketSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.bucket_id = message.bucketId;
    return obj;
  }
};
function createBaseEventCompleteMigrationBucket(): EventCompleteMigrationBucket {
  return {
    operator: "",
    bucketName: "",
    bucketId: "",
    globalVirtualGroupFamilyId: 0,
    srcPrimarySpId: 0
  };
}
export const EventCompleteMigrationBucket = {
  encode(message: EventCompleteMigrationBucket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }
    if (message.bucketId !== "") {
      writer.uint32(26).string(message.bucketId);
    }
    if (message.globalVirtualGroupFamilyId !== 0) {
      writer.uint32(32).uint32(message.globalVirtualGroupFamilyId);
    }
    if (message.srcPrimarySpId !== 0) {
      writer.uint32(40).uint32(message.srcPrimarySpId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventCompleteMigrationBucket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCompleteMigrationBucket();
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
          message.bucketId = reader.string();
          break;
        case 4:
          message.globalVirtualGroupFamilyId = reader.uint32();
          break;
        case 5:
          message.srcPrimarySpId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventCompleteMigrationBucket {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      bucketId: isSet(object.bucketId) ? String(object.bucketId) : "",
      globalVirtualGroupFamilyId: isSet(object.globalVirtualGroupFamilyId) ? Number(object.globalVirtualGroupFamilyId) : 0,
      srcPrimarySpId: isSet(object.srcPrimarySpId) ? Number(object.srcPrimarySpId) : 0
    };
  },
  toJSON(message: EventCompleteMigrationBucket): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.bucketId !== undefined && (obj.bucketId = message.bucketId);
    message.globalVirtualGroupFamilyId !== undefined && (obj.globalVirtualGroupFamilyId = Math.round(message.globalVirtualGroupFamilyId));
    message.srcPrimarySpId !== undefined && (obj.srcPrimarySpId = Math.round(message.srcPrimarySpId));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventCompleteMigrationBucket>, I>>(object: I): EventCompleteMigrationBucket {
    const message = createBaseEventCompleteMigrationBucket();
    message.operator = object.operator ?? "";
    message.bucketName = object.bucketName ?? "";
    message.bucketId = object.bucketId ?? "";
    message.globalVirtualGroupFamilyId = object.globalVirtualGroupFamilyId ?? 0;
    message.srcPrimarySpId = object.srcPrimarySpId ?? 0;
    return message;
  },
  fromSDK(object: EventCompleteMigrationBucketSDKType): EventCompleteMigrationBucket {
    return {
      operator: object?.operator,
      bucketName: object?.bucket_name,
      bucketId: object?.bucket_id,
      globalVirtualGroupFamilyId: object?.global_virtual_group_family_id,
      srcPrimarySpId: object?.src_primary_sp_id
    };
  },
  toSDK(message: EventCompleteMigrationBucket): EventCompleteMigrationBucketSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.bucket_id = message.bucketId;
    obj.global_virtual_group_family_id = message.globalVirtualGroupFamilyId;
    obj.src_primary_sp_id = message.srcPrimarySpId;
    return obj;
  }
};
function createBaseEventSetTag(): EventSetTag {
  return {
    resource: "",
    tags: ResourceTags.fromPartial({})
  };
}
export const EventSetTag = {
  encode(message: EventSetTag, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resource !== "") {
      writer.uint32(10).string(message.resource);
    }
    if (message.tags !== undefined) {
      ResourceTags.encode(message.tags, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventSetTag {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetTag();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resource = reader.string();
          break;
        case 2:
          message.tags = ResourceTags.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetTag {
    return {
      resource: isSet(object.resource) ? String(object.resource) : "",
      tags: isSet(object.tags) ? ResourceTags.fromJSON(object.tags) : undefined
    };
  },
  toJSON(message: EventSetTag): unknown {
    const obj: any = {};
    message.resource !== undefined && (obj.resource = message.resource);
    message.tags !== undefined && (obj.tags = message.tags ? ResourceTags.toJSON(message.tags) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventSetTag>, I>>(object: I): EventSetTag {
    const message = createBaseEventSetTag();
    message.resource = object.resource ?? "";
    message.tags = object.tags !== undefined && object.tags !== null ? ResourceTags.fromPartial(object.tags) : undefined;
    return message;
  },
  fromSDK(object: EventSetTagSDKType): EventSetTag {
    return {
      resource: object?.resource,
      tags: object.tags ? ResourceTags.fromSDK(object.tags) : undefined
    };
  },
  toSDK(message: EventSetTag): EventSetTagSDKType {
    const obj: any = {};
    obj.resource = message.resource;
    message.tags !== undefined && (obj.tags = message.tags ? ResourceTags.toSDK(message.tags) : undefined);
    return obj;
  }
};