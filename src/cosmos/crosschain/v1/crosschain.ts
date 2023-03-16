/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "cosmos.crosschain.v1";
/** Params holds parameters for the cross chain module. */

export interface Params {
  init_module_balance: string;
}

function createBaseParams(): Params {
  return {
    init_module_balance: ""
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.init_module_balance !== "") {
      writer.uint32(10).string(message.init_module_balance);
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
          message.init_module_balance = reader.string();
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
      init_module_balance: isSet(object.init_module_balance) ? String(object.init_module_balance) : ""
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.init_module_balance !== undefined && (obj.init_module_balance = message.init_module_balance);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.init_module_balance = object.init_module_balance ?? "";
    return message;
  }

};