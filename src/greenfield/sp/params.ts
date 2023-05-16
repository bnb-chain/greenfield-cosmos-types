/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../helpers";
export const protobufPackage = "greenfield.sp";
/** Params defines the parameters for the module. */

export interface Params {
  /** deposit_denom defines the staking coin denomination. */
  depositDenom: string;
  /** min_deposit defines the minimum deposit amount for storage providers. */

  minDeposit: string;
  /** the ratio of the store price of the secondary sp to the primary sp, the default value is 80% */

  secondarySpStorePriceRatio: string;
}
/** Params defines the parameters for the module. */

export interface ParamsSDKType {
  deposit_denom: string;
  min_deposit: string;
  secondary_sp_store_price_ratio: string;
}

function createBaseParams(): Params {
  return {
    depositDenom: "",
    minDeposit: "",
    secondarySpStorePriceRatio: ""
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositDenom !== "") {
      writer.uint32(10).string(message.depositDenom);
    }

    if (message.minDeposit !== "") {
      writer.uint32(18).string(message.minDeposit);
    }

    if (message.secondarySpStorePriceRatio !== "") {
      writer.uint32(26).string(message.secondarySpStorePriceRatio);
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
          message.depositDenom = reader.string();
          break;

        case 2:
          message.minDeposit = reader.string();
          break;

        case 3:
          message.secondarySpStorePriceRatio = reader.string();
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
      depositDenom: isSet(object.depositDenom) ? String(object.depositDenom) : "",
      minDeposit: isSet(object.minDeposit) ? String(object.minDeposit) : "",
      secondarySpStorePriceRatio: isSet(object.secondarySpStorePriceRatio) ? String(object.secondarySpStorePriceRatio) : ""
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.depositDenom !== undefined && (obj.depositDenom = message.depositDenom);
    message.minDeposit !== undefined && (obj.minDeposit = message.minDeposit);
    message.secondarySpStorePriceRatio !== undefined && (obj.secondarySpStorePriceRatio = message.secondarySpStorePriceRatio);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.depositDenom = object.depositDenom ?? "";
    message.minDeposit = object.minDeposit ?? "";
    message.secondarySpStorePriceRatio = object.secondarySpStorePriceRatio ?? "";
    return message;
  },

  fromSDK(object: ParamsSDKType): Params {
    return {
      depositDenom: object?.deposit_denom,
      minDeposit: object?.min_deposit,
      secondarySpStorePriceRatio: object?.secondary_sp_store_price_ratio
    };
  },

  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.deposit_denom = message.depositDenom;
    obj.min_deposit = message.minDeposit;
    obj.secondary_sp_store_price_ratio = message.secondarySpStorePriceRatio;
    return obj;
  }

};