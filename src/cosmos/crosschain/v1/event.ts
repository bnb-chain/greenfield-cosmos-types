/* eslint-disable */
import { Long, isSet, DeepPartial, Exact } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmos.crosschain.v1";
/** EventCrossChain is emitted when there is a cross chain package created */

export interface EventCrossChain {
  /** Source chain id of the cross chain package */
  src_chain_id: number;
  /** Destination chain id of the cross chainpackage */

  dest_chain_id: number;
  /** Channel id of the cross chain package */

  channel_id: number;
  /** Sequence of the cross chain package */

  sequence: Long;
  /** Package type of the cross chain package, like SYN, ACK and FAIL_ACK */

  package_type: number;
  /** Timestamp of the cross chain package */

  timestamp: Long;
  /** Payload of the cross chain package */

  package_load: string;
  /** Relayer fee for the cross chain package */

  relayer_fee: string;
  /** Relayer fee for the ACK or FAIL_ACK package of this cross chain package */

  ack_relayer_fee: string;
  /** Callback gas price the ACK or FAIL_ACK package */

  callback_gas_price: string;
}

function createBaseEventCrossChain(): EventCrossChain {
  return {
    src_chain_id: 0,
    dest_chain_id: 0,
    channel_id: 0,
    sequence: Long.UZERO,
    package_type: 0,
    timestamp: Long.UZERO,
    package_load: "",
    relayer_fee: "",
    ack_relayer_fee: "",
    callback_gas_price: ""
  };
}

export const EventCrossChain = {
  encode(message: EventCrossChain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.src_chain_id !== 0) {
      writer.uint32(8).uint32(message.src_chain_id);
    }

    if (message.dest_chain_id !== 0) {
      writer.uint32(16).uint32(message.dest_chain_id);
    }

    if (message.channel_id !== 0) {
      writer.uint32(24).uint32(message.channel_id);
    }

    if (!message.sequence.isZero()) {
      writer.uint32(32).uint64(message.sequence);
    }

    if (message.package_type !== 0) {
      writer.uint32(40).uint32(message.package_type);
    }

    if (!message.timestamp.isZero()) {
      writer.uint32(48).uint64(message.timestamp);
    }

    if (message.package_load !== "") {
      writer.uint32(58).string(message.package_load);
    }

    if (message.relayer_fee !== "") {
      writer.uint32(66).string(message.relayer_fee);
    }

    if (message.ack_relayer_fee !== "") {
      writer.uint32(74).string(message.ack_relayer_fee);
    }

    if (message.callback_gas_price !== "") {
      writer.uint32(82).string(message.callback_gas_price);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCrossChain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCrossChain();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.src_chain_id = reader.uint32();
          break;

        case 2:
          message.dest_chain_id = reader.uint32();
          break;

        case 3:
          message.channel_id = reader.uint32();
          break;

        case 4:
          message.sequence = (reader.uint64() as Long);
          break;

        case 5:
          message.package_type = reader.uint32();
          break;

        case 6:
          message.timestamp = (reader.uint64() as Long);
          break;

        case 7:
          message.package_load = reader.string();
          break;

        case 8:
          message.relayer_fee = reader.string();
          break;

        case 9:
          message.ack_relayer_fee = reader.string();
          break;

        case 10:
          message.callback_gas_price = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventCrossChain {
    return {
      src_chain_id: isSet(object.src_chain_id) ? Number(object.src_chain_id) : 0,
      dest_chain_id: isSet(object.dest_chain_id) ? Number(object.dest_chain_id) : 0,
      channel_id: isSet(object.channel_id) ? Number(object.channel_id) : 0,
      sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO,
      package_type: isSet(object.package_type) ? Number(object.package_type) : 0,
      timestamp: isSet(object.timestamp) ? Long.fromValue(object.timestamp) : Long.UZERO,
      package_load: isSet(object.package_load) ? String(object.package_load) : "",
      relayer_fee: isSet(object.relayer_fee) ? String(object.relayer_fee) : "",
      ack_relayer_fee: isSet(object.ack_relayer_fee) ? String(object.ack_relayer_fee) : "",
      callback_gas_price: isSet(object.callback_gas_price) ? String(object.callback_gas_price) : ""
    };
  },

  toJSON(message: EventCrossChain): unknown {
    const obj: any = {};
    message.src_chain_id !== undefined && (obj.src_chain_id = Math.round(message.src_chain_id));
    message.dest_chain_id !== undefined && (obj.dest_chain_id = Math.round(message.dest_chain_id));
    message.channel_id !== undefined && (obj.channel_id = Math.round(message.channel_id));
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    message.package_type !== undefined && (obj.package_type = Math.round(message.package_type));
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || Long.UZERO).toString());
    message.package_load !== undefined && (obj.package_load = message.package_load);
    message.relayer_fee !== undefined && (obj.relayer_fee = message.relayer_fee);
    message.ack_relayer_fee !== undefined && (obj.ack_relayer_fee = message.ack_relayer_fee);
    message.callback_gas_price !== undefined && (obj.callback_gas_price = message.callback_gas_price);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCrossChain>, I>>(object: I): EventCrossChain {
    const message = createBaseEventCrossChain();
    message.src_chain_id = object.src_chain_id ?? 0;
    message.dest_chain_id = object.dest_chain_id ?? 0;
    message.channel_id = object.channel_id ?? 0;
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    message.package_type = object.package_type ?? 0;
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.UZERO;
    message.package_load = object.package_load ?? "";
    message.relayer_fee = object.relayer_fee ?? "";
    message.ack_relayer_fee = object.ack_relayer_fee ?? "";
    message.callback_gas_price = object.callback_gas_price ?? "";
    return message;
  }

};