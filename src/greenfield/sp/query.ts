//@ts-nocheck
/* eslint-disable */
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { StorageProvider, StorageProviderAmino, StorageProviderSDKType, SpStoragePrice, SpStoragePriceAmino, SpStoragePriceSDKType, GlobalSpStorePrice, GlobalSpStorePriceAmino, GlobalSpStorePriceSDKType, MaintenanceRecord, MaintenanceRecordAmino, MaintenanceRecordSDKType } from "./types";
import { Long, DeepPartial, Exact, isSet, Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "greenfield.sp";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/greenfield.sp.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/greenfield.sp.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/greenfield.sp.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/greenfield.sp.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryStorageProvidersRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryStorageProvidersRequestProtoMsg {
  typeUrl: "/greenfield.sp.QueryStorageProvidersRequest";
  value: Uint8Array;
}
export interface QueryStorageProvidersRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryStorageProvidersRequestAminoMsg {
  type: "/greenfield.sp.QueryStorageProvidersRequest";
  value: QueryStorageProvidersRequestAmino;
}
export interface QueryStorageProvidersRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryStorageProvidersResponse {
  sps: StorageProvider[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryStorageProvidersResponseProtoMsg {
  typeUrl: "/greenfield.sp.QueryStorageProvidersResponse";
  value: Uint8Array;
}
export interface QueryStorageProvidersResponseAmino {
  sps?: StorageProviderAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryStorageProvidersResponseAminoMsg {
  type: "/greenfield.sp.QueryStorageProvidersResponse";
  value: QueryStorageProvidersResponseAmino;
}
export interface QueryStorageProvidersResponseSDKType {
  sps: StorageProviderSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QuerySpStoragePriceRequest {
  /** operator address of sp */
  spAddr: string;
}
export interface QuerySpStoragePriceRequestProtoMsg {
  typeUrl: "/greenfield.sp.QuerySpStoragePriceRequest";
  value: Uint8Array;
}
export interface QuerySpStoragePriceRequestAmino {
  /** operator address of sp */
  sp_addr?: string;
}
export interface QuerySpStoragePriceRequestAminoMsg {
  type: "/greenfield.sp.QuerySpStoragePriceRequest";
  value: QuerySpStoragePriceRequestAmino;
}
export interface QuerySpStoragePriceRequestSDKType {
  sp_addr: string;
}
export interface QuerySpStoragePriceResponse {
  spStoragePrice: SpStoragePrice;
}
export interface QuerySpStoragePriceResponseProtoMsg {
  typeUrl: "/greenfield.sp.QuerySpStoragePriceResponse";
  value: Uint8Array;
}
export interface QuerySpStoragePriceResponseAmino {
  sp_storage_price?: SpStoragePriceAmino;
}
export interface QuerySpStoragePriceResponseAminoMsg {
  type: "/greenfield.sp.QuerySpStoragePriceResponse";
  value: QuerySpStoragePriceResponseAmino;
}
export interface QuerySpStoragePriceResponseSDKType {
  sp_storage_price: SpStoragePriceSDKType;
}
export interface QueryGlobalSpStorePriceByTimeRequest {
  /** unix timestamp in seconds. If it's 0, it will return the latest price. */
  timestamp: Long;
}
export interface QueryGlobalSpStorePriceByTimeRequestProtoMsg {
  typeUrl: "/greenfield.sp.QueryGlobalSpStorePriceByTimeRequest";
  value: Uint8Array;
}
export interface QueryGlobalSpStorePriceByTimeRequestAmino {
  /** unix timestamp in seconds. If it's 0, it will return the latest price. */
  timestamp?: string;
}
export interface QueryGlobalSpStorePriceByTimeRequestAminoMsg {
  type: "/greenfield.sp.QueryGlobalSpStorePriceByTimeRequest";
  value: QueryGlobalSpStorePriceByTimeRequestAmino;
}
export interface QueryGlobalSpStorePriceByTimeRequestSDKType {
  timestamp: Long;
}
export interface QueryGlobalSpStorePriceByTimeResponse {
  globalSpStorePrice: GlobalSpStorePrice;
}
export interface QueryGlobalSpStorePriceByTimeResponseProtoMsg {
  typeUrl: "/greenfield.sp.QueryGlobalSpStorePriceByTimeResponse";
  value: Uint8Array;
}
export interface QueryGlobalSpStorePriceByTimeResponseAmino {
  global_sp_store_price?: GlobalSpStorePriceAmino;
}
export interface QueryGlobalSpStorePriceByTimeResponseAminoMsg {
  type: "/greenfield.sp.QueryGlobalSpStorePriceByTimeResponse";
  value: QueryGlobalSpStorePriceByTimeResponseAmino;
}
export interface QueryGlobalSpStorePriceByTimeResponseSDKType {
  global_sp_store_price: GlobalSpStorePriceSDKType;
}
export interface QueryStorageProviderRequest {
  id: number;
}
export interface QueryStorageProviderRequestProtoMsg {
  typeUrl: "/greenfield.sp.QueryStorageProviderRequest";
  value: Uint8Array;
}
export interface QueryStorageProviderRequestAmino {
  id?: number;
}
export interface QueryStorageProviderRequestAminoMsg {
  type: "/greenfield.sp.QueryStorageProviderRequest";
  value: QueryStorageProviderRequestAmino;
}
export interface QueryStorageProviderRequestSDKType {
  id: number;
}
export interface QueryStorageProviderResponse {
  storageProvider?: StorageProvider;
}
export interface QueryStorageProviderResponseProtoMsg {
  typeUrl: "/greenfield.sp.QueryStorageProviderResponse";
  value: Uint8Array;
}
export interface QueryStorageProviderResponseAmino {
  storageProvider?: StorageProviderAmino;
}
export interface QueryStorageProviderResponseAminoMsg {
  type: "/greenfield.sp.QueryStorageProviderResponse";
  value: QueryStorageProviderResponseAmino;
}
export interface QueryStorageProviderResponseSDKType {
  storageProvider?: StorageProviderSDKType;
}
export interface QueryStorageProviderByOperatorAddressRequest {
  operatorAddress: string;
}
export interface QueryStorageProviderByOperatorAddressRequestProtoMsg {
  typeUrl: "/greenfield.sp.QueryStorageProviderByOperatorAddressRequest";
  value: Uint8Array;
}
export interface QueryStorageProviderByOperatorAddressRequestAmino {
  operator_address?: string;
}
export interface QueryStorageProviderByOperatorAddressRequestAminoMsg {
  type: "/greenfield.sp.QueryStorageProviderByOperatorAddressRequest";
  value: QueryStorageProviderByOperatorAddressRequestAmino;
}
export interface QueryStorageProviderByOperatorAddressRequestSDKType {
  operator_address: string;
}
export interface QueryStorageProviderByOperatorAddressResponse {
  storageProvider?: StorageProvider;
}
export interface QueryStorageProviderByOperatorAddressResponseProtoMsg {
  typeUrl: "/greenfield.sp.QueryStorageProviderByOperatorAddressResponse";
  value: Uint8Array;
}
export interface QueryStorageProviderByOperatorAddressResponseAmino {
  storageProvider?: StorageProviderAmino;
}
export interface QueryStorageProviderByOperatorAddressResponseAminoMsg {
  type: "/greenfield.sp.QueryStorageProviderByOperatorAddressResponse";
  value: QueryStorageProviderByOperatorAddressResponseAmino;
}
export interface QueryStorageProviderByOperatorAddressResponseSDKType {
  storageProvider?: StorageProviderSDKType;
}
export interface QueryStorageProviderMaintenanceRecordsRequest {
  operatorAddress: string;
}
export interface QueryStorageProviderMaintenanceRecordsRequestProtoMsg {
  typeUrl: "/greenfield.sp.QueryStorageProviderMaintenanceRecordsRequest";
  value: Uint8Array;
}
export interface QueryStorageProviderMaintenanceRecordsRequestAmino {
  operator_address?: string;
}
export interface QueryStorageProviderMaintenanceRecordsRequestAminoMsg {
  type: "/greenfield.sp.QueryStorageProviderMaintenanceRecordsRequest";
  value: QueryStorageProviderMaintenanceRecordsRequestAmino;
}
export interface QueryStorageProviderMaintenanceRecordsRequestSDKType {
  operator_address: string;
}
export interface QueryStorageProviderMaintenanceRecordsResponse {
  records: MaintenanceRecord[];
}
export interface QueryStorageProviderMaintenanceRecordsResponseProtoMsg {
  typeUrl: "/greenfield.sp.QueryStorageProviderMaintenanceRecordsResponse";
  value: Uint8Array;
}
export interface QueryStorageProviderMaintenanceRecordsResponseAmino {
  records?: MaintenanceRecordAmino[];
}
export interface QueryStorageProviderMaintenanceRecordsResponseAminoMsg {
  type: "/greenfield.sp.QueryStorageProviderMaintenanceRecordsResponse";
  value: QueryStorageProviderMaintenanceRecordsResponseAmino;
}
export interface QueryStorageProviderMaintenanceRecordsResponseSDKType {
  records: MaintenanceRecordSDKType[];
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/greenfield.sp.QueryParamsRequest",
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
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/greenfield.sp.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/greenfield.sp.QueryParamsResponse",
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
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/greenfield.sp.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryStorageProvidersRequest(): QueryStorageProvidersRequest {
  return {
    pagination: undefined
  };
}
export const QueryStorageProvidersRequest = {
  typeUrl: "/greenfield.sp.QueryStorageProvidersRequest",
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
  },
  fromAmino(object: QueryStorageProvidersRequestAmino): QueryStorageProvidersRequest {
    const message = createBaseQueryStorageProvidersRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryStorageProvidersRequest): QueryStorageProvidersRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryStorageProvidersRequestAminoMsg): QueryStorageProvidersRequest {
    return QueryStorageProvidersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStorageProvidersRequestProtoMsg): QueryStorageProvidersRequest {
    return QueryStorageProvidersRequest.decode(message.value);
  },
  toProto(message: QueryStorageProvidersRequest): Uint8Array {
    return QueryStorageProvidersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryStorageProvidersRequest): QueryStorageProvidersRequestProtoMsg {
    return {
      typeUrl: "/greenfield.sp.QueryStorageProvidersRequest",
      value: QueryStorageProvidersRequest.encode(message).finish()
    };
  }
};
function createBaseQueryStorageProvidersResponse(): QueryStorageProvidersResponse {
  return {
    sps: [],
    pagination: undefined
  };
}
export const QueryStorageProvidersResponse = {
  typeUrl: "/greenfield.sp.QueryStorageProvidersResponse",
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
  },
  fromAmino(object: QueryStorageProvidersResponseAmino): QueryStorageProvidersResponse {
    const message = createBaseQueryStorageProvidersResponse();
    message.sps = object.sps?.map(e => StorageProvider.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryStorageProvidersResponse): QueryStorageProvidersResponseAmino {
    const obj: any = {};
    if (message.sps) {
      obj.sps = message.sps.map(e => e ? StorageProvider.toAmino(e) : undefined);
    } else {
      obj.sps = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryStorageProvidersResponseAminoMsg): QueryStorageProvidersResponse {
    return QueryStorageProvidersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStorageProvidersResponseProtoMsg): QueryStorageProvidersResponse {
    return QueryStorageProvidersResponse.decode(message.value);
  },
  toProto(message: QueryStorageProvidersResponse): Uint8Array {
    return QueryStorageProvidersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryStorageProvidersResponse): QueryStorageProvidersResponseProtoMsg {
    return {
      typeUrl: "/greenfield.sp.QueryStorageProvidersResponse",
      value: QueryStorageProvidersResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySpStoragePriceRequest(): QuerySpStoragePriceRequest {
  return {
    spAddr: ""
  };
}
export const QuerySpStoragePriceRequest = {
  typeUrl: "/greenfield.sp.QuerySpStoragePriceRequest",
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
  },
  fromAmino(object: QuerySpStoragePriceRequestAmino): QuerySpStoragePriceRequest {
    const message = createBaseQuerySpStoragePriceRequest();
    if (object.sp_addr !== undefined && object.sp_addr !== null) {
      message.spAddr = object.sp_addr;
    }
    return message;
  },
  toAmino(message: QuerySpStoragePriceRequest): QuerySpStoragePriceRequestAmino {
    const obj: any = {};
    obj.sp_addr = message.spAddr;
    return obj;
  },
  fromAminoMsg(object: QuerySpStoragePriceRequestAminoMsg): QuerySpStoragePriceRequest {
    return QuerySpStoragePriceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySpStoragePriceRequestProtoMsg): QuerySpStoragePriceRequest {
    return QuerySpStoragePriceRequest.decode(message.value);
  },
  toProto(message: QuerySpStoragePriceRequest): Uint8Array {
    return QuerySpStoragePriceRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySpStoragePriceRequest): QuerySpStoragePriceRequestProtoMsg {
    return {
      typeUrl: "/greenfield.sp.QuerySpStoragePriceRequest",
      value: QuerySpStoragePriceRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySpStoragePriceResponse(): QuerySpStoragePriceResponse {
  return {
    spStoragePrice: SpStoragePrice.fromPartial({})
  };
}
export const QuerySpStoragePriceResponse = {
  typeUrl: "/greenfield.sp.QuerySpStoragePriceResponse",
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
  },
  fromAmino(object: QuerySpStoragePriceResponseAmino): QuerySpStoragePriceResponse {
    const message = createBaseQuerySpStoragePriceResponse();
    if (object.sp_storage_price !== undefined && object.sp_storage_price !== null) {
      message.spStoragePrice = SpStoragePrice.fromAmino(object.sp_storage_price);
    }
    return message;
  },
  toAmino(message: QuerySpStoragePriceResponse): QuerySpStoragePriceResponseAmino {
    const obj: any = {};
    obj.sp_storage_price = message.spStoragePrice ? SpStoragePrice.toAmino(message.spStoragePrice) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySpStoragePriceResponseAminoMsg): QuerySpStoragePriceResponse {
    return QuerySpStoragePriceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySpStoragePriceResponseProtoMsg): QuerySpStoragePriceResponse {
    return QuerySpStoragePriceResponse.decode(message.value);
  },
  toProto(message: QuerySpStoragePriceResponse): Uint8Array {
    return QuerySpStoragePriceResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySpStoragePriceResponse): QuerySpStoragePriceResponseProtoMsg {
    return {
      typeUrl: "/greenfield.sp.QuerySpStoragePriceResponse",
      value: QuerySpStoragePriceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGlobalSpStorePriceByTimeRequest(): QueryGlobalSpStorePriceByTimeRequest {
  return {
    timestamp: Long.ZERO
  };
}
export const QueryGlobalSpStorePriceByTimeRequest = {
  typeUrl: "/greenfield.sp.QueryGlobalSpStorePriceByTimeRequest",
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
  },
  fromAmino(object: QueryGlobalSpStorePriceByTimeRequestAmino): QueryGlobalSpStorePriceByTimeRequest {
    const message = createBaseQueryGlobalSpStorePriceByTimeRequest();
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Long.fromString(object.timestamp);
    }
    return message;
  },
  toAmino(message: QueryGlobalSpStorePriceByTimeRequest): QueryGlobalSpStorePriceByTimeRequestAmino {
    const obj: any = {};
    obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGlobalSpStorePriceByTimeRequestAminoMsg): QueryGlobalSpStorePriceByTimeRequest {
    return QueryGlobalSpStorePriceByTimeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGlobalSpStorePriceByTimeRequestProtoMsg): QueryGlobalSpStorePriceByTimeRequest {
    return QueryGlobalSpStorePriceByTimeRequest.decode(message.value);
  },
  toProto(message: QueryGlobalSpStorePriceByTimeRequest): Uint8Array {
    return QueryGlobalSpStorePriceByTimeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGlobalSpStorePriceByTimeRequest): QueryGlobalSpStorePriceByTimeRequestProtoMsg {
    return {
      typeUrl: "/greenfield.sp.QueryGlobalSpStorePriceByTimeRequest",
      value: QueryGlobalSpStorePriceByTimeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGlobalSpStorePriceByTimeResponse(): QueryGlobalSpStorePriceByTimeResponse {
  return {
    globalSpStorePrice: GlobalSpStorePrice.fromPartial({})
  };
}
export const QueryGlobalSpStorePriceByTimeResponse = {
  typeUrl: "/greenfield.sp.QueryGlobalSpStorePriceByTimeResponse",
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
  },
  fromAmino(object: QueryGlobalSpStorePriceByTimeResponseAmino): QueryGlobalSpStorePriceByTimeResponse {
    const message = createBaseQueryGlobalSpStorePriceByTimeResponse();
    if (object.global_sp_store_price !== undefined && object.global_sp_store_price !== null) {
      message.globalSpStorePrice = GlobalSpStorePrice.fromAmino(object.global_sp_store_price);
    }
    return message;
  },
  toAmino(message: QueryGlobalSpStorePriceByTimeResponse): QueryGlobalSpStorePriceByTimeResponseAmino {
    const obj: any = {};
    obj.global_sp_store_price = message.globalSpStorePrice ? GlobalSpStorePrice.toAmino(message.globalSpStorePrice) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGlobalSpStorePriceByTimeResponseAminoMsg): QueryGlobalSpStorePriceByTimeResponse {
    return QueryGlobalSpStorePriceByTimeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGlobalSpStorePriceByTimeResponseProtoMsg): QueryGlobalSpStorePriceByTimeResponse {
    return QueryGlobalSpStorePriceByTimeResponse.decode(message.value);
  },
  toProto(message: QueryGlobalSpStorePriceByTimeResponse): Uint8Array {
    return QueryGlobalSpStorePriceByTimeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGlobalSpStorePriceByTimeResponse): QueryGlobalSpStorePriceByTimeResponseProtoMsg {
    return {
      typeUrl: "/greenfield.sp.QueryGlobalSpStorePriceByTimeResponse",
      value: QueryGlobalSpStorePriceByTimeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryStorageProviderRequest(): QueryStorageProviderRequest {
  return {
    id: 0
  };
}
export const QueryStorageProviderRequest = {
  typeUrl: "/greenfield.sp.QueryStorageProviderRequest",
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
  },
  fromAmino(object: QueryStorageProviderRequestAmino): QueryStorageProviderRequest {
    const message = createBaseQueryStorageProviderRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: QueryStorageProviderRequest): QueryStorageProviderRequestAmino {
    const obj: any = {};
    obj.id = message.id;
    return obj;
  },
  fromAminoMsg(object: QueryStorageProviderRequestAminoMsg): QueryStorageProviderRequest {
    return QueryStorageProviderRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStorageProviderRequestProtoMsg): QueryStorageProviderRequest {
    return QueryStorageProviderRequest.decode(message.value);
  },
  toProto(message: QueryStorageProviderRequest): Uint8Array {
    return QueryStorageProviderRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryStorageProviderRequest): QueryStorageProviderRequestProtoMsg {
    return {
      typeUrl: "/greenfield.sp.QueryStorageProviderRequest",
      value: QueryStorageProviderRequest.encode(message).finish()
    };
  }
};
function createBaseQueryStorageProviderResponse(): QueryStorageProviderResponse {
  return {
    storageProvider: undefined
  };
}
export const QueryStorageProviderResponse = {
  typeUrl: "/greenfield.sp.QueryStorageProviderResponse",
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
  },
  fromAmino(object: QueryStorageProviderResponseAmino): QueryStorageProviderResponse {
    const message = createBaseQueryStorageProviderResponse();
    if (object.storageProvider !== undefined && object.storageProvider !== null) {
      message.storageProvider = StorageProvider.fromAmino(object.storageProvider);
    }
    return message;
  },
  toAmino(message: QueryStorageProviderResponse): QueryStorageProviderResponseAmino {
    const obj: any = {};
    obj.storageProvider = message.storageProvider ? StorageProvider.toAmino(message.storageProvider) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryStorageProviderResponseAminoMsg): QueryStorageProviderResponse {
    return QueryStorageProviderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStorageProviderResponseProtoMsg): QueryStorageProviderResponse {
    return QueryStorageProviderResponse.decode(message.value);
  },
  toProto(message: QueryStorageProviderResponse): Uint8Array {
    return QueryStorageProviderResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryStorageProviderResponse): QueryStorageProviderResponseProtoMsg {
    return {
      typeUrl: "/greenfield.sp.QueryStorageProviderResponse",
      value: QueryStorageProviderResponse.encode(message).finish()
    };
  }
};
function createBaseQueryStorageProviderByOperatorAddressRequest(): QueryStorageProviderByOperatorAddressRequest {
  return {
    operatorAddress: ""
  };
}
export const QueryStorageProviderByOperatorAddressRequest = {
  typeUrl: "/greenfield.sp.QueryStorageProviderByOperatorAddressRequest",
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
  },
  fromAmino(object: QueryStorageProviderByOperatorAddressRequestAmino): QueryStorageProviderByOperatorAddressRequest {
    const message = createBaseQueryStorageProviderByOperatorAddressRequest();
    if (object.operator_address !== undefined && object.operator_address !== null) {
      message.operatorAddress = object.operator_address;
    }
    return message;
  },
  toAmino(message: QueryStorageProviderByOperatorAddressRequest): QueryStorageProviderByOperatorAddressRequestAmino {
    const obj: any = {};
    obj.operator_address = message.operatorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryStorageProviderByOperatorAddressRequestAminoMsg): QueryStorageProviderByOperatorAddressRequest {
    return QueryStorageProviderByOperatorAddressRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStorageProviderByOperatorAddressRequestProtoMsg): QueryStorageProviderByOperatorAddressRequest {
    return QueryStorageProviderByOperatorAddressRequest.decode(message.value);
  },
  toProto(message: QueryStorageProviderByOperatorAddressRequest): Uint8Array {
    return QueryStorageProviderByOperatorAddressRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryStorageProviderByOperatorAddressRequest): QueryStorageProviderByOperatorAddressRequestProtoMsg {
    return {
      typeUrl: "/greenfield.sp.QueryStorageProviderByOperatorAddressRequest",
      value: QueryStorageProviderByOperatorAddressRequest.encode(message).finish()
    };
  }
};
function createBaseQueryStorageProviderByOperatorAddressResponse(): QueryStorageProviderByOperatorAddressResponse {
  return {
    storageProvider: undefined
  };
}
export const QueryStorageProviderByOperatorAddressResponse = {
  typeUrl: "/greenfield.sp.QueryStorageProviderByOperatorAddressResponse",
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
  },
  fromAmino(object: QueryStorageProviderByOperatorAddressResponseAmino): QueryStorageProviderByOperatorAddressResponse {
    const message = createBaseQueryStorageProviderByOperatorAddressResponse();
    if (object.storageProvider !== undefined && object.storageProvider !== null) {
      message.storageProvider = StorageProvider.fromAmino(object.storageProvider);
    }
    return message;
  },
  toAmino(message: QueryStorageProviderByOperatorAddressResponse): QueryStorageProviderByOperatorAddressResponseAmino {
    const obj: any = {};
    obj.storageProvider = message.storageProvider ? StorageProvider.toAmino(message.storageProvider) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryStorageProviderByOperatorAddressResponseAminoMsg): QueryStorageProviderByOperatorAddressResponse {
    return QueryStorageProviderByOperatorAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStorageProviderByOperatorAddressResponseProtoMsg): QueryStorageProviderByOperatorAddressResponse {
    return QueryStorageProviderByOperatorAddressResponse.decode(message.value);
  },
  toProto(message: QueryStorageProviderByOperatorAddressResponse): Uint8Array {
    return QueryStorageProviderByOperatorAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryStorageProviderByOperatorAddressResponse): QueryStorageProviderByOperatorAddressResponseProtoMsg {
    return {
      typeUrl: "/greenfield.sp.QueryStorageProviderByOperatorAddressResponse",
      value: QueryStorageProviderByOperatorAddressResponse.encode(message).finish()
    };
  }
};
function createBaseQueryStorageProviderMaintenanceRecordsRequest(): QueryStorageProviderMaintenanceRecordsRequest {
  return {
    operatorAddress: ""
  };
}
export const QueryStorageProviderMaintenanceRecordsRequest = {
  typeUrl: "/greenfield.sp.QueryStorageProviderMaintenanceRecordsRequest",
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
  },
  fromAmino(object: QueryStorageProviderMaintenanceRecordsRequestAmino): QueryStorageProviderMaintenanceRecordsRequest {
    const message = createBaseQueryStorageProviderMaintenanceRecordsRequest();
    if (object.operator_address !== undefined && object.operator_address !== null) {
      message.operatorAddress = object.operator_address;
    }
    return message;
  },
  toAmino(message: QueryStorageProviderMaintenanceRecordsRequest): QueryStorageProviderMaintenanceRecordsRequestAmino {
    const obj: any = {};
    obj.operator_address = message.operatorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryStorageProviderMaintenanceRecordsRequestAminoMsg): QueryStorageProviderMaintenanceRecordsRequest {
    return QueryStorageProviderMaintenanceRecordsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStorageProviderMaintenanceRecordsRequestProtoMsg): QueryStorageProviderMaintenanceRecordsRequest {
    return QueryStorageProviderMaintenanceRecordsRequest.decode(message.value);
  },
  toProto(message: QueryStorageProviderMaintenanceRecordsRequest): Uint8Array {
    return QueryStorageProviderMaintenanceRecordsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryStorageProviderMaintenanceRecordsRequest): QueryStorageProviderMaintenanceRecordsRequestProtoMsg {
    return {
      typeUrl: "/greenfield.sp.QueryStorageProviderMaintenanceRecordsRequest",
      value: QueryStorageProviderMaintenanceRecordsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryStorageProviderMaintenanceRecordsResponse(): QueryStorageProviderMaintenanceRecordsResponse {
  return {
    records: []
  };
}
export const QueryStorageProviderMaintenanceRecordsResponse = {
  typeUrl: "/greenfield.sp.QueryStorageProviderMaintenanceRecordsResponse",
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
  },
  fromAmino(object: QueryStorageProviderMaintenanceRecordsResponseAmino): QueryStorageProviderMaintenanceRecordsResponse {
    const message = createBaseQueryStorageProviderMaintenanceRecordsResponse();
    message.records = object.records?.map(e => MaintenanceRecord.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryStorageProviderMaintenanceRecordsResponse): QueryStorageProviderMaintenanceRecordsResponseAmino {
    const obj: any = {};
    if (message.records) {
      obj.records = message.records.map(e => e ? MaintenanceRecord.toAmino(e) : undefined);
    } else {
      obj.records = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryStorageProviderMaintenanceRecordsResponseAminoMsg): QueryStorageProviderMaintenanceRecordsResponse {
    return QueryStorageProviderMaintenanceRecordsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStorageProviderMaintenanceRecordsResponseProtoMsg): QueryStorageProviderMaintenanceRecordsResponse {
    return QueryStorageProviderMaintenanceRecordsResponse.decode(message.value);
  },
  toProto(message: QueryStorageProviderMaintenanceRecordsResponse): Uint8Array {
    return QueryStorageProviderMaintenanceRecordsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryStorageProviderMaintenanceRecordsResponse): QueryStorageProviderMaintenanceRecordsResponseProtoMsg {
    return {
      typeUrl: "/greenfield.sp.QueryStorageProviderMaintenanceRecordsResponse",
      value: QueryStorageProviderMaintenanceRecordsResponse.encode(message).finish()
    };
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