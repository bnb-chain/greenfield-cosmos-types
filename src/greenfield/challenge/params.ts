//@ts-nocheck
/* eslint-disable */
import { Long, isSet, DeepPartial, Exact } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "greenfield.challenge";
/** Params defines the parameters for the module. */

export interface Params {
  /** Challenges which will be emitted in each block, including user submitted or randomly triggered. */
  challengeCountPerBlock: Long;
  /** Challenges will be expired after the period, including user submitted or randomly triggered. */

  challengeKeepAlivePeriod: Long;
  /** The count of blocks to stand for the period in which the same storage and object info cannot be slashed again. */

  slashCoolingOffPeriod: Long;
  /** The slash coin amount will be calculated from the size of object info, and adjusted by this rate. */

  slashAmountSizeRate: string;
  /** The minimal slash amount. */

  slashAmountMin: string;
  /** The maximum slash amount. */

  slashAmountMax: string;
  /** The ratio of slash amount to reward all current validators. */

  rewardValidatorRatio: string;
  /** The ratio of reward amount to reward attestation submitter. */

  rewardSubmitterRatio: string;
  /** The reward amount to submitter will be adjusted by the threshold. */

  rewardSubmitterThreshold: string;
  /** Heartbeat interval, based on challenge id, defines the frequency of heartbeat attestation. */

  heartbeatInterval: Long;
  /** The time duration for each submitter to submit attestations in turn. */

  attestationInturnInterval: Long;
  /** The number of kept attested challenge ids, which can be queried by clients. */

  attestationKeptCount: Long;
  /** The max slash amount for a sp in a counting window. */

  spSlashMaxAmount: string;
  /** The number of blocks to count how much a sp had been slashed. */

  spSlashCountingWindow: Long;
}
/** Params defines the parameters for the module. */

export interface ParamsSDKType {
  challenge_count_per_block: Long;
  challenge_keep_alive_period: Long;
  slash_cooling_off_period: Long;
  slash_amount_size_rate: string;
  slash_amount_min: string;
  slash_amount_max: string;
  reward_validator_ratio: string;
  reward_submitter_ratio: string;
  reward_submitter_threshold: string;
  heartbeat_interval: Long;
  attestation_inturn_interval: Long;
  attestation_kept_count: Long;
  sp_slash_max_amount: string;
  sp_slash_counting_window: Long;
}

function createBaseParams(): Params {
  return {
    challengeCountPerBlock: Long.UZERO,
    challengeKeepAlivePeriod: Long.UZERO,
    slashCoolingOffPeriod: Long.UZERO,
    slashAmountSizeRate: "",
    slashAmountMin: "",
    slashAmountMax: "",
    rewardValidatorRatio: "",
    rewardSubmitterRatio: "",
    rewardSubmitterThreshold: "",
    heartbeatInterval: Long.UZERO,
    attestationInturnInterval: Long.UZERO,
    attestationKeptCount: Long.UZERO,
    spSlashMaxAmount: "",
    spSlashCountingWindow: Long.UZERO
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.challengeCountPerBlock.isZero()) {
      writer.uint32(8).uint64(message.challengeCountPerBlock);
    }

    if (!message.challengeKeepAlivePeriod.isZero()) {
      writer.uint32(16).uint64(message.challengeKeepAlivePeriod);
    }

    if (!message.slashCoolingOffPeriod.isZero()) {
      writer.uint32(24).uint64(message.slashCoolingOffPeriod);
    }

    if (message.slashAmountSizeRate !== "") {
      writer.uint32(34).string(message.slashAmountSizeRate);
    }

    if (message.slashAmountMin !== "") {
      writer.uint32(42).string(message.slashAmountMin);
    }

    if (message.slashAmountMax !== "") {
      writer.uint32(50).string(message.slashAmountMax);
    }

    if (message.rewardValidatorRatio !== "") {
      writer.uint32(58).string(message.rewardValidatorRatio);
    }

    if (message.rewardSubmitterRatio !== "") {
      writer.uint32(66).string(message.rewardSubmitterRatio);
    }

    if (message.rewardSubmitterThreshold !== "") {
      writer.uint32(74).string(message.rewardSubmitterThreshold);
    }

    if (!message.heartbeatInterval.isZero()) {
      writer.uint32(80).uint64(message.heartbeatInterval);
    }

    if (!message.attestationInturnInterval.isZero()) {
      writer.uint32(88).uint64(message.attestationInturnInterval);
    }

    if (!message.attestationKeptCount.isZero()) {
      writer.uint32(96).uint64(message.attestationKeptCount);
    }

    if (message.spSlashMaxAmount !== "") {
      writer.uint32(106).string(message.spSlashMaxAmount);
    }

    if (!message.spSlashCountingWindow.isZero()) {
      writer.uint32(112).uint64(message.spSlashCountingWindow);
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
          message.challengeKeepAlivePeriod = (reader.uint64() as Long);
          break;

        case 3:
          message.slashCoolingOffPeriod = (reader.uint64() as Long);
          break;

        case 4:
          message.slashAmountSizeRate = reader.string();
          break;

        case 5:
          message.slashAmountMin = reader.string();
          break;

        case 6:
          message.slashAmountMax = reader.string();
          break;

        case 7:
          message.rewardValidatorRatio = reader.string();
          break;

        case 8:
          message.rewardSubmitterRatio = reader.string();
          break;

        case 9:
          message.rewardSubmitterThreshold = reader.string();
          break;

        case 10:
          message.heartbeatInterval = (reader.uint64() as Long);
          break;

        case 11:
          message.attestationInturnInterval = (reader.uint64() as Long);
          break;

        case 12:
          message.attestationKeptCount = (reader.uint64() as Long);
          break;

        case 13:
          message.spSlashMaxAmount = reader.string();
          break;

        case 14:
          message.spSlashCountingWindow = (reader.uint64() as Long);
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
      challengeKeepAlivePeriod: isSet(object.challengeKeepAlivePeriod) ? Long.fromValue(object.challengeKeepAlivePeriod) : Long.UZERO,
      slashCoolingOffPeriod: isSet(object.slashCoolingOffPeriod) ? Long.fromValue(object.slashCoolingOffPeriod) : Long.UZERO,
      slashAmountSizeRate: isSet(object.slashAmountSizeRate) ? String(object.slashAmountSizeRate) : "",
      slashAmountMin: isSet(object.slashAmountMin) ? String(object.slashAmountMin) : "",
      slashAmountMax: isSet(object.slashAmountMax) ? String(object.slashAmountMax) : "",
      rewardValidatorRatio: isSet(object.rewardValidatorRatio) ? String(object.rewardValidatorRatio) : "",
      rewardSubmitterRatio: isSet(object.rewardSubmitterRatio) ? String(object.rewardSubmitterRatio) : "",
      rewardSubmitterThreshold: isSet(object.rewardSubmitterThreshold) ? String(object.rewardSubmitterThreshold) : "",
      heartbeatInterval: isSet(object.heartbeatInterval) ? Long.fromValue(object.heartbeatInterval) : Long.UZERO,
      attestationInturnInterval: isSet(object.attestationInturnInterval) ? Long.fromValue(object.attestationInturnInterval) : Long.UZERO,
      attestationKeptCount: isSet(object.attestationKeptCount) ? Long.fromValue(object.attestationKeptCount) : Long.UZERO,
      spSlashMaxAmount: isSet(object.spSlashMaxAmount) ? String(object.spSlashMaxAmount) : "",
      spSlashCountingWindow: isSet(object.spSlashCountingWindow) ? Long.fromValue(object.spSlashCountingWindow) : Long.UZERO
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.challengeCountPerBlock !== undefined && (obj.challengeCountPerBlock = (message.challengeCountPerBlock || Long.UZERO).toString());
    message.challengeKeepAlivePeriod !== undefined && (obj.challengeKeepAlivePeriod = (message.challengeKeepAlivePeriod || Long.UZERO).toString());
    message.slashCoolingOffPeriod !== undefined && (obj.slashCoolingOffPeriod = (message.slashCoolingOffPeriod || Long.UZERO).toString());
    message.slashAmountSizeRate !== undefined && (obj.slashAmountSizeRate = message.slashAmountSizeRate);
    message.slashAmountMin !== undefined && (obj.slashAmountMin = message.slashAmountMin);
    message.slashAmountMax !== undefined && (obj.slashAmountMax = message.slashAmountMax);
    message.rewardValidatorRatio !== undefined && (obj.rewardValidatorRatio = message.rewardValidatorRatio);
    message.rewardSubmitterRatio !== undefined && (obj.rewardSubmitterRatio = message.rewardSubmitterRatio);
    message.rewardSubmitterThreshold !== undefined && (obj.rewardSubmitterThreshold = message.rewardSubmitterThreshold);
    message.heartbeatInterval !== undefined && (obj.heartbeatInterval = (message.heartbeatInterval || Long.UZERO).toString());
    message.attestationInturnInterval !== undefined && (obj.attestationInturnInterval = (message.attestationInturnInterval || Long.UZERO).toString());
    message.attestationKeptCount !== undefined && (obj.attestationKeptCount = (message.attestationKeptCount || Long.UZERO).toString());
    message.spSlashMaxAmount !== undefined && (obj.spSlashMaxAmount = message.spSlashMaxAmount);
    message.spSlashCountingWindow !== undefined && (obj.spSlashCountingWindow = (message.spSlashCountingWindow || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.challengeCountPerBlock = object.challengeCountPerBlock !== undefined && object.challengeCountPerBlock !== null ? Long.fromValue(object.challengeCountPerBlock) : Long.UZERO;
    message.challengeKeepAlivePeriod = object.challengeKeepAlivePeriod !== undefined && object.challengeKeepAlivePeriod !== null ? Long.fromValue(object.challengeKeepAlivePeriod) : Long.UZERO;
    message.slashCoolingOffPeriod = object.slashCoolingOffPeriod !== undefined && object.slashCoolingOffPeriod !== null ? Long.fromValue(object.slashCoolingOffPeriod) : Long.UZERO;
    message.slashAmountSizeRate = object.slashAmountSizeRate ?? "";
    message.slashAmountMin = object.slashAmountMin ?? "";
    message.slashAmountMax = object.slashAmountMax ?? "";
    message.rewardValidatorRatio = object.rewardValidatorRatio ?? "";
    message.rewardSubmitterRatio = object.rewardSubmitterRatio ?? "";
    message.rewardSubmitterThreshold = object.rewardSubmitterThreshold ?? "";
    message.heartbeatInterval = object.heartbeatInterval !== undefined && object.heartbeatInterval !== null ? Long.fromValue(object.heartbeatInterval) : Long.UZERO;
    message.attestationInturnInterval = object.attestationInturnInterval !== undefined && object.attestationInturnInterval !== null ? Long.fromValue(object.attestationInturnInterval) : Long.UZERO;
    message.attestationKeptCount = object.attestationKeptCount !== undefined && object.attestationKeptCount !== null ? Long.fromValue(object.attestationKeptCount) : Long.UZERO;
    message.spSlashMaxAmount = object.spSlashMaxAmount ?? "";
    message.spSlashCountingWindow = object.spSlashCountingWindow !== undefined && object.spSlashCountingWindow !== null ? Long.fromValue(object.spSlashCountingWindow) : Long.UZERO;
    return message;
  },

  fromSDK(object: ParamsSDKType): Params {
    return {
      challengeCountPerBlock: object?.challenge_count_per_block,
      challengeKeepAlivePeriod: object?.challenge_keep_alive_period,
      slashCoolingOffPeriod: object?.slash_cooling_off_period,
      slashAmountSizeRate: object?.slash_amount_size_rate,
      slashAmountMin: object?.slash_amount_min,
      slashAmountMax: object?.slash_amount_max,
      rewardValidatorRatio: object?.reward_validator_ratio,
      rewardSubmitterRatio: object?.reward_submitter_ratio,
      rewardSubmitterThreshold: object?.reward_submitter_threshold,
      heartbeatInterval: object?.heartbeat_interval,
      attestationInturnInterval: object?.attestation_inturn_interval,
      attestationKeptCount: object?.attestation_kept_count,
      spSlashMaxAmount: object?.sp_slash_max_amount,
      spSlashCountingWindow: object?.sp_slash_counting_window
    };
  },

  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.challenge_count_per_block = message.challengeCountPerBlock;
    obj.challenge_keep_alive_period = message.challengeKeepAlivePeriod;
    obj.slash_cooling_off_period = message.slashCoolingOffPeriod;
    obj.slash_amount_size_rate = message.slashAmountSizeRate;
    obj.slash_amount_min = message.slashAmountMin;
    obj.slash_amount_max = message.slashAmountMax;
    obj.reward_validator_ratio = message.rewardValidatorRatio;
    obj.reward_submitter_ratio = message.rewardSubmitterRatio;
    obj.reward_submitter_threshold = message.rewardSubmitterThreshold;
    obj.heartbeat_interval = message.heartbeatInterval;
    obj.attestation_inturn_interval = message.attestationInturnInterval;
    obj.attestation_kept_count = message.attestationKeptCount;
    obj.sp_slash_max_amount = message.spSlashMaxAmount;
    obj.sp_slash_counting_window = message.spSlashCountingWindow;
    return obj;
  }

};