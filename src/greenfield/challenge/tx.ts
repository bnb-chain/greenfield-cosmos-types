//@ts-nocheck
/* eslint-disable */
import { VoteResult, voteResultFromJSON, voteResultToJSON } from "./types";
import { Params, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact, bytesFromBase64, base64FromBytes, Rpc } from "../../helpers";
export const protobufPackage = "greenfield.challenge";
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
export interface MsgSubmitProtoMsg {
  typeUrl: "/greenfield.challenge.MsgSubmit";
  value: Uint8Array;
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
export interface MsgSubmitResponse {
  /** The id of the challenge. */
  challengeId: bigint;
}
export interface MsgSubmitResponseProtoMsg {
  typeUrl: "/greenfield.challenge.MsgSubmitResponse";
  value: Uint8Array;
}
/** MsgSubmitResponse defines the response of MsgSubmit. */
export interface MsgSubmitResponseSDKType {
  challenge_id: bigint;
}
/** MsgSubmit defines the message for attesting challenges. */
export interface MsgAttest {
  /** The submitter address. */
  submitter: string;
  /** The id of the challenge. */
  challengeId: bigint;
  /** The id of the object info. */
  objectId: string;
  /** The storage provider to be challenged. */
  spOperatorAddress: string;
  /** Vote result of the attestation. */
  voteResult: VoteResult;
  /** The challenger who submits the challenge, which can be empty. */
  challengerAddress: string;
  /** The validators participated in the attestation. */
  voteValidatorSet: bigint[];
  /** The aggregated BLS signature from the validators. */
  voteAggSignature: Uint8Array;
}
export interface MsgAttestProtoMsg {
  typeUrl: "/greenfield.challenge.MsgAttest";
  value: Uint8Array;
}
/** MsgSubmit defines the message for attesting challenges. */
export interface MsgAttestSDKType {
  submitter: string;
  challenge_id: bigint;
  object_id: string;
  sp_operator_address: string;
  vote_result: VoteResult;
  challenger_address: string;
  vote_validator_set: bigint[];
  vote_agg_signature: Uint8Array;
}
/** MsgAttest defines the response of MsgAttestResponse. */
export interface MsgAttestResponse {}
export interface MsgAttestResponseProtoMsg {
  typeUrl: "/greenfield.challenge.MsgAttestResponse";
  value: Uint8Array;
}
/** MsgAttest defines the response of MsgAttestResponse. */
export interface MsgAttestResponseSDKType {}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /**
   * params defines the x/challenge parameters to update.
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/greenfield.challenge.MsgUpdateParams";
  value: Uint8Array;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/** MsgUpdateParamsResponse defines the response structure for executing a MsgUpdateParams message. */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/greenfield.challenge.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/** MsgUpdateParamsResponse defines the response structure for executing a MsgUpdateParams message. */
export interface MsgUpdateParamsResponseSDKType {}
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
  typeUrl: "/greenfield.challenge.MsgSubmit",
  encode(message: MsgSubmit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: MsgSubmitAmino): MsgSubmit {
    const message = createBaseMsgSubmit();
    if (object.challenger !== undefined && object.challenger !== null) {
      message.challenger = object.challenger;
    }
    if (object.sp_operator_address !== undefined && object.sp_operator_address !== null) {
      message.spOperatorAddress = object.sp_operator_address;
    }
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    if (object.object_name !== undefined && object.object_name !== null) {
      message.objectName = object.object_name;
    }
    if (object.segment_index !== undefined && object.segment_index !== null) {
      message.segmentIndex = object.segment_index;
    }
    if (object.random_index !== undefined && object.random_index !== null) {
      message.randomIndex = object.random_index;
    }
    return message;
  },
  toAmino(message: MsgSubmit): MsgSubmitAmino {
    const obj: any = {};
    obj.challenger = message.challenger;
    obj.sp_operator_address = message.spOperatorAddress;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    obj.segment_index = message.segmentIndex;
    obj.random_index = message.randomIndex;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitAminoMsg): MsgSubmit {
    return MsgSubmit.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitProtoMsg): MsgSubmit {
    return MsgSubmit.decode(message.value);
  },
  toProto(message: MsgSubmit): Uint8Array {
    return MsgSubmit.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmit): MsgSubmitProtoMsg {
    return {
      typeUrl: "/greenfield.challenge.MsgSubmit",
      value: MsgSubmit.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitResponse(): MsgSubmitResponse {
  return {
    challengeId: BigInt(0)
  };
}
export const MsgSubmitResponse = {
  typeUrl: "/greenfield.challenge.MsgSubmitResponse",
  encode(message: MsgSubmitResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.challengeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.challengeId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.challengeId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSubmitResponse {
    return {
      challengeId: isSet(object.challengeId) ? BigInt(object.challengeId.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgSubmitResponse): unknown {
    const obj: any = {};
    message.challengeId !== undefined && (obj.challengeId = (message.challengeId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubmitResponse>, I>>(object: I): MsgSubmitResponse {
    const message = createBaseMsgSubmitResponse();
    message.challengeId = object.challengeId !== undefined && object.challengeId !== null ? BigInt(object.challengeId.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: MsgSubmitResponseSDKType): MsgSubmitResponse {
    return {
      challengeId: object?.challenge_id
    };
  },
  toSDK(message: MsgSubmitResponse): MsgSubmitResponseSDKType {
    const obj: any = {};
    obj.challenge_id = message.challengeId;
    return obj;
  },
  fromAmino(object: MsgSubmitResponseAmino): MsgSubmitResponse {
    const message = createBaseMsgSubmitResponse();
    if (object.challenge_id !== undefined && object.challenge_id !== null) {
      message.challengeId = BigInt(object.challenge_id);
    }
    return message;
  },
  toAmino(message: MsgSubmitResponse): MsgSubmitResponseAmino {
    const obj: any = {};
    obj.challenge_id = message.challengeId ? message.challengeId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitResponseAminoMsg): MsgSubmitResponse {
    return MsgSubmitResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitResponseProtoMsg): MsgSubmitResponse {
    return MsgSubmitResponse.decode(message.value);
  },
  toProto(message: MsgSubmitResponse): Uint8Array {
    return MsgSubmitResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitResponse): MsgSubmitResponseProtoMsg {
    return {
      typeUrl: "/greenfield.challenge.MsgSubmitResponse",
      value: MsgSubmitResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAttest(): MsgAttest {
  return {
    submitter: "",
    challengeId: BigInt(0),
    objectId: "",
    spOperatorAddress: "",
    voteResult: 0,
    challengerAddress: "",
    voteValidatorSet: [],
    voteAggSignature: new Uint8Array()
  };
}
export const MsgAttest = {
  typeUrl: "/greenfield.challenge.MsgAttest",
  encode(message: MsgAttest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.submitter !== "") {
      writer.uint32(10).string(message.submitter);
    }
    if (message.challengeId !== BigInt(0)) {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAttest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAttest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submitter = reader.string();
          break;
        case 2:
          message.challengeId = reader.uint64();
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
              message.voteValidatorSet.push(reader.fixed64());
            }
          } else {
            message.voteValidatorSet.push(reader.fixed64());
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
      challengeId: isSet(object.challengeId) ? BigInt(object.challengeId.toString()) : BigInt(0),
      objectId: isSet(object.objectId) ? String(object.objectId) : "",
      spOperatorAddress: isSet(object.spOperatorAddress) ? String(object.spOperatorAddress) : "",
      voteResult: isSet(object.voteResult) ? voteResultFromJSON(object.voteResult) : -1,
      challengerAddress: isSet(object.challengerAddress) ? String(object.challengerAddress) : "",
      voteValidatorSet: Array.isArray(object?.voteValidatorSet) ? object.voteValidatorSet.map((e: any) => BigInt(e.toString())) : [],
      voteAggSignature: isSet(object.voteAggSignature) ? bytesFromBase64(object.voteAggSignature) : new Uint8Array()
    };
  },
  toJSON(message: MsgAttest): unknown {
    const obj: any = {};
    message.submitter !== undefined && (obj.submitter = message.submitter);
    message.challengeId !== undefined && (obj.challengeId = (message.challengeId || BigInt(0)).toString());
    message.objectId !== undefined && (obj.objectId = message.objectId);
    message.spOperatorAddress !== undefined && (obj.spOperatorAddress = message.spOperatorAddress);
    message.voteResult !== undefined && (obj.voteResult = voteResultToJSON(message.voteResult));
    message.challengerAddress !== undefined && (obj.challengerAddress = message.challengerAddress);
    if (message.voteValidatorSet) {
      obj.voteValidatorSet = message.voteValidatorSet.map(e => (e || BigInt(0)).toString());
    } else {
      obj.voteValidatorSet = [];
    }
    message.voteAggSignature !== undefined && (obj.voteAggSignature = base64FromBytes(message.voteAggSignature !== undefined ? message.voteAggSignature : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgAttest>, I>>(object: I): MsgAttest {
    const message = createBaseMsgAttest();
    message.submitter = object.submitter ?? "";
    message.challengeId = object.challengeId !== undefined && object.challengeId !== null ? BigInt(object.challengeId.toString()) : BigInt(0);
    message.objectId = object.objectId ?? "";
    message.spOperatorAddress = object.spOperatorAddress ?? "";
    message.voteResult = object.voteResult ?? 0;
    message.challengerAddress = object.challengerAddress ?? "";
    message.voteValidatorSet = object.voteValidatorSet?.map(e => BigInt(e.toString())) || [];
    message.voteAggSignature = object.voteAggSignature ?? new Uint8Array();
    return message;
  },
  fromSDK(object: MsgAttestSDKType): MsgAttest {
    return {
      submitter: object?.submitter,
      challengeId: object?.challenge_id,
      objectId: object?.object_id,
      spOperatorAddress: object?.sp_operator_address,
      voteResult: isSet(object.vote_result) ? voteResultFromJSON(object.vote_result) : -1,
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
  },
  fromAmino(object: MsgAttestAmino): MsgAttest {
    const message = createBaseMsgAttest();
    if (object.submitter !== undefined && object.submitter !== null) {
      message.submitter = object.submitter;
    }
    if (object.challenge_id !== undefined && object.challenge_id !== null) {
      message.challengeId = BigInt(object.challenge_id);
    }
    if (object.object_id !== undefined && object.object_id !== null) {
      message.objectId = object.object_id;
    }
    if (object.sp_operator_address !== undefined && object.sp_operator_address !== null) {
      message.spOperatorAddress = object.sp_operator_address;
    }
    if (object.vote_result !== undefined && object.vote_result !== null) {
      message.voteResult = voteResultFromJSON(object.vote_result);
    }
    if (object.challenger_address !== undefined && object.challenger_address !== null) {
      message.challengerAddress = object.challenger_address;
    }
    message.voteValidatorSet = object.vote_validator_set?.map(e => BigInt(e)) || [];
    if (object.vote_agg_signature !== undefined && object.vote_agg_signature !== null) {
      message.voteAggSignature = bytesFromBase64(object.vote_agg_signature);
    }
    return message;
  },
  toAmino(message: MsgAttest): MsgAttestAmino {
    const obj: any = {};
    obj.submitter = message.submitter;
    obj.challenge_id = message.challengeId ? message.challengeId.toString() : undefined;
    obj.object_id = message.objectId;
    obj.sp_operator_address = message.spOperatorAddress;
    obj.vote_result = voteResultToJSON(message.voteResult);
    obj.challenger_address = message.challengerAddress;
    if (message.voteValidatorSet) {
      obj.vote_validator_set = message.voteValidatorSet.map(e => e.toString());
    } else {
      obj.vote_validator_set = [];
    }
    obj.vote_agg_signature = message.voteAggSignature ? base64FromBytes(message.voteAggSignature) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgAttestAminoMsg): MsgAttest {
    return MsgAttest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAttestProtoMsg): MsgAttest {
    return MsgAttest.decode(message.value);
  },
  toProto(message: MsgAttest): Uint8Array {
    return MsgAttest.encode(message).finish();
  },
  toProtoMsg(message: MsgAttest): MsgAttestProtoMsg {
    return {
      typeUrl: "/greenfield.challenge.MsgAttest",
      value: MsgAttest.encode(message).finish()
    };
  }
};
function createBaseMsgAttestResponse(): MsgAttestResponse {
  return {};
}
export const MsgAttestResponse = {
  typeUrl: "/greenfield.challenge.MsgAttestResponse",
  encode(_: MsgAttestResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAttestResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_: MsgAttestResponseAmino): MsgAttestResponse {
    const message = createBaseMsgAttestResponse();
    return message;
  },
  toAmino(_: MsgAttestResponse): MsgAttestResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAttestResponseAminoMsg): MsgAttestResponse {
    return MsgAttestResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAttestResponseProtoMsg): MsgAttestResponse {
    return MsgAttestResponse.decode(message.value);
  },
  toProto(message: MsgAttestResponse): Uint8Array {
    return MsgAttestResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAttestResponse): MsgAttestResponseProtoMsg {
    return {
      typeUrl: "/greenfield.challenge.MsgAttestResponse",
      value: MsgAttestResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/greenfield.challenge.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromSDK(object: MsgUpdateParamsSDKType): MsgUpdateParams {
    return {
      authority: object?.authority,
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },
  toSDK(message: MsgUpdateParams): MsgUpdateParamsSDKType {
    const obj: any = {};
    obj.authority = message.authority;
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/greenfield.challenge.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/greenfield.challenge.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromSDK(_: MsgUpdateParamsResponseSDKType): MsgUpdateParamsResponse {
    return {};
  },
  toSDK(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/greenfield.challenge.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
/** Msg defines the Msg service. */
export interface Msg {
  Submit(request: MsgSubmit): Promise<MsgSubmitResponse>;
  Attest(request: MsgAttest): Promise<MsgAttestResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/challenge module parameters.
   * The authority is defined in the keeper.
   * 
   * Since: cosmos-sdk 0.47
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Submit = this.Submit.bind(this);
    this.Attest = this.Attest.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  Submit(request: MsgSubmit): Promise<MsgSubmitResponse> {
    const data = MsgSubmit.encode(request).finish();
    const promise = this.rpc.request("greenfield.challenge.Msg", "Submit", data);
    return promise.then(data => MsgSubmitResponse.decode(new BinaryReader(data)));
  }
  Attest(request: MsgAttest): Promise<MsgAttestResponse> {
    const data = MsgAttest.encode(request).finish();
    const promise = this.rpc.request("greenfield.challenge.Msg", "Attest", data);
    return promise.then(data => MsgAttestResponse.decode(new BinaryReader(data)));
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("greenfield.challenge.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}