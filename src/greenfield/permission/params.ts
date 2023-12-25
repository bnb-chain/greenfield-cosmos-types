//@ts-nocheck
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
export const protobufPackage = "greenfield.permission";
/** Params defines the parameters for the module. */
export interface Params {
  /** maximum_statements_num defines the maximum number of statements allowed in a policy */
  maximumStatementsNum: bigint;
  /**
   * maximum_group_num used to set the upper limit on the number of groups to which a resource can grant access permissions.
   * By placing a cap on the number of group permissions, permission control policies can be made more robust and better
   * enforced, thereby reducing the chances of DDos and other security incidents.
   */
  maximumGroupNum: bigint;
  /** the maximum iteration number of `RemoveExpiredPolicies` loops in endblocker */
  maximumRemoveExpiredPoliciesIteration: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/greenfield.permission.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  maximum_statements_num: bigint;
  maximum_group_num: bigint;
  maximum_remove_expired_policies_iteration: bigint;
}
function createBaseParams(): Params {
  return {
    maximumStatementsNum: BigInt(0),
    maximumGroupNum: BigInt(0),
    maximumRemoveExpiredPoliciesIteration: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/greenfield.permission.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maximumStatementsNum !== BigInt(0)) {
      writer.uint32(8).uint64(message.maximumStatementsNum);
    }
    if (message.maximumGroupNum !== BigInt(0)) {
      writer.uint32(16).uint64(message.maximumGroupNum);
    }
    if (message.maximumRemoveExpiredPoliciesIteration !== BigInt(0)) {
      writer.uint32(24).uint64(message.maximumRemoveExpiredPoliciesIteration);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maximumStatementsNum = reader.uint64();
          break;
        case 2:
          message.maximumGroupNum = reader.uint64();
          break;
        case 3:
          message.maximumRemoveExpiredPoliciesIteration = reader.uint64();
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
      maximumStatementsNum: isSet(object.maximumStatementsNum) ? BigInt(object.maximumStatementsNum.toString()) : BigInt(0),
      maximumGroupNum: isSet(object.maximumGroupNum) ? BigInt(object.maximumGroupNum.toString()) : BigInt(0),
      maximumRemoveExpiredPoliciesIteration: isSet(object.maximumRemoveExpiredPoliciesIteration) ? BigInt(object.maximumRemoveExpiredPoliciesIteration.toString()) : BigInt(0)
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.maximumStatementsNum !== undefined && (obj.maximumStatementsNum = (message.maximumStatementsNum || BigInt(0)).toString());
    message.maximumGroupNum !== undefined && (obj.maximumGroupNum = (message.maximumGroupNum || BigInt(0)).toString());
    message.maximumRemoveExpiredPoliciesIteration !== undefined && (obj.maximumRemoveExpiredPoliciesIteration = (message.maximumRemoveExpiredPoliciesIteration || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.maximumStatementsNum = object.maximumStatementsNum !== undefined && object.maximumStatementsNum !== null ? BigInt(object.maximumStatementsNum.toString()) : BigInt(0);
    message.maximumGroupNum = object.maximumGroupNum !== undefined && object.maximumGroupNum !== null ? BigInt(object.maximumGroupNum.toString()) : BigInt(0);
    message.maximumRemoveExpiredPoliciesIteration = object.maximumRemoveExpiredPoliciesIteration !== undefined && object.maximumRemoveExpiredPoliciesIteration !== null ? BigInt(object.maximumRemoveExpiredPoliciesIteration.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      maximumStatementsNum: object?.maximum_statements_num,
      maximumGroupNum: object?.maximum_group_num,
      maximumRemoveExpiredPoliciesIteration: object?.maximum_remove_expired_policies_iteration
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.maximum_statements_num = message.maximumStatementsNum;
    obj.maximum_group_num = message.maximumGroupNum;
    obj.maximum_remove_expired_policies_iteration = message.maximumRemoveExpiredPoliciesIteration;
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.maximum_statements_num !== undefined && object.maximum_statements_num !== null) {
      message.maximumStatementsNum = BigInt(object.maximum_statements_num);
    }
    if (object.maximum_group_num !== undefined && object.maximum_group_num !== null) {
      message.maximumGroupNum = BigInt(object.maximum_group_num);
    }
    if (object.maximum_remove_expired_policies_iteration !== undefined && object.maximum_remove_expired_policies_iteration !== null) {
      message.maximumRemoveExpiredPoliciesIteration = BigInt(object.maximum_remove_expired_policies_iteration);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.maximum_statements_num = message.maximumStatementsNum ? message.maximumStatementsNum.toString() : undefined;
    obj.maximum_group_num = message.maximumGroupNum ? message.maximumGroupNum.toString() : undefined;
    obj.maximum_remove_expired_policies_iteration = message.maximumRemoveExpiredPoliciesIteration ? message.maximumRemoveExpiredPoliciesIteration.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/greenfield.permission.Params",
      value: Params.encode(message).finish()
    };
  }
};