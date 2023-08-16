//@ts-nocheck
/* eslint-disable */
import { Params, ParamsSDKType } from "./params";
import { AttestedChallenge, AttestedChallengeSDKType } from "./types";
import { Long, DeepPartial, Exact, isSet, Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "greenfield.challenge";
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
/** QueryAttestedChallengeRequest is request type for the Query/AttestedChallenge RPC method. */

export interface QueryAttestedChallengeRequest {
  /** The id of the challenge. */
  challengeId: Long;
}
/** QueryAttestedChallengeRequest is request type for the Query/AttestedChallenge RPC method. */

export interface QueryAttestedChallengeRequestSDKType {
  challenge_id: Long;
}
/** QueryAttestedChallengeResponse is response type for the Query/AttestedChallenge RPC method. */

export interface QueryAttestedChallengeResponse {
  challenge?: AttestedChallenge;
}
/** QueryAttestedChallengeResponse is response type for the Query/AttestedChallenge RPC method. */

export interface QueryAttestedChallengeResponseSDKType {
  challenge?: AttestedChallengeSDKType;
}
/** QueryLatestAttestedChallengesRequest is request type for the Query/LatestAttestedChallenges RPC method. */

export interface QueryLatestAttestedChallengesRequest {}
/** QueryLatestAttestedChallengesRequest is request type for the Query/LatestAttestedChallenges RPC method. */

export interface QueryLatestAttestedChallengesRequestSDKType {}
/** QueryLatestAttestedChallengesResponse is response type for the Query/LatestAttestedChallenges RPC method. */

export interface QueryLatestAttestedChallengesResponse {
  challenges: AttestedChallenge[];
}
/** QueryLatestAttestedChallengesResponse is response type for the Query/LatestAttestedChallenges RPC method. */

export interface QueryLatestAttestedChallengesResponseSDKType {
  challenges: AttestedChallengeSDKType[];
}
/** QueryInturnAttestationSubmitterRequest is request type for the Query/InturnAttestationSubmitter RPC method. */

export interface QueryInturnAttestationSubmitterRequest {}
/** QueryInturnAttestationSubmitterRequest is request type for the Query/InturnAttestationSubmitter RPC method. */

export interface QueryInturnAttestationSubmitterRequestSDKType {}
/** QueryInturnAttestationSubmitterResponse is response type for the Query/InturnAttestationSubmitter RPC method. */

export interface QueryInturnAttestationSubmitterResponse {
  blsPubKey: string;
  submitInterval?: SubmitInterval;
}
/** QueryInturnAttestationSubmitterResponse is response type for the Query/InturnAttestationSubmitter RPC method. */

export interface QueryInturnAttestationSubmitterResponseSDKType {
  bls_pub_key: string;
  submit_interval?: SubmitIntervalSDKType;
}
/** SubmitInterval holds start and end (exclusive) (i.e., [start, end)) time of in turn attestation. */

export interface SubmitInterval {
  start: Long;
  end: Long;
}
/** SubmitInterval holds start and end (exclusive) (i.e., [start, end)) time of in turn attestation. */

export interface SubmitIntervalSDKType {
  start: Long;
  end: Long;
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

function createBaseQueryAttestedChallengeRequest(): QueryAttestedChallengeRequest {
  return {
    challengeId: Long.UZERO
  };
}

export const QueryAttestedChallengeRequest = {
  encode(message: QueryAttestedChallengeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.challengeId.isZero()) {
      writer.uint32(8).uint64(message.challengeId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAttestedChallengeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAttestedChallengeRequest();

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

  fromJSON(object: any): QueryAttestedChallengeRequest {
    return {
      challengeId: isSet(object.challengeId) ? Long.fromValue(object.challengeId) : Long.UZERO
    };
  },

  toJSON(message: QueryAttestedChallengeRequest): unknown {
    const obj: any = {};
    message.challengeId !== undefined && (obj.challengeId = (message.challengeId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAttestedChallengeRequest>, I>>(object: I): QueryAttestedChallengeRequest {
    const message = createBaseQueryAttestedChallengeRequest();
    message.challengeId = object.challengeId !== undefined && object.challengeId !== null ? Long.fromValue(object.challengeId) : Long.UZERO;
    return message;
  },

  fromSDK(object: QueryAttestedChallengeRequestSDKType): QueryAttestedChallengeRequest {
    return {
      challengeId: object?.challenge_id
    };
  },

  toSDK(message: QueryAttestedChallengeRequest): QueryAttestedChallengeRequestSDKType {
    const obj: any = {};
    obj.challenge_id = message.challengeId;
    return obj;
  }

};

function createBaseQueryAttestedChallengeResponse(): QueryAttestedChallengeResponse {
  return {
    challenge: undefined
  };
}

export const QueryAttestedChallengeResponse = {
  encode(message: QueryAttestedChallengeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.challenge !== undefined) {
      AttestedChallenge.encode(message.challenge, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAttestedChallengeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAttestedChallengeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.challenge = AttestedChallenge.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAttestedChallengeResponse {
    return {
      challenge: isSet(object.challenge) ? AttestedChallenge.fromJSON(object.challenge) : undefined
    };
  },

  toJSON(message: QueryAttestedChallengeResponse): unknown {
    const obj: any = {};
    message.challenge !== undefined && (obj.challenge = message.challenge ? AttestedChallenge.toJSON(message.challenge) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAttestedChallengeResponse>, I>>(object: I): QueryAttestedChallengeResponse {
    const message = createBaseQueryAttestedChallengeResponse();
    message.challenge = object.challenge !== undefined && object.challenge !== null ? AttestedChallenge.fromPartial(object.challenge) : undefined;
    return message;
  },

  fromSDK(object: QueryAttestedChallengeResponseSDKType): QueryAttestedChallengeResponse {
    return {
      challenge: object.challenge ? AttestedChallenge.fromSDK(object.challenge) : undefined
    };
  },

  toSDK(message: QueryAttestedChallengeResponse): QueryAttestedChallengeResponseSDKType {
    const obj: any = {};
    message.challenge !== undefined && (obj.challenge = message.challenge ? AttestedChallenge.toSDK(message.challenge) : undefined);
    return obj;
  }

};

function createBaseQueryLatestAttestedChallengesRequest(): QueryLatestAttestedChallengesRequest {
  return {};
}

export const QueryLatestAttestedChallengesRequest = {
  encode(_: QueryLatestAttestedChallengesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLatestAttestedChallengesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLatestAttestedChallengesRequest();

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

  fromJSON(_: any): QueryLatestAttestedChallengesRequest {
    return {};
  },

  toJSON(_: QueryLatestAttestedChallengesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLatestAttestedChallengesRequest>, I>>(_: I): QueryLatestAttestedChallengesRequest {
    const message = createBaseQueryLatestAttestedChallengesRequest();
    return message;
  },

  fromSDK(_: QueryLatestAttestedChallengesRequestSDKType): QueryLatestAttestedChallengesRequest {
    return {};
  },

  toSDK(_: QueryLatestAttestedChallengesRequest): QueryLatestAttestedChallengesRequestSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseQueryLatestAttestedChallengesResponse(): QueryLatestAttestedChallengesResponse {
  return {
    challenges: []
  };
}

export const QueryLatestAttestedChallengesResponse = {
  encode(message: QueryLatestAttestedChallengesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.challenges) {
      AttestedChallenge.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLatestAttestedChallengesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLatestAttestedChallengesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.challenges.push(AttestedChallenge.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryLatestAttestedChallengesResponse {
    return {
      challenges: Array.isArray(object?.challenges) ? object.challenges.map((e: any) => AttestedChallenge.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryLatestAttestedChallengesResponse): unknown {
    const obj: any = {};

    if (message.challenges) {
      obj.challenges = message.challenges.map(e => e ? AttestedChallenge.toJSON(e) : undefined);
    } else {
      obj.challenges = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLatestAttestedChallengesResponse>, I>>(object: I): QueryLatestAttestedChallengesResponse {
    const message = createBaseQueryLatestAttestedChallengesResponse();
    message.challenges = object.challenges?.map(e => AttestedChallenge.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: QueryLatestAttestedChallengesResponseSDKType): QueryLatestAttestedChallengesResponse {
    return {
      challenges: Array.isArray(object?.challenges) ? object.challenges.map((e: any) => AttestedChallenge.fromSDK(e)) : []
    };
  },

  toSDK(message: QueryLatestAttestedChallengesResponse): QueryLatestAttestedChallengesResponseSDKType {
    const obj: any = {};

    if (message.challenges) {
      obj.challenges = message.challenges.map(e => e ? AttestedChallenge.toSDK(e) : undefined);
    } else {
      obj.challenges = [];
    }

    return obj;
  }

};

function createBaseQueryInturnAttestationSubmitterRequest(): QueryInturnAttestationSubmitterRequest {
  return {};
}

export const QueryInturnAttestationSubmitterRequest = {
  encode(_: QueryInturnAttestationSubmitterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryInturnAttestationSubmitterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInturnAttestationSubmitterRequest();

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

  fromJSON(_: any): QueryInturnAttestationSubmitterRequest {
    return {};
  },

  toJSON(_: QueryInturnAttestationSubmitterRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryInturnAttestationSubmitterRequest>, I>>(_: I): QueryInturnAttestationSubmitterRequest {
    const message = createBaseQueryInturnAttestationSubmitterRequest();
    return message;
  },

  fromSDK(_: QueryInturnAttestationSubmitterRequestSDKType): QueryInturnAttestationSubmitterRequest {
    return {};
  },

  toSDK(_: QueryInturnAttestationSubmitterRequest): QueryInturnAttestationSubmitterRequestSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseQueryInturnAttestationSubmitterResponse(): QueryInturnAttestationSubmitterResponse {
  return {
    blsPubKey: "",
    submitInterval: undefined
  };
}

export const QueryInturnAttestationSubmitterResponse = {
  encode(message: QueryInturnAttestationSubmitterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blsPubKey !== "") {
      writer.uint32(10).string(message.blsPubKey);
    }

    if (message.submitInterval !== undefined) {
      SubmitInterval.encode(message.submitInterval, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryInturnAttestationSubmitterResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInturnAttestationSubmitterResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.blsPubKey = reader.string();
          break;

        case 2:
          message.submitInterval = SubmitInterval.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryInturnAttestationSubmitterResponse {
    return {
      blsPubKey: isSet(object.blsPubKey) ? String(object.blsPubKey) : "",
      submitInterval: isSet(object.submitInterval) ? SubmitInterval.fromJSON(object.submitInterval) : undefined
    };
  },

  toJSON(message: QueryInturnAttestationSubmitterResponse): unknown {
    const obj: any = {};
    message.blsPubKey !== undefined && (obj.blsPubKey = message.blsPubKey);
    message.submitInterval !== undefined && (obj.submitInterval = message.submitInterval ? SubmitInterval.toJSON(message.submitInterval) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryInturnAttestationSubmitterResponse>, I>>(object: I): QueryInturnAttestationSubmitterResponse {
    const message = createBaseQueryInturnAttestationSubmitterResponse();
    message.blsPubKey = object.blsPubKey ?? "";
    message.submitInterval = object.submitInterval !== undefined && object.submitInterval !== null ? SubmitInterval.fromPartial(object.submitInterval) : undefined;
    return message;
  },

  fromSDK(object: QueryInturnAttestationSubmitterResponseSDKType): QueryInturnAttestationSubmitterResponse {
    return {
      blsPubKey: object?.bls_pub_key,
      submitInterval: object.submit_interval ? SubmitInterval.fromSDK(object.submit_interval) : undefined
    };
  },

  toSDK(message: QueryInturnAttestationSubmitterResponse): QueryInturnAttestationSubmitterResponseSDKType {
    const obj: any = {};
    obj.bls_pub_key = message.blsPubKey;
    message.submitInterval !== undefined && (obj.submit_interval = message.submitInterval ? SubmitInterval.toSDK(message.submitInterval) : undefined);
    return obj;
  }

};

function createBaseSubmitInterval(): SubmitInterval {
  return {
    start: Long.UZERO,
    end: Long.UZERO
  };
}

export const SubmitInterval = {
  encode(message: SubmitInterval, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.start.isZero()) {
      writer.uint32(8).uint64(message.start);
    }

    if (!message.end.isZero()) {
      writer.uint32(16).uint64(message.end);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubmitInterval {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubmitInterval();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.start = (reader.uint64() as Long);
          break;

        case 2:
          message.end = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SubmitInterval {
    return {
      start: isSet(object.start) ? Long.fromValue(object.start) : Long.UZERO,
      end: isSet(object.end) ? Long.fromValue(object.end) : Long.UZERO
    };
  },

  toJSON(message: SubmitInterval): unknown {
    const obj: any = {};
    message.start !== undefined && (obj.start = (message.start || Long.UZERO).toString());
    message.end !== undefined && (obj.end = (message.end || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SubmitInterval>, I>>(object: I): SubmitInterval {
    const message = createBaseSubmitInterval();
    message.start = object.start !== undefined && object.start !== null ? Long.fromValue(object.start) : Long.UZERO;
    message.end = object.end !== undefined && object.end !== null ? Long.fromValue(object.end) : Long.UZERO;
    return message;
  },

  fromSDK(object: SubmitIntervalSDKType): SubmitInterval {
    return {
      start: object?.start,
      end: object?.end
    };
  },

  toSDK(message: SubmitInterval): SubmitIntervalSDKType {
    const obj: any = {};
    obj.start = message.start;
    obj.end = message.end;
    return obj;
  }

};
/** Query defines the gRPC querier service. */

export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries the attested challenge by challenge id. */

  AttestedChallenge(request: QueryAttestedChallengeRequest): Promise<QueryAttestedChallengeResponse>;
  /** Queries the latest attested challenges. */

  LatestAttestedChallenges(request?: QueryLatestAttestedChallengesRequest): Promise<QueryLatestAttestedChallengesResponse>;
  /** Queries the inturn challenger. */

  InturnAttestationSubmitter(request?: QueryInturnAttestationSubmitterRequest): Promise<QueryInturnAttestationSubmitterResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.AttestedChallenge = this.AttestedChallenge.bind(this);
    this.LatestAttestedChallenges = this.LatestAttestedChallenges.bind(this);
    this.InturnAttestationSubmitter = this.InturnAttestationSubmitter.bind(this);
  }

  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.challenge.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  AttestedChallenge(request: QueryAttestedChallengeRequest): Promise<QueryAttestedChallengeResponse> {
    const data = QueryAttestedChallengeRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.challenge.Query", "AttestedChallenge", data);
    return promise.then(data => QueryAttestedChallengeResponse.decode(new _m0.Reader(data)));
  }

  LatestAttestedChallenges(request: QueryLatestAttestedChallengesRequest = {}): Promise<QueryLatestAttestedChallengesResponse> {
    const data = QueryLatestAttestedChallengesRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.challenge.Query", "LatestAttestedChallenges", data);
    return promise.then(data => QueryLatestAttestedChallengesResponse.decode(new _m0.Reader(data)));
  }

  InturnAttestationSubmitter(request: QueryInturnAttestationSubmitterRequest = {}): Promise<QueryInturnAttestationSubmitterResponse> {
    const data = QueryInturnAttestationSubmitterRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.challenge.Query", "InturnAttestationSubmitter", data);
    return promise.then(data => QueryInturnAttestationSubmitterResponse.decode(new _m0.Reader(data)));
  }

}