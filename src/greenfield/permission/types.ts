/* eslint-disable */
import { Principal, Statement } from "./common";
import { ResourceType, resourceTypeFromJSON, resourceTypeToJSON } from "../resource/types";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../helpers";
export const protobufPackage = "bnbchain.greenfield.permission";
export interface Policy {
  id: string;
  principal?: Principal;
  resourceType: ResourceType;
  resourceId: string;
  statements: Statement[];
  memberStatement?: Statement;
}
export interface PolicyGroup {
  items: PolicyGroup_Item[];
}
export interface PolicyGroup_Item {
  policyId: string;
  groupId: string;
}

function createBasePolicy(): Policy {
  return {
    id: "",
    principal: undefined,
    resourceType: 0,
    resourceId: "",
    statements: [],
    memberStatement: undefined
  };
}

export const Policy = {
  encode(message: Policy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
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

    if (message.memberStatement !== undefined) {
      Statement.encode(message.memberStatement, writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Policy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicy();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
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
          message.memberStatement = Statement.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Policy {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      principal: isSet(object.principal) ? Principal.fromJSON(object.principal) : undefined,
      resourceType: isSet(object.resourceType) ? resourceTypeFromJSON(object.resourceType) : 0,
      resourceId: isSet(object.resourceId) ? String(object.resourceId) : "",
      statements: Array.isArray(object?.statements) ? object.statements.map((e: any) => Statement.fromJSON(e)) : [],
      memberStatement: isSet(object.memberStatement) ? Statement.fromJSON(object.memberStatement) : undefined
    };
  },

  toJSON(message: Policy): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.principal !== undefined && (obj.principal = message.principal ? Principal.toJSON(message.principal) : undefined);
    message.resourceType !== undefined && (obj.resourceType = resourceTypeToJSON(message.resourceType));
    message.resourceId !== undefined && (obj.resourceId = message.resourceId);

    if (message.statements) {
      obj.statements = message.statements.map(e => e ? Statement.toJSON(e) : undefined);
    } else {
      obj.statements = [];
    }

    message.memberStatement !== undefined && (obj.memberStatement = message.memberStatement ? Statement.toJSON(message.memberStatement) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Policy>, I>>(object: I): Policy {
    const message = createBasePolicy();
    message.id = object.id ?? "";
    message.principal = object.principal !== undefined && object.principal !== null ? Principal.fromPartial(object.principal) : undefined;
    message.resourceType = object.resourceType ?? 0;
    message.resourceId = object.resourceId ?? "";
    message.statements = object.statements?.map(e => Statement.fromPartial(e)) || [];
    message.memberStatement = object.memberStatement !== undefined && object.memberStatement !== null ? Statement.fromPartial(object.memberStatement) : undefined;
    return message;
  }

};

function createBasePolicyGroup(): PolicyGroup {
  return {
    items: []
  };
}

export const PolicyGroup = {
  encode(message: PolicyGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      PolicyGroup_Item.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PolicyGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicyGroup();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.items.push(PolicyGroup_Item.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PolicyGroup {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => PolicyGroup_Item.fromJSON(e)) : []
    };
  },

  toJSON(message: PolicyGroup): unknown {
    const obj: any = {};

    if (message.items) {
      obj.items = message.items.map(e => e ? PolicyGroup_Item.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PolicyGroup>, I>>(object: I): PolicyGroup {
    const message = createBasePolicyGroup();
    message.items = object.items?.map(e => PolicyGroup_Item.fromPartial(e)) || [];
    return message;
  }

};

function createBasePolicyGroup_Item(): PolicyGroup_Item {
  return {
    policyId: "",
    groupId: ""
  };
}

export const PolicyGroup_Item = {
  encode(message: PolicyGroup_Item, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.policyId !== "") {
      writer.uint32(10).string(message.policyId);
    }

    if (message.groupId !== "") {
      writer.uint32(18).string(message.groupId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PolicyGroup_Item {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicyGroup_Item();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.policyId = reader.string();
          break;

        case 2:
          message.groupId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PolicyGroup_Item {
    return {
      policyId: isSet(object.policyId) ? String(object.policyId) : "",
      groupId: isSet(object.groupId) ? String(object.groupId) : ""
    };
  },

  toJSON(message: PolicyGroup_Item): unknown {
    const obj: any = {};
    message.policyId !== undefined && (obj.policyId = message.policyId);
    message.groupId !== undefined && (obj.groupId = message.groupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PolicyGroup_Item>, I>>(object: I): PolicyGroup_Item {
    const message = createBasePolicyGroup_Item();
    message.policyId = object.policyId ?? "";
    message.groupId = object.groupId ?? "";
    return message;
  }

};