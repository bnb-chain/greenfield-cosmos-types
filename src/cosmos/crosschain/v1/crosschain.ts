//@ts-nocheck
/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "cosmos.crosschain.v1";
/** Params holds parameters for the cross chain module. */
export interface Params {
  /** initial balance to mint for crosschain module when the chain starts */
  initModuleBalance: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/cosmos.crosschain.v1.Params";
  value: Uint8Array;
}
/** Params holds parameters for the cross chain module. */
export interface ParamsSDKType {
  init_module_balance: string;
}
/** ChannelPermission defines the fields of the channel permission */
export interface ChannelPermission {
  /** destination chain id */
  destChainId: number;
  /** channel id */
  channelId: number;
  /** permission status, 1 for allow, 0 for forbidden */
  permission: number;
}
export interface ChannelPermissionProtoMsg {
  typeUrl: "/cosmos.crosschain.v1.ChannelPermission";
  value: Uint8Array;
}
/** ChannelPermission defines the fields of the channel permission */
export interface ChannelPermissionSDKType {
  dest_chain_id: number;
  channel_id: number;
  permission: number;
}
function createBaseParams(): Params {
  return {
    initModuleBalance: ""
  };
}
export const Params = {
  typeUrl: "/cosmos.crosschain.v1.Params",
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.initModuleBalance !== "") {
      writer.uint32(10).string(message.initModuleBalance);
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
          message.initModuleBalance = reader.string();
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
      initModuleBalance: isSet(object.initModuleBalance) ? String(object.initModuleBalance) : ""
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.initModuleBalance !== undefined && (obj.initModuleBalance = message.initModuleBalance);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.initModuleBalance = object.initModuleBalance ?? "";
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      initModuleBalance: object?.init_module_balance
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.init_module_balance = message.initModuleBalance;
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.init_module_balance !== undefined && object.init_module_balance !== null) {
      message.initModuleBalance = object.init_module_balance;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.init_module_balance = message.initModuleBalance;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "cosmos-sdk/x/crosschain/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/cosmos.crosschain.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseChannelPermission(): ChannelPermission {
  return {
    destChainId: 0,
    channelId: 0,
    permission: 0
  };
}
export const ChannelPermission = {
  typeUrl: "/cosmos.crosschain.v1.ChannelPermission",
  encode(message: ChannelPermission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.destChainId !== 0) {
      writer.uint32(8).uint32(message.destChainId);
    }
    if (message.channelId !== 0) {
      writer.uint32(16).uint32(message.channelId);
    }
    if (message.permission !== 0) {
      writer.uint32(24).uint32(message.permission);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ChannelPermission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelPermission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.destChainId = reader.uint32();
          break;
        case 2:
          message.channelId = reader.uint32();
          break;
        case 3:
          message.permission = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ChannelPermission {
    return {
      destChainId: isSet(object.destChainId) ? Number(object.destChainId) : 0,
      channelId: isSet(object.channelId) ? Number(object.channelId) : 0,
      permission: isSet(object.permission) ? Number(object.permission) : 0
    };
  },
  toJSON(message: ChannelPermission): unknown {
    const obj: any = {};
    message.destChainId !== undefined && (obj.destChainId = Math.round(message.destChainId));
    message.channelId !== undefined && (obj.channelId = Math.round(message.channelId));
    message.permission !== undefined && (obj.permission = Math.round(message.permission));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ChannelPermission>, I>>(object: I): ChannelPermission {
    const message = createBaseChannelPermission();
    message.destChainId = object.destChainId ?? 0;
    message.channelId = object.channelId ?? 0;
    message.permission = object.permission ?? 0;
    return message;
  },
  fromSDK(object: ChannelPermissionSDKType): ChannelPermission {
    return {
      destChainId: object?.dest_chain_id,
      channelId: object?.channel_id,
      permission: object?.permission
    };
  },
  toSDK(message: ChannelPermission): ChannelPermissionSDKType {
    const obj: any = {};
    obj.dest_chain_id = message.destChainId;
    obj.channel_id = message.channelId;
    obj.permission = message.permission;
    return obj;
  },
  fromAmino(object: ChannelPermissionAmino): ChannelPermission {
    const message = createBaseChannelPermission();
    if (object.dest_chain_id !== undefined && object.dest_chain_id !== null) {
      message.destChainId = object.dest_chain_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.permission !== undefined && object.permission !== null) {
      message.permission = object.permission;
    }
    return message;
  },
  toAmino(message: ChannelPermission): ChannelPermissionAmino {
    const obj: any = {};
    obj.dest_chain_id = message.destChainId;
    obj.channel_id = message.channelId;
    obj.permission = message.permission;
    return obj;
  },
  fromAminoMsg(object: ChannelPermissionAminoMsg): ChannelPermission {
    return ChannelPermission.fromAmino(object.value);
  },
  toAminoMsg(message: ChannelPermission): ChannelPermissionAminoMsg {
    return {
      type: "cosmos-sdk/ChannelPermission",
      value: ChannelPermission.toAmino(message)
    };
  },
  fromProtoMsg(message: ChannelPermissionProtoMsg): ChannelPermission {
    return ChannelPermission.decode(message.value);
  },
  toProto(message: ChannelPermission): Uint8Array {
    return ChannelPermission.encode(message).finish();
  },
  toProtoMsg(message: ChannelPermission): ChannelPermissionProtoMsg {
    return {
      typeUrl: "/cosmos.crosschain.v1.ChannelPermission",
      value: ChannelPermission.encode(message).finish()
    };
  }
};