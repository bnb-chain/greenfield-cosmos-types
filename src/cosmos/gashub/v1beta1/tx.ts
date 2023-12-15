//@ts-nocheck
/* eslint-disable */
import { Params, ParamsSDKType, MsgGasParams, MsgGasParamsSDKType } from "./gashub";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, Rpc } from "../../../helpers";
export const protobufPackage = "cosmos.gashub.v1beta1";
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /**
   * params defines the x/gashub parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/cosmos.gashub.v1beta1.MsgUpdateParams";
  value: Uint8Array;
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
  typeUrl: "/cosmos.gashub.v1beta1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseSDKType {}
/**
 * MsgSetMsgGasParams is the Msg/SetMsgGasParams request type.
 * 
 * Only entries to add/update/delete need to be included.
 * Existing MsgGasParams entries that are not included in this
 * message are left unchanged.
 */
export interface MsgSetMsgGasParams {
  authority: string;
  /** update_set is the list of entries to add or update. */
  updateSet: MsgGasParams[];
  /**
   * delete_set is a list of msg types that will have their MsgGasParams entries deleted.
   * If a msg type is included that doesn't have a MsgGasParams entry,
   * it will be ignored.
   */
  deleteSet: string[];
}
export interface MsgSetMsgGasParamsProtoMsg {
  typeUrl: "/cosmos.gashub.v1beta1.MsgSetMsgGasParams";
  value: Uint8Array;
}
/**
 * MsgSetMsgGasParams is the Msg/SetMsgGasParams request type.
 * 
 * Only entries to add/update/delete need to be included.
 * Existing MsgGasParams entries that are not included in this
 * message are left unchanged.
 */
export interface MsgSetMsgGasParamsSDKType {
  authority: string;
  update_set: MsgGasParamsSDKType[];
  delete_set: string[];
}
/** MsgSetMsgGasParamsResponse defines the Msg/SetMsgGasParams response type. */
export interface MsgSetMsgGasParamsResponse {}
export interface MsgSetMsgGasParamsResponseProtoMsg {
  typeUrl: "/cosmos.gashub.v1beta1.MsgSetMsgGasParamsResponse";
  value: Uint8Array;
}
/** MsgSetMsgGasParamsResponse defines the Msg/SetMsgGasParams response type. */
export interface MsgSetMsgGasParamsResponseSDKType {}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/cosmos.gashub.v1beta1.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
      type: "cosmos-sdk/x/gashub/MsgUpdateParams",
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
      typeUrl: "/cosmos.gashub.v1beta1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/cosmos.gashub.v1beta1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
      typeUrl: "/cosmos.gashub.v1beta1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetMsgGasParams(): MsgSetMsgGasParams {
  return {
    authority: "",
    updateSet: [],
    deleteSet: []
  };
}
export const MsgSetMsgGasParams = {
  typeUrl: "/cosmos.gashub.v1beta1.MsgSetMsgGasParams",
  encode(message: MsgSetMsgGasParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.updateSet) {
      MsgGasParams.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.deleteSet) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetMsgGasParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMsgGasParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.updateSet.push(MsgGasParams.decode(reader, reader.uint32()));
          break;
        case 3:
          message.deleteSet.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetMsgGasParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      updateSet: Array.isArray(object?.updateSet) ? object.updateSet.map((e: any) => MsgGasParams.fromJSON(e)) : [],
      deleteSet: Array.isArray(object?.deleteSet) ? object.deleteSet.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: MsgSetMsgGasParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    if (message.updateSet) {
      obj.updateSet = message.updateSet.map(e => e ? MsgGasParams.toJSON(e) : undefined);
    } else {
      obj.updateSet = [];
    }
    if (message.deleteSet) {
      obj.deleteSet = message.deleteSet.map(e => e);
    } else {
      obj.deleteSet = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetMsgGasParams>, I>>(object: I): MsgSetMsgGasParams {
    const message = createBaseMsgSetMsgGasParams();
    message.authority = object.authority ?? "";
    message.updateSet = object.updateSet?.map(e => MsgGasParams.fromPartial(e)) || [];
    message.deleteSet = object.deleteSet?.map(e => e) || [];
    return message;
  },
  fromSDK(object: MsgSetMsgGasParamsSDKType): MsgSetMsgGasParams {
    return {
      authority: object?.authority,
      updateSet: Array.isArray(object?.update_set) ? object.update_set.map((e: any) => MsgGasParams.fromSDK(e)) : [],
      deleteSet: Array.isArray(object?.delete_set) ? object.delete_set.map((e: any) => e) : []
    };
  },
  toSDK(message: MsgSetMsgGasParams): MsgSetMsgGasParamsSDKType {
    const obj: any = {};
    obj.authority = message.authority;
    if (message.updateSet) {
      obj.update_set = message.updateSet.map(e => e ? MsgGasParams.toSDK(e) : undefined);
    } else {
      obj.update_set = [];
    }
    if (message.deleteSet) {
      obj.delete_set = message.deleteSet.map(e => e);
    } else {
      obj.delete_set = [];
    }
    return obj;
  },
  fromAmino(object: MsgSetMsgGasParamsAmino): MsgSetMsgGasParams {
    const message = createBaseMsgSetMsgGasParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    message.updateSet = object.update_set?.map(e => MsgGasParams.fromAmino(e)) || [];
    message.deleteSet = object.delete_set?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgSetMsgGasParams): MsgSetMsgGasParamsAmino {
    const obj: any = {};
    obj.authority = message.authority;
    if (message.updateSet) {
      obj.update_set = message.updateSet.map(e => e ? MsgGasParams.toAmino(e) : undefined);
    } else {
      obj.update_set = [];
    }
    if (message.deleteSet) {
      obj.delete_set = message.deleteSet.map(e => e);
    } else {
      obj.delete_set = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgSetMsgGasParamsAminoMsg): MsgSetMsgGasParams {
    return MsgSetMsgGasParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetMsgGasParams): MsgSetMsgGasParamsAminoMsg {
    return {
      type: "cosmos-sdk/MsgSetMsgGasParams",
      value: MsgSetMsgGasParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetMsgGasParamsProtoMsg): MsgSetMsgGasParams {
    return MsgSetMsgGasParams.decode(message.value);
  },
  toProto(message: MsgSetMsgGasParams): Uint8Array {
    return MsgSetMsgGasParams.encode(message).finish();
  },
  toProtoMsg(message: MsgSetMsgGasParams): MsgSetMsgGasParamsProtoMsg {
    return {
      typeUrl: "/cosmos.gashub.v1beta1.MsgSetMsgGasParams",
      value: MsgSetMsgGasParams.encode(message).finish()
    };
  }
};
function createBaseMsgSetMsgGasParamsResponse(): MsgSetMsgGasParamsResponse {
  return {};
}
export const MsgSetMsgGasParamsResponse = {
  typeUrl: "/cosmos.gashub.v1beta1.MsgSetMsgGasParamsResponse",
  encode(_: MsgSetMsgGasParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetMsgGasParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMsgGasParamsResponse();
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
  fromJSON(_: any): MsgSetMsgGasParamsResponse {
    return {};
  },
  toJSON(_: MsgSetMsgGasParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetMsgGasParamsResponse>, I>>(_: I): MsgSetMsgGasParamsResponse {
    const message = createBaseMsgSetMsgGasParamsResponse();
    return message;
  },
  fromSDK(_: MsgSetMsgGasParamsResponseSDKType): MsgSetMsgGasParamsResponse {
    return {};
  },
  toSDK(_: MsgSetMsgGasParamsResponse): MsgSetMsgGasParamsResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgSetMsgGasParamsResponseAmino): MsgSetMsgGasParamsResponse {
    const message = createBaseMsgSetMsgGasParamsResponse();
    return message;
  },
  toAmino(_: MsgSetMsgGasParamsResponse): MsgSetMsgGasParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetMsgGasParamsResponseAminoMsg): MsgSetMsgGasParamsResponse {
    return MsgSetMsgGasParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetMsgGasParamsResponse): MsgSetMsgGasParamsResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgSetMsgGasParamsResponse",
      value: MsgSetMsgGasParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetMsgGasParamsResponseProtoMsg): MsgSetMsgGasParamsResponse {
    return MsgSetMsgGasParamsResponse.decode(message.value);
  },
  toProto(message: MsgSetMsgGasParamsResponse): Uint8Array {
    return MsgSetMsgGasParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetMsgGasParamsResponse): MsgSetMsgGasParamsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.gashub.v1beta1.MsgSetMsgGasParamsResponse",
      value: MsgSetMsgGasParamsResponse.encode(message).finish()
    };
  }
};
/** Msg defines the gashub Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a governance operation for updating the x/gashub module parameters.
   * The authority is defined in the keeper.
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /**
   * SetMsgGasParams is a governance operation for setting the MsgGasParams flag
   * on any number of msg types. Only the entries to add or update should be
   * included. Entries that already exist in the store, but that aren't
   * included in this message, will be left unchanged.
   */
  SetMsgGasParams(request: MsgSetMsgGasParams): Promise<MsgSetMsgGasParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.UpdateParams = this.UpdateParams.bind(this);
    this.SetMsgGasParams = this.SetMsgGasParams.bind(this);
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("cosmos.gashub.v1beta1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  SetMsgGasParams(request: MsgSetMsgGasParams): Promise<MsgSetMsgGasParamsResponse> {
    const data = MsgSetMsgGasParams.encode(request).finish();
    const promise = this.rpc.request("cosmos.gashub.v1beta1.Msg", "SetMsgGasParams", data);
    return promise.then(data => MsgSetMsgGasParamsResponse.decode(new BinaryReader(data)));
  }
}