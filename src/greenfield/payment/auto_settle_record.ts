//@ts-nocheck
/* eslint-disable */
import { Long, isSet, DeepPartial, Exact } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "greenfield.payment";
/**
 * AutoSettleRecord is the record keeps the auto settle information.
 * The EndBlocker of payment module will scan the list of AutoSettleRecord
 * and settle the stream account if the timestamp is less than the current time.
 */
export interface AutoSettleRecord {
  /** timestamp is the unix timestamp when the stream account will be settled. */
  timestamp: Long;
  /** A stream account address */
  addr: string;
}
/**
 * AutoSettleRecord is the record keeps the auto settle information.
 * The EndBlocker of payment module will scan the list of AutoSettleRecord
 * and settle the stream account if the timestamp is less than the current time.
 */
export interface AutoSettleRecordSDKType {
  timestamp: Long;
  addr: string;
}
function createBaseAutoSettleRecord(): AutoSettleRecord {
  return {
    timestamp: Long.ZERO,
    addr: ""
  };
}
export const AutoSettleRecord = {
  encode(message: AutoSettleRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.timestamp.isZero()) {
      writer.uint32(8).int64(message.timestamp);
    }
    if (message.addr !== "") {
      writer.uint32(18).string(message.addr);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AutoSettleRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAutoSettleRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = (reader.int64() as Long);
          break;
        case 2:
          message.addr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AutoSettleRecord {
    return {
      timestamp: isSet(object.timestamp) ? Long.fromValue(object.timestamp) : Long.ZERO,
      addr: isSet(object.addr) ? String(object.addr) : ""
    };
  },
  toJSON(message: AutoSettleRecord): unknown {
    const obj: any = {};
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || Long.ZERO).toString());
    message.addr !== undefined && (obj.addr = message.addr);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AutoSettleRecord>, I>>(object: I): AutoSettleRecord {
    const message = createBaseAutoSettleRecord();
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.ZERO;
    message.addr = object.addr ?? "";
    return message;
  },
  fromSDK(object: AutoSettleRecordSDKType): AutoSettleRecord {
    return {
      timestamp: object?.timestamp,
      addr: object?.addr
    };
  },
  toSDK(message: AutoSettleRecord): AutoSettleRecordSDKType {
    const obj: any = {};
    obj.timestamp = message.timestamp;
    obj.addr = message.addr;
    return obj;
  }
};