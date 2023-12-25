//@ts-nocheck
/* eslint-disable */
import { Principal, PrincipalSDKType, Statement, StatementSDKType } from "./common";
import { ResourceType, resourceTypeFromJSON, resourceTypeToJSON } from "../resource/types";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, fromJsonTimestamp, fromTimestamp, DeepPartial, Exact } from "../../helpers";
export const protobufPackage = "greenfield.permission";
export interface EventPutPolicy {
  /** policy_id is an unique u256 sequence for each policy. It also be used as NFT tokenID */
  policyId: string;
  /** principal defines the accounts/group which the permission grants to */
  principal?: Principal;
  /** resource_type defines the type of resource that grants permission for */
  resourceType: ResourceType;
  /** resource_id defines the bucket/object/group id of the resource that grants permission for */
  resourceId: string;
  /** statements defines the details content of the permission, include effect/actions/sub-resources */
  statements: Statement[];
  /**
   * expiration_time defines the whole expiration time of all the statements.
   * Notices: Its priority is higher than the expiration time inside the Statement
   */
  expirationTime?: Timestamp;
}
export interface EventPutPolicyProtoMsg {
  typeUrl: "/greenfield.permission.EventPutPolicy";
  value: Uint8Array;
}
export interface EventPutPolicySDKType {
  policy_id: string;
  principal?: PrincipalSDKType;
  resource_type: ResourceType;
  resource_id: string;
  statements: StatementSDKType[];
  expiration_time?: TimestampSDKType;
}
export interface EventDeletePolicy {
  /** policy_id is an unique u256 sequence for each policy. It also be used as NFT tokenID */
  policyId: string;
}
export interface EventDeletePolicyProtoMsg {
  typeUrl: "/greenfield.permission.EventDeletePolicy";
  value: Uint8Array;
}
export interface EventDeletePolicySDKType {
  policy_id: string;
}
function createBaseEventPutPolicy(): EventPutPolicy {
  return {
    policyId: "",
    principal: undefined,
    resourceType: 0,
    resourceId: "",
    statements: [],
    expirationTime: undefined
  };
}
export const EventPutPolicy = {
  typeUrl: "/greenfield.permission.EventPutPolicy",
  encode(message: EventPutPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.policyId !== "") {
      writer.uint32(10).string(message.policyId);
    }
    if (message.principal !== undefined) {
      Principal.encode(message.principal, writer.uint32(18).fork()).ldelim();
    }
    if (message.resourceType !== 0) {
      writer.uint32(24).int32(message.resourceType);
    }
    if (message.resourceId !== "") {
      writer.uint32(34).string(message.resourceId);
    }
    for (const v of message.statements) {
      Statement.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.expirationTime !== undefined) {
      Timestamp.encode(message.expirationTime, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventPutPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPutPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.policyId = reader.string();
          break;
        case 2:
          message.principal = Principal.decode(reader, reader.uint32());
          break;
        case 3:
          message.resourceType = (reader.int32() as any);
          break;
        case 4:
          message.resourceId = reader.string();
          break;
        case 5:
          message.statements.push(Statement.decode(reader, reader.uint32()));
          break;
        case 6:
          message.expirationTime = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventPutPolicy {
    return {
      policyId: isSet(object.policyId) ? String(object.policyId) : "",
      principal: isSet(object.principal) ? Principal.fromJSON(object.principal) : undefined,
      resourceType: isSet(object.resourceType) ? resourceTypeFromJSON(object.resourceType) : -1,
      resourceId: isSet(object.resourceId) ? String(object.resourceId) : "",
      statements: Array.isArray(object?.statements) ? object.statements.map((e: any) => Statement.fromJSON(e)) : [],
      expirationTime: isSet(object.expirationTime) ? fromJsonTimestamp(object.expirationTime) : undefined
    };
  },
  toJSON(message: EventPutPolicy): unknown {
    const obj: any = {};
    message.policyId !== undefined && (obj.policyId = message.policyId);
    message.principal !== undefined && (obj.principal = message.principal ? Principal.toJSON(message.principal) : undefined);
    message.resourceType !== undefined && (obj.resourceType = resourceTypeToJSON(message.resourceType));
    message.resourceId !== undefined && (obj.resourceId = message.resourceId);
    if (message.statements) {
      obj.statements = message.statements.map(e => e ? Statement.toJSON(e) : undefined);
    } else {
      obj.statements = [];
    }
    message.expirationTime !== undefined && (obj.expirationTime = fromTimestamp(message.expirationTime).toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventPutPolicy>, I>>(object: I): EventPutPolicy {
    const message = createBaseEventPutPolicy();
    message.policyId = object.policyId ?? "";
    message.principal = object.principal !== undefined && object.principal !== null ? Principal.fromPartial(object.principal) : undefined;
    message.resourceType = object.resourceType ?? 0;
    message.resourceId = object.resourceId ?? "";
    message.statements = object.statements?.map(e => Statement.fromPartial(e)) || [];
    message.expirationTime = object.expirationTime !== undefined && object.expirationTime !== null ? Timestamp.fromPartial(object.expirationTime) : undefined;
    return message;
  },
  fromSDK(object: EventPutPolicySDKType): EventPutPolicy {
    return {
      policyId: object?.policy_id,
      principal: object.principal ? Principal.fromSDK(object.principal) : undefined,
      resourceType: isSet(object.resource_type) ? resourceTypeFromJSON(object.resource_type) : -1,
      resourceId: object?.resource_id,
      statements: Array.isArray(object?.statements) ? object.statements.map((e: any) => Statement.fromSDK(e)) : [],
      expirationTime: object.expiration_time ? Timestamp.fromSDK(object.expiration_time) : undefined
    };
  },
  toSDK(message: EventPutPolicy): EventPutPolicySDKType {
    const obj: any = {};
    obj.policy_id = message.policyId;
    message.principal !== undefined && (obj.principal = message.principal ? Principal.toSDK(message.principal) : undefined);
    message.resourceType !== undefined && (obj.resource_type = resourceTypeToJSON(message.resourceType));
    obj.resource_id = message.resourceId;
    if (message.statements) {
      obj.statements = message.statements.map(e => e ? Statement.toSDK(e) : undefined);
    } else {
      obj.statements = [];
    }
    message.expirationTime !== undefined && (obj.expiration_time = message.expirationTime ? Timestamp.toSDK(message.expirationTime) : undefined);
    return obj;
  },
  fromAmino(object: EventPutPolicyAmino): EventPutPolicy {
    const message = createBaseEventPutPolicy();
    if (object.policy_id !== undefined && object.policy_id !== null) {
      message.policyId = object.policy_id;
    }
    if (object.principal !== undefined && object.principal !== null) {
      message.principal = Principal.fromAmino(object.principal);
    }
    if (object.resource_type !== undefined && object.resource_type !== null) {
      message.resourceType = resourceTypeFromJSON(object.resource_type);
    }
    if (object.resource_id !== undefined && object.resource_id !== null) {
      message.resourceId = object.resource_id;
    }
    message.statements = object.statements?.map(e => Statement.fromAmino(e)) || [];
    if (object.expiration_time !== undefined && object.expiration_time !== null) {
      message.expirationTime = Timestamp.fromAmino(object.expiration_time);
    }
    return message;
  },
  toAmino(message: EventPutPolicy): EventPutPolicyAmino {
    const obj: any = {};
    obj.policy_id = message.policyId;
    obj.principal = message.principal ? Principal.toAmino(message.principal) : undefined;
    obj.resource_type = resourceTypeToJSON(message.resourceType);
    obj.resource_id = message.resourceId;
    if (message.statements) {
      obj.statements = message.statements.map(e => e ? Statement.toAmino(e) : undefined);
    } else {
      obj.statements = [];
    }
    obj.expiration_time = message.expirationTime ? Timestamp.toAmino(message.expirationTime) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventPutPolicyAminoMsg): EventPutPolicy {
    return EventPutPolicy.fromAmino(object.value);
  },
  fromProtoMsg(message: EventPutPolicyProtoMsg): EventPutPolicy {
    return EventPutPolicy.decode(message.value);
  },
  toProto(message: EventPutPolicy): Uint8Array {
    return EventPutPolicy.encode(message).finish();
  },
  toProtoMsg(message: EventPutPolicy): EventPutPolicyProtoMsg {
    return {
      typeUrl: "/greenfield.permission.EventPutPolicy",
      value: EventPutPolicy.encode(message).finish()
    };
  }
};
function createBaseEventDeletePolicy(): EventDeletePolicy {
  return {
    policyId: ""
  };
}
export const EventDeletePolicy = {
  typeUrl: "/greenfield.permission.EventDeletePolicy",
  encode(message: EventDeletePolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.policyId !== "") {
      writer.uint32(10).string(message.policyId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventDeletePolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDeletePolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.policyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventDeletePolicy {
    return {
      policyId: isSet(object.policyId) ? String(object.policyId) : ""
    };
  },
  toJSON(message: EventDeletePolicy): unknown {
    const obj: any = {};
    message.policyId !== undefined && (obj.policyId = message.policyId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventDeletePolicy>, I>>(object: I): EventDeletePolicy {
    const message = createBaseEventDeletePolicy();
    message.policyId = object.policyId ?? "";
    return message;
  },
  fromSDK(object: EventDeletePolicySDKType): EventDeletePolicy {
    return {
      policyId: object?.policy_id
    };
  },
  toSDK(message: EventDeletePolicy): EventDeletePolicySDKType {
    const obj: any = {};
    obj.policy_id = message.policyId;
    return obj;
  },
  fromAmino(object: EventDeletePolicyAmino): EventDeletePolicy {
    const message = createBaseEventDeletePolicy();
    if (object.policy_id !== undefined && object.policy_id !== null) {
      message.policyId = object.policy_id;
    }
    return message;
  },
  toAmino(message: EventDeletePolicy): EventDeletePolicyAmino {
    const obj: any = {};
    obj.policy_id = message.policyId;
    return obj;
  },
  fromAminoMsg(object: EventDeletePolicyAminoMsg): EventDeletePolicy {
    return EventDeletePolicy.fromAmino(object.value);
  },
  fromProtoMsg(message: EventDeletePolicyProtoMsg): EventDeletePolicy {
    return EventDeletePolicy.decode(message.value);
  },
  toProto(message: EventDeletePolicy): Uint8Array {
    return EventDeletePolicy.encode(message).finish();
  },
  toProtoMsg(message: EventDeletePolicy): EventDeletePolicyProtoMsg {
    return {
      typeUrl: "/greenfield.permission.EventDeletePolicy",
      value: EventDeletePolicy.encode(message).finish()
    };
  }
};