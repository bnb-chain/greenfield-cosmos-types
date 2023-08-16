//@ts-nocheck
/* eslint-disable */
import { Description, DescriptionSDKType, CommissionRates, CommissionRatesSDKType, Params, ParamsSDKType } from "./staking";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Long, isSet, DeepPartial, Exact, fromJsonTimestamp, fromTimestamp, Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmos.staking.v1beta1";
/** MsgCreateValidator defines a SDK message for creating a new validator. */

export interface MsgCreateValidator {
  description?: Description;
  commission?: CommissionRates;
  minSelfDelegation: string;
  delegatorAddress: string;
  validatorAddress: string;
  pubkey?: Any;
  value?: Coin;
  from: string;
  relayerAddress: string;
  challengerAddress: string;
  blsKey: string;
  blsProof: string;
}
/** MsgCreateValidator defines a SDK message for creating a new validator. */

export interface MsgCreateValidatorSDKType {
  description?: DescriptionSDKType;
  commission?: CommissionRatesSDKType;
  min_self_delegation: string;
  delegator_address: string;
  validator_address: string;
  pubkey?: AnySDKType;
  value?: CoinSDKType;
  from: string;
  relayer_address: string;
  challenger_address: string;
  bls_key: string;
  bls_proof: string;
}
/** MsgCreateValidatorResponse defines the Msg/CreateValidator response type. */

export interface MsgCreateValidatorResponse {}
/** MsgCreateValidatorResponse defines the Msg/CreateValidator response type. */

export interface MsgCreateValidatorResponseSDKType {}
/** MsgEditValidator defines a SDK message for editing an existing validator. */

export interface MsgEditValidator {
  description?: Description;
  validatorAddress: string;
  /**
   * We pass a reference to the new commission rate and min self delegation as
   * it's not mandatory to update. If not updated, the deserialized rate will be
   * zero with no way to distinguish if an update was intended.
   * REF: #2373
   */

  commissionRate: string;
  minSelfDelegation: string;
  relayerAddress: string;
  challengerAddress: string;
  /** The BLS pubkey for the authorized relayer/challenger */

  blsKey: string;
  blsProof: string;
}
/** MsgEditValidator defines a SDK message for editing an existing validator. */

export interface MsgEditValidatorSDKType {
  description?: DescriptionSDKType;
  validator_address: string;
  commission_rate: string;
  min_self_delegation: string;
  relayer_address: string;
  challenger_address: string;
  bls_key: string;
  bls_proof: string;
}
/** MsgEditValidatorResponse defines the Msg/EditValidator response type. */

export interface MsgEditValidatorResponse {}
/** MsgEditValidatorResponse defines the Msg/EditValidator response type. */

export interface MsgEditValidatorResponseSDKType {}
/**
 * MsgDelegate defines a SDK message for performing a delegation of coins
 * from a delegator to a validator.
 */

export interface MsgDelegate {
  delegatorAddress: string;
  validatorAddress: string;
  amount?: Coin;
}
/**
 * MsgDelegate defines a SDK message for performing a delegation of coins
 * from a delegator to a validator.
 */

export interface MsgDelegateSDKType {
  delegator_address: string;
  validator_address: string;
  amount?: CoinSDKType;
}
/** MsgDelegateResponse defines the Msg/Delegate response type. */

export interface MsgDelegateResponse {}
/** MsgDelegateResponse defines the Msg/Delegate response type. */

export interface MsgDelegateResponseSDKType {}
/**
 * MsgBeginRedelegate defines a SDK message for performing a redelegation
 * of coins from a delegator and source validator to a destination validator.
 */

export interface MsgBeginRedelegate {
  delegatorAddress: string;
  validatorSrcAddress: string;
  validatorDstAddress: string;
  amount?: Coin;
}
/**
 * MsgBeginRedelegate defines a SDK message for performing a redelegation
 * of coins from a delegator and source validator to a destination validator.
 */

export interface MsgBeginRedelegateSDKType {
  delegator_address: string;
  validator_src_address: string;
  validator_dst_address: string;
  amount?: CoinSDKType;
}
/** MsgBeginRedelegateResponse defines the Msg/BeginRedelegate response type. */

export interface MsgBeginRedelegateResponse {
  completionTime?: Timestamp;
}
/** MsgBeginRedelegateResponse defines the Msg/BeginRedelegate response type. */

export interface MsgBeginRedelegateResponseSDKType {
  completion_time?: TimestampSDKType;
}
/**
 * MsgUndelegate defines a SDK message for performing an undelegation from a
 * delegate and a validator.
 */

export interface MsgUndelegate {
  delegatorAddress: string;
  validatorAddress: string;
  amount?: Coin;
}
/**
 * MsgUndelegate defines a SDK message for performing an undelegation from a
 * delegate and a validator.
 */

export interface MsgUndelegateSDKType {
  delegator_address: string;
  validator_address: string;
  amount?: CoinSDKType;
}
/** MsgUndelegateResponse defines the Msg/Undelegate response type. */

export interface MsgUndelegateResponse {
  completionTime?: Timestamp;
}
/** MsgUndelegateResponse defines the Msg/Undelegate response type. */

export interface MsgUndelegateResponseSDKType {
  completion_time?: TimestampSDKType;
}
/**
 * MsgCancelUnbondingDelegation defines the SDK message for performing a cancel unbonding delegation for delegator
 * 
 * Since: cosmos-sdk 0.46
 */

export interface MsgCancelUnbondingDelegation {
  delegatorAddress: string;
  validatorAddress: string;
  /** amount is always less than or equal to unbonding delegation entry balance */

  amount?: Coin;
  /** creation_height is the height which the unbonding took place. */

  creationHeight: Long;
}
/**
 * MsgCancelUnbondingDelegation defines the SDK message for performing a cancel unbonding delegation for delegator
 * 
 * Since: cosmos-sdk 0.46
 */

export interface MsgCancelUnbondingDelegationSDKType {
  delegator_address: string;
  validator_address: string;
  amount?: CoinSDKType;
  creation_height: Long;
}
/**
 * MsgCancelUnbondingDelegationResponse
 * 
 * Since: cosmos-sdk 0.46
 */

export interface MsgCancelUnbondingDelegationResponse {}
/**
 * MsgCancelUnbondingDelegationResponse
 * 
 * Since: cosmos-sdk 0.46
 */

export interface MsgCancelUnbondingDelegationResponseSDKType {}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * Since: cosmos-sdk 0.47
 */

export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /**
   * params defines the x/staking parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */

  params?: Params;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * Since: cosmos-sdk 0.47
 */

export interface MsgUpdateParamsSDKType {
  authority: string;
  params?: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: cosmos-sdk 0.47
 */

export interface MsgUpdateParamsResponse {}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: cosmos-sdk 0.47
 */

export interface MsgUpdateParamsResponseSDKType {}

function createBaseMsgCreateValidator(): MsgCreateValidator {
  return {
    description: undefined,
    commission: undefined,
    minSelfDelegation: "",
    delegatorAddress: "",
    validatorAddress: "",
    pubkey: undefined,
    value: undefined,
    from: "",
    relayerAddress: "",
    challengerAddress: "",
    blsKey: "",
    blsProof: ""
  };
}

export const MsgCreateValidator = {
  encode(message: MsgCreateValidator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.description !== undefined) {
      Description.encode(message.description, writer.uint32(10).fork()).ldelim();
    }

    if (message.commission !== undefined) {
      CommissionRates.encode(message.commission, writer.uint32(18).fork()).ldelim();
    }

    if (message.minSelfDelegation !== "") {
      writer.uint32(26).string(message.minSelfDelegation);
    }

    if (message.delegatorAddress !== "") {
      writer.uint32(34).string(message.delegatorAddress);
    }

    if (message.validatorAddress !== "") {
      writer.uint32(42).string(message.validatorAddress);
    }

    if (message.pubkey !== undefined) {
      Any.encode(message.pubkey, writer.uint32(50).fork()).ldelim();
    }

    if (message.value !== undefined) {
      Coin.encode(message.value, writer.uint32(58).fork()).ldelim();
    }

    if (message.from !== "") {
      writer.uint32(66).string(message.from);
    }

    if (message.relayerAddress !== "") {
      writer.uint32(74).string(message.relayerAddress);
    }

    if (message.challengerAddress !== "") {
      writer.uint32(82).string(message.challengerAddress);
    }

    if (message.blsKey !== "") {
      writer.uint32(90).string(message.blsKey);
    }

    if (message.blsProof !== "") {
      writer.uint32(98).string(message.blsProof);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateValidator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateValidator();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.description = Description.decode(reader, reader.uint32());
          break;

        case 2:
          message.commission = CommissionRates.decode(reader, reader.uint32());
          break;

        case 3:
          message.minSelfDelegation = reader.string();
          break;

        case 4:
          message.delegatorAddress = reader.string();
          break;

        case 5:
          message.validatorAddress = reader.string();
          break;

        case 6:
          message.pubkey = Any.decode(reader, reader.uint32());
          break;

        case 7:
          message.value = Coin.decode(reader, reader.uint32());
          break;

        case 8:
          message.from = reader.string();
          break;

        case 9:
          message.relayerAddress = reader.string();
          break;

        case 10:
          message.challengerAddress = reader.string();
          break;

        case 11:
          message.blsKey = reader.string();
          break;

        case 12:
          message.blsProof = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateValidator {
    return {
      description: isSet(object.description) ? Description.fromJSON(object.description) : undefined,
      commission: isSet(object.commission) ? CommissionRates.fromJSON(object.commission) : undefined,
      minSelfDelegation: isSet(object.minSelfDelegation) ? String(object.minSelfDelegation) : "",
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      pubkey: isSet(object.pubkey) ? Any.fromJSON(object.pubkey) : undefined,
      value: isSet(object.value) ? Coin.fromJSON(object.value) : undefined,
      from: isSet(object.from) ? String(object.from) : "",
      relayerAddress: isSet(object.relayerAddress) ? String(object.relayerAddress) : "",
      challengerAddress: isSet(object.challengerAddress) ? String(object.challengerAddress) : "",
      blsKey: isSet(object.blsKey) ? String(object.blsKey) : "",
      blsProof: isSet(object.blsProof) ? String(object.blsProof) : ""
    };
  },

  toJSON(message: MsgCreateValidator): unknown {
    const obj: any = {};
    message.description !== undefined && (obj.description = message.description ? Description.toJSON(message.description) : undefined);
    message.commission !== undefined && (obj.commission = message.commission ? CommissionRates.toJSON(message.commission) : undefined);
    message.minSelfDelegation !== undefined && (obj.minSelfDelegation = message.minSelfDelegation);
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.pubkey !== undefined && (obj.pubkey = message.pubkey ? Any.toJSON(message.pubkey) : undefined);
    message.value !== undefined && (obj.value = message.value ? Coin.toJSON(message.value) : undefined);
    message.from !== undefined && (obj.from = message.from);
    message.relayerAddress !== undefined && (obj.relayerAddress = message.relayerAddress);
    message.challengerAddress !== undefined && (obj.challengerAddress = message.challengerAddress);
    message.blsKey !== undefined && (obj.blsKey = message.blsKey);
    message.blsProof !== undefined && (obj.blsProof = message.blsProof);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateValidator>, I>>(object: I): MsgCreateValidator {
    const message = createBaseMsgCreateValidator();
    message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
    message.commission = object.commission !== undefined && object.commission !== null ? CommissionRates.fromPartial(object.commission) : undefined;
    message.minSelfDelegation = object.minSelfDelegation ?? "";
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.pubkey = object.pubkey !== undefined && object.pubkey !== null ? Any.fromPartial(object.pubkey) : undefined;
    message.value = object.value !== undefined && object.value !== null ? Coin.fromPartial(object.value) : undefined;
    message.from = object.from ?? "";
    message.relayerAddress = object.relayerAddress ?? "";
    message.challengerAddress = object.challengerAddress ?? "";
    message.blsKey = object.blsKey ?? "";
    message.blsProof = object.blsProof ?? "";
    return message;
  },

  fromSDK(object: MsgCreateValidatorSDKType): MsgCreateValidator {
    return {
      description: object.description ? Description.fromSDK(object.description) : undefined,
      commission: object.commission ? CommissionRates.fromSDK(object.commission) : undefined,
      minSelfDelegation: object?.min_self_delegation,
      delegatorAddress: object?.delegator_address,
      validatorAddress: object?.validator_address,
      pubkey: object.pubkey ? Any.fromSDK(object.pubkey) : undefined,
      value: object.value ? Coin.fromSDK(object.value) : undefined,
      from: object?.from,
      relayerAddress: object?.relayer_address,
      challengerAddress: object?.challenger_address,
      blsKey: object?.bls_key,
      blsProof: object?.bls_proof
    };
  },

  toSDK(message: MsgCreateValidator): MsgCreateValidatorSDKType {
    const obj: any = {};
    message.description !== undefined && (obj.description = message.description ? Description.toSDK(message.description) : undefined);
    message.commission !== undefined && (obj.commission = message.commission ? CommissionRates.toSDK(message.commission) : undefined);
    obj.min_self_delegation = message.minSelfDelegation;
    obj.delegator_address = message.delegatorAddress;
    obj.validator_address = message.validatorAddress;
    message.pubkey !== undefined && (obj.pubkey = message.pubkey ? Any.toSDK(message.pubkey) : undefined);
    message.value !== undefined && (obj.value = message.value ? Coin.toSDK(message.value) : undefined);
    obj.from = message.from;
    obj.relayer_address = message.relayerAddress;
    obj.challenger_address = message.challengerAddress;
    obj.bls_key = message.blsKey;
    obj.bls_proof = message.blsProof;
    return obj;
  }

};

function createBaseMsgCreateValidatorResponse(): MsgCreateValidatorResponse {
  return {};
}

export const MsgCreateValidatorResponse = {
  encode(_: MsgCreateValidatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateValidatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateValidatorResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgCreateValidatorResponse {
    return {};
  },

  toJSON(_: MsgCreateValidatorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateValidatorResponse>, I>>(_: I): MsgCreateValidatorResponse {
    const message = createBaseMsgCreateValidatorResponse();
    return message;
  },

  fromSDK(_: MsgCreateValidatorResponseSDKType): MsgCreateValidatorResponse {
    return {};
  },

  toSDK(_: MsgCreateValidatorResponse): MsgCreateValidatorResponseSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgEditValidator(): MsgEditValidator {
  return {
    description: undefined,
    validatorAddress: "",
    commissionRate: "",
    minSelfDelegation: "",
    relayerAddress: "",
    challengerAddress: "",
    blsKey: "",
    blsProof: ""
  };
}

export const MsgEditValidator = {
  encode(message: MsgEditValidator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.description !== undefined) {
      Description.encode(message.description, writer.uint32(10).fork()).ldelim();
    }

    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }

    if (message.commissionRate !== "") {
      writer.uint32(26).string(message.commissionRate);
    }

    if (message.minSelfDelegation !== "") {
      writer.uint32(34).string(message.minSelfDelegation);
    }

    if (message.relayerAddress !== "") {
      writer.uint32(42).string(message.relayerAddress);
    }

    if (message.challengerAddress !== "") {
      writer.uint32(50).string(message.challengerAddress);
    }

    if (message.blsKey !== "") {
      writer.uint32(58).string(message.blsKey);
    }

    if (message.blsProof !== "") {
      writer.uint32(66).string(message.blsProof);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditValidator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditValidator();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.description = Description.decode(reader, reader.uint32());
          break;

        case 2:
          message.validatorAddress = reader.string();
          break;

        case 3:
          message.commissionRate = reader.string();
          break;

        case 4:
          message.minSelfDelegation = reader.string();
          break;

        case 5:
          message.relayerAddress = reader.string();
          break;

        case 6:
          message.challengerAddress = reader.string();
          break;

        case 7:
          message.blsKey = reader.string();
          break;

        case 8:
          message.blsProof = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgEditValidator {
    return {
      description: isSet(object.description) ? Description.fromJSON(object.description) : undefined,
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      commissionRate: isSet(object.commissionRate) ? String(object.commissionRate) : "",
      minSelfDelegation: isSet(object.minSelfDelegation) ? String(object.minSelfDelegation) : "",
      relayerAddress: isSet(object.relayerAddress) ? String(object.relayerAddress) : "",
      challengerAddress: isSet(object.challengerAddress) ? String(object.challengerAddress) : "",
      blsKey: isSet(object.blsKey) ? String(object.blsKey) : "",
      blsProof: isSet(object.blsProof) ? String(object.blsProof) : ""
    };
  },

  toJSON(message: MsgEditValidator): unknown {
    const obj: any = {};
    message.description !== undefined && (obj.description = message.description ? Description.toJSON(message.description) : undefined);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.commissionRate !== undefined && (obj.commissionRate = message.commissionRate);
    message.minSelfDelegation !== undefined && (obj.minSelfDelegation = message.minSelfDelegation);
    message.relayerAddress !== undefined && (obj.relayerAddress = message.relayerAddress);
    message.challengerAddress !== undefined && (obj.challengerAddress = message.challengerAddress);
    message.blsKey !== undefined && (obj.blsKey = message.blsKey);
    message.blsProof !== undefined && (obj.blsProof = message.blsProof);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEditValidator>, I>>(object: I): MsgEditValidator {
    const message = createBaseMsgEditValidator();
    message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
    message.validatorAddress = object.validatorAddress ?? "";
    message.commissionRate = object.commissionRate ?? "";
    message.minSelfDelegation = object.minSelfDelegation ?? "";
    message.relayerAddress = object.relayerAddress ?? "";
    message.challengerAddress = object.challengerAddress ?? "";
    message.blsKey = object.blsKey ?? "";
    message.blsProof = object.blsProof ?? "";
    return message;
  },

  fromSDK(object: MsgEditValidatorSDKType): MsgEditValidator {
    return {
      description: object.description ? Description.fromSDK(object.description) : undefined,
      validatorAddress: object?.validator_address,
      commissionRate: object?.commission_rate,
      minSelfDelegation: object?.min_self_delegation,
      relayerAddress: object?.relayer_address,
      challengerAddress: object?.challenger_address,
      blsKey: object?.bls_key,
      blsProof: object?.bls_proof
    };
  },

  toSDK(message: MsgEditValidator): MsgEditValidatorSDKType {
    const obj: any = {};
    message.description !== undefined && (obj.description = message.description ? Description.toSDK(message.description) : undefined);
    obj.validator_address = message.validatorAddress;
    obj.commission_rate = message.commissionRate;
    obj.min_self_delegation = message.minSelfDelegation;
    obj.relayer_address = message.relayerAddress;
    obj.challenger_address = message.challengerAddress;
    obj.bls_key = message.blsKey;
    obj.bls_proof = message.blsProof;
    return obj;
  }

};

function createBaseMsgEditValidatorResponse(): MsgEditValidatorResponse {
  return {};
}

export const MsgEditValidatorResponse = {
  encode(_: MsgEditValidatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditValidatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditValidatorResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgEditValidatorResponse {
    return {};
  },

  toJSON(_: MsgEditValidatorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEditValidatorResponse>, I>>(_: I): MsgEditValidatorResponse {
    const message = createBaseMsgEditValidatorResponse();
    return message;
  },

  fromSDK(_: MsgEditValidatorResponseSDKType): MsgEditValidatorResponse {
    return {};
  },

  toSDK(_: MsgEditValidatorResponse): MsgEditValidatorResponseSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgDelegate(): MsgDelegate {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    amount: undefined
  };
}

export const MsgDelegate = {
  encode(message: MsgDelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }

    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegate();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;

        case 2:
          message.validatorAddress = reader.string();
          break;

        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgDelegate {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },

  toJSON(message: MsgDelegate): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDelegate>, I>>(object: I): MsgDelegate {
    const message = createBaseMsgDelegate();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },

  fromSDK(object: MsgDelegateSDKType): MsgDelegate {
    return {
      delegatorAddress: object?.delegator_address,
      validatorAddress: object?.validator_address,
      amount: object.amount ? Coin.fromSDK(object.amount) : undefined
    };
  },

  toSDK(message: MsgDelegate): MsgDelegateSDKType {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    obj.validator_address = message.validatorAddress;
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toSDK(message.amount) : undefined);
    return obj;
  }

};

function createBaseMsgDelegateResponse(): MsgDelegateResponse {
  return {};
}

export const MsgDelegateResponse = {
  encode(_: MsgDelegateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgDelegateResponse {
    return {};
  },

  toJSON(_: MsgDelegateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDelegateResponse>, I>>(_: I): MsgDelegateResponse {
    const message = createBaseMsgDelegateResponse();
    return message;
  },

  fromSDK(_: MsgDelegateResponseSDKType): MsgDelegateResponse {
    return {};
  },

  toSDK(_: MsgDelegateResponse): MsgDelegateResponseSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgBeginRedelegate(): MsgBeginRedelegate {
  return {
    delegatorAddress: "",
    validatorSrcAddress: "",
    validatorDstAddress: "",
    amount: undefined
  };
}

export const MsgBeginRedelegate = {
  encode(message: MsgBeginRedelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }

    if (message.validatorSrcAddress !== "") {
      writer.uint32(18).string(message.validatorSrcAddress);
    }

    if (message.validatorDstAddress !== "") {
      writer.uint32(26).string(message.validatorDstAddress);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBeginRedelegate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBeginRedelegate();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;

        case 2:
          message.validatorSrcAddress = reader.string();
          break;

        case 3:
          message.validatorDstAddress = reader.string();
          break;

        case 4:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgBeginRedelegate {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorSrcAddress: isSet(object.validatorSrcAddress) ? String(object.validatorSrcAddress) : "",
      validatorDstAddress: isSet(object.validatorDstAddress) ? String(object.validatorDstAddress) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },

  toJSON(message: MsgBeginRedelegate): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorSrcAddress !== undefined && (obj.validatorSrcAddress = message.validatorSrcAddress);
    message.validatorDstAddress !== undefined && (obj.validatorDstAddress = message.validatorDstAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBeginRedelegate>, I>>(object: I): MsgBeginRedelegate {
    const message = createBaseMsgBeginRedelegate();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorSrcAddress = object.validatorSrcAddress ?? "";
    message.validatorDstAddress = object.validatorDstAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },

  fromSDK(object: MsgBeginRedelegateSDKType): MsgBeginRedelegate {
    return {
      delegatorAddress: object?.delegator_address,
      validatorSrcAddress: object?.validator_src_address,
      validatorDstAddress: object?.validator_dst_address,
      amount: object.amount ? Coin.fromSDK(object.amount) : undefined
    };
  },

  toSDK(message: MsgBeginRedelegate): MsgBeginRedelegateSDKType {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    obj.validator_src_address = message.validatorSrcAddress;
    obj.validator_dst_address = message.validatorDstAddress;
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toSDK(message.amount) : undefined);
    return obj;
  }

};

function createBaseMsgBeginRedelegateResponse(): MsgBeginRedelegateResponse {
  return {
    completionTime: undefined
  };
}

export const MsgBeginRedelegateResponse = {
  encode(message: MsgBeginRedelegateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.completionTime !== undefined) {
      Timestamp.encode(message.completionTime, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBeginRedelegateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBeginRedelegateResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.completionTime = Timestamp.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgBeginRedelegateResponse {
    return {
      completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined
    };
  },

  toJSON(message: MsgBeginRedelegateResponse): unknown {
    const obj: any = {};
    message.completionTime !== undefined && (obj.completionTime = fromTimestamp(message.completionTime).toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBeginRedelegateResponse>, I>>(object: I): MsgBeginRedelegateResponse {
    const message = createBaseMsgBeginRedelegateResponse();
    message.completionTime = object.completionTime !== undefined && object.completionTime !== null ? Timestamp.fromPartial(object.completionTime) : undefined;
    return message;
  },

  fromSDK(object: MsgBeginRedelegateResponseSDKType): MsgBeginRedelegateResponse {
    return {
      completionTime: object.completion_time ? Timestamp.fromSDK(object.completion_time) : undefined
    };
  },

  toSDK(message: MsgBeginRedelegateResponse): MsgBeginRedelegateResponseSDKType {
    const obj: any = {};
    message.completionTime !== undefined && (obj.completion_time = message.completionTime ? Timestamp.toSDK(message.completionTime) : undefined);
    return obj;
  }

};

function createBaseMsgUndelegate(): MsgUndelegate {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    amount: undefined
  };
}

export const MsgUndelegate = {
  encode(message: MsgUndelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }

    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUndelegate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegate();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;

        case 2:
          message.validatorAddress = reader.string();
          break;

        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUndelegate {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },

  toJSON(message: MsgUndelegate): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUndelegate>, I>>(object: I): MsgUndelegate {
    const message = createBaseMsgUndelegate();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },

  fromSDK(object: MsgUndelegateSDKType): MsgUndelegate {
    return {
      delegatorAddress: object?.delegator_address,
      validatorAddress: object?.validator_address,
      amount: object.amount ? Coin.fromSDK(object.amount) : undefined
    };
  },

  toSDK(message: MsgUndelegate): MsgUndelegateSDKType {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    obj.validator_address = message.validatorAddress;
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toSDK(message.amount) : undefined);
    return obj;
  }

};

function createBaseMsgUndelegateResponse(): MsgUndelegateResponse {
  return {
    completionTime: undefined
  };
}

export const MsgUndelegateResponse = {
  encode(message: MsgUndelegateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.completionTime !== undefined) {
      Timestamp.encode(message.completionTime, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUndelegateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegateResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.completionTime = Timestamp.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUndelegateResponse {
    return {
      completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined
    };
  },

  toJSON(message: MsgUndelegateResponse): unknown {
    const obj: any = {};
    message.completionTime !== undefined && (obj.completionTime = fromTimestamp(message.completionTime).toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUndelegateResponse>, I>>(object: I): MsgUndelegateResponse {
    const message = createBaseMsgUndelegateResponse();
    message.completionTime = object.completionTime !== undefined && object.completionTime !== null ? Timestamp.fromPartial(object.completionTime) : undefined;
    return message;
  },

  fromSDK(object: MsgUndelegateResponseSDKType): MsgUndelegateResponse {
    return {
      completionTime: object.completion_time ? Timestamp.fromSDK(object.completion_time) : undefined
    };
  },

  toSDK(message: MsgUndelegateResponse): MsgUndelegateResponseSDKType {
    const obj: any = {};
    message.completionTime !== undefined && (obj.completion_time = message.completionTime ? Timestamp.toSDK(message.completionTime) : undefined);
    return obj;
  }

};

function createBaseMsgCancelUnbondingDelegation(): MsgCancelUnbondingDelegation {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    amount: undefined,
    creationHeight: Long.ZERO
  };
}

export const MsgCancelUnbondingDelegation = {
  encode(message: MsgCancelUnbondingDelegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }

    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }

    if (!message.creationHeight.isZero()) {
      writer.uint32(32).int64(message.creationHeight);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelUnbondingDelegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelUnbondingDelegation();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;

        case 2:
          message.validatorAddress = reader.string();
          break;

        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        case 4:
          message.creationHeight = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCancelUnbondingDelegation {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      creationHeight: isSet(object.creationHeight) ? Long.fromValue(object.creationHeight) : Long.ZERO
    };
  },

  toJSON(message: MsgCancelUnbondingDelegation): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.creationHeight !== undefined && (obj.creationHeight = (message.creationHeight || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelUnbondingDelegation>, I>>(object: I): MsgCancelUnbondingDelegation {
    const message = createBaseMsgCancelUnbondingDelegation();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.creationHeight = object.creationHeight !== undefined && object.creationHeight !== null ? Long.fromValue(object.creationHeight) : Long.ZERO;
    return message;
  },

  fromSDK(object: MsgCancelUnbondingDelegationSDKType): MsgCancelUnbondingDelegation {
    return {
      delegatorAddress: object?.delegator_address,
      validatorAddress: object?.validator_address,
      amount: object.amount ? Coin.fromSDK(object.amount) : undefined,
      creationHeight: object?.creation_height
    };
  },

  toSDK(message: MsgCancelUnbondingDelegation): MsgCancelUnbondingDelegationSDKType {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    obj.validator_address = message.validatorAddress;
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toSDK(message.amount) : undefined);
    obj.creation_height = message.creationHeight;
    return obj;
  }

};

function createBaseMsgCancelUnbondingDelegationResponse(): MsgCancelUnbondingDelegationResponse {
  return {};
}

export const MsgCancelUnbondingDelegationResponse = {
  encode(_: MsgCancelUnbondingDelegationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelUnbondingDelegationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelUnbondingDelegationResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgCancelUnbondingDelegationResponse {
    return {};
  },

  toJSON(_: MsgCancelUnbondingDelegationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelUnbondingDelegationResponse>, I>>(_: I): MsgCancelUnbondingDelegationResponse {
    const message = createBaseMsgCancelUnbondingDelegationResponse();
    return message;
  },

  fromSDK(_: MsgCancelUnbondingDelegationResponseSDKType): MsgCancelUnbondingDelegationResponse {
    return {};
  },

  toSDK(_: MsgCancelUnbondingDelegationResponse): MsgCancelUnbondingDelegationResponseSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: undefined
  };
}

export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }

    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;

        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },

  fromSDK(object: MsgUpdateParamsSDKType): MsgUpdateParams {
    return {
      authority: object?.authority,
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },

  toSDK(message: MsgUpdateParams): MsgUpdateParamsSDKType {
    const obj: any = {};
    obj.authority = message.authority;
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  }

};

function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}

export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },

  fromSDK(_: MsgUpdateParamsResponseSDKType): MsgUpdateParamsResponse {
    return {};
  },

  toSDK(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseSDKType {
    const obj: any = {};
    return obj;
  }

};
/** Msg defines the staking Msg service. */

export interface Msg {
  /** CreateValidator defines a method for creating a new validator. */
  CreateValidator(request: MsgCreateValidator): Promise<MsgCreateValidatorResponse>;
  /** EditValidator defines a method for editing an existing validator. */

  EditValidator(request: MsgEditValidator): Promise<MsgEditValidatorResponse>;
  /**
   * Delegate defines a method for performing a delegation of coins
   * from a delegator to a validator.
   */

  Delegate(request: MsgDelegate): Promise<MsgDelegateResponse>;
  /**
   * BeginRedelegate defines a method for performing a redelegation
   * of coins from a delegator and source validator to a destination validator.
   */

  BeginRedelegate(request: MsgBeginRedelegate): Promise<MsgBeginRedelegateResponse>;
  /**
   * Undelegate defines a method for performing an undelegation from a
   * delegate and a validator.
   */

  Undelegate(request: MsgUndelegate): Promise<MsgUndelegateResponse>;
  /**
   * CancelUnbondingDelegation defines a method for performing canceling the unbonding delegation
   * and delegate back to previous validator.
   * 
   * Since: cosmos-sdk 0.46
   */

  CancelUnbondingDelegation(request: MsgCancelUnbondingDelegation): Promise<MsgCancelUnbondingDelegationResponse>;
  /**
   * UpdateParams defines an operation for updating the x/staking module
   * parameters.
   * Since: cosmos-sdk 0.47
   */

  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateValidator = this.CreateValidator.bind(this);
    this.EditValidator = this.EditValidator.bind(this);
    this.Delegate = this.Delegate.bind(this);
    this.BeginRedelegate = this.BeginRedelegate.bind(this);
    this.Undelegate = this.Undelegate.bind(this);
    this.CancelUnbondingDelegation = this.CancelUnbondingDelegation.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }

  CreateValidator(request: MsgCreateValidator): Promise<MsgCreateValidatorResponse> {
    const data = MsgCreateValidator.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "CreateValidator", data);
    return promise.then(data => MsgCreateValidatorResponse.decode(new _m0.Reader(data)));
  }

  EditValidator(request: MsgEditValidator): Promise<MsgEditValidatorResponse> {
    const data = MsgEditValidator.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "EditValidator", data);
    return promise.then(data => MsgEditValidatorResponse.decode(new _m0.Reader(data)));
  }

  Delegate(request: MsgDelegate): Promise<MsgDelegateResponse> {
    const data = MsgDelegate.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "Delegate", data);
    return promise.then(data => MsgDelegateResponse.decode(new _m0.Reader(data)));
  }

  BeginRedelegate(request: MsgBeginRedelegate): Promise<MsgBeginRedelegateResponse> {
    const data = MsgBeginRedelegate.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "BeginRedelegate", data);
    return promise.then(data => MsgBeginRedelegateResponse.decode(new _m0.Reader(data)));
  }

  Undelegate(request: MsgUndelegate): Promise<MsgUndelegateResponse> {
    const data = MsgUndelegate.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "Undelegate", data);
    return promise.then(data => MsgUndelegateResponse.decode(new _m0.Reader(data)));
  }

  CancelUnbondingDelegation(request: MsgCancelUnbondingDelegation): Promise<MsgCancelUnbondingDelegationResponse> {
    const data = MsgCancelUnbondingDelegation.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "CancelUnbondingDelegation", data);
    return promise.then(data => MsgCancelUnbondingDelegationResponse.decode(new _m0.Reader(data)));
  }

  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
  }

}