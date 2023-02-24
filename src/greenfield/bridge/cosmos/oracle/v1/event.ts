/* eslint-disable */
import { Long, isSet, DeepPartial, Exact } from "../../../../../helpers";
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
  }

};