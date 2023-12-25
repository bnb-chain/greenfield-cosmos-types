//@ts-nocheck
/* eslint-disable */
import { Description, DescriptionSDKType, CommissionRates, CommissionRatesSDKType, Params, ParamsSDKType } from "./staking";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Long, isSet, DeepPartial, Exact, fromJsonTimestamp, fromTimestamp, Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { encodePubkey, decodePubkey } from "@cosmjs/proto-signing";
import { Decimal } from "@cosmjs/math";
export const protobufPackage = "cosmos.staking.v1beta1";
/** MsgCreateValidator defines a SDK message for creating a new validator. */
export interface MsgCreateValidator {
  description: Description;
  commission: CommissionRates;
  minSelfDelegation: string;
  delegatorAddress: string;
  validatorAddress: string;
  pubkey?: (Any) | undefined;
  value: Coin;
  from: string;
  relayerAddress: string;
  challengerAddress: string;
  blsKey: string;
  blsProof: string;
}
export interface MsgCreateValidatorProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator";
  value: Uint8Array;
}
/** MsgCreateValidator defines a SDK message for creating a new validator. */
export interface MsgCreateValidatorSDKType {
  description: DescriptionSDKType;
  commission: CommissionRatesSDKType;
  min_self_delegation: string;
  delegator_address: string;
  validator_address: string;
  pubkey?: AnySDKType | undefined;
  value: CoinSDKType;
  from: string;
  relayer_address: string;
  challenger_address: string;
  bls_key: string;
  bls_proof: string;
}
/** MsgCreateValidatorResponse defines the Msg/CreateValidator response type. */
export interface MsgCreateValidatorResponse {}
export interface MsgCreateValidatorResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidatorResponse";
  value: Uint8Array;
}
/** MsgCreateValidatorResponse defines the Msg/CreateValidator response type. */
export interface MsgCreateValidatorResponseSDKType {}
/** MsgEditValidator defines a SDK message for editing an existing validator. */
export interface MsgEditValidator {
  description: Description;
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
export interface MsgEditValidatorProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator";
  value: Uint8Array;
}
/** MsgEditValidator defines a SDK message for editing an existing validator. */
export interface MsgEditValidatorSDKType {
  description: DescriptionSDKType;
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
export interface MsgEditValidatorResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.MsgEditValidatorResponse";
  value: Uint8Array;
}
/** MsgEditValidatorResponse defines the Msg/EditValidator response type. */
export interface MsgEditValidatorResponseSDKType {}
/**
 * MsgDelegate defines a SDK message for performing a delegation of coins
 * from a delegator to a validator.
 */
export interface MsgDelegate {
  delegatorAddress: string;
  validatorAddress: string;
  amount: Coin;
}
export interface MsgDelegateProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.MsgDelegate";
  value: Uint8Array;
}
/**
 * MsgDelegate defines a SDK message for performing a delegation of coins
 * from a delegator to a validator.
 */
export interface MsgDelegateSDKType {
  delegator_address: string;
  validator_address: string;
  amount: CoinSDKType;
}
/** MsgDelegateResponse defines the Msg/Delegate response type. */
export interface MsgDelegateResponse {}
export interface MsgDelegateResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.MsgDelegateResponse";
  value: Uint8Array;
}
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
  amount: Coin;
}
export interface MsgBeginRedelegateProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate";
  value: Uint8Array;
}
/**
 * MsgBeginRedelegate defines a SDK message for performing a redelegation
 * of coins from a delegator and source validator to a destination validator.
 */
export interface MsgBeginRedelegateSDKType {
  delegator_address: string;
  validator_src_address: string;
  validator_dst_address: string;
  amount: CoinSDKType;
}
/** MsgBeginRedelegateResponse defines the Msg/BeginRedelegate response type. */
export interface MsgBeginRedelegateResponse {
  completionTime: Timestamp;
}
export interface MsgBeginRedelegateResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegateResponse";
  value: Uint8Array;
}
/** MsgBeginRedelegateResponse defines the Msg/BeginRedelegate response type. */
export interface MsgBeginRedelegateResponseSDKType {
  completion_time: TimestampSDKType;
}
/**
 * MsgUndelegate defines a SDK message for performing an undelegation from a
 * delegate and a validator.
 */
export interface MsgUndelegate {
  delegatorAddress: string;
  validatorAddress: string;
  amount: Coin;
}
export interface MsgUndelegateProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate";
  value: Uint8Array;
}
/**
 * MsgUndelegate defines a SDK message for performing an undelegation from a
 * delegate and a validator.
 */
export interface MsgUndelegateSDKType {
  delegator_address: string;
  validator_address: string;
  amount: CoinSDKType;
}
/** MsgUndelegateResponse defines the Msg/Undelegate response type. */
export interface MsgUndelegateResponse {
  completionTime: Timestamp;
}
export interface MsgUndelegateResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.MsgUndelegateResponse";
  value: Uint8Array;
}
/** MsgUndelegateResponse defines the Msg/Undelegate response type. */
export interface MsgUndelegateResponseSDKType {
  completion_time: TimestampSDKType;
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
  amount: Coin;
  /** creation_height is the height which the unbonding took place. */
  creationHeight: Long;
}
export interface MsgCancelUnbondingDelegationProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation";
  value: Uint8Array;
}
/**
 * MsgCancelUnbondingDelegation defines the SDK message for performing a cancel unbonding delegation for delegator
 * 
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUnbondingDelegationSDKType {
  delegator_address: string;
  validator_address: string;
  amount: CoinSDKType;
  creation_height: Long;
}
/**
 * MsgCancelUnbondingDelegationResponse
 * 
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUnbondingDelegationResponse {}
export interface MsgCancelUnbondingDelegationResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegationResponse";
  value: Uint8Array;
}
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
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgCreateValidator(): MsgCreateValidator {
  return {
    description: Description.fromPartial({}),
    commission: CommissionRates.fromPartial({}),
    minSelfDelegation: "",
    delegatorAddress: "",
    validatorAddress: "",
    pubkey: undefined,
    value: Coin.fromPartial({}),
    from: "",
    relayerAddress: "",
    challengerAddress: "",
    blsKey: "",
    blsProof: ""
  };
}
export const MsgCreateValidator = {
  typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
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
      Any.encode((message.pubkey as Any), writer.uint32(50).fork()).ldelim();
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
          message.pubkey = (Cosmos_cryptoPubKey_InterfaceDecoder(reader) as Any);
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
  },
  fromAmino(object: MsgCreateValidatorAmino): MsgCreateValidator {
    const message = createBaseMsgCreateValidator();
    if (object.description !== undefined && object.description !== null) {
      message.description = Description.fromAmino(object.description);
    }
    if (object.commission !== undefined && object.commission !== null) {
      message.commission = CommissionRates.fromAmino(object.commission);
    }
    if (object.min_self_delegation !== undefined && object.min_self_delegation !== null) {
      message.minSelfDelegation = object.min_self_delegation;
    }
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.pubkey !== undefined && object.pubkey !== null) {
      message.pubkey = encodePubkey(object.pubkey);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Coin.fromAmino(object.value);
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.relayer_address !== undefined && object.relayer_address !== null) {
      message.relayerAddress = object.relayer_address;
    }
    if (object.challenger_address !== undefined && object.challenger_address !== null) {
      message.challengerAddress = object.challenger_address;
    }
    if (object.bls_key !== undefined && object.bls_key !== null) {
      message.blsKey = object.bls_key;
    }
    if (object.bls_proof !== undefined && object.bls_proof !== null) {
      message.blsProof = object.bls_proof;
    }
    return message;
  },
  toAmino(message: MsgCreateValidator): MsgCreateValidatorAmino {
    const obj: any = {};
    obj.description = message.description ? Description.toAmino(message.description) : Description.fromPartial({});
    obj.commission = message.commission ? CommissionRates.toAmino(message.commission) : CommissionRates.fromPartial({});
    obj.min_self_delegation = message.minSelfDelegation;
    obj.delegator_address = message.delegatorAddress;
    obj.validator_address = message.validatorAddress;
    obj.pubkey = message.pubkey ? decodePubkey(message.pubkey) : undefined;
    obj.value = message.value ? Coin.toAmino(message.value) : Coin.fromPartial({});
    obj.from = message.from;
    obj.relayer_address = message.relayerAddress;
    obj.challenger_address = message.challengerAddress;
    obj.bls_key = message.blsKey;
    obj.bls_proof = message.blsProof;
    return obj;
  },
  fromAminoMsg(object: MsgCreateValidatorAminoMsg): MsgCreateValidator {
    return MsgCreateValidator.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateValidator): MsgCreateValidatorAminoMsg {
    return {
      type: "cosmos-sdk/MsgCreateValidator",
      value: MsgCreateValidator.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateValidatorProtoMsg): MsgCreateValidator {
    return MsgCreateValidator.decode(message.value);
  },
  toProto(message: MsgCreateValidator): Uint8Array {
    return MsgCreateValidator.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateValidator): MsgCreateValidatorProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
      value: MsgCreateValidator.encode(message).finish()
    };
  }
};
function createBaseMsgCreateValidatorResponse(): MsgCreateValidatorResponse {
  return {};
}
export const MsgCreateValidatorResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidatorResponse",
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
  },
  fromAmino(_: MsgCreateValidatorResponseAmino): MsgCreateValidatorResponse {
    const message = createBaseMsgCreateValidatorResponse();
    return message;
  },
  toAmino(_: MsgCreateValidatorResponse): MsgCreateValidatorResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateValidatorResponseAminoMsg): MsgCreateValidatorResponse {
    return MsgCreateValidatorResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateValidatorResponse): MsgCreateValidatorResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgCreateValidatorResponse",
      value: MsgCreateValidatorResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateValidatorResponseProtoMsg): MsgCreateValidatorResponse {
    return MsgCreateValidatorResponse.decode(message.value);
  },
  toProto(message: MsgCreateValidatorResponse): Uint8Array {
    return MsgCreateValidatorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateValidatorResponse): MsgCreateValidatorResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidatorResponse",
      value: MsgCreateValidatorResponse.encode(message).finish()
    };
  }
};
function createBaseMsgEditValidator(): MsgEditValidator {
  return {
    description: Description.fromPartial({}),
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
  typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
  encode(message: MsgEditValidator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.description !== undefined) {
      Description.encode(message.description, writer.uint32(10).fork()).ldelim();
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.commissionRate !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.commissionRate, 18).atomics);
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
          message.commissionRate = Decimal.fromAtomics(reader.string(), 18).toString();
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
  },
  fromAmino(object: MsgEditValidatorAmino): MsgEditValidator {
    const message = createBaseMsgEditValidator();
    if (object.description !== undefined && object.description !== null) {
      message.description = Description.fromAmino(object.description);
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.commission_rate !== undefined && object.commission_rate !== null) {
      message.commissionRate = object.commission_rate;
    }
    if (object.min_self_delegation !== undefined && object.min_self_delegation !== null) {
      message.minSelfDelegation = object.min_self_delegation;
    }
    if (object.relayer_address !== undefined && object.relayer_address !== null) {
      message.relayerAddress = object.relayer_address;
    }
    if (object.challenger_address !== undefined && object.challenger_address !== null) {
      message.challengerAddress = object.challenger_address;
    }
    if (object.bls_key !== undefined && object.bls_key !== null) {
      message.blsKey = object.bls_key;
    }
    if (object.bls_proof !== undefined && object.bls_proof !== null) {
      message.blsProof = object.bls_proof;
    }
    return message;
  },
  toAmino(message: MsgEditValidator): MsgEditValidatorAmino {
    const obj: any = {};
    obj.description = message.description ? Description.toAmino(message.description) : Description.fromPartial({});
    obj.validator_address = message.validatorAddress;
    obj.commission_rate = message.commissionRate;
    obj.min_self_delegation = message.minSelfDelegation;
    obj.relayer_address = message.relayerAddress;
    obj.challenger_address = message.challengerAddress;
    obj.bls_key = message.blsKey;
    obj.bls_proof = message.blsProof;
    return obj;
  },
  fromAminoMsg(object: MsgEditValidatorAminoMsg): MsgEditValidator {
    return MsgEditValidator.fromAmino(object.value);
  },
  toAminoMsg(message: MsgEditValidator): MsgEditValidatorAminoMsg {
    return {
      type: "cosmos-sdk/MsgEditValidator",
      value: MsgEditValidator.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgEditValidatorProtoMsg): MsgEditValidator {
    return MsgEditValidator.decode(message.value);
  },
  toProto(message: MsgEditValidator): Uint8Array {
    return MsgEditValidator.encode(message).finish();
  },
  toProtoMsg(message: MsgEditValidator): MsgEditValidatorProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
      value: MsgEditValidator.encode(message).finish()
    };
  }
};
function createBaseMsgEditValidatorResponse(): MsgEditValidatorResponse {
  return {};
}
export const MsgEditValidatorResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgEditValidatorResponse",
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
  },
  fromAmino(_: MsgEditValidatorResponseAmino): MsgEditValidatorResponse {
    const message = createBaseMsgEditValidatorResponse();
    return message;
  },
  toAmino(_: MsgEditValidatorResponse): MsgEditValidatorResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgEditValidatorResponseAminoMsg): MsgEditValidatorResponse {
    return MsgEditValidatorResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgEditValidatorResponse): MsgEditValidatorResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgEditValidatorResponse",
      value: MsgEditValidatorResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgEditValidatorResponseProtoMsg): MsgEditValidatorResponse {
    return MsgEditValidatorResponse.decode(message.value);
  },
  toProto(message: MsgEditValidatorResponse): Uint8Array {
    return MsgEditValidatorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgEditValidatorResponse): MsgEditValidatorResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgEditValidatorResponse",
      value: MsgEditValidatorResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDelegate(): MsgDelegate {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgDelegate = {
  typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
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
  },
  fromAmino(object: MsgDelegateAmino): MsgDelegate {
    const message = createBaseMsgDelegate();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgDelegate): MsgDelegateAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    obj.validator_address = message.validatorAddress;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : Coin.fromPartial({});
    return obj;
  },
  fromAminoMsg(object: MsgDelegateAminoMsg): MsgDelegate {
    return MsgDelegate.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDelegate): MsgDelegateAminoMsg {
    return {
      type: "cosmos-sdk/MsgDelegate",
      value: MsgDelegate.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDelegateProtoMsg): MsgDelegate {
    return MsgDelegate.decode(message.value);
  },
  toProto(message: MsgDelegate): Uint8Array {
    return MsgDelegate.encode(message).finish();
  },
  toProtoMsg(message: MsgDelegate): MsgDelegateProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
      value: MsgDelegate.encode(message).finish()
    };
  }
};
function createBaseMsgDelegateResponse(): MsgDelegateResponse {
  return {};
}
export const MsgDelegateResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgDelegateResponse",
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
  },
  fromAmino(_: MsgDelegateResponseAmino): MsgDelegateResponse {
    const message = createBaseMsgDelegateResponse();
    return message;
  },
  toAmino(_: MsgDelegateResponse): MsgDelegateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDelegateResponseAminoMsg): MsgDelegateResponse {
    return MsgDelegateResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDelegateResponse): MsgDelegateResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgDelegateResponse",
      value: MsgDelegateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDelegateResponseProtoMsg): MsgDelegateResponse {
    return MsgDelegateResponse.decode(message.value);
  },
  toProto(message: MsgDelegateResponse): Uint8Array {
    return MsgDelegateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDelegateResponse): MsgDelegateResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgDelegateResponse",
      value: MsgDelegateResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBeginRedelegate(): MsgBeginRedelegate {
  return {
    delegatorAddress: "",
    validatorSrcAddress: "",
    validatorDstAddress: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgBeginRedelegate = {
  typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
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
  },
  fromAmino(object: MsgBeginRedelegateAmino): MsgBeginRedelegate {
    const message = createBaseMsgBeginRedelegate();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.validator_src_address !== undefined && object.validator_src_address !== null) {
      message.validatorSrcAddress = object.validator_src_address;
    }
    if (object.validator_dst_address !== undefined && object.validator_dst_address !== null) {
      message.validatorDstAddress = object.validator_dst_address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgBeginRedelegate): MsgBeginRedelegateAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    obj.validator_src_address = message.validatorSrcAddress;
    obj.validator_dst_address = message.validatorDstAddress;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : Coin.fromPartial({});
    return obj;
  },
  fromAminoMsg(object: MsgBeginRedelegateAminoMsg): MsgBeginRedelegate {
    return MsgBeginRedelegate.fromAmino(object.value);
  },
  toAminoMsg(message: MsgBeginRedelegate): MsgBeginRedelegateAminoMsg {
    return {
      type: "cosmos-sdk/MsgBeginRedelegate",
      value: MsgBeginRedelegate.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgBeginRedelegateProtoMsg): MsgBeginRedelegate {
    return MsgBeginRedelegate.decode(message.value);
  },
  toProto(message: MsgBeginRedelegate): Uint8Array {
    return MsgBeginRedelegate.encode(message).finish();
  },
  toProtoMsg(message: MsgBeginRedelegate): MsgBeginRedelegateProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
      value: MsgBeginRedelegate.encode(message).finish()
    };
  }
};
function createBaseMsgBeginRedelegateResponse(): MsgBeginRedelegateResponse {
  return {
    completionTime: Timestamp.fromPartial({})
  };
}
export const MsgBeginRedelegateResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegateResponse",
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
  },
  fromAmino(object: MsgBeginRedelegateResponseAmino): MsgBeginRedelegateResponse {
    const message = createBaseMsgBeginRedelegateResponse();
    if (object.completion_time !== undefined && object.completion_time !== null) {
      message.completionTime = Timestamp.fromAmino(object.completion_time);
    }
    return message;
  },
  toAmino(message: MsgBeginRedelegateResponse): MsgBeginRedelegateResponseAmino {
    const obj: any = {};
    obj.completion_time = message.completionTime ? Timestamp.toAmino(message.completionTime) : Timestamp.fromPartial({});
    return obj;
  },
  fromAminoMsg(object: MsgBeginRedelegateResponseAminoMsg): MsgBeginRedelegateResponse {
    return MsgBeginRedelegateResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgBeginRedelegateResponse): MsgBeginRedelegateResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgBeginRedelegateResponse",
      value: MsgBeginRedelegateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgBeginRedelegateResponseProtoMsg): MsgBeginRedelegateResponse {
    return MsgBeginRedelegateResponse.decode(message.value);
  },
  toProto(message: MsgBeginRedelegateResponse): Uint8Array {
    return MsgBeginRedelegateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBeginRedelegateResponse): MsgBeginRedelegateResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegateResponse",
      value: MsgBeginRedelegateResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUndelegate(): MsgUndelegate {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgUndelegate = {
  typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
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
  },
  fromAmino(object: MsgUndelegateAmino): MsgUndelegate {
    const message = createBaseMsgUndelegate();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgUndelegate): MsgUndelegateAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    obj.validator_address = message.validatorAddress;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : Coin.fromPartial({});
    return obj;
  },
  fromAminoMsg(object: MsgUndelegateAminoMsg): MsgUndelegate {
    return MsgUndelegate.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUndelegate): MsgUndelegateAminoMsg {
    return {
      type: "cosmos-sdk/MsgUndelegate",
      value: MsgUndelegate.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUndelegateProtoMsg): MsgUndelegate {
    return MsgUndelegate.decode(message.value);
  },
  toProto(message: MsgUndelegate): Uint8Array {
    return MsgUndelegate.encode(message).finish();
  },
  toProtoMsg(message: MsgUndelegate): MsgUndelegateProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
      value: MsgUndelegate.encode(message).finish()
    };
  }
};
function createBaseMsgUndelegateResponse(): MsgUndelegateResponse {
  return {
    completionTime: Timestamp.fromPartial({})
  };
}
export const MsgUndelegateResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgUndelegateResponse",
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
  },
  fromAmino(object: MsgUndelegateResponseAmino): MsgUndelegateResponse {
    const message = createBaseMsgUndelegateResponse();
    if (object.completion_time !== undefined && object.completion_time !== null) {
      message.completionTime = Timestamp.fromAmino(object.completion_time);
    }
    return message;
  },
  toAmino(message: MsgUndelegateResponse): MsgUndelegateResponseAmino {
    const obj: any = {};
    obj.completion_time = message.completionTime ? Timestamp.toAmino(message.completionTime) : Timestamp.fromPartial({});
    return obj;
  },
  fromAminoMsg(object: MsgUndelegateResponseAminoMsg): MsgUndelegateResponse {
    return MsgUndelegateResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUndelegateResponse): MsgUndelegateResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUndelegateResponse",
      value: MsgUndelegateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUndelegateResponseProtoMsg): MsgUndelegateResponse {
    return MsgUndelegateResponse.decode(message.value);
  },
  toProto(message: MsgUndelegateResponse): Uint8Array {
    return MsgUndelegateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUndelegateResponse): MsgUndelegateResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgUndelegateResponse",
      value: MsgUndelegateResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCancelUnbondingDelegation(): MsgCancelUnbondingDelegation {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    amount: Coin.fromPartial({}),
    creationHeight: Long.ZERO
  };
}
export const MsgCancelUnbondingDelegation = {
  typeUrl: "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation",
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
  },
  fromAmino(object: MsgCancelUnbondingDelegationAmino): MsgCancelUnbondingDelegation {
    const message = createBaseMsgCancelUnbondingDelegation();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.creation_height !== undefined && object.creation_height !== null) {
      message.creationHeight = Long.fromString(object.creation_height);
    }
    return message;
  },
  toAmino(message: MsgCancelUnbondingDelegation): MsgCancelUnbondingDelegationAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    obj.validator_address = message.validatorAddress;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : Coin.fromPartial({});
    obj.creation_height = message.creationHeight ? message.creationHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCancelUnbondingDelegationAminoMsg): MsgCancelUnbondingDelegation {
    return MsgCancelUnbondingDelegation.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCancelUnbondingDelegation): MsgCancelUnbondingDelegationAminoMsg {
    return {
      type: "cosmos-sdk/MsgCancelUnbondingDelegation",
      value: MsgCancelUnbondingDelegation.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCancelUnbondingDelegationProtoMsg): MsgCancelUnbondingDelegation {
    return MsgCancelUnbondingDelegation.decode(message.value);
  },
  toProto(message: MsgCancelUnbondingDelegation): Uint8Array {
    return MsgCancelUnbondingDelegation.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelUnbondingDelegation): MsgCancelUnbondingDelegationProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation",
      value: MsgCancelUnbondingDelegation.encode(message).finish()
    };
  }
};
function createBaseMsgCancelUnbondingDelegationResponse(): MsgCancelUnbondingDelegationResponse {
  return {};
}
export const MsgCancelUnbondingDelegationResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegationResponse",
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
  },
  fromAmino(_: MsgCancelUnbondingDelegationResponseAmino): MsgCancelUnbondingDelegationResponse {
    const message = createBaseMsgCancelUnbondingDelegationResponse();
    return message;
  },
  toAmino(_: MsgCancelUnbondingDelegationResponse): MsgCancelUnbondingDelegationResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelUnbondingDelegationResponseAminoMsg): MsgCancelUnbondingDelegationResponse {
    return MsgCancelUnbondingDelegationResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCancelUnbondingDelegationResponse): MsgCancelUnbondingDelegationResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgCancelUnbondingDelegationResponse",
      value: MsgCancelUnbondingDelegationResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCancelUnbondingDelegationResponseProtoMsg): MsgCancelUnbondingDelegationResponse {
    return MsgCancelUnbondingDelegationResponse.decode(message.value);
  },
  toProto(message: MsgCancelUnbondingDelegationResponse): Uint8Array {
    return MsgCancelUnbondingDelegationResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelUnbondingDelegationResponse): MsgCancelUnbondingDelegationResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegationResponse",
      value: MsgCancelUnbondingDelegationResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/cosmos.staking.v1beta1.MsgUpdateParams",
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
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : Params.fromPartial({});
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "cosmos-sdk/x/staking/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgUpdateParamsResponse",
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
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
export const Cosmos_cryptoPubKey_InterfaceDecoder = (input: _m0.Reader | Uint8Array): Any => {
  const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
  const data = Any.decode(reader, reader.uint32(), true);
  switch (data.typeUrl) {
    default:
      return data;
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