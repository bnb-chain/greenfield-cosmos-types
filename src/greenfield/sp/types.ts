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

  securityContact: string;
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
  operatorAddress: string;
  /** funding_address defines one of the storage provider's accounts which is used to deposit and reward. */

  fundingAddress: string;
  /** seal_address defines one of the storage provider's accounts which is used to SealObject */

  sealAddress: string;
  /** approval_address defines one of the storage provider's accounts which is used to approve use's createBucket/createObject request */

  approvalAddress: string;
  /** total_deposit defines the number of tokens deposited by this storage provider for staking. */

  totalDeposit: string;
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
  spAddress: string;
  /** update time, in unix timestamp */

  updateTime: Long;
  /** read price, in bnb wei per charge byte */

  readPrice: string;
  /** free read quota, in byte */

  freeReadQuota: Long;
  /** store price, in bnb wei per charge byte */

  storePrice: string;
}
/**
 * global secondary sp store price
 * this is the price for all secondary sps
 */

export interface SecondarySpStorePrice {
  /** update time, in unix timestamp */
  updateTime: Long;
  /** store price, in bnb wei per charge byte */

  storePrice: string;
}

function createBaseDescription(): Description {
  return {
    moniker: "",
    identity: "",
    website: "",
    securityContact: "",
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

    if (message.securityContact !== "") {
      writer.uint32(34).string(message.securityContact);
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
          message.securityContact = reader.string();
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
      securityContact: isSet(object.securityContact) ? String(object.securityContact) : "",
      details: isSet(object.details) ? String(object.details) : ""
    };
  },

  toJSON(message: Description): unknown {
    const obj: any = {};
    message.moniker !== undefined && (obj.moniker = message.moniker);
    message.identity !== undefined && (obj.identity = message.identity);
    message.website !== undefined && (obj.website = message.website);
    message.securityContact !== undefined && (obj.securityContact = message.securityContact);
    message.details !== undefined && (obj.details = message.details);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Description>, I>>(object: I): Description {
    const message = createBaseDescription();
    message.moniker = object.moniker ?? "";
    message.identity = object.identity ?? "";
    message.website = object.website ?? "";
    message.securityContact = object.securityContact ?? "";
    message.details = object.details ?? "";
    return message;
  }

};

function createBaseStorageProvider(): StorageProvider {
  return {
    operatorAddress: "",
    fundingAddress: "",
    sealAddress: "",
    approvalAddress: "",
    totalDeposit: "",
    status: 0,
    endpoint: "",
    description: undefined
  };
}

export const StorageProvider = {
  encode(message: StorageProvider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }

    if (message.fundingAddress !== "") {
      writer.uint32(18).string(message.fundingAddress);
    }

    if (message.sealAddress !== "") {
      writer.uint32(26).string(message.sealAddress);
    }

    if (message.approvalAddress !== "") {
      writer.uint32(34).string(message.approvalAddress);
    }

    if (message.totalDeposit !== "") {
      writer.uint32(42).string(message.totalDeposit);
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
          message.operatorAddress = reader.string();
          break;

        case 2:
          message.fundingAddress = reader.string();
          break;

        case 3:
          message.sealAddress = reader.string();
          break;

        case 4:
          message.approvalAddress = reader.string();
          break;

        case 5:
          message.totalDeposit = reader.string();
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
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : "",
      fundingAddress: isSet(object.fundingAddress) ? String(object.fundingAddress) : "",
      sealAddress: isSet(object.sealAddress) ? String(object.sealAddress) : "",
      approvalAddress: isSet(object.approvalAddress) ? String(object.approvalAddress) : "",
      totalDeposit: isSet(object.totalDeposit) ? String(object.totalDeposit) : "",
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
      endpoint: isSet(object.endpoint) ? String(object.endpoint) : "",
      description: isSet(object.description) ? Description.fromJSON(object.description) : undefined
    };
  },

  toJSON(message: StorageProvider): unknown {
    const obj: any = {};
    message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
    message.fundingAddress !== undefined && (obj.fundingAddress = message.fundingAddress);
    message.sealAddress !== undefined && (obj.sealAddress = message.sealAddress);
    message.approvalAddress !== undefined && (obj.approvalAddress = message.approvalAddress);
    message.totalDeposit !== undefined && (obj.totalDeposit = message.totalDeposit);
    message.status !== undefined && (obj.status = statusToJSON(message.status));
    message.endpoint !== undefined && (obj.endpoint = message.endpoint);
    message.description !== undefined && (obj.description = message.description ? Description.toJSON(message.description) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StorageProvider>, I>>(object: I): StorageProvider {
    const message = createBaseStorageProvider();
    message.operatorAddress = object.operatorAddress ?? "";
    message.fundingAddress = object.fundingAddress ?? "";
    message.sealAddress = object.sealAddress ?? "";
    message.approvalAddress = object.approvalAddress ?? "";
    message.totalDeposit = object.totalDeposit ?? "";
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
    spAddress: "",
    updateTime: Long.ZERO,
    readPrice: "",
    freeReadQuota: Long.UZERO,
    storePrice: ""
  };
}

export const SpStoragePrice = {
  encode(message: SpStoragePrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spAddress !== "") {
      writer.uint32(10).string(message.spAddress);
    }

    if (!message.updateTime.isZero()) {
      writer.uint32(16).int64(message.updateTime);
    }

    if (message.readPrice !== "") {
      writer.uint32(26).string(message.readPrice);
    }

    if (!message.freeReadQuota.isZero()) {
      writer.uint32(32).uint64(message.freeReadQuota);
    }

    if (message.storePrice !== "") {
      writer.uint32(42).string(message.storePrice);
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
          message.spAddress = reader.string();
          break;

        case 2:
          message.updateTime = (reader.int64() as Long);
          break;

        case 3:
          message.readPrice = reader.string();
          break;

        case 4:
          message.freeReadQuota = (reader.uint64() as Long);
          break;

        case 5:
          message.storePrice = reader.string();
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
      spAddress: isSet(object.spAddress) ? String(object.spAddress) : "",
      updateTime: isSet(object.updateTime) ? Long.fromValue(object.updateTime) : Long.ZERO,
      readPrice: isSet(object.readPrice) ? String(object.readPrice) : "",
      freeReadQuota: isSet(object.freeReadQuota) ? Long.fromValue(object.freeReadQuota) : Long.UZERO,
      storePrice: isSet(object.storePrice) ? String(object.storePrice) : ""
    };
  },

  toJSON(message: SpStoragePrice): unknown {
    const obj: any = {};
    message.spAddress !== undefined && (obj.spAddress = message.spAddress);
    message.updateTime !== undefined && (obj.updateTime = (message.updateTime || Long.ZERO).toString());
    message.readPrice !== undefined && (obj.readPrice = message.readPrice);
    message.freeReadQuota !== undefined && (obj.freeReadQuota = (message.freeReadQuota || Long.UZERO).toString());
    message.storePrice !== undefined && (obj.storePrice = message.storePrice);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SpStoragePrice>, I>>(object: I): SpStoragePrice {
    const message = createBaseSpStoragePrice();
    message.spAddress = object.spAddress ?? "";
    message.updateTime = object.updateTime !== undefined && object.updateTime !== null ? Long.fromValue(object.updateTime) : Long.ZERO;
    message.readPrice = object.readPrice ?? "";
    message.freeReadQuota = object.freeReadQuota !== undefined && object.freeReadQuota !== null ? Long.fromValue(object.freeReadQuota) : Long.UZERO;
    message.storePrice = object.storePrice ?? "";
    return message;
  }

};

function createBaseSecondarySpStorePrice(): SecondarySpStorePrice {
  return {
    updateTime: Long.ZERO,
    storePrice: ""
  };
}

export const SecondarySpStorePrice = {
  encode(message: SecondarySpStorePrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.updateTime.isZero()) {
      writer.uint32(8).int64(message.updateTime);
    }

    if (message.storePrice !== "") {
      writer.uint32(18).string(message.storePrice);
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
          message.updateTime = (reader.int64() as Long);
          break;

        case 2:
          message.storePrice = reader.string();
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
      updateTime: isSet(object.updateTime) ? Long.fromValue(object.updateTime) : Long.ZERO,
      storePrice: isSet(object.storePrice) ? String(object.storePrice) : ""
    };
  },

  toJSON(message: SecondarySpStorePrice): unknown {
    const obj: any = {};
    message.updateTime !== undefined && (obj.updateTime = (message.updateTime || Long.ZERO).toString());
    message.storePrice !== undefined && (obj.storePrice = message.storePrice);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SecondarySpStorePrice>, I>>(object: I): SecondarySpStorePrice {
    const message = createBaseSecondarySpStorePrice();
    message.updateTime = object.updateTime !== undefined && object.updateTime !== null ? Long.fromValue(object.updateTime) : Long.ZERO;
    message.storePrice = object.storePrice ?? "";
    return message;
  }

};