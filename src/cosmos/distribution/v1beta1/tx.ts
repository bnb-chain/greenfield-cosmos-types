//@ts-nocheck
/* eslint-disable */
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Params, ParamsSDKType } from "./distribution";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact, Rpc } from "../../../helpers";
export const protobufPackage = "cosmos.distribution.v1beta1";
/**
 * MsgSetWithdrawAddress sets the withdraw address for
 * a delegator (or validator self-delegation).
 */
export interface MsgSetWithdrawAddress {
  delegatorAddress: string;
  withdrawAddress: string;
}
export interface MsgSetWithdrawAddressProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress";
  value: Uint8Array;
}
/**
 * MsgSetWithdrawAddress sets the withdraw address for
 * a delegator (or validator self-delegation).
 */
export interface MsgSetWithdrawAddressSDKType {
  delegator_address: string;
  withdraw_address: string;
}
/**
 * MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response
 * type.
 */
export interface MsgSetWithdrawAddressResponse {}
export interface MsgSetWithdrawAddressResponseProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse";
  value: Uint8Array;
}
/**
 * MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response
 * type.
 */
export interface MsgSetWithdrawAddressResponseSDKType {}
/**
 * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
 * from a single validator.
 */
export interface MsgWithdrawDelegatorReward {
  delegatorAddress: string;
  validatorAddress: string;
}
export interface MsgWithdrawDelegatorRewardProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward";
  value: Uint8Array;
}
/**
 * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
 * from a single validator.
 */
export interface MsgWithdrawDelegatorRewardSDKType {
  delegator_address: string;
  validator_address: string;
}
/**
 * MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward
 * response type.
 */
export interface MsgWithdrawDelegatorRewardResponse {
  /** Since: cosmos-sdk 0.46 */
  amount: Coin[];
}
export interface MsgWithdrawDelegatorRewardResponseProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse";
  value: Uint8Array;
}
/**
 * MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward
 * response type.
 */
export interface MsgWithdrawDelegatorRewardResponseSDKType {
  amount: CoinSDKType[];
}
/**
 * MsgWithdrawValidatorCommission withdraws the full commission to the validator
 * address.
 */
export interface MsgWithdrawValidatorCommission {
  validatorAddress: string;
}
export interface MsgWithdrawValidatorCommissionProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission";
  value: Uint8Array;
}
/**
 * MsgWithdrawValidatorCommission withdraws the full commission to the validator
 * address.
 */
export interface MsgWithdrawValidatorCommissionSDKType {
  validator_address: string;
}
/**
 * MsgWithdrawValidatorCommissionResponse defines the
 * Msg/WithdrawValidatorCommission response type.
 */
export interface MsgWithdrawValidatorCommissionResponse {
  /** Since: cosmos-sdk 0.46 */
  amount: Coin[];
}
export interface MsgWithdrawValidatorCommissionResponseProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse";
  value: Uint8Array;
}
/**
 * MsgWithdrawValidatorCommissionResponse defines the
 * Msg/WithdrawValidatorCommission response type.
 */
export interface MsgWithdrawValidatorCommissionResponseSDKType {
  amount: CoinSDKType[];
}
/**
 * MsgFundCommunityPool allows an account to directly
 * fund the community pool.
 */
export interface MsgFundCommunityPool {
  amount: Coin[];
  depositor: string;
}
export interface MsgFundCommunityPoolProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool";
  value: Uint8Array;
}
/**
 * MsgFundCommunityPool allows an account to directly
 * fund the community pool.
 */
export interface MsgFundCommunityPoolSDKType {
  amount: CoinSDKType[];
  depositor: string;
}
/** MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type. */
export interface MsgFundCommunityPoolResponse {}
export interface MsgFundCommunityPoolResponseProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse";
  value: Uint8Array;
}
/** MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type. */
export interface MsgFundCommunityPoolResponseSDKType {}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /**
   * params defines the x/distribution parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.MsgUpdateParams";
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
  typeUrl: "/cosmos.distribution.v1beta1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseSDKType {}
/**
 * MsgCommunityPoolSpend defines a message for sending tokens from the community
 * pool to another account. This message is typically executed via a governance
 * proposal with the governance module being the executing authority.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgCommunityPoolSpend {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  recipient: string;
  amount: Coin[];
}
export interface MsgCommunityPoolSpendProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend";
  value: Uint8Array;
}
/**
 * MsgCommunityPoolSpend defines a message for sending tokens from the community
 * pool to another account. This message is typically executed via a governance
 * proposal with the governance module being the executing authority.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgCommunityPoolSpendSDKType {
  authority: string;
  recipient: string;
  amount: CoinSDKType[];
}
/**
 * MsgCommunityPoolSpendResponse defines the response to executing a
 * MsgCommunityPoolSpend message.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgCommunityPoolSpendResponse {}
export interface MsgCommunityPoolSpendResponseProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.MsgCommunityPoolSpendResponse";
  value: Uint8Array;
}
/**
 * MsgCommunityPoolSpendResponse defines the response to executing a
 * MsgCommunityPoolSpend message.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgCommunityPoolSpendResponseSDKType {}
function createBaseMsgSetWithdrawAddress(): MsgSetWithdrawAddress {
  return {
    delegatorAddress: "",
    withdrawAddress: ""
  };
}
export const MsgSetWithdrawAddress = {
  typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
  encode(message: MsgSetWithdrawAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.withdrawAddress !== "") {
      writer.uint32(18).string(message.withdrawAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetWithdrawAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetWithdrawAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.withdrawAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetWithdrawAddress {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      withdrawAddress: isSet(object.withdrawAddress) ? String(object.withdrawAddress) : ""
    };
  },
  toJSON(message: MsgSetWithdrawAddress): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.withdrawAddress !== undefined && (obj.withdrawAddress = message.withdrawAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetWithdrawAddress>, I>>(object: I): MsgSetWithdrawAddress {
    const message = createBaseMsgSetWithdrawAddress();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.withdrawAddress = object.withdrawAddress ?? "";
    return message;
  },
  fromSDK(object: MsgSetWithdrawAddressSDKType): MsgSetWithdrawAddress {
    return {
      delegatorAddress: object?.delegator_address,
      withdrawAddress: object?.withdraw_address
    };
  },
  toSDK(message: MsgSetWithdrawAddress): MsgSetWithdrawAddressSDKType {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    obj.withdraw_address = message.withdrawAddress;
    return obj;
  },
  fromAmino(object: MsgSetWithdrawAddressAmino): MsgSetWithdrawAddress {
    const message = createBaseMsgSetWithdrawAddress();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.withdraw_address !== undefined && object.withdraw_address !== null) {
      message.withdrawAddress = object.withdraw_address;
    }
    return message;
  },
  toAmino(message: MsgSetWithdrawAddress): MsgSetWithdrawAddressAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    obj.withdraw_address = message.withdrawAddress;
    return obj;
  },
  fromAminoMsg(object: MsgSetWithdrawAddressAminoMsg): MsgSetWithdrawAddress {
    return MsgSetWithdrawAddress.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetWithdrawAddress): MsgSetWithdrawAddressAminoMsg {
    return {
      type: "cosmos-sdk/MsgModifyWithdrawAddress",
      value: MsgSetWithdrawAddress.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetWithdrawAddressProtoMsg): MsgSetWithdrawAddress {
    return MsgSetWithdrawAddress.decode(message.value);
  },
  toProto(message: MsgSetWithdrawAddress): Uint8Array {
    return MsgSetWithdrawAddress.encode(message).finish();
  },
  toProtoMsg(message: MsgSetWithdrawAddress): MsgSetWithdrawAddressProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
      value: MsgSetWithdrawAddress.encode(message).finish()
    };
  }
};
function createBaseMsgSetWithdrawAddressResponse(): MsgSetWithdrawAddressResponse {
  return {};
}
export const MsgSetWithdrawAddressResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse",
  encode(_: MsgSetWithdrawAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetWithdrawAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetWithdrawAddressResponse();
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
  fromJSON(_: any): MsgSetWithdrawAddressResponse {
    return {};
  },
  toJSON(_: MsgSetWithdrawAddressResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetWithdrawAddressResponse>, I>>(_: I): MsgSetWithdrawAddressResponse {
    const message = createBaseMsgSetWithdrawAddressResponse();
    return message;
  },
  fromSDK(_: MsgSetWithdrawAddressResponseSDKType): MsgSetWithdrawAddressResponse {
    return {};
  },
  toSDK(_: MsgSetWithdrawAddressResponse): MsgSetWithdrawAddressResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgSetWithdrawAddressResponseAmino): MsgSetWithdrawAddressResponse {
    const message = createBaseMsgSetWithdrawAddressResponse();
    return message;
  },
  toAmino(_: MsgSetWithdrawAddressResponse): MsgSetWithdrawAddressResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetWithdrawAddressResponseAminoMsg): MsgSetWithdrawAddressResponse {
    return MsgSetWithdrawAddressResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetWithdrawAddressResponse): MsgSetWithdrawAddressResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgSetWithdrawAddressResponse",
      value: MsgSetWithdrawAddressResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetWithdrawAddressResponseProtoMsg): MsgSetWithdrawAddressResponse {
    return MsgSetWithdrawAddressResponse.decode(message.value);
  },
  toProto(message: MsgSetWithdrawAddressResponse): Uint8Array {
    return MsgSetWithdrawAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetWithdrawAddressResponse): MsgSetWithdrawAddressResponseProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse",
      value: MsgSetWithdrawAddressResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawDelegatorReward(): MsgWithdrawDelegatorReward {
  return {
    delegatorAddress: "",
    validatorAddress: ""
  };
}
export const MsgWithdrawDelegatorReward = {
  typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
  encode(message: MsgWithdrawDelegatorReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawDelegatorReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawDelegatorReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdrawDelegatorReward {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : ""
    };
  },
  toJSON(message: MsgWithdrawDelegatorReward): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgWithdrawDelegatorReward>, I>>(object: I): MsgWithdrawDelegatorReward {
    const message = createBaseMsgWithdrawDelegatorReward();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
  fromSDK(object: MsgWithdrawDelegatorRewardSDKType): MsgWithdrawDelegatorReward {
    return {
      delegatorAddress: object?.delegator_address,
      validatorAddress: object?.validator_address
    };
  },
  toSDK(message: MsgWithdrawDelegatorReward): MsgWithdrawDelegatorRewardSDKType {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    obj.validator_address = message.validatorAddress;
    return obj;
  },
  fromAmino(object: MsgWithdrawDelegatorRewardAmino): MsgWithdrawDelegatorReward {
    const message = createBaseMsgWithdrawDelegatorReward();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    return message;
  },
  toAmino(message: MsgWithdrawDelegatorReward): MsgWithdrawDelegatorRewardAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    obj.validator_address = message.validatorAddress;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawDelegatorRewardAminoMsg): MsgWithdrawDelegatorReward {
    return MsgWithdrawDelegatorReward.fromAmino(object.value);
  },
  toAminoMsg(message: MsgWithdrawDelegatorReward): MsgWithdrawDelegatorRewardAminoMsg {
    return {
      type: "cosmos-sdk/MsgWithdrawDelegationReward",
      value: MsgWithdrawDelegatorReward.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgWithdrawDelegatorRewardProtoMsg): MsgWithdrawDelegatorReward {
    return MsgWithdrawDelegatorReward.decode(message.value);
  },
  toProto(message: MsgWithdrawDelegatorReward): Uint8Array {
    return MsgWithdrawDelegatorReward.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawDelegatorReward): MsgWithdrawDelegatorRewardProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
      value: MsgWithdrawDelegatorReward.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawDelegatorRewardResponse(): MsgWithdrawDelegatorRewardResponse {
  return {
    amount: []
  };
}
export const MsgWithdrawDelegatorRewardResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse",
  encode(message: MsgWithdrawDelegatorRewardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawDelegatorRewardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawDelegatorRewardResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdrawDelegatorRewardResponse {
    return {
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgWithdrawDelegatorRewardResponse): unknown {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgWithdrawDelegatorRewardResponse>, I>>(object: I): MsgWithdrawDelegatorRewardResponse {
    const message = createBaseMsgWithdrawDelegatorRewardResponse();
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgWithdrawDelegatorRewardResponseSDKType): MsgWithdrawDelegatorRewardResponse {
    return {
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: MsgWithdrawDelegatorRewardResponse): MsgWithdrawDelegatorRewardResponseSDKType {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAmino(object: MsgWithdrawDelegatorRewardResponseAmino): MsgWithdrawDelegatorRewardResponse {
    const message = createBaseMsgWithdrawDelegatorRewardResponse();
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgWithdrawDelegatorRewardResponse): MsgWithdrawDelegatorRewardResponseAmino {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawDelegatorRewardResponseAminoMsg): MsgWithdrawDelegatorRewardResponse {
    return MsgWithdrawDelegatorRewardResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgWithdrawDelegatorRewardResponse): MsgWithdrawDelegatorRewardResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgWithdrawDelegatorRewardResponse",
      value: MsgWithdrawDelegatorRewardResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgWithdrawDelegatorRewardResponseProtoMsg): MsgWithdrawDelegatorRewardResponse {
    return MsgWithdrawDelegatorRewardResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawDelegatorRewardResponse): Uint8Array {
    return MsgWithdrawDelegatorRewardResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawDelegatorRewardResponse): MsgWithdrawDelegatorRewardResponseProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse",
      value: MsgWithdrawDelegatorRewardResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawValidatorCommission(): MsgWithdrawValidatorCommission {
  return {
    validatorAddress: ""
  };
}
export const MsgWithdrawValidatorCommission = {
  typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
  encode(message: MsgWithdrawValidatorCommission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawValidatorCommission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawValidatorCommission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdrawValidatorCommission {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : ""
    };
  },
  toJSON(message: MsgWithdrawValidatorCommission): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgWithdrawValidatorCommission>, I>>(object: I): MsgWithdrawValidatorCommission {
    const message = createBaseMsgWithdrawValidatorCommission();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
  fromSDK(object: MsgWithdrawValidatorCommissionSDKType): MsgWithdrawValidatorCommission {
    return {
      validatorAddress: object?.validator_address
    };
  },
  toSDK(message: MsgWithdrawValidatorCommission): MsgWithdrawValidatorCommissionSDKType {
    const obj: any = {};
    obj.validator_address = message.validatorAddress;
    return obj;
  },
  fromAmino(object: MsgWithdrawValidatorCommissionAmino): MsgWithdrawValidatorCommission {
    const message = createBaseMsgWithdrawValidatorCommission();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    return message;
  },
  toAmino(message: MsgWithdrawValidatorCommission): MsgWithdrawValidatorCommissionAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawValidatorCommissionAminoMsg): MsgWithdrawValidatorCommission {
    return MsgWithdrawValidatorCommission.fromAmino(object.value);
  },
  toAminoMsg(message: MsgWithdrawValidatorCommission): MsgWithdrawValidatorCommissionAminoMsg {
    return {
      type: "cosmos-sdk/MsgWithdrawValidatorCommission",
      value: MsgWithdrawValidatorCommission.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgWithdrawValidatorCommissionProtoMsg): MsgWithdrawValidatorCommission {
    return MsgWithdrawValidatorCommission.decode(message.value);
  },
  toProto(message: MsgWithdrawValidatorCommission): Uint8Array {
    return MsgWithdrawValidatorCommission.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawValidatorCommission): MsgWithdrawValidatorCommissionProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
      value: MsgWithdrawValidatorCommission.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawValidatorCommissionResponse(): MsgWithdrawValidatorCommissionResponse {
  return {
    amount: []
  };
}
export const MsgWithdrawValidatorCommissionResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse",
  encode(message: MsgWithdrawValidatorCommissionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawValidatorCommissionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawValidatorCommissionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdrawValidatorCommissionResponse {
    return {
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgWithdrawValidatorCommissionResponse): unknown {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgWithdrawValidatorCommissionResponse>, I>>(object: I): MsgWithdrawValidatorCommissionResponse {
    const message = createBaseMsgWithdrawValidatorCommissionResponse();
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgWithdrawValidatorCommissionResponseSDKType): MsgWithdrawValidatorCommissionResponse {
    return {
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: MsgWithdrawValidatorCommissionResponse): MsgWithdrawValidatorCommissionResponseSDKType {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAmino(object: MsgWithdrawValidatorCommissionResponseAmino): MsgWithdrawValidatorCommissionResponse {
    const message = createBaseMsgWithdrawValidatorCommissionResponse();
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgWithdrawValidatorCommissionResponse): MsgWithdrawValidatorCommissionResponseAmino {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawValidatorCommissionResponseAminoMsg): MsgWithdrawValidatorCommissionResponse {
    return MsgWithdrawValidatorCommissionResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgWithdrawValidatorCommissionResponse): MsgWithdrawValidatorCommissionResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgWithdrawValidatorCommissionResponse",
      value: MsgWithdrawValidatorCommissionResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgWithdrawValidatorCommissionResponseProtoMsg): MsgWithdrawValidatorCommissionResponse {
    return MsgWithdrawValidatorCommissionResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawValidatorCommissionResponse): Uint8Array {
    return MsgWithdrawValidatorCommissionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawValidatorCommissionResponse): MsgWithdrawValidatorCommissionResponseProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse",
      value: MsgWithdrawValidatorCommissionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgFundCommunityPool(): MsgFundCommunityPool {
  return {
    amount: [],
    depositor: ""
  };
}
export const MsgFundCommunityPool = {
  typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
  encode(message: MsgFundCommunityPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFundCommunityPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundCommunityPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.depositor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgFundCommunityPool {
    return {
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
      depositor: isSet(object.depositor) ? String(object.depositor) : ""
    };
  },
  toJSON(message: MsgFundCommunityPool): unknown {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    message.depositor !== undefined && (obj.depositor = message.depositor);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgFundCommunityPool>, I>>(object: I): MsgFundCommunityPool {
    const message = createBaseMsgFundCommunityPool();
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.depositor = object.depositor ?? "";
    return message;
  },
  fromSDK(object: MsgFundCommunityPoolSDKType): MsgFundCommunityPool {
    return {
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromSDK(e)) : [],
      depositor: object?.depositor
    };
  },
  toSDK(message: MsgFundCommunityPool): MsgFundCommunityPoolSDKType {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.amount = [];
    }
    obj.depositor = message.depositor;
    return obj;
  },
  fromAmino(object: MsgFundCommunityPoolAmino): MsgFundCommunityPool {
    const message = createBaseMsgFundCommunityPool();
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    if (object.depositor !== undefined && object.depositor !== null) {
      message.depositor = object.depositor;
    }
    return message;
  },
  toAmino(message: MsgFundCommunityPool): MsgFundCommunityPoolAmino {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    obj.depositor = message.depositor;
    return obj;
  },
  fromAminoMsg(object: MsgFundCommunityPoolAminoMsg): MsgFundCommunityPool {
    return MsgFundCommunityPool.fromAmino(object.value);
  },
  toAminoMsg(message: MsgFundCommunityPool): MsgFundCommunityPoolAminoMsg {
    return {
      type: "cosmos-sdk/MsgFundCommunityPool",
      value: MsgFundCommunityPool.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgFundCommunityPoolProtoMsg): MsgFundCommunityPool {
    return MsgFundCommunityPool.decode(message.value);
  },
  toProto(message: MsgFundCommunityPool): Uint8Array {
    return MsgFundCommunityPool.encode(message).finish();
  },
  toProtoMsg(message: MsgFundCommunityPool): MsgFundCommunityPoolProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
      value: MsgFundCommunityPool.encode(message).finish()
    };
  }
};
function createBaseMsgFundCommunityPoolResponse(): MsgFundCommunityPoolResponse {
  return {};
}
export const MsgFundCommunityPoolResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse",
  encode(_: MsgFundCommunityPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFundCommunityPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundCommunityPoolResponse();
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
  fromJSON(_: any): MsgFundCommunityPoolResponse {
    return {};
  },
  toJSON(_: MsgFundCommunityPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgFundCommunityPoolResponse>, I>>(_: I): MsgFundCommunityPoolResponse {
    const message = createBaseMsgFundCommunityPoolResponse();
    return message;
  },
  fromSDK(_: MsgFundCommunityPoolResponseSDKType): MsgFundCommunityPoolResponse {
    return {};
  },
  toSDK(_: MsgFundCommunityPoolResponse): MsgFundCommunityPoolResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgFundCommunityPoolResponseAmino): MsgFundCommunityPoolResponse {
    const message = createBaseMsgFundCommunityPoolResponse();
    return message;
  },
  toAmino(_: MsgFundCommunityPoolResponse): MsgFundCommunityPoolResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgFundCommunityPoolResponseAminoMsg): MsgFundCommunityPoolResponse {
    return MsgFundCommunityPoolResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgFundCommunityPoolResponse): MsgFundCommunityPoolResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgFundCommunityPoolResponse",
      value: MsgFundCommunityPoolResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgFundCommunityPoolResponseProtoMsg): MsgFundCommunityPoolResponse {
    return MsgFundCommunityPoolResponse.decode(message.value);
  },
  toProto(message: MsgFundCommunityPoolResponse): Uint8Array {
    return MsgFundCommunityPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgFundCommunityPoolResponse): MsgFundCommunityPoolResponseProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse",
      value: MsgFundCommunityPoolResponse.encode(message).finish()
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
  typeUrl: "/cosmos.distribution.v1beta1.MsgUpdateParams",
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
      type: "cosmos-sdk/distribution/MsgUpdateParams",
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
      typeUrl: "/cosmos.distribution.v1beta1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.MsgUpdateParamsResponse",
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
      typeUrl: "/cosmos.distribution.v1beta1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCommunityPoolSpend(): MsgCommunityPoolSpend {
  return {
    authority: "",
    recipient: "",
    amount: []
  };
}
export const MsgCommunityPoolSpend = {
  typeUrl: "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend",
  encode(message: MsgCommunityPoolSpend, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCommunityPoolSpend {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCommunityPoolSpend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.recipient = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCommunityPoolSpend {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgCommunityPoolSpend): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCommunityPoolSpend>, I>>(object: I): MsgCommunityPoolSpend {
    const message = createBaseMsgCommunityPoolSpend();
    message.authority = object.authority ?? "";
    message.recipient = object.recipient ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgCommunityPoolSpendSDKType): MsgCommunityPoolSpend {
    return {
      authority: object?.authority,
      recipient: object?.recipient,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: MsgCommunityPoolSpend): MsgCommunityPoolSpendSDKType {
    const obj: any = {};
    obj.authority = message.authority;
    obj.recipient = message.recipient;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAmino(object: MsgCommunityPoolSpendAmino): MsgCommunityPoolSpend {
    const message = createBaseMsgCommunityPoolSpend();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgCommunityPoolSpend): MsgCommunityPoolSpendAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.recipient = message.recipient;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgCommunityPoolSpendAminoMsg): MsgCommunityPoolSpend {
    return MsgCommunityPoolSpend.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCommunityPoolSpend): MsgCommunityPoolSpendAminoMsg {
    return {
      type: "cosmos-sdk/distr/MsgCommunityPoolSpend",
      value: MsgCommunityPoolSpend.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCommunityPoolSpendProtoMsg): MsgCommunityPoolSpend {
    return MsgCommunityPoolSpend.decode(message.value);
  },
  toProto(message: MsgCommunityPoolSpend): Uint8Array {
    return MsgCommunityPoolSpend.encode(message).finish();
  },
  toProtoMsg(message: MsgCommunityPoolSpend): MsgCommunityPoolSpendProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend",
      value: MsgCommunityPoolSpend.encode(message).finish()
    };
  }
};
function createBaseMsgCommunityPoolSpendResponse(): MsgCommunityPoolSpendResponse {
  return {};
}
export const MsgCommunityPoolSpendResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.MsgCommunityPoolSpendResponse",
  encode(_: MsgCommunityPoolSpendResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCommunityPoolSpendResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCommunityPoolSpendResponse();
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
  fromJSON(_: any): MsgCommunityPoolSpendResponse {
    return {};
  },
  toJSON(_: MsgCommunityPoolSpendResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCommunityPoolSpendResponse>, I>>(_: I): MsgCommunityPoolSpendResponse {
    const message = createBaseMsgCommunityPoolSpendResponse();
    return message;
  },
  fromSDK(_: MsgCommunityPoolSpendResponseSDKType): MsgCommunityPoolSpendResponse {
    return {};
  },
  toSDK(_: MsgCommunityPoolSpendResponse): MsgCommunityPoolSpendResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgCommunityPoolSpendResponseAmino): MsgCommunityPoolSpendResponse {
    const message = createBaseMsgCommunityPoolSpendResponse();
    return message;
  },
  toAmino(_: MsgCommunityPoolSpendResponse): MsgCommunityPoolSpendResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCommunityPoolSpendResponseAminoMsg): MsgCommunityPoolSpendResponse {
    return MsgCommunityPoolSpendResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCommunityPoolSpendResponse): MsgCommunityPoolSpendResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgCommunityPoolSpendResponse",
      value: MsgCommunityPoolSpendResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCommunityPoolSpendResponseProtoMsg): MsgCommunityPoolSpendResponse {
    return MsgCommunityPoolSpendResponse.decode(message.value);
  },
  toProto(message: MsgCommunityPoolSpendResponse): Uint8Array {
    return MsgCommunityPoolSpendResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCommunityPoolSpendResponse): MsgCommunityPoolSpendResponseProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.MsgCommunityPoolSpendResponse",
      value: MsgCommunityPoolSpendResponse.encode(message).finish()
    };
  }
};
/** Msg defines the distribution Msg service. */
export interface Msg {
  /**
   * SetWithdrawAddress defines a method to change the withdraw address
   * for a delegator (or validator self-delegation).
   */
  SetWithdrawAddress(request: MsgSetWithdrawAddress): Promise<MsgSetWithdrawAddressResponse>;
  /**
   * WithdrawDelegatorReward defines a method to withdraw rewards of delegator
   * from a single validator.
   */
  WithdrawDelegatorReward(request: MsgWithdrawDelegatorReward): Promise<MsgWithdrawDelegatorRewardResponse>;
  /**
   * WithdrawValidatorCommission defines a method to withdraw the
   * full commission to the validator address.
   */
  WithdrawValidatorCommission(request: MsgWithdrawValidatorCommission): Promise<MsgWithdrawValidatorCommissionResponse>;
  /**
   * FundCommunityPool defines a method to allow an account to directly
   * fund the community pool.
   */
  FundCommunityPool(request: MsgFundCommunityPool): Promise<MsgFundCommunityPoolResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/distribution
   * module parameters. The authority is defined in the keeper.
   * 
   * Since: cosmos-sdk 0.47
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /**
   * CommunityPoolSpend defines a governance operation for sending tokens from
   * the community pool in the x/distribution module to another account, which
   * could be the governance module itself. The authority is defined in the
   * keeper.
   * 
   * Since: cosmos-sdk 0.47
   */
  CommunityPoolSpend(request: MsgCommunityPoolSpend): Promise<MsgCommunityPoolSpendResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SetWithdrawAddress = this.SetWithdrawAddress.bind(this);
    this.WithdrawDelegatorReward = this.WithdrawDelegatorReward.bind(this);
    this.WithdrawValidatorCommission = this.WithdrawValidatorCommission.bind(this);
    this.FundCommunityPool = this.FundCommunityPool.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
    this.CommunityPoolSpend = this.CommunityPoolSpend.bind(this);
  }
  SetWithdrawAddress(request: MsgSetWithdrawAddress): Promise<MsgSetWithdrawAddressResponse> {
    const data = MsgSetWithdrawAddress.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "SetWithdrawAddress", data);
    return promise.then(data => MsgSetWithdrawAddressResponse.decode(new _m0.Reader(data)));
  }
  WithdrawDelegatorReward(request: MsgWithdrawDelegatorReward): Promise<MsgWithdrawDelegatorRewardResponse> {
    const data = MsgWithdrawDelegatorReward.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "WithdrawDelegatorReward", data);
    return promise.then(data => MsgWithdrawDelegatorRewardResponse.decode(new _m0.Reader(data)));
  }
  WithdrawValidatorCommission(request: MsgWithdrawValidatorCommission): Promise<MsgWithdrawValidatorCommissionResponse> {
    const data = MsgWithdrawValidatorCommission.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "WithdrawValidatorCommission", data);
    return promise.then(data => MsgWithdrawValidatorCommissionResponse.decode(new _m0.Reader(data)));
  }
  FundCommunityPool(request: MsgFundCommunityPool): Promise<MsgFundCommunityPoolResponse> {
    const data = MsgFundCommunityPool.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "FundCommunityPool", data);
    return promise.then(data => MsgFundCommunityPoolResponse.decode(new _m0.Reader(data)));
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
  }
  CommunityPoolSpend(request: MsgCommunityPoolSpend): Promise<MsgCommunityPoolSpendResponse> {
    const data = MsgCommunityPoolSpend.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "CommunityPoolSpend", data);
    return promise.then(data => MsgCommunityPoolSpendResponse.decode(new _m0.Reader(data)));
  }
}