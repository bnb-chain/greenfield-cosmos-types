/* eslint-disable */
import { Params, ParamsSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Exact, isSet, Long, Rpc } from "../../helpers";
export const protobufPackage = "bnbchain.greenfield.challenge";
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
/** QueryParamsRequest is request type for the Query/LatestAttestedChallenge RPC method. */

export interface QueryLatestAttestedChallengeRequest {}
/** QueryParamsRequest is request type for the Query/LatestAttestedChallenge RPC method. */

export interface QueryLatestAttestedChallengeRequestSDKType {}
/** QueryParamsResponse is response type for the Query/LatestAttestedChallenge RPC method. */

export interface QueryLatestAttestedChallengeResponse {
  challengeId: Long;
}
/** QueryParamsResponse is response type for the Query/LatestAttestedChallenge RPC method. */

export interface QueryLatestAttestedChallengeResponseSDKType {
  challengeId: Long;
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

function createBaseQueryLatestAttestedChallengeRequest(): QueryLatestAttestedChallengeRequest {
  return {};
}

export const QueryLatestAttestedChallengeRequest = {
  encode(_: QueryLatestAttestedChallengeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLatestAttestedChallengeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLatestAttestedChallengeRequest();

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

  fromJSON(_: any): QueryLatestAttestedChallengeRequest {
    return {};
  },

  toJSON(_: QueryLatestAttestedChallengeRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLatestAttestedChallengeRequest>, I>>(_: I): QueryLatestAttestedChallengeRequest {
    const message = createBaseQueryLatestAttestedChallengeRequest();
    return message;
  },

  fromSDK(_: QueryLatestAttestedChallengeRequestSDKType): QueryLatestAttestedChallengeRequest {
    return {};
  },

  toSDK(_: QueryLatestAttestedChallengeRequest): QueryLatestAttestedChallengeRequestSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseQueryLatestAttestedChallengeResponse(): QueryLatestAttestedChallengeResponse {
  return {
    challengeId: Long.UZERO
  };
}

export const QueryLatestAttestedChallengeResponse = {
  encode(message: QueryLatestAttestedChallengeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.challengeId.isZero()) {
      writer.uint32(8).uint64(message.challengeId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLatestAttestedChallengeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLatestAttestedChallengeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.challengeId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryLatestAttestedChallengeResponse {
    return {
      challengeId: isSet(object.challengeId) ? Long.fromValue(object.challengeId) : Long.UZERO
    };
  },

  toJSON(message: QueryLatestAttestedChallengeResponse): unknown {
    const obj: any = {};
    message.challengeId !== undefined && (obj.challengeId = (message.challengeId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLatestAttestedChallengeResponse>, I>>(object: I): QueryLatestAttestedChallengeResponse {
    const message = createBaseQueryLatestAttestedChallengeResponse();
    message.challengeId = object.challengeId !== undefined && object.challengeId !== null ? Long.fromValue(object.challengeId) : Long.UZERO;
    return message;
  },

  fromSDK(object: QueryLatestAttestedChallengeResponseSDKType): QueryLatestAttestedChallengeResponse {
    return {
      challengeId: object?.challengeId
    };
  },

  toSDK(message: QueryLatestAttestedChallengeResponse): QueryLatestAttestedChallengeResponseSDKType {
    const obj: any = {};
    obj.challengeId = message.challengeId;
    return obj;
  }

};
/** Query defines the gRPC querier service. */

export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries the latest attested challenge id. */

  LatestAttestedChallenge(request?: QueryLatestAttestedChallengeRequest): Promise<QueryLatestAttestedChallengeResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.LatestAttestedChallenge = this.LatestAttestedChallenge.bind(this);
  }

  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.challenge.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  LatestAttestedChallenge(request: QueryLatestAttestedChallengeRequest = {}): Promise<QueryLatestAttestedChallengeResponse> {
    const data = QueryLatestAttestedChallengeRequest.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.challenge.Query", "LatestAttestedChallenge", data);
    return promise.then(data => QueryLatestAttestedChallengeResponse.decode(new _m0.Reader(data)));
  }

}