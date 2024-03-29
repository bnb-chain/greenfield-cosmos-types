//@ts-nocheck
/* eslint-disable */
import { Long, isSet, DeepPartial, Exact } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmos.oracle.v1";
/** EventPackageClaim is emitted when a cross chain package is processed */
export interface EventPackageClaim {
  /** Source chain id of the package */
  srcChainId: number;
  /** Destination chain id of the package */
  destChainId: number;
  /** Channel id of the package */
  channelId: number;
  /** Package type of the package, like SYN, ACK and FAIL_ACK */
  packageType: number;
  /** Receive sequence of the package */
  receiveSequence: Long;
  /** Send sequence of the corresponding ACK package or FAIL_ACK package */
  sendSequence: Long;
  /** Crash status for the handle of this package */
  crash: boolean;
  /** Error message for the handle of this package */
  errorMsg: string;
  /** Relayer fee paid for this package */
  relayerFee: string;
  /** Relayer fee paid for the ACK or FAIL_ACK package */
  ackRelayerFee: string;
}
export interface EventPackageClaimProtoMsg {
  typeUrl: "/cosmos.oracle.v1.EventPackageClaim";
  value: Uint8Array;
}
/** EventPackageClaim is emitted when a cross chain package is processed */
export interface EventPackageClaimAmino {
  /** Source chain id of the package */
  src_chain_id?: number;
  /** Destination chain id of the package */
  dest_chain_id?: number;
  /** Channel id of the package */
  channel_id?: number;
  /** Package type of the package, like SYN, ACK and FAIL_ACK */
  package_type?: number;
  /** Receive sequence of the package */
  receive_sequence?: string;
  /** Send sequence of the corresponding ACK package or FAIL_ACK package */
  send_sequence?: string;
  /** Crash status for the handle of this package */
  crash?: boolean;
  /** Error message for the handle of this package */
  error_msg?: string;
  /** Relayer fee paid for this package */
  relayer_fee?: string;
  /** Relayer fee paid for the ACK or FAIL_ACK package */
  ack_relayer_fee?: string;
}
export interface EventPackageClaimAminoMsg {
  type: "cosmos-sdk/EventPackageClaim";
  value: EventPackageClaimAmino;
}
/** EventPackageClaim is emitted when a cross chain package is processed */
export interface EventPackageClaimSDKType {
  src_chain_id: number;
  dest_chain_id: number;
  channel_id: number;
  package_type: number;
  receive_sequence: Long;
  send_sequence: Long;
  crash: boolean;
  error_msg: string;
  relayer_fee: string;
  ack_relayer_fee: string;
}
function createBaseEventPackageClaim(): EventPackageClaim {
  return {
    srcChainId: 0,
    destChainId: 0,
    channelId: 0,
    packageType: 0,
    receiveSequence: Long.UZERO,
    sendSequence: Long.ZERO,
    crash: false,
    errorMsg: "",
    relayerFee: "",
    ackRelayerFee: ""
  };
}
export const EventPackageClaim = {
  typeUrl: "/cosmos.oracle.v1.EventPackageClaim",
  encode(message: EventPackageClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.srcChainId !== 0) {
      writer.uint32(8).uint32(message.srcChainId);
    }
    if (message.destChainId !== 0) {
      writer.uint32(16).uint32(message.destChainId);
    }
    if (message.channelId !== 0) {
      writer.uint32(24).uint32(message.channelId);
    }
    if (message.packageType !== 0) {
      writer.uint32(32).uint32(message.packageType);
    }
    if (!message.receiveSequence.isZero()) {
      writer.uint32(40).uint64(message.receiveSequence);
    }
    if (!message.sendSequence.isZero()) {
      writer.uint32(48).int64(message.sendSequence);
    }
    if (message.crash === true) {
      writer.uint32(56).bool(message.crash);
    }
    if (message.errorMsg !== "") {
      writer.uint32(66).string(message.errorMsg);
    }
    if (message.relayerFee !== "") {
      writer.uint32(74).string(message.relayerFee);
    }
    if (message.ackRelayerFee !== "") {
      writer.uint32(82).string(message.ackRelayerFee);
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
          message.srcChainId = reader.uint32();
          break;
        case 2:
          message.destChainId = reader.uint32();
          break;
        case 3:
          message.channelId = reader.uint32();
          break;
        case 4:
          message.packageType = reader.uint32();
          break;
        case 5:
          message.receiveSequence = (reader.uint64() as Long);
          break;
        case 6:
          message.sendSequence = (reader.int64() as Long);
          break;
        case 7:
          message.crash = reader.bool();
          break;
        case 8:
          message.errorMsg = reader.string();
          break;
        case 9:
          message.relayerFee = reader.string();
          break;
        case 10:
          message.ackRelayerFee = reader.string();
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
      srcChainId: isSet(object.srcChainId) ? Number(object.srcChainId) : 0,
      destChainId: isSet(object.destChainId) ? Number(object.destChainId) : 0,
      channelId: isSet(object.channelId) ? Number(object.channelId) : 0,
      packageType: isSet(object.packageType) ? Number(object.packageType) : 0,
      receiveSequence: isSet(object.receiveSequence) ? Long.fromValue(object.receiveSequence) : Long.UZERO,
      sendSequence: isSet(object.sendSequence) ? Long.fromValue(object.sendSequence) : Long.ZERO,
      crash: isSet(object.crash) ? Boolean(object.crash) : false,
      errorMsg: isSet(object.errorMsg) ? String(object.errorMsg) : "",
      relayerFee: isSet(object.relayerFee) ? String(object.relayerFee) : "",
      ackRelayerFee: isSet(object.ackRelayerFee) ? String(object.ackRelayerFee) : ""
    };
  },
  toJSON(message: EventPackageClaim): unknown {
    const obj: any = {};
    message.srcChainId !== undefined && (obj.srcChainId = Math.round(message.srcChainId));
    message.destChainId !== undefined && (obj.destChainId = Math.round(message.destChainId));
    message.channelId !== undefined && (obj.channelId = Math.round(message.channelId));
    message.packageType !== undefined && (obj.packageType = Math.round(message.packageType));
    message.receiveSequence !== undefined && (obj.receiveSequence = (message.receiveSequence || Long.UZERO).toString());
    message.sendSequence !== undefined && (obj.sendSequence = (message.sendSequence || Long.ZERO).toString());
    message.crash !== undefined && (obj.crash = message.crash);
    message.errorMsg !== undefined && (obj.errorMsg = message.errorMsg);
    message.relayerFee !== undefined && (obj.relayerFee = message.relayerFee);
    message.ackRelayerFee !== undefined && (obj.ackRelayerFee = message.ackRelayerFee);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventPackageClaim>, I>>(object: I): EventPackageClaim {
    const message = createBaseEventPackageClaim();
    message.srcChainId = object.srcChainId ?? 0;
    message.destChainId = object.destChainId ?? 0;
    message.channelId = object.channelId ?? 0;
    message.packageType = object.packageType ?? 0;
    message.receiveSequence = object.receiveSequence !== undefined && object.receiveSequence !== null ? Long.fromValue(object.receiveSequence) : Long.UZERO;
    message.sendSequence = object.sendSequence !== undefined && object.sendSequence !== null ? Long.fromValue(object.sendSequence) : Long.ZERO;
    message.crash = object.crash ?? false;
    message.errorMsg = object.errorMsg ?? "";
    message.relayerFee = object.relayerFee ?? "";
    message.ackRelayerFee = object.ackRelayerFee ?? "";
    return message;
  },
  fromSDK(object: EventPackageClaimSDKType): EventPackageClaim {
    return {
      srcChainId: object?.src_chain_id,
      destChainId: object?.dest_chain_id,
      channelId: object?.channel_id,
      packageType: object?.package_type,
      receiveSequence: object?.receive_sequence,
      sendSequence: object?.send_sequence,
      crash: object?.crash,
      errorMsg: object?.error_msg,
      relayerFee: object?.relayer_fee,
      ackRelayerFee: object?.ack_relayer_fee
    };
  },
  toSDK(message: EventPackageClaim): EventPackageClaimSDKType {
    const obj: any = {};
    obj.src_chain_id = message.srcChainId;
    obj.dest_chain_id = message.destChainId;
    obj.channel_id = message.channelId;
    obj.package_type = message.packageType;
    obj.receive_sequence = message.receiveSequence;
    obj.send_sequence = message.sendSequence;
    obj.crash = message.crash;
    obj.error_msg = message.errorMsg;
    obj.relayer_fee = message.relayerFee;
    obj.ack_relayer_fee = message.ackRelayerFee;
    return obj;
  },
  fromAmino(object: EventPackageClaimAmino): EventPackageClaim {
    const message = createBaseEventPackageClaim();
    if (object.src_chain_id !== undefined && object.src_chain_id !== null) {
      message.srcChainId = object.src_chain_id;
    }
    if (object.dest_chain_id !== undefined && object.dest_chain_id !== null) {
      message.destChainId = object.dest_chain_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.package_type !== undefined && object.package_type !== null) {
      message.packageType = object.package_type;
    }
    if (object.receive_sequence !== undefined && object.receive_sequence !== null) {
      message.receiveSequence = Long.fromString(object.receive_sequence);
    }
    if (object.send_sequence !== undefined && object.send_sequence !== null) {
      message.sendSequence = Long.fromString(object.send_sequence);
    }
    if (object.crash !== undefined && object.crash !== null) {
      message.crash = object.crash;
    }
    if (object.error_msg !== undefined && object.error_msg !== null) {
      message.errorMsg = object.error_msg;
    }
    if (object.relayer_fee !== undefined && object.relayer_fee !== null) {
      message.relayerFee = object.relayer_fee;
    }
    if (object.ack_relayer_fee !== undefined && object.ack_relayer_fee !== null) {
      message.ackRelayerFee = object.ack_relayer_fee;
    }
    return message;
  },
  toAmino(message: EventPackageClaim): EventPackageClaimAmino {
    const obj: any = {};
    obj.src_chain_id = message.srcChainId;
    obj.dest_chain_id = message.destChainId;
    obj.channel_id = message.channelId;
    obj.package_type = message.packageType;
    obj.receive_sequence = message.receiveSequence ? message.receiveSequence.toString() : undefined;
    obj.send_sequence = message.sendSequence ? message.sendSequence.toString() : undefined;
    obj.crash = message.crash;
    obj.error_msg = message.errorMsg;
    obj.relayer_fee = message.relayerFee;
    obj.ack_relayer_fee = message.ackRelayerFee;
    return obj;
  },
  fromAminoMsg(object: EventPackageClaimAminoMsg): EventPackageClaim {
    return EventPackageClaim.fromAmino(object.value);
  },
  toAminoMsg(message: EventPackageClaim): EventPackageClaimAminoMsg {
    return {
      type: "cosmos-sdk/EventPackageClaim",
      value: EventPackageClaim.toAmino(message)
    };
  },
  fromProtoMsg(message: EventPackageClaimProtoMsg): EventPackageClaim {
    return EventPackageClaim.decode(message.value);
  },
  toProto(message: EventPackageClaim): Uint8Array {
    return EventPackageClaim.encode(message).finish();
  },
  toProtoMsg(message: EventPackageClaim): EventPackageClaimProtoMsg {
    return {
      typeUrl: "/cosmos.oracle.v1.EventPackageClaim",
      value: EventPackageClaim.encode(message).finish()
    };
  }
};