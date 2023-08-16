//@ts-nocheck
/* eslint-disable */
import { VoteResult, voteResultFromJSON, voteResultToJSON } from "./types";
import { Long, isSet, DeepPartial, Exact } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "greenfield.challenge";
/** EventStartChallenge to indicate a challenge has bee created. */

export interface EventStartChallenge {
  /** The id of challenge, which is generated by blockchain. */
  challengeId: Long;
  /** The id of object info to be challenged. */

  objectId: string;
  /** The segment/piece index of the object info. */

  segmentIndex: number;
  /** The storage provider to be challenged. */

  spId: number;
  /** The storage provider to be challenged. */

  spOperatorAddress: string;
  /** The redundancy index, which comes from the index of storage providers. */

  redundancyIndex: number;
  /** The challenger who submits the challenge. */

  challengerAddress: string;
  /** The challenge will be expired after this height */

  expiredHeight: Long;
}
/** EventStartChallenge to indicate a challenge has bee created. */

export interface EventStartChallengeSDKType {
  challenge_id: Long;
  object_id: string;
  segment_index: number;
  sp_id: number;
  sp_operator_address: string;
  redundancy_index: number;
  challenger_address: string;
  expired_height: Long;
}
/** EventAttestChallenge to indicate a challenge has been attested. */

export interface EventAttestChallenge {
  /** The id of challenge. */
  challengeId: Long;
  /** The result of challenge. */

  result: VoteResult;
  /** The slashed storage provider address. */

  spId: number;
  /** The slashed amount from the storage provider. */

  slashAmount: string;
  /** The address of challenger. */

  challengerAddress: string;
  /** The reward amount to the challenger. */

  challengerRewardAmount: string;
  /** The submitter of the challenge attestation. */

  submitterAddress: string;
  /** The reward amount to the submitter. */

  submitterRewardAmount: string;
  /** The reward amount to all current validators. */

  validatorRewardAmount: string;
}
/** EventAttestChallenge to indicate a challenge has been attested. */

export interface EventAttestChallengeSDKType {
  challenge_id: Long;
  result: VoteResult;
  sp_id: number;
  slash_amount: string;
  challenger_address: string;
  challenger_reward_amount: string;
  submitter_address: string;
  submitter_reward_amount: string;
  validator_reward_amount: string;
}

function createBaseEventStartChallenge(): EventStartChallenge {
  return {
    challengeId: Long.UZERO,
    objectId: "",
    segmentIndex: 0,
    spId: 0,
    spOperatorAddress: "",
    redundancyIndex: 0,
    challengerAddress: "",
    expiredHeight: Long.UZERO
  };
}

export const EventStartChallenge = {
  encode(message: EventStartChallenge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.challengeId.isZero()) {
      writer.uint32(8).uint64(message.challengeId);
    }

    if (message.objectId !== "") {
      writer.uint32(18).string(message.objectId);
    }

    if (message.segmentIndex !== 0) {
      writer.uint32(24).uint32(message.segmentIndex);
    }

    if (message.spId !== 0) {
      writer.uint32(32).uint32(message.spId);
    }

    if (message.spOperatorAddress !== "") {
      writer.uint32(42).string(message.spOperatorAddress);
    }

    if (message.redundancyIndex !== 0) {
      writer.uint32(48).int32(message.redundancyIndex);
    }

    if (message.challengerAddress !== "") {
      writer.uint32(58).string(message.challengerAddress);
    }

    if (!message.expiredHeight.isZero()) {
      writer.uint32(64).uint64(message.expiredHeight);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventStartChallenge {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventStartChallenge();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.challengeId = (reader.uint64() as Long);
          break;

        case 2:
          message.objectId = reader.string();
          break;

        case 3:
          message.segmentIndex = reader.uint32();
          break;

        case 4:
          message.spId = reader.uint32();
          break;

        case 5:
          message.spOperatorAddress = reader.string();
          break;

        case 6:
          message.redundancyIndex = reader.int32();
          break;

        case 7:
          message.challengerAddress = reader.string();
          break;

        case 8:
          message.expiredHeight = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventStartChallenge {
    return {
      challengeId: isSet(object.challengeId) ? Long.fromValue(object.challengeId) : Long.UZERO,
      objectId: isSet(object.objectId) ? String(object.objectId) : "",
      segmentIndex: isSet(object.segmentIndex) ? Number(object.segmentIndex) : 0,
      spId: isSet(object.spId) ? Number(object.spId) : 0,
      spOperatorAddress: isSet(object.spOperatorAddress) ? String(object.spOperatorAddress) : "",
      redundancyIndex: isSet(object.redundancyIndex) ? Number(object.redundancyIndex) : 0,
      challengerAddress: isSet(object.challengerAddress) ? String(object.challengerAddress) : "",
      expiredHeight: isSet(object.expiredHeight) ? Long.fromValue(object.expiredHeight) : Long.UZERO
    };
  },

  toJSON(message: EventStartChallenge): unknown {
    const obj: any = {};
    message.challengeId !== undefined && (obj.challengeId = (message.challengeId || Long.UZERO).toString());
    message.objectId !== undefined && (obj.objectId = message.objectId);
    message.segmentIndex !== undefined && (obj.segmentIndex = Math.round(message.segmentIndex));
    message.spId !== undefined && (obj.spId = Math.round(message.spId));
    message.spOperatorAddress !== undefined && (obj.spOperatorAddress = message.spOperatorAddress);
    message.redundancyIndex !== undefined && (obj.redundancyIndex = Math.round(message.redundancyIndex));
    message.challengerAddress !== undefined && (obj.challengerAddress = message.challengerAddress);
    message.expiredHeight !== undefined && (obj.expiredHeight = (message.expiredHeight || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventStartChallenge>, I>>(object: I): EventStartChallenge {
    const message = createBaseEventStartChallenge();
    message.challengeId = object.challengeId !== undefined && object.challengeId !== null ? Long.fromValue(object.challengeId) : Long.UZERO;
    message.objectId = object.objectId ?? "";
    message.segmentIndex = object.segmentIndex ?? 0;
    message.spId = object.spId ?? 0;
    message.spOperatorAddress = object.spOperatorAddress ?? "";
    message.redundancyIndex = object.redundancyIndex ?? 0;
    message.challengerAddress = object.challengerAddress ?? "";
    message.expiredHeight = object.expiredHeight !== undefined && object.expiredHeight !== null ? Long.fromValue(object.expiredHeight) : Long.UZERO;
    return message;
  },

  fromSDK(object: EventStartChallengeSDKType): EventStartChallenge {
    return {
      challengeId: object?.challenge_id,
      objectId: object?.object_id,
      segmentIndex: object?.segment_index,
      spId: object?.sp_id,
      spOperatorAddress: object?.sp_operator_address,
      redundancyIndex: object?.redundancy_index,
      challengerAddress: object?.challenger_address,
      expiredHeight: object?.expired_height
    };
  },

  toSDK(message: EventStartChallenge): EventStartChallengeSDKType {
    const obj: any = {};
    obj.challenge_id = message.challengeId;
    obj.object_id = message.objectId;
    obj.segment_index = message.segmentIndex;
    obj.sp_id = message.spId;
    obj.sp_operator_address = message.spOperatorAddress;
    obj.redundancy_index = message.redundancyIndex;
    obj.challenger_address = message.challengerAddress;
    obj.expired_height = message.expiredHeight;
    return obj;
  }

};

function createBaseEventAttestChallenge(): EventAttestChallenge {
  return {
    challengeId: Long.UZERO,
    result: 0,
    spId: 0,
    slashAmount: "",
    challengerAddress: "",
    challengerRewardAmount: "",
    submitterAddress: "",
    submitterRewardAmount: "",
    validatorRewardAmount: ""
  };
}

export const EventAttestChallenge = {
  encode(message: EventAttestChallenge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.challengeId.isZero()) {
      writer.uint32(8).uint64(message.challengeId);
    }

    if (message.result !== 0) {
      writer.uint32(16).int32(message.result);
    }

    if (message.spId !== 0) {
      writer.uint32(24).uint32(message.spId);
    }

    if (message.slashAmount !== "") {
      writer.uint32(34).string(message.slashAmount);
    }

    if (message.challengerAddress !== "") {
      writer.uint32(42).string(message.challengerAddress);
    }

    if (message.challengerRewardAmount !== "") {
      writer.uint32(50).string(message.challengerRewardAmount);
    }

    if (message.submitterAddress !== "") {
      writer.uint32(58).string(message.submitterAddress);
    }

    if (message.submitterRewardAmount !== "") {
      writer.uint32(66).string(message.submitterRewardAmount);
    }

    if (message.validatorRewardAmount !== "") {
      writer.uint32(82).string(message.validatorRewardAmount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventAttestChallenge {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAttestChallenge();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.challengeId = (reader.uint64() as Long);
          break;

        case 2:
          message.result = (reader.int32() as any);
          break;

        case 3:
          message.spId = reader.uint32();
          break;

        case 4:
          message.slashAmount = reader.string();
          break;

        case 5:
          message.challengerAddress = reader.string();
          break;

        case 6:
          message.challengerRewardAmount = reader.string();
          break;

        case 7:
          message.submitterAddress = reader.string();
          break;

        case 8:
          message.submitterRewardAmount = reader.string();
          break;

        case 10:
          message.validatorRewardAmount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventAttestChallenge {
    return {
      challengeId: isSet(object.challengeId) ? Long.fromValue(object.challengeId) : Long.UZERO,
      result: isSet(object.result) ? voteResultFromJSON(object.result) : 0,
      spId: isSet(object.spId) ? Number(object.spId) : 0,
      slashAmount: isSet(object.slashAmount) ? String(object.slashAmount) : "",
      challengerAddress: isSet(object.challengerAddress) ? String(object.challengerAddress) : "",
      challengerRewardAmount: isSet(object.challengerRewardAmount) ? String(object.challengerRewardAmount) : "",
      submitterAddress: isSet(object.submitterAddress) ? String(object.submitterAddress) : "",
      submitterRewardAmount: isSet(object.submitterRewardAmount) ? String(object.submitterRewardAmount) : "",
      validatorRewardAmount: isSet(object.validatorRewardAmount) ? String(object.validatorRewardAmount) : ""
    };
  },

  toJSON(message: EventAttestChallenge): unknown {
    const obj: any = {};
    message.challengeId !== undefined && (obj.challengeId = (message.challengeId || Long.UZERO).toString());
    message.result !== undefined && (obj.result = voteResultToJSON(message.result));
    message.spId !== undefined && (obj.spId = Math.round(message.spId));
    message.slashAmount !== undefined && (obj.slashAmount = message.slashAmount);
    message.challengerAddress !== undefined && (obj.challengerAddress = message.challengerAddress);
    message.challengerRewardAmount !== undefined && (obj.challengerRewardAmount = message.challengerRewardAmount);
    message.submitterAddress !== undefined && (obj.submitterAddress = message.submitterAddress);
    message.submitterRewardAmount !== undefined && (obj.submitterRewardAmount = message.submitterRewardAmount);
    message.validatorRewardAmount !== undefined && (obj.validatorRewardAmount = message.validatorRewardAmount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventAttestChallenge>, I>>(object: I): EventAttestChallenge {
    const message = createBaseEventAttestChallenge();
    message.challengeId = object.challengeId !== undefined && object.challengeId !== null ? Long.fromValue(object.challengeId) : Long.UZERO;
    message.result = object.result ?? 0;
    message.spId = object.spId ?? 0;
    message.slashAmount = object.slashAmount ?? "";
    message.challengerAddress = object.challengerAddress ?? "";
    message.challengerRewardAmount = object.challengerRewardAmount ?? "";
    message.submitterAddress = object.submitterAddress ?? "";
    message.submitterRewardAmount = object.submitterRewardAmount ?? "";
    message.validatorRewardAmount = object.validatorRewardAmount ?? "";
    return message;
  },

  fromSDK(object: EventAttestChallengeSDKType): EventAttestChallenge {
    return {
      challengeId: object?.challenge_id,
      result: isSet(object.result) ? voteResultFromJSON(object.result) : 0,
      spId: object?.sp_id,
      slashAmount: object?.slash_amount,
      challengerAddress: object?.challenger_address,
      challengerRewardAmount: object?.challenger_reward_amount,
      submitterAddress: object?.submitter_address,
      submitterRewardAmount: object?.submitter_reward_amount,
      validatorRewardAmount: object?.validator_reward_amount
    };
  },

  toSDK(message: EventAttestChallenge): EventAttestChallengeSDKType {
    const obj: any = {};
    obj.challenge_id = message.challengeId;
    message.result !== undefined && (obj.result = voteResultToJSON(message.result));
    obj.sp_id = message.spId;
    obj.slash_amount = message.slashAmount;
    obj.challenger_address = message.challengerAddress;
    obj.challenger_reward_amount = message.challengerRewardAmount;
    obj.submitter_address = message.submitterAddress;
    obj.submitter_reward_amount = message.submitterRewardAmount;
    obj.validator_reward_amount = message.validatorRewardAmount;
    return obj;
  }

};