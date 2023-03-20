/* eslint-disable */
import { Principal, PrincipalSDKType, Statement, StatementSDKType } from "./common";
import { ResourceType, resourceTypeFromJSON, resourceTypeToJSON } from "../resource/types";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../helpers";
export const protobufPackage = "bnbchain.greenfield.permission";
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
}
export interface EventPutPolicySDKType {
  policy_id: string;
  principal?: PrincipalSDKType;
  resource_type: ResourceType;
  resource_id: string;
  statements: StatementSDKType[];
}
export interface EventDeletePolicy {
  /** policy_id is an unique u256 sequence for each policy. It also be used as NFT tokenID */
  policyId: string;
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
    statements: []
  };
}

export const EventPutPolicy = {
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
      resourceType: isSet(object.resourceType) ? resourceTypeFromJSON(object.resourceType) : 0,
      resourceId: isSet(object.resourceId) ? String(object.resourceId) : "",
      statements: Array.isArray(object?.statements) ? object.statements.map((e: any) => Statement.fromJSON(e)) : []
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

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventPutPolicy>, I>>(object: I): EventPutPolicy {
    const message = createBaseEventPutPolicy();
    message.policyId = object.policyId ?? "";
    message.principal = object.principal !== undefined && object.principal !== null ? Principal.fromPartial(object.principal) : undefined;
    message.resourceType = object.resourceType ?? 0;
    message.resourceId = object.resourceId ?? "";
    message.statements = object.statements?.map(e => Statement.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: EventPutPolicySDKType): EventPutPolicy {
    return {
      policyId: object?.policy_id,
      principal: object.principal ? Principal.fromSDK(object.principal) : undefined,
      resourceType: isSet(object.resource_type) ? resourceTypeFromJSON(object.resource_type) : 0,
      resourceId: object?.resource_id,
      statements: Array.isArray(object?.statements) ? object.statements.map((e: any) => Statement.fromSDK(e)) : []
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

    return obj;
  }

};

function createBaseEventDeletePolicy(): EventDeletePolicy {
  return {
    policyId: ""
  };
}

export const EventDeletePolicy = {
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
  }

};