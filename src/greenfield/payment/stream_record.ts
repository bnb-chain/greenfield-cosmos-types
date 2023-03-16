/* eslint-disable */
import { StreamAccountStatus, OutFlow, streamAccountStatusFromJSON, streamAccountStatusToJSON } from "./base";
import { Long, isSet, DeepPartial, Exact } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "bnbchain.greenfield.payment";
/** Stream Payment Record of a stream account */

export interface StreamRecord {
  /** account address */
  account: string;
  /** latest update timestamp of the stream record */

  crud_timestamp: Long;
  /**
   * The per-second rate that an account's balance is changing.
   * It is the sum of the account's inbound and outbound flow rates.
   */

  netflow_rate: string;
  /** The balance of the stream account at the latest CRUD timestamp. */

  static_balance: string;
  /**
   * reserved balance of the stream account
   * If the netflow rate is negative, the reserved balance is `netflow_rate * reserve_time`
   */

  buffer_balance: string;
  /** the locked balance of the stream account after it puts a new object and before the object is sealed */

  lock_balance: string;
  /** the status of the stream account */

  status: StreamAccountStatus;
  /** the unix timestamp when the stream account will be settled */

  settle_timestamp: Long;
  /** the accumulated outflow rates of the stream account */

  out_flows: OutFlow[];
}

function createBaseStreamRecord(): StreamRecord {
  return {
    account: "",
    crud_timestamp: Long.ZERO,
    netflow_rate: "",
    static_balance: "",
    buffer_balance: "",
    lock_balance: "",
    status: 0,
    settle_timestamp: Long.ZERO,
    out_flows: []
  };
}

export const StreamRecord = {
  encode(message: StreamRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }

    if (!message.crud_timestamp.isZero()) {
      writer.uint32(16).int64(message.crud_timestamp);
    }

    if (message.netflow_rate !== "") {
      writer.uint32(26).string(message.netflow_rate);
    }

    if (message.static_balance !== "") {
      writer.uint32(34).string(message.static_balance);
    }

    if (message.buffer_balance !== "") {
      writer.uint32(42).string(message.buffer_balance);
    }

    if (message.lock_balance !== "") {
      writer.uint32(50).string(message.lock_balance);
    }

    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }

    if (!message.settle_timestamp.isZero()) {
      writer.uint32(64).int64(message.settle_timestamp);
    }

    for (const v of message.out_flows) {
      OutFlow.encode(v!, writer.uint32(74).fork()).ldelim();
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
          message.crud_timestamp = (reader.int64() as Long);
          break;

        case 3:
          message.netflow_rate = reader.string();
          break;

        case 4:
          message.static_balance = reader.string();
          break;

        case 5:
          message.buffer_balance = reader.string();
          break;

        case 6:
          message.lock_balance = reader.string();
          break;

        case 7:
          message.status = (reader.int32() as any);
          break;

        case 8:
          message.settle_timestamp = (reader.int64() as Long);
          break;

        case 9:
          message.out_flows.push(OutFlow.decode(reader, reader.uint32()));
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
      crud_timestamp: isSet(object.crud_timestamp) ? Long.fromValue(object.crud_timestamp) : Long.ZERO,
      netflow_rate: isSet(object.netflow_rate) ? String(object.netflow_rate) : "",
      static_balance: isSet(object.static_balance) ? String(object.static_balance) : "",
      buffer_balance: isSet(object.buffer_balance) ? String(object.buffer_balance) : "",
      lock_balance: isSet(object.lock_balance) ? String(object.lock_balance) : "",
      status: isSet(object.status) ? streamAccountStatusFromJSON(object.status) : 0,
      settle_timestamp: isSet(object.settle_timestamp) ? Long.fromValue(object.settle_timestamp) : Long.ZERO,
      out_flows: Array.isArray(object?.out_flows) ? object.out_flows.map((e: any) => OutFlow.fromJSON(e)) : []
    };
  },

  toJSON(message: StreamRecord): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.crud_timestamp !== undefined && (obj.crud_timestamp = (message.crud_timestamp || Long.ZERO).toString());
    message.netflow_rate !== undefined && (obj.netflow_rate = message.netflow_rate);
    message.static_balance !== undefined && (obj.static_balance = message.static_balance);
    message.buffer_balance !== undefined && (obj.buffer_balance = message.buffer_balance);
    message.lock_balance !== undefined && (obj.lock_balance = message.lock_balance);
    message.status !== undefined && (obj.status = streamAccountStatusToJSON(message.status));
    message.settle_timestamp !== undefined && (obj.settle_timestamp = (message.settle_timestamp || Long.ZERO).toString());

    if (message.out_flows) {
      obj.out_flows = message.out_flows.map(e => e ? OutFlow.toJSON(e) : undefined);
    } else {
      obj.out_flows = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StreamRecord>, I>>(object: I): StreamRecord {
    const message = createBaseStreamRecord();
    message.account = object.account ?? "";
    message.crud_timestamp = object.crud_timestamp !== undefined && object.crud_timestamp !== null ? Long.fromValue(object.crud_timestamp) : Long.ZERO;
    message.netflow_rate = object.netflow_rate ?? "";
    message.static_balance = object.static_balance ?? "";
    message.buffer_balance = object.buffer_balance ?? "";
    message.lock_balance = object.lock_balance ?? "";
    message.status = object.status ?? 0;
    message.settle_timestamp = object.settle_timestamp !== undefined && object.settle_timestamp !== null ? Long.fromValue(object.settle_timestamp) : Long.ZERO;
    message.out_flows = object.out_flows?.map(e => OutFlow.fromPartial(e)) || [];
    return message;
  }

};