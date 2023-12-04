//@ts-nocheck
/* eslint-disable */
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { StorageProvider, StorageProviderSDKType, SpStoragePrice, SpStoragePriceSDKType, GlobalSpStorePrice, GlobalSpStorePriceSDKType, MaintenanceRecord, MaintenanceRecordSDKType } from "./types";
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
  params: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryStorageProvidersRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
export interface QueryStorageProvidersRequestSDKType {
  pagination: PageRequestSDKType;
}
export interface QueryStorageProvidersResponse {
  sps: StorageProvider[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
export interface QueryStorageProvidersResponseSDKType {
  sps: StorageProviderSDKType[];
  pagination: PageResponseSDKType;
}
export interface QuerySpStoragePriceRequest {
  /** operator address of sp */
  spAddr: string;
}
export interface QuerySpStoragePriceRequestSDKType {
  sp_addr: string;
}
export interface QuerySpStoragePriceResponse {
  spStoragePrice: SpStoragePrice;
}
export interface QuerySpStoragePriceResponseSDKType {
  sp_storage_price: SpStoragePriceSDKType;
}
export interface QueryGlobalSpStorePriceByTimeRequest {
  /** unix timestamp in seconds. If it's 0, it will return the latest price. */
  timestamp: Long;
}
export interface QueryGlobalSpStorePriceByTimeRequestSDKType {
  timestamp: Long;
}
export interface QueryGlobalSpStorePriceByTimeResponse {
  globalSpStorePrice: GlobalSpStorePrice;
}
export interface QueryGlobalSpStorePriceByTimeResponseSDKType {
  global_sp_store_price: GlobalSpStorePriceSDKType;
}
export interface QueryStorageProviderRequest {
  id: number;
}
export interface QueryStorageProviderRequestSDKType {
  id: number;
}
export interface QueryStorageProviderResponse {
  storageProvider: StorageProvider;
}
export interface QueryStorageProviderResponseSDKType {
  storageProvider: StorageProviderSDKType;
}
export interface QueryStorageProviderByOperatorAddressRequest {
  operatorAddress: string;
}
export interface QueryStorageProviderByOperatorAddressRequestSDKType {
  operator_address: string;
}
export interface QueryStorageProviderByOperatorAddressResponse {
  storageProvider: StorageProvider;
}
export interface QueryStorageProviderByOperatorAddressResponseSDKType {
  storageProvider: StorageProviderSDKType;
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
    params: Params.fromPartial({})
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
    pagination: PageRequest.fromPartial({})
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
    pagination: PageResponse.fromPartial({})
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
function createBaseQuerySpStoragePriceRequest(): QuerySpStoragePriceRequest {
  return {
    spAddr: ""
  };
}
export const QuerySpStoragePriceRequest = {
  encode(message: QuerySpStoragePriceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spAddr !== "") {
      writer.uint32(10).string(message.spAddr);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpStoragePriceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpStoragePriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySpStoragePriceRequest {
    return {
      spAddr: isSet(object.spAddr) ? String(object.spAddr) : ""
    };
  },
  toJSON(message: QuerySpStoragePriceRequest): unknown {
    const obj: any = {};
    message.spAddr !== undefined && (obj.spAddr = message.spAddr);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySpStoragePriceRequest>, I>>(object: I): QuerySpStoragePriceRequest {
    const message = createBaseQuerySpStoragePriceRequest();
    message.spAddr = object.spAddr ?? "";
    return message;
  },
  fromSDK(object: QuerySpStoragePriceRequestSDKType): QuerySpStoragePriceRequest {
    return {
      spAddr: object?.sp_addr
    };
  },
  toSDK(message: QuerySpStoragePriceRequest): QuerySpStoragePriceRequestSDKType {
    const obj: any = {};
    obj.sp_addr = message.spAddr;
    return obj;
  }
};
function createBaseQuerySpStoragePriceResponse(): QuerySpStoragePriceResponse {
  return {
    spStoragePrice: SpStoragePrice.fromPartial({})
  };
}
export const QuerySpStoragePriceResponse = {
  encode(message: QuerySpStoragePriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spStoragePrice !== undefined) {
      SpStoragePrice.encode(message.spStoragePrice, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpStoragePriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpStoragePriceResponse();
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
  fromJSON(object: any): QuerySpStoragePriceResponse {
    return {
      spStoragePrice: isSet(object.spStoragePrice) ? SpStoragePrice.fromJSON(object.spStoragePrice) : undefined
    };
  },
  toJSON(message: QuerySpStoragePriceResponse): unknown {
    const obj: any = {};
    message.spStoragePrice !== undefined && (obj.spStoragePrice = message.spStoragePrice ? SpStoragePrice.toJSON(message.spStoragePrice) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySpStoragePriceResponse>, I>>(object: I): QuerySpStoragePriceResponse {
    const message = createBaseQuerySpStoragePriceResponse();
    message.spStoragePrice = object.spStoragePrice !== undefined && object.spStoragePrice !== null ? SpStoragePrice.fromPartial(object.spStoragePrice) : undefined;
    return message;
  },
  fromSDK(object: QuerySpStoragePriceResponseSDKType): QuerySpStoragePriceResponse {
    return {
      spStoragePrice: object.sp_storage_price ? SpStoragePrice.fromSDK(object.sp_storage_price) : undefined
    };
  },
  toSDK(message: QuerySpStoragePriceResponse): QuerySpStoragePriceResponseSDKType {
    const obj: any = {};
    message.spStoragePrice !== undefined && (obj.sp_storage_price = message.spStoragePrice ? SpStoragePrice.toSDK(message.spStoragePrice) : undefined);
    return obj;
  }
};
function createBaseQueryGlobalSpStorePriceByTimeRequest(): QueryGlobalSpStorePriceByTimeRequest {
  return {
    timestamp: Long.ZERO
  };
}
export const QueryGlobalSpStorePriceByTimeRequest = {
  encode(message: QueryGlobalSpStorePriceByTimeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.timestamp.isZero()) {
      writer.uint32(8).int64(message.timestamp);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGlobalSpStorePriceByTimeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGlobalSpStorePriceByTimeRequest();
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
  fromJSON(object: any): QueryGlobalSpStorePriceByTimeRequest {
    return {
      timestamp: isSet(object.timestamp) ? Long.fromValue(object.timestamp) : Long.ZERO
    };
  },
  toJSON(message: QueryGlobalSpStorePriceByTimeRequest): unknown {
    const obj: any = {};
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || Long.ZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGlobalSpStorePriceByTimeRequest>, I>>(object: I): QueryGlobalSpStorePriceByTimeRequest {
    const message = createBaseQueryGlobalSpStorePriceByTimeRequest();
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.ZERO;
    return message;
  },
  fromSDK(object: QueryGlobalSpStorePriceByTimeRequestSDKType): QueryGlobalSpStorePriceByTimeRequest {
    return {
      timestamp: object?.timestamp
    };
  },
  toSDK(message: QueryGlobalSpStorePriceByTimeRequest): QueryGlobalSpStorePriceByTimeRequestSDKType {
    const obj: any = {};
    obj.timestamp = message.timestamp;
    return obj;
  }
};
function createBaseQueryGlobalSpStorePriceByTimeResponse(): QueryGlobalSpStorePriceByTimeResponse {
  return {
    globalSpStorePrice: GlobalSpStorePrice.fromPartial({})
  };
}
export const QueryGlobalSpStorePriceByTimeResponse = {
  encode(message: QueryGlobalSpStorePriceByTimeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.globalSpStorePrice !== undefined) {
      GlobalSpStorePrice.encode(message.globalSpStorePrice, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGlobalSpStorePriceByTimeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGlobalSpStorePriceByTimeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.globalSpStorePrice = GlobalSpStorePrice.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGlobalSpStorePriceByTimeResponse {
    return {
      globalSpStorePrice: isSet(object.globalSpStorePrice) ? GlobalSpStorePrice.fromJSON(object.globalSpStorePrice) : undefined
    };
  },
  toJSON(message: QueryGlobalSpStorePriceByTimeResponse): unknown {
    const obj: any = {};
    message.globalSpStorePrice !== undefined && (obj.globalSpStorePrice = message.globalSpStorePrice ? GlobalSpStorePrice.toJSON(message.globalSpStorePrice) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGlobalSpStorePriceByTimeResponse>, I>>(object: I): QueryGlobalSpStorePriceByTimeResponse {
    const message = createBaseQueryGlobalSpStorePriceByTimeResponse();
    message.globalSpStorePrice = object.globalSpStorePrice !== undefined && object.globalSpStorePrice !== null ? GlobalSpStorePrice.fromPartial(object.globalSpStorePrice) : undefined;
    return message;
  },
  fromSDK(object: QueryGlobalSpStorePriceByTimeResponseSDKType): QueryGlobalSpStorePriceByTimeResponse {
    return {
      globalSpStorePrice: object.global_sp_store_price ? GlobalSpStorePrice.fromSDK(object.global_sp_store_price) : undefined
    };
  },
  toSDK(message: QueryGlobalSpStorePriceByTimeResponse): QueryGlobalSpStorePriceByTimeResponseSDKType {
    const obj: any = {};
    message.globalSpStorePrice !== undefined && (obj.global_sp_store_price = message.globalSpStorePrice ? GlobalSpStorePrice.toSDK(message.globalSpStorePrice) : undefined);
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
    storageProvider: StorageProvider.fromPartial({})
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
    storageProvider: StorageProvider.fromPartial({})
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
  /** get the latest storage price of specific sp */
  QuerySpStoragePrice(request: QuerySpStoragePriceRequest): Promise<QuerySpStoragePriceResponse>;
  /** get global store price by time */
  QueryGlobalSpStorePriceByTime(request: QueryGlobalSpStorePriceByTimeRequest): Promise<QueryGlobalSpStorePriceByTimeResponse>;
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
    this.QuerySpStoragePrice = this.QuerySpStoragePrice.bind(this);
    this.QueryGlobalSpStorePriceByTime = this.QueryGlobalSpStorePriceByTime.bind(this);
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
  QuerySpStoragePrice(request: QuerySpStoragePriceRequest): Promise<QuerySpStoragePriceResponse> {
    const data = QuerySpStoragePriceRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.sp.Query", "QuerySpStoragePrice", data);
    return promise.then(data => QuerySpStoragePriceResponse.decode(new _m0.Reader(data)));
  }
  QueryGlobalSpStorePriceByTime(request: QueryGlobalSpStorePriceByTimeRequest): Promise<QueryGlobalSpStorePriceByTimeResponse> {
    const data = QueryGlobalSpStorePriceByTimeRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.sp.Query", "QueryGlobalSpStorePriceByTime", data);
    return promise.then(data => QueryGlobalSpStorePriceByTimeResponse.decode(new _m0.Reader(data)));
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