//@ts-nocheck
/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial, Exact } from "../../../../helpers";
export const protobufPackage = "cosmos.crypto.eth.bls";
/**
 * PubKey defines a bls public key
 * Key is the compressed form of the pubkey.
 */
export interface PubKey {
  /** key is the public key in byte form */
  key: Uint8Array;
}
export interface PubKeyProtoMsg {
  typeUrl: "/cosmos.crypto.eth.bls.PubKey";
  value: Uint8Array;
}
/**
 * PubKey defines a bls public key
 * Key is the compressed form of the pubkey.
 */
export interface PubKeyAmino {
  /** key is the public key in byte form */
  key?: string;
}
export interface PubKeyAminoMsg {
  type: "cosmos-sdk/PubKey";
  value: PubKeyAmino;
}
/**
 * PubKey defines a bls public key
 * Key is the compressed form of the pubkey.
 */
export interface PubKeySDKType {
  key: Uint8Array;
}
/** PrivKey defines a bls private key. */
export interface PrivKey {
  /** key is the private key in byte form */
  key: Uint8Array;
}
export interface PrivKeyProtoMsg {
  typeUrl: "/cosmos.crypto.eth.bls.PrivKey";
  value: Uint8Array;
}
/** PrivKey defines a bls private key. */
export interface PrivKeyAmino {
  /** key is the private key in byte form */
  key?: string;
}
export interface PrivKeyAminoMsg {
  type: "cosmos-sdk/PrivKey";
  value: PrivKeyAmino;
}
/** PrivKey defines a bls private key. */
export interface PrivKeySDKType {
  key: Uint8Array;
}
function createBasePubKey(): PubKey {
  return {
    key: new Uint8Array()
  };
}
export const PubKey = {
  typeUrl: "/cosmos.crypto.eth.bls.PubKey",
  encode(message: PubKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PubKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePubKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PubKey {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array()
    };
  },
  toJSON(message: PubKey): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PubKey>, I>>(object: I): PubKey {
    const message = createBasePubKey();
    message.key = object.key ?? new Uint8Array();
    return message;
  },
  fromSDK(object: PubKeySDKType): PubKey {
    return {
      key: object?.key
    };
  },
  toSDK(message: PubKey): PubKeySDKType {
    const obj: any = {};
    obj.key = message.key;
    return obj;
  },
  fromAmino(object: PubKeyAmino): PubKey {
    const message = createBasePubKey();
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    return message;
  },
  toAmino(message: PubKey): PubKeyAmino {
    const obj: any = {};
    obj.key = message.key ? base64FromBytes(message.key) : undefined;
    return obj;
  },
  fromAminoMsg(object: PubKeyAminoMsg): PubKey {
    return PubKey.fromAmino(object.value);
  },
  toAminoMsg(message: PubKey): PubKeyAminoMsg {
    return {
      type: "cosmos-sdk/PubKey",
      value: PubKey.toAmino(message)
    };
  },
  fromProtoMsg(message: PubKeyProtoMsg): PubKey {
    return PubKey.decode(message.value);
  },
  toProto(message: PubKey): Uint8Array {
    return PubKey.encode(message).finish();
  },
  toProtoMsg(message: PubKey): PubKeyProtoMsg {
    return {
      typeUrl: "/cosmos.crypto.eth.bls.PubKey",
      value: PubKey.encode(message).finish()
    };
  }
};
function createBasePrivKey(): PrivKey {
  return {
    key: new Uint8Array()
  };
}
export const PrivKey = {
  typeUrl: "/cosmos.crypto.eth.bls.PrivKey",
  encode(message: PrivKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PrivKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrivKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PrivKey {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array()
    };
  },
  toJSON(message: PrivKey): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PrivKey>, I>>(object: I): PrivKey {
    const message = createBasePrivKey();
    message.key = object.key ?? new Uint8Array();
    return message;
  },
  fromSDK(object: PrivKeySDKType): PrivKey {
    return {
      key: object?.key
    };
  },
  toSDK(message: PrivKey): PrivKeySDKType {
    const obj: any = {};
    obj.key = message.key;
    return obj;
  },
  fromAmino(object: PrivKeyAmino): PrivKey {
    const message = createBasePrivKey();
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    return message;
  },
  toAmino(message: PrivKey): PrivKeyAmino {
    const obj: any = {};
    obj.key = message.key ? base64FromBytes(message.key) : undefined;
    return obj;
  },
  fromAminoMsg(object: PrivKeyAminoMsg): PrivKey {
    return PrivKey.fromAmino(object.value);
  },
  toAminoMsg(message: PrivKey): PrivKeyAminoMsg {
    return {
      type: "cosmos-sdk/PrivKey",
      value: PrivKey.toAmino(message)
    };
  },
  fromProtoMsg(message: PrivKeyProtoMsg): PrivKey {
    return PrivKey.decode(message.value);
  },
  toProto(message: PrivKey): Uint8Array {
    return PrivKey.encode(message).finish();
  },
  toProtoMsg(message: PrivKey): PrivKeyProtoMsg {
    return {
      typeUrl: "/cosmos.crypto.eth.bls.PrivKey",
      value: PrivKey.encode(message).finish()
    };
  }
};