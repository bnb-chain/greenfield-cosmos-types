/* eslint-disable */
import { ReadPacket, OutFlowInUSD, readPacketFromJSON, readPacketToJSON } from "./base";
import { Long, isSet, DeepPartial, Exact } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "bnbchain.greenfield.payment";
export interface MockBucketMeta {
  bucketName: string;
  owner: string;
  readPaymentAccount: string;
  storePaymentAccount: string;
  spAddress: string;
  /** mock id with string instead of uint64 to avoid distribute id */

  id: string;
  /** for payment */

  readPacket: ReadPacket;
  priceTime: Long;
  outFlowsInUSD: OutFlowInUSD[];
}

function createBaseMockBucketMeta(): MockBucketMeta {
  return {
    bucketName: "",
    owner: "",
    readPaymentAccount: "",
    storePaymentAccount: "",
    spAddress: "",
    id: "",
    readPacket: 0,
    priceTime: Long.ZERO,
    outFlowsInUSD: []
  };
}

export const MockBucketMeta = {
  encode(message: MockBucketMeta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bucketName !== "") {
      writer.uint32(10).string(message.bucketName);
    }

    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }

    if (message.readPaymentAccount !== "") {
      writer.uint32(26).string(message.readPaymentAccount);
    }

    if (message.storePaymentAccount !== "") {
      writer.uint32(34).string(message.storePaymentAccount);
    }

    if (message.spAddress !== "") {
      writer.uint32(42).string(message.spAddress);
    }

    if (message.id !== "") {
      writer.uint32(50).string(message.id);
    }

    if (message.readPacket !== 0) {
      writer.uint32(56).int32(message.readPacket);
    }

    if (!message.priceTime.isZero()) {
      writer.uint32(64).int64(message.priceTime);
    }

    for (const v of message.outFlowsInUSD) {
      OutFlowInUSD.encode(v!, writer.uint32(74).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MockBucketMeta {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMockBucketMeta();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bucketName = reader.string();
          break;

        case 2:
          message.owner = reader.string();
          break;

        case 3:
          message.readPaymentAccount = reader.string();
          break;

        case 4:
          message.storePaymentAccount = reader.string();
          break;

        case 5:
          message.spAddress = reader.string();
          break;

        case 6:
          message.id = reader.string();
          break;

        case 7:
          message.readPacket = (reader.int32() as any);
          break;

        case 8:
          message.priceTime = (reader.int64() as Long);
          break;

        case 9:
          message.outFlowsInUSD.push(OutFlowInUSD.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MockBucketMeta {
    return {
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      readPaymentAccount: isSet(object.readPaymentAccount) ? String(object.readPaymentAccount) : "",
      storePaymentAccount: isSet(object.storePaymentAccount) ? String(object.storePaymentAccount) : "",
      spAddress: isSet(object.spAddress) ? String(object.spAddress) : "",
      id: isSet(object.id) ? String(object.id) : "",
      readPacket: isSet(object.readPacket) ? readPacketFromJSON(object.readPacket) : 0,
      priceTime: isSet(object.priceTime) ? Long.fromValue(object.priceTime) : Long.ZERO,
      outFlowsInUSD: Array.isArray(object?.outFlowsInUSD) ? object.outFlowsInUSD.map((e: any) => OutFlowInUSD.fromJSON(e)) : []
    };
  },

  toJSON(message: MockBucketMeta): unknown {
    const obj: any = {};
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.owner !== undefined && (obj.owner = message.owner);
    message.readPaymentAccount !== undefined && (obj.readPaymentAccount = message.readPaymentAccount);
    message.storePaymentAccount !== undefined && (obj.storePaymentAccount = message.storePaymentAccount);
    message.spAddress !== undefined && (obj.spAddress = message.spAddress);
    message.id !== undefined && (obj.id = message.id);
    message.readPacket !== undefined && (obj.readPacket = readPacketToJSON(message.readPacket));
    message.priceTime !== undefined && (obj.priceTime = (message.priceTime || Long.ZERO).toString());

    if (message.outFlowsInUSD) {
      obj.outFlowsInUSD = message.outFlowsInUSD.map(e => e ? OutFlowInUSD.toJSON(e) : undefined);
    } else {
      obj.outFlowsInUSD = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MockBucketMeta>, I>>(object: I): MockBucketMeta {
    const message = createBaseMockBucketMeta();
    message.bucketName = object.bucketName ?? "";
    message.owner = object.owner ?? "";
    message.readPaymentAccount = object.readPaymentAccount ?? "";
    message.storePaymentAccount = object.storePaymentAccount ?? "";
    message.spAddress = object.spAddress ?? "";
    message.id = object.id ?? "";
    message.readPacket = object.readPacket ?? 0;
    message.priceTime = object.priceTime !== undefined && object.priceTime !== null ? Long.fromValue(object.priceTime) : Long.ZERO;
    message.outFlowsInUSD = object.outFlowsInUSD?.map(e => OutFlowInUSD.fromPartial(e)) || [];
    return message;
  }

};