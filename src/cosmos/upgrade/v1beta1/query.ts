/* eslint-disable */
import { Plan, PlanSDKType, ModuleVersion, ModuleVersionSDKType } from "./upgrade";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Exact, isSet, Long, bytesFromBase64, base64FromBytes, Rpc } from "../../../helpers";
export const protobufPackage = "cosmos.upgrade.v1beta1";
/**
 * QueryCurrentPlanRequest is the request type for the Query/CurrentPlan RPC
 * method.
 */

export interface QueryCurrentPlanRequest {}
/**
 * QueryCurrentPlanRequest is the request type for the Query/CurrentPlan RPC
 * method.
 */

export interface QueryCurrentPlanRequestSDKType {}
/**
 * QueryCurrentPlanResponse is the response type for the Query/CurrentPlan RPC
 * method.
 */

export interface QueryCurrentPlanResponse {
  /** plan is the current upgrade plan. */
  plan: Plan[];
}
/**
 * QueryCurrentPlanResponse is the response type for the Query/CurrentPlan RPC
 * method.
 */

export interface QueryCurrentPlanResponseSDKType {
  plan: PlanSDKType[];
}
/**
 * QueryCurrentPlanRequest is the request type for the Query/AppliedPlan RPC
 * method.
 */

export interface QueryAppliedPlanRequest {
  /** name is the name of the applied plan to query for. */
  name: string;
}
/**
 * QueryCurrentPlanRequest is the request type for the Query/AppliedPlan RPC
 * method.
 */

export interface QueryAppliedPlanRequestSDKType {
  name: string;
}
/**
 * QueryAppliedPlanResponse is the response type for the Query/AppliedPlan RPC
 * method.
 */

export interface QueryAppliedPlanResponse {
  /** height is the block height at which the plan was applied. */
  height: Long;
}
/**
 * QueryAppliedPlanResponse is the response type for the Query/AppliedPlan RPC
 * method.
 */

export interface QueryAppliedPlanResponseSDKType {
  height: Long;
}
/**
 * QueryUpgradedConsensusStateRequest is the request type for the Query/UpgradedConsensusState
 * RPC method.
 */

/** @deprecated */

export interface QueryUpgradedConsensusStateRequest {
  /**
   * last height of the current chain must be sent in request
   * as this is the height under which next consensus state is stored
   */
  lastHeight: Long;
}
/**
 * QueryUpgradedConsensusStateRequest is the request type for the Query/UpgradedConsensusState
 * RPC method.
 */

/** @deprecated */

export interface QueryUpgradedConsensusStateRequestSDKType {
  last_height: Long;
}
/**
 * QueryUpgradedConsensusStateResponse is the response type for the Query/UpgradedConsensusState
 * RPC method.
 */

/** @deprecated */

export interface QueryUpgradedConsensusStateResponse {
  /** Since: cosmos-sdk 0.43 */
  upgradedConsensusState: Uint8Array;
}
/**
 * QueryUpgradedConsensusStateResponse is the response type for the Query/UpgradedConsensusState
 * RPC method.
 */

/** @deprecated */

export interface QueryUpgradedConsensusStateResponseSDKType {
  upgraded_consensus_state: Uint8Array;
}
/**
 * QueryModuleVersionsRequest is the request type for the Query/ModuleVersions
 * RPC method.
 * 
 * Since: cosmos-sdk 0.43
 */

export interface QueryModuleVersionsRequest {
  /**
   * module_name is a field to query a specific module
   * consensus version from state. Leaving this empty will
   * fetch the full list of module versions from state
   */
  moduleName: string;
}
/**
 * QueryModuleVersionsRequest is the request type for the Query/ModuleVersions
 * RPC method.
 * 
 * Since: cosmos-sdk 0.43
 */

export interface QueryModuleVersionsRequestSDKType {
  module_name: string;
}
/**
 * QueryModuleVersionsResponse is the response type for the Query/ModuleVersions
 * RPC method.
 * 
 * Since: cosmos-sdk 0.43
 */

export interface QueryModuleVersionsResponse {
  /** module_versions is a list of module names with their consensus versions. */
  moduleVersions: ModuleVersion[];
}
/**
 * QueryModuleVersionsResponse is the response type for the Query/ModuleVersions
 * RPC method.
 * 
 * Since: cosmos-sdk 0.43
 */

export interface QueryModuleVersionsResponseSDKType {
  module_versions: ModuleVersionSDKType[];
}
/**
 * QueryAuthorityRequest is the request type for Query/Authority
 * 
 * Since: cosmos-sdk 0.46
 */

export interface QueryAuthorityRequest {}
/**
 * QueryAuthorityRequest is the request type for Query/Authority
 * 
 * Since: cosmos-sdk 0.46
 */

export interface QueryAuthorityRequestSDKType {}
/**
 * QueryAuthorityResponse is the response type for Query/Authority
 * 
 * Since: cosmos-sdk 0.46
 */

export interface QueryAuthorityResponse {
  address: string;
}
/**
 * QueryAuthorityResponse is the response type for Query/Authority
 * 
 * Since: cosmos-sdk 0.46
 */

export interface QueryAuthorityResponseSDKType {
  address: string;
}

function createBaseQueryCurrentPlanRequest(): QueryCurrentPlanRequest {
  return {};
}

export const QueryCurrentPlanRequest = {
  encode(_: QueryCurrentPlanRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentPlanRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentPlanRequest();

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

  fromJSON(_: any): QueryCurrentPlanRequest {
    return {};
  },

  toJSON(_: QueryCurrentPlanRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCurrentPlanRequest>, I>>(_: I): QueryCurrentPlanRequest {
    const message = createBaseQueryCurrentPlanRequest();
    return message;
  },

  fromSDK(_: QueryCurrentPlanRequestSDKType): QueryCurrentPlanRequest {
    return {};
  },

  toSDK(_: QueryCurrentPlanRequest): QueryCurrentPlanRequestSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseQueryCurrentPlanResponse(): QueryCurrentPlanResponse {
  return {
    plan: []
  };
}

export const QueryCurrentPlanResponse = {
  encode(message: QueryCurrentPlanResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.plan) {
      Plan.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentPlanResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentPlanResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.plan.push(Plan.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryCurrentPlanResponse {
    return {
      plan: Array.isArray(object?.plan) ? object.plan.map((e: any) => Plan.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryCurrentPlanResponse): unknown {
    const obj: any = {};

    if (message.plan) {
      obj.plan = message.plan.map(e => e ? Plan.toJSON(e) : undefined);
    } else {
      obj.plan = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCurrentPlanResponse>, I>>(object: I): QueryCurrentPlanResponse {
    const message = createBaseQueryCurrentPlanResponse();
    message.plan = object.plan?.map(e => Plan.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: QueryCurrentPlanResponseSDKType): QueryCurrentPlanResponse {
    return {
      plan: Array.isArray(object?.plan) ? object.plan.map((e: any) => Plan.fromSDK(e)) : []
    };
  },

  toSDK(message: QueryCurrentPlanResponse): QueryCurrentPlanResponseSDKType {
    const obj: any = {};

    if (message.plan) {
      obj.plan = message.plan.map(e => e ? Plan.toSDK(e) : undefined);
    } else {
      obj.plan = [];
    }

    return obj;
  }

};

function createBaseQueryAppliedPlanRequest(): QueryAppliedPlanRequest {
  return {
    name: ""
  };
}

export const QueryAppliedPlanRequest = {
  encode(message: QueryAppliedPlanRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAppliedPlanRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAppliedPlanRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAppliedPlanRequest {
    return {
      name: isSet(object.name) ? String(object.name) : ""
    };
  },

  toJSON(message: QueryAppliedPlanRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAppliedPlanRequest>, I>>(object: I): QueryAppliedPlanRequest {
    const message = createBaseQueryAppliedPlanRequest();
    message.name = object.name ?? "";
    return message;
  },

  fromSDK(object: QueryAppliedPlanRequestSDKType): QueryAppliedPlanRequest {
    return {
      name: object?.name
    };
  },

  toSDK(message: QueryAppliedPlanRequest): QueryAppliedPlanRequestSDKType {
    const obj: any = {};
    obj.name = message.name;
    return obj;
  }

};

function createBaseQueryAppliedPlanResponse(): QueryAppliedPlanResponse {
  return {
    height: Long.ZERO
  };
}

export const QueryAppliedPlanResponse = {
  encode(message: QueryAppliedPlanResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAppliedPlanResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAppliedPlanResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.height = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAppliedPlanResponse {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO
    };
  },

  toJSON(message: QueryAppliedPlanResponse): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAppliedPlanResponse>, I>>(object: I): QueryAppliedPlanResponse {
    const message = createBaseQueryAppliedPlanResponse();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    return message;
  },

  fromSDK(object: QueryAppliedPlanResponseSDKType): QueryAppliedPlanResponse {
    return {
      height: object?.height
    };
  },

  toSDK(message: QueryAppliedPlanResponse): QueryAppliedPlanResponseSDKType {
    const obj: any = {};
    obj.height = message.height;
    return obj;
  }

};

function createBaseQueryUpgradedConsensusStateRequest(): QueryUpgradedConsensusStateRequest {
  return {
    lastHeight: Long.ZERO
  };
}

export const QueryUpgradedConsensusStateRequest = {
  encode(message: QueryUpgradedConsensusStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.lastHeight.isZero()) {
      writer.uint32(8).int64(message.lastHeight);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUpgradedConsensusStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUpgradedConsensusStateRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.lastHeight = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryUpgradedConsensusStateRequest {
    return {
      lastHeight: isSet(object.lastHeight) ? Long.fromValue(object.lastHeight) : Long.ZERO
    };
  },

  toJSON(message: QueryUpgradedConsensusStateRequest): unknown {
    const obj: any = {};
    message.lastHeight !== undefined && (obj.lastHeight = (message.lastHeight || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryUpgradedConsensusStateRequest>, I>>(object: I): QueryUpgradedConsensusStateRequest {
    const message = createBaseQueryUpgradedConsensusStateRequest();
    message.lastHeight = object.lastHeight !== undefined && object.lastHeight !== null ? Long.fromValue(object.lastHeight) : Long.ZERO;
    return message;
  },

  fromSDK(object: QueryUpgradedConsensusStateRequestSDKType): QueryUpgradedConsensusStateRequest {
    return {
      lastHeight: object?.last_height
    };
  },

  toSDK(message: QueryUpgradedConsensusStateRequest): QueryUpgradedConsensusStateRequestSDKType {
    const obj: any = {};
    obj.last_height = message.lastHeight;
    return obj;
  }

};

function createBaseQueryUpgradedConsensusStateResponse(): QueryUpgradedConsensusStateResponse {
  return {
    upgradedConsensusState: new Uint8Array()
  };
}

export const QueryUpgradedConsensusStateResponse = {
  encode(message: QueryUpgradedConsensusStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.upgradedConsensusState.length !== 0) {
      writer.uint32(18).bytes(message.upgradedConsensusState);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUpgradedConsensusStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUpgradedConsensusStateResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 2:
          message.upgradedConsensusState = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryUpgradedConsensusStateResponse {
    return {
      upgradedConsensusState: isSet(object.upgradedConsensusState) ? bytesFromBase64(object.upgradedConsensusState) : new Uint8Array()
    };
  },

  toJSON(message: QueryUpgradedConsensusStateResponse): unknown {
    const obj: any = {};
    message.upgradedConsensusState !== undefined && (obj.upgradedConsensusState = base64FromBytes(message.upgradedConsensusState !== undefined ? message.upgradedConsensusState : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryUpgradedConsensusStateResponse>, I>>(object: I): QueryUpgradedConsensusStateResponse {
    const message = createBaseQueryUpgradedConsensusStateResponse();
    message.upgradedConsensusState = object.upgradedConsensusState ?? new Uint8Array();
    return message;
  },

  fromSDK(object: QueryUpgradedConsensusStateResponseSDKType): QueryUpgradedConsensusStateResponse {
    return {
      upgradedConsensusState: object?.upgraded_consensus_state
    };
  },

  toSDK(message: QueryUpgradedConsensusStateResponse): QueryUpgradedConsensusStateResponseSDKType {
    const obj: any = {};
    obj.upgraded_consensus_state = message.upgradedConsensusState;
    return obj;
  }

};

function createBaseQueryModuleVersionsRequest(): QueryModuleVersionsRequest {
  return {
    moduleName: ""
  };
}

export const QueryModuleVersionsRequest = {
  encode(message: QueryModuleVersionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.moduleName !== "") {
      writer.uint32(10).string(message.moduleName);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleVersionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleVersionsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.moduleName = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryModuleVersionsRequest {
    return {
      moduleName: isSet(object.moduleName) ? String(object.moduleName) : ""
    };
  },

  toJSON(message: QueryModuleVersionsRequest): unknown {
    const obj: any = {};
    message.moduleName !== undefined && (obj.moduleName = message.moduleName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryModuleVersionsRequest>, I>>(object: I): QueryModuleVersionsRequest {
    const message = createBaseQueryModuleVersionsRequest();
    message.moduleName = object.moduleName ?? "";
    return message;
  },

  fromSDK(object: QueryModuleVersionsRequestSDKType): QueryModuleVersionsRequest {
    return {
      moduleName: object?.module_name
    };
  },

  toSDK(message: QueryModuleVersionsRequest): QueryModuleVersionsRequestSDKType {
    const obj: any = {};
    obj.module_name = message.moduleName;
    return obj;
  }

};

function createBaseQueryModuleVersionsResponse(): QueryModuleVersionsResponse {
  return {
    moduleVersions: []
  };
}

export const QueryModuleVersionsResponse = {
  encode(message: QueryModuleVersionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.moduleVersions) {
      ModuleVersion.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleVersionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleVersionsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.moduleVersions.push(ModuleVersion.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryModuleVersionsResponse {
    return {
      moduleVersions: Array.isArray(object?.moduleVersions) ? object.moduleVersions.map((e: any) => ModuleVersion.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryModuleVersionsResponse): unknown {
    const obj: any = {};

    if (message.moduleVersions) {
      obj.moduleVersions = message.moduleVersions.map(e => e ? ModuleVersion.toJSON(e) : undefined);
    } else {
      obj.moduleVersions = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryModuleVersionsResponse>, I>>(object: I): QueryModuleVersionsResponse {
    const message = createBaseQueryModuleVersionsResponse();
    message.moduleVersions = object.moduleVersions?.map(e => ModuleVersion.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: QueryModuleVersionsResponseSDKType): QueryModuleVersionsResponse {
    return {
      moduleVersions: Array.isArray(object?.module_versions) ? object.module_versions.map((e: any) => ModuleVersion.fromSDK(e)) : []
    };
  },

  toSDK(message: QueryModuleVersionsResponse): QueryModuleVersionsResponseSDKType {
    const obj: any = {};

    if (message.moduleVersions) {
      obj.module_versions = message.moduleVersions.map(e => e ? ModuleVersion.toSDK(e) : undefined);
    } else {
      obj.module_versions = [];
    }

    return obj;
  }

};

function createBaseQueryAuthorityRequest(): QueryAuthorityRequest {
  return {};
}

export const QueryAuthorityRequest = {
  encode(_: QueryAuthorityRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAuthorityRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuthorityRequest();

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

  fromJSON(_: any): QueryAuthorityRequest {
    return {};
  },

  toJSON(_: QueryAuthorityRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAuthorityRequest>, I>>(_: I): QueryAuthorityRequest {
    const message = createBaseQueryAuthorityRequest();
    return message;
  },

  fromSDK(_: QueryAuthorityRequestSDKType): QueryAuthorityRequest {
    return {};
  },

  toSDK(_: QueryAuthorityRequest): QueryAuthorityRequestSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseQueryAuthorityResponse(): QueryAuthorityResponse {
  return {
    address: ""
  };
}

export const QueryAuthorityResponse = {
  encode(message: QueryAuthorityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAuthorityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuthorityResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAuthorityResponse {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: QueryAuthorityResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAuthorityResponse>, I>>(object: I): QueryAuthorityResponse {
    const message = createBaseQueryAuthorityResponse();
    message.address = object.address ?? "";
    return message;
  },

  fromSDK(object: QueryAuthorityResponseSDKType): QueryAuthorityResponse {
    return {
      address: object?.address
    };
  },

  toSDK(message: QueryAuthorityResponse): QueryAuthorityResponseSDKType {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  }

};
/** Query defines the gRPC upgrade querier service. */

export interface Query {
  /** CurrentPlan queries the current upgrade plan. */
  CurrentPlan(request?: QueryCurrentPlanRequest): Promise<QueryCurrentPlanResponse>;
  /** AppliedPlan queries a previously applied upgrade plan by its name. */

  AppliedPlan(request: QueryAppliedPlanRequest): Promise<QueryAppliedPlanResponse>;
  /**
   * UpgradedConsensusState queries the consensus state that will serve
   * as a trusted kernel for the next version of this chain. It will only be
   * stored at the last height of this chain.
   * UpgradedConsensusState RPC not supported with legacy querier
   * This rpc is deprecated now that IBC has its own replacement
   * (https://github.com/cosmos/ibc-go/blob/2c880a22e9f9cc75f62b527ca94aa75ce1106001/proto/ibc/core/client/v1/query.proto#L54)
   */

  UpgradedConsensusState(request: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponse>;
  /**
   * ModuleVersions queries the list of module versions from state.
   * 
   * Since: cosmos-sdk 0.43
   */

  ModuleVersions(request: QueryModuleVersionsRequest): Promise<QueryModuleVersionsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CurrentPlan = this.CurrentPlan.bind(this);
    this.AppliedPlan = this.AppliedPlan.bind(this);
    this.UpgradedConsensusState = this.UpgradedConsensusState.bind(this);
    this.ModuleVersions = this.ModuleVersions.bind(this);
  }

  CurrentPlan(request: QueryCurrentPlanRequest = {}): Promise<QueryCurrentPlanResponse> {
    const data = QueryCurrentPlanRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "CurrentPlan", data);
    return promise.then(data => QueryCurrentPlanResponse.decode(new _m0.Reader(data)));
  }

  AppliedPlan(request: QueryAppliedPlanRequest): Promise<QueryAppliedPlanResponse> {
    const data = QueryAppliedPlanRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "AppliedPlan", data);
    return promise.then(data => QueryAppliedPlanResponse.decode(new _m0.Reader(data)));
  }

  UpgradedConsensusState(request: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponse> {
    const data = QueryUpgradedConsensusStateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "UpgradedConsensusState", data);
    return promise.then(data => QueryUpgradedConsensusStateResponse.decode(new _m0.Reader(data)));
  }

  ModuleVersions(request: QueryModuleVersionsRequest): Promise<QueryModuleVersionsResponse> {
    const data = QueryModuleVersionsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "ModuleVersions", data);
    return promise.then(data => QueryModuleVersionsResponse.decode(new _m0.Reader(data)));
  }

}