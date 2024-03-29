//@ts-nocheck
/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../helpers";
export const protobufPackage = "greenfield.payment";
/** PaymentAccount defines a payment account */
export interface PaymentAccount {
  /** the address of the payment account */
  addr: string;
  /** the owner address of the payment account */
  owner: string;
  /** whether the payment account is refundable */
  refundable: boolean;
}
export interface PaymentAccountProtoMsg {
  typeUrl: "/greenfield.payment.PaymentAccount";
  value: Uint8Array;
}
/** PaymentAccount defines a payment account */
export interface PaymentAccountAmino {
  /** the address of the payment account */
  addr?: string;
  /** the owner address of the payment account */
  owner?: string;
  /** whether the payment account is refundable */
  refundable?: boolean;
}
export interface PaymentAccountAminoMsg {
  type: "/greenfield.payment.PaymentAccount";
  value: PaymentAccountAmino;
}
/** PaymentAccount defines a payment account */
export interface PaymentAccountSDKType {
  addr: string;
  owner: string;
  refundable: boolean;
}
function createBasePaymentAccount(): PaymentAccount {
  return {
    addr: "",
    owner: "",
    refundable: false
  };
}
export const PaymentAccount = {
  typeUrl: "/greenfield.payment.PaymentAccount",
  encode(message: PaymentAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.addr !== "") {
      writer.uint32(10).string(message.addr);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.refundable === true) {
      writer.uint32(24).bool(message.refundable);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PaymentAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePaymentAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addr = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.refundable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PaymentAccount {
    return {
      addr: isSet(object.addr) ? String(object.addr) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      refundable: isSet(object.refundable) ? Boolean(object.refundable) : false
    };
  },
  toJSON(message: PaymentAccount): unknown {
    const obj: any = {};
    message.addr !== undefined && (obj.addr = message.addr);
    message.owner !== undefined && (obj.owner = message.owner);
    message.refundable !== undefined && (obj.refundable = message.refundable);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PaymentAccount>, I>>(object: I): PaymentAccount {
    const message = createBasePaymentAccount();
    message.addr = object.addr ?? "";
    message.owner = object.owner ?? "";
    message.refundable = object.refundable ?? false;
    return message;
  },
  fromSDK(object: PaymentAccountSDKType): PaymentAccount {
    return {
      addr: object?.addr,
      owner: object?.owner,
      refundable: object?.refundable
    };
  },
  toSDK(message: PaymentAccount): PaymentAccountSDKType {
    const obj: any = {};
    obj.addr = message.addr;
    obj.owner = message.owner;
    obj.refundable = message.refundable;
    return obj;
  },
  fromAmino(object: PaymentAccountAmino): PaymentAccount {
    const message = createBasePaymentAccount();
    if (object.addr !== undefined && object.addr !== null) {
      message.addr = object.addr;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.refundable !== undefined && object.refundable !== null) {
      message.refundable = object.refundable;
    }
    return message;
  },
  toAmino(message: PaymentAccount): PaymentAccountAmino {
    const obj: any = {};
    obj.addr = message.addr;
    obj.owner = message.owner;
    obj.refundable = message.refundable;
    return obj;
  },
  fromAminoMsg(object: PaymentAccountAminoMsg): PaymentAccount {
    return PaymentAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: PaymentAccountProtoMsg): PaymentAccount {
    return PaymentAccount.decode(message.value);
  },
  toProto(message: PaymentAccount): Uint8Array {
    return PaymentAccount.encode(message).finish();
  },
  toProtoMsg(message: PaymentAccount): PaymentAccountProtoMsg {
    return {
      typeUrl: "/greenfield.payment.PaymentAccount",
      value: PaymentAccount.encode(message).finish()
    };
  }
};