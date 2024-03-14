//@ts-nocheck
/* eslint-disable */
import { VisibilityType, SourceType, BucketStatus, ObjectStatus, RedundancyType, visibilityTypeFromJSON, sourceTypeFromJSON, bucketStatusFromJSON, visibilityTypeToJSON, sourceTypeToJSON, bucketStatusToJSON, objectStatusFromJSON, redundancyTypeFromJSON, objectStatusToJSON, redundancyTypeToJSON } from "./common";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { DeleteInfo, DeleteInfoAmino, DeleteInfoSDKType, ResourceTags, ResourceTagsAmino, ResourceTagsSDKType } from "./types";
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
}
export interface EventCreateBucketProtoMsg {
  typeUrl: "/greenfield.storage.EventCreateBucket";
  value: Uint8Array;
}
/** EventCreateBucket is emitted on MsgCreateBucket */
export interface EventCreateBucketAmino {
  /** owner define the account address of bucket owner */
  owner?: string;
  /** bucket_name is a globally unique name of bucket */
  bucket_name?: string;
  /** visibility defines the highest permissions for bucket. When a bucket is public, everyone can get the object under it. */
  visibility?: VisibilityType;
  /** create_at define the block timestamp when the bucket has been created */
  create_at?: string;
  /** bucket_id is the unique u256 for bucket. Not global, only unique in buckets. */
  bucket_id?: string;
  /** source_type define the source of the bucket. CrossChain or Greenfield origin */
  source_type?: SourceType;
  /** read_quota defines the charged traffic quota for read, not include free quota which provided by each storage provider */
  charged_read_quota?: string;
  /** payment_address is the address of the payment account */
  payment_address?: string;
  /** primary_sp_id is the unique id of primary sp. */
  primary_sp_id?: number;
  /** global_virtual_group_family_id defines the unique id of gvg family */
  global_virtual_group_family_id?: number;
  /** status define the status of the bucket. */
  status?: BucketStatus;
}
export interface EventCreateBucketAminoMsg {
  type: "/greenfield.storage.EventCreateBucket";
  value: EventCreateBucketAmino;
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
export interface EventDeleteBucketProtoMsg {
  typeUrl: "/greenfield.storage.EventDeleteBucket";
  value: Uint8Array;
}
/** EventDeleteBucket is emitted on MsgDeleteBucket */
export interface EventDeleteBucketAmino {
  /** operator define the account address of operator who delete the bucket */
  operator?: string;
  /** owner define the account address of the bucket owner */
  owner?: string;
  /** bucket_name define the name of the deleted bucket */
  bucket_name?: string;
  /** bucket_id define an u256 id for bucket */
  bucket_id?: string;
  /** global_virtual_group_family_id defines the unique id of gvg family */
  global_virtual_group_family_id?: number;
}
export interface EventDeleteBucketAminoMsg {
  type: "/greenfield.storage.EventDeleteBucket";
  value: EventDeleteBucketAmino;
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
export interface EventUpdateBucketInfoProtoMsg {
  typeUrl: "/greenfield.storage.EventUpdateBucketInfo";
  value: Uint8Array;
}
/** EventUpdateBucketInfo is emitted on MsgUpdateBucketInfo */
export interface EventUpdateBucketInfoAmino {
  /** operator define the account address of operator who update the bucket */
  operator?: string;
  /** bucket_name define the name of the bucket */
  bucket_name?: string;
  /** bucket_id define an u256 id for bucket */
  bucket_id?: string;
  /** charged_read_quota_after define the read quota after updated */
  charged_read_quota?: string;
  /** payment_address define the payment address after updated */
  payment_address?: string;
  /** visibility defines the highest permission of object. */
  visibility?: VisibilityType;
  /** global_virtual_group_family_id defines the gvg family id after migrated. */
  global_virtual_group_family_id?: number;
}
export interface EventUpdateBucketInfoAminoMsg {
  type: "/greenfield.storage.EventUpdateBucketInfo";
  value: EventUpdateBucketInfoAmino;
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
export interface EventDiscontinueBucketProtoMsg {
  typeUrl: "/greenfield.storage.EventDiscontinueBucket";
  value: Uint8Array;
}
/** EventDiscontinueBucket is emitted on MsgDiscontinueBucket */
export interface EventDiscontinueBucketAmino {
  /** bucket_id define id of the bucket */
  bucket_id?: string;
  /** bucket_name define the name of the bucket */
  bucket_name?: string;
  /** the reason */
  reason?: string;
  /** the timestamp after which the metadata will be deleted */
  delete_at?: string;
}
export interface EventDiscontinueBucketAminoMsg {
  type: "/greenfield.storage.EventDiscontinueBucket";
  value: EventDiscontinueBucketAmino;
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
}
export interface EventCreateObjectProtoMsg {
  typeUrl: "/greenfield.storage.EventCreateObject";
  value: Uint8Array;
}
/** EventCreateObject is emitted on MsgCreateObject */
export interface EventCreateObjectAmino {
  /** creator define the account address of msg creator */
  creator?: string;
  /** owner define the account address of object owner */
  owner?: string;
  /** bucket_name define the name of bucket */
  bucket_name?: string;
  /** object_name define the name of object */
  object_name?: string;
  /** bucket_id define an u256 id for bucket */
  bucket_id?: string;
  /** object_id define an u256 id for object */
  object_id?: string;
  /** primary_sp_id define the unique id of primary sp */
  primary_sp_id?: number;
  /** payload_size define the size of payload data which you want upload */
  payload_size?: string;
  /** visibility defines the highest permission of object. */
  visibility?: VisibilityType;
  /** content_type define the content type of the payload data */
  content_type?: string;
  /** create_at define the block timestamp when the object created */
  create_at?: string;
  /** status define the status of the object. INIT or IN_SERVICE or others */
  status?: ObjectStatus;
  /** redundancy_type define the type of redundancy. Replication or EC */
  redundancy_type?: RedundancyType;
  /** source_type define the source of the object.  CrossChain or Greenfield origin */
  source_type?: SourceType;
  /** checksums define the total checksums of the object which generated by redundancy */
  checksums?: string[];
  /** local_virtual_group_id defines the unique id of lvg which the object stored */
  local_virtual_group_id?: number;
}
export interface EventCreateObjectAminoMsg {
  type: "/greenfield.storage.EventCreateObject";
  value: EventCreateObjectAmino;
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
export interface EventCancelCreateObjectProtoMsg {
  typeUrl: "/greenfield.storage.EventCancelCreateObject";
  value: Uint8Array;
}
/** EventCancelCreateObject is emitted on MsgCancelCreateObject */
export interface EventCancelCreateObjectAmino {
  /** operator define the account address of operator who cancel create object */
  operator?: string;
  /** bucket_name define the name of the bucket */
  bucket_name?: string;
  /** object_name define the name of the object */
  object_name?: string;
  /** primary_sp_id define the unique id of primary sp */
  primary_sp_id?: number;
  /** id define an u256 id for object */
  object_id?: string;
}
export interface EventCancelCreateObjectAminoMsg {
  type: "/greenfield.storage.EventCancelCreateObject";
  value: EventCancelCreateObjectAmino;
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
  /**
   * checksums define the total checksums of the object which generated by redundancy
   * SP might set the checksum of object if it was delegated created by SP, which checksum
   * will not be available until sealing object.
   */
  checksums: Uint8Array[];
}
export interface EventSealObjectProtoMsg {
  typeUrl: "/greenfield.storage.EventSealObject";
  value: Uint8Array;
}
/** EventSealObject is emitted on MsgSealObject */
export interface EventSealObjectAmino {
  /** operator define the account address of operator who seal object */
  operator?: string;
  /** bucket_name define the name of the bucket */
  bucket_name?: string;
  /** object_name define the name of the object */
  object_name?: string;
  /** id define an u256 id for object */
  object_id?: string;
  /** status define the status of the object. INIT or IN_SERVICE or others */
  status?: ObjectStatus;
  /** global_virtual_group_id defines the unique id of gvg which the object stored */
  global_virtual_group_id?: number;
  /** local_virtual_group_id defines the unique id of lvg which the object stored */
  local_virtual_group_id?: number;
  /**
   * checksums define the total checksums of the object which generated by redundancy
   * SP might set the checksum of object if it was delegated created by SP, which checksum
   * will not be available until sealing object.
   */
  checksums?: string[];
}
export interface EventSealObjectAminoMsg {
  type: "/greenfield.storage.EventSealObject";
  value: EventSealObjectAmino;
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
  checksums: Uint8Array[];
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
export interface EventCopyObjectProtoMsg {
  typeUrl: "/greenfield.storage.EventCopyObject";
  value: Uint8Array;
}
/** EventCopyObject is emitted on MsgCopyObject */
export interface EventCopyObjectAmino {
  /** operator define the account address of operator who copy the object */
  operator?: string;
  /** src_bucket_name define the name of the src bucket */
  src_bucket_name?: string;
  /** src_object_name define the name of the src object */
  src_object_name?: string;
  /** dst_bucket_name define the name of the dst bucket */
  dst_bucket_name?: string;
  /** dst_object_name define the name of the dst object */
  dst_object_name?: string;
  /** src_object_id define the u256 id for src object */
  src_object_id?: string;
  /** dst_object_id define the u256 id for dst object */
  dst_object_id?: string;
  /** local_virtual_group_id defines the unique id of lvg which the object stored */
  local_virtual_group_id?: number;
}
export interface EventCopyObjectAminoMsg {
  type: "/greenfield.storage.EventCopyObject";
  value: EventCopyObjectAmino;
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
export interface EventDeleteObjectProtoMsg {
  typeUrl: "/greenfield.storage.EventDeleteObject";
  value: Uint8Array;
}
/** EventDeleteObject is emitted on MsgDeleteObject */
export interface EventDeleteObjectAmino {
  /** operator define the account address of operator who delete the object */
  operator?: string;
  /** bucket_name define the name of the bucket */
  bucket_name?: string;
  /** object_name define the name of the object */
  object_name?: string;
  /** id define an u256 id for object */
  object_id?: string;
  /** local_virtual_group_id defines the unique id of lvg which the object stored */
  local_virtual_group_id?: number;
}
export interface EventDeleteObjectAminoMsg {
  type: "/greenfield.storage.EventDeleteObject";
  value: EventDeleteObjectAmino;
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
  /** for_update indicates whether reject sealing on a updating object */
  forUpdate: boolean;
}
export interface EventRejectSealObjectProtoMsg {
  typeUrl: "/greenfield.storage.EventRejectSealObject";
  value: Uint8Array;
}
/** EventRejectSealObject is emitted on MsgRejectSealObject */
export interface EventRejectSealObjectAmino {
  /** operator define the account address of operator who reject seal object */
  operator?: string;
  /** bucket_name define the name of the bucket */
  bucket_name?: string;
  /** object_name define the name of the object */
  object_name?: string;
  /** id define an u256 id for object */
  object_id?: string;
  /** for_update indicates whether reject sealing on a updating object */
  for_update?: boolean;
}
export interface EventRejectSealObjectAminoMsg {
  type: "/greenfield.storage.EventRejectSealObject";
  value: EventRejectSealObjectAmino;
}
/** EventRejectSealObject is emitted on MsgRejectSealObject */
export interface EventRejectSealObjectSDKType {
  operator: string;
  bucket_name: string;
  object_name: string;
  object_id: string;
  for_update: boolean;
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
export interface EventDiscontinueObjectProtoMsg {
  typeUrl: "/greenfield.storage.EventDiscontinueObject";
  value: Uint8Array;
}
/** EventDiscontinueObject is emitted on MsgDiscontinueObject */
export interface EventDiscontinueObjectAmino {
  /** bucket_name define the name of the bucket */
  bucket_name?: string;
  /** object_id defines id of the object */
  object_id?: string;
  /** the reason */
  reason?: string;
  /** the timestamp after which the metadata will be deleted */
  delete_at?: string;
}
export interface EventDiscontinueObjectAminoMsg {
  type: "/greenfield.storage.EventDiscontinueObject";
  value: EventDiscontinueObjectAmino;
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
export interface EventUpdateObjectInfoProtoMsg {
  typeUrl: "/greenfield.storage.EventUpdateObjectInfo";
  value: Uint8Array;
}
/** EventUpdateObjectInfo is emitted on MsgUpdateObjectInfo */
export interface EventUpdateObjectInfoAmino {
  /** operator define the account address of operator who update the bucket */
  operator?: string;
  /** bucket_name define the name of the bucket */
  bucket_name?: string;
  /** object_name define the name of the object */
  object_name?: string;
  /** object_id define an u256 id for object */
  object_id?: string;
  /** visibility defines the highest permission of object. */
  visibility?: VisibilityType;
}
export interface EventUpdateObjectInfoAminoMsg {
  type: "/greenfield.storage.EventUpdateObjectInfo";
  value: EventUpdateObjectInfoAmino;
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
}
export interface EventCreateGroupProtoMsg {
  typeUrl: "/greenfield.storage.EventCreateGroup";
  value: Uint8Array;
}
/** EventCreateGroup is emitted on MsgCreateGroup */
export interface EventCreateGroupAmino {
  /** owner define the account address of group owner */
  owner?: string;
  /** group_name define the name of the group */
  group_name?: string;
  /** id define an u256 id for group */
  group_id?: string;
  /** source_type define the source of the group. CrossChain or Greenfield origin */
  source_type?: SourceType;
  /** extra defines extra info for the group */
  extra?: string;
}
export interface EventCreateGroupAminoMsg {
  type: "/greenfield.storage.EventCreateGroup";
  value: EventCreateGroupAmino;
}
/** EventCreateGroup is emitted on MsgCreateGroup */
export interface EventCreateGroupSDKType {
  owner: string;
  group_name: string;
  group_id: string;
  source_type: SourceType;
  extra: string;
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
export interface EventDeleteGroupProtoMsg {
  typeUrl: "/greenfield.storage.EventDeleteGroup";
  value: Uint8Array;
}
/** EventDeleteGroup is emitted on MsgDeleteGroup */
export interface EventDeleteGroupAmino {
  /** owner define the account address of group owner */
  owner?: string;
  /** group_name define the name of the group */
  group_name?: string;
  /** id define an u256 id for group */
  group_id?: string;
}
export interface EventDeleteGroupAminoMsg {
  type: "/greenfield.storage.EventDeleteGroup";
  value: EventDeleteGroupAmino;
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
export interface EventLeaveGroupProtoMsg {
  typeUrl: "/greenfield.storage.EventLeaveGroup";
  value: Uint8Array;
}
/** EventLeaveGroup is emitted on MsgLeaveGroup */
export interface EventLeaveGroupAmino {
  /** member_address define the address of the member who leave the group */
  member_address?: string;
  /** owner define the account address of group owner */
  owner?: string;
  /** group_name define the name of the group */
  group_name?: string;
  /** id define an u256 id for group */
  group_id?: string;
}
export interface EventLeaveGroupAminoMsg {
  type: "/greenfield.storage.EventLeaveGroup";
  value: EventLeaveGroupAmino;
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
export interface EventUpdateGroupMemberProtoMsg {
  typeUrl: "/greenfield.storage.EventUpdateGroupMember";
  value: Uint8Array;
}
/** EventUpdateGroupMember is emitted on MsgUpdateGroupMember */
export interface EventUpdateGroupMemberAmino {
  /** operator define the account address of operator who update the group member */
  operator?: string;
  /** owner define the account address of group owner */
  owner?: string;
  /** group_name define the name of the group */
  group_name?: string;
  /** id define an u256 id for group */
  group_id?: string;
  /** members_to_add defines all the members to be added to the group */
  members_to_add?: EventGroupMemberDetailAmino[];
  /** members_to_add defines all the members to be deleted from the group */
  members_to_delete?: string[];
}
export interface EventUpdateGroupMemberAminoMsg {
  type: "/greenfield.storage.EventUpdateGroupMember";
  value: EventUpdateGroupMemberAmino;
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
export interface EventRenewGroupMemberProtoMsg {
  typeUrl: "/greenfield.storage.EventRenewGroupMember";
  value: Uint8Array;
}
export interface EventRenewGroupMemberAmino {
  /** operator define the account address of operator who update the group member */
  operator?: string;
  /** owner define the account address of group owner */
  owner?: string;
  /** group_name define the name of the group */
  group_name?: string;
  /** id define an u256 id for group */
  group_id?: string;
  /** source_type define the source of the group. CrossChain or Greenfield origin */
  source_type?: SourceType;
  /** members define the all the address of the members. */
  members?: EventGroupMemberDetailAmino[];
}
export interface EventRenewGroupMemberAminoMsg {
  type: "/greenfield.storage.EventRenewGroupMember";
  value: EventRenewGroupMemberAmino;
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
  expirationTime?: Timestamp;
}
export interface EventGroupMemberDetailProtoMsg {
  typeUrl: "/greenfield.storage.EventGroupMemberDetail";
  value: Uint8Array;
}
export interface EventGroupMemberDetailAmino {
  /** member defines the account address of the group member */
  member?: string;
  /** expiration_time defines the expiration time of the group member */
  expiration_time?: string;
}
export interface EventGroupMemberDetailAminoMsg {
  type: "/greenfield.storage.EventGroupMemberDetail";
  value: EventGroupMemberDetailAmino;
}
export interface EventGroupMemberDetailSDKType {
  member: string;
  expiration_time?: TimestampSDKType;
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
export interface EventUpdateGroupExtraProtoMsg {
  typeUrl: "/greenfield.storage.EventUpdateGroupExtra";
  value: Uint8Array;
}
/** EventUpdateGroupExtra is emitted on MsgUpdateGroupExtra */
export interface EventUpdateGroupExtraAmino {
  /** operator define the account address of operator who update the group member */
  operator?: string;
  /** owner define the account address of group owner */
  owner?: string;
  /** group_name define the name of the group */
  group_name?: string;
  /** id define an u256 id for group */
  group_id?: string;
  /** extra defines extra info for the group to update */
  extra?: string;
}
export interface EventUpdateGroupExtraAminoMsg {
  type: "/greenfield.storage.EventUpdateGroupExtra";
  value: EventUpdateGroupExtraAmino;
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
export interface EventMirrorBucketProtoMsg {
  typeUrl: "/greenfield.storage.EventMirrorBucket";
  value: Uint8Array;
}
/** EventMirrorBucket is emitted on MirrorBucket */
export interface EventMirrorBucketAmino {
  /** operator define the account address of operator who mirror the bucket */
  operator?: string;
  /** bucket_name defines the name of the bucket */
  bucket_name?: string;
  /** bucket_id define an u256 id for bucket */
  bucket_id?: string;
  /** chain id of the destination chain */
  dest_chain_id?: number;
}
export interface EventMirrorBucketAminoMsg {
  type: "/greenfield.storage.EventMirrorBucket";
  value: EventMirrorBucketAmino;
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
export interface EventMirrorBucketResultProtoMsg {
  typeUrl: "/greenfield.storage.EventMirrorBucketResult";
  value: Uint8Array;
}
/** EventMirrorBucketResult is emitted on receiving ack package from destination chain */
export interface EventMirrorBucketResultAmino {
  /** status define the status of the result */
  status?: number;
  /** bucket_name defines the name of the bucket */
  bucket_name?: string;
  /** bucket_id define an u256 id for bucket */
  bucket_id?: string;
  /** chain id of the destination chain */
  dest_chain_id?: number;
}
export interface EventMirrorBucketResultAminoMsg {
  type: "/greenfield.storage.EventMirrorBucketResult";
  value: EventMirrorBucketResultAmino;
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
export interface EventMirrorObjectProtoMsg {
  typeUrl: "/greenfield.storage.EventMirrorObject";
  value: Uint8Array;
}
/** EventMirrorObject is emitted on MirrorObject */
export interface EventMirrorObjectAmino {
  /** operator define the account address of operator who delete the object */
  operator?: string;
  /** bucket_name define the name of the bucket */
  bucket_name?: string;
  /** object_name define the name of the object */
  object_name?: string;
  /** object_id define an u256 id for object */
  object_id?: string;
  /** chain id of the destination chain */
  dest_chain_id?: number;
}
export interface EventMirrorObjectAminoMsg {
  type: "/greenfield.storage.EventMirrorObject";
  value: EventMirrorObjectAmino;
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
export interface EventMirrorObjectResultProtoMsg {
  typeUrl: "/greenfield.storage.EventMirrorObjectResult";
  value: Uint8Array;
}
/** EventMirrorObjectResult is emitted on receiving ack package from destination chain */
export interface EventMirrorObjectResultAmino {
  /** status define the status of the result */
  status?: number;
  /** bucket_name define the name of the bucket */
  bucket_name?: string;
  /** object_name define the name of the object */
  object_name?: string;
  /** object_id define an u256 id for object */
  object_id?: string;
  /** chain id of the destination chain */
  dest_chain_id?: number;
}
export interface EventMirrorObjectResultAminoMsg {
  type: "/greenfield.storage.EventMirrorObjectResult";
  value: EventMirrorObjectResultAmino;
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
export interface EventMirrorGroupProtoMsg {
  typeUrl: "/greenfield.storage.EventMirrorGroup";
  value: Uint8Array;
}
/** EventMirrorGroup is emitted on MirrorGroup */
export interface EventMirrorGroupAmino {
  /** owner define the account address of group owner */
  owner?: string;
  /** group_name define the name of the group */
  group_name?: string;
  /** group_id define an u256 id for group */
  group_id?: string;
  /** chain id of the destination chain */
  dest_chain_id?: number;
}
export interface EventMirrorGroupAminoMsg {
  type: "/greenfield.storage.EventMirrorGroup";
  value: EventMirrorGroupAmino;
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
export interface EventMirrorGroupResultProtoMsg {
  typeUrl: "/greenfield.storage.EventMirrorGroupResult";
  value: Uint8Array;
}
/** EventMirrorGroupResult is emitted on receiving ack package from destination chain */
export interface EventMirrorGroupResultAmino {
  /** status define the status of the result */
  status?: number;
  /** group_name define the name of the group */
  group_name?: string;
  /** group_id define an u256 id for group */
  group_id?: string;
  /** chain id of the destination chain */
  dest_chain_id?: number;
}
export interface EventMirrorGroupResultAminoMsg {
  type: "/greenfield.storage.EventMirrorGroupResult";
  value: EventMirrorGroupResultAmino;
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
  deleteInfo?: DeleteInfo;
}
export interface EventStalePolicyCleanupProtoMsg {
  typeUrl: "/greenfield.storage.EventStalePolicyCleanup";
  value: Uint8Array;
}
/** EventStalePolicyCleanup is emitted when specified block height's stale policies need to be Garbage collected */
export interface EventStalePolicyCleanupAmino {
  blockNum?: string;
  delete_info?: DeleteInfoAmino;
}
export interface EventStalePolicyCleanupAminoMsg {
  type: "/greenfield.storage.EventStalePolicyCleanup";
  value: EventStalePolicyCleanupAmino;
}
/** EventStalePolicyCleanup is emitted when specified block height's stale policies need to be Garbage collected */
export interface EventStalePolicyCleanupSDKType {
  blockNum: Long;
  delete_info?: DeleteInfoSDKType;
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
export interface EventMigrationBucketProtoMsg {
  typeUrl: "/greenfield.storage.EventMigrationBucket";
  value: Uint8Array;
}
export interface EventMigrationBucketAmino {
  /**
   * The address of the operator that initiated the bucket migration,
   * usually the owner of the bucket or another account which has permission to operate
   */
  operator?: string;
  /** The name of the bucket to be migrated */
  bucket_name?: string;
  /** bucket_id define an u256 id for bucket */
  bucket_id?: string;
  /** The id of the destination primary sp */
  dst_primary_sp_id?: number;
}
export interface EventMigrationBucketAminoMsg {
  type: "/greenfield.storage.EventMigrationBucket";
  value: EventMigrationBucketAmino;
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
export interface EventCancelMigrationBucketProtoMsg {
  typeUrl: "/greenfield.storage.EventCancelMigrationBucket";
  value: Uint8Array;
}
export interface EventCancelMigrationBucketAmino {
  /**
   * The address of the operator that canceled the bucket migration,
   * usually the owner of the bucket or another account which has permission to operate
   */
  operator?: string;
  /** The name of the bucket to be migrated */
  bucket_name?: string;
  /** bucket_id define an u256 id for bucket */
  bucket_id?: string;
}
export interface EventCancelMigrationBucketAminoMsg {
  type: "/greenfield.storage.EventCancelMigrationBucket";
  value: EventCancelMigrationBucketAmino;
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
export interface EventRejectMigrateBucketProtoMsg {
  typeUrl: "/greenfield.storage.EventRejectMigrateBucket";
  value: Uint8Array;
}
export interface EventRejectMigrateBucketAmino {
  /** The address of the operator that reject the bucket migration, must be the dest SP */
  operator?: string;
  /** The name of the bucket to be migrated */
  bucket_name?: string;
  /** bucket_id define an u256 id for bucket */
  bucket_id?: string;
}
export interface EventRejectMigrateBucketAminoMsg {
  type: "/greenfield.storage.EventRejectMigrateBucket";
  value: EventRejectMigrateBucketAmino;
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
export interface EventCompleteMigrationBucketProtoMsg {
  typeUrl: "/greenfield.storage.EventCompleteMigrationBucket";
  value: Uint8Array;
}
export interface EventCompleteMigrationBucketAmino {
  /**
   * The address of the operator that initiated the bucket migration,
   * usually the owner of the bucket or another account which has permission to operate
   */
  operator?: string;
  /** The name of the bucket to be migrated */
  bucket_name?: string;
  /** bucket_id define an u256 id for bucket */
  bucket_id?: string;
  /** The family id that the bucket to be migrated to */
  global_virtual_group_family_id?: number;
  /** The src_primary_sp_id defines the primary sp id of the bucket before migrate. */
  src_primary_sp_id?: number;
}
export interface EventCompleteMigrationBucketAminoMsg {
  type: "/greenfield.storage.EventCompleteMigrationBucket";
  value: EventCompleteMigrationBucketAmino;
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
  tags?: ResourceTags;
}
export interface EventSetTagProtoMsg {
  typeUrl: "/greenfield.storage.EventSetTag";
  value: Uint8Array;
}
export interface EventSetTagAmino {
  /** resource defines a greenfield standard resource name that can be generated by GRN structure */
  resource?: string;
  /** tags define the tag of the source */
  tags?: ResourceTagsAmino;
}
export interface EventSetTagAminoMsg {
  type: "/greenfield.storage.EventSetTag";
  value: EventSetTagAmino;
}
export interface EventSetTagSDKType {
  resource: string;
  tags?: ResourceTagsSDKType;
}
/** EventUpdateObjectContent is emitted on MsgUpdateObjectContent */
export interface EventUpdateObjectContent {
  /** operator define the account address of msg operator */
  operator: string;
  /** object_id is the unique identifier of object */
  objectId: string;
  bucketName: string;
  objectName: string;
  /** payload_size define the size of payload data which you want upload */
  payloadSize: Long;
  /** checksums define the total checksums of the object which generated by redundancy */
  checksums: Uint8Array[];
  /** version define the version of object */
  version: Long;
}
export interface EventUpdateObjectContentProtoMsg {
  typeUrl: "/greenfield.storage.EventUpdateObjectContent";
  value: Uint8Array;
}
/** EventUpdateObjectContent is emitted on MsgUpdateObjectContent */
export interface EventUpdateObjectContentAmino {
  /** operator define the account address of msg operator */
  operator?: string;
  /** object_id is the unique identifier of object */
  object_id?: string;
  bucket_name?: string;
  object_name?: string;
  /** payload_size define the size of payload data which you want upload */
  payload_size?: string;
  /** checksums define the total checksums of the object which generated by redundancy */
  checksums?: string[];
  /** version define the version of object */
  version?: string;
}
export interface EventUpdateObjectContentAminoMsg {
  type: "/greenfield.storage.EventUpdateObjectContent";
  value: EventUpdateObjectContentAmino;
}
/** EventUpdateObjectContent is emitted on MsgUpdateObjectContent */
export interface EventUpdateObjectContentSDKType {
  operator: string;
  object_id: string;
  bucket_name: string;
  object_name: string;
  payload_size: Long;
  checksums: Uint8Array[];
  version: Long;
}
/** EventUpdateObjectContentSuccess is emitted on the MsgSealObject for updating object */
export interface EventUpdateObjectContentSuccess {
  /** operator define the account address of msg operator */
  operator: string;
  /** object_id is the unique identifier of object */
  objectId: string;
  bucketName: string;
  objectName: string;
  /** content_type define the content type of the payload data */
  contentType: string;
  /** prev_payload_size define the size of payload data stored previously */
  prevPayloadSize: Long;
  /** new_payload_size define the new size of payload data */
  newPayloadSize: Long;
  /** prev_checksums define the total checksums of the previous object which generated by redundancy */
  prevChecksums: Uint8Array[];
  /** new_checksums define the total checksums of the updated object which generated by redundancy */
  newChecksums: Uint8Array[];
  /** version define the version of object */
  version: Long;
  /** updated_at define the block timestamp when the object is updated */
  updatedAt: Long;
}
export interface EventUpdateObjectContentSuccessProtoMsg {
  typeUrl: "/greenfield.storage.EventUpdateObjectContentSuccess";
  value: Uint8Array;
}
/** EventUpdateObjectContentSuccess is emitted on the MsgSealObject for updating object */
export interface EventUpdateObjectContentSuccessAmino {
  /** operator define the account address of msg operator */
  operator?: string;
  /** object_id is the unique identifier of object */
  object_id?: string;
  bucket_name?: string;
  object_name?: string;
  /** content_type define the content type of the payload data */
  content_type?: string;
  /** prev_payload_size define the size of payload data stored previously */
  prev_payload_size?: string;
  /** new_payload_size define the new size of payload data */
  new_payload_size?: string;
  /** prev_checksums define the total checksums of the previous object which generated by redundancy */
  prev_checksums?: string[];
  /** new_checksums define the total checksums of the updated object which generated by redundancy */
  new_checksums?: string[];
  /** version define the version of object */
  version?: string;
  /** updated_at define the block timestamp when the object is updated */
  updated_at?: string;
}
export interface EventUpdateObjectContentSuccessAminoMsg {
  type: "/greenfield.storage.EventUpdateObjectContentSuccess";
  value: EventUpdateObjectContentSuccessAmino;
}
/** EventUpdateObjectContentSuccess is emitted on the MsgSealObject for updating object */
export interface EventUpdateObjectContentSuccessSDKType {
  operator: string;
  object_id: string;
  bucket_name: string;
  object_name: string;
  content_type: string;
  prev_payload_size: Long;
  new_payload_size: Long;
  prev_checksums: Uint8Array[];
  new_checksums: Uint8Array[];
  version: Long;
  updated_at: Long;
}
/** EventCancelUpdateObjectContent is emitted on MsgCancelUpdateObjectContent */
export interface EventCancelUpdateObjectContent {
  /** operator define the account address of operator who cancel update object */
  operator: string;
  /** bucket_name define the name of the bucket */
  bucketName: string;
  /** object_name define the name of the object */
  objectName: string;
  /** object_id define the id of the object */
  objectId: string;
}
export interface EventCancelUpdateObjectContentProtoMsg {
  typeUrl: "/greenfield.storage.EventCancelUpdateObjectContent";
  value: Uint8Array;
}
/** EventCancelUpdateObjectContent is emitted on MsgCancelUpdateObjectContent */
export interface EventCancelUpdateObjectContentAmino {
  /** operator define the account address of operator who cancel update object */
  operator?: string;
  /** bucket_name define the name of the bucket */
  bucket_name?: string;
  /** object_name define the name of the object */
  object_name?: string;
  /** object_id define the id of the object */
  object_id?: string;
}
export interface EventCancelUpdateObjectContentAminoMsg {
  type: "/greenfield.storage.EventCancelUpdateObjectContent";
  value: EventCancelUpdateObjectContentAmino;
}
/** EventCancelUpdateObjectContent is emitted on MsgCancelUpdateObjectContent */
export interface EventCancelUpdateObjectContentSDKType {
  operator: string;
  bucket_name: string;
  object_name: string;
  object_id: string;
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
    status: 0
  };
}
export const EventCreateBucket = {
  typeUrl: "/greenfield.storage.EventCreateBucket",
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
      status: isSet(object.status) ? bucketStatusFromJSON(object.status) : -1
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
      status: isSet(object.status) ? bucketStatusFromJSON(object.status) : -1
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
    return obj;
  },
  fromAmino(object: EventCreateBucketAmino): EventCreateBucket {
    const message = createBaseEventCreateBucket();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    if (object.visibility !== undefined && object.visibility !== null) {
      message.visibility = visibilityTypeFromJSON(object.visibility);
    }
    if (object.create_at !== undefined && object.create_at !== null) {
      message.createAt = Long.fromString(object.create_at);
    }
    if (object.bucket_id !== undefined && object.bucket_id !== null) {
      message.bucketId = object.bucket_id;
    }
    if (object.source_type !== undefined && object.source_type !== null) {
      message.sourceType = sourceTypeFromJSON(object.source_type);
    }
    if (object.charged_read_quota !== undefined && object.charged_read_quota !== null) {
      message.chargedReadQuota = Long.fromString(object.charged_read_quota);
    }
    if (object.payment_address !== undefined && object.payment_address !== null) {
      message.paymentAddress = object.payment_address;
    }
    if (object.primary_sp_id !== undefined && object.primary_sp_id !== null) {
      message.primarySpId = object.primary_sp_id;
    }
    if (object.global_virtual_group_family_id !== undefined && object.global_virtual_group_family_id !== null) {
      message.globalVirtualGroupFamilyId = object.global_virtual_group_family_id;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = bucketStatusFromJSON(object.status);
    }
    return message;
  },
  toAmino(message: EventCreateBucket): EventCreateBucketAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.bucket_name = message.bucketName;
    obj.visibility = visibilityTypeToJSON(message.visibility);
    obj.create_at = message.createAt ? message.createAt.toString() : undefined;
    obj.bucket_id = message.bucketId;
    obj.source_type = sourceTypeToJSON(message.sourceType);
    obj.charged_read_quota = message.chargedReadQuota ? message.chargedReadQuota.toString() : undefined;
    obj.payment_address = message.paymentAddress;
    obj.primary_sp_id = message.primarySpId;
    obj.global_virtual_group_family_id = message.globalVirtualGroupFamilyId;
    obj.status = bucketStatusToJSON(message.status);
    return obj;
  },
  fromAminoMsg(object: EventCreateBucketAminoMsg): EventCreateBucket {
    return EventCreateBucket.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCreateBucketProtoMsg): EventCreateBucket {
    return EventCreateBucket.decode(message.value);
  },
  toProto(message: EventCreateBucket): Uint8Array {
    return EventCreateBucket.encode(message).finish();
  },
  toProtoMsg(message: EventCreateBucket): EventCreateBucketProtoMsg {
    return {
      typeUrl: "/greenfield.storage.EventCreateBucket",
      value: EventCreateBucket.encode(message).finish()
    };
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
  typeUrl: "/greenfield.storage.EventDeleteBucket",
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
  },
  fromAmino(object: EventDeleteBucketAmino): EventDeleteBucket {
    const message = createBaseEventDeleteBucket();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    if (object.bucket_id !== undefined && object.bucket_id !== null) {
      message.bucketId = object.bucket_id;
    }
    if (object.global_virtual_group_family_id !== undefined && object.global_virtual_group_family_id !== null) {
      message.globalVirtualGroupFamilyId = object.global_virtual_group_family_id;
    }
    return message;
  },
  toAmino(message: EventDeleteBucket): EventDeleteBucketAmino {
    const obj: any = {};
    obj.operator = message.operator;
    obj.owner = message.owner;
    obj.bucket_name = message.bucketName;
    obj.bucket_id = message.bucketId;
    obj.global_virtual_group_family_id = message.globalVirtualGroupFamilyId;
    return obj;
  },
  fromAminoMsg(object: EventDeleteBucketAminoMsg): EventDeleteBucket {
    return EventDeleteBucket.fromAmino(object.value);
  },
  fromProtoMsg(message: EventDeleteBucketProtoMsg): EventDeleteBucket {
    return EventDeleteBucket.decode(message.value);
  },
  toProto(message: EventDeleteBucket): Uint8Array {
    return EventDeleteBucket.encode(message).finish();
  },
  toProtoMsg(message: EventDeleteBucket): EventDeleteBucketProtoMsg {
    return {
      typeUrl: "/greenfield.storage.EventDeleteBucket",
      value: EventDeleteBucket.encode(message).finish()
    };
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
  typeUrl: "/greenfield.storage.EventUpdateBucketInfo",
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
  },
  fromAmino(object: EventUpdateBucketInfoAmino): EventUpdateBucketInfo {
    const message = createBaseEventUpdateBucketInfo();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    if (object.bucket_id !== undefined && object.bucket_id !== null) {
      message.bucketId = object.bucket_id;
    }
    if (object.charged_read_quota !== undefined && object.charged_read_quota !== null) {
      message.chargedReadQuota = Long.fromString(object.charged_read_quota);
    }
    if (object.payment_address !== undefined && object.payment_address !== null) {
      message.paymentAddress = object.payment_address;
    }
    if (object.visibility !== undefined && object.visibility !== null) {
      message.visibility = visibilityTypeFromJSON(object.visibility);
    }
    if (object.global_virtual_group_family_id !== undefined && object.global_virtual_group_family_id !== null) {
      message.globalVirtualGroupFamilyId = object.global_virtual_group_family_id;
    }
    return message;
  },
  toAmino(message: EventUpdateBucketInfo): EventUpdateBucketInfoAmino {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.bucket_id = message.bucketId;
    obj.charged_read_quota = message.chargedReadQuota ? message.chargedReadQuota.toString() : undefined;
    obj.payment_address = message.paymentAddress;
    obj.visibility = visibilityTypeToJSON(message.visibility);
    obj.global_virtual_group_family_id = message.globalVirtualGroupFamilyId;
    return obj;
  },
  fromAminoMsg(object: EventUpdateBucketInfoAminoMsg): EventUpdateBucketInfo {
    return EventUpdateBucketInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: EventUpdateBucketInfoProtoMsg): EventUpdateBucketInfo {
    return EventUpdateBucketInfo.decode(message.value);
  },
  toProto(message: EventUpdateBucketInfo): Uint8Array {
    return EventUpdateBucketInfo.encode(message).finish();
  },
  toProtoMsg(message: EventUpdateBucketInfo): EventUpdateBucketInfoProtoMsg {
    return {
      typeUrl: "/greenfield.storage.EventUpdateBucketInfo",
      value: EventUpdateBucketInfo.encode(message).finish()
    };
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
  typeUrl: "/greenfield.storage.EventDiscontinueBucket",
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
  },
  fromAmino(object: EventDiscontinueBucketAmino): EventDiscontinueBucket {
    const message = createBaseEventDiscontinueBucket();
    if (object.bucket_id !== undefined && object.bucket_id !== null) {
      message.bucketId = object.bucket_id;
    }
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    if (object.delete_at !== undefined && object.delete_at !== null) {
      message.deleteAt = Long.fromString(object.delete_at);
    }
    return message;
  },
  toAmino(message: EventDiscontinueBucket): EventDiscontinueBucketAmino {
    const obj: any = {};
    obj.bucket_id = message.bucketId;
    obj.bucket_name = message.bucketName;
    obj.reason = message.reason;
    obj.delete_at = message.deleteAt ? message.deleteAt.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventDiscontinueBucketAminoMsg): EventDiscontinueBucket {
    return EventDiscontinueBucket.fromAmino(object.value);
  },
  fromProtoMsg(message: EventDiscontinueBucketProtoMsg): EventDiscontinueBucket {
    return EventDiscontinueBucket.decode(message.value);
  },
  toProto(message: EventDiscontinueBucket): Uint8Array {
    return EventDiscontinueBucket.encode(message).finish();
  },
  toProtoMsg(message: EventDiscontinueBucket): EventDiscontinueBucketProtoMsg {
    return {
      typeUrl: "/greenfield.storage.EventDiscontinueBucket",
      value: EventDiscontinueBucket.encode(message).finish()
    };
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
    localVirtualGroupId: 0
  };
}
export const EventCreateObject = {
  typeUrl: "/greenfield.storage.EventCreateObject",
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
      localVirtualGroupId: isSet(object.localVirtualGroupId) ? Number(object.localVirtualGroupId) : 0
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
      localVirtualGroupId: object?.local_virtual_group_id
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
    return obj;
  },
  fromAmino(object: EventCreateObjectAmino): EventCreateObject {
    const message = createBaseEventCreateObject();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    if (object.object_name !== undefined && object.object_name !== null) {
      message.objectName = object.object_name;
    }
    if (object.bucket_id !== undefined && object.bucket_id !== null) {
      message.bucketId = object.bucket_id;
    }
    if (object.object_id !== undefined && object.object_id !== null) {
      message.objectId = object.object_id;
    }
    if (object.primary_sp_id !== undefined && object.primary_sp_id !== null) {
      message.primarySpId = object.primary_sp_id;
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
    if (object.status !== undefined && object.status !== null) {
      message.status = objectStatusFromJSON(object.status);
    }
    if (object.redundancy_type !== undefined && object.redundancy_type !== null) {
      message.redundancyType = redundancyTypeFromJSON(object.redundancy_type);
    }
    if (object.source_type !== undefined && object.source_type !== null) {
      message.sourceType = sourceTypeFromJSON(object.source_type);
    }
    message.checksums = object.checksums?.map(e => bytesFromBase64(e)) || [];
    if (object.local_virtual_group_id !== undefined && object.local_virtual_group_id !== null) {
      message.localVirtualGroupId = object.local_virtual_group_id;
    }
    return message;
  },
  toAmino(message: EventCreateObject): EventCreateObjectAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.owner = message.owner;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    obj.bucket_id = message.bucketId;
    obj.object_id = message.objectId;
    obj.primary_sp_id = message.primarySpId;
    obj.payload_size = message.payloadSize ? message.payloadSize.toString() : undefined;
    obj.visibility = visibilityTypeToJSON(message.visibility);
    obj.content_type = message.contentType;
    obj.create_at = message.createAt ? message.createAt.toString() : undefined;
    obj.status = objectStatusToJSON(message.status);
    obj.redundancy_type = redundancyTypeToJSON(message.redundancyType);
    obj.source_type = sourceTypeToJSON(message.sourceType);
    if (message.checksums) {
      obj.checksums = message.checksums.map(e => base64FromBytes(e));
    } else {
      obj.checksums = [];
    }
    obj.local_virtual_group_id = message.localVirtualGroupId;
    return obj;
  },
  fromAminoMsg(object: EventCreateObjectAminoMsg): EventCreateObject {
    return EventCreateObject.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCreateObjectProtoMsg): EventCreateObject {
    return EventCreateObject.decode(message.value);
  },
  toProto(message: EventCreateObject): Uint8Array {
    return EventCreateObject.encode(message).finish();
  },
  toProtoMsg(message: EventCreateObject): EventCreateObjectProtoMsg {
    return {
      typeUrl: "/greenfield.storage.EventCreateObject",
      value: EventCreateObject.encode(message).finish()
    };
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
  typeUrl: "/greenfield.storage.EventCancelCreateObject",
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
  },
  fromAmino(object: EventCancelCreateObjectAmino): EventCancelCreateObject {
    const message = createBaseEventCancelCreateObject();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    if (object.object_name !== undefined && object.object_name !== null) {
      message.objectName = object.object_name;
    }
    if (object.primary_sp_id !== undefined && object.primary_sp_id !== null) {
      message.primarySpId = object.primary_sp_id;
    }
    if (object.object_id !== undefined && object.object_id !== null) {
      message.objectId = object.object_id;
    }
    return message;
  },
  toAmino(message: EventCancelCreateObject): EventCancelCreateObjectAmino {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    obj.primary_sp_id = message.primarySpId;
    obj.object_id = message.objectId;
    return obj;
  },
  fromAminoMsg(object: EventCancelCreateObjectAminoMsg): EventCancelCreateObject {
    return EventCancelCreateObject.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCancelCreateObjectProtoMsg): EventCancelCreateObject {
    return EventCancelCreateObject.decode(message.value);
  },
  toProto(message: EventCancelCreateObject): Uint8Array {
    return EventCancelCreateObject.encode(message).finish();
  },
  toProtoMsg(message: EventCancelCreateObject): EventCancelCreateObjectProtoMsg {
    return {
      typeUrl: "/greenfield.storage.EventCancelCreateObject",
      value: EventCancelCreateObject.encode(message).finish()
    };
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
    localVirtualGroupId: 0,
    checksums: []
  };
}
export const EventSealObject = {
  typeUrl: "/greenfield.storage.EventSealObject",
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
    for (const v of message.checksums) {
      writer.uint32(74).bytes(v!);
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
        case 9:
          message.checksums.push(reader.bytes());
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
      localVirtualGroupId: isSet(object.localVirtualGroupId) ? Number(object.localVirtualGroupId) : 0,
      checksums: Array.isArray(object?.checksums) ? object.checksums.map((e: any) => bytesFromBase64(e)) : []
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
    if (message.checksums) {
      obj.checksums = message.checksums.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.checksums = [];
    }
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
    message.checksums = object.checksums?.map(e => e) || [];
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
      localVirtualGroupId: object?.local_virtual_group_id,
      checksums: Array.isArray(object?.checksums) ? object.checksums.map((e: any) => e) : []
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
    if (message.checksums) {
      obj.checksums = message.checksums.map(e => e);
    } else {
      obj.checksums = [];
    }
    return obj;
  },
  fromAmino(object: EventSealObjectAmino): EventSealObject {
    const message = createBaseEventSealObject();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    if (object.object_name !== undefined && object.object_name !== null) {
      message.objectName = object.object_name;
    }
    if (object.object_id !== undefined && object.object_id !== null) {
      message.objectId = object.object_id;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = objectStatusFromJSON(object.status);
    }
    if (object.global_virtual_group_id !== undefined && object.global_virtual_group_id !== null) {
      message.globalVirtualGroupId = object.global_virtual_group_id;
    }
    if (object.local_virtual_group_id !== undefined && object.local_virtual_group_id !== null) {
      message.localVirtualGroupId = object.local_virtual_group_id;
    }
    message.checksums = object.checksums?.map(e => bytesFromBase64(e)) || [];
    return message;
  },
  toAmino(message: EventSealObject): EventSealObjectAmino {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    obj.object_id = message.objectId;
    obj.status = objectStatusToJSON(message.status);
    obj.global_virtual_group_id = message.globalVirtualGroupId;
    obj.local_virtual_group_id = message.localVirtualGroupId;
    if (message.checksums) {
      obj.checksums = message.checksums.map(e => base64FromBytes(e));
    } else {
      obj.checksums = [];
    }
    return obj;
  },
  fromAminoMsg(object: EventSealObjectAminoMsg): EventSealObject {
    return EventSealObject.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSealObjectProtoMsg): EventSealObject {
    return EventSealObject.decode(message.value);
  },
  toProto(message: EventSealObject): Uint8Array {
    return EventSealObject.encode(message).finish();
  },
  toProtoMsg(message: EventSealObject): EventSealObjectProtoMsg {
    return {
      typeUrl: "/greenfield.storage.EventSealObject",
      value: EventSealObject.encode(message).finish()
    };
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
  typeUrl: "/greenfield.storage.EventCopyObject",
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
  },
  fromAmino(object: EventCopyObjectAmino): EventCopyObject {
    const message = createBaseEventCopyObject();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.src_bucket_name !== undefined && object.src_bucket_name !== null) {
      message.srcBucketName = object.src_bucket_name;
    }
    if (object.src_object_name !== undefined && object.src_object_name !== null) {
      message.srcObjectName = object.src_object_name;
    }
    if (object.dst_bucket_name !== undefined && object.dst_bucket_name !== null) {
      message.dstBucketName = object.dst_bucket_name;
    }
    if (object.dst_object_name !== undefined && object.dst_object_name !== null) {
      message.dstObjectName = object.dst_object_name;
    }
    if (object.src_object_id !== undefined && object.src_object_id !== null) {
      message.srcObjectId = object.src_object_id;
    }
    if (object.dst_object_id !== undefined && object.dst_object_id !== null) {
      message.dstObjectId = object.dst_object_id;
    }
    if (object.local_virtual_group_id !== undefined && object.local_virtual_group_id !== null) {
      message.localVirtualGroupId = object.local_virtual_group_id;
    }
    return message;
  },
  toAmino(message: EventCopyObject): EventCopyObjectAmino {
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
  },
  fromAminoMsg(object: EventCopyObjectAminoMsg): EventCopyObject {
    return EventCopyObject.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCopyObjectProtoMsg): EventCopyObject {
    return EventCopyObject.decode(message.value);
  },
  toProto(message: EventCopyObject): Uint8Array {
    return EventCopyObject.encode(message).finish();
  },
  toProtoMsg(message: EventCopyObject): EventCopyObjectProtoMsg {
    return {
      typeUrl: "/greenfield.storage.EventCopyObject",
      value: EventCopyObject.encode(message).finish()
    };
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
  typeUrl: "/greenfield.storage.EventDeleteObject",
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
  },
  fromAmino(object: EventDeleteObjectAmino): EventDeleteObject {
    const message = createBaseEventDeleteObject();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    if (object.object_name !== undefined && object.object_name !== null) {
      message.objectName = object.object_name;
    }
    if (object.object_id !== undefined && object.object_id !== null) {
      message.objectId = object.object_id;
    }
    if (object.local_virtual_group_id !== undefined && object.local_virtual_group_id !== null) {
      message.localVirtualGroupId = object.local_virtual_group_id;
    }
    return message;
  },
  toAmino(message: EventDeleteObject): EventDeleteObjectAmino {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    obj.object_id = message.objectId;
    obj.local_virtual_group_id = message.localVirtualGroupId;
    return obj;
  },
  fromAminoMsg(object: EventDeleteObjectAminoMsg): EventDeleteObject {
    return EventDeleteObject.fromAmino(object.value);
  },
  fromProtoMsg(message: EventDeleteObjectProtoMsg): EventDeleteObject {
    return EventDeleteObject.decode(message.value);
  },
  toProto(message: EventDeleteObject): Uint8Array {
    return EventDeleteObject.encode(message).finish();
  },
  toProtoMsg(message: EventDeleteObject): EventDeleteObjectProtoMsg {
    return {
      typeUrl: "/greenfield.storage.EventDeleteObject",
      value: EventDeleteObject.encode(message).finish()
    };
  }
};
function createBaseEventRejectSealObject(): EventRejectSealObject {
  return {
    operator: "",
    bucketName: "",
    objectName: "",
    objectId: "",
    forUpdate: false
  };
}
export const EventRejectSealObject = {
  typeUrl: "/greenfield.storage.EventRejectSealObject",
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
    if (message.forUpdate === true) {
      writer.uint32(40).bool(message.forUpdate);
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
        case 5:
          message.forUpdate = reader.bool();
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
      objectId: isSet(object.objectId) ? String(object.objectId) : "",
      forUpdate: isSet(object.forUpdate) ? Boolean(object.forUpdate) : false
    };
  },
  toJSON(message: EventRejectSealObject): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.objectName !== undefined && (obj.objectName = message.objectName);
    message.objectId !== undefined && (obj.objectId = message.objectId);
    message.forUpdate !== undefined && (obj.forUpdate = message.forUpdate);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventRejectSealObject>, I>>(object: I): EventRejectSealObject {
    const message = createBaseEventRejectSealObject();
    message.operator = object.operator ?? "";
    message.bucketName = object.bucketName ?? "";
    message.objectName = object.objectName ?? "";
    message.objectId = object.objectId ?? "";
    message.forUpdate = object.forUpdate ?? false;
    return message;
  },
  fromSDK(object: EventRejectSealObjectSDKType): EventRejectSealObject {
    return {
      operator: object?.operator,
      bucketName: object?.bucket_name,
      objectName: object?.object_name,
      objectId: object?.object_id,
      forUpdate: object?.for_update
    };
  },
  toSDK(message: EventRejectSealObject): EventRejectSealObjectSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    obj.object_id = message.objectId;
    obj.for_update = message.forUpdate;
    return obj;
  },
  fromAmino(object: EventRejectSealObjectAmino): EventRejectSealObject {
    const message = createBaseEventRejectSealObject();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    if (object.object_name !== undefined && object.object_name !== null) {
      message.objectName = object.object_name;
    }
    if (object.object_id !== undefined && object.object_id !== null) {
      message.objectId = object.object_id;
    }
    if (object.for_update !== undefined && object.for_update !== null) {
      message.forUpdate = object.for_update;
    }
    return message;
  },
  toAmino(message: EventRejectSealObject): EventRejectSealObjectAmino {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    obj.object_id = message.objectId;
    obj.for_update = message.forUpdate;
    return obj;
  },
  fromAminoMsg(object: EventRejectSealObjectAminoMsg): EventRejectSealObject {
    return EventRejectSealObject.fromAmino(object.value);
  },
  fromProtoMsg(message: EventRejectSealObjectProtoMsg): EventRejectSealObject {
    return EventRejectSealObject.decode(message.value);
  },
  toProto(message: EventRejectSealObject): Uint8Array {
    return EventRejectSealObject.encode(message).finish();
  },
  toProtoMsg(message: EventRejectSealObject): EventRejectSealObjectProtoMsg {
    return {
      typeUrl: "/greenfield.storage.EventRejectSealObject",
      value: EventRejectSealObject.encode(message).finish()
    };
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
  typeUrl: "/greenfield.storage.EventDiscontinueObject",
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
  },
  fromAmino(object: EventDiscontinueObjectAmino): EventDiscontinueObject {
    const message = createBaseEventDiscontinueObject();
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    if (object.object_id !== undefined && object.object_id !== null) {
      message.objectId = object.object_id;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    if (object.delete_at !== undefined && object.delete_at !== null) {
      message.deleteAt = Long.fromString(object.delete_at);
    }
    return message;
  },
  toAmino(message: EventDiscontinueObject): EventDiscontinueObjectAmino {
    const obj: any = {};
    obj.bucket_name = message.bucketName;
    obj.object_id = message.objectId;
    obj.reason = message.reason;
    obj.delete_at = message.deleteAt ? message.deleteAt.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventDiscontinueObjectAminoMsg): EventDiscontinueObject {
    return EventDiscontinueObject.fromAmino(object.value);
  },
  fromProtoMsg(message: EventDiscontinueObjectProtoMsg): EventDiscontinueObject {
    return EventDiscontinueObject.decode(message.value);
  },
  toProto(message: EventDiscontinueObject): Uint8Array {
    return EventDiscontinueObject.encode(message).finish();
  },
  toProtoMsg(message: EventDiscontinueObject): EventDiscontinueObjectProtoMsg {
    return {
      typeUrl: "/greenfield.storage.EventDiscontinueObject",
      value: EventDiscontinueObject.encode(message).finish()
    };
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
  typeUrl: "/greenfield.storage.EventUpdateObjectInfo",
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
  },
  fromAmino(object: EventUpdateObjectInfoAmino): EventUpdateObjectInfo {
    const message = createBaseEventUpdateObjectInfo();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    if (object.object_name !== undefined && object.object_name !== null) {
      message.objectName = object.object_name;
    }
    if (object.object_id !== undefined && object.object_id !== null) {
      message.objectId = object.object_id;
    }
    if (object.visibility !== undefined && object.visibility !== null) {
      message.visibility = visibilityTypeFromJSON(object.visibility);
    }
    return message;
  },
  toAmino(message: EventUpdateObjectInfo): EventUpdateObjectInfoAmino {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    obj.object_id = message.objectId;
    obj.visibility = visibilityTypeToJSON(message.visibility);
    return obj;
  },
  fromAminoMsg(object: EventUpdateObjectInfoAminoMsg): EventUpdateObjectInfo {
    return EventUpdateObjectInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: EventUpdateObjectInfoProtoMsg): EventUpdateObjectInfo {
    return EventUpdateObjectInfo.decode(message.value);
  },
  toProto(message: EventUpdateObjectInfo): Uint8Array {
    return EventUpdateObjectInfo.encode(message).finish();
  },
  toProtoMsg(message: EventUpdateObjectInfo): EventUpdateObjectInfoProtoMsg {
    return {
      typeUrl: "/greenfield.storage.EventUpdateObjectInfo",
      value: EventUpdateObjectInfo.encode(message).finish()
    };
  }
};
function createBaseEventCreateGroup(): EventCreateGroup {
  return {
    owner: "",
    groupName: "",
    groupId: "",
    sourceType: 0,
    extra: ""
  };
}
export const EventCreateGroup = {
  typeUrl: "/greenfield.storage.EventCreateGroup",
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
      extra: isSet(object.extra) ? String(object.extra) : ""
    };
  },
  toJSON(message: EventCreateGroup): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.groupName !== undefined && (obj.groupName = message.groupName);
    message.groupId !== undefined && (obj.groupId = message.groupId);
    message.sourceType !== undefined && (obj.sourceType = sourceTypeToJSON(message.sourceType));
    message.extra !== undefined && (obj.extra = message.extra);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventCreateGroup>, I>>(object: I): EventCreateGroup {
    const message = createBaseEventCreateGroup();
    message.owner = object.owner ?? "";
    message.groupName = object.groupName ?? "";
    message.groupId = object.groupId ?? "";
    message.sourceType = object.sourceType ?? 0;
    message.extra = object.extra ?? "";
    return message;
  },
  fromSDK(object: EventCreateGroupSDKType): EventCreateGroup {
    return {
      owner: object?.owner,
      groupName: object?.group_name,
      groupId: object?.group_id,
      sourceType: isSet(object.source_type) ? sourceTypeFromJSON(object.source_type) : -1,
      extra: object?.extra
    };
  },
  toSDK(message: EventCreateGroup): EventCreateGroupSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.group_name = message.groupName;
    obj.group_id = message.groupId;
    message.sourceType !== undefined && (obj.source_type = sourceTypeToJSON(message.sourceType));
    obj.extra = message.extra;
    return obj;
  },
  fromAmino(object: EventCreateGroupAmino): EventCreateGroup {
    const message = createBaseEventCreateGroup();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.group_name !== undefined && object.group_name !== null) {
      message.groupName = object.group_name;
    }
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = object.group_id;
    }
    if (object.source_type !== undefined && object.source_type !== null) {
      message.sourceType = sourceTypeFromJSON(object.source_type);
    }
    if (object.extra !== undefined && object.extra !== null) {
      message.extra = object.extra;
    }
    return message;
  },
  toAmino(message: EventCreateGroup): EventCreateGroupAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.group_name = message.groupName;
    obj.group_id = message.groupId;
    obj.source_type = sourceTypeToJSON(message.sourceType);
    obj.extra = message.extra;
    return obj;
  },
  fromAminoMsg(object: EventCreateGroupAminoMsg): EventCreateGroup {
    return EventCreateGroup.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCreateGroupProtoMsg): EventCreateGroup {
    return EventCreateGroup.decode(message.value);
  },
  toProto(message: EventCreateGroup): Uint8Array {
    return EventCreateGroup.encode(message).finish();
  },
  toProtoMsg(message: EventCreateGroup): EventCreateGroupProtoMsg {
    return {
      typeUrl: "/greenfield.storage.EventCreateGroup",
      value: EventCreateGroup.encode(message).finish()
    };
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
  typeUrl: "/greenfield.storage.EventDeleteGroup",
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
  },
  fromAmino(object: EventDeleteGroupAmino): EventDeleteGroup {
    const message = createBaseEventDeleteGroup();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.group_name !== undefined && object.group_name !== null) {
      message.groupName = object.group_name;
    }
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = object.group_id;
    }
    return message;
  },
  toAmino(message: EventDeleteGroup): EventDeleteGroupAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.group_name = message.groupName;
    obj.group_id = message.groupId;
    return obj;
  },
  fromAminoMsg(object: EventDeleteGroupAminoMsg): EventDeleteGroup {
    return EventDeleteGroup.fromAmino(object.value);
  },
  fromProtoMsg(message: EventDeleteGroupProtoMsg): EventDeleteGroup {
    return EventDeleteGroup.decode(message.value);
  },
  toProto(message: EventDeleteGroup): Uint8Array {
    return EventDeleteGroup.encode(message).finish();
  },
  toProtoMsg(message: EventDeleteGroup): EventDeleteGroupProtoMsg {
    return {
      typeUrl: "/greenfield.storage.EventDeleteGroup",
      value: EventDeleteGroup.encode(message).finish()
    };
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
  typeUrl: "/greenfield.storage.EventLeaveGroup",
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
  },
  fromAmino(object: EventLeaveGroupAmino): EventLeaveGroup {
    const message = createBaseEventLeaveGroup();
    if (object.member_address !== undefined && object.member_address !== null) {
      message.memberAddress = object.member_address;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.group_name !== undefined && object.group_name !== null) {
      message.groupName = object.group_name;
    }
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = object.group_id;
    }
    return message;
  },
  toAmino(message: EventLeaveGroup): EventLeaveGroupAmino {
    const obj: any = {};
    obj.member_address = message.memberAddress;
    obj.owner = message.owner;
    obj.group_name = message.groupName;
    obj.group_id = message.groupId;
    return obj;
  },
  fromAminoMsg(object: EventLeaveGroupAminoMsg): EventLeaveGroup {
    return EventLeaveGroup.fromAmino(object.value);
  },
  fromProtoMsg(message: EventLeaveGroupProtoMsg): EventLeaveGroup {
    return EventLeaveGroup.decode(message.value);
  },
  toProto(message: EventLeaveGroup): Uint8Array {
    return EventLeaveGroup.encode(message).finish();
  },
  toProtoMsg(message: EventLeaveGroup): EventLeaveGroupProtoMsg {
    return {
      typeUrl: "/greenfield.storage.EventLeaveGroup",
      value: EventLeaveGroup.encode(message).finish()
    };
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
  typeUrl: "/greenfield.storage.EventUpdateGroupMember",
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
  },
  fromAmino(object: EventUpdateGroupMemberAmino): EventUpdateGroupMember {
    const message = createBaseEventUpdateGroupMember();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.group_name !== undefined && object.group_name !== null) {
      message.groupName = object.group_name;
    }
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = object.group_id;
    }
    message.membersToAdd = object.members_to_add?.map(e => EventGroupMemberDetail.fromAmino(e)) || [];
    message.membersToDelete = object.members_to_delete?.map(e => e) || [];
    return message;
  },
  toAmino(message: EventUpdateGroupMember): EventUpdateGroupMemberAmino {
    const obj: any = {};
    obj.operator = message.operator;
    obj.owner = message.owner;
    obj.group_name = message.groupName;
    obj.group_id = message.groupId;
    if (message.membersToAdd) {
      obj.members_to_add = message.membersToAdd.map(e => e ? EventGroupMemberDetail.toAmino(e) : undefined);
    } else {
      obj.members_to_add = [];
    }
    if (message.membersToDelete) {
      obj.members_to_delete = message.membersToDelete.map(e => e);
    } else {
      obj.members_to_delete = [];
    }
    return obj;
  },
  fromAminoMsg(object: EventUpdateGroupMemberAminoMsg): EventUpdateGroupMember {
    return EventUpdateGroupMember.fromAmino(object.value);
  },
  fromProtoMsg(message: EventUpdateGroupMemberProtoMsg): EventUpdateGroupMember {
    return EventUpdateGroupMember.decode(message.value);
  },
  toProto(message: EventUpdateGroupMember): Uint8Array {
    return EventUpdateGroupMember.encode(message).finish();
  },
  toProtoMsg(message: EventUpdateGroupMember): EventUpdateGroupMemberProtoMsg {
    return {
      typeUrl: "/greenfield.storage.EventUpdateGroupMember",
      value: EventUpdateGroupMember.encode(message).finish()
    };
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
  typeUrl: "/greenfield.storage.EventRenewGroupMember",
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
  },
  fromAmino(object: EventRenewGroupMemberAmino): EventRenewGroupMember {
    const message = createBaseEventRenewGroupMember();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.group_name !== undefined && object.group_name !== null) {
      message.groupName = object.group_name;
    }
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = object.group_id;
    }
    if (object.source_type !== undefined && object.source_type !== null) {
      message.sourceType = sourceTypeFromJSON(object.source_type);
    }
    message.members = object.members?.map(e => EventGroupMemberDetail.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: EventRenewGroupMember): EventRenewGroupMemberAmino {
    const obj: any = {};
    obj.operator = message.operator;
    obj.owner = message.owner;
    obj.group_name = message.groupName;
    obj.group_id = message.groupId;
    obj.source_type = sourceTypeToJSON(message.sourceType);
    if (message.members) {
      obj.members = message.members.map(e => e ? EventGroupMemberDetail.toAmino(e) : undefined);
    } else {
      obj.members = [];
    }
    return obj;
  },
  fromAminoMsg(object: EventRenewGroupMemberAminoMsg): EventRenewGroupMember {
    return EventRenewGroupMember.fromAmino(object.value);
  },
  fromProtoMsg(message: EventRenewGroupMemberProtoMsg): EventRenewGroupMember {
    return EventRenewGroupMember.decode(message.value);
  },
  toProto(message: EventRenewGroupMember): Uint8Array {
    return EventRenewGroupMember.encode(message).finish();
  },
  toProtoMsg(message: EventRenewGroupMember): EventRenewGroupMemberProtoMsg {
    return {
      typeUrl: "/greenfield.storage.EventRenewGroupMember",
      value: EventRenewGroupMember.encode(message).finish()
    };
  }
};
function createBaseEventGroupMemberDetail(): EventGroupMemberDetail {
  return {
    member: "",
    expirationTime: undefined
  };
}
export const EventGroupMemberDetail = {
  typeUrl: "/greenfield.storage.EventGroupMemberDetail",
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
  },
  fromAmino(object: EventGroupMemberDetailAmino): EventGroupMemberDetail {
    const message = createBaseEventGroupMemberDetail();
    if (object.member !== undefined && object.member !== null) {
      message.member = object.member;
    }
    if (object.expiration_time !== undefined && object.expiration_time !== null) {
      message.expirationTime = Timestamp.fromAmino(object.expiration_time);
    }
    return message;
  },
  toAmino(message: EventGroupMemberDetail): EventGroupMemberDetailAmino {
    const obj: any = {};
    obj.member = message.member;
    obj.expiration_time = message.expirationTime ? Timestamp.toAmino(message.expirationTime) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventGroupMemberDetailAminoMsg): EventGroupMemberDetail {
    return EventGroupMemberDetail.fromAmino(object.value);
  },
  fromProtoMsg(message: EventGroupMemberDetailProtoMsg): EventGroupMemberDetail {
    return EventGroupMemberDetail.decode(message.value);
  },
  toProto(message: EventGroupMemberDetail): Uint8Array {
    return EventGroupMemberDetail.encode(message).finish();
  },
  toProtoMsg(message: EventGroupMemberDetail): EventGroupMemberDetailProtoMsg {
    return {
      typeUrl: "/greenfield.storage.EventGroupMemberDetail",
      value: EventGroupMemberDetail.encode(message).finish()
    };
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
  typeUrl: "/greenfield.storage.EventUpdateGroupExtra",
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
  },
  fromAmino(object: EventUpdateGroupExtraAmino): EventUpdateGroupExtra {
    const message = createBaseEventUpdateGroupExtra();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.group_name !== undefined && object.group_name !== null) {
      message.groupName = object.group_name;
    }
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = object.group_id;
    }
    if (object.extra !== undefined && object.extra !== null) {
      message.extra = object.extra;
    }
    return message;
  },
  toAmino(message: EventUpdateGroupExtra): EventUpdateGroupExtraAmino {
    const obj: any = {};
    obj.operator = message.operator;
    obj.owner = message.owner;
    obj.group_name = message.groupName;
    obj.group_id = message.groupId;
    obj.extra = message.extra;
    return obj;
  },
  fromAminoMsg(object: EventUpdateGroupExtraAminoMsg): EventUpdateGroupExtra {
    return EventUpdateGroupExtra.fromAmino(object.value);
  },
  fromProtoMsg(message: EventUpdateGroupExtraProtoMsg): EventUpdateGroupExtra {
    return EventUpdateGroupExtra.decode(message.value);
  },
  toProto(message: EventUpdateGroupExtra): Uint8Array {
    return EventUpdateGroupExtra.encode(message).finish();
  },
  toProtoMsg(message: EventUpdateGroupExtra): EventUpdateGroupExtraProtoMsg {
    return {
      typeUrl: "/greenfield.storage.EventUpdateGroupExtra",
      value: EventUpdateGroupExtra.encode(message).finish()
    };
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
  typeUrl: "/greenfield.storage.EventMirrorBucket",
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
  },
  fromAmino(object: EventMirrorBucketAmino): EventMirrorBucket {
    const message = createBaseEventMirrorBucket();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    if (object.bucket_id !== undefined && object.bucket_id !== null) {
      message.bucketId = object.bucket_id;
    }
    if (object.dest_chain_id !== undefined && object.dest_chain_id !== null) {
      message.destChainId = object.dest_chain_id;
    }
    return message;
  },
  toAmino(message: EventMirrorBucket): EventMirrorBucketAmino {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.bucket_id = message.bucketId;
    obj.dest_chain_id = message.destChainId;
    return obj;
  },
  fromAminoMsg(object: EventMirrorBucketAminoMsg): EventMirrorBucket {
    return EventMirrorBucket.fromAmino(object.value);
  },
  fromProtoMsg(message: EventMirrorBucketProtoMsg): EventMirrorBucket {
    return EventMirrorBucket.decode(message.value);
  },
  toProto(message: EventMirrorBucket): Uint8Array {
    return EventMirrorBucket.encode(message).finish();
  },
  toProtoMsg(message: EventMirrorBucket): EventMirrorBucketProtoMsg {
    return {
      typeUrl: "/greenfield.storage.EventMirrorBucket",
      value: EventMirrorBucket.encode(message).finish()
    };
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
  typeUrl: "/greenfield.storage.EventMirrorBucketResult",
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
  },
  fromAmino(object: EventMirrorBucketResultAmino): EventMirrorBucketResult {
    const message = createBaseEventMirrorBucketResult();
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    if (object.bucket_id !== undefined && object.bucket_id !== null) {
      message.bucketId = object.bucket_id;
    }
    if (object.dest_chain_id !== undefined && object.dest_chain_id !== null) {
      message.destChainId = object.dest_chain_id;
    }
    return message;
  },
  toAmino(message: EventMirrorBucketResult): EventMirrorBucketResultAmino {
    const obj: any = {};
    obj.status = message.status;
    obj.bucket_name = message.bucketName;
    obj.bucket_id = message.bucketId;
    obj.dest_chain_id = message.destChainId;
    return obj;
  },
  fromAminoMsg(object: EventMirrorBucketResultAminoMsg): EventMirrorBucketResult {
    return EventMirrorBucketResult.fromAmino(object.value);
  },
  fromProtoMsg(message: EventMirrorBucketResultProtoMsg): EventMirrorBucketResult {
    return EventMirrorBucketResult.decode(message.value);
  },
  toProto(message: EventMirrorBucketResult): Uint8Array {
    return EventMirrorBucketResult.encode(message).finish();
  },
  toProtoMsg(message: EventMirrorBucketResult): EventMirrorBucketResultProtoMsg {
    return {
      typeUrl: "/greenfield.storage.EventMirrorBucketResult",
      value: EventMirrorBucketResult.encode(message).finish()
    };
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
  typeUrl: "/greenfield.storage.EventMirrorObject",
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
  },
  fromAmino(object: EventMirrorObjectAmino): EventMirrorObject {
    const message = createBaseEventMirrorObject();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    if (object.object_name !== undefined && object.object_name !== null) {
      message.objectName = object.object_name;
    }
    if (object.object_id !== undefined && object.object_id !== null) {
      message.objectId = object.object_id;
    }
    if (object.dest_chain_id !== undefined && object.dest_chain_id !== null) {
      message.destChainId = object.dest_chain_id;
    }
    return message;
  },
  toAmino(message: EventMirrorObject): EventMirrorObjectAmino {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    obj.object_id = message.objectId;
    obj.dest_chain_id = message.destChainId;
    return obj;
  },
  fromAminoMsg(object: EventMirrorObjectAminoMsg): EventMirrorObject {
    return EventMirrorObject.fromAmino(object.value);
  },
  fromProtoMsg(message: EventMirrorObjectProtoMsg): EventMirrorObject {
    return EventMirrorObject.decode(message.value);
  },
  toProto(message: EventMirrorObject): Uint8Array {
    return EventMirrorObject.encode(message).finish();
  },
  toProtoMsg(message: EventMirrorObject): EventMirrorObjectProtoMsg {
    return {
      typeUrl: "/greenfield.storage.EventMirrorObject",
      value: EventMirrorObject.encode(message).finish()
    };
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
  typeUrl: "/greenfield.storage.EventMirrorObjectResult",
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
  },
  fromAmino(object: EventMirrorObjectResultAmino): EventMirrorObjectResult {
    const message = createBaseEventMirrorObjectResult();
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    if (object.object_name !== undefined && object.object_name !== null) {
      message.objectName = object.object_name;
    }
    if (object.object_id !== undefined && object.object_id !== null) {
      message.objectId = object.object_id;
    }
    if (object.dest_chain_id !== undefined && object.dest_chain_id !== null) {
      message.destChainId = object.dest_chain_id;
    }
    return message;
  },
  toAmino(message: EventMirrorObjectResult): EventMirrorObjectResultAmino {
    const obj: any = {};
    obj.status = message.status;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    obj.object_id = message.objectId;
    obj.dest_chain_id = message.destChainId;
    return obj;
  },
  fromAminoMsg(object: EventMirrorObjectResultAminoMsg): EventMirrorObjectResult {
    return EventMirrorObjectResult.fromAmino(object.value);
  },
  fromProtoMsg(message: EventMirrorObjectResultProtoMsg): EventMirrorObjectResult {
    return EventMirrorObjectResult.decode(message.value);
  },
  toProto(message: EventMirrorObjectResult): Uint8Array {
    return EventMirrorObjectResult.encode(message).finish();
  },
  toProtoMsg(message: EventMirrorObjectResult): EventMirrorObjectResultProtoMsg {
    return {
      typeUrl: "/greenfield.storage.EventMirrorObjectResult",
      value: EventMirrorObjectResult.encode(message).finish()
    };
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
  typeUrl: "/greenfield.storage.EventMirrorGroup",
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
  },
  fromAmino(object: EventMirrorGroupAmino): EventMirrorGroup {
    const message = createBaseEventMirrorGroup();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.group_name !== undefined && object.group_name !== null) {
      message.groupName = object.group_name;
    }
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = object.group_id;
    }
    if (object.dest_chain_id !== undefined && object.dest_chain_id !== null) {
      message.destChainId = object.dest_chain_id;
    }
    return message;
  },
  toAmino(message: EventMirrorGroup): EventMirrorGroupAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.group_name = message.groupName;
    obj.group_id = message.groupId;
    obj.dest_chain_id = message.destChainId;
    return obj;
  },
  fromAminoMsg(object: EventMirrorGroupAminoMsg): EventMirrorGroup {
    return EventMirrorGroup.fromAmino(object.value);
  },
  fromProtoMsg(message: EventMirrorGroupProtoMsg): EventMirrorGroup {
    return EventMirrorGroup.decode(message.value);
  },
  toProto(message: EventMirrorGroup): Uint8Array {
    return EventMirrorGroup.encode(message).finish();
  },
  toProtoMsg(message: EventMirrorGroup): EventMirrorGroupProtoMsg {
    return {
      typeUrl: "/greenfield.storage.EventMirrorGroup",
      value: EventMirrorGroup.encode(message).finish()
    };
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
  typeUrl: "/greenfield.storage.EventMirrorGroupResult",
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
  },
  fromAmino(object: EventMirrorGroupResultAmino): EventMirrorGroupResult {
    const message = createBaseEventMirrorGroupResult();
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.group_name !== undefined && object.group_name !== null) {
      message.groupName = object.group_name;
    }
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = object.group_id;
    }
    if (object.dest_chain_id !== undefined && object.dest_chain_id !== null) {
      message.destChainId = object.dest_chain_id;
    }
    return message;
  },
  toAmino(message: EventMirrorGroupResult): EventMirrorGroupResultAmino {
    const obj: any = {};
    obj.status = message.status;
    obj.group_name = message.groupName;
    obj.group_id = message.groupId;
    obj.dest_chain_id = message.destChainId;
    return obj;
  },
  fromAminoMsg(object: EventMirrorGroupResultAminoMsg): EventMirrorGroupResult {
    return EventMirrorGroupResult.fromAmino(object.value);
  },
  fromProtoMsg(message: EventMirrorGroupResultProtoMsg): EventMirrorGroupResult {
    return EventMirrorGroupResult.decode(message.value);
  },
  toProto(message: EventMirrorGroupResult): Uint8Array {
    return EventMirrorGroupResult.encode(message).finish();
  },
  toProtoMsg(message: EventMirrorGroupResult): EventMirrorGroupResultProtoMsg {
    return {
      typeUrl: "/greenfield.storage.EventMirrorGroupResult",
      value: EventMirrorGroupResult.encode(message).finish()
    };
  }
};
function createBaseEventStalePolicyCleanup(): EventStalePolicyCleanup {
  return {
    blockNum: Long.ZERO,
    deleteInfo: undefined
  };
}
export const EventStalePolicyCleanup = {
  typeUrl: "/greenfield.storage.EventStalePolicyCleanup",
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
  },
  fromAmino(object: EventStalePolicyCleanupAmino): EventStalePolicyCleanup {
    const message = createBaseEventStalePolicyCleanup();
    if (object.blockNum !== undefined && object.blockNum !== null) {
      message.blockNum = Long.fromString(object.blockNum);
    }
    if (object.delete_info !== undefined && object.delete_info !== null) {
      message.deleteInfo = DeleteInfo.fromAmino(object.delete_info);
    }
    return message;
  },
  toAmino(message: EventStalePolicyCleanup): EventStalePolicyCleanupAmino {
    const obj: any = {};
    obj.blockNum = message.blockNum ? message.blockNum.toString() : undefined;
    obj.delete_info = message.deleteInfo ? DeleteInfo.toAmino(message.deleteInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventStalePolicyCleanupAminoMsg): EventStalePolicyCleanup {
    return EventStalePolicyCleanup.fromAmino(object.value);
  },
  fromProtoMsg(message: EventStalePolicyCleanupProtoMsg): EventStalePolicyCleanup {
    return EventStalePolicyCleanup.decode(message.value);
  },
  toProto(message: EventStalePolicyCleanup): Uint8Array {
    return EventStalePolicyCleanup.encode(message).finish();
  },
  toProtoMsg(message: EventStalePolicyCleanup): EventStalePolicyCleanupProtoMsg {
    return {
      typeUrl: "/greenfield.storage.EventStalePolicyCleanup",
      value: EventStalePolicyCleanup.encode(message).finish()
    };
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
  typeUrl: "/greenfield.storage.EventMigrationBucket",
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
  },
  fromAmino(object: EventMigrationBucketAmino): EventMigrationBucket {
    const message = createBaseEventMigrationBucket();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    if (object.bucket_id !== undefined && object.bucket_id !== null) {
      message.bucketId = object.bucket_id;
    }
    if (object.dst_primary_sp_id !== undefined && object.dst_primary_sp_id !== null) {
      message.dstPrimarySpId = object.dst_primary_sp_id;
    }
    return message;
  },
  toAmino(message: EventMigrationBucket): EventMigrationBucketAmino {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.bucket_id = message.bucketId;
    obj.dst_primary_sp_id = message.dstPrimarySpId;
    return obj;
  },
  fromAminoMsg(object: EventMigrationBucketAminoMsg): EventMigrationBucket {
    return EventMigrationBucket.fromAmino(object.value);
  },
  fromProtoMsg(message: EventMigrationBucketProtoMsg): EventMigrationBucket {
    return EventMigrationBucket.decode(message.value);
  },
  toProto(message: EventMigrationBucket): Uint8Array {
    return EventMigrationBucket.encode(message).finish();
  },
  toProtoMsg(message: EventMigrationBucket): EventMigrationBucketProtoMsg {
    return {
      typeUrl: "/greenfield.storage.EventMigrationBucket",
      value: EventMigrationBucket.encode(message).finish()
    };
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
  typeUrl: "/greenfield.storage.EventCancelMigrationBucket",
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
  },
  fromAmino(object: EventCancelMigrationBucketAmino): EventCancelMigrationBucket {
    const message = createBaseEventCancelMigrationBucket();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    if (object.bucket_id !== undefined && object.bucket_id !== null) {
      message.bucketId = object.bucket_id;
    }
    return message;
  },
  toAmino(message: EventCancelMigrationBucket): EventCancelMigrationBucketAmino {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.bucket_id = message.bucketId;
    return obj;
  },
  fromAminoMsg(object: EventCancelMigrationBucketAminoMsg): EventCancelMigrationBucket {
    return EventCancelMigrationBucket.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCancelMigrationBucketProtoMsg): EventCancelMigrationBucket {
    return EventCancelMigrationBucket.decode(message.value);
  },
  toProto(message: EventCancelMigrationBucket): Uint8Array {
    return EventCancelMigrationBucket.encode(message).finish();
  },
  toProtoMsg(message: EventCancelMigrationBucket): EventCancelMigrationBucketProtoMsg {
    return {
      typeUrl: "/greenfield.storage.EventCancelMigrationBucket",
      value: EventCancelMigrationBucket.encode(message).finish()
    };
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
  typeUrl: "/greenfield.storage.EventRejectMigrateBucket",
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
  },
  fromAmino(object: EventRejectMigrateBucketAmino): EventRejectMigrateBucket {
    const message = createBaseEventRejectMigrateBucket();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    if (object.bucket_id !== undefined && object.bucket_id !== null) {
      message.bucketId = object.bucket_id;
    }
    return message;
  },
  toAmino(message: EventRejectMigrateBucket): EventRejectMigrateBucketAmino {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.bucket_id = message.bucketId;
    return obj;
  },
  fromAminoMsg(object: EventRejectMigrateBucketAminoMsg): EventRejectMigrateBucket {
    return EventRejectMigrateBucket.fromAmino(object.value);
  },
  fromProtoMsg(message: EventRejectMigrateBucketProtoMsg): EventRejectMigrateBucket {
    return EventRejectMigrateBucket.decode(message.value);
  },
  toProto(message: EventRejectMigrateBucket): Uint8Array {
    return EventRejectMigrateBucket.encode(message).finish();
  },
  toProtoMsg(message: EventRejectMigrateBucket): EventRejectMigrateBucketProtoMsg {
    return {
      typeUrl: "/greenfield.storage.EventRejectMigrateBucket",
      value: EventRejectMigrateBucket.encode(message).finish()
    };
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
  typeUrl: "/greenfield.storage.EventCompleteMigrationBucket",
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
  },
  fromAmino(object: EventCompleteMigrationBucketAmino): EventCompleteMigrationBucket {
    const message = createBaseEventCompleteMigrationBucket();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    if (object.bucket_id !== undefined && object.bucket_id !== null) {
      message.bucketId = object.bucket_id;
    }
    if (object.global_virtual_group_family_id !== undefined && object.global_virtual_group_family_id !== null) {
      message.globalVirtualGroupFamilyId = object.global_virtual_group_family_id;
    }
    if (object.src_primary_sp_id !== undefined && object.src_primary_sp_id !== null) {
      message.srcPrimarySpId = object.src_primary_sp_id;
    }
    return message;
  },
  toAmino(message: EventCompleteMigrationBucket): EventCompleteMigrationBucketAmino {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.bucket_id = message.bucketId;
    obj.global_virtual_group_family_id = message.globalVirtualGroupFamilyId;
    obj.src_primary_sp_id = message.srcPrimarySpId;
    return obj;
  },
  fromAminoMsg(object: EventCompleteMigrationBucketAminoMsg): EventCompleteMigrationBucket {
    return EventCompleteMigrationBucket.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCompleteMigrationBucketProtoMsg): EventCompleteMigrationBucket {
    return EventCompleteMigrationBucket.decode(message.value);
  },
  toProto(message: EventCompleteMigrationBucket): Uint8Array {
    return EventCompleteMigrationBucket.encode(message).finish();
  },
  toProtoMsg(message: EventCompleteMigrationBucket): EventCompleteMigrationBucketProtoMsg {
    return {
      typeUrl: "/greenfield.storage.EventCompleteMigrationBucket",
      value: EventCompleteMigrationBucket.encode(message).finish()
    };
  }
};
function createBaseEventSetTag(): EventSetTag {
  return {
    resource: "",
    tags: undefined
  };
}
export const EventSetTag = {
  typeUrl: "/greenfield.storage.EventSetTag",
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
  },
  fromAmino(object: EventSetTagAmino): EventSetTag {
    const message = createBaseEventSetTag();
    if (object.resource !== undefined && object.resource !== null) {
      message.resource = object.resource;
    }
    if (object.tags !== undefined && object.tags !== null) {
      message.tags = ResourceTags.fromAmino(object.tags);
    }
    return message;
  },
  toAmino(message: EventSetTag): EventSetTagAmino {
    const obj: any = {};
    obj.resource = message.resource;
    obj.tags = message.tags ? ResourceTags.toAmino(message.tags) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSetTagAminoMsg): EventSetTag {
    return EventSetTag.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetTagProtoMsg): EventSetTag {
    return EventSetTag.decode(message.value);
  },
  toProto(message: EventSetTag): Uint8Array {
    return EventSetTag.encode(message).finish();
  },
  toProtoMsg(message: EventSetTag): EventSetTagProtoMsg {
    return {
      typeUrl: "/greenfield.storage.EventSetTag",
      value: EventSetTag.encode(message).finish()
    };
  }
};
function createBaseEventUpdateObjectContent(): EventUpdateObjectContent {
  return {
    operator: "",
    objectId: "",
    bucketName: "",
    objectName: "",
    payloadSize: Long.UZERO,
    checksums: [],
    version: Long.ZERO
  };
}
export const EventUpdateObjectContent = {
  typeUrl: "/greenfield.storage.EventUpdateObjectContent",
  encode(message: EventUpdateObjectContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.objectId !== "") {
      writer.uint32(18).string(message.objectId);
    }
    if (message.bucketName !== "") {
      writer.uint32(26).string(message.bucketName);
    }
    if (message.objectName !== "") {
      writer.uint32(34).string(message.objectName);
    }
    if (!message.payloadSize.isZero()) {
      writer.uint32(40).uint64(message.payloadSize);
    }
    for (const v of message.checksums) {
      writer.uint32(50).bytes(v!);
    }
    if (!message.version.isZero()) {
      writer.uint32(56).int64(message.version);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateObjectContent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateObjectContent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.objectId = reader.string();
          break;
        case 3:
          message.bucketName = reader.string();
          break;
        case 4:
          message.objectName = reader.string();
          break;
        case 5:
          message.payloadSize = (reader.uint64() as Long);
          break;
        case 6:
          message.checksums.push(reader.bytes());
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
  fromJSON(object: any): EventUpdateObjectContent {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      objectId: isSet(object.objectId) ? String(object.objectId) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      objectName: isSet(object.objectName) ? String(object.objectName) : "",
      payloadSize: isSet(object.payloadSize) ? Long.fromValue(object.payloadSize) : Long.UZERO,
      checksums: Array.isArray(object?.checksums) ? object.checksums.map((e: any) => bytesFromBase64(e)) : [],
      version: isSet(object.version) ? Long.fromValue(object.version) : Long.ZERO
    };
  },
  toJSON(message: EventUpdateObjectContent): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.objectId !== undefined && (obj.objectId = message.objectId);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.objectName !== undefined && (obj.objectName = message.objectName);
    message.payloadSize !== undefined && (obj.payloadSize = (message.payloadSize || Long.UZERO).toString());
    if (message.checksums) {
      obj.checksums = message.checksums.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.checksums = [];
    }
    message.version !== undefined && (obj.version = (message.version || Long.ZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventUpdateObjectContent>, I>>(object: I): EventUpdateObjectContent {
    const message = createBaseEventUpdateObjectContent();
    message.operator = object.operator ?? "";
    message.objectId = object.objectId ?? "";
    message.bucketName = object.bucketName ?? "";
    message.objectName = object.objectName ?? "";
    message.payloadSize = object.payloadSize !== undefined && object.payloadSize !== null ? Long.fromValue(object.payloadSize) : Long.UZERO;
    message.checksums = object.checksums?.map(e => e) || [];
    message.version = object.version !== undefined && object.version !== null ? Long.fromValue(object.version) : Long.ZERO;
    return message;
  },
  fromSDK(object: EventUpdateObjectContentSDKType): EventUpdateObjectContent {
    return {
      operator: object?.operator,
      objectId: object?.object_id,
      bucketName: object?.bucket_name,
      objectName: object?.object_name,
      payloadSize: object?.payload_size,
      checksums: Array.isArray(object?.checksums) ? object.checksums.map((e: any) => e) : [],
      version: object?.version
    };
  },
  toSDK(message: EventUpdateObjectContent): EventUpdateObjectContentSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.object_id = message.objectId;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    obj.payload_size = message.payloadSize;
    if (message.checksums) {
      obj.checksums = message.checksums.map(e => e);
    } else {
      obj.checksums = [];
    }
    obj.version = message.version;
    return obj;
  },
  fromAmino(object: EventUpdateObjectContentAmino): EventUpdateObjectContent {
    const message = createBaseEventUpdateObjectContent();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.object_id !== undefined && object.object_id !== null) {
      message.objectId = object.object_id;
    }
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    if (object.object_name !== undefined && object.object_name !== null) {
      message.objectName = object.object_name;
    }
    if (object.payload_size !== undefined && object.payload_size !== null) {
      message.payloadSize = Long.fromString(object.payload_size);
    }
    message.checksums = object.checksums?.map(e => bytesFromBase64(e)) || [];
    if (object.version !== undefined && object.version !== null) {
      message.version = Long.fromString(object.version);
    }
    return message;
  },
  toAmino(message: EventUpdateObjectContent): EventUpdateObjectContentAmino {
    const obj: any = {};
    obj.operator = message.operator;
    obj.object_id = message.objectId;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    obj.payload_size = message.payloadSize ? message.payloadSize.toString() : undefined;
    if (message.checksums) {
      obj.checksums = message.checksums.map(e => base64FromBytes(e));
    } else {
      obj.checksums = [];
    }
    obj.version = message.version ? message.version.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventUpdateObjectContentAminoMsg): EventUpdateObjectContent {
    return EventUpdateObjectContent.fromAmino(object.value);
  },
  fromProtoMsg(message: EventUpdateObjectContentProtoMsg): EventUpdateObjectContent {
    return EventUpdateObjectContent.decode(message.value);
  },
  toProto(message: EventUpdateObjectContent): Uint8Array {
    return EventUpdateObjectContent.encode(message).finish();
  },
  toProtoMsg(message: EventUpdateObjectContent): EventUpdateObjectContentProtoMsg {
    return {
      typeUrl: "/greenfield.storage.EventUpdateObjectContent",
      value: EventUpdateObjectContent.encode(message).finish()
    };
  }
};
function createBaseEventUpdateObjectContentSuccess(): EventUpdateObjectContentSuccess {
  return {
    operator: "",
    objectId: "",
    bucketName: "",
    objectName: "",
    contentType: "",
    prevPayloadSize: Long.UZERO,
    newPayloadSize: Long.UZERO,
    prevChecksums: [],
    newChecksums: [],
    version: Long.ZERO,
    updatedAt: Long.ZERO
  };
}
export const EventUpdateObjectContentSuccess = {
  typeUrl: "/greenfield.storage.EventUpdateObjectContentSuccess",
  encode(message: EventUpdateObjectContentSuccess, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.objectId !== "") {
      writer.uint32(18).string(message.objectId);
    }
    if (message.bucketName !== "") {
      writer.uint32(26).string(message.bucketName);
    }
    if (message.objectName !== "") {
      writer.uint32(34).string(message.objectName);
    }
    if (message.contentType !== "") {
      writer.uint32(42).string(message.contentType);
    }
    if (!message.prevPayloadSize.isZero()) {
      writer.uint32(48).uint64(message.prevPayloadSize);
    }
    if (!message.newPayloadSize.isZero()) {
      writer.uint32(56).uint64(message.newPayloadSize);
    }
    for (const v of message.prevChecksums) {
      writer.uint32(66).bytes(v!);
    }
    for (const v of message.newChecksums) {
      writer.uint32(74).bytes(v!);
    }
    if (!message.version.isZero()) {
      writer.uint32(80).int64(message.version);
    }
    if (!message.updatedAt.isZero()) {
      writer.uint32(88).int64(message.updatedAt);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateObjectContentSuccess {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateObjectContentSuccess();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.objectId = reader.string();
          break;
        case 3:
          message.bucketName = reader.string();
          break;
        case 4:
          message.objectName = reader.string();
          break;
        case 5:
          message.contentType = reader.string();
          break;
        case 6:
          message.prevPayloadSize = (reader.uint64() as Long);
          break;
        case 7:
          message.newPayloadSize = (reader.uint64() as Long);
          break;
        case 8:
          message.prevChecksums.push(reader.bytes());
          break;
        case 9:
          message.newChecksums.push(reader.bytes());
          break;
        case 10:
          message.version = (reader.int64() as Long);
          break;
        case 11:
          message.updatedAt = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventUpdateObjectContentSuccess {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      objectId: isSet(object.objectId) ? String(object.objectId) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      objectName: isSet(object.objectName) ? String(object.objectName) : "",
      contentType: isSet(object.contentType) ? String(object.contentType) : "",
      prevPayloadSize: isSet(object.prevPayloadSize) ? Long.fromValue(object.prevPayloadSize) : Long.UZERO,
      newPayloadSize: isSet(object.newPayloadSize) ? Long.fromValue(object.newPayloadSize) : Long.UZERO,
      prevChecksums: Array.isArray(object?.prevChecksums) ? object.prevChecksums.map((e: any) => bytesFromBase64(e)) : [],
      newChecksums: Array.isArray(object?.newChecksums) ? object.newChecksums.map((e: any) => bytesFromBase64(e)) : [],
      version: isSet(object.version) ? Long.fromValue(object.version) : Long.ZERO,
      updatedAt: isSet(object.updatedAt) ? Long.fromValue(object.updatedAt) : Long.ZERO
    };
  },
  toJSON(message: EventUpdateObjectContentSuccess): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.objectId !== undefined && (obj.objectId = message.objectId);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.objectName !== undefined && (obj.objectName = message.objectName);
    message.contentType !== undefined && (obj.contentType = message.contentType);
    message.prevPayloadSize !== undefined && (obj.prevPayloadSize = (message.prevPayloadSize || Long.UZERO).toString());
    message.newPayloadSize !== undefined && (obj.newPayloadSize = (message.newPayloadSize || Long.UZERO).toString());
    if (message.prevChecksums) {
      obj.prevChecksums = message.prevChecksums.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.prevChecksums = [];
    }
    if (message.newChecksums) {
      obj.newChecksums = message.newChecksums.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.newChecksums = [];
    }
    message.version !== undefined && (obj.version = (message.version || Long.ZERO).toString());
    message.updatedAt !== undefined && (obj.updatedAt = (message.updatedAt || Long.ZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventUpdateObjectContentSuccess>, I>>(object: I): EventUpdateObjectContentSuccess {
    const message = createBaseEventUpdateObjectContentSuccess();
    message.operator = object.operator ?? "";
    message.objectId = object.objectId ?? "";
    message.bucketName = object.bucketName ?? "";
    message.objectName = object.objectName ?? "";
    message.contentType = object.contentType ?? "";
    message.prevPayloadSize = object.prevPayloadSize !== undefined && object.prevPayloadSize !== null ? Long.fromValue(object.prevPayloadSize) : Long.UZERO;
    message.newPayloadSize = object.newPayloadSize !== undefined && object.newPayloadSize !== null ? Long.fromValue(object.newPayloadSize) : Long.UZERO;
    message.prevChecksums = object.prevChecksums?.map(e => e) || [];
    message.newChecksums = object.newChecksums?.map(e => e) || [];
    message.version = object.version !== undefined && object.version !== null ? Long.fromValue(object.version) : Long.ZERO;
    message.updatedAt = object.updatedAt !== undefined && object.updatedAt !== null ? Long.fromValue(object.updatedAt) : Long.ZERO;
    return message;
  },
  fromSDK(object: EventUpdateObjectContentSuccessSDKType): EventUpdateObjectContentSuccess {
    return {
      operator: object?.operator,
      objectId: object?.object_id,
      bucketName: object?.bucket_name,
      objectName: object?.object_name,
      contentType: object?.content_type,
      prevPayloadSize: object?.prev_payload_size,
      newPayloadSize: object?.new_payload_size,
      prevChecksums: Array.isArray(object?.prev_checksums) ? object.prev_checksums.map((e: any) => e) : [],
      newChecksums: Array.isArray(object?.new_checksums) ? object.new_checksums.map((e: any) => e) : [],
      version: object?.version,
      updatedAt: object?.updated_at
    };
  },
  toSDK(message: EventUpdateObjectContentSuccess): EventUpdateObjectContentSuccessSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.object_id = message.objectId;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    obj.content_type = message.contentType;
    obj.prev_payload_size = message.prevPayloadSize;
    obj.new_payload_size = message.newPayloadSize;
    if (message.prevChecksums) {
      obj.prev_checksums = message.prevChecksums.map(e => e);
    } else {
      obj.prev_checksums = [];
    }
    if (message.newChecksums) {
      obj.new_checksums = message.newChecksums.map(e => e);
    } else {
      obj.new_checksums = [];
    }
    obj.version = message.version;
    obj.updated_at = message.updatedAt;
    return obj;
  },
  fromAmino(object: EventUpdateObjectContentSuccessAmino): EventUpdateObjectContentSuccess {
    const message = createBaseEventUpdateObjectContentSuccess();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.object_id !== undefined && object.object_id !== null) {
      message.objectId = object.object_id;
    }
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    if (object.object_name !== undefined && object.object_name !== null) {
      message.objectName = object.object_name;
    }
    if (object.content_type !== undefined && object.content_type !== null) {
      message.contentType = object.content_type;
    }
    if (object.prev_payload_size !== undefined && object.prev_payload_size !== null) {
      message.prevPayloadSize = Long.fromString(object.prev_payload_size);
    }
    if (object.new_payload_size !== undefined && object.new_payload_size !== null) {
      message.newPayloadSize = Long.fromString(object.new_payload_size);
    }
    message.prevChecksums = object.prev_checksums?.map(e => bytesFromBase64(e)) || [];
    message.newChecksums = object.new_checksums?.map(e => bytesFromBase64(e)) || [];
    if (object.version !== undefined && object.version !== null) {
      message.version = Long.fromString(object.version);
    }
    if (object.updated_at !== undefined && object.updated_at !== null) {
      message.updatedAt = Long.fromString(object.updated_at);
    }
    return message;
  },
  toAmino(message: EventUpdateObjectContentSuccess): EventUpdateObjectContentSuccessAmino {
    const obj: any = {};
    obj.operator = message.operator;
    obj.object_id = message.objectId;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    obj.content_type = message.contentType;
    obj.prev_payload_size = message.prevPayloadSize ? message.prevPayloadSize.toString() : undefined;
    obj.new_payload_size = message.newPayloadSize ? message.newPayloadSize.toString() : undefined;
    if (message.prevChecksums) {
      obj.prev_checksums = message.prevChecksums.map(e => base64FromBytes(e));
    } else {
      obj.prev_checksums = [];
    }
    if (message.newChecksums) {
      obj.new_checksums = message.newChecksums.map(e => base64FromBytes(e));
    } else {
      obj.new_checksums = [];
    }
    obj.version = message.version ? message.version.toString() : undefined;
    obj.updated_at = message.updatedAt ? message.updatedAt.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventUpdateObjectContentSuccessAminoMsg): EventUpdateObjectContentSuccess {
    return EventUpdateObjectContentSuccess.fromAmino(object.value);
  },
  fromProtoMsg(message: EventUpdateObjectContentSuccessProtoMsg): EventUpdateObjectContentSuccess {
    return EventUpdateObjectContentSuccess.decode(message.value);
  },
  toProto(message: EventUpdateObjectContentSuccess): Uint8Array {
    return EventUpdateObjectContentSuccess.encode(message).finish();
  },
  toProtoMsg(message: EventUpdateObjectContentSuccess): EventUpdateObjectContentSuccessProtoMsg {
    return {
      typeUrl: "/greenfield.storage.EventUpdateObjectContentSuccess",
      value: EventUpdateObjectContentSuccess.encode(message).finish()
    };
  }
};
function createBaseEventCancelUpdateObjectContent(): EventCancelUpdateObjectContent {
  return {
    operator: "",
    bucketName: "",
    objectName: "",
    objectId: ""
  };
}
export const EventCancelUpdateObjectContent = {
  typeUrl: "/greenfield.storage.EventCancelUpdateObjectContent",
  encode(message: EventCancelUpdateObjectContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): EventCancelUpdateObjectContent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCancelUpdateObjectContent();
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
  fromJSON(object: any): EventCancelUpdateObjectContent {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      objectName: isSet(object.objectName) ? String(object.objectName) : "",
      objectId: isSet(object.objectId) ? String(object.objectId) : ""
    };
  },
  toJSON(message: EventCancelUpdateObjectContent): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.objectName !== undefined && (obj.objectName = message.objectName);
    message.objectId !== undefined && (obj.objectId = message.objectId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventCancelUpdateObjectContent>, I>>(object: I): EventCancelUpdateObjectContent {
    const message = createBaseEventCancelUpdateObjectContent();
    message.operator = object.operator ?? "";
    message.bucketName = object.bucketName ?? "";
    message.objectName = object.objectName ?? "";
    message.objectId = object.objectId ?? "";
    return message;
  },
  fromSDK(object: EventCancelUpdateObjectContentSDKType): EventCancelUpdateObjectContent {
    return {
      operator: object?.operator,
      bucketName: object?.bucket_name,
      objectName: object?.object_name,
      objectId: object?.object_id
    };
  },
  toSDK(message: EventCancelUpdateObjectContent): EventCancelUpdateObjectContentSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    obj.object_id = message.objectId;
    return obj;
  },
  fromAmino(object: EventCancelUpdateObjectContentAmino): EventCancelUpdateObjectContent {
    const message = createBaseEventCancelUpdateObjectContent();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    if (object.object_name !== undefined && object.object_name !== null) {
      message.objectName = object.object_name;
    }
    if (object.object_id !== undefined && object.object_id !== null) {
      message.objectId = object.object_id;
    }
    return message;
  },
  toAmino(message: EventCancelUpdateObjectContent): EventCancelUpdateObjectContentAmino {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    obj.object_id = message.objectId;
    return obj;
  },
  fromAminoMsg(object: EventCancelUpdateObjectContentAminoMsg): EventCancelUpdateObjectContent {
    return EventCancelUpdateObjectContent.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCancelUpdateObjectContentProtoMsg): EventCancelUpdateObjectContent {
    return EventCancelUpdateObjectContent.decode(message.value);
  },
  toProto(message: EventCancelUpdateObjectContent): Uint8Array {
    return EventCancelUpdateObjectContent.encode(message).finish();
  },
  toProtoMsg(message: EventCancelUpdateObjectContent): EventCancelUpdateObjectContentProtoMsg {
    return {
      typeUrl: "/greenfield.storage.EventCancelUpdateObjectContent",
      value: EventCancelUpdateObjectContent.encode(message).finish()
    };
  }
};