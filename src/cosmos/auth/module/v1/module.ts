//@ts-nocheck
/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../../../helpers";
export const protobufPackage = "cosmos.auth.module.v1";
/** Module is the config object for the auth module. */
export interface Module {
  /** bech32_prefix is the bech32 account prefix for the app. */
  bech32Prefix: string;
  /** module_account_permissions are module account permissions. */
  moduleAccountPermissions: ModuleAccountPermission[];
  /** authority defines the custom module authority. If not set, defaults to the governance module. */
  authority: string;
}
export interface ModuleProtoMsg {
  typeUrl: "/cosmos.auth.module.v1.Module";
  value: Uint8Array;
}
/** Module is the config object for the auth module. */
export interface ModuleSDKType {
  bech32_prefix: string;
  module_account_permissions: ModuleAccountPermissionSDKType[];
  authority: string;
}
/** ModuleAccountPermission represents permissions for a module account. */
export interface ModuleAccountPermission {
  /** account is the name of the module. */
  account: string;
  /**
   * permissions are the permissions this module has. Currently recognized
   * values are minter, burner and staking.
   */
  permissions: string[];
}
export interface ModuleAccountPermissionProtoMsg {
  typeUrl: "/cosmos.auth.module.v1.ModuleAccountPermission";
  value: Uint8Array;
}
/** ModuleAccountPermission represents permissions for a module account. */
export interface ModuleAccountPermissionSDKType {
  account: string;
  permissions: string[];
}
function createBaseModule(): Module {
  return {
    bech32Prefix: "",
    moduleAccountPermissions: [],
    authority: ""
  };
}
export const Module = {
  typeUrl: "/cosmos.auth.module.v1.Module",
  encode(message: Module, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bech32Prefix !== "") {
      writer.uint32(10).string(message.bech32Prefix);
    }
    for (const v of message.moduleAccountPermissions) {
      ModuleAccountPermission.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.authority !== "") {
      writer.uint32(26).string(message.authority);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Module {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bech32Prefix = reader.string();
          break;
        case 2:
          message.moduleAccountPermissions.push(ModuleAccountPermission.decode(reader, reader.uint32()));
          break;
        case 3:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Module {
    return {
      bech32Prefix: isSet(object.bech32Prefix) ? String(object.bech32Prefix) : "",
      moduleAccountPermissions: Array.isArray(object?.moduleAccountPermissions) ? object.moduleAccountPermissions.map((e: any) => ModuleAccountPermission.fromJSON(e)) : [],
      authority: isSet(object.authority) ? String(object.authority) : ""
    };
  },
  toJSON(message: Module): unknown {
    const obj: any = {};
    message.bech32Prefix !== undefined && (obj.bech32Prefix = message.bech32Prefix);
    if (message.moduleAccountPermissions) {
      obj.moduleAccountPermissions = message.moduleAccountPermissions.map(e => e ? ModuleAccountPermission.toJSON(e) : undefined);
    } else {
      obj.moduleAccountPermissions = [];
    }
    message.authority !== undefined && (obj.authority = message.authority);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Module>, I>>(object: I): Module {
    const message = createBaseModule();
    message.bech32Prefix = object.bech32Prefix ?? "";
    message.moduleAccountPermissions = object.moduleAccountPermissions?.map(e => ModuleAccountPermission.fromPartial(e)) || [];
    message.authority = object.authority ?? "";
    return message;
  },
  fromSDK(object: ModuleSDKType): Module {
    return {
      bech32Prefix: object?.bech32_prefix,
      moduleAccountPermissions: Array.isArray(object?.module_account_permissions) ? object.module_account_permissions.map((e: any) => ModuleAccountPermission.fromSDK(e)) : [],
      authority: object?.authority
    };
  },
  toSDK(message: Module): ModuleSDKType {
    const obj: any = {};
    obj.bech32_prefix = message.bech32Prefix;
    if (message.moduleAccountPermissions) {
      obj.module_account_permissions = message.moduleAccountPermissions.map(e => e ? ModuleAccountPermission.toSDK(e) : undefined);
    } else {
      obj.module_account_permissions = [];
    }
    obj.authority = message.authority;
    return obj;
  },
  fromAmino(object: ModuleAmino): Module {
    const message = createBaseModule();
    if (object.bech32_prefix !== undefined && object.bech32_prefix !== null) {
      message.bech32Prefix = object.bech32_prefix;
    }
    message.moduleAccountPermissions = object.module_account_permissions?.map(e => ModuleAccountPermission.fromAmino(e)) || [];
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    return message;
  },
  toAmino(message: Module): ModuleAmino {
    const obj: any = {};
    obj.bech32_prefix = message.bech32Prefix;
    if (message.moduleAccountPermissions) {
      obj.module_account_permissions = message.moduleAccountPermissions.map(e => e ? ModuleAccountPermission.toAmino(e) : undefined);
    } else {
      obj.module_account_permissions = [];
    }
    obj.authority = message.authority;
    return obj;
  },
  fromAminoMsg(object: ModuleAminoMsg): Module {
    return Module.fromAmino(object.value);
  },
  toAminoMsg(message: Module): ModuleAminoMsg {
    return {
      type: "cosmos-sdk/Module",
      value: Module.toAmino(message)
    };
  },
  fromProtoMsg(message: ModuleProtoMsg): Module {
    return Module.decode(message.value);
  },
  toProto(message: Module): Uint8Array {
    return Module.encode(message).finish();
  },
  toProtoMsg(message: Module): ModuleProtoMsg {
    return {
      typeUrl: "/cosmos.auth.module.v1.Module",
      value: Module.encode(message).finish()
    };
  }
};
function createBaseModuleAccountPermission(): ModuleAccountPermission {
  return {
    account: "",
    permissions: []
  };
}
export const ModuleAccountPermission = {
  typeUrl: "/cosmos.auth.module.v1.ModuleAccountPermission",
  encode(message: ModuleAccountPermission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    for (const v of message.permissions) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleAccountPermission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleAccountPermission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.permissions.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ModuleAccountPermission {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      permissions: Array.isArray(object?.permissions) ? object.permissions.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: ModuleAccountPermission): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    if (message.permissions) {
      obj.permissions = message.permissions.map(e => e);
    } else {
      obj.permissions = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ModuleAccountPermission>, I>>(object: I): ModuleAccountPermission {
    const message = createBaseModuleAccountPermission();
    message.account = object.account ?? "";
    message.permissions = object.permissions?.map(e => e) || [];
    return message;
  },
  fromSDK(object: ModuleAccountPermissionSDKType): ModuleAccountPermission {
    return {
      account: object?.account,
      permissions: Array.isArray(object?.permissions) ? object.permissions.map((e: any) => e) : []
    };
  },
  toSDK(message: ModuleAccountPermission): ModuleAccountPermissionSDKType {
    const obj: any = {};
    obj.account = message.account;
    if (message.permissions) {
      obj.permissions = message.permissions.map(e => e);
    } else {
      obj.permissions = [];
    }
    return obj;
  },
  fromAmino(object: ModuleAccountPermissionAmino): ModuleAccountPermission {
    const message = createBaseModuleAccountPermission();
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    message.permissions = object.permissions?.map(e => e) || [];
    return message;
  },
  toAmino(message: ModuleAccountPermission): ModuleAccountPermissionAmino {
    const obj: any = {};
    obj.account = message.account;
    if (message.permissions) {
      obj.permissions = message.permissions.map(e => e);
    } else {
      obj.permissions = [];
    }
    return obj;
  },
  fromAminoMsg(object: ModuleAccountPermissionAminoMsg): ModuleAccountPermission {
    return ModuleAccountPermission.fromAmino(object.value);
  },
  toAminoMsg(message: ModuleAccountPermission): ModuleAccountPermissionAminoMsg {
    return {
      type: "cosmos-sdk/ModuleAccountPermission",
      value: ModuleAccountPermission.toAmino(message)
    };
  },
  fromProtoMsg(message: ModuleAccountPermissionProtoMsg): ModuleAccountPermission {
    return ModuleAccountPermission.decode(message.value);
  },
  toProto(message: ModuleAccountPermission): Uint8Array {
    return ModuleAccountPermission.encode(message).finish();
  },
  toProtoMsg(message: ModuleAccountPermission): ModuleAccountPermissionProtoMsg {
    return {
      typeUrl: "/cosmos.auth.module.v1.ModuleAccountPermission",
      value: ModuleAccountPermission.encode(message).finish()
    };
  }
};