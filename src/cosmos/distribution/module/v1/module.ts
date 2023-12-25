//@ts-nocheck
/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../../../helpers";
export const protobufPackage = "cosmos.distribution.module.v1";
/** Module is the config object of the distribution module. */
export interface Module {
  feeCollectorName: string;
  /** authority defines the custom module authority. If not set, defaults to the governance module. */
  authority: string;
}
export interface ModuleProtoMsg {
  typeUrl: "/cosmos.distribution.module.v1.Module";
  value: Uint8Array;
}
/** Module is the config object of the distribution module. */
export interface ModuleSDKType {
  fee_collector_name: string;
  authority: string;
}
function createBaseModule(): Module {
  return {
    feeCollectorName: "",
    authority: ""
  };
}
export const Module = {
  typeUrl: "/cosmos.distribution.module.v1.Module",
  encode(message: Module, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feeCollectorName !== "") {
      writer.uint32(10).string(message.feeCollectorName);
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
          message.feeCollectorName = reader.string();
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
      feeCollectorName: isSet(object.feeCollectorName) ? String(object.feeCollectorName) : "",
      authority: isSet(object.authority) ? String(object.authority) : ""
    };
  },
  toJSON(message: Module): unknown {
    const obj: any = {};
    message.feeCollectorName !== undefined && (obj.feeCollectorName = message.feeCollectorName);
    message.authority !== undefined && (obj.authority = message.authority);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Module>, I>>(object: I): Module {
    const message = createBaseModule();
    message.feeCollectorName = object.feeCollectorName ?? "";
    message.authority = object.authority ?? "";
    return message;
  },
  fromSDK(object: ModuleSDKType): Module {
    return {
      feeCollectorName: object?.fee_collector_name,
      authority: object?.authority
    };
  },
  toSDK(message: Module): ModuleSDKType {
    const obj: any = {};
    obj.fee_collector_name = message.feeCollectorName;
    obj.authority = message.authority;
    return obj;
  },
  fromAmino(object: ModuleAmino): Module {
    const message = createBaseModule();
    if (object.fee_collector_name !== undefined && object.fee_collector_name !== null) {
      message.feeCollectorName = object.fee_collector_name;
    }
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    return message;
  },
  toAmino(message: Module): ModuleAmino {
    const obj: any = {};
    obj.fee_collector_name = message.feeCollectorName;
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
      typeUrl: "/cosmos.distribution.module.v1.Module",
      value: Module.encode(message).finish()
    };
  }
};