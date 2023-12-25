//@ts-nocheck
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
export const protobufPackage = "greenfield.payment";
/** OutFlowStatus defines the status of a out flow */
export enum OutFlowStatus {
  /** OUT_FLOW_STATUS_ACTIVE - OUT_FLOW_STATUS_ACTIVE defines the active status of a out flow. */
  OUT_FLOW_STATUS_ACTIVE = 0,
  /** OUT_FLOW_STATUS_FROZEN - OUT_FLOW_STATUS_FROZEN defines the frozen status of a out flow. */
  OUT_FLOW_STATUS_FROZEN = 1,
  UNRECOGNIZED = -1,
}
export const OutFlowStatusSDKType = OutFlowStatus;
export function outFlowStatusFromJSON(object: any): OutFlowStatus {
  switch (object) {
    case 0:
    case "OUT_FLOW_STATUS_ACTIVE":
      return OutFlowStatus.OUT_FLOW_STATUS_ACTIVE;
    case 1:
    case "OUT_FLOW_STATUS_FROZEN":
      return OutFlowStatus.OUT_FLOW_STATUS_FROZEN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OutFlowStatus.UNRECOGNIZED;
  }
}
export function outFlowStatusToJSON(object: OutFlowStatus): string {
  switch (object) {
    case OutFlowStatus.OUT_FLOW_STATUS_ACTIVE:
      return "OUT_FLOW_STATUS_ACTIVE";
    case OutFlowStatus.OUT_FLOW_STATUS_FROZEN:
      return "OUT_FLOW_STATUS_FROZEN";
    case OutFlowStatus.UNRECOGNIZED:
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
  /** status */
  status: OutFlowStatus;
}
export interface OutFlowProtoMsg {
  typeUrl: "/greenfield.payment.OutFlow";
  value: Uint8Array;
}
/**
 * OutFlow defines the accumulative outflow stream rate in BNB
 * from a stream account to a Storage Provider
 */
export interface OutFlowSDKType {
  to_address: string;
  rate: string;
  status: OutFlowStatus;
}
function createBaseOutFlow(): OutFlow {
  return {
    toAddress: "",
    rate: "",
    status: 0
  };
}
export const OutFlow = {
  typeUrl: "/greenfield.payment.OutFlow",
  encode(message: OutFlow, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.toAddress !== "") {
      writer.uint32(10).string(message.toAddress);
    }
    if (message.rate !== "") {
      writer.uint32(18).string(message.rate);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OutFlow {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        case 3:
          message.status = (reader.int32() as any);
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
      rate: isSet(object.rate) ? String(object.rate) : "",
      status: isSet(object.status) ? outFlowStatusFromJSON(object.status) : -1
    };
  },
  toJSON(message: OutFlow): unknown {
    const obj: any = {};
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);
    message.rate !== undefined && (obj.rate = message.rate);
    message.status !== undefined && (obj.status = outFlowStatusToJSON(message.status));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<OutFlow>, I>>(object: I): OutFlow {
    const message = createBaseOutFlow();
    message.toAddress = object.toAddress ?? "";
    message.rate = object.rate ?? "";
    message.status = object.status ?? 0;
    return message;
  },
  fromSDK(object: OutFlowSDKType): OutFlow {
    return {
      toAddress: object?.to_address,
      rate: object?.rate,
      status: isSet(object.status) ? outFlowStatusFromJSON(object.status) : -1
    };
  },
  toSDK(message: OutFlow): OutFlowSDKType {
    const obj: any = {};
    obj.to_address = message.toAddress;
    obj.rate = message.rate;
    message.status !== undefined && (obj.status = outFlowStatusToJSON(message.status));
    return obj;
  },
  fromAmino(object: OutFlowAmino): OutFlow {
    const message = createBaseOutFlow();
    if (object.to_address !== undefined && object.to_address !== null) {
      message.toAddress = object.to_address;
    }
    if (object.rate !== undefined && object.rate !== null) {
      message.rate = object.rate;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = outFlowStatusFromJSON(object.status);
    }
    return message;
  },
  toAmino(message: OutFlow): OutFlowAmino {
    const obj: any = {};
    obj.to_address = message.toAddress;
    obj.rate = message.rate;
    obj.status = outFlowStatusToJSON(message.status);
    return obj;
  },
  fromAminoMsg(object: OutFlowAminoMsg): OutFlow {
    return OutFlow.fromAmino(object.value);
  },
  fromProtoMsg(message: OutFlowProtoMsg): OutFlow {
    return OutFlow.decode(message.value);
  },
  toProto(message: OutFlow): Uint8Array {
    return OutFlow.encode(message).finish();
  },
  toProtoMsg(message: OutFlow): OutFlowProtoMsg {
    return {
      typeUrl: "/greenfield.payment.OutFlow",
      value: OutFlow.encode(message).finish()
    };
  }
};