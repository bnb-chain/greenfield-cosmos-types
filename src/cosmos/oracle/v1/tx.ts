//@ts-nocheck
/* eslint-disable */
import { Params, ParamsAmino, ParamsSDKType } from "./oracle";
import { Long, isSet, bytesFromBase64, base64FromBytes, DeepPartial, Exact, Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmos.oracle.v1";
/** MsgClaim defines the Msg/Claim request type */
export interface MsgClaim {
  /** sender address of the msg */
  fromAddress: string;
  /** source chain id */
  srcChainId: number;
  /** destination chain id */
  destChainId: number;
  /** sequence of the oracle channel */
  sequence: Long;
  /** timestamp of the claim */
  timestamp: Long;
  /** payload of the claim */
  payload: Uint8Array;
  /** bit map of the voted validators */
  voteAddressSet: Long[];
  /** bls signature of the claim */
  aggSignature: Uint8Array;
}
export interface MsgClaimProtoMsg {
  typeUrl: "/cosmos.oracle.v1.MsgClaim";
  value: Uint8Array;
}
/** MsgClaim defines the Msg/Claim request type */
export interface MsgClaimAmino {
  /** sender address of the msg */
  from_address?: string;
  /** source chain id */
  src_chain_id?: number;
  /** destination chain id */
  dest_chain_id?: number;
  /** sequence of the oracle channel */
  sequence?: string;
  /** timestamp of the claim */
  timestamp?: string;
  /** payload of the claim */
  payload?: string;
  /** bit map of the voted validators */
  vote_address_set?: string[];
  /** bls signature of the claim */
  agg_signature?: string;
}
export interface MsgClaimAminoMsg {
  type: "cosmos-sdk/MsgClaim";
  value: MsgClaimAmino;
}
/** MsgClaim defines the Msg/Claim request type */
export interface MsgClaimSDKType {
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
export interface MsgClaimResponseProtoMsg {
  typeUrl: "/cosmos.oracle.v1.MsgClaimResponse";
  value: Uint8Array;
}
/** MsgClaimResponse defines the Msg/Claim response type */
export interface MsgClaimResponseAmino {}
export interface MsgClaimResponseAminoMsg {
  type: "cosmos-sdk/MsgClaimResponse";
  value: MsgClaimResponseAmino;
}
/** MsgClaimResponse defines the Msg/Claim response type */
export interface MsgClaimResponseSDKType {}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /**
   * params defines the x/crosschain parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/cosmos.oracle.v1.MsgUpdateParams";
  value: Uint8Array;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsAmino {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority?: string;
  /**
   * params defines the x/crosschain parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "cosmos-sdk/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/cosmos.oracle.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "cosmos-sdk/MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseSDKType {}
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
  typeUrl: "/cosmos.oracle.v1.MsgClaim",
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
  },
  fromSDK(object: MsgClaimSDKType): MsgClaim {
    return {
      fromAddress: object?.from_address,
      srcChainId: object?.src_chain_id,
      destChainId: object?.dest_chain_id,
      sequence: object?.sequence,
      timestamp: object?.timestamp,
      payload: object?.payload,
      voteAddressSet: Array.isArray(object?.vote_address_set) ? object.vote_address_set.map((e: any) => e) : [],
      aggSignature: object?.agg_signature
    };
  },
  toSDK(message: MsgClaim): MsgClaimSDKType {
    const obj: any = {};
    obj.from_address = message.fromAddress;
    obj.src_chain_id = message.srcChainId;
    obj.dest_chain_id = message.destChainId;
    obj.sequence = message.sequence;
    obj.timestamp = message.timestamp;
    obj.payload = message.payload;
    if (message.voteAddressSet) {
      obj.vote_address_set = message.voteAddressSet.map(e => e);
    } else {
      obj.vote_address_set = [];
    }
    obj.agg_signature = message.aggSignature;
    return obj;
  },
  fromAmino(object: MsgClaimAmino): MsgClaim {
    const message = createBaseMsgClaim();
    if (object.from_address !== undefined && object.from_address !== null) {
      message.fromAddress = object.from_address;
    }
    if (object.src_chain_id !== undefined && object.src_chain_id !== null) {
      message.srcChainId = object.src_chain_id;
    }
    if (object.dest_chain_id !== undefined && object.dest_chain_id !== null) {
      message.destChainId = object.dest_chain_id;
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = Long.fromString(object.sequence);
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Long.fromString(object.timestamp);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = bytesFromBase64(object.payload);
    }
    message.voteAddressSet = object.vote_address_set?.map(e => Long.fromString(e)) || [];
    if (object.agg_signature !== undefined && object.agg_signature !== null) {
      message.aggSignature = bytesFromBase64(object.agg_signature);
    }
    return message;
  },
  toAmino(message: MsgClaim): MsgClaimAmino {
    const obj: any = {};
    obj.from_address = message.fromAddress;
    obj.src_chain_id = message.srcChainId;
    obj.dest_chain_id = message.destChainId;
    obj.sequence = message.sequence ? message.sequence.toString() : undefined;
    obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
    obj.payload = message.payload ? base64FromBytes(message.payload) : undefined;
    if (message.voteAddressSet) {
      obj.vote_address_set = message.voteAddressSet.map(e => e);
    } else {
      obj.vote_address_set = [];
    }
    obj.agg_signature = message.aggSignature ? base64FromBytes(message.aggSignature) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgClaimAminoMsg): MsgClaim {
    return MsgClaim.fromAmino(object.value);
  },
  toAminoMsg(message: MsgClaim): MsgClaimAminoMsg {
    return {
      type: "cosmos-sdk/MsgClaim",
      value: MsgClaim.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgClaimProtoMsg): MsgClaim {
    return MsgClaim.decode(message.value);
  },
  toProto(message: MsgClaim): Uint8Array {
    return MsgClaim.encode(message).finish();
  },
  toProtoMsg(message: MsgClaim): MsgClaimProtoMsg {
    return {
      typeUrl: "/cosmos.oracle.v1.MsgClaim",
      value: MsgClaim.encode(message).finish()
    };
  }
};
function createBaseMsgClaimResponse(): MsgClaimResponse {
  return {};
}
export const MsgClaimResponse = {
  typeUrl: "/cosmos.oracle.v1.MsgClaimResponse",
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
  },
  fromSDK(_: MsgClaimResponseSDKType): MsgClaimResponse {
    return {};
  },
  toSDK(_: MsgClaimResponse): MsgClaimResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgClaimResponseAmino): MsgClaimResponse {
    const message = createBaseMsgClaimResponse();
    return message;
  },
  toAmino(_: MsgClaimResponse): MsgClaimResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgClaimResponseAminoMsg): MsgClaimResponse {
    return MsgClaimResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgClaimResponse): MsgClaimResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgClaimResponse",
      value: MsgClaimResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgClaimResponseProtoMsg): MsgClaimResponse {
    return MsgClaimResponse.decode(message.value);
  },
  toProto(message: MsgClaimResponse): Uint8Array {
    return MsgClaimResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimResponse): MsgClaimResponseProtoMsg {
    return {
      typeUrl: "/cosmos.oracle.v1.MsgClaimResponse",
      value: MsgClaimResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/cosmos.oracle.v1.MsgUpdateParams",
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
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : Params.fromPartial({});
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/cosmos.oracle.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/cosmos.oracle.v1.MsgUpdateParamsResponse",
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
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.oracle.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
/** Msg defines the oracle Msg service. */
export interface Msg {
  /** Claim defines a method for claiming oracle messages */
  Claim(request: MsgClaim): Promise<MsgClaimResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/oracle module parameters.
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
    this.Claim = this.Claim.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  Claim(request: MsgClaim): Promise<MsgClaimResponse> {
    const data = MsgClaim.encode(request).finish();
    const promise = this.rpc.request("cosmos.oracle.v1.Msg", "Claim", data);
    return promise.then(data => MsgClaimResponse.decode(new _m0.Reader(data)));
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("cosmos.oracle.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
  }
}