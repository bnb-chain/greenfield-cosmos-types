/* eslint-disable */
import { VisibilityType, SourceType, BucketStatus, ObjectStatus, RedundancyType, visibilityTypeFromJSON, sourceTypeFromJSON, bucketStatusFromJSON, visibilityTypeToJSON, sourceTypeToJSON, bucketStatusToJSON, objectStatusFromJSON, redundancyTypeFromJSON, objectStatusToJSON, redundancyTypeToJSON } from "./common";
import { DeleteInfo, DeleteInfoSDKType } from "./types";
import { Long, isSet, DeepPartial, Exact, bytesFromBase64, base64FromBytes } from "../../helpers";
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
  /** primary_sp_address is the operator address of the primary sp. */

  primarySpAddress: string;
  /** status define the status of the bucket. */

  status: BucketStatus;
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
  primary_sp_address: string;
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
  /** primary_sp_address define the account address of primary sp */

  primarySpAddress: string;
}
/** EventDeleteBucket is emitted on MsgDeleteBucket */

export interface EventDeleteBucketSDKType {
  operator: string;
  owner: string;
  bucket_name: string;
  bucket_id: string;
  primary_sp_address: string;
}
/** EventUpdateBucketInfo is emitted on MsgUpdateBucketInfo */

export interface EventUpdateBucketInfo {
  /** operator define the account address of operator who update the bucket */
  operator: string;
  /** bucket_name define the name of the bucket */

  bucketName: string;
  /** bucket_id define an u256 id for bucket */

  bucketId: string;
  /** charged_read_quota_before define the read quota before updated */

  chargedReadQuotaBefore: Long;
  /** charged_read_quota_after define the read quota after updated */

  chargedReadQuotaAfter: Long;
  /** payment_address_before define the payment address before updated */

  paymentAddressBefore: string;
  /** payment_address_after define the payment address after updated */

  paymentAddressAfter: string;
  /** visibility defines the highest permission of object. */

  visibility: VisibilityType;
}
/** EventUpdateBucketInfo is emitted on MsgUpdateBucketInfo */

export interface EventUpdateBucketInfoSDKType {
  operator: string;
  bucket_name: string;
  bucket_id: string;
  charged_read_quota_before: Long;
  charged_read_quota_after: Long;
  payment_address_before: string;
  payment_address_after: string;
  visibility: VisibilityType;
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
  /** bucket_id define an u256 id for object */

  bucketId: string;
  /** object_id define an u256 id for object */

  objectId: string;
  /** primary_sp_address define the account address of primary sp */

  primarySpAddress: string;
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
}
/** EventCreateObject is emitted on MsgCreateObject */

export interface EventCreateObjectSDKType {
  creator: string;
  owner: string;
  bucket_name: string;
  object_name: string;
  bucket_id: string;
  object_id: string;
  primary_sp_address: string;
  payload_size: Long;
  visibility: VisibilityType;
  content_type: string;
  create_at: Long;
  status: ObjectStatus;
  redundancy_type: RedundancyType;
  source_type: SourceType;
  checksums: Uint8Array[];
}
/** EventSealObject is emitted on MsgSealObject */

export interface EventCancelCreateObject {
  /** operator define the account address of operator who cancel create object */
  operator: string;
  /** bucket_name define the name of the bucket */

  bucketName: string;
  /** object_name define the name of the object */

  objectName: string;
  /** primary_sp_address define the operator account address of the sp */

  primarySpAddress: string;
  /** id define an u256 id for object */

  objectId: string;
}
/** EventSealObject is emitted on MsgSealObject */

export interface EventCancelCreateObjectSDKType {
  operator: string;
  bucket_name: string;
  object_name: string;
  primary_sp_address: string;
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
  /** secondary_sp_address define all the operator address of the secondary sps */

  secondarySpAddresses: string[];
}
/** EventSealObject is emitted on MsgSealObject */

export interface EventSealObjectSDKType {
  operator: string;
  bucket_name: string;
  object_name: string;
  object_id: string;
  status: ObjectStatus;
  secondary_sp_addresses: string[];
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
  /** primary_sp_address define the operator account address of the sp */

  primarySpAddress: string;
  /** secondary_sp_address define all the operator address of the secondary sps */

  secondarySpAddresses: string[];
}
/** EventDeleteObject is emitted on MsgDeleteObject */

export interface EventDeleteObjectSDKType {
  operator: string;
  bucket_name: string;
  object_name: string;
  object_id: string;
  primary_sp_address: string;
  secondary_sp_addresses: string[];
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
  /** members define the all the address of the members. */

  members: string[];
  /** extra defines extra info for the group */

  extra: string;
}
/** EventCreateGroup is emitted on MsgCreateGroup */

export interface EventCreateGroupSDKType {
  owner: string;
  group_name: string;
  group_id: string;
  source_type: SourceType;
  members: string[];
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

  membersToAdd: string[];
  /** members_to_add defines all the members to be deleted from the group */

  membersToDelete: string[];
}
/** EventUpdateGroupMember is emitted on MsgUpdateGroupMember */

export interface EventUpdateGroupMemberSDKType {
  operator: string;
  owner: string;
  group_name: string;
  group_id: string;
  members_to_add: string[];
  members_to_delete: string[];
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
}
/** EventMirrorBucket is emitted on MirrorBucket */

export interface EventMirrorBucketSDKType {
  operator: string;
  bucket_name: string;
  bucket_id: string;
}
/** EventMirrorBucketResult is emitted on receiving ack package from destination chain */

export interface EventMirrorBucketResult {
  /** status define the status of the result */
  status: number;
  /** bucket_name defines the name of the bucket */

  bucketName: string;
  /** bucket_id define an u256 id for bucket */

  bucketId: string;
}
/** EventMirrorBucketResult is emitted on receiving ack package from destination chain */

export interface EventMirrorBucketResultSDKType {
  status: number;
  bucket_name: string;
  bucket_id: string;
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
}
/** EventMirrorObject is emitted on MirrorObject */

export interface EventMirrorObjectSDKType {
  operator: string;
  bucket_name: string;
  object_name: string;
  object_id: string;
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
}
/** EventMirrorObjectResult is emitted on receiving ack package from destination chain */

export interface EventMirrorObjectResultSDKType {
  status: number;
  bucket_name: string;
  object_name: string;
  object_id: string;
}
/** EventMirrorGroup is emitted on MirrorGroup */

export interface EventMirrorGroup {
  /** owner define the account address of group owner */
  owner: string;
  /** group_name define the name of the group */

  groupName: string;
  /** group_id define an u256 id for group */

  groupId: string;
}
/** EventMirrorGroup is emitted on MirrorGroup */

export interface EventMirrorGroupSDKType {
  owner: string;
  group_name: string;
  group_id: string;
}
/** EventMirrorGroupResult is emitted on receiving ack package from destination chain */

export interface EventMirrorGroupResult {
  /** status define the status of the result */
  status: number;
  /** group_name define the name of the group */

  groupName: string;
  /** group_id define an u256 id for group */

  groupId: string;
}
/** EventMirrorGroupResult is emitted on receiving ack package from destination chain */

export interface EventMirrorGroupResultSDKType {
  status: number;
  group_name: string;
  group_id: string;
}
/** EventStalePolicyCleanup is emitted when specified block height's stale policies need to be Garbage collected */

export interface EventStalePolicyCleanup {
  blockNum: Long;
  deleteInfo?: DeleteInfo;
}
/** EventStalePolicyCleanup is emitted when specified block height's stale policies need to be Garbage collected */

export interface EventStalePolicyCleanupSDKType {
  blockNum: Long;
  delete_info?: DeleteInfoSDKType;
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
    primarySpAddress: "",
    status: 0
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

    if (message.primarySpAddress !== "") {
      writer.uint32(74).string(message.primarySpAddress);
    }

    if (message.status !== 0) {
      writer.uint32(80).int32(message.status);
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
          message.primarySpAddress = reader.string();
          break;

        case 10:
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
      visibility: isSet(object.visibility) ? visibilityTypeFromJSON(object.visibility) : 0,
      createAt: isSet(object.createAt) ? Long.fromValue(object.createAt) : Long.ZERO,
      bucketId: isSet(object.bucketId) ? String(object.bucketId) : "",
      sourceType: isSet(object.sourceType) ? sourceTypeFromJSON(object.sourceType) : 0,
      chargedReadQuota: isSet(object.chargedReadQuota) ? Long.fromValue(object.chargedReadQuota) : Long.UZERO,
      paymentAddress: isSet(object.paymentAddress) ? String(object.paymentAddress) : "",
      primarySpAddress: isSet(object.primarySpAddress) ? String(object.primarySpAddress) : "",
      status: isSet(object.status) ? bucketStatusFromJSON(object.status) : 0
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
    message.primarySpAddress !== undefined && (obj.primarySpAddress = message.primarySpAddress);
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
    message.primarySpAddress = object.primarySpAddress ?? "";
    message.status = object.status ?? 0;
    return message;
  },

  fromSDK(object: EventCreateBucketSDKType): EventCreateBucket {
    return {
      owner: object?.owner,
      bucketName: object?.bucket_name,
      visibility: isSet(object.visibility) ? visibilityTypeFromJSON(object.visibility) : 0,
      createAt: object?.create_at,
      bucketId: object?.bucket_id,
      sourceType: isSet(object.source_type) ? sourceTypeFromJSON(object.source_type) : 0,
      chargedReadQuota: object?.charged_read_quota,
      paymentAddress: object?.payment_address,
      primarySpAddress: object?.primary_sp_address,
      status: isSet(object.status) ? bucketStatusFromJSON(object.status) : 0
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
    obj.primary_sp_address = message.primarySpAddress;
    message.status !== undefined && (obj.status = bucketStatusToJSON(message.status));
    return obj;
  }

};

function createBaseEventDeleteBucket(): EventDeleteBucket {
  return {
    operator: "",
    owner: "",
    bucketName: "",
    bucketId: "",
    primarySpAddress: ""
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

    if (message.primarySpAddress !== "") {
      writer.uint32(42).string(message.primarySpAddress);
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
          message.primarySpAddress = reader.string();
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
      primarySpAddress: isSet(object.primarySpAddress) ? String(object.primarySpAddress) : ""
    };
  },

  toJSON(message: EventDeleteBucket): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.owner !== undefined && (obj.owner = message.owner);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.bucketId !== undefined && (obj.bucketId = message.bucketId);
    message.primarySpAddress !== undefined && (obj.primarySpAddress = message.primarySpAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventDeleteBucket>, I>>(object: I): EventDeleteBucket {
    const message = createBaseEventDeleteBucket();
    message.operator = object.operator ?? "";
    message.owner = object.owner ?? "";
    message.bucketName = object.bucketName ?? "";
    message.bucketId = object.bucketId ?? "";
    message.primarySpAddress = object.primarySpAddress ?? "";
    return message;
  },

  fromSDK(object: EventDeleteBucketSDKType): EventDeleteBucket {
    return {
      operator: object?.operator,
      owner: object?.owner,
      bucketName: object?.bucket_name,
      bucketId: object?.bucket_id,
      primarySpAddress: object?.primary_sp_address
    };
  },

  toSDK(message: EventDeleteBucket): EventDeleteBucketSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.owner = message.owner;
    obj.bucket_name = message.bucketName;
    obj.bucket_id = message.bucketId;
    obj.primary_sp_address = message.primarySpAddress;
    return obj;
  }

};

function createBaseEventUpdateBucketInfo(): EventUpdateBucketInfo {
  return {
    operator: "",
    bucketName: "",
    bucketId: "",
    chargedReadQuotaBefore: Long.UZERO,
    chargedReadQuotaAfter: Long.UZERO,
    paymentAddressBefore: "",
    paymentAddressAfter: "",
    visibility: 0
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

    if (!message.chargedReadQuotaBefore.isZero()) {
      writer.uint32(32).uint64(message.chargedReadQuotaBefore);
    }

    if (!message.chargedReadQuotaAfter.isZero()) {
      writer.uint32(40).uint64(message.chargedReadQuotaAfter);
    }

    if (message.paymentAddressBefore !== "") {
      writer.uint32(50).string(message.paymentAddressBefore);
    }

    if (message.paymentAddressAfter !== "") {
      writer.uint32(58).string(message.paymentAddressAfter);
    }

    if (message.visibility !== 0) {
      writer.uint32(64).int32(message.visibility);
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
          message.chargedReadQuotaBefore = (reader.uint64() as Long);
          break;

        case 5:
          message.chargedReadQuotaAfter = (reader.uint64() as Long);
          break;

        case 6:
          message.paymentAddressBefore = reader.string();
          break;

        case 7:
          message.paymentAddressAfter = reader.string();
          break;

        case 8:
          message.visibility = (reader.int32() as any);
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
      chargedReadQuotaBefore: isSet(object.chargedReadQuotaBefore) ? Long.fromValue(object.chargedReadQuotaBefore) : Long.UZERO,
      chargedReadQuotaAfter: isSet(object.chargedReadQuotaAfter) ? Long.fromValue(object.chargedReadQuotaAfter) : Long.UZERO,
      paymentAddressBefore: isSet(object.paymentAddressBefore) ? String(object.paymentAddressBefore) : "",
      paymentAddressAfter: isSet(object.paymentAddressAfter) ? String(object.paymentAddressAfter) : "",
      visibility: isSet(object.visibility) ? visibilityTypeFromJSON(object.visibility) : 0
    };
  },

  toJSON(message: EventUpdateBucketInfo): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.bucketId !== undefined && (obj.bucketId = message.bucketId);
    message.chargedReadQuotaBefore !== undefined && (obj.chargedReadQuotaBefore = (message.chargedReadQuotaBefore || Long.UZERO).toString());
    message.chargedReadQuotaAfter !== undefined && (obj.chargedReadQuotaAfter = (message.chargedReadQuotaAfter || Long.UZERO).toString());
    message.paymentAddressBefore !== undefined && (obj.paymentAddressBefore = message.paymentAddressBefore);
    message.paymentAddressAfter !== undefined && (obj.paymentAddressAfter = message.paymentAddressAfter);
    message.visibility !== undefined && (obj.visibility = visibilityTypeToJSON(message.visibility));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventUpdateBucketInfo>, I>>(object: I): EventUpdateBucketInfo {
    const message = createBaseEventUpdateBucketInfo();
    message.operator = object.operator ?? "";
    message.bucketName = object.bucketName ?? "";
    message.bucketId = object.bucketId ?? "";
    message.chargedReadQuotaBefore = object.chargedReadQuotaBefore !== undefined && object.chargedReadQuotaBefore !== null ? Long.fromValue(object.chargedReadQuotaBefore) : Long.UZERO;
    message.chargedReadQuotaAfter = object.chargedReadQuotaAfter !== undefined && object.chargedReadQuotaAfter !== null ? Long.fromValue(object.chargedReadQuotaAfter) : Long.UZERO;
    message.paymentAddressBefore = object.paymentAddressBefore ?? "";
    message.paymentAddressAfter = object.paymentAddressAfter ?? "";
    message.visibility = object.visibility ?? 0;
    return message;
  },

  fromSDK(object: EventUpdateBucketInfoSDKType): EventUpdateBucketInfo {
    return {
      operator: object?.operator,
      bucketName: object?.bucket_name,
      bucketId: object?.bucket_id,
      chargedReadQuotaBefore: object?.charged_read_quota_before,
      chargedReadQuotaAfter: object?.charged_read_quota_after,
      paymentAddressBefore: object?.payment_address_before,
      paymentAddressAfter: object?.payment_address_after,
      visibility: isSet(object.visibility) ? visibilityTypeFromJSON(object.visibility) : 0
    };
  },

  toSDK(message: EventUpdateBucketInfo): EventUpdateBucketInfoSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.bucket_id = message.bucketId;
    obj.charged_read_quota_before = message.chargedReadQuotaBefore;
    obj.charged_read_quota_after = message.chargedReadQuotaAfter;
    obj.payment_address_before = message.paymentAddressBefore;
    obj.payment_address_after = message.paymentAddressAfter;
    message.visibility !== undefined && (obj.visibility = visibilityTypeToJSON(message.visibility));
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
    primarySpAddress: "",
    payloadSize: Long.UZERO,
    visibility: 0,
    contentType: "",
    createAt: Long.ZERO,
    status: 0,
    redundancyType: 0,
    sourceType: 0,
    checksums: []
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

    if (message.primarySpAddress !== "") {
      writer.uint32(66).string(message.primarySpAddress);
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
          message.primarySpAddress = reader.string();
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
      primarySpAddress: isSet(object.primarySpAddress) ? String(object.primarySpAddress) : "",
      payloadSize: isSet(object.payloadSize) ? Long.fromValue(object.payloadSize) : Long.UZERO,
      visibility: isSet(object.visibility) ? visibilityTypeFromJSON(object.visibility) : 0,
      contentType: isSet(object.contentType) ? String(object.contentType) : "",
      createAt: isSet(object.createAt) ? Long.fromValue(object.createAt) : Long.ZERO,
      status: isSet(object.status) ? objectStatusFromJSON(object.status) : 0,
      redundancyType: isSet(object.redundancyType) ? redundancyTypeFromJSON(object.redundancyType) : 0,
      sourceType: isSet(object.sourceType) ? sourceTypeFromJSON(object.sourceType) : 0,
      checksums: Array.isArray(object?.checksums) ? object.checksums.map((e: any) => bytesFromBase64(e)) : []
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
    message.primarySpAddress !== undefined && (obj.primarySpAddress = message.primarySpAddress);
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
    message.primarySpAddress = object.primarySpAddress ?? "";
    message.payloadSize = object.payloadSize !== undefined && object.payloadSize !== null ? Long.fromValue(object.payloadSize) : Long.UZERO;
    message.visibility = object.visibility ?? 0;
    message.contentType = object.contentType ?? "";
    message.createAt = object.createAt !== undefined && object.createAt !== null ? Long.fromValue(object.createAt) : Long.ZERO;
    message.status = object.status ?? 0;
    message.redundancyType = object.redundancyType ?? 0;
    message.sourceType = object.sourceType ?? 0;
    message.checksums = object.checksums?.map(e => e) || [];
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
      primarySpAddress: object?.primary_sp_address,
      payloadSize: object?.payload_size,
      visibility: isSet(object.visibility) ? visibilityTypeFromJSON(object.visibility) : 0,
      contentType: object?.content_type,
      createAt: object?.create_at,
      status: isSet(object.status) ? objectStatusFromJSON(object.status) : 0,
      redundancyType: isSet(object.redundancy_type) ? redundancyTypeFromJSON(object.redundancy_type) : 0,
      sourceType: isSet(object.source_type) ? sourceTypeFromJSON(object.source_type) : 0,
      checksums: Array.isArray(object?.checksums) ? object.checksums.map((e: any) => e) : []
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
    obj.primary_sp_address = message.primarySpAddress;
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

    return obj;
  }

};

function createBaseEventCancelCreateObject(): EventCancelCreateObject {
  return {
    operator: "",
    bucketName: "",
    objectName: "",
    primarySpAddress: "",
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

    if (message.primarySpAddress !== "") {
      writer.uint32(34).string(message.primarySpAddress);
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
          message.primarySpAddress = reader.string();
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
      primarySpAddress: isSet(object.primarySpAddress) ? String(object.primarySpAddress) : "",
      objectId: isSet(object.objectId) ? String(object.objectId) : ""
    };
  },

  toJSON(message: EventCancelCreateObject): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.objectName !== undefined && (obj.objectName = message.objectName);
    message.primarySpAddress !== undefined && (obj.primarySpAddress = message.primarySpAddress);
    message.objectId !== undefined && (obj.objectId = message.objectId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCancelCreateObject>, I>>(object: I): EventCancelCreateObject {
    const message = createBaseEventCancelCreateObject();
    message.operator = object.operator ?? "";
    message.bucketName = object.bucketName ?? "";
    message.objectName = object.objectName ?? "";
    message.primarySpAddress = object.primarySpAddress ?? "";
    message.objectId = object.objectId ?? "";
    return message;
  },

  fromSDK(object: EventCancelCreateObjectSDKType): EventCancelCreateObject {
    return {
      operator: object?.operator,
      bucketName: object?.bucket_name,
      objectName: object?.object_name,
      primarySpAddress: object?.primary_sp_address,
      objectId: object?.object_id
    };
  },

  toSDK(message: EventCancelCreateObject): EventCancelCreateObjectSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    obj.primary_sp_address = message.primarySpAddress;
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
    secondarySpAddresses: []
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

    for (const v of message.secondarySpAddresses) {
      writer.uint32(58).string(v!);
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
          message.secondarySpAddresses.push(reader.string());
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
      status: isSet(object.status) ? objectStatusFromJSON(object.status) : 0,
      secondarySpAddresses: Array.isArray(object?.secondarySpAddresses) ? object.secondarySpAddresses.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: EventSealObject): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.objectName !== undefined && (obj.objectName = message.objectName);
    message.objectId !== undefined && (obj.objectId = message.objectId);
    message.status !== undefined && (obj.status = objectStatusToJSON(message.status));

    if (message.secondarySpAddresses) {
      obj.secondarySpAddresses = message.secondarySpAddresses.map(e => e);
    } else {
      obj.secondarySpAddresses = [];
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
    message.secondarySpAddresses = object.secondarySpAddresses?.map(e => e) || [];
    return message;
  },

  fromSDK(object: EventSealObjectSDKType): EventSealObject {
    return {
      operator: object?.operator,
      bucketName: object?.bucket_name,
      objectName: object?.object_name,
      objectId: object?.object_id,
      status: isSet(object.status) ? objectStatusFromJSON(object.status) : 0,
      secondarySpAddresses: Array.isArray(object?.secondary_sp_addresses) ? object.secondary_sp_addresses.map((e: any) => e) : []
    };
  },

  toSDK(message: EventSealObject): EventSealObjectSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    obj.object_id = message.objectId;
    message.status !== undefined && (obj.status = objectStatusToJSON(message.status));

    if (message.secondarySpAddresses) {
      obj.secondary_sp_addresses = message.secondarySpAddresses.map(e => e);
    } else {
      obj.secondary_sp_addresses = [];
    }

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
    dstObjectId: ""
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
      dstObjectId: isSet(object.dstObjectId) ? String(object.dstObjectId) : ""
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
      dstObjectId: object?.dst_object_id
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
    return obj;
  }

};

function createBaseEventDeleteObject(): EventDeleteObject {
  return {
    operator: "",
    bucketName: "",
    objectName: "",
    objectId: "",
    primarySpAddress: "",
    secondarySpAddresses: []
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

    if (message.primarySpAddress !== "") {
      writer.uint32(42).string(message.primarySpAddress);
    }

    for (const v of message.secondarySpAddresses) {
      writer.uint32(50).string(v!);
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
          message.primarySpAddress = reader.string();
          break;

        case 6:
          message.secondarySpAddresses.push(reader.string());
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
      primarySpAddress: isSet(object.primarySpAddress) ? String(object.primarySpAddress) : "",
      secondarySpAddresses: Array.isArray(object?.secondarySpAddresses) ? object.secondarySpAddresses.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: EventDeleteObject): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.objectName !== undefined && (obj.objectName = message.objectName);
    message.objectId !== undefined && (obj.objectId = message.objectId);
    message.primarySpAddress !== undefined && (obj.primarySpAddress = message.primarySpAddress);

    if (message.secondarySpAddresses) {
      obj.secondarySpAddresses = message.secondarySpAddresses.map(e => e);
    } else {
      obj.secondarySpAddresses = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventDeleteObject>, I>>(object: I): EventDeleteObject {
    const message = createBaseEventDeleteObject();
    message.operator = object.operator ?? "";
    message.bucketName = object.bucketName ?? "";
    message.objectName = object.objectName ?? "";
    message.objectId = object.objectId ?? "";
    message.primarySpAddress = object.primarySpAddress ?? "";
    message.secondarySpAddresses = object.secondarySpAddresses?.map(e => e) || [];
    return message;
  },

  fromSDK(object: EventDeleteObjectSDKType): EventDeleteObject {
    return {
      operator: object?.operator,
      bucketName: object?.bucket_name,
      objectName: object?.object_name,
      objectId: object?.object_id,
      primarySpAddress: object?.primary_sp_address,
      secondarySpAddresses: Array.isArray(object?.secondary_sp_addresses) ? object.secondary_sp_addresses.map((e: any) => e) : []
    };
  },

  toSDK(message: EventDeleteObject): EventDeleteObjectSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    obj.object_id = message.objectId;
    obj.primary_sp_address = message.primarySpAddress;

    if (message.secondarySpAddresses) {
      obj.secondary_sp_addresses = message.secondarySpAddresses.map(e => e);
    } else {
      obj.secondary_sp_addresses = [];
    }

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
      visibility: isSet(object.visibility) ? visibilityTypeFromJSON(object.visibility) : 0
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
      visibility: isSet(object.visibility) ? visibilityTypeFromJSON(object.visibility) : 0
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
    members: [],
    extra: ""
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

    for (const v of message.members) {
      writer.uint32(42).string(v!);
    }

    if (message.extra !== "") {
      writer.uint32(50).string(message.extra);
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
          message.members.push(reader.string());
          break;

        case 6:
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
      sourceType: isSet(object.sourceType) ? sourceTypeFromJSON(object.sourceType) : 0,
      members: Array.isArray(object?.members) ? object.members.map((e: any) => String(e)) : [],
      extra: isSet(object.extra) ? String(object.extra) : ""
    };
  },

  toJSON(message: EventCreateGroup): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.groupName !== undefined && (obj.groupName = message.groupName);
    message.groupId !== undefined && (obj.groupId = message.groupId);
    message.sourceType !== undefined && (obj.sourceType = sourceTypeToJSON(message.sourceType));

    if (message.members) {
      obj.members = message.members.map(e => e);
    } else {
      obj.members = [];
    }

    message.extra !== undefined && (obj.extra = message.extra);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCreateGroup>, I>>(object: I): EventCreateGroup {
    const message = createBaseEventCreateGroup();
    message.owner = object.owner ?? "";
    message.groupName = object.groupName ?? "";
    message.groupId = object.groupId ?? "";
    message.sourceType = object.sourceType ?? 0;
    message.members = object.members?.map(e => e) || [];
    message.extra = object.extra ?? "";
    return message;
  },

  fromSDK(object: EventCreateGroupSDKType): EventCreateGroup {
    return {
      owner: object?.owner,
      groupName: object?.group_name,
      groupId: object?.group_id,
      sourceType: isSet(object.source_type) ? sourceTypeFromJSON(object.source_type) : 0,
      members: Array.isArray(object?.members) ? object.members.map((e: any) => e) : [],
      extra: object?.extra
    };
  },

  toSDK(message: EventCreateGroup): EventCreateGroupSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.group_name = message.groupName;
    obj.group_id = message.groupId;
    message.sourceType !== undefined && (obj.source_type = sourceTypeToJSON(message.sourceType));

    if (message.members) {
      obj.members = message.members.map(e => e);
    } else {
      obj.members = [];
    }

    obj.extra = message.extra;
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
      writer.uint32(42).string(v!);
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
          message.membersToAdd.push(reader.string());
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
      membersToAdd: Array.isArray(object?.membersToAdd) ? object.membersToAdd.map((e: any) => String(e)) : [],
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
      obj.membersToAdd = message.membersToAdd.map(e => e);
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
    message.membersToAdd = object.membersToAdd?.map(e => e) || [];
    message.membersToDelete = object.membersToDelete?.map(e => e) || [];
    return message;
  },

  fromSDK(object: EventUpdateGroupMemberSDKType): EventUpdateGroupMember {
    return {
      operator: object?.operator,
      owner: object?.owner,
      groupName: object?.group_name,
      groupId: object?.group_id,
      membersToAdd: Array.isArray(object?.members_to_add) ? object.members_to_add.map((e: any) => e) : [],
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
      obj.members_to_add = message.membersToAdd.map(e => e);
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
    bucketId: ""
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
      bucketId: isSet(object.bucketId) ? String(object.bucketId) : ""
    };
  },

  toJSON(message: EventMirrorBucket): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.bucketId !== undefined && (obj.bucketId = message.bucketId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventMirrorBucket>, I>>(object: I): EventMirrorBucket {
    const message = createBaseEventMirrorBucket();
    message.operator = object.operator ?? "";
    message.bucketName = object.bucketName ?? "";
    message.bucketId = object.bucketId ?? "";
    return message;
  },

  fromSDK(object: EventMirrorBucketSDKType): EventMirrorBucket {
    return {
      operator: object?.operator,
      bucketName: object?.bucket_name,
      bucketId: object?.bucket_id
    };
  },

  toSDK(message: EventMirrorBucket): EventMirrorBucketSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.bucket_id = message.bucketId;
    return obj;
  }

};

function createBaseEventMirrorBucketResult(): EventMirrorBucketResult {
  return {
    status: 0,
    bucketName: "",
    bucketId: ""
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
      bucketId: isSet(object.bucketId) ? String(object.bucketId) : ""
    };
  },

  toJSON(message: EventMirrorBucketResult): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = Math.round(message.status));
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.bucketId !== undefined && (obj.bucketId = message.bucketId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventMirrorBucketResult>, I>>(object: I): EventMirrorBucketResult {
    const message = createBaseEventMirrorBucketResult();
    message.status = object.status ?? 0;
    message.bucketName = object.bucketName ?? "";
    message.bucketId = object.bucketId ?? "";
    return message;
  },

  fromSDK(object: EventMirrorBucketResultSDKType): EventMirrorBucketResult {
    return {
      status: object?.status,
      bucketName: object?.bucket_name,
      bucketId: object?.bucket_id
    };
  },

  toSDK(message: EventMirrorBucketResult): EventMirrorBucketResultSDKType {
    const obj: any = {};
    obj.status = message.status;
    obj.bucket_name = message.bucketName;
    obj.bucket_id = message.bucketId;
    return obj;
  }

};

function createBaseEventMirrorObject(): EventMirrorObject {
  return {
    operator: "",
    bucketName: "",
    objectName: "",
    objectId: ""
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
      objectId: isSet(object.objectId) ? String(object.objectId) : ""
    };
  },

  toJSON(message: EventMirrorObject): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.objectName !== undefined && (obj.objectName = message.objectName);
    message.objectId !== undefined && (obj.objectId = message.objectId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventMirrorObject>, I>>(object: I): EventMirrorObject {
    const message = createBaseEventMirrorObject();
    message.operator = object.operator ?? "";
    message.bucketName = object.bucketName ?? "";
    message.objectName = object.objectName ?? "";
    message.objectId = object.objectId ?? "";
    return message;
  },

  fromSDK(object: EventMirrorObjectSDKType): EventMirrorObject {
    return {
      operator: object?.operator,
      bucketName: object?.bucket_name,
      objectName: object?.object_name,
      objectId: object?.object_id
    };
  },

  toSDK(message: EventMirrorObject): EventMirrorObjectSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    obj.object_id = message.objectId;
    return obj;
  }

};

function createBaseEventMirrorObjectResult(): EventMirrorObjectResult {
  return {
    status: 0,
    bucketName: "",
    objectName: "",
    objectId: ""
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
      objectId: isSet(object.objectId) ? String(object.objectId) : ""
    };
  },

  toJSON(message: EventMirrorObjectResult): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = Math.round(message.status));
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.objectName !== undefined && (obj.objectName = message.objectName);
    message.objectId !== undefined && (obj.objectId = message.objectId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventMirrorObjectResult>, I>>(object: I): EventMirrorObjectResult {
    const message = createBaseEventMirrorObjectResult();
    message.status = object.status ?? 0;
    message.bucketName = object.bucketName ?? "";
    message.objectName = object.objectName ?? "";
    message.objectId = object.objectId ?? "";
    return message;
  },

  fromSDK(object: EventMirrorObjectResultSDKType): EventMirrorObjectResult {
    return {
      status: object?.status,
      bucketName: object?.bucket_name,
      objectName: object?.object_name,
      objectId: object?.object_id
    };
  },

  toSDK(message: EventMirrorObjectResult): EventMirrorObjectResultSDKType {
    const obj: any = {};
    obj.status = message.status;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    obj.object_id = message.objectId;
    return obj;
  }

};

function createBaseEventMirrorGroup(): EventMirrorGroup {
  return {
    owner: "",
    groupName: "",
    groupId: ""
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
      groupId: isSet(object.groupId) ? String(object.groupId) : ""
    };
  },

  toJSON(message: EventMirrorGroup): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.groupName !== undefined && (obj.groupName = message.groupName);
    message.groupId !== undefined && (obj.groupId = message.groupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventMirrorGroup>, I>>(object: I): EventMirrorGroup {
    const message = createBaseEventMirrorGroup();
    message.owner = object.owner ?? "";
    message.groupName = object.groupName ?? "";
    message.groupId = object.groupId ?? "";
    return message;
  },

  fromSDK(object: EventMirrorGroupSDKType): EventMirrorGroup {
    return {
      owner: object?.owner,
      groupName: object?.group_name,
      groupId: object?.group_id
    };
  },

  toSDK(message: EventMirrorGroup): EventMirrorGroupSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.group_name = message.groupName;
    obj.group_id = message.groupId;
    return obj;
  }

};

function createBaseEventMirrorGroupResult(): EventMirrorGroupResult {
  return {
    status: 0,
    groupName: "",
    groupId: ""
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
      groupId: isSet(object.groupId) ? String(object.groupId) : ""
    };
  },

  toJSON(message: EventMirrorGroupResult): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = Math.round(message.status));
    message.groupName !== undefined && (obj.groupName = message.groupName);
    message.groupId !== undefined && (obj.groupId = message.groupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventMirrorGroupResult>, I>>(object: I): EventMirrorGroupResult {
    const message = createBaseEventMirrorGroupResult();
    message.status = object.status ?? 0;
    message.groupName = object.groupName ?? "";
    message.groupId = object.groupId ?? "";
    return message;
  },

  fromSDK(object: EventMirrorGroupResultSDKType): EventMirrorGroupResult {
    return {
      status: object?.status,
      groupName: object?.group_name,
      groupId: object?.group_id
    };
  },

  toSDK(message: EventMirrorGroupResult): EventMirrorGroupResultSDKType {
    const obj: any = {};
    obj.status = message.status;
    obj.group_name = message.groupName;
    obj.group_id = message.groupId;
    return obj;
  }

};

function createBaseEventStalePolicyCleanup(): EventStalePolicyCleanup {
  return {
    blockNum: Long.ZERO,
    deleteInfo: undefined
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