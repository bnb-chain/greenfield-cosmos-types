/* eslint-disable */
import { Long, isSet, DeepPartial, Exact } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "ethermint.feemarket.v1";
/** Params defines the EVM module parameters */

export interface Params {
  /** no base fee forces the EIP-1559 base fee to 0 (needed for 0 price calls) */
  noBaseFee: boolean;
  /**
   * base fee change denominator bounds the amount the base fee can change
   * between blocks.
   */

  baseFeeChangeDenominator: number;
  /**
   * elasticity multiplier bounds the maximum gas limit an EIP-1559 block may
   * have.
   */

  elasticityMultiplier: number;
  /** height at which the base fee calculation is enabled. */

  enableHeight: Long;
  /** base fee for EIP-1559 blocks. */

  baseFee: string;
  /** min_gas_price defines the minimum gas price value for cosmos and eth transactions */

  minGasPrice: string;
  /**
   * min gas denominator bounds the minimum gasUsed to be charged
   * to senders based on GasLimit
   */

  minGasMultiplier: string;
}

function createBaseParams(): Params {
  return {
    noBaseFee: false,
    baseFeeChangeDenominator: 0,
    elasticityMultiplier: 0,
    enableHeight: Long.ZERO,
    baseFee: "",
    minGasPrice: "",
    minGasMultiplier: ""
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.noBaseFee === true) {
      writer.uint32(8).bool(message.noBaseFee);
    }

    if (message.baseFeeChangeDenominator !== 0) {
      writer.uint32(16).uint32(message.baseFeeChangeDenominator);
    }

    if (message.elasticityMultiplier !== 0) {
      writer.uint32(24).uint32(message.elasticityMultiplier);
    }

    if (!message.enableHeight.isZero()) {
      writer.uint32(40).int64(message.enableHeight);
    }

    if (message.baseFee !== "") {
      writer.uint32(50).string(message.baseFee);
    }

    if (message.minGasPrice !== "") {
      writer.uint32(58).string(message.minGasPrice);
    }

    if (message.minGasMultiplier !== "") {
      writer.uint32(66).string(message.minGasMultiplier);
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
          message.noBaseFee = reader.bool();
          break;

        case 2:
          message.baseFeeChangeDenominator = reader.uint32();
          break;

        case 3:
          message.elasticityMultiplier = reader.uint32();
          break;

        case 5:
          message.enableHeight = (reader.int64() as Long);
          break;

        case 6:
          message.baseFee = reader.string();
          break;

        case 7:
          message.minGasPrice = reader.string();
          break;

        case 8:
          message.minGasMultiplier = reader.string();
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
      noBaseFee: isSet(object.noBaseFee) ? Boolean(object.noBaseFee) : false,
      baseFeeChangeDenominator: isSet(object.baseFeeChangeDenominator) ? Number(object.baseFeeChangeDenominator) : 0,
      elasticityMultiplier: isSet(object.elasticityMultiplier) ? Number(object.elasticityMultiplier) : 0,
      enableHeight: isSet(object.enableHeight) ? Long.fromValue(object.enableHeight) : Long.ZERO,
      baseFee: isSet(object.baseFee) ? String(object.baseFee) : "",
      minGasPrice: isSet(object.minGasPrice) ? String(object.minGasPrice) : "",
      minGasMultiplier: isSet(object.minGasMultiplier) ? String(object.minGasMultiplier) : ""
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.noBaseFee !== undefined && (obj.noBaseFee = message.noBaseFee);
    message.baseFeeChangeDenominator !== undefined && (obj.baseFeeChangeDenominator = Math.round(message.baseFeeChangeDenominator));
    message.elasticityMultiplier !== undefined && (obj.elasticityMultiplier = Math.round(message.elasticityMultiplier));
    message.enableHeight !== undefined && (obj.enableHeight = (message.enableHeight || Long.ZERO).toString());
    message.baseFee !== undefined && (obj.baseFee = message.baseFee);
    message.minGasPrice !== undefined && (obj.minGasPrice = message.minGasPrice);
    message.minGasMultiplier !== undefined && (obj.minGasMultiplier = message.minGasMultiplier);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.noBaseFee = object.noBaseFee ?? false;
    message.baseFeeChangeDenominator = object.baseFeeChangeDenominator ?? 0;
    message.elasticityMultiplier = object.elasticityMultiplier ?? 0;
    message.enableHeight = object.enableHeight !== undefined && object.enableHeight !== null ? Long.fromValue(object.enableHeight) : Long.ZERO;
    message.baseFee = object.baseFee ?? "";
    message.minGasPrice = object.minGasPrice ?? "";
    message.minGasMultiplier = object.minGasMultiplier ?? "";
    return message;
  }

};