/* eslint-disable */
import { Description, DescriptionSDKType } from "./types";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Long, isSet, DeepPartial, Exact, Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "bnbchain.greenfield.sp";
/** MsgCreateStorageProvider defines message for creating a new storage provider. */

export interface MsgCreateStorageProvider {
  creator: string;
  description?: Description;
  spAddress: string;
  fundingAddress: string;
  sealAddress: string;
  approvalAddress: string;
  endpoint: string;
  deposit?: Coin;
  /** read price, in bnb wei per charge byte */

  readPrice: string;
  /** free read quota, in byte */

  freeReadQuota: Long;
  /** store price, in bnb wei per charge byte */

  storePrice: string;
}
/** MsgCreateStorageProvider defines message for creating a new storage provider. */

export interface MsgCreateStorageProviderSDKType {
  creator: string;
  description?: DescriptionSDKType;
  sp_address: string;
  funding_address: string;
  seal_address: string;
  approval_address: string;
  endpoint: string;
  deposit?: CoinSDKType;
  read_price: string;
  free_read_quota: Long;
  store_price: string;
}
/** MsgCreateStorageProviderResponse defines the Msg/CreateStorageProvider response type. */

export interface MsgCreateStorageProviderResponse {}
/** MsgCreateStorageProviderResponse defines the Msg/CreateStorageProvider response type. */

export interface MsgCreateStorageProviderResponseSDKType {}
/** MsgDeposit defines a SDK message for deposit token for sp. */

export interface MsgDeposit {
  /** creator is the msg signer, it should be sp address or sp's fund address */
  creator: string;
  /** sp_address is the operator address of sp */

  spAddress: string;
  /** deposit is a mount of token which used to deposit for SP */

  deposit?: Coin;
}
/** MsgDeposit defines a SDK message for deposit token for sp. */

export interface MsgDepositSDKType {
  creator: string;
  sp_address: string;
  deposit?: CoinSDKType;
}
/** MsgDepositResponse defines the Msg/Deposit response type. */

export interface MsgDepositResponse {}
/** MsgDepositResponse defines the Msg/Deposit response type. */

export interface MsgDepositResponseSDKType {}
/** MsgEditStorageProvider defines a SDK message for editing an existing sp. */

export interface MsgEditStorageProvider {
  spAddress: string;
  endpoint: string;
  description?: Description;
}
/** MsgEditStorageProvider defines a SDK message for editing an existing sp. */

export interface MsgEditStorageProviderSDKType {
  sp_address: string;
  endpoint: string;
  description?: DescriptionSDKType;
}
/** MsgEditStorageProviderResponse defines the Msg/EditStorageProvider response type. */

export interface MsgEditStorageProviderResponse {}
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
export interface MsgUpdateSpStoragePriceSDKType {
  sp_address: string;
  read_price: string;
  free_read_quota: Long;
  store_price: string;
}
export interface MsgUpdateSpStoragePriceResponse {}
export interface MsgUpdateSpStoragePriceResponseSDKType {}

function createBaseMsgCreateStorageProvider(): MsgCreateStorageProvider {
  return {
    creator: "",
    description: undefined,
    spAddress: "",
    fundingAddress: "",
    sealAddress: "",
    approvalAddress: "",
    endpoint: "",
    deposit: undefined,
    readPrice: "",
    freeReadQuota: Long.UZERO,
    storePrice: ""
  };
}

export const MsgCreateStorageProvider = {
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

    if (message.endpoint !== "") {
      writer.uint32(58).string(message.endpoint);
    }

    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(66).fork()).ldelim();
    }

    if (message.readPrice !== "") {
      writer.uint32(74).string(message.readPrice);
    }

    if (!message.freeReadQuota.isZero()) {
      writer.uint32(80).uint64(message.freeReadQuota);
    }

    if (message.storePrice !== "") {
      writer.uint32(90).string(message.storePrice);
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
          message.endpoint = reader.string();
          break;

        case 8:
          message.deposit = Coin.decode(reader, reader.uint32());
          break;

        case 9:
          message.readPrice = reader.string();
          break;

        case 10:
          message.freeReadQuota = (reader.uint64() as Long);
          break;

        case 11:
          message.storePrice = reader.string();
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
      endpoint: isSet(object.endpoint) ? String(object.endpoint) : "",
      deposit: isSet(object.deposit) ? Coin.fromJSON(object.deposit) : undefined,
      readPrice: isSet(object.readPrice) ? String(object.readPrice) : "",
      freeReadQuota: isSet(object.freeReadQuota) ? Long.fromValue(object.freeReadQuota) : Long.UZERO,
      storePrice: isSet(object.storePrice) ? String(object.storePrice) : ""
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
    message.endpoint !== undefined && (obj.endpoint = message.endpoint);
    message.deposit !== undefined && (obj.deposit = message.deposit ? Coin.toJSON(message.deposit) : undefined);
    message.readPrice !== undefined && (obj.readPrice = message.readPrice);
    message.freeReadQuota !== undefined && (obj.freeReadQuota = (message.freeReadQuota || Long.UZERO).toString());
    message.storePrice !== undefined && (obj.storePrice = message.storePrice);
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
    message.endpoint = object.endpoint ?? "";
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Coin.fromPartial(object.deposit) : undefined;
    message.readPrice = object.readPrice ?? "";
    message.freeReadQuota = object.freeReadQuota !== undefined && object.freeReadQuota !== null ? Long.fromValue(object.freeReadQuota) : Long.UZERO;
    message.storePrice = object.storePrice ?? "";
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
      endpoint: object?.endpoint,
      deposit: object.deposit ? Coin.fromSDK(object.deposit) : undefined,
      readPrice: object?.read_price,
      freeReadQuota: object?.free_read_quota,
      storePrice: object?.store_price
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
    obj.endpoint = message.endpoint;
    message.deposit !== undefined && (obj.deposit = message.deposit ? Coin.toSDK(message.deposit) : undefined);
    obj.read_price = message.readPrice;
    obj.free_read_quota = message.freeReadQuota;
    obj.store_price = message.storePrice;
    return obj;
  }

};

function createBaseMsgCreateStorageProviderResponse(): MsgCreateStorageProviderResponse {
  return {};
}

export const MsgCreateStorageProviderResponse = {
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
  }

};

function createBaseMsgDeposit(): MsgDeposit {
  return {
    creator: "",
    spAddress: "",
    deposit: undefined
  };
}

export const MsgDeposit = {
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
  }

};

function createBaseMsgDepositResponse(): MsgDepositResponse {
  return {};
}

export const MsgDepositResponse = {
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
  }

};

function createBaseMsgEditStorageProvider(): MsgEditStorageProvider {
  return {
    spAddress: "",
    endpoint: "",
    description: undefined
  };
}

export const MsgEditStorageProvider = {
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
      description: isSet(object.description) ? Description.fromJSON(object.description) : undefined
    };
  },

  toJSON(message: MsgEditStorageProvider): unknown {
    const obj: any = {};
    message.spAddress !== undefined && (obj.spAddress = message.spAddress);
    message.endpoint !== undefined && (obj.endpoint = message.endpoint);
    message.description !== undefined && (obj.description = message.description ? Description.toJSON(message.description) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEditStorageProvider>, I>>(object: I): MsgEditStorageProvider {
    const message = createBaseMsgEditStorageProvider();
    message.spAddress = object.spAddress ?? "";
    message.endpoint = object.endpoint ?? "";
    message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
    return message;
  },

  fromSDK(object: MsgEditStorageProviderSDKType): MsgEditStorageProvider {
    return {
      spAddress: object?.sp_address,
      endpoint: object?.endpoint,
      description: object.description ? Description.fromSDK(object.description) : undefined
    };
  },

  toSDK(message: MsgEditStorageProvider): MsgEditStorageProviderSDKType {
    const obj: any = {};
    obj.sp_address = message.spAddress;
    obj.endpoint = message.endpoint;
    message.description !== undefined && (obj.description = message.description ? Description.toSDK(message.description) : undefined);
    return obj;
  }

};

function createBaseMsgEditStorageProviderResponse(): MsgEditStorageProviderResponse {
  return {};
}

export const MsgEditStorageProviderResponse = {
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
  encode(message: MsgUpdateSpStoragePrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spAddress !== "") {
      writer.uint32(10).string(message.spAddress);
    }

    if (message.readPrice !== "") {
      writer.uint32(18).string(message.readPrice);
    }

    if (!message.freeReadQuota.isZero()) {
      writer.uint32(24).uint64(message.freeReadQuota);
    }

    if (message.storePrice !== "") {
      writer.uint32(34).string(message.storePrice);
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
          message.readPrice = reader.string();
          break;

        case 3:
          message.freeReadQuota = (reader.uint64() as Long);
          break;

        case 4:
          message.storePrice = reader.string();
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
  }

};

function createBaseMsgUpdateSpStoragePriceResponse(): MsgUpdateSpStoragePriceResponse {
  return {};
}

export const MsgUpdateSpStoragePriceResponse = {
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
  }

};
/** Msg defines the Msg service for creating a new storage provider.
 TODO: add a transaction that the Storage Provide claim themself enter short time maintenance to avoid slash */

export interface Msg {
  CreateStorageProvider(request: MsgCreateStorageProvider): Promise<MsgCreateStorageProviderResponse>;
  Deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
  EditStorageProvider(request: MsgEditStorageProvider): Promise<MsgEditStorageProviderResponse>;
  UpdateSpStoragePrice(request: MsgUpdateSpStoragePrice): Promise<MsgUpdateSpStoragePriceResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateStorageProvider = this.CreateStorageProvider.bind(this);
    this.Deposit = this.Deposit.bind(this);
    this.EditStorageProvider = this.EditStorageProvider.bind(this);
    this.UpdateSpStoragePrice = this.UpdateSpStoragePrice.bind(this);
  }

  CreateStorageProvider(request: MsgCreateStorageProvider): Promise<MsgCreateStorageProviderResponse> {
    const data = MsgCreateStorageProvider.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.sp.Msg", "CreateStorageProvider", data);
    return promise.then(data => MsgCreateStorageProviderResponse.decode(new _m0.Reader(data)));
  }

  Deposit(request: MsgDeposit): Promise<MsgDepositResponse> {
    const data = MsgDeposit.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.sp.Msg", "Deposit", data);
    return promise.then(data => MsgDepositResponse.decode(new _m0.Reader(data)));
  }

  EditStorageProvider(request: MsgEditStorageProvider): Promise<MsgEditStorageProviderResponse> {
    const data = MsgEditStorageProvider.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.sp.Msg", "EditStorageProvider", data);
    return promise.then(data => MsgEditStorageProviderResponse.decode(new _m0.Reader(data)));
  }

  UpdateSpStoragePrice(request: MsgUpdateSpStoragePrice): Promise<MsgUpdateSpStoragePriceResponse> {
    const data = MsgUpdateSpStoragePrice.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.sp.Msg", "UpdateSpStoragePrice", data);
    return promise.then(data => MsgUpdateSpStoragePriceResponse.decode(new _m0.Reader(data)));
  }

}