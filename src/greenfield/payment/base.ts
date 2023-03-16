/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../helpers";
export const protobufPackage = "bnbchain.greenfield.payment";
export enum StreamAccountStatus {
  STREAM_ACCOUNT_STATUS_ACTIVE = 0,
  STREAM_ACCOUNT_STATUS_FROZEN = 1,
  UNRECOGNIZED = -1,
}
export function streamAccountStatusFromJSON(object: any): StreamAccountStatus {
  switch (object) {
    case 0:
    case "STREAM_ACCOUNT_STATUS_ACTIVE":
      return StreamAccountStatus.STREAM_ACCOUNT_STATUS_ACTIVE;

    case 1:
    case "STREAM_ACCOUNT_STATUS_FROZEN":
      return StreamAccountStatus.STREAM_ACCOUNT_STATUS_FROZEN;

    case -1:
    case "UNRECOGNIZED":
    default:
      return StreamAccountStatus.UNRECOGNIZED;
  }
}
export function streamAccountStatusToJSON(object: StreamAccountStatus): string {
  switch (object) {
    case StreamAccountStatus.STREAM_ACCOUNT_STATUS_ACTIVE:
      return "STREAM_ACCOUNT_STATUS_ACTIVE";

    case StreamAccountStatus.STREAM_ACCOUNT_STATUS_FROZEN:
      return "STREAM_ACCOUNT_STATUS_FROZEN";

    case StreamAccountStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * OutFlow defines the accumulative outflow stream rate in BNB
 * from a stream account or a bucket to a SP
 */

export interface OutFlow {
  /** stream account address who receives the flow, usually SP(service provider) */
  toAddress: string;
  /** flow rate */

  rate: string;
}

function createBaseOutFlow(): OutFlow {
  return {
    toAddress: "",
    rate: ""
  };
}

export const OutFlow = {
  encode(message: OutFlow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.toAddress !== "") {
      writer.uint32(10).string(message.toAddress);
    }

    if (message.rate !== "") {
      writer.uint32(18).string(message.rate);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OutFlow {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOutFlow();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.toAddress = reader.string();
          break;

        case 2:
          message.rate = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): OutFlow {
    return {
      toAddress: isSet(object.toAddress) ? String(object.toAddress) : "",
      rate: isSet(object.rate) ? String(object.rate) : ""
    };
  },

  toJSON(message: OutFlow): unknown {
    const obj: any = {};
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);
    message.rate !== undefined && (obj.rate = message.rate);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OutFlow>, I>>(object: I): OutFlow {
    const message = createBaseOutFlow();
    message.toAddress = object.toAddress ?? "";
    message.rate = object.rate ?? "";
    return message;
  }

};