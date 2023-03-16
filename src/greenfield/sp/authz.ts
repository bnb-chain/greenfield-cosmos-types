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
  max_deposit?: Coin;
  /** sp_address is the operator address of storage provider. */

  sp_address: string;
}

function createBaseDepositAuthorization(): DepositAuthorization {
  return {
    max_deposit: undefined,
    sp_address: ""
  };
}

export const DepositAuthorization = {
  encode(message: DepositAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.max_deposit !== undefined) {
      Coin.encode(message.max_deposit, writer.uint32(10).fork()).ldelim();
    }

    if (message.sp_address !== "") {
      writer.uint32(18).string(message.sp_address);
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
          message.max_deposit = Coin.decode(reader, reader.uint32());
          break;

        case 2:
          message.sp_address = reader.string();
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
      max_deposit: isSet(object.max_deposit) ? Coin.fromJSON(object.max_deposit) : undefined,
      sp_address: isSet(object.sp_address) ? String(object.sp_address) : ""
    };
  },

  toJSON(message: DepositAuthorization): unknown {
    const obj: any = {};
    message.max_deposit !== undefined && (obj.max_deposit = message.max_deposit ? Coin.toJSON(message.max_deposit) : undefined);
    message.sp_address !== undefined && (obj.sp_address = message.sp_address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DepositAuthorization>, I>>(object: I): DepositAuthorization {
    const message = createBaseDepositAuthorization();
    message.max_deposit = object.max_deposit !== undefined && object.max_deposit !== null ? Coin.fromPartial(object.max_deposit) : undefined;
    message.sp_address = object.sp_address ?? "";
    return message;
  }

};