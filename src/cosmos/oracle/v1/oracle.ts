/* eslint-disable */
import { Long, isSet, DeepPartial, Exact } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmos.oracle.v1";
/** Params holds parameters for the oracle module. */

export interface Params {
  /** Timeout for the in turn relayer */
  relayer_timeout: Long;
  /**
   * in s
   * Reward share for the relayer sends the claim message,
   * the other relayers signed the bls message will share the reward evenly.
   */

  relayer_backoff_time: Long;
  /** in percentage */

  relayer_reward_share: number;
}

function createBaseParams(): Params {
  return {
    relayer_timeout: Long.UZERO,
    relayer_backoff_time: Long.UZERO,
    relayer_reward_share: 0
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.relayer_timeout.isZero()) {
      writer.uint32(8).uint64(message.relayer_timeout);
    }

    if (!message.relayer_backoff_time.isZero()) {
      writer.uint32(16).uint64(message.relayer_backoff_time);
    }

    if (message.relayer_reward_share !== 0) {
      writer.uint32(24).uint32(message.relayer_reward_share);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.relayer_timeout = (reader.uint64() as Long);
          break;

        case 2:
          message.relayer_backoff_time = (reader.uint64() as Long);
          break;

        case 3:
          message.relayer_reward_share = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Params {
    return {
      relayer_timeout: isSet(object.relayer_timeout) ? Long.fromValue(object.relayer_timeout) : Long.UZERO,
      relayer_backoff_time: isSet(object.relayer_backoff_time) ? Long.fromValue(object.relayer_backoff_time) : Long.UZERO,
      relayer_reward_share: isSet(object.relayer_reward_share) ? Number(object.relayer_reward_share) : 0
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.relayer_timeout !== undefined && (obj.relayer_timeout = (message.relayer_timeout || Long.UZERO).toString());
    message.relayer_backoff_time !== undefined && (obj.relayer_backoff_time = (message.relayer_backoff_time || Long.UZERO).toString());
    message.relayer_reward_share !== undefined && (obj.relayer_reward_share = Math.round(message.relayer_reward_share));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.relayer_timeout = object.relayer_timeout !== undefined && object.relayer_timeout !== null ? Long.fromValue(object.relayer_timeout) : Long.UZERO;
    message.relayer_backoff_time = object.relayer_backoff_time !== undefined && object.relayer_backoff_time !== null ? Long.fromValue(object.relayer_backoff_time) : Long.UZERO;
    message.relayer_reward_share = object.relayer_reward_share ?? 0;
    return message;
  }

};