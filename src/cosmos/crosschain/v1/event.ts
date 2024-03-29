//@ts-nocheck
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
export interface EventCrossChainProtoMsg {
  typeUrl: "/cosmos.crosschain.v1.EventCrossChain";
  value: Uint8Array;
}
/** EventCrossChain is emitted when there is a cross chain package created */
export interface EventCrossChainAmino {
  /** Source chain id of the cross chain package */
  src_chain_id?: number;
  /** Destination chain id of the cross chainpackage */
  dest_chain_id?: number;
  /** Channel id of the cross chain package */
  channel_id?: number;
  /** Sequence of the cross chain package */
  sequence?: string;
  /** Package type of the cross chain package, like SYN, ACK and FAIL_ACK */
  package_type?: number;
  /** Timestamp of the cross chain package */
  timestamp?: string;
  /** Payload of the cross chain package */
  package_load?: string;
  /** Relayer fee for the cross chain package */
  relayer_fee?: string;
  /** Relayer fee for the ACK or FAIL_ACK package of this cross chain package */
  ack_relayer_fee?: string;
}
export interface EventCrossChainAminoMsg {
  type: "cosmos-sdk/EventCrossChain";
  value: EventCrossChainAmino;
}
/** EventCrossChain is emitted when there is a cross chain package created */
export interface EventCrossChainSDKType {
  src_chain_id: number;
  dest_chain_id: number;
  channel_id: number;
  sequence: Long;
  package_type: number;
  timestamp: Long;
  package_load: string;
  relayer_fee: string;
  ack_relayer_fee: string;
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
  typeUrl: "/cosmos.crosschain.v1.EventCrossChain",
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
  },
  fromSDK(object: EventCrossChainSDKType): EventCrossChain {
    return {
      srcChainId: object?.src_chain_id,
      destChainId: object?.dest_chain_id,
      channelId: object?.channel_id,
      sequence: object?.sequence,
      packageType: object?.package_type,
      timestamp: object?.timestamp,
      packageLoad: object?.package_load,
      relayerFee: object?.relayer_fee,
      ackRelayerFee: object?.ack_relayer_fee
    };
  },
  toSDK(message: EventCrossChain): EventCrossChainSDKType {
    const obj: any = {};
    obj.src_chain_id = message.srcChainId;
    obj.dest_chain_id = message.destChainId;
    obj.channel_id = message.channelId;
    obj.sequence = message.sequence;
    obj.package_type = message.packageType;
    obj.timestamp = message.timestamp;
    obj.package_load = message.packageLoad;
    obj.relayer_fee = message.relayerFee;
    obj.ack_relayer_fee = message.ackRelayerFee;
    return obj;
  },
  fromAmino(object: EventCrossChainAmino): EventCrossChain {
    const message = createBaseEventCrossChain();
    if (object.src_chain_id !== undefined && object.src_chain_id !== null) {
      message.srcChainId = object.src_chain_id;
    }
    if (object.dest_chain_id !== undefined && object.dest_chain_id !== null) {
      message.destChainId = object.dest_chain_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = Long.fromString(object.sequence);
    }
    if (object.package_type !== undefined && object.package_type !== null) {
      message.packageType = object.package_type;
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Long.fromString(object.timestamp);
    }
    if (object.package_load !== undefined && object.package_load !== null) {
      message.packageLoad = object.package_load;
    }
    if (object.relayer_fee !== undefined && object.relayer_fee !== null) {
      message.relayerFee = object.relayer_fee;
    }
    if (object.ack_relayer_fee !== undefined && object.ack_relayer_fee !== null) {
      message.ackRelayerFee = object.ack_relayer_fee;
    }
    return message;
  },
  toAmino(message: EventCrossChain): EventCrossChainAmino {
    const obj: any = {};
    obj.src_chain_id = message.srcChainId;
    obj.dest_chain_id = message.destChainId;
    obj.channel_id = message.channelId;
    obj.sequence = message.sequence ? message.sequence.toString() : undefined;
    obj.package_type = message.packageType;
    obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
    obj.package_load = message.packageLoad;
    obj.relayer_fee = message.relayerFee;
    obj.ack_relayer_fee = message.ackRelayerFee;
    return obj;
  },
  fromAminoMsg(object: EventCrossChainAminoMsg): EventCrossChain {
    return EventCrossChain.fromAmino(object.value);
  },
  toAminoMsg(message: EventCrossChain): EventCrossChainAminoMsg {
    return {
      type: "cosmos-sdk/EventCrossChain",
      value: EventCrossChain.toAmino(message)
    };
  },
  fromProtoMsg(message: EventCrossChainProtoMsg): EventCrossChain {
    return EventCrossChain.decode(message.value);
  },
  toProto(message: EventCrossChain): Uint8Array {
    return EventCrossChain.encode(message).finish();
  },
  toProtoMsg(message: EventCrossChain): EventCrossChainProtoMsg {
    return {
      typeUrl: "/cosmos.crosschain.v1.EventCrossChain",
      value: EventCrossChain.encode(message).finish()
    };
  }
};