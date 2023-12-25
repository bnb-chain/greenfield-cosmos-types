//@ts-nocheck
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, DeepPartial, Exact } from "../../helpers";
export const protobufPackage = "greenfield.challenge";
/** Params defines the parameters for the module. */
export interface Params {
  /** Challenges which will be emitted in each block, including user submitted or randomly triggered. */
  challengeCountPerBlock: bigint;
  /** Challenges will be expired after the period, including user submitted or randomly triggered. */
  challengeKeepAlivePeriod: bigint;
  /** The count of blocks to stand for the period in which the same storage and object info cannot be slashed again. */
  slashCoolingOffPeriod: bigint;
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
  heartbeatInterval: bigint;
  /** The time duration for each submitter to submit attestations in turn. */
  attestationInturnInterval: bigint;
  /** The number of kept attested challenge ids, which can be queried by clients. */
  attestationKeptCount: bigint;
  /** The max slash amount for a sp in a counting window. */
  spSlashMaxAmount: string;
  /** The number of blocks to count how much a sp had been slashed. */
  spSlashCountingWindow: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/greenfield.challenge.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  challenge_count_per_block: bigint;
  challenge_keep_alive_period: bigint;
  slash_cooling_off_period: bigint;
  slash_amount_size_rate: string;
  slash_amount_min: string;
  slash_amount_max: string;
  reward_validator_ratio: string;
  reward_submitter_ratio: string;
  reward_submitter_threshold: string;
  heartbeat_interval: bigint;
  attestation_inturn_interval: bigint;
  attestation_kept_count: bigint;
  sp_slash_max_amount: string;
  sp_slash_counting_window: bigint;
}
function createBaseParams(): Params {
  return {
    challengeCountPerBlock: BigInt(0),
    challengeKeepAlivePeriod: BigInt(0),
    slashCoolingOffPeriod: BigInt(0),
    slashAmountSizeRate: "",
    slashAmountMin: "",
    slashAmountMax: "",
    rewardValidatorRatio: "",
    rewardSubmitterRatio: "",
    rewardSubmitterThreshold: "",
    heartbeatInterval: BigInt(0),
    attestationInturnInterval: BigInt(0),
    attestationKeptCount: BigInt(0),
    spSlashMaxAmount: "",
    spSlashCountingWindow: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/greenfield.challenge.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.challengeCountPerBlock !== BigInt(0)) {
      writer.uint32(8).uint64(message.challengeCountPerBlock);
    }
    if (message.challengeKeepAlivePeriod !== BigInt(0)) {
      writer.uint32(16).uint64(message.challengeKeepAlivePeriod);
    }
    if (message.slashCoolingOffPeriod !== BigInt(0)) {
      writer.uint32(24).uint64(message.slashCoolingOffPeriod);
    }
    if (message.slashAmountSizeRate !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.slashAmountSizeRate, 18).atomics);
    }
    if (message.slashAmountMin !== "") {
      writer.uint32(42).string(message.slashAmountMin);
    }
    if (message.slashAmountMax !== "") {
      writer.uint32(50).string(message.slashAmountMax);
    }
    if (message.rewardValidatorRatio !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.rewardValidatorRatio, 18).atomics);
    }
    if (message.rewardSubmitterRatio !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.rewardSubmitterRatio, 18).atomics);
    }
    if (message.rewardSubmitterThreshold !== "") {
      writer.uint32(74).string(message.rewardSubmitterThreshold);
    }
    if (message.heartbeatInterval !== BigInt(0)) {
      writer.uint32(80).uint64(message.heartbeatInterval);
    }
    if (message.attestationInturnInterval !== BigInt(0)) {
      writer.uint32(88).uint64(message.attestationInturnInterval);
    }
    if (message.attestationKeptCount !== BigInt(0)) {
      writer.uint32(96).uint64(message.attestationKeptCount);
    }
    if (message.spSlashMaxAmount !== "") {
      writer.uint32(106).string(message.spSlashMaxAmount);
    }
    if (message.spSlashCountingWindow !== BigInt(0)) {
      writer.uint32(112).uint64(message.spSlashCountingWindow);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.challengeCountPerBlock = reader.uint64();
          break;
        case 2:
          message.challengeKeepAlivePeriod = reader.uint64();
          break;
        case 3:
          message.slashCoolingOffPeriod = reader.uint64();
          break;
        case 4:
          message.slashAmountSizeRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.slashAmountMin = reader.string();
          break;
        case 6:
          message.slashAmountMax = reader.string();
          break;
        case 7:
          message.rewardValidatorRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.rewardSubmitterRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.rewardSubmitterThreshold = reader.string();
          break;
        case 10:
          message.heartbeatInterval = reader.uint64();
          break;
        case 11:
          message.attestationInturnInterval = reader.uint64();
          break;
        case 12:
          message.attestationKeptCount = reader.uint64();
          break;
        case 13:
          message.spSlashMaxAmount = reader.string();
          break;
        case 14:
          message.spSlashCountingWindow = reader.uint64();
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
      challengeCountPerBlock: isSet(object.challengeCountPerBlock) ? BigInt(object.challengeCountPerBlock.toString()) : BigInt(0),
      challengeKeepAlivePeriod: isSet(object.challengeKeepAlivePeriod) ? BigInt(object.challengeKeepAlivePeriod.toString()) : BigInt(0),
      slashCoolingOffPeriod: isSet(object.slashCoolingOffPeriod) ? BigInt(object.slashCoolingOffPeriod.toString()) : BigInt(0),
      slashAmountSizeRate: isSet(object.slashAmountSizeRate) ? String(object.slashAmountSizeRate) : "",
      slashAmountMin: isSet(object.slashAmountMin) ? String(object.slashAmountMin) : "",
      slashAmountMax: isSet(object.slashAmountMax) ? String(object.slashAmountMax) : "",
      rewardValidatorRatio: isSet(object.rewardValidatorRatio) ? String(object.rewardValidatorRatio) : "",
      rewardSubmitterRatio: isSet(object.rewardSubmitterRatio) ? String(object.rewardSubmitterRatio) : "",
      rewardSubmitterThreshold: isSet(object.rewardSubmitterThreshold) ? String(object.rewardSubmitterThreshold) : "",
      heartbeatInterval: isSet(object.heartbeatInterval) ? BigInt(object.heartbeatInterval.toString()) : BigInt(0),
      attestationInturnInterval: isSet(object.attestationInturnInterval) ? BigInt(object.attestationInturnInterval.toString()) : BigInt(0),
      attestationKeptCount: isSet(object.attestationKeptCount) ? BigInt(object.attestationKeptCount.toString()) : BigInt(0),
      spSlashMaxAmount: isSet(object.spSlashMaxAmount) ? String(object.spSlashMaxAmount) : "",
      spSlashCountingWindow: isSet(object.spSlashCountingWindow) ? BigInt(object.spSlashCountingWindow.toString()) : BigInt(0)
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.challengeCountPerBlock !== undefined && (obj.challengeCountPerBlock = (message.challengeCountPerBlock || BigInt(0)).toString());
    message.challengeKeepAlivePeriod !== undefined && (obj.challengeKeepAlivePeriod = (message.challengeKeepAlivePeriod || BigInt(0)).toString());
    message.slashCoolingOffPeriod !== undefined && (obj.slashCoolingOffPeriod = (message.slashCoolingOffPeriod || BigInt(0)).toString());
    message.slashAmountSizeRate !== undefined && (obj.slashAmountSizeRate = message.slashAmountSizeRate);
    message.slashAmountMin !== undefined && (obj.slashAmountMin = message.slashAmountMin);
    message.slashAmountMax !== undefined && (obj.slashAmountMax = message.slashAmountMax);
    message.rewardValidatorRatio !== undefined && (obj.rewardValidatorRatio = message.rewardValidatorRatio);
    message.rewardSubmitterRatio !== undefined && (obj.rewardSubmitterRatio = message.rewardSubmitterRatio);
    message.rewardSubmitterThreshold !== undefined && (obj.rewardSubmitterThreshold = message.rewardSubmitterThreshold);
    message.heartbeatInterval !== undefined && (obj.heartbeatInterval = (message.heartbeatInterval || BigInt(0)).toString());
    message.attestationInturnInterval !== undefined && (obj.attestationInturnInterval = (message.attestationInturnInterval || BigInt(0)).toString());
    message.attestationKeptCount !== undefined && (obj.attestationKeptCount = (message.attestationKeptCount || BigInt(0)).toString());
    message.spSlashMaxAmount !== undefined && (obj.spSlashMaxAmount = message.spSlashMaxAmount);
    message.spSlashCountingWindow !== undefined && (obj.spSlashCountingWindow = (message.spSlashCountingWindow || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.challengeCountPerBlock = object.challengeCountPerBlock !== undefined && object.challengeCountPerBlock !== null ? BigInt(object.challengeCountPerBlock.toString()) : BigInt(0);
    message.challengeKeepAlivePeriod = object.challengeKeepAlivePeriod !== undefined && object.challengeKeepAlivePeriod !== null ? BigInt(object.challengeKeepAlivePeriod.toString()) : BigInt(0);
    message.slashCoolingOffPeriod = object.slashCoolingOffPeriod !== undefined && object.slashCoolingOffPeriod !== null ? BigInt(object.slashCoolingOffPeriod.toString()) : BigInt(0);
    message.slashAmountSizeRate = object.slashAmountSizeRate ?? "";
    message.slashAmountMin = object.slashAmountMin ?? "";
    message.slashAmountMax = object.slashAmountMax ?? "";
    message.rewardValidatorRatio = object.rewardValidatorRatio ?? "";
    message.rewardSubmitterRatio = object.rewardSubmitterRatio ?? "";
    message.rewardSubmitterThreshold = object.rewardSubmitterThreshold ?? "";
    message.heartbeatInterval = object.heartbeatInterval !== undefined && object.heartbeatInterval !== null ? BigInt(object.heartbeatInterval.toString()) : BigInt(0);
    message.attestationInturnInterval = object.attestationInturnInterval !== undefined && object.attestationInturnInterval !== null ? BigInt(object.attestationInturnInterval.toString()) : BigInt(0);
    message.attestationKeptCount = object.attestationKeptCount !== undefined && object.attestationKeptCount !== null ? BigInt(object.attestationKeptCount.toString()) : BigInt(0);
    message.spSlashMaxAmount = object.spSlashMaxAmount ?? "";
    message.spSlashCountingWindow = object.spSlashCountingWindow !== undefined && object.spSlashCountingWindow !== null ? BigInt(object.spSlashCountingWindow.toString()) : BigInt(0);
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
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.challenge_count_per_block !== undefined && object.challenge_count_per_block !== null) {
      message.challengeCountPerBlock = BigInt(object.challenge_count_per_block);
    }
    if (object.challenge_keep_alive_period !== undefined && object.challenge_keep_alive_period !== null) {
      message.challengeKeepAlivePeriod = BigInt(object.challenge_keep_alive_period);
    }
    if (object.slash_cooling_off_period !== undefined && object.slash_cooling_off_period !== null) {
      message.slashCoolingOffPeriod = BigInt(object.slash_cooling_off_period);
    }
    if (object.slash_amount_size_rate !== undefined && object.slash_amount_size_rate !== null) {
      message.slashAmountSizeRate = object.slash_amount_size_rate;
    }
    if (object.slash_amount_min !== undefined && object.slash_amount_min !== null) {
      message.slashAmountMin = object.slash_amount_min;
    }
    if (object.slash_amount_max !== undefined && object.slash_amount_max !== null) {
      message.slashAmountMax = object.slash_amount_max;
    }
    if (object.reward_validator_ratio !== undefined && object.reward_validator_ratio !== null) {
      message.rewardValidatorRatio = object.reward_validator_ratio;
    }
    if (object.reward_submitter_ratio !== undefined && object.reward_submitter_ratio !== null) {
      message.rewardSubmitterRatio = object.reward_submitter_ratio;
    }
    if (object.reward_submitter_threshold !== undefined && object.reward_submitter_threshold !== null) {
      message.rewardSubmitterThreshold = object.reward_submitter_threshold;
    }
    if (object.heartbeat_interval !== undefined && object.heartbeat_interval !== null) {
      message.heartbeatInterval = BigInt(object.heartbeat_interval);
    }
    if (object.attestation_inturn_interval !== undefined && object.attestation_inturn_interval !== null) {
      message.attestationInturnInterval = BigInt(object.attestation_inturn_interval);
    }
    if (object.attestation_kept_count !== undefined && object.attestation_kept_count !== null) {
      message.attestationKeptCount = BigInt(object.attestation_kept_count);
    }
    if (object.sp_slash_max_amount !== undefined && object.sp_slash_max_amount !== null) {
      message.spSlashMaxAmount = object.sp_slash_max_amount;
    }
    if (object.sp_slash_counting_window !== undefined && object.sp_slash_counting_window !== null) {
      message.spSlashCountingWindow = BigInt(object.sp_slash_counting_window);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.challenge_count_per_block = message.challengeCountPerBlock ? message.challengeCountPerBlock.toString() : undefined;
    obj.challenge_keep_alive_period = message.challengeKeepAlivePeriod ? message.challengeKeepAlivePeriod.toString() : undefined;
    obj.slash_cooling_off_period = message.slashCoolingOffPeriod ? message.slashCoolingOffPeriod.toString() : undefined;
    obj.slash_amount_size_rate = message.slashAmountSizeRate;
    obj.slash_amount_min = message.slashAmountMin;
    obj.slash_amount_max = message.slashAmountMax;
    obj.reward_validator_ratio = message.rewardValidatorRatio;
    obj.reward_submitter_ratio = message.rewardSubmitterRatio;
    obj.reward_submitter_threshold = message.rewardSubmitterThreshold;
    obj.heartbeat_interval = message.heartbeatInterval ? message.heartbeatInterval.toString() : undefined;
    obj.attestation_inturn_interval = message.attestationInturnInterval ? message.attestationInturnInterval.toString() : undefined;
    obj.attestation_kept_count = message.attestationKeptCount ? message.attestationKeptCount.toString() : undefined;
    obj.sp_slash_max_amount = message.spSlashMaxAmount;
    obj.sp_slash_counting_window = message.spSlashCountingWindow ? message.spSlashCountingWindow.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/greenfield.challenge.Params",
      value: Params.encode(message).finish()
    };
  }
};