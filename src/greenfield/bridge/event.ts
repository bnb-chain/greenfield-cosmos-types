//@ts-nocheck
/* eslint-disable */
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Long, isSet, DeepPartial, Exact } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "greenfield.bridge";
export enum RefundReason {
  REFUND_REASON_UNKNOWN = 0,
  REFUND_REASON_INSUFFICIENT_BALANCE = 1,
  REFUND_REASON_FAIL_ACK = 2,
  UNRECOGNIZED = -1,
}
export const RefundReasonSDKType = RefundReason;
export const RefundReasonAmino = RefundReason;
export function refundReasonFromJSON(object: any): RefundReason {
  switch (object) {
    case 0:
    case "REFUND_REASON_UNKNOWN":
      return RefundReason.REFUND_REASON_UNKNOWN;
    case 1:
    case "REFUND_REASON_INSUFFICIENT_BALANCE":
      return RefundReason.REFUND_REASON_INSUFFICIENT_BALANCE;
    case 2:
    case "REFUND_REASON_FAIL_ACK":
      return RefundReason.REFUND_REASON_FAIL_ACK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RefundReason.UNRECOGNIZED;
  }
}
export function refundReasonToJSON(object: RefundReason): string {
  switch (object) {
    case RefundReason.REFUND_REASON_UNKNOWN:
      return "REFUND_REASON_UNKNOWN";
    case RefundReason.REFUND_REASON_INSUFFICIENT_BALANCE:
      return "REFUND_REASON_INSUFFICIENT_BALANCE";
    case RefundReason.REFUND_REASON_FAIL_ACK:
      return "REFUND_REASON_FAIL_ACK";
    case RefundReason.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
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
  /** Destination chain id of the cross chain transfer tx */
  destChainId: number;
}
export interface EventCrossTransferOutProtoMsg {
  typeUrl: "/greenfield.bridge.EventCrossTransferOut";
  value: Uint8Array;
}
/** EventCrossTransferOut is emitted when a cross chain transfer out tx created */
export interface EventCrossTransferOutAmino {
  /** From addres of the cross chain transfer tx */
  from?: string;
  /** To addres of the cross chain transfer tx */
  to?: string;
  /** Amount of the cross chain transfer tx */
  amount?: CoinAmino;
  /** Relayer fee of the cross chain transfer tx */
  relayer_fee?: CoinAmino;
  /** Sequence of the corresponding cross chain package */
  sequence?: string;
  /** Destination chain id of the cross chain transfer tx */
  dest_chain_id?: number;
}
export interface EventCrossTransferOutAminoMsg {
  type: "/greenfield.bridge.EventCrossTransferOut";
  value: EventCrossTransferOutAmino;
}
/** EventCrossTransferOut is emitted when a cross chain transfer out tx created */
export interface EventCrossTransferOutSDKType {
  from: string;
  to: string;
  amount?: CoinSDKType;
  relayer_fee?: CoinSDKType;
  sequence: Long;
  dest_chain_id: number;
}
/** EventCrossTransferOutRefund is emitted when a cross chain transfer out tx failed */
export interface EventCrossTransferOutRefund {
  /** Refund address of the failed cross chain transfer tx */
  refundAddress: string;
  /** Amount of the failed cross chain transfer tx */
  amount?: Coin;
  /** Refund reason of the failed cross chain transfer tx */
  refundReason: RefundReason;
  /** Sequence of the corresponding cross chain package */
  sequence: Long;
  /** Destination chain id of the cross chain transfer tx */
  destChainId: number;
}
export interface EventCrossTransferOutRefundProtoMsg {
  typeUrl: "/greenfield.bridge.EventCrossTransferOutRefund";
  value: Uint8Array;
}
/** EventCrossTransferOutRefund is emitted when a cross chain transfer out tx failed */
export interface EventCrossTransferOutRefundAmino {
  /** Refund address of the failed cross chain transfer tx */
  refund_address?: string;
  /** Amount of the failed cross chain transfer tx */
  amount?: CoinAmino;
  /** Refund reason of the failed cross chain transfer tx */
  refund_reason?: RefundReason;
  /** Sequence of the corresponding cross chain package */
  sequence?: string;
  /** Destination chain id of the cross chain transfer tx */
  dest_chain_id?: number;
}
export interface EventCrossTransferOutRefundAminoMsg {
  type: "/greenfield.bridge.EventCrossTransferOutRefund";
  value: EventCrossTransferOutRefundAmino;
}
/** EventCrossTransferOutRefund is emitted when a cross chain transfer out tx failed */
export interface EventCrossTransferOutRefundSDKType {
  refund_address: string;
  amount?: CoinSDKType;
  refund_reason: RefundReason;
  sequence: Long;
  dest_chain_id: number;
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
  /** Source chain id of the cross chain transfer tx */
  srcChainId: number;
}
export interface EventCrossTransferInProtoMsg {
  typeUrl: "/greenfield.bridge.EventCrossTransferIn";
  value: Uint8Array;
}
/** EventCrossTransferIn is emitted when a cross chain transfer in tx happened */
export interface EventCrossTransferInAmino {
  /** Amount of the cross chain transfer tx */
  amount?: CoinAmino;
  /** Receiver of the cross chain transfer tx */
  receiver_address?: string;
  /** Refund of the cross chain transfer tx in BSC */
  refund_address?: string;
  /** Sequence of the corresponding cross chain package */
  sequence?: string;
  /** Source chain id of the cross chain transfer tx */
  src_chain_id?: number;
}
export interface EventCrossTransferInAminoMsg {
  type: "/greenfield.bridge.EventCrossTransferIn";
  value: EventCrossTransferInAmino;
}
/** EventCrossTransferIn is emitted when a cross chain transfer in tx happened */
export interface EventCrossTransferInSDKType {
  amount?: CoinSDKType;
  receiver_address: string;
  refund_address: string;
  sequence: Long;
  src_chain_id: number;
}
function createBaseEventCrossTransferOut(): EventCrossTransferOut {
  return {
    from: "",
    to: "",
    amount: undefined,
    relayerFee: undefined,
    sequence: Long.UZERO,
    destChainId: 0
  };
}
export const EventCrossTransferOut = {
  typeUrl: "/greenfield.bridge.EventCrossTransferOut",
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
    if (message.destChainId !== 0) {
      writer.uint32(48).uint32(message.destChainId);
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
        case 6:
          message.destChainId = reader.uint32();
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
      sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO,
      destChainId: isSet(object.destChainId) ? Number(object.destChainId) : 0
    };
  },
  toJSON(message: EventCrossTransferOut): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.relayerFee !== undefined && (obj.relayerFee = message.relayerFee ? Coin.toJSON(message.relayerFee) : undefined);
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    message.destChainId !== undefined && (obj.destChainId = Math.round(message.destChainId));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventCrossTransferOut>, I>>(object: I): EventCrossTransferOut {
    const message = createBaseEventCrossTransferOut();
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.relayerFee = object.relayerFee !== undefined && object.relayerFee !== null ? Coin.fromPartial(object.relayerFee) : undefined;
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    message.destChainId = object.destChainId ?? 0;
    return message;
  },
  fromSDK(object: EventCrossTransferOutSDKType): EventCrossTransferOut {
    return {
      from: object?.from,
      to: object?.to,
      amount: object.amount ? Coin.fromSDK(object.amount) : undefined,
      relayerFee: object.relayer_fee ? Coin.fromSDK(object.relayer_fee) : undefined,
      sequence: object?.sequence,
      destChainId: object?.dest_chain_id
    };
  },
  toSDK(message: EventCrossTransferOut): EventCrossTransferOutSDKType {
    const obj: any = {};
    obj.from = message.from;
    obj.to = message.to;
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toSDK(message.amount) : undefined);
    message.relayerFee !== undefined && (obj.relayer_fee = message.relayerFee ? Coin.toSDK(message.relayerFee) : undefined);
    obj.sequence = message.sequence;
    obj.dest_chain_id = message.destChainId;
    return obj;
  },
  fromAmino(object: EventCrossTransferOutAmino): EventCrossTransferOut {
    const message = createBaseEventCrossTransferOut();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.relayer_fee !== undefined && object.relayer_fee !== null) {
      message.relayerFee = Coin.fromAmino(object.relayer_fee);
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = Long.fromString(object.sequence);
    }
    if (object.dest_chain_id !== undefined && object.dest_chain_id !== null) {
      message.destChainId = object.dest_chain_id;
    }
    return message;
  },
  toAmino(message: EventCrossTransferOut): EventCrossTransferOutAmino {
    const obj: any = {};
    obj.from = message.from;
    obj.to = message.to;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.relayer_fee = message.relayerFee ? Coin.toAmino(message.relayerFee) : undefined;
    obj.sequence = message.sequence ? message.sequence.toString() : undefined;
    obj.dest_chain_id = message.destChainId;
    return obj;
  },
  fromAminoMsg(object: EventCrossTransferOutAminoMsg): EventCrossTransferOut {
    return EventCrossTransferOut.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCrossTransferOutProtoMsg): EventCrossTransferOut {
    return EventCrossTransferOut.decode(message.value);
  },
  toProto(message: EventCrossTransferOut): Uint8Array {
    return EventCrossTransferOut.encode(message).finish();
  },
  toProtoMsg(message: EventCrossTransferOut): EventCrossTransferOutProtoMsg {
    return {
      typeUrl: "/greenfield.bridge.EventCrossTransferOut",
      value: EventCrossTransferOut.encode(message).finish()
    };
  }
};
function createBaseEventCrossTransferOutRefund(): EventCrossTransferOutRefund {
  return {
    refundAddress: "",
    amount: undefined,
    refundReason: 0,
    sequence: Long.UZERO,
    destChainId: 0
  };
}
export const EventCrossTransferOutRefund = {
  typeUrl: "/greenfield.bridge.EventCrossTransferOutRefund",
  encode(message: EventCrossTransferOutRefund, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.refundAddress !== "") {
      writer.uint32(10).string(message.refundAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.refundReason !== 0) {
      writer.uint32(24).int32(message.refundReason);
    }
    if (!message.sequence.isZero()) {
      writer.uint32(32).uint64(message.sequence);
    }
    if (message.destChainId !== 0) {
      writer.uint32(40).uint32(message.destChainId);
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
          message.refundReason = (reader.int32() as any);
          break;
        case 4:
          message.sequence = (reader.uint64() as Long);
          break;
        case 5:
          message.destChainId = reader.uint32();
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
      refundReason: isSet(object.refundReason) ? refundReasonFromJSON(object.refundReason) : -1,
      sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO,
      destChainId: isSet(object.destChainId) ? Number(object.destChainId) : 0
    };
  },
  toJSON(message: EventCrossTransferOutRefund): unknown {
    const obj: any = {};
    message.refundAddress !== undefined && (obj.refundAddress = message.refundAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.refundReason !== undefined && (obj.refundReason = refundReasonToJSON(message.refundReason));
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    message.destChainId !== undefined && (obj.destChainId = Math.round(message.destChainId));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventCrossTransferOutRefund>, I>>(object: I): EventCrossTransferOutRefund {
    const message = createBaseEventCrossTransferOutRefund();
    message.refundAddress = object.refundAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.refundReason = object.refundReason ?? 0;
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    message.destChainId = object.destChainId ?? 0;
    return message;
  },
  fromSDK(object: EventCrossTransferOutRefundSDKType): EventCrossTransferOutRefund {
    return {
      refundAddress: object?.refund_address,
      amount: object.amount ? Coin.fromSDK(object.amount) : undefined,
      refundReason: isSet(object.refund_reason) ? refundReasonFromJSON(object.refund_reason) : -1,
      sequence: object?.sequence,
      destChainId: object?.dest_chain_id
    };
  },
  toSDK(message: EventCrossTransferOutRefund): EventCrossTransferOutRefundSDKType {
    const obj: any = {};
    obj.refund_address = message.refundAddress;
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toSDK(message.amount) : undefined);
    message.refundReason !== undefined && (obj.refund_reason = refundReasonToJSON(message.refundReason));
    obj.sequence = message.sequence;
    obj.dest_chain_id = message.destChainId;
    return obj;
  },
  fromAmino(object: EventCrossTransferOutRefundAmino): EventCrossTransferOutRefund {
    const message = createBaseEventCrossTransferOutRefund();
    if (object.refund_address !== undefined && object.refund_address !== null) {
      message.refundAddress = object.refund_address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.refund_reason !== undefined && object.refund_reason !== null) {
      message.refundReason = refundReasonFromJSON(object.refund_reason);
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = Long.fromString(object.sequence);
    }
    if (object.dest_chain_id !== undefined && object.dest_chain_id !== null) {
      message.destChainId = object.dest_chain_id;
    }
    return message;
  },
  toAmino(message: EventCrossTransferOutRefund): EventCrossTransferOutRefundAmino {
    const obj: any = {};
    obj.refund_address = message.refundAddress;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.refund_reason = refundReasonToJSON(message.refundReason);
    obj.sequence = message.sequence ? message.sequence.toString() : undefined;
    obj.dest_chain_id = message.destChainId;
    return obj;
  },
  fromAminoMsg(object: EventCrossTransferOutRefundAminoMsg): EventCrossTransferOutRefund {
    return EventCrossTransferOutRefund.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCrossTransferOutRefundProtoMsg): EventCrossTransferOutRefund {
    return EventCrossTransferOutRefund.decode(message.value);
  },
  toProto(message: EventCrossTransferOutRefund): Uint8Array {
    return EventCrossTransferOutRefund.encode(message).finish();
  },
  toProtoMsg(message: EventCrossTransferOutRefund): EventCrossTransferOutRefundProtoMsg {
    return {
      typeUrl: "/greenfield.bridge.EventCrossTransferOutRefund",
      value: EventCrossTransferOutRefund.encode(message).finish()
    };
  }
};
function createBaseEventCrossTransferIn(): EventCrossTransferIn {
  return {
    amount: undefined,
    receiverAddress: "",
    refundAddress: "",
    sequence: Long.UZERO,
    srcChainId: 0
  };
}
export const EventCrossTransferIn = {
  typeUrl: "/greenfield.bridge.EventCrossTransferIn",
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
    if (message.srcChainId !== 0) {
      writer.uint32(40).uint32(message.srcChainId);
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
        case 5:
          message.srcChainId = reader.uint32();
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
      sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO,
      srcChainId: isSet(object.srcChainId) ? Number(object.srcChainId) : 0
    };
  },
  toJSON(message: EventCrossTransferIn): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.receiverAddress !== undefined && (obj.receiverAddress = message.receiverAddress);
    message.refundAddress !== undefined && (obj.refundAddress = message.refundAddress);
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    message.srcChainId !== undefined && (obj.srcChainId = Math.round(message.srcChainId));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventCrossTransferIn>, I>>(object: I): EventCrossTransferIn {
    const message = createBaseEventCrossTransferIn();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.receiverAddress = object.receiverAddress ?? "";
    message.refundAddress = object.refundAddress ?? "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    message.srcChainId = object.srcChainId ?? 0;
    return message;
  },
  fromSDK(object: EventCrossTransferInSDKType): EventCrossTransferIn {
    return {
      amount: object.amount ? Coin.fromSDK(object.amount) : undefined,
      receiverAddress: object?.receiver_address,
      refundAddress: object?.refund_address,
      sequence: object?.sequence,
      srcChainId: object?.src_chain_id
    };
  },
  toSDK(message: EventCrossTransferIn): EventCrossTransferInSDKType {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toSDK(message.amount) : undefined);
    obj.receiver_address = message.receiverAddress;
    obj.refund_address = message.refundAddress;
    obj.sequence = message.sequence;
    obj.src_chain_id = message.srcChainId;
    return obj;
  },
  fromAmino(object: EventCrossTransferInAmino): EventCrossTransferIn {
    const message = createBaseEventCrossTransferIn();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.receiver_address !== undefined && object.receiver_address !== null) {
      message.receiverAddress = object.receiver_address;
    }
    if (object.refund_address !== undefined && object.refund_address !== null) {
      message.refundAddress = object.refund_address;
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = Long.fromString(object.sequence);
    }
    if (object.src_chain_id !== undefined && object.src_chain_id !== null) {
      message.srcChainId = object.src_chain_id;
    }
    return message;
  },
  toAmino(message: EventCrossTransferIn): EventCrossTransferInAmino {
    const obj: any = {};
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.receiver_address = message.receiverAddress;
    obj.refund_address = message.refundAddress;
    obj.sequence = message.sequence ? message.sequence.toString() : undefined;
    obj.src_chain_id = message.srcChainId;
    return obj;
  },
  fromAminoMsg(object: EventCrossTransferInAminoMsg): EventCrossTransferIn {
    return EventCrossTransferIn.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCrossTransferInProtoMsg): EventCrossTransferIn {
    return EventCrossTransferIn.decode(message.value);
  },
  toProto(message: EventCrossTransferIn): Uint8Array {
    return EventCrossTransferIn.encode(message).finish();
  },
  toProtoMsg(message: EventCrossTransferIn): EventCrossTransferInProtoMsg {
    return {
      typeUrl: "/greenfield.bridge.EventCrossTransferIn",
      value: EventCrossTransferIn.encode(message).finish()
    };
  }
};