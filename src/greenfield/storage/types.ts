/* eslint-disable */
import { SourceType, ObjectStatus, RedundancyType, sourceTypeFromJSON, sourceTypeToJSON, objectStatusFromJSON, redundancyTypeFromJSON, objectStatusToJSON, redundancyTypeToJSON } from "./common";
import { Long, isSet, DeepPartial, Exact, bytesFromBase64, base64FromBytes } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "bnbchain.greenfield.storage";
export interface BucketInfo {
  /** owner is the account address of bucket creator, it is also the bucket owner. */
  owner: string;
  /** bucket_name is a globally unique name of bucket */

  bucket_name: string;
  /** is_public define the highest permissions for bucket. When the bucket is public, everyone can get storage objects in it. */

  is_public: boolean;
  /** id is the unique identification for bucket. */

  id: string;
  /** source_type defines which chain the user should send the bucket management transactions to */

  source_type: SourceType;
  /** create_at define the block number when the bucket created. */

  create_at: Long;
  /** payment_address is the address of the payment account */

  payment_address: string;
  /**
   * primary_sp_address is the address of the primary sp. Objects belongs to this bucket will never
   * leave this SP, unless you explicitly shift them to another SP.
   */

  primary_sp_address: string;
  /** read_quota defines the traffic quota for read in bytes per month */

  read_quota: Long;
  /** billing info of the bucket */

  billing_info?: BillingInfo;
}
/** BillingInfo is the billing information of the bucket */

export interface BillingInfo {
  /** the time of the payment price, used to calculate the charge rate of the bucket */
  price_time: Long;
  /** the total size of the objects in the bucket, used to calculate the charge rate of the bucket */

  total_charge_size: Long;
  /** secondary sp objects size statistics */

  secondary_sp_objects_size: SecondarySpObjectsSize[];
}
/** secondary sp objects size statistics */

export interface SecondarySpObjectsSize {
  /** address is the address of the secondary sp */
  sp_address: string;
  /** size is the total size of the objects in the secondary sp */

  total_charge_size: Long;
}
export interface ObjectInfo {
  owner: string;
  /** bucket_name is the name of the bucket */

  bucket_name: string;
  /** object_name is the name of object */

  object_name: string;
  /** id is the unique identifier of object */

  id: string;
  /** payloadSize is the total size of the object payload */

  payload_size: Long;
  /** is_public define the highest permissions for object. When the object is public, everyone can access it. */

  is_public: boolean;
  /** content_type define the format of the object which should be a standard MIME type. */

  content_type: string;
  /** create_at define the block number when the object created */

  create_at: Long;
  /** object_status define the upload status of the object. */

  object_status: ObjectStatus;
  /** redundancy_type define the type of the redundancy which can be multi-replication or EC. */

  redundancy_type: RedundancyType;
  /** source_type define the source of the object. */

  source_type: SourceType;
  /** checksums define the root hash of the pieces which stored in a SP. */

  checksums: Uint8Array[];
  /** secondary_sp_addresses define the addresses of secondary_sps */

  secondary_sp_addresses: string[];
}
export interface GroupInfo {
  /** owner is the owner of the group. It can not changed once it created. */
  owner: string;
  /** group_name is the name of group which is unique under an account. */

  group_name: string;
  /** source_type */

  source_type: SourceType;
  /** id is the unique identifier of group */

  id: string;
}
export interface Trait {
  trait_type: string;
  value: string;
}
export interface BucketMetaData {
  /** description */
  description: string;
  /** externalUrl a link to external site to view NFT */

  external_url: string;
  /** name of bucket NFT */

  bucket_name: string;
  /** image is the link to image */

  image: string;
  /** attributes */

  attributes: Trait[];
}
export interface ObjectMetaData {
  /** description */
  description: string;
  /** externalUrl a link to external site to view NFT */

  external_url: string;
  /** name of object NFT */

  object_name: string;
  /** image is the link to image */

  image: string;
  /** attributes */

  attributes: Trait[];
}
export interface GroupMetaData {
  /** description */
  description: string;
  /** externalUrl a link to external site to view NFT */

  external_url: string;
  /** name of group NFT */

  group_name: string;
  /** image is the link to image */

  image: string;
  /** attributes */

  attributes: Trait[];
}

function createBaseBucketInfo(): BucketInfo {
  return {
    owner: "",
    bucket_name: "",
    is_public: false,
    id: "",
    source_type: 0,
    create_at: Long.ZERO,
    payment_address: "",
    primary_sp_address: "",
    read_quota: Long.UZERO,
    billing_info: undefined
  };
}

export const BucketInfo = {
  encode(message: BucketInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.bucket_name !== "") {
      writer.uint32(18).string(message.bucket_name);
    }

    if (message.is_public === true) {
      writer.uint32(24).bool(message.is_public);
    }

    if (message.id !== "") {
      writer.uint32(34).string(message.id);
    }

    if (message.source_type !== 0) {
      writer.uint32(40).int32(message.source_type);
    }

    if (!message.create_at.isZero()) {
      writer.uint32(48).int64(message.create_at);
    }

    if (message.payment_address !== "") {
      writer.uint32(58).string(message.payment_address);
    }

    if (message.primary_sp_address !== "") {
      writer.uint32(66).string(message.primary_sp_address);
    }

    if (!message.read_quota.isZero()) {
      writer.uint32(72).uint64(message.read_quota);
    }

    if (message.billing_info !== undefined) {
      BillingInfo.encode(message.billing_info, writer.uint32(82).fork()).ldelim();
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
          message.bucket_name = reader.string();
          break;

        case 3:
          message.is_public = reader.bool();
          break;

        case 4:
          message.id = reader.string();
          break;

        case 5:
          message.source_type = (reader.int32() as any);
          break;

        case 6:
          message.create_at = (reader.int64() as Long);
          break;

        case 7:
          message.payment_address = reader.string();
          break;

        case 8:
          message.primary_sp_address = reader.string();
          break;

        case 9:
          message.read_quota = (reader.uint64() as Long);
          break;

        case 10:
          message.billing_info = BillingInfo.decode(reader, reader.uint32());
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
      bucket_name: isSet(object.bucket_name) ? String(object.bucket_name) : "",
      is_public: isSet(object.is_public) ? Boolean(object.is_public) : false,
      id: isSet(object.id) ? String(object.id) : "",
      source_type: isSet(object.source_type) ? sourceTypeFromJSON(object.source_type) : 0,
      create_at: isSet(object.create_at) ? Long.fromValue(object.create_at) : Long.ZERO,
      payment_address: isSet(object.payment_address) ? String(object.payment_address) : "",
      primary_sp_address: isSet(object.primary_sp_address) ? String(object.primary_sp_address) : "",
      read_quota: isSet(object.read_quota) ? Long.fromValue(object.read_quota) : Long.UZERO,
      billing_info: isSet(object.billing_info) ? BillingInfo.fromJSON(object.billing_info) : undefined
    };
  },

  toJSON(message: BucketInfo): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.bucket_name !== undefined && (obj.bucket_name = message.bucket_name);
    message.is_public !== undefined && (obj.is_public = message.is_public);
    message.id !== undefined && (obj.id = message.id);
    message.source_type !== undefined && (obj.source_type = sourceTypeToJSON(message.source_type));
    message.create_at !== undefined && (obj.create_at = (message.create_at || Long.ZERO).toString());
    message.payment_address !== undefined && (obj.payment_address = message.payment_address);
    message.primary_sp_address !== undefined && (obj.primary_sp_address = message.primary_sp_address);
    message.read_quota !== undefined && (obj.read_quota = (message.read_quota || Long.UZERO).toString());
    message.billing_info !== undefined && (obj.billing_info = message.billing_info ? BillingInfo.toJSON(message.billing_info) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BucketInfo>, I>>(object: I): BucketInfo {
    const message = createBaseBucketInfo();
    message.owner = object.owner ?? "";
    message.bucket_name = object.bucket_name ?? "";
    message.is_public = object.is_public ?? false;
    message.id = object.id ?? "";
    message.source_type = object.source_type ?? 0;
    message.create_at = object.create_at !== undefined && object.create_at !== null ? Long.fromValue(object.create_at) : Long.ZERO;
    message.payment_address = object.payment_address ?? "";
    message.primary_sp_address = object.primary_sp_address ?? "";
    message.read_quota = object.read_quota !== undefined && object.read_quota !== null ? Long.fromValue(object.read_quota) : Long.UZERO;
    message.billing_info = object.billing_info !== undefined && object.billing_info !== null ? BillingInfo.fromPartial(object.billing_info) : undefined;
    return message;
  }

};

function createBaseBillingInfo(): BillingInfo {
  return {
    price_time: Long.ZERO,
    total_charge_size: Long.UZERO,
    secondary_sp_objects_size: []
  };
}

export const BillingInfo = {
  encode(message: BillingInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.price_time.isZero()) {
      writer.uint32(8).int64(message.price_time);
    }

    if (!message.total_charge_size.isZero()) {
      writer.uint32(16).uint64(message.total_charge_size);
    }

    for (const v of message.secondary_sp_objects_size) {
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
          message.price_time = (reader.int64() as Long);
          break;

        case 2:
          message.total_charge_size = (reader.uint64() as Long);
          break;

        case 3:
          message.secondary_sp_objects_size.push(SecondarySpObjectsSize.decode(reader, reader.uint32()));
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
      price_time: isSet(object.price_time) ? Long.fromValue(object.price_time) : Long.ZERO,
      total_charge_size: isSet(object.total_charge_size) ? Long.fromValue(object.total_charge_size) : Long.UZERO,
      secondary_sp_objects_size: Array.isArray(object?.secondary_sp_objects_size) ? object.secondary_sp_objects_size.map((e: any) => SecondarySpObjectsSize.fromJSON(e)) : []
    };
  },

  toJSON(message: BillingInfo): unknown {
    const obj: any = {};
    message.price_time !== undefined && (obj.price_time = (message.price_time || Long.ZERO).toString());
    message.total_charge_size !== undefined && (obj.total_charge_size = (message.total_charge_size || Long.UZERO).toString());

    if (message.secondary_sp_objects_size) {
      obj.secondary_sp_objects_size = message.secondary_sp_objects_size.map(e => e ? SecondarySpObjectsSize.toJSON(e) : undefined);
    } else {
      obj.secondary_sp_objects_size = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BillingInfo>, I>>(object: I): BillingInfo {
    const message = createBaseBillingInfo();
    message.price_time = object.price_time !== undefined && object.price_time !== null ? Long.fromValue(object.price_time) : Long.ZERO;
    message.total_charge_size = object.total_charge_size !== undefined && object.total_charge_size !== null ? Long.fromValue(object.total_charge_size) : Long.UZERO;
    message.secondary_sp_objects_size = object.secondary_sp_objects_size?.map(e => SecondarySpObjectsSize.fromPartial(e)) || [];
    return message;
  }

};

function createBaseSecondarySpObjectsSize(): SecondarySpObjectsSize {
  return {
    sp_address: "",
    total_charge_size: Long.UZERO
  };
}

export const SecondarySpObjectsSize = {
  encode(message: SecondarySpObjectsSize, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sp_address !== "") {
      writer.uint32(10).string(message.sp_address);
    }

    if (!message.total_charge_size.isZero()) {
      writer.uint32(16).uint64(message.total_charge_size);
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
          message.sp_address = reader.string();
          break;

        case 2:
          message.total_charge_size = (reader.uint64() as Long);
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
      sp_address: isSet(object.sp_address) ? String(object.sp_address) : "",
      total_charge_size: isSet(object.total_charge_size) ? Long.fromValue(object.total_charge_size) : Long.UZERO
    };
  },

  toJSON(message: SecondarySpObjectsSize): unknown {
    const obj: any = {};
    message.sp_address !== undefined && (obj.sp_address = message.sp_address);
    message.total_charge_size !== undefined && (obj.total_charge_size = (message.total_charge_size || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SecondarySpObjectsSize>, I>>(object: I): SecondarySpObjectsSize {
    const message = createBaseSecondarySpObjectsSize();
    message.sp_address = object.sp_address ?? "";
    message.total_charge_size = object.total_charge_size !== undefined && object.total_charge_size !== null ? Long.fromValue(object.total_charge_size) : Long.UZERO;
    return message;
  }

};

function createBaseObjectInfo(): ObjectInfo {
  return {
    owner: "",
    bucket_name: "",
    object_name: "",
    id: "",
    payload_size: Long.UZERO,
    is_public: false,
    content_type: "",
    create_at: Long.ZERO,
    object_status: 0,
    redundancy_type: 0,
    source_type: 0,
    checksums: [],
    secondary_sp_addresses: []
  };
}

export const ObjectInfo = {
  encode(message: ObjectInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.bucket_name !== "") {
      writer.uint32(18).string(message.bucket_name);
    }

    if (message.object_name !== "") {
      writer.uint32(26).string(message.object_name);
    }

    if (message.id !== "") {
      writer.uint32(34).string(message.id);
    }

    if (!message.payload_size.isZero()) {
      writer.uint32(40).uint64(message.payload_size);
    }

    if (message.is_public === true) {
      writer.uint32(48).bool(message.is_public);
    }

    if (message.content_type !== "") {
      writer.uint32(58).string(message.content_type);
    }

    if (!message.create_at.isZero()) {
      writer.uint32(64).int64(message.create_at);
    }

    if (message.object_status !== 0) {
      writer.uint32(72).int32(message.object_status);
    }

    if (message.redundancy_type !== 0) {
      writer.uint32(80).int32(message.redundancy_type);
    }

    if (message.source_type !== 0) {
      writer.uint32(88).int32(message.source_type);
    }

    for (const v of message.checksums) {
      writer.uint32(98).bytes(v!);
    }

    for (const v of message.secondary_sp_addresses) {
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
          message.bucket_name = reader.string();
          break;

        case 3:
          message.object_name = reader.string();
          break;

        case 4:
          message.id = reader.string();
          break;

        case 5:
          message.payload_size = (reader.uint64() as Long);
          break;

        case 6:
          message.is_public = reader.bool();
          break;

        case 7:
          message.content_type = reader.string();
          break;

        case 8:
          message.create_at = (reader.int64() as Long);
          break;

        case 9:
          message.object_status = (reader.int32() as any);
          break;

        case 10:
          message.redundancy_type = (reader.int32() as any);
          break;

        case 11:
          message.source_type = (reader.int32() as any);
          break;

        case 12:
          message.checksums.push(reader.bytes());
          break;

        case 13:
          message.secondary_sp_addresses.push(reader.string());
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
      bucket_name: isSet(object.bucket_name) ? String(object.bucket_name) : "",
      object_name: isSet(object.object_name) ? String(object.object_name) : "",
      id: isSet(object.id) ? String(object.id) : "",
      payload_size: isSet(object.payload_size) ? Long.fromValue(object.payload_size) : Long.UZERO,
      is_public: isSet(object.is_public) ? Boolean(object.is_public) : false,
      content_type: isSet(object.content_type) ? String(object.content_type) : "",
      create_at: isSet(object.create_at) ? Long.fromValue(object.create_at) : Long.ZERO,
      object_status: isSet(object.object_status) ? objectStatusFromJSON(object.object_status) : 0,
      redundancy_type: isSet(object.redundancy_type) ? redundancyTypeFromJSON(object.redundancy_type) : 0,
      source_type: isSet(object.source_type) ? sourceTypeFromJSON(object.source_type) : 0,
      checksums: Array.isArray(object?.checksums) ? object.checksums.map((e: any) => bytesFromBase64(e)) : [],
      secondary_sp_addresses: Array.isArray(object?.secondary_sp_addresses) ? object.secondary_sp_addresses.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: ObjectInfo): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.bucket_name !== undefined && (obj.bucket_name = message.bucket_name);
    message.object_name !== undefined && (obj.object_name = message.object_name);
    message.id !== undefined && (obj.id = message.id);
    message.payload_size !== undefined && (obj.payload_size = (message.payload_size || Long.UZERO).toString());
    message.is_public !== undefined && (obj.is_public = message.is_public);
    message.content_type !== undefined && (obj.content_type = message.content_type);
    message.create_at !== undefined && (obj.create_at = (message.create_at || Long.ZERO).toString());
    message.object_status !== undefined && (obj.object_status = objectStatusToJSON(message.object_status));
    message.redundancy_type !== undefined && (obj.redundancy_type = redundancyTypeToJSON(message.redundancy_type));
    message.source_type !== undefined && (obj.source_type = sourceTypeToJSON(message.source_type));

    if (message.checksums) {
      obj.checksums = message.checksums.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.checksums = [];
    }

    if (message.secondary_sp_addresses) {
      obj.secondary_sp_addresses = message.secondary_sp_addresses.map(e => e);
    } else {
      obj.secondary_sp_addresses = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ObjectInfo>, I>>(object: I): ObjectInfo {
    const message = createBaseObjectInfo();
    message.owner = object.owner ?? "";
    message.bucket_name = object.bucket_name ?? "";
    message.object_name = object.object_name ?? "";
    message.id = object.id ?? "";
    message.payload_size = object.payload_size !== undefined && object.payload_size !== null ? Long.fromValue(object.payload_size) : Long.UZERO;
    message.is_public = object.is_public ?? false;
    message.content_type = object.content_type ?? "";
    message.create_at = object.create_at !== undefined && object.create_at !== null ? Long.fromValue(object.create_at) : Long.ZERO;
    message.object_status = object.object_status ?? 0;
    message.redundancy_type = object.redundancy_type ?? 0;
    message.source_type = object.source_type ?? 0;
    message.checksums = object.checksums?.map(e => e) || [];
    message.secondary_sp_addresses = object.secondary_sp_addresses?.map(e => e) || [];
    return message;
  }

};

function createBaseGroupInfo(): GroupInfo {
  return {
    owner: "",
    group_name: "",
    source_type: 0,
    id: ""
  };
}

export const GroupInfo = {
  encode(message: GroupInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.group_name !== "") {
      writer.uint32(18).string(message.group_name);
    }

    if (message.source_type !== 0) {
      writer.uint32(24).int32(message.source_type);
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
          message.group_name = reader.string();
          break;

        case 3:
          message.source_type = (reader.int32() as any);
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
      group_name: isSet(object.group_name) ? String(object.group_name) : "",
      source_type: isSet(object.source_type) ? sourceTypeFromJSON(object.source_type) : 0,
      id: isSet(object.id) ? String(object.id) : ""
    };
  },

  toJSON(message: GroupInfo): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.group_name !== undefined && (obj.group_name = message.group_name);
    message.source_type !== undefined && (obj.source_type = sourceTypeToJSON(message.source_type));
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GroupInfo>, I>>(object: I): GroupInfo {
    const message = createBaseGroupInfo();
    message.owner = object.owner ?? "";
    message.group_name = object.group_name ?? "";
    message.source_type = object.source_type ?? 0;
    message.id = object.id ?? "";
    return message;
  }

};

function createBaseTrait(): Trait {
  return {
    trait_type: "",
    value: ""
  };
}

export const Trait = {
  encode(message: Trait, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.trait_type !== "") {
      writer.uint32(10).string(message.trait_type);
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
          message.trait_type = reader.string();
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
      trait_type: isSet(object.trait_type) ? String(object.trait_type) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },

  toJSON(message: Trait): unknown {
    const obj: any = {};
    message.trait_type !== undefined && (obj.trait_type = message.trait_type);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Trait>, I>>(object: I): Trait {
    const message = createBaseTrait();
    message.trait_type = object.trait_type ?? "";
    message.value = object.value ?? "";
    return message;
  }

};

function createBaseBucketMetaData(): BucketMetaData {
  return {
    description: "",
    external_url: "",
    bucket_name: "",
    image: "",
    attributes: []
  };
}

export const BucketMetaData = {
  encode(message: BucketMetaData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.description !== "") {
      writer.uint32(10).string(message.description);
    }

    if (message.external_url !== "") {
      writer.uint32(18).string(message.external_url);
    }

    if (message.bucket_name !== "") {
      writer.uint32(26).string(message.bucket_name);
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
          message.external_url = reader.string();
          break;

        case 3:
          message.bucket_name = reader.string();
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
      external_url: isSet(object.external_url) ? String(object.external_url) : "",
      bucket_name: isSet(object.bucket_name) ? String(object.bucket_name) : "",
      image: isSet(object.image) ? String(object.image) : "",
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Trait.fromJSON(e)) : []
    };
  },

  toJSON(message: BucketMetaData): unknown {
    const obj: any = {};
    message.description !== undefined && (obj.description = message.description);
    message.external_url !== undefined && (obj.external_url = message.external_url);
    message.bucket_name !== undefined && (obj.bucket_name = message.bucket_name);
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
    message.external_url = object.external_url ?? "";
    message.bucket_name = object.bucket_name ?? "";
    message.image = object.image ?? "";
    message.attributes = object.attributes?.map(e => Trait.fromPartial(e)) || [];
    return message;
  }

};

function createBaseObjectMetaData(): ObjectMetaData {
  return {
    description: "",
    external_url: "",
    object_name: "",
    image: "",
    attributes: []
  };
}

export const ObjectMetaData = {
  encode(message: ObjectMetaData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.description !== "") {
      writer.uint32(10).string(message.description);
    }

    if (message.external_url !== "") {
      writer.uint32(18).string(message.external_url);
    }

    if (message.object_name !== "") {
      writer.uint32(26).string(message.object_name);
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
          message.external_url = reader.string();
          break;

        case 3:
          message.object_name = reader.string();
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
      external_url: isSet(object.external_url) ? String(object.external_url) : "",
      object_name: isSet(object.object_name) ? String(object.object_name) : "",
      image: isSet(object.image) ? String(object.image) : "",
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Trait.fromJSON(e)) : []
    };
  },

  toJSON(message: ObjectMetaData): unknown {
    const obj: any = {};
    message.description !== undefined && (obj.description = message.description);
    message.external_url !== undefined && (obj.external_url = message.external_url);
    message.object_name !== undefined && (obj.object_name = message.object_name);
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
    message.external_url = object.external_url ?? "";
    message.object_name = object.object_name ?? "";
    message.image = object.image ?? "";
    message.attributes = object.attributes?.map(e => Trait.fromPartial(e)) || [];
    return message;
  }

};

function createBaseGroupMetaData(): GroupMetaData {
  return {
    description: "",
    external_url: "",
    group_name: "",
    image: "",
    attributes: []
  };
}

export const GroupMetaData = {
  encode(message: GroupMetaData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.description !== "") {
      writer.uint32(10).string(message.description);
    }

    if (message.external_url !== "") {
      writer.uint32(18).string(message.external_url);
    }

    if (message.group_name !== "") {
      writer.uint32(26).string(message.group_name);
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
          message.external_url = reader.string();
          break;

        case 3:
          message.group_name = reader.string();
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
      external_url: isSet(object.external_url) ? String(object.external_url) : "",
      group_name: isSet(object.group_name) ? String(object.group_name) : "",
      image: isSet(object.image) ? String(object.image) : "",
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Trait.fromJSON(e)) : []
    };
  },

  toJSON(message: GroupMetaData): unknown {
    const obj: any = {};
    message.description !== undefined && (obj.description = message.description);
    message.external_url !== undefined && (obj.external_url = message.external_url);
    message.group_name !== undefined && (obj.group_name = message.group_name);
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
    message.external_url = object.external_url ?? "";
    message.group_name = object.group_name ?? "";
    message.image = object.image ?? "";
    message.attributes = object.attributes?.map(e => Trait.fromPartial(e)) || [];
    return message;
  }

};