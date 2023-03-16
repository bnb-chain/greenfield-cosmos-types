/* eslint-disable */
import { Approval, RedundancyType, redundancyTypeFromJSON, redundancyTypeToJSON } from "./common";
import { Principal, Statement } from "../permission/common";
import { Long, isSet, DeepPartial, Exact, bytesFromBase64, base64FromBytes, Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "bnbchain.greenfield.storage";
export interface MsgCreateBucket {
  /** creator is the account address of bucket creator, it is also the bucket owner. */
  creator: string;
  /** bucket_name is a globally unique name of bucket */

  bucket_name: string;
  /**
   * is_public means the bucket is private or public. if private, only bucket owner or grantee can read it,
   * otherwise every greenfield user can read it.
   */

  is_public: boolean;
  /** payment_address is an account address specified by bucket owner to pay the read fee. Default: creator */

  payment_address: string;
  /** primary_sp_address is the address of primary sp. */

  primary_sp_address: string;
  /** primary_sp_approval is the approval info of the primary SP which indicates that primary sp confirm the user's request. */

  primary_sp_approval?: Approval;
  /** read_quota */

  read_quota: Long;
}
export interface MsgCreateBucketResponse {
  bucket_id: string;
}
export interface MsgDeleteBucket {
  /** creator is the account address of the grantee who has the DeleteBucket permission of the bucket to be deleted. */
  operator: string;
  /** bucket_name is the name of the bucket to be deleted. */

  bucket_name: string;
}
export interface MsgDeleteBucketResponse {}
export interface MsgCreateObject {
  /** creator is the account address of object uploader */
  creator: string;
  /** bucket_name is the name of the bucket where the object is stored. */

  bucket_name: string;
  /** object_name is the name of object */

  object_name: string;
  /** payload_size is size of the object's payload */

  payload_size: Long;
  /**
   * is_public means the bucket is private or public. if private, only bucket owner or grantee can access it,
   * otherwise every greenfield user can access it.
   */

  is_public: boolean;
  /** content_type is a standard MIME type describing the format of the object. */

  content_type: string;
  /** primary_sp_approval is the approval info of the primary SP which indicates that primary sp confirm the user's request. */

  primary_sp_approval?: Approval;
  /** expect_checksums is a list of hashes which was generate by redundancy algorithm. */

  expect_checksums: Uint8Array[];
  /** redundancy_type can be ec or replica */

  redundancy_type: RedundancyType;
  /** expect_secondarySPs is a list of StorageProvider address, which is optional */

  expect_secondary_sp_addresses: string[];
}
export interface MsgCreateObjectResponse {
  object_id: string;
}
export interface MsgSealObject {
  /** operator is the account address of primary SP */
  operator: string;
  /** bucket_name is the name of the bucket where the object is stored. */

  bucket_name: string;
  /** object_name is the name of object to be sealed. */

  object_name: string;
  /** secondary_sp_addresses is a list of storage provider which store the redundant data. */

  secondary_sp_addresses: string[];
  /**
   * secondary_sp_signatures is the signature of the secondary sp that can
   * acknowledge that the payload data has received and stored.
   */

  secondary_sp_signatures: Uint8Array[];
}
export interface MsgSealObjectResponse {}
export interface MsgRejectSealObject {
  /** operator is the account address of the object owner */
  operator: string;
  /** bucket_name is the name of the bucket where the object is stored. */

  bucket_name: string;
  /** object_name is the name of unsealed object to be reject. */

  object_name: string;
}
export interface MsgRejectSealObjectResponse {}
export interface MsgCopyObject {
  /** operator is the account address of the operator who has the CopyObject permission of the object to be deleted. */
  operator: string;
  /** src_bucket_name is the name of the bucket where the object to be copied is located */

  src_bucket_name: string;
  /** dst_bucket_name is the name of the bucket where the object is copied to. */

  dst_bucket_name: string;
  /** src_object_name is the name of the object which to be copied */

  src_object_name: string;
  /** dst_object_name is the name of the object which is copied to */

  dst_object_name: string;
  /** primary_sp_approval is the approval info of the primary SP which indicates that primary sp confirm the user's request. */

  dst_primary_sp_approval?: Approval;
}
export interface MsgCopyObjectResponse {
  object_id: string;
}
export interface MsgDeleteObject {
  /** operator is the account address of the operator who has the DeleteObject permission of the object to be deleted. */
  operator: string;
  /** bucket_name is the name of the bucket where the object which to be deleted is stored. */

  bucket_name: string;
  /** object_name is the name of the object which to be deleted. */

  object_name: string;
}
export interface MsgDeleteObjectResponse {}
export interface MsgCreateGroup {
  /** owner is the account address of group owner who create the group */
  creator: string;
  /** group_name is the name of the group. it's not globally unique. */

  group_name: string;
  /** member_request is a list of member which to be add or remove */

  members: string[];
}
export interface MsgCreateGroupResponse {
  group_id: string;
}
export interface MsgDeleteGroup {
  /** operator is the account address of the operator who has the DeleteGroup permission of the group to be deleted. */
  operator: string;
  /** group_name is the name of the group which to be deleted */

  group_name: string;
}
export interface MsgDeleteGroupResponse {}
export interface MsgUpdateGroupMember {
  /** operator is the account address of the operator who has the UpdateGroupMember permission of the group. */
  operator: string;
  /** group_name is the name of the group which to be updated */

  group_name: string;
  /** members_to_add is a list of members account address which will be add to the group */

  members_to_add: string[];
  /** members_to_delete is a list of members account address which will be remove from the group */

  members_to_delete: string[];
}
export interface MsgUpdateGroupMemberResponse {}
export interface MsgLeaveGroup {
  /** member is the account address of the member who want to leave the group */
  member: string;
  /** group_owner is the owner of the group you want to leave */

  group_owner: string;
  /** group_name is the name of the group you want to leave */

  group_name: string;
}
export interface MsgLeaveGroupResponse {}
export interface MsgUpdateBucketInfo {
  /** operator is the account address of the operator */
  operator: string;
  /** bucket_name is the name of bucket which you'll update */

  bucket_name: string;
  /** read_quota is the traffic quota that you read from primary sp */

  read_quota: Long;
  /** payment_address is the account address of the payment account */

  payment_address: string;
}
export interface MsgUpdateBucketInfoResponse {}
export interface MsgCancelCreateObject {
  /** operator is the account address of the operator */
  operator: string;
  /** bucket_name is the name of the bucket */

  bucket_name: string;
  /** object_name is the name of the object */

  object_name: string;
}
export interface MsgCancelCreateObjectResponse {}
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
export interface MsgPutPolicyResponse {
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
export interface MsgDeletePolicyResponse {
  id: string;
}

function createBaseMsgCreateBucket(): MsgCreateBucket {
  return {
    creator: "",
    bucket_name: "",
    is_public: false,
    payment_address: "",
    primary_sp_address: "",
    primary_sp_approval: undefined,
    read_quota: Long.UZERO
  };
}

export const MsgCreateBucket = {
  encode(message: MsgCreateBucket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.bucket_name !== "") {
      writer.uint32(18).string(message.bucket_name);
    }

    if (message.is_public === true) {
      writer.uint32(24).bool(message.is_public);
    }

    if (message.payment_address !== "") {
      writer.uint32(34).string(message.payment_address);
    }

    if (message.primary_sp_address !== "") {
      writer.uint32(50).string(message.primary_sp_address);
    }

    if (message.primary_sp_approval !== undefined) {
      Approval.encode(message.primary_sp_approval, writer.uint32(58).fork()).ldelim();
    }

    if (!message.read_quota.isZero()) {
      writer.uint32(64).uint64(message.read_quota);
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
          message.bucket_name = reader.string();
          break;

        case 3:
          message.is_public = reader.bool();
          break;

        case 4:
          message.payment_address = reader.string();
          break;

        case 6:
          message.primary_sp_address = reader.string();
          break;

        case 7:
          message.primary_sp_approval = Approval.decode(reader, reader.uint32());
          break;

        case 8:
          message.read_quota = (reader.uint64() as Long);
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
      bucket_name: isSet(object.bucket_name) ? String(object.bucket_name) : "",
      is_public: isSet(object.is_public) ? Boolean(object.is_public) : false,
      payment_address: isSet(object.payment_address) ? String(object.payment_address) : "",
      primary_sp_address: isSet(object.primary_sp_address) ? String(object.primary_sp_address) : "",
      primary_sp_approval: isSet(object.primary_sp_approval) ? Approval.fromJSON(object.primary_sp_approval) : undefined,
      read_quota: isSet(object.read_quota) ? Long.fromValue(object.read_quota) : Long.UZERO
    };
  },

  toJSON(message: MsgCreateBucket): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.bucket_name !== undefined && (obj.bucket_name = message.bucket_name);
    message.is_public !== undefined && (obj.is_public = message.is_public);
    message.payment_address !== undefined && (obj.payment_address = message.payment_address);
    message.primary_sp_address !== undefined && (obj.primary_sp_address = message.primary_sp_address);
    message.primary_sp_approval !== undefined && (obj.primary_sp_approval = message.primary_sp_approval ? Approval.toJSON(message.primary_sp_approval) : undefined);
    message.read_quota !== undefined && (obj.read_quota = (message.read_quota || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateBucket>, I>>(object: I): MsgCreateBucket {
    const message = createBaseMsgCreateBucket();
    message.creator = object.creator ?? "";
    message.bucket_name = object.bucket_name ?? "";
    message.is_public = object.is_public ?? false;
    message.payment_address = object.payment_address ?? "";
    message.primary_sp_address = object.primary_sp_address ?? "";
    message.primary_sp_approval = object.primary_sp_approval !== undefined && object.primary_sp_approval !== null ? Approval.fromPartial(object.primary_sp_approval) : undefined;
    message.read_quota = object.read_quota !== undefined && object.read_quota !== null ? Long.fromValue(object.read_quota) : Long.UZERO;
    return message;
  }

};

function createBaseMsgCreateBucketResponse(): MsgCreateBucketResponse {
  return {
    bucket_id: ""
  };
}

export const MsgCreateBucketResponse = {
  encode(message: MsgCreateBucketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bucket_id !== "") {
      writer.uint32(10).string(message.bucket_id);
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
          message.bucket_id = reader.string();
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
      bucket_id: isSet(object.bucket_id) ? String(object.bucket_id) : ""
    };
  },

  toJSON(message: MsgCreateBucketResponse): unknown {
    const obj: any = {};
    message.bucket_id !== undefined && (obj.bucket_id = message.bucket_id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateBucketResponse>, I>>(object: I): MsgCreateBucketResponse {
    const message = createBaseMsgCreateBucketResponse();
    message.bucket_id = object.bucket_id ?? "";
    return message;
  }

};

function createBaseMsgDeleteBucket(): MsgDeleteBucket {
  return {
    operator: "",
    bucket_name: ""
  };
}

export const MsgDeleteBucket = {
  encode(message: MsgDeleteBucket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }

    if (message.bucket_name !== "") {
      writer.uint32(18).string(message.bucket_name);
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
          message.bucket_name = reader.string();
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
      bucket_name: isSet(object.bucket_name) ? String(object.bucket_name) : ""
    };
  },

  toJSON(message: MsgDeleteBucket): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucket_name !== undefined && (obj.bucket_name = message.bucket_name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteBucket>, I>>(object: I): MsgDeleteBucket {
    const message = createBaseMsgDeleteBucket();
    message.operator = object.operator ?? "";
    message.bucket_name = object.bucket_name ?? "";
    return message;
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
  }

};

function createBaseMsgCreateObject(): MsgCreateObject {
  return {
    creator: "",
    bucket_name: "",
    object_name: "",
    payload_size: Long.UZERO,
    is_public: false,
    content_type: "",
    primary_sp_approval: undefined,
    expect_checksums: [],
    redundancy_type: 0,
    expect_secondary_sp_addresses: []
  };
}

export const MsgCreateObject = {
  encode(message: MsgCreateObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.bucket_name !== "") {
      writer.uint32(18).string(message.bucket_name);
    }

    if (message.object_name !== "") {
      writer.uint32(26).string(message.object_name);
    }

    if (!message.payload_size.isZero()) {
      writer.uint32(32).uint64(message.payload_size);
    }

    if (message.is_public === true) {
      writer.uint32(40).bool(message.is_public);
    }

    if (message.content_type !== "") {
      writer.uint32(50).string(message.content_type);
    }

    if (message.primary_sp_approval !== undefined) {
      Approval.encode(message.primary_sp_approval, writer.uint32(58).fork()).ldelim();
    }

    for (const v of message.expect_checksums) {
      writer.uint32(66).bytes(v!);
    }

    if (message.redundancy_type !== 0) {
      writer.uint32(72).int32(message.redundancy_type);
    }

    for (const v of message.expect_secondary_sp_addresses) {
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
          message.bucket_name = reader.string();
          break;

        case 3:
          message.object_name = reader.string();
          break;

        case 4:
          message.payload_size = (reader.uint64() as Long);
          break;

        case 5:
          message.is_public = reader.bool();
          break;

        case 6:
          message.content_type = reader.string();
          break;

        case 7:
          message.primary_sp_approval = Approval.decode(reader, reader.uint32());
          break;

        case 8:
          message.expect_checksums.push(reader.bytes());
          break;

        case 9:
          message.redundancy_type = (reader.int32() as any);
          break;

        case 10:
          message.expect_secondary_sp_addresses.push(reader.string());
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
      bucket_name: isSet(object.bucket_name) ? String(object.bucket_name) : "",
      object_name: isSet(object.object_name) ? String(object.object_name) : "",
      payload_size: isSet(object.payload_size) ? Long.fromValue(object.payload_size) : Long.UZERO,
      is_public: isSet(object.is_public) ? Boolean(object.is_public) : false,
      content_type: isSet(object.content_type) ? String(object.content_type) : "",
      primary_sp_approval: isSet(object.primary_sp_approval) ? Approval.fromJSON(object.primary_sp_approval) : undefined,
      expect_checksums: Array.isArray(object?.expect_checksums) ? object.expect_checksums.map((e: any) => bytesFromBase64(e)) : [],
      redundancy_type: isSet(object.redundancy_type) ? redundancyTypeFromJSON(object.redundancy_type) : 0,
      expect_secondary_sp_addresses: Array.isArray(object?.expect_secondary_sp_addresses) ? object.expect_secondary_sp_addresses.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: MsgCreateObject): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.bucket_name !== undefined && (obj.bucket_name = message.bucket_name);
    message.object_name !== undefined && (obj.object_name = message.object_name);
    message.payload_size !== undefined && (obj.payload_size = (message.payload_size || Long.UZERO).toString());
    message.is_public !== undefined && (obj.is_public = message.is_public);
    message.content_type !== undefined && (obj.content_type = message.content_type);
    message.primary_sp_approval !== undefined && (obj.primary_sp_approval = message.primary_sp_approval ? Approval.toJSON(message.primary_sp_approval) : undefined);

    if (message.expect_checksums) {
      obj.expect_checksums = message.expect_checksums.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.expect_checksums = [];
    }

    message.redundancy_type !== undefined && (obj.redundancy_type = redundancyTypeToJSON(message.redundancy_type));

    if (message.expect_secondary_sp_addresses) {
      obj.expect_secondary_sp_addresses = message.expect_secondary_sp_addresses.map(e => e);
    } else {
      obj.expect_secondary_sp_addresses = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateObject>, I>>(object: I): MsgCreateObject {
    const message = createBaseMsgCreateObject();
    message.creator = object.creator ?? "";
    message.bucket_name = object.bucket_name ?? "";
    message.object_name = object.object_name ?? "";
    message.payload_size = object.payload_size !== undefined && object.payload_size !== null ? Long.fromValue(object.payload_size) : Long.UZERO;
    message.is_public = object.is_public ?? false;
    message.content_type = object.content_type ?? "";
    message.primary_sp_approval = object.primary_sp_approval !== undefined && object.primary_sp_approval !== null ? Approval.fromPartial(object.primary_sp_approval) : undefined;
    message.expect_checksums = object.expect_checksums?.map(e => e) || [];
    message.redundancy_type = object.redundancy_type ?? 0;
    message.expect_secondary_sp_addresses = object.expect_secondary_sp_addresses?.map(e => e) || [];
    return message;
  }

};

function createBaseMsgCreateObjectResponse(): MsgCreateObjectResponse {
  return {
    object_id: ""
  };
}

export const MsgCreateObjectResponse = {
  encode(message: MsgCreateObjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.object_id !== "") {
      writer.uint32(10).string(message.object_id);
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
          message.object_id = reader.string();
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
      object_id: isSet(object.object_id) ? String(object.object_id) : ""
    };
  },

  toJSON(message: MsgCreateObjectResponse): unknown {
    const obj: any = {};
    message.object_id !== undefined && (obj.object_id = message.object_id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateObjectResponse>, I>>(object: I): MsgCreateObjectResponse {
    const message = createBaseMsgCreateObjectResponse();
    message.object_id = object.object_id ?? "";
    return message;
  }

};

function createBaseMsgSealObject(): MsgSealObject {
  return {
    operator: "",
    bucket_name: "",
    object_name: "",
    secondary_sp_addresses: [],
    secondary_sp_signatures: []
  };
}

export const MsgSealObject = {
  encode(message: MsgSealObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }

    if (message.bucket_name !== "") {
      writer.uint32(18).string(message.bucket_name);
    }

    if (message.object_name !== "") {
      writer.uint32(26).string(message.object_name);
    }

    for (const v of message.secondary_sp_addresses) {
      writer.uint32(34).string(v!);
    }

    for (const v of message.secondary_sp_signatures) {
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
          message.bucket_name = reader.string();
          break;

        case 3:
          message.object_name = reader.string();
          break;

        case 4:
          message.secondary_sp_addresses.push(reader.string());
          break;

        case 5:
          message.secondary_sp_signatures.push(reader.bytes());
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
      bucket_name: isSet(object.bucket_name) ? String(object.bucket_name) : "",
      object_name: isSet(object.object_name) ? String(object.object_name) : "",
      secondary_sp_addresses: Array.isArray(object?.secondary_sp_addresses) ? object.secondary_sp_addresses.map((e: any) => String(e)) : [],
      secondary_sp_signatures: Array.isArray(object?.secondary_sp_signatures) ? object.secondary_sp_signatures.map((e: any) => bytesFromBase64(e)) : []
    };
  },

  toJSON(message: MsgSealObject): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucket_name !== undefined && (obj.bucket_name = message.bucket_name);
    message.object_name !== undefined && (obj.object_name = message.object_name);

    if (message.secondary_sp_addresses) {
      obj.secondary_sp_addresses = message.secondary_sp_addresses.map(e => e);
    } else {
      obj.secondary_sp_addresses = [];
    }

    if (message.secondary_sp_signatures) {
      obj.secondary_sp_signatures = message.secondary_sp_signatures.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.secondary_sp_signatures = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSealObject>, I>>(object: I): MsgSealObject {
    const message = createBaseMsgSealObject();
    message.operator = object.operator ?? "";
    message.bucket_name = object.bucket_name ?? "";
    message.object_name = object.object_name ?? "";
    message.secondary_sp_addresses = object.secondary_sp_addresses?.map(e => e) || [];
    message.secondary_sp_signatures = object.secondary_sp_signatures?.map(e => e) || [];
    return message;
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
  }

};

function createBaseMsgRejectSealObject(): MsgRejectSealObject {
  return {
    operator: "",
    bucket_name: "",
    object_name: ""
  };
}

export const MsgRejectSealObject = {
  encode(message: MsgRejectSealObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }

    if (message.bucket_name !== "") {
      writer.uint32(18).string(message.bucket_name);
    }

    if (message.object_name !== "") {
      writer.uint32(26).string(message.object_name);
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
          message.bucket_name = reader.string();
          break;

        case 3:
          message.object_name = reader.string();
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
      bucket_name: isSet(object.bucket_name) ? String(object.bucket_name) : "",
      object_name: isSet(object.object_name) ? String(object.object_name) : ""
    };
  },

  toJSON(message: MsgRejectSealObject): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucket_name !== undefined && (obj.bucket_name = message.bucket_name);
    message.object_name !== undefined && (obj.object_name = message.object_name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRejectSealObject>, I>>(object: I): MsgRejectSealObject {
    const message = createBaseMsgRejectSealObject();
    message.operator = object.operator ?? "";
    message.bucket_name = object.bucket_name ?? "";
    message.object_name = object.object_name ?? "";
    return message;
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
  }

};

function createBaseMsgCopyObject(): MsgCopyObject {
  return {
    operator: "",
    src_bucket_name: "",
    dst_bucket_name: "",
    src_object_name: "",
    dst_object_name: "",
    dst_primary_sp_approval: undefined
  };
}

export const MsgCopyObject = {
  encode(message: MsgCopyObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }

    if (message.src_bucket_name !== "") {
      writer.uint32(18).string(message.src_bucket_name);
    }

    if (message.dst_bucket_name !== "") {
      writer.uint32(26).string(message.dst_bucket_name);
    }

    if (message.src_object_name !== "") {
      writer.uint32(34).string(message.src_object_name);
    }

    if (message.dst_object_name !== "") {
      writer.uint32(42).string(message.dst_object_name);
    }

    if (message.dst_primary_sp_approval !== undefined) {
      Approval.encode(message.dst_primary_sp_approval, writer.uint32(50).fork()).ldelim();
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
          message.src_bucket_name = reader.string();
          break;

        case 3:
          message.dst_bucket_name = reader.string();
          break;

        case 4:
          message.src_object_name = reader.string();
          break;

        case 5:
          message.dst_object_name = reader.string();
          break;

        case 6:
          message.dst_primary_sp_approval = Approval.decode(reader, reader.uint32());
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
      src_bucket_name: isSet(object.src_bucket_name) ? String(object.src_bucket_name) : "",
      dst_bucket_name: isSet(object.dst_bucket_name) ? String(object.dst_bucket_name) : "",
      src_object_name: isSet(object.src_object_name) ? String(object.src_object_name) : "",
      dst_object_name: isSet(object.dst_object_name) ? String(object.dst_object_name) : "",
      dst_primary_sp_approval: isSet(object.dst_primary_sp_approval) ? Approval.fromJSON(object.dst_primary_sp_approval) : undefined
    };
  },

  toJSON(message: MsgCopyObject): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.src_bucket_name !== undefined && (obj.src_bucket_name = message.src_bucket_name);
    message.dst_bucket_name !== undefined && (obj.dst_bucket_name = message.dst_bucket_name);
    message.src_object_name !== undefined && (obj.src_object_name = message.src_object_name);
    message.dst_object_name !== undefined && (obj.dst_object_name = message.dst_object_name);
    message.dst_primary_sp_approval !== undefined && (obj.dst_primary_sp_approval = message.dst_primary_sp_approval ? Approval.toJSON(message.dst_primary_sp_approval) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCopyObject>, I>>(object: I): MsgCopyObject {
    const message = createBaseMsgCopyObject();
    message.operator = object.operator ?? "";
    message.src_bucket_name = object.src_bucket_name ?? "";
    message.dst_bucket_name = object.dst_bucket_name ?? "";
    message.src_object_name = object.src_object_name ?? "";
    message.dst_object_name = object.dst_object_name ?? "";
    message.dst_primary_sp_approval = object.dst_primary_sp_approval !== undefined && object.dst_primary_sp_approval !== null ? Approval.fromPartial(object.dst_primary_sp_approval) : undefined;
    return message;
  }

};

function createBaseMsgCopyObjectResponse(): MsgCopyObjectResponse {
  return {
    object_id: ""
  };
}

export const MsgCopyObjectResponse = {
  encode(message: MsgCopyObjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.object_id !== "") {
      writer.uint32(10).string(message.object_id);
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
          message.object_id = reader.string();
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
      object_id: isSet(object.object_id) ? String(object.object_id) : ""
    };
  },

  toJSON(message: MsgCopyObjectResponse): unknown {
    const obj: any = {};
    message.object_id !== undefined && (obj.object_id = message.object_id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCopyObjectResponse>, I>>(object: I): MsgCopyObjectResponse {
    const message = createBaseMsgCopyObjectResponse();
    message.object_id = object.object_id ?? "";
    return message;
  }

};

function createBaseMsgDeleteObject(): MsgDeleteObject {
  return {
    operator: "",
    bucket_name: "",
    object_name: ""
  };
}

export const MsgDeleteObject = {
  encode(message: MsgDeleteObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }

    if (message.bucket_name !== "") {
      writer.uint32(18).string(message.bucket_name);
    }

    if (message.object_name !== "") {
      writer.uint32(26).string(message.object_name);
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
          message.bucket_name = reader.string();
          break;

        case 3:
          message.object_name = reader.string();
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
      bucket_name: isSet(object.bucket_name) ? String(object.bucket_name) : "",
      object_name: isSet(object.object_name) ? String(object.object_name) : ""
    };
  },

  toJSON(message: MsgDeleteObject): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucket_name !== undefined && (obj.bucket_name = message.bucket_name);
    message.object_name !== undefined && (obj.object_name = message.object_name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteObject>, I>>(object: I): MsgDeleteObject {
    const message = createBaseMsgDeleteObject();
    message.operator = object.operator ?? "";
    message.bucket_name = object.bucket_name ?? "";
    message.object_name = object.object_name ?? "";
    return message;
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
  }

};

function createBaseMsgCreateGroup(): MsgCreateGroup {
  return {
    creator: "",
    group_name: "",
    members: []
  };
}

export const MsgCreateGroup = {
  encode(message: MsgCreateGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.group_name !== "") {
      writer.uint32(18).string(message.group_name);
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
          message.group_name = reader.string();
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
      group_name: isSet(object.group_name) ? String(object.group_name) : "",
      members: Array.isArray(object?.members) ? object.members.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: MsgCreateGroup): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.group_name !== undefined && (obj.group_name = message.group_name);

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
    message.group_name = object.group_name ?? "";
    message.members = object.members?.map(e => e) || [];
    return message;
  }

};

function createBaseMsgCreateGroupResponse(): MsgCreateGroupResponse {
  return {
    group_id: ""
  };
}

export const MsgCreateGroupResponse = {
  encode(message: MsgCreateGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.group_id !== "") {
      writer.uint32(10).string(message.group_id);
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
          message.group_id = reader.string();
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
      group_id: isSet(object.group_id) ? String(object.group_id) : ""
    };
  },

  toJSON(message: MsgCreateGroupResponse): unknown {
    const obj: any = {};
    message.group_id !== undefined && (obj.group_id = message.group_id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateGroupResponse>, I>>(object: I): MsgCreateGroupResponse {
    const message = createBaseMsgCreateGroupResponse();
    message.group_id = object.group_id ?? "";
    return message;
  }

};

function createBaseMsgDeleteGroup(): MsgDeleteGroup {
  return {
    operator: "",
    group_name: ""
  };
}

export const MsgDeleteGroup = {
  encode(message: MsgDeleteGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }

    if (message.group_name !== "") {
      writer.uint32(18).string(message.group_name);
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
          message.group_name = reader.string();
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
      group_name: isSet(object.group_name) ? String(object.group_name) : ""
    };
  },

  toJSON(message: MsgDeleteGroup): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.group_name !== undefined && (obj.group_name = message.group_name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteGroup>, I>>(object: I): MsgDeleteGroup {
    const message = createBaseMsgDeleteGroup();
    message.operator = object.operator ?? "";
    message.group_name = object.group_name ?? "";
    return message;
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
  }

};

function createBaseMsgUpdateGroupMember(): MsgUpdateGroupMember {
  return {
    operator: "",
    group_name: "",
    members_to_add: [],
    members_to_delete: []
  };
}

export const MsgUpdateGroupMember = {
  encode(message: MsgUpdateGroupMember, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }

    if (message.group_name !== "") {
      writer.uint32(18).string(message.group_name);
    }

    for (const v of message.members_to_add) {
      writer.uint32(26).string(v!);
    }

    for (const v of message.members_to_delete) {
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
          message.group_name = reader.string();
          break;

        case 3:
          message.members_to_add.push(reader.string());
          break;

        case 4:
          message.members_to_delete.push(reader.string());
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
      group_name: isSet(object.group_name) ? String(object.group_name) : "",
      members_to_add: Array.isArray(object?.members_to_add) ? object.members_to_add.map((e: any) => String(e)) : [],
      members_to_delete: Array.isArray(object?.members_to_delete) ? object.members_to_delete.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: MsgUpdateGroupMember): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.group_name !== undefined && (obj.group_name = message.group_name);

    if (message.members_to_add) {
      obj.members_to_add = message.members_to_add.map(e => e);
    } else {
      obj.members_to_add = [];
    }

    if (message.members_to_delete) {
      obj.members_to_delete = message.members_to_delete.map(e => e);
    } else {
      obj.members_to_delete = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateGroupMember>, I>>(object: I): MsgUpdateGroupMember {
    const message = createBaseMsgUpdateGroupMember();
    message.operator = object.operator ?? "";
    message.group_name = object.group_name ?? "";
    message.members_to_add = object.members_to_add?.map(e => e) || [];
    message.members_to_delete = object.members_to_delete?.map(e => e) || [];
    return message;
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
  }

};

function createBaseMsgLeaveGroup(): MsgLeaveGroup {
  return {
    member: "",
    group_owner: "",
    group_name: ""
  };
}

export const MsgLeaveGroup = {
  encode(message: MsgLeaveGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.member !== "") {
      writer.uint32(10).string(message.member);
    }

    if (message.group_owner !== "") {
      writer.uint32(18).string(message.group_owner);
    }

    if (message.group_name !== "") {
      writer.uint32(26).string(message.group_name);
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
          message.group_owner = reader.string();
          break;

        case 3:
          message.group_name = reader.string();
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
      group_owner: isSet(object.group_owner) ? String(object.group_owner) : "",
      group_name: isSet(object.group_name) ? String(object.group_name) : ""
    };
  },

  toJSON(message: MsgLeaveGroup): unknown {
    const obj: any = {};
    message.member !== undefined && (obj.member = message.member);
    message.group_owner !== undefined && (obj.group_owner = message.group_owner);
    message.group_name !== undefined && (obj.group_name = message.group_name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgLeaveGroup>, I>>(object: I): MsgLeaveGroup {
    const message = createBaseMsgLeaveGroup();
    message.member = object.member ?? "";
    message.group_owner = object.group_owner ?? "";
    message.group_name = object.group_name ?? "";
    return message;
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
  }

};

function createBaseMsgUpdateBucketInfo(): MsgUpdateBucketInfo {
  return {
    operator: "",
    bucket_name: "",
    read_quota: Long.UZERO,
    payment_address: ""
  };
}

export const MsgUpdateBucketInfo = {
  encode(message: MsgUpdateBucketInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }

    if (message.bucket_name !== "") {
      writer.uint32(18).string(message.bucket_name);
    }

    if (!message.read_quota.isZero()) {
      writer.uint32(24).uint64(message.read_quota);
    }

    if (message.payment_address !== "") {
      writer.uint32(34).string(message.payment_address);
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
          message.bucket_name = reader.string();
          break;

        case 3:
          message.read_quota = (reader.uint64() as Long);
          break;

        case 4:
          message.payment_address = reader.string();
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
      bucket_name: isSet(object.bucket_name) ? String(object.bucket_name) : "",
      read_quota: isSet(object.read_quota) ? Long.fromValue(object.read_quota) : Long.UZERO,
      payment_address: isSet(object.payment_address) ? String(object.payment_address) : ""
    };
  },

  toJSON(message: MsgUpdateBucketInfo): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucket_name !== undefined && (obj.bucket_name = message.bucket_name);
    message.read_quota !== undefined && (obj.read_quota = (message.read_quota || Long.UZERO).toString());
    message.payment_address !== undefined && (obj.payment_address = message.payment_address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateBucketInfo>, I>>(object: I): MsgUpdateBucketInfo {
    const message = createBaseMsgUpdateBucketInfo();
    message.operator = object.operator ?? "";
    message.bucket_name = object.bucket_name ?? "";
    message.read_quota = object.read_quota !== undefined && object.read_quota !== null ? Long.fromValue(object.read_quota) : Long.UZERO;
    message.payment_address = object.payment_address ?? "";
    return message;
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
  }

};

function createBaseMsgCancelCreateObject(): MsgCancelCreateObject {
  return {
    operator: "",
    bucket_name: "",
    object_name: ""
  };
}

export const MsgCancelCreateObject = {
  encode(message: MsgCancelCreateObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }

    if (message.bucket_name !== "") {
      writer.uint32(18).string(message.bucket_name);
    }

    if (message.object_name !== "") {
      writer.uint32(26).string(message.object_name);
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
          message.bucket_name = reader.string();
          break;

        case 3:
          message.object_name = reader.string();
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
      bucket_name: isSet(object.bucket_name) ? String(object.bucket_name) : "",
      object_name: isSet(object.object_name) ? String(object.object_name) : ""
    };
  },

  toJSON(message: MsgCancelCreateObject): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucket_name !== undefined && (obj.bucket_name = message.bucket_name);
    message.object_name !== undefined && (obj.object_name = message.object_name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelCreateObject>, I>>(object: I): MsgCancelCreateObject {
    const message = createBaseMsgCancelCreateObject();
    message.operator = object.operator ?? "";
    message.bucket_name = object.bucket_name ?? "";
    message.object_name = object.object_name ?? "";
    return message;
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