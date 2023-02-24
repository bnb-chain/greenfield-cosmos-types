/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../helpers";
export const protobufPackage = "bnbchain.greenfield.sp";
/** Params defines the parameters for the module. */

export interface Params {
  /** max_storage_providers is the maximum number of validators. */
  maxStorageProviders: number;
  /** deposit_denom defines the staking coin denomination. */

  depositDenom: string;
  /** min_deposit_amount defines the minimum deposit amount for storage providers. */

  minDeposit: string;
}

function createBaseParams(): Params {
  return {
    maxStorageProviders: 0,
    depositDenom: "",
    minDeposit: ""
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxStorageProviders !== 0) {
      writer.uint32(8).uint32(message.maxStorageProviders);
    }

    if (message.depositDenom !== "") {
      writer.uint32(18).string(message.depositDenom);
    }

    if (message.minDeposit !== "") {
      writer.uint32(26).string(message.minDeposit);
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
          message.maxStorageProviders = reader.uint32();
          break;

        case 2:
          message.depositDenom = reader.string();
          break;

        case 3:
          message.minDeposit = reader.string();
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
      maxStorageProviders: isSet(object.maxStorageProviders) ? Number(object.maxStorageProviders) : 0,
      depositDenom: isSet(object.depositDenom) ? String(object.depositDenom) : "",
      minDeposit: isSet(object.minDeposit) ? String(object.minDeposit) : ""
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.maxStorageProviders !== undefined && (obj.maxStorageProviders = Math.round(message.maxStorageProviders));
    message.depositDenom !== undefined && (obj.depositDenom = message.depositDenom);
    message.minDeposit !== undefined && (obj.minDeposit = message.minDeposit);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.maxStorageProviders = object.maxStorageProviders ?? 0;
    message.depositDenom = object.depositDenom ?? "";
    message.minDeposit = object.minDeposit ?? "";
    return message;
  }

};