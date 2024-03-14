//@ts-nocheck
/* eslint-disable */
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Long, isSet, DeepPartial, Exact, bytesFromBase64, base64FromBytes } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { Decimal } from "@cosmjs/math";
export const protobufPackage = "greenfield.sp";
/** Status is the status of a storage provider. */
export enum Status {
  STATUS_IN_SERVICE = 0,
  STATUS_IN_JAILED = 1,
  STATUS_GRACEFUL_EXITING = 2,
  STATUS_IN_MAINTENANCE = 3,
  STATUS_FORCED_EXITING = 4,
  UNRECOGNIZED = -1,
}
export const StatusSDKType = Status;
export const StatusAmino = Status;
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
    case "STATUS_IN_MAINTENANCE":
      return Status.STATUS_IN_MAINTENANCE;
    case 4:
    case "STATUS_FORCED_EXITING":
      return Status.STATUS_FORCED_EXITING;
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
    case Status.STATUS_IN_MAINTENANCE:
      return "STATUS_IN_MAINTENANCE";
    case Status.STATUS_FORCED_EXITING:
      return "STATUS_FORCED_EXITING";
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
export interface DescriptionProtoMsg {
  typeUrl: "/greenfield.sp.Description";
  value: Uint8Array;
}
/** Description defines a storage provider description. */
export interface DescriptionAmino {
  /** moniker defines a human-readable name for the storage provider */
  moniker?: string;
  /** identity defines an optional identity signature (ex. UPort or Keybase). */
  identity?: string;
  /** website defines an optional website link. */
  website?: string;
  /** security_contact defines an optional email for security contact. */
  security_contact?: string;
  /** details define other optional details. */
  details?: string;
}
export interface DescriptionAminoMsg {
  type: "/greenfield.sp.Description";
  value: DescriptionAmino;
}
/** Description defines a storage provider description. */
export interface DescriptionSDKType {
  moniker: string;
  identity: string;
  website: string;
  security_contact: string;
  details: string;
}
/** StorageProvider defines the meta info of storage provider */
export interface StorageProvider {
  /** id is the identifier of the storage provider, used in virtual group */
  id: number;
  /** operator_address defines the account address of the storage provider's operator; It also is the unique index key of sp. */
  operatorAddress: string;
  /** funding_address defines one of the storage provider's accounts which is used to deposit and reward. */
  fundingAddress: string;
  /** seal_address defines one of the storage provider's accounts which is used to SealObject */
  sealAddress: string;
  /** approval_address defines one of the storage provider's accounts which is used to approve use's createBucket/createObject request */
  approvalAddress: string;
  /** gc_address defines one of the storage provider's accounts which is used for gc purpose. */
  gcAddress: string;
  /** maintenance_address defines one of the storage provider's accounts which is used for testing while in maintenance mode */
  maintenanceAddress: string;
  /** total_deposit defines the number of tokens deposited by this storage provider for staking. */
  totalDeposit: string;
  /** status defines the current service status of this storage provider */
  status: Status;
  /** endpoint define the storage provider's network service address */
  endpoint: string;
  /** description defines the description terms for the storage provider. */
  description: Description;
  /** bls_key defines the bls pub key of the Storage provider for sealing object and completing migration */
  blsKey: Uint8Array;
}
export interface StorageProviderProtoMsg {
  typeUrl: "/greenfield.sp.StorageProvider";
  value: Uint8Array;
}
/** StorageProvider defines the meta info of storage provider */
export interface StorageProviderAmino {
  /** id is the identifier of the storage provider, used in virtual group */
  id?: number;
  /** operator_address defines the account address of the storage provider's operator; It also is the unique index key of sp. */
  operator_address?: string;
  /** funding_address defines one of the storage provider's accounts which is used to deposit and reward. */
  funding_address?: string;
  /** seal_address defines one of the storage provider's accounts which is used to SealObject */
  seal_address?: string;
  /** approval_address defines one of the storage provider's accounts which is used to approve use's createBucket/createObject request */
  approval_address?: string;
  /** gc_address defines one of the storage provider's accounts which is used for gc purpose. */
  gc_address?: string;
  /** maintenance_address defines one of the storage provider's accounts which is used for testing while in maintenance mode */
  maintenance_address?: string;
  /** total_deposit defines the number of tokens deposited by this storage provider for staking. */
  total_deposit?: string;
  /** status defines the current service status of this storage provider */
  status?: Status;
  /** endpoint define the storage provider's network service address */
  endpoint?: string;
  /** description defines the description terms for the storage provider. */
  description?: DescriptionAmino;
  /** bls_key defines the bls pub key of the Storage provider for sealing object and completing migration */
  bls_key?: string;
}
export interface StorageProviderAminoMsg {
  type: "/greenfield.sp.StorageProvider";
  value: StorageProviderAmino;
}
/** StorageProvider defines the meta info of storage provider */
export interface StorageProviderSDKType {
  id: number;
  operator_address: string;
  funding_address: string;
  seal_address: string;
  approval_address: string;
  gc_address: string;
  maintenance_address: string;
  total_deposit: string;
  status: Status;
  endpoint: string;
  description: DescriptionSDKType;
  bls_key: Uint8Array;
}
export interface RewardInfo {
  address: string;
  amount: Coin;
}
export interface RewardInfoProtoMsg {
  typeUrl: "/greenfield.sp.RewardInfo";
  value: Uint8Array;
}
export interface RewardInfoAmino {
  address?: string;
  amount?: CoinAmino;
}
export interface RewardInfoAminoMsg {
  type: "/greenfield.sp.RewardInfo";
  value: RewardInfoAmino;
}
export interface RewardInfoSDKType {
  address: string;
  amount: CoinSDKType;
}
/** storage price of a specific sp */
export interface SpStoragePrice {
  /** sp id */
  spId: number;
  /** update time, unix timestamp in seconds */
  updateTimeSec: Long;
  /** read price, in bnb wei per charge byte */
  readPrice: string;
  /** free read quota, in byte */
  freeReadQuota: Long;
  /** store price, in bnb wei per charge byte */
  storePrice: string;
}
export interface SpStoragePriceProtoMsg {
  typeUrl: "/greenfield.sp.SpStoragePrice";
  value: Uint8Array;
}
/** storage price of a specific sp */
export interface SpStoragePriceAmino {
  /** sp id */
  sp_id?: number;
  /** update time, unix timestamp in seconds */
  update_time_sec?: string;
  /** read price, in bnb wei per charge byte */
  read_price?: string;
  /** free read quota, in byte */
  free_read_quota?: string;
  /** store price, in bnb wei per charge byte */
  store_price?: string;
}
export interface SpStoragePriceAminoMsg {
  type: "/greenfield.sp.SpStoragePrice";
  value: SpStoragePriceAmino;
}
/** storage price of a specific sp */
export interface SpStoragePriceSDKType {
  sp_id: number;
  update_time_sec: Long;
  read_price: string;
  free_read_quota: Long;
  store_price: string;
}
/** global sp store price, the price for all sps */
export interface GlobalSpStorePrice {
  /** update time, unix timestamp in seconds */
  updateTimeSec: Long;
  /** read price, in bnb wei per charge byte */
  readPrice: string;
  /** primary store price, in bnb wei per charge byte */
  primaryStorePrice: string;
  /** secondary store price, in bnb wei per charge byte */
  secondaryStorePrice: string;
}
export interface GlobalSpStorePriceProtoMsg {
  typeUrl: "/greenfield.sp.GlobalSpStorePrice";
  value: Uint8Array;
}
/** global sp store price, the price for all sps */
export interface GlobalSpStorePriceAmino {
  /** update time, unix timestamp in seconds */
  update_time_sec?: string;
  /** read price, in bnb wei per charge byte */
  read_price?: string;
  /** primary store price, in bnb wei per charge byte */
  primary_store_price?: string;
  /** secondary store price, in bnb wei per charge byte */
  secondary_store_price?: string;
}
export interface GlobalSpStorePriceAminoMsg {
  type: "/greenfield.sp.GlobalSpStorePrice";
  value: GlobalSpStorePriceAmino;
}
/** global sp store price, the price for all sps */
export interface GlobalSpStorePriceSDKType {
  update_time_sec: Long;
  read_price: string;
  primary_store_price: string;
  secondary_store_price: string;
}
export interface SpMaintenanceStats {
  records: MaintenanceRecord[];
}
export interface SpMaintenanceStatsProtoMsg {
  typeUrl: "/greenfield.sp.SpMaintenanceStats";
  value: Uint8Array;
}
export interface SpMaintenanceStatsAmino {
  records?: MaintenanceRecordAmino[];
}
export interface SpMaintenanceStatsAminoMsg {
  type: "/greenfield.sp.SpMaintenanceStats";
  value: SpMaintenanceStatsAmino;
}
export interface SpMaintenanceStatsSDKType {
  records: MaintenanceRecordSDKType[];
}
/** MaintenanceRecord is to keep track of every time a sp request to be in Maintenance mode */
export interface MaintenanceRecord {
  /** block height that request to be in Maintenance mode */
  height: Long;
  /** request duration */
  requestDuration: Long;
  /** actual duration */
  actualDuration: Long;
  /** request timestamp */
  requestAt: Long;
}
export interface MaintenanceRecordProtoMsg {
  typeUrl: "/greenfield.sp.MaintenanceRecord";
  value: Uint8Array;
}
/** MaintenanceRecord is to keep track of every time a sp request to be in Maintenance mode */
export interface MaintenanceRecordAmino {
  /** block height that request to be in Maintenance mode */
  height?: string;
  /** request duration */
  request_duration?: string;
  /** actual duration */
  actual_duration?: string;
  /** request timestamp */
  request_at?: string;
}
export interface MaintenanceRecordAminoMsg {
  type: "/greenfield.sp.MaintenanceRecord";
  value: MaintenanceRecordAmino;
}
/** MaintenanceRecord is to keep track of every time a sp request to be in Maintenance mode */
export interface MaintenanceRecordSDKType {
  height: Long;
  request_duration: Long;
  actual_duration: Long;
  request_at: Long;
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
  typeUrl: "/greenfield.sp.Description",
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
  },
  fromSDK(object: DescriptionSDKType): Description {
    return {
      moniker: object?.moniker,
      identity: object?.identity,
      website: object?.website,
      securityContact: object?.security_contact,
      details: object?.details
    };
  },
  toSDK(message: Description): DescriptionSDKType {
    const obj: any = {};
    obj.moniker = message.moniker;
    obj.identity = message.identity;
    obj.website = message.website;
    obj.security_contact = message.securityContact;
    obj.details = message.details;
    return obj;
  },
  fromAmino(object: DescriptionAmino): Description {
    const message = createBaseDescription();
    if (object.moniker !== undefined && object.moniker !== null) {
      message.moniker = object.moniker;
    }
    if (object.identity !== undefined && object.identity !== null) {
      message.identity = object.identity;
    }
    if (object.website !== undefined && object.website !== null) {
      message.website = object.website;
    }
    if (object.security_contact !== undefined && object.security_contact !== null) {
      message.securityContact = object.security_contact;
    }
    if (object.details !== undefined && object.details !== null) {
      message.details = object.details;
    }
    return message;
  },
  toAmino(message: Description): DescriptionAmino {
    const obj: any = {};
    obj.moniker = message.moniker;
    obj.identity = message.identity;
    obj.website = message.website;
    obj.security_contact = message.securityContact;
    obj.details = message.details;
    return obj;
  },
  fromAminoMsg(object: DescriptionAminoMsg): Description {
    return Description.fromAmino(object.value);
  },
  fromProtoMsg(message: DescriptionProtoMsg): Description {
    return Description.decode(message.value);
  },
  toProto(message: Description): Uint8Array {
    return Description.encode(message).finish();
  },
  toProtoMsg(message: Description): DescriptionProtoMsg {
    return {
      typeUrl: "/greenfield.sp.Description",
      value: Description.encode(message).finish()
    };
  }
};
function createBaseStorageProvider(): StorageProvider {
  return {
    id: 0,
    operatorAddress: "",
    fundingAddress: "",
    sealAddress: "",
    approvalAddress: "",
    gcAddress: "",
    maintenanceAddress: "",
    totalDeposit: "",
    status: 0,
    endpoint: "",
    description: Description.fromPartial({}),
    blsKey: new Uint8Array()
  };
}
export const StorageProvider = {
  typeUrl: "/greenfield.sp.StorageProvider",
  encode(message: StorageProvider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.operatorAddress !== "") {
      writer.uint32(18).string(message.operatorAddress);
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
    if (message.totalDeposit !== "") {
      writer.uint32(66).string(message.totalDeposit);
    }
    if (message.status !== 0) {
      writer.uint32(72).int32(message.status);
    }
    if (message.endpoint !== "") {
      writer.uint32(82).string(message.endpoint);
    }
    if (message.description !== undefined) {
      Description.encode(message.description, writer.uint32(90).fork()).ldelim();
    }
    if (message.blsKey.length !== 0) {
      writer.uint32(98).bytes(message.blsKey);
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
          message.id = reader.uint32();
          break;
        case 2:
          message.operatorAddress = reader.string();
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
          message.totalDeposit = reader.string();
          break;
        case 9:
          message.status = (reader.int32() as any);
          break;
        case 10:
          message.endpoint = reader.string();
          break;
        case 11:
          message.description = Description.decode(reader, reader.uint32());
          break;
        case 12:
          message.blsKey = reader.bytes();
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
      id: isSet(object.id) ? Number(object.id) : 0,
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : "",
      fundingAddress: isSet(object.fundingAddress) ? String(object.fundingAddress) : "",
      sealAddress: isSet(object.sealAddress) ? String(object.sealAddress) : "",
      approvalAddress: isSet(object.approvalAddress) ? String(object.approvalAddress) : "",
      gcAddress: isSet(object.gcAddress) ? String(object.gcAddress) : "",
      maintenanceAddress: isSet(object.maintenanceAddress) ? String(object.maintenanceAddress) : "",
      totalDeposit: isSet(object.totalDeposit) ? String(object.totalDeposit) : "",
      status: isSet(object.status) ? statusFromJSON(object.status) : -1,
      endpoint: isSet(object.endpoint) ? String(object.endpoint) : "",
      description: isSet(object.description) ? Description.fromJSON(object.description) : undefined,
      blsKey: isSet(object.blsKey) ? bytesFromBase64(object.blsKey) : new Uint8Array()
    };
  },
  toJSON(message: StorageProvider): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
    message.fundingAddress !== undefined && (obj.fundingAddress = message.fundingAddress);
    message.sealAddress !== undefined && (obj.sealAddress = message.sealAddress);
    message.approvalAddress !== undefined && (obj.approvalAddress = message.approvalAddress);
    message.gcAddress !== undefined && (obj.gcAddress = message.gcAddress);
    message.maintenanceAddress !== undefined && (obj.maintenanceAddress = message.maintenanceAddress);
    message.totalDeposit !== undefined && (obj.totalDeposit = message.totalDeposit);
    message.status !== undefined && (obj.status = statusToJSON(message.status));
    message.endpoint !== undefined && (obj.endpoint = message.endpoint);
    message.description !== undefined && (obj.description = message.description ? Description.toJSON(message.description) : undefined);
    message.blsKey !== undefined && (obj.blsKey = base64FromBytes(message.blsKey !== undefined ? message.blsKey : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<StorageProvider>, I>>(object: I): StorageProvider {
    const message = createBaseStorageProvider();
    message.id = object.id ?? 0;
    message.operatorAddress = object.operatorAddress ?? "";
    message.fundingAddress = object.fundingAddress ?? "";
    message.sealAddress = object.sealAddress ?? "";
    message.approvalAddress = object.approvalAddress ?? "";
    message.gcAddress = object.gcAddress ?? "";
    message.maintenanceAddress = object.maintenanceAddress ?? "";
    message.totalDeposit = object.totalDeposit ?? "";
    message.status = object.status ?? 0;
    message.endpoint = object.endpoint ?? "";
    message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
    message.blsKey = object.blsKey ?? new Uint8Array();
    return message;
  },
  fromSDK(object: StorageProviderSDKType): StorageProvider {
    return {
      id: object?.id,
      operatorAddress: object?.operator_address,
      fundingAddress: object?.funding_address,
      sealAddress: object?.seal_address,
      approvalAddress: object?.approval_address,
      gcAddress: object?.gc_address,
      maintenanceAddress: object?.maintenance_address,
      totalDeposit: object?.total_deposit,
      status: isSet(object.status) ? statusFromJSON(object.status) : -1,
      endpoint: object?.endpoint,
      description: object.description ? Description.fromSDK(object.description) : undefined,
      blsKey: object?.bls_key
    };
  },
  toSDK(message: StorageProvider): StorageProviderSDKType {
    const obj: any = {};
    obj.id = message.id;
    obj.operator_address = message.operatorAddress;
    obj.funding_address = message.fundingAddress;
    obj.seal_address = message.sealAddress;
    obj.approval_address = message.approvalAddress;
    obj.gc_address = message.gcAddress;
    obj.maintenance_address = message.maintenanceAddress;
    obj.total_deposit = message.totalDeposit;
    message.status !== undefined && (obj.status = statusToJSON(message.status));
    obj.endpoint = message.endpoint;
    message.description !== undefined && (obj.description = message.description ? Description.toSDK(message.description) : undefined);
    obj.bls_key = message.blsKey;
    return obj;
  },
  fromAmino(object: StorageProviderAmino): StorageProvider {
    const message = createBaseStorageProvider();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.operator_address !== undefined && object.operator_address !== null) {
      message.operatorAddress = object.operator_address;
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
    if (object.total_deposit !== undefined && object.total_deposit !== null) {
      message.totalDeposit = object.total_deposit;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = statusFromJSON(object.status);
    }
    if (object.endpoint !== undefined && object.endpoint !== null) {
      message.endpoint = object.endpoint;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = Description.fromAmino(object.description);
    }
    if (object.bls_key !== undefined && object.bls_key !== null) {
      message.blsKey = bytesFromBase64(object.bls_key);
    }
    return message;
  },
  toAmino(message: StorageProvider): StorageProviderAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.operator_address = message.operatorAddress;
    obj.funding_address = message.fundingAddress;
    obj.seal_address = message.sealAddress;
    obj.approval_address = message.approvalAddress;
    obj.gc_address = message.gcAddress;
    obj.maintenance_address = message.maintenanceAddress;
    obj.total_deposit = message.totalDeposit;
    obj.status = statusToJSON(message.status);
    obj.endpoint = message.endpoint;
    obj.description = message.description ? Description.toAmino(message.description) : undefined;
    obj.bls_key = message.blsKey ? base64FromBytes(message.blsKey) : undefined;
    return obj;
  },
  fromAminoMsg(object: StorageProviderAminoMsg): StorageProvider {
    return StorageProvider.fromAmino(object.value);
  },
  fromProtoMsg(message: StorageProviderProtoMsg): StorageProvider {
    return StorageProvider.decode(message.value);
  },
  toProto(message: StorageProvider): Uint8Array {
    return StorageProvider.encode(message).finish();
  },
  toProtoMsg(message: StorageProvider): StorageProviderProtoMsg {
    return {
      typeUrl: "/greenfield.sp.StorageProvider",
      value: StorageProvider.encode(message).finish()
    };
  }
};
function createBaseRewardInfo(): RewardInfo {
  return {
    address: "",
    amount: Coin.fromPartial({})
  };
}
export const RewardInfo = {
  typeUrl: "/greenfield.sp.RewardInfo",
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
  },
  fromSDK(object: RewardInfoSDKType): RewardInfo {
    return {
      address: object?.address,
      amount: object.amount ? Coin.fromSDK(object.amount) : undefined
    };
  },
  toSDK(message: RewardInfo): RewardInfoSDKType {
    const obj: any = {};
    obj.address = message.address;
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toSDK(message.amount) : undefined);
    return obj;
  },
  fromAmino(object: RewardInfoAmino): RewardInfo {
    const message = createBaseRewardInfo();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: RewardInfo): RewardInfoAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: RewardInfoAminoMsg): RewardInfo {
    return RewardInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: RewardInfoProtoMsg): RewardInfo {
    return RewardInfo.decode(message.value);
  },
  toProto(message: RewardInfo): Uint8Array {
    return RewardInfo.encode(message).finish();
  },
  toProtoMsg(message: RewardInfo): RewardInfoProtoMsg {
    return {
      typeUrl: "/greenfield.sp.RewardInfo",
      value: RewardInfo.encode(message).finish()
    };
  }
};
function createBaseSpStoragePrice(): SpStoragePrice {
  return {
    spId: 0,
    updateTimeSec: Long.ZERO,
    readPrice: "",
    freeReadQuota: Long.UZERO,
    storePrice: ""
  };
}
export const SpStoragePrice = {
  typeUrl: "/greenfield.sp.SpStoragePrice",
  encode(message: SpStoragePrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): SpStoragePrice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpStoragePrice();
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
  fromJSON(object: any): SpStoragePrice {
    return {
      spId: isSet(object.spId) ? Number(object.spId) : 0,
      updateTimeSec: isSet(object.updateTimeSec) ? Long.fromValue(object.updateTimeSec) : Long.ZERO,
      readPrice: isSet(object.readPrice) ? String(object.readPrice) : "",
      freeReadQuota: isSet(object.freeReadQuota) ? Long.fromValue(object.freeReadQuota) : Long.UZERO,
      storePrice: isSet(object.storePrice) ? String(object.storePrice) : ""
    };
  },
  toJSON(message: SpStoragePrice): unknown {
    const obj: any = {};
    message.spId !== undefined && (obj.spId = Math.round(message.spId));
    message.updateTimeSec !== undefined && (obj.updateTimeSec = (message.updateTimeSec || Long.ZERO).toString());
    message.readPrice !== undefined && (obj.readPrice = message.readPrice);
    message.freeReadQuota !== undefined && (obj.freeReadQuota = (message.freeReadQuota || Long.UZERO).toString());
    message.storePrice !== undefined && (obj.storePrice = message.storePrice);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SpStoragePrice>, I>>(object: I): SpStoragePrice {
    const message = createBaseSpStoragePrice();
    message.spId = object.spId ?? 0;
    message.updateTimeSec = object.updateTimeSec !== undefined && object.updateTimeSec !== null ? Long.fromValue(object.updateTimeSec) : Long.ZERO;
    message.readPrice = object.readPrice ?? "";
    message.freeReadQuota = object.freeReadQuota !== undefined && object.freeReadQuota !== null ? Long.fromValue(object.freeReadQuota) : Long.UZERO;
    message.storePrice = object.storePrice ?? "";
    return message;
  },
  fromSDK(object: SpStoragePriceSDKType): SpStoragePrice {
    return {
      spId: object?.sp_id,
      updateTimeSec: object?.update_time_sec,
      readPrice: object?.read_price,
      freeReadQuota: object?.free_read_quota,
      storePrice: object?.store_price
    };
  },
  toSDK(message: SpStoragePrice): SpStoragePriceSDKType {
    const obj: any = {};
    obj.sp_id = message.spId;
    obj.update_time_sec = message.updateTimeSec;
    obj.read_price = message.readPrice;
    obj.free_read_quota = message.freeReadQuota;
    obj.store_price = message.storePrice;
    return obj;
  },
  fromAmino(object: SpStoragePriceAmino): SpStoragePrice {
    const message = createBaseSpStoragePrice();
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
  toAmino(message: SpStoragePrice): SpStoragePriceAmino {
    const obj: any = {};
    obj.sp_id = message.spId;
    obj.update_time_sec = message.updateTimeSec ? message.updateTimeSec.toString() : undefined;
    obj.read_price = message.readPrice;
    obj.free_read_quota = message.freeReadQuota ? message.freeReadQuota.toString() : undefined;
    obj.store_price = message.storePrice;
    return obj;
  },
  fromAminoMsg(object: SpStoragePriceAminoMsg): SpStoragePrice {
    return SpStoragePrice.fromAmino(object.value);
  },
  fromProtoMsg(message: SpStoragePriceProtoMsg): SpStoragePrice {
    return SpStoragePrice.decode(message.value);
  },
  toProto(message: SpStoragePrice): Uint8Array {
    return SpStoragePrice.encode(message).finish();
  },
  toProtoMsg(message: SpStoragePrice): SpStoragePriceProtoMsg {
    return {
      typeUrl: "/greenfield.sp.SpStoragePrice",
      value: SpStoragePrice.encode(message).finish()
    };
  }
};
function createBaseGlobalSpStorePrice(): GlobalSpStorePrice {
  return {
    updateTimeSec: Long.ZERO,
    readPrice: "",
    primaryStorePrice: "",
    secondaryStorePrice: ""
  };
}
export const GlobalSpStorePrice = {
  typeUrl: "/greenfield.sp.GlobalSpStorePrice",
  encode(message: GlobalSpStorePrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): GlobalSpStorePrice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGlobalSpStorePrice();
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
  fromJSON(object: any): GlobalSpStorePrice {
    return {
      updateTimeSec: isSet(object.updateTimeSec) ? Long.fromValue(object.updateTimeSec) : Long.ZERO,
      readPrice: isSet(object.readPrice) ? String(object.readPrice) : "",
      primaryStorePrice: isSet(object.primaryStorePrice) ? String(object.primaryStorePrice) : "",
      secondaryStorePrice: isSet(object.secondaryStorePrice) ? String(object.secondaryStorePrice) : ""
    };
  },
  toJSON(message: GlobalSpStorePrice): unknown {
    const obj: any = {};
    message.updateTimeSec !== undefined && (obj.updateTimeSec = (message.updateTimeSec || Long.ZERO).toString());
    message.readPrice !== undefined && (obj.readPrice = message.readPrice);
    message.primaryStorePrice !== undefined && (obj.primaryStorePrice = message.primaryStorePrice);
    message.secondaryStorePrice !== undefined && (obj.secondaryStorePrice = message.secondaryStorePrice);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GlobalSpStorePrice>, I>>(object: I): GlobalSpStorePrice {
    const message = createBaseGlobalSpStorePrice();
    message.updateTimeSec = object.updateTimeSec !== undefined && object.updateTimeSec !== null ? Long.fromValue(object.updateTimeSec) : Long.ZERO;
    message.readPrice = object.readPrice ?? "";
    message.primaryStorePrice = object.primaryStorePrice ?? "";
    message.secondaryStorePrice = object.secondaryStorePrice ?? "";
    return message;
  },
  fromSDK(object: GlobalSpStorePriceSDKType): GlobalSpStorePrice {
    return {
      updateTimeSec: object?.update_time_sec,
      readPrice: object?.read_price,
      primaryStorePrice: object?.primary_store_price,
      secondaryStorePrice: object?.secondary_store_price
    };
  },
  toSDK(message: GlobalSpStorePrice): GlobalSpStorePriceSDKType {
    const obj: any = {};
    obj.update_time_sec = message.updateTimeSec;
    obj.read_price = message.readPrice;
    obj.primary_store_price = message.primaryStorePrice;
    obj.secondary_store_price = message.secondaryStorePrice;
    return obj;
  },
  fromAmino(object: GlobalSpStorePriceAmino): GlobalSpStorePrice {
    const message = createBaseGlobalSpStorePrice();
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
  toAmino(message: GlobalSpStorePrice): GlobalSpStorePriceAmino {
    const obj: any = {};
    obj.update_time_sec = message.updateTimeSec ? message.updateTimeSec.toString() : undefined;
    obj.read_price = message.readPrice;
    obj.primary_store_price = message.primaryStorePrice;
    obj.secondary_store_price = message.secondaryStorePrice;
    return obj;
  },
  fromAminoMsg(object: GlobalSpStorePriceAminoMsg): GlobalSpStorePrice {
    return GlobalSpStorePrice.fromAmino(object.value);
  },
  fromProtoMsg(message: GlobalSpStorePriceProtoMsg): GlobalSpStorePrice {
    return GlobalSpStorePrice.decode(message.value);
  },
  toProto(message: GlobalSpStorePrice): Uint8Array {
    return GlobalSpStorePrice.encode(message).finish();
  },
  toProtoMsg(message: GlobalSpStorePrice): GlobalSpStorePriceProtoMsg {
    return {
      typeUrl: "/greenfield.sp.GlobalSpStorePrice",
      value: GlobalSpStorePrice.encode(message).finish()
    };
  }
};
function createBaseSpMaintenanceStats(): SpMaintenanceStats {
  return {
    records: []
  };
}
export const SpMaintenanceStats = {
  typeUrl: "/greenfield.sp.SpMaintenanceStats",
  encode(message: SpMaintenanceStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.records) {
      MaintenanceRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SpMaintenanceStats {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpMaintenanceStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.records.push(MaintenanceRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SpMaintenanceStats {
    return {
      records: Array.isArray(object?.records) ? object.records.map((e: any) => MaintenanceRecord.fromJSON(e)) : []
    };
  },
  toJSON(message: SpMaintenanceStats): unknown {
    const obj: any = {};
    if (message.records) {
      obj.records = message.records.map(e => e ? MaintenanceRecord.toJSON(e) : undefined);
    } else {
      obj.records = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SpMaintenanceStats>, I>>(object: I): SpMaintenanceStats {
    const message = createBaseSpMaintenanceStats();
    message.records = object.records?.map(e => MaintenanceRecord.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: SpMaintenanceStatsSDKType): SpMaintenanceStats {
    return {
      records: Array.isArray(object?.records) ? object.records.map((e: any) => MaintenanceRecord.fromSDK(e)) : []
    };
  },
  toSDK(message: SpMaintenanceStats): SpMaintenanceStatsSDKType {
    const obj: any = {};
    if (message.records) {
      obj.records = message.records.map(e => e ? MaintenanceRecord.toSDK(e) : undefined);
    } else {
      obj.records = [];
    }
    return obj;
  },
  fromAmino(object: SpMaintenanceStatsAmino): SpMaintenanceStats {
    const message = createBaseSpMaintenanceStats();
    message.records = object.records?.map(e => MaintenanceRecord.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: SpMaintenanceStats): SpMaintenanceStatsAmino {
    const obj: any = {};
    if (message.records) {
      obj.records = message.records.map(e => e ? MaintenanceRecord.toAmino(e) : undefined);
    } else {
      obj.records = [];
    }
    return obj;
  },
  fromAminoMsg(object: SpMaintenanceStatsAminoMsg): SpMaintenanceStats {
    return SpMaintenanceStats.fromAmino(object.value);
  },
  fromProtoMsg(message: SpMaintenanceStatsProtoMsg): SpMaintenanceStats {
    return SpMaintenanceStats.decode(message.value);
  },
  toProto(message: SpMaintenanceStats): Uint8Array {
    return SpMaintenanceStats.encode(message).finish();
  },
  toProtoMsg(message: SpMaintenanceStats): SpMaintenanceStatsProtoMsg {
    return {
      typeUrl: "/greenfield.sp.SpMaintenanceStats",
      value: SpMaintenanceStats.encode(message).finish()
    };
  }
};
function createBaseMaintenanceRecord(): MaintenanceRecord {
  return {
    height: Long.ZERO,
    requestDuration: Long.ZERO,
    actualDuration: Long.ZERO,
    requestAt: Long.ZERO
  };
}
export const MaintenanceRecord = {
  typeUrl: "/greenfield.sp.MaintenanceRecord",
  encode(message: MaintenanceRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (!message.requestDuration.isZero()) {
      writer.uint32(16).int64(message.requestDuration);
    }
    if (!message.actualDuration.isZero()) {
      writer.uint32(24).int64(message.actualDuration);
    }
    if (!message.requestAt.isZero()) {
      writer.uint32(32).int64(message.requestAt);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MaintenanceRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMaintenanceRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = (reader.int64() as Long);
          break;
        case 2:
          message.requestDuration = (reader.int64() as Long);
          break;
        case 3:
          message.actualDuration = (reader.int64() as Long);
          break;
        case 4:
          message.requestAt = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MaintenanceRecord {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      requestDuration: isSet(object.requestDuration) ? Long.fromValue(object.requestDuration) : Long.ZERO,
      actualDuration: isSet(object.actualDuration) ? Long.fromValue(object.actualDuration) : Long.ZERO,
      requestAt: isSet(object.requestAt) ? Long.fromValue(object.requestAt) : Long.ZERO
    };
  },
  toJSON(message: MaintenanceRecord): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.requestDuration !== undefined && (obj.requestDuration = (message.requestDuration || Long.ZERO).toString());
    message.actualDuration !== undefined && (obj.actualDuration = (message.actualDuration || Long.ZERO).toString());
    message.requestAt !== undefined && (obj.requestAt = (message.requestAt || Long.ZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MaintenanceRecord>, I>>(object: I): MaintenanceRecord {
    const message = createBaseMaintenanceRecord();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.requestDuration = object.requestDuration !== undefined && object.requestDuration !== null ? Long.fromValue(object.requestDuration) : Long.ZERO;
    message.actualDuration = object.actualDuration !== undefined && object.actualDuration !== null ? Long.fromValue(object.actualDuration) : Long.ZERO;
    message.requestAt = object.requestAt !== undefined && object.requestAt !== null ? Long.fromValue(object.requestAt) : Long.ZERO;
    return message;
  },
  fromSDK(object: MaintenanceRecordSDKType): MaintenanceRecord {
    return {
      height: object?.height,
      requestDuration: object?.request_duration,
      actualDuration: object?.actual_duration,
      requestAt: object?.request_at
    };
  },
  toSDK(message: MaintenanceRecord): MaintenanceRecordSDKType {
    const obj: any = {};
    obj.height = message.height;
    obj.request_duration = message.requestDuration;
    obj.actual_duration = message.actualDuration;
    obj.request_at = message.requestAt;
    return obj;
  },
  fromAmino(object: MaintenanceRecordAmino): MaintenanceRecord {
    const message = createBaseMaintenanceRecord();
    if (object.height !== undefined && object.height !== null) {
      message.height = Long.fromString(object.height);
    }
    if (object.request_duration !== undefined && object.request_duration !== null) {
      message.requestDuration = Long.fromString(object.request_duration);
    }
    if (object.actual_duration !== undefined && object.actual_duration !== null) {
      message.actualDuration = Long.fromString(object.actual_duration);
    }
    if (object.request_at !== undefined && object.request_at !== null) {
      message.requestAt = Long.fromString(object.request_at);
    }
    return message;
  },
  toAmino(message: MaintenanceRecord): MaintenanceRecordAmino {
    const obj: any = {};
    obj.height = message.height ? message.height.toString() : undefined;
    obj.request_duration = message.requestDuration ? message.requestDuration.toString() : undefined;
    obj.actual_duration = message.actualDuration ? message.actualDuration.toString() : undefined;
    obj.request_at = message.requestAt ? message.requestAt.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MaintenanceRecordAminoMsg): MaintenanceRecord {
    return MaintenanceRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: MaintenanceRecordProtoMsg): MaintenanceRecord {
    return MaintenanceRecord.decode(message.value);
  },
  toProto(message: MaintenanceRecord): Uint8Array {
    return MaintenanceRecord.encode(message).finish();
  },
  toProtoMsg(message: MaintenanceRecord): MaintenanceRecordProtoMsg {
    return {
      typeUrl: "/greenfield.sp.MaintenanceRecord",
      value: MaintenanceRecord.encode(message).finish()
    };
  }
};