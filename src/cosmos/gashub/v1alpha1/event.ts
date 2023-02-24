/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "cosmos.gashub.v1alpha1";
/** EventUpdateMsgGasParams is emitted when update a msg's gas params */

export interface EventUpdateMsgGasParams {
  msgTypeUrl: string;
  fromValue: string;
  toValue: string;
}

function createBaseEventUpdateMsgGasParams(): EventUpdateMsgGasParams {
  return {
    msgTypeUrl: "",
    fromValue: "",
    toValue: ""
  };
}

export const EventUpdateMsgGasParams = {
  encode(message: EventUpdateMsgGasParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msgTypeUrl !== "") {
      writer.uint32(10).string(message.msgTypeUrl);
    }

    if (message.fromValue !== "") {
      writer.uint32(18).string(message.fromValue);
    }

    if (message.toValue !== "") {
      writer.uint32(26).string(message.toValue);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateMsgGasParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateMsgGasParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.msgTypeUrl = reader.string();
          break;

        case 2:
          message.fromValue = reader.string();
          break;

        case 3:
          message.toValue = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventUpdateMsgGasParams {
    return {
      msgTypeUrl: isSet(object.msgTypeUrl) ? String(object.msgTypeUrl) : "",
      fromValue: isSet(object.fromValue) ? String(object.fromValue) : "",
      toValue: isSet(object.toValue) ? String(object.toValue) : ""
    };
  },

  toJSON(message: EventUpdateMsgGasParams): unknown {
    const obj: any = {};
    message.msgTypeUrl !== undefined && (obj.msgTypeUrl = message.msgTypeUrl);
    message.fromValue !== undefined && (obj.fromValue = message.fromValue);
    message.toValue !== undefined && (obj.toValue = message.toValue);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventUpdateMsgGasParams>, I>>(object: I): EventUpdateMsgGasParams {
    const message = createBaseEventUpdateMsgGasParams();
    message.msgTypeUrl = object.msgTypeUrl ?? "";
    message.fromValue = object.fromValue ?? "";
    message.toValue = object.toValue ?? "";
    return message;
  }

};