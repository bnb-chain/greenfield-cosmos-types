//@ts-nocheck
/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "cosmos.gashub.v1beta1";
/** EventUpdateMsgGasParams is emitted when updating a message's gas params */
export interface EventUpdateMsgGasParams {
  /** msg_type_url is the type url of the message */
  msgTypeUrl: string;
  /** from_value is the previous gas params */
  fromValue: string;
  /** to_value is the new gas params */
  toValue: string;
}
export interface EventUpdateMsgGasParamsProtoMsg {
  typeUrl: "/cosmos.gashub.v1beta1.EventUpdateMsgGasParams";
  value: Uint8Array;
}
/** EventUpdateMsgGasParams is emitted when updating a message's gas params */
export interface EventUpdateMsgGasParamsAmino {
  /** msg_type_url is the type url of the message */
  msg_type_url?: string;
  /** from_value is the previous gas params */
  from_value?: string;
  /** to_value is the new gas params */
  to_value?: string;
}
export interface EventUpdateMsgGasParamsAminoMsg {
  type: "cosmos-sdk/EventUpdateMsgGasParams";
  value: EventUpdateMsgGasParamsAmino;
}
/** EventUpdateMsgGasParams is emitted when updating a message's gas params */
export interface EventUpdateMsgGasParamsSDKType {
  msg_type_url: string;
  from_value: string;
  to_value: string;
}
function createBaseEventUpdateMsgGasParams(): EventUpdateMsgGasParams {
  return {
    msgTypeUrl: "",
    fromValue: "",
    toValue: ""
  };
}
export const EventUpdateMsgGasParams = {
  typeUrl: "/cosmos.gashub.v1beta1.EventUpdateMsgGasParams",
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
  },
  fromSDK(object: EventUpdateMsgGasParamsSDKType): EventUpdateMsgGasParams {
    return {
      msgTypeUrl: object?.msg_type_url,
      fromValue: object?.from_value,
      toValue: object?.to_value
    };
  },
  toSDK(message: EventUpdateMsgGasParams): EventUpdateMsgGasParamsSDKType {
    const obj: any = {};
    obj.msg_type_url = message.msgTypeUrl;
    obj.from_value = message.fromValue;
    obj.to_value = message.toValue;
    return obj;
  },
  fromAmino(object: EventUpdateMsgGasParamsAmino): EventUpdateMsgGasParams {
    const message = createBaseEventUpdateMsgGasParams();
    if (object.msg_type_url !== undefined && object.msg_type_url !== null) {
      message.msgTypeUrl = object.msg_type_url;
    }
    if (object.from_value !== undefined && object.from_value !== null) {
      message.fromValue = object.from_value;
    }
    if (object.to_value !== undefined && object.to_value !== null) {
      message.toValue = object.to_value;
    }
    return message;
  },
  toAmino(message: EventUpdateMsgGasParams): EventUpdateMsgGasParamsAmino {
    const obj: any = {};
    obj.msg_type_url = message.msgTypeUrl;
    obj.from_value = message.fromValue;
    obj.to_value = message.toValue;
    return obj;
  },
  fromAminoMsg(object: EventUpdateMsgGasParamsAminoMsg): EventUpdateMsgGasParams {
    return EventUpdateMsgGasParams.fromAmino(object.value);
  },
  toAminoMsg(message: EventUpdateMsgGasParams): EventUpdateMsgGasParamsAminoMsg {
    return {
      type: "cosmos-sdk/EventUpdateMsgGasParams",
      value: EventUpdateMsgGasParams.toAmino(message)
    };
  },
  fromProtoMsg(message: EventUpdateMsgGasParamsProtoMsg): EventUpdateMsgGasParams {
    return EventUpdateMsgGasParams.decode(message.value);
  },
  toProto(message: EventUpdateMsgGasParams): Uint8Array {
    return EventUpdateMsgGasParams.encode(message).finish();
  },
  toProtoMsg(message: EventUpdateMsgGasParams): EventUpdateMsgGasParamsProtoMsg {
    return {
      typeUrl: "/cosmos.gashub.v1beta1.EventUpdateMsgGasParams",
      value: EventUpdateMsgGasParams.encode(message).finish()
    };
  }
};