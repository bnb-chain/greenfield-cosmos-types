/* eslint-disable */
import { StreamAccountStatus, OutFlow, streamAccountStatusFromJSON, streamAccountStatusToJSON } from "./base";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact, Long } from "../../helpers";
export const protobufPackage = "bnbchain.greenfield.payment";
export interface EventPaymentAccountUpdate {
  /** address of the payment account */
  addr: string;
  /** owner address of the payment account */

  owner: string;
  /** whether the payment account is refundable */

  refundable: boolean;
}
/** Stream Payment Record of a stream account */

export interface EventStreamRecordUpdate {
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
  /** the accumulated outflow rates of the stream account */

  outFlows: OutFlow[];
}
/**
 * EventForceSettle may be emitted on all Msgs and EndBlocker when a payment account's
 * balance or net outflow rate is changed
 */

export interface EventForceSettle {
  /** address of the payment account */
  addr: string;
  /**
   * left balance of the payment account after force settlement
   * if the balance is positive, it will go to the governance stream account
   * if the balance is negative, it's the debt of the system, which will be paid by the governance stream account
   */

  settledBalance: string;
}
export interface EventDeposit {
  /** from is the the address of the account to deposit from */
  from: string;
  /** to is the address of the stream account to deposit to */

  to: string;
  /** amount is the amount to deposit */

  amount: string;
}
export interface EventWithdraw {
  /** to the address of the receive account */
  to: string;
  /** from is the address of the stream account to withdraw from */

  from: string;
  /** amount is the amount to withdraw */

  amount: string;
}

function createBaseEventPaymentAccountUpdate(): EventPaymentAccountUpdate {
  return {
    addr: "",
    owner: "",
    refundable: false
  };
}

export const EventPaymentAccountUpdate = {
  encode(message: EventPaymentAccountUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.addr !== "") {
      writer.uint32(10).string(message.addr);
    }

    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }

    if (message.refundable === true) {
      writer.uint32(24).bool(message.refundable);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventPaymentAccountUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPaymentAccountUpdate();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.addr = reader.string();
          break;

        case 2:
          message.owner = reader.string();
          break;

        case 3:
          message.refundable = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventPaymentAccountUpdate {
    return {
      addr: isSet(object.addr) ? String(object.addr) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      refundable: isSet(object.refundable) ? Boolean(object.refundable) : false
    };
  },

  toJSON(message: EventPaymentAccountUpdate): unknown {
    const obj: any = {};
    message.addr !== undefined && (obj.addr = message.addr);
    message.owner !== undefined && (obj.owner = message.owner);
    message.refundable !== undefined && (obj.refundable = message.refundable);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventPaymentAccountUpdate>, I>>(object: I): EventPaymentAccountUpdate {
    const message = createBaseEventPaymentAccountUpdate();
    message.addr = object.addr ?? "";
    message.owner = object.owner ?? "";
    message.refundable = object.refundable ?? false;
    return message;
  }

};

function createBaseEventStreamRecordUpdate(): EventStreamRecordUpdate {
  return {
    account: "",
    crudTimestamp: Long.ZERO,
    netflowRate: "",
    staticBalance: "",
    bufferBalance: "",
    lockBalance: "",
    status: 0,
    settleTimestamp: Long.ZERO,
    outFlows: []
  };
}

export const EventStreamRecordUpdate = {
  encode(message: EventStreamRecordUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    for (const v of message.outFlows) {
      OutFlow.encode(v!, writer.uint32(74).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventStreamRecordUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventStreamRecordUpdate();

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
          message.outFlows.push(OutFlow.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventStreamRecordUpdate {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      crudTimestamp: isSet(object.crudTimestamp) ? Long.fromValue(object.crudTimestamp) : Long.ZERO,
      netflowRate: isSet(object.netflowRate) ? String(object.netflowRate) : "",
      staticBalance: isSet(object.staticBalance) ? String(object.staticBalance) : "",
      bufferBalance: isSet(object.bufferBalance) ? String(object.bufferBalance) : "",
      lockBalance: isSet(object.lockBalance) ? String(object.lockBalance) : "",
      status: isSet(object.status) ? streamAccountStatusFromJSON(object.status) : 0,
      settleTimestamp: isSet(object.settleTimestamp) ? Long.fromValue(object.settleTimestamp) : Long.ZERO,
      outFlows: Array.isArray(object?.outFlows) ? object.outFlows.map((e: any) => OutFlow.fromJSON(e)) : []
    };
  },

  toJSON(message: EventStreamRecordUpdate): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.crudTimestamp !== undefined && (obj.crudTimestamp = (message.crudTimestamp || Long.ZERO).toString());
    message.netflowRate !== undefined && (obj.netflowRate = message.netflowRate);
    message.staticBalance !== undefined && (obj.staticBalance = message.staticBalance);
    message.bufferBalance !== undefined && (obj.bufferBalance = message.bufferBalance);
    message.lockBalance !== undefined && (obj.lockBalance = message.lockBalance);
    message.status !== undefined && (obj.status = streamAccountStatusToJSON(message.status));
    message.settleTimestamp !== undefined && (obj.settleTimestamp = (message.settleTimestamp || Long.ZERO).toString());

    if (message.outFlows) {
      obj.outFlows = message.outFlows.map(e => e ? OutFlow.toJSON(e) : undefined);
    } else {
      obj.outFlows = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventStreamRecordUpdate>, I>>(object: I): EventStreamRecordUpdate {
    const message = createBaseEventStreamRecordUpdate();
    message.account = object.account ?? "";
    message.crudTimestamp = object.crudTimestamp !== undefined && object.crudTimestamp !== null ? Long.fromValue(object.crudTimestamp) : Long.ZERO;
    message.netflowRate = object.netflowRate ?? "";
    message.staticBalance = object.staticBalance ?? "";
    message.bufferBalance = object.bufferBalance ?? "";
    message.lockBalance = object.lockBalance ?? "";
    message.status = object.status ?? 0;
    message.settleTimestamp = object.settleTimestamp !== undefined && object.settleTimestamp !== null ? Long.fromValue(object.settleTimestamp) : Long.ZERO;
    message.outFlows = object.outFlows?.map(e => OutFlow.fromPartial(e)) || [];
    return message;
  }

};

function createBaseEventForceSettle(): EventForceSettle {
  return {
    addr: "",
    settledBalance: ""
  };
}

export const EventForceSettle = {
  encode(message: EventForceSettle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.addr !== "") {
      writer.uint32(10).string(message.addr);
    }

    if (message.settledBalance !== "") {
      writer.uint32(18).string(message.settledBalance);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventForceSettle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventForceSettle();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.addr = reader.string();
          break;

        case 2:
          message.settledBalance = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventForceSettle {
    return {
      addr: isSet(object.addr) ? String(object.addr) : "",
      settledBalance: isSet(object.settledBalance) ? String(object.settledBalance) : ""
    };
  },

  toJSON(message: EventForceSettle): unknown {
    const obj: any = {};
    message.addr !== undefined && (obj.addr = message.addr);
    message.settledBalance !== undefined && (obj.settledBalance = message.settledBalance);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventForceSettle>, I>>(object: I): EventForceSettle {
    const message = createBaseEventForceSettle();
    message.addr = object.addr ?? "";
    message.settledBalance = object.settledBalance ?? "";
    return message;
  }

};

function createBaseEventDeposit(): EventDeposit {
  return {
    from: "",
    to: "",
    amount: ""
  };
}

export const EventDeposit = {
  encode(message: EventDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }

    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventDeposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDeposit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;

        case 2:
          message.to = reader.string();
          break;

        case 3:
          message.amount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventDeposit {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },

  toJSON(message: EventDeposit): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventDeposit>, I>>(object: I): EventDeposit {
    const message = createBaseEventDeposit();
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.amount = object.amount ?? "";
    return message;
  }

};

function createBaseEventWithdraw(): EventWithdraw {
  return {
    to: "",
    from: "",
    amount: ""
  };
}

export const EventWithdraw = {
  encode(message: EventWithdraw, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.to !== "") {
      writer.uint32(10).string(message.to);
    }

    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }

    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventWithdraw {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventWithdraw();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.to = reader.string();
          break;

        case 2:
          message.from = reader.string();
          break;

        case 3:
          message.amount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventWithdraw {
    return {
      to: isSet(object.to) ? String(object.to) : "",
      from: isSet(object.from) ? String(object.from) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },

  toJSON(message: EventWithdraw): unknown {
    const obj: any = {};
    message.to !== undefined && (obj.to = message.to);
    message.from !== undefined && (obj.from = message.from);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventWithdraw>, I>>(object: I): EventWithdraw {
    const message = createBaseEventWithdraw();
    message.to = object.to ?? "";
    message.from = object.from ?? "";
    message.amount = object.amount ?? "";
    return message;
  }

};