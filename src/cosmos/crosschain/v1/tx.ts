//@ts-nocheck
/* eslint-disable */
import { Params, ParamsAmino, ParamsSDKType, ChannelPermission, ChannelPermissionAmino, ChannelPermissionSDKType } from "./crosschain";
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
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/cosmos.crosschain.v1.MsgUpdateParams";
  value: Uint8Array;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsAmino {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority?: string;
  /**
   * params defines the x/crosschain parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "cosmos-sdk/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
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
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/cosmos.crosschain.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "cosmos-sdk/MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
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
export interface MsgUpdateChannelPermissionsProtoMsg {
  typeUrl: "/cosmos.crosschain.v1.MsgUpdateChannelPermissions";
  value: Uint8Array;
}
/** MsgUpdateChannelPermissions is the Msg/MsgUpdateChannelPermissions request type. */
export interface MsgUpdateChannelPermissionsAmino {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority?: string;
  /** channel_permissions defines the channel permissions to update */
  channel_permissions?: ChannelPermissionAmino[];
}
export interface MsgUpdateChannelPermissionsAminoMsg {
  type: "cosmos-sdk/MsgUpdateChannelPermissions";
  value: MsgUpdateChannelPermissionsAmino;
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
export interface MsgUpdateChannelPermissionsResponseProtoMsg {
  typeUrl: "/cosmos.crosschain.v1.MsgUpdateChannelPermissionsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateChannelPermissionsResponse defines the response structure for executing a
 * MsgUpdateChannelPermissions message.
 */
export interface MsgUpdateChannelPermissionsResponseAmino {}
export interface MsgUpdateChannelPermissionsResponseAminoMsg {
  type: "cosmos-sdk/MsgUpdateChannelPermissionsResponse";
  value: MsgUpdateChannelPermissionsResponseAmino;
}
/**
 * MsgUpdateChannelPermissionsResponse defines the response structure for executing a
 * MsgUpdateChannelPermissions message.
 */
export interface MsgUpdateChannelPermissionsResponseSDKType {}
/**
 * MsgMintModuleTokens is the Msg/MintModuleTokens request type.
 * The Msg is used to mint tokens for the crosschain module.
 * This Only permitted to be called by the authority(gov).
 */
export interface MsgMintModuleTokens {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /** initial balance to mint for crosschain module when the chain starts */
  amount: string;
}
export interface MsgMintModuleTokensProtoMsg {
  typeUrl: "/cosmos.crosschain.v1.MsgMintModuleTokens";
  value: Uint8Array;
}
/**
 * MsgMintModuleTokens is the Msg/MintModuleTokens request type.
 * The Msg is used to mint tokens for the crosschain module.
 * This Only permitted to be called by the authority(gov).
 */
export interface MsgMintModuleTokensAmino {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority?: string;
  /** initial balance to mint for crosschain module when the chain starts */
  amount?: string;
}
export interface MsgMintModuleTokensAminoMsg {
  type: "cosmos-sdk/MsgMintModuleTokens";
  value: MsgMintModuleTokensAmino;
}
/**
 * MsgMintModuleTokens is the Msg/MintModuleTokens request type.
 * The Msg is used to mint tokens for the crosschain module.
 * This Only permitted to be called by the authority(gov).
 */
export interface MsgMintModuleTokensSDKType {
  authority: string;
  amount: string;
}
/**
 * MsgMintModuleTokensResponse defines the response structure for executing a
 * MsgMintModuleTokens message.
 */
export interface MsgMintModuleTokensResponse {}
export interface MsgMintModuleTokensResponseProtoMsg {
  typeUrl: "/cosmos.crosschain.v1.MsgMintModuleTokensResponse";
  value: Uint8Array;
}
/**
 * MsgMintModuleTokensResponse defines the response structure for executing a
 * MsgMintModuleTokens message.
 */
export interface MsgMintModuleTokensResponseAmino {}
export interface MsgMintModuleTokensResponseAminoMsg {
  type: "cosmos-sdk/MsgMintModuleTokensResponse";
  value: MsgMintModuleTokensResponseAmino;
}
/**
 * MsgMintModuleTokensResponse defines the response structure for executing a
 * MsgMintModuleTokens message.
 */
export interface MsgMintModuleTokensResponseSDKType {}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/cosmos.crosschain.v1.MsgUpdateParams",
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
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : Params.fromPartial({});
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/cosmos.crosschain.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/cosmos.crosschain.v1.MsgUpdateParamsResponse",
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
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.crosschain.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateChannelPermissions(): MsgUpdateChannelPermissions {
  return {
    authority: "",
    channelPermissions: []
  };
}
export const MsgUpdateChannelPermissions = {
  typeUrl: "/cosmos.crosschain.v1.MsgUpdateChannelPermissions",
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
  },
  fromAmino(object: MsgUpdateChannelPermissionsAmino): MsgUpdateChannelPermissions {
    const message = createBaseMsgUpdateChannelPermissions();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    message.channelPermissions = object.channel_permissions?.map(e => ChannelPermission.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgUpdateChannelPermissions): MsgUpdateChannelPermissionsAmino {
    const obj: any = {};
    obj.authority = message.authority;
    if (message.channelPermissions) {
      obj.channel_permissions = message.channelPermissions.map(e => e ? ChannelPermission.toAmino(e) : undefined);
    } else {
      obj.channel_permissions = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgUpdateChannelPermissionsAminoMsg): MsgUpdateChannelPermissions {
    return MsgUpdateChannelPermissions.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateChannelPermissions): MsgUpdateChannelPermissionsAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateChannelPermissions",
      value: MsgUpdateChannelPermissions.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateChannelPermissionsProtoMsg): MsgUpdateChannelPermissions {
    return MsgUpdateChannelPermissions.decode(message.value);
  },
  toProto(message: MsgUpdateChannelPermissions): Uint8Array {
    return MsgUpdateChannelPermissions.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateChannelPermissions): MsgUpdateChannelPermissionsProtoMsg {
    return {
      typeUrl: "/cosmos.crosschain.v1.MsgUpdateChannelPermissions",
      value: MsgUpdateChannelPermissions.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateChannelPermissionsResponse(): MsgUpdateChannelPermissionsResponse {
  return {};
}
export const MsgUpdateChannelPermissionsResponse = {
  typeUrl: "/cosmos.crosschain.v1.MsgUpdateChannelPermissionsResponse",
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
  },
  fromAmino(_: MsgUpdateChannelPermissionsResponseAmino): MsgUpdateChannelPermissionsResponse {
    const message = createBaseMsgUpdateChannelPermissionsResponse();
    return message;
  },
  toAmino(_: MsgUpdateChannelPermissionsResponse): MsgUpdateChannelPermissionsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateChannelPermissionsResponseAminoMsg): MsgUpdateChannelPermissionsResponse {
    return MsgUpdateChannelPermissionsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateChannelPermissionsResponse): MsgUpdateChannelPermissionsResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateChannelPermissionsResponse",
      value: MsgUpdateChannelPermissionsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateChannelPermissionsResponseProtoMsg): MsgUpdateChannelPermissionsResponse {
    return MsgUpdateChannelPermissionsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateChannelPermissionsResponse): Uint8Array {
    return MsgUpdateChannelPermissionsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateChannelPermissionsResponse): MsgUpdateChannelPermissionsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.crosschain.v1.MsgUpdateChannelPermissionsResponse",
      value: MsgUpdateChannelPermissionsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgMintModuleTokens(): MsgMintModuleTokens {
  return {
    authority: "",
    amount: ""
  };
}
export const MsgMintModuleTokens = {
  typeUrl: "/cosmos.crosschain.v1.MsgMintModuleTokens",
  encode(message: MsgMintModuleTokens, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintModuleTokens {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintModuleTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgMintModuleTokens {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  toJSON(message: MsgMintModuleTokens): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgMintModuleTokens>, I>>(object: I): MsgMintModuleTokens {
    const message = createBaseMsgMintModuleTokens();
    message.authority = object.authority ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromSDK(object: MsgMintModuleTokensSDKType): MsgMintModuleTokens {
    return {
      authority: object?.authority,
      amount: object?.amount
    };
  },
  toSDK(message: MsgMintModuleTokens): MsgMintModuleTokensSDKType {
    const obj: any = {};
    obj.authority = message.authority;
    obj.amount = message.amount;
    return obj;
  },
  fromAmino(object: MsgMintModuleTokensAmino): MsgMintModuleTokens {
    const message = createBaseMsgMintModuleTokens();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: MsgMintModuleTokens): MsgMintModuleTokensAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.amount = message.amount;
    return obj;
  },
  fromAminoMsg(object: MsgMintModuleTokensAminoMsg): MsgMintModuleTokens {
    return MsgMintModuleTokens.fromAmino(object.value);
  },
  toAminoMsg(message: MsgMintModuleTokens): MsgMintModuleTokensAminoMsg {
    return {
      type: "cosmos-sdk/MsgMintModuleTokens",
      value: MsgMintModuleTokens.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgMintModuleTokensProtoMsg): MsgMintModuleTokens {
    return MsgMintModuleTokens.decode(message.value);
  },
  toProto(message: MsgMintModuleTokens): Uint8Array {
    return MsgMintModuleTokens.encode(message).finish();
  },
  toProtoMsg(message: MsgMintModuleTokens): MsgMintModuleTokensProtoMsg {
    return {
      typeUrl: "/cosmos.crosschain.v1.MsgMintModuleTokens",
      value: MsgMintModuleTokens.encode(message).finish()
    };
  }
};
function createBaseMsgMintModuleTokensResponse(): MsgMintModuleTokensResponse {
  return {};
}
export const MsgMintModuleTokensResponse = {
  typeUrl: "/cosmos.crosschain.v1.MsgMintModuleTokensResponse",
  encode(_: MsgMintModuleTokensResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintModuleTokensResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintModuleTokensResponse();
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
  fromJSON(_: any): MsgMintModuleTokensResponse {
    return {};
  },
  toJSON(_: MsgMintModuleTokensResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgMintModuleTokensResponse>, I>>(_: I): MsgMintModuleTokensResponse {
    const message = createBaseMsgMintModuleTokensResponse();
    return message;
  },
  fromSDK(_: MsgMintModuleTokensResponseSDKType): MsgMintModuleTokensResponse {
    return {};
  },
  toSDK(_: MsgMintModuleTokensResponse): MsgMintModuleTokensResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgMintModuleTokensResponseAmino): MsgMintModuleTokensResponse {
    const message = createBaseMsgMintModuleTokensResponse();
    return message;
  },
  toAmino(_: MsgMintModuleTokensResponse): MsgMintModuleTokensResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgMintModuleTokensResponseAminoMsg): MsgMintModuleTokensResponse {
    return MsgMintModuleTokensResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgMintModuleTokensResponse): MsgMintModuleTokensResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgMintModuleTokensResponse",
      value: MsgMintModuleTokensResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgMintModuleTokensResponseProtoMsg): MsgMintModuleTokensResponse {
    return MsgMintModuleTokensResponse.decode(message.value);
  },
  toProto(message: MsgMintModuleTokensResponse): Uint8Array {
    return MsgMintModuleTokensResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMintModuleTokensResponse): MsgMintModuleTokensResponseProtoMsg {
    return {
      typeUrl: "/cosmos.crosschain.v1.MsgMintModuleTokensResponse",
      value: MsgMintModuleTokensResponse.encode(message).finish()
    };
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
  /**
   * MintModuleTokens defines a governance operation for minting tokens for the crosschain module.
   * The authority is defined in the keeper.
   */
  MintModuleTokens(request: MsgMintModuleTokens): Promise<MsgMintModuleTokensResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.UpdateParams = this.UpdateParams.bind(this);
    this.UpdateChannelPermissions = this.UpdateChannelPermissions.bind(this);
    this.MintModuleTokens = this.MintModuleTokens.bind(this);
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
  MintModuleTokens(request: MsgMintModuleTokens): Promise<MsgMintModuleTokensResponse> {
    const data = MsgMintModuleTokens.encode(request).finish();
    const promise = this.rpc.request("cosmos.crosschain.v1.Msg", "MintModuleTokens", data);
    return promise.then(data => MsgMintModuleTokensResponse.decode(new _m0.Reader(data)));
  }
}