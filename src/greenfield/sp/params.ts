/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../helpers";
export const protobufPackage = "bnbchain.greenfield.sp";
/** Params defines the parameters for the module. */

export interface Params {
  /** deposit_denom defines the staking coin denomination. */
  deposit_denom: string;
  /** min_deposit_amount defines the minimum deposit amount for storage providers. */

  min_deposit: string;
}

function createBaseParams(): Params {
  return {
    deposit_denom: "",
    min_deposit: ""
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deposit_denom !== "") {
      writer.uint32(10).string(message.deposit_denom);
    }

    if (message.min_deposit !== "") {
      writer.uint32(18).string(message.min_deposit);
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
          message.deposit_denom = reader.string();
          break;

        case 2:
          message.min_deposit = reader.string();
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
      deposit_denom: isSet(object.deposit_denom) ? String(object.deposit_denom) : "",
      min_deposit: isSet(object.min_deposit) ? String(object.min_deposit) : ""
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.deposit_denom !== undefined && (obj.deposit_denom = message.deposit_denom);
    message.min_deposit !== undefined && (obj.min_deposit = message.min_deposit);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.deposit_denom = object.deposit_denom ?? "";
    message.min_deposit = object.min_deposit ?? "";
    return message;
  }

};