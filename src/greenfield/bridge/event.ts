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

  relayerFee?: Coin;
  /** Sequence of the corresponding cross chain package */

  sequence: Long;
}
/** EventCrossTransferOutRefund is emitted when a cross chain transfer out tx failed */

export interface EventCrossTransferOutRefund {
  /** Refund address of the failed cross chain transfer tx */
  refundAddress: string;
  /** Amount of the failed cross chain transfer tx */

  amount?: Coin;
  /** Refund reason of the failed cross chain transfer tx */

  refundReason: number;
  /** Sequence of the corresponding cross chain package */

  sequence: Long;
}
/** EventCrossTransferIn is emitted when a cross chain transfer in tx happened */

export interface EventCrossTransferIn {
  /** Amount of the cross chain transfer tx */
  amount?: Coin;
  /** Receiver of the cross chain transfer tx */

  receiverAddress: string;
  /** Refund of the cross chain transfer tx in BSC */

  refundAddress: string;
  /** Sequence of the corresponding cross chain package */

  sequence: Long;
}

function createBaseEventCrossTransferOut(): EventCrossTransferOut {
  return {
    from: "",
    to: "",
    amount: undefined,
    relayerFee: undefined,
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

    if (message.relayerFee !== undefined) {
      Coin.encode(message.relayerFee, writer.uint32(34).fork()).ldelim();
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
          message.relayerFee = Coin.decode(reader, reader.uint32());
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
      relayerFee: isSet(object.relayerFee) ? Coin.fromJSON(object.relayerFee) : undefined,
      sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO
    };
  },

  toJSON(message: EventCrossTransferOut): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.relayerFee !== undefined && (obj.relayerFee = message.relayerFee ? Coin.toJSON(message.relayerFee) : undefined);
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCrossTransferOut>, I>>(object: I): EventCrossTransferOut {
    const message = createBaseEventCrossTransferOut();
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.relayerFee = object.relayerFee !== undefined && object.relayerFee !== null ? Coin.fromPartial(object.relayerFee) : undefined;
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    return message;
  }

};

function createBaseEventCrossTransferOutRefund(): EventCrossTransferOutRefund {
  return {
    refundAddress: "",
    amount: undefined,
    refundReason: 0,
    sequence: Long.UZERO
  };
}

export const EventCrossTransferOutRefund = {
  encode(message: EventCrossTransferOutRefund, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.refundAddress !== "") {
      writer.uint32(10).string(message.refundAddress);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }

    if (message.refundReason !== 0) {
      writer.uint32(24).uint32(message.refundReason);
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
          message.refundAddress = reader.string();
          break;

        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        case 3:
          message.refundReason = reader.uint32();
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
      refundAddress: isSet(object.refundAddress) ? String(object.refundAddress) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      refundReason: isSet(object.refundReason) ? Number(object.refundReason) : 0,
      sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO
    };
  },

  toJSON(message: EventCrossTransferOutRefund): unknown {
    const obj: any = {};
    message.refundAddress !== undefined && (obj.refundAddress = message.refundAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.refundReason !== undefined && (obj.refundReason = Math.round(message.refundReason));
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCrossTransferOutRefund>, I>>(object: I): EventCrossTransferOutRefund {
    const message = createBaseEventCrossTransferOutRefund();
    message.refundAddress = object.refundAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.refundReason = object.refundReason ?? 0;
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    return message;
  }

};

function createBaseEventCrossTransferIn(): EventCrossTransferIn {
  return {
    amount: undefined,
    receiverAddress: "",
    refundAddress: "",
    sequence: Long.UZERO
  };
}

export const EventCrossTransferIn = {
  encode(message: EventCrossTransferIn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }

    if (message.receiverAddress !== "") {
      writer.uint32(18).string(message.receiverAddress);
    }

    if (message.refundAddress !== "") {
      writer.uint32(26).string(message.refundAddress);
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
          message.receiverAddress = reader.string();
          break;

        case 3:
          message.refundAddress = reader.string();
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
      receiverAddress: isSet(object.receiverAddress) ? String(object.receiverAddress) : "",
      refundAddress: isSet(object.refundAddress) ? String(object.refundAddress) : "",
      sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO
    };
  },

  toJSON(message: EventCrossTransferIn): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.receiverAddress !== undefined && (obj.receiverAddress = message.receiverAddress);
    message.refundAddress !== undefined && (obj.refundAddress = message.refundAddress);
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCrossTransferIn>, I>>(object: I): EventCrossTransferIn {
    const message = createBaseEventCrossTransferIn();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.receiverAddress = object.receiverAddress ?? "";
    message.refundAddress = object.refundAddress ?? "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    return message;
  }

};