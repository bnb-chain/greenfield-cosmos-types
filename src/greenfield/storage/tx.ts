/* eslint-disable */
import { Approval, ApprovalSDKType, RedundancyType, redundancyTypeFromJSON, redundancyTypeToJSON } from "./common";
import { Principal, PrincipalSDKType, Statement, StatementSDKType } from "../permission/common";
import { Long, isSet, DeepPartial, Exact, bytesFromBase64, base64FromBytes, Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "bnbchain.greenfield.storage";
export interface MsgCreateBucket {
  /** creator is the account address of bucket creator, it is also the bucket owner. */
  creator: string;
  /** bucket_name is a globally unique name of bucket */

  bucketName: string;
  /**
   * is_public means the bucket is private or public. if private, only bucket owner or grantee can read it,
   * otherwise every greenfield user can read it.
   */

  isPublic: boolean;
  /** payment_address is an account address specified by bucket owner to pay the read fee. Default: creator */

  paymentAddress: string;
  /** primary_sp_address is the address of primary sp. */

  primarySpAddress: string;
  /** primary_sp_approval is the approval info of the primary SP which indicates that primary sp confirm the user's request. */

  primarySpApproval?: Approval;
  /** read_quota */

  readQuota: Long;
}
export interface MsgCreateBucketSDKType {
  creator: string;
  bucket_name: string;
  is_public: boolean;
  payment_address: string;
  primary_sp_address: string;
  primary_sp_approval?: ApprovalSDKType;
  read_quota: Long;
}
export interface MsgCreateBucketResponse {
  bucketId: string;
}
export interface MsgCreateBucketResponseSDKType {
  bucket_id: string;
}
export interface MsgDeleteBucket {
  /** creator is the account address of the grantee who has the DeleteBucket permission of the bucket to be deleted. */
  operator: string;
  /** bucket_name is the name of the bucket to be deleted. */

  bucketName: string;
}
export interface MsgDeleteBucketSDKType {
  operator: string;
  bucket_name: string;
}
export interface MsgDeleteBucketResponse {}
export interface MsgDeleteBucketResponseSDKType {}
export interface MsgCreateObject {
  /** creator is the account address of object uploader */
  creator: string;
  /** bucket_name is the name of the bucket where the object is stored. */

  bucketName: string;
  /** object_name is the name of object */

  objectName: string;
  /** payload_size is size of the object's payload */

  payloadSize: Long;
  /**
   * is_public means the bucket is private or public. if private, only bucket owner or grantee can access it,
   * otherwise every greenfield user can access it.
   */

  isPublic: boolean;
  /** content_type is a standard MIME type describing the format of the object. */

  contentType: string;
  /** primary_sp_approval is the approval info of the primary SP which indicates that primary sp confirm the user's request. */

  primarySpApproval?: Approval;
  /** expect_checksums is a list of hashes which was generate by redundancy algorithm. */

  expectChecksums: Uint8Array[];
  /** redundancy_type can be ec or replica */

  redundancyType: RedundancyType;
  /** expect_secondarySPs is a list of StorageProvider address, which is optional */

  expectSecondarySpAddresses: string[];
}
export interface MsgCreateObjectSDKType {
  creator: string;
  bucket_name: string;
  object_name: string;
  payload_size: Long;
  is_public: boolean;
  content_type: string;
  primary_sp_approval?: ApprovalSDKType;
  expect_checksums: Uint8Array[];
  redundancy_type: RedundancyType;
  expect_secondary_sp_addresses: string[];
}
export interface MsgCreateObjectResponse {
  objectId: string;
}
export interface MsgCreateObjectResponseSDKType {
  object_id: string;
}
export interface MsgSealObject {
  /** operator is the account address of primary SP */
  operator: string;
  /** bucket_name is the name of the bucket where the object is stored. */

  bucketName: string;
  /** object_name is the name of object to be sealed. */

  objectName: string;
  /** secondary_sp_addresses is a list of storage provider which store the redundant data. */

  secondarySpAddresses: string[];
  /**
   * secondary_sp_signatures is the signature of the secondary sp that can
   * acknowledge that the payload data has received and stored.
   */

  secondarySpSignatures: Uint8Array[];
}
export interface MsgSealObjectSDKType {
  operator: string;
  bucket_name: string;
  object_name: string;
  secondary_sp_addresses: string[];
  secondary_sp_signatures: Uint8Array[];
}
export interface MsgSealObjectResponse {}
export interface MsgSealObjectResponseSDKType {}
export interface MsgRejectSealObject {
  /** operator is the account address of the object owner */
  operator: string;
  /** bucket_name is the name of the bucket where the object is stored. */

  bucketName: string;
  /** object_name is the name of unsealed object to be reject. */

  objectName: string;
}
export interface MsgRejectSealObjectSDKType {
  operator: string;
  bucket_name: string;
  object_name: string;
}
export interface MsgRejectSealObjectResponse {}
export interface MsgRejectSealObjectResponseSDKType {}
export interface MsgCopyObject {
  /** operator is the account address of the operator who has the CopyObject permission of the object to be deleted. */
  operator: string;
  /** src_bucket_name is the name of the bucket where the object to be copied is located */

  srcBucketName: string;
  /** dst_bucket_name is the name of the bucket where the object is copied to. */

  dstBucketName: string;
  /** src_object_name is the name of the object which to be copied */

  srcObjectName: string;
  /** dst_object_name is the name of the object which is copied to */

  dstObjectName: string;
  /** primary_sp_approval is the approval info of the primary SP which indicates that primary sp confirm the user's request. */

  dstPrimarySpApproval?: Approval;
}
export interface MsgCopyObjectSDKType {
  operator: string;
  src_bucket_name: string;
  dst_bucket_name: string;
  src_object_name: string;
  dst_object_name: string;
  dst_primary_sp_approval?: ApprovalSDKType;
}
export interface MsgCopyObjectResponse {
  objectId: string;
}
export interface MsgCopyObjectResponseSDKType {
  object_id: string;
}
export interface MsgDeleteObject {
  /** operator is the account address of the operator who has the DeleteObject permission of the object to be deleted. */
  operator: string;
  /** bucket_name is the name of the bucket where the object which to be deleted is stored. */

  bucketName: string;
  /** object_name is the name of the object which to be deleted. */

  objectName: string;
}
export interface MsgDeleteObjectSDKType {
  operator: string;
  bucket_name: string;
  object_name: string;
}
export interface MsgDeleteObjectResponse {}
export interface MsgDeleteObjectResponseSDKType {}
export interface MsgCreateGroup {
  /** owner is the account address of group owner who create the group */
  creator: string;
  /** group_name is the name of the group. it's not globally unique. */

  groupName: string;
  /** member_request is a list of member which to be add or remove */

  members: string[];
}
export interface MsgCreateGroupSDKType {
  creator: string;
  group_name: string;
  members: string[];
}
export interface MsgCreateGroupResponse {
  groupId: string;
}
export interface MsgCreateGroupResponseSDKType {
  group_id: string;
}
export interface MsgDeleteGroup {
  /** operator is the account address of the operator who has the DeleteGroup permission of the group to be deleted. */
  operator: string;
  /** group_name is the name of the group which to be deleted */

  groupName: string;
}
export interface MsgDeleteGroupSDKType {
  operator: string;
  group_name: string;
}
export interface MsgDeleteGroupResponse {}
export interface MsgDeleteGroupResponseSDKType {}
export interface MsgUpdateGroupMember {
  /** operator is the account address of the operator who has the UpdateGroupMember permission of the group. */
  operator: string;
  /** group_name is the name of the group which to be updated */

  groupName: string;
  /** members_to_add is a list of members account address which will be add to the group */

  membersToAdd: string[];
  /** members_to_delete is a list of members account address which will be remove from the group */

  membersToDelete: string[];
}
export interface MsgUpdateGroupMemberSDKType {
  operator: string;
  group_name: string;
  members_to_add: string[];
  members_to_delete: string[];
}
export interface MsgUpdateGroupMemberResponse {}
export interface MsgUpdateGroupMemberResponseSDKType {}
export interface MsgLeaveGroup {
  /** member is the account address of the member who want to leave the group */
  member: string;
  /** group_owner is the owner of the group you want to leave */

  groupOwner: string;
  /** group_name is the name of the group you want to leave */

  groupName: string;
}
export interface MsgLeaveGroupSDKType {
  member: string;
  group_owner: string;
  group_name: string;
}
export interface MsgLeaveGroupResponse {}
export interface MsgLeaveGroupResponseSDKType {}
export interface MsgUpdateBucketInfo {
  /** operator is the account address of the operator */
  operator: string;
  /** bucket_name is the name of bucket which you'll update */

  bucketName: string;
  /** read_quota is the traffic quota that you read from primary sp */

  readQuota: Long;
  /** payment_address is the account address of the payment account */

  paymentAddress: string;
}
export interface MsgUpdateBucketInfoSDKType {
  operator: string;
  bucket_name: string;
  read_quota: Long;
  payment_address: string;
}
export interface MsgUpdateBucketInfoResponse {}
export interface MsgUpdateBucketInfoResponseSDKType {}
export interface MsgCancelCreateObject {
  /** operator is the account address of the operator */
  operator: string;
  /** bucket_name is the name of the bucket */

  bucketName: string;
  /** object_name is the name of the object */

  objectName: string;
}
export interface MsgCancelCreateObjectSDKType {
  operator: string;
  bucket_name: string;
  object_name: string;
}
export interface MsgCancelCreateObjectResponse {}
export interface MsgCancelCreateObjectResponseSDKType {}
export interface MsgPutPolicy {
  /** operator defines the granter who grant the permission to another principal */
  operator: string;
  /** Principal define the roles that can grant permissions. Currently, it can be account or group. */

  principal?: Principal;
  /** resource define a greenfield standard resource name that can be generated by GRN structure */

  resource: string;
  /** statements define a list of individual statement which describe the detail rules of policy */

  statements: Statement[];
}
export interface MsgPutPolicySDKType {
  operator: string;
  principal?: PrincipalSDKType;
  resource: string;
  statements: StatementSDKType[];
}
export interface MsgPutPolicyResponse {
  id: string;
}
export interface MsgPutPolicyResponseSDKType {
  id: string;
}
export interface MsgDeletePolicy {
  /** operator defines the granter who grant the permission to another principal */
  operator: string;
  /** Principal define the roles that can grant permissions. Currently, it can be account or group. */

  principal?: Principal;
  /** resource define a greenfield standard resource name that can be generated by GRN structure */

  resource: string;
}
export interface MsgDeletePolicySDKType {
  operator: string;
  principal?: PrincipalSDKType;
  resource: string;
}
export interface MsgDeletePolicyResponse {
  id: string;
}
export interface MsgDeletePolicyResponseSDKType {
  id: string;
}

function createBaseMsgCreateBucket(): MsgCreateBucket {
  return {
    creator: "",
    bucketName: "",
    isPublic: false,
    paymentAddress: "",
    primarySpAddress: "",
    primarySpApproval: undefined,
    readQuota: Long.UZERO
  };
}

export const MsgCreateBucket = {
  encode(message: MsgCreateBucket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }

    if (message.isPublic === true) {
      writer.uint32(24).bool(message.isPublic);
    }

    if (message.paymentAddress !== "") {
      writer.uint32(34).string(message.paymentAddress);
    }

    if (message.primarySpAddress !== "") {
      writer.uint32(50).string(message.primarySpAddress);
    }

    if (message.primarySpApproval !== undefined) {
      Approval.encode(message.primarySpApproval, writer.uint32(58).fork()).ldelim();
    }

    if (!message.readQuota.isZero()) {
      writer.uint32(64).uint64(message.readQuota);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBucket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBucket();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.bucketName = reader.string();
          break;

        case 3:
          message.isPublic = reader.bool();
          break;

        case 4:
          message.paymentAddress = reader.string();
          break;

        case 6:
          message.primarySpAddress = reader.string();
          break;

        case 7:
          message.primarySpApproval = Approval.decode(reader, reader.uint32());
          break;

        case 8:
          message.readQuota = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateBucket {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      isPublic: isSet(object.isPublic) ? Boolean(object.isPublic) : false,
      paymentAddress: isSet(object.paymentAddress) ? String(object.paymentAddress) : "",
      primarySpAddress: isSet(object.primarySpAddress) ? String(object.primarySpAddress) : "",
      primarySpApproval: isSet(object.primarySpApproval) ? Approval.fromJSON(object.primarySpApproval) : undefined,
      readQuota: isSet(object.readQuota) ? Long.fromValue(object.readQuota) : Long.UZERO
    };
  },

  toJSON(message: MsgCreateBucket): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.isPublic !== undefined && (obj.isPublic = message.isPublic);
    message.paymentAddress !== undefined && (obj.paymentAddress = message.paymentAddress);
    message.primarySpAddress !== undefined && (obj.primarySpAddress = message.primarySpAddress);
    message.primarySpApproval !== undefined && (obj.primarySpApproval = message.primarySpApproval ? Approval.toJSON(message.primarySpApproval) : undefined);
    message.readQuota !== undefined && (obj.readQuota = (message.readQuota || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateBucket>, I>>(object: I): MsgCreateBucket {
    const message = createBaseMsgCreateBucket();
    message.creator = object.creator ?? "";
    message.bucketName = object.bucketName ?? "";
    message.isPublic = object.isPublic ?? false;
    message.paymentAddress = object.paymentAddress ?? "";
    message.primarySpAddress = object.primarySpAddress ?? "";
    message.primarySpApproval = object.primarySpApproval !== undefined && object.primarySpApproval !== null ? Approval.fromPartial(object.primarySpApproval) : undefined;
    message.readQuota = object.readQuota !== undefined && object.readQuota !== null ? Long.fromValue(object.readQuota) : Long.UZERO;
    return message;
  },

  fromSDK(object: MsgCreateBucketSDKType): MsgCreateBucket {
    return {
      creator: object?.creator,
      bucketName: object?.bucket_name,
      isPublic: object?.is_public,
      paymentAddress: object?.payment_address,
      primarySpAddress: object?.primary_sp_address,
      primarySpApproval: object.primary_sp_approval ? Approval.fromSDK(object.primary_sp_approval) : undefined,
      readQuota: object?.read_quota
    };
  },

  toSDK(message: MsgCreateBucket): MsgCreateBucketSDKType {
    const obj: any = {};
    obj.creator = message.creator;
    obj.bucket_name = message.bucketName;
    obj.is_public = message.isPublic;
    obj.payment_address = message.paymentAddress;
    obj.primary_sp_address = message.primarySpAddress;
    message.primarySpApproval !== undefined && (obj.primary_sp_approval = message.primarySpApproval ? Approval.toSDK(message.primarySpApproval) : undefined);
    obj.read_quota = message.readQuota;
    return obj;
  }

};

function createBaseMsgCreateBucketResponse(): MsgCreateBucketResponse {
  return {
    bucketId: ""
  };
}

export const MsgCreateBucketResponse = {
  encode(message: MsgCreateBucketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bucketId !== "") {
      writer.uint32(10).string(message.bucketId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBucketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBucketResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bucketId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateBucketResponse {
    return {
      bucketId: isSet(object.bucketId) ? String(object.bucketId) : ""
    };
  },

  toJSON(message: MsgCreateBucketResponse): unknown {
    const obj: any = {};
    message.bucketId !== undefined && (obj.bucketId = message.bucketId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateBucketResponse>, I>>(object: I): MsgCreateBucketResponse {
    const message = createBaseMsgCreateBucketResponse();
    message.bucketId = object.bucketId ?? "";
    return message;
  },

  fromSDK(object: MsgCreateBucketResponseSDKType): MsgCreateBucketResponse {
    return {
      bucketId: object?.bucket_id
    };
  },

  toSDK(message: MsgCreateBucketResponse): MsgCreateBucketResponseSDKType {
    const obj: any = {};
    obj.bucket_id = message.bucketId;
    return obj;
  }

};

function createBaseMsgDeleteBucket(): MsgDeleteBucket {
  return {
    operator: "",
    bucketName: ""
  };
}

export const MsgDeleteBucket = {
  encode(message: MsgDeleteBucket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }

    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteBucket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteBucket();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;

        case 2:
          message.bucketName = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgDeleteBucket {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : ""
    };
  },

  toJSON(message: MsgDeleteBucket): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteBucket>, I>>(object: I): MsgDeleteBucket {
    const message = createBaseMsgDeleteBucket();
    message.operator = object.operator ?? "";
    message.bucketName = object.bucketName ?? "";
    return message;
  },

  fromSDK(object: MsgDeleteBucketSDKType): MsgDeleteBucket {
    return {
      operator: object?.operator,
      bucketName: object?.bucket_name
    };
  },

  toSDK(message: MsgDeleteBucket): MsgDeleteBucketSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    return obj;
  }

};

function createBaseMsgDeleteBucketResponse(): MsgDeleteBucketResponse {
  return {};
}

export const MsgDeleteBucketResponse = {
  encode(_: MsgDeleteBucketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteBucketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteBucketResponse();

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

  fromJSON(_: any): MsgDeleteBucketResponse {
    return {};
  },

  toJSON(_: MsgDeleteBucketResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteBucketResponse>, I>>(_: I): MsgDeleteBucketResponse {
    const message = createBaseMsgDeleteBucketResponse();
    return message;
  },

  fromSDK(_: MsgDeleteBucketResponseSDKType): MsgDeleteBucketResponse {
    return {};
  },

  toSDK(_: MsgDeleteBucketResponse): MsgDeleteBucketResponseSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgCreateObject(): MsgCreateObject {
  return {
    creator: "",
    bucketName: "",
    objectName: "",
    payloadSize: Long.UZERO,
    isPublic: false,
    contentType: "",
    primarySpApproval: undefined,
    expectChecksums: [],
    redundancyType: 0,
    expectSecondarySpAddresses: []
  };
}

export const MsgCreateObject = {
  encode(message: MsgCreateObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }

    if (message.objectName !== "") {
      writer.uint32(26).string(message.objectName);
    }

    if (!message.payloadSize.isZero()) {
      writer.uint32(32).uint64(message.payloadSize);
    }

    if (message.isPublic === true) {
      writer.uint32(40).bool(message.isPublic);
    }

    if (message.contentType !== "") {
      writer.uint32(50).string(message.contentType);
    }

    if (message.primarySpApproval !== undefined) {
      Approval.encode(message.primarySpApproval, writer.uint32(58).fork()).ldelim();
    }

    for (const v of message.expectChecksums) {
      writer.uint32(66).bytes(v!);
    }

    if (message.redundancyType !== 0) {
      writer.uint32(72).int32(message.redundancyType);
    }

    for (const v of message.expectSecondarySpAddresses) {
      writer.uint32(82).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateObject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateObject();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.bucketName = reader.string();
          break;

        case 3:
          message.objectName = reader.string();
          break;

        case 4:
          message.payloadSize = (reader.uint64() as Long);
          break;

        case 5:
          message.isPublic = reader.bool();
          break;

        case 6:
          message.contentType = reader.string();
          break;

        case 7:
          message.primarySpApproval = Approval.decode(reader, reader.uint32());
          break;

        case 8:
          message.expectChecksums.push(reader.bytes());
          break;

        case 9:
          message.redundancyType = (reader.int32() as any);
          break;

        case 10:
          message.expectSecondarySpAddresses.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateObject {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      objectName: isSet(object.objectName) ? String(object.objectName) : "",
      payloadSize: isSet(object.payloadSize) ? Long.fromValue(object.payloadSize) : Long.UZERO,
      isPublic: isSet(object.isPublic) ? Boolean(object.isPublic) : false,
      contentType: isSet(object.contentType) ? String(object.contentType) : "",
      primarySpApproval: isSet(object.primarySpApproval) ? Approval.fromJSON(object.primarySpApproval) : undefined,
      expectChecksums: Array.isArray(object?.expectChecksums) ? object.expectChecksums.map((e: any) => bytesFromBase64(e)) : [],
      redundancyType: isSet(object.redundancyType) ? redundancyTypeFromJSON(object.redundancyType) : 0,
      expectSecondarySpAddresses: Array.isArray(object?.expectSecondarySpAddresses) ? object.expectSecondarySpAddresses.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: MsgCreateObject): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.objectName !== undefined && (obj.objectName = message.objectName);
    message.payloadSize !== undefined && (obj.payloadSize = (message.payloadSize || Long.UZERO).toString());
    message.isPublic !== undefined && (obj.isPublic = message.isPublic);
    message.contentType !== undefined && (obj.contentType = message.contentType);
    message.primarySpApproval !== undefined && (obj.primarySpApproval = message.primarySpApproval ? Approval.toJSON(message.primarySpApproval) : undefined);

    if (message.expectChecksums) {
      obj.expectChecksums = message.expectChecksums.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.expectChecksums = [];
    }

    message.redundancyType !== undefined && (obj.redundancyType = redundancyTypeToJSON(message.redundancyType));

    if (message.expectSecondarySpAddresses) {
      obj.expectSecondarySpAddresses = message.expectSecondarySpAddresses.map(e => e);
    } else {
      obj.expectSecondarySpAddresses = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateObject>, I>>(object: I): MsgCreateObject {
    const message = createBaseMsgCreateObject();
    message.creator = object.creator ?? "";
    message.bucketName = object.bucketName ?? "";
    message.objectName = object.objectName ?? "";
    message.payloadSize = object.payloadSize !== undefined && object.payloadSize !== null ? Long.fromValue(object.payloadSize) : Long.UZERO;
    message.isPublic = object.isPublic ?? false;
    message.contentType = object.contentType ?? "";
    message.primarySpApproval = object.primarySpApproval !== undefined && object.primarySpApproval !== null ? Approval.fromPartial(object.primarySpApproval) : undefined;
    message.expectChecksums = object.expectChecksums?.map(e => e) || [];
    message.redundancyType = object.redundancyType ?? 0;
    message.expectSecondarySpAddresses = object.expectSecondarySpAddresses?.map(e => e) || [];
    return message;
  },

  fromSDK(object: MsgCreateObjectSDKType): MsgCreateObject {
    return {
      creator: object?.creator,
      bucketName: object?.bucket_name,
      objectName: object?.object_name,
      payloadSize: object?.payload_size,
      isPublic: object?.is_public,
      contentType: object?.content_type,
      primarySpApproval: object.primary_sp_approval ? Approval.fromSDK(object.primary_sp_approval) : undefined,
      expectChecksums: Array.isArray(object?.expect_checksums) ? object.expect_checksums.map((e: any) => e) : [],
      redundancyType: isSet(object.redundancy_type) ? redundancyTypeFromJSON(object.redundancy_type) : 0,
      expectSecondarySpAddresses: Array.isArray(object?.expect_secondary_sp_addresses) ? object.expect_secondary_sp_addresses.map((e: any) => e) : []
    };
  },

  toSDK(message: MsgCreateObject): MsgCreateObjectSDKType {
    const obj: any = {};
    obj.creator = message.creator;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    obj.payload_size = message.payloadSize;
    obj.is_public = message.isPublic;
    obj.content_type = message.contentType;
    message.primarySpApproval !== undefined && (obj.primary_sp_approval = message.primarySpApproval ? Approval.toSDK(message.primarySpApproval) : undefined);

    if (message.expectChecksums) {
      obj.expect_checksums = message.expectChecksums.map(e => e);
    } else {
      obj.expect_checksums = [];
    }

    message.redundancyType !== undefined && (obj.redundancy_type = redundancyTypeToJSON(message.redundancyType));

    if (message.expectSecondarySpAddresses) {
      obj.expect_secondary_sp_addresses = message.expectSecondarySpAddresses.map(e => e);
    } else {
      obj.expect_secondary_sp_addresses = [];
    }

    return obj;
  }

};

function createBaseMsgCreateObjectResponse(): MsgCreateObjectResponse {
  return {
    objectId: ""
  };
}

export const MsgCreateObjectResponse = {
  encode(message: MsgCreateObjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.objectId !== "") {
      writer.uint32(10).string(message.objectId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateObjectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateObjectResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.objectId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateObjectResponse {
    return {
      objectId: isSet(object.objectId) ? String(object.objectId) : ""
    };
  },

  toJSON(message: MsgCreateObjectResponse): unknown {
    const obj: any = {};
    message.objectId !== undefined && (obj.objectId = message.objectId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateObjectResponse>, I>>(object: I): MsgCreateObjectResponse {
    const message = createBaseMsgCreateObjectResponse();
    message.objectId = object.objectId ?? "";
    return message;
  },

  fromSDK(object: MsgCreateObjectResponseSDKType): MsgCreateObjectResponse {
    return {
      objectId: object?.object_id
    };
  },

  toSDK(message: MsgCreateObjectResponse): MsgCreateObjectResponseSDKType {
    const obj: any = {};
    obj.object_id = message.objectId;
    return obj;
  }

};

function createBaseMsgSealObject(): MsgSealObject {
  return {
    operator: "",
    bucketName: "",
    objectName: "",
    secondarySpAddresses: [],
    secondarySpSignatures: []
  };
}

export const MsgSealObject = {
  encode(message: MsgSealObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }

    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }

    if (message.objectName !== "") {
      writer.uint32(26).string(message.objectName);
    }

    for (const v of message.secondarySpAddresses) {
      writer.uint32(34).string(v!);
    }

    for (const v of message.secondarySpSignatures) {
      writer.uint32(42).bytes(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSealObject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSealObject();

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
          message.secondarySpAddresses.push(reader.string());
          break;

        case 5:
          message.secondarySpSignatures.push(reader.bytes());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgSealObject {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      objectName: isSet(object.objectName) ? String(object.objectName) : "",
      secondarySpAddresses: Array.isArray(object?.secondarySpAddresses) ? object.secondarySpAddresses.map((e: any) => String(e)) : [],
      secondarySpSignatures: Array.isArray(object?.secondarySpSignatures) ? object.secondarySpSignatures.map((e: any) => bytesFromBase64(e)) : []
    };
  },

  toJSON(message: MsgSealObject): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.objectName !== undefined && (obj.objectName = message.objectName);

    if (message.secondarySpAddresses) {
      obj.secondarySpAddresses = message.secondarySpAddresses.map(e => e);
    } else {
      obj.secondarySpAddresses = [];
    }

    if (message.secondarySpSignatures) {
      obj.secondarySpSignatures = message.secondarySpSignatures.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.secondarySpSignatures = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSealObject>, I>>(object: I): MsgSealObject {
    const message = createBaseMsgSealObject();
    message.operator = object.operator ?? "";
    message.bucketName = object.bucketName ?? "";
    message.objectName = object.objectName ?? "";
    message.secondarySpAddresses = object.secondarySpAddresses?.map(e => e) || [];
    message.secondarySpSignatures = object.secondarySpSignatures?.map(e => e) || [];
    return message;
  },

  fromSDK(object: MsgSealObjectSDKType): MsgSealObject {
    return {
      operator: object?.operator,
      bucketName: object?.bucket_name,
      objectName: object?.object_name,
      secondarySpAddresses: Array.isArray(object?.secondary_sp_addresses) ? object.secondary_sp_addresses.map((e: any) => e) : [],
      secondarySpSignatures: Array.isArray(object?.secondary_sp_signatures) ? object.secondary_sp_signatures.map((e: any) => e) : []
    };
  },

  toSDK(message: MsgSealObject): MsgSealObjectSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;

    if (message.secondarySpAddresses) {
      obj.secondary_sp_addresses = message.secondarySpAddresses.map(e => e);
    } else {
      obj.secondary_sp_addresses = [];
    }

    if (message.secondarySpSignatures) {
      obj.secondary_sp_signatures = message.secondarySpSignatures.map(e => e);
    } else {
      obj.secondary_sp_signatures = [];
    }

    return obj;
  }

};

function createBaseMsgSealObjectResponse(): MsgSealObjectResponse {
  return {};
}

export const MsgSealObjectResponse = {
  encode(_: MsgSealObjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSealObjectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSealObjectResponse();

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

  fromJSON(_: any): MsgSealObjectResponse {
    return {};
  },

  toJSON(_: MsgSealObjectResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSealObjectResponse>, I>>(_: I): MsgSealObjectResponse {
    const message = createBaseMsgSealObjectResponse();
    return message;
  },

  fromSDK(_: MsgSealObjectResponseSDKType): MsgSealObjectResponse {
    return {};
  },

  toSDK(_: MsgSealObjectResponse): MsgSealObjectResponseSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgRejectSealObject(): MsgRejectSealObject {
  return {
    operator: "",
    bucketName: "",
    objectName: ""
  };
}

export const MsgRejectSealObject = {
  encode(message: MsgRejectSealObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }

    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }

    if (message.objectName !== "") {
      writer.uint32(26).string(message.objectName);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRejectSealObject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRejectSealObject();

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

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgRejectSealObject {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      objectName: isSet(object.objectName) ? String(object.objectName) : ""
    };
  },

  toJSON(message: MsgRejectSealObject): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.objectName !== undefined && (obj.objectName = message.objectName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRejectSealObject>, I>>(object: I): MsgRejectSealObject {
    const message = createBaseMsgRejectSealObject();
    message.operator = object.operator ?? "";
    message.bucketName = object.bucketName ?? "";
    message.objectName = object.objectName ?? "";
    return message;
  },

  fromSDK(object: MsgRejectSealObjectSDKType): MsgRejectSealObject {
    return {
      operator: object?.operator,
      bucketName: object?.bucket_name,
      objectName: object?.object_name
    };
  },

  toSDK(message: MsgRejectSealObject): MsgRejectSealObjectSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    return obj;
  }

};

function createBaseMsgRejectSealObjectResponse(): MsgRejectSealObjectResponse {
  return {};
}

export const MsgRejectSealObjectResponse = {
  encode(_: MsgRejectSealObjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRejectSealObjectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRejectSealObjectResponse();

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

  fromJSON(_: any): MsgRejectSealObjectResponse {
    return {};
  },

  toJSON(_: MsgRejectSealObjectResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRejectSealObjectResponse>, I>>(_: I): MsgRejectSealObjectResponse {
    const message = createBaseMsgRejectSealObjectResponse();
    return message;
  },

  fromSDK(_: MsgRejectSealObjectResponseSDKType): MsgRejectSealObjectResponse {
    return {};
  },

  toSDK(_: MsgRejectSealObjectResponse): MsgRejectSealObjectResponseSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgCopyObject(): MsgCopyObject {
  return {
    operator: "",
    srcBucketName: "",
    dstBucketName: "",
    srcObjectName: "",
    dstObjectName: "",
    dstPrimarySpApproval: undefined
  };
}

export const MsgCopyObject = {
  encode(message: MsgCopyObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }

    if (message.srcBucketName !== "") {
      writer.uint32(18).string(message.srcBucketName);
    }

    if (message.dstBucketName !== "") {
      writer.uint32(26).string(message.dstBucketName);
    }

    if (message.srcObjectName !== "") {
      writer.uint32(34).string(message.srcObjectName);
    }

    if (message.dstObjectName !== "") {
      writer.uint32(42).string(message.dstObjectName);
    }

    if (message.dstPrimarySpApproval !== undefined) {
      Approval.encode(message.dstPrimarySpApproval, writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCopyObject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCopyObject();

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
          message.dstBucketName = reader.string();
          break;

        case 4:
          message.srcObjectName = reader.string();
          break;

        case 5:
          message.dstObjectName = reader.string();
          break;

        case 6:
          message.dstPrimarySpApproval = Approval.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCopyObject {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      srcBucketName: isSet(object.srcBucketName) ? String(object.srcBucketName) : "",
      dstBucketName: isSet(object.dstBucketName) ? String(object.dstBucketName) : "",
      srcObjectName: isSet(object.srcObjectName) ? String(object.srcObjectName) : "",
      dstObjectName: isSet(object.dstObjectName) ? String(object.dstObjectName) : "",
      dstPrimarySpApproval: isSet(object.dstPrimarySpApproval) ? Approval.fromJSON(object.dstPrimarySpApproval) : undefined
    };
  },

  toJSON(message: MsgCopyObject): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.srcBucketName !== undefined && (obj.srcBucketName = message.srcBucketName);
    message.dstBucketName !== undefined && (obj.dstBucketName = message.dstBucketName);
    message.srcObjectName !== undefined && (obj.srcObjectName = message.srcObjectName);
    message.dstObjectName !== undefined && (obj.dstObjectName = message.dstObjectName);
    message.dstPrimarySpApproval !== undefined && (obj.dstPrimarySpApproval = message.dstPrimarySpApproval ? Approval.toJSON(message.dstPrimarySpApproval) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCopyObject>, I>>(object: I): MsgCopyObject {
    const message = createBaseMsgCopyObject();
    message.operator = object.operator ?? "";
    message.srcBucketName = object.srcBucketName ?? "";
    message.dstBucketName = object.dstBucketName ?? "";
    message.srcObjectName = object.srcObjectName ?? "";
    message.dstObjectName = object.dstObjectName ?? "";
    message.dstPrimarySpApproval = object.dstPrimarySpApproval !== undefined && object.dstPrimarySpApproval !== null ? Approval.fromPartial(object.dstPrimarySpApproval) : undefined;
    return message;
  },

  fromSDK(object: MsgCopyObjectSDKType): MsgCopyObject {
    return {
      operator: object?.operator,
      srcBucketName: object?.src_bucket_name,
      dstBucketName: object?.dst_bucket_name,
      srcObjectName: object?.src_object_name,
      dstObjectName: object?.dst_object_name,
      dstPrimarySpApproval: object.dst_primary_sp_approval ? Approval.fromSDK(object.dst_primary_sp_approval) : undefined
    };
  },

  toSDK(message: MsgCopyObject): MsgCopyObjectSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.src_bucket_name = message.srcBucketName;
    obj.dst_bucket_name = message.dstBucketName;
    obj.src_object_name = message.srcObjectName;
    obj.dst_object_name = message.dstObjectName;
    message.dstPrimarySpApproval !== undefined && (obj.dst_primary_sp_approval = message.dstPrimarySpApproval ? Approval.toSDK(message.dstPrimarySpApproval) : undefined);
    return obj;
  }

};

function createBaseMsgCopyObjectResponse(): MsgCopyObjectResponse {
  return {
    objectId: ""
  };
}

export const MsgCopyObjectResponse = {
  encode(message: MsgCopyObjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.objectId !== "") {
      writer.uint32(10).string(message.objectId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCopyObjectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCopyObjectResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.objectId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCopyObjectResponse {
    return {
      objectId: isSet(object.objectId) ? String(object.objectId) : ""
    };
  },

  toJSON(message: MsgCopyObjectResponse): unknown {
    const obj: any = {};
    message.objectId !== undefined && (obj.objectId = message.objectId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCopyObjectResponse>, I>>(object: I): MsgCopyObjectResponse {
    const message = createBaseMsgCopyObjectResponse();
    message.objectId = object.objectId ?? "";
    return message;
  },

  fromSDK(object: MsgCopyObjectResponseSDKType): MsgCopyObjectResponse {
    return {
      objectId: object?.object_id
    };
  },

  toSDK(message: MsgCopyObjectResponse): MsgCopyObjectResponseSDKType {
    const obj: any = {};
    obj.object_id = message.objectId;
    return obj;
  }

};

function createBaseMsgDeleteObject(): MsgDeleteObject {
  return {
    operator: "",
    bucketName: "",
    objectName: ""
  };
}

export const MsgDeleteObject = {
  encode(message: MsgDeleteObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }

    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }

    if (message.objectName !== "") {
      writer.uint32(26).string(message.objectName);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteObject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteObject();

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

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgDeleteObject {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      objectName: isSet(object.objectName) ? String(object.objectName) : ""
    };
  },

  toJSON(message: MsgDeleteObject): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.objectName !== undefined && (obj.objectName = message.objectName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteObject>, I>>(object: I): MsgDeleteObject {
    const message = createBaseMsgDeleteObject();
    message.operator = object.operator ?? "";
    message.bucketName = object.bucketName ?? "";
    message.objectName = object.objectName ?? "";
    return message;
  },

  fromSDK(object: MsgDeleteObjectSDKType): MsgDeleteObject {
    return {
      operator: object?.operator,
      bucketName: object?.bucket_name,
      objectName: object?.object_name
    };
  },

  toSDK(message: MsgDeleteObject): MsgDeleteObjectSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    return obj;
  }

};

function createBaseMsgDeleteObjectResponse(): MsgDeleteObjectResponse {
  return {};
}

export const MsgDeleteObjectResponse = {
  encode(_: MsgDeleteObjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteObjectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteObjectResponse();

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

  fromJSON(_: any): MsgDeleteObjectResponse {
    return {};
  },

  toJSON(_: MsgDeleteObjectResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteObjectResponse>, I>>(_: I): MsgDeleteObjectResponse {
    const message = createBaseMsgDeleteObjectResponse();
    return message;
  },

  fromSDK(_: MsgDeleteObjectResponseSDKType): MsgDeleteObjectResponse {
    return {};
  },

  toSDK(_: MsgDeleteObjectResponse): MsgDeleteObjectResponseSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgCreateGroup(): MsgCreateGroup {
  return {
    creator: "",
    groupName: "",
    members: []
  };
}

export const MsgCreateGroup = {
  encode(message: MsgCreateGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.groupName !== "") {
      writer.uint32(18).string(message.groupName);
    }

    for (const v of message.members) {
      writer.uint32(26).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroup();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.groupName = reader.string();
          break;

        case 3:
          message.members.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateGroup {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      groupName: isSet(object.groupName) ? String(object.groupName) : "",
      members: Array.isArray(object?.members) ? object.members.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: MsgCreateGroup): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.groupName !== undefined && (obj.groupName = message.groupName);

    if (message.members) {
      obj.members = message.members.map(e => e);
    } else {
      obj.members = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateGroup>, I>>(object: I): MsgCreateGroup {
    const message = createBaseMsgCreateGroup();
    message.creator = object.creator ?? "";
    message.groupName = object.groupName ?? "";
    message.members = object.members?.map(e => e) || [];
    return message;
  },

  fromSDK(object: MsgCreateGroupSDKType): MsgCreateGroup {
    return {
      creator: object?.creator,
      groupName: object?.group_name,
      members: Array.isArray(object?.members) ? object.members.map((e: any) => e) : []
    };
  },

  toSDK(message: MsgCreateGroup): MsgCreateGroupSDKType {
    const obj: any = {};
    obj.creator = message.creator;
    obj.group_name = message.groupName;

    if (message.members) {
      obj.members = message.members.map(e => e);
    } else {
      obj.members = [];
    }

    return obj;
  }

};

function createBaseMsgCreateGroupResponse(): MsgCreateGroupResponse {
  return {
    groupId: ""
  };
}

export const MsgCreateGroupResponse = {
  encode(message: MsgCreateGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupId !== "") {
      writer.uint32(10).string(message.groupId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateGroupResponse {
    return {
      groupId: isSet(object.groupId) ? String(object.groupId) : ""
    };
  },

  toJSON(message: MsgCreateGroupResponse): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = message.groupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateGroupResponse>, I>>(object: I): MsgCreateGroupResponse {
    const message = createBaseMsgCreateGroupResponse();
    message.groupId = object.groupId ?? "";
    return message;
  },

  fromSDK(object: MsgCreateGroupResponseSDKType): MsgCreateGroupResponse {
    return {
      groupId: object?.group_id
    };
  },

  toSDK(message: MsgCreateGroupResponse): MsgCreateGroupResponseSDKType {
    const obj: any = {};
    obj.group_id = message.groupId;
    return obj;
  }

};

function createBaseMsgDeleteGroup(): MsgDeleteGroup {
  return {
    operator: "",
    groupName: ""
  };
}

export const MsgDeleteGroup = {
  encode(message: MsgDeleteGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }

    if (message.groupName !== "") {
      writer.uint32(18).string(message.groupName);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteGroup();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;

        case 2:
          message.groupName = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgDeleteGroup {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      groupName: isSet(object.groupName) ? String(object.groupName) : ""
    };
  },

  toJSON(message: MsgDeleteGroup): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.groupName !== undefined && (obj.groupName = message.groupName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteGroup>, I>>(object: I): MsgDeleteGroup {
    const message = createBaseMsgDeleteGroup();
    message.operator = object.operator ?? "";
    message.groupName = object.groupName ?? "";
    return message;
  },

  fromSDK(object: MsgDeleteGroupSDKType): MsgDeleteGroup {
    return {
      operator: object?.operator,
      groupName: object?.group_name
    };
  },

  toSDK(message: MsgDeleteGroup): MsgDeleteGroupSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.group_name = message.groupName;
    return obj;
  }

};

function createBaseMsgDeleteGroupResponse(): MsgDeleteGroupResponse {
  return {};
}

export const MsgDeleteGroupResponse = {
  encode(_: MsgDeleteGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteGroupResponse();

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

  fromJSON(_: any): MsgDeleteGroupResponse {
    return {};
  },

  toJSON(_: MsgDeleteGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteGroupResponse>, I>>(_: I): MsgDeleteGroupResponse {
    const message = createBaseMsgDeleteGroupResponse();
    return message;
  },

  fromSDK(_: MsgDeleteGroupResponseSDKType): MsgDeleteGroupResponse {
    return {};
  },

  toSDK(_: MsgDeleteGroupResponse): MsgDeleteGroupResponseSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgUpdateGroupMember(): MsgUpdateGroupMember {
  return {
    operator: "",
    groupName: "",
    membersToAdd: [],
    membersToDelete: []
  };
}

export const MsgUpdateGroupMember = {
  encode(message: MsgUpdateGroupMember, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }

    if (message.groupName !== "") {
      writer.uint32(18).string(message.groupName);
    }

    for (const v of message.membersToAdd) {
      writer.uint32(26).string(v!);
    }

    for (const v of message.membersToDelete) {
      writer.uint32(34).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupMember {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupMember();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;

        case 2:
          message.groupName = reader.string();
          break;

        case 3:
          message.membersToAdd.push(reader.string());
          break;

        case 4:
          message.membersToDelete.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateGroupMember {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      groupName: isSet(object.groupName) ? String(object.groupName) : "",
      membersToAdd: Array.isArray(object?.membersToAdd) ? object.membersToAdd.map((e: any) => String(e)) : [],
      membersToDelete: Array.isArray(object?.membersToDelete) ? object.membersToDelete.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: MsgUpdateGroupMember): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.groupName !== undefined && (obj.groupName = message.groupName);

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

  fromPartial<I extends Exact<DeepPartial<MsgUpdateGroupMember>, I>>(object: I): MsgUpdateGroupMember {
    const message = createBaseMsgUpdateGroupMember();
    message.operator = object.operator ?? "";
    message.groupName = object.groupName ?? "";
    message.membersToAdd = object.membersToAdd?.map(e => e) || [];
    message.membersToDelete = object.membersToDelete?.map(e => e) || [];
    return message;
  },

  fromSDK(object: MsgUpdateGroupMemberSDKType): MsgUpdateGroupMember {
    return {
      operator: object?.operator,
      groupName: object?.group_name,
      membersToAdd: Array.isArray(object?.members_to_add) ? object.members_to_add.map((e: any) => e) : [],
      membersToDelete: Array.isArray(object?.members_to_delete) ? object.members_to_delete.map((e: any) => e) : []
    };
  },

  toSDK(message: MsgUpdateGroupMember): MsgUpdateGroupMemberSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.group_name = message.groupName;

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

function createBaseMsgUpdateGroupMemberResponse(): MsgUpdateGroupMemberResponse {
  return {};
}

export const MsgUpdateGroupMemberResponse = {
  encode(_: MsgUpdateGroupMemberResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupMemberResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupMemberResponse();

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

  fromJSON(_: any): MsgUpdateGroupMemberResponse {
    return {};
  },

  toJSON(_: MsgUpdateGroupMemberResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateGroupMemberResponse>, I>>(_: I): MsgUpdateGroupMemberResponse {
    const message = createBaseMsgUpdateGroupMemberResponse();
    return message;
  },

  fromSDK(_: MsgUpdateGroupMemberResponseSDKType): MsgUpdateGroupMemberResponse {
    return {};
  },

  toSDK(_: MsgUpdateGroupMemberResponse): MsgUpdateGroupMemberResponseSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgLeaveGroup(): MsgLeaveGroup {
  return {
    member: "",
    groupOwner: "",
    groupName: ""
  };
}

export const MsgLeaveGroup = {
  encode(message: MsgLeaveGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.member !== "") {
      writer.uint32(10).string(message.member);
    }

    if (message.groupOwner !== "") {
      writer.uint32(18).string(message.groupOwner);
    }

    if (message.groupName !== "") {
      writer.uint32(26).string(message.groupName);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLeaveGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLeaveGroup();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.member = reader.string();
          break;

        case 2:
          message.groupOwner = reader.string();
          break;

        case 3:
          message.groupName = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgLeaveGroup {
    return {
      member: isSet(object.member) ? String(object.member) : "",
      groupOwner: isSet(object.groupOwner) ? String(object.groupOwner) : "",
      groupName: isSet(object.groupName) ? String(object.groupName) : ""
    };
  },

  toJSON(message: MsgLeaveGroup): unknown {
    const obj: any = {};
    message.member !== undefined && (obj.member = message.member);
    message.groupOwner !== undefined && (obj.groupOwner = message.groupOwner);
    message.groupName !== undefined && (obj.groupName = message.groupName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgLeaveGroup>, I>>(object: I): MsgLeaveGroup {
    const message = createBaseMsgLeaveGroup();
    message.member = object.member ?? "";
    message.groupOwner = object.groupOwner ?? "";
    message.groupName = object.groupName ?? "";
    return message;
  },

  fromSDK(object: MsgLeaveGroupSDKType): MsgLeaveGroup {
    return {
      member: object?.member,
      groupOwner: object?.group_owner,
      groupName: object?.group_name
    };
  },

  toSDK(message: MsgLeaveGroup): MsgLeaveGroupSDKType {
    const obj: any = {};
    obj.member = message.member;
    obj.group_owner = message.groupOwner;
    obj.group_name = message.groupName;
    return obj;
  }

};

function createBaseMsgLeaveGroupResponse(): MsgLeaveGroupResponse {
  return {};
}

export const MsgLeaveGroupResponse = {
  encode(_: MsgLeaveGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLeaveGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLeaveGroupResponse();

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

  fromJSON(_: any): MsgLeaveGroupResponse {
    return {};
  },

  toJSON(_: MsgLeaveGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgLeaveGroupResponse>, I>>(_: I): MsgLeaveGroupResponse {
    const message = createBaseMsgLeaveGroupResponse();
    return message;
  },

  fromSDK(_: MsgLeaveGroupResponseSDKType): MsgLeaveGroupResponse {
    return {};
  },

  toSDK(_: MsgLeaveGroupResponse): MsgLeaveGroupResponseSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgUpdateBucketInfo(): MsgUpdateBucketInfo {
  return {
    operator: "",
    bucketName: "",
    readQuota: Long.UZERO,
    paymentAddress: ""
  };
}

export const MsgUpdateBucketInfo = {
  encode(message: MsgUpdateBucketInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }

    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }

    if (!message.readQuota.isZero()) {
      writer.uint32(24).uint64(message.readQuota);
    }

    if (message.paymentAddress !== "") {
      writer.uint32(34).string(message.paymentAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateBucketInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateBucketInfo();

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
          message.readQuota = (reader.uint64() as Long);
          break;

        case 4:
          message.paymentAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateBucketInfo {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      readQuota: isSet(object.readQuota) ? Long.fromValue(object.readQuota) : Long.UZERO,
      paymentAddress: isSet(object.paymentAddress) ? String(object.paymentAddress) : ""
    };
  },

  toJSON(message: MsgUpdateBucketInfo): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.readQuota !== undefined && (obj.readQuota = (message.readQuota || Long.UZERO).toString());
    message.paymentAddress !== undefined && (obj.paymentAddress = message.paymentAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateBucketInfo>, I>>(object: I): MsgUpdateBucketInfo {
    const message = createBaseMsgUpdateBucketInfo();
    message.operator = object.operator ?? "";
    message.bucketName = object.bucketName ?? "";
    message.readQuota = object.readQuota !== undefined && object.readQuota !== null ? Long.fromValue(object.readQuota) : Long.UZERO;
    message.paymentAddress = object.paymentAddress ?? "";
    return message;
  },

  fromSDK(object: MsgUpdateBucketInfoSDKType): MsgUpdateBucketInfo {
    return {
      operator: object?.operator,
      bucketName: object?.bucket_name,
      readQuota: object?.read_quota,
      paymentAddress: object?.payment_address
    };
  },

  toSDK(message: MsgUpdateBucketInfo): MsgUpdateBucketInfoSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.read_quota = message.readQuota;
    obj.payment_address = message.paymentAddress;
    return obj;
  }

};

function createBaseMsgUpdateBucketInfoResponse(): MsgUpdateBucketInfoResponse {
  return {};
}

export const MsgUpdateBucketInfoResponse = {
  encode(_: MsgUpdateBucketInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateBucketInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateBucketInfoResponse();

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

  fromJSON(_: any): MsgUpdateBucketInfoResponse {
    return {};
  },

  toJSON(_: MsgUpdateBucketInfoResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateBucketInfoResponse>, I>>(_: I): MsgUpdateBucketInfoResponse {
    const message = createBaseMsgUpdateBucketInfoResponse();
    return message;
  },

  fromSDK(_: MsgUpdateBucketInfoResponseSDKType): MsgUpdateBucketInfoResponse {
    return {};
  },

  toSDK(_: MsgUpdateBucketInfoResponse): MsgUpdateBucketInfoResponseSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgCancelCreateObject(): MsgCancelCreateObject {
  return {
    operator: "",
    bucketName: "",
    objectName: ""
  };
}

export const MsgCancelCreateObject = {
  encode(message: MsgCancelCreateObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }

    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }

    if (message.objectName !== "") {
      writer.uint32(26).string(message.objectName);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelCreateObject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelCreateObject();

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

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCancelCreateObject {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      objectName: isSet(object.objectName) ? String(object.objectName) : ""
    };
  },

  toJSON(message: MsgCancelCreateObject): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.objectName !== undefined && (obj.objectName = message.objectName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelCreateObject>, I>>(object: I): MsgCancelCreateObject {
    const message = createBaseMsgCancelCreateObject();
    message.operator = object.operator ?? "";
    message.bucketName = object.bucketName ?? "";
    message.objectName = object.objectName ?? "";
    return message;
  },

  fromSDK(object: MsgCancelCreateObjectSDKType): MsgCancelCreateObject {
    return {
      operator: object?.operator,
      bucketName: object?.bucket_name,
      objectName: object?.object_name
    };
  },

  toSDK(message: MsgCancelCreateObject): MsgCancelCreateObjectSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    return obj;
  }

};

function createBaseMsgCancelCreateObjectResponse(): MsgCancelCreateObjectResponse {
  return {};
}

export const MsgCancelCreateObjectResponse = {
  encode(_: MsgCancelCreateObjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelCreateObjectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelCreateObjectResponse();

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

  fromJSON(_: any): MsgCancelCreateObjectResponse {
    return {};
  },

  toJSON(_: MsgCancelCreateObjectResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelCreateObjectResponse>, I>>(_: I): MsgCancelCreateObjectResponse {
    const message = createBaseMsgCancelCreateObjectResponse();
    return message;
  },

  fromSDK(_: MsgCancelCreateObjectResponseSDKType): MsgCancelCreateObjectResponse {
    return {};
  },

  toSDK(_: MsgCancelCreateObjectResponse): MsgCancelCreateObjectResponseSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgPutPolicy(): MsgPutPolicy {
  return {
    operator: "",
    principal: undefined,
    resource: "",
    statements: []
  };
}

export const MsgPutPolicy = {
  encode(message: MsgPutPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }

    if (message.principal !== undefined) {
      Principal.encode(message.principal, writer.uint32(18).fork()).ldelim();
    }

    if (message.resource !== "") {
      writer.uint32(26).string(message.resource);
    }

    for (const v of message.statements) {
      Statement.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPutPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPutPolicy();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;

        case 2:
          message.principal = Principal.decode(reader, reader.uint32());
          break;

        case 3:
          message.resource = reader.string();
          break;

        case 4:
          message.statements.push(Statement.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgPutPolicy {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      principal: isSet(object.principal) ? Principal.fromJSON(object.principal) : undefined,
      resource: isSet(object.resource) ? String(object.resource) : "",
      statements: Array.isArray(object?.statements) ? object.statements.map((e: any) => Statement.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgPutPolicy): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.principal !== undefined && (obj.principal = message.principal ? Principal.toJSON(message.principal) : undefined);
    message.resource !== undefined && (obj.resource = message.resource);

    if (message.statements) {
      obj.statements = message.statements.map(e => e ? Statement.toJSON(e) : undefined);
    } else {
      obj.statements = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPutPolicy>, I>>(object: I): MsgPutPolicy {
    const message = createBaseMsgPutPolicy();
    message.operator = object.operator ?? "";
    message.principal = object.principal !== undefined && object.principal !== null ? Principal.fromPartial(object.principal) : undefined;
    message.resource = object.resource ?? "";
    message.statements = object.statements?.map(e => Statement.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: MsgPutPolicySDKType): MsgPutPolicy {
    return {
      operator: object?.operator,
      principal: object.principal ? Principal.fromSDK(object.principal) : undefined,
      resource: object?.resource,
      statements: Array.isArray(object?.statements) ? object.statements.map((e: any) => Statement.fromSDK(e)) : []
    };
  },

  toSDK(message: MsgPutPolicy): MsgPutPolicySDKType {
    const obj: any = {};
    obj.operator = message.operator;
    message.principal !== undefined && (obj.principal = message.principal ? Principal.toSDK(message.principal) : undefined);
    obj.resource = message.resource;

    if (message.statements) {
      obj.statements = message.statements.map(e => e ? Statement.toSDK(e) : undefined);
    } else {
      obj.statements = [];
    }

    return obj;
  }

};

function createBaseMsgPutPolicyResponse(): MsgPutPolicyResponse {
  return {
    id: ""
  };
}

export const MsgPutPolicyResponse = {
  encode(message: MsgPutPolicyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(34).string(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPutPolicyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPutPolicyResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 4:
          message.id = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgPutPolicyResponse {
    return {
      id: isSet(object.id) ? String(object.id) : ""
    };
  },

  toJSON(message: MsgPutPolicyResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPutPolicyResponse>, I>>(object: I): MsgPutPolicyResponse {
    const message = createBaseMsgPutPolicyResponse();
    message.id = object.id ?? "";
    return message;
  },

  fromSDK(object: MsgPutPolicyResponseSDKType): MsgPutPolicyResponse {
    return {
      id: object?.id
    };
  },

  toSDK(message: MsgPutPolicyResponse): MsgPutPolicyResponseSDKType {
    const obj: any = {};
    obj.id = message.id;
    return obj;
  }

};

function createBaseMsgDeletePolicy(): MsgDeletePolicy {
  return {
    operator: "",
    principal: undefined,
    resource: ""
  };
}

export const MsgDeletePolicy = {
  encode(message: MsgDeletePolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }

    if (message.principal !== undefined) {
      Principal.encode(message.principal, writer.uint32(18).fork()).ldelim();
    }

    if (message.resource !== "") {
      writer.uint32(26).string(message.resource);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeletePolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeletePolicy();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;

        case 2:
          message.principal = Principal.decode(reader, reader.uint32());
          break;

        case 3:
          message.resource = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgDeletePolicy {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      principal: isSet(object.principal) ? Principal.fromJSON(object.principal) : undefined,
      resource: isSet(object.resource) ? String(object.resource) : ""
    };
  },

  toJSON(message: MsgDeletePolicy): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.principal !== undefined && (obj.principal = message.principal ? Principal.toJSON(message.principal) : undefined);
    message.resource !== undefined && (obj.resource = message.resource);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeletePolicy>, I>>(object: I): MsgDeletePolicy {
    const message = createBaseMsgDeletePolicy();
    message.operator = object.operator ?? "";
    message.principal = object.principal !== undefined && object.principal !== null ? Principal.fromPartial(object.principal) : undefined;
    message.resource = object.resource ?? "";
    return message;
  },

  fromSDK(object: MsgDeletePolicySDKType): MsgDeletePolicy {
    return {
      operator: object?.operator,
      principal: object.principal ? Principal.fromSDK(object.principal) : undefined,
      resource: object?.resource
    };
  },

  toSDK(message: MsgDeletePolicy): MsgDeletePolicySDKType {
    const obj: any = {};
    obj.operator = message.operator;
    message.principal !== undefined && (obj.principal = message.principal ? Principal.toSDK(message.principal) : undefined);
    obj.resource = message.resource;
    return obj;
  }

};

function createBaseMsgDeletePolicyResponse(): MsgDeletePolicyResponse {
  return {
    id: ""
  };
}

export const MsgDeletePolicyResponse = {
  encode(message: MsgDeletePolicyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(34).string(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeletePolicyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeletePolicyResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 4:
          message.id = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgDeletePolicyResponse {
    return {
      id: isSet(object.id) ? String(object.id) : ""
    };
  },

  toJSON(message: MsgDeletePolicyResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeletePolicyResponse>, I>>(object: I): MsgDeletePolicyResponse {
    const message = createBaseMsgDeletePolicyResponse();
    message.id = object.id ?? "";
    return message;
  },

  fromSDK(object: MsgDeletePolicyResponseSDKType): MsgDeletePolicyResponse {
    return {
      id: object?.id
    };
  },

  toSDK(message: MsgDeletePolicyResponse): MsgDeletePolicyResponseSDKType {
    const obj: any = {};
    obj.id = message.id;
    return obj;
  }

};
/** Msg defines the Msg service. */

export interface Msg {
  /** basic operation of bucket */
  CreateBucket(request: MsgCreateBucket): Promise<MsgCreateBucketResponse>;
  DeleteBucket(request: MsgDeleteBucket): Promise<MsgDeleteBucketResponse>;
  UpdateBucketInfo(request: MsgUpdateBucketInfo): Promise<MsgUpdateBucketInfoResponse>;
  /** basic operation of object */

  CreateObject(request: MsgCreateObject): Promise<MsgCreateObjectResponse>;
  SealObject(request: MsgSealObject): Promise<MsgSealObjectResponse>;
  RejectSealObject(request: MsgRejectSealObject): Promise<MsgRejectSealObjectResponse>;
  CopyObject(request: MsgCopyObject): Promise<MsgCopyObjectResponse>;
  DeleteObject(request: MsgDeleteObject): Promise<MsgDeleteObjectResponse>;
  CancelCreateObject(request: MsgCancelCreateObject): Promise<MsgCancelCreateObjectResponse>;
  /** basic operation of group */

  CreateGroup(request: MsgCreateGroup): Promise<MsgCreateGroupResponse>;
  DeleteGroup(request: MsgDeleteGroup): Promise<MsgDeleteGroupResponse>;
  UpdateGroupMember(request: MsgUpdateGroupMember): Promise<MsgUpdateGroupMemberResponse>;
  LeaveGroup(request: MsgLeaveGroup): Promise<MsgLeaveGroupResponse>;
  /** basic operation of policy */

  PutPolicy(request: MsgPutPolicy): Promise<MsgPutPolicyResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */

  DeletePolicy(request: MsgDeletePolicy): Promise<MsgDeletePolicyResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateBucket = this.CreateBucket.bind(this);
    this.DeleteBucket = this.DeleteBucket.bind(this);
    this.UpdateBucketInfo = this.UpdateBucketInfo.bind(this);
    this.CreateObject = this.CreateObject.bind(this);
    this.SealObject = this.SealObject.bind(this);
    this.RejectSealObject = this.RejectSealObject.bind(this);
    this.CopyObject = this.CopyObject.bind(this);
    this.DeleteObject = this.DeleteObject.bind(this);
    this.CancelCreateObject = this.CancelCreateObject.bind(this);
    this.CreateGroup = this.CreateGroup.bind(this);
    this.DeleteGroup = this.DeleteGroup.bind(this);
    this.UpdateGroupMember = this.UpdateGroupMember.bind(this);
    this.LeaveGroup = this.LeaveGroup.bind(this);
    this.PutPolicy = this.PutPolicy.bind(this);
    this.DeletePolicy = this.DeletePolicy.bind(this);
  }

  CreateBucket(request: MsgCreateBucket): Promise<MsgCreateBucketResponse> {
    const data = MsgCreateBucket.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.storage.Msg", "CreateBucket", data);
    return promise.then(data => MsgCreateBucketResponse.decode(new _m0.Reader(data)));
  }

  DeleteBucket(request: MsgDeleteBucket): Promise<MsgDeleteBucketResponse> {
    const data = MsgDeleteBucket.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.storage.Msg", "DeleteBucket", data);
    return promise.then(data => MsgDeleteBucketResponse.decode(new _m0.Reader(data)));
  }

  UpdateBucketInfo(request: MsgUpdateBucketInfo): Promise<MsgUpdateBucketInfoResponse> {
    const data = MsgUpdateBucketInfo.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.storage.Msg", "UpdateBucketInfo", data);
    return promise.then(data => MsgUpdateBucketInfoResponse.decode(new _m0.Reader(data)));
  }

  CreateObject(request: MsgCreateObject): Promise<MsgCreateObjectResponse> {
    const data = MsgCreateObject.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.storage.Msg", "CreateObject", data);
    return promise.then(data => MsgCreateObjectResponse.decode(new _m0.Reader(data)));
  }

  SealObject(request: MsgSealObject): Promise<MsgSealObjectResponse> {
    const data = MsgSealObject.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.storage.Msg", "SealObject", data);
    return promise.then(data => MsgSealObjectResponse.decode(new _m0.Reader(data)));
  }

  RejectSealObject(request: MsgRejectSealObject): Promise<MsgRejectSealObjectResponse> {
    const data = MsgRejectSealObject.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.storage.Msg", "RejectSealObject", data);
    return promise.then(data => MsgRejectSealObjectResponse.decode(new _m0.Reader(data)));
  }

  CopyObject(request: MsgCopyObject): Promise<MsgCopyObjectResponse> {
    const data = MsgCopyObject.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.storage.Msg", "CopyObject", data);
    return promise.then(data => MsgCopyObjectResponse.decode(new _m0.Reader(data)));
  }

  DeleteObject(request: MsgDeleteObject): Promise<MsgDeleteObjectResponse> {
    const data = MsgDeleteObject.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.storage.Msg", "DeleteObject", data);
    return promise.then(data => MsgDeleteObjectResponse.decode(new _m0.Reader(data)));
  }

  CancelCreateObject(request: MsgCancelCreateObject): Promise<MsgCancelCreateObjectResponse> {
    const data = MsgCancelCreateObject.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.storage.Msg", "CancelCreateObject", data);
    return promise.then(data => MsgCancelCreateObjectResponse.decode(new _m0.Reader(data)));
  }

  CreateGroup(request: MsgCreateGroup): Promise<MsgCreateGroupResponse> {
    const data = MsgCreateGroup.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.storage.Msg", "CreateGroup", data);
    return promise.then(data => MsgCreateGroupResponse.decode(new _m0.Reader(data)));
  }

  DeleteGroup(request: MsgDeleteGroup): Promise<MsgDeleteGroupResponse> {
    const data = MsgDeleteGroup.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.storage.Msg", "DeleteGroup", data);
    return promise.then(data => MsgDeleteGroupResponse.decode(new _m0.Reader(data)));
  }

  UpdateGroupMember(request: MsgUpdateGroupMember): Promise<MsgUpdateGroupMemberResponse> {
    const data = MsgUpdateGroupMember.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.storage.Msg", "UpdateGroupMember", data);
    return promise.then(data => MsgUpdateGroupMemberResponse.decode(new _m0.Reader(data)));
  }

  LeaveGroup(request: MsgLeaveGroup): Promise<MsgLeaveGroupResponse> {
    const data = MsgLeaveGroup.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.storage.Msg", "LeaveGroup", data);
    return promise.then(data => MsgLeaveGroupResponse.decode(new _m0.Reader(data)));
  }

  PutPolicy(request: MsgPutPolicy): Promise<MsgPutPolicyResponse> {
    const data = MsgPutPolicy.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.storage.Msg", "PutPolicy", data);
    return promise.then(data => MsgPutPolicyResponse.decode(new _m0.Reader(data)));
  }

  DeletePolicy(request: MsgDeletePolicy): Promise<MsgDeletePolicyResponse> {
    const data = MsgDeletePolicy.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.storage.Msg", "DeletePolicy", data);
    return promise.then(data => MsgDeletePolicyResponse.decode(new _m0.Reader(data)));
  }

}