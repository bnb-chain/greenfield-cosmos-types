/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../helpers";
export const protobufPackage = "bnbchain.greenfield.payment";
/** ReadPacket defines the read packet type */

export enum ReadPacket {
  READ_PACKET_FREE = 0,
  READ_PACKET_1GB = 1,
  READ_PACKET_10GB = 2,
  UNRECOGNIZED = -1,
}
export function readPacketFromJSON(object: any): ReadPacket {
  switch (object) {
    case 0:
    case "READ_PACKET_FREE":
      return ReadPacket.READ_PACKET_FREE;

    case 1:
    case "READ_PACKET_1GB":
      return ReadPacket.READ_PACKET_1GB;

    case 2:
    case "READ_PACKET_10GB":
      return ReadPacket.READ_PACKET_10GB;

    case -1:
    case "UNRECOGNIZED":
    default:
      return ReadPacket.UNRECOGNIZED;
  }
}
export function readPacketToJSON(object: ReadPacket): string {
  switch (object) {
    case ReadPacket.READ_PACKET_FREE:
      return "READ_PACKET_FREE";

    case ReadPacket.READ_PACKET_1GB:
      return "READ_PACKET_1GB";

    case ReadPacket.READ_PACKET_10GB:
      return "READ_PACKET_10GB";

    case ReadPacket.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * OutFlowInUSD defines the accumulative outflow stream rate in USD
 * from a stream account or a bucket to a SP
 */

export interface OutFlowInUSD {
  /** SP(service provider) stream account address */
  spAddress: string;
  /** flow rate in USD */

  rate: string;
}

function createBaseOutFlowInUSD(): OutFlowInUSD {
  return {
    spAddress: "",
    rate: ""
  };
}

export const OutFlowInUSD = {
  encode(message: OutFlowInUSD, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spAddress !== "") {
      writer.uint32(10).string(message.spAddress);
    }

    if (message.rate !== "") {
      writer.uint32(18).string(message.rate);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OutFlowInUSD {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOutFlowInUSD();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.spAddress = reader.string();
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

  fromJSON(object: any): OutFlowInUSD {
    return {
      spAddress: isSet(object.spAddress) ? String(object.spAddress) : "",
      rate: isSet(object.rate) ? String(object.rate) : ""
    };
  },

  toJSON(message: OutFlowInUSD): unknown {
    const obj: any = {};
    message.spAddress !== undefined && (obj.spAddress = message.spAddress);
    message.rate !== undefined && (obj.rate = message.rate);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OutFlowInUSD>, I>>(object: I): OutFlowInUSD {
    const message = createBaseOutFlowInUSD();
    message.spAddress = object.spAddress ?? "";
    message.rate = object.rate ?? "";
    return message;
  }

};