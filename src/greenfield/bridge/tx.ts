/* eslint-disable */
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact, Rpc } from "../../helpers";
export const protobufPackage = "greenfield.bridge";
/** MsgTransferOut is the Msg/TransferOut request type. */

export interface MsgTransferOut {
  /** from address */
  from: string;
  /** to address */

  to: string;
  /** transfer token amount */

  amount?: Coin;
}
/** MsgTransferOut is the Msg/TransferOut request type. */

export interface MsgTransferOutSDKType {
  from: string;
  to: string;
  amount?: CoinSDKType;
}
/** MsgTransferOutResponse is the Msg/TransferOut response type. */

export interface MsgTransferOutResponse {}
/** MsgTransferOutResponse is the Msg/TransferOut response type. */

export interface MsgTransferOutResponseSDKType {}
/** MsgUpdateParams is the Msg/UpdateParams request type. */

export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /**
   * params defines the x/crosschain parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */

  params?: Params;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */

export interface MsgUpdateParamsSDKType {
  authority: string;
  params?: ParamsSDKType;
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

function createBaseMsgTransferOut(): MsgTransferOut {
  return {
    from: "",
    to: "",
    amount: undefined
  };
}

export const MsgTransferOut = {
  encode(message: MsgTransferOut, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferOut {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferOut();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;

        case 2:
          message.to = reader.string();
          break;

        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgTransferOut {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },

  toJSON(message: MsgTransferOut): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferOut>, I>>(object: I): MsgTransferOut {
    const message = createBaseMsgTransferOut();
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },

  fromSDK(object: MsgTransferOutSDKType): MsgTransferOut {
    return {
      from: object?.from,
      to: object?.to,
      amount: object.amount ? Coin.fromSDK(object.amount) : undefined
    };
  },

  toSDK(message: MsgTransferOut): MsgTransferOutSDKType {
    const obj: any = {};
    obj.from = message.from;
    obj.to = message.to;
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toSDK(message.amount) : undefined);
    return obj;
  }

};

function createBaseMsgTransferOutResponse(): MsgTransferOutResponse {
  return {};
}

export const MsgTransferOutResponse = {
  encode(_: MsgTransferOutResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferOutResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferOutResponse();

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

  fromJSON(_: any): MsgTransferOutResponse {
    return {};
  },

  toJSON(_: MsgTransferOutResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferOutResponse>, I>>(_: I): MsgTransferOutResponse {
    const message = createBaseMsgTransferOutResponse();
    return message;
  },

  fromSDK(_: MsgTransferOutResponseSDKType): MsgTransferOutResponse {
    return {};
  },

  toSDK(_: MsgTransferOutResponse): MsgTransferOutResponseSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: undefined
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
/** Msg defines the Msg service. */

export interface Msg {
  TransferOut(request: MsgTransferOut): Promise<MsgTransferOutResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/bridge module parameters.
   * The authority is defined in the keeper.
   * 
   * Since: cosmos-sdk 0.47
   */

  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.TransferOut = this.TransferOut.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }

  TransferOut(request: MsgTransferOut): Promise<MsgTransferOutResponse> {
    const data = MsgTransferOut.encode(request).finish();
    const promise = this.rpc.request("greenfield.bridge.Msg", "TransferOut", data);
    return promise.then(data => MsgTransferOutResponse.decode(new _m0.Reader(data)));
  }

  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("greenfield.bridge.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
  }

}