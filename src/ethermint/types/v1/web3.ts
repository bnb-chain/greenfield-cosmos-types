/* eslint-disable */
import { Long, isSet, bytesFromBase64, base64FromBytes, DeepPartial, Exact } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "ethermint.types.v1";
export interface ExtensionOptionsWeb3Tx {
  /**
   * typed data chain id used only in EIP712 Domain and should match
   * Ethereum network ID in a Web3 provider (e.g. Metamask).
   */
  typedDataChainId: Long;
  /**
   * fee payer is an account address for the fee payer. It will be validated
   * during EIP712 signature checking.
   */

  feePayer: string;
  /**
   * fee payer sig is a signature data from the fee paying account,
   * allows to perform fee delegation when using EIP712 Domain.
   */

  feePayerSig: Uint8Array;
}

function createBaseExtensionOptionsWeb3Tx(): ExtensionOptionsWeb3Tx {
  return {
    typedDataChainId: Long.UZERO,
    feePayer: "",
    feePayerSig: new Uint8Array()
  };
}

export const ExtensionOptionsWeb3Tx = {
  encode(message: ExtensionOptionsWeb3Tx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.typedDataChainId.isZero()) {
      writer.uint32(8).uint64(message.typedDataChainId);
    }

    if (message.feePayer !== "") {
      writer.uint32(18).string(message.feePayer);
    }

    if (message.feePayerSig.length !== 0) {
      writer.uint32(26).bytes(message.feePayerSig);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExtensionOptionsWeb3Tx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtensionOptionsWeb3Tx();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.typedDataChainId = (reader.uint64() as Long);
          break;

        case 2:
          message.feePayer = reader.string();
          break;

        case 3:
          message.feePayerSig = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ExtensionOptionsWeb3Tx {
    return {
      typedDataChainId: isSet(object.typedDataChainId) ? Long.fromValue(object.typedDataChainId) : Long.UZERO,
      feePayer: isSet(object.feePayer) ? String(object.feePayer) : "",
      feePayerSig: isSet(object.feePayerSig) ? bytesFromBase64(object.feePayerSig) : new Uint8Array()
    };
  },

  toJSON(message: ExtensionOptionsWeb3Tx): unknown {
    const obj: any = {};
    message.typedDataChainId !== undefined && (obj.typedDataChainId = (message.typedDataChainId || Long.UZERO).toString());
    message.feePayer !== undefined && (obj.feePayer = message.feePayer);
    message.feePayerSig !== undefined && (obj.feePayerSig = base64FromBytes(message.feePayerSig !== undefined ? message.feePayerSig : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ExtensionOptionsWeb3Tx>, I>>(object: I): ExtensionOptionsWeb3Tx {
    const message = createBaseExtensionOptionsWeb3Tx();
    message.typedDataChainId = object.typedDataChainId !== undefined && object.typedDataChainId !== null ? Long.fromValue(object.typedDataChainId) : Long.UZERO;
    message.feePayer = object.feePayer ?? "";
    message.feePayerSig = object.feePayerSig ?? new Uint8Array();
    return message;
  }

};