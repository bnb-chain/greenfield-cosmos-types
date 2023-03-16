/* eslint-disable */
import { Params } from "./params";
import { StreamRecord } from "./stream_record";
import { PaymentAccountCount } from "./payment_account_count";
import { PaymentAccount } from "./payment_account";
import { AutoSettleRecord } from "./auto_settle_record";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../helpers";
export const protobufPackage = "bnbchain.greenfield.payment";
/** GenesisState defines the payment module's genesis state. */

export interface GenesisState {
  params?: Params;
  streamRecordList: StreamRecord[];
  paymentAccountCountList: PaymentAccountCount[];
  paymentAccountList: PaymentAccount[];
  autoSettleRecordList: AutoSettleRecord[];
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    streamRecordList: [],
    paymentAccountCountList: [],
    paymentAccountList: [],
    autoSettleRecordList: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.streamRecordList) {
      StreamRecord.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.paymentAccountCountList) {
      PaymentAccountCount.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.paymentAccountList) {
      PaymentAccount.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.autoSettleRecordList) {
      AutoSettleRecord.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.streamRecordList.push(StreamRecord.decode(reader, reader.uint32()));
          break;

        case 3:
          message.paymentAccountCountList.push(PaymentAccountCount.decode(reader, reader.uint32()));
          break;

        case 4:
          message.paymentAccountList.push(PaymentAccount.decode(reader, reader.uint32()));
          break;

        case 5:
          message.autoSettleRecordList.push(AutoSettleRecord.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      streamRecordList: Array.isArray(object?.streamRecordList) ? object.streamRecordList.map((e: any) => StreamRecord.fromJSON(e)) : [],
      paymentAccountCountList: Array.isArray(object?.paymentAccountCountList) ? object.paymentAccountCountList.map((e: any) => PaymentAccountCount.fromJSON(e)) : [],
      paymentAccountList: Array.isArray(object?.paymentAccountList) ? object.paymentAccountList.map((e: any) => PaymentAccount.fromJSON(e)) : [],
      autoSettleRecordList: Array.isArray(object?.autoSettleRecordList) ? object.autoSettleRecordList.map((e: any) => AutoSettleRecord.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);

    if (message.streamRecordList) {
      obj.streamRecordList = message.streamRecordList.map(e => e ? StreamRecord.toJSON(e) : undefined);
    } else {
      obj.streamRecordList = [];
    }

    if (message.paymentAccountCountList) {
      obj.paymentAccountCountList = message.paymentAccountCountList.map(e => e ? PaymentAccountCount.toJSON(e) : undefined);
    } else {
      obj.paymentAccountCountList = [];
    }

    if (message.paymentAccountList) {
      obj.paymentAccountList = message.paymentAccountList.map(e => e ? PaymentAccount.toJSON(e) : undefined);
    } else {
      obj.paymentAccountList = [];
    }

    if (message.autoSettleRecordList) {
      obj.autoSettleRecordList = message.autoSettleRecordList.map(e => e ? AutoSettleRecord.toJSON(e) : undefined);
    } else {
      obj.autoSettleRecordList = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.streamRecordList = object.streamRecordList?.map(e => StreamRecord.fromPartial(e)) || [];
    message.paymentAccountCountList = object.paymentAccountCountList?.map(e => PaymentAccountCount.fromPartial(e)) || [];
    message.paymentAccountList = object.paymentAccountList?.map(e => PaymentAccount.fromPartial(e)) || [];
    message.autoSettleRecordList = object.autoSettleRecordList?.map(e => AutoSettleRecord.fromPartial(e)) || [];
    return message;
  }

};