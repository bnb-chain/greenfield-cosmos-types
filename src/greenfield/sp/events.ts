/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact, Long } from "../../helpers";
export const protobufPackage = "bnbchain.greenfield.sp";
/** EventCreateStorageProvider is emitted when there is a storage provider created */

export interface EventCreateStorageProvider {
  /** sp_address is the operator address of the storage provider */
  spAddress: string;
  /** funding_address is the funding account address of the storage provider */

  fundingAddress: string;
  /** seal_address is the account address for SealObject Tx */

  sealAddress: string;
  /** approval_address is the account address for approve create bucket/object signature */

  approvalAddress: string;
  /** endpoint is the domain name address used by SP to provide storage services */

  endpoint: string;
  /** total_deposit is the token coin that the storage provider deposit to the storage module */

  totalDeposit: string;
}
/** EventCreateStorageProvider is emitted when there is a storage provider created */

export interface EventCreateStorageProviderSDKType {
  sp_address: string;
  funding_address: string;
  seal_address: string;
  approval_address: string;
  endpoint: string;
  total_deposit: string;
}
/** EventEditStorageProvider is emitted when SP's metadata is edited. */

export interface EventEditStorageProvider {
  /** old_endpoint is the service endpoint of the storage provider before edit */
  oldEndpoint: string;
  /** new_endpoint is the service endpoint of the storage provider after edit */

  newEndpoint: string;
}
/** EventEditStorageProvider is emitted when SP's metadata is edited. */

export interface EventEditStorageProviderSDKType {
  old_endpoint: string;
  new_endpoint: string;
}
/** EventDeposit is emitted when sp deposit tokens. */

export interface EventDeposit {
  /** sp_address is the account address of storage provider */
  spAddress: string;
  /** deposit is the token coin deposited this message */

  deposit: string;
  /** total_deposit is the total token coins this storage provider deposited */

  totalDeposit: string;
}
/** EventDeposit is emitted when sp deposit tokens. */

export interface EventDepositSDKType {
  sp_address: string;
  deposit: string;
  total_deposit: string;
}
export interface EventSpStoragePriceUpdate {
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
export interface EventSpStoragePriceUpdateSDKType {
  sp_address: string;
  update_time: Long;
  read_price: string;
  free_read_quota: Long;
  store_price: string;
}
export interface EventSecondarySpStorePriceUpdate {
  /** update time, in unix timestamp */
  updateTime: Long;
  /** store price, in bnb wei per charge byte */

  storePrice: string;
}
export interface EventSecondarySpStorePriceUpdateSDKType {
  update_time: Long;
  store_price: string;
}

function createBaseEventCreateStorageProvider(): EventCreateStorageProvider {
  return {
    spAddress: "",
    fundingAddress: "",
    sealAddress: "",
    approvalAddress: "",
    endpoint: "",
    totalDeposit: ""
  };
}

export const EventCreateStorageProvider = {
  encode(message: EventCreateStorageProvider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spAddress !== "") {
      writer.uint32(10).string(message.spAddress);
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

    if (message.endpoint !== "") {
      writer.uint32(42).string(message.endpoint);
    }

    if (message.totalDeposit !== "") {
      writer.uint32(50).string(message.totalDeposit);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateStorageProvider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateStorageProvider();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.spAddress = reader.string();
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
          message.endpoint = reader.string();
          break;

        case 6:
          message.totalDeposit = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventCreateStorageProvider {
    return {
      spAddress: isSet(object.spAddress) ? String(object.spAddress) : "",
      fundingAddress: isSet(object.fundingAddress) ? String(object.fundingAddress) : "",
      sealAddress: isSet(object.sealAddress) ? String(object.sealAddress) : "",
      approvalAddress: isSet(object.approvalAddress) ? String(object.approvalAddress) : "",
      endpoint: isSet(object.endpoint) ? String(object.endpoint) : "",
      totalDeposit: isSet(object.totalDeposit) ? String(object.totalDeposit) : ""
    };
  },

  toJSON(message: EventCreateStorageProvider): unknown {
    const obj: any = {};
    message.spAddress !== undefined && (obj.spAddress = message.spAddress);
    message.fundingAddress !== undefined && (obj.fundingAddress = message.fundingAddress);
    message.sealAddress !== undefined && (obj.sealAddress = message.sealAddress);
    message.approvalAddress !== undefined && (obj.approvalAddress = message.approvalAddress);
    message.endpoint !== undefined && (obj.endpoint = message.endpoint);
    message.totalDeposit !== undefined && (obj.totalDeposit = message.totalDeposit);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCreateStorageProvider>, I>>(object: I): EventCreateStorageProvider {
    const message = createBaseEventCreateStorageProvider();
    message.spAddress = object.spAddress ?? "";
    message.fundingAddress = object.fundingAddress ?? "";
    message.sealAddress = object.sealAddress ?? "";
    message.approvalAddress = object.approvalAddress ?? "";
    message.endpoint = object.endpoint ?? "";
    message.totalDeposit = object.totalDeposit ?? "";
    return message;
  },

  fromSDK(object: EventCreateStorageProviderSDKType): EventCreateStorageProvider {
    return {
      spAddress: object?.sp_address,
      fundingAddress: object?.funding_address,
      sealAddress: object?.seal_address,
      approvalAddress: object?.approval_address,
      endpoint: object?.endpoint,
      totalDeposit: object?.total_deposit
    };
  },

  toSDK(message: EventCreateStorageProvider): EventCreateStorageProviderSDKType {
    const obj: any = {};
    obj.sp_address = message.spAddress;
    obj.funding_address = message.fundingAddress;
    obj.seal_address = message.sealAddress;
    obj.approval_address = message.approvalAddress;
    obj.endpoint = message.endpoint;
    obj.total_deposit = message.totalDeposit;
    return obj;
  }

};

function createBaseEventEditStorageProvider(): EventEditStorageProvider {
  return {
    oldEndpoint: "",
    newEndpoint: ""
  };
}

export const EventEditStorageProvider = {
  encode(message: EventEditStorageProvider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.oldEndpoint !== "") {
      writer.uint32(10).string(message.oldEndpoint);
    }

    if (message.newEndpoint !== "") {
      writer.uint32(18).string(message.newEndpoint);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventEditStorageProvider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventEditStorageProvider();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.oldEndpoint = reader.string();
          break;

        case 2:
          message.newEndpoint = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventEditStorageProvider {
    return {
      oldEndpoint: isSet(object.oldEndpoint) ? String(object.oldEndpoint) : "",
      newEndpoint: isSet(object.newEndpoint) ? String(object.newEndpoint) : ""
    };
  },

  toJSON(message: EventEditStorageProvider): unknown {
    const obj: any = {};
    message.oldEndpoint !== undefined && (obj.oldEndpoint = message.oldEndpoint);
    message.newEndpoint !== undefined && (obj.newEndpoint = message.newEndpoint);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventEditStorageProvider>, I>>(object: I): EventEditStorageProvider {
    const message = createBaseEventEditStorageProvider();
    message.oldEndpoint = object.oldEndpoint ?? "";
    message.newEndpoint = object.newEndpoint ?? "";
    return message;
  },

  fromSDK(object: EventEditStorageProviderSDKType): EventEditStorageProvider {
    return {
      oldEndpoint: object?.old_endpoint,
      newEndpoint: object?.new_endpoint
    };
  },

  toSDK(message: EventEditStorageProvider): EventEditStorageProviderSDKType {
    const obj: any = {};
    obj.old_endpoint = message.oldEndpoint;
    obj.new_endpoint = message.newEndpoint;
    return obj;
  }

};

function createBaseEventDeposit(): EventDeposit {
  return {
    spAddress: "",
    deposit: "",
    totalDeposit: ""
  };
}

export const EventDeposit = {
  encode(message: EventDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spAddress !== "") {
      writer.uint32(10).string(message.spAddress);
    }

    if (message.deposit !== "") {
      writer.uint32(18).string(message.deposit);
    }

    if (message.totalDeposit !== "") {
      writer.uint32(26).string(message.totalDeposit);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventDeposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDeposit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.spAddress = reader.string();
          break;

        case 2:
          message.deposit = reader.string();
          break;

        case 3:
          message.totalDeposit = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventDeposit {
    return {
      spAddress: isSet(object.spAddress) ? String(object.spAddress) : "",
      deposit: isSet(object.deposit) ? String(object.deposit) : "",
      totalDeposit: isSet(object.totalDeposit) ? String(object.totalDeposit) : ""
    };
  },

  toJSON(message: EventDeposit): unknown {
    const obj: any = {};
    message.spAddress !== undefined && (obj.spAddress = message.spAddress);
    message.deposit !== undefined && (obj.deposit = message.deposit);
    message.totalDeposit !== undefined && (obj.totalDeposit = message.totalDeposit);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventDeposit>, I>>(object: I): EventDeposit {
    const message = createBaseEventDeposit();
    message.spAddress = object.spAddress ?? "";
    message.deposit = object.deposit ?? "";
    message.totalDeposit = object.totalDeposit ?? "";
    return message;
  },

  fromSDK(object: EventDepositSDKType): EventDeposit {
    return {
      spAddress: object?.sp_address,
      deposit: object?.deposit,
      totalDeposit: object?.total_deposit
    };
  },

  toSDK(message: EventDeposit): EventDepositSDKType {
    const obj: any = {};
    obj.sp_address = message.spAddress;
    obj.deposit = message.deposit;
    obj.total_deposit = message.totalDeposit;
    return obj;
  }

};

function createBaseEventSpStoragePriceUpdate(): EventSpStoragePriceUpdate {
  return {
    spAddress: "",
    updateTime: Long.ZERO,
    readPrice: "",
    freeReadQuota: Long.UZERO,
    storePrice: ""
  };
}

export const EventSpStoragePriceUpdate = {
  encode(message: EventSpStoragePriceUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSpStoragePriceUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSpStoragePriceUpdate();

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

  fromJSON(object: any): EventSpStoragePriceUpdate {
    return {
      spAddress: isSet(object.spAddress) ? String(object.spAddress) : "",
      updateTime: isSet(object.updateTime) ? Long.fromValue(object.updateTime) : Long.ZERO,
      readPrice: isSet(object.readPrice) ? String(object.readPrice) : "",
      freeReadQuota: isSet(object.freeReadQuota) ? Long.fromValue(object.freeReadQuota) : Long.UZERO,
      storePrice: isSet(object.storePrice) ? String(object.storePrice) : ""
    };
  },

  toJSON(message: EventSpStoragePriceUpdate): unknown {
    const obj: any = {};
    message.spAddress !== undefined && (obj.spAddress = message.spAddress);
    message.updateTime !== undefined && (obj.updateTime = (message.updateTime || Long.ZERO).toString());
    message.readPrice !== undefined && (obj.readPrice = message.readPrice);
    message.freeReadQuota !== undefined && (obj.freeReadQuota = (message.freeReadQuota || Long.UZERO).toString());
    message.storePrice !== undefined && (obj.storePrice = message.storePrice);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSpStoragePriceUpdate>, I>>(object: I): EventSpStoragePriceUpdate {
    const message = createBaseEventSpStoragePriceUpdate();
    message.spAddress = object.spAddress ?? "";
    message.updateTime = object.updateTime !== undefined && object.updateTime !== null ? Long.fromValue(object.updateTime) : Long.ZERO;
    message.readPrice = object.readPrice ?? "";
    message.freeReadQuota = object.freeReadQuota !== undefined && object.freeReadQuota !== null ? Long.fromValue(object.freeReadQuota) : Long.UZERO;
    message.storePrice = object.storePrice ?? "";
    return message;
  },

  fromSDK(object: EventSpStoragePriceUpdateSDKType): EventSpStoragePriceUpdate {
    return {
      spAddress: object?.sp_address,
      updateTime: object?.update_time,
      readPrice: object?.read_price,
      freeReadQuota: object?.free_read_quota,
      storePrice: object?.store_price
    };
  },

  toSDK(message: EventSpStoragePriceUpdate): EventSpStoragePriceUpdateSDKType {
    const obj: any = {};
    obj.sp_address = message.spAddress;
    obj.update_time = message.updateTime;
    obj.read_price = message.readPrice;
    obj.free_read_quota = message.freeReadQuota;
    obj.store_price = message.storePrice;
    return obj;
  }

};

function createBaseEventSecondarySpStorePriceUpdate(): EventSecondarySpStorePriceUpdate {
  return {
    updateTime: Long.ZERO,
    storePrice: ""
  };
}

export const EventSecondarySpStorePriceUpdate = {
  encode(message: EventSecondarySpStorePriceUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.updateTime.isZero()) {
      writer.uint32(8).int64(message.updateTime);
    }

    if (message.storePrice !== "") {
      writer.uint32(18).string(message.storePrice);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSecondarySpStorePriceUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSecondarySpStorePriceUpdate();

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

  fromJSON(object: any): EventSecondarySpStorePriceUpdate {
    return {
      updateTime: isSet(object.updateTime) ? Long.fromValue(object.updateTime) : Long.ZERO,
      storePrice: isSet(object.storePrice) ? String(object.storePrice) : ""
    };
  },

  toJSON(message: EventSecondarySpStorePriceUpdate): unknown {
    const obj: any = {};
    message.updateTime !== undefined && (obj.updateTime = (message.updateTime || Long.ZERO).toString());
    message.storePrice !== undefined && (obj.storePrice = message.storePrice);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSecondarySpStorePriceUpdate>, I>>(object: I): EventSecondarySpStorePriceUpdate {
    const message = createBaseEventSecondarySpStorePriceUpdate();
    message.updateTime = object.updateTime !== undefined && object.updateTime !== null ? Long.fromValue(object.updateTime) : Long.ZERO;
    message.storePrice = object.storePrice ?? "";
    return message;
  },

  fromSDK(object: EventSecondarySpStorePriceUpdateSDKType): EventSecondarySpStorePriceUpdate {
    return {
      updateTime: object?.update_time,
      storePrice: object?.store_price
    };
  },

  toSDK(message: EventSecondarySpStorePriceUpdate): EventSecondarySpStorePriceUpdateSDKType {
    const obj: any = {};
    obj.update_time = message.updateTime;
    obj.store_price = message.storePrice;
    return obj;
  }

};