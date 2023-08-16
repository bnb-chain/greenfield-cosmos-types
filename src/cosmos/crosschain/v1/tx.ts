//@ts-nocheck
/* eslint-disable */
import { Params, ParamsSDKType, ChannelPermission, ChannelPermissionSDKType } from "./crosschain";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact, Rpc } from "../../../helpers";
export const protobufPackage = "cosmos.crosschain.v1";
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /**
   * params defines the x/crosschain parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseSDKType {}
/** MsgUpdateChannelPermissions is the Msg/MsgUpdateChannelPermissions request type. */
export interface MsgUpdateChannelPermissions {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /** channel_permissions defines the channel permissions to update */
  channelPermissions: ChannelPermission[];
}
/** MsgUpdateChannelPermissions is the Msg/MsgUpdateChannelPermissions request type. */
export interface MsgUpdateChannelPermissionsSDKType {
  authority: string;
  channel_permissions: ChannelPermissionSDKType[];
}
/**
 * MsgUpdateChannelPermissionsResponse defines the response structure for executing a
 * MsgUpdateChannelPermissions message.
 */
export interface MsgUpdateChannelPermissionsResponse {}
/**
 * MsgUpdateChannelPermissionsResponse defines the response structure for executing a
 * MsgUpdateChannelPermissions message.
 */
export interface MsgUpdateChannelPermissionsResponseSDKType {}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromSDK(object: MsgUpdateParamsSDKType): MsgUpdateParams {
    return {
      authority: object?.authority,
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },
  toSDK(message: MsgUpdateParams): MsgUpdateParamsSDKType {
    const obj: any = {};
    obj.authority = message.authority;
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromSDK(_: MsgUpdateParamsResponseSDKType): MsgUpdateParamsResponse {
    return {};
  },
  toSDK(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseMsgUpdateChannelPermissions(): MsgUpdateChannelPermissions {
  return {
    authority: "",
    channelPermissions: []
  };
}
export const MsgUpdateChannelPermissions = {
  encode(message: MsgUpdateChannelPermissions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.channelPermissions) {
      ChannelPermission.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateChannelPermissions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateChannelPermissions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.channelPermissions.push(ChannelPermission.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateChannelPermissions {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      channelPermissions: Array.isArray(object?.channelPermissions) ? object.channelPermissions.map((e: any) => ChannelPermission.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgUpdateChannelPermissions): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    if (message.channelPermissions) {
      obj.channelPermissions = message.channelPermissions.map(e => e ? ChannelPermission.toJSON(e) : undefined);
    } else {
      obj.channelPermissions = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateChannelPermissions>, I>>(object: I): MsgUpdateChannelPermissions {
    const message = createBaseMsgUpdateChannelPermissions();
    message.authority = object.authority ?? "";
    message.channelPermissions = object.channelPermissions?.map(e => ChannelPermission.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgUpdateChannelPermissionsSDKType): MsgUpdateChannelPermissions {
    return {
      authority: object?.authority,
      channelPermissions: Array.isArray(object?.channel_permissions) ? object.channel_permissions.map((e: any) => ChannelPermission.fromSDK(e)) : []
    };
  },
  toSDK(message: MsgUpdateChannelPermissions): MsgUpdateChannelPermissionsSDKType {
    const obj: any = {};
    obj.authority = message.authority;
    if (message.channelPermissions) {
      obj.channel_permissions = message.channelPermissions.map(e => e ? ChannelPermission.toSDK(e) : undefined);
    } else {
      obj.channel_permissions = [];
    }
    return obj;
  }
};
function createBaseMsgUpdateChannelPermissionsResponse(): MsgUpdateChannelPermissionsResponse {
  return {};
}
export const MsgUpdateChannelPermissionsResponse = {
  encode(_: MsgUpdateChannelPermissionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateChannelPermissionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateChannelPermissionsResponse();
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
  fromJSON(_: any): MsgUpdateChannelPermissionsResponse {
    return {};
  },
  toJSON(_: MsgUpdateChannelPermissionsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateChannelPermissionsResponse>, I>>(_: I): MsgUpdateChannelPermissionsResponse {
    const message = createBaseMsgUpdateChannelPermissionsResponse();
    return message;
  },
  fromSDK(_: MsgUpdateChannelPermissionsResponseSDKType): MsgUpdateChannelPermissionsResponse {
    return {};
  },
  toSDK(_: MsgUpdateChannelPermissionsResponse): MsgUpdateChannelPermissionsResponseSDKType {
    const obj: any = {};
    return obj;
  }
};
/** Msg defines the crosschain Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a governance operation for updating the x/crosschain module parameters.
   * The authority is defined in the keeper.
   * 
   * Since: cosmos-sdk 0.47
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /**
   * UpdateChannelPermissions defines a governance operation for updating the channel permissions.
   * The authority is defined in the keeper.
   */
  UpdateChannelPermissions(request: MsgUpdateChannelPermissions): Promise<MsgUpdateChannelPermissionsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.UpdateParams = this.UpdateParams.bind(this);
    this.UpdateChannelPermissions = this.UpdateChannelPermissions.bind(this);
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("cosmos.crosschain.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
  }
  UpdateChannelPermissions(request: MsgUpdateChannelPermissions): Promise<MsgUpdateChannelPermissionsResponse> {
    const data = MsgUpdateChannelPermissions.encode(request).finish();
    const promise = this.rpc.request("cosmos.crosschain.v1.Msg", "UpdateChannelPermissions", data);
    return promise.then(data => MsgUpdateChannelPermissionsResponse.decode(new _m0.Reader(data)));
  }
}