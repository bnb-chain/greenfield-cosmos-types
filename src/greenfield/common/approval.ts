//@ts-nocheck
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial, Exact } from "../../helpers";
export const protobufPackage = "greenfield.common";
/**
 * Approval is the signature information returned by the Primary Storage Provider (SP) to the user
 * after allowing them to create a bucket or object, which is then used for verification on the chain
 * to ensure agreement between the Primary SP and the user.
 */
export interface Approval {
  /** expired_height is the block height at which the signature expires. */
  expiredHeight: bigint;
  /** global_virtual_group_family_id is the family id that stored. */
  globalVirtualGroupFamilyId: number;
  /** The signature needs to conform to the EIP 712 specification. */
  sig: Uint8Array;
}
export interface ApprovalProtoMsg {
  typeUrl: "/greenfield.common.Approval";
  value: Uint8Array;
}
/**
 * Approval is the signature information returned by the Primary Storage Provider (SP) to the user
 * after allowing them to create a bucket or object, which is then used for verification on the chain
 * to ensure agreement between the Primary SP and the user.
 */
export interface ApprovalSDKType {
  expired_height: bigint;
  global_virtual_group_family_id: number;
  sig: Uint8Array;
}
function createBaseApproval(): Approval {
  return {
    expiredHeight: BigInt(0),
    globalVirtualGroupFamilyId: 0,
    sig: new Uint8Array()
  };
}
export const Approval = {
  typeUrl: "/greenfield.common.Approval",
  encode(message: Approval, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.expiredHeight !== BigInt(0)) {
      writer.uint32(8).uint64(message.expiredHeight);
    }
    if (message.globalVirtualGroupFamilyId !== 0) {
      writer.uint32(16).uint32(message.globalVirtualGroupFamilyId);
    }
    if (message.sig.length !== 0) {
      writer.uint32(26).bytes(message.sig);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Approval {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApproval();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.expiredHeight = reader.uint64();
          break;
        case 2:
          message.globalVirtualGroupFamilyId = reader.uint32();
          break;
        case 3:
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
      expiredHeight: isSet(object.expiredHeight) ? BigInt(object.expiredHeight.toString()) : BigInt(0),
      globalVirtualGroupFamilyId: isSet(object.globalVirtualGroupFamilyId) ? Number(object.globalVirtualGroupFamilyId) : 0,
      sig: isSet(object.sig) ? bytesFromBase64(object.sig) : new Uint8Array()
    };
  },
  toJSON(message: Approval): unknown {
    const obj: any = {};
    message.expiredHeight !== undefined && (obj.expiredHeight = (message.expiredHeight || BigInt(0)).toString());
    message.globalVirtualGroupFamilyId !== undefined && (obj.globalVirtualGroupFamilyId = Math.round(message.globalVirtualGroupFamilyId));
    message.sig !== undefined && (obj.sig = base64FromBytes(message.sig !== undefined ? message.sig : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Approval>, I>>(object: I): Approval {
    const message = createBaseApproval();
    message.expiredHeight = object.expiredHeight !== undefined && object.expiredHeight !== null ? BigInt(object.expiredHeight.toString()) : BigInt(0);
    message.globalVirtualGroupFamilyId = object.globalVirtualGroupFamilyId ?? 0;
    message.sig = object.sig ?? new Uint8Array();
    return message;
  },
  fromSDK(object: ApprovalSDKType): Approval {
    return {
      expiredHeight: object?.expired_height,
      globalVirtualGroupFamilyId: object?.global_virtual_group_family_id,
      sig: object?.sig
    };
  },
  toSDK(message: Approval): ApprovalSDKType {
    const obj: any = {};
    obj.expired_height = message.expiredHeight;
    obj.global_virtual_group_family_id = message.globalVirtualGroupFamilyId;
    obj.sig = message.sig;
    return obj;
  },
  fromAmino(object: ApprovalAmino): Approval {
    const message = createBaseApproval();
    if (object.expired_height !== undefined && object.expired_height !== null) {
      message.expiredHeight = BigInt(object.expired_height);
    }
    if (object.global_virtual_group_family_id !== undefined && object.global_virtual_group_family_id !== null) {
      message.globalVirtualGroupFamilyId = object.global_virtual_group_family_id;
    }
    if (object.sig !== undefined && object.sig !== null) {
      message.sig = bytesFromBase64(object.sig);
    }
    return message;
  },
  toAmino(message: Approval): ApprovalAmino {
    const obj: any = {};
    obj.expired_height = message.expiredHeight ? message.expiredHeight.toString() : undefined;
    obj.global_virtual_group_family_id = message.globalVirtualGroupFamilyId;
    obj.sig = message.sig ? base64FromBytes(message.sig) : undefined;
    return obj;
  },
  fromAminoMsg(object: ApprovalAminoMsg): Approval {
    return Approval.fromAmino(object.value);
  },
  fromProtoMsg(message: ApprovalProtoMsg): Approval {
    return Approval.decode(message.value);
  },
  toProto(message: Approval): Uint8Array {
    return Approval.encode(message).finish();
  },
  toProtoMsg(message: Approval): ApprovalProtoMsg {
    return {
      typeUrl: "/greenfield.common.Approval",
      value: Approval.encode(message).finish()
    };
  }
};