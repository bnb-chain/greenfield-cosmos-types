//@ts-nocheck
/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../../../helpers";
export const protobufPackage = "cosmos.staking.module.v1";
/** Module is the config object of the staking module. */
export interface Module {
  /**
   * hooks_order specifies the order of staking hooks and should be a list
   * of module names which provide a staking hooks instance. If no order is
   * provided, then hooks will be applied in alphabetical order of module names.
   */
  hooksOrder: string[];
  /** authority defines the custom module authority. If not set, defaults to the governance module. */
  authority: string;
}
export interface ModuleProtoMsg {
  typeUrl: "/cosmos.staking.module.v1.Module";
  value: Uint8Array;
}
/** Module is the config object of the staking module. */
export interface ModuleAmino {
  /**
   * hooks_order specifies the order of staking hooks and should be a list
   * of module names which provide a staking hooks instance. If no order is
   * provided, then hooks will be applied in alphabetical order of module names.
   */
  hooks_order?: string[];
  /** authority defines the custom module authority. If not set, defaults to the governance module. */
  authority?: string;
}
export interface ModuleAminoMsg {
  type: "cosmos-sdk/Module";
  value: ModuleAmino;
}
/** Module is the config object of the staking module. */
export interface ModuleSDKType {
  hooks_order: string[];
  authority: string;
}
function createBaseModule(): Module {
  return {
    hooksOrder: [],
    authority: ""
  };
}
export const Module = {
  typeUrl: "/cosmos.staking.module.v1.Module",
  encode(message: Module, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.hooksOrder) {
      writer.uint32(10).string(v!);
    }
    if (message.authority !== "") {
      writer.uint32(18).string(message.authority);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Module {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hooksOrder.push(reader.string());
          break;
        case 2:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Module {
    return {
      hooksOrder: Array.isArray(object?.hooksOrder) ? object.hooksOrder.map((e: any) => String(e)) : [],
      authority: isSet(object.authority) ? String(object.authority) : ""
    };
  },
  toJSON(message: Module): unknown {
    const obj: any = {};
    if (message.hooksOrder) {
      obj.hooksOrder = message.hooksOrder.map(e => e);
    } else {
      obj.hooksOrder = [];
    }
    message.authority !== undefined && (obj.authority = message.authority);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Module>, I>>(object: I): Module {
    const message = createBaseModule();
    message.hooksOrder = object.hooksOrder?.map(e => e) || [];
    message.authority = object.authority ?? "";
    return message;
  },
  fromSDK(object: ModuleSDKType): Module {
    return {
      hooksOrder: Array.isArray(object?.hooks_order) ? object.hooks_order.map((e: any) => e) : [],
      authority: object?.authority
    };
  },
  toSDK(message: Module): ModuleSDKType {
    const obj: any = {};
    if (message.hooksOrder) {
      obj.hooks_order = message.hooksOrder.map(e => e);
    } else {
      obj.hooks_order = [];
    }
    obj.authority = message.authority;
    return obj;
  },
  fromAmino(object: ModuleAmino): Module {
    const message = createBaseModule();
    message.hooksOrder = object.hooks_order?.map(e => e) || [];
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    return message;
  },
  toAmino(message: Module): ModuleAmino {
    const obj: any = {};
    if (message.hooksOrder) {
      obj.hooks_order = message.hooksOrder.map(e => e);
    } else {
      obj.hooks_order = [];
    }
    obj.authority = message.authority;
    return obj;
  },
  fromAminoMsg(object: ModuleAminoMsg): Module {
    return Module.fromAmino(object.value);
  },
  toAminoMsg(message: Module): ModuleAminoMsg {
    return {
      type: "cosmos-sdk/Module",
      value: Module.toAmino(message)
    };
  },
  fromProtoMsg(message: ModuleProtoMsg): Module {
    return Module.decode(message.value);
  },
  toProto(message: Module): Uint8Array {
    return Module.encode(message).finish();
  },
  toProtoMsg(message: Module): ModuleProtoMsg {
    return {
      typeUrl: "/cosmos.staking.module.v1.Module",
      value: Module.encode(message).finish()
    };
  }
};