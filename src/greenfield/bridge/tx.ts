/* eslint-disable */
import { Coin } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact, Rpc } from "../../helpers";
export const protobufPackage = "bnbchain.greenfield.bridge";
/** MsgTransferOut is the Msg/TransferOut request type. */

export interface MsgTransferOut {
  from: string;
  to: string;
  amount?: Coin;
}
/** MsgTransferOutResponse is the Msg/TransferOut response type. */

export interface MsgTransferOutResponse {}

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
  }

};
/** Msg defines the Msg service. */

export interface Msg {
  TransferOut(request: MsgTransferOut): Promise<MsgTransferOutResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.TransferOut = this.TransferOut.bind(this);
  }

  TransferOut(request: MsgTransferOut): Promise<MsgTransferOutResponse> {
    const data = MsgTransferOut.encode(request).finish();
    const promise = this.rpc.request("bnbchain.greenfield.bridge.Msg", "TransferOut", data);
    return promise.then(data => MsgTransferOutResponse.decode(new _m0.Reader(data)));
  }

}