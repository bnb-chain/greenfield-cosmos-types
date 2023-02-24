/* eslint-disable */
import { Long, isSet, DeepPartial, Exact } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "bnbchain.greenfield.storage";
/** Params defines the parameters for the module. */

export interface Params {
  /** max_segment_size is the maximum size of a segment. default: 16M */
  maxSegmentSize: Long;
  /** redundant_data_check_num is the num of data chunks of EC redundancy algorithm */

  redundantDataChunkNum: number;
  /** redundant_data_check_num is the num of parity chunks of EC redundancy algorithm */

  redundantParityChunkNum: number;
  /** max_payload_size is the maximum size of the payload, default: 2G */

  maxPayloadSize: Long;
}

function createBaseParams(): Params {
  return {
    maxSegmentSize: Long.UZERO,
    redundantDataChunkNum: 0,
    redundantParityChunkNum: 0,
    maxPayloadSize: Long.UZERO
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.maxSegmentSize.isZero()) {
      writer.uint32(8).uint64(message.maxSegmentSize);
    }

    if (message.redundantDataChunkNum !== 0) {
      writer.uint32(16).uint32(message.redundantDataChunkNum);
    }

    if (message.redundantParityChunkNum !== 0) {
      writer.uint32(24).uint32(message.redundantParityChunkNum);
    }

    if (!message.maxPayloadSize.isZero()) {
      writer.uint32(32).uint64(message.maxPayloadSize);
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
          message.maxSegmentSize = (reader.uint64() as Long);
          break;

        case 2:
          message.redundantDataChunkNum = reader.uint32();
          break;

        case 3:
          message.redundantParityChunkNum = reader.uint32();
          break;

        case 4:
          message.maxPayloadSize = (reader.uint64() as Long);
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
      maxSegmentSize: isSet(object.maxSegmentSize) ? Long.fromValue(object.maxSegmentSize) : Long.UZERO,
      redundantDataChunkNum: isSet(object.redundantDataChunkNum) ? Number(object.redundantDataChunkNum) : 0,
      redundantParityChunkNum: isSet(object.redundantParityChunkNum) ? Number(object.redundantParityChunkNum) : 0,
      maxPayloadSize: isSet(object.maxPayloadSize) ? Long.fromValue(object.maxPayloadSize) : Long.UZERO
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.maxSegmentSize !== undefined && (obj.maxSegmentSize = (message.maxSegmentSize || Long.UZERO).toString());
    message.redundantDataChunkNum !== undefined && (obj.redundantDataChunkNum = Math.round(message.redundantDataChunkNum));
    message.redundantParityChunkNum !== undefined && (obj.redundantParityChunkNum = Math.round(message.redundantParityChunkNum));
    message.maxPayloadSize !== undefined && (obj.maxPayloadSize = (message.maxPayloadSize || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.maxSegmentSize = object.maxSegmentSize !== undefined && object.maxSegmentSize !== null ? Long.fromValue(object.maxSegmentSize) : Long.UZERO;
    message.redundantDataChunkNum = object.redundantDataChunkNum ?? 0;
    message.redundantParityChunkNum = object.redundantParityChunkNum ?? 0;
    message.maxPayloadSize = object.maxPayloadSize !== undefined && object.maxPayloadSize !== null ? Long.fromValue(object.maxPayloadSize) : Long.UZERO;
    return message;
  }

};