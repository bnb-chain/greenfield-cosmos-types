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
  /** relayer fee for the mirror bucket tx */

  mirrorBucketRelayerFee: string;
  /** relayer fee for the ACK or FAIL_ACK package of the mirror bucket tx */

  mirrorBucketAckRelayerFee: string;
  /** relayer fee for the mirror object tx */

  mirrorObjectRelayerFee: string;
  /** Relayer fee for the ACK or FAIL_ACK package of the mirror object tx */

  mirrorObjectAckRelayerFee: string;
  /** relayer fee for the mirror object tx */

  mirrorGroupRelayerFee: string;
  /** Relayer fee for the ACK or FAIL_ACK package of the mirror object tx */

  mirrorGroupAckRelayerFee: string;
  /** The maximum number of buckets that can be created per account */

  maxBucketsPerAccount: number;
  /** The window to count the discontinued objects or buckets */

  discontinueCountingWindow: Long;
  /** The max objects can be requested in a window */

  discontinueObjectMax: Long;
  /** The max buckets can be requested in a window */

  discontinueBucketMax: Long;
  /** The object will be deleted after the confirm period in seconds */

  discontinueConfirmPeriod: Long;
  /** The max delete objects in each end block */

  discontinueDeletionMax: Long;
}
/** Params defines the parameters for the module. */

export interface ParamsSDKType {
  max_segment_size: Long;
  redundant_data_chunk_num: number;
  redundant_parity_chunk_num: number;
  max_payload_size: Long;
  min_charge_size: Long;
  mirror_bucket_relayer_fee: string;
  mirror_bucket_ack_relayer_fee: string;
  mirror_object_relayer_fee: string;
  mirror_object_ack_relayer_fee: string;
  mirror_group_relayer_fee: string;
  mirror_group_ack_relayer_fee: string;
  max_buckets_per_account: number;
  discontinue_counting_window: Long;
  discontinue_object_max: Long;
  discontinue_bucket_max: Long;
  discontinue_confirm_period: Long;
  discontinue_deletion_max: Long;
}

function createBaseParams(): Params {
  return {
    maxSegmentSize: Long.UZERO,
    redundantDataChunkNum: 0,
    redundantParityChunkNum: 0,
    maxPayloadSize: Long.UZERO,
    minChargeSize: Long.UZERO,
    mirrorBucketRelayerFee: "",
    mirrorBucketAckRelayerFee: "",
    mirrorObjectRelayerFee: "",
    mirrorObjectAckRelayerFee: "",
    mirrorGroupRelayerFee: "",
    mirrorGroupAckRelayerFee: "",
    maxBucketsPerAccount: 0,
    discontinueCountingWindow: Long.UZERO,
    discontinueObjectMax: Long.UZERO,
    discontinueBucketMax: Long.UZERO,
    discontinueConfirmPeriod: Long.ZERO,
    discontinueDeletionMax: Long.UZERO
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

    if (message.mirrorBucketRelayerFee !== "") {
      writer.uint32(50).string(message.mirrorBucketRelayerFee);
    }

    if (message.mirrorBucketAckRelayerFee !== "") {
      writer.uint32(58).string(message.mirrorBucketAckRelayerFee);
    }

    if (message.mirrorObjectRelayerFee !== "") {
      writer.uint32(66).string(message.mirrorObjectRelayerFee);
    }

    if (message.mirrorObjectAckRelayerFee !== "") {
      writer.uint32(74).string(message.mirrorObjectAckRelayerFee);
    }

    if (message.mirrorGroupRelayerFee !== "") {
      writer.uint32(82).string(message.mirrorGroupRelayerFee);
    }

    if (message.mirrorGroupAckRelayerFee !== "") {
      writer.uint32(90).string(message.mirrorGroupAckRelayerFee);
    }

    if (message.maxBucketsPerAccount !== 0) {
      writer.uint32(96).uint32(message.maxBucketsPerAccount);
    }

    if (!message.discontinueCountingWindow.isZero()) {
      writer.uint32(104).uint64(message.discontinueCountingWindow);
    }

    if (!message.discontinueObjectMax.isZero()) {
      writer.uint32(112).uint64(message.discontinueObjectMax);
    }

    if (!message.discontinueBucketMax.isZero()) {
      writer.uint32(120).uint64(message.discontinueBucketMax);
    }

    if (!message.discontinueConfirmPeriod.isZero()) {
      writer.uint32(128).int64(message.discontinueConfirmPeriod);
    }

    if (!message.discontinueDeletionMax.isZero()) {
      writer.uint32(136).uint64(message.discontinueDeletionMax);
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

        case 6:
          message.mirrorBucketRelayerFee = reader.string();
          break;

        case 7:
          message.mirrorBucketAckRelayerFee = reader.string();
          break;

        case 8:
          message.mirrorObjectRelayerFee = reader.string();
          break;

        case 9:
          message.mirrorObjectAckRelayerFee = reader.string();
          break;

        case 10:
          message.mirrorGroupRelayerFee = reader.string();
          break;

        case 11:
          message.mirrorGroupAckRelayerFee = reader.string();
          break;

        case 12:
          message.maxBucketsPerAccount = reader.uint32();
          break;

        case 13:
          message.discontinueCountingWindow = (reader.uint64() as Long);
          break;

        case 14:
          message.discontinueObjectMax = (reader.uint64() as Long);
          break;

        case 15:
          message.discontinueBucketMax = (reader.uint64() as Long);
          break;

        case 16:
          message.discontinueConfirmPeriod = (reader.int64() as Long);
          break;

        case 17:
          message.discontinueDeletionMax = (reader.uint64() as Long);
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
      minChargeSize: isSet(object.minChargeSize) ? Long.fromValue(object.minChargeSize) : Long.UZERO,
      mirrorBucketRelayerFee: isSet(object.mirrorBucketRelayerFee) ? String(object.mirrorBucketRelayerFee) : "",
      mirrorBucketAckRelayerFee: isSet(object.mirrorBucketAckRelayerFee) ? String(object.mirrorBucketAckRelayerFee) : "",
      mirrorObjectRelayerFee: isSet(object.mirrorObjectRelayerFee) ? String(object.mirrorObjectRelayerFee) : "",
      mirrorObjectAckRelayerFee: isSet(object.mirrorObjectAckRelayerFee) ? String(object.mirrorObjectAckRelayerFee) : "",
      mirrorGroupRelayerFee: isSet(object.mirrorGroupRelayerFee) ? String(object.mirrorGroupRelayerFee) : "",
      mirrorGroupAckRelayerFee: isSet(object.mirrorGroupAckRelayerFee) ? String(object.mirrorGroupAckRelayerFee) : "",
      maxBucketsPerAccount: isSet(object.maxBucketsPerAccount) ? Number(object.maxBucketsPerAccount) : 0,
      discontinueCountingWindow: isSet(object.discontinueCountingWindow) ? Long.fromValue(object.discontinueCountingWindow) : Long.UZERO,
      discontinueObjectMax: isSet(object.discontinueObjectMax) ? Long.fromValue(object.discontinueObjectMax) : Long.UZERO,
      discontinueBucketMax: isSet(object.discontinueBucketMax) ? Long.fromValue(object.discontinueBucketMax) : Long.UZERO,
      discontinueConfirmPeriod: isSet(object.discontinueConfirmPeriod) ? Long.fromValue(object.discontinueConfirmPeriod) : Long.ZERO,
      discontinueDeletionMax: isSet(object.discontinueDeletionMax) ? Long.fromValue(object.discontinueDeletionMax) : Long.UZERO
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.maxSegmentSize !== undefined && (obj.maxSegmentSize = (message.maxSegmentSize || Long.UZERO).toString());
    message.redundantDataChunkNum !== undefined && (obj.redundantDataChunkNum = Math.round(message.redundantDataChunkNum));
    message.redundantParityChunkNum !== undefined && (obj.redundantParityChunkNum = Math.round(message.redundantParityChunkNum));
    message.maxPayloadSize !== undefined && (obj.maxPayloadSize = (message.maxPayloadSize || Long.UZERO).toString());
    message.minChargeSize !== undefined && (obj.minChargeSize = (message.minChargeSize || Long.UZERO).toString());
    message.mirrorBucketRelayerFee !== undefined && (obj.mirrorBucketRelayerFee = message.mirrorBucketRelayerFee);
    message.mirrorBucketAckRelayerFee !== undefined && (obj.mirrorBucketAckRelayerFee = message.mirrorBucketAckRelayerFee);
    message.mirrorObjectRelayerFee !== undefined && (obj.mirrorObjectRelayerFee = message.mirrorObjectRelayerFee);
    message.mirrorObjectAckRelayerFee !== undefined && (obj.mirrorObjectAckRelayerFee = message.mirrorObjectAckRelayerFee);
    message.mirrorGroupRelayerFee !== undefined && (obj.mirrorGroupRelayerFee = message.mirrorGroupRelayerFee);
    message.mirrorGroupAckRelayerFee !== undefined && (obj.mirrorGroupAckRelayerFee = message.mirrorGroupAckRelayerFee);
    message.maxBucketsPerAccount !== undefined && (obj.maxBucketsPerAccount = Math.round(message.maxBucketsPerAccount));
    message.discontinueCountingWindow !== undefined && (obj.discontinueCountingWindow = (message.discontinueCountingWindow || Long.UZERO).toString());
    message.discontinueObjectMax !== undefined && (obj.discontinueObjectMax = (message.discontinueObjectMax || Long.UZERO).toString());
    message.discontinueBucketMax !== undefined && (obj.discontinueBucketMax = (message.discontinueBucketMax || Long.UZERO).toString());
    message.discontinueConfirmPeriod !== undefined && (obj.discontinueConfirmPeriod = (message.discontinueConfirmPeriod || Long.ZERO).toString());
    message.discontinueDeletionMax !== undefined && (obj.discontinueDeletionMax = (message.discontinueDeletionMax || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.maxSegmentSize = object.maxSegmentSize !== undefined && object.maxSegmentSize !== null ? Long.fromValue(object.maxSegmentSize) : Long.UZERO;
    message.redundantDataChunkNum = object.redundantDataChunkNum ?? 0;
    message.redundantParityChunkNum = object.redundantParityChunkNum ?? 0;
    message.maxPayloadSize = object.maxPayloadSize !== undefined && object.maxPayloadSize !== null ? Long.fromValue(object.maxPayloadSize) : Long.UZERO;
    message.minChargeSize = object.minChargeSize !== undefined && object.minChargeSize !== null ? Long.fromValue(object.minChargeSize) : Long.UZERO;
    message.mirrorBucketRelayerFee = object.mirrorBucketRelayerFee ?? "";
    message.mirrorBucketAckRelayerFee = object.mirrorBucketAckRelayerFee ?? "";
    message.mirrorObjectRelayerFee = object.mirrorObjectRelayerFee ?? "";
    message.mirrorObjectAckRelayerFee = object.mirrorObjectAckRelayerFee ?? "";
    message.mirrorGroupRelayerFee = object.mirrorGroupRelayerFee ?? "";
    message.mirrorGroupAckRelayerFee = object.mirrorGroupAckRelayerFee ?? "";
    message.maxBucketsPerAccount = object.maxBucketsPerAccount ?? 0;
    message.discontinueCountingWindow = object.discontinueCountingWindow !== undefined && object.discontinueCountingWindow !== null ? Long.fromValue(object.discontinueCountingWindow) : Long.UZERO;
    message.discontinueObjectMax = object.discontinueObjectMax !== undefined && object.discontinueObjectMax !== null ? Long.fromValue(object.discontinueObjectMax) : Long.UZERO;
    message.discontinueBucketMax = object.discontinueBucketMax !== undefined && object.discontinueBucketMax !== null ? Long.fromValue(object.discontinueBucketMax) : Long.UZERO;
    message.discontinueConfirmPeriod = object.discontinueConfirmPeriod !== undefined && object.discontinueConfirmPeriod !== null ? Long.fromValue(object.discontinueConfirmPeriod) : Long.ZERO;
    message.discontinueDeletionMax = object.discontinueDeletionMax !== undefined && object.discontinueDeletionMax !== null ? Long.fromValue(object.discontinueDeletionMax) : Long.UZERO;
    return message;
  },

  fromSDK(object: ParamsSDKType): Params {
    return {
      maxSegmentSize: object?.max_segment_size,
      redundantDataChunkNum: object?.redundant_data_chunk_num,
      redundantParityChunkNum: object?.redundant_parity_chunk_num,
      maxPayloadSize: object?.max_payload_size,
      minChargeSize: object?.min_charge_size,
      mirrorBucketRelayerFee: object?.mirror_bucket_relayer_fee,
      mirrorBucketAckRelayerFee: object?.mirror_bucket_ack_relayer_fee,
      mirrorObjectRelayerFee: object?.mirror_object_relayer_fee,
      mirrorObjectAckRelayerFee: object?.mirror_object_ack_relayer_fee,
      mirrorGroupRelayerFee: object?.mirror_group_relayer_fee,
      mirrorGroupAckRelayerFee: object?.mirror_group_ack_relayer_fee,
      maxBucketsPerAccount: object?.max_buckets_per_account,
      discontinueCountingWindow: object?.discontinue_counting_window,
      discontinueObjectMax: object?.discontinue_object_max,
      discontinueBucketMax: object?.discontinue_bucket_max,
      discontinueConfirmPeriod: object?.discontinue_confirm_period,
      discontinueDeletionMax: object?.discontinue_deletion_max
    };
  },

  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.max_segment_size = message.maxSegmentSize;
    obj.redundant_data_chunk_num = message.redundantDataChunkNum;
    obj.redundant_parity_chunk_num = message.redundantParityChunkNum;
    obj.max_payload_size = message.maxPayloadSize;
    obj.min_charge_size = message.minChargeSize;
    obj.mirror_bucket_relayer_fee = message.mirrorBucketRelayerFee;
    obj.mirror_bucket_ack_relayer_fee = message.mirrorBucketAckRelayerFee;
    obj.mirror_object_relayer_fee = message.mirrorObjectRelayerFee;
    obj.mirror_object_ack_relayer_fee = message.mirrorObjectAckRelayerFee;
    obj.mirror_group_relayer_fee = message.mirrorGroupRelayerFee;
    obj.mirror_group_ack_relayer_fee = message.mirrorGroupAckRelayerFee;
    obj.max_buckets_per_account = message.maxBucketsPerAccount;
    obj.discontinue_counting_window = message.discontinueCountingWindow;
    obj.discontinue_object_max = message.discontinueObjectMax;
    obj.discontinue_bucket_max = message.discontinueBucketMax;
    obj.discontinue_confirm_period = message.discontinueConfirmPeriod;
    obj.discontinue_deletion_max = message.discontinueDeletionMax;
    return obj;
  }

};