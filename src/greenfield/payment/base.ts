/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../helpers";
export const protobufPackage = "bnbchain.greenfield.payment";
/** StreamAccountStatus defines the status of a stream account */

export enum StreamAccountStatus {
  /** STREAM_ACCOUNT_STATUS_ACTIVE - STREAM_ACCOUNT_STATUS_ACTIVE defines the active status of a stream account. */
  STREAM_ACCOUNT_STATUS_ACTIVE = 0,

  /**
   * STREAM_ACCOUNT_STATUS_FROZEN - STREAM_ACCOUNT_STATUS_FROZEN defines the frozen status of a stream account.
   * A frozen stream account cannot be used as payment address for buckets.
   * It can be unfrozen by depositing more BNB to the stream account.
   */
  STREAM_ACCOUNT_STATUS_FROZEN = 1,
  UNRECOGNIZED = -1,
}
export const StreamAccountStatusSDKType = StreamAccountStatus;
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
 * from a stream account to a Storage Provider
 */

export interface OutFlow {
  /** stream account address who receives the flow, usually SP(service provider) */
  toAddress: string;
  /** flow rate */

  rate: string;
}
/**
 * OutFlow defines the accumulative outflow stream rate in BNB
 * from a stream account to a Storage Provider
 */

export interface OutFlowSDKType {
  to_address: string;
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
  },

  fromSDK(object: OutFlowSDKType): OutFlow {
    return {
      toAddress: object?.to_address,
      rate: object?.rate
    };
  },

  toSDK(message: OutFlow): OutFlowSDKType {
    const obj: any = {};
    obj.to_address = message.toAddress;
    obj.rate = message.rate;
    return obj;
  }

};