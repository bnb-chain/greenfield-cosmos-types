//@ts-nocheck
/* eslint-disable */
import { Long, isSet, DeepPartial, Exact } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "greenfield.payment";
/**
 * AutoResumeRecord is the record keeps the auto resume information.
 * The EndBlocker of payment module will scan the list of AutoResumeRecord
 * and resume the stream account one by one.
 */
export interface AutoResumeRecord {
  /** timestamp is the unix timestamp to order the records */
  timestamp: Long;
  /** the stream account address */
  addr: string;
}
export interface AutoResumeRecordProtoMsg {
  typeUrl: "/greenfield.payment.AutoResumeRecord";
  value: Uint8Array;
}
/**
 * AutoResumeRecord is the record keeps the auto resume information.
 * The EndBlocker of payment module will scan the list of AutoResumeRecord
 * and resume the stream account one by one.
 */
export interface AutoResumeRecordSDKType {
  timestamp: Long;
  addr: string;
}
function createBaseAutoResumeRecord(): AutoResumeRecord {
  return {
    timestamp: Long.ZERO,
    addr: ""
  };
}
export const AutoResumeRecord = {
  typeUrl: "/greenfield.payment.AutoResumeRecord",
  encode(message: AutoResumeRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.timestamp.isZero()) {
      writer.uint32(8).int64(message.timestamp);
    }
    if (message.addr !== "") {
      writer.uint32(18).string(message.addr);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AutoResumeRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAutoResumeRecord();
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
  fromJSON(object: any): AutoResumeRecord {
    return {
      timestamp: isSet(object.timestamp) ? Long.fromValue(object.timestamp) : Long.ZERO,
      addr: isSet(object.addr) ? String(object.addr) : ""
    };
  },
  toJSON(message: AutoResumeRecord): unknown {
    const obj: any = {};
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || Long.ZERO).toString());
    message.addr !== undefined && (obj.addr = message.addr);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AutoResumeRecord>, I>>(object: I): AutoResumeRecord {
    const message = createBaseAutoResumeRecord();
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.ZERO;
    message.addr = object.addr ?? "";
    return message;
  },
  fromSDK(object: AutoResumeRecordSDKType): AutoResumeRecord {
    return {
      timestamp: object?.timestamp,
      addr: object?.addr
    };
  },
  toSDK(message: AutoResumeRecord): AutoResumeRecordSDKType {
    const obj: any = {};
    obj.timestamp = message.timestamp;
    obj.addr = message.addr;
    return obj;
  },
  fromAmino(object: AutoResumeRecordAmino): AutoResumeRecord {
    const message = createBaseAutoResumeRecord();
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Long.fromString(object.timestamp);
    }
    if (object.addr !== undefined && object.addr !== null) {
      message.addr = object.addr;
    }
    return message;
  },
  toAmino(message: AutoResumeRecord): AutoResumeRecordAmino {
    const obj: any = {};
    obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
    obj.addr = message.addr;
    return obj;
  },
  fromAminoMsg(object: AutoResumeRecordAminoMsg): AutoResumeRecord {
    return AutoResumeRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: AutoResumeRecordProtoMsg): AutoResumeRecord {
    return AutoResumeRecord.decode(message.value);
  },
  toProto(message: AutoResumeRecord): Uint8Array {
    return AutoResumeRecord.encode(message).finish();
  },
  toProtoMsg(message: AutoResumeRecord): AutoResumeRecordProtoMsg {
    return {
      typeUrl: "/greenfield.payment.AutoResumeRecord",
      value: AutoResumeRecord.encode(message).finish()
    };
  }
};