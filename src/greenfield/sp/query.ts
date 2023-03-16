/* eslint-disable */
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { StorageProvider, SpStoragePrice, SecondarySpStorePrice } from "./types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Exact, isSet, Long, Rpc } from "../../helpers";
export const protobufPackage = "bnbchain.greenfield.sp";
/** QueryParamsRequest is request type for the Query/Params RPC method. */

export interface QueryParamsRequest {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */

export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}
/** this line is used by starport scaffolding # 3 */

export interface QueryStorageProvidersRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryStorageProvidersResponse {
  sps: StorageProvider[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponse;
}
export interface QueryGetSpStoragePriceByTimeRequest {
  sp_addr: string;
  timestamp: Long;
}
export interface QueryGetSpStoragePriceByTimeResponse {
  sp_storage_price?: SpStoragePrice;
}
export interface QueryGetSecondarySpStorePriceByTimeRequest {
  timestamp: Long;
}
export interface QueryGetSecondarySpStorePriceByTimeResponse {
  secondary_sp_store_price?: SecondarySpStorePrice;
}
export interface QueryStorageProviderRequest {
  spAddress: string;
}
export interface QueryStorageProviderResponse {
  storageProvider?: StorageProvider;
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
  }

};

function createBaseQueryGetSpStoragePriceByTimeRequest(): QueryGetSpStoragePriceByTimeRequest {
  return {
    sp_addr: "",
    timestamp: Long.ZERO
  };
}

export const QueryGetSpStoragePriceByTimeRequest = {
  encode(message: QueryGetSpStoragePriceByTimeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sp_addr !== "") {
      writer.uint32(10).string(message.sp_addr);
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
          message.sp_addr = reader.string();
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
      sp_addr: isSet(object.sp_addr) ? String(object.sp_addr) : "",
      timestamp: isSet(object.timestamp) ? Long.fromValue(object.timestamp) : Long.ZERO
    };
  },

  toJSON(message: QueryGetSpStoragePriceByTimeRequest): unknown {
    const obj: any = {};
    message.sp_addr !== undefined && (obj.sp_addr = message.sp_addr);
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetSpStoragePriceByTimeRequest>, I>>(object: I): QueryGetSpStoragePriceByTimeRequest {
    const message = createBaseQueryGetSpStoragePriceByTimeRequest();
    message.sp_addr = object.sp_addr ?? "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.ZERO;
    return message;
  }

};

function createBaseQueryGetSpStoragePriceByTimeResponse(): QueryGetSpStoragePriceByTimeResponse {
  return {
    sp_storage_price: undefined
  };
}

export const QueryGetSpStoragePriceByTimeResponse = {
  encode(message: QueryGetSpStoragePriceByTimeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sp_storage_price !== undefined) {
      SpStoragePrice.encode(message.sp_storage_price, writer.uint32(10).fork()).ldelim();
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
          message.sp_storage_price = SpStoragePrice.decode(reader, reader.uint32());
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
      sp_storage_price: isSet(object.sp_storage_price) ? SpStoragePrice.fromJSON(object.sp_storage_price) : undefined
    };
  },

  toJSON(message: QueryGetSpStoragePriceByTimeResponse): unknown {
    const obj: any = {};
    message.sp_storage_price !== undefined && (obj.sp_storage_price = message.sp_storage_price ? SpStoragePrice.toJSON(message.sp_storage_price) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetSpStoragePriceByTimeResponse>, I>>(object: I): QueryGetSpStoragePriceByTimeResponse {
    const message = createBaseQueryGetSpStoragePriceByTimeResponse();
    message.sp_storage_price = object.sp_storage_price !== undefined && object.sp_storage_price !== null ? SpStoragePrice.fromPartial(object.sp_storage_price) : undefined;
    return message;
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
  }

};

function createBaseQueryGetSecondarySpStorePriceByTimeResponse(): QueryGetSecondarySpStorePriceByTimeResponse {
  return {
    secondary_sp_store_price: undefined
  };
}

export const QueryGetSecondarySpStorePriceByTimeResponse = {
  encode(message: QueryGetSecondarySpStorePriceByTimeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.secondary_sp_store_price !== undefined) {
      SecondarySpStorePrice.encode(message.secondary_sp_store_price, writer.uint32(10).fork()).ldelim();
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
          message.secondary_sp_store_price = SecondarySpStorePrice.decode(reader, reader.uint32());
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
      secondary_sp_store_price: isSet(object.secondary_sp_store_price) ? SecondarySpStorePrice.fromJSON(object.secondary_sp_store_price) : undefined
    };
  },

  toJSON(message: QueryGetSecondarySpStorePriceByTimeResponse): unknown {
    const obj: any = {};
    message.secondary_sp_store_price !== undefined && (obj.secondary_sp_store_price = message.secondary_sp_store_price ? SecondarySpStorePrice.toJSON(message.secondary_sp_store_price) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetSecondarySpStorePriceByTimeResponse>, I>>(object: I): QueryGetSecondarySpStorePriceByTimeResponse {
    const message = createBaseQueryGetSecondarySpStorePriceByTimeResponse();
    message.secondary_sp_store_price = object.secondary_sp_store_price !== undefined && object.secondary_sp_store_price !== null ? SecondarySpStorePrice.fromPartial(object.secondary_sp_store_price) : undefined;
    return message;
  }

};

function createBaseQueryStorageProviderRequest(): QueryStorageProviderRequest {
  return {
    spAddress: ""
  };
}

export const QueryStorageProviderRequest = {
  encode(message: QueryStorageProviderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spAddress !== "") {
      writer.uint32(10).string(message.spAddress);
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
          message.spAddress = reader.string();
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
      spAddress: isSet(object.spAddress) ? String(object.spAddress) : ""
    };
  },

  toJSON(message: QueryStorageProviderRequest): unknown {
    const obj: any = {};
    message.spAddress !== undefined && (obj.spAddress = message.spAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryStorageProviderRequest>, I>>(object: I): QueryStorageProviderRequest {
    const message = createBaseQueryStorageProviderRequest();
    message.spAddress = object.spAddress ?? "";
    return message;
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
  }

};
/** Query defines the gRPC querier service. */

export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of GetStorageProviders items. */

  StorageProviders(request?: QueryStorageProvidersRequest): Promise<QueryStorageProvidersResponse>;
  QueryGetSpStoragePriceByTime(request: QueryGetSpStoragePriceByTimeRequest): Promise<QueryGetSpStoragePriceByTimeResponse>;
  QueryGetSecondarySpStorePriceByTime(request: QueryGetSecondarySpStorePriceByTimeRequest): Promise<QueryGetSecondarySpStorePriceByTimeResponse>;
  /** Queries a storage provider with specify address */

  StorageProvider(request: QueryStorageProviderRequest): Promise<QueryStorageProviderResponse>;
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
  }

  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.sp.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  StorageProviders(request: QueryStorageProvidersRequest = {
    pagination: undefined
  }): Promise<QueryStorageProvidersResponse> {
    const data = QueryStorageProvidersRequest.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.sp.Query", "StorageProviders", data);
    return promise.then(data => QueryStorageProvidersResponse.decode(new _m0.Reader(data)));
  }

  QueryGetSpStoragePriceByTime(request: QueryGetSpStoragePriceByTimeRequest): Promise<QueryGetSpStoragePriceByTimeResponse> {
    const data = QueryGetSpStoragePriceByTimeRequest.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.sp.Query", "QueryGetSpStoragePriceByTime", data);
    return promise.then(data => QueryGetSpStoragePriceByTimeResponse.decode(new _m0.Reader(data)));
  }

  QueryGetSecondarySpStorePriceByTime(request: QueryGetSecondarySpStorePriceByTimeRequest): Promise<QueryGetSecondarySpStorePriceByTimeResponse> {
    const data = QueryGetSecondarySpStorePriceByTimeRequest.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.sp.Query", "QueryGetSecondarySpStorePriceByTime", data);
    return promise.then(data => QueryGetSecondarySpStorePriceByTimeResponse.decode(new _m0.Reader(data)));
  }

  StorageProvider(request: QueryStorageProviderRequest): Promise<QueryStorageProviderResponse> {
    const data = QueryStorageProviderRequest.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.sp.Query", "StorageProvider", data);
    return promise.then(data => QueryStorageProviderResponse.decode(new _m0.Reader(data)));
  }

}