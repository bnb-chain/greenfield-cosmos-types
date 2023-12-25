//@ts-nocheck
/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../helpers";
export const protobufPackage = "greenfield.bridge";
/** Params defines the parameters for the module. */
export interface Params {
  /** Relayer fee for the cross chain transfer out tx to bsc */
  bscTransferOutRelayerFee: string;
  /** Relayer fee for the ACK or FAIL_ACK package of the cross chain transfer out tx to bsc */
  bscTransferOutAckRelayerFee: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/greenfield.bridge.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  bsc_transfer_out_relayer_fee: string;
  bsc_transfer_out_ack_relayer_fee: string;
}
function createBaseParams(): Params {
  return {
    bscTransferOutRelayerFee: "",
    bscTransferOutAckRelayerFee: ""
  };
}
export const Params = {
  typeUrl: "/greenfield.bridge.Params",
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bscTransferOutRelayerFee !== "") {
      writer.uint32(10).string(message.bscTransferOutRelayerFee);
    }
    if (message.bscTransferOutAckRelayerFee !== "") {
      writer.uint32(18).string(message.bscTransferOutAckRelayerFee);
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
          message.bscTransferOutRelayerFee = reader.string();
          break;
        case 2:
          message.bscTransferOutAckRelayerFee = reader.string();
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
      bscTransferOutRelayerFee: isSet(object.bscTransferOutRelayerFee) ? String(object.bscTransferOutRelayerFee) : "",
      bscTransferOutAckRelayerFee: isSet(object.bscTransferOutAckRelayerFee) ? String(object.bscTransferOutAckRelayerFee) : ""
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.bscTransferOutRelayerFee !== undefined && (obj.bscTransferOutRelayerFee = message.bscTransferOutRelayerFee);
    message.bscTransferOutAckRelayerFee !== undefined && (obj.bscTransferOutAckRelayerFee = message.bscTransferOutAckRelayerFee);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.bscTransferOutRelayerFee = object.bscTransferOutRelayerFee ?? "";
    message.bscTransferOutAckRelayerFee = object.bscTransferOutAckRelayerFee ?? "";
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      bscTransferOutRelayerFee: object?.bsc_transfer_out_relayer_fee,
      bscTransferOutAckRelayerFee: object?.bsc_transfer_out_ack_relayer_fee
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.bsc_transfer_out_relayer_fee = message.bscTransferOutRelayerFee;
    obj.bsc_transfer_out_ack_relayer_fee = message.bscTransferOutAckRelayerFee;
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.bsc_transfer_out_relayer_fee !== undefined && object.bsc_transfer_out_relayer_fee !== null) {
      message.bscTransferOutRelayerFee = object.bsc_transfer_out_relayer_fee;
    }
    if (object.bsc_transfer_out_ack_relayer_fee !== undefined && object.bsc_transfer_out_ack_relayer_fee !== null) {
      message.bscTransferOutAckRelayerFee = object.bsc_transfer_out_ack_relayer_fee;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.bsc_transfer_out_relayer_fee = message.bscTransferOutRelayerFee;
    obj.bsc_transfer_out_ack_relayer_fee = message.bscTransferOutAckRelayerFee;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/greenfield.bridge.Params",
      value: Params.encode(message).finish()
    };
  }
};