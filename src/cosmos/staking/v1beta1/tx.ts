/* eslint-disable */
import { Description, CommissionRates } from "./staking";
import { Any } from "../../../google/protobuf/any";
import { Coin } from "../../base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact, fromJsonTimestamp, fromTimestamp, Long, Rpc } from "../../../helpers";
export const protobufPackage = "cosmos.staking.v1beta1";
/** MsgCreateValidator defines a SDK message for creating a new validator. */

export interface MsgCreateValidator {
  description?: Description;
  commission?: CommissionRates;
  min_self_delegation: string;
  delegator_address: string;
  validator_address: string;
  pubkey?: Any;
  value?: Coin;
  from: string;
  relayer_address: string;
  relayer_bls_key: string;
}
/** MsgCreateValidatorResponse defines the Msg/CreateValidator response type. */

export interface MsgCreateValidatorResponse {}
/** MsgEditValidator defines a SDK message for editing an existing validator. */

export interface MsgEditValidator {
  description?: Description;
  validator_address: string;
  /**
   * We pass a reference to the new commission rate and min self delegation as
   * it's not mandatory to update. If not updated, the deserialized rate will be
   * zero with no way to distinguish if an update was intended.
   * REF: #2373
   */

  commission_rate: string;
  min_self_delegation: string;
  relayer_address: string;
  /** The BLS pubkey for the authorized relayer */

  relayer_bls_key: string;
}
/** MsgEditValidatorResponse defines the Msg/EditValidator response type. */

export interface MsgEditValidatorResponse {}
/**
 * MsgDelegate defines a SDK message for performing a delegation of coins
 * from a delegator to a validator.
 */

export interface MsgDelegate {
  delegator_address: string;
  validator_address: string;
  amount?: Coin;
}
/** MsgDelegateResponse defines the Msg/Delegate response type. */

export interface MsgDelegateResponse {}
/**
 * MsgBeginRedelegate defines a SDK message for performing a redelegation
 * of coins from a delegator and source validator to a destination validator.
 */

export interface MsgBeginRedelegate {
  delegator_address: string;
  validator_src_address: string;
  validator_dst_address: string;
  amount?: Coin;
}
/** MsgBeginRedelegateResponse defines the Msg/BeginRedelegate response type. */

export interface MsgBeginRedelegateResponse {
  completion_time?: Timestamp;
}
/**
 * MsgUndelegate defines a SDK message for performing an undelegation from a
 * delegate and a validator.
 */

export interface MsgUndelegate {
  delegator_address: string;
  validator_address: string;
  amount?: Coin;
}
/** MsgUndelegateResponse defines the Msg/Undelegate response type. */

export interface MsgUndelegateResponse {
  completion_time?: Timestamp;
}
/**
 * MsgCancelUnbondingDelegation defines the SDK message for performing a cancel unbonding delegation for delegator
 * 
 * Since: cosmos-sdk 0.46
 */

export interface MsgCancelUnbondingDelegation {
  delegator_address: string;
  validator_address: string;
  /** amount is always less than or equal to unbonding delegation entry balance */

  amount?: Coin;
  /** creation_height is the height which the unbonding took place. */

  creation_height: Long;
}
/**
 * MsgCancelUnbondingDelegationResponse
 * 
 * Since: cosmos-sdk 0.46
 */

export interface MsgCancelUnbondingDelegationResponse {}

function createBaseMsgCreateValidator(): MsgCreateValidator {
  return {
    description: undefined,
    commission: undefined,
    min_self_delegation: "",
    delegator_address: "",
    validator_address: "",
    pubkey: undefined,
    value: undefined,
    from: "",
    relayer_address: "",
    relayer_bls_key: ""
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

    if (message.min_self_delegation !== "") {
      writer.uint32(26).string(message.min_self_delegation);
    }

    if (message.delegator_address !== "") {
      writer.uint32(34).string(message.delegator_address);
    }

    if (message.validator_address !== "") {
      writer.uint32(42).string(message.validator_address);
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

    if (message.relayer_address !== "") {
      writer.uint32(74).string(message.relayer_address);
    }

    if (message.relayer_bls_key !== "") {
      writer.uint32(82).string(message.relayer_bls_key);
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
          message.min_self_delegation = reader.string();
          break;

        case 4:
          message.delegator_address = reader.string();
          break;

        case 5:
          message.validator_address = reader.string();
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
          message.relayer_address = reader.string();
          break;

        case 10:
          message.relayer_bls_key = reader.string();
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
      min_self_delegation: isSet(object.min_self_delegation) ? String(object.min_self_delegation) : "",
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      pubkey: isSet(object.pubkey) ? Any.fromJSON(object.pubkey) : undefined,
      value: isSet(object.value) ? Coin.fromJSON(object.value) : undefined,
      from: isSet(object.from) ? String(object.from) : "",
      relayer_address: isSet(object.relayer_address) ? String(object.relayer_address) : "",
      relayer_bls_key: isSet(object.relayer_bls_key) ? String(object.relayer_bls_key) : ""
    };
  },

  toJSON(message: MsgCreateValidator): unknown {
    const obj: any = {};
    message.description !== undefined && (obj.description = message.description ? Description.toJSON(message.description) : undefined);
    message.commission !== undefined && (obj.commission = message.commission ? CommissionRates.toJSON(message.commission) : undefined);
    message.min_self_delegation !== undefined && (obj.min_self_delegation = message.min_self_delegation);
    message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
    message.validator_address !== undefined && (obj.validator_address = message.validator_address);
    message.pubkey !== undefined && (obj.pubkey = message.pubkey ? Any.toJSON(message.pubkey) : undefined);
    message.value !== undefined && (obj.value = message.value ? Coin.toJSON(message.value) : undefined);
    message.from !== undefined && (obj.from = message.from);
    message.relayer_address !== undefined && (obj.relayer_address = message.relayer_address);
    message.relayer_bls_key !== undefined && (obj.relayer_bls_key = message.relayer_bls_key);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateValidator>, I>>(object: I): MsgCreateValidator {
    const message = createBaseMsgCreateValidator();
    message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
    message.commission = object.commission !== undefined && object.commission !== null ? CommissionRates.fromPartial(object.commission) : undefined;
    message.min_self_delegation = object.min_self_delegation ?? "";
    message.delegator_address = object.delegator_address ?? "";
    message.validator_address = object.validator_address ?? "";
    message.pubkey = object.pubkey !== undefined && object.pubkey !== null ? Any.fromPartial(object.pubkey) : undefined;
    message.value = object.value !== undefined && object.value !== null ? Coin.fromPartial(object.value) : undefined;
    message.from = object.from ?? "";
    message.relayer_address = object.relayer_address ?? "";
    message.relayer_bls_key = object.relayer_bls_key ?? "";
    return message;
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
  }

};

function createBaseMsgEditValidator(): MsgEditValidator {
  return {
    description: undefined,
    validator_address: "",
    commission_rate: "",
    min_self_delegation: "",
    relayer_address: "",
    relayer_bls_key: ""
  };
}

export const MsgEditValidator = {
  encode(message: MsgEditValidator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.description !== undefined) {
      Description.encode(message.description, writer.uint32(10).fork()).ldelim();
    }

    if (message.validator_address !== "") {
      writer.uint32(18).string(message.validator_address);
    }

    if (message.commission_rate !== "") {
      writer.uint32(26).string(message.commission_rate);
    }

    if (message.min_self_delegation !== "") {
      writer.uint32(34).string(message.min_self_delegation);
    }

    if (message.relayer_address !== "") {
      writer.uint32(42).string(message.relayer_address);
    }

    if (message.relayer_bls_key !== "") {
      writer.uint32(50).string(message.relayer_bls_key);
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
          message.validator_address = reader.string();
          break;

        case 3:
          message.commission_rate = reader.string();
          break;

        case 4:
          message.min_self_delegation = reader.string();
          break;

        case 5:
          message.relayer_address = reader.string();
          break;

        case 6:
          message.relayer_bls_key = reader.string();
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
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      commission_rate: isSet(object.commission_rate) ? String(object.commission_rate) : "",
      min_self_delegation: isSet(object.min_self_delegation) ? String(object.min_self_delegation) : "",
      relayer_address: isSet(object.relayer_address) ? String(object.relayer_address) : "",
      relayer_bls_key: isSet(object.relayer_bls_key) ? String(object.relayer_bls_key) : ""
    };
  },

  toJSON(message: MsgEditValidator): unknown {
    const obj: any = {};
    message.description !== undefined && (obj.description = message.description ? Description.toJSON(message.description) : undefined);
    message.validator_address !== undefined && (obj.validator_address = message.validator_address);
    message.commission_rate !== undefined && (obj.commission_rate = message.commission_rate);
    message.min_self_delegation !== undefined && (obj.min_self_delegation = message.min_self_delegation);
    message.relayer_address !== undefined && (obj.relayer_address = message.relayer_address);
    message.relayer_bls_key !== undefined && (obj.relayer_bls_key = message.relayer_bls_key);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEditValidator>, I>>(object: I): MsgEditValidator {
    const message = createBaseMsgEditValidator();
    message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
    message.validator_address = object.validator_address ?? "";
    message.commission_rate = object.commission_rate ?? "";
    message.min_self_delegation = object.min_self_delegation ?? "";
    message.relayer_address = object.relayer_address ?? "";
    message.relayer_bls_key = object.relayer_bls_key ?? "";
    return message;
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
  }

};

function createBaseMsgDelegate(): MsgDelegate {
  return {
    delegator_address: "",
    validator_address: "",
    amount: undefined
  };
}

export const MsgDelegate = {
  encode(message: MsgDelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }

    if (message.validator_address !== "") {
      writer.uint32(18).string(message.validator_address);
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
          message.delegator_address = reader.string();
          break;

        case 2:
          message.validator_address = reader.string();
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
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },

  toJSON(message: MsgDelegate): unknown {
    const obj: any = {};
    message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
    message.validator_address !== undefined && (obj.validator_address = message.validator_address);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDelegate>, I>>(object: I): MsgDelegate {
    const message = createBaseMsgDelegate();
    message.delegator_address = object.delegator_address ?? "";
    message.validator_address = object.validator_address ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
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
  }

};

function createBaseMsgBeginRedelegate(): MsgBeginRedelegate {
  return {
    delegator_address: "",
    validator_src_address: "",
    validator_dst_address: "",
    amount: undefined
  };
}

export const MsgBeginRedelegate = {
  encode(message: MsgBeginRedelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }

    if (message.validator_src_address !== "") {
      writer.uint32(18).string(message.validator_src_address);
    }

    if (message.validator_dst_address !== "") {
      writer.uint32(26).string(message.validator_dst_address);
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
          message.delegator_address = reader.string();
          break;

        case 2:
          message.validator_src_address = reader.string();
          break;

        case 3:
          message.validator_dst_address = reader.string();
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
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      validator_src_address: isSet(object.validator_src_address) ? String(object.validator_src_address) : "",
      validator_dst_address: isSet(object.validator_dst_address) ? String(object.validator_dst_address) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },

  toJSON(message: MsgBeginRedelegate): unknown {
    const obj: any = {};
    message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
    message.validator_src_address !== undefined && (obj.validator_src_address = message.validator_src_address);
    message.validator_dst_address !== undefined && (obj.validator_dst_address = message.validator_dst_address);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBeginRedelegate>, I>>(object: I): MsgBeginRedelegate {
    const message = createBaseMsgBeginRedelegate();
    message.delegator_address = object.delegator_address ?? "";
    message.validator_src_address = object.validator_src_address ?? "";
    message.validator_dst_address = object.validator_dst_address ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }

};

function createBaseMsgBeginRedelegateResponse(): MsgBeginRedelegateResponse {
  return {
    completion_time: undefined
  };
}

export const MsgBeginRedelegateResponse = {
  encode(message: MsgBeginRedelegateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.completion_time !== undefined) {
      Timestamp.encode(message.completion_time, writer.uint32(10).fork()).ldelim();
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
          message.completion_time = Timestamp.decode(reader, reader.uint32());
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
      completion_time: isSet(object.completion_time) ? fromJsonTimestamp(object.completion_time) : undefined
    };
  },

  toJSON(message: MsgBeginRedelegateResponse): unknown {
    const obj: any = {};
    message.completion_time !== undefined && (obj.completion_time = fromTimestamp(message.completion_time).toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBeginRedelegateResponse>, I>>(object: I): MsgBeginRedelegateResponse {
    const message = createBaseMsgBeginRedelegateResponse();
    message.completion_time = object.completion_time !== undefined && object.completion_time !== null ? Timestamp.fromPartial(object.completion_time) : undefined;
    return message;
  }

};

function createBaseMsgUndelegate(): MsgUndelegate {
  return {
    delegator_address: "",
    validator_address: "",
    amount: undefined
  };
}

export const MsgUndelegate = {
  encode(message: MsgUndelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }

    if (message.validator_address !== "") {
      writer.uint32(18).string(message.validator_address);
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
          message.delegator_address = reader.string();
          break;

        case 2:
          message.validator_address = reader.string();
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
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },

  toJSON(message: MsgUndelegate): unknown {
    const obj: any = {};
    message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
    message.validator_address !== undefined && (obj.validator_address = message.validator_address);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUndelegate>, I>>(object: I): MsgUndelegate {
    const message = createBaseMsgUndelegate();
    message.delegator_address = object.delegator_address ?? "";
    message.validator_address = object.validator_address ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }

};

function createBaseMsgUndelegateResponse(): MsgUndelegateResponse {
  return {
    completion_time: undefined
  };
}

export const MsgUndelegateResponse = {
  encode(message: MsgUndelegateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.completion_time !== undefined) {
      Timestamp.encode(message.completion_time, writer.uint32(10).fork()).ldelim();
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
          message.completion_time = Timestamp.decode(reader, reader.uint32());
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
      completion_time: isSet(object.completion_time) ? fromJsonTimestamp(object.completion_time) : undefined
    };
  },

  toJSON(message: MsgUndelegateResponse): unknown {
    const obj: any = {};
    message.completion_time !== undefined && (obj.completion_time = fromTimestamp(message.completion_time).toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUndelegateResponse>, I>>(object: I): MsgUndelegateResponse {
    const message = createBaseMsgUndelegateResponse();
    message.completion_time = object.completion_time !== undefined && object.completion_time !== null ? Timestamp.fromPartial(object.completion_time) : undefined;
    return message;
  }

};

function createBaseMsgCancelUnbondingDelegation(): MsgCancelUnbondingDelegation {
  return {
    delegator_address: "",
    validator_address: "",
    amount: undefined,
    creation_height: Long.ZERO
  };
}

export const MsgCancelUnbondingDelegation = {
  encode(message: MsgCancelUnbondingDelegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }

    if (message.validator_address !== "") {
      writer.uint32(18).string(message.validator_address);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }

    if (!message.creation_height.isZero()) {
      writer.uint32(32).int64(message.creation_height);
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
          message.delegator_address = reader.string();
          break;

        case 2:
          message.validator_address = reader.string();
          break;

        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        case 4:
          message.creation_height = (reader.int64() as Long);
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
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      creation_height: isSet(object.creation_height) ? Long.fromValue(object.creation_height) : Long.ZERO
    };
  },

  toJSON(message: MsgCancelUnbondingDelegation): unknown {
    const obj: any = {};
    message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
    message.validator_address !== undefined && (obj.validator_address = message.validator_address);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.creation_height !== undefined && (obj.creation_height = (message.creation_height || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelUnbondingDelegation>, I>>(object: I): MsgCancelUnbondingDelegation {
    const message = createBaseMsgCancelUnbondingDelegation();
    message.delegator_address = object.delegator_address ?? "";
    message.validator_address = object.validator_address ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.creation_height = object.creation_height !== undefined && object.creation_height !== null ? Long.fromValue(object.creation_height) : Long.ZERO;
    return message;
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

}