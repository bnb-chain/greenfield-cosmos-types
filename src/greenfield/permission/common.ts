//@ts-nocheck
/* eslint-disable */
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { UInt64Value, UInt64ValueSDKType } from "../common/wrapper";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, fromJsonTimestamp, fromTimestamp, DeepPartial, Exact } from "../../helpers";
export const protobufPackage = "greenfield.permission";
/** ActionType defines the operations you can execute in greenfield storage network */
export enum ActionType {
  ACTION_UNSPECIFIED = 0,
  ACTION_UPDATE_BUCKET_INFO = 1,
  ACTION_DELETE_BUCKET = 2,
  ACTION_CREATE_OBJECT = 3,
  ACTION_DELETE_OBJECT = 4,
  ACTION_COPY_OBJECT = 5,
  ACTION_GET_OBJECT = 6,
  ACTION_EXECUTE_OBJECT = 7,
  ACTION_LIST_OBJECT = 8,
  ACTION_UPDATE_GROUP_MEMBER = 9,
  ACTION_DELETE_GROUP = 10,
  ACTION_UPDATE_OBJECT_INFO = 11,
  ACTION_UPDATE_GROUP_EXTRA = 12,
  ACTION_TYPE_ALL = 99,
  UNRECOGNIZED = -1,
}
export const ActionTypeSDKType = ActionType;
export function actionTypeFromJSON(object: any): ActionType {
  switch (object) {
    case 0:
    case "ACTION_UNSPECIFIED":
      return ActionType.ACTION_UNSPECIFIED;
    case 1:
    case "ACTION_UPDATE_BUCKET_INFO":
      return ActionType.ACTION_UPDATE_BUCKET_INFO;
    case 2:
    case "ACTION_DELETE_BUCKET":
      return ActionType.ACTION_DELETE_BUCKET;
    case 3:
    case "ACTION_CREATE_OBJECT":
      return ActionType.ACTION_CREATE_OBJECT;
    case 4:
    case "ACTION_DELETE_OBJECT":
      return ActionType.ACTION_DELETE_OBJECT;
    case 5:
    case "ACTION_COPY_OBJECT":
      return ActionType.ACTION_COPY_OBJECT;
    case 6:
    case "ACTION_GET_OBJECT":
      return ActionType.ACTION_GET_OBJECT;
    case 7:
    case "ACTION_EXECUTE_OBJECT":
      return ActionType.ACTION_EXECUTE_OBJECT;
    case 8:
    case "ACTION_LIST_OBJECT":
      return ActionType.ACTION_LIST_OBJECT;
    case 9:
    case "ACTION_UPDATE_GROUP_MEMBER":
      return ActionType.ACTION_UPDATE_GROUP_MEMBER;
    case 10:
    case "ACTION_DELETE_GROUP":
      return ActionType.ACTION_DELETE_GROUP;
    case 11:
    case "ACTION_UPDATE_OBJECT_INFO":
      return ActionType.ACTION_UPDATE_OBJECT_INFO;
    case 12:
    case "ACTION_UPDATE_GROUP_EXTRA":
      return ActionType.ACTION_UPDATE_GROUP_EXTRA;
    case 99:
    case "ACTION_TYPE_ALL":
      return ActionType.ACTION_TYPE_ALL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ActionType.UNRECOGNIZED;
  }
}
export function actionTypeToJSON(object: ActionType): string {
  switch (object) {
    case ActionType.ACTION_UNSPECIFIED:
      return "ACTION_UNSPECIFIED";
    case ActionType.ACTION_UPDATE_BUCKET_INFO:
      return "ACTION_UPDATE_BUCKET_INFO";
    case ActionType.ACTION_DELETE_BUCKET:
      return "ACTION_DELETE_BUCKET";
    case ActionType.ACTION_CREATE_OBJECT:
      return "ACTION_CREATE_OBJECT";
    case ActionType.ACTION_DELETE_OBJECT:
      return "ACTION_DELETE_OBJECT";
    case ActionType.ACTION_COPY_OBJECT:
      return "ACTION_COPY_OBJECT";
    case ActionType.ACTION_GET_OBJECT:
      return "ACTION_GET_OBJECT";
    case ActionType.ACTION_EXECUTE_OBJECT:
      return "ACTION_EXECUTE_OBJECT";
    case ActionType.ACTION_LIST_OBJECT:
      return "ACTION_LIST_OBJECT";
    case ActionType.ACTION_UPDATE_GROUP_MEMBER:
      return "ACTION_UPDATE_GROUP_MEMBER";
    case ActionType.ACTION_DELETE_GROUP:
      return "ACTION_DELETE_GROUP";
    case ActionType.ACTION_UPDATE_OBJECT_INFO:
      return "ACTION_UPDATE_OBJECT_INFO";
    case ActionType.ACTION_UPDATE_GROUP_EXTRA:
      return "ACTION_UPDATE_GROUP_EXTRA";
    case ActionType.ACTION_TYPE_ALL:
      return "ACTION_TYPE_ALL";
    case ActionType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Effect define the effect of the operation permission, include Allow or deny */
export enum Effect {
  EFFECT_UNSPECIFIED = 0,
  EFFECT_ALLOW = 1,
  EFFECT_DENY = 2,
  UNRECOGNIZED = -1,
}
export const EffectSDKType = Effect;
export function effectFromJSON(object: any): Effect {
  switch (object) {
    case 0:
    case "EFFECT_UNSPECIFIED":
      return Effect.EFFECT_UNSPECIFIED;
    case 1:
    case "EFFECT_ALLOW":
      return Effect.EFFECT_ALLOW;
    case 2:
    case "EFFECT_DENY":
      return Effect.EFFECT_DENY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Effect.UNRECOGNIZED;
  }
}
export function effectToJSON(object: Effect): string {
  switch (object) {
    case Effect.EFFECT_UNSPECIFIED:
      return "EFFECT_UNSPECIFIED";
    case Effect.EFFECT_ALLOW:
      return "EFFECT_ALLOW";
    case Effect.EFFECT_DENY:
      return "EFFECT_DENY";
    case Effect.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * PrincipalType refers to the identity type of system users or entities.
 * In Greenfield, it usually refers to accounts or groups.
 */
export enum PrincipalType {
  PRINCIPAL_TYPE_UNSPECIFIED = 0,
  PRINCIPAL_TYPE_GNFD_ACCOUNT = 1,
  PRINCIPAL_TYPE_GNFD_GROUP = 2,
  UNRECOGNIZED = -1,
}
export const PrincipalTypeSDKType = PrincipalType;
export function principalTypeFromJSON(object: any): PrincipalType {
  switch (object) {
    case 0:
    case "PRINCIPAL_TYPE_UNSPECIFIED":
      return PrincipalType.PRINCIPAL_TYPE_UNSPECIFIED;
    case 1:
    case "PRINCIPAL_TYPE_GNFD_ACCOUNT":
      return PrincipalType.PRINCIPAL_TYPE_GNFD_ACCOUNT;
    case 2:
    case "PRINCIPAL_TYPE_GNFD_GROUP":
      return PrincipalType.PRINCIPAL_TYPE_GNFD_GROUP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PrincipalType.UNRECOGNIZED;
  }
}
export function principalTypeToJSON(object: PrincipalType): string {
  switch (object) {
    case PrincipalType.PRINCIPAL_TYPE_UNSPECIFIED:
      return "PRINCIPAL_TYPE_UNSPECIFIED";
    case PrincipalType.PRINCIPAL_TYPE_GNFD_ACCOUNT:
      return "PRINCIPAL_TYPE_GNFD_ACCOUNT";
    case PrincipalType.PRINCIPAL_TYPE_GNFD_GROUP:
      return "PRINCIPAL_TYPE_GNFD_GROUP";
    case PrincipalType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Statement {
  /** effect define the impact of permissions, which can be Allow/Deny */
  effect: Effect;
  /**
   * action_type define the operation type you can act. greenfield defines a set of permission
   * that you can specify in a permissionInfo. see ActionType enum for detail.
   */
  actions: ActionType[];
  /**
   * CAN ONLY USED IN bucket level. Support fuzzy match and limit to 5.
   * The sub-resource name must comply with the standard specified in the greenfield/types/grn.go file for Greenfield resource names.
   * If the sub-resources include 'grn:o:{bucket_name}/*' in the statement, it indicates that specific permissions is granted to all objects within the specified bucket.
   * If the sub-resources include 'grn:o:{bucket_name}/test_*' in the statement, it indicates that specific permissions is granted to all objects with the `test_` prefix within the specified bucket.
   * If the sub-resources is empty, when you need to operate(excluding CreateObject) a specified subresource, it will be denied because it cannot match any subresource.
   */
  resources: string[];
  /** expiration_time defines how long the permission is valid. If not explicitly specified, it means it will not expire. */
  expirationTime?: Timestamp;
  /** limit_size defines the total data size that is allowed to operate. If not explicitly specified, it means it will not limit. */
  limitSize?: UInt64Value;
}
export interface StatementProtoMsg {
  typeUrl: "/greenfield.permission.Statement";
  value: Uint8Array;
}
export interface StatementSDKType {
  effect: Effect;
  actions: ActionType[];
  resources: string[];
  expiration_time?: TimestampSDKType;
  limit_size?: UInt64ValueSDKType;
}
/** Principal define the roles that can be grant permissions to. Currently, it can be account or group. */
export interface Principal {
  type: PrincipalType;
  /**
   * When the type is an account, its value is sdk.AccAddress().String();
   * when the type is a group, its value is math.Uint().String()
   */
  value: string;
}
export interface PrincipalProtoMsg {
  typeUrl: "/greenfield.permission.Principal";
  value: Uint8Array;
}
/** Principal define the roles that can be grant permissions to. Currently, it can be account or group. */
export interface PrincipalSDKType {
  type: PrincipalType;
  value: string;
}
function createBaseStatement(): Statement {
  return {
    effect: 0,
    actions: [],
    resources: [],
    expirationTime: undefined,
    limitSize: undefined
  };
}
export const Statement = {
  typeUrl: "/greenfield.permission.Statement",
  encode(message: Statement, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.effect !== 0) {
      writer.uint32(8).int32(message.effect);
    }
    writer.uint32(18).fork();
    for (const v of message.actions) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.resources) {
      writer.uint32(26).string(v!);
    }
    if (message.expirationTime !== undefined) {
      Timestamp.encode(message.expirationTime, writer.uint32(34).fork()).ldelim();
    }
    if (message.limitSize !== undefined) {
      UInt64Value.encode(message.limitSize, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Statement {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.effect = (reader.int32() as any);
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.actions.push((reader.int32() as any));
            }
          } else {
            message.actions.push((reader.int32() as any));
          }
          break;
        case 3:
          message.resources.push(reader.string());
          break;
        case 4:
          message.expirationTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 5:
          message.limitSize = UInt64Value.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Statement {
    return {
      effect: isSet(object.effect) ? effectFromJSON(object.effect) : -1,
      actions: Array.isArray(object?.actions) ? object.actions.map((e: any) => actionTypeFromJSON(e)) : [],
      resources: Array.isArray(object?.resources) ? object.resources.map((e: any) => String(e)) : [],
      expirationTime: isSet(object.expirationTime) ? fromJsonTimestamp(object.expirationTime) : undefined,
      limitSize: isSet(object.limitSize) ? UInt64Value.fromJSON(object.limitSize) : undefined
    };
  },
  toJSON(message: Statement): unknown {
    const obj: any = {};
    message.effect !== undefined && (obj.effect = effectToJSON(message.effect));
    if (message.actions) {
      obj.actions = message.actions.map(e => actionTypeToJSON(e));
    } else {
      obj.actions = [];
    }
    if (message.resources) {
      obj.resources = message.resources.map(e => e);
    } else {
      obj.resources = [];
    }
    message.expirationTime !== undefined && (obj.expirationTime = fromTimestamp(message.expirationTime).toISOString());
    message.limitSize !== undefined && (obj.limitSize = message.limitSize ? UInt64Value.toJSON(message.limitSize) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Statement>, I>>(object: I): Statement {
    const message = createBaseStatement();
    message.effect = object.effect ?? 0;
    message.actions = object.actions?.map(e => e) || [];
    message.resources = object.resources?.map(e => e) || [];
    message.expirationTime = object.expirationTime !== undefined && object.expirationTime !== null ? Timestamp.fromPartial(object.expirationTime) : undefined;
    message.limitSize = object.limitSize !== undefined && object.limitSize !== null ? UInt64Value.fromPartial(object.limitSize) : undefined;
    return message;
  },
  fromSDK(object: StatementSDKType): Statement {
    return {
      effect: isSet(object.effect) ? effectFromJSON(object.effect) : -1,
      actions: Array.isArray(object?.actions) ? object.actions.map((e: any) => actionTypeFromJSON(e)) : [],
      resources: Array.isArray(object?.resources) ? object.resources.map((e: any) => e) : [],
      expirationTime: object.expiration_time ? Timestamp.fromSDK(object.expiration_time) : undefined,
      limitSize: object.limit_size ? UInt64Value.fromSDK(object.limit_size) : undefined
    };
  },
  toSDK(message: Statement): StatementSDKType {
    const obj: any = {};
    message.effect !== undefined && (obj.effect = effectToJSON(message.effect));
    if (message.actions) {
      obj.actions = message.actions.map(e => actionTypeToJSON(e));
    } else {
      obj.actions = [];
    }
    if (message.resources) {
      obj.resources = message.resources.map(e => e);
    } else {
      obj.resources = [];
    }
    message.expirationTime !== undefined && (obj.expiration_time = message.expirationTime ? Timestamp.toSDK(message.expirationTime) : undefined);
    message.limitSize !== undefined && (obj.limit_size = message.limitSize ? UInt64Value.toSDK(message.limitSize) : undefined);
    return obj;
  },
  fromAmino(object: StatementAmino): Statement {
    const message = createBaseStatement();
    if (object.effect !== undefined && object.effect !== null) {
      message.effect = effectFromJSON(object.effect);
    }
    message.actions = object.actions?.map(e => actionTypeFromJSON(e)) || [];
    message.resources = object.resources?.map(e => e) || [];
    if (object.expiration_time !== undefined && object.expiration_time !== null) {
      message.expirationTime = Timestamp.fromAmino(object.expiration_time);
    }
    if (object.limit_size !== undefined && object.limit_size !== null) {
      message.limitSize = UInt64Value.fromAmino(object.limit_size);
    }
    return message;
  },
  toAmino(message: Statement): StatementAmino {
    const obj: any = {};
    obj.effect = effectToJSON(message.effect);
    if (message.actions) {
      obj.actions = message.actions.map(e => actionTypeToJSON(e));
    } else {
      obj.actions = [];
    }
    if (message.resources) {
      obj.resources = message.resources.map(e => e);
    } else {
      obj.resources = [];
    }
    obj.expiration_time = message.expirationTime ? Timestamp.toAmino(message.expirationTime) : undefined;
    obj.limit_size = message.limitSize ? UInt64Value.toAmino(message.limitSize) : undefined;
    return obj;
  },
  fromAminoMsg(object: StatementAminoMsg): Statement {
    return Statement.fromAmino(object.value);
  },
  fromProtoMsg(message: StatementProtoMsg): Statement {
    return Statement.decode(message.value);
  },
  toProto(message: Statement): Uint8Array {
    return Statement.encode(message).finish();
  },
  toProtoMsg(message: Statement): StatementProtoMsg {
    return {
      typeUrl: "/greenfield.permission.Statement",
      value: Statement.encode(message).finish()
    };
  }
};
function createBasePrincipal(): Principal {
  return {
    type: 0,
    value: ""
  };
}
export const Principal = {
  typeUrl: "/greenfield.permission.Principal",
  encode(message: Principal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Principal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrincipal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = (reader.int32() as any);
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Principal {
    return {
      type: isSet(object.type) ? principalTypeFromJSON(object.type) : -1,
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  toJSON(message: Principal): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = principalTypeToJSON(message.type));
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Principal>, I>>(object: I): Principal {
    const message = createBasePrincipal();
    message.type = object.type ?? 0;
    message.value = object.value ?? "";
    return message;
  },
  fromSDK(object: PrincipalSDKType): Principal {
    return {
      type: isSet(object.type) ? principalTypeFromJSON(object.type) : -1,
      value: object?.value
    };
  },
  toSDK(message: Principal): PrincipalSDKType {
    const obj: any = {};
    message.type !== undefined && (obj.type = principalTypeToJSON(message.type));
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: PrincipalAmino): Principal {
    const message = createBasePrincipal();
    if (object.type !== undefined && object.type !== null) {
      message.type = principalTypeFromJSON(object.type);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: Principal): PrincipalAmino {
    const obj: any = {};
    obj.type = principalTypeToJSON(message.type);
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object: PrincipalAminoMsg): Principal {
    return Principal.fromAmino(object.value);
  },
  fromProtoMsg(message: PrincipalProtoMsg): Principal {
    return Principal.decode(message.value);
  },
  toProto(message: Principal): Uint8Array {
    return Principal.encode(message).finish();
  },
  toProtoMsg(message: Principal): PrincipalProtoMsg {
    return {
      typeUrl: "/greenfield.permission.Principal",
      value: Principal.encode(message).finish()
    };
  }
};