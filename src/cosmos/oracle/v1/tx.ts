/* eslint-disable */
import { Long, isSet, bytesFromBase64, base64FromBytes, DeepPartial, Exact, Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmos.oracle.v1";
/** MsgClaim defines the Msg/Claim request type */

export interface MsgClaim {
  from_address: string;
  src_chain_id: number;
  dest_chain_id: number;
  sequence: Long;
  timestamp: Long;
  payload: Uint8Array;
  vote_address_set: Long[];
  agg_signature: Uint8Array;
}
/** MsgClaimResponse defines the Msg/Claim response type */

export interface MsgClaimResponse {}

function createBaseMsgClaim(): MsgClaim {
  return {
    from_address: "",
    src_chain_id: 0,
    dest_chain_id: 0,
    sequence: Long.UZERO,
    timestamp: Long.UZERO,
    payload: new Uint8Array(),
    vote_address_set: [],
    agg_signature: new Uint8Array()
  };
}

export const MsgClaim = {
  encode(message: MsgClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from_address !== "") {
      writer.uint32(10).string(message.from_address);
    }

    if (message.src_chain_id !== 0) {
      writer.uint32(16).uint32(message.src_chain_id);
    }

    if (message.dest_chain_id !== 0) {
      writer.uint32(24).uint32(message.dest_chain_id);
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

    for (const v of message.vote_address_set) {
      writer.fixed64(v);
    }

    writer.ldelim();

    if (message.agg_signature.length !== 0) {
      writer.uint32(66).bytes(message.agg_signature);
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
          message.from_address = reader.string();
          break;

        case 2:
          message.src_chain_id = reader.uint32();
          break;

        case 3:
          message.dest_chain_id = reader.uint32();
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
              message.vote_address_set.push((reader.fixed64() as Long));
            }
          } else {
            message.vote_address_set.push((reader.fixed64() as Long));
          }

          break;

        case 8:
          message.agg_signature = reader.bytes();
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
      from_address: isSet(object.from_address) ? String(object.from_address) : "",
      src_chain_id: isSet(object.src_chain_id) ? Number(object.src_chain_id) : 0,
      dest_chain_id: isSet(object.dest_chain_id) ? Number(object.dest_chain_id) : 0,
      sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO,
      timestamp: isSet(object.timestamp) ? Long.fromValue(object.timestamp) : Long.UZERO,
      payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array(),
      vote_address_set: Array.isArray(object?.vote_address_set) ? object.vote_address_set.map((e: any) => Long.fromValue(e)) : [],
      agg_signature: isSet(object.agg_signature) ? bytesFromBase64(object.agg_signature) : new Uint8Array()
    };
  },

  toJSON(message: MsgClaim): unknown {
    const obj: any = {};
    message.from_address !== undefined && (obj.from_address = message.from_address);
    message.src_chain_id !== undefined && (obj.src_chain_id = Math.round(message.src_chain_id));
    message.dest_chain_id !== undefined && (obj.dest_chain_id = Math.round(message.dest_chain_id));
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || Long.UZERO).toString());
    message.payload !== undefined && (obj.payload = base64FromBytes(message.payload !== undefined ? message.payload : new Uint8Array()));

    if (message.vote_address_set) {
      obj.vote_address_set = message.vote_address_set.map(e => (e || Long.ZERO).toString());
    } else {
      obj.vote_address_set = [];
    }

    message.agg_signature !== undefined && (obj.agg_signature = base64FromBytes(message.agg_signature !== undefined ? message.agg_signature : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgClaim>, I>>(object: I): MsgClaim {
    const message = createBaseMsgClaim();
    message.from_address = object.from_address ?? "";
    message.src_chain_id = object.src_chain_id ?? 0;
    message.dest_chain_id = object.dest_chain_id ?? 0;
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.UZERO;
    message.payload = object.payload ?? new Uint8Array();
    message.vote_address_set = object.vote_address_set?.map(e => Long.fromValue(e)) || [];
    message.agg_signature = object.agg_signature ?? new Uint8Array();
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