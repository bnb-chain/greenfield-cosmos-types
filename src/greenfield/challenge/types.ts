//@ts-nocheck
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
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
  height: bigint;
}
export interface SlashProtoMsg {
  typeUrl: "/greenfield.challenge.Slash";
  value: Uint8Array;
}
/** Slash records the storage provider slashes, which will be pruned periodically. */
export interface SlashSDKType {
  sp_id: number;
  object_id: string;
  height: bigint;
}
/** Challenge records the challenge which are not expired yet. */
export interface Challenge {
  /** The id of the challenge. */
  id: bigint;
  /** The height at which the challenge will be expired. */
  expiredHeight: bigint;
}
export interface ChallengeProtoMsg {
  typeUrl: "/greenfield.challenge.Challenge";
  value: Uint8Array;
}
/** Challenge records the challenge which are not expired yet. */
export interface ChallengeSDKType {
  id: bigint;
  expired_height: bigint;
}
/** AttestedChallenge records the challenge which are attested. */
export interface AttestedChallenge {
  /** The id of the challenge. */
  id: bigint;
  /** The attestation result of the challenge. */
  result: VoteResult;
}
export interface AttestedChallengeProtoMsg {
  typeUrl: "/greenfield.challenge.AttestedChallenge";
  value: Uint8Array;
}
/** AttestedChallenge records the challenge which are attested. */
export interface AttestedChallengeSDKType {
  id: bigint;
  result: VoteResult;
}
/**
 * AttestedChallengeIds stored fixed number of the latest attested challenge ids.
 * To use the storage more efficiently, a circular queue will be constructed using these fields.
 */
export interface AttestedChallengeIds {
  /** The fixed number of challenge ids to save. */
  size: bigint;
  /** The latest attested challenges. */
  challenges: AttestedChallenge[];
  /** The cursor to retrieve data from the ids field. */
  cursor: bigint;
}
export interface AttestedChallengeIdsProtoMsg {
  typeUrl: "/greenfield.challenge.AttestedChallengeIds";
  value: Uint8Array;
}
/**
 * AttestedChallengeIds stored fixed number of the latest attested challenge ids.
 * To use the storage more efficiently, a circular queue will be constructed using these fields.
 */
export interface AttestedChallengeIdsSDKType {
  size: bigint;
  challenges: AttestedChallengeSDKType[];
  cursor: bigint;
}
function createBaseSlash(): Slash {
  return {
    spId: 0,
    objectId: "",
    height: BigInt(0)
  };
}
export const Slash = {
  typeUrl: "/greenfield.challenge.Slash",
  encode(message: Slash, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.spId !== 0) {
      writer.uint32(8).uint32(message.spId);
    }
    if (message.objectId !== "") {
      writer.uint32(18).string(message.objectId);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).uint64(message.height);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Slash {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.height = reader.uint64();
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
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0)
    };
  },
  toJSON(message: Slash): unknown {
    const obj: any = {};
    message.spId !== undefined && (obj.spId = Math.round(message.spId));
    message.objectId !== undefined && (obj.objectId = message.objectId);
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Slash>, I>>(object: I): Slash {
    const message = createBaseSlash();
    message.spId = object.spId ?? 0;
    message.objectId = object.objectId ?? "";
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
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
      message.height = BigInt(object.height);
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
    id: BigInt(0),
    expiredHeight: BigInt(0)
  };
}
export const Challenge = {
  typeUrl: "/greenfield.challenge.Challenge",
  encode(message: Challenge, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.expiredHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.expiredHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Challenge {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallenge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.expiredHeight = reader.uint64();
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
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      expiredHeight: isSet(object.expiredHeight) ? BigInt(object.expiredHeight.toString()) : BigInt(0)
    };
  },
  toJSON(message: Challenge): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.expiredHeight !== undefined && (obj.expiredHeight = (message.expiredHeight || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Challenge>, I>>(object: I): Challenge {
    const message = createBaseChallenge();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.expiredHeight = object.expiredHeight !== undefined && object.expiredHeight !== null ? BigInt(object.expiredHeight.toString()) : BigInt(0);
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
      message.id = BigInt(object.id);
    }
    if (object.expired_height !== undefined && object.expired_height !== null) {
      message.expiredHeight = BigInt(object.expired_height);
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
    id: BigInt(0),
    result: 0
  };
}
export const AttestedChallenge = {
  typeUrl: "/greenfield.challenge.AttestedChallenge",
  encode(message: AttestedChallenge, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.result !== 0) {
      writer.uint32(16).int32(message.result);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AttestedChallenge {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttestedChallenge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
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
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      result: isSet(object.result) ? voteResultFromJSON(object.result) : -1
    };
  },
  toJSON(message: AttestedChallenge): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.result !== undefined && (obj.result = voteResultToJSON(message.result));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AttestedChallenge>, I>>(object: I): AttestedChallenge {
    const message = createBaseAttestedChallenge();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
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
      message.id = BigInt(object.id);
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
    size: BigInt(0),
    challenges: [],
    cursor: BigInt(0)
  };
}
export const AttestedChallengeIds = {
  typeUrl: "/greenfield.challenge.AttestedChallengeIds",
  encode(message: AttestedChallengeIds, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.size !== BigInt(0)) {
      writer.uint32(8).uint64(message.size);
    }
    for (const v of message.challenges) {
      AttestedChallenge.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.cursor !== BigInt(0)) {
      writer.uint32(24).int64(message.cursor);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AttestedChallengeIds {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttestedChallengeIds();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.size = reader.uint64();
          break;
        case 2:
          message.challenges.push(AttestedChallenge.decode(reader, reader.uint32()));
          break;
        case 3:
          message.cursor = reader.int64();
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
      size: isSet(object.size) ? BigInt(object.size.toString()) : BigInt(0),
      challenges: Array.isArray(object?.challenges) ? object.challenges.map((e: any) => AttestedChallenge.fromJSON(e)) : [],
      cursor: isSet(object.cursor) ? BigInt(object.cursor.toString()) : BigInt(0)
    };
  },
  toJSON(message: AttestedChallengeIds): unknown {
    const obj: any = {};
    message.size !== undefined && (obj.size = (message.size || BigInt(0)).toString());
    if (message.challenges) {
      obj.challenges = message.challenges.map(e => e ? AttestedChallenge.toJSON(e) : undefined);
    } else {
      obj.challenges = [];
    }
    message.cursor !== undefined && (obj.cursor = (message.cursor || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AttestedChallengeIds>, I>>(object: I): AttestedChallengeIds {
    const message = createBaseAttestedChallengeIds();
    message.size = object.size !== undefined && object.size !== null ? BigInt(object.size.toString()) : BigInt(0);
    message.challenges = object.challenges?.map(e => AttestedChallenge.fromPartial(e)) || [];
    message.cursor = object.cursor !== undefined && object.cursor !== null ? BigInt(object.cursor.toString()) : BigInt(0);
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
      message.size = BigInt(object.size);
    }
    message.challenges = object.challenges?.map(e => AttestedChallenge.fromAmino(e)) || [];
    if (object.cursor !== undefined && object.cursor !== null) {
      message.cursor = BigInt(object.cursor);
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