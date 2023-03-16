/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact, Long } from "../../helpers";
export const protobufPackage = "bnbchain.greenfield.sp";
/** EventCreateStorageProvider is emitted when there is a storage provider created */

export interface EventCreateStorageProvider {
  /** sp_address is the operator address of the storage provider */
  sp_address: string;
  /** funding_address is the funding account address of the storage provider */

  funding_address: string;
  /** seal_address is the account address for SealObject Tx */

  seal_address: string;
  /** approval_address is the account address for approve create bucket/object signature */

  approval_address: string;
  /** endpoint is the domain name address used by SP to provide storage services */

  endpoint: string;
  /** total_deposit is the token coin that the storage provider deposit to the storage module */

  total_deposit: string;
}
/** EventEditStorageProvider is emitted when SP's metadata is edited. */

export interface EventEditStorageProvider {
  /** old_endpoint is the service endpoint of the storage provider before edit */
  old_endpoint: string;
  /** new_endpoint is the service endpoint of the storage provider after edit */

  new_endpoint: string;
}
/** EventDeposit is emitted when sp deposit tokens. */

export interface EventDeposit {
  /** sp_address is the account address of storage provider */
  sp_address: string;
  /** deposit is the token coin deposited this message */

  deposit: string;
  /** total_deposit is the total token coins this storage provider deposited */

  total_deposit: string;
}
export interface EventSpStoragePriceUpdate {
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
export interface EventSecondarySpStorePriceUpdate {
  /** update time, in unix timestamp */
  update_time: Long;
  /** store price, in bnb wei per charge byte */

  store_price: string;
}

function createBaseEventCreateStorageProvider(): EventCreateStorageProvider {
  return {
    sp_address: "",
    funding_address: "",
    seal_address: "",
    approval_address: "",
    endpoint: "",
    total_deposit: ""
  };
}

export const EventCreateStorageProvider = {
  encode(message: EventCreateStorageProvider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sp_address !== "") {
      writer.uint32(10).string(message.sp_address);
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

    if (message.endpoint !== "") {
      writer.uint32(42).string(message.endpoint);
    }

    if (message.total_deposit !== "") {
      writer.uint32(50).string(message.total_deposit);
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
          message.sp_address = reader.string();
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
          message.endpoint = reader.string();
          break;

        case 6:
          message.total_deposit = reader.string();
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
      sp_address: isSet(object.sp_address) ? String(object.sp_address) : "",
      funding_address: isSet(object.funding_address) ? String(object.funding_address) : "",
      seal_address: isSet(object.seal_address) ? String(object.seal_address) : "",
      approval_address: isSet(object.approval_address) ? String(object.approval_address) : "",
      endpoint: isSet(object.endpoint) ? String(object.endpoint) : "",
      total_deposit: isSet(object.total_deposit) ? String(object.total_deposit) : ""
    };
  },

  toJSON(message: EventCreateStorageProvider): unknown {
    const obj: any = {};
    message.sp_address !== undefined && (obj.sp_address = message.sp_address);
    message.funding_address !== undefined && (obj.funding_address = message.funding_address);
    message.seal_address !== undefined && (obj.seal_address = message.seal_address);
    message.approval_address !== undefined && (obj.approval_address = message.approval_address);
    message.endpoint !== undefined && (obj.endpoint = message.endpoint);
    message.total_deposit !== undefined && (obj.total_deposit = message.total_deposit);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCreateStorageProvider>, I>>(object: I): EventCreateStorageProvider {
    const message = createBaseEventCreateStorageProvider();
    message.sp_address = object.sp_address ?? "";
    message.funding_address = object.funding_address ?? "";
    message.seal_address = object.seal_address ?? "";
    message.approval_address = object.approval_address ?? "";
    message.endpoint = object.endpoint ?? "";
    message.total_deposit = object.total_deposit ?? "";
    return message;
  }

};

function createBaseEventEditStorageProvider(): EventEditStorageProvider {
  return {
    old_endpoint: "",
    new_endpoint: ""
  };
}

export const EventEditStorageProvider = {
  encode(message: EventEditStorageProvider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.old_endpoint !== "") {
      writer.uint32(10).string(message.old_endpoint);
    }

    if (message.new_endpoint !== "") {
      writer.uint32(18).string(message.new_endpoint);
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
          message.old_endpoint = reader.string();
          break;

        case 2:
          message.new_endpoint = reader.string();
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
      old_endpoint: isSet(object.old_endpoint) ? String(object.old_endpoint) : "",
      new_endpoint: isSet(object.new_endpoint) ? String(object.new_endpoint) : ""
    };
  },

  toJSON(message: EventEditStorageProvider): unknown {
    const obj: any = {};
    message.old_endpoint !== undefined && (obj.old_endpoint = message.old_endpoint);
    message.new_endpoint !== undefined && (obj.new_endpoint = message.new_endpoint);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventEditStorageProvider>, I>>(object: I): EventEditStorageProvider {
    const message = createBaseEventEditStorageProvider();
    message.old_endpoint = object.old_endpoint ?? "";
    message.new_endpoint = object.new_endpoint ?? "";
    return message;
  }

};

function createBaseEventDeposit(): EventDeposit {
  return {
    sp_address: "",
    deposit: "",
    total_deposit: ""
  };
}

export const EventDeposit = {
  encode(message: EventDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sp_address !== "") {
      writer.uint32(10).string(message.sp_address);
    }

    if (message.deposit !== "") {
      writer.uint32(18).string(message.deposit);
    }

    if (message.total_deposit !== "") {
      writer.uint32(26).string(message.total_deposit);
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
          message.sp_address = reader.string();
          break;

        case 2:
          message.deposit = reader.string();
          break;

        case 3:
          message.total_deposit = reader.string();
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
      sp_address: isSet(object.sp_address) ? String(object.sp_address) : "",
      deposit: isSet(object.deposit) ? String(object.deposit) : "",
      total_deposit: isSet(object.total_deposit) ? String(object.total_deposit) : ""
    };
  },

  toJSON(message: EventDeposit): unknown {
    const obj: any = {};
    message.sp_address !== undefined && (obj.sp_address = message.sp_address);
    message.deposit !== undefined && (obj.deposit = message.deposit);
    message.total_deposit !== undefined && (obj.total_deposit = message.total_deposit);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventDeposit>, I>>(object: I): EventDeposit {
    const message = createBaseEventDeposit();
    message.sp_address = object.sp_address ?? "";
    message.deposit = object.deposit ?? "";
    message.total_deposit = object.total_deposit ?? "";
    return message;
  }

};

function createBaseEventSpStoragePriceUpdate(): EventSpStoragePriceUpdate {
  return {
    sp_address: "",
    update_time: Long.ZERO,
    read_price: "",
    free_read_quota: Long.UZERO,
    store_price: ""
  };
}

export const EventSpStoragePriceUpdate = {
  encode(message: EventSpStoragePriceUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSpStoragePriceUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSpStoragePriceUpdate();

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

  fromJSON(object: any): EventSpStoragePriceUpdate {
    return {
      sp_address: isSet(object.sp_address) ? String(object.sp_address) : "",
      update_time: isSet(object.update_time) ? Long.fromValue(object.update_time) : Long.ZERO,
      read_price: isSet(object.read_price) ? String(object.read_price) : "",
      free_read_quota: isSet(object.free_read_quota) ? Long.fromValue(object.free_read_quota) : Long.UZERO,
      store_price: isSet(object.store_price) ? String(object.store_price) : ""
    };
  },

  toJSON(message: EventSpStoragePriceUpdate): unknown {
    const obj: any = {};
    message.sp_address !== undefined && (obj.sp_address = message.sp_address);
    message.update_time !== undefined && (obj.update_time = (message.update_time || Long.ZERO).toString());
    message.read_price !== undefined && (obj.read_price = message.read_price);
    message.free_read_quota !== undefined && (obj.free_read_quota = (message.free_read_quota || Long.UZERO).toString());
    message.store_price !== undefined && (obj.store_price = message.store_price);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSpStoragePriceUpdate>, I>>(object: I): EventSpStoragePriceUpdate {
    const message = createBaseEventSpStoragePriceUpdate();
    message.sp_address = object.sp_address ?? "";
    message.update_time = object.update_time !== undefined && object.update_time !== null ? Long.fromValue(object.update_time) : Long.ZERO;
    message.read_price = object.read_price ?? "";
    message.free_read_quota = object.free_read_quota !== undefined && object.free_read_quota !== null ? Long.fromValue(object.free_read_quota) : Long.UZERO;
    message.store_price = object.store_price ?? "";
    return message;
  }

};

function createBaseEventSecondarySpStorePriceUpdate(): EventSecondarySpStorePriceUpdate {
  return {
    update_time: Long.ZERO,
    store_price: ""
  };
}

export const EventSecondarySpStorePriceUpdate = {
  encode(message: EventSecondarySpStorePriceUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.update_time.isZero()) {
      writer.uint32(8).int64(message.update_time);
    }

    if (message.store_price !== "") {
      writer.uint32(18).string(message.store_price);
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

  fromJSON(object: any): EventSecondarySpStorePriceUpdate {
    return {
      update_time: isSet(object.update_time) ? Long.fromValue(object.update_time) : Long.ZERO,
      store_price: isSet(object.store_price) ? String(object.store_price) : ""
    };
  },

  toJSON(message: EventSecondarySpStorePriceUpdate): unknown {
    const obj: any = {};
    message.update_time !== undefined && (obj.update_time = (message.update_time || Long.ZERO).toString());
    message.store_price !== undefined && (obj.store_price = message.store_price);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSecondarySpStorePriceUpdate>, I>>(object: I): EventSecondarySpStorePriceUpdate {
    const message = createBaseEventSecondarySpStorePriceUpdate();
    message.update_time = object.update_time !== undefined && object.update_time !== null ? Long.fromValue(object.update_time) : Long.ZERO;
    message.store_price = object.store_price ?? "";
    return message;
  }

};