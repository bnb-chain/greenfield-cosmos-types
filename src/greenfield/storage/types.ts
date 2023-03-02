/* eslint-disable */
import { SourceType, ReadQuota, ObjectStatus, RedundancyType, sourceTypeFromJSON, readQuotaFromJSON, sourceTypeToJSON, readQuotaToJSON, objectStatusFromJSON, redundancyTypeFromJSON, objectStatusToJSON, redundancyTypeToJSON } from "./common";
import { OutFlowInUSD } from "../payment/base";
import { Long, isSet, DeepPartial, Exact, bytesFromBase64, base64FromBytes } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "bnbchain.greenfield.storage";
export interface BucketInfo {
  /** owner is the account address of bucket creator, it is also the bucket owner. */
  owner: string;
  /** bucket_name is a globally unique name of bucket */

  bucketName: string;
  /** is_public define the highest permissions for bucket. When the bucket is public, everyone can get the object in it. */

  isPublic: boolean;
  /** id is the unique identification for bucket. */

  id: string;
  /** source_type define the source of the bucket */

  sourceType: SourceType;
  /** create_at define the block number when the bucket created. */

  createAt: Long;
  /** payment_address is the address of the payment account */

  paymentAddress: string;
  /**
   * primary_sp_address is the address of the primary sp. Objects belongs to this bucket will never
   * leave this SP, unless you explicitly shift them to another SP.
   */

  primarySpAddress: string;
  /** read_quota defines the traffic quota for read */

  readQuota: ReadQuota;
  /** payment_price_time TODO(Owen): refine the comments */

  paymentPriceTime: Long;
  /** payment_out_flows */

  paymentOutFlows: OutFlowInUSD[];
}
export interface ObjectInfo {
  owner: string;
  /** bucket_name is the name of the bucket */

  bucketName: string;
  /** object_name is the name of object */

  objectName: string;
  /** id is the unique identifier of object */

  id: string;
  /** payloadSize is the total size of the object payload */

  payloadSize: Long;
  /** is_public define the highest permissions for object. When the object is public, everyone can access it. */

  isPublic: boolean;
  /** content_type define the format of the object which should be a standard MIME type. */

  contentType: string;
  /** create_at define the block number when the object created */

  createAt: Long;
  /** object_status define the upload status of the object. */

  objectStatus: ObjectStatus;
  /** redundancy_type define the type of the redundancy which can be multi-replication or EC. */

  redundancyType: RedundancyType;
  /** source_type define the source of the object. */

  sourceType: SourceType;
  /** checksums define the root hash of the pieces which stored in a SP. */

  checksums: Uint8Array[];
  /** secondary_sp_addresses define the addresses of secondary_sps */

  secondarySpAddresses: string[];
  /** lockedBalance */

  lockedBalance: string;
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
}
export interface GroupMemberInfo {
  member: string;
  id: string;
  expireTime: Long;
}

function createBaseBucketInfo(): BucketInfo {
  return {
    owner: "",
    bucketName: "",
    isPublic: false,
    id: "",
    sourceType: 0,
    createAt: Long.ZERO,
    paymentAddress: "",
    primarySpAddress: "",
    readQuota: 0,
    paymentPriceTime: Long.ZERO,
    paymentOutFlows: []
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

    if (message.isPublic === true) {
      writer.uint32(24).bool(message.isPublic);
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

    if (message.primarySpAddress !== "") {
      writer.uint32(66).string(message.primarySpAddress);
    }

    if (message.readQuota !== 0) {
      writer.uint32(72).int32(message.readQuota);
    }

    if (!message.paymentPriceTime.isZero()) {
      writer.uint32(80).int64(message.paymentPriceTime);
    }

    for (const v of message.paymentOutFlows) {
      OutFlowInUSD.encode(v!, writer.uint32(90).fork()).ldelim();
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
          message.isPublic = reader.bool();
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
          message.primarySpAddress = reader.string();
          break;

        case 9:
          message.readQuota = (reader.int32() as any);
          break;

        case 10:
          message.paymentPriceTime = (reader.int64() as Long);
          break;

        case 11:
          message.paymentOutFlows.push(OutFlowInUSD.decode(reader, reader.uint32()));
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
      isPublic: isSet(object.isPublic) ? Boolean(object.isPublic) : false,
      id: isSet(object.id) ? String(object.id) : "",
      sourceType: isSet(object.sourceType) ? sourceTypeFromJSON(object.sourceType) : 0,
      createAt: isSet(object.createAt) ? Long.fromValue(object.createAt) : Long.ZERO,
      paymentAddress: isSet(object.paymentAddress) ? String(object.paymentAddress) : "",
      primarySpAddress: isSet(object.primarySpAddress) ? String(object.primarySpAddress) : "",
      readQuota: isSet(object.readQuota) ? readQuotaFromJSON(object.readQuota) : 0,
      paymentPriceTime: isSet(object.paymentPriceTime) ? Long.fromValue(object.paymentPriceTime) : Long.ZERO,
      paymentOutFlows: Array.isArray(object?.paymentOutFlows) ? object.paymentOutFlows.map((e: any) => OutFlowInUSD.fromJSON(e)) : []
    };
  },

  toJSON(message: BucketInfo): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.isPublic !== undefined && (obj.isPublic = message.isPublic);
    message.id !== undefined && (obj.id = message.id);
    message.sourceType !== undefined && (obj.sourceType = sourceTypeToJSON(message.sourceType));
    message.createAt !== undefined && (obj.createAt = (message.createAt || Long.ZERO).toString());
    message.paymentAddress !== undefined && (obj.paymentAddress = message.paymentAddress);
    message.primarySpAddress !== undefined && (obj.primarySpAddress = message.primarySpAddress);
    message.readQuota !== undefined && (obj.readQuota = readQuotaToJSON(message.readQuota));
    message.paymentPriceTime !== undefined && (obj.paymentPriceTime = (message.paymentPriceTime || Long.ZERO).toString());

    if (message.paymentOutFlows) {
      obj.paymentOutFlows = message.paymentOutFlows.map(e => e ? OutFlowInUSD.toJSON(e) : undefined);
    } else {
      obj.paymentOutFlows = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BucketInfo>, I>>(object: I): BucketInfo {
    const message = createBaseBucketInfo();
    message.owner = object.owner ?? "";
    message.bucketName = object.bucketName ?? "";
    message.isPublic = object.isPublic ?? false;
    message.id = object.id ?? "";
    message.sourceType = object.sourceType ?? 0;
    message.createAt = object.createAt !== undefined && object.createAt !== null ? Long.fromValue(object.createAt) : Long.ZERO;
    message.paymentAddress = object.paymentAddress ?? "";
    message.primarySpAddress = object.primarySpAddress ?? "";
    message.readQuota = object.readQuota ?? 0;
    message.paymentPriceTime = object.paymentPriceTime !== undefined && object.paymentPriceTime !== null ? Long.fromValue(object.paymentPriceTime) : Long.ZERO;
    message.paymentOutFlows = object.paymentOutFlows?.map(e => OutFlowInUSD.fromPartial(e)) || [];
    return message;
  }

};

function createBaseObjectInfo(): ObjectInfo {
  return {
    owner: "",
    bucketName: "",
    objectName: "",
    id: "",
    payloadSize: Long.UZERO,
    isPublic: false,
    contentType: "",
    createAt: Long.ZERO,
    objectStatus: 0,
    redundancyType: 0,
    sourceType: 0,
    checksums: [],
    secondarySpAddresses: [],
    lockedBalance: ""
  };
}

export const ObjectInfo = {
  encode(message: ObjectInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }

    if (message.objectName !== "") {
      writer.uint32(26).string(message.objectName);
    }

    if (message.id !== "") {
      writer.uint32(34).string(message.id);
    }

    if (!message.payloadSize.isZero()) {
      writer.uint32(40).uint64(message.payloadSize);
    }

    if (message.isPublic === true) {
      writer.uint32(48).bool(message.isPublic);
    }

    if (message.contentType !== "") {
      writer.uint32(58).string(message.contentType);
    }

    if (!message.createAt.isZero()) {
      writer.uint32(64).int64(message.createAt);
    }

    if (message.objectStatus !== 0) {
      writer.uint32(72).int32(message.objectStatus);
    }

    if (message.redundancyType !== 0) {
      writer.uint32(80).int32(message.redundancyType);
    }

    if (message.sourceType !== 0) {
      writer.uint32(88).int32(message.sourceType);
    }

    for (const v of message.checksums) {
      writer.uint32(98).bytes(v!);
    }

    for (const v of message.secondarySpAddresses) {
      writer.uint32(106).string(v!);
    }

    if (message.lockedBalance !== "") {
      writer.uint32(114).string(message.lockedBalance);
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
          message.bucketName = reader.string();
          break;

        case 3:
          message.objectName = reader.string();
          break;

        case 4:
          message.id = reader.string();
          break;

        case 5:
          message.payloadSize = (reader.uint64() as Long);
          break;

        case 6:
          message.isPublic = reader.bool();
          break;

        case 7:
          message.contentType = reader.string();
          break;

        case 8:
          message.createAt = (reader.int64() as Long);
          break;

        case 9:
          message.objectStatus = (reader.int32() as any);
          break;

        case 10:
          message.redundancyType = (reader.int32() as any);
          break;

        case 11:
          message.sourceType = (reader.int32() as any);
          break;

        case 12:
          message.checksums.push(reader.bytes());
          break;

        case 13:
          message.secondarySpAddresses.push(reader.string());
          break;

        case 14:
          message.lockedBalance = reader.string();
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
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      objectName: isSet(object.objectName) ? String(object.objectName) : "",
      id: isSet(object.id) ? String(object.id) : "",
      payloadSize: isSet(object.payloadSize) ? Long.fromValue(object.payloadSize) : Long.UZERO,
      isPublic: isSet(object.isPublic) ? Boolean(object.isPublic) : false,
      contentType: isSet(object.contentType) ? String(object.contentType) : "",
      createAt: isSet(object.createAt) ? Long.fromValue(object.createAt) : Long.ZERO,
      objectStatus: isSet(object.objectStatus) ? objectStatusFromJSON(object.objectStatus) : 0,
      redundancyType: isSet(object.redundancyType) ? redundancyTypeFromJSON(object.redundancyType) : 0,
      sourceType: isSet(object.sourceType) ? sourceTypeFromJSON(object.sourceType) : 0,
      checksums: Array.isArray(object?.checksums) ? object.checksums.map((e: any) => bytesFromBase64(e)) : [],
      secondarySpAddresses: Array.isArray(object?.secondarySpAddresses) ? object.secondarySpAddresses.map((e: any) => String(e)) : [],
      lockedBalance: isSet(object.lockedBalance) ? String(object.lockedBalance) : ""
    };
  },

  toJSON(message: ObjectInfo): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.objectName !== undefined && (obj.objectName = message.objectName);
    message.id !== undefined && (obj.id = message.id);
    message.payloadSize !== undefined && (obj.payloadSize = (message.payloadSize || Long.UZERO).toString());
    message.isPublic !== undefined && (obj.isPublic = message.isPublic);
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

    if (message.secondarySpAddresses) {
      obj.secondarySpAddresses = message.secondarySpAddresses.map(e => e);
    } else {
      obj.secondarySpAddresses = [];
    }

    message.lockedBalance !== undefined && (obj.lockedBalance = message.lockedBalance);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ObjectInfo>, I>>(object: I): ObjectInfo {
    const message = createBaseObjectInfo();
    message.owner = object.owner ?? "";
    message.bucketName = object.bucketName ?? "";
    message.objectName = object.objectName ?? "";
    message.id = object.id ?? "";
    message.payloadSize = object.payloadSize !== undefined && object.payloadSize !== null ? Long.fromValue(object.payloadSize) : Long.UZERO;
    message.isPublic = object.isPublic ?? false;
    message.contentType = object.contentType ?? "";
    message.createAt = object.createAt !== undefined && object.createAt !== null ? Long.fromValue(object.createAt) : Long.ZERO;
    message.objectStatus = object.objectStatus ?? 0;
    message.redundancyType = object.redundancyType ?? 0;
    message.sourceType = object.sourceType ?? 0;
    message.checksums = object.checksums?.map(e => e) || [];
    message.secondarySpAddresses = object.secondarySpAddresses?.map(e => e) || [];
    message.lockedBalance = object.lockedBalance ?? "";
    return message;
  }

};

function createBaseGroupInfo(): GroupInfo {
  return {
    owner: "",
    groupName: "",
    sourceType: 0,
    id: ""
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
      sourceType: isSet(object.sourceType) ? sourceTypeFromJSON(object.sourceType) : 0,
      id: isSet(object.id) ? String(object.id) : ""
    };
  },

  toJSON(message: GroupInfo): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.groupName !== undefined && (obj.groupName = message.groupName);
    message.sourceType !== undefined && (obj.sourceType = sourceTypeToJSON(message.sourceType));
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GroupInfo>, I>>(object: I): GroupInfo {
    const message = createBaseGroupInfo();
    message.owner = object.owner ?? "";
    message.groupName = object.groupName ?? "";
    message.sourceType = object.sourceType ?? 0;
    message.id = object.id ?? "";
    return message;
  }

};

function createBaseGroupMemberInfo(): GroupMemberInfo {
  return {
    member: "",
    id: "",
    expireTime: Long.UZERO
  };
}

export const GroupMemberInfo = {
  encode(message: GroupMemberInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.member !== "") {
      writer.uint32(10).string(message.member);
    }

    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }

    if (!message.expireTime.isZero()) {
      writer.uint32(24).uint64(message.expireTime);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupMemberInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupMemberInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.member = reader.string();
          break;

        case 2:
          message.id = reader.string();
          break;

        case 3:
          message.expireTime = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GroupMemberInfo {
    return {
      member: isSet(object.member) ? String(object.member) : "",
      id: isSet(object.id) ? String(object.id) : "",
      expireTime: isSet(object.expireTime) ? Long.fromValue(object.expireTime) : Long.UZERO
    };
  },

  toJSON(message: GroupMemberInfo): unknown {
    const obj: any = {};
    message.member !== undefined && (obj.member = message.member);
    message.id !== undefined && (obj.id = message.id);
    message.expireTime !== undefined && (obj.expireTime = (message.expireTime || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GroupMemberInfo>, I>>(object: I): GroupMemberInfo {
    const message = createBaseGroupMemberInfo();
    message.member = object.member ?? "";
    message.id = object.id ?? "";
    message.expireTime = object.expireTime !== undefined && object.expireTime !== null ? Long.fromValue(object.expireTime) : Long.UZERO;
    return message;
  }

};