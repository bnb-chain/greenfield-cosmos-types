//@ts-nocheck
/* eslint-disable */
import { Description, DescriptionSDKType, Status, statusFromJSON, statusToJSON } from "./types";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./params";
import { Long, isSet, DeepPartial, Exact, Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { Decimal } from "@cosmjs/math";
export const protobufPackage = "greenfield.sp";
/** MsgCreateStorageProvider defines message for creating a new storage provider. */
export interface MsgCreateStorageProvider {
  /** creator is the msg signer */
  creator: string;
  /** description defines the description terms for the storage provider. */
  description: Description;
  /** sp_address defines the address of the sp's operator; It also is the unqiue index key of sp. */
  spAddress: string;
  /** fund_address is the account address of the storage provider for deposit, remuneration. */
  fundingAddress: string;
  /** seal_address is the account address of the storage provider for sealObject */
  sealAddress: string;
  /** approval_address is the account address of the storage provider for ack CreateBucket/Object. */
  approvalAddress: string;
  /** gc_address defines one of the storage provider's accounts which is used for gc purpose. */
  gcAddress: string;
  /** maintenance_address defines one of the storage provider's accounts which is used for testing while in maintenance mode */
  maintenanceAddress: string;
  /** endpoint is the service address of the storage provider */
  endpoint: string;
  /** deposit define the deposit token */
  deposit: Coin;
  /** read price, in bnb wei per charge byte */
  readPrice: string;
  /** free read quota, in byte */
  freeReadQuota: Long;
  /** store price, in bnb wei per charge byte */
  storePrice: string;
  /** bls_key defines the bls pub key of the Storage provider for sealing object */
  blsKey: string;
  blsProof: string;
}
export interface MsgCreateStorageProviderProtoMsg {
  typeUrl: "/greenfield.sp.MsgCreateStorageProvider";
  value: Uint8Array;
}
/** MsgCreateStorageProvider defines message for creating a new storage provider. */
export interface MsgCreateStorageProviderSDKType {
  creator: string;
  description: DescriptionSDKType;
  sp_address: string;
  funding_address: string;
  seal_address: string;
  approval_address: string;
  gc_address: string;
  maintenance_address: string;
  endpoint: string;
  deposit: CoinSDKType;
  read_price: string;
  free_read_quota: Long;
  store_price: string;
  bls_key: string;
  bls_proof: string;
}
/** MsgCreateStorageProviderResponse defines the Msg/CreateStorageProvider response type. */
export interface MsgCreateStorageProviderResponse {}
export interface MsgCreateStorageProviderResponseProtoMsg {
  typeUrl: "/greenfield.sp.MsgCreateStorageProviderResponse";
  value: Uint8Array;
}
/** MsgCreateStorageProviderResponse defines the Msg/CreateStorageProvider response type. */
export interface MsgCreateStorageProviderResponseSDKType {}
/** MsgDeposit defines a SDK message for deposit token for sp. */
export interface MsgDeposit {
  /** creator is the msg signer, it should be sp's fund address */
  creator: string;
  /** sp_address is the operator address of sp */
  spAddress: string;
  /** deposit is a mount of token which used to deposit for SP */
  deposit: Coin;
}
export interface MsgDepositProtoMsg {
  typeUrl: "/greenfield.sp.MsgDeposit";
  value: Uint8Array;
}
/** MsgDeposit defines a SDK message for deposit token for sp. */
export interface MsgDepositSDKType {
  creator: string;
  sp_address: string;
  deposit: CoinSDKType;
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponse {}
export interface MsgDepositResponseProtoMsg {
  typeUrl: "/greenfield.sp.MsgDepositResponse";
  value: Uint8Array;
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponseSDKType {}
/**
 * MsgEditStorageProvider defines a SDK message for editing an existing sp.
 * TODO: use sp id to edit the storage provider.
 */
export interface MsgEditStorageProvider {
  spAddress: string;
  endpoint: string;
  description?: Description;
  /** seal_address is the account address of the storage provider for sealObject */
  sealAddress: string;
  /** approval_address is the account address of the storage provider for ack CreateBucket/Object */
  approvalAddress: string;
  /** gc_address defines one of the storage provider's accounts which is used for gc purpose */
  gcAddress: string;
  /** maintenance_address defines one of the storage provider's accounts which is used for testing while in maintenance mode */
  maintenanceAddress: string;
  /** bls_key defines the bls pub key of the Storage provider for sealing object */
  blsKey: string;
  blsProof: string;
}
export interface MsgEditStorageProviderProtoMsg {
  typeUrl: "/greenfield.sp.MsgEditStorageProvider";
  value: Uint8Array;
}
/**
 * MsgEditStorageProvider defines a SDK message for editing an existing sp.
 * TODO: use sp id to edit the storage provider.
 */
export interface MsgEditStorageProviderSDKType {
  sp_address: string;
  endpoint: string;
  description?: DescriptionSDKType;
  seal_address: string;
  approval_address: string;
  gc_address: string;
  maintenance_address: string;
  bls_key: string;
  bls_proof: string;
}
/** MsgEditStorageProviderResponse defines the Msg/EditStorageProvider response type. */
export interface MsgEditStorageProviderResponse {}
export interface MsgEditStorageProviderResponseProtoMsg {
  typeUrl: "/greenfield.sp.MsgEditStorageProviderResponse";
  value: Uint8Array;
}
/** MsgEditStorageProviderResponse defines the Msg/EditStorageProvider response type. */
export interface MsgEditStorageProviderResponseSDKType {}
export interface MsgUpdateSpStoragePrice {
  /** sp address */
  spAddress: string;
  /** read price, in bnb wei per charge byte */
  readPrice: string;
  /** free read quota, in byte */
  freeReadQuota: Long;
  /** store price, in bnb wei per charge byte */
  storePrice: string;
}
export interface MsgUpdateSpStoragePriceProtoMsg {
  typeUrl: "/greenfield.sp.MsgUpdateSpStoragePrice";
  value: Uint8Array;
}
export interface MsgUpdateSpStoragePriceSDKType {
  sp_address: string;
  read_price: string;
  free_read_quota: Long;
  store_price: string;
}
export interface MsgUpdateSpStoragePriceResponse {}
export interface MsgUpdateSpStoragePriceResponseProtoMsg {
  typeUrl: "/greenfield.sp.MsgUpdateSpStoragePriceResponse";
  value: Uint8Array;
}
export interface MsgUpdateSpStoragePriceResponseSDKType {}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /**
   * params defines the x/sp parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/greenfield.sp.MsgUpdateParams";
  value: Uint8Array;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/greenfield.sp.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseSDKType {}
/** MsgUpdateStorageProviderStatus is used to update the status of a SP by itself */
export interface MsgUpdateStorageProviderStatus {
  /** sp_address defines the operator address */
  spAddress: string;
  /** status defines the desired status be update to. */
  status: Status;
  /** duration defines the time requested in desired status */
  duration: Long;
}
export interface MsgUpdateStorageProviderStatusProtoMsg {
  typeUrl: "/greenfield.sp.MsgUpdateStorageProviderStatus";
  value: Uint8Array;
}
/** MsgUpdateStorageProviderStatus is used to update the status of a SP by itself */
export interface MsgUpdateStorageProviderStatusSDKType {
  sp_address: string;
  status: Status;
  duration: Long;
}
/** MsgUpdateStorageProviderStatusResponse defines the MsgUpdateStorageProviderStatus response type. */
export interface MsgUpdateStorageProviderStatusResponse {}
export interface MsgUpdateStorageProviderStatusResponseProtoMsg {
  typeUrl: "/greenfield.sp.MsgUpdateStorageProviderStatusResponse";
  value: Uint8Array;
}
/** MsgUpdateStorageProviderStatusResponse defines the MsgUpdateStorageProviderStatus response type. */
export interface MsgUpdateStorageProviderStatusResponseSDKType {}
function createBaseMsgCreateStorageProvider(): MsgCreateStorageProvider {
  return {
    creator: "",
    description: Description.fromPartial({}),
    spAddress: "",
    fundingAddress: "",
    sealAddress: "",
    approvalAddress: "",
    gcAddress: "",
    maintenanceAddress: "",
    endpoint: "",
    deposit: Coin.fromPartial({}),
    readPrice: "",
    freeReadQuota: Long.UZERO,
    storePrice: "",
    blsKey: "",
    blsProof: ""
  };
}
export const MsgCreateStorageProvider = {
  typeUrl: "/greenfield.sp.MsgCreateStorageProvider",
  encode(message: MsgCreateStorageProvider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.description !== undefined) {
      Description.encode(message.description, writer.uint32(18).fork()).ldelim();
    }
    if (message.spAddress !== "") {
      writer.uint32(26).string(message.spAddress);
    }
    if (message.fundingAddress !== "") {
      writer.uint32(34).string(message.fundingAddress);
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
    if (message.endpoint !== "") {
      writer.uint32(74).string(message.endpoint);
    }
    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(82).fork()).ldelim();
    }
    if (message.readPrice !== "") {
      writer.uint32(90).string(Decimal.fromUserInput(message.readPrice, 18).atomics);
    }
    if (!message.freeReadQuota.isZero()) {
      writer.uint32(96).uint64(message.freeReadQuota);
    }
    if (message.storePrice !== "") {
      writer.uint32(106).string(Decimal.fromUserInput(message.storePrice, 18).atomics);
    }
    if (message.blsKey !== "") {
      writer.uint32(114).string(message.blsKey);
    }
    if (message.blsProof !== "") {
      writer.uint32(122).string(message.blsProof);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateStorageProvider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateStorageProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.description = Description.decode(reader, reader.uint32());
          break;
        case 3:
          message.spAddress = reader.string();
          break;
        case 4:
          message.fundingAddress = reader.string();
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
          message.endpoint = reader.string();
          break;
        case 10:
          message.deposit = Coin.decode(reader, reader.uint32());
          break;
        case 11:
          message.readPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 12:
          message.freeReadQuota = (reader.uint64() as Long);
          break;
        case 13:
          message.storePrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 14:
          message.blsKey = reader.string();
          break;
        case 15:
          message.blsProof = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateStorageProvider {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      description: isSet(object.description) ? Description.fromJSON(object.description) : undefined,
      spAddress: isSet(object.spAddress) ? String(object.spAddress) : "",
      fundingAddress: isSet(object.fundingAddress) ? String(object.fundingAddress) : "",
      sealAddress: isSet(object.sealAddress) ? String(object.sealAddress) : "",
      approvalAddress: isSet(object.approvalAddress) ? String(object.approvalAddress) : "",
      gcAddress: isSet(object.gcAddress) ? String(object.gcAddress) : "",
      maintenanceAddress: isSet(object.maintenanceAddress) ? String(object.maintenanceAddress) : "",
      endpoint: isSet(object.endpoint) ? String(object.endpoint) : "",
      deposit: isSet(object.deposit) ? Coin.fromJSON(object.deposit) : undefined,
      readPrice: isSet(object.readPrice) ? String(object.readPrice) : "",
      freeReadQuota: isSet(object.freeReadQuota) ? Long.fromValue(object.freeReadQuota) : Long.UZERO,
      storePrice: isSet(object.storePrice) ? String(object.storePrice) : "",
      blsKey: isSet(object.blsKey) ? String(object.blsKey) : "",
      blsProof: isSet(object.blsProof) ? String(object.blsProof) : ""
    };
  },
  toJSON(message: MsgCreateStorageProvider): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.description !== undefined && (obj.description = message.description ? Description.toJSON(message.description) : undefined);
    message.spAddress !== undefined && (obj.spAddress = message.spAddress);
    message.fundingAddress !== undefined && (obj.fundingAddress = message.fundingAddress);
    message.sealAddress !== undefined && (obj.sealAddress = message.sealAddress);
    message.approvalAddress !== undefined && (obj.approvalAddress = message.approvalAddress);
    message.gcAddress !== undefined && (obj.gcAddress = message.gcAddress);
    message.maintenanceAddress !== undefined && (obj.maintenanceAddress = message.maintenanceAddress);
    message.endpoint !== undefined && (obj.endpoint = message.endpoint);
    message.deposit !== undefined && (obj.deposit = message.deposit ? Coin.toJSON(message.deposit) : undefined);
    message.readPrice !== undefined && (obj.readPrice = message.readPrice);
    message.freeReadQuota !== undefined && (obj.freeReadQuota = (message.freeReadQuota || Long.UZERO).toString());
    message.storePrice !== undefined && (obj.storePrice = message.storePrice);
    message.blsKey !== undefined && (obj.blsKey = message.blsKey);
    message.blsProof !== undefined && (obj.blsProof = message.blsProof);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateStorageProvider>, I>>(object: I): MsgCreateStorageProvider {
    const message = createBaseMsgCreateStorageProvider();
    message.creator = object.creator ?? "";
    message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
    message.spAddress = object.spAddress ?? "";
    message.fundingAddress = object.fundingAddress ?? "";
    message.sealAddress = object.sealAddress ?? "";
    message.approvalAddress = object.approvalAddress ?? "";
    message.gcAddress = object.gcAddress ?? "";
    message.maintenanceAddress = object.maintenanceAddress ?? "";
    message.endpoint = object.endpoint ?? "";
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Coin.fromPartial(object.deposit) : undefined;
    message.readPrice = object.readPrice ?? "";
    message.freeReadQuota = object.freeReadQuota !== undefined && object.freeReadQuota !== null ? Long.fromValue(object.freeReadQuota) : Long.UZERO;
    message.storePrice = object.storePrice ?? "";
    message.blsKey = object.blsKey ?? "";
    message.blsProof = object.blsProof ?? "";
    return message;
  },
  fromSDK(object: MsgCreateStorageProviderSDKType): MsgCreateStorageProvider {
    return {
      creator: object?.creator,
      description: object.description ? Description.fromSDK(object.description) : undefined,
      spAddress: object?.sp_address,
      fundingAddress: object?.funding_address,
      sealAddress: object?.seal_address,
      approvalAddress: object?.approval_address,
      gcAddress: object?.gc_address,
      maintenanceAddress: object?.maintenance_address,
      endpoint: object?.endpoint,
      deposit: object.deposit ? Coin.fromSDK(object.deposit) : undefined,
      readPrice: object?.read_price,
      freeReadQuota: object?.free_read_quota,
      storePrice: object?.store_price,
      blsKey: object?.bls_key,
      blsProof: object?.bls_proof
    };
  },
  toSDK(message: MsgCreateStorageProvider): MsgCreateStorageProviderSDKType {
    const obj: any = {};
    obj.creator = message.creator;
    message.description !== undefined && (obj.description = message.description ? Description.toSDK(message.description) : undefined);
    obj.sp_address = message.spAddress;
    obj.funding_address = message.fundingAddress;
    obj.seal_address = message.sealAddress;
    obj.approval_address = message.approvalAddress;
    obj.gc_address = message.gcAddress;
    obj.maintenance_address = message.maintenanceAddress;
    obj.endpoint = message.endpoint;
    message.deposit !== undefined && (obj.deposit = message.deposit ? Coin.toSDK(message.deposit) : undefined);
    obj.read_price = message.readPrice;
    obj.free_read_quota = message.freeReadQuota;
    obj.store_price = message.storePrice;
    obj.bls_key = message.blsKey;
    obj.bls_proof = message.blsProof;
    return obj;
  },
  fromAmino(object: MsgCreateStorageProviderAmino): MsgCreateStorageProvider {
    const message = createBaseMsgCreateStorageProvider();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = Description.fromAmino(object.description);
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
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = Coin.fromAmino(object.deposit);
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
    if (object.bls_key !== undefined && object.bls_key !== null) {
      message.blsKey = object.bls_key;
    }
    if (object.bls_proof !== undefined && object.bls_proof !== null) {
      message.blsProof = object.bls_proof;
    }
    return message;
  },
  toAmino(message: MsgCreateStorageProvider): MsgCreateStorageProviderAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.description = message.description ? Description.toAmino(message.description) : undefined;
    obj.sp_address = message.spAddress;
    obj.funding_address = message.fundingAddress;
    obj.seal_address = message.sealAddress;
    obj.approval_address = message.approvalAddress;
    obj.gc_address = message.gcAddress;
    obj.maintenance_address = message.maintenanceAddress;
    obj.endpoint = message.endpoint;
    obj.deposit = message.deposit ? Coin.toAmino(message.deposit) : undefined;
    obj.read_price = message.readPrice;
    obj.free_read_quota = message.freeReadQuota ? message.freeReadQuota.toString() : undefined;
    obj.store_price = message.storePrice;
    obj.bls_key = message.blsKey;
    obj.bls_proof = message.blsProof;
    return obj;
  },
  fromAminoMsg(object: MsgCreateStorageProviderAminoMsg): MsgCreateStorageProvider {
    return MsgCreateStorageProvider.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateStorageProviderProtoMsg): MsgCreateStorageProvider {
    return MsgCreateStorageProvider.decode(message.value);
  },
  toProto(message: MsgCreateStorageProvider): Uint8Array {
    return MsgCreateStorageProvider.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateStorageProvider): MsgCreateStorageProviderProtoMsg {
    return {
      typeUrl: "/greenfield.sp.MsgCreateStorageProvider",
      value: MsgCreateStorageProvider.encode(message).finish()
    };
  }
};
function createBaseMsgCreateStorageProviderResponse(): MsgCreateStorageProviderResponse {
  return {};
}
export const MsgCreateStorageProviderResponse = {
  typeUrl: "/greenfield.sp.MsgCreateStorageProviderResponse",
  encode(_: MsgCreateStorageProviderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateStorageProviderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateStorageProviderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgCreateStorageProviderResponse {
    return {};
  },
  toJSON(_: MsgCreateStorageProviderResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateStorageProviderResponse>, I>>(_: I): MsgCreateStorageProviderResponse {
    const message = createBaseMsgCreateStorageProviderResponse();
    return message;
  },
  fromSDK(_: MsgCreateStorageProviderResponseSDKType): MsgCreateStorageProviderResponse {
    return {};
  },
  toSDK(_: MsgCreateStorageProviderResponse): MsgCreateStorageProviderResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgCreateStorageProviderResponseAmino): MsgCreateStorageProviderResponse {
    const message = createBaseMsgCreateStorageProviderResponse();
    return message;
  },
  toAmino(_: MsgCreateStorageProviderResponse): MsgCreateStorageProviderResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateStorageProviderResponseAminoMsg): MsgCreateStorageProviderResponse {
    return MsgCreateStorageProviderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateStorageProviderResponseProtoMsg): MsgCreateStorageProviderResponse {
    return MsgCreateStorageProviderResponse.decode(message.value);
  },
  toProto(message: MsgCreateStorageProviderResponse): Uint8Array {
    return MsgCreateStorageProviderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateStorageProviderResponse): MsgCreateStorageProviderResponseProtoMsg {
    return {
      typeUrl: "/greenfield.sp.MsgCreateStorageProviderResponse",
      value: MsgCreateStorageProviderResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeposit(): MsgDeposit {
  return {
    creator: "",
    spAddress: "",
    deposit: Coin.fromPartial({})
  };
}
export const MsgDeposit = {
  typeUrl: "/greenfield.sp.MsgDeposit",
  encode(message: MsgDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.spAddress !== "") {
      writer.uint32(18).string(message.spAddress);
    }
    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.spAddress = reader.string();
          break;
        case 3:
          message.deposit = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDeposit {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      spAddress: isSet(object.spAddress) ? String(object.spAddress) : "",
      deposit: isSet(object.deposit) ? Coin.fromJSON(object.deposit) : undefined
    };
  },
  toJSON(message: MsgDeposit): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.spAddress !== undefined && (obj.spAddress = message.spAddress);
    message.deposit !== undefined && (obj.deposit = message.deposit ? Coin.toJSON(message.deposit) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeposit>, I>>(object: I): MsgDeposit {
    const message = createBaseMsgDeposit();
    message.creator = object.creator ?? "";
    message.spAddress = object.spAddress ?? "";
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Coin.fromPartial(object.deposit) : undefined;
    return message;
  },
  fromSDK(object: MsgDepositSDKType): MsgDeposit {
    return {
      creator: object?.creator,
      spAddress: object?.sp_address,
      deposit: object.deposit ? Coin.fromSDK(object.deposit) : undefined
    };
  },
  toSDK(message: MsgDeposit): MsgDepositSDKType {
    const obj: any = {};
    obj.creator = message.creator;
    obj.sp_address = message.spAddress;
    message.deposit !== undefined && (obj.deposit = message.deposit ? Coin.toSDK(message.deposit) : undefined);
    return obj;
  },
  fromAmino(object: MsgDepositAmino): MsgDeposit {
    const message = createBaseMsgDeposit();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.sp_address !== undefined && object.sp_address !== null) {
      message.spAddress = object.sp_address;
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = Coin.fromAmino(object.deposit);
    }
    return message;
  },
  toAmino(message: MsgDeposit): MsgDepositAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.sp_address = message.spAddress;
    obj.deposit = message.deposit ? Coin.toAmino(message.deposit) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDepositAminoMsg): MsgDeposit {
    return MsgDeposit.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDepositProtoMsg): MsgDeposit {
    return MsgDeposit.decode(message.value);
  },
  toProto(message: MsgDeposit): Uint8Array {
    return MsgDeposit.encode(message).finish();
  },
  toProtoMsg(message: MsgDeposit): MsgDepositProtoMsg {
    return {
      typeUrl: "/greenfield.sp.MsgDeposit",
      value: MsgDeposit.encode(message).finish()
    };
  }
};
function createBaseMsgDepositResponse(): MsgDepositResponse {
  return {};
}
export const MsgDepositResponse = {
  typeUrl: "/greenfield.sp.MsgDepositResponse",
  encode(_: MsgDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgDepositResponse {
    return {};
  },
  toJSON(_: MsgDepositResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDepositResponse>, I>>(_: I): MsgDepositResponse {
    const message = createBaseMsgDepositResponse();
    return message;
  },
  fromSDK(_: MsgDepositResponseSDKType): MsgDepositResponse {
    return {};
  },
  toSDK(_: MsgDepositResponse): MsgDepositResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgDepositResponseAmino): MsgDepositResponse {
    const message = createBaseMsgDepositResponse();
    return message;
  },
  toAmino(_: MsgDepositResponse): MsgDepositResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDepositResponseAminoMsg): MsgDepositResponse {
    return MsgDepositResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDepositResponseProtoMsg): MsgDepositResponse {
    return MsgDepositResponse.decode(message.value);
  },
  toProto(message: MsgDepositResponse): Uint8Array {
    return MsgDepositResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDepositResponse): MsgDepositResponseProtoMsg {
    return {
      typeUrl: "/greenfield.sp.MsgDepositResponse",
      value: MsgDepositResponse.encode(message).finish()
    };
  }
};
function createBaseMsgEditStorageProvider(): MsgEditStorageProvider {
  return {
    spAddress: "",
    endpoint: "",
    description: undefined,
    sealAddress: "",
    approvalAddress: "",
    gcAddress: "",
    maintenanceAddress: "",
    blsKey: "",
    blsProof: ""
  };
}
export const MsgEditStorageProvider = {
  typeUrl: "/greenfield.sp.MsgEditStorageProvider",
  encode(message: MsgEditStorageProvider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spAddress !== "") {
      writer.uint32(10).string(message.spAddress);
    }
    if (message.endpoint !== "") {
      writer.uint32(18).string(message.endpoint);
    }
    if (message.description !== undefined) {
      Description.encode(message.description, writer.uint32(26).fork()).ldelim();
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
    if (message.blsKey !== "") {
      writer.uint32(66).string(message.blsKey);
    }
    if (message.blsProof !== "") {
      writer.uint32(74).string(message.blsProof);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditStorageProvider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditStorageProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spAddress = reader.string();
          break;
        case 2:
          message.endpoint = reader.string();
          break;
        case 3:
          message.description = Description.decode(reader, reader.uint32());
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
          message.blsKey = reader.string();
          break;
        case 9:
          message.blsProof = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgEditStorageProvider {
    return {
      spAddress: isSet(object.spAddress) ? String(object.spAddress) : "",
      endpoint: isSet(object.endpoint) ? String(object.endpoint) : "",
      description: isSet(object.description) ? Description.fromJSON(object.description) : undefined,
      sealAddress: isSet(object.sealAddress) ? String(object.sealAddress) : "",
      approvalAddress: isSet(object.approvalAddress) ? String(object.approvalAddress) : "",
      gcAddress: isSet(object.gcAddress) ? String(object.gcAddress) : "",
      maintenanceAddress: isSet(object.maintenanceAddress) ? String(object.maintenanceAddress) : "",
      blsKey: isSet(object.blsKey) ? String(object.blsKey) : "",
      blsProof: isSet(object.blsProof) ? String(object.blsProof) : ""
    };
  },
  toJSON(message: MsgEditStorageProvider): unknown {
    const obj: any = {};
    message.spAddress !== undefined && (obj.spAddress = message.spAddress);
    message.endpoint !== undefined && (obj.endpoint = message.endpoint);
    message.description !== undefined && (obj.description = message.description ? Description.toJSON(message.description) : undefined);
    message.sealAddress !== undefined && (obj.sealAddress = message.sealAddress);
    message.approvalAddress !== undefined && (obj.approvalAddress = message.approvalAddress);
    message.gcAddress !== undefined && (obj.gcAddress = message.gcAddress);
    message.maintenanceAddress !== undefined && (obj.maintenanceAddress = message.maintenanceAddress);
    message.blsKey !== undefined && (obj.blsKey = message.blsKey);
    message.blsProof !== undefined && (obj.blsProof = message.blsProof);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgEditStorageProvider>, I>>(object: I): MsgEditStorageProvider {
    const message = createBaseMsgEditStorageProvider();
    message.spAddress = object.spAddress ?? "";
    message.endpoint = object.endpoint ?? "";
    message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
    message.sealAddress = object.sealAddress ?? "";
    message.approvalAddress = object.approvalAddress ?? "";
    message.gcAddress = object.gcAddress ?? "";
    message.maintenanceAddress = object.maintenanceAddress ?? "";
    message.blsKey = object.blsKey ?? "";
    message.blsProof = object.blsProof ?? "";
    return message;
  },
  fromSDK(object: MsgEditStorageProviderSDKType): MsgEditStorageProvider {
    return {
      spAddress: object?.sp_address,
      endpoint: object?.endpoint,
      description: object.description ? Description.fromSDK(object.description) : undefined,
      sealAddress: object?.seal_address,
      approvalAddress: object?.approval_address,
      gcAddress: object?.gc_address,
      maintenanceAddress: object?.maintenance_address,
      blsKey: object?.bls_key,
      blsProof: object?.bls_proof
    };
  },
  toSDK(message: MsgEditStorageProvider): MsgEditStorageProviderSDKType {
    const obj: any = {};
    obj.sp_address = message.spAddress;
    obj.endpoint = message.endpoint;
    message.description !== undefined && (obj.description = message.description ? Description.toSDK(message.description) : undefined);
    obj.seal_address = message.sealAddress;
    obj.approval_address = message.approvalAddress;
    obj.gc_address = message.gcAddress;
    obj.maintenance_address = message.maintenanceAddress;
    obj.bls_key = message.blsKey;
    obj.bls_proof = message.blsProof;
    return obj;
  },
  fromAmino(object: MsgEditStorageProviderAmino): MsgEditStorageProvider {
    const message = createBaseMsgEditStorageProvider();
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
    if (object.bls_proof !== undefined && object.bls_proof !== null) {
      message.blsProof = object.bls_proof;
    }
    return message;
  },
  toAmino(message: MsgEditStorageProvider): MsgEditStorageProviderAmino {
    const obj: any = {};
    obj.sp_address = message.spAddress;
    obj.endpoint = message.endpoint;
    obj.description = message.description ? Description.toAmino(message.description) : undefined;
    obj.seal_address = message.sealAddress;
    obj.approval_address = message.approvalAddress;
    obj.gc_address = message.gcAddress;
    obj.maintenance_address = message.maintenanceAddress;
    obj.bls_key = message.blsKey;
    obj.bls_proof = message.blsProof;
    return obj;
  },
  fromAminoMsg(object: MsgEditStorageProviderAminoMsg): MsgEditStorageProvider {
    return MsgEditStorageProvider.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEditStorageProviderProtoMsg): MsgEditStorageProvider {
    return MsgEditStorageProvider.decode(message.value);
  },
  toProto(message: MsgEditStorageProvider): Uint8Array {
    return MsgEditStorageProvider.encode(message).finish();
  },
  toProtoMsg(message: MsgEditStorageProvider): MsgEditStorageProviderProtoMsg {
    return {
      typeUrl: "/greenfield.sp.MsgEditStorageProvider",
      value: MsgEditStorageProvider.encode(message).finish()
    };
  }
};
function createBaseMsgEditStorageProviderResponse(): MsgEditStorageProviderResponse {
  return {};
}
export const MsgEditStorageProviderResponse = {
  typeUrl: "/greenfield.sp.MsgEditStorageProviderResponse",
  encode(_: MsgEditStorageProviderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditStorageProviderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditStorageProviderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgEditStorageProviderResponse {
    return {};
  },
  toJSON(_: MsgEditStorageProviderResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgEditStorageProviderResponse>, I>>(_: I): MsgEditStorageProviderResponse {
    const message = createBaseMsgEditStorageProviderResponse();
    return message;
  },
  fromSDK(_: MsgEditStorageProviderResponseSDKType): MsgEditStorageProviderResponse {
    return {};
  },
  toSDK(_: MsgEditStorageProviderResponse): MsgEditStorageProviderResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgEditStorageProviderResponseAmino): MsgEditStorageProviderResponse {
    const message = createBaseMsgEditStorageProviderResponse();
    return message;
  },
  toAmino(_: MsgEditStorageProviderResponse): MsgEditStorageProviderResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgEditStorageProviderResponseAminoMsg): MsgEditStorageProviderResponse {
    return MsgEditStorageProviderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEditStorageProviderResponseProtoMsg): MsgEditStorageProviderResponse {
    return MsgEditStorageProviderResponse.decode(message.value);
  },
  toProto(message: MsgEditStorageProviderResponse): Uint8Array {
    return MsgEditStorageProviderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgEditStorageProviderResponse): MsgEditStorageProviderResponseProtoMsg {
    return {
      typeUrl: "/greenfield.sp.MsgEditStorageProviderResponse",
      value: MsgEditStorageProviderResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateSpStoragePrice(): MsgUpdateSpStoragePrice {
  return {
    spAddress: "",
    readPrice: "",
    freeReadQuota: Long.UZERO,
    storePrice: ""
  };
}
export const MsgUpdateSpStoragePrice = {
  typeUrl: "/greenfield.sp.MsgUpdateSpStoragePrice",
  encode(message: MsgUpdateSpStoragePrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spAddress !== "") {
      writer.uint32(10).string(message.spAddress);
    }
    if (message.readPrice !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.readPrice, 18).atomics);
    }
    if (!message.freeReadQuota.isZero()) {
      writer.uint32(24).uint64(message.freeReadQuota);
    }
    if (message.storePrice !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.storePrice, 18).atomics);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateSpStoragePrice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateSpStoragePrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spAddress = reader.string();
          break;
        case 2:
          message.readPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.freeReadQuota = (reader.uint64() as Long);
          break;
        case 4:
          message.storePrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateSpStoragePrice {
    return {
      spAddress: isSet(object.spAddress) ? String(object.spAddress) : "",
      readPrice: isSet(object.readPrice) ? String(object.readPrice) : "",
      freeReadQuota: isSet(object.freeReadQuota) ? Long.fromValue(object.freeReadQuota) : Long.UZERO,
      storePrice: isSet(object.storePrice) ? String(object.storePrice) : ""
    };
  },
  toJSON(message: MsgUpdateSpStoragePrice): unknown {
    const obj: any = {};
    message.spAddress !== undefined && (obj.spAddress = message.spAddress);
    message.readPrice !== undefined && (obj.readPrice = message.readPrice);
    message.freeReadQuota !== undefined && (obj.freeReadQuota = (message.freeReadQuota || Long.UZERO).toString());
    message.storePrice !== undefined && (obj.storePrice = message.storePrice);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateSpStoragePrice>, I>>(object: I): MsgUpdateSpStoragePrice {
    const message = createBaseMsgUpdateSpStoragePrice();
    message.spAddress = object.spAddress ?? "";
    message.readPrice = object.readPrice ?? "";
    message.freeReadQuota = object.freeReadQuota !== undefined && object.freeReadQuota !== null ? Long.fromValue(object.freeReadQuota) : Long.UZERO;
    message.storePrice = object.storePrice ?? "";
    return message;
  },
  fromSDK(object: MsgUpdateSpStoragePriceSDKType): MsgUpdateSpStoragePrice {
    return {
      spAddress: object?.sp_address,
      readPrice: object?.read_price,
      freeReadQuota: object?.free_read_quota,
      storePrice: object?.store_price
    };
  },
  toSDK(message: MsgUpdateSpStoragePrice): MsgUpdateSpStoragePriceSDKType {
    const obj: any = {};
    obj.sp_address = message.spAddress;
    obj.read_price = message.readPrice;
    obj.free_read_quota = message.freeReadQuota;
    obj.store_price = message.storePrice;
    return obj;
  },
  fromAmino(object: MsgUpdateSpStoragePriceAmino): MsgUpdateSpStoragePrice {
    const message = createBaseMsgUpdateSpStoragePrice();
    if (object.sp_address !== undefined && object.sp_address !== null) {
      message.spAddress = object.sp_address;
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
  toAmino(message: MsgUpdateSpStoragePrice): MsgUpdateSpStoragePriceAmino {
    const obj: any = {};
    obj.sp_address = message.spAddress;
    obj.read_price = message.readPrice;
    obj.free_read_quota = message.freeReadQuota ? message.freeReadQuota.toString() : undefined;
    obj.store_price = message.storePrice;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateSpStoragePriceAminoMsg): MsgUpdateSpStoragePrice {
    return MsgUpdateSpStoragePrice.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateSpStoragePriceProtoMsg): MsgUpdateSpStoragePrice {
    return MsgUpdateSpStoragePrice.decode(message.value);
  },
  toProto(message: MsgUpdateSpStoragePrice): Uint8Array {
    return MsgUpdateSpStoragePrice.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateSpStoragePrice): MsgUpdateSpStoragePriceProtoMsg {
    return {
      typeUrl: "/greenfield.sp.MsgUpdateSpStoragePrice",
      value: MsgUpdateSpStoragePrice.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateSpStoragePriceResponse(): MsgUpdateSpStoragePriceResponse {
  return {};
}
export const MsgUpdateSpStoragePriceResponse = {
  typeUrl: "/greenfield.sp.MsgUpdateSpStoragePriceResponse",
  encode(_: MsgUpdateSpStoragePriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateSpStoragePriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateSpStoragePriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateSpStoragePriceResponse {
    return {};
  },
  toJSON(_: MsgUpdateSpStoragePriceResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateSpStoragePriceResponse>, I>>(_: I): MsgUpdateSpStoragePriceResponse {
    const message = createBaseMsgUpdateSpStoragePriceResponse();
    return message;
  },
  fromSDK(_: MsgUpdateSpStoragePriceResponseSDKType): MsgUpdateSpStoragePriceResponse {
    return {};
  },
  toSDK(_: MsgUpdateSpStoragePriceResponse): MsgUpdateSpStoragePriceResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgUpdateSpStoragePriceResponseAmino): MsgUpdateSpStoragePriceResponse {
    const message = createBaseMsgUpdateSpStoragePriceResponse();
    return message;
  },
  toAmino(_: MsgUpdateSpStoragePriceResponse): MsgUpdateSpStoragePriceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateSpStoragePriceResponseAminoMsg): MsgUpdateSpStoragePriceResponse {
    return MsgUpdateSpStoragePriceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateSpStoragePriceResponseProtoMsg): MsgUpdateSpStoragePriceResponse {
    return MsgUpdateSpStoragePriceResponse.decode(message.value);
  },
  toProto(message: MsgUpdateSpStoragePriceResponse): Uint8Array {
    return MsgUpdateSpStoragePriceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateSpStoragePriceResponse): MsgUpdateSpStoragePriceResponseProtoMsg {
    return {
      typeUrl: "/greenfield.sp.MsgUpdateSpStoragePriceResponse",
      value: MsgUpdateSpStoragePriceResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/greenfield.sp.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromSDK(object: MsgUpdateParamsSDKType): MsgUpdateParams {
    return {
      authority: object?.authority,
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },
  toSDK(message: MsgUpdateParams): MsgUpdateParamsSDKType {
    const obj: any = {};
    obj.authority = message.authority;
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/greenfield.sp.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/greenfield.sp.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromSDK(_: MsgUpdateParamsResponseSDKType): MsgUpdateParamsResponse {
    return {};
  },
  toSDK(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/greenfield.sp.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateStorageProviderStatus(): MsgUpdateStorageProviderStatus {
  return {
    spAddress: "",
    status: 0,
    duration: Long.ZERO
  };
}
export const MsgUpdateStorageProviderStatus = {
  typeUrl: "/greenfield.sp.MsgUpdateStorageProviderStatus",
  encode(message: MsgUpdateStorageProviderStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spAddress !== "") {
      writer.uint32(10).string(message.spAddress);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (!message.duration.isZero()) {
      writer.uint32(24).int64(message.duration);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateStorageProviderStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateStorageProviderStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spAddress = reader.string();
          break;
        case 2:
          message.status = (reader.int32() as any);
          break;
        case 3:
          message.duration = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateStorageProviderStatus {
    return {
      spAddress: isSet(object.spAddress) ? String(object.spAddress) : "",
      status: isSet(object.status) ? statusFromJSON(object.status) : -1,
      duration: isSet(object.duration) ? Long.fromValue(object.duration) : Long.ZERO
    };
  },
  toJSON(message: MsgUpdateStorageProviderStatus): unknown {
    const obj: any = {};
    message.spAddress !== undefined && (obj.spAddress = message.spAddress);
    message.status !== undefined && (obj.status = statusToJSON(message.status));
    message.duration !== undefined && (obj.duration = (message.duration || Long.ZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateStorageProviderStatus>, I>>(object: I): MsgUpdateStorageProviderStatus {
    const message = createBaseMsgUpdateStorageProviderStatus();
    message.spAddress = object.spAddress ?? "";
    message.status = object.status ?? 0;
    message.duration = object.duration !== undefined && object.duration !== null ? Long.fromValue(object.duration) : Long.ZERO;
    return message;
  },
  fromSDK(object: MsgUpdateStorageProviderStatusSDKType): MsgUpdateStorageProviderStatus {
    return {
      spAddress: object?.sp_address,
      status: isSet(object.status) ? statusFromJSON(object.status) : -1,
      duration: object?.duration
    };
  },
  toSDK(message: MsgUpdateStorageProviderStatus): MsgUpdateStorageProviderStatusSDKType {
    const obj: any = {};
    obj.sp_address = message.spAddress;
    message.status !== undefined && (obj.status = statusToJSON(message.status));
    obj.duration = message.duration;
    return obj;
  },
  fromAmino(object: MsgUpdateStorageProviderStatusAmino): MsgUpdateStorageProviderStatus {
    const message = createBaseMsgUpdateStorageProviderStatus();
    if (object.sp_address !== undefined && object.sp_address !== null) {
      message.spAddress = object.sp_address;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = statusFromJSON(object.status);
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Long.fromString(object.duration);
    }
    return message;
  },
  toAmino(message: MsgUpdateStorageProviderStatus): MsgUpdateStorageProviderStatusAmino {
    const obj: any = {};
    obj.sp_address = message.spAddress;
    obj.status = statusToJSON(message.status);
    obj.duration = message.duration ? message.duration.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateStorageProviderStatusAminoMsg): MsgUpdateStorageProviderStatus {
    return MsgUpdateStorageProviderStatus.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateStorageProviderStatusProtoMsg): MsgUpdateStorageProviderStatus {
    return MsgUpdateStorageProviderStatus.decode(message.value);
  },
  toProto(message: MsgUpdateStorageProviderStatus): Uint8Array {
    return MsgUpdateStorageProviderStatus.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateStorageProviderStatus): MsgUpdateStorageProviderStatusProtoMsg {
    return {
      typeUrl: "/greenfield.sp.MsgUpdateStorageProviderStatus",
      value: MsgUpdateStorageProviderStatus.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateStorageProviderStatusResponse(): MsgUpdateStorageProviderStatusResponse {
  return {};
}
export const MsgUpdateStorageProviderStatusResponse = {
  typeUrl: "/greenfield.sp.MsgUpdateStorageProviderStatusResponse",
  encode(_: MsgUpdateStorageProviderStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateStorageProviderStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateStorageProviderStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateStorageProviderStatusResponse {
    return {};
  },
  toJSON(_: MsgUpdateStorageProviderStatusResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateStorageProviderStatusResponse>, I>>(_: I): MsgUpdateStorageProviderStatusResponse {
    const message = createBaseMsgUpdateStorageProviderStatusResponse();
    return message;
  },
  fromSDK(_: MsgUpdateStorageProviderStatusResponseSDKType): MsgUpdateStorageProviderStatusResponse {
    return {};
  },
  toSDK(_: MsgUpdateStorageProviderStatusResponse): MsgUpdateStorageProviderStatusResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgUpdateStorageProviderStatusResponseAmino): MsgUpdateStorageProviderStatusResponse {
    const message = createBaseMsgUpdateStorageProviderStatusResponse();
    return message;
  },
  toAmino(_: MsgUpdateStorageProviderStatusResponse): MsgUpdateStorageProviderStatusResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateStorageProviderStatusResponseAminoMsg): MsgUpdateStorageProviderStatusResponse {
    return MsgUpdateStorageProviderStatusResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateStorageProviderStatusResponseProtoMsg): MsgUpdateStorageProviderStatusResponse {
    return MsgUpdateStorageProviderStatusResponse.decode(message.value);
  },
  toProto(message: MsgUpdateStorageProviderStatusResponse): Uint8Array {
    return MsgUpdateStorageProviderStatusResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateStorageProviderStatusResponse): MsgUpdateStorageProviderStatusResponseProtoMsg {
    return {
      typeUrl: "/greenfield.sp.MsgUpdateStorageProviderStatusResponse",
      value: MsgUpdateStorageProviderStatusResponse.encode(message).finish()
    };
  }
};
/** Msg defines the Msg service for creating a new storage provider.
 TODO: add a transaction that the Storage Provide claim themself enter short time maintenance to avoid slash */
export interface Msg {
  CreateStorageProvider(request: MsgCreateStorageProvider): Promise<MsgCreateStorageProviderResponse>;
  Deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
  EditStorageProvider(request: MsgEditStorageProvider): Promise<MsgEditStorageProviderResponse>;
  UpdateSpStoragePrice(request: MsgUpdateSpStoragePrice): Promise<MsgUpdateSpStoragePriceResponse>;
  UpdateSpStatus(request: MsgUpdateStorageProviderStatus): Promise<MsgUpdateStorageProviderStatusResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/sp module parameters.
   * The authority is defined in the keeper.
   * 
   * Since: cosmos-sdk 0.47
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateStorageProvider = this.CreateStorageProvider.bind(this);
    this.Deposit = this.Deposit.bind(this);
    this.EditStorageProvider = this.EditStorageProvider.bind(this);
    this.UpdateSpStoragePrice = this.UpdateSpStoragePrice.bind(this);
    this.UpdateSpStatus = this.UpdateSpStatus.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  CreateStorageProvider(request: MsgCreateStorageProvider): Promise<MsgCreateStorageProviderResponse> {
    const data = MsgCreateStorageProvider.encode(request).finish();
    const promise = this.rpc.request("greenfield.sp.Msg", "CreateStorageProvider", data);
    return promise.then(data => MsgCreateStorageProviderResponse.decode(new _m0.Reader(data)));
  }
  Deposit(request: MsgDeposit): Promise<MsgDepositResponse> {
    const data = MsgDeposit.encode(request).finish();
    const promise = this.rpc.request("greenfield.sp.Msg", "Deposit", data);
    return promise.then(data => MsgDepositResponse.decode(new _m0.Reader(data)));
  }
  EditStorageProvider(request: MsgEditStorageProvider): Promise<MsgEditStorageProviderResponse> {
    const data = MsgEditStorageProvider.encode(request).finish();
    const promise = this.rpc.request("greenfield.sp.Msg", "EditStorageProvider", data);
    return promise.then(data => MsgEditStorageProviderResponse.decode(new _m0.Reader(data)));
  }
  UpdateSpStoragePrice(request: MsgUpdateSpStoragePrice): Promise<MsgUpdateSpStoragePriceResponse> {
    const data = MsgUpdateSpStoragePrice.encode(request).finish();
    const promise = this.rpc.request("greenfield.sp.Msg", "UpdateSpStoragePrice", data);
    return promise.then(data => MsgUpdateSpStoragePriceResponse.decode(new _m0.Reader(data)));
  }
  UpdateSpStatus(request: MsgUpdateStorageProviderStatus): Promise<MsgUpdateStorageProviderStatusResponse> {
    const data = MsgUpdateStorageProviderStatus.encode(request).finish();
    const promise = this.rpc.request("greenfield.sp.Msg", "UpdateSpStatus", data);
    return promise.then(data => MsgUpdateStorageProviderStatusResponse.decode(new _m0.Reader(data)));
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("greenfield.sp.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
  }
}