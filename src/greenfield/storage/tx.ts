/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial, Exact, Long, Rpc } from "../../helpers";
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
  /** primary_sp_approval_signature is the signature of the primary SP which indicates that primary sp confirm the user's request. */

  primarySpApprovalSignature: Uint8Array;
}
export interface MsgCreateBucketResponse {}
export interface MsgDeleteBucket {
  /** creator is the account address of the grantee who has the DeleteBucket permission of the bucket to be deleted. */
  operator: string;
  /** bucket_name is the name of the bucket to be deleted. */

  bucketName: string;
}
export interface MsgDeleteBucketResponse {}
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
  /**
   * primary_sp_approval_signature is the signature of the primary SP with its signature
   * which indicates that primary sp confirm the user's creation request.
   */

  primarySpApprovalSignature: Uint8Array;
  /** expect_checksums is a list of hashes which was generate by redundancy algorithm. */

  expectChecksums: Uint8Array[];
  /** expect_secondarySPs is a list of StorageProvider address, which is optional */

  expectSecondarySpAddresses: string[];
}
export interface MsgCreateObjectResponse {}
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
export interface MsgSealObjectResponse {}
export interface MsgRejectSealObject {
  /** operator is the account address of the object owner */
  operator: string;
  /** bucket_name is the name of the bucket where the object is stored. */

  bucketName: string;
  /** object_name is the name of unsealed object to be reject. */

  objectName: string;
}
export interface MsgRejectSealObjectResponse {}
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
  /** dst_primary_sp_approval_signature is a approval signature of primary sp */

  dstPrimarySpApprovalSignature: Uint8Array;
}
export interface MsgCopyObjectResponse {}
export interface MsgDeleteObject {
  /** operator is the account address of the operator who has the DeleteObject permission of the object to be deleted. */
  operator: string;
  /** bucket_name is the name of the bucket where the object which to be deleted is stored. */

  bucketName: string;
  /** object_name is the name of the object which to be deleted. */

  objectName: string;
}
export interface MsgDeleteObjectResponse {}
export interface MsgCreateGroup {
  /** owner is the account address of group owner who create the group */
  creator: string;
  /** group_name is the name of the group. it's not globally unique. */

  groupName: string;
  /** member_request is a list of member which to be add or remove */

  members: string[];
}
export interface MsgCreateGroupResponse {}
export interface MsgDeleteGroup {
  /** operator is the account address of the operator who has the DeleteGroup permission of the group to be deleted. */
  operator: string;
  /** group_name is the name of the group which to be deleted */

  groupName: string;
}
export interface MsgDeleteGroupResponse {}
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
export interface MsgUpdateGroupMemberResponse {}
export interface MsgLeaveGroup {
  /** member is the account address of the member who want to leave the group */
  member: string;
  /** group_owner is the owner of the group you want to leave */

  groupOwner: string;
  /** group_name is the name of the group you want to leave */

  groupName: string;
}
export interface MsgLeaveGroupResponse {}

function createBaseMsgCreateBucket(): MsgCreateBucket {
  return {
    creator: "",
    bucketName: "",
    isPublic: false,
    paymentAddress: "",
    primarySpAddress: "",
    primarySpApprovalSignature: new Uint8Array()
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

    if (message.primarySpApprovalSignature.length !== 0) {
      writer.uint32(58).bytes(message.primarySpApprovalSignature);
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
          message.primarySpApprovalSignature = reader.bytes();
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
      primarySpApprovalSignature: isSet(object.primarySpApprovalSignature) ? bytesFromBase64(object.primarySpApprovalSignature) : new Uint8Array()
    };
  },

  toJSON(message: MsgCreateBucket): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.isPublic !== undefined && (obj.isPublic = message.isPublic);
    message.paymentAddress !== undefined && (obj.paymentAddress = message.paymentAddress);
    message.primarySpAddress !== undefined && (obj.primarySpAddress = message.primarySpAddress);
    message.primarySpApprovalSignature !== undefined && (obj.primarySpApprovalSignature = base64FromBytes(message.primarySpApprovalSignature !== undefined ? message.primarySpApprovalSignature : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateBucket>, I>>(object: I): MsgCreateBucket {
    const message = createBaseMsgCreateBucket();
    message.creator = object.creator ?? "";
    message.bucketName = object.bucketName ?? "";
    message.isPublic = object.isPublic ?? false;
    message.paymentAddress = object.paymentAddress ?? "";
    message.primarySpAddress = object.primarySpAddress ?? "";
    message.primarySpApprovalSignature = object.primarySpApprovalSignature ?? new Uint8Array();
    return message;
  }

};

function createBaseMsgCreateBucketResponse(): MsgCreateBucketResponse {
  return {};
}

export const MsgCreateBucketResponse = {
  encode(_: MsgCreateBucketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBucketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBucketResponse();

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

  fromJSON(_: any): MsgCreateBucketResponse {
    return {};
  },

  toJSON(_: MsgCreateBucketResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateBucketResponse>, I>>(_: I): MsgCreateBucketResponse {
    const message = createBaseMsgCreateBucketResponse();
    return message;
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
    bucketName: "",
    objectName: "",
    payloadSize: Long.UZERO,
    isPublic: false,
    contentType: "",
    primarySpApprovalSignature: new Uint8Array(),
    expectChecksums: [],
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

    if (message.primarySpApprovalSignature.length !== 0) {
      writer.uint32(58).bytes(message.primarySpApprovalSignature);
    }

    for (const v of message.expectChecksums) {
      writer.uint32(66).bytes(v!);
    }

    for (const v of message.expectSecondarySpAddresses) {
      writer.uint32(74).string(v!);
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
          message.primarySpApprovalSignature = reader.bytes();
          break;

        case 8:
          message.expectChecksums.push(reader.bytes());
          break;

        case 9:
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
      primarySpApprovalSignature: isSet(object.primarySpApprovalSignature) ? bytesFromBase64(object.primarySpApprovalSignature) : new Uint8Array(),
      expectChecksums: Array.isArray(object?.expectChecksums) ? object.expectChecksums.map((e: any) => bytesFromBase64(e)) : [],
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
    message.primarySpApprovalSignature !== undefined && (obj.primarySpApprovalSignature = base64FromBytes(message.primarySpApprovalSignature !== undefined ? message.primarySpApprovalSignature : new Uint8Array()));

    if (message.expectChecksums) {
      obj.expectChecksums = message.expectChecksums.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.expectChecksums = [];
    }

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
    message.primarySpApprovalSignature = object.primarySpApprovalSignature ?? new Uint8Array();
    message.expectChecksums = object.expectChecksums?.map(e => e) || [];
    message.expectSecondarySpAddresses = object.expectSecondarySpAddresses?.map(e => e) || [];
    return message;
  }

};

function createBaseMsgCreateObjectResponse(): MsgCreateObjectResponse {
  return {};
}

export const MsgCreateObjectResponse = {
  encode(_: MsgCreateObjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateObjectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateObjectResponse();

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

  fromJSON(_: any): MsgCreateObjectResponse {
    return {};
  },

  toJSON(_: MsgCreateObjectResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateObjectResponse>, I>>(_: I): MsgCreateObjectResponse {
    const message = createBaseMsgCreateObjectResponse();
    return message;
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
    srcBucketName: "",
    dstBucketName: "",
    srcObjectName: "",
    dstObjectName: "",
    dstPrimarySpApprovalSignature: new Uint8Array()
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

    if (message.dstPrimarySpApprovalSignature.length !== 0) {
      writer.uint32(50).bytes(message.dstPrimarySpApprovalSignature);
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
          message.dstPrimarySpApprovalSignature = reader.bytes();
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
      dstPrimarySpApprovalSignature: isSet(object.dstPrimarySpApprovalSignature) ? bytesFromBase64(object.dstPrimarySpApprovalSignature) : new Uint8Array()
    };
  },

  toJSON(message: MsgCopyObject): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.srcBucketName !== undefined && (obj.srcBucketName = message.srcBucketName);
    message.dstBucketName !== undefined && (obj.dstBucketName = message.dstBucketName);
    message.srcObjectName !== undefined && (obj.srcObjectName = message.srcObjectName);
    message.dstObjectName !== undefined && (obj.dstObjectName = message.dstObjectName);
    message.dstPrimarySpApprovalSignature !== undefined && (obj.dstPrimarySpApprovalSignature = base64FromBytes(message.dstPrimarySpApprovalSignature !== undefined ? message.dstPrimarySpApprovalSignature : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCopyObject>, I>>(object: I): MsgCopyObject {
    const message = createBaseMsgCopyObject();
    message.operator = object.operator ?? "";
    message.srcBucketName = object.srcBucketName ?? "";
    message.dstBucketName = object.dstBucketName ?? "";
    message.srcObjectName = object.srcObjectName ?? "";
    message.dstObjectName = object.dstObjectName ?? "";
    message.dstPrimarySpApprovalSignature = object.dstPrimarySpApprovalSignature ?? new Uint8Array();
    return message;
  }

};

function createBaseMsgCopyObjectResponse(): MsgCopyObjectResponse {
  return {};
}

export const MsgCopyObjectResponse = {
  encode(_: MsgCopyObjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCopyObjectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCopyObjectResponse();

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

  fromJSON(_: any): MsgCopyObjectResponse {
    return {};
  },

  toJSON(_: MsgCopyObjectResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCopyObjectResponse>, I>>(_: I): MsgCopyObjectResponse {
    const message = createBaseMsgCopyObjectResponse();
    return message;
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
  }

};

function createBaseMsgCreateGroupResponse(): MsgCreateGroupResponse {
  return {};
}

export const MsgCreateGroupResponse = {
  encode(_: MsgCreateGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupResponse();

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

  fromJSON(_: any): MsgCreateGroupResponse {
    return {};
  },

  toJSON(_: MsgCreateGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateGroupResponse>, I>>(_: I): MsgCreateGroupResponse {
    const message = createBaseMsgCreateGroupResponse();
    return message;
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
/** Msg defines the Msg service. */

export interface Msg {
  CreateBucket(request: MsgCreateBucket): Promise<MsgCreateBucketResponse>;
  DeleteBucket(request: MsgDeleteBucket): Promise<MsgDeleteBucketResponse>;
  CreateObject(request: MsgCreateObject): Promise<MsgCreateObjectResponse>;
  SealObject(request: MsgSealObject): Promise<MsgSealObjectResponse>;
  RejectSealObject(request: MsgRejectSealObject): Promise<MsgRejectSealObjectResponse>;
  DeleteObject(request: MsgDeleteObject): Promise<MsgDeleteObjectResponse>;
  CreateGroup(request: MsgCreateGroup): Promise<MsgCreateGroupResponse>;
  DeleteGroup(request: MsgDeleteGroup): Promise<MsgDeleteGroupResponse>;
  UpdateGroupMember(request: MsgUpdateGroupMember): Promise<MsgUpdateGroupMemberResponse>;
  LeaveGroup(request: MsgLeaveGroup): Promise<MsgLeaveGroupResponse>;
  CopyObject(request: MsgCopyObject): Promise<MsgCopyObjectResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateBucket = this.CreateBucket.bind(this);
    this.DeleteBucket = this.DeleteBucket.bind(this);
    this.CreateObject = this.CreateObject.bind(this);
    this.SealObject = this.SealObject.bind(this);
    this.RejectSealObject = this.RejectSealObject.bind(this);
    this.DeleteObject = this.DeleteObject.bind(this);
    this.CreateGroup = this.CreateGroup.bind(this);
    this.DeleteGroup = this.DeleteGroup.bind(this);
    this.UpdateGroupMember = this.UpdateGroupMember.bind(this);
    this.LeaveGroup = this.LeaveGroup.bind(this);
    this.CopyObject = this.CopyObject.bind(this);
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

  DeleteObject(request: MsgDeleteObject): Promise<MsgDeleteObjectResponse> {
    const data = MsgDeleteObject.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.storage.Msg", "DeleteObject", data);
    return promise.then(data => MsgDeleteObjectResponse.decode(new _m0.Reader(data)));
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

  CopyObject(request: MsgCopyObject): Promise<MsgCopyObjectResponse> {
    const data = MsgCopyObject.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.storage.Msg", "CopyObject", data);
    return promise.then(data => MsgCopyObjectResponse.decode(new _m0.Reader(data)));
  }

}