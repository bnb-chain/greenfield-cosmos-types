//@ts-nocheck
/* eslint-disable */
import { Long, isSet, DeepPartial, Exact } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "greenfield.payment";
/** PaymentAccountCount defines the state struct which stores the number of payment accounts for an account */
export interface PaymentAccountCount {
  /** owner is the account address */
  owner: string;
  /** count is the number of payment accounts for the account */
  count: Long;
}
export interface PaymentAccountCountProtoMsg {
  typeUrl: "/greenfield.payment.PaymentAccountCount";
  value: Uint8Array;
}
/** PaymentAccountCount defines the state struct which stores the number of payment accounts for an account */
export interface PaymentAccountCountSDKType {
  owner: string;
  count: Long;
}
function createBasePaymentAccountCount(): PaymentAccountCount {
  return {
    owner: "",
    count: Long.UZERO
  };
}
export const PaymentAccountCount = {
  typeUrl: "/greenfield.payment.PaymentAccountCount",
  encode(message: PaymentAccountCount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (!message.count.isZero()) {
      writer.uint32(16).uint64(message.count);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PaymentAccountCount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePaymentAccountCount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.count = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PaymentAccountCount {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      count: isSet(object.count) ? Long.fromValue(object.count) : Long.UZERO
    };
  },
  toJSON(message: PaymentAccountCount): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.count !== undefined && (obj.count = (message.count || Long.UZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PaymentAccountCount>, I>>(object: I): PaymentAccountCount {
    const message = createBasePaymentAccountCount();
    message.owner = object.owner ?? "";
    message.count = object.count !== undefined && object.count !== null ? Long.fromValue(object.count) : Long.UZERO;
    return message;
  },
  fromSDK(object: PaymentAccountCountSDKType): PaymentAccountCount {
    return {
      owner: object?.owner,
      count: object?.count
    };
  },
  toSDK(message: PaymentAccountCount): PaymentAccountCountSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.count = message.count;
    return obj;
  },
  fromAmino(object: PaymentAccountCountAmino): PaymentAccountCount {
    const message = createBasePaymentAccountCount();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = Long.fromString(object.count);
    }
    return message;
  },
  toAmino(message: PaymentAccountCount): PaymentAccountCountAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.count = message.count ? message.count.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PaymentAccountCountAminoMsg): PaymentAccountCount {
    return PaymentAccountCount.fromAmino(object.value);
  },
  fromProtoMsg(message: PaymentAccountCountProtoMsg): PaymentAccountCount {
    return PaymentAccountCount.decode(message.value);
  },
  toProto(message: PaymentAccountCount): Uint8Array {
    return PaymentAccountCount.encode(message).finish();
  },
  toProtoMsg(message: PaymentAccountCount): PaymentAccountCountProtoMsg {
    return {
      typeUrl: "/greenfield.payment.PaymentAccountCount",
      value: PaymentAccountCount.encode(message).finish()
    };
  }
};