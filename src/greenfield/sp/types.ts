/* eslint-disable */
import { Coin } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact, Long } from "../../helpers";
export const protobufPackage = "bnbchain.greenfield.sp";
/** Status is the status of a storage provider. */

export enum Status {
  STATUS_IN_SERVICE = 0,
  STATUS_IN_JAILED = 1,
  STATUS_GRACEFUL_EXITING = 2,
  STATUS_OUT_OF_SERVICE = 3,
  UNRECOGNIZED = -1,
}
export function statusFromJSON(object: any): Status {
  switch (object) {
    case 0:
    case "STATUS_IN_SERVICE":
      return Status.STATUS_IN_SERVICE;

    case 1:
    case "STATUS_IN_JAILED":
      return Status.STATUS_IN_JAILED;

    case 2:
    case "STATUS_GRACEFUL_EXITING":
      return Status.STATUS_GRACEFUL_EXITING;

    case 3:
    case "STATUS_OUT_OF_SERVICE":
      return Status.STATUS_OUT_OF_SERVICE;

    case -1:
    case "UNRECOGNIZED":
    default:
      return Status.UNRECOGNIZED;
  }
}
export function statusToJSON(object: Status): string {
  switch (object) {
    case Status.STATUS_IN_SERVICE:
      return "STATUS_IN_SERVICE";

    case Status.STATUS_IN_JAILED:
      return "STATUS_IN_JAILED";

    case Status.STATUS_GRACEFUL_EXITING:
      return "STATUS_GRACEFUL_EXITING";

    case Status.STATUS_OUT_OF_SERVICE:
      return "STATUS_OUT_OF_SERVICE";

    case Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Description defines a storage provider description. */

export interface Description {
  /** moniker defines a human-readable name for the storage provider */
  moniker: string;
  /** identity defines an optional identity signature (ex. UPort or Keybase). */

  identity: string;
  /** website defines an optional website link. */

  website: string;
  /** security_contact defines an optional email for security contact. */

  security_contact: string;
  /** details define other optional details. */

  details: string;
}
/**
 * StorageProvider defines the meta info of storage provider
 * TODO: add endpoint for RPC/HTTP/Websocket and p2p identity
 * TODO: add more account address for different role.
 */

export interface StorageProvider {
  /** operator_address defines the account address of the storage provider's operator; It also is the unique index key of sp. */
  operator_address: string;
  /** funding_address defines one of the storage provider's accounts which is used to deposit and reward. */

  funding_address: string;
  /** seal_address defines one of the storage provider's accounts which is used to SealObject */

  seal_address: string;
  /** approval_address defines one of the storage provider's accounts which is used to approve use's createBucket/createObject request */

  approval_address: string;
  /** total_deposit defines the number of tokens deposited by this storage provider for staking. */

  total_deposit: string;
  /** status defines the current service status of this storage provider */

  status: Status;
  /** endpoint define the storage provider's network service address */

  endpoint: string;
  /** description defines the description terms for the storage provider. */

  description?: Description;
}
export interface RewardInfo {
  address: string;
  amount?: Coin;
}
/** storage price of a specific sp */

export interface SpStoragePrice {
  /** sp address */
  sp_address: string;
  /** update time, in unix timestamp */

  update_time: Long;
  /** read price, in bnb wei per charge byte */

  read_price: string;
  /** free read quota, in byte */

  free_read_quota: Long;
  /** store price, in bnb wei per charge byte */

  store_price: string;
}
/**
 * global secondary sp store price
 * this is the price for all secondary sps
 */

export interface SecondarySpStorePrice {
  /** update time, in unix timestamp */
  update_time: Long;
  /** store price, in bnb wei per charge byte */

  store_price: string;
}

function createBaseDescription(): Description {
  return {
    moniker: "",
    identity: "",
    website: "",
    security_contact: "",
    details: ""
  };
}

export const Description = {
  encode(message: Description, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.moniker !== "") {
      writer.uint32(10).string(message.moniker);
    }

    if (message.identity !== "") {
      writer.uint32(18).string(message.identity);
    }

    if (message.website !== "") {
      writer.uint32(26).string(message.website);
    }

    if (message.security_contact !== "") {
      writer.uint32(34).string(message.security_contact);
    }

    if (message.details !== "") {
      writer.uint32(42).string(message.details);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Description {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDescription();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.moniker = reader.string();
          break;

        case 2:
          message.identity = reader.string();
          break;

        case 3:
          message.website = reader.string();
          break;

        case 4:
          message.security_contact = reader.string();
          break;

        case 5:
          message.details = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Description {
    return {
      moniker: isSet(object.moniker) ? String(object.moniker) : "",
      identity: isSet(object.identity) ? String(object.identity) : "",
      website: isSet(object.website) ? String(object.website) : "",
      security_contact: isSet(object.security_contact) ? String(object.security_contact) : "",
      details: isSet(object.details) ? String(object.details) : ""
    };
  },

  toJSON(message: Description): unknown {
    const obj: any = {};
    message.moniker !== undefined && (obj.moniker = message.moniker);
    message.identity !== undefined && (obj.identity = message.identity);
    message.website !== undefined && (obj.website = message.website);
    message.security_contact !== undefined && (obj.security_contact = message.security_contact);
    message.details !== undefined && (obj.details = message.details);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Description>, I>>(object: I): Description {
    const message = createBaseDescription();
    message.moniker = object.moniker ?? "";
    message.identity = object.identity ?? "";
    message.website = object.website ?? "";
    message.security_contact = object.security_contact ?? "";
    message.details = object.details ?? "";
    return message;
  }

};

function createBaseStorageProvider(): StorageProvider {
  return {
    operator_address: "",
    funding_address: "",
    seal_address: "",
    approval_address: "",
    total_deposit: "",
    status: 0,
    endpoint: "",
    description: undefined
  };
}

export const StorageProvider = {
  encode(message: StorageProvider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator_address !== "") {
      writer.uint32(10).string(message.operator_address);
    }

    if (message.funding_address !== "") {
      writer.uint32(18).string(message.funding_address);
    }

    if (message.seal_address !== "") {
      writer.uint32(26).string(message.seal_address);
    }

    if (message.approval_address !== "") {
      writer.uint32(34).string(message.approval_address);
    }

    if (message.total_deposit !== "") {
      writer.uint32(42).string(message.total_deposit);
    }

    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }

    if (message.endpoint !== "") {
      writer.uint32(58).string(message.endpoint);
    }

    if (message.description !== undefined) {
      Description.encode(message.description, writer.uint32(66).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StorageProvider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStorageProvider();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.operator_address = reader.string();
          break;

        case 2:
          message.funding_address = reader.string();
          break;

        case 3:
          message.seal_address = reader.string();
          break;

        case 4:
          message.approval_address = reader.string();
          break;

        case 5:
          message.total_deposit = reader.string();
          break;

        case 6:
          message.status = (reader.int32() as any);
          break;

        case 7:
          message.endpoint = reader.string();
          break;

        case 8:
          message.description = Description.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): StorageProvider {
    return {
      operator_address: isSet(object.operator_address) ? String(object.operator_address) : "",
      funding_address: isSet(object.funding_address) ? String(object.funding_address) : "",
      seal_address: isSet(object.seal_address) ? String(object.seal_address) : "",
      approval_address: isSet(object.approval_address) ? String(object.approval_address) : "",
      total_deposit: isSet(object.total_deposit) ? String(object.total_deposit) : "",
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
      endpoint: isSet(object.endpoint) ? String(object.endpoint) : "",
      description: isSet(object.description) ? Description.fromJSON(object.description) : undefined
    };
  },

  toJSON(message: StorageProvider): unknown {
    const obj: any = {};
    message.operator_address !== undefined && (obj.operator_address = message.operator_address);
    message.funding_address !== undefined && (obj.funding_address = message.funding_address);
    message.seal_address !== undefined && (obj.seal_address = message.seal_address);
    message.approval_address !== undefined && (obj.approval_address = message.approval_address);
    message.total_deposit !== undefined && (obj.total_deposit = message.total_deposit);
    message.status !== undefined && (obj.status = statusToJSON(message.status));
    message.endpoint !== undefined && (obj.endpoint = message.endpoint);
    message.description !== undefined && (obj.description = message.description ? Description.toJSON(message.description) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StorageProvider>, I>>(object: I): StorageProvider {
    const message = createBaseStorageProvider();
    message.operator_address = object.operator_address ?? "";
    message.funding_address = object.funding_address ?? "";
    message.seal_address = object.seal_address ?? "";
    message.approval_address = object.approval_address ?? "";
    message.total_deposit = object.total_deposit ?? "";
    message.status = object.status ?? 0;
    message.endpoint = object.endpoint ?? "";
    message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
    return message;
  }

};

function createBaseRewardInfo(): RewardInfo {
  return {
    address: "",
    amount: undefined
  };
}

export const RewardInfo = {
  encode(message: RewardInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RewardInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RewardInfo {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },

  toJSON(message: RewardInfo): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RewardInfo>, I>>(object: I): RewardInfo {
    const message = createBaseRewardInfo();
    message.address = object.address ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }

};

function createBaseSpStoragePrice(): SpStoragePrice {
  return {
    sp_address: "",
    update_time: Long.ZERO,
    read_price: "",
    free_read_quota: Long.UZERO,
    store_price: ""
  };
}

export const SpStoragePrice = {
  encode(message: SpStoragePrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sp_address !== "") {
      writer.uint32(10).string(message.sp_address);
    }

    if (!message.update_time.isZero()) {
      writer.uint32(16).int64(message.update_time);
    }

    if (message.read_price !== "") {
      writer.uint32(26).string(message.read_price);
    }

    if (!message.free_read_quota.isZero()) {
      writer.uint32(32).uint64(message.free_read_quota);
    }

    if (message.store_price !== "") {
      writer.uint32(42).string(message.store_price);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpStoragePrice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpStoragePrice();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sp_address = reader.string();
          break;

        case 2:
          message.update_time = (reader.int64() as Long);
          break;

        case 3:
          message.read_price = reader.string();
          break;

        case 4:
          message.free_read_quota = (reader.uint64() as Long);
          break;

        case 5:
          message.store_price = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SpStoragePrice {
    return {
      sp_address: isSet(object.sp_address) ? String(object.sp_address) : "",
      update_time: isSet(object.update_time) ? Long.fromValue(object.update_time) : Long.ZERO,
      read_price: isSet(object.read_price) ? String(object.read_price) : "",
      free_read_quota: isSet(object.free_read_quota) ? Long.fromValue(object.free_read_quota) : Long.UZERO,
      store_price: isSet(object.store_price) ? String(object.store_price) : ""
    };
  },

  toJSON(message: SpStoragePrice): unknown {
    const obj: any = {};
    message.sp_address !== undefined && (obj.sp_address = message.sp_address);
    message.update_time !== undefined && (obj.update_time = (message.update_time || Long.ZERO).toString());
    message.read_price !== undefined && (obj.read_price = message.read_price);
    message.free_read_quota !== undefined && (obj.free_read_quota = (message.free_read_quota || Long.UZERO).toString());
    message.store_price !== undefined && (obj.store_price = message.store_price);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SpStoragePrice>, I>>(object: I): SpStoragePrice {
    const message = createBaseSpStoragePrice();
    message.sp_address = object.sp_address ?? "";
    message.update_time = object.update_time !== undefined && object.update_time !== null ? Long.fromValue(object.update_time) : Long.ZERO;
    message.read_price = object.read_price ?? "";
    message.free_read_quota = object.free_read_quota !== undefined && object.free_read_quota !== null ? Long.fromValue(object.free_read_quota) : Long.UZERO;
    message.store_price = object.store_price ?? "";
    return message;
  }

};

function createBaseSecondarySpStorePrice(): SecondarySpStorePrice {
  return {
    update_time: Long.ZERO,
    store_price: ""
  };
}

export const SecondarySpStorePrice = {
  encode(message: SecondarySpStorePrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.update_time.isZero()) {
      writer.uint32(8).int64(message.update_time);
    }

    if (message.store_price !== "") {
      writer.uint32(18).string(message.store_price);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SecondarySpStorePrice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSecondarySpStorePrice();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.update_time = (reader.int64() as Long);
          break;

        case 2:
          message.store_price = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SecondarySpStorePrice {
    return {
      update_time: isSet(object.update_time) ? Long.fromValue(object.update_time) : Long.ZERO,
      store_price: isSet(object.store_price) ? String(object.store_price) : ""
    };
  },

  toJSON(message: SecondarySpStorePrice): unknown {
    const obj: any = {};
    message.update_time !== undefined && (obj.update_time = (message.update_time || Long.ZERO).toString());
    message.store_price !== undefined && (obj.store_price = message.store_price);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SecondarySpStorePrice>, I>>(object: I): SecondarySpStorePrice {
    const message = createBaseSecondarySpStorePrice();
    message.update_time = object.update_time !== undefined && object.update_time !== null ? Long.fromValue(object.update_time) : Long.ZERO;
    message.store_price = object.store_price ?? "";
    return message;
  }

};