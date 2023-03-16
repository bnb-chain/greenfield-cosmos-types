/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact, Long, bytesFromBase64, base64FromBytes } from "../../helpers";
export const protobufPackage = "tendermint.p2p";
export interface NetAddress {
  id: string;
  ip: string;
  port: number;
}
export interface ProtocolVersion {
  p2p: Long;
  block: Long;
  app: Long;
}
export interface DefaultNodeInfo {
  protocol_version?: ProtocolVersion;
  default_node_id: string;
  listen_addr: string;
  network: string;
  version: string;
  channels: Uint8Array;
  moniker: string;
  other?: DefaultNodeInfoOther;
}
export interface DefaultNodeInfoOther {
  tx_index: string;
  rpc_address: string;
}

function createBaseNetAddress(): NetAddress {
  return {
    id: "",
    ip: "",
    port: 0
  };
}

export const NetAddress = {
  encode(message: NetAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.ip !== "") {
      writer.uint32(18).string(message.ip);
    }

    if (message.port !== 0) {
      writer.uint32(24).uint32(message.port);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetAddress();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.ip = reader.string();
          break;

        case 3:
          message.port = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): NetAddress {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      ip: isSet(object.ip) ? String(object.ip) : "",
      port: isSet(object.port) ? Number(object.port) : 0
    };
  },

  toJSON(message: NetAddress): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.ip !== undefined && (obj.ip = message.ip);
    message.port !== undefined && (obj.port = Math.round(message.port));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NetAddress>, I>>(object: I): NetAddress {
    const message = createBaseNetAddress();
    message.id = object.id ?? "";
    message.ip = object.ip ?? "";
    message.port = object.port ?? 0;
    return message;
  }

};

function createBaseProtocolVersion(): ProtocolVersion {
  return {
    p2p: Long.UZERO,
    block: Long.UZERO,
    app: Long.UZERO
  };
}

export const ProtocolVersion = {
  encode(message: ProtocolVersion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.p2p.isZero()) {
      writer.uint32(8).uint64(message.p2p);
    }

    if (!message.block.isZero()) {
      writer.uint32(16).uint64(message.block);
    }

    if (!message.app.isZero()) {
      writer.uint32(24).uint64(message.app);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProtocolVersion {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProtocolVersion();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.p2p = (reader.uint64() as Long);
          break;

        case 2:
          message.block = (reader.uint64() as Long);
          break;

        case 3:
          message.app = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ProtocolVersion {
    return {
      p2p: isSet(object.p2p) ? Long.fromValue(object.p2p) : Long.UZERO,
      block: isSet(object.block) ? Long.fromValue(object.block) : Long.UZERO,
      app: isSet(object.app) ? Long.fromValue(object.app) : Long.UZERO
    };
  },

  toJSON(message: ProtocolVersion): unknown {
    const obj: any = {};
    message.p2p !== undefined && (obj.p2p = (message.p2p || Long.UZERO).toString());
    message.block !== undefined && (obj.block = (message.block || Long.UZERO).toString());
    message.app !== undefined && (obj.app = (message.app || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProtocolVersion>, I>>(object: I): ProtocolVersion {
    const message = createBaseProtocolVersion();
    message.p2p = object.p2p !== undefined && object.p2p !== null ? Long.fromValue(object.p2p) : Long.UZERO;
    message.block = object.block !== undefined && object.block !== null ? Long.fromValue(object.block) : Long.UZERO;
    message.app = object.app !== undefined && object.app !== null ? Long.fromValue(object.app) : Long.UZERO;
    return message;
  }

};

function createBaseDefaultNodeInfo(): DefaultNodeInfo {
  return {
    protocol_version: undefined,
    default_node_id: "",
    listen_addr: "",
    network: "",
    version: "",
    channels: new Uint8Array(),
    moniker: "",
    other: undefined
  };
}

export const DefaultNodeInfo = {
  encode(message: DefaultNodeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.protocol_version !== undefined) {
      ProtocolVersion.encode(message.protocol_version, writer.uint32(10).fork()).ldelim();
    }

    if (message.default_node_id !== "") {
      writer.uint32(18).string(message.default_node_id);
    }

    if (message.listen_addr !== "") {
      writer.uint32(26).string(message.listen_addr);
    }

    if (message.network !== "") {
      writer.uint32(34).string(message.network);
    }

    if (message.version !== "") {
      writer.uint32(42).string(message.version);
    }

    if (message.channels.length !== 0) {
      writer.uint32(50).bytes(message.channels);
    }

    if (message.moniker !== "") {
      writer.uint32(58).string(message.moniker);
    }

    if (message.other !== undefined) {
      DefaultNodeInfoOther.encode(message.other, writer.uint32(66).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DefaultNodeInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDefaultNodeInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.protocol_version = ProtocolVersion.decode(reader, reader.uint32());
          break;

        case 2:
          message.default_node_id = reader.string();
          break;

        case 3:
          message.listen_addr = reader.string();
          break;

        case 4:
          message.network = reader.string();
          break;

        case 5:
          message.version = reader.string();
          break;

        case 6:
          message.channels = reader.bytes();
          break;

        case 7:
          message.moniker = reader.string();
          break;

        case 8:
          message.other = DefaultNodeInfoOther.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DefaultNodeInfo {
    return {
      protocol_version: isSet(object.protocol_version) ? ProtocolVersion.fromJSON(object.protocol_version) : undefined,
      default_node_id: isSet(object.default_node_id) ? String(object.default_node_id) : "",
      listen_addr: isSet(object.listen_addr) ? String(object.listen_addr) : "",
      network: isSet(object.network) ? String(object.network) : "",
      version: isSet(object.version) ? String(object.version) : "",
      channels: isSet(object.channels) ? bytesFromBase64(object.channels) : new Uint8Array(),
      moniker: isSet(object.moniker) ? String(object.moniker) : "",
      other: isSet(object.other) ? DefaultNodeInfoOther.fromJSON(object.other) : undefined
    };
  },

  toJSON(message: DefaultNodeInfo): unknown {
    const obj: any = {};
    message.protocol_version !== undefined && (obj.protocol_version = message.protocol_version ? ProtocolVersion.toJSON(message.protocol_version) : undefined);
    message.default_node_id !== undefined && (obj.default_node_id = message.default_node_id);
    message.listen_addr !== undefined && (obj.listen_addr = message.listen_addr);
    message.network !== undefined && (obj.network = message.network);
    message.version !== undefined && (obj.version = message.version);
    message.channels !== undefined && (obj.channels = base64FromBytes(message.channels !== undefined ? message.channels : new Uint8Array()));
    message.moniker !== undefined && (obj.moniker = message.moniker);
    message.other !== undefined && (obj.other = message.other ? DefaultNodeInfoOther.toJSON(message.other) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DefaultNodeInfo>, I>>(object: I): DefaultNodeInfo {
    const message = createBaseDefaultNodeInfo();
    message.protocol_version = object.protocol_version !== undefined && object.protocol_version !== null ? ProtocolVersion.fromPartial(object.protocol_version) : undefined;
    message.default_node_id = object.default_node_id ?? "";
    message.listen_addr = object.listen_addr ?? "";
    message.network = object.network ?? "";
    message.version = object.version ?? "";
    message.channels = object.channels ?? new Uint8Array();
    message.moniker = object.moniker ?? "";
    message.other = object.other !== undefined && object.other !== null ? DefaultNodeInfoOther.fromPartial(object.other) : undefined;
    return message;
  }

};

function createBaseDefaultNodeInfoOther(): DefaultNodeInfoOther {
  return {
    tx_index: "",
    rpc_address: ""
  };
}

export const DefaultNodeInfoOther = {
  encode(message: DefaultNodeInfoOther, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tx_index !== "") {
      writer.uint32(10).string(message.tx_index);
    }

    if (message.rpc_address !== "") {
      writer.uint32(18).string(message.rpc_address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DefaultNodeInfoOther {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDefaultNodeInfoOther();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.tx_index = reader.string();
          break;

        case 2:
          message.rpc_address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DefaultNodeInfoOther {
    return {
      tx_index: isSet(object.tx_index) ? String(object.tx_index) : "",
      rpc_address: isSet(object.rpc_address) ? String(object.rpc_address) : ""
    };
  },

  toJSON(message: DefaultNodeInfoOther): unknown {
    const obj: any = {};
    message.tx_index !== undefined && (obj.tx_index = message.tx_index);
    message.rpc_address !== undefined && (obj.rpc_address = message.rpc_address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DefaultNodeInfoOther>, I>>(object: I): DefaultNodeInfoOther {
    const message = createBaseDefaultNodeInfoOther();
    message.tx_index = object.tx_index ?? "";
    message.rpc_address = object.rpc_address ?? "";
    return message;
  }

};