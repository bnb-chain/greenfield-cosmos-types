/* eslint-disable */
import { Coin } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../helpers";
export const protobufPackage = "bnbchain.greenfield.sp";
/**
 * DepositAuthorization defines authorization for sp deposit.
 * 
 * Since: cosmos-sdk 0.43
 */

export interface DepositAuthorization {
  /**
   * max_deposit specifies the maximum amount of tokens can be deposit to a storage provider. If it is
   * empty, there is no spend limit and any amount of coins can be deposit.
   */
  maxDeposit?: Coin;
  /** sp_address is the operator address of storage provider. */

  spAddress: string;
}

function createBaseDepositAuthorization(): DepositAuthorization {
  return {
    maxDeposit: undefined,
    spAddress: ""
  };
}

export const DepositAuthorization = {
  encode(message: DepositAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxDeposit !== undefined) {
      Coin.encode(message.maxDeposit, writer.uint32(10).fork()).ldelim();
    }

    if (message.spAddress !== "") {
      writer.uint32(18).string(message.spAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DepositAuthorization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositAuthorization();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.maxDeposit = Coin.decode(reader, reader.uint32());
          break;

        case 2:
          message.spAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DepositAuthorization {
    return {
      maxDeposit: isSet(object.maxDeposit) ? Coin.fromJSON(object.maxDeposit) : undefined,
      spAddress: isSet(object.spAddress) ? String(object.spAddress) : ""
    };
  },

  toJSON(message: DepositAuthorization): unknown {
    const obj: any = {};
    message.maxDeposit !== undefined && (obj.maxDeposit = message.maxDeposit ? Coin.toJSON(message.maxDeposit) : undefined);
    message.spAddress !== undefined && (obj.spAddress = message.spAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DepositAuthorization>, I>>(object: I): DepositAuthorization {
    const message = createBaseDepositAuthorization();
    message.maxDeposit = object.maxDeposit !== undefined && object.maxDeposit !== null ? Coin.fromPartial(object.maxDeposit) : undefined;
    message.spAddress = object.spAddress ?? "";
    return message;
  }

};