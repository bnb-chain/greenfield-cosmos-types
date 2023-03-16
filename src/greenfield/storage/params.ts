/* eslint-disable */
import { Long, isSet, DeepPartial, Exact } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "bnbchain.greenfield.storage";
/** Params defines the parameters for the module. */

export interface Params {
  /** max_segment_size is the maximum size of a segment. default: 16M */
  max_segment_size: Long;
  /** redundant_data_check_num is the num of data chunks of EC redundancy algorithm */

  redundant_data_chunk_num: number;
  /** redundant_data_check_num is the num of parity chunks of EC redundancy algorithm */

  redundant_parity_chunk_num: number;
  /** max_payload_size is the maximum size of the payload, default: 2G */

  max_payload_size: Long;
  /** min_charge_size is the minimum charge size of the payload, objects smaller than this size will be charged as this size */

  min_charge_size: Long;
}

function createBaseParams(): Params {
  return {
    max_segment_size: Long.UZERO,
    redundant_data_chunk_num: 0,
    redundant_parity_chunk_num: 0,
    max_payload_size: Long.UZERO,
    min_charge_size: Long.UZERO
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.max_segment_size.isZero()) {
      writer.uint32(8).uint64(message.max_segment_size);
    }

    if (message.redundant_data_chunk_num !== 0) {
      writer.uint32(16).uint32(message.redundant_data_chunk_num);
    }

    if (message.redundant_parity_chunk_num !== 0) {
      writer.uint32(24).uint32(message.redundant_parity_chunk_num);
    }

    if (!message.max_payload_size.isZero()) {
      writer.uint32(32).uint64(message.max_payload_size);
    }

    if (!message.min_charge_size.isZero()) {
      writer.uint32(40).uint64(message.min_charge_size);
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
          message.max_segment_size = (reader.uint64() as Long);
          break;

        case 2:
          message.redundant_data_chunk_num = reader.uint32();
          break;

        case 3:
          message.redundant_parity_chunk_num = reader.uint32();
          break;

        case 4:
          message.max_payload_size = (reader.uint64() as Long);
          break;

        case 5:
          message.min_charge_size = (reader.uint64() as Long);
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
      max_segment_size: isSet(object.max_segment_size) ? Long.fromValue(object.max_segment_size) : Long.UZERO,
      redundant_data_chunk_num: isSet(object.redundant_data_chunk_num) ? Number(object.redundant_data_chunk_num) : 0,
      redundant_parity_chunk_num: isSet(object.redundant_parity_chunk_num) ? Number(object.redundant_parity_chunk_num) : 0,
      max_payload_size: isSet(object.max_payload_size) ? Long.fromValue(object.max_payload_size) : Long.UZERO,
      min_charge_size: isSet(object.min_charge_size) ? Long.fromValue(object.min_charge_size) : Long.UZERO
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.max_segment_size !== undefined && (obj.max_segment_size = (message.max_segment_size || Long.UZERO).toString());
    message.redundant_data_chunk_num !== undefined && (obj.redundant_data_chunk_num = Math.round(message.redundant_data_chunk_num));
    message.redundant_parity_chunk_num !== undefined && (obj.redundant_parity_chunk_num = Math.round(message.redundant_parity_chunk_num));
    message.max_payload_size !== undefined && (obj.max_payload_size = (message.max_payload_size || Long.UZERO).toString());
    message.min_charge_size !== undefined && (obj.min_charge_size = (message.min_charge_size || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.max_segment_size = object.max_segment_size !== undefined && object.max_segment_size !== null ? Long.fromValue(object.max_segment_size) : Long.UZERO;
    message.redundant_data_chunk_num = object.redundant_data_chunk_num ?? 0;
    message.redundant_parity_chunk_num = object.redundant_parity_chunk_num ?? 0;
    message.max_payload_size = object.max_payload_size !== undefined && object.max_payload_size !== null ? Long.fromValue(object.max_payload_size) : Long.UZERO;
    message.min_charge_size = object.min_charge_size !== undefined && object.min_charge_size !== null ? Long.fromValue(object.min_charge_size) : Long.UZERO;
    return message;
  }

};