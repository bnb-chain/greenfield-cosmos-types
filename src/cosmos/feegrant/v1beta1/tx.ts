//@ts-nocheck
/* eslint-disable */
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { BasicAllowance, BasicAllowanceSDKType, PeriodicAllowance, PeriodicAllowanceSDKType, AllowedMsgAllowance, AllowedMsgAllowanceSDKType } from "./feegrant";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, Rpc } from "../../../helpers";
export const protobufPackage = "cosmos.feegrant.v1beta1";
/**
 * MsgGrantAllowance adds permission for Grantee to spend up to Allowance
 * of fees from the account of Granter.
 */
export interface MsgGrantAllowance {
  /** granter is the address of the user granting an allowance of their funds. */
  granter: string;
  /** grantee is the address of the user being granted an allowance of another user's funds. */
  grantee: string;
  /** allowance can be any of basic, periodic, allowed fee allowance. */
  allowance?: (BasicAllowance & PeriodicAllowance & AllowedMsgAllowance & Any) | undefined;
}
export interface MsgGrantAllowanceProtoMsg {
  typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance";
  value: Uint8Array;
}
/**
 * MsgGrantAllowance adds permission for Grantee to spend up to Allowance
 * of fees from the account of Granter.
 */
export interface MsgGrantAllowanceSDKType {
  granter: string;
  grantee: string;
  allowance?: BasicAllowanceSDKType | PeriodicAllowanceSDKType | AllowedMsgAllowanceSDKType | AnySDKType | undefined;
}
/** MsgGrantAllowanceResponse defines the Msg/GrantAllowanceResponse response type. */
export interface MsgGrantAllowanceResponse {}
export interface MsgGrantAllowanceResponseProtoMsg {
  typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse";
  value: Uint8Array;
}
/** MsgGrantAllowanceResponse defines the Msg/GrantAllowanceResponse response type. */
export interface MsgGrantAllowanceResponseSDKType {}
/** MsgRevokeAllowance removes any existing Allowance from Granter to Grantee. */
export interface MsgRevokeAllowance {
  /** granter is the address of the user granting an allowance of their funds. */
  granter: string;
  /** grantee is the address of the user being granted an allowance of another user's funds. */
  grantee: string;
}
export interface MsgRevokeAllowanceProtoMsg {
  typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance";
  value: Uint8Array;
}
/** MsgRevokeAllowance removes any existing Allowance from Granter to Grantee. */
export interface MsgRevokeAllowanceSDKType {
  granter: string;
  grantee: string;
}
/** MsgRevokeAllowanceResponse defines the Msg/RevokeAllowanceResponse response type. */
export interface MsgRevokeAllowanceResponse {}
export interface MsgRevokeAllowanceResponseProtoMsg {
  typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse";
  value: Uint8Array;
}
/** MsgRevokeAllowanceResponse defines the Msg/RevokeAllowanceResponse response type. */
export interface MsgRevokeAllowanceResponseSDKType {}
function createBaseMsgGrantAllowance(): MsgGrantAllowance {
  return {
    granter: "",
    grantee: "",
    allowance: undefined
  };
}
export const MsgGrantAllowance = {
  typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
  encode(message: MsgGrantAllowance, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.allowance !== undefined) {
      Any.encode((message.allowance as Any), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgGrantAllowance {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrantAllowance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.allowance = (Cosmos_feegrantv1beta1FeeAllowanceI_InterfaceDecoder(reader) as Any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgGrantAllowance {
    return {
      granter: isSet(object.granter) ? String(object.granter) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      allowance: isSet(object.allowance) ? Any.fromJSON(object.allowance) : undefined
    };
  },
  toJSON(message: MsgGrantAllowance): unknown {
    const obj: any = {};
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.allowance !== undefined && (obj.allowance = message.allowance ? Any.toJSON(message.allowance) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgGrantAllowance>, I>>(object: I): MsgGrantAllowance {
    const message = createBaseMsgGrantAllowance();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    message.allowance = object.allowance !== undefined && object.allowance !== null ? Any.fromPartial(object.allowance) : undefined;
    return message;
  },
  fromSDK(object: MsgGrantAllowanceSDKType): MsgGrantAllowance {
    return {
      granter: object?.granter,
      grantee: object?.grantee,
      allowance: object.allowance ? Any.fromSDK(object.allowance) : undefined
    };
  },
  toSDK(message: MsgGrantAllowance): MsgGrantAllowanceSDKType {
    const obj: any = {};
    obj.granter = message.granter;
    obj.grantee = message.grantee;
    message.allowance !== undefined && (obj.allowance = message.allowance ? Any.toSDK(message.allowance) : undefined);
    return obj;
  },
  fromAmino(object: MsgGrantAllowanceAmino): MsgGrantAllowance {
    const message = createBaseMsgGrantAllowance();
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    if (object.allowance !== undefined && object.allowance !== null) {
      message.allowance = Cosmos_feegrantv1beta1FeeAllowanceI_FromAmino(object.allowance);
    }
    return message;
  },
  toAmino(message: MsgGrantAllowance): MsgGrantAllowanceAmino {
    const obj: any = {};
    obj.granter = message.granter;
    obj.grantee = message.grantee;
    obj.allowance = message.allowance ? Cosmos_feegrantv1beta1FeeAllowanceI_ToAmino((message.allowance as Any)) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgGrantAllowanceAminoMsg): MsgGrantAllowance {
    return MsgGrantAllowance.fromAmino(object.value);
  },
  toAminoMsg(message: MsgGrantAllowance): MsgGrantAllowanceAminoMsg {
    return {
      type: "cosmos-sdk/MsgGrantAllowance",
      value: MsgGrantAllowance.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgGrantAllowanceProtoMsg): MsgGrantAllowance {
    return MsgGrantAllowance.decode(message.value);
  },
  toProto(message: MsgGrantAllowance): Uint8Array {
    return MsgGrantAllowance.encode(message).finish();
  },
  toProtoMsg(message: MsgGrantAllowance): MsgGrantAllowanceProtoMsg {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
      value: MsgGrantAllowance.encode(message).finish()
    };
  }
};
function createBaseMsgGrantAllowanceResponse(): MsgGrantAllowanceResponse {
  return {};
}
export const MsgGrantAllowanceResponse = {
  typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse",
  encode(_: MsgGrantAllowanceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgGrantAllowanceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrantAllowanceResponse();
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
  fromJSON(_: any): MsgGrantAllowanceResponse {
    return {};
  },
  toJSON(_: MsgGrantAllowanceResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgGrantAllowanceResponse>, I>>(_: I): MsgGrantAllowanceResponse {
    const message = createBaseMsgGrantAllowanceResponse();
    return message;
  },
  fromSDK(_: MsgGrantAllowanceResponseSDKType): MsgGrantAllowanceResponse {
    return {};
  },
  toSDK(_: MsgGrantAllowanceResponse): MsgGrantAllowanceResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgGrantAllowanceResponseAmino): MsgGrantAllowanceResponse {
    const message = createBaseMsgGrantAllowanceResponse();
    return message;
  },
  toAmino(_: MsgGrantAllowanceResponse): MsgGrantAllowanceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgGrantAllowanceResponseAminoMsg): MsgGrantAllowanceResponse {
    return MsgGrantAllowanceResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgGrantAllowanceResponse): MsgGrantAllowanceResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgGrantAllowanceResponse",
      value: MsgGrantAllowanceResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgGrantAllowanceResponseProtoMsg): MsgGrantAllowanceResponse {
    return MsgGrantAllowanceResponse.decode(message.value);
  },
  toProto(message: MsgGrantAllowanceResponse): Uint8Array {
    return MsgGrantAllowanceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgGrantAllowanceResponse): MsgGrantAllowanceResponseProtoMsg {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse",
      value: MsgGrantAllowanceResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRevokeAllowance(): MsgRevokeAllowance {
  return {
    granter: "",
    grantee: ""
  };
}
export const MsgRevokeAllowance = {
  typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
  encode(message: MsgRevokeAllowance, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeAllowance {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeAllowance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRevokeAllowance {
    return {
      granter: isSet(object.granter) ? String(object.granter) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : ""
    };
  },
  toJSON(message: MsgRevokeAllowance): unknown {
    const obj: any = {};
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRevokeAllowance>, I>>(object: I): MsgRevokeAllowance {
    const message = createBaseMsgRevokeAllowance();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    return message;
  },
  fromSDK(object: MsgRevokeAllowanceSDKType): MsgRevokeAllowance {
    return {
      granter: object?.granter,
      grantee: object?.grantee
    };
  },
  toSDK(message: MsgRevokeAllowance): MsgRevokeAllowanceSDKType {
    const obj: any = {};
    obj.granter = message.granter;
    obj.grantee = message.grantee;
    return obj;
  },
  fromAmino(object: MsgRevokeAllowanceAmino): MsgRevokeAllowance {
    const message = createBaseMsgRevokeAllowance();
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    return message;
  },
  toAmino(message: MsgRevokeAllowance): MsgRevokeAllowanceAmino {
    const obj: any = {};
    obj.granter = message.granter;
    obj.grantee = message.grantee;
    return obj;
  },
  fromAminoMsg(object: MsgRevokeAllowanceAminoMsg): MsgRevokeAllowance {
    return MsgRevokeAllowance.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRevokeAllowance): MsgRevokeAllowanceAminoMsg {
    return {
      type: "cosmos-sdk/MsgRevokeAllowance",
      value: MsgRevokeAllowance.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRevokeAllowanceProtoMsg): MsgRevokeAllowance {
    return MsgRevokeAllowance.decode(message.value);
  },
  toProto(message: MsgRevokeAllowance): Uint8Array {
    return MsgRevokeAllowance.encode(message).finish();
  },
  toProtoMsg(message: MsgRevokeAllowance): MsgRevokeAllowanceProtoMsg {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
      value: MsgRevokeAllowance.encode(message).finish()
    };
  }
};
function createBaseMsgRevokeAllowanceResponse(): MsgRevokeAllowanceResponse {
  return {};
}
export const MsgRevokeAllowanceResponse = {
  typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse",
  encode(_: MsgRevokeAllowanceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeAllowanceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeAllowanceResponse();
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
  fromJSON(_: any): MsgRevokeAllowanceResponse {
    return {};
  },
  toJSON(_: MsgRevokeAllowanceResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRevokeAllowanceResponse>, I>>(_: I): MsgRevokeAllowanceResponse {
    const message = createBaseMsgRevokeAllowanceResponse();
    return message;
  },
  fromSDK(_: MsgRevokeAllowanceResponseSDKType): MsgRevokeAllowanceResponse {
    return {};
  },
  toSDK(_: MsgRevokeAllowanceResponse): MsgRevokeAllowanceResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgRevokeAllowanceResponseAmino): MsgRevokeAllowanceResponse {
    const message = createBaseMsgRevokeAllowanceResponse();
    return message;
  },
  toAmino(_: MsgRevokeAllowanceResponse): MsgRevokeAllowanceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRevokeAllowanceResponseAminoMsg): MsgRevokeAllowanceResponse {
    return MsgRevokeAllowanceResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRevokeAllowanceResponse): MsgRevokeAllowanceResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgRevokeAllowanceResponse",
      value: MsgRevokeAllowanceResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRevokeAllowanceResponseProtoMsg): MsgRevokeAllowanceResponse {
    return MsgRevokeAllowanceResponse.decode(message.value);
  },
  toProto(message: MsgRevokeAllowanceResponse): Uint8Array {
    return MsgRevokeAllowanceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRevokeAllowanceResponse): MsgRevokeAllowanceResponseProtoMsg {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse",
      value: MsgRevokeAllowanceResponse.encode(message).finish()
    };
  }
};
export const Cosmos_feegrantv1beta1FeeAllowanceI_InterfaceDecoder = (input: BinaryReader | Uint8Array): BasicAllowance | PeriodicAllowance | AllowedMsgAllowance | Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32(), true);
  switch (data.typeUrl) {
    case "/cosmos.feegrant.v1beta1.BasicAllowance":
      return BasicAllowance.decode(data.value, undefined, true);
    case "/cosmos.feegrant.v1beta1.PeriodicAllowance":
      return PeriodicAllowance.decode(data.value, undefined, true);
    case "/cosmos.feegrant.v1beta1.AllowedMsgAllowance":
      return AllowedMsgAllowance.decode(data.value, undefined, true);
    default:
      return data;
  }
};
/** Msg defines the feegrant msg service. */
export interface Msg {
  /**
   * GrantAllowance grants fee allowance to the grantee on the granter's
   * account with the provided expiration time.
   */
  GrantAllowance(request: MsgGrantAllowance): Promise<MsgGrantAllowanceResponse>;
  /**
   * RevokeAllowance revokes any fee allowance of granter's account that
   * has been granted to the grantee.
   */
  RevokeAllowance(request: MsgRevokeAllowance): Promise<MsgRevokeAllowanceResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GrantAllowance = this.GrantAllowance.bind(this);
    this.RevokeAllowance = this.RevokeAllowance.bind(this);
  }
  GrantAllowance(request: MsgGrantAllowance): Promise<MsgGrantAllowanceResponse> {
    const data = MsgGrantAllowance.encode(request).finish();
    const promise = this.rpc.request("cosmos.feegrant.v1beta1.Msg", "GrantAllowance", data);
    return promise.then(data => MsgGrantAllowanceResponse.decode(new BinaryReader(data)));
  }
  RevokeAllowance(request: MsgRevokeAllowance): Promise<MsgRevokeAllowanceResponse> {
    const data = MsgRevokeAllowance.encode(request).finish();
    const promise = this.rpc.request("cosmos.feegrant.v1beta1.Msg", "RevokeAllowance", data);
    return promise.then(data => MsgRevokeAllowanceResponse.decode(new BinaryReader(data)));
  }
}