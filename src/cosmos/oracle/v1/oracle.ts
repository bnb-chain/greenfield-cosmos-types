//@ts-nocheck
/* eslint-disable */
import { Long, isSet, DeepPartial, Exact } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmos.oracle.v1";
/** Params holds parameters for the oracle module. */
export interface Params {
  /** Timeout for the in turn relayer in seconds */
  relayerTimeout: Long;
  /** RelayInterval is for in-turn relayer in seconds */
  relayerInterval: Long;
  /**
   * Reward share for the relayer sends the claim message,
   * the other relayers signed the bls message will share the reward evenly.
   */
  relayerRewardShare: number;
}
/** Params holds parameters for the oracle module. */
export interface ParamsSDKType {
  relayer_timeout: Long;
  relayer_interval: Long;
  relayer_reward_share: number;
}
/** RelayInterval holds start and end(exclusive) time of in-turn relayer, [start, end) */
export interface RelayInterval {
  start: Long;
  end: Long;
}
/** RelayInterval holds start and end(exclusive) time of in-turn relayer, [start, end) */
export interface RelayIntervalSDKType {
  start: Long;
  end: Long;
}
function createBaseParams(): Params {
  return {
    relayerTimeout: Long.UZERO,
    relayerInterval: Long.UZERO,
    relayerRewardShare: 0
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.relayerTimeout.isZero()) {
      writer.uint32(8).uint64(message.relayerTimeout);
    }
    if (!message.relayerInterval.isZero()) {
      writer.uint32(16).uint64(message.relayerInterval);
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
          message.relayerInterval = (reader.uint64() as Long);
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
      relayerInterval: isSet(object.relayerInterval) ? Long.fromValue(object.relayerInterval) : Long.UZERO,
      relayerRewardShare: isSet(object.relayerRewardShare) ? Number(object.relayerRewardShare) : 0
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.relayerTimeout !== undefined && (obj.relayerTimeout = (message.relayerTimeout || Long.UZERO).toString());
    message.relayerInterval !== undefined && (obj.relayerInterval = (message.relayerInterval || Long.UZERO).toString());
    message.relayerRewardShare !== undefined && (obj.relayerRewardShare = Math.round(message.relayerRewardShare));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.relayerTimeout = object.relayerTimeout !== undefined && object.relayerTimeout !== null ? Long.fromValue(object.relayerTimeout) : Long.UZERO;
    message.relayerInterval = object.relayerInterval !== undefined && object.relayerInterval !== null ? Long.fromValue(object.relayerInterval) : Long.UZERO;
    message.relayerRewardShare = object.relayerRewardShare ?? 0;
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      relayerTimeout: object?.relayer_timeout,
      relayerInterval: object?.relayer_interval,
      relayerRewardShare: object?.relayer_reward_share
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.relayer_timeout = message.relayerTimeout;
    obj.relayer_interval = message.relayerInterval;
    obj.relayer_reward_share = message.relayerRewardShare;
    return obj;
  }
};
function createBaseRelayInterval(): RelayInterval {
  return {
    start: Long.UZERO,
    end: Long.UZERO
  };
}
export const RelayInterval = {
  encode(message: RelayInterval, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.start.isZero()) {
      writer.uint32(8).uint64(message.start);
    }
    if (!message.end.isZero()) {
      writer.uint32(16).uint64(message.end);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): RelayInterval {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelayInterval();
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
  fromJSON(object: any): RelayInterval {
    return {
      start: isSet(object.start) ? Long.fromValue(object.start) : Long.UZERO,
      end: isSet(object.end) ? Long.fromValue(object.end) : Long.UZERO
    };
  },
  toJSON(message: RelayInterval): unknown {
    const obj: any = {};
    message.start !== undefined && (obj.start = (message.start || Long.UZERO).toString());
    message.end !== undefined && (obj.end = (message.end || Long.UZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<RelayInterval>, I>>(object: I): RelayInterval {
    const message = createBaseRelayInterval();
    message.start = object.start !== undefined && object.start !== null ? Long.fromValue(object.start) : Long.UZERO;
    message.end = object.end !== undefined && object.end !== null ? Long.fromValue(object.end) : Long.UZERO;
    return message;
  },
  fromSDK(object: RelayIntervalSDKType): RelayInterval {
    return {
      start: object?.start,
      end: object?.end
    };
  },
  toSDK(message: RelayInterval): RelayIntervalSDKType {
    const obj: any = {};
    obj.start = message.start;
    obj.end = message.end;
    return obj;
  }
};