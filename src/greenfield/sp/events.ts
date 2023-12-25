//@ts-nocheck
/* eslint-disable */
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Status, Description, DescriptionAmino, DescriptionSDKType, statusFromJSON, statusToJSON } from "./types";
import { Long, isSet, DeepPartial, Exact } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { Decimal } from "@cosmjs/math";
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
  totalDeposit?: Coin;
  /** status defines the status of the storage provider */
  status: Status;
  /** description defines the description terms for the storage provider */
  description: Description;
  /** bls_key defines the bls pub key owned by storage provider used when sealing object and completing migration */
  blsKey: string;
}
export interface EventCreateStorageProviderProtoMsg {
  typeUrl: "/greenfield.sp.EventCreateStorageProvider";
  value: Uint8Array;
}
/** EventCreateStorageProvider is emitted when there is a storage provider created */
export interface EventCreateStorageProviderAmino {
  /** sp_id defines the identifier of storage provider which generated on-chain */
  sp_id?: number;
  /** sp_address is the operator address of the storage provider */
  sp_address?: string;
  /** funding_address is the funding account address of the storage provider */
  funding_address?: string;
  /** seal_address is the account address for SealObject Tx */
  seal_address?: string;
  /** approval_address is the account address for approve create bucket/object signature */
  approval_address?: string;
  /** gc_address defines one of the storage provider's accounts which is used for gc purpose */
  gc_address?: string;
  /** maintenance_address defines one of the storage provider's accounts which is used for testing while in maintenance mode */
  maintenance_address?: string;
  /** endpoint is the domain name address used by SP to provide storage services */
  endpoint?: string;
  /** total_deposit is the token coin that the storage provider deposit to the storage module */
  total_deposit?: CoinAmino;
  /** status defines the status of the storage provider */
  status?: Status;
  /** description defines the description terms for the storage provider */
  description?: DescriptionAmino;
  /** bls_key defines the bls pub key owned by storage provider used when sealing object and completing migration */
  bls_key?: string;
}
export interface EventCreateStorageProviderAminoMsg {
  type: "/greenfield.sp.EventCreateStorageProvider";
  value: EventCreateStorageProviderAmino;
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
  total_deposit?: CoinSDKType;
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
export interface EventEditStorageProviderProtoMsg {
  typeUrl: "/greenfield.sp.EventEditStorageProvider";
  value: Uint8Array;
}
/** EventEditStorageProvider is emitted when SP's metadata is edited. */
export interface EventEditStorageProviderAmino {
  /** sp_id defines the identifier of storage provider which generated on-chain */
  sp_id?: number;
  /** sp_address is the operator address of the storage provider */
  sp_address?: string;
  /** endpoint is the service endpoint of the storage provider */
  endpoint?: string;
  /** description defines the description terms for the storage provider */
  description?: DescriptionAmino;
  /** seal_address is the account address for SealObject Tx */
  seal_address?: string;
  /** approval_address is the account address for approve create bucket/object signature */
  approval_address?: string;
  /** gc_address defines one of the storage provider's accounts which is used for gc purpose */
  gc_address?: string;
  /** maintenance_address defines one of the storage provider's accounts which is used for testing while in maintenance mode */
  maintenance_address?: string;
  /** bls_key defines the bls pub key owned by storage provider used when sealing object */
  bls_key?: string;
}
export interface EventEditStorageProviderAminoMsg {
  type: "/greenfield.sp.EventEditStorageProvider";
  value: EventEditStorageProviderAmino;
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
export interface EventDepositProtoMsg {
  typeUrl: "/greenfield.sp.EventDeposit";
  value: Uint8Array;
}
/** EventDeposit is emitted when sp deposit tokens. */
export interface EventDepositAmino {
  /** funding_address is the funding account address of the storage provider */
  funding_address?: string;
  /** deposit is the token coin deposited this message */
  deposit?: string;
  /** total_deposit is the total token coins this storage provider deposited */
  total_deposit?: string;
}
export interface EventDepositAminoMsg {
  type: "/greenfield.sp.EventDeposit";
  value: EventDepositAmino;
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
export interface EventSpStoragePriceUpdateProtoMsg {
  typeUrl: "/greenfield.sp.EventSpStoragePriceUpdate";
  value: Uint8Array;
}
export interface EventSpStoragePriceUpdateAmino {
  /** sp id */
  sp_id?: number;
  /** update time, in unix timestamp */
  update_time_sec?: string;
  /** read price, in bnb wei per charge byte */
  read_price?: string;
  /** free read quota, in byte */
  free_read_quota?: string;
  /** store price, in bnb wei per charge byte */
  store_price?: string;
}
export interface EventSpStoragePriceUpdateAminoMsg {
  type: "/greenfield.sp.EventSpStoragePriceUpdate";
  value: EventSpStoragePriceUpdateAmino;
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
export interface EventGlobalSpStorePriceUpdateProtoMsg {
  typeUrl: "/greenfield.sp.EventGlobalSpStorePriceUpdate";
  value: Uint8Array;
}
export interface EventGlobalSpStorePriceUpdateAmino {
  /** update time, in unix timestamp */
  update_time_sec?: string;
  /** read price, in bnb wei per charge byte */
  read_price?: string;
  /** primary store price, in bnb wei per charge byte */
  primary_store_price?: string;
  /** secondary store price, in bnb wei per charge byte */
  secondary_store_price?: string;
}
export interface EventGlobalSpStorePriceUpdateAminoMsg {
  type: "/greenfield.sp.EventGlobalSpStorePriceUpdate";
  value: EventGlobalSpStorePriceUpdateAmino;
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
export interface EventUpdateStorageProviderStatusProtoMsg {
  typeUrl: "/greenfield.sp.EventUpdateStorageProviderStatus";
  value: Uint8Array;
}
/** EventUpdateStorageProviderStatus is emitted when the SP update its status successfully */
export interface EventUpdateStorageProviderStatusAmino {
  /** sp_id defines the identifier of storage provider which generated on-chain */
  sp_id?: number;
  /** sp_address is the operator address of the storage provider */
  sp_address?: string;
  /** pre status */
  pre_status?: string;
  /** new status */
  new_status?: string;
}
export interface EventUpdateStorageProviderStatusAminoMsg {
  type: "/greenfield.sp.EventUpdateStorageProviderStatus";
  value: EventUpdateStorageProviderStatusAmino;
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
    totalDeposit: undefined,
    status: 0,
    description: Description.fromPartial({}),
    blsKey: ""
  };
}
export const EventCreateStorageProvider = {
  typeUrl: "/greenfield.sp.EventCreateStorageProvider",
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
  },
  fromAmino(object: EventCreateStorageProviderAmino): EventCreateStorageProvider {
    const message = createBaseEventCreateStorageProvider();
    if (object.sp_id !== undefined && object.sp_id !== null) {
      message.spId = object.sp_id;
    }
    if (object.sp_address !== undefined && object.sp_address !== null) {
      message.spAddress = object.sp_address;
    }
    if (object.funding_address !== undefined && object.funding_address !== null) {
      message.fundingAddress = object.funding_address;
    }
    if (object.seal_address !== undefined && object.seal_address !== null) {
      message.sealAddress = object.seal_address;
    }
    if (object.approval_address !== undefined && object.approval_address !== null) {
      message.approvalAddress = object.approval_address;
    }
    if (object.gc_address !== undefined && object.gc_address !== null) {
      message.gcAddress = object.gc_address;
    }
    if (object.maintenance_address !== undefined && object.maintenance_address !== null) {
      message.maintenanceAddress = object.maintenance_address;
    }
    if (object.endpoint !== undefined && object.endpoint !== null) {
      message.endpoint = object.endpoint;
    }
    if (object.total_deposit !== undefined && object.total_deposit !== null) {
      message.totalDeposit = Coin.fromAmino(object.total_deposit);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = statusFromJSON(object.status);
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = Description.fromAmino(object.description);
    }
    if (object.bls_key !== undefined && object.bls_key !== null) {
      message.blsKey = object.bls_key;
    }
    return message;
  },
  toAmino(message: EventCreateStorageProvider): EventCreateStorageProviderAmino {
    const obj: any = {};
    obj.sp_id = message.spId;
    obj.sp_address = message.spAddress;
    obj.funding_address = message.fundingAddress;
    obj.seal_address = message.sealAddress;
    obj.approval_address = message.approvalAddress;
    obj.gc_address = message.gcAddress;
    obj.maintenance_address = message.maintenanceAddress;
    obj.endpoint = message.endpoint;
    obj.total_deposit = message.totalDeposit ? Coin.toAmino(message.totalDeposit) : undefined;
    obj.status = statusToJSON(message.status);
    obj.description = message.description ? Description.toAmino(message.description) : undefined;
    obj.bls_key = message.blsKey;
    return obj;
  },
  fromAminoMsg(object: EventCreateStorageProviderAminoMsg): EventCreateStorageProvider {
    return EventCreateStorageProvider.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCreateStorageProviderProtoMsg): EventCreateStorageProvider {
    return EventCreateStorageProvider.decode(message.value);
  },
  toProto(message: EventCreateStorageProvider): Uint8Array {
    return EventCreateStorageProvider.encode(message).finish();
  },
  toProtoMsg(message: EventCreateStorageProvider): EventCreateStorageProviderProtoMsg {
    return {
      typeUrl: "/greenfield.sp.EventCreateStorageProvider",
      value: EventCreateStorageProvider.encode(message).finish()
    };
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
  typeUrl: "/greenfield.sp.EventEditStorageProvider",
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
  },
  fromAmino(object: EventEditStorageProviderAmino): EventEditStorageProvider {
    const message = createBaseEventEditStorageProvider();
    if (object.sp_id !== undefined && object.sp_id !== null) {
      message.spId = object.sp_id;
    }
    if (object.sp_address !== undefined && object.sp_address !== null) {
      message.spAddress = object.sp_address;
    }
    if (object.endpoint !== undefined && object.endpoint !== null) {
      message.endpoint = object.endpoint;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = Description.fromAmino(object.description);
    }
    if (object.seal_address !== undefined && object.seal_address !== null) {
      message.sealAddress = object.seal_address;
    }
    if (object.approval_address !== undefined && object.approval_address !== null) {
      message.approvalAddress = object.approval_address;
    }
    if (object.gc_address !== undefined && object.gc_address !== null) {
      message.gcAddress = object.gc_address;
    }
    if (object.maintenance_address !== undefined && object.maintenance_address !== null) {
      message.maintenanceAddress = object.maintenance_address;
    }
    if (object.bls_key !== undefined && object.bls_key !== null) {
      message.blsKey = object.bls_key;
    }
    return message;
  },
  toAmino(message: EventEditStorageProvider): EventEditStorageProviderAmino {
    const obj: any = {};
    obj.sp_id = message.spId;
    obj.sp_address = message.spAddress;
    obj.endpoint = message.endpoint;
    obj.description = message.description ? Description.toAmino(message.description) : undefined;
    obj.seal_address = message.sealAddress;
    obj.approval_address = message.approvalAddress;
    obj.gc_address = message.gcAddress;
    obj.maintenance_address = message.maintenanceAddress;
    obj.bls_key = message.blsKey;
    return obj;
  },
  fromAminoMsg(object: EventEditStorageProviderAminoMsg): EventEditStorageProvider {
    return EventEditStorageProvider.fromAmino(object.value);
  },
  fromProtoMsg(message: EventEditStorageProviderProtoMsg): EventEditStorageProvider {
    return EventEditStorageProvider.decode(message.value);
  },
  toProto(message: EventEditStorageProvider): Uint8Array {
    return EventEditStorageProvider.encode(message).finish();
  },
  toProtoMsg(message: EventEditStorageProvider): EventEditStorageProviderProtoMsg {
    return {
      typeUrl: "/greenfield.sp.EventEditStorageProvider",
      value: EventEditStorageProvider.encode(message).finish()
    };
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
  typeUrl: "/greenfield.sp.EventDeposit",
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
  },
  fromAmino(object: EventDepositAmino): EventDeposit {
    const message = createBaseEventDeposit();
    if (object.funding_address !== undefined && object.funding_address !== null) {
      message.fundingAddress = object.funding_address;
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = object.deposit;
    }
    if (object.total_deposit !== undefined && object.total_deposit !== null) {
      message.totalDeposit = object.total_deposit;
    }
    return message;
  },
  toAmino(message: EventDeposit): EventDepositAmino {
    const obj: any = {};
    obj.funding_address = message.fundingAddress;
    obj.deposit = message.deposit;
    obj.total_deposit = message.totalDeposit;
    return obj;
  },
  fromAminoMsg(object: EventDepositAminoMsg): EventDeposit {
    return EventDeposit.fromAmino(object.value);
  },
  fromProtoMsg(message: EventDepositProtoMsg): EventDeposit {
    return EventDeposit.decode(message.value);
  },
  toProto(message: EventDeposit): Uint8Array {
    return EventDeposit.encode(message).finish();
  },
  toProtoMsg(message: EventDeposit): EventDepositProtoMsg {
    return {
      typeUrl: "/greenfield.sp.EventDeposit",
      value: EventDeposit.encode(message).finish()
    };
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
  typeUrl: "/greenfield.sp.EventSpStoragePriceUpdate",
  encode(message: EventSpStoragePriceUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spId !== 0) {
      writer.uint32(8).uint32(message.spId);
    }
    if (!message.updateTimeSec.isZero()) {
      writer.uint32(16).int64(message.updateTimeSec);
    }
    if (message.readPrice !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.readPrice, 18).atomics);
    }
    if (!message.freeReadQuota.isZero()) {
      writer.uint32(32).uint64(message.freeReadQuota);
    }
    if (message.storePrice !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.storePrice, 18).atomics);
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
          message.readPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.freeReadQuota = (reader.uint64() as Long);
          break;
        case 5:
          message.storePrice = Decimal.fromAtomics(reader.string(), 18).toString();
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
  },
  fromAmino(object: EventSpStoragePriceUpdateAmino): EventSpStoragePriceUpdate {
    const message = createBaseEventSpStoragePriceUpdate();
    if (object.sp_id !== undefined && object.sp_id !== null) {
      message.spId = object.sp_id;
    }
    if (object.update_time_sec !== undefined && object.update_time_sec !== null) {
      message.updateTimeSec = Long.fromString(object.update_time_sec);
    }
    if (object.read_price !== undefined && object.read_price !== null) {
      message.readPrice = object.read_price;
    }
    if (object.free_read_quota !== undefined && object.free_read_quota !== null) {
      message.freeReadQuota = Long.fromString(object.free_read_quota);
    }
    if (object.store_price !== undefined && object.store_price !== null) {
      message.storePrice = object.store_price;
    }
    return message;
  },
  toAmino(message: EventSpStoragePriceUpdate): EventSpStoragePriceUpdateAmino {
    const obj: any = {};
    obj.sp_id = message.spId;
    obj.update_time_sec = message.updateTimeSec ? message.updateTimeSec.toString() : undefined;
    obj.read_price = message.readPrice;
    obj.free_read_quota = message.freeReadQuota ? message.freeReadQuota.toString() : undefined;
    obj.store_price = message.storePrice;
    return obj;
  },
  fromAminoMsg(object: EventSpStoragePriceUpdateAminoMsg): EventSpStoragePriceUpdate {
    return EventSpStoragePriceUpdate.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSpStoragePriceUpdateProtoMsg): EventSpStoragePriceUpdate {
    return EventSpStoragePriceUpdate.decode(message.value);
  },
  toProto(message: EventSpStoragePriceUpdate): Uint8Array {
    return EventSpStoragePriceUpdate.encode(message).finish();
  },
  toProtoMsg(message: EventSpStoragePriceUpdate): EventSpStoragePriceUpdateProtoMsg {
    return {
      typeUrl: "/greenfield.sp.EventSpStoragePriceUpdate",
      value: EventSpStoragePriceUpdate.encode(message).finish()
    };
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
  typeUrl: "/greenfield.sp.EventGlobalSpStorePriceUpdate",
  encode(message: EventGlobalSpStorePriceUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.updateTimeSec.isZero()) {
      writer.uint32(8).int64(message.updateTimeSec);
    }
    if (message.readPrice !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.readPrice, 18).atomics);
    }
    if (message.primaryStorePrice !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.primaryStorePrice, 18).atomics);
    }
    if (message.secondaryStorePrice !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.secondaryStorePrice, 18).atomics);
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
          message.readPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.primaryStorePrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.secondaryStorePrice = Decimal.fromAtomics(reader.string(), 18).toString();
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
  },
  fromAmino(object: EventGlobalSpStorePriceUpdateAmino): EventGlobalSpStorePriceUpdate {
    const message = createBaseEventGlobalSpStorePriceUpdate();
    if (object.update_time_sec !== undefined && object.update_time_sec !== null) {
      message.updateTimeSec = Long.fromString(object.update_time_sec);
    }
    if (object.read_price !== undefined && object.read_price !== null) {
      message.readPrice = object.read_price;
    }
    if (object.primary_store_price !== undefined && object.primary_store_price !== null) {
      message.primaryStorePrice = object.primary_store_price;
    }
    if (object.secondary_store_price !== undefined && object.secondary_store_price !== null) {
      message.secondaryStorePrice = object.secondary_store_price;
    }
    return message;
  },
  toAmino(message: EventGlobalSpStorePriceUpdate): EventGlobalSpStorePriceUpdateAmino {
    const obj: any = {};
    obj.update_time_sec = message.updateTimeSec ? message.updateTimeSec.toString() : undefined;
    obj.read_price = message.readPrice;
    obj.primary_store_price = message.primaryStorePrice;
    obj.secondary_store_price = message.secondaryStorePrice;
    return obj;
  },
  fromAminoMsg(object: EventGlobalSpStorePriceUpdateAminoMsg): EventGlobalSpStorePriceUpdate {
    return EventGlobalSpStorePriceUpdate.fromAmino(object.value);
  },
  fromProtoMsg(message: EventGlobalSpStorePriceUpdateProtoMsg): EventGlobalSpStorePriceUpdate {
    return EventGlobalSpStorePriceUpdate.decode(message.value);
  },
  toProto(message: EventGlobalSpStorePriceUpdate): Uint8Array {
    return EventGlobalSpStorePriceUpdate.encode(message).finish();
  },
  toProtoMsg(message: EventGlobalSpStorePriceUpdate): EventGlobalSpStorePriceUpdateProtoMsg {
    return {
      typeUrl: "/greenfield.sp.EventGlobalSpStorePriceUpdate",
      value: EventGlobalSpStorePriceUpdate.encode(message).finish()
    };
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
  typeUrl: "/greenfield.sp.EventUpdateStorageProviderStatus",
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
  },
  fromAmino(object: EventUpdateStorageProviderStatusAmino): EventUpdateStorageProviderStatus {
    const message = createBaseEventUpdateStorageProviderStatus();
    if (object.sp_id !== undefined && object.sp_id !== null) {
      message.spId = object.sp_id;
    }
    if (object.sp_address !== undefined && object.sp_address !== null) {
      message.spAddress = object.sp_address;
    }
    if (object.pre_status !== undefined && object.pre_status !== null) {
      message.preStatus = object.pre_status;
    }
    if (object.new_status !== undefined && object.new_status !== null) {
      message.newStatus = object.new_status;
    }
    return message;
  },
  toAmino(message: EventUpdateStorageProviderStatus): EventUpdateStorageProviderStatusAmino {
    const obj: any = {};
    obj.sp_id = message.spId;
    obj.sp_address = message.spAddress;
    obj.pre_status = message.preStatus;
    obj.new_status = message.newStatus;
    return obj;
  },
  fromAminoMsg(object: EventUpdateStorageProviderStatusAminoMsg): EventUpdateStorageProviderStatus {
    return EventUpdateStorageProviderStatus.fromAmino(object.value);
  },
  fromProtoMsg(message: EventUpdateStorageProviderStatusProtoMsg): EventUpdateStorageProviderStatus {
    return EventUpdateStorageProviderStatus.decode(message.value);
  },
  toProto(message: EventUpdateStorageProviderStatus): Uint8Array {
    return EventUpdateStorageProviderStatus.encode(message).finish();
  },
  toProtoMsg(message: EventUpdateStorageProviderStatus): EventUpdateStorageProviderStatusProtoMsg {
    return {
      typeUrl: "/greenfield.sp.EventUpdateStorageProviderStatus",
      value: EventUpdateStorageProviderStatus.encode(message).finish()
    };
  }
};