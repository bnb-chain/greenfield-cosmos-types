//@ts-nocheck
/* eslint-disable */
import { Principal, PrincipalSDKType, Statement, StatementSDKType } from "./common";
import { ResourceType, resourceTypeFromJSON, resourceTypeToJSON } from "../resource/types";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, fromJsonTimestamp, fromTimestamp, DeepPartial, Exact } from "../../helpers";
export const protobufPackage = "greenfield.permission";
export interface Policy {
  /** id is an unique u256 sequence for each policy. It also be used as NFT tokenID */
  id: string;
  /** principal defines the accounts/group which the permission grants to */
  principal?: Principal;
  /** resource_type defines the type of resource that grants permission for */
  resourceType: ResourceType;
  /** resource_id defines the bucket/object/group id of the resource that grants permission for */
  resourceId: string;
  /** statements defines the details content of the permission, including effect/actions/sub-resources */
  statements: Statement[];
  /**
   * expiration_time defines the whole expiration time of all the statements.
   * Notices: Its priority is higher than the expiration time inside the Statement
   */
  expirationTime?: Timestamp;
}
export interface PolicyProtoMsg {
  typeUrl: "/greenfield.permission.Policy";
  value: Uint8Array;
}
export interface PolicySDKType {
  id: string;
  principal?: PrincipalSDKType;
  resource_type: ResourceType;
  resource_id: string;
  statements: StatementSDKType[];
  expiration_time?: TimestampSDKType;
}
/**
 * PolicyGroup refers to a group of policies which grant permission to Group, which is limited to MaxGroupNum (default 10).
 * This means that a single resource can only grant permission to 10 groups. The reason for
 * this is to enable on-chain determination of whether an operator has permission within a limited time.
 */
export interface PolicyGroup {
  /** items define a pair of policy_id and group_id. Each resource can only grant its own permissions to a limited number of groups */
  items: PolicyGroup_Item[];
}
export interface PolicyGroupProtoMsg {
  typeUrl: "/greenfield.permission.PolicyGroup";
  value: Uint8Array;
}
/**
 * PolicyGroup refers to a group of policies which grant permission to Group, which is limited to MaxGroupNum (default 10).
 * This means that a single resource can only grant permission to 10 groups. The reason for
 * this is to enable on-chain determination of whether an operator has permission within a limited time.
 */
export interface PolicyGroupSDKType {
  items: PolicyGroup_ItemSDKType[];
}
export interface PolicyGroup_Item {
  policyId: string;
  groupId: string;
}
export interface PolicyGroup_ItemProtoMsg {
  typeUrl: "/greenfield.permission.Item";
  value: Uint8Array;
}
export interface PolicyGroup_ItemSDKType {
  policy_id: string;
  group_id: string;
}
export interface GroupMember {
  /** id is an unique u256 sequence for each group member. It also be used as NFT tokenID */
  id: string;
  /** group_id is the unique id of the group */
  groupId: string;
  /** member is the account address of the member */
  member: string;
  /** expiration_time defines the expiration time of the group member */
  expirationTime?: Timestamp;
}
export interface GroupMemberProtoMsg {
  typeUrl: "/greenfield.permission.GroupMember";
  value: Uint8Array;
}
export interface GroupMemberSDKType {
  id: string;
  group_id: string;
  member: string;
  expiration_time?: TimestampSDKType;
}
function createBasePolicy(): Policy {
  return {
    id: "",
    principal: undefined,
    resourceType: 0,
    resourceId: "",
    statements: [],
    expirationTime: undefined
  };
}
export const Policy = {
  typeUrl: "/greenfield.permission.Policy",
  encode(message: Policy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    if (message.expirationTime !== undefined) {
      Timestamp.encode(message.expirationTime, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Policy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.expirationTime = Timestamp.decode(reader, reader.uint32());
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
      resourceType: isSet(object.resourceType) ? resourceTypeFromJSON(object.resourceType) : -1,
      resourceId: isSet(object.resourceId) ? String(object.resourceId) : "",
      statements: Array.isArray(object?.statements) ? object.statements.map((e: any) => Statement.fromJSON(e)) : [],
      expirationTime: isSet(object.expirationTime) ? fromJsonTimestamp(object.expirationTime) : undefined
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
    message.expirationTime !== undefined && (obj.expirationTime = fromTimestamp(message.expirationTime).toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Policy>, I>>(object: I): Policy {
    const message = createBasePolicy();
    message.id = object.id ?? "";
    message.principal = object.principal !== undefined && object.principal !== null ? Principal.fromPartial(object.principal) : undefined;
    message.resourceType = object.resourceType ?? 0;
    message.resourceId = object.resourceId ?? "";
    message.statements = object.statements?.map(e => Statement.fromPartial(e)) || [];
    message.expirationTime = object.expirationTime !== undefined && object.expirationTime !== null ? Timestamp.fromPartial(object.expirationTime) : undefined;
    return message;
  },
  fromSDK(object: PolicySDKType): Policy {
    return {
      id: object?.id,
      principal: object.principal ? Principal.fromSDK(object.principal) : undefined,
      resourceType: isSet(object.resource_type) ? resourceTypeFromJSON(object.resource_type) : -1,
      resourceId: object?.resource_id,
      statements: Array.isArray(object?.statements) ? object.statements.map((e: any) => Statement.fromSDK(e)) : [],
      expirationTime: object.expiration_time ? Timestamp.fromSDK(object.expiration_time) : undefined
    };
  },
  toSDK(message: Policy): PolicySDKType {
    const obj: any = {};
    obj.id = message.id;
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
  fromAmino(object: PolicyAmino): Policy {
    const message = createBasePolicy();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
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
  toAmino(message: Policy): PolicyAmino {
    const obj: any = {};
    obj.id = message.id;
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
  fromAminoMsg(object: PolicyAminoMsg): Policy {
    return Policy.fromAmino(object.value);
  },
  fromProtoMsg(message: PolicyProtoMsg): Policy {
    return Policy.decode(message.value);
  },
  toProto(message: Policy): Uint8Array {
    return Policy.encode(message).finish();
  },
  toProtoMsg(message: Policy): PolicyProtoMsg {
    return {
      typeUrl: "/greenfield.permission.Policy",
      value: Policy.encode(message).finish()
    };
  }
};
function createBasePolicyGroup(): PolicyGroup {
  return {
    items: []
  };
}
export const PolicyGroup = {
  typeUrl: "/greenfield.permission.PolicyGroup",
  encode(message: PolicyGroup, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.items) {
      PolicyGroup_Item.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PolicyGroup {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromSDK(object: PolicyGroupSDKType): PolicyGroup {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => PolicyGroup_Item.fromSDK(e)) : []
    };
  },
  toSDK(message: PolicyGroup): PolicyGroupSDKType {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map(e => e ? PolicyGroup_Item.toSDK(e) : undefined);
    } else {
      obj.items = [];
    }
    return obj;
  },
  fromAmino(object: PolicyGroupAmino): PolicyGroup {
    const message = createBasePolicyGroup();
    message.items = object.items?.map(e => PolicyGroup_Item.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: PolicyGroup): PolicyGroupAmino {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map(e => e ? PolicyGroup_Item.toAmino(e) : undefined);
    } else {
      obj.items = [];
    }
    return obj;
  },
  fromAminoMsg(object: PolicyGroupAminoMsg): PolicyGroup {
    return PolicyGroup.fromAmino(object.value);
  },
  fromProtoMsg(message: PolicyGroupProtoMsg): PolicyGroup {
    return PolicyGroup.decode(message.value);
  },
  toProto(message: PolicyGroup): Uint8Array {
    return PolicyGroup.encode(message).finish();
  },
  toProtoMsg(message: PolicyGroup): PolicyGroupProtoMsg {
    return {
      typeUrl: "/greenfield.permission.PolicyGroup",
      value: PolicyGroup.encode(message).finish()
    };
  }
};
function createBasePolicyGroup_Item(): PolicyGroup_Item {
  return {
    policyId: "",
    groupId: ""
  };
}
export const PolicyGroup_Item = {
  typeUrl: "/greenfield.permission.Item",
  encode(message: PolicyGroup_Item, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.policyId !== "") {
      writer.uint32(10).string(message.policyId);
    }
    if (message.groupId !== "") {
      writer.uint32(18).string(message.groupId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PolicyGroup_Item {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromSDK(object: PolicyGroup_ItemSDKType): PolicyGroup_Item {
    return {
      policyId: object?.policy_id,
      groupId: object?.group_id
    };
  },
  toSDK(message: PolicyGroup_Item): PolicyGroup_ItemSDKType {
    const obj: any = {};
    obj.policy_id = message.policyId;
    obj.group_id = message.groupId;
    return obj;
  },
  fromAmino(object: PolicyGroup_ItemAmino): PolicyGroup_Item {
    const message = createBasePolicyGroup_Item();
    if (object.policy_id !== undefined && object.policy_id !== null) {
      message.policyId = object.policy_id;
    }
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = object.group_id;
    }
    return message;
  },
  toAmino(message: PolicyGroup_Item): PolicyGroup_ItemAmino {
    const obj: any = {};
    obj.policy_id = message.policyId;
    obj.group_id = message.groupId;
    return obj;
  },
  fromAminoMsg(object: PolicyGroup_ItemAminoMsg): PolicyGroup_Item {
    return PolicyGroup_Item.fromAmino(object.value);
  },
  fromProtoMsg(message: PolicyGroup_ItemProtoMsg): PolicyGroup_Item {
    return PolicyGroup_Item.decode(message.value);
  },
  toProto(message: PolicyGroup_Item): Uint8Array {
    return PolicyGroup_Item.encode(message).finish();
  },
  toProtoMsg(message: PolicyGroup_Item): PolicyGroup_ItemProtoMsg {
    return {
      typeUrl: "/greenfield.permission.Item",
      value: PolicyGroup_Item.encode(message).finish()
    };
  }
};
function createBaseGroupMember(): GroupMember {
  return {
    id: "",
    groupId: "",
    member: "",
    expirationTime: undefined
  };
}
export const GroupMember = {
  typeUrl: "/greenfield.permission.GroupMember",
  encode(message: GroupMember, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.groupId !== "") {
      writer.uint32(18).string(message.groupId);
    }
    if (message.member !== "") {
      writer.uint32(26).string(message.member);
    }
    if (message.expirationTime !== undefined) {
      Timestamp.encode(message.expirationTime, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GroupMember {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.groupId = reader.string();
          break;
        case 3:
          message.member = reader.string();
          break;
        case 4:
          message.expirationTime = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GroupMember {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      groupId: isSet(object.groupId) ? String(object.groupId) : "",
      member: isSet(object.member) ? String(object.member) : "",
      expirationTime: isSet(object.expirationTime) ? fromJsonTimestamp(object.expirationTime) : undefined
    };
  },
  toJSON(message: GroupMember): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.groupId !== undefined && (obj.groupId = message.groupId);
    message.member !== undefined && (obj.member = message.member);
    message.expirationTime !== undefined && (obj.expirationTime = fromTimestamp(message.expirationTime).toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GroupMember>, I>>(object: I): GroupMember {
    const message = createBaseGroupMember();
    message.id = object.id ?? "";
    message.groupId = object.groupId ?? "";
    message.member = object.member ?? "";
    message.expirationTime = object.expirationTime !== undefined && object.expirationTime !== null ? Timestamp.fromPartial(object.expirationTime) : undefined;
    return message;
  },
  fromSDK(object: GroupMemberSDKType): GroupMember {
    return {
      id: object?.id,
      groupId: object?.group_id,
      member: object?.member,
      expirationTime: object.expiration_time ? Timestamp.fromSDK(object.expiration_time) : undefined
    };
  },
  toSDK(message: GroupMember): GroupMemberSDKType {
    const obj: any = {};
    obj.id = message.id;
    obj.group_id = message.groupId;
    obj.member = message.member;
    message.expirationTime !== undefined && (obj.expiration_time = message.expirationTime ? Timestamp.toSDK(message.expirationTime) : undefined);
    return obj;
  },
  fromAmino(object: GroupMemberAmino): GroupMember {
    const message = createBaseGroupMember();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = object.group_id;
    }
    if (object.member !== undefined && object.member !== null) {
      message.member = object.member;
    }
    if (object.expiration_time !== undefined && object.expiration_time !== null) {
      message.expirationTime = Timestamp.fromAmino(object.expiration_time);
    }
    return message;
  },
  toAmino(message: GroupMember): GroupMemberAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.group_id = message.groupId;
    obj.member = message.member;
    obj.expiration_time = message.expirationTime ? Timestamp.toAmino(message.expirationTime) : undefined;
    return obj;
  },
  fromAminoMsg(object: GroupMemberAminoMsg): GroupMember {
    return GroupMember.fromAmino(object.value);
  },
  fromProtoMsg(message: GroupMemberProtoMsg): GroupMember {
    return GroupMember.decode(message.value);
  },
  toProto(message: GroupMember): Uint8Array {
    return GroupMember.encode(message).finish();
  },
  toProtoMsg(message: GroupMember): GroupMemberProtoMsg {
    return {
      typeUrl: "/greenfield.permission.GroupMember",
      value: GroupMember.encode(message).finish()
    };
  }
};