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
export interface ParamsProtoMsg {
  typeUrl: "/cosmos.oracle.v1.Params";
  value: Uint8Array;
}
/** Params holds parameters for the oracle module. */
export interface ParamsAmino {
  /** Timeout for the in turn relayer in seconds */
  relayer_timeout?: string;
  /** RelayInterval is for in-turn relayer in seconds */
  relayer_interval?: string;
  /**
   * Reward share for the relayer sends the claim message,
   * the other relayers signed the bls message will share the reward evenly.
   */
  relayer_reward_share?: number;
}
export interface ParamsAminoMsg {
  type: "cosmos-sdk/Params";
  value: ParamsAmino;
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
export interface RelayIntervalProtoMsg {
  typeUrl: "/cosmos.oracle.v1.RelayInterval";
  value: Uint8Array;
}
/** RelayInterval holds start and end(exclusive) time of in-turn relayer, [start, end) */
export interface RelayIntervalAmino {
  start?: string;
  end?: string;
}
export interface RelayIntervalAminoMsg {
  type: "cosmos-sdk/RelayInterval";
  value: RelayIntervalAmino;
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
  typeUrl: "/cosmos.oracle.v1.Params",
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
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.relayer_timeout !== undefined && object.relayer_timeout !== null) {
      message.relayerTimeout = Long.fromString(object.relayer_timeout);
    }
    if (object.relayer_interval !== undefined && object.relayer_interval !== null) {
      message.relayerInterval = Long.fromString(object.relayer_interval);
    }
    if (object.relayer_reward_share !== undefined && object.relayer_reward_share !== null) {
      message.relayerRewardShare = object.relayer_reward_share;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.relayer_timeout = message.relayerTimeout ? message.relayerTimeout.toString() : undefined;
    obj.relayer_interval = message.relayerInterval ? message.relayerInterval.toString() : undefined;
    obj.relayer_reward_share = message.relayerRewardShare;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "cosmos-sdk/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/cosmos.oracle.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseRelayInterval(): RelayInterval {
  return {
    start: Long.UZERO,
    end: Long.UZERO
  };
}
export const RelayInterval = {
  typeUrl: "/cosmos.oracle.v1.RelayInterval",
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
  },
  fromAmino(object: RelayIntervalAmino): RelayInterval {
    const message = createBaseRelayInterval();
    if (object.start !== undefined && object.start !== null) {
      message.start = Long.fromString(object.start);
    }
    if (object.end !== undefined && object.end !== null) {
      message.end = Long.fromString(object.end);
    }
    return message;
  },
  toAmino(message: RelayInterval): RelayIntervalAmino {
    const obj: any = {};
    obj.start = message.start ? message.start.toString() : undefined;
    obj.end = message.end ? message.end.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: RelayIntervalAminoMsg): RelayInterval {
    return RelayInterval.fromAmino(object.value);
  },
  toAminoMsg(message: RelayInterval): RelayIntervalAminoMsg {
    return {
      type: "cosmos-sdk/RelayInterval",
      value: RelayInterval.toAmino(message)
    };
  },
  fromProtoMsg(message: RelayIntervalProtoMsg): RelayInterval {
    return RelayInterval.decode(message.value);
  },
  toProto(message: RelayInterval): Uint8Array {
    return RelayInterval.encode(message).finish();
  },
  toProtoMsg(message: RelayInterval): RelayIntervalProtoMsg {
    return {
      typeUrl: "/cosmos.oracle.v1.RelayInterval",
      value: RelayInterval.encode(message).finish()
    };
  }
};