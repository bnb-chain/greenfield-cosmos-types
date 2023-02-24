/* eslint-disable */
import { Long, isSet, DeepPartial, Exact, bytesFromBase64, base64FromBytes } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "bnbchain.greenfield.payment";
export enum RedundancyType {
  REDUNDANCY_REPLICA_TYPE = 0,
  REDUNDANCY_EC_TYPE = 1,
  REDUNDANCY_INLINE_TYPE = 2,
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

    case 2:
    case "REDUNDANCY_INLINE_TYPE":
      return RedundancyType.REDUNDANCY_INLINE_TYPE;

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

    case RedundancyType.REDUNDANCY_INLINE_TYPE:
      return "REDUNDANCY_INLINE_TYPE";

    case RedundancyType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum ObjectState {
  OBJECT_STATE_INIT = 0,
  OBJECT_STATE_IN_SERVICE = 1,
  OBJECT_STATE_IN_SHIFTING = 2,
  UNRECOGNIZED = -1,
}
export function objectStateFromJSON(object: any): ObjectState {
  switch (object) {
    case 0:
    case "OBJECT_STATE_INIT":
      return ObjectState.OBJECT_STATE_INIT;

    case 1:
    case "OBJECT_STATE_IN_SERVICE":
      return ObjectState.OBJECT_STATE_IN_SERVICE;

    case 2:
    case "OBJECT_STATE_IN_SHIFTING":
      return ObjectState.OBJECT_STATE_IN_SHIFTING;

    case -1:
    case "UNRECOGNIZED":
    default:
      return ObjectState.UNRECOGNIZED;
  }
}
export function objectStateToJSON(object: ObjectState): string {
  switch (object) {
    case ObjectState.OBJECT_STATE_INIT:
      return "OBJECT_STATE_INIT";

    case ObjectState.OBJECT_STATE_IN_SERVICE:
      return "OBJECT_STATE_IN_SERVICE";

    case ObjectState.OBJECT_STATE_IN_SHIFTING:
      return "OBJECT_STATE_IN_SHIFTING";

    case ObjectState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface MockObjectInfo {
  bucketName: string;
  objectName: string;
  owner: string;
  id: string;
  size: Long;
  isPrivate: boolean;
  contentType: string;
  createAt: Long;
  objectState: ObjectState;
  redundancyType: RedundancyType;
  hash: string;
  primarySpChecksum: string;
  secondarySPs: StorageProviderInfo[];
  /** payment */

  lockedBalance: string;
}
export interface StorageProviderInfo {
  id: string;
  checksum: Uint8Array;
}

function createBaseMockObjectInfo(): MockObjectInfo {
  return {
    bucketName: "",
    objectName: "",
    owner: "",
    id: "",
    size: Long.UZERO,
    isPrivate: false,
    contentType: "",
    createAt: Long.UZERO,
    objectState: 0,
    redundancyType: 0,
    hash: "",
    primarySpChecksum: "",
    secondarySPs: [],
    lockedBalance: ""
  };
}

export const MockObjectInfo = {
  encode(message: MockObjectInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bucketName !== "") {
      writer.uint32(10).string(message.bucketName);
    }

    if (message.objectName !== "") {
      writer.uint32(18).string(message.objectName);
    }

    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }

    if (message.id !== "") {
      writer.uint32(34).string(message.id);
    }

    if (!message.size.isZero()) {
      writer.uint32(40).uint64(message.size);
    }

    if (message.isPrivate === true) {
      writer.uint32(48).bool(message.isPrivate);
    }

    if (message.contentType !== "") {
      writer.uint32(58).string(message.contentType);
    }

    if (!message.createAt.isZero()) {
      writer.uint32(64).uint64(message.createAt);
    }

    if (message.objectState !== 0) {
      writer.uint32(72).int32(message.objectState);
    }

    if (message.redundancyType !== 0) {
      writer.uint32(80).int32(message.redundancyType);
    }

    if (message.hash !== "") {
      writer.uint32(98).string(message.hash);
    }

    if (message.primarySpChecksum !== "") {
      writer.uint32(106).string(message.primarySpChecksum);
    }

    for (const v of message.secondarySPs) {
      StorageProviderInfo.encode(v!, writer.uint32(162).fork()).ldelim();
    }

    if (message.lockedBalance !== "") {
      writer.uint32(242).string(message.lockedBalance);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MockObjectInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMockObjectInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bucketName = reader.string();
          break;

        case 2:
          message.objectName = reader.string();
          break;

        case 3:
          message.owner = reader.string();
          break;

        case 4:
          message.id = reader.string();
          break;

        case 5:
          message.size = (reader.uint64() as Long);
          break;

        case 6:
          message.isPrivate = reader.bool();
          break;

        case 7:
          message.contentType = reader.string();
          break;

        case 8:
          message.createAt = (reader.uint64() as Long);
          break;

        case 9:
          message.objectState = (reader.int32() as any);
          break;

        case 10:
          message.redundancyType = (reader.int32() as any);
          break;

        case 12:
          message.hash = reader.string();
          break;

        case 13:
          message.primarySpChecksum = reader.string();
          break;

        case 20:
          message.secondarySPs.push(StorageProviderInfo.decode(reader, reader.uint32()));
          break;

        case 30:
          message.lockedBalance = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MockObjectInfo {
    return {
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      objectName: isSet(object.objectName) ? String(object.objectName) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      id: isSet(object.id) ? String(object.id) : "",
      size: isSet(object.size) ? Long.fromValue(object.size) : Long.UZERO,
      isPrivate: isSet(object.isPrivate) ? Boolean(object.isPrivate) : false,
      contentType: isSet(object.contentType) ? String(object.contentType) : "",
      createAt: isSet(object.createAt) ? Long.fromValue(object.createAt) : Long.UZERO,
      objectState: isSet(object.objectState) ? objectStateFromJSON(object.objectState) : 0,
      redundancyType: isSet(object.redundancyType) ? redundancyTypeFromJSON(object.redundancyType) : 0,
      hash: isSet(object.hash) ? String(object.hash) : "",
      primarySpChecksum: isSet(object.primarySpChecksum) ? String(object.primarySpChecksum) : "",
      secondarySPs: Array.isArray(object?.secondarySPs) ? object.secondarySPs.map((e: any) => StorageProviderInfo.fromJSON(e)) : [],
      lockedBalance: isSet(object.lockedBalance) ? String(object.lockedBalance) : ""
    };
  },

  toJSON(message: MockObjectInfo): unknown {
    const obj: any = {};
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.objectName !== undefined && (obj.objectName = message.objectName);
    message.owner !== undefined && (obj.owner = message.owner);
    message.id !== undefined && (obj.id = message.id);
    message.size !== undefined && (obj.size = (message.size || Long.UZERO).toString());
    message.isPrivate !== undefined && (obj.isPrivate = message.isPrivate);
    message.contentType !== undefined && (obj.contentType = message.contentType);
    message.createAt !== undefined && (obj.createAt = (message.createAt || Long.UZERO).toString());
    message.objectState !== undefined && (obj.objectState = objectStateToJSON(message.objectState));
    message.redundancyType !== undefined && (obj.redundancyType = redundancyTypeToJSON(message.redundancyType));
    message.hash !== undefined && (obj.hash = message.hash);
    message.primarySpChecksum !== undefined && (obj.primarySpChecksum = message.primarySpChecksum);

    if (message.secondarySPs) {
      obj.secondarySPs = message.secondarySPs.map(e => e ? StorageProviderInfo.toJSON(e) : undefined);
    } else {
      obj.secondarySPs = [];
    }

    message.lockedBalance !== undefined && (obj.lockedBalance = message.lockedBalance);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MockObjectInfo>, I>>(object: I): MockObjectInfo {
    const message = createBaseMockObjectInfo();
    message.bucketName = object.bucketName ?? "";
    message.objectName = object.objectName ?? "";
    message.owner = object.owner ?? "";
    message.id = object.id ?? "";
    message.size = object.size !== undefined && object.size !== null ? Long.fromValue(object.size) : Long.UZERO;
    message.isPrivate = object.isPrivate ?? false;
    message.contentType = object.contentType ?? "";
    message.createAt = object.createAt !== undefined && object.createAt !== null ? Long.fromValue(object.createAt) : Long.UZERO;
    message.objectState = object.objectState ?? 0;
    message.redundancyType = object.redundancyType ?? 0;
    message.hash = object.hash ?? "";
    message.primarySpChecksum = object.primarySpChecksum ?? "";
    message.secondarySPs = object.secondarySPs?.map(e => StorageProviderInfo.fromPartial(e)) || [];
    message.lockedBalance = object.lockedBalance ?? "";
    return message;
  }

};

function createBaseStorageProviderInfo(): StorageProviderInfo {
  return {
    id: "",
    checksum: new Uint8Array()
  };
}

export const StorageProviderInfo = {
  encode(message: StorageProviderInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.checksum.length !== 0) {
      writer.uint32(18).bytes(message.checksum);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StorageProviderInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStorageProviderInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
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

  fromJSON(object: any): StorageProviderInfo {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      checksum: isSet(object.checksum) ? bytesFromBase64(object.checksum) : new Uint8Array()
    };
  },

  toJSON(message: StorageProviderInfo): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.checksum !== undefined && (obj.checksum = base64FromBytes(message.checksum !== undefined ? message.checksum : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StorageProviderInfo>, I>>(object: I): StorageProviderInfo {
    const message = createBaseStorageProviderInfo();
    message.id = object.id ?? "";
    message.checksum = object.checksum ?? new Uint8Array();
    return message;
  }

};