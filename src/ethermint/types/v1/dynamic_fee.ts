/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "ethermint.types.v1";
/** ExtensionOptionDynamicFeeTx is an extension option that specify the maxPrioPrice for cosmos tx */

export interface ExtensionOptionDynamicFeeTx {
  /** the same as `max_priority_fee_per_gas` in eip-1559 spec */
  maxPriorityPrice: string;
}

function createBaseExtensionOptionDynamicFeeTx(): ExtensionOptionDynamicFeeTx {
  return {
    maxPriorityPrice: ""
  };
}

export const ExtensionOptionDynamicFeeTx = {
  encode(message: ExtensionOptionDynamicFeeTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxPriorityPrice !== "") {
      writer.uint32(10).string(message.maxPriorityPrice);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExtensionOptionDynamicFeeTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtensionOptionDynamicFeeTx();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.maxPriorityPrice = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ExtensionOptionDynamicFeeTx {
    return {
      maxPriorityPrice: isSet(object.maxPriorityPrice) ? String(object.maxPriorityPrice) : ""
    };
  },

  toJSON(message: ExtensionOptionDynamicFeeTx): unknown {
    const obj: any = {};
    message.maxPriorityPrice !== undefined && (obj.maxPriorityPrice = message.maxPriorityPrice);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ExtensionOptionDynamicFeeTx>, I>>(object: I): ExtensionOptionDynamicFeeTx {
    const message = createBaseExtensionOptionDynamicFeeTx();
    message.maxPriorityPrice = object.maxPriorityPrice ?? "";
    return message;
  }

};