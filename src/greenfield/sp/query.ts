//@ts-nocheck
/* eslint-disable */
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { StorageProvider, StorageProviderSDKType, SpStoragePrice, SpStoragePriceSDKType, SecondarySpStorePrice, SecondarySpStorePriceSDKType, MaintenanceRecord, MaintenanceRecordSDKType } from "./types";
import { Long, DeepPartial, Exact, isSet, Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "greenfield.sp";
/** QueryParamsRequest is request type for the Query/Params RPC method. */

export interface QueryParamsRequest {}
/** QueryParamsRequest is request type for the Query/Params RPC method. */

export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */

export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */

export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
/** this line is used by starport scaffolding # 3 */

export interface QueryStorageProvidersRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/** this line is used by starport scaffolding # 3 */

export interface QueryStorageProvidersRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryStorageProvidersResponse {
  sps: StorageProvider[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponse;
}
export interface QueryStorageProvidersResponseSDKType {
  sps: StorageProviderSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetSpStoragePriceByTimeRequest {
  /** operator address of sp */
  spAddr: string;
  /** unix timestamp in seconds. If it's 0, it will return the latest price. */

  timestamp: Long;
}
export interface QueryGetSpStoragePriceByTimeRequestSDKType {
  sp_addr: string;
  timestamp: Long;
}
export interface QueryGetSpStoragePriceByTimeResponse {
  spStoragePrice?: SpStoragePrice;
}
export interface QueryGetSpStoragePriceByTimeResponseSDKType {
  sp_storage_price?: SpStoragePriceSDKType;
}
export interface QueryGetSecondarySpStorePriceByTimeRequest {
  /** unix timestamp in seconds. If it's 0, it will return the latest price. */
  timestamp: Long;
}
export interface QueryGetSecondarySpStorePriceByTimeRequestSDKType {
  timestamp: Long;
}
export interface QueryGetSecondarySpStorePriceByTimeResponse {
  secondarySpStorePrice?: SecondarySpStorePrice;
}
export interface QueryGetSecondarySpStorePriceByTimeResponseSDKType {
  secondary_sp_store_price?: SecondarySpStorePriceSDKType;
}
export interface QueryStorageProviderRequest {
  id: number;
}
export interface QueryStorageProviderRequestSDKType {
  id: number;
}
export interface QueryStorageProviderResponse {
  storageProvider?: StorageProvider;
}
export interface QueryStorageProviderResponseSDKType {
  storageProvider?: StorageProviderSDKType;
}
export interface QueryStorageProviderByOperatorAddressRequest {
  operatorAddress: string;
}
export interface QueryStorageProviderByOperatorAddressRequestSDKType {
  operator_address: string;
}
export interface QueryStorageProviderByOperatorAddressResponse {
  storageProvider?: StorageProvider;
}
export interface QueryStorageProviderByOperatorAddressResponseSDKType {
  storageProvider?: StorageProviderSDKType;
}
export interface QueryStorageProviderMaintenanceRecordsRequest {
  operatorAddress: string;
}
export interface QueryStorageProviderMaintenanceRecordsRequestSDKType {
  operator_address: string;
}
export interface QueryStorageProviderMaintenanceRecordsResponse {
  records: MaintenanceRecord[];
}
export interface QueryStorageProviderMaintenanceRecordsResponseSDKType {
  records: MaintenanceRecordSDKType[];
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();

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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },

  fromSDK(_: QueryParamsRequestSDKType): QueryParamsRequest {
    return {};
  },

  toSDK(_: QueryParamsRequest): QueryParamsRequestSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },

  fromSDK(object: QueryParamsResponseSDKType): QueryParamsResponse {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },

  toSDK(message: QueryParamsResponse): QueryParamsResponseSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  }

};

function createBaseQueryStorageProvidersRequest(): QueryStorageProvidersRequest {
  return {
    pagination: undefined
  };
}

export const QueryStorageProvidersRequest = {
  encode(message: QueryStorageProvidersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStorageProvidersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStorageProvidersRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryStorageProvidersRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryStorageProvidersRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryStorageProvidersRequest>, I>>(object: I): QueryStorageProvidersRequest {
    const message = createBaseQueryStorageProvidersRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: QueryStorageProvidersRequestSDKType): QueryStorageProvidersRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: QueryStorageProvidersRequest): QueryStorageProvidersRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  }

};

function createBaseQueryStorageProvidersResponse(): QueryStorageProvidersResponse {
  return {
    sps: [],
    pagination: undefined
  };
}

export const QueryStorageProvidersResponse = {
  encode(message: QueryStorageProvidersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.sps) {
      StorageProvider.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStorageProvidersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStorageProvidersResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sps.push(StorageProvider.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryStorageProvidersResponse {
    return {
      sps: Array.isArray(object?.sps) ? object.sps.map((e: any) => StorageProvider.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryStorageProvidersResponse): unknown {
    const obj: any = {};

    if (message.sps) {
      obj.sps = message.sps.map(e => e ? StorageProvider.toJSON(e) : undefined);
    } else {
      obj.sps = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryStorageProvidersResponse>, I>>(object: I): QueryStorageProvidersResponse {
    const message = createBaseQueryStorageProvidersResponse();
    message.sps = object.sps?.map(e => StorageProvider.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: QueryStorageProvidersResponseSDKType): QueryStorageProvidersResponse {
    return {
      sps: Array.isArray(object?.sps) ? object.sps.map((e: any) => StorageProvider.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: QueryStorageProvidersResponse): QueryStorageProvidersResponseSDKType {
    const obj: any = {};

    if (message.sps) {
      obj.sps = message.sps.map(e => e ? StorageProvider.toSDK(e) : undefined);
    } else {
      obj.sps = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  }

};

function createBaseQueryGetSpStoragePriceByTimeRequest(): QueryGetSpStoragePriceByTimeRequest {
  return {
    spAddr: "",
    timestamp: Long.ZERO
  };
}

export const QueryGetSpStoragePriceByTimeRequest = {
  encode(message: QueryGetSpStoragePriceByTimeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spAddr !== "") {
      writer.uint32(10).string(message.spAddr);
    }

    if (!message.timestamp.isZero()) {
      writer.uint32(16).int64(message.timestamp);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSpStoragePriceByTimeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSpStoragePriceByTimeRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.spAddr = reader.string();
          break;

        case 2:
          message.timestamp = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetSpStoragePriceByTimeRequest {
    return {
      spAddr: isSet(object.spAddr) ? String(object.spAddr) : "",
      timestamp: isSet(object.timestamp) ? Long.fromValue(object.timestamp) : Long.ZERO
    };
  },

  toJSON(message: QueryGetSpStoragePriceByTimeRequest): unknown {
    const obj: any = {};
    message.spAddr !== undefined && (obj.spAddr = message.spAddr);
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetSpStoragePriceByTimeRequest>, I>>(object: I): QueryGetSpStoragePriceByTimeRequest {
    const message = createBaseQueryGetSpStoragePriceByTimeRequest();
    message.spAddr = object.spAddr ?? "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.ZERO;
    return message;
  },

  fromSDK(object: QueryGetSpStoragePriceByTimeRequestSDKType): QueryGetSpStoragePriceByTimeRequest {
    return {
      spAddr: object?.sp_addr,
      timestamp: object?.timestamp
    };
  },

  toSDK(message: QueryGetSpStoragePriceByTimeRequest): QueryGetSpStoragePriceByTimeRequestSDKType {
    const obj: any = {};
    obj.sp_addr = message.spAddr;
    obj.timestamp = message.timestamp;
    return obj;
  }

};

function createBaseQueryGetSpStoragePriceByTimeResponse(): QueryGetSpStoragePriceByTimeResponse {
  return {
    spStoragePrice: undefined
  };
}

export const QueryGetSpStoragePriceByTimeResponse = {
  encode(message: QueryGetSpStoragePriceByTimeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spStoragePrice !== undefined) {
      SpStoragePrice.encode(message.spStoragePrice, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSpStoragePriceByTimeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSpStoragePriceByTimeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.spStoragePrice = SpStoragePrice.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetSpStoragePriceByTimeResponse {
    return {
      spStoragePrice: isSet(object.spStoragePrice) ? SpStoragePrice.fromJSON(object.spStoragePrice) : undefined
    };
  },

  toJSON(message: QueryGetSpStoragePriceByTimeResponse): unknown {
    const obj: any = {};
    message.spStoragePrice !== undefined && (obj.spStoragePrice = message.spStoragePrice ? SpStoragePrice.toJSON(message.spStoragePrice) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetSpStoragePriceByTimeResponse>, I>>(object: I): QueryGetSpStoragePriceByTimeResponse {
    const message = createBaseQueryGetSpStoragePriceByTimeResponse();
    message.spStoragePrice = object.spStoragePrice !== undefined && object.spStoragePrice !== null ? SpStoragePrice.fromPartial(object.spStoragePrice) : undefined;
    return message;
  },

  fromSDK(object: QueryGetSpStoragePriceByTimeResponseSDKType): QueryGetSpStoragePriceByTimeResponse {
    return {
      spStoragePrice: object.sp_storage_price ? SpStoragePrice.fromSDK(object.sp_storage_price) : undefined
    };
  },

  toSDK(message: QueryGetSpStoragePriceByTimeResponse): QueryGetSpStoragePriceByTimeResponseSDKType {
    const obj: any = {};
    message.spStoragePrice !== undefined && (obj.sp_storage_price = message.spStoragePrice ? SpStoragePrice.toSDK(message.spStoragePrice) : undefined);
    return obj;
  }

};

function createBaseQueryGetSecondarySpStorePriceByTimeRequest(): QueryGetSecondarySpStorePriceByTimeRequest {
  return {
    timestamp: Long.ZERO
  };
}

export const QueryGetSecondarySpStorePriceByTimeRequest = {
  encode(message: QueryGetSecondarySpStorePriceByTimeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.timestamp.isZero()) {
      writer.uint32(8).int64(message.timestamp);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSecondarySpStorePriceByTimeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSecondarySpStorePriceByTimeRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.timestamp = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetSecondarySpStorePriceByTimeRequest {
    return {
      timestamp: isSet(object.timestamp) ? Long.fromValue(object.timestamp) : Long.ZERO
    };
  },

  toJSON(message: QueryGetSecondarySpStorePriceByTimeRequest): unknown {
    const obj: any = {};
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetSecondarySpStorePriceByTimeRequest>, I>>(object: I): QueryGetSecondarySpStorePriceByTimeRequest {
    const message = createBaseQueryGetSecondarySpStorePriceByTimeRequest();
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.ZERO;
    return message;
  },

  fromSDK(object: QueryGetSecondarySpStorePriceByTimeRequestSDKType): QueryGetSecondarySpStorePriceByTimeRequest {
    return {
      timestamp: object?.timestamp
    };
  },

  toSDK(message: QueryGetSecondarySpStorePriceByTimeRequest): QueryGetSecondarySpStorePriceByTimeRequestSDKType {
    const obj: any = {};
    obj.timestamp = message.timestamp;
    return obj;
  }

};

function createBaseQueryGetSecondarySpStorePriceByTimeResponse(): QueryGetSecondarySpStorePriceByTimeResponse {
  return {
    secondarySpStorePrice: undefined
  };
}

export const QueryGetSecondarySpStorePriceByTimeResponse = {
  encode(message: QueryGetSecondarySpStorePriceByTimeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.secondarySpStorePrice !== undefined) {
      SecondarySpStorePrice.encode(message.secondarySpStorePrice, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSecondarySpStorePriceByTimeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSecondarySpStorePriceByTimeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.secondarySpStorePrice = SecondarySpStorePrice.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetSecondarySpStorePriceByTimeResponse {
    return {
      secondarySpStorePrice: isSet(object.secondarySpStorePrice) ? SecondarySpStorePrice.fromJSON(object.secondarySpStorePrice) : undefined
    };
  },

  toJSON(message: QueryGetSecondarySpStorePriceByTimeResponse): unknown {
    const obj: any = {};
    message.secondarySpStorePrice !== undefined && (obj.secondarySpStorePrice = message.secondarySpStorePrice ? SecondarySpStorePrice.toJSON(message.secondarySpStorePrice) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetSecondarySpStorePriceByTimeResponse>, I>>(object: I): QueryGetSecondarySpStorePriceByTimeResponse {
    const message = createBaseQueryGetSecondarySpStorePriceByTimeResponse();
    message.secondarySpStorePrice = object.secondarySpStorePrice !== undefined && object.secondarySpStorePrice !== null ? SecondarySpStorePrice.fromPartial(object.secondarySpStorePrice) : undefined;
    return message;
  },

  fromSDK(object: QueryGetSecondarySpStorePriceByTimeResponseSDKType): QueryGetSecondarySpStorePriceByTimeResponse {
    return {
      secondarySpStorePrice: object.secondary_sp_store_price ? SecondarySpStorePrice.fromSDK(object.secondary_sp_store_price) : undefined
    };
  },

  toSDK(message: QueryGetSecondarySpStorePriceByTimeResponse): QueryGetSecondarySpStorePriceByTimeResponseSDKType {
    const obj: any = {};
    message.secondarySpStorePrice !== undefined && (obj.secondary_sp_store_price = message.secondarySpStorePrice ? SecondarySpStorePrice.toSDK(message.secondarySpStorePrice) : undefined);
    return obj;
  }

};

function createBaseQueryStorageProviderRequest(): QueryStorageProviderRequest {
  return {
    id: 0
  };
}

export const QueryStorageProviderRequest = {
  encode(message: QueryStorageProviderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStorageProviderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStorageProviderRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryStorageProviderRequest {
    return {
      id: isSet(object.id) ? Number(object.id) : 0
    };
  },

  toJSON(message: QueryStorageProviderRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryStorageProviderRequest>, I>>(object: I): QueryStorageProviderRequest {
    const message = createBaseQueryStorageProviderRequest();
    message.id = object.id ?? 0;
    return message;
  },

  fromSDK(object: QueryStorageProviderRequestSDKType): QueryStorageProviderRequest {
    return {
      id: object?.id
    };
  },

  toSDK(message: QueryStorageProviderRequest): QueryStorageProviderRequestSDKType {
    const obj: any = {};
    obj.id = message.id;
    return obj;
  }

};

function createBaseQueryStorageProviderResponse(): QueryStorageProviderResponse {
  return {
    storageProvider: undefined
  };
}

export const QueryStorageProviderResponse = {
  encode(message: QueryStorageProviderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storageProvider !== undefined) {
      StorageProvider.encode(message.storageProvider, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStorageProviderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStorageProviderResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.storageProvider = StorageProvider.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryStorageProviderResponse {
    return {
      storageProvider: isSet(object.storageProvider) ? StorageProvider.fromJSON(object.storageProvider) : undefined
    };
  },

  toJSON(message: QueryStorageProviderResponse): unknown {
    const obj: any = {};
    message.storageProvider !== undefined && (obj.storageProvider = message.storageProvider ? StorageProvider.toJSON(message.storageProvider) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryStorageProviderResponse>, I>>(object: I): QueryStorageProviderResponse {
    const message = createBaseQueryStorageProviderResponse();
    message.storageProvider = object.storageProvider !== undefined && object.storageProvider !== null ? StorageProvider.fromPartial(object.storageProvider) : undefined;
    return message;
  },

  fromSDK(object: QueryStorageProviderResponseSDKType): QueryStorageProviderResponse {
    return {
      storageProvider: object.storageProvider ? StorageProvider.fromSDK(object.storageProvider) : undefined
    };
  },

  toSDK(message: QueryStorageProviderResponse): QueryStorageProviderResponseSDKType {
    const obj: any = {};
    message.storageProvider !== undefined && (obj.storageProvider = message.storageProvider ? StorageProvider.toSDK(message.storageProvider) : undefined);
    return obj;
  }

};

function createBaseQueryStorageProviderByOperatorAddressRequest(): QueryStorageProviderByOperatorAddressRequest {
  return {
    operatorAddress: ""
  };
}

export const QueryStorageProviderByOperatorAddressRequest = {
  encode(message: QueryStorageProviderByOperatorAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStorageProviderByOperatorAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStorageProviderByOperatorAddressRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.operatorAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryStorageProviderByOperatorAddressRequest {
    return {
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : ""
    };
  },

  toJSON(message: QueryStorageProviderByOperatorAddressRequest): unknown {
    const obj: any = {};
    message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryStorageProviderByOperatorAddressRequest>, I>>(object: I): QueryStorageProviderByOperatorAddressRequest {
    const message = createBaseQueryStorageProviderByOperatorAddressRequest();
    message.operatorAddress = object.operatorAddress ?? "";
    return message;
  },

  fromSDK(object: QueryStorageProviderByOperatorAddressRequestSDKType): QueryStorageProviderByOperatorAddressRequest {
    return {
      operatorAddress: object?.operator_address
    };
  },

  toSDK(message: QueryStorageProviderByOperatorAddressRequest): QueryStorageProviderByOperatorAddressRequestSDKType {
    const obj: any = {};
    obj.operator_address = message.operatorAddress;
    return obj;
  }

};

function createBaseQueryStorageProviderByOperatorAddressResponse(): QueryStorageProviderByOperatorAddressResponse {
  return {
    storageProvider: undefined
  };
}

export const QueryStorageProviderByOperatorAddressResponse = {
  encode(message: QueryStorageProviderByOperatorAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storageProvider !== undefined) {
      StorageProvider.encode(message.storageProvider, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStorageProviderByOperatorAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStorageProviderByOperatorAddressResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.storageProvider = StorageProvider.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryStorageProviderByOperatorAddressResponse {
    return {
      storageProvider: isSet(object.storageProvider) ? StorageProvider.fromJSON(object.storageProvider) : undefined
    };
  },

  toJSON(message: QueryStorageProviderByOperatorAddressResponse): unknown {
    const obj: any = {};
    message.storageProvider !== undefined && (obj.storageProvider = message.storageProvider ? StorageProvider.toJSON(message.storageProvider) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryStorageProviderByOperatorAddressResponse>, I>>(object: I): QueryStorageProviderByOperatorAddressResponse {
    const message = createBaseQueryStorageProviderByOperatorAddressResponse();
    message.storageProvider = object.storageProvider !== undefined && object.storageProvider !== null ? StorageProvider.fromPartial(object.storageProvider) : undefined;
    return message;
  },

  fromSDK(object: QueryStorageProviderByOperatorAddressResponseSDKType): QueryStorageProviderByOperatorAddressResponse {
    return {
      storageProvider: object.storageProvider ? StorageProvider.fromSDK(object.storageProvider) : undefined
    };
  },

  toSDK(message: QueryStorageProviderByOperatorAddressResponse): QueryStorageProviderByOperatorAddressResponseSDKType {
    const obj: any = {};
    message.storageProvider !== undefined && (obj.storageProvider = message.storageProvider ? StorageProvider.toSDK(message.storageProvider) : undefined);
    return obj;
  }

};

function createBaseQueryStorageProviderMaintenanceRecordsRequest(): QueryStorageProviderMaintenanceRecordsRequest {
  return {
    operatorAddress: ""
  };
}

export const QueryStorageProviderMaintenanceRecordsRequest = {
  encode(message: QueryStorageProviderMaintenanceRecordsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStorageProviderMaintenanceRecordsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStorageProviderMaintenanceRecordsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.operatorAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryStorageProviderMaintenanceRecordsRequest {
    return {
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : ""
    };
  },

  toJSON(message: QueryStorageProviderMaintenanceRecordsRequest): unknown {
    const obj: any = {};
    message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryStorageProviderMaintenanceRecordsRequest>, I>>(object: I): QueryStorageProviderMaintenanceRecordsRequest {
    const message = createBaseQueryStorageProviderMaintenanceRecordsRequest();
    message.operatorAddress = object.operatorAddress ?? "";
    return message;
  },

  fromSDK(object: QueryStorageProviderMaintenanceRecordsRequestSDKType): QueryStorageProviderMaintenanceRecordsRequest {
    return {
      operatorAddress: object?.operator_address
    };
  },

  toSDK(message: QueryStorageProviderMaintenanceRecordsRequest): QueryStorageProviderMaintenanceRecordsRequestSDKType {
    const obj: any = {};
    obj.operator_address = message.operatorAddress;
    return obj;
  }

};

function createBaseQueryStorageProviderMaintenanceRecordsResponse(): QueryStorageProviderMaintenanceRecordsResponse {
  return {
    records: []
  };
}

export const QueryStorageProviderMaintenanceRecordsResponse = {
  encode(message: QueryStorageProviderMaintenanceRecordsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.records) {
      MaintenanceRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStorageProviderMaintenanceRecordsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStorageProviderMaintenanceRecordsResponse();

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

  fromJSON(object: any): QueryStorageProviderMaintenanceRecordsResponse {
    return {
      records: Array.isArray(object?.records) ? object.records.map((e: any) => MaintenanceRecord.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryStorageProviderMaintenanceRecordsResponse): unknown {
    const obj: any = {};

    if (message.records) {
      obj.records = message.records.map(e => e ? MaintenanceRecord.toJSON(e) : undefined);
    } else {
      obj.records = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryStorageProviderMaintenanceRecordsResponse>, I>>(object: I): QueryStorageProviderMaintenanceRecordsResponse {
    const message = createBaseQueryStorageProviderMaintenanceRecordsResponse();
    message.records = object.records?.map(e => MaintenanceRecord.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: QueryStorageProviderMaintenanceRecordsResponseSDKType): QueryStorageProviderMaintenanceRecordsResponse {
    return {
      records: Array.isArray(object?.records) ? object.records.map((e: any) => MaintenanceRecord.fromSDK(e)) : []
    };
  },

  toSDK(message: QueryStorageProviderMaintenanceRecordsResponse): QueryStorageProviderMaintenanceRecordsResponseSDKType {
    const obj: any = {};

    if (message.records) {
      obj.records = message.records.map(e => e ? MaintenanceRecord.toSDK(e) : undefined);
    } else {
      obj.records = [];
    }

    return obj;
  }

};
/** Query defines the gRPC querier service. */

export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of GetStorageProviders items. */

  StorageProviders(request?: QueryStorageProvidersRequest): Promise<QueryStorageProvidersResponse>;
  /** get storage price of specific sp and time */

  QueryGetSpStoragePriceByTime(request: QueryGetSpStoragePriceByTimeRequest): Promise<QueryGetSpStoragePriceByTimeResponse>;
  /** get secondary store price by time */

  QueryGetSecondarySpStorePriceByTime(request: QueryGetSecondarySpStorePriceByTimeRequest): Promise<QueryGetSecondarySpStorePriceByTimeResponse>;
  /** Queries a storage provider with specify id */

  StorageProvider(request: QueryStorageProviderRequest): Promise<QueryStorageProviderResponse>;
  /** Queries a StorageProvider by specify operator address. */

  StorageProviderByOperatorAddress(request: QueryStorageProviderByOperatorAddressRequest): Promise<QueryStorageProviderByOperatorAddressResponse>;
  /** Queries a StorageProvider by specify operator address. */

  StorageProviderMaintenanceRecordsByOperatorAddress(request: QueryStorageProviderMaintenanceRecordsRequest): Promise<QueryStorageProviderMaintenanceRecordsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.StorageProviders = this.StorageProviders.bind(this);
    this.QueryGetSpStoragePriceByTime = this.QueryGetSpStoragePriceByTime.bind(this);
    this.QueryGetSecondarySpStorePriceByTime = this.QueryGetSecondarySpStorePriceByTime.bind(this);
    this.StorageProvider = this.StorageProvider.bind(this);
    this.StorageProviderByOperatorAddress = this.StorageProviderByOperatorAddress.bind(this);
    this.StorageProviderMaintenanceRecordsByOperatorAddress = this.StorageProviderMaintenanceRecordsByOperatorAddress.bind(this);
  }

  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.sp.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  StorageProviders(request: QueryStorageProvidersRequest = {
    pagination: undefined
  }): Promise<QueryStorageProvidersResponse> {
    const data = QueryStorageProvidersRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.sp.Query", "StorageProviders", data);
    return promise.then(data => QueryStorageProvidersResponse.decode(new _m0.Reader(data)));
  }

  QueryGetSpStoragePriceByTime(request: QueryGetSpStoragePriceByTimeRequest): Promise<QueryGetSpStoragePriceByTimeResponse> {
    const data = QueryGetSpStoragePriceByTimeRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.sp.Query", "QueryGetSpStoragePriceByTime", data);
    return promise.then(data => QueryGetSpStoragePriceByTimeResponse.decode(new _m0.Reader(data)));
  }

  QueryGetSecondarySpStorePriceByTime(request: QueryGetSecondarySpStorePriceByTimeRequest): Promise<QueryGetSecondarySpStorePriceByTimeResponse> {
    const data = QueryGetSecondarySpStorePriceByTimeRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.sp.Query", "QueryGetSecondarySpStorePriceByTime", data);
    return promise.then(data => QueryGetSecondarySpStorePriceByTimeResponse.decode(new _m0.Reader(data)));
  }

  StorageProvider(request: QueryStorageProviderRequest): Promise<QueryStorageProviderResponse> {
    const data = QueryStorageProviderRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.sp.Query", "StorageProvider", data);
    return promise.then(data => QueryStorageProviderResponse.decode(new _m0.Reader(data)));
  }

  StorageProviderByOperatorAddress(request: QueryStorageProviderByOperatorAddressRequest): Promise<QueryStorageProviderByOperatorAddressResponse> {
    const data = QueryStorageProviderByOperatorAddressRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.sp.Query", "StorageProviderByOperatorAddress", data);
    return promise.then(data => QueryStorageProviderByOperatorAddressResponse.decode(new _m0.Reader(data)));
  }

  StorageProviderMaintenanceRecordsByOperatorAddress(request: QueryStorageProviderMaintenanceRecordsRequest): Promise<QueryStorageProviderMaintenanceRecordsResponse> {
    const data = QueryStorageProviderMaintenanceRecordsRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.sp.Query", "StorageProviderMaintenanceRecordsByOperatorAddress", data);
    return promise.then(data => QueryStorageProviderMaintenanceRecordsResponse.decode(new _m0.Reader(data)));
  }

}