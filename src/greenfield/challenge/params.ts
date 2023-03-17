/* eslint-disable */
import { Long, isSet, DeepPartial, Exact } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "bnbchain.greenfield.challenge";
/** Params defines the parameters for the module. */

export interface Params {
  /** Challenges which will be emitted in each block, including user triggered or randomly triggered. */
  challengeCountPerBlock: Long;
  /** The count of blocks to stand for the period in which the same storage and object info cannot be slashed again. */

  slashCoolingOffPeriod: Long;
  /** The slash coin amount will be calculated from the size of object info, and adjusted by this rate. */

  slashAmountSizeRate: string;
  /** The minimal slash amount. */

  slashAmountMin: string;
  /** The maximum slash amount. */

  slashAmountMax: string;
  /** The ratio of slash amount for all validator rewards. */

  rewardValidatorRatio: string;
  /** The ratio of reward amount for submitter rewards. */

  rewardSubmitterRatio: string;
  /** The reward amount to submitter will be adjusted by the threshold. */

  rewardSubmitterThreshold: string;
  /** Heartbeat interval defines the frequency of heartbeat based on challenges. */

  heartbeatInterval: Long;
}
/** Params defines the parameters for the module. */

export interface ParamsSDKType {
  challenge_count_per_block: Long;
  slash_cooling_off_period: Long;
  slash_amount_size_rate: string;
  slash_amount_min: string;
  slash_amount_max: string;
  reward_validator_ratio: string;
  reward_submitter_ratio: string;
  reward_submitter_threshold: string;
  heartbeat_interval: Long;
}

function createBaseParams(): Params {
  return {
    challengeCountPerBlock: Long.UZERO,
    slashCoolingOffPeriod: Long.UZERO,
    slashAmountSizeRate: "",
    slashAmountMin: "",
    slashAmountMax: "",
    rewardValidatorRatio: "",
    rewardSubmitterRatio: "",
    rewardSubmitterThreshold: "",
    heartbeatInterval: Long.UZERO
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.challengeCountPerBlock.isZero()) {
      writer.uint32(8).uint64(message.challengeCountPerBlock);
    }

    if (!message.slashCoolingOffPeriod.isZero()) {
      writer.uint32(16).uint64(message.slashCoolingOffPeriod);
    }

    if (message.slashAmountSizeRate !== "") {
      writer.uint32(26).string(message.slashAmountSizeRate);
    }

    if (message.slashAmountMin !== "") {
      writer.uint32(34).string(message.slashAmountMin);
    }

    if (message.slashAmountMax !== "") {
      writer.uint32(42).string(message.slashAmountMax);
    }

    if (message.rewardValidatorRatio !== "") {
      writer.uint32(50).string(message.rewardValidatorRatio);
    }

    if (message.rewardSubmitterRatio !== "") {
      writer.uint32(58).string(message.rewardSubmitterRatio);
    }

    if (message.rewardSubmitterThreshold !== "") {
      writer.uint32(66).string(message.rewardSubmitterThreshold);
    }

    if (!message.heartbeatInterval.isZero()) {
      writer.uint32(72).uint64(message.heartbeatInterval);
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
          message.challengeCountPerBlock = (reader.uint64() as Long);
          break;

        case 2:
          message.slashCoolingOffPeriod = (reader.uint64() as Long);
          break;

        case 3:
          message.slashAmountSizeRate = reader.string();
          break;

        case 4:
          message.slashAmountMin = reader.string();
          break;

        case 5:
          message.slashAmountMax = reader.string();
          break;

        case 6:
          message.rewardValidatorRatio = reader.string();
          break;

        case 7:
          message.rewardSubmitterRatio = reader.string();
          break;

        case 8:
          message.rewardSubmitterThreshold = reader.string();
          break;

        case 9:
          message.heartbeatInterval = (reader.uint64() as Long);
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
      challengeCountPerBlock: isSet(object.challengeCountPerBlock) ? Long.fromValue(object.challengeCountPerBlock) : Long.UZERO,
      slashCoolingOffPeriod: isSet(object.slashCoolingOffPeriod) ? Long.fromValue(object.slashCoolingOffPeriod) : Long.UZERO,
      slashAmountSizeRate: isSet(object.slashAmountSizeRate) ? String(object.slashAmountSizeRate) : "",
      slashAmountMin: isSet(object.slashAmountMin) ? String(object.slashAmountMin) : "",
      slashAmountMax: isSet(object.slashAmountMax) ? String(object.slashAmountMax) : "",
      rewardValidatorRatio: isSet(object.rewardValidatorRatio) ? String(object.rewardValidatorRatio) : "",
      rewardSubmitterRatio: isSet(object.rewardSubmitterRatio) ? String(object.rewardSubmitterRatio) : "",
      rewardSubmitterThreshold: isSet(object.rewardSubmitterThreshold) ? String(object.rewardSubmitterThreshold) : "",
      heartbeatInterval: isSet(object.heartbeatInterval) ? Long.fromValue(object.heartbeatInterval) : Long.UZERO
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.challengeCountPerBlock !== undefined && (obj.challengeCountPerBlock = (message.challengeCountPerBlock || Long.UZERO).toString());
    message.slashCoolingOffPeriod !== undefined && (obj.slashCoolingOffPeriod = (message.slashCoolingOffPeriod || Long.UZERO).toString());
    message.slashAmountSizeRate !== undefined && (obj.slashAmountSizeRate = message.slashAmountSizeRate);
    message.slashAmountMin !== undefined && (obj.slashAmountMin = message.slashAmountMin);
    message.slashAmountMax !== undefined && (obj.slashAmountMax = message.slashAmountMax);
    message.rewardValidatorRatio !== undefined && (obj.rewardValidatorRatio = message.rewardValidatorRatio);
    message.rewardSubmitterRatio !== undefined && (obj.rewardSubmitterRatio = message.rewardSubmitterRatio);
    message.rewardSubmitterThreshold !== undefined && (obj.rewardSubmitterThreshold = message.rewardSubmitterThreshold);
    message.heartbeatInterval !== undefined && (obj.heartbeatInterval = (message.heartbeatInterval || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.challengeCountPerBlock = object.challengeCountPerBlock !== undefined && object.challengeCountPerBlock !== null ? Long.fromValue(object.challengeCountPerBlock) : Long.UZERO;
    message.slashCoolingOffPeriod = object.slashCoolingOffPeriod !== undefined && object.slashCoolingOffPeriod !== null ? Long.fromValue(object.slashCoolingOffPeriod) : Long.UZERO;
    message.slashAmountSizeRate = object.slashAmountSizeRate ?? "";
    message.slashAmountMin = object.slashAmountMin ?? "";
    message.slashAmountMax = object.slashAmountMax ?? "";
    message.rewardValidatorRatio = object.rewardValidatorRatio ?? "";
    message.rewardSubmitterRatio = object.rewardSubmitterRatio ?? "";
    message.rewardSubmitterThreshold = object.rewardSubmitterThreshold ?? "";
    message.heartbeatInterval = object.heartbeatInterval !== undefined && object.heartbeatInterval !== null ? Long.fromValue(object.heartbeatInterval) : Long.UZERO;
    return message;
  },

  fromSDK(object: ParamsSDKType): Params {
    return {
      challengeCountPerBlock: object?.challenge_count_per_block,
      slashCoolingOffPeriod: object?.slash_cooling_off_period,
      slashAmountSizeRate: object?.slash_amount_size_rate,
      slashAmountMin: object?.slash_amount_min,
      slashAmountMax: object?.slash_amount_max,
      rewardValidatorRatio: object?.reward_validator_ratio,
      rewardSubmitterRatio: object?.reward_submitter_ratio,
      rewardSubmitterThreshold: object?.reward_submitter_threshold,
      heartbeatInterval: object?.heartbeat_interval
    };
  },

  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.challenge_count_per_block = message.challengeCountPerBlock;
    obj.slash_cooling_off_period = message.slashCoolingOffPeriod;
    obj.slash_amount_size_rate = message.slashAmountSizeRate;
    obj.slash_amount_min = message.slashAmountMin;
    obj.slash_amount_max = message.slashAmountMax;
    obj.reward_validator_ratio = message.rewardValidatorRatio;
    obj.reward_submitter_ratio = message.rewardSubmitterRatio;
    obj.reward_submitter_threshold = message.rewardSubmitterThreshold;
    obj.heartbeat_interval = message.heartbeatInterval;
    return obj;
  }

};