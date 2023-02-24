/* eslint-disable */
import { Long, isSet, DeepPartial, Exact } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmos.gashub.v1alpha1";
/** Params defines the parameters for the gashub module. */

export interface Params {
  maxTxSize: Long;
  minGasPerByte: Long;
  msgGasParamsSet: MsgGasParams[];
}
/** MsgGasParams defines gas for a msg type */

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
/** FixedGasParams defines the parameters for fixed gas type. */

export interface MsgGasParams_FixedGasParams {
  fixedGas: Long;
}
/** DynamicGasParams defines the parameters for dynamic gas type. */

export interface MsgGasParams_DynamicGasParams {
  fixedGas: Long;
  gasPerItem: Long;
}

function createBaseParams(): Params {
  return {
    maxTxSize: Long.UZERO,
    minGasPerByte: Long.UZERO,
    msgGasParamsSet: []
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.maxTxSize.isZero()) {
      writer.uint32(8).uint64(message.maxTxSize);
    }

    if (!message.minGasPerByte.isZero()) {
      writer.uint32(16).uint64(message.minGasPerByte);
    }

    for (const v of message.msgGasParamsSet) {
      MsgGasParams.encode(v!, writer.uint32(26).fork()).ldelim();
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

        case 3:
          message.msgGasParamsSet.push(MsgGasParams.decode(reader, reader.uint32()));
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
      minGasPerByte: isSet(object.minGasPerByte) ? Long.fromValue(object.minGasPerByte) : Long.UZERO,
      msgGasParamsSet: Array.isArray(object?.msgGasParamsSet) ? object.msgGasParamsSet.map((e: any) => MsgGasParams.fromJSON(e)) : []
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.maxTxSize !== undefined && (obj.maxTxSize = (message.maxTxSize || Long.UZERO).toString());
    message.minGasPerByte !== undefined && (obj.minGasPerByte = (message.minGasPerByte || Long.UZERO).toString());

    if (message.msgGasParamsSet) {
      obj.msgGasParamsSet = message.msgGasParamsSet.map(e => e ? MsgGasParams.toJSON(e) : undefined);
    } else {
      obj.msgGasParamsSet = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.maxTxSize = object.maxTxSize !== undefined && object.maxTxSize !== null ? Long.fromValue(object.maxTxSize) : Long.UZERO;
    message.minGasPerByte = object.minGasPerByte !== undefined && object.minGasPerByte !== null ? Long.fromValue(object.minGasPerByte) : Long.UZERO;
    message.msgGasParamsSet = object.msgGasParamsSet?.map(e => MsgGasParams.fromPartial(e)) || [];
    return message;
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
  }

};

function createBaseMsgGasParams_FixedGasParams(): MsgGasParams_FixedGasParams {
  return {
    fixedGas: Long.UZERO
  };
}

export const MsgGasParams_FixedGasParams = {
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
  }

};

function createBaseMsgGasParams_DynamicGasParams(): MsgGasParams_DynamicGasParams {
  return {
    fixedGas: Long.UZERO,
    gasPerItem: Long.UZERO
  };
}

export const MsgGasParams_DynamicGasParams = {
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
  }

};