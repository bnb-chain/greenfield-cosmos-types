/* eslint-disable */
import { MsgGasParams } from "./gashub";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact, Rpc } from "../../../helpers";
export const protobufPackage = "cosmos.gashub.v1alpha1";
/** MsgUpdateMsgGasParams represents a message to update msg gas params. */

export interface MsgUpdateMsgGasParams {
  from: string;
  new_params_set: MsgGasParams[];
}
/** MsgUpdateMsgGasParamsResponse defines the Msg/UpdateMsgGasParams response type. */

export interface MsgUpdateMsgGasParamsResponse {}

function createBaseMsgUpdateMsgGasParams(): MsgUpdateMsgGasParams {
  return {
    from: "",
    new_params_set: []
  };
}

export const MsgUpdateMsgGasParams = {
  encode(message: MsgUpdateMsgGasParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    for (const v of message.new_params_set) {
      MsgGasParams.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMsgGasParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMsgGasParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;

        case 2:
          message.new_params_set.push(MsgGasParams.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateMsgGasParams {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      new_params_set: Array.isArray(object?.new_params_set) ? object.new_params_set.map((e: any) => MsgGasParams.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgUpdateMsgGasParams): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);

    if (message.new_params_set) {
      obj.new_params_set = message.new_params_set.map(e => e ? MsgGasParams.toJSON(e) : undefined);
    } else {
      obj.new_params_set = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateMsgGasParams>, I>>(object: I): MsgUpdateMsgGasParams {
    const message = createBaseMsgUpdateMsgGasParams();
    message.from = object.from ?? "";
    message.new_params_set = object.new_params_set?.map(e => MsgGasParams.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgUpdateMsgGasParamsResponse(): MsgUpdateMsgGasParamsResponse {
  return {};
}

export const MsgUpdateMsgGasParamsResponse = {
  encode(_: MsgUpdateMsgGasParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMsgGasParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMsgGasParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgUpdateMsgGasParamsResponse {
    return {};
  },

  toJSON(_: MsgUpdateMsgGasParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateMsgGasParamsResponse>, I>>(_: I): MsgUpdateMsgGasParamsResponse {
    const message = createBaseMsgUpdateMsgGasParamsResponse();
    return message;
  }

};
/** Msg defines the gashub Msg service. */

export interface Msg {
  /** UpdateMsgGasParams defines a method for updating msg gas params. */
  UpdateMsgGasParams(request: MsgUpdateMsgGasParams): Promise<MsgUpdateMsgGasParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.UpdateMsgGasParams = this.UpdateMsgGasParams.bind(this);
  }

  UpdateMsgGasParams(request: MsgUpdateMsgGasParams): Promise<MsgUpdateMsgGasParamsResponse> {
    const data = MsgUpdateMsgGasParams.encode(request).finish();
    const promise = this.rpc.request("cosmos.gashub.v1alpha1.Msg", "UpdateMsgGasParams", data);
    return promise.then(data => MsgUpdateMsgGasParamsResponse.decode(new _m0.Reader(data)));
  }

}