/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../helpers";
export const protobufPackage = "bnbchain.greenfield.bridge";
/** Params defines the parameters for the module. */

export interface Params {
  /** Relayer fee for the cross chain transfer out tx */
  transfer_out_relayer_fee: string;
  /** Relayer fee for the ACK or FAIL_ACK package of the cross chain transfer out tx */

  transfer_out_ack_relayer_fee: string;
}

function createBaseParams(): Params {
  return {
    transfer_out_relayer_fee: "",
    transfer_out_ack_relayer_fee: ""
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transfer_out_relayer_fee !== "") {
      writer.uint32(10).string(message.transfer_out_relayer_fee);
    }

    if (message.transfer_out_ack_relayer_fee !== "") {
      writer.uint32(18).string(message.transfer_out_ack_relayer_fee);
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
          message.transfer_out_relayer_fee = reader.string();
          break;

        case 2:
          message.transfer_out_ack_relayer_fee = reader.string();
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
      transfer_out_relayer_fee: isSet(object.transfer_out_relayer_fee) ? String(object.transfer_out_relayer_fee) : "",
      transfer_out_ack_relayer_fee: isSet(object.transfer_out_ack_relayer_fee) ? String(object.transfer_out_ack_relayer_fee) : ""
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.transfer_out_relayer_fee !== undefined && (obj.transfer_out_relayer_fee = message.transfer_out_relayer_fee);
    message.transfer_out_ack_relayer_fee !== undefined && (obj.transfer_out_ack_relayer_fee = message.transfer_out_ack_relayer_fee);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.transfer_out_relayer_fee = object.transfer_out_relayer_fee ?? "";
    message.transfer_out_ack_relayer_fee = object.transfer_out_ack_relayer_fee ?? "";
    return message;
  }

};