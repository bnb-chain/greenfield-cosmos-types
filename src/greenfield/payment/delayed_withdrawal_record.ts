//@ts-nocheck
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
export const protobufPackage = "greenfield.payment";
export interface DelayedWithdrawalRecord {
  /** the withdrawal address */
  addr: string;
  /** the withdrawal amount */
  amount: string;
  /** the withdrawal from payment account address */
  from: string;
  /** unlock timestamp is the unix timestamp to unlock the withdrawal */
  unlockTimestamp: bigint;
}
export interface DelayedWithdrawalRecordProtoMsg {
  typeUrl: "/greenfield.payment.DelayedWithdrawalRecord";
  value: Uint8Array;
}
export interface DelayedWithdrawalRecordSDKType {
  addr: string;
  amount: string;
  from: string;
  unlock_timestamp: bigint;
}
function createBaseDelayedWithdrawalRecord(): DelayedWithdrawalRecord {
  return {
    addr: "",
    amount: "",
    from: "",
    unlockTimestamp: BigInt(0)
  };
}
export const DelayedWithdrawalRecord = {
  typeUrl: "/greenfield.payment.DelayedWithdrawalRecord",
  encode(message: DelayedWithdrawalRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.addr !== "") {
      writer.uint32(10).string(message.addr);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.from !== "") {
      writer.uint32(26).string(message.from);
    }
    if (message.unlockTimestamp !== BigInt(0)) {
      writer.uint32(32).int64(message.unlockTimestamp);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DelayedWithdrawalRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelayedWithdrawalRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addr = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.from = reader.string();
          break;
        case 4:
          message.unlockTimestamp = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DelayedWithdrawalRecord {
    return {
      addr: isSet(object.addr) ? String(object.addr) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      from: isSet(object.from) ? String(object.from) : "",
      unlockTimestamp: isSet(object.unlockTimestamp) ? BigInt(object.unlockTimestamp.toString()) : BigInt(0)
    };
  },
  toJSON(message: DelayedWithdrawalRecord): unknown {
    const obj: any = {};
    message.addr !== undefined && (obj.addr = message.addr);
    message.amount !== undefined && (obj.amount = message.amount);
    message.from !== undefined && (obj.from = message.from);
    message.unlockTimestamp !== undefined && (obj.unlockTimestamp = (message.unlockTimestamp || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<DelayedWithdrawalRecord>, I>>(object: I): DelayedWithdrawalRecord {
    const message = createBaseDelayedWithdrawalRecord();
    message.addr = object.addr ?? "";
    message.amount = object.amount ?? "";
    message.from = object.from ?? "";
    message.unlockTimestamp = object.unlockTimestamp !== undefined && object.unlockTimestamp !== null ? BigInt(object.unlockTimestamp.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: DelayedWithdrawalRecordSDKType): DelayedWithdrawalRecord {
    return {
      addr: object?.addr,
      amount: object?.amount,
      from: object?.from,
      unlockTimestamp: object?.unlock_timestamp
    };
  },
  toSDK(message: DelayedWithdrawalRecord): DelayedWithdrawalRecordSDKType {
    const obj: any = {};
    obj.addr = message.addr;
    obj.amount = message.amount;
    obj.from = message.from;
    obj.unlock_timestamp = message.unlockTimestamp;
    return obj;
  },
  fromAmino(object: DelayedWithdrawalRecordAmino): DelayedWithdrawalRecord {
    const message = createBaseDelayedWithdrawalRecord();
    if (object.addr !== undefined && object.addr !== null) {
      message.addr = object.addr;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.unlock_timestamp !== undefined && object.unlock_timestamp !== null) {
      message.unlockTimestamp = BigInt(object.unlock_timestamp);
    }
    return message;
  },
  toAmino(message: DelayedWithdrawalRecord): DelayedWithdrawalRecordAmino {
    const obj: any = {};
    obj.addr = message.addr;
    obj.amount = message.amount;
    obj.from = message.from;
    obj.unlock_timestamp = message.unlockTimestamp ? message.unlockTimestamp.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: DelayedWithdrawalRecordAminoMsg): DelayedWithdrawalRecord {
    return DelayedWithdrawalRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: DelayedWithdrawalRecordProtoMsg): DelayedWithdrawalRecord {
    return DelayedWithdrawalRecord.decode(message.value);
  },
  toProto(message: DelayedWithdrawalRecord): Uint8Array {
    return DelayedWithdrawalRecord.encode(message).finish();
  },
  toProtoMsg(message: DelayedWithdrawalRecord): DelayedWithdrawalRecordProtoMsg {
    return {
      typeUrl: "/greenfield.payment.DelayedWithdrawalRecord",
      value: DelayedWithdrawalRecord.encode(message).finish()
    };
  }
};