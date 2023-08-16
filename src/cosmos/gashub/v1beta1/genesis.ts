//@ts-nocheck
/* eslint-disable */
import { Params, ParamsSDKType, MsgGasParams, MsgGasParamsSDKType } from "./gashub";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "cosmos.gashub.v1beta1";
/** GenesisState defines the gashub module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params: Params;
  /** msg_gas_params defines the gas consumption for a msg type. */
  msgGasParams: MsgGasParams[];
}
/** GenesisState defines the gashub module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  msg_gas_params: MsgGasParamsSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    msgGasParams: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.msgGasParams) {
      MsgGasParams.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.msgGasParams.push(MsgGasParams.decode(reader, reader.uint32()));
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
      msgGasParams: Array.isArray(object?.msgGasParams) ? object.msgGasParams.map((e: any) => MsgGasParams.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.msgGasParams) {
      obj.msgGasParams = message.msgGasParams.map(e => e ? MsgGasParams.toJSON(e) : undefined);
    } else {
      obj.msgGasParams = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.msgGasParams = object.msgGasParams?.map(e => MsgGasParams.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined,
      msgGasParams: Array.isArray(object?.msg_gas_params) ? object.msg_gas_params.map((e: any) => MsgGasParams.fromSDK(e)) : []
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    if (message.msgGasParams) {
      obj.msg_gas_params = message.msgGasParams.map(e => e ? MsgGasParams.toSDK(e) : undefined);
    } else {
      obj.msg_gas_params = [];
    }
    return obj;
  }
};