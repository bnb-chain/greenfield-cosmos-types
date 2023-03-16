/* eslint-disable */
import { Long, isSet, bytesFromBase64, base64FromBytes, DeepPartial, Exact } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "bnbchain.greenfield.challenge";
export enum VoteResult {
  /** CHALLENGE_FAILED - The challenge failed, for further extension. */
  CHALLENGE_FAILED = 0,

  /** CHALLENGE_SUCCEED - The challenge succeed. */
  CHALLENGE_SUCCEED = 1,
  UNRECOGNIZED = -1,
}
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
export interface Slash {
  sp_operator_address: Uint8Array;
  object_id: string;
  height: Long;
}

function createBaseSlash(): Slash {
  return {
    sp_operator_address: new Uint8Array(),
    object_id: "",
    height: Long.UZERO
  };
}

export const Slash = {
  encode(message: Slash, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sp_operator_address.length !== 0) {
      writer.uint32(10).bytes(message.sp_operator_address);
    }

    if (message.object_id !== "") {
      writer.uint32(18).string(message.object_id);
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
          message.sp_operator_address = reader.bytes();
          break;

        case 2:
          message.object_id = reader.string();
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
      sp_operator_address: isSet(object.sp_operator_address) ? bytesFromBase64(object.sp_operator_address) : new Uint8Array(),
      object_id: isSet(object.object_id) ? String(object.object_id) : "",
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.UZERO
    };
  },

  toJSON(message: Slash): unknown {
    const obj: any = {};
    message.sp_operator_address !== undefined && (obj.sp_operator_address = base64FromBytes(message.sp_operator_address !== undefined ? message.sp_operator_address : new Uint8Array()));
    message.object_id !== undefined && (obj.object_id = message.object_id);
    message.height !== undefined && (obj.height = (message.height || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Slash>, I>>(object: I): Slash {
    const message = createBaseSlash();
    message.sp_operator_address = object.sp_operator_address ?? new Uint8Array();
    message.object_id = object.object_id ?? "";
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
    return message;
  }

};