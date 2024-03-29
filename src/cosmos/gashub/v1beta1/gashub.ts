//@ts-nocheck
/* eslint-disable */
import { Long, isSet, DeepPartial, Exact } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmos.gashub.v1beta1";
/** Params defines the parameters for the gashub module. */
export interface Params {
  /** max_tx_size is the maximum size of a transaction's bytes. */
  maxTxSize: Long;
  /** min_gas_per_byte is the minimum gas to be paid per byte of a transaction's */
  minGasPerByte: Long;
}
export interface ParamsProtoMsg {
  typeUrl: "/cosmos.gashub.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the gashub module. */
export interface ParamsAmino {
  /** max_tx_size is the maximum size of a transaction's bytes. */
  max_tx_size?: string;
  /** min_gas_per_byte is the minimum gas to be paid per byte of a transaction's */
  min_gas_per_byte?: string;
}
export interface ParamsAminoMsg {
  type: "cosmos-sdk/x/gashub/Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the gashub module. */
export interface ParamsSDKType {
  max_tx_size: Long;
  min_gas_per_byte: Long;
}
/** MsgGasParams defines gas consumption for a msg type */
export interface MsgGasParams {
  msgTypeUrl: string;
  /** fixed_type specifies fixed type gas params. */
  fixedType?: MsgGasParams_FixedGasParams;
  /** grant_type specifies dynamic type gas params for msg/grant. */
  grantType?: MsgGasParams_DynamicGasParams;
  /** grant_type specifies dynamic type gas params for msg/multiSend. */
  multiSendType?: MsgGasParams_DynamicGasParams;
  /** grant_type specifies dynamic type gas params for msg/grantAllowance. */
  grantAllowanceType?: MsgGasParams_DynamicGasParams;
}
export interface MsgGasParamsProtoMsg {
  typeUrl: "/cosmos.gashub.v1beta1.MsgGasParams";
  value: Uint8Array;
}
/** MsgGasParams defines gas consumption for a msg type */
export interface MsgGasParamsAmino {
  msg_type_url?: string;
  /** fixed_type specifies fixed type gas params. */
  fixed_type?: MsgGasParams_FixedGasParamsAmino;
  /** grant_type specifies dynamic type gas params for msg/grant. */
  grant_type?: MsgGasParams_DynamicGasParamsAmino;
  /** grant_type specifies dynamic type gas params for msg/multiSend. */
  multi_send_type?: MsgGasParams_DynamicGasParamsAmino;
  /** grant_type specifies dynamic type gas params for msg/grantAllowance. */
  grant_allowance_type?: MsgGasParams_DynamicGasParamsAmino;
}
export interface MsgGasParamsAminoMsg {
  type: "cosmos-sdk/MsgGasParams";
  value: MsgGasParamsAmino;
}
/** MsgGasParams defines gas consumption for a msg type */
export interface MsgGasParamsSDKType {
  msg_type_url: string;
  fixed_type?: MsgGasParams_FixedGasParamsSDKType;
  grant_type?: MsgGasParams_DynamicGasParamsSDKType;
  multi_send_type?: MsgGasParams_DynamicGasParamsSDKType;
  grant_allowance_type?: MsgGasParams_DynamicGasParamsSDKType;
}
/** FixedGasParams defines the parameters for fixed gas type. */
export interface MsgGasParams_FixedGasParams {
  /** fixed_gas is the gas cost for a fixed type msg */
  fixedGas: Long;
}
export interface MsgGasParams_FixedGasParamsProtoMsg {
  typeUrl: "/cosmos.gashub.v1beta1.FixedGasParams";
  value: Uint8Array;
}
/** FixedGasParams defines the parameters for fixed gas type. */
export interface MsgGasParams_FixedGasParamsAmino {
  /** fixed_gas is the gas cost for a fixed type msg */
  fixed_gas?: string;
}
export interface MsgGasParams_FixedGasParamsAminoMsg {
  type: "cosmos-sdk/FixedGasParams";
  value: MsgGasParams_FixedGasParamsAmino;
}
/** FixedGasParams defines the parameters for fixed gas type. */
export interface MsgGasParams_FixedGasParamsSDKType {
  fixed_gas: Long;
}
/** DynamicGasParams defines the parameters for dynamic gas type. */
export interface MsgGasParams_DynamicGasParams {
  /** fixed_gas is the base gas cost for a dynamic type msg */
  fixedGas: Long;
  /** gas_per_item is the gas cost for a dynamic type msg per item */
  gasPerItem: Long;
}
export interface MsgGasParams_DynamicGasParamsProtoMsg {
  typeUrl: "/cosmos.gashub.v1beta1.DynamicGasParams";
  value: Uint8Array;
}
/** DynamicGasParams defines the parameters for dynamic gas type. */
export interface MsgGasParams_DynamicGasParamsAmino {
  /** fixed_gas is the base gas cost for a dynamic type msg */
  fixed_gas?: string;
  /** gas_per_item is the gas cost for a dynamic type msg per item */
  gas_per_item?: string;
}
export interface MsgGasParams_DynamicGasParamsAminoMsg {
  type: "cosmos-sdk/DynamicGasParams";
  value: MsgGasParams_DynamicGasParamsAmino;
}
/** DynamicGasParams defines the parameters for dynamic gas type. */
export interface MsgGasParams_DynamicGasParamsSDKType {
  fixed_gas: Long;
  gas_per_item: Long;
}
function createBaseParams(): Params {
  return {
    maxTxSize: Long.UZERO,
    minGasPerByte: Long.UZERO
  };
}
export const Params = {
  typeUrl: "/cosmos.gashub.v1beta1.Params",
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.maxTxSize.isZero()) {
      writer.uint32(8).uint64(message.maxTxSize);
    }
    if (!message.minGasPerByte.isZero()) {
      writer.uint32(16).uint64(message.minGasPerByte);
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
          message.maxTxSize = (reader.uint64() as Long);
          break;
        case 2:
          message.minGasPerByte = (reader.uint64() as Long);
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
      maxTxSize: isSet(object.maxTxSize) ? Long.fromValue(object.maxTxSize) : Long.UZERO,
      minGasPerByte: isSet(object.minGasPerByte) ? Long.fromValue(object.minGasPerByte) : Long.UZERO
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.maxTxSize !== undefined && (obj.maxTxSize = (message.maxTxSize || Long.UZERO).toString());
    message.minGasPerByte !== undefined && (obj.minGasPerByte = (message.minGasPerByte || Long.UZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.maxTxSize = object.maxTxSize !== undefined && object.maxTxSize !== null ? Long.fromValue(object.maxTxSize) : Long.UZERO;
    message.minGasPerByte = object.minGasPerByte !== undefined && object.minGasPerByte !== null ? Long.fromValue(object.minGasPerByte) : Long.UZERO;
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      maxTxSize: object?.max_tx_size,
      minGasPerByte: object?.min_gas_per_byte
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.max_tx_size = message.maxTxSize;
    obj.min_gas_per_byte = message.minGasPerByte;
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.max_tx_size !== undefined && object.max_tx_size !== null) {
      message.maxTxSize = Long.fromString(object.max_tx_size);
    }
    if (object.min_gas_per_byte !== undefined && object.min_gas_per_byte !== null) {
      message.minGasPerByte = Long.fromString(object.min_gas_per_byte);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.max_tx_size = message.maxTxSize ? message.maxTxSize.toString() : undefined;
    obj.min_gas_per_byte = message.minGasPerByte ? message.minGasPerByte.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "cosmos-sdk/x/gashub/Params",
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
      typeUrl: "/cosmos.gashub.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseMsgGasParams(): MsgGasParams {
  return {
    msgTypeUrl: "",
    fixedType: undefined,
    grantType: undefined,
    multiSendType: undefined,
    grantAllowanceType: undefined
  };
}
export const MsgGasParams = {
  typeUrl: "/cosmos.gashub.v1beta1.MsgGasParams",
  encode(message: MsgGasParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msgTypeUrl !== "") {
      writer.uint32(10).string(message.msgTypeUrl);
    }
    if (message.fixedType !== undefined) {
      MsgGasParams_FixedGasParams.encode(message.fixedType, writer.uint32(18).fork()).ldelim();
    }
    if (message.grantType !== undefined) {
      MsgGasParams_DynamicGasParams.encode(message.grantType, writer.uint32(26).fork()).ldelim();
    }
    if (message.multiSendType !== undefined) {
      MsgGasParams_DynamicGasParams.encode(message.multiSendType, writer.uint32(34).fork()).ldelim();
    }
    if (message.grantAllowanceType !== undefined) {
      MsgGasParams_DynamicGasParams.encode(message.grantAllowanceType, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGasParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGasParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgTypeUrl = reader.string();
          break;
        case 2:
          message.fixedType = MsgGasParams_FixedGasParams.decode(reader, reader.uint32());
          break;
        case 3:
          message.grantType = MsgGasParams_DynamicGasParams.decode(reader, reader.uint32());
          break;
        case 4:
          message.multiSendType = MsgGasParams_DynamicGasParams.decode(reader, reader.uint32());
          break;
        case 5:
          message.grantAllowanceType = MsgGasParams_DynamicGasParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgGasParams {
    return {
      msgTypeUrl: isSet(object.msgTypeUrl) ? String(object.msgTypeUrl) : "",
      fixedType: isSet(object.fixedType) ? MsgGasParams_FixedGasParams.fromJSON(object.fixedType) : undefined,
      grantType: isSet(object.grantType) ? MsgGasParams_DynamicGasParams.fromJSON(object.grantType) : undefined,
      multiSendType: isSet(object.multiSendType) ? MsgGasParams_DynamicGasParams.fromJSON(object.multiSendType) : undefined,
      grantAllowanceType: isSet(object.grantAllowanceType) ? MsgGasParams_DynamicGasParams.fromJSON(object.grantAllowanceType) : undefined
    };
  },
  toJSON(message: MsgGasParams): unknown {
    const obj: any = {};
    message.msgTypeUrl !== undefined && (obj.msgTypeUrl = message.msgTypeUrl);
    message.fixedType !== undefined && (obj.fixedType = message.fixedType ? MsgGasParams_FixedGasParams.toJSON(message.fixedType) : undefined);
    message.grantType !== undefined && (obj.grantType = message.grantType ? MsgGasParams_DynamicGasParams.toJSON(message.grantType) : undefined);
    message.multiSendType !== undefined && (obj.multiSendType = message.multiSendType ? MsgGasParams_DynamicGasParams.toJSON(message.multiSendType) : undefined);
    message.grantAllowanceType !== undefined && (obj.grantAllowanceType = message.grantAllowanceType ? MsgGasParams_DynamicGasParams.toJSON(message.grantAllowanceType) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgGasParams>, I>>(object: I): MsgGasParams {
    const message = createBaseMsgGasParams();
    message.msgTypeUrl = object.msgTypeUrl ?? "";
    message.fixedType = object.fixedType !== undefined && object.fixedType !== null ? MsgGasParams_FixedGasParams.fromPartial(object.fixedType) : undefined;
    message.grantType = object.grantType !== undefined && object.grantType !== null ? MsgGasParams_DynamicGasParams.fromPartial(object.grantType) : undefined;
    message.multiSendType = object.multiSendType !== undefined && object.multiSendType !== null ? MsgGasParams_DynamicGasParams.fromPartial(object.multiSendType) : undefined;
    message.grantAllowanceType = object.grantAllowanceType !== undefined && object.grantAllowanceType !== null ? MsgGasParams_DynamicGasParams.fromPartial(object.grantAllowanceType) : undefined;
    return message;
  },
  fromSDK(object: MsgGasParamsSDKType): MsgGasParams {
    return {
      msgTypeUrl: object?.msg_type_url,
      fixedType: object.fixed_type ? MsgGasParams_FixedGasParams.fromSDK(object.fixed_type) : undefined,
      grantType: object.grant_type ? MsgGasParams_DynamicGasParams.fromSDK(object.grant_type) : undefined,
      multiSendType: object.multi_send_type ? MsgGasParams_DynamicGasParams.fromSDK(object.multi_send_type) : undefined,
      grantAllowanceType: object.grant_allowance_type ? MsgGasParams_DynamicGasParams.fromSDK(object.grant_allowance_type) : undefined
    };
  },
  toSDK(message: MsgGasParams): MsgGasParamsSDKType {
    const obj: any = {};
    obj.msg_type_url = message.msgTypeUrl;
    message.fixedType !== undefined && (obj.fixed_type = message.fixedType ? MsgGasParams_FixedGasParams.toSDK(message.fixedType) : undefined);
    message.grantType !== undefined && (obj.grant_type = message.grantType ? MsgGasParams_DynamicGasParams.toSDK(message.grantType) : undefined);
    message.multiSendType !== undefined && (obj.multi_send_type = message.multiSendType ? MsgGasParams_DynamicGasParams.toSDK(message.multiSendType) : undefined);
    message.grantAllowanceType !== undefined && (obj.grant_allowance_type = message.grantAllowanceType ? MsgGasParams_DynamicGasParams.toSDK(message.grantAllowanceType) : undefined);
    return obj;
  },
  fromAmino(object: MsgGasParamsAmino): MsgGasParams {
    const message = createBaseMsgGasParams();
    if (object.msg_type_url !== undefined && object.msg_type_url !== null) {
      message.msgTypeUrl = object.msg_type_url;
    }
    if (object.fixed_type !== undefined && object.fixed_type !== null) {
      message.fixedType = MsgGasParams_FixedGasParams.fromAmino(object.fixed_type);
    }
    if (object.grant_type !== undefined && object.grant_type !== null) {
      message.grantType = MsgGasParams_DynamicGasParams.fromAmino(object.grant_type);
    }
    if (object.multi_send_type !== undefined && object.multi_send_type !== null) {
      message.multiSendType = MsgGasParams_DynamicGasParams.fromAmino(object.multi_send_type);
    }
    if (object.grant_allowance_type !== undefined && object.grant_allowance_type !== null) {
      message.grantAllowanceType = MsgGasParams_DynamicGasParams.fromAmino(object.grant_allowance_type);
    }
    return message;
  },
  toAmino(message: MsgGasParams): MsgGasParamsAmino {
    const obj: any = {};
    obj.msg_type_url = message.msgTypeUrl;
    obj.fixed_type = message.fixedType ? MsgGasParams_FixedGasParams.toAmino(message.fixedType) : undefined;
    obj.grant_type = message.grantType ? MsgGasParams_DynamicGasParams.toAmino(message.grantType) : undefined;
    obj.multi_send_type = message.multiSendType ? MsgGasParams_DynamicGasParams.toAmino(message.multiSendType) : undefined;
    obj.grant_allowance_type = message.grantAllowanceType ? MsgGasParams_DynamicGasParams.toAmino(message.grantAllowanceType) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgGasParamsAminoMsg): MsgGasParams {
    return MsgGasParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgGasParams): MsgGasParamsAminoMsg {
    return {
      type: "cosmos-sdk/MsgGasParams",
      value: MsgGasParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgGasParamsProtoMsg): MsgGasParams {
    return MsgGasParams.decode(message.value);
  },
  toProto(message: MsgGasParams): Uint8Array {
    return MsgGasParams.encode(message).finish();
  },
  toProtoMsg(message: MsgGasParams): MsgGasParamsProtoMsg {
    return {
      typeUrl: "/cosmos.gashub.v1beta1.MsgGasParams",
      value: MsgGasParams.encode(message).finish()
    };
  }
};
function createBaseMsgGasParams_FixedGasParams(): MsgGasParams_FixedGasParams {
  return {
    fixedGas: Long.UZERO
  };
}
export const MsgGasParams_FixedGasParams = {
  typeUrl: "/cosmos.gashub.v1beta1.FixedGasParams",
  encode(message: MsgGasParams_FixedGasParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.fixedGas.isZero()) {
      writer.uint32(8).uint64(message.fixedGas);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGasParams_FixedGasParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGasParams_FixedGasParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fixedGas = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgGasParams_FixedGasParams {
    return {
      fixedGas: isSet(object.fixedGas) ? Long.fromValue(object.fixedGas) : Long.UZERO
    };
  },
  toJSON(message: MsgGasParams_FixedGasParams): unknown {
    const obj: any = {};
    message.fixedGas !== undefined && (obj.fixedGas = (message.fixedGas || Long.UZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgGasParams_FixedGasParams>, I>>(object: I): MsgGasParams_FixedGasParams {
    const message = createBaseMsgGasParams_FixedGasParams();
    message.fixedGas = object.fixedGas !== undefined && object.fixedGas !== null ? Long.fromValue(object.fixedGas) : Long.UZERO;
    return message;
  },
  fromSDK(object: MsgGasParams_FixedGasParamsSDKType): MsgGasParams_FixedGasParams {
    return {
      fixedGas: object?.fixed_gas
    };
  },
  toSDK(message: MsgGasParams_FixedGasParams): MsgGasParams_FixedGasParamsSDKType {
    const obj: any = {};
    obj.fixed_gas = message.fixedGas;
    return obj;
  },
  fromAmino(object: MsgGasParams_FixedGasParamsAmino): MsgGasParams_FixedGasParams {
    const message = createBaseMsgGasParams_FixedGasParams();
    if (object.fixed_gas !== undefined && object.fixed_gas !== null) {
      message.fixedGas = Long.fromString(object.fixed_gas);
    }
    return message;
  },
  toAmino(message: MsgGasParams_FixedGasParams): MsgGasParams_FixedGasParamsAmino {
    const obj: any = {};
    obj.fixed_gas = message.fixedGas ? message.fixedGas.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgGasParams_FixedGasParamsAminoMsg): MsgGasParams_FixedGasParams {
    return MsgGasParams_FixedGasParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgGasParams_FixedGasParams): MsgGasParams_FixedGasParamsAminoMsg {
    return {
      type: "cosmos-sdk/FixedGasParams",
      value: MsgGasParams_FixedGasParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgGasParams_FixedGasParamsProtoMsg): MsgGasParams_FixedGasParams {
    return MsgGasParams_FixedGasParams.decode(message.value);
  },
  toProto(message: MsgGasParams_FixedGasParams): Uint8Array {
    return MsgGasParams_FixedGasParams.encode(message).finish();
  },
  toProtoMsg(message: MsgGasParams_FixedGasParams): MsgGasParams_FixedGasParamsProtoMsg {
    return {
      typeUrl: "/cosmos.gashub.v1beta1.FixedGasParams",
      value: MsgGasParams_FixedGasParams.encode(message).finish()
    };
  }
};
function createBaseMsgGasParams_DynamicGasParams(): MsgGasParams_DynamicGasParams {
  return {
    fixedGas: Long.UZERO,
    gasPerItem: Long.UZERO
  };
}
export const MsgGasParams_DynamicGasParams = {
  typeUrl: "/cosmos.gashub.v1beta1.DynamicGasParams",
  encode(message: MsgGasParams_DynamicGasParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.fixedGas.isZero()) {
      writer.uint32(8).uint64(message.fixedGas);
    }
    if (!message.gasPerItem.isZero()) {
      writer.uint32(16).uint64(message.gasPerItem);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGasParams_DynamicGasParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGasParams_DynamicGasParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fixedGas = (reader.uint64() as Long);
          break;
        case 2:
          message.gasPerItem = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgGasParams_DynamicGasParams {
    return {
      fixedGas: isSet(object.fixedGas) ? Long.fromValue(object.fixedGas) : Long.UZERO,
      gasPerItem: isSet(object.gasPerItem) ? Long.fromValue(object.gasPerItem) : Long.UZERO
    };
  },
  toJSON(message: MsgGasParams_DynamicGasParams): unknown {
    const obj: any = {};
    message.fixedGas !== undefined && (obj.fixedGas = (message.fixedGas || Long.UZERO).toString());
    message.gasPerItem !== undefined && (obj.gasPerItem = (message.gasPerItem || Long.UZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgGasParams_DynamicGasParams>, I>>(object: I): MsgGasParams_DynamicGasParams {
    const message = createBaseMsgGasParams_DynamicGasParams();
    message.fixedGas = object.fixedGas !== undefined && object.fixedGas !== null ? Long.fromValue(object.fixedGas) : Long.UZERO;
    message.gasPerItem = object.gasPerItem !== undefined && object.gasPerItem !== null ? Long.fromValue(object.gasPerItem) : Long.UZERO;
    return message;
  },
  fromSDK(object: MsgGasParams_DynamicGasParamsSDKType): MsgGasParams_DynamicGasParams {
    return {
      fixedGas: object?.fixed_gas,
      gasPerItem: object?.gas_per_item
    };
  },
  toSDK(message: MsgGasParams_DynamicGasParams): MsgGasParams_DynamicGasParamsSDKType {
    const obj: any = {};
    obj.fixed_gas = message.fixedGas;
    obj.gas_per_item = message.gasPerItem;
    return obj;
  },
  fromAmino(object: MsgGasParams_DynamicGasParamsAmino): MsgGasParams_DynamicGasParams {
    const message = createBaseMsgGasParams_DynamicGasParams();
    if (object.fixed_gas !== undefined && object.fixed_gas !== null) {
      message.fixedGas = Long.fromString(object.fixed_gas);
    }
    if (object.gas_per_item !== undefined && object.gas_per_item !== null) {
      message.gasPerItem = Long.fromString(object.gas_per_item);
    }
    return message;
  },
  toAmino(message: MsgGasParams_DynamicGasParams): MsgGasParams_DynamicGasParamsAmino {
    const obj: any = {};
    obj.fixed_gas = message.fixedGas ? message.fixedGas.toString() : undefined;
    obj.gas_per_item = message.gasPerItem ? message.gasPerItem.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgGasParams_DynamicGasParamsAminoMsg): MsgGasParams_DynamicGasParams {
    return MsgGasParams_DynamicGasParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgGasParams_DynamicGasParams): MsgGasParams_DynamicGasParamsAminoMsg {
    return {
      type: "cosmos-sdk/DynamicGasParams",
      value: MsgGasParams_DynamicGasParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgGasParams_DynamicGasParamsProtoMsg): MsgGasParams_DynamicGasParams {
    return MsgGasParams_DynamicGasParams.decode(message.value);
  },
  toProto(message: MsgGasParams_DynamicGasParams): Uint8Array {
    return MsgGasParams_DynamicGasParams.encode(message).finish();
  },
  toProtoMsg(message: MsgGasParams_DynamicGasParams): MsgGasParams_DynamicGasParamsProtoMsg {
    return {
      typeUrl: "/cosmos.gashub.v1beta1.DynamicGasParams",
      value: MsgGasParams_DynamicGasParams.encode(message).finish()
    };
  }
};