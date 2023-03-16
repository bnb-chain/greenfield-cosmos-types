/* eslint-disable */
import { SourceType, ObjectStatus, RedundancyType, sourceTypeFromJSON, sourceTypeToJSON, objectStatusFromJSON, redundancyTypeFromJSON, objectStatusToJSON, redundancyTypeToJSON } from "./common";
import { Long, isSet, DeepPartial, Exact, bytesFromBase64, base64FromBytes } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "bnbchain.greenfield.storage";
export interface BucketInfo {
  /** owner is the account address of bucket creator, it is also the bucket owner. */
  owner: string;
  /** bucket_name is a globally unique name of bucket */

  bucketName: string;
  /** is_public define the highest permissions for bucket. When the bucket is public, everyone can get storage objects in it. */

  isPublic: boolean;
  /** id is the unique identification for bucket. */

  id: string;
  /** source_type defines which chain the user should send the bucket management transactions to */

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
  /** read_quota defines the traffic quota for read in bytes per month */

  readQuota: Long;
  /** billing info of the bucket */

  billingInfo?: BillingInfo;
}
/** BillingInfo is the billing information of the bucket */

export interface BillingInfo {
  /** the time of the payment price, used to calculate the charge rate of the bucket */
  priceTime: Long;
  /** the total size of the objects in the bucket, used to calculate the charge rate of the bucket */

  totalChargeSize: Long;
  /** secondary sp objects size statistics */

  secondarySpObjectsSize: SecondarySpObjectsSize[];
}
/** secondary sp objects size statistics */

export interface SecondarySpObjectsSize {
  /** address is the address of the secondary sp */
  spAddress: string;
  /** size is the total size of the objects in the secondary sp */

  totalChargeSize: Long;
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
export interface Trait {
  traitType: string;
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
    readQuota: Long.UZERO,
    billingInfo: undefined
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

    if (!message.readQuota.isZero()) {
      writer.uint32(72).uint64(message.readQuota);
    }

    if (message.billingInfo !== undefined) {
      BillingInfo.encode(message.billingInfo, writer.uint32(82).fork()).ldelim();
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
          message.readQuota = (reader.uint64() as Long);
          break;

        case 10:
          message.billingInfo = BillingInfo.decode(reader, reader.uint32());
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
      readQuota: isSet(object.readQuota) ? Long.fromValue(object.readQuota) : Long.UZERO,
      billingInfo: isSet(object.billingInfo) ? BillingInfo.fromJSON(object.billingInfo) : undefined
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
    message.readQuota !== undefined && (obj.readQuota = (message.readQuota || Long.UZERO).toString());
    message.billingInfo !== undefined && (obj.billingInfo = message.billingInfo ? BillingInfo.toJSON(message.billingInfo) : undefined);
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
    message.readQuota = object.readQuota !== undefined && object.readQuota !== null ? Long.fromValue(object.readQuota) : Long.UZERO;
    message.billingInfo = object.billingInfo !== undefined && object.billingInfo !== null ? BillingInfo.fromPartial(object.billingInfo) : undefined;
    return message;
  }

};

function createBaseBillingInfo(): BillingInfo {
  return {
    priceTime: Long.ZERO,
    totalChargeSize: Long.UZERO,
    secondarySpObjectsSize: []
  };
}

export const BillingInfo = {
  encode(message: BillingInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.priceTime.isZero()) {
      writer.uint32(8).int64(message.priceTime);
    }

    if (!message.totalChargeSize.isZero()) {
      writer.uint32(16).uint64(message.totalChargeSize);
    }

    for (const v of message.secondarySpObjectsSize) {
      SecondarySpObjectsSize.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BillingInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBillingInfo();

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
          message.secondarySpObjectsSize.push(SecondarySpObjectsSize.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BillingInfo {
    return {
      priceTime: isSet(object.priceTime) ? Long.fromValue(object.priceTime) : Long.ZERO,
      totalChargeSize: isSet(object.totalChargeSize) ? Long.fromValue(object.totalChargeSize) : Long.UZERO,
      secondarySpObjectsSize: Array.isArray(object?.secondarySpObjectsSize) ? object.secondarySpObjectsSize.map((e: any) => SecondarySpObjectsSize.fromJSON(e)) : []
    };
  },

  toJSON(message: BillingInfo): unknown {
    const obj: any = {};
    message.priceTime !== undefined && (obj.priceTime = (message.priceTime || Long.ZERO).toString());
    message.totalChargeSize !== undefined && (obj.totalChargeSize = (message.totalChargeSize || Long.UZERO).toString());

    if (message.secondarySpObjectsSize) {
      obj.secondarySpObjectsSize = message.secondarySpObjectsSize.map(e => e ? SecondarySpObjectsSize.toJSON(e) : undefined);
    } else {
      obj.secondarySpObjectsSize = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BillingInfo>, I>>(object: I): BillingInfo {
    const message = createBaseBillingInfo();
    message.priceTime = object.priceTime !== undefined && object.priceTime !== null ? Long.fromValue(object.priceTime) : Long.ZERO;
    message.totalChargeSize = object.totalChargeSize !== undefined && object.totalChargeSize !== null ? Long.fromValue(object.totalChargeSize) : Long.UZERO;
    message.secondarySpObjectsSize = object.secondarySpObjectsSize?.map(e => SecondarySpObjectsSize.fromPartial(e)) || [];
    return message;
  }

};

function createBaseSecondarySpObjectsSize(): SecondarySpObjectsSize {
  return {
    spAddress: "",
    totalChargeSize: Long.UZERO
  };
}

export const SecondarySpObjectsSize = {
  encode(message: SecondarySpObjectsSize, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spAddress !== "") {
      writer.uint32(10).string(message.spAddress);
    }

    if (!message.totalChargeSize.isZero()) {
      writer.uint32(16).uint64(message.totalChargeSize);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SecondarySpObjectsSize {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSecondarySpObjectsSize();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.spAddress = reader.string();
          break;

        case 2:
          message.totalChargeSize = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SecondarySpObjectsSize {
    return {
      spAddress: isSet(object.spAddress) ? String(object.spAddress) : "",
      totalChargeSize: isSet(object.totalChargeSize) ? Long.fromValue(object.totalChargeSize) : Long.UZERO
    };
  },

  toJSON(message: SecondarySpObjectsSize): unknown {
    const obj: any = {};
    message.spAddress !== undefined && (obj.spAddress = message.spAddress);
    message.totalChargeSize !== undefined && (obj.totalChargeSize = (message.totalChargeSize || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SecondarySpObjectsSize>, I>>(object: I): SecondarySpObjectsSize {
    const message = createBaseSecondarySpObjectsSize();
    message.spAddress = object.spAddress ?? "";
    message.totalChargeSize = object.totalChargeSize !== undefined && object.totalChargeSize !== null ? Long.fromValue(object.totalChargeSize) : Long.UZERO;
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
    secondarySpAddresses: []
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
      secondarySpAddresses: Array.isArray(object?.secondarySpAddresses) ? object.secondarySpAddresses.map((e: any) => String(e)) : []
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
  }

};