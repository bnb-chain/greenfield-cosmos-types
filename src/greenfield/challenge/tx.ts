/* eslint-disable */
import { VoteResult, voteResultFromJSON, voteResultToJSON } from "./types";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact, Long, bytesFromBase64, base64FromBytes, Rpc } from "../../helpers";
export const protobufPackage = "bnbchain.greenfield.challenge";
/** MsgSubmit defines the message for submitting challenges. */

export interface MsgSubmit {
  /** The challenger address. */
  challenger: string;
  /** The storage provider to be challenged. */

  spOperatorAddress: string;
  /** The bucket of the object info to be challenged. */

  bucketName: string;
  /** The name of the object info to be challenged. */

  objectName: string;
  /** The index of segment/piece to challenge, start from zero. */

  segmentIndex: number;
  /** Randomly pick a segment/piece to challenge or not. */

  randomIndex: boolean;
}
/** MsgSubmit defines the message for submitting challenges. */

export interface MsgSubmitSDKType {
  challenger: string;
  sp_operator_address: string;
  bucket_name: string;
  object_name: string;
  segment_index: number;
  random_index: boolean;
}
/** MsgSubmitResponse defines the response of MsgSubmit. */

export interface MsgSubmitResponse {}
/** MsgSubmitResponse defines the response of MsgSubmit. */

export interface MsgSubmitResponseSDKType {}
/** MsgSubmit defines the message for attesting challenges. */

export interface MsgAttest {
  /** The submitter address. */
  submitter: string;
  /** The id of the challenge. */

  challengeId: Long;
  /** The id of the object info. */

  objectId: string;
  /** The storage provider to be challenged. */

  spOperatorAddress: string;
  /** Vote result of the attestation. */

  voteResult: VoteResult;
  /** The challenger who submits the challenge, which can be empty. */

  challengerAddress: string;
  /** The validators participated in the attestation. */

  voteValidatorSet: Long[];
  /** The aggregated BLS signature from the validators. */

  voteAggSignature: Uint8Array;
}
/** MsgSubmit defines the message for attesting challenges. */

export interface MsgAttestSDKType {
  submitter: string;
  challenge_id: Long;
  object_id: string;
  sp_operator_address: string;
  vote_result: VoteResult;
  challenger_address: string;
  vote_validator_set: Long[];
  vote_agg_signature: Uint8Array;
}
/** MsgAttest defines the response of MsgAttestResponse. */

export interface MsgAttestResponse {}
/** MsgAttest defines the response of MsgAttestResponse. */

export interface MsgAttestResponseSDKType {}

function createBaseMsgSubmit(): MsgSubmit {
  return {
    challenger: "",
    spOperatorAddress: "",
    bucketName: "",
    objectName: "",
    segmentIndex: 0,
    randomIndex: false
  };
}

export const MsgSubmit = {
  encode(message: MsgSubmit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.challenger !== "") {
      writer.uint32(10).string(message.challenger);
    }

    if (message.spOperatorAddress !== "") {
      writer.uint32(18).string(message.spOperatorAddress);
    }

    if (message.bucketName !== "") {
      writer.uint32(26).string(message.bucketName);
    }

    if (message.objectName !== "") {
      writer.uint32(34).string(message.objectName);
    }

    if (message.segmentIndex !== 0) {
      writer.uint32(40).uint32(message.segmentIndex);
    }

    if (message.randomIndex === true) {
      writer.uint32(48).bool(message.randomIndex);
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
          message.spOperatorAddress = reader.string();
          break;

        case 3:
          message.bucketName = reader.string();
          break;

        case 4:
          message.objectName = reader.string();
          break;

        case 5:
          message.segmentIndex = reader.uint32();
          break;

        case 6:
          message.randomIndex = reader.bool();
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
      spOperatorAddress: isSet(object.spOperatorAddress) ? String(object.spOperatorAddress) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      objectName: isSet(object.objectName) ? String(object.objectName) : "",
      segmentIndex: isSet(object.segmentIndex) ? Number(object.segmentIndex) : 0,
      randomIndex: isSet(object.randomIndex) ? Boolean(object.randomIndex) : false
    };
  },

  toJSON(message: MsgSubmit): unknown {
    const obj: any = {};
    message.challenger !== undefined && (obj.challenger = message.challenger);
    message.spOperatorAddress !== undefined && (obj.spOperatorAddress = message.spOperatorAddress);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.objectName !== undefined && (obj.objectName = message.objectName);
    message.segmentIndex !== undefined && (obj.segmentIndex = Math.round(message.segmentIndex));
    message.randomIndex !== undefined && (obj.randomIndex = message.randomIndex);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSubmit>, I>>(object: I): MsgSubmit {
    const message = createBaseMsgSubmit();
    message.challenger = object.challenger ?? "";
    message.spOperatorAddress = object.spOperatorAddress ?? "";
    message.bucketName = object.bucketName ?? "";
    message.objectName = object.objectName ?? "";
    message.segmentIndex = object.segmentIndex ?? 0;
    message.randomIndex = object.randomIndex ?? false;
    return message;
  },

  fromSDK(object: MsgSubmitSDKType): MsgSubmit {
    return {
      challenger: object?.challenger,
      spOperatorAddress: object?.sp_operator_address,
      bucketName: object?.bucket_name,
      objectName: object?.object_name,
      segmentIndex: object?.segment_index,
      randomIndex: object?.random_index
    };
  },

  toSDK(message: MsgSubmit): MsgSubmitSDKType {
    const obj: any = {};
    obj.challenger = message.challenger;
    obj.sp_operator_address = message.spOperatorAddress;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    obj.segment_index = message.segmentIndex;
    obj.random_index = message.randomIndex;
    return obj;
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
  },

  fromSDK(_: MsgSubmitResponseSDKType): MsgSubmitResponse {
    return {};
  },

  toSDK(_: MsgSubmitResponse): MsgSubmitResponseSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgAttest(): MsgAttest {
  return {
    submitter: "",
    challengeId: Long.UZERO,
    objectId: "",
    spOperatorAddress: "",
    voteResult: 0,
    challengerAddress: "",
    voteValidatorSet: [],
    voteAggSignature: new Uint8Array()
  };
}

export const MsgAttest = {
  encode(message: MsgAttest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.submitter !== "") {
      writer.uint32(10).string(message.submitter);
    }

    if (!message.challengeId.isZero()) {
      writer.uint32(16).uint64(message.challengeId);
    }

    if (message.objectId !== "") {
      writer.uint32(26).string(message.objectId);
    }

    if (message.spOperatorAddress !== "") {
      writer.uint32(34).string(message.spOperatorAddress);
    }

    if (message.voteResult !== 0) {
      writer.uint32(40).int32(message.voteResult);
    }

    if (message.challengerAddress !== "") {
      writer.uint32(50).string(message.challengerAddress);
    }

    writer.uint32(58).fork();

    for (const v of message.voteValidatorSet) {
      writer.fixed64(v);
    }

    writer.ldelim();

    if (message.voteAggSignature.length !== 0) {
      writer.uint32(66).bytes(message.voteAggSignature);
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
          message.challengeId = (reader.uint64() as Long);
          break;

        case 3:
          message.objectId = reader.string();
          break;

        case 4:
          message.spOperatorAddress = reader.string();
          break;

        case 5:
          message.voteResult = (reader.int32() as any);
          break;

        case 6:
          message.challengerAddress = reader.string();
          break;

        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.voteValidatorSet.push((reader.fixed64() as Long));
            }
          } else {
            message.voteValidatorSet.push((reader.fixed64() as Long));
          }

          break;

        case 8:
          message.voteAggSignature = reader.bytes();
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
      challengeId: isSet(object.challengeId) ? Long.fromValue(object.challengeId) : Long.UZERO,
      objectId: isSet(object.objectId) ? String(object.objectId) : "",
      spOperatorAddress: isSet(object.spOperatorAddress) ? String(object.spOperatorAddress) : "",
      voteResult: isSet(object.voteResult) ? voteResultFromJSON(object.voteResult) : 0,
      challengerAddress: isSet(object.challengerAddress) ? String(object.challengerAddress) : "",
      voteValidatorSet: Array.isArray(object?.voteValidatorSet) ? object.voteValidatorSet.map((e: any) => Long.fromValue(e)) : [],
      voteAggSignature: isSet(object.voteAggSignature) ? bytesFromBase64(object.voteAggSignature) : new Uint8Array()
    };
  },

  toJSON(message: MsgAttest): unknown {
    const obj: any = {};
    message.submitter !== undefined && (obj.submitter = message.submitter);
    message.challengeId !== undefined && (obj.challengeId = (message.challengeId || Long.UZERO).toString());
    message.objectId !== undefined && (obj.objectId = message.objectId);
    message.spOperatorAddress !== undefined && (obj.spOperatorAddress = message.spOperatorAddress);
    message.voteResult !== undefined && (obj.voteResult = voteResultToJSON(message.voteResult));
    message.challengerAddress !== undefined && (obj.challengerAddress = message.challengerAddress);

    if (message.voteValidatorSet) {
      obj.voteValidatorSet = message.voteValidatorSet.map(e => (e || Long.ZERO).toString());
    } else {
      obj.voteValidatorSet = [];
    }

    message.voteAggSignature !== undefined && (obj.voteAggSignature = base64FromBytes(message.voteAggSignature !== undefined ? message.voteAggSignature : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAttest>, I>>(object: I): MsgAttest {
    const message = createBaseMsgAttest();
    message.submitter = object.submitter ?? "";
    message.challengeId = object.challengeId !== undefined && object.challengeId !== null ? Long.fromValue(object.challengeId) : Long.UZERO;
    message.objectId = object.objectId ?? "";
    message.spOperatorAddress = object.spOperatorAddress ?? "";
    message.voteResult = object.voteResult ?? 0;
    message.challengerAddress = object.challengerAddress ?? "";
    message.voteValidatorSet = object.voteValidatorSet?.map(e => Long.fromValue(e)) || [];
    message.voteAggSignature = object.voteAggSignature ?? new Uint8Array();
    return message;
  },

  fromSDK(object: MsgAttestSDKType): MsgAttest {
    return {
      submitter: object?.submitter,
      challengeId: object?.challenge_id,
      objectId: object?.object_id,
      spOperatorAddress: object?.sp_operator_address,
      voteResult: isSet(object.vote_result) ? voteResultFromJSON(object.vote_result) : 0,
      challengerAddress: object?.challenger_address,
      voteValidatorSet: Array.isArray(object?.vote_validator_set) ? object.vote_validator_set.map((e: any) => e) : [],
      voteAggSignature: object?.vote_agg_signature
    };
  },

  toSDK(message: MsgAttest): MsgAttestSDKType {
    const obj: any = {};
    obj.submitter = message.submitter;
    obj.challenge_id = message.challengeId;
    obj.object_id = message.objectId;
    obj.sp_operator_address = message.spOperatorAddress;
    message.voteResult !== undefined && (obj.vote_result = voteResultToJSON(message.voteResult));
    obj.challenger_address = message.challengerAddress;

    if (message.voteValidatorSet) {
      obj.vote_validator_set = message.voteValidatorSet.map(e => e);
    } else {
      obj.vote_validator_set = [];
    }

    obj.vote_agg_signature = message.voteAggSignature;
    return obj;
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
  },

  fromSDK(_: MsgAttestResponseSDKType): MsgAttestResponse {
    return {};
  },

  toSDK(_: MsgAttestResponse): MsgAttestResponseSDKType {
    const obj: any = {};
    return obj;
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