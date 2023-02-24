/* eslint-disable */
import { Long, isSet, DeepPartial, Exact } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "bnbchain.greenfield.payment";
/** BNBPrice is the price of BNB in USD at a given time */

export interface BnbPrice {
  /** time is the submit time of the price */
  time: Long;
  /**
   * price is the price of BNB in USD.
   * It is multiplied by 10^8.
   * For example, if the price is 278.34 USD, the price is 27834000000.
   */

  price: Long;
}

function createBaseBnbPrice(): BnbPrice {
  return {
    time: Long.ZERO,
    price: Long.UZERO
  };
}

export const BnbPrice = {
  encode(message: BnbPrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.time.isZero()) {
      writer.uint32(8).int64(message.time);
    }

    if (!message.price.isZero()) {
      writer.uint32(16).uint64(message.price);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BnbPrice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBnbPrice();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.time = (reader.int64() as Long);
          break;

        case 2:
          message.price = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BnbPrice {
    return {
      time: isSet(object.time) ? Long.fromValue(object.time) : Long.ZERO,
      price: isSet(object.price) ? Long.fromValue(object.price) : Long.UZERO
    };
  },

  toJSON(message: BnbPrice): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = (message.time || Long.ZERO).toString());
    message.price !== undefined && (obj.price = (message.price || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BnbPrice>, I>>(object: I): BnbPrice {
    const message = createBaseBnbPrice();
    message.time = object.time !== undefined && object.time !== null ? Long.fromValue(object.time) : Long.ZERO;
    message.price = object.price !== undefined && object.price !== null ? Long.fromValue(object.price) : Long.UZERO;
    return message;
  }

};