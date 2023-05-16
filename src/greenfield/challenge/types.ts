/* eslint-disable */
import { Long, isSet, bytesFromBase64, base64FromBytes, DeepPartial, Exact } from "../../helpers";
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
  spOperatorAddress: Uint8Array;
  /** The slashed object info. */

  objectId: string;
  /** The height when the slash happened, which is used for prune purpose. */

  height: Long;
}
/** Slash records the storage provider slashes, which will be pruned periodically. */

export interface SlashSDKType {
  sp_operator_address: Uint8Array;
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
/** Challenge records the challenge which are not expired yet. */

export interface ChallengeSDKType {
  id: Long;
  expired_height: Long;
}
/**
 * AttestedChallengeIds stored fixed number of the latest attested challenge ids.
 * To use the storage more efficiently, a circular queue will be constructed using these fields.
 */

export interface AttestedChallengeIds {
  /** The fixed number of challenge ids to save. */
  size: Long;
  /** The latest attested challenge ids. */

  ids: Long[];
  /** The cursor to retrieve data from the ids field. */

  cursor: Long;
}
/**
 * AttestedChallengeIds stored fixed number of the latest attested challenge ids.
 * To use the storage more efficiently, a circular queue will be constructed using these fields.
 */

export interface AttestedChallengeIdsSDKType {
  size: Long;
  ids: Long[];
  cursor: Long;
}

function createBaseSlash(): Slash {
  return {
    spOperatorAddress: new Uint8Array(),
    objectId: "",
    height: Long.UZERO
  };
}

export const Slash = {
  encode(message: Slash, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spOperatorAddress.length !== 0) {
      writer.uint32(10).bytes(message.spOperatorAddress);
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
          message.spOperatorAddress = reader.bytes();
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
      spOperatorAddress: isSet(object.spOperatorAddress) ? bytesFromBase64(object.spOperatorAddress) : new Uint8Array(),
      objectId: isSet(object.objectId) ? String(object.objectId) : "",
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.UZERO
    };
  },

  toJSON(message: Slash): unknown {
    const obj: any = {};
    message.spOperatorAddress !== undefined && (obj.spOperatorAddress = base64FromBytes(message.spOperatorAddress !== undefined ? message.spOperatorAddress : new Uint8Array()));
    message.objectId !== undefined && (obj.objectId = message.objectId);
    message.height !== undefined && (obj.height = (message.height || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Slash>, I>>(object: I): Slash {
    const message = createBaseSlash();
    message.spOperatorAddress = object.spOperatorAddress ?? new Uint8Array();
    message.objectId = object.objectId ?? "";
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
    return message;
  },

  fromSDK(object: SlashSDKType): Slash {
    return {
      spOperatorAddress: object?.sp_operator_address,
      objectId: object?.object_id,
      height: object?.height
    };
  },

  toSDK(message: Slash): SlashSDKType {
    const obj: any = {};
    obj.sp_operator_address = message.spOperatorAddress;
    obj.object_id = message.objectId;
    obj.height = message.height;
    return obj;
  }

};

function createBaseChallenge(): Challenge {
  return {
    id: Long.UZERO,
    expiredHeight: Long.UZERO
  };
}

export const Challenge = {
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
  }

};

function createBaseAttestedChallengeIds(): AttestedChallengeIds {
  return {
    size: Long.UZERO,
    ids: [],
    cursor: Long.ZERO
  };
}

export const AttestedChallengeIds = {
  encode(message: AttestedChallengeIds, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.size.isZero()) {
      writer.uint32(8).uint64(message.size);
    }

    writer.uint32(18).fork();

    for (const v of message.ids) {
      writer.uint64(v);
    }

    writer.ldelim();

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
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.ids.push((reader.uint64() as Long));
            }
          } else {
            message.ids.push((reader.uint64() as Long));
          }

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
      ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => Long.fromValue(e)) : [],
      cursor: isSet(object.cursor) ? Long.fromValue(object.cursor) : Long.ZERO
    };
  },

  toJSON(message: AttestedChallengeIds): unknown {
    const obj: any = {};
    message.size !== undefined && (obj.size = (message.size || Long.UZERO).toString());

    if (message.ids) {
      obj.ids = message.ids.map(e => (e || Long.UZERO).toString());
    } else {
      obj.ids = [];
    }

    message.cursor !== undefined && (obj.cursor = (message.cursor || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AttestedChallengeIds>, I>>(object: I): AttestedChallengeIds {
    const message = createBaseAttestedChallengeIds();
    message.size = object.size !== undefined && object.size !== null ? Long.fromValue(object.size) : Long.UZERO;
    message.ids = object.ids?.map(e => Long.fromValue(e)) || [];
    message.cursor = object.cursor !== undefined && object.cursor !== null ? Long.fromValue(object.cursor) : Long.ZERO;
    return message;
  },

  fromSDK(object: AttestedChallengeIdsSDKType): AttestedChallengeIds {
    return {
      size: object?.size,
      ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => e) : [],
      cursor: object?.cursor
    };
  },

  toSDK(message: AttestedChallengeIds): AttestedChallengeIdsSDKType {
    const obj: any = {};
    obj.size = message.size;

    if (message.ids) {
      obj.ids = message.ids.map(e => e);
    } else {
      obj.ids = [];
    }

    obj.cursor = message.cursor;
    return obj;
  }

};