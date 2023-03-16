/* eslint-disable */
import { Long, isSet, DeepPartial, Exact } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmos.oracle.v1";
/** EventPackageClaim is emitted when a cross chain package is processed */

export interface EventPackageClaim {
  /** Source chain id of the package */
  src_chain_id: number;
  /** Destination chain id of the package */

  dest_chain_id: number;
  /** Channel id of the package */

  channel_id: number;
  /** Package type of the package, like SYN, ACK and FAIL_ACK */

  package_type: number;
  /** Receive sequence of the package */

  receive_sequence: Long;
  /** Send sequence of the corresponding ACK package or FAIL_ACK package */

  send_sequence: Long;
  /** Crash status for the handle of this package */

  crash: boolean;
  /** Error message for the handle of this package */

  error_msg: string;
  /** Relayer fee paid for this package */

  relayer_fee: string;
  /** Relayer fee paid for the ACK or FAIL_ACK package */

  ack_relayer_fee: string;
  /** Callback gas price the ACK or FAIL_ACK package */

  callback_gas_price: string;
}

function createBaseEventPackageClaim(): EventPackageClaim {
  return {
    src_chain_id: 0,
    dest_chain_id: 0,
    channel_id: 0,
    package_type: 0,
    receive_sequence: Long.UZERO,
    send_sequence: Long.ZERO,
    crash: false,
    error_msg: "",
    relayer_fee: "",
    ack_relayer_fee: "",
    callback_gas_price: ""
  };
}

export const EventPackageClaim = {
  encode(message: EventPackageClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.src_chain_id !== 0) {
      writer.uint32(8).uint32(message.src_chain_id);
    }

    if (message.dest_chain_id !== 0) {
      writer.uint32(16).uint32(message.dest_chain_id);
    }

    if (message.channel_id !== 0) {
      writer.uint32(24).uint32(message.channel_id);
    }

    if (message.package_type !== 0) {
      writer.uint32(32).uint32(message.package_type);
    }

    if (!message.receive_sequence.isZero()) {
      writer.uint32(40).uint64(message.receive_sequence);
    }

    if (!message.send_sequence.isZero()) {
      writer.uint32(48).int64(message.send_sequence);
    }

    if (message.crash === true) {
      writer.uint32(56).bool(message.crash);
    }

    if (message.error_msg !== "") {
      writer.uint32(66).string(message.error_msg);
    }

    if (message.relayer_fee !== "") {
      writer.uint32(74).string(message.relayer_fee);
    }

    if (message.ack_relayer_fee !== "") {
      writer.uint32(82).string(message.ack_relayer_fee);
    }

    if (message.callback_gas_price !== "") {
      writer.uint32(90).string(message.callback_gas_price);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventPackageClaim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPackageClaim();

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
          message.package_type = reader.uint32();
          break;

        case 5:
          message.receive_sequence = (reader.uint64() as Long);
          break;

        case 6:
          message.send_sequence = (reader.int64() as Long);
          break;

        case 7:
          message.crash = reader.bool();
          break;

        case 8:
          message.error_msg = reader.string();
          break;

        case 9:
          message.relayer_fee = reader.string();
          break;

        case 10:
          message.ack_relayer_fee = reader.string();
          break;

        case 11:
          message.callback_gas_price = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventPackageClaim {
    return {
      src_chain_id: isSet(object.src_chain_id) ? Number(object.src_chain_id) : 0,
      dest_chain_id: isSet(object.dest_chain_id) ? Number(object.dest_chain_id) : 0,
      channel_id: isSet(object.channel_id) ? Number(object.channel_id) : 0,
      package_type: isSet(object.package_type) ? Number(object.package_type) : 0,
      receive_sequence: isSet(object.receive_sequence) ? Long.fromValue(object.receive_sequence) : Long.UZERO,
      send_sequence: isSet(object.send_sequence) ? Long.fromValue(object.send_sequence) : Long.ZERO,
      crash: isSet(object.crash) ? Boolean(object.crash) : false,
      error_msg: isSet(object.error_msg) ? String(object.error_msg) : "",
      relayer_fee: isSet(object.relayer_fee) ? String(object.relayer_fee) : "",
      ack_relayer_fee: isSet(object.ack_relayer_fee) ? String(object.ack_relayer_fee) : "",
      callback_gas_price: isSet(object.callback_gas_price) ? String(object.callback_gas_price) : ""
    };
  },

  toJSON(message: EventPackageClaim): unknown {
    const obj: any = {};
    message.src_chain_id !== undefined && (obj.src_chain_id = Math.round(message.src_chain_id));
    message.dest_chain_id !== undefined && (obj.dest_chain_id = Math.round(message.dest_chain_id));
    message.channel_id !== undefined && (obj.channel_id = Math.round(message.channel_id));
    message.package_type !== undefined && (obj.package_type = Math.round(message.package_type));
    message.receive_sequence !== undefined && (obj.receive_sequence = (message.receive_sequence || Long.UZERO).toString());
    message.send_sequence !== undefined && (obj.send_sequence = (message.send_sequence || Long.ZERO).toString());
    message.crash !== undefined && (obj.crash = message.crash);
    message.error_msg !== undefined && (obj.error_msg = message.error_msg);
    message.relayer_fee !== undefined && (obj.relayer_fee = message.relayer_fee);
    message.ack_relayer_fee !== undefined && (obj.ack_relayer_fee = message.ack_relayer_fee);
    message.callback_gas_price !== undefined && (obj.callback_gas_price = message.callback_gas_price);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventPackageClaim>, I>>(object: I): EventPackageClaim {
    const message = createBaseEventPackageClaim();
    message.src_chain_id = object.src_chain_id ?? 0;
    message.dest_chain_id = object.dest_chain_id ?? 0;
    message.channel_id = object.channel_id ?? 0;
    message.package_type = object.package_type ?? 0;
    message.receive_sequence = object.receive_sequence !== undefined && object.receive_sequence !== null ? Long.fromValue(object.receive_sequence) : Long.UZERO;
    message.send_sequence = object.send_sequence !== undefined && object.send_sequence !== null ? Long.fromValue(object.send_sequence) : Long.ZERO;
    message.crash = object.crash ?? false;
    message.error_msg = object.error_msg ?? "";
    message.relayer_fee = object.relayer_fee ?? "";
    message.ack_relayer_fee = object.ack_relayer_fee ?? "";
    message.callback_gas_price = object.callback_gas_price ?? "";
    return message;
  }

};