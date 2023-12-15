//@ts-nocheck
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
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
  maxStoreSizePerFamily: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/greenfield.virtualgroup.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  deposit_denom: string;
  gvg_staking_per_bytes: string;
  max_local_virtual_group_num_per_bucket: number;
  max_global_virtual_group_num_per_family: number;
  max_store_size_per_family: bigint;
}
function createBaseParams(): Params {
  return {
    depositDenom: "",
    gvgStakingPerBytes: "",
    maxLocalVirtualGroupNumPerBucket: 0,
    maxGlobalVirtualGroupNumPerFamily: 0,
    maxStoreSizePerFamily: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/greenfield.virtualgroup.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    if (message.maxStoreSizePerFamily !== BigInt(0)) {
      writer.uint32(40).uint64(message.maxStoreSizePerFamily);
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
          message.maxStoreSizePerFamily = reader.uint64();
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
      maxStoreSizePerFamily: isSet(object.maxStoreSizePerFamily) ? BigInt(object.maxStoreSizePerFamily.toString()) : BigInt(0)
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.depositDenom !== undefined && (obj.depositDenom = message.depositDenom);
    message.gvgStakingPerBytes !== undefined && (obj.gvgStakingPerBytes = message.gvgStakingPerBytes);
    message.maxLocalVirtualGroupNumPerBucket !== undefined && (obj.maxLocalVirtualGroupNumPerBucket = Math.round(message.maxLocalVirtualGroupNumPerBucket));
    message.maxGlobalVirtualGroupNumPerFamily !== undefined && (obj.maxGlobalVirtualGroupNumPerFamily = Math.round(message.maxGlobalVirtualGroupNumPerFamily));
    message.maxStoreSizePerFamily !== undefined && (obj.maxStoreSizePerFamily = (message.maxStoreSizePerFamily || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.depositDenom = object.depositDenom ?? "";
    message.gvgStakingPerBytes = object.gvgStakingPerBytes ?? "";
    message.maxLocalVirtualGroupNumPerBucket = object.maxLocalVirtualGroupNumPerBucket ?? 0;
    message.maxGlobalVirtualGroupNumPerFamily = object.maxGlobalVirtualGroupNumPerFamily ?? 0;
    message.maxStoreSizePerFamily = object.maxStoreSizePerFamily !== undefined && object.maxStoreSizePerFamily !== null ? BigInt(object.maxStoreSizePerFamily.toString()) : BigInt(0);
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
      message.maxStoreSizePerFamily = BigInt(object.max_store_size_per_family);
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