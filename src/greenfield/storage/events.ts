/* eslint-disable */
import { VisibilityType, SourceType, ObjectStatus, RedundancyType, visibilityTypeFromJSON, sourceTypeFromJSON, visibilityTypeToJSON, sourceTypeToJSON, objectStatusFromJSON, redundancyTypeFromJSON, objectStatusToJSON, redundancyTypeToJSON } from "./common";
import { Long, isSet, DeepPartial, Exact, bytesFromBase64, base64FromBytes } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "bnbchain.greenfield.storage";
/** EventCreateBucket is emitted on MsgCreateBucket */

export interface EventCreateBucket {
  /** owner_address define the account address of bucket owner */
  ownerAddress: string;
  /** bucket_name is a globally unique name of bucket */

  bucketName: string;
  /** visibility defines the highest permissions for bucket. When a bucket is public, everyone can get the object under it. */

  visibility: VisibilityType;
  /** create_at define the block number when the bucket has been created */

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
}
/** EventCreateBucket is emitted on MsgCreateBucket */

export interface EventCreateBucketSDKType {
  owner_address: string;
  bucket_name: string;
  visibility: VisibilityType;
  create_at: Long;
  bucket_id: string;
  source_type: SourceType;
  charged_read_quota: Long;
  payment_address: string;
  primary_sp_address: string;
}
/** EventDeleteBucket is emitted on MsgDeleteBucket */

export interface EventDeleteBucket {
  /** operator_address define the account address of operator who delete the bucket */
  operatorAddress: string;
  /** owner_address define the account address of the bucket owner */

  ownerAddress: string;
  /** bucket_name define the name of the deleted bucket */

  bucketName: string;
  /** bucket_id define an u256 id for bucket */

  bucketId: string;
  /** primary_sp_address define the account address of primary sp */

  primarySpAddress: string;
}
/** EventDeleteBucket is emitted on MsgDeleteBucket */

export interface EventDeleteBucketSDKType {
  operator_address: string;
  owner_address: string;
  bucket_name: string;
  bucket_id: string;
  primary_sp_address: string;
}
/** EventUpdateBucketInfo is emitted on MsgUpdateBucketInfo */

export interface EventUpdateBucketInfo {
  /** operator_address define the account address of operator who update the bucket */
  operatorAddress: string;
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
  operator_address: string;
  bucket_name: string;
  bucket_id: string;
  charged_read_quota_before: Long;
  charged_read_quota_after: Long;
  payment_address_before: string;
  payment_address_after: string;
  visibility: VisibilityType;
}
/** EventCreateObject is emitted on MsgCreateObject */

export interface EventCreateObject {
  /** creator_address define the account address of msg creator */
  creatorAddress: string;
  /** owner_address define the account address of object owner */

  ownerAddress: string;
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
  /** create_at define the block number when the object created */

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
  creator_address: string;
  owner_address: string;
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
  /** operator_address define the account address of operator who cancel create object */
  operatorAddress: string;
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
  operator_address: string;
  bucket_name: string;
  object_name: string;
  primary_sp_address: string;
  object_id: string;
}
/** EventSealObject is emitted on MsgSealObject */

export interface EventSealObject {
  /** operator_address define the account address of operator who seal object */
  operatorAddress: string;
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
  operator_address: string;
  bucket_name: string;
  object_name: string;
  object_id: string;
  status: ObjectStatus;
  secondary_sp_addresses: string[];
}
/** EventCopyObject is emitted on MsgCopyObject */

export interface EventCopyObject {
  /** operator_address define the account address of operator who copy the object */
  operatorAddress: string;
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
  operator_address: string;
  src_bucket_name: string;
  src_object_name: string;
  dst_bucket_name: string;
  dst_object_name: string;
  src_object_id: string;
  dst_object_id: string;
}
/** EventDeleteObject is emitted on MsgDeleteObject */

export interface EventDeleteObject {
  /** operator_address define the account address of operator who delete the object */
  operatorAddress: string;
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
  operator_address: string;
  bucket_name: string;
  object_name: string;
  object_id: string;
  primary_sp_address: string;
  secondary_sp_addresses: string[];
}
/** EventRejectSealObject is emitted on MsgRejectSealObject */

export interface EventRejectSealObject {
  /** operator_address define the account address of operator who reject seal object */
  operatorAddress: string;
  /** bucket_name define the name of the bucket */

  bucketName: string;
  /** object_name define the name of the object */

  objectName: string;
  /** id define an u256 id for object */

  objectId: string;
}
/** EventRejectSealObject is emitted on MsgRejectSealObject */

export interface EventRejectSealObjectSDKType {
  operator_address: string;
  bucket_name: string;
  object_name: string;
  object_id: string;
}
/** EventCreateGroup is emitted on MsgCreateGroup */

export interface EventCreateGroup {
  /** owner_address define the account address of group owner */
  ownerAddress: string;
  /** group_name define the name of the group */

  groupName: string;
  /** id define an u256 id for group */

  groupId: string;
  /** source_type define the source of the group. CrossChain or Greenfield origin */

  sourceType: SourceType;
  /** members define the all the address of the members. */

  members: string[];
}
/** EventCreateGroup is emitted on MsgCreateGroup */

export interface EventCreateGroupSDKType {
  owner_address: string;
  group_name: string;
  group_id: string;
  source_type: SourceType;
  members: string[];
}
/** EventDeleteGroup is emitted on MsgDeleteGroup */

export interface EventDeleteGroup {
  /** owner_address define the account address of group owner */
  ownerAddress: string;
  /** group_name define the name of the group */

  groupName: string;
  /** id define an u256 id for group */

  groupId: string;
}
/** EventDeleteGroup is emitted on MsgDeleteGroup */

export interface EventDeleteGroupSDKType {
  owner_address: string;
  group_name: string;
  group_id: string;
}
/** EventLeaveGroup is emitted on MsgLeaveGroup */

export interface EventLeaveGroup {
  /** member_address define the address of the member who leave the group */
  memberAddress: string;
  /** owner_address define the account address of group owner */

  ownerAddress: string;
  /** group_name define the name of the group */

  groupName: string;
  /** id define an u256 id for group */

  groupId: string;
}
/** EventLeaveGroup is emitted on MsgLeaveGroup */

export interface EventLeaveGroupSDKType {
  member_address: string;
  owner_address: string;
  group_name: string;
  group_id: string;
}
/** EventUpdateGroupMember is emitted on MsgUpdateGroupMember */

export interface EventUpdateGroupMember {
  /** operator_address define the account address of operator who update the group member */
  operatorAddress: string;
  /** owner_address define the account address of group owner */

  ownerAddress: string;
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
  operator_address: string;
  owner_address: string;
  group_name: string;
  group_id: string;
  members_to_add: string[];
  members_to_delete: string[];
}
/** EventMirrorBucket is emitted on MirrorBucket */

export interface EventMirrorBucket {
  /** operator_address define the account address of operator who mirror the bucket */
  operatorAddress: string;
  /** bucket_name defines the name of the bucket */

  bucketName: string;
  /** bucket_id define an u256 id for bucket */

  bucketId: string;
}
/** EventMirrorBucket is emitted on MirrorBucket */

export interface EventMirrorBucketSDKType {
  operator_address: string;
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
  /** operator_address define the account address of operator who delete the object */
  operatorAddress: string;
  /** bucket_name define the name of the bucket */

  bucketName: string;
  /** object_name define the name of the object */

  objectName: string;
  /** object_id define an u256 id for object */

  objectId: string;
}
/** EventMirrorObject is emitted on MirrorObject */

export interface EventMirrorObjectSDKType {
  operator_address: string;
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
  /** owner_address define the account address of group owner */
  ownerAddress: string;
  /** group_name define the name of the group */

  groupName: string;
  /** group_id define an u256 id for group */

  groupId: string;
}
/** EventMirrorGroup is emitted on MirrorGroup */

export interface EventMirrorGroupSDKType {
  owner_address: string;
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

function createBaseEventCreateBucket(): EventCreateBucket {
  return {
    ownerAddress: "",
    bucketName: "",
    visibility: 0,
    createAt: Long.ZERO,
    bucketId: "",
    sourceType: 0,
    chargedReadQuota: Long.UZERO,
    paymentAddress: "",
    primarySpAddress: ""
  };
}

export const EventCreateBucket = {
  encode(message: EventCreateBucket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ownerAddress !== "") {
      writer.uint32(10).string(message.ownerAddress);
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
          message.ownerAddress = reader.string();
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

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventCreateBucket {
    return {
      ownerAddress: isSet(object.ownerAddress) ? String(object.ownerAddress) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      visibility: isSet(object.visibility) ? visibilityTypeFromJSON(object.visibility) : 0,
      createAt: isSet(object.createAt) ? Long.fromValue(object.createAt) : Long.ZERO,
      bucketId: isSet(object.bucketId) ? String(object.bucketId) : "",
      sourceType: isSet(object.sourceType) ? sourceTypeFromJSON(object.sourceType) : 0,
      chargedReadQuota: isSet(object.chargedReadQuota) ? Long.fromValue(object.chargedReadQuota) : Long.UZERO,
      paymentAddress: isSet(object.paymentAddress) ? String(object.paymentAddress) : "",
      primarySpAddress: isSet(object.primarySpAddress) ? String(object.primarySpAddress) : ""
    };
  },

  toJSON(message: EventCreateBucket): unknown {
    const obj: any = {};
    message.ownerAddress !== undefined && (obj.ownerAddress = message.ownerAddress);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.visibility !== undefined && (obj.visibility = visibilityTypeToJSON(message.visibility));
    message.createAt !== undefined && (obj.createAt = (message.createAt || Long.ZERO).toString());
    message.bucketId !== undefined && (obj.bucketId = message.bucketId);
    message.sourceType !== undefined && (obj.sourceType = sourceTypeToJSON(message.sourceType));
    message.chargedReadQuota !== undefined && (obj.chargedReadQuota = (message.chargedReadQuota || Long.UZERO).toString());
    message.paymentAddress !== undefined && (obj.paymentAddress = message.paymentAddress);
    message.primarySpAddress !== undefined && (obj.primarySpAddress = message.primarySpAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCreateBucket>, I>>(object: I): EventCreateBucket {
    const message = createBaseEventCreateBucket();
    message.ownerAddress = object.ownerAddress ?? "";
    message.bucketName = object.bucketName ?? "";
    message.visibility = object.visibility ?? 0;
    message.createAt = object.createAt !== undefined && object.createAt !== null ? Long.fromValue(object.createAt) : Long.ZERO;
    message.bucketId = object.bucketId ?? "";
    message.sourceType = object.sourceType ?? 0;
    message.chargedReadQuota = object.chargedReadQuota !== undefined && object.chargedReadQuota !== null ? Long.fromValue(object.chargedReadQuota) : Long.UZERO;
    message.paymentAddress = object.paymentAddress ?? "";
    message.primarySpAddress = object.primarySpAddress ?? "";
    return message;
  },

  fromSDK(object: EventCreateBucketSDKType): EventCreateBucket {
    return {
      ownerAddress: object?.owner_address,
      bucketName: object?.bucket_name,
      visibility: isSet(object.visibility) ? visibilityTypeFromJSON(object.visibility) : 0,
      createAt: object?.create_at,
      bucketId: object?.bucket_id,
      sourceType: isSet(object.source_type) ? sourceTypeFromJSON(object.source_type) : 0,
      chargedReadQuota: object?.charged_read_quota,
      paymentAddress: object?.payment_address,
      primarySpAddress: object?.primary_sp_address
    };
  },

  toSDK(message: EventCreateBucket): EventCreateBucketSDKType {
    const obj: any = {};
    obj.owner_address = message.ownerAddress;
    obj.bucket_name = message.bucketName;
    message.visibility !== undefined && (obj.visibility = visibilityTypeToJSON(message.visibility));
    obj.create_at = message.createAt;
    obj.bucket_id = message.bucketId;
    message.sourceType !== undefined && (obj.source_type = sourceTypeToJSON(message.sourceType));
    obj.charged_read_quota = message.chargedReadQuota;
    obj.payment_address = message.paymentAddress;
    obj.primary_sp_address = message.primarySpAddress;
    return obj;
  }

};

function createBaseEventDeleteBucket(): EventDeleteBucket {
  return {
    operatorAddress: "",
    ownerAddress: "",
    bucketName: "",
    bucketId: "",
    primarySpAddress: ""
  };
}

export const EventDeleteBucket = {
  encode(message: EventDeleteBucket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }

    if (message.ownerAddress !== "") {
      writer.uint32(18).string(message.ownerAddress);
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
          message.operatorAddress = reader.string();
          break;

        case 2:
          message.ownerAddress = reader.string();
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
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : "",
      ownerAddress: isSet(object.ownerAddress) ? String(object.ownerAddress) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      bucketId: isSet(object.bucketId) ? String(object.bucketId) : "",
      primarySpAddress: isSet(object.primarySpAddress) ? String(object.primarySpAddress) : ""
    };
  },

  toJSON(message: EventDeleteBucket): unknown {
    const obj: any = {};
    message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
    message.ownerAddress !== undefined && (obj.ownerAddress = message.ownerAddress);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.bucketId !== undefined && (obj.bucketId = message.bucketId);
    message.primarySpAddress !== undefined && (obj.primarySpAddress = message.primarySpAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventDeleteBucket>, I>>(object: I): EventDeleteBucket {
    const message = createBaseEventDeleteBucket();
    message.operatorAddress = object.operatorAddress ?? "";
    message.ownerAddress = object.ownerAddress ?? "";
    message.bucketName = object.bucketName ?? "";
    message.bucketId = object.bucketId ?? "";
    message.primarySpAddress = object.primarySpAddress ?? "";
    return message;
  },

  fromSDK(object: EventDeleteBucketSDKType): EventDeleteBucket {
    return {
      operatorAddress: object?.operator_address,
      ownerAddress: object?.owner_address,
      bucketName: object?.bucket_name,
      bucketId: object?.bucket_id,
      primarySpAddress: object?.primary_sp_address
    };
  },

  toSDK(message: EventDeleteBucket): EventDeleteBucketSDKType {
    const obj: any = {};
    obj.operator_address = message.operatorAddress;
    obj.owner_address = message.ownerAddress;
    obj.bucket_name = message.bucketName;
    obj.bucket_id = message.bucketId;
    obj.primary_sp_address = message.primarySpAddress;
    return obj;
  }

};

function createBaseEventUpdateBucketInfo(): EventUpdateBucketInfo {
  return {
    operatorAddress: "",
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
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
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
          message.operatorAddress = reader.string();
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
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : "",
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
    message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
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
    message.operatorAddress = object.operatorAddress ?? "";
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
      operatorAddress: object?.operator_address,
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
    obj.operator_address = message.operatorAddress;
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

function createBaseEventCreateObject(): EventCreateObject {
  return {
    creatorAddress: "",
    ownerAddress: "",
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
    if (message.creatorAddress !== "") {
      writer.uint32(10).string(message.creatorAddress);
    }

    if (message.ownerAddress !== "") {
      writer.uint32(18).string(message.ownerAddress);
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
          message.creatorAddress = reader.string();
          break;

        case 2:
          message.ownerAddress = reader.string();
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
      creatorAddress: isSet(object.creatorAddress) ? String(object.creatorAddress) : "",
      ownerAddress: isSet(object.ownerAddress) ? String(object.ownerAddress) : "",
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
    message.creatorAddress !== undefined && (obj.creatorAddress = message.creatorAddress);
    message.ownerAddress !== undefined && (obj.ownerAddress = message.ownerAddress);
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
    message.creatorAddress = object.creatorAddress ?? "";
    message.ownerAddress = object.ownerAddress ?? "";
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
      creatorAddress: object?.creator_address,
      ownerAddress: object?.owner_address,
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
    obj.creator_address = message.creatorAddress;
    obj.owner_address = message.ownerAddress;
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
    operatorAddress: "",
    bucketName: "",
    objectName: "",
    primarySpAddress: "",
    objectId: ""
  };
}

export const EventCancelCreateObject = {
  encode(message: EventCancelCreateObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
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
          message.operatorAddress = reader.string();
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
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      objectName: isSet(object.objectName) ? String(object.objectName) : "",
      primarySpAddress: isSet(object.primarySpAddress) ? String(object.primarySpAddress) : "",
      objectId: isSet(object.objectId) ? String(object.objectId) : ""
    };
  },

  toJSON(message: EventCancelCreateObject): unknown {
    const obj: any = {};
    message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.objectName !== undefined && (obj.objectName = message.objectName);
    message.primarySpAddress !== undefined && (obj.primarySpAddress = message.primarySpAddress);
    message.objectId !== undefined && (obj.objectId = message.objectId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCancelCreateObject>, I>>(object: I): EventCancelCreateObject {
    const message = createBaseEventCancelCreateObject();
    message.operatorAddress = object.operatorAddress ?? "";
    message.bucketName = object.bucketName ?? "";
    message.objectName = object.objectName ?? "";
    message.primarySpAddress = object.primarySpAddress ?? "";
    message.objectId = object.objectId ?? "";
    return message;
  },

  fromSDK(object: EventCancelCreateObjectSDKType): EventCancelCreateObject {
    return {
      operatorAddress: object?.operator_address,
      bucketName: object?.bucket_name,
      objectName: object?.object_name,
      primarySpAddress: object?.primary_sp_address,
      objectId: object?.object_id
    };
  },

  toSDK(message: EventCancelCreateObject): EventCancelCreateObjectSDKType {
    const obj: any = {};
    obj.operator_address = message.operatorAddress;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    obj.primary_sp_address = message.primarySpAddress;
    obj.object_id = message.objectId;
    return obj;
  }

};

function createBaseEventSealObject(): EventSealObject {
  return {
    operatorAddress: "",
    bucketName: "",
    objectName: "",
    objectId: "",
    status: 0,
    secondarySpAddresses: []
  };
}

export const EventSealObject = {
  encode(message: EventSealObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
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
          message.operatorAddress = reader.string();
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
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      objectName: isSet(object.objectName) ? String(object.objectName) : "",
      objectId: isSet(object.objectId) ? String(object.objectId) : "",
      status: isSet(object.status) ? objectStatusFromJSON(object.status) : 0,
      secondarySpAddresses: Array.isArray(object?.secondarySpAddresses) ? object.secondarySpAddresses.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: EventSealObject): unknown {
    const obj: any = {};
    message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
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
    message.operatorAddress = object.operatorAddress ?? "";
    message.bucketName = object.bucketName ?? "";
    message.objectName = object.objectName ?? "";
    message.objectId = object.objectId ?? "";
    message.status = object.status ?? 0;
    message.secondarySpAddresses = object.secondarySpAddresses?.map(e => e) || [];
    return message;
  },

  fromSDK(object: EventSealObjectSDKType): EventSealObject {
    return {
      operatorAddress: object?.operator_address,
      bucketName: object?.bucket_name,
      objectName: object?.object_name,
      objectId: object?.object_id,
      status: isSet(object.status) ? objectStatusFromJSON(object.status) : 0,
      secondarySpAddresses: Array.isArray(object?.secondary_sp_addresses) ? object.secondary_sp_addresses.map((e: any) => e) : []
    };
  },

  toSDK(message: EventSealObject): EventSealObjectSDKType {
    const obj: any = {};
    obj.operator_address = message.operatorAddress;
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
    operatorAddress: "",
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
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
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
          message.operatorAddress = reader.string();
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
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : "",
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
    message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
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
    message.operatorAddress = object.operatorAddress ?? "";
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
      operatorAddress: object?.operator_address,
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
    obj.operator_address = message.operatorAddress;
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
    operatorAddress: "",
    bucketName: "",
    objectName: "",
    objectId: "",
    primarySpAddress: "",
    secondarySpAddresses: []
  };
}

export const EventDeleteObject = {
  encode(message: EventDeleteObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
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
          message.operatorAddress = reader.string();
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
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      objectName: isSet(object.objectName) ? String(object.objectName) : "",
      objectId: isSet(object.objectId) ? String(object.objectId) : "",
      primarySpAddress: isSet(object.primarySpAddress) ? String(object.primarySpAddress) : "",
      secondarySpAddresses: Array.isArray(object?.secondarySpAddresses) ? object.secondarySpAddresses.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: EventDeleteObject): unknown {
    const obj: any = {};
    message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
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
    message.operatorAddress = object.operatorAddress ?? "";
    message.bucketName = object.bucketName ?? "";
    message.objectName = object.objectName ?? "";
    message.objectId = object.objectId ?? "";
    message.primarySpAddress = object.primarySpAddress ?? "";
    message.secondarySpAddresses = object.secondarySpAddresses?.map(e => e) || [];
    return message;
  },

  fromSDK(object: EventDeleteObjectSDKType): EventDeleteObject {
    return {
      operatorAddress: object?.operator_address,
      bucketName: object?.bucket_name,
      objectName: object?.object_name,
      objectId: object?.object_id,
      primarySpAddress: object?.primary_sp_address,
      secondarySpAddresses: Array.isArray(object?.secondary_sp_addresses) ? object.secondary_sp_addresses.map((e: any) => e) : []
    };
  },

  toSDK(message: EventDeleteObject): EventDeleteObjectSDKType {
    const obj: any = {};
    obj.operator_address = message.operatorAddress;
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
    operatorAddress: "",
    bucketName: "",
    objectName: "",
    objectId: ""
  };
}

export const EventRejectSealObject = {
  encode(message: EventRejectSealObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
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
          message.operatorAddress = reader.string();
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
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      objectName: isSet(object.objectName) ? String(object.objectName) : "",
      objectId: isSet(object.objectId) ? String(object.objectId) : ""
    };
  },

  toJSON(message: EventRejectSealObject): unknown {
    const obj: any = {};
    message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.objectName !== undefined && (obj.objectName = message.objectName);
    message.objectId !== undefined && (obj.objectId = message.objectId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventRejectSealObject>, I>>(object: I): EventRejectSealObject {
    const message = createBaseEventRejectSealObject();
    message.operatorAddress = object.operatorAddress ?? "";
    message.bucketName = object.bucketName ?? "";
    message.objectName = object.objectName ?? "";
    message.objectId = object.objectId ?? "";
    return message;
  },

  fromSDK(object: EventRejectSealObjectSDKType): EventRejectSealObject {
    return {
      operatorAddress: object?.operator_address,
      bucketName: object?.bucket_name,
      objectName: object?.object_name,
      objectId: object?.object_id
    };
  },

  toSDK(message: EventRejectSealObject): EventRejectSealObjectSDKType {
    const obj: any = {};
    obj.operator_address = message.operatorAddress;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    obj.object_id = message.objectId;
    return obj;
  }

};

function createBaseEventCreateGroup(): EventCreateGroup {
  return {
    ownerAddress: "",
    groupName: "",
    groupId: "",
    sourceType: 0,
    members: []
  };
}

export const EventCreateGroup = {
  encode(message: EventCreateGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ownerAddress !== "") {
      writer.uint32(10).string(message.ownerAddress);
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
          message.ownerAddress = reader.string();
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

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventCreateGroup {
    return {
      ownerAddress: isSet(object.ownerAddress) ? String(object.ownerAddress) : "",
      groupName: isSet(object.groupName) ? String(object.groupName) : "",
      groupId: isSet(object.groupId) ? String(object.groupId) : "",
      sourceType: isSet(object.sourceType) ? sourceTypeFromJSON(object.sourceType) : 0,
      members: Array.isArray(object?.members) ? object.members.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: EventCreateGroup): unknown {
    const obj: any = {};
    message.ownerAddress !== undefined && (obj.ownerAddress = message.ownerAddress);
    message.groupName !== undefined && (obj.groupName = message.groupName);
    message.groupId !== undefined && (obj.groupId = message.groupId);
    message.sourceType !== undefined && (obj.sourceType = sourceTypeToJSON(message.sourceType));

    if (message.members) {
      obj.members = message.members.map(e => e);
    } else {
      obj.members = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCreateGroup>, I>>(object: I): EventCreateGroup {
    const message = createBaseEventCreateGroup();
    message.ownerAddress = object.ownerAddress ?? "";
    message.groupName = object.groupName ?? "";
    message.groupId = object.groupId ?? "";
    message.sourceType = object.sourceType ?? 0;
    message.members = object.members?.map(e => e) || [];
    return message;
  },

  fromSDK(object: EventCreateGroupSDKType): EventCreateGroup {
    return {
      ownerAddress: object?.owner_address,
      groupName: object?.group_name,
      groupId: object?.group_id,
      sourceType: isSet(object.source_type) ? sourceTypeFromJSON(object.source_type) : 0,
      members: Array.isArray(object?.members) ? object.members.map((e: any) => e) : []
    };
  },

  toSDK(message: EventCreateGroup): EventCreateGroupSDKType {
    const obj: any = {};
    obj.owner_address = message.ownerAddress;
    obj.group_name = message.groupName;
    obj.group_id = message.groupId;
    message.sourceType !== undefined && (obj.source_type = sourceTypeToJSON(message.sourceType));

    if (message.members) {
      obj.members = message.members.map(e => e);
    } else {
      obj.members = [];
    }

    return obj;
  }

};

function createBaseEventDeleteGroup(): EventDeleteGroup {
  return {
    ownerAddress: "",
    groupName: "",
    groupId: ""
  };
}

export const EventDeleteGroup = {
  encode(message: EventDeleteGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ownerAddress !== "") {
      writer.uint32(18).string(message.ownerAddress);
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
          message.ownerAddress = reader.string();
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
      ownerAddress: isSet(object.ownerAddress) ? String(object.ownerAddress) : "",
      groupName: isSet(object.groupName) ? String(object.groupName) : "",
      groupId: isSet(object.groupId) ? String(object.groupId) : ""
    };
  },

  toJSON(message: EventDeleteGroup): unknown {
    const obj: any = {};
    message.ownerAddress !== undefined && (obj.ownerAddress = message.ownerAddress);
    message.groupName !== undefined && (obj.groupName = message.groupName);
    message.groupId !== undefined && (obj.groupId = message.groupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventDeleteGroup>, I>>(object: I): EventDeleteGroup {
    const message = createBaseEventDeleteGroup();
    message.ownerAddress = object.ownerAddress ?? "";
    message.groupName = object.groupName ?? "";
    message.groupId = object.groupId ?? "";
    return message;
  },

  fromSDK(object: EventDeleteGroupSDKType): EventDeleteGroup {
    return {
      ownerAddress: object?.owner_address,
      groupName: object?.group_name,
      groupId: object?.group_id
    };
  },

  toSDK(message: EventDeleteGroup): EventDeleteGroupSDKType {
    const obj: any = {};
    obj.owner_address = message.ownerAddress;
    obj.group_name = message.groupName;
    obj.group_id = message.groupId;
    return obj;
  }

};

function createBaseEventLeaveGroup(): EventLeaveGroup {
  return {
    memberAddress: "",
    ownerAddress: "",
    groupName: "",
    groupId: ""
  };
}

export const EventLeaveGroup = {
  encode(message: EventLeaveGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.memberAddress !== "") {
      writer.uint32(10).string(message.memberAddress);
    }

    if (message.ownerAddress !== "") {
      writer.uint32(18).string(message.ownerAddress);
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
          message.ownerAddress = reader.string();
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
      ownerAddress: isSet(object.ownerAddress) ? String(object.ownerAddress) : "",
      groupName: isSet(object.groupName) ? String(object.groupName) : "",
      groupId: isSet(object.groupId) ? String(object.groupId) : ""
    };
  },

  toJSON(message: EventLeaveGroup): unknown {
    const obj: any = {};
    message.memberAddress !== undefined && (obj.memberAddress = message.memberAddress);
    message.ownerAddress !== undefined && (obj.ownerAddress = message.ownerAddress);
    message.groupName !== undefined && (obj.groupName = message.groupName);
    message.groupId !== undefined && (obj.groupId = message.groupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventLeaveGroup>, I>>(object: I): EventLeaveGroup {
    const message = createBaseEventLeaveGroup();
    message.memberAddress = object.memberAddress ?? "";
    message.ownerAddress = object.ownerAddress ?? "";
    message.groupName = object.groupName ?? "";
    message.groupId = object.groupId ?? "";
    return message;
  },

  fromSDK(object: EventLeaveGroupSDKType): EventLeaveGroup {
    return {
      memberAddress: object?.member_address,
      ownerAddress: object?.owner_address,
      groupName: object?.group_name,
      groupId: object?.group_id
    };
  },

  toSDK(message: EventLeaveGroup): EventLeaveGroupSDKType {
    const obj: any = {};
    obj.member_address = message.memberAddress;
    obj.owner_address = message.ownerAddress;
    obj.group_name = message.groupName;
    obj.group_id = message.groupId;
    return obj;
  }

};

function createBaseEventUpdateGroupMember(): EventUpdateGroupMember {
  return {
    operatorAddress: "",
    ownerAddress: "",
    groupName: "",
    groupId: "",
    membersToAdd: [],
    membersToDelete: []
  };
}

export const EventUpdateGroupMember = {
  encode(message: EventUpdateGroupMember, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }

    if (message.ownerAddress !== "") {
      writer.uint32(18).string(message.ownerAddress);
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
          message.operatorAddress = reader.string();
          break;

        case 2:
          message.ownerAddress = reader.string();
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
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : "",
      ownerAddress: isSet(object.ownerAddress) ? String(object.ownerAddress) : "",
      groupName: isSet(object.groupName) ? String(object.groupName) : "",
      groupId: isSet(object.groupId) ? String(object.groupId) : "",
      membersToAdd: Array.isArray(object?.membersToAdd) ? object.membersToAdd.map((e: any) => String(e)) : [],
      membersToDelete: Array.isArray(object?.membersToDelete) ? object.membersToDelete.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: EventUpdateGroupMember): unknown {
    const obj: any = {};
    message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
    message.ownerAddress !== undefined && (obj.ownerAddress = message.ownerAddress);
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
    message.operatorAddress = object.operatorAddress ?? "";
    message.ownerAddress = object.ownerAddress ?? "";
    message.groupName = object.groupName ?? "";
    message.groupId = object.groupId ?? "";
    message.membersToAdd = object.membersToAdd?.map(e => e) || [];
    message.membersToDelete = object.membersToDelete?.map(e => e) || [];
    return message;
  },

  fromSDK(object: EventUpdateGroupMemberSDKType): EventUpdateGroupMember {
    return {
      operatorAddress: object?.operator_address,
      ownerAddress: object?.owner_address,
      groupName: object?.group_name,
      groupId: object?.group_id,
      membersToAdd: Array.isArray(object?.members_to_add) ? object.members_to_add.map((e: any) => e) : [],
      membersToDelete: Array.isArray(object?.members_to_delete) ? object.members_to_delete.map((e: any) => e) : []
    };
  },

  toSDK(message: EventUpdateGroupMember): EventUpdateGroupMemberSDKType {
    const obj: any = {};
    obj.operator_address = message.operatorAddress;
    obj.owner_address = message.ownerAddress;
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

function createBaseEventMirrorBucket(): EventMirrorBucket {
  return {
    operatorAddress: "",
    bucketName: "",
    bucketId: ""
  };
}

export const EventMirrorBucket = {
  encode(message: EventMirrorBucket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
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
          message.operatorAddress = reader.string();
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
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      bucketId: isSet(object.bucketId) ? String(object.bucketId) : ""
    };
  },

  toJSON(message: EventMirrorBucket): unknown {
    const obj: any = {};
    message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.bucketId !== undefined && (obj.bucketId = message.bucketId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventMirrorBucket>, I>>(object: I): EventMirrorBucket {
    const message = createBaseEventMirrorBucket();
    message.operatorAddress = object.operatorAddress ?? "";
    message.bucketName = object.bucketName ?? "";
    message.bucketId = object.bucketId ?? "";
    return message;
  },

  fromSDK(object: EventMirrorBucketSDKType): EventMirrorBucket {
    return {
      operatorAddress: object?.operator_address,
      bucketName: object?.bucket_name,
      bucketId: object?.bucket_id
    };
  },

  toSDK(message: EventMirrorBucket): EventMirrorBucketSDKType {
    const obj: any = {};
    obj.operator_address = message.operatorAddress;
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
    operatorAddress: "",
    bucketName: "",
    objectName: "",
    objectId: ""
  };
}

export const EventMirrorObject = {
  encode(message: EventMirrorObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
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
          message.operatorAddress = reader.string();
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
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      objectName: isSet(object.objectName) ? String(object.objectName) : "",
      objectId: isSet(object.objectId) ? String(object.objectId) : ""
    };
  },

  toJSON(message: EventMirrorObject): unknown {
    const obj: any = {};
    message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.objectName !== undefined && (obj.objectName = message.objectName);
    message.objectId !== undefined && (obj.objectId = message.objectId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventMirrorObject>, I>>(object: I): EventMirrorObject {
    const message = createBaseEventMirrorObject();
    message.operatorAddress = object.operatorAddress ?? "";
    message.bucketName = object.bucketName ?? "";
    message.objectName = object.objectName ?? "";
    message.objectId = object.objectId ?? "";
    return message;
  },

  fromSDK(object: EventMirrorObjectSDKType): EventMirrorObject {
    return {
      operatorAddress: object?.operator_address,
      bucketName: object?.bucket_name,
      objectName: object?.object_name,
      objectId: object?.object_id
    };
  },

  toSDK(message: EventMirrorObject): EventMirrorObjectSDKType {
    const obj: any = {};
    obj.operator_address = message.operatorAddress;
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
    ownerAddress: "",
    groupName: "",
    groupId: ""
  };
}

export const EventMirrorGroup = {
  encode(message: EventMirrorGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ownerAddress !== "") {
      writer.uint32(10).string(message.ownerAddress);
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
          message.ownerAddress = reader.string();
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
      ownerAddress: isSet(object.ownerAddress) ? String(object.ownerAddress) : "",
      groupName: isSet(object.groupName) ? String(object.groupName) : "",
      groupId: isSet(object.groupId) ? String(object.groupId) : ""
    };
  },

  toJSON(message: EventMirrorGroup): unknown {
    const obj: any = {};
    message.ownerAddress !== undefined && (obj.ownerAddress = message.ownerAddress);
    message.groupName !== undefined && (obj.groupName = message.groupName);
    message.groupId !== undefined && (obj.groupId = message.groupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventMirrorGroup>, I>>(object: I): EventMirrorGroup {
    const message = createBaseEventMirrorGroup();
    message.ownerAddress = object.ownerAddress ?? "";
    message.groupName = object.groupName ?? "";
    message.groupId = object.groupId ?? "";
    return message;
  },

  fromSDK(object: EventMirrorGroupSDKType): EventMirrorGroup {
    return {
      ownerAddress: object?.owner_address,
      groupName: object?.group_name,
      groupId: object?.group_id
    };
  },

  toSDK(message: EventMirrorGroup): EventMirrorGroupSDKType {
    const obj: any = {};
    obj.owner_address = message.ownerAddress;
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