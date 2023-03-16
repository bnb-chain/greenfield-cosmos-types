/* eslint-disable */
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Long, isSet, DeepPartial, Exact } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "bnbchain.greenfield.bridge";
/** EventCrossTransferOut is emitted when a cross chain transfer out tx created */

export interface EventCrossTransferOut {
  /** From addres of the cross chain transfer tx */
  from: string;
  /** To addres of the cross chain transfer tx */

  to: string;
  /** Amount of the cross chain transfer tx */

  amount?: Coin;
  /** Relayer fee of the cross chain transfer tx */

  relayer_fee?: Coin;
  /** Sequence of the corresponding cross chain package */

  sequence: Long;
}
/** EventCrossTransferOutRefund is emitted when a cross chain transfer out tx failed */

export interface EventCrossTransferOutRefund {
  /** Refund address of the failed cross chain transfer tx */
  refund_address: string;
  /** Amount of the failed cross chain transfer tx */

  amount?: Coin;
  /** Refund reason of the failed cross chain transfer tx */

  refund_reason: number;
  /** Sequence of the corresponding cross chain package */

  sequence: Long;
}
/** EventCrossTransferIn is emitted when a cross chain transfer in tx happened */

export interface EventCrossTransferIn {
  /** Amount of the cross chain transfer tx */
  amount?: Coin;
  /** Receiver of the cross chain transfer tx */

  receiver_address: string;
  /** Refund of the cross chain transfer tx in BSC */

  refund_address: string;
  /** Sequence of the corresponding cross chain package */

  sequence: Long;
}

function createBaseEventCrossTransferOut(): EventCrossTransferOut {
  return {
    from: "",
    to: "",
    amount: undefined,
    relayer_fee: undefined,
    sequence: Long.UZERO
  };
}

export const EventCrossTransferOut = {
  encode(message: EventCrossTransferOut, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }

    if (message.relayer_fee !== undefined) {
      Coin.encode(message.relayer_fee, writer.uint32(34).fork()).ldelim();
    }

    if (!message.sequence.isZero()) {
      writer.uint32(40).uint64(message.sequence);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCrossTransferOut {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCrossTransferOut();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;

        case 2:
          message.to = reader.string();
          break;

        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        case 4:
          message.relayer_fee = Coin.decode(reader, reader.uint32());
          break;

        case 5:
          message.sequence = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventCrossTransferOut {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      relayer_fee: isSet(object.relayer_fee) ? Coin.fromJSON(object.relayer_fee) : undefined,
      sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO
    };
  },

  toJSON(message: EventCrossTransferOut): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.relayer_fee !== undefined && (obj.relayer_fee = message.relayer_fee ? Coin.toJSON(message.relayer_fee) : undefined);
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCrossTransferOut>, I>>(object: I): EventCrossTransferOut {
    const message = createBaseEventCrossTransferOut();
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.relayer_fee = object.relayer_fee !== undefined && object.relayer_fee !== null ? Coin.fromPartial(object.relayer_fee) : undefined;
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    return message;
  }

};

function createBaseEventCrossTransferOutRefund(): EventCrossTransferOutRefund {
  return {
    refund_address: "",
    amount: undefined,
    refund_reason: 0,
    sequence: Long.UZERO
  };
}

export const EventCrossTransferOutRefund = {
  encode(message: EventCrossTransferOutRefund, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.refund_address !== "") {
      writer.uint32(10).string(message.refund_address);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }

    if (message.refund_reason !== 0) {
      writer.uint32(24).uint32(message.refund_reason);
    }

    if (!message.sequence.isZero()) {
      writer.uint32(32).uint64(message.sequence);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCrossTransferOutRefund {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCrossTransferOutRefund();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.refund_address = reader.string();
          break;

        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        case 3:
          message.refund_reason = reader.uint32();
          break;

        case 4:
          message.sequence = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventCrossTransferOutRefund {
    return {
      refund_address: isSet(object.refund_address) ? String(object.refund_address) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      refund_reason: isSet(object.refund_reason) ? Number(object.refund_reason) : 0,
      sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO
    };
  },

  toJSON(message: EventCrossTransferOutRefund): unknown {
    const obj: any = {};
    message.refund_address !== undefined && (obj.refund_address = message.refund_address);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.refund_reason !== undefined && (obj.refund_reason = Math.round(message.refund_reason));
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCrossTransferOutRefund>, I>>(object: I): EventCrossTransferOutRefund {
    const message = createBaseEventCrossTransferOutRefund();
    message.refund_address = object.refund_address ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.refund_reason = object.refund_reason ?? 0;
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    return message;
  }

};

function createBaseEventCrossTransferIn(): EventCrossTransferIn {
  return {
    amount: undefined,
    receiver_address: "",
    refund_address: "",
    sequence: Long.UZERO
  };
}

export const EventCrossTransferIn = {
  encode(message: EventCrossTransferIn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }

    if (message.receiver_address !== "") {
      writer.uint32(18).string(message.receiver_address);
    }

    if (message.refund_address !== "") {
      writer.uint32(26).string(message.refund_address);
    }

    if (!message.sequence.isZero()) {
      writer.uint32(32).uint64(message.sequence);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCrossTransferIn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCrossTransferIn();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        case 2:
          message.receiver_address = reader.string();
          break;

        case 3:
          message.refund_address = reader.string();
          break;

        case 4:
          message.sequence = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventCrossTransferIn {
    return {
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      receiver_address: isSet(object.receiver_address) ? String(object.receiver_address) : "",
      refund_address: isSet(object.refund_address) ? String(object.refund_address) : "",
      sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO
    };
  },

  toJSON(message: EventCrossTransferIn): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.receiver_address !== undefined && (obj.receiver_address = message.receiver_address);
    message.refund_address !== undefined && (obj.refund_address = message.refund_address);
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCrossTransferIn>, I>>(object: I): EventCrossTransferIn {
    const message = createBaseEventCrossTransferIn();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.receiver_address = object.receiver_address ?? "";
    message.refund_address = object.refund_address ?? "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    return message;
  }

};