/* eslint-disable */
import { Long, isSet, DeepPartial, Exact } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "bnbchain.greenfield.challenge";
/** Params defines the parameters for the module. */

export interface Params {
  /** Challenges which will be emitted in each block, including user triggered or randomly triggered. */
  challenge_count_per_block: Long;
  /** The count of blocks to stand for the period in which the same storage and object info cannot be slashed again. */

  slash_cooling_off_period: Long;
  /** The slash coin amount will be calculated from the size of object info, and adjusted by this rate. */

  slash_amount_size_rate: string;
  /** The minimal slash amount. */

  slash_amount_min: string;
  /** The maximum slash amount. */

  slash_amount_max: string;
  /** The ratio of slash amount for all validator rewards. */

  reward_validator_ratio: string;
  /** The ratio of reward amount for submitter rewards. */

  reward_submitter_ratio: string;
  /** The reward amount to submitter will be adjusted by the threshold. */

  reward_submitter_threshold: string;
  /** Heartbeat interval defines the frequency of heartbeat based on challenges. */

  heartbeat_interval: Long;
}

function createBaseParams(): Params {
  return {
    challenge_count_per_block: Long.UZERO,
    slash_cooling_off_period: Long.UZERO,
    slash_amount_size_rate: "",
    slash_amount_min: "",
    slash_amount_max: "",
    reward_validator_ratio: "",
    reward_submitter_ratio: "",
    reward_submitter_threshold: "",
    heartbeat_interval: Long.UZERO
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.challenge_count_per_block.isZero()) {
      writer.uint32(8).uint64(message.challenge_count_per_block);
    }

    if (!message.slash_cooling_off_period.isZero()) {
      writer.uint32(16).uint64(message.slash_cooling_off_period);
    }

    if (message.slash_amount_size_rate !== "") {
      writer.uint32(26).string(message.slash_amount_size_rate);
    }

    if (message.slash_amount_min !== "") {
      writer.uint32(34).string(message.slash_amount_min);
    }

    if (message.slash_amount_max !== "") {
      writer.uint32(42).string(message.slash_amount_max);
    }

    if (message.reward_validator_ratio !== "") {
      writer.uint32(50).string(message.reward_validator_ratio);
    }

    if (message.reward_submitter_ratio !== "") {
      writer.uint32(58).string(message.reward_submitter_ratio);
    }

    if (message.reward_submitter_threshold !== "") {
      writer.uint32(66).string(message.reward_submitter_threshold);
    }

    if (!message.heartbeat_interval.isZero()) {
      writer.uint32(72).uint64(message.heartbeat_interval);
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
          message.challenge_count_per_block = (reader.uint64() as Long);
          break;

        case 2:
          message.slash_cooling_off_period = (reader.uint64() as Long);
          break;

        case 3:
          message.slash_amount_size_rate = reader.string();
          break;

        case 4:
          message.slash_amount_min = reader.string();
          break;

        case 5:
          message.slash_amount_max = reader.string();
          break;

        case 6:
          message.reward_validator_ratio = reader.string();
          break;

        case 7:
          message.reward_submitter_ratio = reader.string();
          break;

        case 8:
          message.reward_submitter_threshold = reader.string();
          break;

        case 9:
          message.heartbeat_interval = (reader.uint64() as Long);
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
      challenge_count_per_block: isSet(object.challenge_count_per_block) ? Long.fromValue(object.challenge_count_per_block) : Long.UZERO,
      slash_cooling_off_period: isSet(object.slash_cooling_off_period) ? Long.fromValue(object.slash_cooling_off_period) : Long.UZERO,
      slash_amount_size_rate: isSet(object.slash_amount_size_rate) ? String(object.slash_amount_size_rate) : "",
      slash_amount_min: isSet(object.slash_amount_min) ? String(object.slash_amount_min) : "",
      slash_amount_max: isSet(object.slash_amount_max) ? String(object.slash_amount_max) : "",
      reward_validator_ratio: isSet(object.reward_validator_ratio) ? String(object.reward_validator_ratio) : "",
      reward_submitter_ratio: isSet(object.reward_submitter_ratio) ? String(object.reward_submitter_ratio) : "",
      reward_submitter_threshold: isSet(object.reward_submitter_threshold) ? String(object.reward_submitter_threshold) : "",
      heartbeat_interval: isSet(object.heartbeat_interval) ? Long.fromValue(object.heartbeat_interval) : Long.UZERO
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.challenge_count_per_block !== undefined && (obj.challenge_count_per_block = (message.challenge_count_per_block || Long.UZERO).toString());
    message.slash_cooling_off_period !== undefined && (obj.slash_cooling_off_period = (message.slash_cooling_off_period || Long.UZERO).toString());
    message.slash_amount_size_rate !== undefined && (obj.slash_amount_size_rate = message.slash_amount_size_rate);
    message.slash_amount_min !== undefined && (obj.slash_amount_min = message.slash_amount_min);
    message.slash_amount_max !== undefined && (obj.slash_amount_max = message.slash_amount_max);
    message.reward_validator_ratio !== undefined && (obj.reward_validator_ratio = message.reward_validator_ratio);
    message.reward_submitter_ratio !== undefined && (obj.reward_submitter_ratio = message.reward_submitter_ratio);
    message.reward_submitter_threshold !== undefined && (obj.reward_submitter_threshold = message.reward_submitter_threshold);
    message.heartbeat_interval !== undefined && (obj.heartbeat_interval = (message.heartbeat_interval || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.challenge_count_per_block = object.challenge_count_per_block !== undefined && object.challenge_count_per_block !== null ? Long.fromValue(object.challenge_count_per_block) : Long.UZERO;
    message.slash_cooling_off_period = object.slash_cooling_off_period !== undefined && object.slash_cooling_off_period !== null ? Long.fromValue(object.slash_cooling_off_period) : Long.UZERO;
    message.slash_amount_size_rate = object.slash_amount_size_rate ?? "";
    message.slash_amount_min = object.slash_amount_min ?? "";
    message.slash_amount_max = object.slash_amount_max ?? "";
    message.reward_validator_ratio = object.reward_validator_ratio ?? "";
    message.reward_submitter_ratio = object.reward_submitter_ratio ?? "";
    message.reward_submitter_threshold = object.reward_submitter_threshold ?? "";
    message.heartbeat_interval = object.heartbeat_interval !== undefined && object.heartbeat_interval !== null ? Long.fromValue(object.heartbeat_interval) : Long.UZERO;
    return message;
  }

};