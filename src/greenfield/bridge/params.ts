/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../helpers";
export const protobufPackage = "bnbchain.greenfield.bridge";
/** Params defines the parameters for the module. */

export interface Params {
  /** Relayer fee for the cross chain transfer out tx */
  transferOutRelayerFee: string;
  /** Relayer fee for the ACK or FAIL_ACK package of the cross chain transfer out tx */

  transferOutAckRelayerFee: string;
}

function createBaseParams(): Params {
  return {
    transferOutRelayerFee: "",
    transferOutAckRelayerFee: ""
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transferOutRelayerFee !== "") {
      writer.uint32(10).string(message.transferOutRelayerFee);
    }

    if (message.transferOutAckRelayerFee !== "") {
      writer.uint32(18).string(message.transferOutAckRelayerFee);
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
          message.transferOutRelayerFee = reader.string();
          break;

        case 2:
          message.transferOutAckRelayerFee = reader.string();
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
      transferOutRelayerFee: isSet(object.transferOutRelayerFee) ? String(object.transferOutRelayerFee) : "",
      transferOutAckRelayerFee: isSet(object.transferOutAckRelayerFee) ? String(object.transferOutAckRelayerFee) : ""
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.transferOutRelayerFee !== undefined && (obj.transferOutRelayerFee = message.transferOutRelayerFee);
    message.transferOutAckRelayerFee !== undefined && (obj.transferOutAckRelayerFee = message.transferOutAckRelayerFee);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.transferOutRelayerFee = object.transferOutRelayerFee ?? "";
    message.transferOutAckRelayerFee = object.transferOutAckRelayerFee ?? "";
    return message;
  }

};