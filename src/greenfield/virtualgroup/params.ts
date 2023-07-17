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
}
/** Params defines the parameters for the module. */

export interface ParamsSDKType {
  deposit_denom: string;
  gvg_staking_per_bytes: string;
  max_local_virtual_group_num_per_bucket: number;
  max_global_virtual_group_num_per_family: number;
  max_store_size_per_family: Long;
}

function createBaseParams(): Params {
  return {
    depositDenom: "",
    gvgStakingPerBytes: "",
    maxLocalVirtualGroupNumPerBucket: 0,
    maxGlobalVirtualGroupNumPerFamily: 0,
    maxStoreSizePerFamily: Long.UZERO
  };
}

export const Params = {
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
      maxStoreSizePerFamily: isSet(object.maxStoreSizePerFamily) ? Long.fromValue(object.maxStoreSizePerFamily) : Long.UZERO
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.depositDenom !== undefined && (obj.depositDenom = message.depositDenom);
    message.gvgStakingPerBytes !== undefined && (obj.gvgStakingPerBytes = message.gvgStakingPerBytes);
    message.maxLocalVirtualGroupNumPerBucket !== undefined && (obj.maxLocalVirtualGroupNumPerBucket = Math.round(message.maxLocalVirtualGroupNumPerBucket));
    message.maxGlobalVirtualGroupNumPerFamily !== undefined && (obj.maxGlobalVirtualGroupNumPerFamily = Math.round(message.maxGlobalVirtualGroupNumPerFamily));
    message.maxStoreSizePerFamily !== undefined && (obj.maxStoreSizePerFamily = (message.maxStoreSizePerFamily || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.depositDenom = object.depositDenom ?? "";
    message.gvgStakingPerBytes = object.gvgStakingPerBytes ?? "";
    message.maxLocalVirtualGroupNumPerBucket = object.maxLocalVirtualGroupNumPerBucket ?? 0;
    message.maxGlobalVirtualGroupNumPerFamily = object.maxGlobalVirtualGroupNumPerFamily ?? 0;
    message.maxStoreSizePerFamily = object.maxStoreSizePerFamily !== undefined && object.maxStoreSizePerFamily !== null ? Long.fromValue(object.maxStoreSizePerFamily) : Long.UZERO;
    return message;
  },

  fromSDK(object: ParamsSDKType): Params {
    return {
      depositDenom: object?.deposit_denom,
      gvgStakingPerBytes: object?.gvg_staking_per_bytes,
      maxLocalVirtualGroupNumPerBucket: object?.max_local_virtual_group_num_per_bucket,
      maxGlobalVirtualGroupNumPerFamily: object?.max_global_virtual_group_num_per_family,
      maxStoreSizePerFamily: object?.max_store_size_per_family
    };
  },

  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.deposit_denom = message.depositDenom;
    obj.gvg_staking_per_bytes = message.gvgStakingPerBytes;
    obj.max_local_virtual_group_num_per_bucket = message.maxLocalVirtualGroupNumPerBucket;
    obj.max_global_virtual_group_num_per_family = message.maxGlobalVirtualGroupNumPerFamily;
    obj.max_store_size_per_family = message.maxStoreSizePerFamily;
    return obj;
  }

};