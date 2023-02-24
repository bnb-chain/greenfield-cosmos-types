/* eslint-disable */
import { Long, isSet, DeepPartial, Exact } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmos.crosschain.v1";
/** EventCrossChain is emitted when there is a cross chain package created */

export interface EventCrossChain {
  /** Source chain id of the cross chain package */
  srcChainId: number;
  /** Destination chain id of the cross chainpackage */

  destChainId: number;
  /** Channel id of the cross chain package */

  channelId: number;
  /** Sequence of the cross chain package */

  sequence: Long;
  /** Package type of the cross chain package, like SYN, ACK and FAIL_ACK */

  packageType: number;
  /** Timestamp of the cross chain package */

  timestamp: Long;
  /** Payload of the cross chain package */

  packageLoad: string;
  /** Relayer fee for the cross chain package */

  relayerFee: string;
  /** Relayer fee for the ACK or FAIL_ACK package of this cross chain package */

  ackRelayerFee: string;
}

function createBaseEventCrossChain(): EventCrossChain {
  return {
    srcChainId: 0,
    destChainId: 0,
    channelId: 0,
    sequence: Long.UZERO,
    packageType: 0,
    timestamp: Long.UZERO,
    packageLoad: "",
    relayerFee: "",
    ackRelayerFee: ""
  };
}

export const EventCrossChain = {
  encode(message: EventCrossChain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.srcChainId !== 0) {
      writer.uint32(8).uint32(message.srcChainId);
    }

    if (message.destChainId !== 0) {
      writer.uint32(16).uint32(message.destChainId);
    }

    if (message.channelId !== 0) {
      writer.uint32(24).uint32(message.channelId);
    }

    if (!message.sequence.isZero()) {
      writer.uint32(32).uint64(message.sequence);
    }

    if (message.packageType !== 0) {
      writer.uint32(40).uint32(message.packageType);
    }

    if (!message.timestamp.isZero()) {
      writer.uint32(48).uint64(message.timestamp);
    }

    if (message.packageLoad !== "") {
      writer.uint32(58).string(message.packageLoad);
    }

    if (message.relayerFee !== "") {
      writer.uint32(66).string(message.relayerFee);
    }

    if (message.ackRelayerFee !== "") {
      writer.uint32(74).string(message.ackRelayerFee);
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
          message.srcChainId = reader.uint32();
          break;

        case 2:
          message.destChainId = reader.uint32();
          break;

        case 3:
          message.channelId = reader.uint32();
          break;

        case 4:
          message.sequence = (reader.uint64() as Long);
          break;

        case 5:
          message.packageType = reader.uint32();
          break;

        case 6:
          message.timestamp = (reader.uint64() as Long);
          break;

        case 7:
          message.packageLoad = reader.string();
          break;

        case 8:
          message.relayerFee = reader.string();
          break;

        case 9:
          message.ackRelayerFee = reader.string();
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
      srcChainId: isSet(object.srcChainId) ? Number(object.srcChainId) : 0,
      destChainId: isSet(object.destChainId) ? Number(object.destChainId) : 0,
      channelId: isSet(object.channelId) ? Number(object.channelId) : 0,
      sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO,
      packageType: isSet(object.packageType) ? Number(object.packageType) : 0,
      timestamp: isSet(object.timestamp) ? Long.fromValue(object.timestamp) : Long.UZERO,
      packageLoad: isSet(object.packageLoad) ? String(object.packageLoad) : "",
      relayerFee: isSet(object.relayerFee) ? String(object.relayerFee) : "",
      ackRelayerFee: isSet(object.ackRelayerFee) ? String(object.ackRelayerFee) : ""
    };
  },

  toJSON(message: EventCrossChain): unknown {
    const obj: any = {};
    message.srcChainId !== undefined && (obj.srcChainId = Math.round(message.srcChainId));
    message.destChainId !== undefined && (obj.destChainId = Math.round(message.destChainId));
    message.channelId !== undefined && (obj.channelId = Math.round(message.channelId));
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    message.packageType !== undefined && (obj.packageType = Math.round(message.packageType));
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || Long.UZERO).toString());
    message.packageLoad !== undefined && (obj.packageLoad = message.packageLoad);
    message.relayerFee !== undefined && (obj.relayerFee = message.relayerFee);
    message.ackRelayerFee !== undefined && (obj.ackRelayerFee = message.ackRelayerFee);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCrossChain>, I>>(object: I): EventCrossChain {
    const message = createBaseEventCrossChain();
    message.srcChainId = object.srcChainId ?? 0;
    message.destChainId = object.destChainId ?? 0;
    message.channelId = object.channelId ?? 0;
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    message.packageType = object.packageType ?? 0;
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.UZERO;
    message.packageLoad = object.packageLoad ?? "";
    message.relayerFee = object.relayerFee ?? "";
    message.ackRelayerFee = object.ackRelayerFee ?? "";
    return message;
  }

};