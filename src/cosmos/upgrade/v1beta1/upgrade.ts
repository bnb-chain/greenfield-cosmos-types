//@ts-nocheck
/* eslint-disable */
import { Long, isSet, DeepPartial, Exact } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmos.upgrade.v1beta1";
/** Plan specifies information about a planned upgrade and when it should occur. */
export interface Plan {
  /**
   * Sets the name for the upgrade. This name will be used by the upgraded
   * version of the software to apply any special "on-upgrade" commands during
   * the first BeginBlock method after the upgrade is applied. It is also used
   * to detect whether a software version can handle a given upgrade. If no
   * upgrade handler with this name has been set in the software, it will be
   * assumed that the software is out-of-date when the upgrade Time or Height is
   * reached and the software will exit.
   */
  name: string;
  /**
   * The height at which the upgrade must be performed.
   * Only used if Time is not set.
   */
  height: Long;
  /**
   * Any application specific upgrade info to be included on-chain
   * such as a git commit that validators could automatically upgrade to
   */
  info: string;
}
export interface PlanProtoMsg {
  typeUrl: "/cosmos.upgrade.v1beta1.Plan";
  value: Uint8Array;
}
/** Plan specifies information about a planned upgrade and when it should occur. */
export interface PlanAmino {
  /**
   * Sets the name for the upgrade. This name will be used by the upgraded
   * version of the software to apply any special "on-upgrade" commands during
   * the first BeginBlock method after the upgrade is applied. It is also used
   * to detect whether a software version can handle a given upgrade. If no
   * upgrade handler with this name has been set in the software, it will be
   * assumed that the software is out-of-date when the upgrade Time or Height is
   * reached and the software will exit.
   */
  name?: string;
  /**
   * The height at which the upgrade must be performed.
   * Only used if Time is not set.
   */
  height?: string;
  /**
   * Any application specific upgrade info to be included on-chain
   * such as a git commit that validators could automatically upgrade to
   */
  info?: string;
}
export interface PlanAminoMsg {
  type: "cosmos-sdk/Plan";
  value: PlanAmino;
}
/** Plan specifies information about a planned upgrade and when it should occur. */
export interface PlanSDKType {
  name: string;
  height: Long;
  info: string;
}
/**
 * ModuleVersion specifies a module and its consensus version.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface ModuleVersion {
  /** name of the app module */
  name: string;
  /** consensus version of the app module */
  version: Long;
}
export interface ModuleVersionProtoMsg {
  typeUrl: "/cosmos.upgrade.v1beta1.ModuleVersion";
  value: Uint8Array;
}
/**
 * ModuleVersion specifies a module and its consensus version.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface ModuleVersionAmino {
  /** name of the app module */
  name?: string;
  /** consensus version of the app module */
  version?: string;
}
export interface ModuleVersionAminoMsg {
  type: "cosmos-sdk/ModuleVersion";
  value: ModuleVersionAmino;
}
/**
 * ModuleVersion specifies a module and its consensus version.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface ModuleVersionSDKType {
  name: string;
  version: Long;
}
function createBasePlan(): Plan {
  return {
    name: "",
    height: Long.ZERO,
    info: ""
  };
}
export const Plan = {
  typeUrl: "/cosmos.upgrade.v1beta1.Plan",
  encode(message: Plan, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (!message.height.isZero()) {
      writer.uint32(16).int64(message.height);
    }
    if (message.info !== "") {
      writer.uint32(26).string(message.info);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Plan {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlan();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.height = (reader.int64() as Long);
          break;
        case 3:
          message.info = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Plan {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      info: isSet(object.info) ? String(object.info) : ""
    };
  },
  toJSON(message: Plan): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.info !== undefined && (obj.info = message.info);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Plan>, I>>(object: I): Plan {
    const message = createBasePlan();
    message.name = object.name ?? "";
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.info = object.info ?? "";
    return message;
  },
  fromSDK(object: PlanSDKType): Plan {
    return {
      name: object?.name,
      height: object?.height,
      info: object?.info
    };
  },
  toSDK(message: Plan): PlanSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.height = message.height;
    obj.info = message.info;
    return obj;
  },
  fromAmino(object: PlanAmino): Plan {
    const message = createBasePlan();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Long.fromString(object.height);
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = object.info;
    }
    return message;
  },
  toAmino(message: Plan): PlanAmino {
    const obj: any = {};
    obj.name = message.name;
    obj.height = message.height ? message.height.toString() : undefined;
    obj.info = message.info;
    return obj;
  },
  fromAminoMsg(object: PlanAminoMsg): Plan {
    return Plan.fromAmino(object.value);
  },
  toAminoMsg(message: Plan): PlanAminoMsg {
    return {
      type: "cosmos-sdk/Plan",
      value: Plan.toAmino(message)
    };
  },
  fromProtoMsg(message: PlanProtoMsg): Plan {
    return Plan.decode(message.value);
  },
  toProto(message: Plan): Uint8Array {
    return Plan.encode(message).finish();
  },
  toProtoMsg(message: Plan): PlanProtoMsg {
    return {
      typeUrl: "/cosmos.upgrade.v1beta1.Plan",
      value: Plan.encode(message).finish()
    };
  }
};
function createBaseModuleVersion(): ModuleVersion {
  return {
    name: "",
    version: Long.UZERO
  };
}
export const ModuleVersion = {
  typeUrl: "/cosmos.upgrade.v1beta1.ModuleVersion",
  encode(message: ModuleVersion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (!message.version.isZero()) {
      writer.uint32(16).uint64(message.version);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleVersion {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleVersion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.version = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ModuleVersion {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      version: isSet(object.version) ? Long.fromValue(object.version) : Long.UZERO
    };
  },
  toJSON(message: ModuleVersion): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.version !== undefined && (obj.version = (message.version || Long.UZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ModuleVersion>, I>>(object: I): ModuleVersion {
    const message = createBaseModuleVersion();
    message.name = object.name ?? "";
    message.version = object.version !== undefined && object.version !== null ? Long.fromValue(object.version) : Long.UZERO;
    return message;
  },
  fromSDK(object: ModuleVersionSDKType): ModuleVersion {
    return {
      name: object?.name,
      version: object?.version
    };
  },
  toSDK(message: ModuleVersion): ModuleVersionSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.version = message.version;
    return obj;
  },
  fromAmino(object: ModuleVersionAmino): ModuleVersion {
    const message = createBaseModuleVersion();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = Long.fromString(object.version);
    }
    return message;
  },
  toAmino(message: ModuleVersion): ModuleVersionAmino {
    const obj: any = {};
    obj.name = message.name;
    obj.version = message.version ? message.version.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ModuleVersionAminoMsg): ModuleVersion {
    return ModuleVersion.fromAmino(object.value);
  },
  toAminoMsg(message: ModuleVersion): ModuleVersionAminoMsg {
    return {
      type: "cosmos-sdk/ModuleVersion",
      value: ModuleVersion.toAmino(message)
    };
  },
  fromProtoMsg(message: ModuleVersionProtoMsg): ModuleVersion {
    return ModuleVersion.decode(message.value);
  },
  toProto(message: ModuleVersion): Uint8Array {
    return ModuleVersion.encode(message).finish();
  },
  toProtoMsg(message: ModuleVersion): ModuleVersionProtoMsg {
    return {
      typeUrl: "/cosmos.upgrade.v1beta1.ModuleVersion",
      value: ModuleVersion.encode(message).finish()
    };
  }
};