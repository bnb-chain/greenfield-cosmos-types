/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../helpers";
export const protobufPackage = "bnbchain.greenfield.permission";
/** ActionType defines the operations you can execute in greenfield storage network */

export enum ActionType {
  ACTION_UPDATE_BUCKET_INFO = 0,
  ACTION_DELETE_BUCKET = 1,
  ACTION_CREATE_OBJECT = 2,
  ACTION_DELETE_OBJECT = 3,
  ACTION_COPY_OBJECT = 4,
  ACTION_GET_OBJECT = 5,
  ACTION_EXECUTE_OBJECT = 6,
  ACTION_LIST_OBJECT = 7,
  ACTION_UPDATE_GROUP_MEMBER = 8,
  ACTION_DELETE_GROUP = 9,
  ACTION_GROUP_MEMBER = 10,
  ACTION_TYPE_ALL = 99,
  UNRECOGNIZED = -1,
}
export function actionTypeFromJSON(object: any): ActionType {
  switch (object) {
    case 0:
    case "ACTION_UPDATE_BUCKET_INFO":
      return ActionType.ACTION_UPDATE_BUCKET_INFO;

    case 1:
    case "ACTION_DELETE_BUCKET":
      return ActionType.ACTION_DELETE_BUCKET;

    case 2:
    case "ACTION_CREATE_OBJECT":
      return ActionType.ACTION_CREATE_OBJECT;

    case 3:
    case "ACTION_DELETE_OBJECT":
      return ActionType.ACTION_DELETE_OBJECT;

    case 4:
    case "ACTION_COPY_OBJECT":
      return ActionType.ACTION_COPY_OBJECT;

    case 5:
    case "ACTION_GET_OBJECT":
      return ActionType.ACTION_GET_OBJECT;

    case 6:
    case "ACTION_EXECUTE_OBJECT":
      return ActionType.ACTION_EXECUTE_OBJECT;

    case 7:
    case "ACTION_LIST_OBJECT":
      return ActionType.ACTION_LIST_OBJECT;

    case 8:
    case "ACTION_UPDATE_GROUP_MEMBER":
      return ActionType.ACTION_UPDATE_GROUP_MEMBER;

    case 9:
    case "ACTION_DELETE_GROUP":
      return ActionType.ACTION_DELETE_GROUP;

    case 10:
    case "ACTION_GROUP_MEMBER":
      return ActionType.ACTION_GROUP_MEMBER;

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

    case ActionType.ACTION_GROUP_MEMBER:
      return "ACTION_GROUP_MEMBER";

    case ActionType.ACTION_TYPE_ALL:
      return "ACTION_TYPE_ALL";

    case ActionType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Effect define the effect of the operation permission, include Allow or deny */

export enum Effect {
  EFFECT_ALLOW = 0,
  EFFECT_DENY = 1,

  /** EFFECT_PASS - Use internally, means skipped. there is no explicit ALLOW or DENY, and further permission checks are required. */
  EFFECT_PASS = 2,
  UNRECOGNIZED = -1,
}
export function effectFromJSON(object: any): Effect {
  switch (object) {
    case 0:
    case "EFFECT_ALLOW":
      return Effect.EFFECT_ALLOW;

    case 1:
    case "EFFECT_DENY":
      return Effect.EFFECT_DENY;

    case 2:
    case "EFFECT_PASS":
      return Effect.EFFECT_PASS;

    case -1:
    case "UNRECOGNIZED":
    default:
      return Effect.UNRECOGNIZED;
  }
}
export function effectToJSON(object: Effect): string {
  switch (object) {
    case Effect.EFFECT_ALLOW:
      return "EFFECT_ALLOW";

    case Effect.EFFECT_DENY:
      return "EFFECT_DENY";

    case Effect.EFFECT_PASS:
      return "EFFECT_PASS";

    case Effect.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum PrincipalType {
  /** TYPE_GNFD_ACCOUNT - Reserved for extended use */
  TYPE_GNFD_ACCOUNT = 0,
  TYPE_GNFD_GROUP = 1,
  UNRECOGNIZED = -1,
}
export function principalTypeFromJSON(object: any): PrincipalType {
  switch (object) {
    case 0:
    case "TYPE_GNFD_ACCOUNT":
      return PrincipalType.TYPE_GNFD_ACCOUNT;

    case 1:
    case "TYPE_GNFD_GROUP":
      return PrincipalType.TYPE_GNFD_GROUP;

    case -1:
    case "UNRECOGNIZED":
    default:
      return PrincipalType.UNRECOGNIZED;
  }
}
export function principalTypeToJSON(object: PrincipalType): string {
  switch (object) {
    case PrincipalType.TYPE_GNFD_ACCOUNT:
      return "TYPE_GNFD_ACCOUNT";

    case PrincipalType.TYPE_GNFD_GROUP:
      return "TYPE_GNFD_GROUP";

    case PrincipalType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** TODO: add expiration time. */

export interface Statement {
  /** effect define the impact of permissions, which can be Allow/Deny */
  effect: Effect;
  /**
   * action_type define the operation type you can act. greenfield defines a set of permission
   * that you can specify in a permissionInfo. see ActionType enum for detail.
   */

  actions: ActionType[];
  /**
   * resources define the resource list you can operate.
   * CAN ONLY USED IN bucket level. Support fuzzy match and limit to 5
   */

  resources: string[];
}
/** Principal define the roles that can grant permissions. Currently, it can be account or group. */

export interface Principal {
  type: PrincipalType;
  value: string;
}

function createBaseStatement(): Statement {
  return {
    effect: 0,
    actions: [],
    resources: []
  };
}

export const Statement = {
  encode(message: Statement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Statement {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Statement {
    return {
      effect: isSet(object.effect) ? effectFromJSON(object.effect) : 0,
      actions: Array.isArray(object?.actions) ? object.actions.map((e: any) => actionTypeFromJSON(e)) : [],
      resources: Array.isArray(object?.resources) ? object.resources.map((e: any) => String(e)) : []
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

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Statement>, I>>(object: I): Statement {
    const message = createBaseStatement();
    message.effect = object.effect ?? 0;
    message.actions = object.actions?.map(e => e) || [];
    message.resources = object.resources?.map(e => e) || [];
    return message;
  }

};

function createBasePrincipal(): Principal {
  return {
    type: 0,
    value: ""
  };
}

export const Principal = {
  encode(message: Principal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }

    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Principal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
      type: isSet(object.type) ? principalTypeFromJSON(object.type) : 0,
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
  }

};