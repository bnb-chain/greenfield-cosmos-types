/* eslint-disable */
import { OutFlowInUSD } from "./base";
import { Long, isSet, DeepPartial, Exact } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "bnbchain.greenfield.payment";
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

  status: number;
  /** the unix timestamp when the stream account will be settled */

  settleTimestamp: Long;
  /** the accumulated outflow rates of the stream account */

  outFlowsInUSD: OutFlowInUSD[];
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
    outFlowsInUSD: []
  };
}

export const StreamRecord = {
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

    for (const v of message.outFlowsInUSD) {
      OutFlowInUSD.encode(v!, writer.uint32(74).fork()).ldelim();
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
          message.status = reader.int32();
          break;

        case 8:
          message.settleTimestamp = (reader.int64() as Long);
          break;

        case 9:
          message.outFlowsInUSD.push(OutFlowInUSD.decode(reader, reader.uint32()));
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
      status: isSet(object.status) ? Number(object.status) : 0,
      settleTimestamp: isSet(object.settleTimestamp) ? Long.fromValue(object.settleTimestamp) : Long.ZERO,
      outFlowsInUSD: Array.isArray(object?.outFlowsInUSD) ? object.outFlowsInUSD.map((e: any) => OutFlowInUSD.fromJSON(e)) : []
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
    message.status !== undefined && (obj.status = Math.round(message.status));
    message.settleTimestamp !== undefined && (obj.settleTimestamp = (message.settleTimestamp || Long.ZERO).toString());

    if (message.outFlowsInUSD) {
      obj.outFlowsInUSD = message.outFlowsInUSD.map(e => e ? OutFlowInUSD.toJSON(e) : undefined);
    } else {
      obj.outFlowsInUSD = [];
    }

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
    message.outFlowsInUSD = object.outFlowsInUSD?.map(e => OutFlowInUSD.fromPartial(e)) || [];
    return message;
  }

};