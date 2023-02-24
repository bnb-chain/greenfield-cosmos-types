/* eslint-disable */
import { Long, isSet, DeepPartial, Exact } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "bnbchain.greenfield.payment";
/** EventCreatePaymentAccount is emitted on MsgCreatePaymentAccount */

export interface EventCreatePaymentAccount {
  /** address of the payment account */
  addr: string;
  /** owner address of the payment account */

  owner: string;
  /** index of the payment account of the owner */

  index: Long;
}
/**
 * EventForceSettle may be emitted on all Msgs and EndBlocker when a payment account's
 * balance or net outflow rate is changed
 */

export interface EventForceSettle {
  /** address of the payment account */
  addr: string;
  /**
   * left balance of the payment account after force settlement
   * if the balance is positive, it will go to the governance stream account
   * if the balance is negative, it's the debt of the system, which will be paid by the governance stream account
   */

  settledBalance: string;
}

function createBaseEventCreatePaymentAccount(): EventCreatePaymentAccount {
  return {
    addr: "",
    owner: "",
    index: Long.UZERO
  };
}

export const EventCreatePaymentAccount = {
  encode(message: EventCreatePaymentAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.addr !== "") {
      writer.uint32(10).string(message.addr);
    }

    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }

    if (!message.index.isZero()) {
      writer.uint32(24).uint64(message.index);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreatePaymentAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreatePaymentAccount();

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
          message.index = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventCreatePaymentAccount {
    return {
      addr: isSet(object.addr) ? String(object.addr) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      index: isSet(object.index) ? Long.fromValue(object.index) : Long.UZERO
    };
  },

  toJSON(message: EventCreatePaymentAccount): unknown {
    const obj: any = {};
    message.addr !== undefined && (obj.addr = message.addr);
    message.owner !== undefined && (obj.owner = message.owner);
    message.index !== undefined && (obj.index = (message.index || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCreatePaymentAccount>, I>>(object: I): EventCreatePaymentAccount {
    const message = createBaseEventCreatePaymentAccount();
    message.addr = object.addr ?? "";
    message.owner = object.owner ?? "";
    message.index = object.index !== undefined && object.index !== null ? Long.fromValue(object.index) : Long.UZERO;
    return message;
  }

};

function createBaseEventForceSettle(): EventForceSettle {
  return {
    addr: "",
    settledBalance: ""
  };
}

export const EventForceSettle = {
  encode(message: EventForceSettle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.addr !== "") {
      writer.uint32(10).string(message.addr);
    }

    if (message.settledBalance !== "") {
      writer.uint32(18).string(message.settledBalance);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventForceSettle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventForceSettle();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.addr = reader.string();
          break;

        case 2:
          message.settledBalance = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventForceSettle {
    return {
      addr: isSet(object.addr) ? String(object.addr) : "",
      settledBalance: isSet(object.settledBalance) ? String(object.settledBalance) : ""
    };
  },

  toJSON(message: EventForceSettle): unknown {
    const obj: any = {};
    message.addr !== undefined && (obj.addr = message.addr);
    message.settledBalance !== undefined && (obj.settledBalance = message.settledBalance);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventForceSettle>, I>>(object: I): EventForceSettle {
    const message = createBaseEventForceSettle();
    message.addr = object.addr ?? "";
    message.settledBalance = object.settledBalance ?? "";
    return message;
  }

};