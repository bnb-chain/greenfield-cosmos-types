//@ts-nocheck
/* eslint-disable */
import { Long, isSet, DeepPartial, Exact } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "greenfield.virtualgroup";
/** Params defines the parameters for the module. */
export interface Params {
  /** deposit_denom defines the staking coin denomination. */
  depositDenom: string;
  /** store price, in bnb wei per charge byte */
  gvgStakingPerBytes: string;
  /** the max number of lvg which allowed in a bucket */
  maxLocalVirtualGroupNumPerBucket: number;
  /** the max number of gvg which can exist in a family */
  maxGlobalVirtualGroupNumPerFamily: number;
  /** if the store size reach the exceed, the family is not allowed to sever more buckets */
  maxStoreSizePerFamily: Long;
  /** the validity period that a successor SP can reserve to complete the swap for Global virtual group/family */
  swapInValidityPeriod: string;
  /** the the number of sp allowed to exit concurrently. */
  spConcurrentExitNum: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/greenfield.virtualgroup.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  /** deposit_denom defines the staking coin denomination. */
  deposit_denom?: string;
  /** store price, in bnb wei per charge byte */
  gvg_staking_per_bytes?: string;
  /** the max number of lvg which allowed in a bucket */
  max_local_virtual_group_num_per_bucket?: number;
  /** the max number of gvg which can exist in a family */
  max_global_virtual_group_num_per_family?: number;
  /** if the store size reach the exceed, the family is not allowed to sever more buckets */
  max_store_size_per_family?: string;
  /** the validity period that a successor SP can reserve to complete the swap for Global virtual group/family */
  swap_in_validity_period?: string;
  /** the the number of sp allowed to exit concurrently. */
  sp_concurrent_exit_num?: string;
}
export interface ParamsAminoMsg {
  type: "/greenfield.virtualgroup.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  deposit_denom: string;
  gvg_staking_per_bytes: string;
  max_local_virtual_group_num_per_bucket: number;
  max_global_virtual_group_num_per_family: number;
  max_store_size_per_family: Long;
  swap_in_validity_period: string;
  sp_concurrent_exit_num: string;
}
function createBaseParams(): Params {
  return {
    depositDenom: "",
    gvgStakingPerBytes: "",
    maxLocalVirtualGroupNumPerBucket: 0,
    maxGlobalVirtualGroupNumPerFamily: 0,
    maxStoreSizePerFamily: Long.UZERO,
    swapInValidityPeriod: "",
    spConcurrentExitNum: ""
  };
}
export const Params = {
  typeUrl: "/greenfield.virtualgroup.Params",
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositDenom !== "") {
      writer.uint32(10).string(message.depositDenom);
    }
    if (message.gvgStakingPerBytes !== "") {
      writer.uint32(18).string(message.gvgStakingPerBytes);
    }
    if (message.maxLocalVirtualGroupNumPerBucket !== 0) {
      writer.uint32(24).uint32(message.maxLocalVirtualGroupNumPerBucket);
    }
    if (message.maxGlobalVirtualGroupNumPerFamily !== 0) {
      writer.uint32(32).uint32(message.maxGlobalVirtualGroupNumPerFamily);
    }
    if (!message.maxStoreSizePerFamily.isZero()) {
      writer.uint32(40).uint64(message.maxStoreSizePerFamily);
    }
    if (message.swapInValidityPeriod !== "") {
      writer.uint32(50).string(message.swapInValidityPeriod);
    }
    if (message.spConcurrentExitNum !== "") {
      writer.uint32(58).string(message.spConcurrentExitNum);
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
          message.depositDenom = reader.string();
          break;
        case 2:
          message.gvgStakingPerBytes = reader.string();
          break;
        case 3:
          message.maxLocalVirtualGroupNumPerBucket = reader.uint32();
          break;
        case 4:
          message.maxGlobalVirtualGroupNumPerFamily = reader.uint32();
          break;
        case 5:
          message.maxStoreSizePerFamily = (reader.uint64() as Long);
          break;
        case 6:
          message.swapInValidityPeriod = reader.string();
          break;
        case 7:
          message.spConcurrentExitNum = reader.string();
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
      depositDenom: isSet(object.depositDenom) ? String(object.depositDenom) : "",
      gvgStakingPerBytes: isSet(object.gvgStakingPerBytes) ? String(object.gvgStakingPerBytes) : "",
      maxLocalVirtualGroupNumPerBucket: isSet(object.maxLocalVirtualGroupNumPerBucket) ? Number(object.maxLocalVirtualGroupNumPerBucket) : 0,
      maxGlobalVirtualGroupNumPerFamily: isSet(object.maxGlobalVirtualGroupNumPerFamily) ? Number(object.maxGlobalVirtualGroupNumPerFamily) : 0,
      maxStoreSizePerFamily: isSet(object.maxStoreSizePerFamily) ? Long.fromValue(object.maxStoreSizePerFamily) : Long.UZERO,
      swapInValidityPeriod: isSet(object.swapInValidityPeriod) ? String(object.swapInValidityPeriod) : "",
      spConcurrentExitNum: isSet(object.spConcurrentExitNum) ? String(object.spConcurrentExitNum) : ""
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.depositDenom !== undefined && (obj.depositDenom = message.depositDenom);
    message.gvgStakingPerBytes !== undefined && (obj.gvgStakingPerBytes = message.gvgStakingPerBytes);
    message.maxLocalVirtualGroupNumPerBucket !== undefined && (obj.maxLocalVirtualGroupNumPerBucket = Math.round(message.maxLocalVirtualGroupNumPerBucket));
    message.maxGlobalVirtualGroupNumPerFamily !== undefined && (obj.maxGlobalVirtualGroupNumPerFamily = Math.round(message.maxGlobalVirtualGroupNumPerFamily));
    message.maxStoreSizePerFamily !== undefined && (obj.maxStoreSizePerFamily = (message.maxStoreSizePerFamily || Long.UZERO).toString());
    message.swapInValidityPeriod !== undefined && (obj.swapInValidityPeriod = message.swapInValidityPeriod);
    message.spConcurrentExitNum !== undefined && (obj.spConcurrentExitNum = message.spConcurrentExitNum);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.depositDenom = object.depositDenom ?? "";
    message.gvgStakingPerBytes = object.gvgStakingPerBytes ?? "";
    message.maxLocalVirtualGroupNumPerBucket = object.maxLocalVirtualGroupNumPerBucket ?? 0;
    message.maxGlobalVirtualGroupNumPerFamily = object.maxGlobalVirtualGroupNumPerFamily ?? 0;
    message.maxStoreSizePerFamily = object.maxStoreSizePerFamily !== undefined && object.maxStoreSizePerFamily !== null ? Long.fromValue(object.maxStoreSizePerFamily) : Long.UZERO;
    message.swapInValidityPeriod = object.swapInValidityPeriod ?? "";
    message.spConcurrentExitNum = object.spConcurrentExitNum ?? "";
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      depositDenom: object?.deposit_denom,
      gvgStakingPerBytes: object?.gvg_staking_per_bytes,
      maxLocalVirtualGroupNumPerBucket: object?.max_local_virtual_group_num_per_bucket,
      maxGlobalVirtualGroupNumPerFamily: object?.max_global_virtual_group_num_per_family,
      maxStoreSizePerFamily: object?.max_store_size_per_family,
      swapInValidityPeriod: object?.swap_in_validity_period,
      spConcurrentExitNum: object?.sp_concurrent_exit_num
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.deposit_denom = message.depositDenom;
    obj.gvg_staking_per_bytes = message.gvgStakingPerBytes;
    obj.max_local_virtual_group_num_per_bucket = message.maxLocalVirtualGroupNumPerBucket;
    obj.max_global_virtual_group_num_per_family = message.maxGlobalVirtualGroupNumPerFamily;
    obj.max_store_size_per_family = message.maxStoreSizePerFamily;
    obj.swap_in_validity_period = message.swapInValidityPeriod;
    obj.sp_concurrent_exit_num = message.spConcurrentExitNum;
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.deposit_denom !== undefined && object.deposit_denom !== null) {
      message.depositDenom = object.deposit_denom;
    }
    if (object.gvg_staking_per_bytes !== undefined && object.gvg_staking_per_bytes !== null) {
      message.gvgStakingPerBytes = object.gvg_staking_per_bytes;
    }
    if (object.max_local_virtual_group_num_per_bucket !== undefined && object.max_local_virtual_group_num_per_bucket !== null) {
      message.maxLocalVirtualGroupNumPerBucket = object.max_local_virtual_group_num_per_bucket;
    }
    if (object.max_global_virtual_group_num_per_family !== undefined && object.max_global_virtual_group_num_per_family !== null) {
      message.maxGlobalVirtualGroupNumPerFamily = object.max_global_virtual_group_num_per_family;
    }
    if (object.max_store_size_per_family !== undefined && object.max_store_size_per_family !== null) {
      message.maxStoreSizePerFamily = Long.fromString(object.max_store_size_per_family);
    }
    if (object.swap_in_validity_period !== undefined && object.swap_in_validity_period !== null) {
      message.swapInValidityPeriod = object.swap_in_validity_period;
    }
    if (object.sp_concurrent_exit_num !== undefined && object.sp_concurrent_exit_num !== null) {
      message.spConcurrentExitNum = object.sp_concurrent_exit_num;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.deposit_denom = message.depositDenom;
    obj.gvg_staking_per_bytes = message.gvgStakingPerBytes;
    obj.max_local_virtual_group_num_per_bucket = message.maxLocalVirtualGroupNumPerBucket;
    obj.max_global_virtual_group_num_per_family = message.maxGlobalVirtualGroupNumPerFamily;
    obj.max_store_size_per_family = message.maxStoreSizePerFamily ? message.maxStoreSizePerFamily.toString() : undefined;
    obj.swap_in_validity_period = message.swapInValidityPeriod;
    obj.sp_concurrent_exit_num = message.spConcurrentExitNum;
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
      typeUrl: "/greenfield.virtualgroup.Params",
      value: Params.encode(message).finish()
    };
  }
};