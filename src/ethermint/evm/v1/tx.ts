/* eslint-disable */
import { Any } from "../../../google/protobuf/any";
import { AccessTuple, Log } from "./evm";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact, Long, bytesFromBase64, base64FromBytes, Rpc } from "../../../helpers";
export const protobufPackage = "ethermint.evm.v1";
/** MsgEthereumTx encapsulates an Ethereum transaction as an SDK message. */

export interface MsgEthereumTx {
  /** inner transaction data */
  data?: Any;
  /** encoded storage size of the transaction */

  size: number;
  /** transaction hash in hex format */

  hash: string;
  /**
   * ethereum signer address in hex format. This address value is checked
   * against the address derived from the signature (V, R, S) using the
   * secp256k1 elliptic curve
   */

  from: string;
}
/**
 * LegacyTx is the transaction data of regular Ethereum transactions.
 * NOTE: All non-protected transactions (i.e non EIP155 signed) will fail if the
 * AllowUnprotectedTxs parameter is disabled.
 */

export interface LegacyTx {
  /** nonce corresponds to the account nonce (transaction sequence). */
  nonce: Long;
  /** gas price defines the value for each gas unit */

  gasPrice: string;
  /** gas defines the gas limit defined for the transaction. */

  gas: Long;
  /** hex formatted address of the recipient */

  to: string;
  /** value defines the unsigned integer value of the transaction amount. */

  value: string;
  /** input defines the data payload bytes of the transaction. */

  data: Uint8Array;
  /** v defines the signature value */

  v: Uint8Array;
  /** r defines the signature value */

  r: Uint8Array;
  /** s define the signature value */

  s: Uint8Array;
}
/** AccessListTx is the data of EIP-2930 access list transactions. */

export interface AccessListTx {
  /** destination EVM chain ID */
  chainId: string;
  /** nonce corresponds to the account nonce (transaction sequence). */

  nonce: Long;
  /** gas price defines the value for each gas unit */

  gasPrice: string;
  /** gas defines the gas limit defined for the transaction. */

  gas: Long;
  /** hex formatted address of the recipient */

  to: string;
  /** value defines the unsigned integer value of the transaction amount. */

  value: string;
  /** input defines the data payload bytes of the transaction. */

  data: Uint8Array;
  accesses: AccessTuple[];
  /** v defines the signature value */

  v: Uint8Array;
  /** r defines the signature value */

  r: Uint8Array;
  /** s define the signature value */

  s: Uint8Array;
}
/** DynamicFeeTx is the data of EIP-1559 dinamic fee transactions. */

export interface DynamicFeeTx {
  /** destination EVM chain ID */
  chainId: string;
  /** nonce corresponds to the account nonce (transaction sequence). */

  nonce: Long;
  /** gas tip cap defines the max value for the gas tip */

  gasTipCap: string;
  /** gas fee cap defines the max value for the gas fee */

  gasFeeCap: string;
  /** gas defines the gas limit defined for the transaction. */

  gas: Long;
  /** hex formatted address of the recipient */

  to: string;
  /** value defines the the transaction amount. */

  value: string;
  /** input defines the data payload bytes of the transaction. */

  data: Uint8Array;
  accesses: AccessTuple[];
  /** v defines the signature value */

  v: Uint8Array;
  /** r defines the signature value */

  r: Uint8Array;
  /** s define the signature value */

  s: Uint8Array;
}
export interface ExtensionOptionsEthereumTx {}
/** MsgEthereumTxResponse defines the Msg/EthereumTx response type. */

export interface MsgEthereumTxResponse {
  /**
   * ethereum transaction hash in hex format. This hash differs from the
   * Tendermint sha256 hash of the transaction bytes. See
   * https://github.com/tendermint/tendermint/issues/6539 for reference
   */
  hash: string;
  /**
   * logs contains the transaction hash and the proto-compatible ethereum
   * logs.
   */

  logs: Log[];
  /**
   * returned data from evm function (result or data supplied with revert
   * opcode)
   */

  ret: Uint8Array;
  /** vm error is the error returned by vm execution */

  vmError: string;
  /** gas consumed by the transaction */

  gasUsed: Long;
}

function createBaseMsgEthereumTx(): MsgEthereumTx {
  return {
    data: undefined,
    size: 0,
    hash: "",
    from: ""
  };
}

export const MsgEthereumTx = {
  encode(message: MsgEthereumTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(10).fork()).ldelim();
    }

    if (message.size !== 0) {
      writer.uint32(17).double(message.size);
    }

    if (message.hash !== "") {
      writer.uint32(26).string(message.hash);
    }

    if (message.from !== "") {
      writer.uint32(34).string(message.from);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEthereumTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEthereumTx();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.data = Any.decode(reader, reader.uint32());
          break;

        case 2:
          message.size = reader.double();
          break;

        case 3:
          message.hash = reader.string();
          break;

        case 4:
          message.from = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgEthereumTx {
    return {
      data: isSet(object.data) ? Any.fromJSON(object.data) : undefined,
      size: isSet(object.size) ? Number(object.size) : 0,
      hash: isSet(object.hash) ? String(object.hash) : "",
      from: isSet(object.from) ? String(object.from) : ""
    };
  },

  toJSON(message: MsgEthereumTx): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = message.data ? Any.toJSON(message.data) : undefined);
    message.size !== undefined && (obj.size = message.size);
    message.hash !== undefined && (obj.hash = message.hash);
    message.from !== undefined && (obj.from = message.from);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEthereumTx>, I>>(object: I): MsgEthereumTx {
    const message = createBaseMsgEthereumTx();
    message.data = object.data !== undefined && object.data !== null ? Any.fromPartial(object.data) : undefined;
    message.size = object.size ?? 0;
    message.hash = object.hash ?? "";
    message.from = object.from ?? "";
    return message;
  }

};

function createBaseLegacyTx(): LegacyTx {
  return {
    nonce: Long.UZERO,
    gasPrice: "",
    gas: Long.UZERO,
    to: "",
    value: "",
    data: new Uint8Array(),
    v: new Uint8Array(),
    r: new Uint8Array(),
    s: new Uint8Array()
  };
}

export const LegacyTx = {
  encode(message: LegacyTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nonce.isZero()) {
      writer.uint32(8).uint64(message.nonce);
    }

    if (message.gasPrice !== "") {
      writer.uint32(18).string(message.gasPrice);
    }

    if (!message.gas.isZero()) {
      writer.uint32(24).uint64(message.gas);
    }

    if (message.to !== "") {
      writer.uint32(34).string(message.to);
    }

    if (message.value !== "") {
      writer.uint32(42).string(message.value);
    }

    if (message.data.length !== 0) {
      writer.uint32(50).bytes(message.data);
    }

    if (message.v.length !== 0) {
      writer.uint32(58).bytes(message.v);
    }

    if (message.r.length !== 0) {
      writer.uint32(66).bytes(message.r);
    }

    if (message.s.length !== 0) {
      writer.uint32(74).bytes(message.s);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LegacyTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacyTx();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.nonce = (reader.uint64() as Long);
          break;

        case 2:
          message.gasPrice = reader.string();
          break;

        case 3:
          message.gas = (reader.uint64() as Long);
          break;

        case 4:
          message.to = reader.string();
          break;

        case 5:
          message.value = reader.string();
          break;

        case 6:
          message.data = reader.bytes();
          break;

        case 7:
          message.v = reader.bytes();
          break;

        case 8:
          message.r = reader.bytes();
          break;

        case 9:
          message.s = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LegacyTx {
    return {
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
      gasPrice: isSet(object.gasPrice) ? String(object.gasPrice) : "",
      gas: isSet(object.gas) ? Long.fromValue(object.gas) : Long.UZERO,
      to: isSet(object.to) ? String(object.to) : "",
      value: isSet(object.value) ? String(object.value) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      v: isSet(object.v) ? bytesFromBase64(object.v) : new Uint8Array(),
      r: isSet(object.r) ? bytesFromBase64(object.r) : new Uint8Array(),
      s: isSet(object.s) ? bytesFromBase64(object.s) : new Uint8Array()
    };
  },

  toJSON(message: LegacyTx): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
    message.gasPrice !== undefined && (obj.gasPrice = message.gasPrice);
    message.gas !== undefined && (obj.gas = (message.gas || Long.UZERO).toString());
    message.to !== undefined && (obj.to = message.to);
    message.value !== undefined && (obj.value = message.value);
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.v !== undefined && (obj.v = base64FromBytes(message.v !== undefined ? message.v : new Uint8Array()));
    message.r !== undefined && (obj.r = base64FromBytes(message.r !== undefined ? message.r : new Uint8Array()));
    message.s !== undefined && (obj.s = base64FromBytes(message.s !== undefined ? message.s : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LegacyTx>, I>>(object: I): LegacyTx {
    const message = createBaseLegacyTx();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    message.gasPrice = object.gasPrice ?? "";
    message.gas = object.gas !== undefined && object.gas !== null ? Long.fromValue(object.gas) : Long.UZERO;
    message.to = object.to ?? "";
    message.value = object.value ?? "";
    message.data = object.data ?? new Uint8Array();
    message.v = object.v ?? new Uint8Array();
    message.r = object.r ?? new Uint8Array();
    message.s = object.s ?? new Uint8Array();
    return message;
  }

};

function createBaseAccessListTx(): AccessListTx {
  return {
    chainId: "",
    nonce: Long.UZERO,
    gasPrice: "",
    gas: Long.UZERO,
    to: "",
    value: "",
    data: new Uint8Array(),
    accesses: [],
    v: new Uint8Array(),
    r: new Uint8Array(),
    s: new Uint8Array()
  };
}

export const AccessListTx = {
  encode(message: AccessListTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }

    if (!message.nonce.isZero()) {
      writer.uint32(16).uint64(message.nonce);
    }

    if (message.gasPrice !== "") {
      writer.uint32(26).string(message.gasPrice);
    }

    if (!message.gas.isZero()) {
      writer.uint32(32).uint64(message.gas);
    }

    if (message.to !== "") {
      writer.uint32(42).string(message.to);
    }

    if (message.value !== "") {
      writer.uint32(50).string(message.value);
    }

    if (message.data.length !== 0) {
      writer.uint32(58).bytes(message.data);
    }

    for (const v of message.accesses) {
      AccessTuple.encode(v!, writer.uint32(66).fork()).ldelim();
    }

    if (message.v.length !== 0) {
      writer.uint32(74).bytes(message.v);
    }

    if (message.r.length !== 0) {
      writer.uint32(82).bytes(message.r);
    }

    if (message.s.length !== 0) {
      writer.uint32(90).bytes(message.s);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccessListTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessListTx();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;

        case 2:
          message.nonce = (reader.uint64() as Long);
          break;

        case 3:
          message.gasPrice = reader.string();
          break;

        case 4:
          message.gas = (reader.uint64() as Long);
          break;

        case 5:
          message.to = reader.string();
          break;

        case 6:
          message.value = reader.string();
          break;

        case 7:
          message.data = reader.bytes();
          break;

        case 8:
          message.accesses.push(AccessTuple.decode(reader, reader.uint32()));
          break;

        case 9:
          message.v = reader.bytes();
          break;

        case 10:
          message.r = reader.bytes();
          break;

        case 11:
          message.s = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AccessListTx {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
      gasPrice: isSet(object.gasPrice) ? String(object.gasPrice) : "",
      gas: isSet(object.gas) ? Long.fromValue(object.gas) : Long.UZERO,
      to: isSet(object.to) ? String(object.to) : "",
      value: isSet(object.value) ? String(object.value) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      accesses: Array.isArray(object?.accesses) ? object.accesses.map((e: any) => AccessTuple.fromJSON(e)) : [],
      v: isSet(object.v) ? bytesFromBase64(object.v) : new Uint8Array(),
      r: isSet(object.r) ? bytesFromBase64(object.r) : new Uint8Array(),
      s: isSet(object.s) ? bytesFromBase64(object.s) : new Uint8Array()
    };
  },

  toJSON(message: AccessListTx): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
    message.gasPrice !== undefined && (obj.gasPrice = message.gasPrice);
    message.gas !== undefined && (obj.gas = (message.gas || Long.UZERO).toString());
    message.to !== undefined && (obj.to = message.to);
    message.value !== undefined && (obj.value = message.value);
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));

    if (message.accesses) {
      obj.accesses = message.accesses.map(e => e ? AccessTuple.toJSON(e) : undefined);
    } else {
      obj.accesses = [];
    }

    message.v !== undefined && (obj.v = base64FromBytes(message.v !== undefined ? message.v : new Uint8Array()));
    message.r !== undefined && (obj.r = base64FromBytes(message.r !== undefined ? message.r : new Uint8Array()));
    message.s !== undefined && (obj.s = base64FromBytes(message.s !== undefined ? message.s : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AccessListTx>, I>>(object: I): AccessListTx {
    const message = createBaseAccessListTx();
    message.chainId = object.chainId ?? "";
    message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    message.gasPrice = object.gasPrice ?? "";
    message.gas = object.gas !== undefined && object.gas !== null ? Long.fromValue(object.gas) : Long.UZERO;
    message.to = object.to ?? "";
    message.value = object.value ?? "";
    message.data = object.data ?? new Uint8Array();
    message.accesses = object.accesses?.map(e => AccessTuple.fromPartial(e)) || [];
    message.v = object.v ?? new Uint8Array();
    message.r = object.r ?? new Uint8Array();
    message.s = object.s ?? new Uint8Array();
    return message;
  }

};

function createBaseDynamicFeeTx(): DynamicFeeTx {
  return {
    chainId: "",
    nonce: Long.UZERO,
    gasTipCap: "",
    gasFeeCap: "",
    gas: Long.UZERO,
    to: "",
    value: "",
    data: new Uint8Array(),
    accesses: [],
    v: new Uint8Array(),
    r: new Uint8Array(),
    s: new Uint8Array()
  };
}

export const DynamicFeeTx = {
  encode(message: DynamicFeeTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }

    if (!message.nonce.isZero()) {
      writer.uint32(16).uint64(message.nonce);
    }

    if (message.gasTipCap !== "") {
      writer.uint32(26).string(message.gasTipCap);
    }

    if (message.gasFeeCap !== "") {
      writer.uint32(34).string(message.gasFeeCap);
    }

    if (!message.gas.isZero()) {
      writer.uint32(40).uint64(message.gas);
    }

    if (message.to !== "") {
      writer.uint32(50).string(message.to);
    }

    if (message.value !== "") {
      writer.uint32(58).string(message.value);
    }

    if (message.data.length !== 0) {
      writer.uint32(66).bytes(message.data);
    }

    for (const v of message.accesses) {
      AccessTuple.encode(v!, writer.uint32(74).fork()).ldelim();
    }

    if (message.v.length !== 0) {
      writer.uint32(82).bytes(message.v);
    }

    if (message.r.length !== 0) {
      writer.uint32(90).bytes(message.r);
    }

    if (message.s.length !== 0) {
      writer.uint32(98).bytes(message.s);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DynamicFeeTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDynamicFeeTx();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;

        case 2:
          message.nonce = (reader.uint64() as Long);
          break;

        case 3:
          message.gasTipCap = reader.string();
          break;

        case 4:
          message.gasFeeCap = reader.string();
          break;

        case 5:
          message.gas = (reader.uint64() as Long);
          break;

        case 6:
          message.to = reader.string();
          break;

        case 7:
          message.value = reader.string();
          break;

        case 8:
          message.data = reader.bytes();
          break;

        case 9:
          message.accesses.push(AccessTuple.decode(reader, reader.uint32()));
          break;

        case 10:
          message.v = reader.bytes();
          break;

        case 11:
          message.r = reader.bytes();
          break;

        case 12:
          message.s = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DynamicFeeTx {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
      gasTipCap: isSet(object.gasTipCap) ? String(object.gasTipCap) : "",
      gasFeeCap: isSet(object.gasFeeCap) ? String(object.gasFeeCap) : "",
      gas: isSet(object.gas) ? Long.fromValue(object.gas) : Long.UZERO,
      to: isSet(object.to) ? String(object.to) : "",
      value: isSet(object.value) ? String(object.value) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      accesses: Array.isArray(object?.accesses) ? object.accesses.map((e: any) => AccessTuple.fromJSON(e)) : [],
      v: isSet(object.v) ? bytesFromBase64(object.v) : new Uint8Array(),
      r: isSet(object.r) ? bytesFromBase64(object.r) : new Uint8Array(),
      s: isSet(object.s) ? bytesFromBase64(object.s) : new Uint8Array()
    };
  },

  toJSON(message: DynamicFeeTx): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
    message.gasTipCap !== undefined && (obj.gasTipCap = message.gasTipCap);
    message.gasFeeCap !== undefined && (obj.gasFeeCap = message.gasFeeCap);
    message.gas !== undefined && (obj.gas = (message.gas || Long.UZERO).toString());
    message.to !== undefined && (obj.to = message.to);
    message.value !== undefined && (obj.value = message.value);
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));

    if (message.accesses) {
      obj.accesses = message.accesses.map(e => e ? AccessTuple.toJSON(e) : undefined);
    } else {
      obj.accesses = [];
    }

    message.v !== undefined && (obj.v = base64FromBytes(message.v !== undefined ? message.v : new Uint8Array()));
    message.r !== undefined && (obj.r = base64FromBytes(message.r !== undefined ? message.r : new Uint8Array()));
    message.s !== undefined && (obj.s = base64FromBytes(message.s !== undefined ? message.s : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DynamicFeeTx>, I>>(object: I): DynamicFeeTx {
    const message = createBaseDynamicFeeTx();
    message.chainId = object.chainId ?? "";
    message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    message.gasTipCap = object.gasTipCap ?? "";
    message.gasFeeCap = object.gasFeeCap ?? "";
    message.gas = object.gas !== undefined && object.gas !== null ? Long.fromValue(object.gas) : Long.UZERO;
    message.to = object.to ?? "";
    message.value = object.value ?? "";
    message.data = object.data ?? new Uint8Array();
    message.accesses = object.accesses?.map(e => AccessTuple.fromPartial(e)) || [];
    message.v = object.v ?? new Uint8Array();
    message.r = object.r ?? new Uint8Array();
    message.s = object.s ?? new Uint8Array();
    return message;
  }

};

function createBaseExtensionOptionsEthereumTx(): ExtensionOptionsEthereumTx {
  return {};
}

export const ExtensionOptionsEthereumTx = {
  encode(_: ExtensionOptionsEthereumTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExtensionOptionsEthereumTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtensionOptionsEthereumTx();

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

  fromJSON(_: any): ExtensionOptionsEthereumTx {
    return {};
  },

  toJSON(_: ExtensionOptionsEthereumTx): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ExtensionOptionsEthereumTx>, I>>(_: I): ExtensionOptionsEthereumTx {
    const message = createBaseExtensionOptionsEthereumTx();
    return message;
  }

};

function createBaseMsgEthereumTxResponse(): MsgEthereumTxResponse {
  return {
    hash: "",
    logs: [],
    ret: new Uint8Array(),
    vmError: "",
    gasUsed: Long.UZERO
  };
}

export const MsgEthereumTxResponse = {
  encode(message: MsgEthereumTxResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }

    for (const v of message.logs) {
      Log.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.ret.length !== 0) {
      writer.uint32(26).bytes(message.ret);
    }

    if (message.vmError !== "") {
      writer.uint32(34).string(message.vmError);
    }

    if (!message.gasUsed.isZero()) {
      writer.uint32(40).uint64(message.gasUsed);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEthereumTxResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEthereumTxResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;

        case 2:
          message.logs.push(Log.decode(reader, reader.uint32()));
          break;

        case 3:
          message.ret = reader.bytes();
          break;

        case 4:
          message.vmError = reader.string();
          break;

        case 5:
          message.gasUsed = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgEthereumTxResponse {
    return {
      hash: isSet(object.hash) ? String(object.hash) : "",
      logs: Array.isArray(object?.logs) ? object.logs.map((e: any) => Log.fromJSON(e)) : [],
      ret: isSet(object.ret) ? bytesFromBase64(object.ret) : new Uint8Array(),
      vmError: isSet(object.vmError) ? String(object.vmError) : "",
      gasUsed: isSet(object.gasUsed) ? Long.fromValue(object.gasUsed) : Long.UZERO
    };
  },

  toJSON(message: MsgEthereumTxResponse): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);

    if (message.logs) {
      obj.logs = message.logs.map(e => e ? Log.toJSON(e) : undefined);
    } else {
      obj.logs = [];
    }

    message.ret !== undefined && (obj.ret = base64FromBytes(message.ret !== undefined ? message.ret : new Uint8Array()));
    message.vmError !== undefined && (obj.vmError = message.vmError);
    message.gasUsed !== undefined && (obj.gasUsed = (message.gasUsed || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEthereumTxResponse>, I>>(object: I): MsgEthereumTxResponse {
    const message = createBaseMsgEthereumTxResponse();
    message.hash = object.hash ?? "";
    message.logs = object.logs?.map(e => Log.fromPartial(e)) || [];
    message.ret = object.ret ?? new Uint8Array();
    message.vmError = object.vmError ?? "";
    message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? Long.fromValue(object.gasUsed) : Long.UZERO;
    return message;
  }

};
/** Msg defines the evm Msg service. */

export interface Msg {
  /** EthereumTx defines a method submitting Ethereum transactions. */
  EthereumTx(request: MsgEthereumTx): Promise<MsgEthereumTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.EthereumTx = this.EthereumTx.bind(this);
  }

  EthereumTx(request: MsgEthereumTx): Promise<MsgEthereumTxResponse> {
    const data = MsgEthereumTx.encode(request).finish();
    const promise = this.rpc.request("ethermint.evm.v1.Msg", "EthereumTx", data);
    return promise.then(data => MsgEthereumTxResponse.decode(new _m0.Reader(data)));
  }

}