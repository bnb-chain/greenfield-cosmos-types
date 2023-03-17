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
  /** min_charge_size is the minimum charge size of the payload, objects smaller than this size will be charged as this size */

  minChargeSize: Long;
}
/** Params defines the parameters for the module. */

export interface ParamsSDKType {
  max_segment_size: Long;
  redundant_data_chunk_num: number;
  redundant_parity_chunk_num: number;
  max_payload_size: Long;
  min_charge_size: Long;
}

function createBaseParams(): Params {
  return {
    maxSegmentSize: Long.UZERO,
    redundantDataChunkNum: 0,
    redundantParityChunkNum: 0,
    maxPayloadSize: Long.UZERO,
    minChargeSize: Long.UZERO
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

    if (!message.minChargeSize.isZero()) {
      writer.uint32(40).uint64(message.minChargeSize);
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

        case 5:
          message.minChargeSize = (reader.uint64() as Long);
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
      maxPayloadSize: isSet(object.maxPayloadSize) ? Long.fromValue(object.maxPayloadSize) : Long.UZERO,
      minChargeSize: isSet(object.minChargeSize) ? Long.fromValue(object.minChargeSize) : Long.UZERO
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.maxSegmentSize !== undefined && (obj.maxSegmentSize = (message.maxSegmentSize || Long.UZERO).toString());
    message.redundantDataChunkNum !== undefined && (obj.redundantDataChunkNum = Math.round(message.redundantDataChunkNum));
    message.redundantParityChunkNum !== undefined && (obj.redundantParityChunkNum = Math.round(message.redundantParityChunkNum));
    message.maxPayloadSize !== undefined && (obj.maxPayloadSize = (message.maxPayloadSize || Long.UZERO).toString());
    message.minChargeSize !== undefined && (obj.minChargeSize = (message.minChargeSize || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.maxSegmentSize = object.maxSegmentSize !== undefined && object.maxSegmentSize !== null ? Long.fromValue(object.maxSegmentSize) : Long.UZERO;
    message.redundantDataChunkNum = object.redundantDataChunkNum ?? 0;
    message.redundantParityChunkNum = object.redundantParityChunkNum ?? 0;
    message.maxPayloadSize = object.maxPayloadSize !== undefined && object.maxPayloadSize !== null ? Long.fromValue(object.maxPayloadSize) : Long.UZERO;
    message.minChargeSize = object.minChargeSize !== undefined && object.minChargeSize !== null ? Long.fromValue(object.minChargeSize) : Long.UZERO;
    return message;
  },

  fromSDK(object: ParamsSDKType): Params {
    return {
      maxSegmentSize: object?.max_segment_size,
      redundantDataChunkNum: object?.redundant_data_chunk_num,
      redundantParityChunkNum: object?.redundant_parity_chunk_num,
      maxPayloadSize: object?.max_payload_size,
      minChargeSize: object?.min_charge_size
    };
  },

  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.max_segment_size = message.maxSegmentSize;
    obj.redundant_data_chunk_num = message.redundantDataChunkNum;
    obj.redundant_parity_chunk_num = message.redundantParityChunkNum;
    obj.max_payload_size = message.maxPayloadSize;
    obj.min_charge_size = message.minChargeSize;
    return obj;
  }

};