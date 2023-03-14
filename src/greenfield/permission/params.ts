/* eslint-disable */
import { Long, isSet, DeepPartial, Exact } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "bnbchain.greenfield.permission";
/** Params defines the parameters for the module. */

export interface Params {
  maximumStatementsNum: Long;
  maximumGroupNum: Long;
}

function createBaseParams(): Params {
  return {
    maximumStatementsNum: Long.UZERO,
    maximumGroupNum: Long.UZERO
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.maximumStatementsNum.isZero()) {
      writer.uint32(8).uint64(message.maximumStatementsNum);
    }

    if (!message.maximumGroupNum.isZero()) {
      writer.uint32(16).uint64(message.maximumGroupNum);
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
          message.maximumStatementsNum = (reader.uint64() as Long);
          break;

        case 2:
          message.maximumGroupNum = (reader.uint64() as Long);
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
      maximumStatementsNum: isSet(object.maximumStatementsNum) ? Long.fromValue(object.maximumStatementsNum) : Long.UZERO,
      maximumGroupNum: isSet(object.maximumGroupNum) ? Long.fromValue(object.maximumGroupNum) : Long.UZERO
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.maximumStatementsNum !== undefined && (obj.maximumStatementsNum = (message.maximumStatementsNum || Long.UZERO).toString());
    message.maximumGroupNum !== undefined && (obj.maximumGroupNum = (message.maximumGroupNum || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.maximumStatementsNum = object.maximumStatementsNum !== undefined && object.maximumStatementsNum !== null ? Long.fromValue(object.maximumStatementsNum) : Long.UZERO;
    message.maximumGroupNum = object.maximumGroupNum !== undefined && object.maximumGroupNum !== null ? Long.fromValue(object.maximumGroupNum) : Long.UZERO;
    return message;
  }

};