//@ts-nocheck
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
export const protobufPackage = "greenfield.storage";
/** Params defines the parameters for the module. */
export interface Params {
  versionedParams: VersionedParams;
  /** max_payload_size is the maximum size of the payload, default: 2G */
  maxPayloadSize: bigint;
  /** relayer fee for the mirror bucket tx to bsc */
  bscMirrorBucketRelayerFee: string;
  /** relayer fee for the ACK or FAIL_ACK package of the mirror bucket tx to bsc */
  bscMirrorBucketAckRelayerFee: string;
  /** relayer fee for the mirror object tx to bsc */
  bscMirrorObjectRelayerFee: string;
  /** Relayer fee for the ACK or FAIL_ACK package of the mirror object tx to bsc */
  bscMirrorObjectAckRelayerFee: string;
  /** relayer fee for the mirror object tx to bsc */
  bscMirrorGroupRelayerFee: string;
  /** Relayer fee for the ACK or FAIL_ACK package of the mirror object tx to bsc */
  bscMirrorGroupAckRelayerFee: string;
  /** The maximum number of buckets that can be created per account */
  maxBucketsPerAccount: number;
  /** The window to count the discontinued objects or buckets */
  discontinueCountingWindow: bigint;
  /** The max objects can be requested in a window */
  discontinueObjectMax: bigint;
  /** The max buckets can be requested in a window */
  discontinueBucketMax: bigint;
  /** The object will be deleted after the confirm period in seconds */
  discontinueConfirmPeriod: bigint;
  /** The max delete objects in each end block */
  discontinueDeletionMax: bigint;
  /** The max number for deleting policy in each end block */
  stalePolicyCleanupMax: bigint;
  /** The min interval for making quota smaller in seconds */
  minQuotaUpdateInterval: bigint;
  /** the max number of local virtual group per bucket */
  maxLocalVirtualGroupNumPerBucket: number;
  /** relayer fee for the mirror bucket tx to op chain */
  opMirrorBucketRelayerFee: string;
  /** relayer fee for the ACK or FAIL_ACK package of the mirror bucket tx to op chain */
  opMirrorBucketAckRelayerFee: string;
  /** relayer fee for the mirror object tx to op chain */
  opMirrorObjectRelayerFee: string;
  /** Relayer fee for the ACK or FAIL_ACK package of the mirror object tx to op chain */
  opMirrorObjectAckRelayerFee: string;
  /** relayer fee for the mirror object tx to op chain */
  opMirrorGroupRelayerFee: string;
  /** Relayer fee for the ACK or FAIL_ACK package of the mirror object tx to op chain */
  opMirrorGroupAckRelayerFee: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/greenfield.storage.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  versioned_params: VersionedParamsSDKType;
  max_payload_size: bigint;
  bsc_mirror_bucket_relayer_fee: string;
  bsc_mirror_bucket_ack_relayer_fee: string;
  bsc_mirror_object_relayer_fee: string;
  bsc_mirror_object_ack_relayer_fee: string;
  bsc_mirror_group_relayer_fee: string;
  bsc_mirror_group_ack_relayer_fee: string;
  max_buckets_per_account: number;
  discontinue_counting_window: bigint;
  discontinue_object_max: bigint;
  discontinue_bucket_max: bigint;
  discontinue_confirm_period: bigint;
  discontinue_deletion_max: bigint;
  stale_policy_cleanup_max: bigint;
  min_quota_update_interval: bigint;
  max_local_virtual_group_num_per_bucket: number;
  op_mirror_bucket_relayer_fee: string;
  op_mirror_bucket_ack_relayer_fee: string;
  op_mirror_object_relayer_fee: string;
  op_mirror_object_ack_relayer_fee: string;
  op_mirror_group_relayer_fee: string;
  op_mirror_group_ack_relayer_fee: string;
}
/** VersionedParams defines the parameters for the storage module with multi version, each version store with different timestamp. */
export interface VersionedParams {
  /** max_segment_size is the maximum size of a segment. default: 16M */
  maxSegmentSize: bigint;
  /** redundant_data_check_num is the num of data chunks of EC redundancy algorithm */
  redundantDataChunkNum: number;
  /** redundant_data_check_num is the num of parity chunks of EC redundancy algorithm */
  redundantParityChunkNum: number;
  /** min_charge_size is the minimum charge size of the payload, objects smaller than this size will be charged as this size */
  minChargeSize: bigint;
}
export interface VersionedParamsProtoMsg {
  typeUrl: "/greenfield.storage.VersionedParams";
  value: Uint8Array;
}
/** VersionedParams defines the parameters for the storage module with multi version, each version store with different timestamp. */
export interface VersionedParamsSDKType {
  max_segment_size: bigint;
  redundant_data_chunk_num: number;
  redundant_parity_chunk_num: number;
  min_charge_size: bigint;
}
function createBaseParams(): Params {
  return {
    versionedParams: VersionedParams.fromPartial({}),
    maxPayloadSize: BigInt(0),
    bscMirrorBucketRelayerFee: "",
    bscMirrorBucketAckRelayerFee: "",
    bscMirrorObjectRelayerFee: "",
    bscMirrorObjectAckRelayerFee: "",
    bscMirrorGroupRelayerFee: "",
    bscMirrorGroupAckRelayerFee: "",
    maxBucketsPerAccount: 0,
    discontinueCountingWindow: BigInt(0),
    discontinueObjectMax: BigInt(0),
    discontinueBucketMax: BigInt(0),
    discontinueConfirmPeriod: BigInt(0),
    discontinueDeletionMax: BigInt(0),
    stalePolicyCleanupMax: BigInt(0),
    minQuotaUpdateInterval: BigInt(0),
    maxLocalVirtualGroupNumPerBucket: 0,
    opMirrorBucketRelayerFee: "",
    opMirrorBucketAckRelayerFee: "",
    opMirrorObjectRelayerFee: "",
    opMirrorObjectAckRelayerFee: "",
    opMirrorGroupRelayerFee: "",
    opMirrorGroupAckRelayerFee: ""
  };
}
export const Params = {
  typeUrl: "/greenfield.storage.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.versionedParams !== undefined) {
      VersionedParams.encode(message.versionedParams, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxPayloadSize !== BigInt(0)) {
      writer.uint32(16).uint64(message.maxPayloadSize);
    }
    if (message.bscMirrorBucketRelayerFee !== "") {
      writer.uint32(26).string(message.bscMirrorBucketRelayerFee);
    }
    if (message.bscMirrorBucketAckRelayerFee !== "") {
      writer.uint32(34).string(message.bscMirrorBucketAckRelayerFee);
    }
    if (message.bscMirrorObjectRelayerFee !== "") {
      writer.uint32(42).string(message.bscMirrorObjectRelayerFee);
    }
    if (message.bscMirrorObjectAckRelayerFee !== "") {
      writer.uint32(50).string(message.bscMirrorObjectAckRelayerFee);
    }
    if (message.bscMirrorGroupRelayerFee !== "") {
      writer.uint32(58).string(message.bscMirrorGroupRelayerFee);
    }
    if (message.bscMirrorGroupAckRelayerFee !== "") {
      writer.uint32(66).string(message.bscMirrorGroupAckRelayerFee);
    }
    if (message.maxBucketsPerAccount !== 0) {
      writer.uint32(72).uint32(message.maxBucketsPerAccount);
    }
    if (message.discontinueCountingWindow !== BigInt(0)) {
      writer.uint32(80).uint64(message.discontinueCountingWindow);
    }
    if (message.discontinueObjectMax !== BigInt(0)) {
      writer.uint32(88).uint64(message.discontinueObjectMax);
    }
    if (message.discontinueBucketMax !== BigInt(0)) {
      writer.uint32(96).uint64(message.discontinueBucketMax);
    }
    if (message.discontinueConfirmPeriod !== BigInt(0)) {
      writer.uint32(104).int64(message.discontinueConfirmPeriod);
    }
    if (message.discontinueDeletionMax !== BigInt(0)) {
      writer.uint32(112).uint64(message.discontinueDeletionMax);
    }
    if (message.stalePolicyCleanupMax !== BigInt(0)) {
      writer.uint32(120).uint64(message.stalePolicyCleanupMax);
    }
    if (message.minQuotaUpdateInterval !== BigInt(0)) {
      writer.uint32(128).uint64(message.minQuotaUpdateInterval);
    }
    if (message.maxLocalVirtualGroupNumPerBucket !== 0) {
      writer.uint32(136).uint32(message.maxLocalVirtualGroupNumPerBucket);
    }
    if (message.opMirrorBucketRelayerFee !== "") {
      writer.uint32(146).string(message.opMirrorBucketRelayerFee);
    }
    if (message.opMirrorBucketAckRelayerFee !== "") {
      writer.uint32(154).string(message.opMirrorBucketAckRelayerFee);
    }
    if (message.opMirrorObjectRelayerFee !== "") {
      writer.uint32(162).string(message.opMirrorObjectRelayerFee);
    }
    if (message.opMirrorObjectAckRelayerFee !== "") {
      writer.uint32(170).string(message.opMirrorObjectAckRelayerFee);
    }
    if (message.opMirrorGroupRelayerFee !== "") {
      writer.uint32(178).string(message.opMirrorGroupRelayerFee);
    }
    if (message.opMirrorGroupAckRelayerFee !== "") {
      writer.uint32(186).string(message.opMirrorGroupAckRelayerFee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.versionedParams = VersionedParams.decode(reader, reader.uint32());
          break;
        case 2:
          message.maxPayloadSize = reader.uint64();
          break;
        case 3:
          message.bscMirrorBucketRelayerFee = reader.string();
          break;
        case 4:
          message.bscMirrorBucketAckRelayerFee = reader.string();
          break;
        case 5:
          message.bscMirrorObjectRelayerFee = reader.string();
          break;
        case 6:
          message.bscMirrorObjectAckRelayerFee = reader.string();
          break;
        case 7:
          message.bscMirrorGroupRelayerFee = reader.string();
          break;
        case 8:
          message.bscMirrorGroupAckRelayerFee = reader.string();
          break;
        case 9:
          message.maxBucketsPerAccount = reader.uint32();
          break;
        case 10:
          message.discontinueCountingWindow = reader.uint64();
          break;
        case 11:
          message.discontinueObjectMax = reader.uint64();
          break;
        case 12:
          message.discontinueBucketMax = reader.uint64();
          break;
        case 13:
          message.discontinueConfirmPeriod = reader.int64();
          break;
        case 14:
          message.discontinueDeletionMax = reader.uint64();
          break;
        case 15:
          message.stalePolicyCleanupMax = reader.uint64();
          break;
        case 16:
          message.minQuotaUpdateInterval = reader.uint64();
          break;
        case 17:
          message.maxLocalVirtualGroupNumPerBucket = reader.uint32();
          break;
        case 18:
          message.opMirrorBucketRelayerFee = reader.string();
          break;
        case 19:
          message.opMirrorBucketAckRelayerFee = reader.string();
          break;
        case 20:
          message.opMirrorObjectRelayerFee = reader.string();
          break;
        case 21:
          message.opMirrorObjectAckRelayerFee = reader.string();
          break;
        case 22:
          message.opMirrorGroupRelayerFee = reader.string();
          break;
        case 23:
          message.opMirrorGroupAckRelayerFee = reader.string();
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
      versionedParams: isSet(object.versionedParams) ? VersionedParams.fromJSON(object.versionedParams) : undefined,
      maxPayloadSize: isSet(object.maxPayloadSize) ? BigInt(object.maxPayloadSize.toString()) : BigInt(0),
      bscMirrorBucketRelayerFee: isSet(object.bscMirrorBucketRelayerFee) ? String(object.bscMirrorBucketRelayerFee) : "",
      bscMirrorBucketAckRelayerFee: isSet(object.bscMirrorBucketAckRelayerFee) ? String(object.bscMirrorBucketAckRelayerFee) : "",
      bscMirrorObjectRelayerFee: isSet(object.bscMirrorObjectRelayerFee) ? String(object.bscMirrorObjectRelayerFee) : "",
      bscMirrorObjectAckRelayerFee: isSet(object.bscMirrorObjectAckRelayerFee) ? String(object.bscMirrorObjectAckRelayerFee) : "",
      bscMirrorGroupRelayerFee: isSet(object.bscMirrorGroupRelayerFee) ? String(object.bscMirrorGroupRelayerFee) : "",
      bscMirrorGroupAckRelayerFee: isSet(object.bscMirrorGroupAckRelayerFee) ? String(object.bscMirrorGroupAckRelayerFee) : "",
      maxBucketsPerAccount: isSet(object.maxBucketsPerAccount) ? Number(object.maxBucketsPerAccount) : 0,
      discontinueCountingWindow: isSet(object.discontinueCountingWindow) ? BigInt(object.discontinueCountingWindow.toString()) : BigInt(0),
      discontinueObjectMax: isSet(object.discontinueObjectMax) ? BigInt(object.discontinueObjectMax.toString()) : BigInt(0),
      discontinueBucketMax: isSet(object.discontinueBucketMax) ? BigInt(object.discontinueBucketMax.toString()) : BigInt(0),
      discontinueConfirmPeriod: isSet(object.discontinueConfirmPeriod) ? BigInt(object.discontinueConfirmPeriod.toString()) : BigInt(0),
      discontinueDeletionMax: isSet(object.discontinueDeletionMax) ? BigInt(object.discontinueDeletionMax.toString()) : BigInt(0),
      stalePolicyCleanupMax: isSet(object.stalePolicyCleanupMax) ? BigInt(object.stalePolicyCleanupMax.toString()) : BigInt(0),
      minQuotaUpdateInterval: isSet(object.minQuotaUpdateInterval) ? BigInt(object.minQuotaUpdateInterval.toString()) : BigInt(0),
      maxLocalVirtualGroupNumPerBucket: isSet(object.maxLocalVirtualGroupNumPerBucket) ? Number(object.maxLocalVirtualGroupNumPerBucket) : 0,
      opMirrorBucketRelayerFee: isSet(object.opMirrorBucketRelayerFee) ? String(object.opMirrorBucketRelayerFee) : "",
      opMirrorBucketAckRelayerFee: isSet(object.opMirrorBucketAckRelayerFee) ? String(object.opMirrorBucketAckRelayerFee) : "",
      opMirrorObjectRelayerFee: isSet(object.opMirrorObjectRelayerFee) ? String(object.opMirrorObjectRelayerFee) : "",
      opMirrorObjectAckRelayerFee: isSet(object.opMirrorObjectAckRelayerFee) ? String(object.opMirrorObjectAckRelayerFee) : "",
      opMirrorGroupRelayerFee: isSet(object.opMirrorGroupRelayerFee) ? String(object.opMirrorGroupRelayerFee) : "",
      opMirrorGroupAckRelayerFee: isSet(object.opMirrorGroupAckRelayerFee) ? String(object.opMirrorGroupAckRelayerFee) : ""
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.versionedParams !== undefined && (obj.versionedParams = message.versionedParams ? VersionedParams.toJSON(message.versionedParams) : undefined);
    message.maxPayloadSize !== undefined && (obj.maxPayloadSize = (message.maxPayloadSize || BigInt(0)).toString());
    message.bscMirrorBucketRelayerFee !== undefined && (obj.bscMirrorBucketRelayerFee = message.bscMirrorBucketRelayerFee);
    message.bscMirrorBucketAckRelayerFee !== undefined && (obj.bscMirrorBucketAckRelayerFee = message.bscMirrorBucketAckRelayerFee);
    message.bscMirrorObjectRelayerFee !== undefined && (obj.bscMirrorObjectRelayerFee = message.bscMirrorObjectRelayerFee);
    message.bscMirrorObjectAckRelayerFee !== undefined && (obj.bscMirrorObjectAckRelayerFee = message.bscMirrorObjectAckRelayerFee);
    message.bscMirrorGroupRelayerFee !== undefined && (obj.bscMirrorGroupRelayerFee = message.bscMirrorGroupRelayerFee);
    message.bscMirrorGroupAckRelayerFee !== undefined && (obj.bscMirrorGroupAckRelayerFee = message.bscMirrorGroupAckRelayerFee);
    message.maxBucketsPerAccount !== undefined && (obj.maxBucketsPerAccount = Math.round(message.maxBucketsPerAccount));
    message.discontinueCountingWindow !== undefined && (obj.discontinueCountingWindow = (message.discontinueCountingWindow || BigInt(0)).toString());
    message.discontinueObjectMax !== undefined && (obj.discontinueObjectMax = (message.discontinueObjectMax || BigInt(0)).toString());
    message.discontinueBucketMax !== undefined && (obj.discontinueBucketMax = (message.discontinueBucketMax || BigInt(0)).toString());
    message.discontinueConfirmPeriod !== undefined && (obj.discontinueConfirmPeriod = (message.discontinueConfirmPeriod || BigInt(0)).toString());
    message.discontinueDeletionMax !== undefined && (obj.discontinueDeletionMax = (message.discontinueDeletionMax || BigInt(0)).toString());
    message.stalePolicyCleanupMax !== undefined && (obj.stalePolicyCleanupMax = (message.stalePolicyCleanupMax || BigInt(0)).toString());
    message.minQuotaUpdateInterval !== undefined && (obj.minQuotaUpdateInterval = (message.minQuotaUpdateInterval || BigInt(0)).toString());
    message.maxLocalVirtualGroupNumPerBucket !== undefined && (obj.maxLocalVirtualGroupNumPerBucket = Math.round(message.maxLocalVirtualGroupNumPerBucket));
    message.opMirrorBucketRelayerFee !== undefined && (obj.opMirrorBucketRelayerFee = message.opMirrorBucketRelayerFee);
    message.opMirrorBucketAckRelayerFee !== undefined && (obj.opMirrorBucketAckRelayerFee = message.opMirrorBucketAckRelayerFee);
    message.opMirrorObjectRelayerFee !== undefined && (obj.opMirrorObjectRelayerFee = message.opMirrorObjectRelayerFee);
    message.opMirrorObjectAckRelayerFee !== undefined && (obj.opMirrorObjectAckRelayerFee = message.opMirrorObjectAckRelayerFee);
    message.opMirrorGroupRelayerFee !== undefined && (obj.opMirrorGroupRelayerFee = message.opMirrorGroupRelayerFee);
    message.opMirrorGroupAckRelayerFee !== undefined && (obj.opMirrorGroupAckRelayerFee = message.opMirrorGroupAckRelayerFee);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.versionedParams = object.versionedParams !== undefined && object.versionedParams !== null ? VersionedParams.fromPartial(object.versionedParams) : undefined;
    message.maxPayloadSize = object.maxPayloadSize !== undefined && object.maxPayloadSize !== null ? BigInt(object.maxPayloadSize.toString()) : BigInt(0);
    message.bscMirrorBucketRelayerFee = object.bscMirrorBucketRelayerFee ?? "";
    message.bscMirrorBucketAckRelayerFee = object.bscMirrorBucketAckRelayerFee ?? "";
    message.bscMirrorObjectRelayerFee = object.bscMirrorObjectRelayerFee ?? "";
    message.bscMirrorObjectAckRelayerFee = object.bscMirrorObjectAckRelayerFee ?? "";
    message.bscMirrorGroupRelayerFee = object.bscMirrorGroupRelayerFee ?? "";
    message.bscMirrorGroupAckRelayerFee = object.bscMirrorGroupAckRelayerFee ?? "";
    message.maxBucketsPerAccount = object.maxBucketsPerAccount ?? 0;
    message.discontinueCountingWindow = object.discontinueCountingWindow !== undefined && object.discontinueCountingWindow !== null ? BigInt(object.discontinueCountingWindow.toString()) : BigInt(0);
    message.discontinueObjectMax = object.discontinueObjectMax !== undefined && object.discontinueObjectMax !== null ? BigInt(object.discontinueObjectMax.toString()) : BigInt(0);
    message.discontinueBucketMax = object.discontinueBucketMax !== undefined && object.discontinueBucketMax !== null ? BigInt(object.discontinueBucketMax.toString()) : BigInt(0);
    message.discontinueConfirmPeriod = object.discontinueConfirmPeriod !== undefined && object.discontinueConfirmPeriod !== null ? BigInt(object.discontinueConfirmPeriod.toString()) : BigInt(0);
    message.discontinueDeletionMax = object.discontinueDeletionMax !== undefined && object.discontinueDeletionMax !== null ? BigInt(object.discontinueDeletionMax.toString()) : BigInt(0);
    message.stalePolicyCleanupMax = object.stalePolicyCleanupMax !== undefined && object.stalePolicyCleanupMax !== null ? BigInt(object.stalePolicyCleanupMax.toString()) : BigInt(0);
    message.minQuotaUpdateInterval = object.minQuotaUpdateInterval !== undefined && object.minQuotaUpdateInterval !== null ? BigInt(object.minQuotaUpdateInterval.toString()) : BigInt(0);
    message.maxLocalVirtualGroupNumPerBucket = object.maxLocalVirtualGroupNumPerBucket ?? 0;
    message.opMirrorBucketRelayerFee = object.opMirrorBucketRelayerFee ?? "";
    message.opMirrorBucketAckRelayerFee = object.opMirrorBucketAckRelayerFee ?? "";
    message.opMirrorObjectRelayerFee = object.opMirrorObjectRelayerFee ?? "";
    message.opMirrorObjectAckRelayerFee = object.opMirrorObjectAckRelayerFee ?? "";
    message.opMirrorGroupRelayerFee = object.opMirrorGroupRelayerFee ?? "";
    message.opMirrorGroupAckRelayerFee = object.opMirrorGroupAckRelayerFee ?? "";
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      versionedParams: object.versioned_params ? VersionedParams.fromSDK(object.versioned_params) : undefined,
      maxPayloadSize: object?.max_payload_size,
      bscMirrorBucketRelayerFee: object?.bsc_mirror_bucket_relayer_fee,
      bscMirrorBucketAckRelayerFee: object?.bsc_mirror_bucket_ack_relayer_fee,
      bscMirrorObjectRelayerFee: object?.bsc_mirror_object_relayer_fee,
      bscMirrorObjectAckRelayerFee: object?.bsc_mirror_object_ack_relayer_fee,
      bscMirrorGroupRelayerFee: object?.bsc_mirror_group_relayer_fee,
      bscMirrorGroupAckRelayerFee: object?.bsc_mirror_group_ack_relayer_fee,
      maxBucketsPerAccount: object?.max_buckets_per_account,
      discontinueCountingWindow: object?.discontinue_counting_window,
      discontinueObjectMax: object?.discontinue_object_max,
      discontinueBucketMax: object?.discontinue_bucket_max,
      discontinueConfirmPeriod: object?.discontinue_confirm_period,
      discontinueDeletionMax: object?.discontinue_deletion_max,
      stalePolicyCleanupMax: object?.stale_policy_cleanup_max,
      minQuotaUpdateInterval: object?.min_quota_update_interval,
      maxLocalVirtualGroupNumPerBucket: object?.max_local_virtual_group_num_per_bucket,
      opMirrorBucketRelayerFee: object?.op_mirror_bucket_relayer_fee,
      opMirrorBucketAckRelayerFee: object?.op_mirror_bucket_ack_relayer_fee,
      opMirrorObjectRelayerFee: object?.op_mirror_object_relayer_fee,
      opMirrorObjectAckRelayerFee: object?.op_mirror_object_ack_relayer_fee,
      opMirrorGroupRelayerFee: object?.op_mirror_group_relayer_fee,
      opMirrorGroupAckRelayerFee: object?.op_mirror_group_ack_relayer_fee
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    message.versionedParams !== undefined && (obj.versioned_params = message.versionedParams ? VersionedParams.toSDK(message.versionedParams) : undefined);
    obj.max_payload_size = message.maxPayloadSize;
    obj.bsc_mirror_bucket_relayer_fee = message.bscMirrorBucketRelayerFee;
    obj.bsc_mirror_bucket_ack_relayer_fee = message.bscMirrorBucketAckRelayerFee;
    obj.bsc_mirror_object_relayer_fee = message.bscMirrorObjectRelayerFee;
    obj.bsc_mirror_object_ack_relayer_fee = message.bscMirrorObjectAckRelayerFee;
    obj.bsc_mirror_group_relayer_fee = message.bscMirrorGroupRelayerFee;
    obj.bsc_mirror_group_ack_relayer_fee = message.bscMirrorGroupAckRelayerFee;
    obj.max_buckets_per_account = message.maxBucketsPerAccount;
    obj.discontinue_counting_window = message.discontinueCountingWindow;
    obj.discontinue_object_max = message.discontinueObjectMax;
    obj.discontinue_bucket_max = message.discontinueBucketMax;
    obj.discontinue_confirm_period = message.discontinueConfirmPeriod;
    obj.discontinue_deletion_max = message.discontinueDeletionMax;
    obj.stale_policy_cleanup_max = message.stalePolicyCleanupMax;
    obj.min_quota_update_interval = message.minQuotaUpdateInterval;
    obj.max_local_virtual_group_num_per_bucket = message.maxLocalVirtualGroupNumPerBucket;
    obj.op_mirror_bucket_relayer_fee = message.opMirrorBucketRelayerFee;
    obj.op_mirror_bucket_ack_relayer_fee = message.opMirrorBucketAckRelayerFee;
    obj.op_mirror_object_relayer_fee = message.opMirrorObjectRelayerFee;
    obj.op_mirror_object_ack_relayer_fee = message.opMirrorObjectAckRelayerFee;
    obj.op_mirror_group_relayer_fee = message.opMirrorGroupRelayerFee;
    obj.op_mirror_group_ack_relayer_fee = message.opMirrorGroupAckRelayerFee;
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.versioned_params !== undefined && object.versioned_params !== null) {
      message.versionedParams = VersionedParams.fromAmino(object.versioned_params);
    }
    if (object.max_payload_size !== undefined && object.max_payload_size !== null) {
      message.maxPayloadSize = BigInt(object.max_payload_size);
    }
    if (object.bsc_mirror_bucket_relayer_fee !== undefined && object.bsc_mirror_bucket_relayer_fee !== null) {
      message.bscMirrorBucketRelayerFee = object.bsc_mirror_bucket_relayer_fee;
    }
    if (object.bsc_mirror_bucket_ack_relayer_fee !== undefined && object.bsc_mirror_bucket_ack_relayer_fee !== null) {
      message.bscMirrorBucketAckRelayerFee = object.bsc_mirror_bucket_ack_relayer_fee;
    }
    if (object.bsc_mirror_object_relayer_fee !== undefined && object.bsc_mirror_object_relayer_fee !== null) {
      message.bscMirrorObjectRelayerFee = object.bsc_mirror_object_relayer_fee;
    }
    if (object.bsc_mirror_object_ack_relayer_fee !== undefined && object.bsc_mirror_object_ack_relayer_fee !== null) {
      message.bscMirrorObjectAckRelayerFee = object.bsc_mirror_object_ack_relayer_fee;
    }
    if (object.bsc_mirror_group_relayer_fee !== undefined && object.bsc_mirror_group_relayer_fee !== null) {
      message.bscMirrorGroupRelayerFee = object.bsc_mirror_group_relayer_fee;
    }
    if (object.bsc_mirror_group_ack_relayer_fee !== undefined && object.bsc_mirror_group_ack_relayer_fee !== null) {
      message.bscMirrorGroupAckRelayerFee = object.bsc_mirror_group_ack_relayer_fee;
    }
    if (object.max_buckets_per_account !== undefined && object.max_buckets_per_account !== null) {
      message.maxBucketsPerAccount = object.max_buckets_per_account;
    }
    if (object.discontinue_counting_window !== undefined && object.discontinue_counting_window !== null) {
      message.discontinueCountingWindow = BigInt(object.discontinue_counting_window);
    }
    if (object.discontinue_object_max !== undefined && object.discontinue_object_max !== null) {
      message.discontinueObjectMax = BigInt(object.discontinue_object_max);
    }
    if (object.discontinue_bucket_max !== undefined && object.discontinue_bucket_max !== null) {
      message.discontinueBucketMax = BigInt(object.discontinue_bucket_max);
    }
    if (object.discontinue_confirm_period !== undefined && object.discontinue_confirm_period !== null) {
      message.discontinueConfirmPeriod = BigInt(object.discontinue_confirm_period);
    }
    if (object.discontinue_deletion_max !== undefined && object.discontinue_deletion_max !== null) {
      message.discontinueDeletionMax = BigInt(object.discontinue_deletion_max);
    }
    if (object.stale_policy_cleanup_max !== undefined && object.stale_policy_cleanup_max !== null) {
      message.stalePolicyCleanupMax = BigInt(object.stale_policy_cleanup_max);
    }
    if (object.min_quota_update_interval !== undefined && object.min_quota_update_interval !== null) {
      message.minQuotaUpdateInterval = BigInt(object.min_quota_update_interval);
    }
    if (object.max_local_virtual_group_num_per_bucket !== undefined && object.max_local_virtual_group_num_per_bucket !== null) {
      message.maxLocalVirtualGroupNumPerBucket = object.max_local_virtual_group_num_per_bucket;
    }
    if (object.op_mirror_bucket_relayer_fee !== undefined && object.op_mirror_bucket_relayer_fee !== null) {
      message.opMirrorBucketRelayerFee = object.op_mirror_bucket_relayer_fee;
    }
    if (object.op_mirror_bucket_ack_relayer_fee !== undefined && object.op_mirror_bucket_ack_relayer_fee !== null) {
      message.opMirrorBucketAckRelayerFee = object.op_mirror_bucket_ack_relayer_fee;
    }
    if (object.op_mirror_object_relayer_fee !== undefined && object.op_mirror_object_relayer_fee !== null) {
      message.opMirrorObjectRelayerFee = object.op_mirror_object_relayer_fee;
    }
    if (object.op_mirror_object_ack_relayer_fee !== undefined && object.op_mirror_object_ack_relayer_fee !== null) {
      message.opMirrorObjectAckRelayerFee = object.op_mirror_object_ack_relayer_fee;
    }
    if (object.op_mirror_group_relayer_fee !== undefined && object.op_mirror_group_relayer_fee !== null) {
      message.opMirrorGroupRelayerFee = object.op_mirror_group_relayer_fee;
    }
    if (object.op_mirror_group_ack_relayer_fee !== undefined && object.op_mirror_group_ack_relayer_fee !== null) {
      message.opMirrorGroupAckRelayerFee = object.op_mirror_group_ack_relayer_fee;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.versioned_params = message.versionedParams ? VersionedParams.toAmino(message.versionedParams) : undefined;
    obj.max_payload_size = message.maxPayloadSize ? message.maxPayloadSize.toString() : undefined;
    obj.bsc_mirror_bucket_relayer_fee = message.bscMirrorBucketRelayerFee;
    obj.bsc_mirror_bucket_ack_relayer_fee = message.bscMirrorBucketAckRelayerFee;
    obj.bsc_mirror_object_relayer_fee = message.bscMirrorObjectRelayerFee;
    obj.bsc_mirror_object_ack_relayer_fee = message.bscMirrorObjectAckRelayerFee;
    obj.bsc_mirror_group_relayer_fee = message.bscMirrorGroupRelayerFee;
    obj.bsc_mirror_group_ack_relayer_fee = message.bscMirrorGroupAckRelayerFee;
    obj.max_buckets_per_account = message.maxBucketsPerAccount;
    obj.discontinue_counting_window = message.discontinueCountingWindow ? message.discontinueCountingWindow.toString() : undefined;
    obj.discontinue_object_max = message.discontinueObjectMax ? message.discontinueObjectMax.toString() : undefined;
    obj.discontinue_bucket_max = message.discontinueBucketMax ? message.discontinueBucketMax.toString() : undefined;
    obj.discontinue_confirm_period = message.discontinueConfirmPeriod ? message.discontinueConfirmPeriod.toString() : undefined;
    obj.discontinue_deletion_max = message.discontinueDeletionMax ? message.discontinueDeletionMax.toString() : undefined;
    obj.stale_policy_cleanup_max = message.stalePolicyCleanupMax ? message.stalePolicyCleanupMax.toString() : undefined;
    obj.min_quota_update_interval = message.minQuotaUpdateInterval ? message.minQuotaUpdateInterval.toString() : undefined;
    obj.max_local_virtual_group_num_per_bucket = message.maxLocalVirtualGroupNumPerBucket;
    obj.op_mirror_bucket_relayer_fee = message.opMirrorBucketRelayerFee;
    obj.op_mirror_bucket_ack_relayer_fee = message.opMirrorBucketAckRelayerFee;
    obj.op_mirror_object_relayer_fee = message.opMirrorObjectRelayerFee;
    obj.op_mirror_object_ack_relayer_fee = message.opMirrorObjectAckRelayerFee;
    obj.op_mirror_group_relayer_fee = message.opMirrorGroupRelayerFee;
    obj.op_mirror_group_ack_relayer_fee = message.opMirrorGroupAckRelayerFee;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/greenfield.storage.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseVersionedParams(): VersionedParams {
  return {
    maxSegmentSize: BigInt(0),
    redundantDataChunkNum: 0,
    redundantParityChunkNum: 0,
    minChargeSize: BigInt(0)
  };
}
export const VersionedParams = {
  typeUrl: "/greenfield.storage.VersionedParams",
  encode(message: VersionedParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxSegmentSize !== BigInt(0)) {
      writer.uint32(8).uint64(message.maxSegmentSize);
    }
    if (message.redundantDataChunkNum !== 0) {
      writer.uint32(16).uint32(message.redundantDataChunkNum);
    }
    if (message.redundantParityChunkNum !== 0) {
      writer.uint32(24).uint32(message.redundantParityChunkNum);
    }
    if (message.minChargeSize !== BigInt(0)) {
      writer.uint32(32).uint64(message.minChargeSize);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): VersionedParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersionedParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxSegmentSize = reader.uint64();
          break;
        case 2:
          message.redundantDataChunkNum = reader.uint32();
          break;
        case 3:
          message.redundantParityChunkNum = reader.uint32();
          break;
        case 4:
          message.minChargeSize = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): VersionedParams {
    return {
      maxSegmentSize: isSet(object.maxSegmentSize) ? BigInt(object.maxSegmentSize.toString()) : BigInt(0),
      redundantDataChunkNum: isSet(object.redundantDataChunkNum) ? Number(object.redundantDataChunkNum) : 0,
      redundantParityChunkNum: isSet(object.redundantParityChunkNum) ? Number(object.redundantParityChunkNum) : 0,
      minChargeSize: isSet(object.minChargeSize) ? BigInt(object.minChargeSize.toString()) : BigInt(0)
    };
  },
  toJSON(message: VersionedParams): unknown {
    const obj: any = {};
    message.maxSegmentSize !== undefined && (obj.maxSegmentSize = (message.maxSegmentSize || BigInt(0)).toString());
    message.redundantDataChunkNum !== undefined && (obj.redundantDataChunkNum = Math.round(message.redundantDataChunkNum));
    message.redundantParityChunkNum !== undefined && (obj.redundantParityChunkNum = Math.round(message.redundantParityChunkNum));
    message.minChargeSize !== undefined && (obj.minChargeSize = (message.minChargeSize || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<VersionedParams>, I>>(object: I): VersionedParams {
    const message = createBaseVersionedParams();
    message.maxSegmentSize = object.maxSegmentSize !== undefined && object.maxSegmentSize !== null ? BigInt(object.maxSegmentSize.toString()) : BigInt(0);
    message.redundantDataChunkNum = object.redundantDataChunkNum ?? 0;
    message.redundantParityChunkNum = object.redundantParityChunkNum ?? 0;
    message.minChargeSize = object.minChargeSize !== undefined && object.minChargeSize !== null ? BigInt(object.minChargeSize.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: VersionedParamsSDKType): VersionedParams {
    return {
      maxSegmentSize: object?.max_segment_size,
      redundantDataChunkNum: object?.redundant_data_chunk_num,
      redundantParityChunkNum: object?.redundant_parity_chunk_num,
      minChargeSize: object?.min_charge_size
    };
  },
  toSDK(message: VersionedParams): VersionedParamsSDKType {
    const obj: any = {};
    obj.max_segment_size = message.maxSegmentSize;
    obj.redundant_data_chunk_num = message.redundantDataChunkNum;
    obj.redundant_parity_chunk_num = message.redundantParityChunkNum;
    obj.min_charge_size = message.minChargeSize;
    return obj;
  },
  fromAmino(object: VersionedParamsAmino): VersionedParams {
    const message = createBaseVersionedParams();
    if (object.max_segment_size !== undefined && object.max_segment_size !== null) {
      message.maxSegmentSize = BigInt(object.max_segment_size);
    }
    if (object.redundant_data_chunk_num !== undefined && object.redundant_data_chunk_num !== null) {
      message.redundantDataChunkNum = object.redundant_data_chunk_num;
    }
    if (object.redundant_parity_chunk_num !== undefined && object.redundant_parity_chunk_num !== null) {
      message.redundantParityChunkNum = object.redundant_parity_chunk_num;
    }
    if (object.min_charge_size !== undefined && object.min_charge_size !== null) {
      message.minChargeSize = BigInt(object.min_charge_size);
    }
    return message;
  },
  toAmino(message: VersionedParams): VersionedParamsAmino {
    const obj: any = {};
    obj.max_segment_size = message.maxSegmentSize ? message.maxSegmentSize.toString() : undefined;
    obj.redundant_data_chunk_num = message.redundantDataChunkNum;
    obj.redundant_parity_chunk_num = message.redundantParityChunkNum;
    obj.min_charge_size = message.minChargeSize ? message.minChargeSize.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: VersionedParamsAminoMsg): VersionedParams {
    return VersionedParams.fromAmino(object.value);
  },
  fromProtoMsg(message: VersionedParamsProtoMsg): VersionedParams {
    return VersionedParams.decode(message.value);
  },
  toProto(message: VersionedParams): Uint8Array {
    return VersionedParams.encode(message).finish();
  },
  toProtoMsg(message: VersionedParams): VersionedParamsProtoMsg {
    return {
      typeUrl: "/greenfield.storage.VersionedParams",
      value: VersionedParams.encode(message).finish()
    };
  }
};