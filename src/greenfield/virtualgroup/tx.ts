//@ts-nocheck
/* eslint-disable */
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Approval, ApprovalSDKType } from "../common/approval";
import { Params, ParamsSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact, Rpc } from "../../helpers";
export const protobufPackage = "greenfield.virtualgroup";
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /**
   * params defines the x/virtualgroup parameters to update.
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseSDKType {}
export interface MsgCreateGlobalVirtualGroup {
  /** storage_provider defines the operator account address of the storage provider who create the global virtual group. */
  storageProvider: string;
  /** family_id is the identifier for the virtual group's family. */
  familyId: number;
  /** secondary_sp_id is a list of secondary storage provider IDs associated with the virtual group. */
  secondarySpIds: number[];
  /**
   * total_deposit is the total deposit amount required for the virtual group.
   * The tokens needs deposited and the size of storage are correlated.
   */
  deposit: Coin;
}
export interface MsgCreateGlobalVirtualGroupSDKType {
  storage_provider: string;
  family_id: number;
  secondary_sp_ids: number[];
  deposit: CoinSDKType;
}
export interface MsgCreateGlobalVirtualGroupResponse {}
export interface MsgCreateGlobalVirtualGroupResponseSDKType {}
export interface MsgDeleteGlobalVirtualGroup {
  /** storage_provider defines the operator account address of the storage provider who delete the global virtual group. */
  storageProvider: string;
  /** global_virtual_group_id is the identifier of the global virtual group. */
  globalVirtualGroupId: number;
}
export interface MsgDeleteGlobalVirtualGroupSDKType {
  storage_provider: string;
  global_virtual_group_id: number;
}
export interface MsgDeleteGlobalVirtualGroupResponse {}
export interface MsgDeleteGlobalVirtualGroupResponseSDKType {}
export interface MsgDeposit {
  /** storage_provider defines the operator/funding account address of the storage provider who deposit to the global virtual group. */
  storageProvider: string;
  /** global_virtual_group_id is the identifier of the global virtual group. */
  globalVirtualGroupId: number;
  /** deposit is the amount of tokens being deposited for the global virtual group. */
  deposit: Coin;
}
export interface MsgDepositSDKType {
  storage_provider: string;
  global_virtual_group_id: number;
  deposit: CoinSDKType;
}
export interface MsgDepositResponse {}
export interface MsgDepositResponseSDKType {}
export interface MsgWithdraw {
  /** storage_provider defines the operator/funding account address of the storage provider who withdraw from the global virtual group. */
  storageProvider: string;
  /** global_virtual_group_id is the identifier of the global virtual group. */
  globalVirtualGroupId: number;
  /**
   * withdraw is the amount of coins to be withdrawn.
   * The amount needs to be smaller than stored_size * storage_staking_price
   */
  withdraw: Coin;
}
export interface MsgWithdrawSDKType {
  storage_provider: string;
  global_virtual_group_id: number;
  withdraw: CoinSDKType;
}
export interface MsgWithdrawResponse {}
export interface MsgWithdrawResponseSDKType {}
export interface MsgSwapOut {
  /** storage_provider defines the operator account address of the storage provider who want to swap out from the global virtual group. */
  storageProvider: string;
  /**
   * virtual_group_family_id is the identifier of the virtual group family.
   * if it set to non-zero, it represents that the operator swap out as the primary storage provider
   * it it set to zero, it represents that the operator swap out as the secondary storage provider.
   */
  globalVirtualGroupFamilyId: number;
  /**
   * global_virtual_group_ids is a list of global virtual group IDs associated with the swap out.
   * It allows to be empty only when the operator is the primary storage provider.
   */
  globalVirtualGroupIds: number[];
  /** successor_sp_id is the unique id of the successor storage provider. */
  successorSpId: number;
  /**
   * approval includes an expiration time and a signature.
   * The fields to be signed with contains the necessary information of the successor.
   */
  successorSpApproval: Approval;
}
export interface MsgSwapOutSDKType {
  storage_provider: string;
  global_virtual_group_family_id: number;
  global_virtual_group_ids: number[];
  successor_sp_id: number;
  successor_sp_approval: ApprovalSDKType;
}
export interface MsgSwapOutResponse {}
export interface MsgSwapOutResponseSDKType {}
export interface MsgCompleteSwapOut {
  /** storage_provider defines the operator account address of the storage provider who complete swap out task. */
  storageProvider: string;
  /**
   * virtual_group_family_id is the identifier of the virtual group family.
   * if it set to non-zero, it represents that the operator swap out as the primary storage provider
   * it it set to zero, it represents that the operator swap out as the secondary storage provider.
   */
  globalVirtualGroupFamilyId: number;
  /**
   * global_virtual_group_ids is a list of global virtual group IDs associated with the swap out.
   * It allows to be empty only when the operator is the primary storage provider.
   */
  globalVirtualGroupIds: number[];
}
export interface MsgCompleteSwapOutSDKType {
  storage_provider: string;
  global_virtual_group_family_id: number;
  global_virtual_group_ids: number[];
}
export interface MsgCompleteSwapOutResponse {}
export interface MsgCompleteSwapOutResponseSDKType {}
export interface MsgCancelSwapOut {
  /** storage_provider defines the operator account address of the storage provider who cancel the swap out task. */
  storageProvider: string;
  /**
   * virtual_group_family_id is the identifier of the virtual group family.
   * if it set to non-zero, it represents that the operator swap out as the primary storage provider
   * it it set to zero, it represents that the operator swap out as the secondary storage provider.
   */
  globalVirtualGroupFamilyId: number;
  /**
   * global_virtual_group_ids is a list of global virtual group IDs associated with the swap out.
   * It allows to be empty only when the operator is the primary storage provider.
   */
  globalVirtualGroupIds: number[];
}
export interface MsgCancelSwapOutSDKType {
  storage_provider: string;
  global_virtual_group_family_id: number;
  global_virtual_group_ids: number[];
}
export interface MsgCancelSwapOutResponse {}
export interface MsgCancelSwapOutResponseSDKType {}
/**
 * MsgSettle define the message for settling storage income of GVG family or several GVGs.
 * Firstly, the handler will do stream settlement for the payment account; and
 * secondly, the income will be distributed to related storage providers.
 */
export interface MsgSettle {
  /**
   * storage_provider defines the account address who initiates the settle request.
   * After Pampas upgrade, not only storage provider, anyone can submit this message.
   */
  storageProvider: string;
  /** global_virtual_group_family_id is the identifier of the global virtual group family. */
  globalVirtualGroupFamilyId: number;
  /** global_virtual_group_id is the identifier of the global virtual group. */
  globalVirtualGroupIds: number[];
}
/**
 * MsgSettle define the message for settling storage income of GVG family or several GVGs.
 * Firstly, the handler will do stream settlement for the payment account; and
 * secondly, the income will be distributed to related storage providers.
 */
export interface MsgSettleSDKType {
  storage_provider: string;
  global_virtual_group_family_id: number;
  global_virtual_group_ids: number[];
}
export interface MsgSettleResponse {}
export interface MsgSettleResponseSDKType {}
export interface MsgStorageProviderExit {
  /** storage_provider defines the operator account address of the storage provider who want to exit from the greenfield storage network. */
  storageProvider: string;
}
export interface MsgStorageProviderExitSDKType {
  storage_provider: string;
}
export interface MsgStorageProviderExitResponse {}
export interface MsgStorageProviderExitResponseSDKType {}
export interface MsgCompleteStorageProviderExit {
  /** storage_provider defines the operator account address of the storage provider who want to exit from the greenfield storage network. */
  storageProvider: string;
}
export interface MsgCompleteStorageProviderExitSDKType {
  storage_provider: string;
}
export interface MsgCompleteStorageProviderExitResponse {}
export interface MsgCompleteStorageProviderExitResponseSDKType {}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromSDK(object: MsgUpdateParamsSDKType): MsgUpdateParams {
    return {
      authority: object?.authority,
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },
  toSDK(message: MsgUpdateParams): MsgUpdateParamsSDKType {
    const obj: any = {};
    obj.authority = message.authority;
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromSDK(_: MsgUpdateParamsResponseSDKType): MsgUpdateParamsResponse {
    return {};
  },
  toSDK(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseMsgCreateGlobalVirtualGroup(): MsgCreateGlobalVirtualGroup {
  return {
    storageProvider: "",
    familyId: 0,
    secondarySpIds: [],
    deposit: Coin.fromPartial({})
  };
}
export const MsgCreateGlobalVirtualGroup = {
  encode(message: MsgCreateGlobalVirtualGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storageProvider !== "") {
      writer.uint32(10).string(message.storageProvider);
    }
    if (message.familyId !== 0) {
      writer.uint32(16).uint32(message.familyId);
    }
    writer.uint32(26).fork();
    for (const v of message.secondarySpIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGlobalVirtualGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGlobalVirtualGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storageProvider = reader.string();
          break;
        case 2:
          message.familyId = reader.uint32();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.secondarySpIds.push(reader.uint32());
            }
          } else {
            message.secondarySpIds.push(reader.uint32());
          }
          break;
        case 4:
          message.deposit = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateGlobalVirtualGroup {
    return {
      storageProvider: isSet(object.storageProvider) ? String(object.storageProvider) : "",
      familyId: isSet(object.familyId) ? Number(object.familyId) : 0,
      secondarySpIds: Array.isArray(object?.secondarySpIds) ? object.secondarySpIds.map((e: any) => Number(e)) : [],
      deposit: isSet(object.deposit) ? Coin.fromJSON(object.deposit) : undefined
    };
  },
  toJSON(message: MsgCreateGlobalVirtualGroup): unknown {
    const obj: any = {};
    message.storageProvider !== undefined && (obj.storageProvider = message.storageProvider);
    message.familyId !== undefined && (obj.familyId = Math.round(message.familyId));
    if (message.secondarySpIds) {
      obj.secondarySpIds = message.secondarySpIds.map(e => Math.round(e));
    } else {
      obj.secondarySpIds = [];
    }
    message.deposit !== undefined && (obj.deposit = message.deposit ? Coin.toJSON(message.deposit) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateGlobalVirtualGroup>, I>>(object: I): MsgCreateGlobalVirtualGroup {
    const message = createBaseMsgCreateGlobalVirtualGroup();
    message.storageProvider = object.storageProvider ?? "";
    message.familyId = object.familyId ?? 0;
    message.secondarySpIds = object.secondarySpIds?.map(e => e) || [];
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Coin.fromPartial(object.deposit) : undefined;
    return message;
  },
  fromSDK(object: MsgCreateGlobalVirtualGroupSDKType): MsgCreateGlobalVirtualGroup {
    return {
      storageProvider: object?.storage_provider,
      familyId: object?.family_id,
      secondarySpIds: Array.isArray(object?.secondary_sp_ids) ? object.secondary_sp_ids.map((e: any) => e) : [],
      deposit: object.deposit ? Coin.fromSDK(object.deposit) : undefined
    };
  },
  toSDK(message: MsgCreateGlobalVirtualGroup): MsgCreateGlobalVirtualGroupSDKType {
    const obj: any = {};
    obj.storage_provider = message.storageProvider;
    obj.family_id = message.familyId;
    if (message.secondarySpIds) {
      obj.secondary_sp_ids = message.secondarySpIds.map(e => e);
    } else {
      obj.secondary_sp_ids = [];
    }
    message.deposit !== undefined && (obj.deposit = message.deposit ? Coin.toSDK(message.deposit) : undefined);
    return obj;
  }
};
function createBaseMsgCreateGlobalVirtualGroupResponse(): MsgCreateGlobalVirtualGroupResponse {
  return {};
}
export const MsgCreateGlobalVirtualGroupResponse = {
  encode(_: MsgCreateGlobalVirtualGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGlobalVirtualGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGlobalVirtualGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgCreateGlobalVirtualGroupResponse {
    return {};
  },
  toJSON(_: MsgCreateGlobalVirtualGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateGlobalVirtualGroupResponse>, I>>(_: I): MsgCreateGlobalVirtualGroupResponse {
    const message = createBaseMsgCreateGlobalVirtualGroupResponse();
    return message;
  },
  fromSDK(_: MsgCreateGlobalVirtualGroupResponseSDKType): MsgCreateGlobalVirtualGroupResponse {
    return {};
  },
  toSDK(_: MsgCreateGlobalVirtualGroupResponse): MsgCreateGlobalVirtualGroupResponseSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseMsgDeleteGlobalVirtualGroup(): MsgDeleteGlobalVirtualGroup {
  return {
    storageProvider: "",
    globalVirtualGroupId: 0
  };
}
export const MsgDeleteGlobalVirtualGroup = {
  encode(message: MsgDeleteGlobalVirtualGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storageProvider !== "") {
      writer.uint32(10).string(message.storageProvider);
    }
    if (message.globalVirtualGroupId !== 0) {
      writer.uint32(16).uint32(message.globalVirtualGroupId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteGlobalVirtualGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteGlobalVirtualGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storageProvider = reader.string();
          break;
        case 2:
          message.globalVirtualGroupId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDeleteGlobalVirtualGroup {
    return {
      storageProvider: isSet(object.storageProvider) ? String(object.storageProvider) : "",
      globalVirtualGroupId: isSet(object.globalVirtualGroupId) ? Number(object.globalVirtualGroupId) : 0
    };
  },
  toJSON(message: MsgDeleteGlobalVirtualGroup): unknown {
    const obj: any = {};
    message.storageProvider !== undefined && (obj.storageProvider = message.storageProvider);
    message.globalVirtualGroupId !== undefined && (obj.globalVirtualGroupId = Math.round(message.globalVirtualGroupId));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteGlobalVirtualGroup>, I>>(object: I): MsgDeleteGlobalVirtualGroup {
    const message = createBaseMsgDeleteGlobalVirtualGroup();
    message.storageProvider = object.storageProvider ?? "";
    message.globalVirtualGroupId = object.globalVirtualGroupId ?? 0;
    return message;
  },
  fromSDK(object: MsgDeleteGlobalVirtualGroupSDKType): MsgDeleteGlobalVirtualGroup {
    return {
      storageProvider: object?.storage_provider,
      globalVirtualGroupId: object?.global_virtual_group_id
    };
  },
  toSDK(message: MsgDeleteGlobalVirtualGroup): MsgDeleteGlobalVirtualGroupSDKType {
    const obj: any = {};
    obj.storage_provider = message.storageProvider;
    obj.global_virtual_group_id = message.globalVirtualGroupId;
    return obj;
  }
};
function createBaseMsgDeleteGlobalVirtualGroupResponse(): MsgDeleteGlobalVirtualGroupResponse {
  return {};
}
export const MsgDeleteGlobalVirtualGroupResponse = {
  encode(_: MsgDeleteGlobalVirtualGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteGlobalVirtualGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteGlobalVirtualGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgDeleteGlobalVirtualGroupResponse {
    return {};
  },
  toJSON(_: MsgDeleteGlobalVirtualGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteGlobalVirtualGroupResponse>, I>>(_: I): MsgDeleteGlobalVirtualGroupResponse {
    const message = createBaseMsgDeleteGlobalVirtualGroupResponse();
    return message;
  },
  fromSDK(_: MsgDeleteGlobalVirtualGroupResponseSDKType): MsgDeleteGlobalVirtualGroupResponse {
    return {};
  },
  toSDK(_: MsgDeleteGlobalVirtualGroupResponse): MsgDeleteGlobalVirtualGroupResponseSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseMsgDeposit(): MsgDeposit {
  return {
    storageProvider: "",
    globalVirtualGroupId: 0,
    deposit: Coin.fromPartial({})
  };
}
export const MsgDeposit = {
  encode(message: MsgDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storageProvider !== "") {
      writer.uint32(10).string(message.storageProvider);
    }
    if (message.globalVirtualGroupId !== 0) {
      writer.uint32(16).uint32(message.globalVirtualGroupId);
    }
    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storageProvider = reader.string();
          break;
        case 2:
          message.globalVirtualGroupId = reader.uint32();
          break;
        case 3:
          message.deposit = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDeposit {
    return {
      storageProvider: isSet(object.storageProvider) ? String(object.storageProvider) : "",
      globalVirtualGroupId: isSet(object.globalVirtualGroupId) ? Number(object.globalVirtualGroupId) : 0,
      deposit: isSet(object.deposit) ? Coin.fromJSON(object.deposit) : undefined
    };
  },
  toJSON(message: MsgDeposit): unknown {
    const obj: any = {};
    message.storageProvider !== undefined && (obj.storageProvider = message.storageProvider);
    message.globalVirtualGroupId !== undefined && (obj.globalVirtualGroupId = Math.round(message.globalVirtualGroupId));
    message.deposit !== undefined && (obj.deposit = message.deposit ? Coin.toJSON(message.deposit) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeposit>, I>>(object: I): MsgDeposit {
    const message = createBaseMsgDeposit();
    message.storageProvider = object.storageProvider ?? "";
    message.globalVirtualGroupId = object.globalVirtualGroupId ?? 0;
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Coin.fromPartial(object.deposit) : undefined;
    return message;
  },
  fromSDK(object: MsgDepositSDKType): MsgDeposit {
    return {
      storageProvider: object?.storage_provider,
      globalVirtualGroupId: object?.global_virtual_group_id,
      deposit: object.deposit ? Coin.fromSDK(object.deposit) : undefined
    };
  },
  toSDK(message: MsgDeposit): MsgDepositSDKType {
    const obj: any = {};
    obj.storage_provider = message.storageProvider;
    obj.global_virtual_group_id = message.globalVirtualGroupId;
    message.deposit !== undefined && (obj.deposit = message.deposit ? Coin.toSDK(message.deposit) : undefined);
    return obj;
  }
};
function createBaseMsgDepositResponse(): MsgDepositResponse {
  return {};
}
export const MsgDepositResponse = {
  encode(_: MsgDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgDepositResponse {
    return {};
  },
  toJSON(_: MsgDepositResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDepositResponse>, I>>(_: I): MsgDepositResponse {
    const message = createBaseMsgDepositResponse();
    return message;
  },
  fromSDK(_: MsgDepositResponseSDKType): MsgDepositResponse {
    return {};
  },
  toSDK(_: MsgDepositResponse): MsgDepositResponseSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseMsgWithdraw(): MsgWithdraw {
  return {
    storageProvider: "",
    globalVirtualGroupId: 0,
    withdraw: Coin.fromPartial({})
  };
}
export const MsgWithdraw = {
  encode(message: MsgWithdraw, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storageProvider !== "") {
      writer.uint32(10).string(message.storageProvider);
    }
    if (message.globalVirtualGroupId !== 0) {
      writer.uint32(16).uint32(message.globalVirtualGroupId);
    }
    if (message.withdraw !== undefined) {
      Coin.encode(message.withdraw, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdraw {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdraw();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storageProvider = reader.string();
          break;
        case 2:
          message.globalVirtualGroupId = reader.uint32();
          break;
        case 3:
          message.withdraw = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdraw {
    return {
      storageProvider: isSet(object.storageProvider) ? String(object.storageProvider) : "",
      globalVirtualGroupId: isSet(object.globalVirtualGroupId) ? Number(object.globalVirtualGroupId) : 0,
      withdraw: isSet(object.withdraw) ? Coin.fromJSON(object.withdraw) : undefined
    };
  },
  toJSON(message: MsgWithdraw): unknown {
    const obj: any = {};
    message.storageProvider !== undefined && (obj.storageProvider = message.storageProvider);
    message.globalVirtualGroupId !== undefined && (obj.globalVirtualGroupId = Math.round(message.globalVirtualGroupId));
    message.withdraw !== undefined && (obj.withdraw = message.withdraw ? Coin.toJSON(message.withdraw) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgWithdraw>, I>>(object: I): MsgWithdraw {
    const message = createBaseMsgWithdraw();
    message.storageProvider = object.storageProvider ?? "";
    message.globalVirtualGroupId = object.globalVirtualGroupId ?? 0;
    message.withdraw = object.withdraw !== undefined && object.withdraw !== null ? Coin.fromPartial(object.withdraw) : undefined;
    return message;
  },
  fromSDK(object: MsgWithdrawSDKType): MsgWithdraw {
    return {
      storageProvider: object?.storage_provider,
      globalVirtualGroupId: object?.global_virtual_group_id,
      withdraw: object.withdraw ? Coin.fromSDK(object.withdraw) : undefined
    };
  },
  toSDK(message: MsgWithdraw): MsgWithdrawSDKType {
    const obj: any = {};
    obj.storage_provider = message.storageProvider;
    obj.global_virtual_group_id = message.globalVirtualGroupId;
    message.withdraw !== undefined && (obj.withdraw = message.withdraw ? Coin.toSDK(message.withdraw) : undefined);
    return obj;
  }
};
function createBaseMsgWithdrawResponse(): MsgWithdrawResponse {
  return {};
}
export const MsgWithdrawResponse = {
  encode(_: MsgWithdrawResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgWithdrawResponse {
    return {};
  },
  toJSON(_: MsgWithdrawResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgWithdrawResponse>, I>>(_: I): MsgWithdrawResponse {
    const message = createBaseMsgWithdrawResponse();
    return message;
  },
  fromSDK(_: MsgWithdrawResponseSDKType): MsgWithdrawResponse {
    return {};
  },
  toSDK(_: MsgWithdrawResponse): MsgWithdrawResponseSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseMsgSwapOut(): MsgSwapOut {
  return {
    storageProvider: "",
    globalVirtualGroupFamilyId: 0,
    globalVirtualGroupIds: [],
    successorSpId: 0,
    successorSpApproval: Approval.fromPartial({})
  };
}
export const MsgSwapOut = {
  encode(message: MsgSwapOut, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storageProvider !== "") {
      writer.uint32(10).string(message.storageProvider);
    }
    if (message.globalVirtualGroupFamilyId !== 0) {
      writer.uint32(16).uint32(message.globalVirtualGroupFamilyId);
    }
    writer.uint32(26).fork();
    for (const v of message.globalVirtualGroupIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.successorSpId !== 0) {
      writer.uint32(32).uint32(message.successorSpId);
    }
    if (message.successorSpApproval !== undefined) {
      Approval.encode(message.successorSpApproval, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapOut {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapOut();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storageProvider = reader.string();
          break;
        case 2:
          message.globalVirtualGroupFamilyId = reader.uint32();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.globalVirtualGroupIds.push(reader.uint32());
            }
          } else {
            message.globalVirtualGroupIds.push(reader.uint32());
          }
          break;
        case 4:
          message.successorSpId = reader.uint32();
          break;
        case 5:
          message.successorSpApproval = Approval.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSwapOut {
    return {
      storageProvider: isSet(object.storageProvider) ? String(object.storageProvider) : "",
      globalVirtualGroupFamilyId: isSet(object.globalVirtualGroupFamilyId) ? Number(object.globalVirtualGroupFamilyId) : 0,
      globalVirtualGroupIds: Array.isArray(object?.globalVirtualGroupIds) ? object.globalVirtualGroupIds.map((e: any) => Number(e)) : [],
      successorSpId: isSet(object.successorSpId) ? Number(object.successorSpId) : 0,
      successorSpApproval: isSet(object.successorSpApproval) ? Approval.fromJSON(object.successorSpApproval) : undefined
    };
  },
  toJSON(message: MsgSwapOut): unknown {
    const obj: any = {};
    message.storageProvider !== undefined && (obj.storageProvider = message.storageProvider);
    message.globalVirtualGroupFamilyId !== undefined && (obj.globalVirtualGroupFamilyId = Math.round(message.globalVirtualGroupFamilyId));
    if (message.globalVirtualGroupIds) {
      obj.globalVirtualGroupIds = message.globalVirtualGroupIds.map(e => Math.round(e));
    } else {
      obj.globalVirtualGroupIds = [];
    }
    message.successorSpId !== undefined && (obj.successorSpId = Math.round(message.successorSpId));
    message.successorSpApproval !== undefined && (obj.successorSpApproval = message.successorSpApproval ? Approval.toJSON(message.successorSpApproval) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSwapOut>, I>>(object: I): MsgSwapOut {
    const message = createBaseMsgSwapOut();
    message.storageProvider = object.storageProvider ?? "";
    message.globalVirtualGroupFamilyId = object.globalVirtualGroupFamilyId ?? 0;
    message.globalVirtualGroupIds = object.globalVirtualGroupIds?.map(e => e) || [];
    message.successorSpId = object.successorSpId ?? 0;
    message.successorSpApproval = object.successorSpApproval !== undefined && object.successorSpApproval !== null ? Approval.fromPartial(object.successorSpApproval) : undefined;
    return message;
  },
  fromSDK(object: MsgSwapOutSDKType): MsgSwapOut {
    return {
      storageProvider: object?.storage_provider,
      globalVirtualGroupFamilyId: object?.global_virtual_group_family_id,
      globalVirtualGroupIds: Array.isArray(object?.global_virtual_group_ids) ? object.global_virtual_group_ids.map((e: any) => e) : [],
      successorSpId: object?.successor_sp_id,
      successorSpApproval: object.successor_sp_approval ? Approval.fromSDK(object.successor_sp_approval) : undefined
    };
  },
  toSDK(message: MsgSwapOut): MsgSwapOutSDKType {
    const obj: any = {};
    obj.storage_provider = message.storageProvider;
    obj.global_virtual_group_family_id = message.globalVirtualGroupFamilyId;
    if (message.globalVirtualGroupIds) {
      obj.global_virtual_group_ids = message.globalVirtualGroupIds.map(e => e);
    } else {
      obj.global_virtual_group_ids = [];
    }
    obj.successor_sp_id = message.successorSpId;
    message.successorSpApproval !== undefined && (obj.successor_sp_approval = message.successorSpApproval ? Approval.toSDK(message.successorSpApproval) : undefined);
    return obj;
  }
};
function createBaseMsgSwapOutResponse(): MsgSwapOutResponse {
  return {};
}
export const MsgSwapOutResponse = {
  encode(_: MsgSwapOutResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapOutResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapOutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgSwapOutResponse {
    return {};
  },
  toJSON(_: MsgSwapOutResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSwapOutResponse>, I>>(_: I): MsgSwapOutResponse {
    const message = createBaseMsgSwapOutResponse();
    return message;
  },
  fromSDK(_: MsgSwapOutResponseSDKType): MsgSwapOutResponse {
    return {};
  },
  toSDK(_: MsgSwapOutResponse): MsgSwapOutResponseSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseMsgCompleteSwapOut(): MsgCompleteSwapOut {
  return {
    storageProvider: "",
    globalVirtualGroupFamilyId: 0,
    globalVirtualGroupIds: []
  };
}
export const MsgCompleteSwapOut = {
  encode(message: MsgCompleteSwapOut, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storageProvider !== "") {
      writer.uint32(10).string(message.storageProvider);
    }
    if (message.globalVirtualGroupFamilyId !== 0) {
      writer.uint32(16).uint32(message.globalVirtualGroupFamilyId);
    }
    writer.uint32(26).fork();
    for (const v of message.globalVirtualGroupIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCompleteSwapOut {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCompleteSwapOut();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storageProvider = reader.string();
          break;
        case 2:
          message.globalVirtualGroupFamilyId = reader.uint32();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.globalVirtualGroupIds.push(reader.uint32());
            }
          } else {
            message.globalVirtualGroupIds.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCompleteSwapOut {
    return {
      storageProvider: isSet(object.storageProvider) ? String(object.storageProvider) : "",
      globalVirtualGroupFamilyId: isSet(object.globalVirtualGroupFamilyId) ? Number(object.globalVirtualGroupFamilyId) : 0,
      globalVirtualGroupIds: Array.isArray(object?.globalVirtualGroupIds) ? object.globalVirtualGroupIds.map((e: any) => Number(e)) : []
    };
  },
  toJSON(message: MsgCompleteSwapOut): unknown {
    const obj: any = {};
    message.storageProvider !== undefined && (obj.storageProvider = message.storageProvider);
    message.globalVirtualGroupFamilyId !== undefined && (obj.globalVirtualGroupFamilyId = Math.round(message.globalVirtualGroupFamilyId));
    if (message.globalVirtualGroupIds) {
      obj.globalVirtualGroupIds = message.globalVirtualGroupIds.map(e => Math.round(e));
    } else {
      obj.globalVirtualGroupIds = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCompleteSwapOut>, I>>(object: I): MsgCompleteSwapOut {
    const message = createBaseMsgCompleteSwapOut();
    message.storageProvider = object.storageProvider ?? "";
    message.globalVirtualGroupFamilyId = object.globalVirtualGroupFamilyId ?? 0;
    message.globalVirtualGroupIds = object.globalVirtualGroupIds?.map(e => e) || [];
    return message;
  },
  fromSDK(object: MsgCompleteSwapOutSDKType): MsgCompleteSwapOut {
    return {
      storageProvider: object?.storage_provider,
      globalVirtualGroupFamilyId: object?.global_virtual_group_family_id,
      globalVirtualGroupIds: Array.isArray(object?.global_virtual_group_ids) ? object.global_virtual_group_ids.map((e: any) => e) : []
    };
  },
  toSDK(message: MsgCompleteSwapOut): MsgCompleteSwapOutSDKType {
    const obj: any = {};
    obj.storage_provider = message.storageProvider;
    obj.global_virtual_group_family_id = message.globalVirtualGroupFamilyId;
    if (message.globalVirtualGroupIds) {
      obj.global_virtual_group_ids = message.globalVirtualGroupIds.map(e => e);
    } else {
      obj.global_virtual_group_ids = [];
    }
    return obj;
  }
};
function createBaseMsgCompleteSwapOutResponse(): MsgCompleteSwapOutResponse {
  return {};
}
export const MsgCompleteSwapOutResponse = {
  encode(_: MsgCompleteSwapOutResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCompleteSwapOutResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCompleteSwapOutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgCompleteSwapOutResponse {
    return {};
  },
  toJSON(_: MsgCompleteSwapOutResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCompleteSwapOutResponse>, I>>(_: I): MsgCompleteSwapOutResponse {
    const message = createBaseMsgCompleteSwapOutResponse();
    return message;
  },
  fromSDK(_: MsgCompleteSwapOutResponseSDKType): MsgCompleteSwapOutResponse {
    return {};
  },
  toSDK(_: MsgCompleteSwapOutResponse): MsgCompleteSwapOutResponseSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseMsgCancelSwapOut(): MsgCancelSwapOut {
  return {
    storageProvider: "",
    globalVirtualGroupFamilyId: 0,
    globalVirtualGroupIds: []
  };
}
export const MsgCancelSwapOut = {
  encode(message: MsgCancelSwapOut, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storageProvider !== "") {
      writer.uint32(10).string(message.storageProvider);
    }
    if (message.globalVirtualGroupFamilyId !== 0) {
      writer.uint32(16).uint32(message.globalVirtualGroupFamilyId);
    }
    writer.uint32(26).fork();
    for (const v of message.globalVirtualGroupIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelSwapOut {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelSwapOut();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storageProvider = reader.string();
          break;
        case 2:
          message.globalVirtualGroupFamilyId = reader.uint32();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.globalVirtualGroupIds.push(reader.uint32());
            }
          } else {
            message.globalVirtualGroupIds.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCancelSwapOut {
    return {
      storageProvider: isSet(object.storageProvider) ? String(object.storageProvider) : "",
      globalVirtualGroupFamilyId: isSet(object.globalVirtualGroupFamilyId) ? Number(object.globalVirtualGroupFamilyId) : 0,
      globalVirtualGroupIds: Array.isArray(object?.globalVirtualGroupIds) ? object.globalVirtualGroupIds.map((e: any) => Number(e)) : []
    };
  },
  toJSON(message: MsgCancelSwapOut): unknown {
    const obj: any = {};
    message.storageProvider !== undefined && (obj.storageProvider = message.storageProvider);
    message.globalVirtualGroupFamilyId !== undefined && (obj.globalVirtualGroupFamilyId = Math.round(message.globalVirtualGroupFamilyId));
    if (message.globalVirtualGroupIds) {
      obj.globalVirtualGroupIds = message.globalVirtualGroupIds.map(e => Math.round(e));
    } else {
      obj.globalVirtualGroupIds = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCancelSwapOut>, I>>(object: I): MsgCancelSwapOut {
    const message = createBaseMsgCancelSwapOut();
    message.storageProvider = object.storageProvider ?? "";
    message.globalVirtualGroupFamilyId = object.globalVirtualGroupFamilyId ?? 0;
    message.globalVirtualGroupIds = object.globalVirtualGroupIds?.map(e => e) || [];
    return message;
  },
  fromSDK(object: MsgCancelSwapOutSDKType): MsgCancelSwapOut {
    return {
      storageProvider: object?.storage_provider,
      globalVirtualGroupFamilyId: object?.global_virtual_group_family_id,
      globalVirtualGroupIds: Array.isArray(object?.global_virtual_group_ids) ? object.global_virtual_group_ids.map((e: any) => e) : []
    };
  },
  toSDK(message: MsgCancelSwapOut): MsgCancelSwapOutSDKType {
    const obj: any = {};
    obj.storage_provider = message.storageProvider;
    obj.global_virtual_group_family_id = message.globalVirtualGroupFamilyId;
    if (message.globalVirtualGroupIds) {
      obj.global_virtual_group_ids = message.globalVirtualGroupIds.map(e => e);
    } else {
      obj.global_virtual_group_ids = [];
    }
    return obj;
  }
};
function createBaseMsgCancelSwapOutResponse(): MsgCancelSwapOutResponse {
  return {};
}
export const MsgCancelSwapOutResponse = {
  encode(_: MsgCancelSwapOutResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelSwapOutResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelSwapOutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgCancelSwapOutResponse {
    return {};
  },
  toJSON(_: MsgCancelSwapOutResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCancelSwapOutResponse>, I>>(_: I): MsgCancelSwapOutResponse {
    const message = createBaseMsgCancelSwapOutResponse();
    return message;
  },
  fromSDK(_: MsgCancelSwapOutResponseSDKType): MsgCancelSwapOutResponse {
    return {};
  },
  toSDK(_: MsgCancelSwapOutResponse): MsgCancelSwapOutResponseSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseMsgSettle(): MsgSettle {
  return {
    storageProvider: "",
    globalVirtualGroupFamilyId: 0,
    globalVirtualGroupIds: []
  };
}
export const MsgSettle = {
  encode(message: MsgSettle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storageProvider !== "") {
      writer.uint32(10).string(message.storageProvider);
    }
    if (message.globalVirtualGroupFamilyId !== 0) {
      writer.uint32(16).uint32(message.globalVirtualGroupFamilyId);
    }
    writer.uint32(26).fork();
    for (const v of message.globalVirtualGroupIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSettle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSettle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storageProvider = reader.string();
          break;
        case 2:
          message.globalVirtualGroupFamilyId = reader.uint32();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.globalVirtualGroupIds.push(reader.uint32());
            }
          } else {
            message.globalVirtualGroupIds.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSettle {
    return {
      storageProvider: isSet(object.storageProvider) ? String(object.storageProvider) : "",
      globalVirtualGroupFamilyId: isSet(object.globalVirtualGroupFamilyId) ? Number(object.globalVirtualGroupFamilyId) : 0,
      globalVirtualGroupIds: Array.isArray(object?.globalVirtualGroupIds) ? object.globalVirtualGroupIds.map((e: any) => Number(e)) : []
    };
  },
  toJSON(message: MsgSettle): unknown {
    const obj: any = {};
    message.storageProvider !== undefined && (obj.storageProvider = message.storageProvider);
    message.globalVirtualGroupFamilyId !== undefined && (obj.globalVirtualGroupFamilyId = Math.round(message.globalVirtualGroupFamilyId));
    if (message.globalVirtualGroupIds) {
      obj.globalVirtualGroupIds = message.globalVirtualGroupIds.map(e => Math.round(e));
    } else {
      obj.globalVirtualGroupIds = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSettle>, I>>(object: I): MsgSettle {
    const message = createBaseMsgSettle();
    message.storageProvider = object.storageProvider ?? "";
    message.globalVirtualGroupFamilyId = object.globalVirtualGroupFamilyId ?? 0;
    message.globalVirtualGroupIds = object.globalVirtualGroupIds?.map(e => e) || [];
    return message;
  },
  fromSDK(object: MsgSettleSDKType): MsgSettle {
    return {
      storageProvider: object?.storage_provider,
      globalVirtualGroupFamilyId: object?.global_virtual_group_family_id,
      globalVirtualGroupIds: Array.isArray(object?.global_virtual_group_ids) ? object.global_virtual_group_ids.map((e: any) => e) : []
    };
  },
  toSDK(message: MsgSettle): MsgSettleSDKType {
    const obj: any = {};
    obj.storage_provider = message.storageProvider;
    obj.global_virtual_group_family_id = message.globalVirtualGroupFamilyId;
    if (message.globalVirtualGroupIds) {
      obj.global_virtual_group_ids = message.globalVirtualGroupIds.map(e => e);
    } else {
      obj.global_virtual_group_ids = [];
    }
    return obj;
  }
};
function createBaseMsgSettleResponse(): MsgSettleResponse {
  return {};
}
export const MsgSettleResponse = {
  encode(_: MsgSettleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSettleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSettleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgSettleResponse {
    return {};
  },
  toJSON(_: MsgSettleResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSettleResponse>, I>>(_: I): MsgSettleResponse {
    const message = createBaseMsgSettleResponse();
    return message;
  },
  fromSDK(_: MsgSettleResponseSDKType): MsgSettleResponse {
    return {};
  },
  toSDK(_: MsgSettleResponse): MsgSettleResponseSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseMsgStorageProviderExit(): MsgStorageProviderExit {
  return {
    storageProvider: ""
  };
}
export const MsgStorageProviderExit = {
  encode(message: MsgStorageProviderExit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storageProvider !== "") {
      writer.uint32(10).string(message.storageProvider);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStorageProviderExit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStorageProviderExit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storageProvider = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgStorageProviderExit {
    return {
      storageProvider: isSet(object.storageProvider) ? String(object.storageProvider) : ""
    };
  },
  toJSON(message: MsgStorageProviderExit): unknown {
    const obj: any = {};
    message.storageProvider !== undefined && (obj.storageProvider = message.storageProvider);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgStorageProviderExit>, I>>(object: I): MsgStorageProviderExit {
    const message = createBaseMsgStorageProviderExit();
    message.storageProvider = object.storageProvider ?? "";
    return message;
  },
  fromSDK(object: MsgStorageProviderExitSDKType): MsgStorageProviderExit {
    return {
      storageProvider: object?.storage_provider
    };
  },
  toSDK(message: MsgStorageProviderExit): MsgStorageProviderExitSDKType {
    const obj: any = {};
    obj.storage_provider = message.storageProvider;
    return obj;
  }
};
function createBaseMsgStorageProviderExitResponse(): MsgStorageProviderExitResponse {
  return {};
}
export const MsgStorageProviderExitResponse = {
  encode(_: MsgStorageProviderExitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStorageProviderExitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStorageProviderExitResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgStorageProviderExitResponse {
    return {};
  },
  toJSON(_: MsgStorageProviderExitResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgStorageProviderExitResponse>, I>>(_: I): MsgStorageProviderExitResponse {
    const message = createBaseMsgStorageProviderExitResponse();
    return message;
  },
  fromSDK(_: MsgStorageProviderExitResponseSDKType): MsgStorageProviderExitResponse {
    return {};
  },
  toSDK(_: MsgStorageProviderExitResponse): MsgStorageProviderExitResponseSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseMsgCompleteStorageProviderExit(): MsgCompleteStorageProviderExit {
  return {
    storageProvider: ""
  };
}
export const MsgCompleteStorageProviderExit = {
  encode(message: MsgCompleteStorageProviderExit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storageProvider !== "") {
      writer.uint32(10).string(message.storageProvider);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCompleteStorageProviderExit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCompleteStorageProviderExit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storageProvider = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCompleteStorageProviderExit {
    return {
      storageProvider: isSet(object.storageProvider) ? String(object.storageProvider) : ""
    };
  },
  toJSON(message: MsgCompleteStorageProviderExit): unknown {
    const obj: any = {};
    message.storageProvider !== undefined && (obj.storageProvider = message.storageProvider);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCompleteStorageProviderExit>, I>>(object: I): MsgCompleteStorageProviderExit {
    const message = createBaseMsgCompleteStorageProviderExit();
    message.storageProvider = object.storageProvider ?? "";
    return message;
  },
  fromSDK(object: MsgCompleteStorageProviderExitSDKType): MsgCompleteStorageProviderExit {
    return {
      storageProvider: object?.storage_provider
    };
  },
  toSDK(message: MsgCompleteStorageProviderExit): MsgCompleteStorageProviderExitSDKType {
    const obj: any = {};
    obj.storage_provider = message.storageProvider;
    return obj;
  }
};
function createBaseMsgCompleteStorageProviderExitResponse(): MsgCompleteStorageProviderExitResponse {
  return {};
}
export const MsgCompleteStorageProviderExitResponse = {
  encode(_: MsgCompleteStorageProviderExitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCompleteStorageProviderExitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCompleteStorageProviderExitResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgCompleteStorageProviderExitResponse {
    return {};
  },
  toJSON(_: MsgCompleteStorageProviderExitResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCompleteStorageProviderExitResponse>, I>>(_: I): MsgCompleteStorageProviderExitResponse {
    const message = createBaseMsgCompleteStorageProviderExitResponse();
    return message;
  },
  fromSDK(_: MsgCompleteStorageProviderExitResponseSDKType): MsgCompleteStorageProviderExitResponse {
    return {};
  },
  toSDK(_: MsgCompleteStorageProviderExitResponse): MsgCompleteStorageProviderExitResponseSDKType {
    const obj: any = {};
    return obj;
  }
};
/** Msg defines the Msg service. */
export interface Msg {
  CreateGlobalVirtualGroup(request: MsgCreateGlobalVirtualGroup): Promise<MsgCreateGlobalVirtualGroupResponse>;
  DeleteGlobalVirtualGroup(request: MsgDeleteGlobalVirtualGroup): Promise<MsgDeleteGlobalVirtualGroupResponse>;
  Deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
  Withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse>;
  SwapOut(request: MsgSwapOut): Promise<MsgSwapOutResponse>;
  Settle(request: MsgSettle): Promise<MsgSettleResponse>;
  /** Since: cosmos-sdk 0.47 */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  StorageProviderExit(request: MsgStorageProviderExit): Promise<MsgStorageProviderExitResponse>;
  CompleteStorageProviderExit(request: MsgCompleteStorageProviderExit): Promise<MsgCompleteStorageProviderExitResponse>;
  CompleteSwapOut(request: MsgCompleteSwapOut): Promise<MsgCompleteSwapOutResponse>;
  CancelSwapOut(request: MsgCancelSwapOut): Promise<MsgCancelSwapOutResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateGlobalVirtualGroup = this.CreateGlobalVirtualGroup.bind(this);
    this.DeleteGlobalVirtualGroup = this.DeleteGlobalVirtualGroup.bind(this);
    this.Deposit = this.Deposit.bind(this);
    this.Withdraw = this.Withdraw.bind(this);
    this.SwapOut = this.SwapOut.bind(this);
    this.Settle = this.Settle.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
    this.StorageProviderExit = this.StorageProviderExit.bind(this);
    this.CompleteStorageProviderExit = this.CompleteStorageProviderExit.bind(this);
    this.CompleteSwapOut = this.CompleteSwapOut.bind(this);
    this.CancelSwapOut = this.CancelSwapOut.bind(this);
  }
  CreateGlobalVirtualGroup(request: MsgCreateGlobalVirtualGroup): Promise<MsgCreateGlobalVirtualGroupResponse> {
    const data = MsgCreateGlobalVirtualGroup.encode(request).finish();
    const promise = this.rpc.request("greenfield.virtualgroup.Msg", "CreateGlobalVirtualGroup", data);
    return promise.then(data => MsgCreateGlobalVirtualGroupResponse.decode(new _m0.Reader(data)));
  }
  DeleteGlobalVirtualGroup(request: MsgDeleteGlobalVirtualGroup): Promise<MsgDeleteGlobalVirtualGroupResponse> {
    const data = MsgDeleteGlobalVirtualGroup.encode(request).finish();
    const promise = this.rpc.request("greenfield.virtualgroup.Msg", "DeleteGlobalVirtualGroup", data);
    return promise.then(data => MsgDeleteGlobalVirtualGroupResponse.decode(new _m0.Reader(data)));
  }
  Deposit(request: MsgDeposit): Promise<MsgDepositResponse> {
    const data = MsgDeposit.encode(request).finish();
    const promise = this.rpc.request("greenfield.virtualgroup.Msg", "Deposit", data);
    return promise.then(data => MsgDepositResponse.decode(new _m0.Reader(data)));
  }
  Withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse> {
    const data = MsgWithdraw.encode(request).finish();
    const promise = this.rpc.request("greenfield.virtualgroup.Msg", "Withdraw", data);
    return promise.then(data => MsgWithdrawResponse.decode(new _m0.Reader(data)));
  }
  SwapOut(request: MsgSwapOut): Promise<MsgSwapOutResponse> {
    const data = MsgSwapOut.encode(request).finish();
    const promise = this.rpc.request("greenfield.virtualgroup.Msg", "SwapOut", data);
    return promise.then(data => MsgSwapOutResponse.decode(new _m0.Reader(data)));
  }
  Settle(request: MsgSettle): Promise<MsgSettleResponse> {
    const data = MsgSettle.encode(request).finish();
    const promise = this.rpc.request("greenfield.virtualgroup.Msg", "Settle", data);
    return promise.then(data => MsgSettleResponse.decode(new _m0.Reader(data)));
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("greenfield.virtualgroup.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
  }
  StorageProviderExit(request: MsgStorageProviderExit): Promise<MsgStorageProviderExitResponse> {
    const data = MsgStorageProviderExit.encode(request).finish();
    const promise = this.rpc.request("greenfield.virtualgroup.Msg", "StorageProviderExit", data);
    return promise.then(data => MsgStorageProviderExitResponse.decode(new _m0.Reader(data)));
  }
  CompleteStorageProviderExit(request: MsgCompleteStorageProviderExit): Promise<MsgCompleteStorageProviderExitResponse> {
    const data = MsgCompleteStorageProviderExit.encode(request).finish();
    const promise = this.rpc.request("greenfield.virtualgroup.Msg", "CompleteStorageProviderExit", data);
    return promise.then(data => MsgCompleteStorageProviderExitResponse.decode(new _m0.Reader(data)));
  }
  CompleteSwapOut(request: MsgCompleteSwapOut): Promise<MsgCompleteSwapOutResponse> {
    const data = MsgCompleteSwapOut.encode(request).finish();
    const promise = this.rpc.request("greenfield.virtualgroup.Msg", "CompleteSwapOut", data);
    return promise.then(data => MsgCompleteSwapOutResponse.decode(new _m0.Reader(data)));
  }
  CancelSwapOut(request: MsgCancelSwapOut): Promise<MsgCancelSwapOutResponse> {
    const data = MsgCancelSwapOut.encode(request).finish();
    const promise = this.rpc.request("greenfield.virtualgroup.Msg", "CancelSwapOut", data);
    return promise.then(data => MsgCancelSwapOutResponse.decode(new _m0.Reader(data)));
  }
}