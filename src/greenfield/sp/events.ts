//@ts-nocheck
/* eslint-disable */
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Status, Description, DescriptionSDKType, statusFromJSON, statusToJSON } from "./types";
import { Long, isSet, DeepPartial, Exact } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "greenfield.sp";
/** EventCreateStorageProvider is emitted when there is a storage provider created */
export interface EventCreateStorageProvider {
  /** sp_id defines the identifier of storage provider which generated on-chain */
  spId: number;
  /** sp_address is the operator address of the storage provider */
  spAddress: string;
  /** funding_address is the funding account address of the storage provider */
  fundingAddress: string;
  /** seal_address is the account address for SealObject Tx */
  sealAddress: string;
  /** approval_address is the account address for approve create bucket/object signature */
  approvalAddress: string;
  /** gc_address defines one of the storage provider's accounts which is used for gc purpose */
  gcAddress: string;
  /** maintenance_address defines one of the storage provider's accounts which is used for testing while in maintenance mode */
  maintenanceAddress: string;
  /** endpoint is the domain name address used by SP to provide storage services */
  endpoint: string;
  /** total_deposit is the token coin that the storage provider deposit to the storage module */
  totalDeposit: Coin;
  /** status defines the status of the storage provider */
  status: Status;
  /** description defines the description terms for the storage provider */
  description: Description;
  /** bls_key defines the bls pub key owned by storage provider used when sealing object and completing migration */
  blsKey: string;
}
/** EventCreateStorageProvider is emitted when there is a storage provider created */
export interface EventCreateStorageProviderSDKType {
  sp_id: number;
  sp_address: string;
  funding_address: string;
  seal_address: string;
  approval_address: string;
  gc_address: string;
  maintenance_address: string;
  endpoint: string;
  total_deposit: CoinSDKType;
  status: Status;
  description: DescriptionSDKType;
  bls_key: string;
}
/** EventEditStorageProvider is emitted when SP's metadata is edited. */
export interface EventEditStorageProvider {
  /** sp_id defines the identifier of storage provider which generated on-chain */
  spId: number;
  /** sp_address is the operator address of the storage provider */
  spAddress: string;
  /** endpoint is the service endpoint of the storage provider */
  endpoint: string;
  /** description defines the description terms for the storage provider */
  description: Description;
  /** seal_address is the account address for SealObject Tx */
  sealAddress: string;
  /** approval_address is the account address for approve create bucket/object signature */
  approvalAddress: string;
  /** gc_address defines one of the storage provider's accounts which is used for gc purpose */
  gcAddress: string;
  /** maintenance_address defines one of the storage provider's accounts which is used for testing while in maintenance mode */
  maintenanceAddress: string;
  /** bls_key defines the bls pub key owned by storage provider used when sealing object */
  blsKey: string;
}
/** EventEditStorageProvider is emitted when SP's metadata is edited. */
export interface EventEditStorageProviderSDKType {
  sp_id: number;
  sp_address: string;
  endpoint: string;
  description: DescriptionSDKType;
  seal_address: string;
  approval_address: string;
  gc_address: string;
  maintenance_address: string;
  bls_key: string;
}
/** EventDeposit is emitted when sp deposit tokens. */
export interface EventDeposit {
  /** funding_address is the funding account address of the storage provider */
  fundingAddress: string;
  /** deposit is the token coin deposited this message */
  deposit: string;
  /** total_deposit is the total token coins this storage provider deposited */
  totalDeposit: string;
}
/** EventDeposit is emitted when sp deposit tokens. */
export interface EventDepositSDKType {
  funding_address: string;
  deposit: string;
  total_deposit: string;
}
export interface EventSpStoragePriceUpdate {
  /** sp id */
  spId: number;
  /** update time, in unix timestamp */
  updateTimeSec: Long;
  /** read price, in bnb wei per charge byte */
  readPrice: string;
  /** free read quota, in byte */
  freeReadQuota: Long;
  /** store price, in bnb wei per charge byte */
  storePrice: string;
}
export interface EventSpStoragePriceUpdateSDKType {
  sp_id: number;
  update_time_sec: Long;
  read_price: string;
  free_read_quota: Long;
  store_price: string;
}
export interface EventGlobalSpStorePriceUpdate {
  /** update time, in unix timestamp */
  updateTimeSec: Long;
  /** read price, in bnb wei per charge byte */
  readPrice: string;
  /** primary store price, in bnb wei per charge byte */
  primaryStorePrice: string;
  /** secondary store price, in bnb wei per charge byte */
  secondaryStorePrice: string;
}
export interface EventGlobalSpStorePriceUpdateSDKType {
  update_time_sec: Long;
  read_price: string;
  primary_store_price: string;
  secondary_store_price: string;
}
/** EventUpdateStorageProviderStatus is emitted when the SP update its status successfully */
export interface EventUpdateStorageProviderStatus {
  /** sp_id defines the identifier of storage provider which generated on-chain */
  spId: number;
  /** sp_address is the operator address of the storage provider */
  spAddress: string;
  /** pre status */
  preStatus: string;
  /** new status */
  newStatus: string;
}
/** EventUpdateStorageProviderStatus is emitted when the SP update its status successfully */
export interface EventUpdateStorageProviderStatusSDKType {
  sp_id: number;
  sp_address: string;
  pre_status: string;
  new_status: string;
}
function createBaseEventCreateStorageProvider(): EventCreateStorageProvider {
  return {
    spId: 0,
    spAddress: "",
    fundingAddress: "",
    sealAddress: "",
    approvalAddress: "",
    gcAddress: "",
    maintenanceAddress: "",
    endpoint: "",
    totalDeposit: Coin.fromPartial({}),
    status: 0,
    description: Description.fromPartial({}),
    blsKey: ""
  };
}
export const EventCreateStorageProvider = {
  encode(message: EventCreateStorageProvider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spId !== 0) {
      writer.uint32(8).uint32(message.spId);
    }
    if (message.spAddress !== "") {
      writer.uint32(18).string(message.spAddress);
    }
    if (message.fundingAddress !== "") {
      writer.uint32(26).string(message.fundingAddress);
    }
    if (message.sealAddress !== "") {
      writer.uint32(34).string(message.sealAddress);
    }
    if (message.approvalAddress !== "") {
      writer.uint32(42).string(message.approvalAddress);
    }
    if (message.gcAddress !== "") {
      writer.uint32(50).string(message.gcAddress);
    }
    if (message.maintenanceAddress !== "") {
      writer.uint32(58).string(message.maintenanceAddress);
    }
    if (message.endpoint !== "") {
      writer.uint32(66).string(message.endpoint);
    }
    if (message.totalDeposit !== undefined) {
      Coin.encode(message.totalDeposit, writer.uint32(74).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(80).int32(message.status);
    }
    if (message.description !== undefined) {
      Description.encode(message.description, writer.uint32(90).fork()).ldelim();
    }
    if (message.blsKey !== "") {
      writer.uint32(98).string(message.blsKey);
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
          message.spId = reader.uint32();
          break;
        case 2:
          message.spAddress = reader.string();
          break;
        case 3:
          message.fundingAddress = reader.string();
          break;
        case 4:
          message.sealAddress = reader.string();
          break;
        case 5:
          message.approvalAddress = reader.string();
          break;
        case 6:
          message.gcAddress = reader.string();
          break;
        case 7:
          message.maintenanceAddress = reader.string();
          break;
        case 8:
          message.endpoint = reader.string();
          break;
        case 9:
          message.totalDeposit = Coin.decode(reader, reader.uint32());
          break;
        case 10:
          message.status = (reader.int32() as any);
          break;
        case 11:
          message.description = Description.decode(reader, reader.uint32());
          break;
        case 12:
          message.blsKey = reader.string();
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
      spId: isSet(object.spId) ? Number(object.spId) : 0,
      spAddress: isSet(object.spAddress) ? String(object.spAddress) : "",
      fundingAddress: isSet(object.fundingAddress) ? String(object.fundingAddress) : "",
      sealAddress: isSet(object.sealAddress) ? String(object.sealAddress) : "",
      approvalAddress: isSet(object.approvalAddress) ? String(object.approvalAddress) : "",
      gcAddress: isSet(object.gcAddress) ? String(object.gcAddress) : "",
      maintenanceAddress: isSet(object.maintenanceAddress) ? String(object.maintenanceAddress) : "",
      endpoint: isSet(object.endpoint) ? String(object.endpoint) : "",
      totalDeposit: isSet(object.totalDeposit) ? Coin.fromJSON(object.totalDeposit) : undefined,
      status: isSet(object.status) ? statusFromJSON(object.status) : -1,
      description: isSet(object.description) ? Description.fromJSON(object.description) : undefined,
      blsKey: isSet(object.blsKey) ? String(object.blsKey) : ""
    };
  },
  toJSON(message: EventCreateStorageProvider): unknown {
    const obj: any = {};
    message.spId !== undefined && (obj.spId = Math.round(message.spId));
    message.spAddress !== undefined && (obj.spAddress = message.spAddress);
    message.fundingAddress !== undefined && (obj.fundingAddress = message.fundingAddress);
    message.sealAddress !== undefined && (obj.sealAddress = message.sealAddress);
    message.approvalAddress !== undefined && (obj.approvalAddress = message.approvalAddress);
    message.gcAddress !== undefined && (obj.gcAddress = message.gcAddress);
    message.maintenanceAddress !== undefined && (obj.maintenanceAddress = message.maintenanceAddress);
    message.endpoint !== undefined && (obj.endpoint = message.endpoint);
    message.totalDeposit !== undefined && (obj.totalDeposit = message.totalDeposit ? Coin.toJSON(message.totalDeposit) : undefined);
    message.status !== undefined && (obj.status = statusToJSON(message.status));
    message.description !== undefined && (obj.description = message.description ? Description.toJSON(message.description) : undefined);
    message.blsKey !== undefined && (obj.blsKey = message.blsKey);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventCreateStorageProvider>, I>>(object: I): EventCreateStorageProvider {
    const message = createBaseEventCreateStorageProvider();
    message.spId = object.spId ?? 0;
    message.spAddress = object.spAddress ?? "";
    message.fundingAddress = object.fundingAddress ?? "";
    message.sealAddress = object.sealAddress ?? "";
    message.approvalAddress = object.approvalAddress ?? "";
    message.gcAddress = object.gcAddress ?? "";
    message.maintenanceAddress = object.maintenanceAddress ?? "";
    message.endpoint = object.endpoint ?? "";
    message.totalDeposit = object.totalDeposit !== undefined && object.totalDeposit !== null ? Coin.fromPartial(object.totalDeposit) : undefined;
    message.status = object.status ?? 0;
    message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
    message.blsKey = object.blsKey ?? "";
    return message;
  },
  fromSDK(object: EventCreateStorageProviderSDKType): EventCreateStorageProvider {
    return {
      spId: object?.sp_id,
      spAddress: object?.sp_address,
      fundingAddress: object?.funding_address,
      sealAddress: object?.seal_address,
      approvalAddress: object?.approval_address,
      gcAddress: object?.gc_address,
      maintenanceAddress: object?.maintenance_address,
      endpoint: object?.endpoint,
      totalDeposit: object.total_deposit ? Coin.fromSDK(object.total_deposit) : undefined,
      status: isSet(object.status) ? statusFromJSON(object.status) : -1,
      description: object.description ? Description.fromSDK(object.description) : undefined,
      blsKey: object?.bls_key
    };
  },
  toSDK(message: EventCreateStorageProvider): EventCreateStorageProviderSDKType {
    const obj: any = {};
    obj.sp_id = message.spId;
    obj.sp_address = message.spAddress;
    obj.funding_address = message.fundingAddress;
    obj.seal_address = message.sealAddress;
    obj.approval_address = message.approvalAddress;
    obj.gc_address = message.gcAddress;
    obj.maintenance_address = message.maintenanceAddress;
    obj.endpoint = message.endpoint;
    message.totalDeposit !== undefined && (obj.total_deposit = message.totalDeposit ? Coin.toSDK(message.totalDeposit) : undefined);
    message.status !== undefined && (obj.status = statusToJSON(message.status));
    message.description !== undefined && (obj.description = message.description ? Description.toSDK(message.description) : undefined);
    obj.bls_key = message.blsKey;
    return obj;
  }
};
function createBaseEventEditStorageProvider(): EventEditStorageProvider {
  return {
    spId: 0,
    spAddress: "",
    endpoint: "",
    description: Description.fromPartial({}),
    sealAddress: "",
    approvalAddress: "",
    gcAddress: "",
    maintenanceAddress: "",
    blsKey: ""
  };
}
export const EventEditStorageProvider = {
  encode(message: EventEditStorageProvider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spId !== 0) {
      writer.uint32(8).uint32(message.spId);
    }
    if (message.spAddress !== "") {
      writer.uint32(18).string(message.spAddress);
    }
    if (message.endpoint !== "") {
      writer.uint32(26).string(message.endpoint);
    }
    if (message.description !== undefined) {
      Description.encode(message.description, writer.uint32(34).fork()).ldelim();
    }
    if (message.sealAddress !== "") {
      writer.uint32(42).string(message.sealAddress);
    }
    if (message.approvalAddress !== "") {
      writer.uint32(50).string(message.approvalAddress);
    }
    if (message.gcAddress !== "") {
      writer.uint32(58).string(message.gcAddress);
    }
    if (message.maintenanceAddress !== "") {
      writer.uint32(66).string(message.maintenanceAddress);
    }
    if (message.blsKey !== "") {
      writer.uint32(74).string(message.blsKey);
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
          message.spId = reader.uint32();
          break;
        case 2:
          message.spAddress = reader.string();
          break;
        case 3:
          message.endpoint = reader.string();
          break;
        case 4:
          message.description = Description.decode(reader, reader.uint32());
          break;
        case 5:
          message.sealAddress = reader.string();
          break;
        case 6:
          message.approvalAddress = reader.string();
          break;
        case 7:
          message.gcAddress = reader.string();
          break;
        case 8:
          message.maintenanceAddress = reader.string();
          break;
        case 9:
          message.blsKey = reader.string();
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
      spId: isSet(object.spId) ? Number(object.spId) : 0,
      spAddress: isSet(object.spAddress) ? String(object.spAddress) : "",
      endpoint: isSet(object.endpoint) ? String(object.endpoint) : "",
      description: isSet(object.description) ? Description.fromJSON(object.description) : undefined,
      sealAddress: isSet(object.sealAddress) ? String(object.sealAddress) : "",
      approvalAddress: isSet(object.approvalAddress) ? String(object.approvalAddress) : "",
      gcAddress: isSet(object.gcAddress) ? String(object.gcAddress) : "",
      maintenanceAddress: isSet(object.maintenanceAddress) ? String(object.maintenanceAddress) : "",
      blsKey: isSet(object.blsKey) ? String(object.blsKey) : ""
    };
  },
  toJSON(message: EventEditStorageProvider): unknown {
    const obj: any = {};
    message.spId !== undefined && (obj.spId = Math.round(message.spId));
    message.spAddress !== undefined && (obj.spAddress = message.spAddress);
    message.endpoint !== undefined && (obj.endpoint = message.endpoint);
    message.description !== undefined && (obj.description = message.description ? Description.toJSON(message.description) : undefined);
    message.sealAddress !== undefined && (obj.sealAddress = message.sealAddress);
    message.approvalAddress !== undefined && (obj.approvalAddress = message.approvalAddress);
    message.gcAddress !== undefined && (obj.gcAddress = message.gcAddress);
    message.maintenanceAddress !== undefined && (obj.maintenanceAddress = message.maintenanceAddress);
    message.blsKey !== undefined && (obj.blsKey = message.blsKey);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventEditStorageProvider>, I>>(object: I): EventEditStorageProvider {
    const message = createBaseEventEditStorageProvider();
    message.spId = object.spId ?? 0;
    message.spAddress = object.spAddress ?? "";
    message.endpoint = object.endpoint ?? "";
    message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
    message.sealAddress = object.sealAddress ?? "";
    message.approvalAddress = object.approvalAddress ?? "";
    message.gcAddress = object.gcAddress ?? "";
    message.maintenanceAddress = object.maintenanceAddress ?? "";
    message.blsKey = object.blsKey ?? "";
    return message;
  },
  fromSDK(object: EventEditStorageProviderSDKType): EventEditStorageProvider {
    return {
      spId: object?.sp_id,
      spAddress: object?.sp_address,
      endpoint: object?.endpoint,
      description: object.description ? Description.fromSDK(object.description) : undefined,
      sealAddress: object?.seal_address,
      approvalAddress: object?.approval_address,
      gcAddress: object?.gc_address,
      maintenanceAddress: object?.maintenance_address,
      blsKey: object?.bls_key
    };
  },
  toSDK(message: EventEditStorageProvider): EventEditStorageProviderSDKType {
    const obj: any = {};
    obj.sp_id = message.spId;
    obj.sp_address = message.spAddress;
    obj.endpoint = message.endpoint;
    message.description !== undefined && (obj.description = message.description ? Description.toSDK(message.description) : undefined);
    obj.seal_address = message.sealAddress;
    obj.approval_address = message.approvalAddress;
    obj.gc_address = message.gcAddress;
    obj.maintenance_address = message.maintenanceAddress;
    obj.bls_key = message.blsKey;
    return obj;
  }
};
function createBaseEventDeposit(): EventDeposit {
  return {
    fundingAddress: "",
    deposit: "",
    totalDeposit: ""
  };
}
export const EventDeposit = {
  encode(message: EventDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fundingAddress !== "") {
      writer.uint32(10).string(message.fundingAddress);
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
          message.fundingAddress = reader.string();
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
      fundingAddress: isSet(object.fundingAddress) ? String(object.fundingAddress) : "",
      deposit: isSet(object.deposit) ? String(object.deposit) : "",
      totalDeposit: isSet(object.totalDeposit) ? String(object.totalDeposit) : ""
    };
  },
  toJSON(message: EventDeposit): unknown {
    const obj: any = {};
    message.fundingAddress !== undefined && (obj.fundingAddress = message.fundingAddress);
    message.deposit !== undefined && (obj.deposit = message.deposit);
    message.totalDeposit !== undefined && (obj.totalDeposit = message.totalDeposit);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventDeposit>, I>>(object: I): EventDeposit {
    const message = createBaseEventDeposit();
    message.fundingAddress = object.fundingAddress ?? "";
    message.deposit = object.deposit ?? "";
    message.totalDeposit = object.totalDeposit ?? "";
    return message;
  },
  fromSDK(object: EventDepositSDKType): EventDeposit {
    return {
      fundingAddress: object?.funding_address,
      deposit: object?.deposit,
      totalDeposit: object?.total_deposit
    };
  },
  toSDK(message: EventDeposit): EventDepositSDKType {
    const obj: any = {};
    obj.funding_address = message.fundingAddress;
    obj.deposit = message.deposit;
    obj.total_deposit = message.totalDeposit;
    return obj;
  }
};
function createBaseEventSpStoragePriceUpdate(): EventSpStoragePriceUpdate {
  return {
    spId: 0,
    updateTimeSec: Long.ZERO,
    readPrice: "",
    freeReadQuota: Long.UZERO,
    storePrice: ""
  };
}
export const EventSpStoragePriceUpdate = {
  encode(message: EventSpStoragePriceUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spId !== 0) {
      writer.uint32(8).uint32(message.spId);
    }
    if (!message.updateTimeSec.isZero()) {
      writer.uint32(16).int64(message.updateTimeSec);
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
          message.spId = reader.uint32();
          break;
        case 2:
          message.updateTimeSec = (reader.int64() as Long);
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
      spId: isSet(object.spId) ? Number(object.spId) : 0,
      updateTimeSec: isSet(object.updateTimeSec) ? Long.fromValue(object.updateTimeSec) : Long.ZERO,
      readPrice: isSet(object.readPrice) ? String(object.readPrice) : "",
      freeReadQuota: isSet(object.freeReadQuota) ? Long.fromValue(object.freeReadQuota) : Long.UZERO,
      storePrice: isSet(object.storePrice) ? String(object.storePrice) : ""
    };
  },
  toJSON(message: EventSpStoragePriceUpdate): unknown {
    const obj: any = {};
    message.spId !== undefined && (obj.spId = Math.round(message.spId));
    message.updateTimeSec !== undefined && (obj.updateTimeSec = (message.updateTimeSec || Long.ZERO).toString());
    message.readPrice !== undefined && (obj.readPrice = message.readPrice);
    message.freeReadQuota !== undefined && (obj.freeReadQuota = (message.freeReadQuota || Long.UZERO).toString());
    message.storePrice !== undefined && (obj.storePrice = message.storePrice);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventSpStoragePriceUpdate>, I>>(object: I): EventSpStoragePriceUpdate {
    const message = createBaseEventSpStoragePriceUpdate();
    message.spId = object.spId ?? 0;
    message.updateTimeSec = object.updateTimeSec !== undefined && object.updateTimeSec !== null ? Long.fromValue(object.updateTimeSec) : Long.ZERO;
    message.readPrice = object.readPrice ?? "";
    message.freeReadQuota = object.freeReadQuota !== undefined && object.freeReadQuota !== null ? Long.fromValue(object.freeReadQuota) : Long.UZERO;
    message.storePrice = object.storePrice ?? "";
    return message;
  },
  fromSDK(object: EventSpStoragePriceUpdateSDKType): EventSpStoragePriceUpdate {
    return {
      spId: object?.sp_id,
      updateTimeSec: object?.update_time_sec,
      readPrice: object?.read_price,
      freeReadQuota: object?.free_read_quota,
      storePrice: object?.store_price
    };
  },
  toSDK(message: EventSpStoragePriceUpdate): EventSpStoragePriceUpdateSDKType {
    const obj: any = {};
    obj.sp_id = message.spId;
    obj.update_time_sec = message.updateTimeSec;
    obj.read_price = message.readPrice;
    obj.free_read_quota = message.freeReadQuota;
    obj.store_price = message.storePrice;
    return obj;
  }
};
function createBaseEventGlobalSpStorePriceUpdate(): EventGlobalSpStorePriceUpdate {
  return {
    updateTimeSec: Long.ZERO,
    readPrice: "",
    primaryStorePrice: "",
    secondaryStorePrice: ""
  };
}
export const EventGlobalSpStorePriceUpdate = {
  encode(message: EventGlobalSpStorePriceUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.updateTimeSec.isZero()) {
      writer.uint32(8).int64(message.updateTimeSec);
    }
    if (message.readPrice !== "") {
      writer.uint32(18).string(message.readPrice);
    }
    if (message.primaryStorePrice !== "") {
      writer.uint32(26).string(message.primaryStorePrice);
    }
    if (message.secondaryStorePrice !== "") {
      writer.uint32(34).string(message.secondaryStorePrice);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventGlobalSpStorePriceUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventGlobalSpStorePriceUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.updateTimeSec = (reader.int64() as Long);
          break;
        case 2:
          message.readPrice = reader.string();
          break;
        case 3:
          message.primaryStorePrice = reader.string();
          break;
        case 4:
          message.secondaryStorePrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventGlobalSpStorePriceUpdate {
    return {
      updateTimeSec: isSet(object.updateTimeSec) ? Long.fromValue(object.updateTimeSec) : Long.ZERO,
      readPrice: isSet(object.readPrice) ? String(object.readPrice) : "",
      primaryStorePrice: isSet(object.primaryStorePrice) ? String(object.primaryStorePrice) : "",
      secondaryStorePrice: isSet(object.secondaryStorePrice) ? String(object.secondaryStorePrice) : ""
    };
  },
  toJSON(message: EventGlobalSpStorePriceUpdate): unknown {
    const obj: any = {};
    message.updateTimeSec !== undefined && (obj.updateTimeSec = (message.updateTimeSec || Long.ZERO).toString());
    message.readPrice !== undefined && (obj.readPrice = message.readPrice);
    message.primaryStorePrice !== undefined && (obj.primaryStorePrice = message.primaryStorePrice);
    message.secondaryStorePrice !== undefined && (obj.secondaryStorePrice = message.secondaryStorePrice);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventGlobalSpStorePriceUpdate>, I>>(object: I): EventGlobalSpStorePriceUpdate {
    const message = createBaseEventGlobalSpStorePriceUpdate();
    message.updateTimeSec = object.updateTimeSec !== undefined && object.updateTimeSec !== null ? Long.fromValue(object.updateTimeSec) : Long.ZERO;
    message.readPrice = object.readPrice ?? "";
    message.primaryStorePrice = object.primaryStorePrice ?? "";
    message.secondaryStorePrice = object.secondaryStorePrice ?? "";
    return message;
  },
  fromSDK(object: EventGlobalSpStorePriceUpdateSDKType): EventGlobalSpStorePriceUpdate {
    return {
      updateTimeSec: object?.update_time_sec,
      readPrice: object?.read_price,
      primaryStorePrice: object?.primary_store_price,
      secondaryStorePrice: object?.secondary_store_price
    };
  },
  toSDK(message: EventGlobalSpStorePriceUpdate): EventGlobalSpStorePriceUpdateSDKType {
    const obj: any = {};
    obj.update_time_sec = message.updateTimeSec;
    obj.read_price = message.readPrice;
    obj.primary_store_price = message.primaryStorePrice;
    obj.secondary_store_price = message.secondaryStorePrice;
    return obj;
  }
};
function createBaseEventUpdateStorageProviderStatus(): EventUpdateStorageProviderStatus {
  return {
    spId: 0,
    spAddress: "",
    preStatus: "",
    newStatus: ""
  };
}
export const EventUpdateStorageProviderStatus = {
  encode(message: EventUpdateStorageProviderStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spId !== 0) {
      writer.uint32(8).uint32(message.spId);
    }
    if (message.spAddress !== "") {
      writer.uint32(18).string(message.spAddress);
    }
    if (message.preStatus !== "") {
      writer.uint32(26).string(message.preStatus);
    }
    if (message.newStatus !== "") {
      writer.uint32(34).string(message.newStatus);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateStorageProviderStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateStorageProviderStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spId = reader.uint32();
          break;
        case 2:
          message.spAddress = reader.string();
          break;
        case 3:
          message.preStatus = reader.string();
          break;
        case 4:
          message.newStatus = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventUpdateStorageProviderStatus {
    return {
      spId: isSet(object.spId) ? Number(object.spId) : 0,
      spAddress: isSet(object.spAddress) ? String(object.spAddress) : "",
      preStatus: isSet(object.preStatus) ? String(object.preStatus) : "",
      newStatus: isSet(object.newStatus) ? String(object.newStatus) : ""
    };
  },
  toJSON(message: EventUpdateStorageProviderStatus): unknown {
    const obj: any = {};
    message.spId !== undefined && (obj.spId = Math.round(message.spId));
    message.spAddress !== undefined && (obj.spAddress = message.spAddress);
    message.preStatus !== undefined && (obj.preStatus = message.preStatus);
    message.newStatus !== undefined && (obj.newStatus = message.newStatus);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventUpdateStorageProviderStatus>, I>>(object: I): EventUpdateStorageProviderStatus {
    const message = createBaseEventUpdateStorageProviderStatus();
    message.spId = object.spId ?? 0;
    message.spAddress = object.spAddress ?? "";
    message.preStatus = object.preStatus ?? "";
    message.newStatus = object.newStatus ?? "";
    return message;
  },
  fromSDK(object: EventUpdateStorageProviderStatusSDKType): EventUpdateStorageProviderStatus {
    return {
      spId: object?.sp_id,
      spAddress: object?.sp_address,
      preStatus: object?.pre_status,
      newStatus: object?.new_status
    };
  },
  toSDK(message: EventUpdateStorageProviderStatus): EventUpdateStorageProviderStatusSDKType {
    const obj: any = {};
    obj.sp_id = message.spId;
    obj.sp_address = message.spAddress;
    obj.pre_status = message.preStatus;
    obj.new_status = message.newStatus;
    return obj;
  }
};