/* eslint-disable */
import { VoteResult, voteResultFromJSON, voteResultToJSON } from "./types";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact, Long, bytesFromBase64, base64FromBytes, Rpc } from "../../helpers";
export const protobufPackage = "bnbchain.greenfield.challenge";
export interface MsgSubmit {
  /** The challenger address. */
  challenger: string;
  /** The storage provider to be challenged. */

  sp_operator_address: string;
  /** The bucket of the object info to be challenged. */

  bucket_name: string;
  /** The name of the object info to be challenged. */

  object_name: string;
  /** The index of segment/piece to challenge, start from zero. */

  segment_index: number;
  /** Randomly pick a segment/piece to challenge or not. */

  random_index: boolean;
}
export interface MsgSubmitResponse {}
export interface MsgAttest {
  /** The submitter address. */
  submitter: string;
  /** The id of the challenge. */

  challenge_id: Long;
  /** The id of the object info. */

  object_id: string;
  /** The storage provider to be challenged. */

  sp_operator_address: string;
  /** Vote result of the attestation. */

  vote_result: VoteResult;
  /** The challenger who submits the challenge, which can be empty. */

  challenger_address: string;
  /** The validators participated in the attestation. */

  vote_validator_set: Long[];
  /** The aggregated BLS signature from the validators. */

  vote_agg_signature: Uint8Array;
}
export interface MsgAttestResponse {}

function createBaseMsgSubmit(): MsgSubmit {
  return {
    challenger: "",
    sp_operator_address: "",
    bucket_name: "",
    object_name: "",
    segment_index: 0,
    random_index: false
  };
}

export const MsgSubmit = {
  encode(message: MsgSubmit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.challenger !== "") {
      writer.uint32(10).string(message.challenger);
    }

    if (message.sp_operator_address !== "") {
      writer.uint32(18).string(message.sp_operator_address);
    }

    if (message.bucket_name !== "") {
      writer.uint32(26).string(message.bucket_name);
    }

    if (message.object_name !== "") {
      writer.uint32(34).string(message.object_name);
    }

    if (message.segment_index !== 0) {
      writer.uint32(40).uint32(message.segment_index);
    }

    if (message.random_index === true) {
      writer.uint32(48).bool(message.random_index);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.challenger = reader.string();
          break;

        case 2:
          message.sp_operator_address = reader.string();
          break;

        case 3:
          message.bucket_name = reader.string();
          break;

        case 4:
          message.object_name = reader.string();
          break;

        case 5:
          message.segment_index = reader.uint32();
          break;

        case 6:
          message.random_index = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgSubmit {
    return {
      challenger: isSet(object.challenger) ? String(object.challenger) : "",
      sp_operator_address: isSet(object.sp_operator_address) ? String(object.sp_operator_address) : "",
      bucket_name: isSet(object.bucket_name) ? String(object.bucket_name) : "",
      object_name: isSet(object.object_name) ? String(object.object_name) : "",
      segment_index: isSet(object.segment_index) ? Number(object.segment_index) : 0,
      random_index: isSet(object.random_index) ? Boolean(object.random_index) : false
    };
  },

  toJSON(message: MsgSubmit): unknown {
    const obj: any = {};
    message.challenger !== undefined && (obj.challenger = message.challenger);
    message.sp_operator_address !== undefined && (obj.sp_operator_address = message.sp_operator_address);
    message.bucket_name !== undefined && (obj.bucket_name = message.bucket_name);
    message.object_name !== undefined && (obj.object_name = message.object_name);
    message.segment_index !== undefined && (obj.segment_index = Math.round(message.segment_index));
    message.random_index !== undefined && (obj.random_index = message.random_index);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSubmit>, I>>(object: I): MsgSubmit {
    const message = createBaseMsgSubmit();
    message.challenger = object.challenger ?? "";
    message.sp_operator_address = object.sp_operator_address ?? "";
    message.bucket_name = object.bucket_name ?? "";
    message.object_name = object.object_name ?? "";
    message.segment_index = object.segment_index ?? 0;
    message.random_index = object.random_index ?? false;
    return message;
  }

};

function createBaseMsgSubmitResponse(): MsgSubmitResponse {
  return {};
}

export const MsgSubmitResponse = {
  encode(_: MsgSubmitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitResponse();

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

  fromJSON(_: any): MsgSubmitResponse {
    return {};
  },

  toJSON(_: MsgSubmitResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSubmitResponse>, I>>(_: I): MsgSubmitResponse {
    const message = createBaseMsgSubmitResponse();
    return message;
  }

};

function createBaseMsgAttest(): MsgAttest {
  return {
    submitter: "",
    challenge_id: Long.UZERO,
    object_id: "",
    sp_operator_address: "",
    vote_result: 0,
    challenger_address: "",
    vote_validator_set: [],
    vote_agg_signature: new Uint8Array()
  };
}

export const MsgAttest = {
  encode(message: MsgAttest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.submitter !== "") {
      writer.uint32(10).string(message.submitter);
    }

    if (!message.challenge_id.isZero()) {
      writer.uint32(16).uint64(message.challenge_id);
    }

    if (message.object_id !== "") {
      writer.uint32(26).string(message.object_id);
    }

    if (message.sp_operator_address !== "") {
      writer.uint32(34).string(message.sp_operator_address);
    }

    if (message.vote_result !== 0) {
      writer.uint32(40).int32(message.vote_result);
    }

    if (message.challenger_address !== "") {
      writer.uint32(50).string(message.challenger_address);
    }

    writer.uint32(58).fork();

    for (const v of message.vote_validator_set) {
      writer.fixed64(v);
    }

    writer.ldelim();

    if (message.vote_agg_signature.length !== 0) {
      writer.uint32(66).bytes(message.vote_agg_signature);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAttest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAttest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.submitter = reader.string();
          break;

        case 2:
          message.challenge_id = (reader.uint64() as Long);
          break;

        case 3:
          message.object_id = reader.string();
          break;

        case 4:
          message.sp_operator_address = reader.string();
          break;

        case 5:
          message.vote_result = (reader.int32() as any);
          break;

        case 6:
          message.challenger_address = reader.string();
          break;

        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.vote_validator_set.push((reader.fixed64() as Long));
            }
          } else {
            message.vote_validator_set.push((reader.fixed64() as Long));
          }

          break;

        case 8:
          message.vote_agg_signature = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgAttest {
    return {
      submitter: isSet(object.submitter) ? String(object.submitter) : "",
      challenge_id: isSet(object.challenge_id) ? Long.fromValue(object.challenge_id) : Long.UZERO,
      object_id: isSet(object.object_id) ? String(object.object_id) : "",
      sp_operator_address: isSet(object.sp_operator_address) ? String(object.sp_operator_address) : "",
      vote_result: isSet(object.vote_result) ? voteResultFromJSON(object.vote_result) : 0,
      challenger_address: isSet(object.challenger_address) ? String(object.challenger_address) : "",
      vote_validator_set: Array.isArray(object?.vote_validator_set) ? object.vote_validator_set.map((e: any) => Long.fromValue(e)) : [],
      vote_agg_signature: isSet(object.vote_agg_signature) ? bytesFromBase64(object.vote_agg_signature) : new Uint8Array()
    };
  },

  toJSON(message: MsgAttest): unknown {
    const obj: any = {};
    message.submitter !== undefined && (obj.submitter = message.submitter);
    message.challenge_id !== undefined && (obj.challenge_id = (message.challenge_id || Long.UZERO).toString());
    message.object_id !== undefined && (obj.object_id = message.object_id);
    message.sp_operator_address !== undefined && (obj.sp_operator_address = message.sp_operator_address);
    message.vote_result !== undefined && (obj.vote_result = voteResultToJSON(message.vote_result));
    message.challenger_address !== undefined && (obj.challenger_address = message.challenger_address);

    if (message.vote_validator_set) {
      obj.vote_validator_set = message.vote_validator_set.map(e => (e || Long.ZERO).toString());
    } else {
      obj.vote_validator_set = [];
    }

    message.vote_agg_signature !== undefined && (obj.vote_agg_signature = base64FromBytes(message.vote_agg_signature !== undefined ? message.vote_agg_signature : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAttest>, I>>(object: I): MsgAttest {
    const message = createBaseMsgAttest();
    message.submitter = object.submitter ?? "";
    message.challenge_id = object.challenge_id !== undefined && object.challenge_id !== null ? Long.fromValue(object.challenge_id) : Long.UZERO;
    message.object_id = object.object_id ?? "";
    message.sp_operator_address = object.sp_operator_address ?? "";
    message.vote_result = object.vote_result ?? 0;
    message.challenger_address = object.challenger_address ?? "";
    message.vote_validator_set = object.vote_validator_set?.map(e => Long.fromValue(e)) || [];
    message.vote_agg_signature = object.vote_agg_signature ?? new Uint8Array();
    return message;
  }

};

function createBaseMsgAttestResponse(): MsgAttestResponse {
  return {};
}

export const MsgAttestResponse = {
  encode(_: MsgAttestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAttestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAttestResponse();

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

  fromJSON(_: any): MsgAttestResponse {
    return {};
  },

  toJSON(_: MsgAttestResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAttestResponse>, I>>(_: I): MsgAttestResponse {
    const message = createBaseMsgAttestResponse();
    return message;
  }

};
/** Msg defines the Msg service. */

export interface Msg {
  Submit(request: MsgSubmit): Promise<MsgSubmitResponse>;
  Attest(request: MsgAttest): Promise<MsgAttestResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Submit = this.Submit.bind(this);
    this.Attest = this.Attest.bind(this);
  }

  Submit(request: MsgSubmit): Promise<MsgSubmitResponse> {
    const data = MsgSubmit.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.challenge.Msg", "Submit", data);
    return promise.then(data => MsgSubmitResponse.decode(new _m0.Reader(data)));
  }

  Attest(request: MsgAttest): Promise<MsgAttestResponse> {
    const data = MsgAttest.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.challenge.Msg", "Attest", data);
    return promise.then(data => MsgAttestResponse.decode(new _m0.Reader(data)));
  }

}