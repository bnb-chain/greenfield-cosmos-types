/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "cosmos.crosschain.v1";
/** Params holds parameters for the cross chain module. */

export interface Params {
  /** initial balance to mint for crosschain module when the chain starts */
  initModuleBalance: string;
}
/** Params holds parameters for the cross chain module. */

export interface ParamsSDKType {
  init_module_balance: string;
}

function createBaseParams(): Params {
  return {
    initModuleBalance: ""
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.initModuleBalance !== "") {
      writer.uint32(10).string(message.initModuleBalance);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.initModuleBalance = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Params {
    return {
      initModuleBalance: isSet(object.initModuleBalance) ? String(object.initModuleBalance) : ""
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.initModuleBalance !== undefined && (obj.initModuleBalance = message.initModuleBalance);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.initModuleBalance = object.initModuleBalance ?? "";
    return message;
  },

  fromSDK(object: ParamsSDKType): Params {
    return {
      initModuleBalance: object?.init_module_balance
    };
  },

  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.init_module_balance = message.initModuleBalance;
    return obj;
  }

};