/* eslint-disable */
import { Params } from "./params";
import { StorageProvider, SpStoragePrice } from "./types";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../helpers";
export const protobufPackage = "bnbchain.greenfield.sp";
/** GenesisState defines the sp module's genesis state. */

export interface GenesisState {
  params?: Params;
  /** this used by starport scaffolding # genesis/proto/state */

  storageProviders: StorageProvider[];
  spStoragePriceList: SpStoragePrice[];
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    storageProviders: [],
    spStoragePriceList: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.storageProviders) {
      StorageProvider.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.spStoragePriceList) {
      SpStoragePrice.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.storageProviders.push(StorageProvider.decode(reader, reader.uint32()));
          break;

        case 3:
          message.spStoragePriceList.push(SpStoragePrice.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      storageProviders: Array.isArray(object?.storageProviders) ? object.storageProviders.map((e: any) => StorageProvider.fromJSON(e)) : [],
      spStoragePriceList: Array.isArray(object?.spStoragePriceList) ? object.spStoragePriceList.map((e: any) => SpStoragePrice.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);

    if (message.storageProviders) {
      obj.storageProviders = message.storageProviders.map(e => e ? StorageProvider.toJSON(e) : undefined);
    } else {
      obj.storageProviders = [];
    }

    if (message.spStoragePriceList) {
      obj.spStoragePriceList = message.spStoragePriceList.map(e => e ? SpStoragePrice.toJSON(e) : undefined);
    } else {
      obj.spStoragePriceList = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.storageProviders = object.storageProviders?.map(e => StorageProvider.fromPartial(e)) || [];
    message.spStoragePriceList = object.spStoragePriceList?.map(e => SpStoragePrice.fromPartial(e)) || [];
    return message;
  }

};