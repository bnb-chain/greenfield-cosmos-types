//@ts-nocheck
/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { bytesFromBase64, base64FromBytes, DeepPartial, Exact } from "../../helpers";
export const protobufPackage = "greenfield.gensp";
/**
 * GenesisState defines the gensp module's genesis state.
 * GenesisState defines the raw genesis transaction in JSON.
 */

export interface GenesisState {
  /** gen_txs defines the genesis transactions. */
  genspTxs: Uint8Array[];
}
/**
 * GenesisState defines the gensp module's genesis state.
 * GenesisState defines the raw genesis transaction in JSON.
 */

export interface GenesisStateSDKType {
  gensp_txs: Uint8Array[];
}

function createBaseGenesisState(): GenesisState {
  return {
    genspTxs: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.genspTxs) {
      writer.uint32(10).bytes(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.genspTxs.push(reader.bytes());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      genspTxs: Array.isArray(object?.genspTxs) ? object.genspTxs.map((e: any) => bytesFromBase64(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};

    if (message.genspTxs) {
      obj.genspTxs = message.genspTxs.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.genspTxs = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.genspTxs = object.genspTxs?.map(e => e) || [];
    return message;
  },

  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      genspTxs: Array.isArray(object?.gensp_txs) ? object.gensp_txs.map((e: any) => e) : []
    };
  },

  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};

    if (message.genspTxs) {
      obj.gensp_txs = message.genspTxs.map(e => e);
    } else {
      obj.gensp_txs = [];
    }

    return obj;
  }

};