/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { bytesFromBase64, base64FromBytes, DeepPartial, Exact } from "../../helpers";
export const protobufPackage = "bnbchain.greenfield.gensp";
/**
 * GenesisState defines the gensp module's genesis state.
 * GenesisState defines the raw genesis transaction in JSON.
 */

export interface GenesisState {
  /** gen_txs defines the genesis transactions. */
  gensp_txs: Uint8Array[];
}

function createBaseGenesisState(): GenesisState {
  return {
    gensp_txs: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.gensp_txs) {
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
          message.gensp_txs.push(reader.bytes());
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
      gensp_txs: Array.isArray(object?.gensp_txs) ? object.gensp_txs.map((e: any) => bytesFromBase64(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};

    if (message.gensp_txs) {
      obj.gensp_txs = message.gensp_txs.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.gensp_txs = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.gensp_txs = object.gensp_txs?.map(e => e) || [];
    return message;
  }

};