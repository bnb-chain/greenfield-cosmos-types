//@ts-nocheck
/* eslint-disable */
import { Long, isSet, DeepPartial, Exact } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { Decimal } from "@cosmjs/math";
export const protobufPackage = "greenfield.payment";
/** Params defines the parameters for the module. */
export interface Params {
  versionedParams: VersionedParams;
  /** The maximum number of payment accounts that can be created by one user */
  paymentAccountCountLimit: Long;
  /**
   * Time duration threshold of forced settlement.
   * If dynamic balance is less than NetOutFlowRate * forcedSettleTime, the account can be forced settled.
   */
  forcedSettleTime: Long;
  /** the maximum number of flows that will be auto forced settled in one block */
  maxAutoSettleFlowCount: Long;
  /** the maximum number of flows that will be auto resumed in one block */
  maxAutoResumeFlowCount: Long;
  /** The denom of fee charged in payment module */
  feeDenom: string;
  /** The withdrawal amount threshold to trigger time lock */
  withdrawTimeLockThreshold: string;
  /** The duration of the time lock for a big amount withdrawal */
  withdrawTimeLockDuration: Long;
}
export interface ParamsProtoMsg {
  typeUrl: "/greenfield.payment.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  versioned_params?: VersionedParamsAmino;
  /** The maximum number of payment accounts that can be created by one user */
  payment_account_count_limit?: string;
  /**
   * Time duration threshold of forced settlement.
   * If dynamic balance is less than NetOutFlowRate * forcedSettleTime, the account can be forced settled.
   */
  forced_settle_time?: string;
  /** the maximum number of flows that will be auto forced settled in one block */
  max_auto_settle_flow_count?: string;
  /** the maximum number of flows that will be auto resumed in one block */
  max_auto_resume_flow_count?: string;
  /** The denom of fee charged in payment module */
  fee_denom?: string;
  /** The withdrawal amount threshold to trigger time lock */
  withdraw_time_lock_threshold?: string;
  /** The duration of the time lock for a big amount withdrawal */
  withdraw_time_lock_duration?: string;
}
export interface ParamsAminoMsg {
  type: "/greenfield.payment.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  versioned_params: VersionedParamsSDKType;
  payment_account_count_limit: Long;
  forced_settle_time: Long;
  max_auto_settle_flow_count: Long;
  max_auto_resume_flow_count: Long;
  fee_denom: string;
  withdraw_time_lock_threshold: string;
  withdraw_time_lock_duration: Long;
}
/** VersionedParams defines the parameters with multiple versions, each version is stored with different timestamp. */
export interface VersionedParams {
  /** Time duration which the buffer balance need to be reserved for NetOutFlow e.g. 6 month */
  reserveTime: Long;
  /** The tax rate to pay for validators in storage payment. The default value is 1%(0.01) */
  validatorTaxRate: string;
}
export interface VersionedParamsProtoMsg {
  typeUrl: "/greenfield.payment.VersionedParams";
  value: Uint8Array;
}
/** VersionedParams defines the parameters with multiple versions, each version is stored with different timestamp. */
export interface VersionedParamsAmino {
  /** Time duration which the buffer balance need to be reserved for NetOutFlow e.g. 6 month */
  reserve_time?: string;
  /** The tax rate to pay for validators in storage payment. The default value is 1%(0.01) */
  validator_tax_rate?: string;
}
export interface VersionedParamsAminoMsg {
  type: "/greenfield.payment.VersionedParams";
  value: VersionedParamsAmino;
}
/** VersionedParams defines the parameters with multiple versions, each version is stored with different timestamp. */
export interface VersionedParamsSDKType {
  reserve_time: Long;
  validator_tax_rate: string;
}
function createBaseParams(): Params {
  return {
    versionedParams: VersionedParams.fromPartial({}),
    paymentAccountCountLimit: Long.UZERO,
    forcedSettleTime: Long.UZERO,
    maxAutoSettleFlowCount: Long.UZERO,
    maxAutoResumeFlowCount: Long.UZERO,
    feeDenom: "",
    withdrawTimeLockThreshold: "",
    withdrawTimeLockDuration: Long.UZERO
  };
}
export const Params = {
  typeUrl: "/greenfield.payment.Params",
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.versionedParams !== undefined) {
      VersionedParams.encode(message.versionedParams, writer.uint32(10).fork()).ldelim();
    }
    if (!message.paymentAccountCountLimit.isZero()) {
      writer.uint32(16).uint64(message.paymentAccountCountLimit);
    }
    if (!message.forcedSettleTime.isZero()) {
      writer.uint32(24).uint64(message.forcedSettleTime);
    }
    if (!message.maxAutoSettleFlowCount.isZero()) {
      writer.uint32(32).uint64(message.maxAutoSettleFlowCount);
    }
    if (!message.maxAutoResumeFlowCount.isZero()) {
      writer.uint32(40).uint64(message.maxAutoResumeFlowCount);
    }
    if (message.feeDenom !== "") {
      writer.uint32(50).string(message.feeDenom);
    }
    if (message.withdrawTimeLockThreshold !== "") {
      writer.uint32(58).string(message.withdrawTimeLockThreshold);
    }
    if (!message.withdrawTimeLockDuration.isZero()) {
      writer.uint32(64).uint64(message.withdrawTimeLockDuration);
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
          message.versionedParams = VersionedParams.decode(reader, reader.uint32());
          break;
        case 2:
          message.paymentAccountCountLimit = (reader.uint64() as Long);
          break;
        case 3:
          message.forcedSettleTime = (reader.uint64() as Long);
          break;
        case 4:
          message.maxAutoSettleFlowCount = (reader.uint64() as Long);
          break;
        case 5:
          message.maxAutoResumeFlowCount = (reader.uint64() as Long);
          break;
        case 6:
          message.feeDenom = reader.string();
          break;
        case 7:
          message.withdrawTimeLockThreshold = reader.string();
          break;
        case 8:
          message.withdrawTimeLockDuration = (reader.uint64() as Long);
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
      versionedParams: isSet(object.versionedParams) ? VersionedParams.fromJSON(object.versionedParams) : undefined,
      paymentAccountCountLimit: isSet(object.paymentAccountCountLimit) ? Long.fromValue(object.paymentAccountCountLimit) : Long.UZERO,
      forcedSettleTime: isSet(object.forcedSettleTime) ? Long.fromValue(object.forcedSettleTime) : Long.UZERO,
      maxAutoSettleFlowCount: isSet(object.maxAutoSettleFlowCount) ? Long.fromValue(object.maxAutoSettleFlowCount) : Long.UZERO,
      maxAutoResumeFlowCount: isSet(object.maxAutoResumeFlowCount) ? Long.fromValue(object.maxAutoResumeFlowCount) : Long.UZERO,
      feeDenom: isSet(object.feeDenom) ? String(object.feeDenom) : "",
      withdrawTimeLockThreshold: isSet(object.withdrawTimeLockThreshold) ? String(object.withdrawTimeLockThreshold) : "",
      withdrawTimeLockDuration: isSet(object.withdrawTimeLockDuration) ? Long.fromValue(object.withdrawTimeLockDuration) : Long.UZERO
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.versionedParams !== undefined && (obj.versionedParams = message.versionedParams ? VersionedParams.toJSON(message.versionedParams) : undefined);
    message.paymentAccountCountLimit !== undefined && (obj.paymentAccountCountLimit = (message.paymentAccountCountLimit || Long.UZERO).toString());
    message.forcedSettleTime !== undefined && (obj.forcedSettleTime = (message.forcedSettleTime || Long.UZERO).toString());
    message.maxAutoSettleFlowCount !== undefined && (obj.maxAutoSettleFlowCount = (message.maxAutoSettleFlowCount || Long.UZERO).toString());
    message.maxAutoResumeFlowCount !== undefined && (obj.maxAutoResumeFlowCount = (message.maxAutoResumeFlowCount || Long.UZERO).toString());
    message.feeDenom !== undefined && (obj.feeDenom = message.feeDenom);
    message.withdrawTimeLockThreshold !== undefined && (obj.withdrawTimeLockThreshold = message.withdrawTimeLockThreshold);
    message.withdrawTimeLockDuration !== undefined && (obj.withdrawTimeLockDuration = (message.withdrawTimeLockDuration || Long.UZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.versionedParams = object.versionedParams !== undefined && object.versionedParams !== null ? VersionedParams.fromPartial(object.versionedParams) : undefined;
    message.paymentAccountCountLimit = object.paymentAccountCountLimit !== undefined && object.paymentAccountCountLimit !== null ? Long.fromValue(object.paymentAccountCountLimit) : Long.UZERO;
    message.forcedSettleTime = object.forcedSettleTime !== undefined && object.forcedSettleTime !== null ? Long.fromValue(object.forcedSettleTime) : Long.UZERO;
    message.maxAutoSettleFlowCount = object.maxAutoSettleFlowCount !== undefined && object.maxAutoSettleFlowCount !== null ? Long.fromValue(object.maxAutoSettleFlowCount) : Long.UZERO;
    message.maxAutoResumeFlowCount = object.maxAutoResumeFlowCount !== undefined && object.maxAutoResumeFlowCount !== null ? Long.fromValue(object.maxAutoResumeFlowCount) : Long.UZERO;
    message.feeDenom = object.feeDenom ?? "";
    message.withdrawTimeLockThreshold = object.withdrawTimeLockThreshold ?? "";
    message.withdrawTimeLockDuration = object.withdrawTimeLockDuration !== undefined && object.withdrawTimeLockDuration !== null ? Long.fromValue(object.withdrawTimeLockDuration) : Long.UZERO;
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      versionedParams: object.versioned_params ? VersionedParams.fromSDK(object.versioned_params) : undefined,
      paymentAccountCountLimit: object?.payment_account_count_limit,
      forcedSettleTime: object?.forced_settle_time,
      maxAutoSettleFlowCount: object?.max_auto_settle_flow_count,
      maxAutoResumeFlowCount: object?.max_auto_resume_flow_count,
      feeDenom: object?.fee_denom,
      withdrawTimeLockThreshold: object?.withdraw_time_lock_threshold,
      withdrawTimeLockDuration: object?.withdraw_time_lock_duration
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    message.versionedParams !== undefined && (obj.versioned_params = message.versionedParams ? VersionedParams.toSDK(message.versionedParams) : undefined);
    obj.payment_account_count_limit = message.paymentAccountCountLimit;
    obj.forced_settle_time = message.forcedSettleTime;
    obj.max_auto_settle_flow_count = message.maxAutoSettleFlowCount;
    obj.max_auto_resume_flow_count = message.maxAutoResumeFlowCount;
    obj.fee_denom = message.feeDenom;
    obj.withdraw_time_lock_threshold = message.withdrawTimeLockThreshold;
    obj.withdraw_time_lock_duration = message.withdrawTimeLockDuration;
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.versioned_params !== undefined && object.versioned_params !== null) {
      message.versionedParams = VersionedParams.fromAmino(object.versioned_params);
    }
    if (object.payment_account_count_limit !== undefined && object.payment_account_count_limit !== null) {
      message.paymentAccountCountLimit = Long.fromString(object.payment_account_count_limit);
    }
    if (object.forced_settle_time !== undefined && object.forced_settle_time !== null) {
      message.forcedSettleTime = Long.fromString(object.forced_settle_time);
    }
    if (object.max_auto_settle_flow_count !== undefined && object.max_auto_settle_flow_count !== null) {
      message.maxAutoSettleFlowCount = Long.fromString(object.max_auto_settle_flow_count);
    }
    if (object.max_auto_resume_flow_count !== undefined && object.max_auto_resume_flow_count !== null) {
      message.maxAutoResumeFlowCount = Long.fromString(object.max_auto_resume_flow_count);
    }
    if (object.fee_denom !== undefined && object.fee_denom !== null) {
      message.feeDenom = object.fee_denom;
    }
    if (object.withdraw_time_lock_threshold !== undefined && object.withdraw_time_lock_threshold !== null) {
      message.withdrawTimeLockThreshold = object.withdraw_time_lock_threshold;
    }
    if (object.withdraw_time_lock_duration !== undefined && object.withdraw_time_lock_duration !== null) {
      message.withdrawTimeLockDuration = Long.fromString(object.withdraw_time_lock_duration);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.versioned_params = message.versionedParams ? VersionedParams.toAmino(message.versionedParams) : undefined;
    obj.payment_account_count_limit = message.paymentAccountCountLimit ? message.paymentAccountCountLimit.toString() : undefined;
    obj.forced_settle_time = message.forcedSettleTime ? message.forcedSettleTime.toString() : undefined;
    obj.max_auto_settle_flow_count = message.maxAutoSettleFlowCount ? message.maxAutoSettleFlowCount.toString() : undefined;
    obj.max_auto_resume_flow_count = message.maxAutoResumeFlowCount ? message.maxAutoResumeFlowCount.toString() : undefined;
    obj.fee_denom = message.feeDenom;
    obj.withdraw_time_lock_threshold = message.withdrawTimeLockThreshold;
    obj.withdraw_time_lock_duration = message.withdrawTimeLockDuration ? message.withdrawTimeLockDuration.toString() : undefined;
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
      typeUrl: "/greenfield.payment.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseVersionedParams(): VersionedParams {
  return {
    reserveTime: Long.UZERO,
    validatorTaxRate: ""
  };
}
export const VersionedParams = {
  typeUrl: "/greenfield.payment.VersionedParams",
  encode(message: VersionedParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.reserveTime.isZero()) {
      writer.uint32(8).uint64(message.reserveTime);
    }
    if (message.validatorTaxRate !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.validatorTaxRate, 18).atomics);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): VersionedParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersionedParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reserveTime = (reader.uint64() as Long);
          break;
        case 2:
          message.validatorTaxRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): VersionedParams {
    return {
      reserveTime: isSet(object.reserveTime) ? Long.fromValue(object.reserveTime) : Long.UZERO,
      validatorTaxRate: isSet(object.validatorTaxRate) ? String(object.validatorTaxRate) : ""
    };
  },
  toJSON(message: VersionedParams): unknown {
    const obj: any = {};
    message.reserveTime !== undefined && (obj.reserveTime = (message.reserveTime || Long.UZERO).toString());
    message.validatorTaxRate !== undefined && (obj.validatorTaxRate = message.validatorTaxRate);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<VersionedParams>, I>>(object: I): VersionedParams {
    const message = createBaseVersionedParams();
    message.reserveTime = object.reserveTime !== undefined && object.reserveTime !== null ? Long.fromValue(object.reserveTime) : Long.UZERO;
    message.validatorTaxRate = object.validatorTaxRate ?? "";
    return message;
  },
  fromSDK(object: VersionedParamsSDKType): VersionedParams {
    return {
      reserveTime: object?.reserve_time,
      validatorTaxRate: object?.validator_tax_rate
    };
  },
  toSDK(message: VersionedParams): VersionedParamsSDKType {
    const obj: any = {};
    obj.reserve_time = message.reserveTime;
    obj.validator_tax_rate = message.validatorTaxRate;
    return obj;
  },
  fromAmino(object: VersionedParamsAmino): VersionedParams {
    const message = createBaseVersionedParams();
    if (object.reserve_time !== undefined && object.reserve_time !== null) {
      message.reserveTime = Long.fromString(object.reserve_time);
    }
    if (object.validator_tax_rate !== undefined && object.validator_tax_rate !== null) {
      message.validatorTaxRate = object.validator_tax_rate;
    }
    return message;
  },
  toAmino(message: VersionedParams): VersionedParamsAmino {
    const obj: any = {};
    obj.reserve_time = message.reserveTime ? message.reserveTime.toString() : undefined;
    obj.validator_tax_rate = message.validatorTaxRate;
    return obj;
  },
  fromAminoMsg(object: VersionedParamsAminoMsg): VersionedParams {
    return VersionedParams.fromAmino(object.value);
  },
  fromProtoMsg(message: VersionedParamsProtoMsg): VersionedParams {
    return VersionedParams.decode(message.value);
  },
  toProto(message: VersionedParams): Uint8Array {
    return VersionedParams.encode(message).finish();
  },
  toProtoMsg(message: VersionedParams): VersionedParamsProtoMsg {
    return {
      typeUrl: "/greenfield.payment.VersionedParams",
      value: VersionedParams.encode(message).finish()
    };
  }
};