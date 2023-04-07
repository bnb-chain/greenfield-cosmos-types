/* eslint-disable */
import { Long, isSet, bytesFromBase64, base64FromBytes, DeepPartial, Exact } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "bnbchain.greenfield.storage";
/**
 * SourceType represents the source of resource creation, which can
 * from Greenfield native or from a cross-chain transfer from BSC
 */

export enum SourceType {
  SOURCE_TYPE_ORIGIN = 0,
  SOURCE_TYPE_BSC_CROSS_CHAIN = 1,
  SOURCE_TYPE_MIRROR_PENDING = 2,
  UNRECOGNIZED = -1,
}
export const SourceTypeSDKType = SourceType;
export function sourceTypeFromJSON(object: any): SourceType {
  switch (object) {
    case 0:
    case "SOURCE_TYPE_ORIGIN":
      return SourceType.SOURCE_TYPE_ORIGIN;

    case 1:
    case "SOURCE_TYPE_BSC_CROSS_CHAIN":
      return SourceType.SOURCE_TYPE_BSC_CROSS_CHAIN;

    case 2:
    case "SOURCE_TYPE_MIRROR_PENDING":
      return SourceType.SOURCE_TYPE_MIRROR_PENDING;

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

    case SourceType.SOURCE_TYPE_MIRROR_PENDING:
      return "SOURCE_TYPE_MIRROR_PENDING";

    case SourceType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * RedundancyType represents the redundancy algorithm type for object data,
 * which can be either multi-replica or erasure coding.
 */

export enum RedundancyType {
  REDUNDANCY_EC_TYPE = 0,
  REDUNDANCY_REPLICA_TYPE = 1,
  UNRECOGNIZED = -1,
}
export const RedundancyTypeSDKType = RedundancyType;
export function redundancyTypeFromJSON(object: any): RedundancyType {
  switch (object) {
    case 0:
    case "REDUNDANCY_EC_TYPE":
      return RedundancyType.REDUNDANCY_EC_TYPE;

    case 1:
    case "REDUNDANCY_REPLICA_TYPE":
      return RedundancyType.REDUNDANCY_REPLICA_TYPE;

    case -1:
    case "UNRECOGNIZED":
    default:
      return RedundancyType.UNRECOGNIZED;
  }
}
export function redundancyTypeToJSON(object: RedundancyType): string {
  switch (object) {
    case RedundancyType.REDUNDANCY_EC_TYPE:
      return "REDUNDANCY_EC_TYPE";

    case RedundancyType.REDUNDANCY_REPLICA_TYPE:
      return "REDUNDANCY_REPLICA_TYPE";

    case RedundancyType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * ObjectStatus represents the creation status of an object. After a user successfully
 * sends a CreateObject transaction onto the chain, the status is set to 'Created'.
 * After the Primary Service Provider successfully sends a Seal Object transaction onto
 * the chain, the status is set to 'Sealed'.
 */

export enum ObjectStatus {
  OBJECT_STATUS_CREATED = 0,
  OBJECT_STATUS_SEALED = 1,
  UNRECOGNIZED = -1,
}
export const ObjectStatusSDKType = ObjectStatus;
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
/** VisibilityType is the resources public status. */

export enum VisibilityType {
  VISIBILITY_TYPE_UNSPECIFIED = 0,
  VISIBILITY_TYPE_PUBLIC_READ = 1,
  VISIBILITY_TYPE_PRIVATE = 2,

  /** VISIBILITY_TYPE_INHERIT - If the bucket Visibility is inherit, it's finally set to private. If the object Visibility is inherit, it's the same as bucket. */
  VISIBILITY_TYPE_INHERIT = 3,
  UNRECOGNIZED = -1,
}
export const VisibilityTypeSDKType = VisibilityType;
export function visibilityTypeFromJSON(object: any): VisibilityType {
  switch (object) {
    case 0:
    case "VISIBILITY_TYPE_UNSPECIFIED":
      return VisibilityType.VISIBILITY_TYPE_UNSPECIFIED;

    case 1:
    case "VISIBILITY_TYPE_PUBLIC_READ":
      return VisibilityType.VISIBILITY_TYPE_PUBLIC_READ;

    case 2:
    case "VISIBILITY_TYPE_PRIVATE":
      return VisibilityType.VISIBILITY_TYPE_PRIVATE;

    case 3:
    case "VISIBILITY_TYPE_INHERIT":
      return VisibilityType.VISIBILITY_TYPE_INHERIT;

    case -1:
    case "UNRECOGNIZED":
    default:
      return VisibilityType.UNRECOGNIZED;
  }
}
export function visibilityTypeToJSON(object: VisibilityType): string {
  switch (object) {
    case VisibilityType.VISIBILITY_TYPE_UNSPECIFIED:
      return "VISIBILITY_TYPE_UNSPECIFIED";

    case VisibilityType.VISIBILITY_TYPE_PUBLIC_READ:
      return "VISIBILITY_TYPE_PUBLIC_READ";

    case VisibilityType.VISIBILITY_TYPE_PRIVATE:
      return "VISIBILITY_TYPE_PRIVATE";

    case VisibilityType.VISIBILITY_TYPE_INHERIT:
      return "VISIBILITY_TYPE_INHERIT";

    case VisibilityType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Approval is the signature information returned by the Primary Storage Provider (SP) to the user
 * after allowing them to create a bucket or object, which is then used for verification on the chain
 * to ensure agreement between the Primary SP and the user."
 */

export interface Approval {
  /** expired_height is the block height at which the signature expires. */
  expiredHeight: Long;
  /** The signature needs to conform to the EIP 712 specification. */

  sig: Uint8Array;
}
/**
 * Approval is the signature information returned by the Primary Storage Provider (SP) to the user
 * after allowing them to create a bucket or object, which is then used for verification on the chain
 * to ensure agreement between the Primary SP and the user."
 */

export interface ApprovalSDKType {
  expired_height: Long;
  sig: Uint8Array;
}
/**
 * SecondarySpSignDoc used to generate seal signature of secondary SP
 * If the secondary SP only signs the checksum to declare the object pieces are saved,
 * it might be reused by the primary SP to fake it's declaration.
 * Then the primary SP can challenge and slash the secondary SP.
 * So the id of the object is needed to prevent this.
 */

export interface SecondarySpSignDoc {
  spAddress: string;
  objectId: string;
  checksum: Uint8Array;
}
/**
 * SecondarySpSignDoc used to generate seal signature of secondary SP
 * If the secondary SP only signs the checksum to declare the object pieces are saved,
 * it might be reused by the primary SP to fake it's declaration.
 * Then the primary SP can challenge and slash the secondary SP.
 * So the id of the object is needed to prevent this.
 */

export interface SecondarySpSignDocSDKType {
  sp_address: string;
  object_id: string;
  checksum: Uint8Array;
}

function createBaseApproval(): Approval {
  return {
    expiredHeight: Long.UZERO,
    sig: new Uint8Array()
  };
}

export const Approval = {
  encode(message: Approval, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.expiredHeight.isZero()) {
      writer.uint32(8).uint64(message.expiredHeight);
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
          message.expiredHeight = (reader.uint64() as Long);
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
      expiredHeight: isSet(object.expiredHeight) ? Long.fromValue(object.expiredHeight) : Long.UZERO,
      sig: isSet(object.sig) ? bytesFromBase64(object.sig) : new Uint8Array()
    };
  },

  toJSON(message: Approval): unknown {
    const obj: any = {};
    message.expiredHeight !== undefined && (obj.expiredHeight = (message.expiredHeight || Long.UZERO).toString());
    message.sig !== undefined && (obj.sig = base64FromBytes(message.sig !== undefined ? message.sig : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Approval>, I>>(object: I): Approval {
    const message = createBaseApproval();
    message.expiredHeight = object.expiredHeight !== undefined && object.expiredHeight !== null ? Long.fromValue(object.expiredHeight) : Long.UZERO;
    message.sig = object.sig ?? new Uint8Array();
    return message;
  },

  fromSDK(object: ApprovalSDKType): Approval {
    return {
      expiredHeight: object?.expired_height,
      sig: object?.sig
    };
  },

  toSDK(message: Approval): ApprovalSDKType {
    const obj: any = {};
    obj.expired_height = message.expiredHeight;
    obj.sig = message.sig;
    return obj;
  }

};

function createBaseSecondarySpSignDoc(): SecondarySpSignDoc {
  return {
    spAddress: "",
    objectId: "",
    checksum: new Uint8Array()
  };
}

export const SecondarySpSignDoc = {
  encode(message: SecondarySpSignDoc, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spAddress !== "") {
      writer.uint32(10).string(message.spAddress);
    }

    if (message.objectId !== "") {
      writer.uint32(18).string(message.objectId);
    }

    if (message.checksum.length !== 0) {
      writer.uint32(26).bytes(message.checksum);
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
          message.spAddress = reader.string();
          break;

        case 2:
          message.objectId = reader.string();
          break;

        case 3:
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
      spAddress: isSet(object.spAddress) ? String(object.spAddress) : "",
      objectId: isSet(object.objectId) ? String(object.objectId) : "",
      checksum: isSet(object.checksum) ? bytesFromBase64(object.checksum) : new Uint8Array()
    };
  },

  toJSON(message: SecondarySpSignDoc): unknown {
    const obj: any = {};
    message.spAddress !== undefined && (obj.spAddress = message.spAddress);
    message.objectId !== undefined && (obj.objectId = message.objectId);
    message.checksum !== undefined && (obj.checksum = base64FromBytes(message.checksum !== undefined ? message.checksum : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SecondarySpSignDoc>, I>>(object: I): SecondarySpSignDoc {
    const message = createBaseSecondarySpSignDoc();
    message.spAddress = object.spAddress ?? "";
    message.objectId = object.objectId ?? "";
    message.checksum = object.checksum ?? new Uint8Array();
    return message;
  },

  fromSDK(object: SecondarySpSignDocSDKType): SecondarySpSignDoc {
    return {
      spAddress: object?.sp_address,
      objectId: object?.object_id,
      checksum: object?.checksum
    };
  },

  toSDK(message: SecondarySpSignDoc): SecondarySpSignDocSDKType {
    const obj: any = {};
    obj.sp_address = message.spAddress;
    obj.object_id = message.objectId;
    obj.checksum = message.checksum;
    return obj;
  }

};