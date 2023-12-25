//@ts-nocheck
/* eslint-disable */
import { Long, isSet, DeepPartial, Exact } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "greenfield.payment";
/** StreamAccountStatus defines the status of a stream account */
export enum StreamAccountStatus {
  /** STREAM_ACCOUNT_STATUS_ACTIVE - STREAM_ACCOUNT_STATUS_ACTIVE defines the active status of a stream account. */
  STREAM_ACCOUNT_STATUS_ACTIVE = 0,
  /**
   * STREAM_ACCOUNT_STATUS_FROZEN - STREAM_ACCOUNT_STATUS_FROZEN defines the frozen status of a stream account.
   * A frozen stream account cannot be used as payment address for buckets.
   * It can be unfrozen by depositing more BNB to the stream account.
   */
  STREAM_ACCOUNT_STATUS_FROZEN = 1,
  UNRECOGNIZED = -1,
}
export const StreamAccountStatusSDKType = StreamAccountStatus;
export function streamAccountStatusFromJSON(object: any): StreamAccountStatus {
  switch (object) {
    case 0:
    case "STREAM_ACCOUNT_STATUS_ACTIVE":
      return StreamAccountStatus.STREAM_ACCOUNT_STATUS_ACTIVE;
    case 1:
    case "STREAM_ACCOUNT_STATUS_FROZEN":
      return StreamAccountStatus.STREAM_ACCOUNT_STATUS_FROZEN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StreamAccountStatus.UNRECOGNIZED;
  }
}
export function streamAccountStatusToJSON(object: StreamAccountStatus): string {
  switch (object) {
    case StreamAccountStatus.STREAM_ACCOUNT_STATUS_ACTIVE:
      return "STREAM_ACCOUNT_STATUS_ACTIVE";
    case StreamAccountStatus.STREAM_ACCOUNT_STATUS_FROZEN:
      return "STREAM_ACCOUNT_STATUS_FROZEN";
    case StreamAccountStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Stream Payment Record of a stream account */
export interface StreamRecord {
  /** account address */
  account: string;
  /** latest update timestamp of the stream record */
  crudTimestamp: Long;
  /**
   * The per-second rate that an account's balance is changing.
   * It is the sum of the account's inbound and outbound flow rates.
   */
  netflowRate: string;
  /** The balance of the stream account at the latest CRUD timestamp. */
  staticBalance: string;
  /**
   * reserved balance of the stream account
   * If the netflow rate is negative, the reserved balance is `netflow_rate * reserve_time`
   */
  bufferBalance: string;
  /** the locked balance of the stream account after it puts a new object and before the object is sealed */
  lockBalance: string;
  /** the status of the stream account */
  status: StreamAccountStatus;
  /** the unix timestamp when the stream account will be settled */
  settleTimestamp: Long;
  /** the count of its out flows */
  outFlowCount: Long;
  /** the frozen netflow rate, which is used when resuming stream account */
  frozenNetflowRate: string;
}
export interface StreamRecordProtoMsg {
  typeUrl: "/greenfield.payment.StreamRecord";
  value: Uint8Array;
}
/** Stream Payment Record of a stream account */
export interface StreamRecordSDKType {
  account: string;
  crud_timestamp: Long;
  netflow_rate: string;
  static_balance: string;
  buffer_balance: string;
  lock_balance: string;
  status: StreamAccountStatus;
  settle_timestamp: Long;
  out_flow_count: Long;
  frozen_netflow_rate: string;
}
function createBaseStreamRecord(): StreamRecord {
  return {
    account: "",
    crudTimestamp: Long.ZERO,
    netflowRate: "",
    staticBalance: "",
    bufferBalance: "",
    lockBalance: "",
    status: 0,
    settleTimestamp: Long.ZERO,
    outFlowCount: Long.UZERO,
    frozenNetflowRate: ""
  };
}
export const StreamRecord = {
  typeUrl: "/greenfield.payment.StreamRecord",
  encode(message: StreamRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (!message.crudTimestamp.isZero()) {
      writer.uint32(16).int64(message.crudTimestamp);
    }
    if (message.netflowRate !== "") {
      writer.uint32(26).string(message.netflowRate);
    }
    if (message.staticBalance !== "") {
      writer.uint32(34).string(message.staticBalance);
    }
    if (message.bufferBalance !== "") {
      writer.uint32(42).string(message.bufferBalance);
    }
    if (message.lockBalance !== "") {
      writer.uint32(50).string(message.lockBalance);
    }
    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }
    if (!message.settleTimestamp.isZero()) {
      writer.uint32(64).int64(message.settleTimestamp);
    }
    if (!message.outFlowCount.isZero()) {
      writer.uint32(72).uint64(message.outFlowCount);
    }
    if (message.frozenNetflowRate !== "") {
      writer.uint32(82).string(message.frozenNetflowRate);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): StreamRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.crudTimestamp = (reader.int64() as Long);
          break;
        case 3:
          message.netflowRate = reader.string();
          break;
        case 4:
          message.staticBalance = reader.string();
          break;
        case 5:
          message.bufferBalance = reader.string();
          break;
        case 6:
          message.lockBalance = reader.string();
          break;
        case 7:
          message.status = (reader.int32() as any);
          break;
        case 8:
          message.settleTimestamp = (reader.int64() as Long);
          break;
        case 9:
          message.outFlowCount = (reader.uint64() as Long);
          break;
        case 10:
          message.frozenNetflowRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): StreamRecord {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      crudTimestamp: isSet(object.crudTimestamp) ? Long.fromValue(object.crudTimestamp) : Long.ZERO,
      netflowRate: isSet(object.netflowRate) ? String(object.netflowRate) : "",
      staticBalance: isSet(object.staticBalance) ? String(object.staticBalance) : "",
      bufferBalance: isSet(object.bufferBalance) ? String(object.bufferBalance) : "",
      lockBalance: isSet(object.lockBalance) ? String(object.lockBalance) : "",
      status: isSet(object.status) ? streamAccountStatusFromJSON(object.status) : -1,
      settleTimestamp: isSet(object.settleTimestamp) ? Long.fromValue(object.settleTimestamp) : Long.ZERO,
      outFlowCount: isSet(object.outFlowCount) ? Long.fromValue(object.outFlowCount) : Long.UZERO,
      frozenNetflowRate: isSet(object.frozenNetflowRate) ? String(object.frozenNetflowRate) : ""
    };
  },
  toJSON(message: StreamRecord): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.crudTimestamp !== undefined && (obj.crudTimestamp = (message.crudTimestamp || Long.ZERO).toString());
    message.netflowRate !== undefined && (obj.netflowRate = message.netflowRate);
    message.staticBalance !== undefined && (obj.staticBalance = message.staticBalance);
    message.bufferBalance !== undefined && (obj.bufferBalance = message.bufferBalance);
    message.lockBalance !== undefined && (obj.lockBalance = message.lockBalance);
    message.status !== undefined && (obj.status = streamAccountStatusToJSON(message.status));
    message.settleTimestamp !== undefined && (obj.settleTimestamp = (message.settleTimestamp || Long.ZERO).toString());
    message.outFlowCount !== undefined && (obj.outFlowCount = (message.outFlowCount || Long.UZERO).toString());
    message.frozenNetflowRate !== undefined && (obj.frozenNetflowRate = message.frozenNetflowRate);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<StreamRecord>, I>>(object: I): StreamRecord {
    const message = createBaseStreamRecord();
    message.account = object.account ?? "";
    message.crudTimestamp = object.crudTimestamp !== undefined && object.crudTimestamp !== null ? Long.fromValue(object.crudTimestamp) : Long.ZERO;
    message.netflowRate = object.netflowRate ?? "";
    message.staticBalance = object.staticBalance ?? "";
    message.bufferBalance = object.bufferBalance ?? "";
    message.lockBalance = object.lockBalance ?? "";
    message.status = object.status ?? 0;
    message.settleTimestamp = object.settleTimestamp !== undefined && object.settleTimestamp !== null ? Long.fromValue(object.settleTimestamp) : Long.ZERO;
    message.outFlowCount = object.outFlowCount !== undefined && object.outFlowCount !== null ? Long.fromValue(object.outFlowCount) : Long.UZERO;
    message.frozenNetflowRate = object.frozenNetflowRate ?? "";
    return message;
  },
  fromSDK(object: StreamRecordSDKType): StreamRecord {
    return {
      account: object?.account,
      crudTimestamp: object?.crud_timestamp,
      netflowRate: object?.netflow_rate,
      staticBalance: object?.static_balance,
      bufferBalance: object?.buffer_balance,
      lockBalance: object?.lock_balance,
      status: isSet(object.status) ? streamAccountStatusFromJSON(object.status) : -1,
      settleTimestamp: object?.settle_timestamp,
      outFlowCount: object?.out_flow_count,
      frozenNetflowRate: object?.frozen_netflow_rate
    };
  },
  toSDK(message: StreamRecord): StreamRecordSDKType {
    const obj: any = {};
    obj.account = message.account;
    obj.crud_timestamp = message.crudTimestamp;
    obj.netflow_rate = message.netflowRate;
    obj.static_balance = message.staticBalance;
    obj.buffer_balance = message.bufferBalance;
    obj.lock_balance = message.lockBalance;
    message.status !== undefined && (obj.status = streamAccountStatusToJSON(message.status));
    obj.settle_timestamp = message.settleTimestamp;
    obj.out_flow_count = message.outFlowCount;
    obj.frozen_netflow_rate = message.frozenNetflowRate;
    return obj;
  },
  fromAmino(object: StreamRecordAmino): StreamRecord {
    const message = createBaseStreamRecord();
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    if (object.crud_timestamp !== undefined && object.crud_timestamp !== null) {
      message.crudTimestamp = Long.fromString(object.crud_timestamp);
    }
    if (object.netflow_rate !== undefined && object.netflow_rate !== null) {
      message.netflowRate = object.netflow_rate;
    }
    if (object.static_balance !== undefined && object.static_balance !== null) {
      message.staticBalance = object.static_balance;
    }
    if (object.buffer_balance !== undefined && object.buffer_balance !== null) {
      message.bufferBalance = object.buffer_balance;
    }
    if (object.lock_balance !== undefined && object.lock_balance !== null) {
      message.lockBalance = object.lock_balance;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = streamAccountStatusFromJSON(object.status);
    }
    if (object.settle_timestamp !== undefined && object.settle_timestamp !== null) {
      message.settleTimestamp = Long.fromString(object.settle_timestamp);
    }
    if (object.out_flow_count !== undefined && object.out_flow_count !== null) {
      message.outFlowCount = Long.fromString(object.out_flow_count);
    }
    if (object.frozen_netflow_rate !== undefined && object.frozen_netflow_rate !== null) {
      message.frozenNetflowRate = object.frozen_netflow_rate;
    }
    return message;
  },
  toAmino(message: StreamRecord): StreamRecordAmino {
    const obj: any = {};
    obj.account = message.account;
    obj.crud_timestamp = message.crudTimestamp ? message.crudTimestamp.toString() : undefined;
    obj.netflow_rate = message.netflowRate;
    obj.static_balance = message.staticBalance;
    obj.buffer_balance = message.bufferBalance;
    obj.lock_balance = message.lockBalance;
    obj.status = streamAccountStatusToJSON(message.status);
    obj.settle_timestamp = message.settleTimestamp ? message.settleTimestamp.toString() : undefined;
    obj.out_flow_count = message.outFlowCount ? message.outFlowCount.toString() : undefined;
    obj.frozen_netflow_rate = message.frozenNetflowRate;
    return obj;
  },
  fromAminoMsg(object: StreamRecordAminoMsg): StreamRecord {
    return StreamRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: StreamRecordProtoMsg): StreamRecord {
    return StreamRecord.decode(message.value);
  },
  toProto(message: StreamRecord): Uint8Array {
    return StreamRecord.encode(message).finish();
  },
  toProtoMsg(message: StreamRecord): StreamRecordProtoMsg {
    return {
      typeUrl: "/greenfield.payment.StreamRecord",
      value: StreamRecord.encode(message).finish()
    };
  }
};