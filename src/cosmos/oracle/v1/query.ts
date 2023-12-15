//@ts-nocheck
/* eslint-disable */
import { Params, ParamsSDKType, RelayInterval, RelayIntervalSDKType } from "./oracle";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Exact, isSet, Rpc } from "../../../helpers";
export const protobufPackage = "cosmos.oracle.v1";
/** ClaimSrcChain defines the src chain of a claim */
export enum ClaimSrcChain {
  /** CLAIM_SRC_CHAIN_UNSPECIFIED - CLAIM_SRC_CHAIN_UNSPECIFIED */
  CLAIM_SRC_CHAIN_UNSPECIFIED = 0,
  /** CLAIM_SRC_CHAIN_BSC - CLAIM_SRC_CHAIN_BSC defines BSC source chain */
  CLAIM_SRC_CHAIN_BSC = 1,
  /** CLAIM_SRC_CHAIN_OP_BNB - CLAIM_SRC_CHAIN_OP_BNB defines OPBNB source chain */
  CLAIM_SRC_CHAIN_OP_BNB = 2,
  UNRECOGNIZED = -1,
}
export const ClaimSrcChainSDKType = ClaimSrcChain;
export function claimSrcChainFromJSON(object: any): ClaimSrcChain {
  switch (object) {
    case 0:
    case "CLAIM_SRC_CHAIN_UNSPECIFIED":
      return ClaimSrcChain.CLAIM_SRC_CHAIN_UNSPECIFIED;
    case 1:
    case "CLAIM_SRC_CHAIN_BSC":
      return ClaimSrcChain.CLAIM_SRC_CHAIN_BSC;
    case 2:
    case "CLAIM_SRC_CHAIN_OP_BNB":
      return ClaimSrcChain.CLAIM_SRC_CHAIN_OP_BNB;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ClaimSrcChain.UNRECOGNIZED;
  }
}
export function claimSrcChainToJSON(object: ClaimSrcChain): string {
  switch (object) {
    case ClaimSrcChain.CLAIM_SRC_CHAIN_UNSPECIFIED:
      return "CLAIM_SRC_CHAIN_UNSPECIFIED";
    case ClaimSrcChain.CLAIM_SRC_CHAIN_BSC:
      return "CLAIM_SRC_CHAIN_BSC";
    case ClaimSrcChain.CLAIM_SRC_CHAIN_OP_BNB:
      return "CLAIM_SRC_CHAIN_OP_BNB";
    case ClaimSrcChain.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** QueryInturnRelayerRequest is the request type for the Query In-turn relayer RPC method. */
export interface QueryInturnRelayerRequest {
  /** ClaimSrcChain defines the src chain of a claim */
  claimSrcChain: ClaimSrcChain;
}
/** QueryInturnRelayerRequest is the request type for the Query In-turn relayer RPC method. */
export interface QueryInturnRelayerRequestSDKType {
  claim_src_chain: ClaimSrcChain;
}
/** QueryInturnRelayerResponse is the response type for the Query In-turn relayer RPC method. */
export interface QueryInturnRelayerResponse {
  blsPubKey: string;
  relayInterval: RelayInterval;
}
/** QueryInturnRelayerResponse is the response type for the Query In-turn relayer RPC method. */
export interface QueryInturnRelayerResponseSDKType {
  bls_pub_key: string;
  relay_interval: RelayIntervalSDKType;
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
function createBaseQueryInturnRelayerRequest(): QueryInturnRelayerRequest {
  return {
    claimSrcChain: 0
  };
}
export const QueryInturnRelayerRequest = {
  encode(message: QueryInturnRelayerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.claimSrcChain !== 0) {
      writer.uint32(8).int32(message.claimSrcChain);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryInturnRelayerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInturnRelayerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claimSrcChain = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryInturnRelayerRequest {
    return {
      claimSrcChain: isSet(object.claimSrcChain) ? claimSrcChainFromJSON(object.claimSrcChain) : -1
    };
  },
  toJSON(message: QueryInturnRelayerRequest): unknown {
    const obj: any = {};
    message.claimSrcChain !== undefined && (obj.claimSrcChain = claimSrcChainToJSON(message.claimSrcChain));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryInturnRelayerRequest>, I>>(object: I): QueryInturnRelayerRequest {
    const message = createBaseQueryInturnRelayerRequest();
    message.claimSrcChain = object.claimSrcChain ?? 0;
    return message;
  },
  fromSDK(object: QueryInturnRelayerRequestSDKType): QueryInturnRelayerRequest {
    return {
      claimSrcChain: isSet(object.claim_src_chain) ? claimSrcChainFromJSON(object.claim_src_chain) : -1
    };
  },
  toSDK(message: QueryInturnRelayerRequest): QueryInturnRelayerRequestSDKType {
    const obj: any = {};
    message.claimSrcChain !== undefined && (obj.claim_src_chain = claimSrcChainToJSON(message.claimSrcChain));
    return obj;
  }
};
function createBaseQueryInturnRelayerResponse(): QueryInturnRelayerResponse {
  return {
    blsPubKey: "",
    relayInterval: RelayInterval.fromPartial({})
  };
}
export const QueryInturnRelayerResponse = {
  encode(message: QueryInturnRelayerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blsPubKey !== "") {
      writer.uint32(10).string(message.blsPubKey);
    }
    if (message.relayInterval !== undefined) {
      RelayInterval.encode(message.relayInterval, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryInturnRelayerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInturnRelayerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blsPubKey = reader.string();
          break;
        case 2:
          message.relayInterval = RelayInterval.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryInturnRelayerResponse {
    return {
      blsPubKey: isSet(object.blsPubKey) ? String(object.blsPubKey) : "",
      relayInterval: isSet(object.relayInterval) ? RelayInterval.fromJSON(object.relayInterval) : undefined
    };
  },
  toJSON(message: QueryInturnRelayerResponse): unknown {
    const obj: any = {};
    message.blsPubKey !== undefined && (obj.blsPubKey = message.blsPubKey);
    message.relayInterval !== undefined && (obj.relayInterval = message.relayInterval ? RelayInterval.toJSON(message.relayInterval) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryInturnRelayerResponse>, I>>(object: I): QueryInturnRelayerResponse {
    const message = createBaseQueryInturnRelayerResponse();
    message.blsPubKey = object.blsPubKey ?? "";
    message.relayInterval = object.relayInterval !== undefined && object.relayInterval !== null ? RelayInterval.fromPartial(object.relayInterval) : undefined;
    return message;
  },
  fromSDK(object: QueryInturnRelayerResponseSDKType): QueryInturnRelayerResponse {
    return {
      blsPubKey: object?.bls_pub_key,
      relayInterval: object.relay_interval ? RelayInterval.fromSDK(object.relay_interval) : undefined
    };
  },
  toSDK(message: QueryInturnRelayerResponse): QueryInturnRelayerResponseSDKType {
    const obj: any = {};
    obj.bls_pub_key = message.blsPubKey;
    message.relayInterval !== undefined && (obj.relay_interval = message.relayInterval ? RelayInterval.toSDK(message.relayInterval) : undefined);
    return obj;
  }
};
/** Query provides defines the gRPC querier service. */
export interface Query {
  /** Params returns the total set of cross chain parameters. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** InturnRelayer returns the inturn relayer bls pub key and its relay interval */
  InturnRelayer(request: QueryInturnRelayerRequest): Promise<QueryInturnRelayerResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.InturnRelayer = this.InturnRelayer.bind(this);
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.oracle.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  InturnRelayer(request: QueryInturnRelayerRequest): Promise<QueryInturnRelayerResponse> {
    const data = QueryInturnRelayerRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.oracle.v1.Query", "InturnRelayer", data);
    return promise.then(data => QueryInturnRelayerResponse.decode(new _m0.Reader(data)));
  }
}