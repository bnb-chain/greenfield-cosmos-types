/* eslint-disable */
import { Long, isSet, DeepPartial, Exact } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmos.gashub.v1alpha1";
/** Params defines the parameters for the gashub module. */

export interface Params {
  max_tx_size: Long;
  min_gas_per_byte: Long;
  msg_gas_params_set: MsgGasParams[];
}
/** MsgGasParams defines gas for a msg type */

export interface MsgGasParams {
  msg_type_url: string;
  /** fixed_type specifies fixed type gas params. */

  fixed_type?: MsgGasParams_FixedGasParams;
  /** grant_type specifies dynamic type gas params for msg/grant. */

  grant_type?: MsgGasParams_DynamicGasParams;
  /** grant_type specifies dynamic type gas params for msg/multiSend. */

  multi_send_type?: MsgGasParams_DynamicGasParams;
  /** grant_type specifies dynamic type gas params for msg/grantAllowance. */

  grant_allowance_type?: MsgGasParams_DynamicGasParams;
}
/** FixedGasParams defines the parameters for fixed gas type. */

export interface MsgGasParams_FixedGasParams {
  fixed_gas: Long;
}
/** DynamicGasParams defines the parameters for dynamic gas type. */

export interface MsgGasParams_DynamicGasParams {
  fixed_gas: Long;
  gas_per_item: Long;
}

function createBaseParams(): Params {
  return {
    max_tx_size: Long.UZERO,
    min_gas_per_byte: Long.UZERO,
    msg_gas_params_set: []
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.max_tx_size.isZero()) {
      writer.uint32(8).uint64(message.max_tx_size);
    }

    if (!message.min_gas_per_byte.isZero()) {
      writer.uint32(16).uint64(message.min_gas_per_byte);
    }

    for (const v of message.msg_gas_params_set) {
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
          message.max_tx_size = (reader.uint64() as Long);
          break;

        case 2:
          message.min_gas_per_byte = (reader.uint64() as Long);
          break;

        case 3:
          message.msg_gas_params_set.push(MsgGasParams.decode(reader, reader.uint32()));
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
      max_tx_size: isSet(object.max_tx_size) ? Long.fromValue(object.max_tx_size) : Long.UZERO,
      min_gas_per_byte: isSet(object.min_gas_per_byte) ? Long.fromValue(object.min_gas_per_byte) : Long.UZERO,
      msg_gas_params_set: Array.isArray(object?.msg_gas_params_set) ? object.msg_gas_params_set.map((e: any) => MsgGasParams.fromJSON(e)) : []
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.max_tx_size !== undefined && (obj.max_tx_size = (message.max_tx_size || Long.UZERO).toString());
    message.min_gas_per_byte !== undefined && (obj.min_gas_per_byte = (message.min_gas_per_byte || Long.UZERO).toString());

    if (message.msg_gas_params_set) {
      obj.msg_gas_params_set = message.msg_gas_params_set.map(e => e ? MsgGasParams.toJSON(e) : undefined);
    } else {
      obj.msg_gas_params_set = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.max_tx_size = object.max_tx_size !== undefined && object.max_tx_size !== null ? Long.fromValue(object.max_tx_size) : Long.UZERO;
    message.min_gas_per_byte = object.min_gas_per_byte !== undefined && object.min_gas_per_byte !== null ? Long.fromValue(object.min_gas_per_byte) : Long.UZERO;
    message.msg_gas_params_set = object.msg_gas_params_set?.map(e => MsgGasParams.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgGasParams(): MsgGasParams {
  return {
    msg_type_url: "",
    fixed_type: undefined,
    grant_type: undefined,
    multi_send_type: undefined,
    grant_allowance_type: undefined
  };
}

export const MsgGasParams = {
  encode(message: MsgGasParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msg_type_url !== "") {
      writer.uint32(10).string(message.msg_type_url);
    }

    if (message.fixed_type !== undefined) {
      MsgGasParams_FixedGasParams.encode(message.fixed_type, writer.uint32(18).fork()).ldelim();
    }

    if (message.grant_type !== undefined) {
      MsgGasParams_DynamicGasParams.encode(message.grant_type, writer.uint32(26).fork()).ldelim();
    }

    if (message.multi_send_type !== undefined) {
      MsgGasParams_DynamicGasParams.encode(message.multi_send_type, writer.uint32(34).fork()).ldelim();
    }

    if (message.grant_allowance_type !== undefined) {
      MsgGasParams_DynamicGasParams.encode(message.grant_allowance_type, writer.uint32(42).fork()).ldelim();
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
          message.msg_type_url = reader.string();
          break;

        case 2:
          message.fixed_type = MsgGasParams_FixedGasParams.decode(reader, reader.uint32());
          break;

        case 3:
          message.grant_type = MsgGasParams_DynamicGasParams.decode(reader, reader.uint32());
          break;

        case 4:
          message.multi_send_type = MsgGasParams_DynamicGasParams.decode(reader, reader.uint32());
          break;

        case 5:
          message.grant_allowance_type = MsgGasParams_DynamicGasParams.decode(reader, reader.uint32());
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
      msg_type_url: isSet(object.msg_type_url) ? String(object.msg_type_url) : "",
      fixed_type: isSet(object.fixed_type) ? MsgGasParams_FixedGasParams.fromJSON(object.fixed_type) : undefined,
      grant_type: isSet(object.grant_type) ? MsgGasParams_DynamicGasParams.fromJSON(object.grant_type) : undefined,
      multi_send_type: isSet(object.multi_send_type) ? MsgGasParams_DynamicGasParams.fromJSON(object.multi_send_type) : undefined,
      grant_allowance_type: isSet(object.grant_allowance_type) ? MsgGasParams_DynamicGasParams.fromJSON(object.grant_allowance_type) : undefined
    };
  },

  toJSON(message: MsgGasParams): unknown {
    const obj: any = {};
    message.msg_type_url !== undefined && (obj.msg_type_url = message.msg_type_url);
    message.fixed_type !== undefined && (obj.fixed_type = message.fixed_type ? MsgGasParams_FixedGasParams.toJSON(message.fixed_type) : undefined);
    message.grant_type !== undefined && (obj.grant_type = message.grant_type ? MsgGasParams_DynamicGasParams.toJSON(message.grant_type) : undefined);
    message.multi_send_type !== undefined && (obj.multi_send_type = message.multi_send_type ? MsgGasParams_DynamicGasParams.toJSON(message.multi_send_type) : undefined);
    message.grant_allowance_type !== undefined && (obj.grant_allowance_type = message.grant_allowance_type ? MsgGasParams_DynamicGasParams.toJSON(message.grant_allowance_type) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgGasParams>, I>>(object: I): MsgGasParams {
    const message = createBaseMsgGasParams();
    message.msg_type_url = object.msg_type_url ?? "";
    message.fixed_type = object.fixed_type !== undefined && object.fixed_type !== null ? MsgGasParams_FixedGasParams.fromPartial(object.fixed_type) : undefined;
    message.grant_type = object.grant_type !== undefined && object.grant_type !== null ? MsgGasParams_DynamicGasParams.fromPartial(object.grant_type) : undefined;
    message.multi_send_type = object.multi_send_type !== undefined && object.multi_send_type !== null ? MsgGasParams_DynamicGasParams.fromPartial(object.multi_send_type) : undefined;
    message.grant_allowance_type = object.grant_allowance_type !== undefined && object.grant_allowance_type !== null ? MsgGasParams_DynamicGasParams.fromPartial(object.grant_allowance_type) : undefined;
    return message;
  }

};

function createBaseMsgGasParams_FixedGasParams(): MsgGasParams_FixedGasParams {
  return {
    fixed_gas: Long.UZERO
  };
}

export const MsgGasParams_FixedGasParams = {
  encode(message: MsgGasParams_FixedGasParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.fixed_gas.isZero()) {
      writer.uint32(8).uint64(message.fixed_gas);
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
          message.fixed_gas = (reader.uint64() as Long);
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
      fixed_gas: isSet(object.fixed_gas) ? Long.fromValue(object.fixed_gas) : Long.UZERO
    };
  },

  toJSON(message: MsgGasParams_FixedGasParams): unknown {
    const obj: any = {};
    message.fixed_gas !== undefined && (obj.fixed_gas = (message.fixed_gas || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgGasParams_FixedGasParams>, I>>(object: I): MsgGasParams_FixedGasParams {
    const message = createBaseMsgGasParams_FixedGasParams();
    message.fixed_gas = object.fixed_gas !== undefined && object.fixed_gas !== null ? Long.fromValue(object.fixed_gas) : Long.UZERO;
    return message;
  }

};

function createBaseMsgGasParams_DynamicGasParams(): MsgGasParams_DynamicGasParams {
  return {
    fixed_gas: Long.UZERO,
    gas_per_item: Long.UZERO
  };
}

export const MsgGasParams_DynamicGasParams = {
  encode(message: MsgGasParams_DynamicGasParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.fixed_gas.isZero()) {
      writer.uint32(8).uint64(message.fixed_gas);
    }

    if (!message.gas_per_item.isZero()) {
      writer.uint32(16).uint64(message.gas_per_item);
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
          message.fixed_gas = (reader.uint64() as Long);
          break;

        case 2:
          message.gas_per_item = (reader.uint64() as Long);
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
      fixed_gas: isSet(object.fixed_gas) ? Long.fromValue(object.fixed_gas) : Long.UZERO,
      gas_per_item: isSet(object.gas_per_item) ? Long.fromValue(object.gas_per_item) : Long.UZERO
    };
  },

  toJSON(message: MsgGasParams_DynamicGasParams): unknown {
    const obj: any = {};
    message.fixed_gas !== undefined && (obj.fixed_gas = (message.fixed_gas || Long.UZERO).toString());
    message.gas_per_item !== undefined && (obj.gas_per_item = (message.gas_per_item || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgGasParams_DynamicGasParams>, I>>(object: I): MsgGasParams_DynamicGasParams {
    const message = createBaseMsgGasParams_DynamicGasParams();
    message.fixed_gas = object.fixed_gas !== undefined && object.fixed_gas !== null ? Long.fromValue(object.fixed_gas) : Long.UZERO;
    message.gas_per_item = object.gas_per_item !== undefined && object.gas_per_item !== null ? Long.fromValue(object.gas_per_item) : Long.UZERO;
    return message;
  }

};