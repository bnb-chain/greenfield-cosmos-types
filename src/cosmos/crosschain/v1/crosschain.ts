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
  }

};