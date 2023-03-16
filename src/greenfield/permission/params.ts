/* eslint-disable */
import { Long, isSet, DeepPartial, Exact } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "bnbchain.greenfield.permission";
/** Params defines the parameters for the module. */

export interface Params {
  maximum_statements_num: Long;
  maximum_group_num: Long;
}

function createBaseParams(): Params {
  return {
    maximum_statements_num: Long.UZERO,
    maximum_group_num: Long.UZERO
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.maximum_statements_num.isZero()) {
      writer.uint32(8).uint64(message.maximum_statements_num);
    }

    if (!message.maximum_group_num.isZero()) {
      writer.uint32(16).uint64(message.maximum_group_num);
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
          message.maximum_statements_num = (reader.uint64() as Long);
          break;

        case 2:
          message.maximum_group_num = (reader.uint64() as Long);
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
      maximum_statements_num: isSet(object.maximum_statements_num) ? Long.fromValue(object.maximum_statements_num) : Long.UZERO,
      maximum_group_num: isSet(object.maximum_group_num) ? Long.fromValue(object.maximum_group_num) : Long.UZERO
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.maximum_statements_num !== undefined && (obj.maximum_statements_num = (message.maximum_statements_num || Long.UZERO).toString());
    message.maximum_group_num !== undefined && (obj.maximum_group_num = (message.maximum_group_num || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.maximum_statements_num = object.maximum_statements_num !== undefined && object.maximum_statements_num !== null ? Long.fromValue(object.maximum_statements_num) : Long.UZERO;
    message.maximum_group_num = object.maximum_group_num !== undefined && object.maximum_group_num !== null ? Long.fromValue(object.maximum_group_num) : Long.UZERO;
    return message;
  }

};