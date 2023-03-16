/* eslint-disable */
import { Long, isSet, bytesFromBase64, base64FromBytes, DeepPartial, Exact } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "bnbchain.greenfield.storage";
export enum SourceType {
  SOURCE_TYPE_ORIGIN = 0,
  SOURCE_TYPE_BSC_CROSS_CHAIN = 1,
  UNRECOGNIZED = -1,
}
export function sourceTypeFromJSON(object: any): SourceType {
  switch (object) {
    case 0:
    case "SOURCE_TYPE_ORIGIN":
      return SourceType.SOURCE_TYPE_ORIGIN;

    case 1:
    case "SOURCE_TYPE_BSC_CROSS_CHAIN":
      return SourceType.SOURCE_TYPE_BSC_CROSS_CHAIN;

    case -1:
    case "UNRECOGNIZED":
    default:
      return SourceType.UNRECOGNIZED;
  }
}
export function sourceTypeToJSON(object: SourceType): string {
  switch (object) {
    case SourceType.SOURCE_TYPE_ORIGIN:
      return "SOURCE_TYPE_ORIGIN";

    case SourceType.SOURCE_TYPE_BSC_CROSS_CHAIN:
      return "SOURCE_TYPE_BSC_CROSS_CHAIN";

    case SourceType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum RedundancyType {
  REDUNDANCY_REPLICA_TYPE = 0,
  REDUNDANCY_EC_TYPE = 1,
  UNRECOGNIZED = -1,
}
export function redundancyTypeFromJSON(object: any): RedundancyType {
  switch (object) {
    case 0:
    case "REDUNDANCY_REPLICA_TYPE":
      return RedundancyType.REDUNDANCY_REPLICA_TYPE;

    case 1:
    case "REDUNDANCY_EC_TYPE":
      return RedundancyType.REDUNDANCY_EC_TYPE;

    case -1:
    case "UNRECOGNIZED":
    default:
      return RedundancyType.UNRECOGNIZED;
  }
}
export function redundancyTypeToJSON(object: RedundancyType): string {
  switch (object) {
    case RedundancyType.REDUNDANCY_REPLICA_TYPE:
      return "REDUNDANCY_REPLICA_TYPE";

    case RedundancyType.REDUNDANCY_EC_TYPE:
      return "REDUNDANCY_EC_TYPE";

    case RedundancyType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum ObjectStatus {
  OBJECT_STATUS_CREATED = 0,
  OBJECT_STATUS_SEALED = 1,
  UNRECOGNIZED = -1,
}
export function objectStatusFromJSON(object: any): ObjectStatus {
  switch (object) {
    case 0:
    case "OBJECT_STATUS_CREATED":
      return ObjectStatus.OBJECT_STATUS_CREATED;

    case 1:
    case "OBJECT_STATUS_SEALED":
      return ObjectStatus.OBJECT_STATUS_SEALED;

    case -1:
    case "UNRECOGNIZED":
    default:
      return ObjectStatus.UNRECOGNIZED;
  }
}
export function objectStatusToJSON(object: ObjectStatus): string {
  switch (object) {
    case ObjectStatus.OBJECT_STATUS_CREATED:
      return "OBJECT_STATUS_CREATED";

    case ObjectStatus.OBJECT_STATUS_SEALED:
      return "OBJECT_STATUS_SEALED";

    case ObjectStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Approval {
  expired_height: Long;
  sig: Uint8Array;
}
/** SecondarySpSignDoc used to generate seal signature of secondary SP */

export interface SecondarySpSignDoc {
  sp_address: string;
  checksum: Uint8Array;
}

function createBaseApproval(): Approval {
  return {
    expired_height: Long.UZERO,
    sig: new Uint8Array()
  };
}

export const Approval = {
  encode(message: Approval, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.expired_height.isZero()) {
      writer.uint32(8).uint64(message.expired_height);
    }

    if (message.sig.length !== 0) {
      writer.uint32(18).bytes(message.sig);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Approval {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApproval();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.expired_height = (reader.uint64() as Long);
          break;

        case 2:
          message.sig = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Approval {
    return {
      expired_height: isSet(object.expired_height) ? Long.fromValue(object.expired_height) : Long.UZERO,
      sig: isSet(object.sig) ? bytesFromBase64(object.sig) : new Uint8Array()
    };
  },

  toJSON(message: Approval): unknown {
    const obj: any = {};
    message.expired_height !== undefined && (obj.expired_height = (message.expired_height || Long.UZERO).toString());
    message.sig !== undefined && (obj.sig = base64FromBytes(message.sig !== undefined ? message.sig : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Approval>, I>>(object: I): Approval {
    const message = createBaseApproval();
    message.expired_height = object.expired_height !== undefined && object.expired_height !== null ? Long.fromValue(object.expired_height) : Long.UZERO;
    message.sig = object.sig ?? new Uint8Array();
    return message;
  }

};

function createBaseSecondarySpSignDoc(): SecondarySpSignDoc {
  return {
    sp_address: "",
    checksum: new Uint8Array()
  };
}

export const SecondarySpSignDoc = {
  encode(message: SecondarySpSignDoc, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sp_address !== "") {
      writer.uint32(10).string(message.sp_address);
    }

    if (message.checksum.length !== 0) {
      writer.uint32(18).bytes(message.checksum);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SecondarySpSignDoc {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSecondarySpSignDoc();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sp_address = reader.string();
          break;

        case 2:
          message.checksum = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SecondarySpSignDoc {
    return {
      sp_address: isSet(object.sp_address) ? String(object.sp_address) : "",
      checksum: isSet(object.checksum) ? bytesFromBase64(object.checksum) : new Uint8Array()
    };
  },

  toJSON(message: SecondarySpSignDoc): unknown {
    const obj: any = {};
    message.sp_address !== undefined && (obj.sp_address = message.sp_address);
    message.checksum !== undefined && (obj.checksum = base64FromBytes(message.checksum !== undefined ? message.checksum : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SecondarySpSignDoc>, I>>(object: I): SecondarySpSignDoc {
    const message = createBaseSecondarySpSignDoc();
    message.sp_address = object.sp_address ?? "";
    message.checksum = object.checksum ?? new Uint8Array();
    return message;
  }

};