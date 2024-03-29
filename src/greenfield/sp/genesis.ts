//@ts-nocheck
/* eslint-disable */
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { StorageProvider, StorageProviderAmino, StorageProviderSDKType, SpStoragePrice, SpStoragePriceAmino, SpStoragePriceSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../helpers";
export const protobufPackage = "greenfield.sp";
/** GenesisState defines the sp module's genesis state. */
export interface GenesisState {
  params: Params;
  /** this used by starport scaffolding # genesis/proto/state */
  storageProviders: StorageProvider[];
  spStoragePriceList: SpStoragePrice[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/greenfield.sp.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the sp module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  /** this used by starport scaffolding # genesis/proto/state */
  storage_providers?: StorageProviderAmino[];
  sp_storage_price_list?: SpStoragePriceAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/greenfield.sp.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the sp module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  storage_providers: StorageProviderSDKType[];
  sp_storage_price_list: SpStoragePriceSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    storageProviders: [],
    spStoragePriceList: []
  };
}
export const GenesisState = {
  typeUrl: "/greenfield.sp.GenesisState",
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
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined,
      storageProviders: Array.isArray(object?.storage_providers) ? object.storage_providers.map((e: any) => StorageProvider.fromSDK(e)) : [],
      spStoragePriceList: Array.isArray(object?.sp_storage_price_list) ? object.sp_storage_price_list.map((e: any) => SpStoragePrice.fromSDK(e)) : []
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    if (message.storageProviders) {
      obj.storage_providers = message.storageProviders.map(e => e ? StorageProvider.toSDK(e) : undefined);
    } else {
      obj.storage_providers = [];
    }
    if (message.spStoragePriceList) {
      obj.sp_storage_price_list = message.spStoragePriceList.map(e => e ? SpStoragePrice.toSDK(e) : undefined);
    } else {
      obj.sp_storage_price_list = [];
    }
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.storageProviders = object.storage_providers?.map(e => StorageProvider.fromAmino(e)) || [];
    message.spStoragePriceList = object.sp_storage_price_list?.map(e => SpStoragePrice.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.storageProviders) {
      obj.storage_providers = message.storageProviders.map(e => e ? StorageProvider.toAmino(e) : undefined);
    } else {
      obj.storage_providers = [];
    }
    if (message.spStoragePriceList) {
      obj.sp_storage_price_list = message.spStoragePriceList.map(e => e ? SpStoragePrice.toAmino(e) : undefined);
    } else {
      obj.sp_storage_price_list = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/greenfield.sp.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};