/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "cosmos.gashub.v1alpha1";
/** EventUpdateMsgGasParams is emitted when update a msg's gas params */

export interface EventUpdateMsgGasParams {
  msg_type_url: string;
  from_value: string;
  to_value: string;
}

function createBaseEventUpdateMsgGasParams(): EventUpdateMsgGasParams {
  return {
    msg_type_url: "",
    from_value: "",
    to_value: ""
  };
}

export const EventUpdateMsgGasParams = {
  encode(message: EventUpdateMsgGasParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msg_type_url !== "") {
      writer.uint32(10).string(message.msg_type_url);
    }

    if (message.from_value !== "") {
      writer.uint32(18).string(message.from_value);
    }

    if (message.to_value !== "") {
      writer.uint32(26).string(message.to_value);
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
          message.msg_type_url = reader.string();
          break;

        case 2:
          message.from_value = reader.string();
          break;

        case 3:
          message.to_value = reader.string();
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
      msg_type_url: isSet(object.msg_type_url) ? String(object.msg_type_url) : "",
      from_value: isSet(object.from_value) ? String(object.from_value) : "",
      to_value: isSet(object.to_value) ? String(object.to_value) : ""
    };
  },

  toJSON(message: EventUpdateMsgGasParams): unknown {
    const obj: any = {};
    message.msg_type_url !== undefined && (obj.msg_type_url = message.msg_type_url);
    message.from_value !== undefined && (obj.from_value = message.from_value);
    message.to_value !== undefined && (obj.to_value = message.to_value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventUpdateMsgGasParams>, I>>(object: I): EventUpdateMsgGasParams {
    const message = createBaseEventUpdateMsgGasParams();
    message.msg_type_url = object.msg_type_url ?? "";
    message.from_value = object.from_value ?? "";
    message.to_value = object.to_value ?? "";
    return message;
  }

};