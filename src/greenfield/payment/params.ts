/* eslint-disable */
import { Long, isSet, DeepPartial, Exact } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "bnbchain.greenfield.payment";
/** Params defines the parameters for the module. */

export interface Params {
  /** Time duration which the buffer balance need to be reserved for NetOutFlow e.g. 6 month */
  reserveTime: Long;
  /** The maximum number of payment accounts that can be created by one user */

  paymentAccountCountLimit: Long;
  /**
   * Time duration threshold of forced settlement.
   * If dynamic balance is less than NetOutFlowRate * forcedSettleTime, the account can be forced settled.
   */

  forcedSettleTime: Long;
  /** the maximum number of accounts that will be forced settled in one block */

  maxAutoForceSettleNum: Long;
  /** The denom of fee charged in payment module */

  feeDenom: string;
}
/** Params defines the parameters for the module. */

export interface ParamsSDKType {
  reserve_time: Long;
  payment_account_count_limit: Long;
  forced_settle_time: Long;
  max_auto_force_settle_num: Long;
  fee_denom: string;
}

function createBaseParams(): Params {
  return {
    reserveTime: Long.UZERO,
    paymentAccountCountLimit: Long.UZERO,
    forcedSettleTime: Long.UZERO,
    maxAutoForceSettleNum: Long.UZERO,
    feeDenom: ""
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.reserveTime.isZero()) {
      writer.uint32(8).uint64(message.reserveTime);
    }

    if (!message.paymentAccountCountLimit.isZero()) {
      writer.uint32(16).uint64(message.paymentAccountCountLimit);
    }

    if (!message.forcedSettleTime.isZero()) {
      writer.uint32(24).uint64(message.forcedSettleTime);
    }

    if (!message.maxAutoForceSettleNum.isZero()) {
      writer.uint32(32).uint64(message.maxAutoForceSettleNum);
    }

    if (message.feeDenom !== "") {
      writer.uint32(42).string(message.feeDenom);
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
          message.reserveTime = (reader.uint64() as Long);
          break;

        case 2:
          message.paymentAccountCountLimit = (reader.uint64() as Long);
          break;

        case 3:
          message.forcedSettleTime = (reader.uint64() as Long);
          break;

        case 4:
          message.maxAutoForceSettleNum = (reader.uint64() as Long);
          break;

        case 5:
          message.feeDenom = reader.string();
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
      reserveTime: isSet(object.reserveTime) ? Long.fromValue(object.reserveTime) : Long.UZERO,
      paymentAccountCountLimit: isSet(object.paymentAccountCountLimit) ? Long.fromValue(object.paymentAccountCountLimit) : Long.UZERO,
      forcedSettleTime: isSet(object.forcedSettleTime) ? Long.fromValue(object.forcedSettleTime) : Long.UZERO,
      maxAutoForceSettleNum: isSet(object.maxAutoForceSettleNum) ? Long.fromValue(object.maxAutoForceSettleNum) : Long.UZERO,
      feeDenom: isSet(object.feeDenom) ? String(object.feeDenom) : ""
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.reserveTime !== undefined && (obj.reserveTime = (message.reserveTime || Long.UZERO).toString());
    message.paymentAccountCountLimit !== undefined && (obj.paymentAccountCountLimit = (message.paymentAccountCountLimit || Long.UZERO).toString());
    message.forcedSettleTime !== undefined && (obj.forcedSettleTime = (message.forcedSettleTime || Long.UZERO).toString());
    message.maxAutoForceSettleNum !== undefined && (obj.maxAutoForceSettleNum = (message.maxAutoForceSettleNum || Long.UZERO).toString());
    message.feeDenom !== undefined && (obj.feeDenom = message.feeDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.reserveTime = object.reserveTime !== undefined && object.reserveTime !== null ? Long.fromValue(object.reserveTime) : Long.UZERO;
    message.paymentAccountCountLimit = object.paymentAccountCountLimit !== undefined && object.paymentAccountCountLimit !== null ? Long.fromValue(object.paymentAccountCountLimit) : Long.UZERO;
    message.forcedSettleTime = object.forcedSettleTime !== undefined && object.forcedSettleTime !== null ? Long.fromValue(object.forcedSettleTime) : Long.UZERO;
    message.maxAutoForceSettleNum = object.maxAutoForceSettleNum !== undefined && object.maxAutoForceSettleNum !== null ? Long.fromValue(object.maxAutoForceSettleNum) : Long.UZERO;
    message.feeDenom = object.feeDenom ?? "";
    return message;
  },

  fromSDK(object: ParamsSDKType): Params {
    return {
      reserveTime: object?.reserve_time,
      paymentAccountCountLimit: object?.payment_account_count_limit,
      forcedSettleTime: object?.forced_settle_time,
      maxAutoForceSettleNum: object?.max_auto_force_settle_num,
      feeDenom: object?.fee_denom
    };
  },

  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.reserve_time = message.reserveTime;
    obj.payment_account_count_limit = message.paymentAccountCountLimit;
    obj.forced_settle_time = message.forcedSettleTime;
    obj.max_auto_force_settle_num = message.maxAutoForceSettleNum;
    obj.fee_denom = message.feeDenom;
    return obj;
  }

};