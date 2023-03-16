/* eslint-disable */
import { Description } from "./types";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Long, isSet, DeepPartial, Exact, Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "bnbchain.greenfield.sp";
/** MsgCreateStorageProvider defines message for creating a new storage provider. */

export interface MsgCreateStorageProvider {
  creator: string;
  description?: Description;
  sp_address: string;
  funding_address: string;
  seal_address: string;
  approval_address: string;
  endpoint: string;
  deposit?: Coin;
  /** read price, in bnb wei per charge byte */

  read_price: string;
  /** free read quota, in byte */

  free_read_quota: Long;
  /** store price, in bnb wei per charge byte */

  store_price: string;
}
/** MsgCreateStorageProviderResponse defines the Msg/CreateStorageProvider response type. */

export interface MsgCreateStorageProviderResponse {}
/** MsgDeposit defines a SDK message for deposit token for sp. */

export interface MsgDeposit {
  /** creator is the msg signer, it should be sp address or sp's fund address */
  creator: string;
  /** sp_address is the operator address of sp */

  sp_address: string;
  /** deposit is a mount of token which used to deposit for SP */

  deposit?: Coin;
}
/** MsgDepositResponse defines the Msg/Deposit response type. */

export interface MsgDepositResponse {}
/** MsgEditStorageProvider defines a SDK message for editing an existing sp. */

export interface MsgEditStorageProvider {
  sp_address: string;
  endpoint: string;
  description?: Description;
}
/** MsgEditStorageProviderResponse defines the Msg/EditStorageProvider response type. */

export interface MsgEditStorageProviderResponse {}
export interface MsgUpdateSpStoragePrice {
  /** sp address */
  sp_address: string;
  /** read price, in bnb wei per charge byte */

  read_price: string;
  /** free read quota, in byte */

  free_read_quota: Long;
  /** store price, in bnb wei per charge byte */

  store_price: string;
}
export interface MsgUpdateSpStoragePriceResponse {}

function createBaseMsgCreateStorageProvider(): MsgCreateStorageProvider {
  return {
    creator: "",
    description: undefined,
    sp_address: "",
    funding_address: "",
    seal_address: "",
    approval_address: "",
    endpoint: "",
    deposit: undefined,
    read_price: "",
    free_read_quota: Long.UZERO,
    store_price: ""
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

    if (message.sp_address !== "") {
      writer.uint32(26).string(message.sp_address);
    }

    if (message.funding_address !== "") {
      writer.uint32(34).string(message.funding_address);
    }

    if (message.seal_address !== "") {
      writer.uint32(42).string(message.seal_address);
    }

    if (message.approval_address !== "") {
      writer.uint32(50).string(message.approval_address);
    }

    if (message.endpoint !== "") {
      writer.uint32(58).string(message.endpoint);
    }

    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(66).fork()).ldelim();
    }

    if (message.read_price !== "") {
      writer.uint32(74).string(message.read_price);
    }

    if (!message.free_read_quota.isZero()) {
      writer.uint32(80).uint64(message.free_read_quota);
    }

    if (message.store_price !== "") {
      writer.uint32(90).string(message.store_price);
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
          message.sp_address = reader.string();
          break;

        case 4:
          message.funding_address = reader.string();
          break;

        case 5:
          message.seal_address = reader.string();
          break;

        case 6:
          message.approval_address = reader.string();
          break;

        case 7:
          message.endpoint = reader.string();
          break;

        case 8:
          message.deposit = Coin.decode(reader, reader.uint32());
          break;

        case 9:
          message.read_price = reader.string();
          break;

        case 10:
          message.free_read_quota = (reader.uint64() as Long);
          break;

        case 11:
          message.store_price = reader.string();
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
      sp_address: isSet(object.sp_address) ? String(object.sp_address) : "",
      funding_address: isSet(object.funding_address) ? String(object.funding_address) : "",
      seal_address: isSet(object.seal_address) ? String(object.seal_address) : "",
      approval_address: isSet(object.approval_address) ? String(object.approval_address) : "",
      endpoint: isSet(object.endpoint) ? String(object.endpoint) : "",
      deposit: isSet(object.deposit) ? Coin.fromJSON(object.deposit) : undefined,
      read_price: isSet(object.read_price) ? String(object.read_price) : "",
      free_read_quota: isSet(object.free_read_quota) ? Long.fromValue(object.free_read_quota) : Long.UZERO,
      store_price: isSet(object.store_price) ? String(object.store_price) : ""
    };
  },

  toJSON(message: MsgCreateStorageProvider): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.description !== undefined && (obj.description = message.description ? Description.toJSON(message.description) : undefined);
    message.sp_address !== undefined && (obj.sp_address = message.sp_address);
    message.funding_address !== undefined && (obj.funding_address = message.funding_address);
    message.seal_address !== undefined && (obj.seal_address = message.seal_address);
    message.approval_address !== undefined && (obj.approval_address = message.approval_address);
    message.endpoint !== undefined && (obj.endpoint = message.endpoint);
    message.deposit !== undefined && (obj.deposit = message.deposit ? Coin.toJSON(message.deposit) : undefined);
    message.read_price !== undefined && (obj.read_price = message.read_price);
    message.free_read_quota !== undefined && (obj.free_read_quota = (message.free_read_quota || Long.UZERO).toString());
    message.store_price !== undefined && (obj.store_price = message.store_price);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateStorageProvider>, I>>(object: I): MsgCreateStorageProvider {
    const message = createBaseMsgCreateStorageProvider();
    message.creator = object.creator ?? "";
    message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
    message.sp_address = object.sp_address ?? "";
    message.funding_address = object.funding_address ?? "";
    message.seal_address = object.seal_address ?? "";
    message.approval_address = object.approval_address ?? "";
    message.endpoint = object.endpoint ?? "";
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Coin.fromPartial(object.deposit) : undefined;
    message.read_price = object.read_price ?? "";
    message.free_read_quota = object.free_read_quota !== undefined && object.free_read_quota !== null ? Long.fromValue(object.free_read_quota) : Long.UZERO;
    message.store_price = object.store_price ?? "";
    return message;
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
  }

};

function createBaseMsgDeposit(): MsgDeposit {
  return {
    creator: "",
    sp_address: "",
    deposit: undefined
  };
}

export const MsgDeposit = {
  encode(message: MsgDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.sp_address !== "") {
      writer.uint32(18).string(message.sp_address);
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
          message.sp_address = reader.string();
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
      sp_address: isSet(object.sp_address) ? String(object.sp_address) : "",
      deposit: isSet(object.deposit) ? Coin.fromJSON(object.deposit) : undefined
    };
  },

  toJSON(message: MsgDeposit): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.sp_address !== undefined && (obj.sp_address = message.sp_address);
    message.deposit !== undefined && (obj.deposit = message.deposit ? Coin.toJSON(message.deposit) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeposit>, I>>(object: I): MsgDeposit {
    const message = createBaseMsgDeposit();
    message.creator = object.creator ?? "";
    message.sp_address = object.sp_address ?? "";
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Coin.fromPartial(object.deposit) : undefined;
    return message;
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
  }

};

function createBaseMsgEditStorageProvider(): MsgEditStorageProvider {
  return {
    sp_address: "",
    endpoint: "",
    description: undefined
  };
}

export const MsgEditStorageProvider = {
  encode(message: MsgEditStorageProvider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sp_address !== "") {
      writer.uint32(10).string(message.sp_address);
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
          message.sp_address = reader.string();
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
      sp_address: isSet(object.sp_address) ? String(object.sp_address) : "",
      endpoint: isSet(object.endpoint) ? String(object.endpoint) : "",
      description: isSet(object.description) ? Description.fromJSON(object.description) : undefined
    };
  },

  toJSON(message: MsgEditStorageProvider): unknown {
    const obj: any = {};
    message.sp_address !== undefined && (obj.sp_address = message.sp_address);
    message.endpoint !== undefined && (obj.endpoint = message.endpoint);
    message.description !== undefined && (obj.description = message.description ? Description.toJSON(message.description) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEditStorageProvider>, I>>(object: I): MsgEditStorageProvider {
    const message = createBaseMsgEditStorageProvider();
    message.sp_address = object.sp_address ?? "";
    message.endpoint = object.endpoint ?? "";
    message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
    return message;
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
  }

};

function createBaseMsgUpdateSpStoragePrice(): MsgUpdateSpStoragePrice {
  return {
    sp_address: "",
    read_price: "",
    free_read_quota: Long.UZERO,
    store_price: ""
  };
}

export const MsgUpdateSpStoragePrice = {
  encode(message: MsgUpdateSpStoragePrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sp_address !== "") {
      writer.uint32(10).string(message.sp_address);
    }

    if (message.read_price !== "") {
      writer.uint32(18).string(message.read_price);
    }

    if (!message.free_read_quota.isZero()) {
      writer.uint32(24).uint64(message.free_read_quota);
    }

    if (message.store_price !== "") {
      writer.uint32(34).string(message.store_price);
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
          message.sp_address = reader.string();
          break;

        case 2:
          message.read_price = reader.string();
          break;

        case 3:
          message.free_read_quota = (reader.uint64() as Long);
          break;

        case 4:
          message.store_price = reader.string();
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
      sp_address: isSet(object.sp_address) ? String(object.sp_address) : "",
      read_price: isSet(object.read_price) ? String(object.read_price) : "",
      free_read_quota: isSet(object.free_read_quota) ? Long.fromValue(object.free_read_quota) : Long.UZERO,
      store_price: isSet(object.store_price) ? String(object.store_price) : ""
    };
  },

  toJSON(message: MsgUpdateSpStoragePrice): unknown {
    const obj: any = {};
    message.sp_address !== undefined && (obj.sp_address = message.sp_address);
    message.read_price !== undefined && (obj.read_price = message.read_price);
    message.free_read_quota !== undefined && (obj.free_read_quota = (message.free_read_quota || Long.UZERO).toString());
    message.store_price !== undefined && (obj.store_price = message.store_price);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateSpStoragePrice>, I>>(object: I): MsgUpdateSpStoragePrice {
    const message = createBaseMsgUpdateSpStoragePrice();
    message.sp_address = object.sp_address ?? "";
    message.read_price = object.read_price ?? "";
    message.free_read_quota = object.free_read_quota !== undefined && object.free_read_quota !== null ? Long.fromValue(object.free_read_quota) : Long.UZERO;
    message.store_price = object.store_price ?? "";
    return message;
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