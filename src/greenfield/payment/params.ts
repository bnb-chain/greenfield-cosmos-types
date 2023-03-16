/* eslint-disable */
import { Long, isSet, DeepPartial, Exact } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "bnbchain.greenfield.payment";
/** Params defines the parameters for the module. */

export interface Params {
  /** Time duration which the buffer balance need to be reserved for NetOutFlow e.g. 6 month */
  reserve_time: Long;
  /** The maximum number of payment accounts that can be created by one user */

  payment_account_count_limit: Long;
  /**
   * Time duration threshold of forced settlement.
   * If dynamic balance is less than NetOutFlowRate * forcedSettleTime, the account can be forced settled.
   */

  forced_settle_time: Long;
  /** the maximum number of accounts that will be forced settled in one block */

  max_auto_force_settle_num: Long;
  /** The denom of fee charged in payment module */

  fee_denom: string;
}

function createBaseParams(): Params {
  return {
    reserve_time: Long.UZERO,
    payment_account_count_limit: Long.UZERO,
    forced_settle_time: Long.UZERO,
    max_auto_force_settle_num: Long.UZERO,
    fee_denom: ""
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.reserve_time.isZero()) {
      writer.uint32(8).uint64(message.reserve_time);
    }

    if (!message.payment_account_count_limit.isZero()) {
      writer.uint32(16).uint64(message.payment_account_count_limit);
    }

    if (!message.forced_settle_time.isZero()) {
      writer.uint32(24).uint64(message.forced_settle_time);
    }

    if (!message.max_auto_force_settle_num.isZero()) {
      writer.uint32(32).uint64(message.max_auto_force_settle_num);
    }

    if (message.fee_denom !== "") {
      writer.uint32(42).string(message.fee_denom);
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
          message.reserve_time = (reader.uint64() as Long);
          break;

        case 2:
          message.payment_account_count_limit = (reader.uint64() as Long);
          break;

        case 3:
          message.forced_settle_time = (reader.uint64() as Long);
          break;

        case 4:
          message.max_auto_force_settle_num = (reader.uint64() as Long);
          break;

        case 5:
          message.fee_denom = reader.string();
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
      reserve_time: isSet(object.reserve_time) ? Long.fromValue(object.reserve_time) : Long.UZERO,
      payment_account_count_limit: isSet(object.payment_account_count_limit) ? Long.fromValue(object.payment_account_count_limit) : Long.UZERO,
      forced_settle_time: isSet(object.forced_settle_time) ? Long.fromValue(object.forced_settle_time) : Long.UZERO,
      max_auto_force_settle_num: isSet(object.max_auto_force_settle_num) ? Long.fromValue(object.max_auto_force_settle_num) : Long.UZERO,
      fee_denom: isSet(object.fee_denom) ? String(object.fee_denom) : ""
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.reserve_time !== undefined && (obj.reserve_time = (message.reserve_time || Long.UZERO).toString());
    message.payment_account_count_limit !== undefined && (obj.payment_account_count_limit = (message.payment_account_count_limit || Long.UZERO).toString());
    message.forced_settle_time !== undefined && (obj.forced_settle_time = (message.forced_settle_time || Long.UZERO).toString());
    message.max_auto_force_settle_num !== undefined && (obj.max_auto_force_settle_num = (message.max_auto_force_settle_num || Long.UZERO).toString());
    message.fee_denom !== undefined && (obj.fee_denom = message.fee_denom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.reserve_time = object.reserve_time !== undefined && object.reserve_time !== null ? Long.fromValue(object.reserve_time) : Long.UZERO;
    message.payment_account_count_limit = object.payment_account_count_limit !== undefined && object.payment_account_count_limit !== null ? Long.fromValue(object.payment_account_count_limit) : Long.UZERO;
    message.forced_settle_time = object.forced_settle_time !== undefined && object.forced_settle_time !== null ? Long.fromValue(object.forced_settle_time) : Long.UZERO;
    message.max_auto_force_settle_num = object.max_auto_force_settle_num !== undefined && object.max_auto_force_settle_num !== null ? Long.fromValue(object.max_auto_force_settle_num) : Long.UZERO;
    message.fee_denom = object.fee_denom ?? "";
    return message;
  }

};