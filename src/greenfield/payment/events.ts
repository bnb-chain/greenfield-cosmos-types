//@ts-nocheck
/* eslint-disable */
import { StreamAccountStatus, streamAccountStatusFromJSON, streamAccountStatusToJSON } from "./stream_record";
import { Long, isSet, DeepPartial, Exact } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "greenfield.payment";
export enum FeePreviewType {
  FEE_PREVIEW_TYPE_PRELOCKED_FEE = 0,
  FEE_PREVIEW_TYPE_UNLOCKED_FEE = 1,
  UNRECOGNIZED = -1,
}
export const FeePreviewTypeSDKType = FeePreviewType;
export function feePreviewTypeFromJSON(object: any): FeePreviewType {
  switch (object) {
    case 0:
    case "FEE_PREVIEW_TYPE_PRELOCKED_FEE":
      return FeePreviewType.FEE_PREVIEW_TYPE_PRELOCKED_FEE;
    case 1:
    case "FEE_PREVIEW_TYPE_UNLOCKED_FEE":
      return FeePreviewType.FEE_PREVIEW_TYPE_UNLOCKED_FEE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FeePreviewType.UNRECOGNIZED;
  }
}
export function feePreviewTypeToJSON(object: FeePreviewType): string {
  switch (object) {
    case FeePreviewType.FEE_PREVIEW_TYPE_PRELOCKED_FEE:
      return "FEE_PREVIEW_TYPE_PRELOCKED_FEE";
    case FeePreviewType.FEE_PREVIEW_TYPE_UNLOCKED_FEE:
      return "FEE_PREVIEW_TYPE_UNLOCKED_FEE";
    case FeePreviewType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface EventPaymentAccountUpdate {
  /** address of the payment account */
  addr: string;
  /** owner address of the payment account */
  owner: string;
  /** whether the payment account is refundable */
  refundable: boolean;
}
export interface EventPaymentAccountUpdateProtoMsg {
  typeUrl: "/greenfield.payment.EventPaymentAccountUpdate";
  value: Uint8Array;
}
export interface EventPaymentAccountUpdateSDKType {
  addr: string;
  owner: string;
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
  /** The frozen netflow rate, which is used when resuming stream account */
  frozenNetflowRate: string;
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
}
export interface EventStreamRecordUpdateProtoMsg {
  typeUrl: "/greenfield.payment.EventStreamRecordUpdate";
  value: Uint8Array;
}
/** Stream Payment Record of a stream account */
export interface EventStreamRecordUpdateSDKType {
  account: string;
  crud_timestamp: Long;
  netflow_rate: string;
  frozen_netflow_rate: string;
  static_balance: string;
  buffer_balance: string;
  lock_balance: string;
  status: StreamAccountStatus;
  settle_timestamp: Long;
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
export interface EventForceSettleProtoMsg {
  typeUrl: "/greenfield.payment.EventForceSettle";
  value: Uint8Array;
}
/**
 * EventForceSettle may be emitted on all Msgs and EndBlocker when a payment account's
 * balance or net outflow rate is changed
 */
export interface EventForceSettleSDKType {
  addr: string;
  settled_balance: string;
}
export interface EventDeposit {
  /** from is the the address of the account to deposit from */
  from: string;
  /** to is the address of the stream account to deposit to */
  to: string;
  /** amount is the amount to deposit */
  amount: string;
}
export interface EventDepositProtoMsg {
  typeUrl: "/greenfield.payment.EventDeposit";
  value: Uint8Array;
}
export interface EventDepositSDKType {
  from: string;
  to: string;
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
export interface EventWithdrawProtoMsg {
  typeUrl: "/greenfield.payment.EventWithdraw";
  value: Uint8Array;
}
export interface EventWithdrawSDKType {
  to: string;
  from: string;
  amount: string;
}
/**
 * emit when upload/cancel/delete object, used for frontend to preview the fee changed
 * only emit in tx simulation
 */
export interface EventFeePreview {
  account: string;
  feePreviewType: FeePreviewType;
  amount: string;
}
export interface EventFeePreviewProtoMsg {
  typeUrl: "/greenfield.payment.EventFeePreview";
  value: Uint8Array;
}
/**
 * emit when upload/cancel/delete object, used for frontend to preview the fee changed
 * only emit in tx simulation
 */
export interface EventFeePreviewSDKType {
  account: string;
  fee_preview_type: FeePreviewType;
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
  typeUrl: "/greenfield.payment.EventPaymentAccountUpdate",
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
  },
  fromSDK(object: EventPaymentAccountUpdateSDKType): EventPaymentAccountUpdate {
    return {
      addr: object?.addr,
      owner: object?.owner,
      refundable: object?.refundable
    };
  },
  toSDK(message: EventPaymentAccountUpdate): EventPaymentAccountUpdateSDKType {
    const obj: any = {};
    obj.addr = message.addr;
    obj.owner = message.owner;
    obj.refundable = message.refundable;
    return obj;
  },
  fromAmino(object: EventPaymentAccountUpdateAmino): EventPaymentAccountUpdate {
    const message = createBaseEventPaymentAccountUpdate();
    if (object.addr !== undefined && object.addr !== null) {
      message.addr = object.addr;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.refundable !== undefined && object.refundable !== null) {
      message.refundable = object.refundable;
    }
    return message;
  },
  toAmino(message: EventPaymentAccountUpdate): EventPaymentAccountUpdateAmino {
    const obj: any = {};
    obj.addr = message.addr;
    obj.owner = message.owner;
    obj.refundable = message.refundable;
    return obj;
  },
  fromAminoMsg(object: EventPaymentAccountUpdateAminoMsg): EventPaymentAccountUpdate {
    return EventPaymentAccountUpdate.fromAmino(object.value);
  },
  fromProtoMsg(message: EventPaymentAccountUpdateProtoMsg): EventPaymentAccountUpdate {
    return EventPaymentAccountUpdate.decode(message.value);
  },
  toProto(message: EventPaymentAccountUpdate): Uint8Array {
    return EventPaymentAccountUpdate.encode(message).finish();
  },
  toProtoMsg(message: EventPaymentAccountUpdate): EventPaymentAccountUpdateProtoMsg {
    return {
      typeUrl: "/greenfield.payment.EventPaymentAccountUpdate",
      value: EventPaymentAccountUpdate.encode(message).finish()
    };
  }
};
function createBaseEventStreamRecordUpdate(): EventStreamRecordUpdate {
  return {
    account: "",
    crudTimestamp: Long.ZERO,
    netflowRate: "",
    frozenNetflowRate: "",
    staticBalance: "",
    bufferBalance: "",
    lockBalance: "",
    status: 0,
    settleTimestamp: Long.ZERO
  };
}
export const EventStreamRecordUpdate = {
  typeUrl: "/greenfield.payment.EventStreamRecordUpdate",
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
    if (message.frozenNetflowRate !== "") {
      writer.uint32(34).string(message.frozenNetflowRate);
    }
    if (message.staticBalance !== "") {
      writer.uint32(42).string(message.staticBalance);
    }
    if (message.bufferBalance !== "") {
      writer.uint32(50).string(message.bufferBalance);
    }
    if (message.lockBalance !== "") {
      writer.uint32(58).string(message.lockBalance);
    }
    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }
    if (!message.settleTimestamp.isZero()) {
      writer.uint32(72).int64(message.settleTimestamp);
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
          message.frozenNetflowRate = reader.string();
          break;
        case 5:
          message.staticBalance = reader.string();
          break;
        case 6:
          message.bufferBalance = reader.string();
          break;
        case 7:
          message.lockBalance = reader.string();
          break;
        case 8:
          message.status = (reader.int32() as any);
          break;
        case 9:
          message.settleTimestamp = (reader.int64() as Long);
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
      frozenNetflowRate: isSet(object.frozenNetflowRate) ? String(object.frozenNetflowRate) : "",
      staticBalance: isSet(object.staticBalance) ? String(object.staticBalance) : "",
      bufferBalance: isSet(object.bufferBalance) ? String(object.bufferBalance) : "",
      lockBalance: isSet(object.lockBalance) ? String(object.lockBalance) : "",
      status: isSet(object.status) ? streamAccountStatusFromJSON(object.status) : -1,
      settleTimestamp: isSet(object.settleTimestamp) ? Long.fromValue(object.settleTimestamp) : Long.ZERO
    };
  },
  toJSON(message: EventStreamRecordUpdate): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.crudTimestamp !== undefined && (obj.crudTimestamp = (message.crudTimestamp || Long.ZERO).toString());
    message.netflowRate !== undefined && (obj.netflowRate = message.netflowRate);
    message.frozenNetflowRate !== undefined && (obj.frozenNetflowRate = message.frozenNetflowRate);
    message.staticBalance !== undefined && (obj.staticBalance = message.staticBalance);
    message.bufferBalance !== undefined && (obj.bufferBalance = message.bufferBalance);
    message.lockBalance !== undefined && (obj.lockBalance = message.lockBalance);
    message.status !== undefined && (obj.status = streamAccountStatusToJSON(message.status));
    message.settleTimestamp !== undefined && (obj.settleTimestamp = (message.settleTimestamp || Long.ZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventStreamRecordUpdate>, I>>(object: I): EventStreamRecordUpdate {
    const message = createBaseEventStreamRecordUpdate();
    message.account = object.account ?? "";
    message.crudTimestamp = object.crudTimestamp !== undefined && object.crudTimestamp !== null ? Long.fromValue(object.crudTimestamp) : Long.ZERO;
    message.netflowRate = object.netflowRate ?? "";
    message.frozenNetflowRate = object.frozenNetflowRate ?? "";
    message.staticBalance = object.staticBalance ?? "";
    message.bufferBalance = object.bufferBalance ?? "";
    message.lockBalance = object.lockBalance ?? "";
    message.status = object.status ?? 0;
    message.settleTimestamp = object.settleTimestamp !== undefined && object.settleTimestamp !== null ? Long.fromValue(object.settleTimestamp) : Long.ZERO;
    return message;
  },
  fromSDK(object: EventStreamRecordUpdateSDKType): EventStreamRecordUpdate {
    return {
      account: object?.account,
      crudTimestamp: object?.crud_timestamp,
      netflowRate: object?.netflow_rate,
      frozenNetflowRate: object?.frozen_netflow_rate,
      staticBalance: object?.static_balance,
      bufferBalance: object?.buffer_balance,
      lockBalance: object?.lock_balance,
      status: isSet(object.status) ? streamAccountStatusFromJSON(object.status) : -1,
      settleTimestamp: object?.settle_timestamp
    };
  },
  toSDK(message: EventStreamRecordUpdate): EventStreamRecordUpdateSDKType {
    const obj: any = {};
    obj.account = message.account;
    obj.crud_timestamp = message.crudTimestamp;
    obj.netflow_rate = message.netflowRate;
    obj.frozen_netflow_rate = message.frozenNetflowRate;
    obj.static_balance = message.staticBalance;
    obj.buffer_balance = message.bufferBalance;
    obj.lock_balance = message.lockBalance;
    message.status !== undefined && (obj.status = streamAccountStatusToJSON(message.status));
    obj.settle_timestamp = message.settleTimestamp;
    return obj;
  },
  fromAmino(object: EventStreamRecordUpdateAmino): EventStreamRecordUpdate {
    const message = createBaseEventStreamRecordUpdate();
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    if (object.crud_timestamp !== undefined && object.crud_timestamp !== null) {
      message.crudTimestamp = Long.fromString(object.crud_timestamp);
    }
    if (object.netflow_rate !== undefined && object.netflow_rate !== null) {
      message.netflowRate = object.netflow_rate;
    }
    if (object.frozen_netflow_rate !== undefined && object.frozen_netflow_rate !== null) {
      message.frozenNetflowRate = object.frozen_netflow_rate;
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
    return message;
  },
  toAmino(message: EventStreamRecordUpdate): EventStreamRecordUpdateAmino {
    const obj: any = {};
    obj.account = message.account;
    obj.crud_timestamp = message.crudTimestamp ? message.crudTimestamp.toString() : undefined;
    obj.netflow_rate = message.netflowRate;
    obj.frozen_netflow_rate = message.frozenNetflowRate;
    obj.static_balance = message.staticBalance;
    obj.buffer_balance = message.bufferBalance;
    obj.lock_balance = message.lockBalance;
    obj.status = streamAccountStatusToJSON(message.status);
    obj.settle_timestamp = message.settleTimestamp ? message.settleTimestamp.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventStreamRecordUpdateAminoMsg): EventStreamRecordUpdate {
    return EventStreamRecordUpdate.fromAmino(object.value);
  },
  fromProtoMsg(message: EventStreamRecordUpdateProtoMsg): EventStreamRecordUpdate {
    return EventStreamRecordUpdate.decode(message.value);
  },
  toProto(message: EventStreamRecordUpdate): Uint8Array {
    return EventStreamRecordUpdate.encode(message).finish();
  },
  toProtoMsg(message: EventStreamRecordUpdate): EventStreamRecordUpdateProtoMsg {
    return {
      typeUrl: "/greenfield.payment.EventStreamRecordUpdate",
      value: EventStreamRecordUpdate.encode(message).finish()
    };
  }
};
function createBaseEventForceSettle(): EventForceSettle {
  return {
    addr: "",
    settledBalance: ""
  };
}
export const EventForceSettle = {
  typeUrl: "/greenfield.payment.EventForceSettle",
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
  },
  fromSDK(object: EventForceSettleSDKType): EventForceSettle {
    return {
      addr: object?.addr,
      settledBalance: object?.settled_balance
    };
  },
  toSDK(message: EventForceSettle): EventForceSettleSDKType {
    const obj: any = {};
    obj.addr = message.addr;
    obj.settled_balance = message.settledBalance;
    return obj;
  },
  fromAmino(object: EventForceSettleAmino): EventForceSettle {
    const message = createBaseEventForceSettle();
    if (object.addr !== undefined && object.addr !== null) {
      message.addr = object.addr;
    }
    if (object.settled_balance !== undefined && object.settled_balance !== null) {
      message.settledBalance = object.settled_balance;
    }
    return message;
  },
  toAmino(message: EventForceSettle): EventForceSettleAmino {
    const obj: any = {};
    obj.addr = message.addr;
    obj.settled_balance = message.settledBalance;
    return obj;
  },
  fromAminoMsg(object: EventForceSettleAminoMsg): EventForceSettle {
    return EventForceSettle.fromAmino(object.value);
  },
  fromProtoMsg(message: EventForceSettleProtoMsg): EventForceSettle {
    return EventForceSettle.decode(message.value);
  },
  toProto(message: EventForceSettle): Uint8Array {
    return EventForceSettle.encode(message).finish();
  },
  toProtoMsg(message: EventForceSettle): EventForceSettleProtoMsg {
    return {
      typeUrl: "/greenfield.payment.EventForceSettle",
      value: EventForceSettle.encode(message).finish()
    };
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
  typeUrl: "/greenfield.payment.EventDeposit",
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
  },
  fromSDK(object: EventDepositSDKType): EventDeposit {
    return {
      from: object?.from,
      to: object?.to,
      amount: object?.amount
    };
  },
  toSDK(message: EventDeposit): EventDepositSDKType {
    const obj: any = {};
    obj.from = message.from;
    obj.to = message.to;
    obj.amount = message.amount;
    return obj;
  },
  fromAmino(object: EventDepositAmino): EventDeposit {
    const message = createBaseEventDeposit();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: EventDeposit): EventDepositAmino {
    const obj: any = {};
    obj.from = message.from;
    obj.to = message.to;
    obj.amount = message.amount;
    return obj;
  },
  fromAminoMsg(object: EventDepositAminoMsg): EventDeposit {
    return EventDeposit.fromAmino(object.value);
  },
  fromProtoMsg(message: EventDepositProtoMsg): EventDeposit {
    return EventDeposit.decode(message.value);
  },
  toProto(message: EventDeposit): Uint8Array {
    return EventDeposit.encode(message).finish();
  },
  toProtoMsg(message: EventDeposit): EventDepositProtoMsg {
    return {
      typeUrl: "/greenfield.payment.EventDeposit",
      value: EventDeposit.encode(message).finish()
    };
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
  typeUrl: "/greenfield.payment.EventWithdraw",
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
  },
  fromSDK(object: EventWithdrawSDKType): EventWithdraw {
    return {
      to: object?.to,
      from: object?.from,
      amount: object?.amount
    };
  },
  toSDK(message: EventWithdraw): EventWithdrawSDKType {
    const obj: any = {};
    obj.to = message.to;
    obj.from = message.from;
    obj.amount = message.amount;
    return obj;
  },
  fromAmino(object: EventWithdrawAmino): EventWithdraw {
    const message = createBaseEventWithdraw();
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: EventWithdraw): EventWithdrawAmino {
    const obj: any = {};
    obj.to = message.to;
    obj.from = message.from;
    obj.amount = message.amount;
    return obj;
  },
  fromAminoMsg(object: EventWithdrawAminoMsg): EventWithdraw {
    return EventWithdraw.fromAmino(object.value);
  },
  fromProtoMsg(message: EventWithdrawProtoMsg): EventWithdraw {
    return EventWithdraw.decode(message.value);
  },
  toProto(message: EventWithdraw): Uint8Array {
    return EventWithdraw.encode(message).finish();
  },
  toProtoMsg(message: EventWithdraw): EventWithdrawProtoMsg {
    return {
      typeUrl: "/greenfield.payment.EventWithdraw",
      value: EventWithdraw.encode(message).finish()
    };
  }
};
function createBaseEventFeePreview(): EventFeePreview {
  return {
    account: "",
    feePreviewType: 0,
    amount: ""
  };
}
export const EventFeePreview = {
  typeUrl: "/greenfield.payment.EventFeePreview",
  encode(message: EventFeePreview, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.feePreviewType !== 0) {
      writer.uint32(16).int32(message.feePreviewType);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventFeePreview {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventFeePreview();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.feePreviewType = (reader.int32() as any);
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
  fromJSON(object: any): EventFeePreview {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      feePreviewType: isSet(object.feePreviewType) ? feePreviewTypeFromJSON(object.feePreviewType) : -1,
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  toJSON(message: EventFeePreview): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.feePreviewType !== undefined && (obj.feePreviewType = feePreviewTypeToJSON(message.feePreviewType));
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventFeePreview>, I>>(object: I): EventFeePreview {
    const message = createBaseEventFeePreview();
    message.account = object.account ?? "";
    message.feePreviewType = object.feePreviewType ?? 0;
    message.amount = object.amount ?? "";
    return message;
  },
  fromSDK(object: EventFeePreviewSDKType): EventFeePreview {
    return {
      account: object?.account,
      feePreviewType: isSet(object.fee_preview_type) ? feePreviewTypeFromJSON(object.fee_preview_type) : -1,
      amount: object?.amount
    };
  },
  toSDK(message: EventFeePreview): EventFeePreviewSDKType {
    const obj: any = {};
    obj.account = message.account;
    message.feePreviewType !== undefined && (obj.fee_preview_type = feePreviewTypeToJSON(message.feePreviewType));
    obj.amount = message.amount;
    return obj;
  },
  fromAmino(object: EventFeePreviewAmino): EventFeePreview {
    const message = createBaseEventFeePreview();
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    if (object.fee_preview_type !== undefined && object.fee_preview_type !== null) {
      message.feePreviewType = feePreviewTypeFromJSON(object.fee_preview_type);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: EventFeePreview): EventFeePreviewAmino {
    const obj: any = {};
    obj.account = message.account;
    obj.fee_preview_type = feePreviewTypeToJSON(message.feePreviewType);
    obj.amount = message.amount;
    return obj;
  },
  fromAminoMsg(object: EventFeePreviewAminoMsg): EventFeePreview {
    return EventFeePreview.fromAmino(object.value);
  },
  fromProtoMsg(message: EventFeePreviewProtoMsg): EventFeePreview {
    return EventFeePreview.decode(message.value);
  },
  toProto(message: EventFeePreview): Uint8Array {
    return EventFeePreview.encode(message).finish();
  },
  toProtoMsg(message: EventFeePreview): EventFeePreviewProtoMsg {
    return {
      typeUrl: "/greenfield.payment.EventFeePreview",
      value: EventFeePreview.encode(message).finish()
    };
  }
};