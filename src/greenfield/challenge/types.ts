//@ts-nocheck
/* eslint-disable */
import { Long, isSet, DeepPartial, Exact } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "greenfield.challenge";
/** VoteResult defines the result attestation for a challenge. */
export enum VoteResult {
  /** CHALLENGE_FAILED - The challenge failed. */
  CHALLENGE_FAILED = 0,
  /** CHALLENGE_SUCCEED - The challenge succeed. */
  CHALLENGE_SUCCEED = 1,
  UNRECOGNIZED = -1,
}
export const VoteResultSDKType = VoteResult;
export const VoteResultAmino = VoteResult;
export function voteResultFromJSON(object: any): VoteResult {
  switch (object) {
    case 0:
    case "CHALLENGE_FAILED":
      return VoteResult.CHALLENGE_FAILED;
    case 1:
    case "CHALLENGE_SUCCEED":
      return VoteResult.CHALLENGE_SUCCEED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return VoteResult.UNRECOGNIZED;
  }
}
export function voteResultToJSON(object: VoteResult): string {
  switch (object) {
    case VoteResult.CHALLENGE_FAILED:
      return "CHALLENGE_FAILED";
    case VoteResult.CHALLENGE_SUCCEED:
      return "CHALLENGE_SUCCEED";
    case VoteResult.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Slash records the storage provider slashes, which will be pruned periodically. */
export interface Slash {
  /** The slashed storage provider. */
  spId: number;
  /** The slashed object info. */
  objectId: string;
  /** The height when the slash happened, which is used for prune purpose. */
  height: Long;
}
export interface SlashProtoMsg {
  typeUrl: "/greenfield.challenge.Slash";
  value: Uint8Array;
}
/** Slash records the storage provider slashes, which will be pruned periodically. */
export interface SlashAmino {
  /** The slashed storage provider. */
  sp_id?: number;
  /** The slashed object info. */
  object_id?: string;
  /** The height when the slash happened, which is used for prune purpose. */
  height?: string;
}
export interface SlashAminoMsg {
  type: "/greenfield.challenge.Slash";
  value: SlashAmino;
}
/** Slash records the storage provider slashes, which will be pruned periodically. */
export interface SlashSDKType {
  sp_id: number;
  object_id: string;
  height: Long;
}
/** Challenge records the challenge which are not expired yet. */
export interface Challenge {
  /** The id of the challenge. */
  id: Long;
  /** The height at which the challenge will be expired. */
  expiredHeight: Long;
}
export interface ChallengeProtoMsg {
  typeUrl: "/greenfield.challenge.Challenge";
  value: Uint8Array;
}
/** Challenge records the challenge which are not expired yet. */
export interface ChallengeAmino {
  /** The id of the challenge. */
  id?: string;
  /** The height at which the challenge will be expired. */
  expired_height?: string;
}
export interface ChallengeAminoMsg {
  type: "/greenfield.challenge.Challenge";
  value: ChallengeAmino;
}
/** Challenge records the challenge which are not expired yet. */
export interface ChallengeSDKType {
  id: Long;
  expired_height: Long;
}
/** AttestedChallenge records the challenge which are attested. */
export interface AttestedChallenge {
  /** The id of the challenge. */
  id: Long;
  /** The attestation result of the challenge. */
  result: VoteResult;
}
export interface AttestedChallengeProtoMsg {
  typeUrl: "/greenfield.challenge.AttestedChallenge";
  value: Uint8Array;
}
/** AttestedChallenge records the challenge which are attested. */
export interface AttestedChallengeAmino {
  /** The id of the challenge. */
  id?: string;
  /** The attestation result of the challenge. */
  result?: VoteResult;
}
export interface AttestedChallengeAminoMsg {
  type: "/greenfield.challenge.AttestedChallenge";
  value: AttestedChallengeAmino;
}
/** AttestedChallenge records the challenge which are attested. */
export interface AttestedChallengeSDKType {
  id: Long;
  result: VoteResult;
}
/**
 * AttestedChallengeIds stored fixed number of the latest attested challenge ids.
 * To use the storage more efficiently, a circular queue will be constructed using these fields.
 */
export interface AttestedChallengeIds {
  /** The fixed number of challenge ids to save. */
  size: Long;
  /** The latest attested challenges. */
  challenges: AttestedChallenge[];
  /** The cursor to retrieve data from the ids field. */
  cursor: Long;
}
export interface AttestedChallengeIdsProtoMsg {
  typeUrl: "/greenfield.challenge.AttestedChallengeIds";
  value: Uint8Array;
}
/**
 * AttestedChallengeIds stored fixed number of the latest attested challenge ids.
 * To use the storage more efficiently, a circular queue will be constructed using these fields.
 */
export interface AttestedChallengeIdsAmino {
  /** The fixed number of challenge ids to save. */
  size?: string;
  /** The latest attested challenges. */
  challenges?: AttestedChallengeAmino[];
  /** The cursor to retrieve data from the ids field. */
  cursor?: string;
}
export interface AttestedChallengeIdsAminoMsg {
  type: "/greenfield.challenge.AttestedChallengeIds";
  value: AttestedChallengeIdsAmino;
}
/**
 * AttestedChallengeIds stored fixed number of the latest attested challenge ids.
 * To use the storage more efficiently, a circular queue will be constructed using these fields.
 */
export interface AttestedChallengeIdsSDKType {
  size: Long;
  challenges: AttestedChallengeSDKType[];
  cursor: Long;
}
function createBaseSlash(): Slash {
  return {
    spId: 0,
    objectId: "",
    height: Long.UZERO
  };
}
export const Slash = {
  typeUrl: "/greenfield.challenge.Slash",
  encode(message: Slash, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spId !== 0) {
      writer.uint32(8).uint32(message.spId);
    }
    if (message.objectId !== "") {
      writer.uint32(18).string(message.objectId);
    }
    if (!message.height.isZero()) {
      writer.uint32(24).uint64(message.height);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Slash {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlash();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spId = reader.uint32();
          break;
        case 2:
          message.objectId = reader.string();
          break;
        case 3:
          message.height = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Slash {
    return {
      spId: isSet(object.spId) ? Number(object.spId) : 0,
      objectId: isSet(object.objectId) ? String(object.objectId) : "",
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.UZERO
    };
  },
  toJSON(message: Slash): unknown {
    const obj: any = {};
    message.spId !== undefined && (obj.spId = Math.round(message.spId));
    message.objectId !== undefined && (obj.objectId = message.objectId);
    message.height !== undefined && (obj.height = (message.height || Long.UZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Slash>, I>>(object: I): Slash {
    const message = createBaseSlash();
    message.spId = object.spId ?? 0;
    message.objectId = object.objectId ?? "";
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
    return message;
  },
  fromSDK(object: SlashSDKType): Slash {
    return {
      spId: object?.sp_id,
      objectId: object?.object_id,
      height: object?.height
    };
  },
  toSDK(message: Slash): SlashSDKType {
    const obj: any = {};
    obj.sp_id = message.spId;
    obj.object_id = message.objectId;
    obj.height = message.height;
    return obj;
  },
  fromAmino(object: SlashAmino): Slash {
    const message = createBaseSlash();
    if (object.sp_id !== undefined && object.sp_id !== null) {
      message.spId = object.sp_id;
    }
    if (object.object_id !== undefined && object.object_id !== null) {
      message.objectId = object.object_id;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Long.fromString(object.height);
    }
    return message;
  },
  toAmino(message: Slash): SlashAmino {
    const obj: any = {};
    obj.sp_id = message.spId;
    obj.object_id = message.objectId;
    obj.height = message.height ? message.height.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: SlashAminoMsg): Slash {
    return Slash.fromAmino(object.value);
  },
  fromProtoMsg(message: SlashProtoMsg): Slash {
    return Slash.decode(message.value);
  },
  toProto(message: Slash): Uint8Array {
    return Slash.encode(message).finish();
  },
  toProtoMsg(message: Slash): SlashProtoMsg {
    return {
      typeUrl: "/greenfield.challenge.Slash",
      value: Slash.encode(message).finish()
    };
  }
};
function createBaseChallenge(): Challenge {
  return {
    id: Long.UZERO,
    expiredHeight: Long.UZERO
  };
}
export const Challenge = {
  typeUrl: "/greenfield.challenge.Challenge",
  encode(message: Challenge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (!message.expiredHeight.isZero()) {
      writer.uint32(16).uint64(message.expiredHeight);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Challenge {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallenge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;
        case 2:
          message.expiredHeight = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Challenge {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      expiredHeight: isSet(object.expiredHeight) ? Long.fromValue(object.expiredHeight) : Long.UZERO
    };
  },
  toJSON(message: Challenge): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.expiredHeight !== undefined && (obj.expiredHeight = (message.expiredHeight || Long.UZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Challenge>, I>>(object: I): Challenge {
    const message = createBaseChallenge();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.expiredHeight = object.expiredHeight !== undefined && object.expiredHeight !== null ? Long.fromValue(object.expiredHeight) : Long.UZERO;
    return message;
  },
  fromSDK(object: ChallengeSDKType): Challenge {
    return {
      id: object?.id,
      expiredHeight: object?.expired_height
    };
  },
  toSDK(message: Challenge): ChallengeSDKType {
    const obj: any = {};
    obj.id = message.id;
    obj.expired_height = message.expiredHeight;
    return obj;
  },
  fromAmino(object: ChallengeAmino): Challenge {
    const message = createBaseChallenge();
    if (object.id !== undefined && object.id !== null) {
      message.id = Long.fromString(object.id);
    }
    if (object.expired_height !== undefined && object.expired_height !== null) {
      message.expiredHeight = Long.fromString(object.expired_height);
    }
    return message;
  },
  toAmino(message: Challenge): ChallengeAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.expired_height = message.expiredHeight ? message.expiredHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ChallengeAminoMsg): Challenge {
    return Challenge.fromAmino(object.value);
  },
  fromProtoMsg(message: ChallengeProtoMsg): Challenge {
    return Challenge.decode(message.value);
  },
  toProto(message: Challenge): Uint8Array {
    return Challenge.encode(message).finish();
  },
  toProtoMsg(message: Challenge): ChallengeProtoMsg {
    return {
      typeUrl: "/greenfield.challenge.Challenge",
      value: Challenge.encode(message).finish()
    };
  }
};
function createBaseAttestedChallenge(): AttestedChallenge {
  return {
    id: Long.UZERO,
    result: 0
  };
}
export const AttestedChallenge = {
  typeUrl: "/greenfield.challenge.AttestedChallenge",
  encode(message: AttestedChallenge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.result !== 0) {
      writer.uint32(16).int32(message.result);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AttestedChallenge {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttestedChallenge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;
        case 2:
          message.result = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AttestedChallenge {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      result: isSet(object.result) ? voteResultFromJSON(object.result) : -1
    };
  },
  toJSON(message: AttestedChallenge): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.result !== undefined && (obj.result = voteResultToJSON(message.result));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AttestedChallenge>, I>>(object: I): AttestedChallenge {
    const message = createBaseAttestedChallenge();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.result = object.result ?? 0;
    return message;
  },
  fromSDK(object: AttestedChallengeSDKType): AttestedChallenge {
    return {
      id: object?.id,
      result: isSet(object.result) ? voteResultFromJSON(object.result) : -1
    };
  },
  toSDK(message: AttestedChallenge): AttestedChallengeSDKType {
    const obj: any = {};
    obj.id = message.id;
    message.result !== undefined && (obj.result = voteResultToJSON(message.result));
    return obj;
  },
  fromAmino(object: AttestedChallengeAmino): AttestedChallenge {
    const message = createBaseAttestedChallenge();
    if (object.id !== undefined && object.id !== null) {
      message.id = Long.fromString(object.id);
    }
    if (object.result !== undefined && object.result !== null) {
      message.result = voteResultFromJSON(object.result);
    }
    return message;
  },
  toAmino(message: AttestedChallenge): AttestedChallengeAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.result = voteResultToJSON(message.result);
    return obj;
  },
  fromAminoMsg(object: AttestedChallengeAminoMsg): AttestedChallenge {
    return AttestedChallenge.fromAmino(object.value);
  },
  fromProtoMsg(message: AttestedChallengeProtoMsg): AttestedChallenge {
    return AttestedChallenge.decode(message.value);
  },
  toProto(message: AttestedChallenge): Uint8Array {
    return AttestedChallenge.encode(message).finish();
  },
  toProtoMsg(message: AttestedChallenge): AttestedChallengeProtoMsg {
    return {
      typeUrl: "/greenfield.challenge.AttestedChallenge",
      value: AttestedChallenge.encode(message).finish()
    };
  }
};
function createBaseAttestedChallengeIds(): AttestedChallengeIds {
  return {
    size: Long.UZERO,
    challenges: [],
    cursor: Long.ZERO
  };
}
export const AttestedChallengeIds = {
  typeUrl: "/greenfield.challenge.AttestedChallengeIds",
  encode(message: AttestedChallengeIds, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.size.isZero()) {
      writer.uint32(8).uint64(message.size);
    }
    for (const v of message.challenges) {
      AttestedChallenge.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (!message.cursor.isZero()) {
      writer.uint32(24).int64(message.cursor);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AttestedChallengeIds {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttestedChallengeIds();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.size = (reader.uint64() as Long);
          break;
        case 2:
          message.challenges.push(AttestedChallenge.decode(reader, reader.uint32()));
          break;
        case 3:
          message.cursor = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AttestedChallengeIds {
    return {
      size: isSet(object.size) ? Long.fromValue(object.size) : Long.UZERO,
      challenges: Array.isArray(object?.challenges) ? object.challenges.map((e: any) => AttestedChallenge.fromJSON(e)) : [],
      cursor: isSet(object.cursor) ? Long.fromValue(object.cursor) : Long.ZERO
    };
  },
  toJSON(message: AttestedChallengeIds): unknown {
    const obj: any = {};
    message.size !== undefined && (obj.size = (message.size || Long.UZERO).toString());
    if (message.challenges) {
      obj.challenges = message.challenges.map(e => e ? AttestedChallenge.toJSON(e) : undefined);
    } else {
      obj.challenges = [];
    }
    message.cursor !== undefined && (obj.cursor = (message.cursor || Long.ZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AttestedChallengeIds>, I>>(object: I): AttestedChallengeIds {
    const message = createBaseAttestedChallengeIds();
    message.size = object.size !== undefined && object.size !== null ? Long.fromValue(object.size) : Long.UZERO;
    message.challenges = object.challenges?.map(e => AttestedChallenge.fromPartial(e)) || [];
    message.cursor = object.cursor !== undefined && object.cursor !== null ? Long.fromValue(object.cursor) : Long.ZERO;
    return message;
  },
  fromSDK(object: AttestedChallengeIdsSDKType): AttestedChallengeIds {
    return {
      size: object?.size,
      challenges: Array.isArray(object?.challenges) ? object.challenges.map((e: any) => AttestedChallenge.fromSDK(e)) : [],
      cursor: object?.cursor
    };
  },
  toSDK(message: AttestedChallengeIds): AttestedChallengeIdsSDKType {
    const obj: any = {};
    obj.size = message.size;
    if (message.challenges) {
      obj.challenges = message.challenges.map(e => e ? AttestedChallenge.toSDK(e) : undefined);
    } else {
      obj.challenges = [];
    }
    obj.cursor = message.cursor;
    return obj;
  },
  fromAmino(object: AttestedChallengeIdsAmino): AttestedChallengeIds {
    const message = createBaseAttestedChallengeIds();
    if (object.size !== undefined && object.size !== null) {
      message.size = Long.fromString(object.size);
    }
    message.challenges = object.challenges?.map(e => AttestedChallenge.fromAmino(e)) || [];
    if (object.cursor !== undefined && object.cursor !== null) {
      message.cursor = Long.fromString(object.cursor);
    }
    return message;
  },
  toAmino(message: AttestedChallengeIds): AttestedChallengeIdsAmino {
    const obj: any = {};
    obj.size = message.size ? message.size.toString() : undefined;
    if (message.challenges) {
      obj.challenges = message.challenges.map(e => e ? AttestedChallenge.toAmino(e) : undefined);
    } else {
      obj.challenges = [];
    }
    obj.cursor = message.cursor ? message.cursor.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: AttestedChallengeIdsAminoMsg): AttestedChallengeIds {
    return AttestedChallengeIds.fromAmino(object.value);
  },
  fromProtoMsg(message: AttestedChallengeIdsProtoMsg): AttestedChallengeIds {
    return AttestedChallengeIds.decode(message.value);
  },
  toProto(message: AttestedChallengeIds): Uint8Array {
    return AttestedChallengeIds.encode(message).finish();
  },
  toProtoMsg(message: AttestedChallengeIds): AttestedChallengeIdsProtoMsg {
    return {
      typeUrl: "/greenfield.challenge.AttestedChallengeIds",
      value: AttestedChallengeIds.encode(message).finish()
    };
  }
};