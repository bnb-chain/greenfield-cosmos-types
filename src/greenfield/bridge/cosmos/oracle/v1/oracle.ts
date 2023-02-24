/* eslint-disable */
import { Long, isSet, DeepPartial, Exact } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmos.oracle.v1";
/** Params holds parameters for the oracle module. */

export interface Params {
  /** Timeout for the in turn relayer */
  relayerTimeout: Long;
  /**
   * in s
   * Reward share for the relayer sends the claim message,
   * the other relayers signed the bls message will share the reward evenly.
   */

  relayerBackoffTime: Long;
  /** in percentage */

  relayerRewardShare: number;
}

function createBaseParams(): Params {
  return {
    relayerTimeout: Long.UZERO,
    relayerBackoffTime: Long.UZERO,
    relayerRewardShare: 0
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.relayerTimeout.isZero()) {
      writer.uint32(8).uint64(message.relayerTimeout);
    }

    if (!message.relayerBackoffTime.isZero()) {
      writer.uint32(16).uint64(message.relayerBackoffTime);
    }

    if (message.relayerRewardShare !== 0) {
      writer.uint32(24).uint32(message.relayerRewardShare);
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
          message.relayerTimeout = (reader.uint64() as Long);
          break;

        case 2:
          message.relayerBackoffTime = (reader.uint64() as Long);
          break;

        case 3:
          message.relayerRewardShare = reader.uint32();
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
      relayerTimeout: isSet(object.relayerTimeout) ? Long.fromValue(object.relayerTimeout) : Long.UZERO,
      relayerBackoffTime: isSet(object.relayerBackoffTime) ? Long.fromValue(object.relayerBackoffTime) : Long.UZERO,
      relayerRewardShare: isSet(object.relayerRewardShare) ? Number(object.relayerRewardShare) : 0
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.relayerTimeout !== undefined && (obj.relayerTimeout = (message.relayerTimeout || Long.UZERO).toString());
    message.relayerBackoffTime !== undefined && (obj.relayerBackoffTime = (message.relayerBackoffTime || Long.UZERO).toString());
    message.relayerRewardShare !== undefined && (obj.relayerRewardShare = Math.round(message.relayerRewardShare));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.relayerTimeout = object.relayerTimeout !== undefined && object.relayerTimeout !== null ? Long.fromValue(object.relayerTimeout) : Long.UZERO;
    message.relayerBackoffTime = object.relayerBackoffTime !== undefined && object.relayerBackoffTime !== null ? Long.fromValue(object.relayerBackoffTime) : Long.UZERO;
    message.relayerRewardShare = object.relayerRewardShare ?? 0;
    return message;
  }

};