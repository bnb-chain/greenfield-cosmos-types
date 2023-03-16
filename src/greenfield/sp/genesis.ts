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

  storage_providers: StorageProvider[];
  sp_storage_price_list: SpStoragePrice[];
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    storage_providers: [],
    sp_storage_price_list: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.storage_providers) {
      StorageProvider.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.sp_storage_price_list) {
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
          message.storage_providers.push(StorageProvider.decode(reader, reader.uint32()));
          break;

        case 3:
          message.sp_storage_price_list.push(SpStoragePrice.decode(reader, reader.uint32()));
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
      storage_providers: Array.isArray(object?.storage_providers) ? object.storage_providers.map((e: any) => StorageProvider.fromJSON(e)) : [],
      sp_storage_price_list: Array.isArray(object?.sp_storage_price_list) ? object.sp_storage_price_list.map((e: any) => SpStoragePrice.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);

    if (message.storage_providers) {
      obj.storage_providers = message.storage_providers.map(e => e ? StorageProvider.toJSON(e) : undefined);
    } else {
      obj.storage_providers = [];
    }

    if (message.sp_storage_price_list) {
      obj.sp_storage_price_list = message.sp_storage_price_list.map(e => e ? SpStoragePrice.toJSON(e) : undefined);
    } else {
      obj.sp_storage_price_list = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.storage_providers = object.storage_providers?.map(e => StorageProvider.fromPartial(e)) || [];
    message.sp_storage_price_list = object.sp_storage_price_list?.map(e => SpStoragePrice.fromPartial(e)) || [];
    return message;
  }

};