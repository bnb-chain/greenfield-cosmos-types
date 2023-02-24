/* eslint-disable */
import { Long, isSet, bytesFromBase64, base64FromBytes, DeepPartial, Exact, Rpc } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmos.oracle.v1";
/** MsgClaim defines the Msg/Claim request type */

export interface MsgClaim {
  fromAddress: string;
  srcChainId: number;
  destChainId: number;
  sequence: Long;
  timestamp: Long;
  payload: Uint8Array;
  voteAddressSet: Long[];
  aggSignature: Uint8Array;
}
/** MsgClaimResponse defines the Msg/Claim response type */

export interface MsgClaimResponse {}

function createBaseMsgClaim(): MsgClaim {
  return {
    fromAddress: "",
    srcChainId: 0,
    destChainId: 0,
    sequence: Long.UZERO,
    timestamp: Long.UZERO,
    payload: new Uint8Array(),
    voteAddressSet: [],
    aggSignature: new Uint8Array()
  };
}

export const MsgClaim = {
  encode(message: MsgClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }

    if (message.srcChainId !== 0) {
      writer.uint32(16).uint32(message.srcChainId);
    }

    if (message.destChainId !== 0) {
      writer.uint32(24).uint32(message.destChainId);
    }

    if (!message.sequence.isZero()) {
      writer.uint32(32).uint64(message.sequence);
    }

    if (!message.timestamp.isZero()) {
      writer.uint32(40).uint64(message.timestamp);
    }

    if (message.payload.length !== 0) {
      writer.uint32(50).bytes(message.payload);
    }

    writer.uint32(58).fork();

    for (const v of message.voteAddressSet) {
      writer.fixed64(v);
    }

    writer.ldelim();

    if (message.aggSignature.length !== 0) {
      writer.uint32(66).bytes(message.aggSignature);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaim();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;

        case 2:
          message.srcChainId = reader.uint32();
          break;

        case 3:
          message.destChainId = reader.uint32();
          break;

        case 4:
          message.sequence = (reader.uint64() as Long);
          break;

        case 5:
          message.timestamp = (reader.uint64() as Long);
          break;

        case 6:
          message.payload = reader.bytes();
          break;

        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.voteAddressSet.push((reader.fixed64() as Long));
            }
          } else {
            message.voteAddressSet.push((reader.fixed64() as Long));
          }

          break;

        case 8:
          message.aggSignature = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgClaim {
    return {
      fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : "",
      srcChainId: isSet(object.srcChainId) ? Number(object.srcChainId) : 0,
      destChainId: isSet(object.destChainId) ? Number(object.destChainId) : 0,
      sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO,
      timestamp: isSet(object.timestamp) ? Long.fromValue(object.timestamp) : Long.UZERO,
      payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array(),
      voteAddressSet: Array.isArray(object?.voteAddressSet) ? object.voteAddressSet.map((e: any) => Long.fromValue(e)) : [],
      aggSignature: isSet(object.aggSignature) ? bytesFromBase64(object.aggSignature) : new Uint8Array()
    };
  },

  toJSON(message: MsgClaim): unknown {
    const obj: any = {};
    message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
    message.srcChainId !== undefined && (obj.srcChainId = Math.round(message.srcChainId));
    message.destChainId !== undefined && (obj.destChainId = Math.round(message.destChainId));
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || Long.UZERO).toString());
    message.payload !== undefined && (obj.payload = base64FromBytes(message.payload !== undefined ? message.payload : new Uint8Array()));

    if (message.voteAddressSet) {
      obj.voteAddressSet = message.voteAddressSet.map(e => (e || Long.ZERO).toString());
    } else {
      obj.voteAddressSet = [];
    }

    message.aggSignature !== undefined && (obj.aggSignature = base64FromBytes(message.aggSignature !== undefined ? message.aggSignature : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgClaim>, I>>(object: I): MsgClaim {
    const message = createBaseMsgClaim();
    message.fromAddress = object.fromAddress ?? "";
    message.srcChainId = object.srcChainId ?? 0;
    message.destChainId = object.destChainId ?? 0;
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.UZERO;
    message.payload = object.payload ?? new Uint8Array();
    message.voteAddressSet = object.voteAddressSet?.map(e => Long.fromValue(e)) || [];
    message.aggSignature = object.aggSignature ?? new Uint8Array();
    return message;
  }

};

function createBaseMsgClaimResponse(): MsgClaimResponse {
  return {};
}

export const MsgClaimResponse = {
  encode(_: MsgClaimResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimResponse();

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

  fromJSON(_: any): MsgClaimResponse {
    return {};
  },

  toJSON(_: MsgClaimResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgClaimResponse>, I>>(_: I): MsgClaimResponse {
    const message = createBaseMsgClaimResponse();
    return message;
  }

};
/** Msg defines the oracle Msg service. */

export interface Msg {
  /** Claim defines a method for claiming oracle messages */
  Claim(request: MsgClaim): Promise<MsgClaimResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Claim = this.Claim.bind(this);
  }

  Claim(request: MsgClaim): Promise<MsgClaimResponse> {
    const data = MsgClaim.encode(request).finish();
    const promise = this.rpc.request("cosmos.oracle.v1.Msg", "Claim", data);
    return promise.then(data => MsgClaimResponse.decode(new _m0.Reader(data)));
  }

}