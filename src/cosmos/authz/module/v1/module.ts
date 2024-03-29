//@ts-nocheck
/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Exact } from "../../../../helpers";
export const protobufPackage = "cosmos.authz.module.v1";
/** Module is the config object of the authz module. */
export interface Module {}
export interface ModuleProtoMsg {
  typeUrl: "/cosmos.authz.module.v1.Module";
  value: Uint8Array;
}
/** Module is the config object of the authz module. */
export interface ModuleAmino {}
export interface ModuleAminoMsg {
  type: "cosmos-sdk/Module";
  value: ModuleAmino;
}
/** Module is the config object of the authz module. */
export interface ModuleSDKType {}
function createBaseModule(): Module {
  return {};
}
export const Module = {
  typeUrl: "/cosmos.authz.module.v1.Module",
  encode(_: Module, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Module {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): Module {
    return {};
  },
  toJSON(_: Module): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Module>, I>>(_: I): Module {
    const message = createBaseModule();
    return message;
  },
  fromSDK(_: ModuleSDKType): Module {
    return {};
  },
  toSDK(_: Module): ModuleSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: ModuleAmino): Module {
    const message = createBaseModule();
    return message;
  },
  toAmino(_: Module): ModuleAmino {
    const obj: any = {};
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
      typeUrl: "/cosmos.authz.module.v1.Module",
      value: Module.encode(message).finish()
    };
  }
};