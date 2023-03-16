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
  stream_record_list: StreamRecord[];
  payment_account_count_list: PaymentAccountCount[];
  payment_account_list: PaymentAccount[];
  auto_settle_record_list: AutoSettleRecord[];
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    stream_record_list: [],
    payment_account_count_list: [],
    payment_account_list: [],
    auto_settle_record_list: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.stream_record_list) {
      StreamRecord.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.payment_account_count_list) {
      PaymentAccountCount.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.payment_account_list) {
      PaymentAccount.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.auto_settle_record_list) {
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
          message.stream_record_list.push(StreamRecord.decode(reader, reader.uint32()));
          break;

        case 3:
          message.payment_account_count_list.push(PaymentAccountCount.decode(reader, reader.uint32()));
          break;

        case 4:
          message.payment_account_list.push(PaymentAccount.decode(reader, reader.uint32()));
          break;

        case 5:
          message.auto_settle_record_list.push(AutoSettleRecord.decode(reader, reader.uint32()));
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
      stream_record_list: Array.isArray(object?.stream_record_list) ? object.stream_record_list.map((e: any) => StreamRecord.fromJSON(e)) : [],
      payment_account_count_list: Array.isArray(object?.payment_account_count_list) ? object.payment_account_count_list.map((e: any) => PaymentAccountCount.fromJSON(e)) : [],
      payment_account_list: Array.isArray(object?.payment_account_list) ? object.payment_account_list.map((e: any) => PaymentAccount.fromJSON(e)) : [],
      auto_settle_record_list: Array.isArray(object?.auto_settle_record_list) ? object.auto_settle_record_list.map((e: any) => AutoSettleRecord.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);

    if (message.stream_record_list) {
      obj.stream_record_list = message.stream_record_list.map(e => e ? StreamRecord.toJSON(e) : undefined);
    } else {
      obj.stream_record_list = [];
    }

    if (message.payment_account_count_list) {
      obj.payment_account_count_list = message.payment_account_count_list.map(e => e ? PaymentAccountCount.toJSON(e) : undefined);
    } else {
      obj.payment_account_count_list = [];
    }

    if (message.payment_account_list) {
      obj.payment_account_list = message.payment_account_list.map(e => e ? PaymentAccount.toJSON(e) : undefined);
    } else {
      obj.payment_account_list = [];
    }

    if (message.auto_settle_record_list) {
      obj.auto_settle_record_list = message.auto_settle_record_list.map(e => e ? AutoSettleRecord.toJSON(e) : undefined);
    } else {
      obj.auto_settle_record_list = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.stream_record_list = object.stream_record_list?.map(e => StreamRecord.fromPartial(e)) || [];
    message.payment_account_count_list = object.payment_account_count_list?.map(e => PaymentAccountCount.fromPartial(e)) || [];
    message.payment_account_list = object.payment_account_list?.map(e => PaymentAccount.fromPartial(e)) || [];
    message.auto_settle_record_list = object.auto_settle_record_list?.map(e => AutoSettleRecord.fromPartial(e)) || [];
    return message;
  }

};