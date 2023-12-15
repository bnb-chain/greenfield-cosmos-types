//@ts-nocheck
/* eslint-disable */
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Approval, ApprovalSDKType } from "../common/approval";
import { Params, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../binary";
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
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/greenfield.virtualgroup.MsgUpdateParams";
  value: Uint8Array;
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
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/greenfield.virtualgroup.MsgUpdateParamsResponse";
  value: Uint8Array;
}
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
export interface MsgCreateGlobalVirtualGroupProtoMsg {
  typeUrl: "/greenfield.virtualgroup.MsgCreateGlobalVirtualGroup";
  value: Uint8Array;
}
export interface MsgCreateGlobalVirtualGroupSDKType {
  storage_provider: string;
  family_id: number;
  secondary_sp_ids: number[];
  deposit: CoinSDKType;
}
export interface MsgCreateGlobalVirtualGroupResponse {}
export interface MsgCreateGlobalVirtualGroupResponseProtoMsg {
  typeUrl: "/greenfield.virtualgroup.MsgCreateGlobalVirtualGroupResponse";
  value: Uint8Array;
}
export interface MsgCreateGlobalVirtualGroupResponseSDKType {}
export interface MsgDeleteGlobalVirtualGroup {
  /** storage_provider defines the operator account address of the storage provider who delete the global virtual group. */
  storageProvider: string;
  /** global_virtual_group_id is the identifier of the global virtual group. */
  globalVirtualGroupId: number;
}
export interface MsgDeleteGlobalVirtualGroupProtoMsg {
  typeUrl: "/greenfield.virtualgroup.MsgDeleteGlobalVirtualGroup";
  value: Uint8Array;
}
export interface MsgDeleteGlobalVirtualGroupSDKType {
  storage_provider: string;
  global_virtual_group_id: number;
}
export interface MsgDeleteGlobalVirtualGroupResponse {}
export interface MsgDeleteGlobalVirtualGroupResponseProtoMsg {
  typeUrl: "/greenfield.virtualgroup.MsgDeleteGlobalVirtualGroupResponse";
  value: Uint8Array;
}
export interface MsgDeleteGlobalVirtualGroupResponseSDKType {}
export interface MsgDeposit {
  /** storage_provider defines the operator/funding account address of the storage provider who deposit to the global virtual group. */
  storageProvider: string;
  /** global_virtual_group_id is the identifier of the global virtual group. */
  globalVirtualGroupId: number;
  /** deposit is the amount of tokens being deposited for the global virtual group. */
  deposit: Coin;
}
export interface MsgDepositProtoMsg {
  typeUrl: "/greenfield.virtualgroup.MsgDeposit";
  value: Uint8Array;
}
export interface MsgDepositSDKType {
  storage_provider: string;
  global_virtual_group_id: number;
  deposit: CoinSDKType;
}
export interface MsgDepositResponse {}
export interface MsgDepositResponseProtoMsg {
  typeUrl: "/greenfield.virtualgroup.MsgDepositResponse";
  value: Uint8Array;
}
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
export interface MsgWithdrawProtoMsg {
  typeUrl: "/greenfield.virtualgroup.MsgWithdraw";
  value: Uint8Array;
}
export interface MsgWithdrawSDKType {
  storage_provider: string;
  global_virtual_group_id: number;
  withdraw: CoinSDKType;
}
export interface MsgWithdrawResponse {}
export interface MsgWithdrawResponseProtoMsg {
  typeUrl: "/greenfield.virtualgroup.MsgWithdrawResponse";
  value: Uint8Array;
}
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
  successorSpApproval?: Approval;
}
export interface MsgSwapOutProtoMsg {
  typeUrl: "/greenfield.virtualgroup.MsgSwapOut";
  value: Uint8Array;
}
export interface MsgSwapOutSDKType {
  storage_provider: string;
  global_virtual_group_family_id: number;
  global_virtual_group_ids: number[];
  successor_sp_id: number;
  successor_sp_approval?: ApprovalSDKType;
}
export interface MsgSwapOutResponse {}
export interface MsgSwapOutResponseProtoMsg {
  typeUrl: "/greenfield.virtualgroup.MsgSwapOutResponse";
  value: Uint8Array;
}
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
export interface MsgCompleteSwapOutProtoMsg {
  typeUrl: "/greenfield.virtualgroup.MsgCompleteSwapOut";
  value: Uint8Array;
}
export interface MsgCompleteSwapOutSDKType {
  storage_provider: string;
  global_virtual_group_family_id: number;
  global_virtual_group_ids: number[];
}
export interface MsgCompleteSwapOutResponse {}
export interface MsgCompleteSwapOutResponseProtoMsg {
  typeUrl: "/greenfield.virtualgroup.MsgCompleteSwapOutResponse";
  value: Uint8Array;
}
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
export interface MsgCancelSwapOutProtoMsg {
  typeUrl: "/greenfield.virtualgroup.MsgCancelSwapOut";
  value: Uint8Array;
}
export interface MsgCancelSwapOutSDKType {
  storage_provider: string;
  global_virtual_group_family_id: number;
  global_virtual_group_ids: number[];
}
export interface MsgCancelSwapOutResponse {}
export interface MsgCancelSwapOutResponseProtoMsg {
  typeUrl: "/greenfield.virtualgroup.MsgCancelSwapOutResponse";
  value: Uint8Array;
}
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
export interface MsgSettleProtoMsg {
  typeUrl: "/greenfield.virtualgroup.MsgSettle";
  value: Uint8Array;
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
export interface MsgSettleResponseProtoMsg {
  typeUrl: "/greenfield.virtualgroup.MsgSettleResponse";
  value: Uint8Array;
}
export interface MsgSettleResponseSDKType {}
export interface MsgStorageProviderExit {
  /** storage_provider defines the operator account address of the storage provider who want to exit from the greenfield storage network. */
  storageProvider: string;
}
export interface MsgStorageProviderExitProtoMsg {
  typeUrl: "/greenfield.virtualgroup.MsgStorageProviderExit";
  value: Uint8Array;
}
export interface MsgStorageProviderExitSDKType {
  storage_provider: string;
}
export interface MsgStorageProviderExitResponse {}
export interface MsgStorageProviderExitResponseProtoMsg {
  typeUrl: "/greenfield.virtualgroup.MsgStorageProviderExitResponse";
  value: Uint8Array;
}
export interface MsgStorageProviderExitResponseSDKType {}
export interface MsgCompleteStorageProviderExit {
  /** storage_provider defines the operator account address of the storage provider who want to exit from the greenfield storage network. */
  storageProvider: string;
}
export interface MsgCompleteStorageProviderExitProtoMsg {
  typeUrl: "/greenfield.virtualgroup.MsgCompleteStorageProviderExit";
  value: Uint8Array;
}
export interface MsgCompleteStorageProviderExitSDKType {
  storage_provider: string;
}
export interface MsgCompleteStorageProviderExitResponse {}
export interface MsgCompleteStorageProviderExitResponseProtoMsg {
  typeUrl: "/greenfield.virtualgroup.MsgCompleteStorageProviderExitResponse";
  value: Uint8Array;
}
export interface MsgCompleteStorageProviderExitResponseSDKType {}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/greenfield.virtualgroup.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/greenfield.virtualgroup.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/greenfield.virtualgroup.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/greenfield.virtualgroup.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
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
  typeUrl: "/greenfield.virtualgroup.MsgCreateGlobalVirtualGroup",
  encode(message: MsgCreateGlobalVirtualGroup, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateGlobalVirtualGroup {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: MsgCreateGlobalVirtualGroupAmino): MsgCreateGlobalVirtualGroup {
    const message = createBaseMsgCreateGlobalVirtualGroup();
    if (object.storage_provider !== undefined && object.storage_provider !== null) {
      message.storageProvider = object.storage_provider;
    }
    if (object.family_id !== undefined && object.family_id !== null) {
      message.familyId = object.family_id;
    }
    message.secondarySpIds = object.secondary_sp_ids?.map(e => e) || [];
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = Coin.fromAmino(object.deposit);
    }
    return message;
  },
  toAmino(message: MsgCreateGlobalVirtualGroup): MsgCreateGlobalVirtualGroupAmino {
    const obj: any = {};
    obj.storage_provider = message.storageProvider;
    obj.family_id = message.familyId;
    if (message.secondarySpIds) {
      obj.secondary_sp_ids = message.secondarySpIds.map(e => e);
    } else {
      obj.secondary_sp_ids = [];
    }
    obj.deposit = message.deposit ? Coin.toAmino(message.deposit) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateGlobalVirtualGroupAminoMsg): MsgCreateGlobalVirtualGroup {
    return MsgCreateGlobalVirtualGroup.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateGlobalVirtualGroupProtoMsg): MsgCreateGlobalVirtualGroup {
    return MsgCreateGlobalVirtualGroup.decode(message.value);
  },
  toProto(message: MsgCreateGlobalVirtualGroup): Uint8Array {
    return MsgCreateGlobalVirtualGroup.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateGlobalVirtualGroup): MsgCreateGlobalVirtualGroupProtoMsg {
    return {
      typeUrl: "/greenfield.virtualgroup.MsgCreateGlobalVirtualGroup",
      value: MsgCreateGlobalVirtualGroup.encode(message).finish()
    };
  }
};
function createBaseMsgCreateGlobalVirtualGroupResponse(): MsgCreateGlobalVirtualGroupResponse {
  return {};
}
export const MsgCreateGlobalVirtualGroupResponse = {
  typeUrl: "/greenfield.virtualgroup.MsgCreateGlobalVirtualGroupResponse",
  encode(_: MsgCreateGlobalVirtualGroupResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateGlobalVirtualGroupResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_: MsgCreateGlobalVirtualGroupResponseAmino): MsgCreateGlobalVirtualGroupResponse {
    const message = createBaseMsgCreateGlobalVirtualGroupResponse();
    return message;
  },
  toAmino(_: MsgCreateGlobalVirtualGroupResponse): MsgCreateGlobalVirtualGroupResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateGlobalVirtualGroupResponseAminoMsg): MsgCreateGlobalVirtualGroupResponse {
    return MsgCreateGlobalVirtualGroupResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateGlobalVirtualGroupResponseProtoMsg): MsgCreateGlobalVirtualGroupResponse {
    return MsgCreateGlobalVirtualGroupResponse.decode(message.value);
  },
  toProto(message: MsgCreateGlobalVirtualGroupResponse): Uint8Array {
    return MsgCreateGlobalVirtualGroupResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateGlobalVirtualGroupResponse): MsgCreateGlobalVirtualGroupResponseProtoMsg {
    return {
      typeUrl: "/greenfield.virtualgroup.MsgCreateGlobalVirtualGroupResponse",
      value: MsgCreateGlobalVirtualGroupResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteGlobalVirtualGroup(): MsgDeleteGlobalVirtualGroup {
  return {
    storageProvider: "",
    globalVirtualGroupId: 0
  };
}
export const MsgDeleteGlobalVirtualGroup = {
  typeUrl: "/greenfield.virtualgroup.MsgDeleteGlobalVirtualGroup",
  encode(message: MsgDeleteGlobalVirtualGroup, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.storageProvider !== "") {
      writer.uint32(10).string(message.storageProvider);
    }
    if (message.globalVirtualGroupId !== 0) {
      writer.uint32(16).uint32(message.globalVirtualGroupId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteGlobalVirtualGroup {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: MsgDeleteGlobalVirtualGroupAmino): MsgDeleteGlobalVirtualGroup {
    const message = createBaseMsgDeleteGlobalVirtualGroup();
    if (object.storage_provider !== undefined && object.storage_provider !== null) {
      message.storageProvider = object.storage_provider;
    }
    if (object.global_virtual_group_id !== undefined && object.global_virtual_group_id !== null) {
      message.globalVirtualGroupId = object.global_virtual_group_id;
    }
    return message;
  },
  toAmino(message: MsgDeleteGlobalVirtualGroup): MsgDeleteGlobalVirtualGroupAmino {
    const obj: any = {};
    obj.storage_provider = message.storageProvider;
    obj.global_virtual_group_id = message.globalVirtualGroupId;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteGlobalVirtualGroupAminoMsg): MsgDeleteGlobalVirtualGroup {
    return MsgDeleteGlobalVirtualGroup.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteGlobalVirtualGroupProtoMsg): MsgDeleteGlobalVirtualGroup {
    return MsgDeleteGlobalVirtualGroup.decode(message.value);
  },
  toProto(message: MsgDeleteGlobalVirtualGroup): Uint8Array {
    return MsgDeleteGlobalVirtualGroup.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteGlobalVirtualGroup): MsgDeleteGlobalVirtualGroupProtoMsg {
    return {
      typeUrl: "/greenfield.virtualgroup.MsgDeleteGlobalVirtualGroup",
      value: MsgDeleteGlobalVirtualGroup.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteGlobalVirtualGroupResponse(): MsgDeleteGlobalVirtualGroupResponse {
  return {};
}
export const MsgDeleteGlobalVirtualGroupResponse = {
  typeUrl: "/greenfield.virtualgroup.MsgDeleteGlobalVirtualGroupResponse",
  encode(_: MsgDeleteGlobalVirtualGroupResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteGlobalVirtualGroupResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_: MsgDeleteGlobalVirtualGroupResponseAmino): MsgDeleteGlobalVirtualGroupResponse {
    const message = createBaseMsgDeleteGlobalVirtualGroupResponse();
    return message;
  },
  toAmino(_: MsgDeleteGlobalVirtualGroupResponse): MsgDeleteGlobalVirtualGroupResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteGlobalVirtualGroupResponseAminoMsg): MsgDeleteGlobalVirtualGroupResponse {
    return MsgDeleteGlobalVirtualGroupResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteGlobalVirtualGroupResponseProtoMsg): MsgDeleteGlobalVirtualGroupResponse {
    return MsgDeleteGlobalVirtualGroupResponse.decode(message.value);
  },
  toProto(message: MsgDeleteGlobalVirtualGroupResponse): Uint8Array {
    return MsgDeleteGlobalVirtualGroupResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteGlobalVirtualGroupResponse): MsgDeleteGlobalVirtualGroupResponseProtoMsg {
    return {
      typeUrl: "/greenfield.virtualgroup.MsgDeleteGlobalVirtualGroupResponse",
      value: MsgDeleteGlobalVirtualGroupResponse.encode(message).finish()
    };
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
  typeUrl: "/greenfield.virtualgroup.MsgDeposit",
  encode(message: MsgDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeposit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: MsgDepositAmino): MsgDeposit {
    const message = createBaseMsgDeposit();
    if (object.storage_provider !== undefined && object.storage_provider !== null) {
      message.storageProvider = object.storage_provider;
    }
    if (object.global_virtual_group_id !== undefined && object.global_virtual_group_id !== null) {
      message.globalVirtualGroupId = object.global_virtual_group_id;
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = Coin.fromAmino(object.deposit);
    }
    return message;
  },
  toAmino(message: MsgDeposit): MsgDepositAmino {
    const obj: any = {};
    obj.storage_provider = message.storageProvider;
    obj.global_virtual_group_id = message.globalVirtualGroupId;
    obj.deposit = message.deposit ? Coin.toAmino(message.deposit) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDepositAminoMsg): MsgDeposit {
    return MsgDeposit.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDepositProtoMsg): MsgDeposit {
    return MsgDeposit.decode(message.value);
  },
  toProto(message: MsgDeposit): Uint8Array {
    return MsgDeposit.encode(message).finish();
  },
  toProtoMsg(message: MsgDeposit): MsgDepositProtoMsg {
    return {
      typeUrl: "/greenfield.virtualgroup.MsgDeposit",
      value: MsgDeposit.encode(message).finish()
    };
  }
};
function createBaseMsgDepositResponse(): MsgDepositResponse {
  return {};
}
export const MsgDepositResponse = {
  typeUrl: "/greenfield.virtualgroup.MsgDepositResponse",
  encode(_: MsgDepositResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_: MsgDepositResponseAmino): MsgDepositResponse {
    const message = createBaseMsgDepositResponse();
    return message;
  },
  toAmino(_: MsgDepositResponse): MsgDepositResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDepositResponseAminoMsg): MsgDepositResponse {
    return MsgDepositResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDepositResponseProtoMsg): MsgDepositResponse {
    return MsgDepositResponse.decode(message.value);
  },
  toProto(message: MsgDepositResponse): Uint8Array {
    return MsgDepositResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDepositResponse): MsgDepositResponseProtoMsg {
    return {
      typeUrl: "/greenfield.virtualgroup.MsgDepositResponse",
      value: MsgDepositResponse.encode(message).finish()
    };
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
  typeUrl: "/greenfield.virtualgroup.MsgWithdraw",
  encode(message: MsgWithdraw, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdraw {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: MsgWithdrawAmino): MsgWithdraw {
    const message = createBaseMsgWithdraw();
    if (object.storage_provider !== undefined && object.storage_provider !== null) {
      message.storageProvider = object.storage_provider;
    }
    if (object.global_virtual_group_id !== undefined && object.global_virtual_group_id !== null) {
      message.globalVirtualGroupId = object.global_virtual_group_id;
    }
    if (object.withdraw !== undefined && object.withdraw !== null) {
      message.withdraw = Coin.fromAmino(object.withdraw);
    }
    return message;
  },
  toAmino(message: MsgWithdraw): MsgWithdrawAmino {
    const obj: any = {};
    obj.storage_provider = message.storageProvider;
    obj.global_virtual_group_id = message.globalVirtualGroupId;
    obj.withdraw = message.withdraw ? Coin.toAmino(message.withdraw) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawAminoMsg): MsgWithdraw {
    return MsgWithdraw.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawProtoMsg): MsgWithdraw {
    return MsgWithdraw.decode(message.value);
  },
  toProto(message: MsgWithdraw): Uint8Array {
    return MsgWithdraw.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdraw): MsgWithdrawProtoMsg {
    return {
      typeUrl: "/greenfield.virtualgroup.MsgWithdraw",
      value: MsgWithdraw.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawResponse(): MsgWithdrawResponse {
  return {};
}
export const MsgWithdrawResponse = {
  typeUrl: "/greenfield.virtualgroup.MsgWithdrawResponse",
  encode(_: MsgWithdrawResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_: MsgWithdrawResponseAmino): MsgWithdrawResponse {
    const message = createBaseMsgWithdrawResponse();
    return message;
  },
  toAmino(_: MsgWithdrawResponse): MsgWithdrawResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawResponseAminoMsg): MsgWithdrawResponse {
    return MsgWithdrawResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawResponseProtoMsg): MsgWithdrawResponse {
    return MsgWithdrawResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawResponse): Uint8Array {
    return MsgWithdrawResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawResponse): MsgWithdrawResponseProtoMsg {
    return {
      typeUrl: "/greenfield.virtualgroup.MsgWithdrawResponse",
      value: MsgWithdrawResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSwapOut(): MsgSwapOut {
  return {
    storageProvider: "",
    globalVirtualGroupFamilyId: 0,
    globalVirtualGroupIds: [],
    successorSpId: 0,
    successorSpApproval: undefined
  };
}
export const MsgSwapOut = {
  typeUrl: "/greenfield.virtualgroup.MsgSwapOut",
  encode(message: MsgSwapOut, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapOut {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: MsgSwapOutAmino): MsgSwapOut {
    const message = createBaseMsgSwapOut();
    if (object.storage_provider !== undefined && object.storage_provider !== null) {
      message.storageProvider = object.storage_provider;
    }
    if (object.global_virtual_group_family_id !== undefined && object.global_virtual_group_family_id !== null) {
      message.globalVirtualGroupFamilyId = object.global_virtual_group_family_id;
    }
    message.globalVirtualGroupIds = object.global_virtual_group_ids?.map(e => e) || [];
    if (object.successor_sp_id !== undefined && object.successor_sp_id !== null) {
      message.successorSpId = object.successor_sp_id;
    }
    if (object.successor_sp_approval !== undefined && object.successor_sp_approval !== null) {
      message.successorSpApproval = Approval.fromAmino(object.successor_sp_approval);
    }
    return message;
  },
  toAmino(message: MsgSwapOut): MsgSwapOutAmino {
    const obj: any = {};
    obj.storage_provider = message.storageProvider;
    obj.global_virtual_group_family_id = message.globalVirtualGroupFamilyId;
    if (message.globalVirtualGroupIds) {
      obj.global_virtual_group_ids = message.globalVirtualGroupIds.map(e => e);
    } else {
      obj.global_virtual_group_ids = [];
    }
    obj.successor_sp_id = message.successorSpId;
    obj.successor_sp_approval = message.successorSpApproval ? Approval.toAmino(message.successorSpApproval) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSwapOutAminoMsg): MsgSwapOut {
    return MsgSwapOut.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSwapOutProtoMsg): MsgSwapOut {
    return MsgSwapOut.decode(message.value);
  },
  toProto(message: MsgSwapOut): Uint8Array {
    return MsgSwapOut.encode(message).finish();
  },
  toProtoMsg(message: MsgSwapOut): MsgSwapOutProtoMsg {
    return {
      typeUrl: "/greenfield.virtualgroup.MsgSwapOut",
      value: MsgSwapOut.encode(message).finish()
    };
  }
};
function createBaseMsgSwapOutResponse(): MsgSwapOutResponse {
  return {};
}
export const MsgSwapOutResponse = {
  typeUrl: "/greenfield.virtualgroup.MsgSwapOutResponse",
  encode(_: MsgSwapOutResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapOutResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_: MsgSwapOutResponseAmino): MsgSwapOutResponse {
    const message = createBaseMsgSwapOutResponse();
    return message;
  },
  toAmino(_: MsgSwapOutResponse): MsgSwapOutResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSwapOutResponseAminoMsg): MsgSwapOutResponse {
    return MsgSwapOutResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSwapOutResponseProtoMsg): MsgSwapOutResponse {
    return MsgSwapOutResponse.decode(message.value);
  },
  toProto(message: MsgSwapOutResponse): Uint8Array {
    return MsgSwapOutResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSwapOutResponse): MsgSwapOutResponseProtoMsg {
    return {
      typeUrl: "/greenfield.virtualgroup.MsgSwapOutResponse",
      value: MsgSwapOutResponse.encode(message).finish()
    };
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
  typeUrl: "/greenfield.virtualgroup.MsgCompleteSwapOut",
  encode(message: MsgCompleteSwapOut, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCompleteSwapOut {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: MsgCompleteSwapOutAmino): MsgCompleteSwapOut {
    const message = createBaseMsgCompleteSwapOut();
    if (object.storage_provider !== undefined && object.storage_provider !== null) {
      message.storageProvider = object.storage_provider;
    }
    if (object.global_virtual_group_family_id !== undefined && object.global_virtual_group_family_id !== null) {
      message.globalVirtualGroupFamilyId = object.global_virtual_group_family_id;
    }
    message.globalVirtualGroupIds = object.global_virtual_group_ids?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgCompleteSwapOut): MsgCompleteSwapOutAmino {
    const obj: any = {};
    obj.storage_provider = message.storageProvider;
    obj.global_virtual_group_family_id = message.globalVirtualGroupFamilyId;
    if (message.globalVirtualGroupIds) {
      obj.global_virtual_group_ids = message.globalVirtualGroupIds.map(e => e);
    } else {
      obj.global_virtual_group_ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgCompleteSwapOutAminoMsg): MsgCompleteSwapOut {
    return MsgCompleteSwapOut.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCompleteSwapOutProtoMsg): MsgCompleteSwapOut {
    return MsgCompleteSwapOut.decode(message.value);
  },
  toProto(message: MsgCompleteSwapOut): Uint8Array {
    return MsgCompleteSwapOut.encode(message).finish();
  },
  toProtoMsg(message: MsgCompleteSwapOut): MsgCompleteSwapOutProtoMsg {
    return {
      typeUrl: "/greenfield.virtualgroup.MsgCompleteSwapOut",
      value: MsgCompleteSwapOut.encode(message).finish()
    };
  }
};
function createBaseMsgCompleteSwapOutResponse(): MsgCompleteSwapOutResponse {
  return {};
}
export const MsgCompleteSwapOutResponse = {
  typeUrl: "/greenfield.virtualgroup.MsgCompleteSwapOutResponse",
  encode(_: MsgCompleteSwapOutResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCompleteSwapOutResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_: MsgCompleteSwapOutResponseAmino): MsgCompleteSwapOutResponse {
    const message = createBaseMsgCompleteSwapOutResponse();
    return message;
  },
  toAmino(_: MsgCompleteSwapOutResponse): MsgCompleteSwapOutResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCompleteSwapOutResponseAminoMsg): MsgCompleteSwapOutResponse {
    return MsgCompleteSwapOutResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCompleteSwapOutResponseProtoMsg): MsgCompleteSwapOutResponse {
    return MsgCompleteSwapOutResponse.decode(message.value);
  },
  toProto(message: MsgCompleteSwapOutResponse): Uint8Array {
    return MsgCompleteSwapOutResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCompleteSwapOutResponse): MsgCompleteSwapOutResponseProtoMsg {
    return {
      typeUrl: "/greenfield.virtualgroup.MsgCompleteSwapOutResponse",
      value: MsgCompleteSwapOutResponse.encode(message).finish()
    };
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
  typeUrl: "/greenfield.virtualgroup.MsgCancelSwapOut",
  encode(message: MsgCancelSwapOut, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelSwapOut {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: MsgCancelSwapOutAmino): MsgCancelSwapOut {
    const message = createBaseMsgCancelSwapOut();
    if (object.storage_provider !== undefined && object.storage_provider !== null) {
      message.storageProvider = object.storage_provider;
    }
    if (object.global_virtual_group_family_id !== undefined && object.global_virtual_group_family_id !== null) {
      message.globalVirtualGroupFamilyId = object.global_virtual_group_family_id;
    }
    message.globalVirtualGroupIds = object.global_virtual_group_ids?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgCancelSwapOut): MsgCancelSwapOutAmino {
    const obj: any = {};
    obj.storage_provider = message.storageProvider;
    obj.global_virtual_group_family_id = message.globalVirtualGroupFamilyId;
    if (message.globalVirtualGroupIds) {
      obj.global_virtual_group_ids = message.globalVirtualGroupIds.map(e => e);
    } else {
      obj.global_virtual_group_ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgCancelSwapOutAminoMsg): MsgCancelSwapOut {
    return MsgCancelSwapOut.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelSwapOutProtoMsg): MsgCancelSwapOut {
    return MsgCancelSwapOut.decode(message.value);
  },
  toProto(message: MsgCancelSwapOut): Uint8Array {
    return MsgCancelSwapOut.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelSwapOut): MsgCancelSwapOutProtoMsg {
    return {
      typeUrl: "/greenfield.virtualgroup.MsgCancelSwapOut",
      value: MsgCancelSwapOut.encode(message).finish()
    };
  }
};
function createBaseMsgCancelSwapOutResponse(): MsgCancelSwapOutResponse {
  return {};
}
export const MsgCancelSwapOutResponse = {
  typeUrl: "/greenfield.virtualgroup.MsgCancelSwapOutResponse",
  encode(_: MsgCancelSwapOutResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelSwapOutResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_: MsgCancelSwapOutResponseAmino): MsgCancelSwapOutResponse {
    const message = createBaseMsgCancelSwapOutResponse();
    return message;
  },
  toAmino(_: MsgCancelSwapOutResponse): MsgCancelSwapOutResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelSwapOutResponseAminoMsg): MsgCancelSwapOutResponse {
    return MsgCancelSwapOutResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelSwapOutResponseProtoMsg): MsgCancelSwapOutResponse {
    return MsgCancelSwapOutResponse.decode(message.value);
  },
  toProto(message: MsgCancelSwapOutResponse): Uint8Array {
    return MsgCancelSwapOutResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelSwapOutResponse): MsgCancelSwapOutResponseProtoMsg {
    return {
      typeUrl: "/greenfield.virtualgroup.MsgCancelSwapOutResponse",
      value: MsgCancelSwapOutResponse.encode(message).finish()
    };
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
  typeUrl: "/greenfield.virtualgroup.MsgSettle",
  encode(message: MsgSettle, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSettle {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: MsgSettleAmino): MsgSettle {
    const message = createBaseMsgSettle();
    if (object.storage_provider !== undefined && object.storage_provider !== null) {
      message.storageProvider = object.storage_provider;
    }
    if (object.global_virtual_group_family_id !== undefined && object.global_virtual_group_family_id !== null) {
      message.globalVirtualGroupFamilyId = object.global_virtual_group_family_id;
    }
    message.globalVirtualGroupIds = object.global_virtual_group_ids?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgSettle): MsgSettleAmino {
    const obj: any = {};
    obj.storage_provider = message.storageProvider;
    obj.global_virtual_group_family_id = message.globalVirtualGroupFamilyId;
    if (message.globalVirtualGroupIds) {
      obj.global_virtual_group_ids = message.globalVirtualGroupIds.map(e => e);
    } else {
      obj.global_virtual_group_ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgSettleAminoMsg): MsgSettle {
    return MsgSettle.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSettleProtoMsg): MsgSettle {
    return MsgSettle.decode(message.value);
  },
  toProto(message: MsgSettle): Uint8Array {
    return MsgSettle.encode(message).finish();
  },
  toProtoMsg(message: MsgSettle): MsgSettleProtoMsg {
    return {
      typeUrl: "/greenfield.virtualgroup.MsgSettle",
      value: MsgSettle.encode(message).finish()
    };
  }
};
function createBaseMsgSettleResponse(): MsgSettleResponse {
  return {};
}
export const MsgSettleResponse = {
  typeUrl: "/greenfield.virtualgroup.MsgSettleResponse",
  encode(_: MsgSettleResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSettleResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_: MsgSettleResponseAmino): MsgSettleResponse {
    const message = createBaseMsgSettleResponse();
    return message;
  },
  toAmino(_: MsgSettleResponse): MsgSettleResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSettleResponseAminoMsg): MsgSettleResponse {
    return MsgSettleResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSettleResponseProtoMsg): MsgSettleResponse {
    return MsgSettleResponse.decode(message.value);
  },
  toProto(message: MsgSettleResponse): Uint8Array {
    return MsgSettleResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSettleResponse): MsgSettleResponseProtoMsg {
    return {
      typeUrl: "/greenfield.virtualgroup.MsgSettleResponse",
      value: MsgSettleResponse.encode(message).finish()
    };
  }
};
function createBaseMsgStorageProviderExit(): MsgStorageProviderExit {
  return {
    storageProvider: ""
  };
}
export const MsgStorageProviderExit = {
  typeUrl: "/greenfield.virtualgroup.MsgStorageProviderExit",
  encode(message: MsgStorageProviderExit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.storageProvider !== "") {
      writer.uint32(10).string(message.storageProvider);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStorageProviderExit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: MsgStorageProviderExitAmino): MsgStorageProviderExit {
    const message = createBaseMsgStorageProviderExit();
    if (object.storage_provider !== undefined && object.storage_provider !== null) {
      message.storageProvider = object.storage_provider;
    }
    return message;
  },
  toAmino(message: MsgStorageProviderExit): MsgStorageProviderExitAmino {
    const obj: any = {};
    obj.storage_provider = message.storageProvider;
    return obj;
  },
  fromAminoMsg(object: MsgStorageProviderExitAminoMsg): MsgStorageProviderExit {
    return MsgStorageProviderExit.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgStorageProviderExitProtoMsg): MsgStorageProviderExit {
    return MsgStorageProviderExit.decode(message.value);
  },
  toProto(message: MsgStorageProviderExit): Uint8Array {
    return MsgStorageProviderExit.encode(message).finish();
  },
  toProtoMsg(message: MsgStorageProviderExit): MsgStorageProviderExitProtoMsg {
    return {
      typeUrl: "/greenfield.virtualgroup.MsgStorageProviderExit",
      value: MsgStorageProviderExit.encode(message).finish()
    };
  }
};
function createBaseMsgStorageProviderExitResponse(): MsgStorageProviderExitResponse {
  return {};
}
export const MsgStorageProviderExitResponse = {
  typeUrl: "/greenfield.virtualgroup.MsgStorageProviderExitResponse",
  encode(_: MsgStorageProviderExitResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStorageProviderExitResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_: MsgStorageProviderExitResponseAmino): MsgStorageProviderExitResponse {
    const message = createBaseMsgStorageProviderExitResponse();
    return message;
  },
  toAmino(_: MsgStorageProviderExitResponse): MsgStorageProviderExitResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgStorageProviderExitResponseAminoMsg): MsgStorageProviderExitResponse {
    return MsgStorageProviderExitResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgStorageProviderExitResponseProtoMsg): MsgStorageProviderExitResponse {
    return MsgStorageProviderExitResponse.decode(message.value);
  },
  toProto(message: MsgStorageProviderExitResponse): Uint8Array {
    return MsgStorageProviderExitResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgStorageProviderExitResponse): MsgStorageProviderExitResponseProtoMsg {
    return {
      typeUrl: "/greenfield.virtualgroup.MsgStorageProviderExitResponse",
      value: MsgStorageProviderExitResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCompleteStorageProviderExit(): MsgCompleteStorageProviderExit {
  return {
    storageProvider: ""
  };
}
export const MsgCompleteStorageProviderExit = {
  typeUrl: "/greenfield.virtualgroup.MsgCompleteStorageProviderExit",
  encode(message: MsgCompleteStorageProviderExit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.storageProvider !== "") {
      writer.uint32(10).string(message.storageProvider);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCompleteStorageProviderExit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: MsgCompleteStorageProviderExitAmino): MsgCompleteStorageProviderExit {
    const message = createBaseMsgCompleteStorageProviderExit();
    if (object.storage_provider !== undefined && object.storage_provider !== null) {
      message.storageProvider = object.storage_provider;
    }
    return message;
  },
  toAmino(message: MsgCompleteStorageProviderExit): MsgCompleteStorageProviderExitAmino {
    const obj: any = {};
    obj.storage_provider = message.storageProvider;
    return obj;
  },
  fromAminoMsg(object: MsgCompleteStorageProviderExitAminoMsg): MsgCompleteStorageProviderExit {
    return MsgCompleteStorageProviderExit.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCompleteStorageProviderExitProtoMsg): MsgCompleteStorageProviderExit {
    return MsgCompleteStorageProviderExit.decode(message.value);
  },
  toProto(message: MsgCompleteStorageProviderExit): Uint8Array {
    return MsgCompleteStorageProviderExit.encode(message).finish();
  },
  toProtoMsg(message: MsgCompleteStorageProviderExit): MsgCompleteStorageProviderExitProtoMsg {
    return {
      typeUrl: "/greenfield.virtualgroup.MsgCompleteStorageProviderExit",
      value: MsgCompleteStorageProviderExit.encode(message).finish()
    };
  }
};
function createBaseMsgCompleteStorageProviderExitResponse(): MsgCompleteStorageProviderExitResponse {
  return {};
}
export const MsgCompleteStorageProviderExitResponse = {
  typeUrl: "/greenfield.virtualgroup.MsgCompleteStorageProviderExitResponse",
  encode(_: MsgCompleteStorageProviderExitResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCompleteStorageProviderExitResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_: MsgCompleteStorageProviderExitResponseAmino): MsgCompleteStorageProviderExitResponse {
    const message = createBaseMsgCompleteStorageProviderExitResponse();
    return message;
  },
  toAmino(_: MsgCompleteStorageProviderExitResponse): MsgCompleteStorageProviderExitResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCompleteStorageProviderExitResponseAminoMsg): MsgCompleteStorageProviderExitResponse {
    return MsgCompleteStorageProviderExitResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCompleteStorageProviderExitResponseProtoMsg): MsgCompleteStorageProviderExitResponse {
    return MsgCompleteStorageProviderExitResponse.decode(message.value);
  },
  toProto(message: MsgCompleteStorageProviderExitResponse): Uint8Array {
    return MsgCompleteStorageProviderExitResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCompleteStorageProviderExitResponse): MsgCompleteStorageProviderExitResponseProtoMsg {
    return {
      typeUrl: "/greenfield.virtualgroup.MsgCompleteStorageProviderExitResponse",
      value: MsgCompleteStorageProviderExitResponse.encode(message).finish()
    };
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
    return promise.then(data => MsgCreateGlobalVirtualGroupResponse.decode(new BinaryReader(data)));
  }
  DeleteGlobalVirtualGroup(request: MsgDeleteGlobalVirtualGroup): Promise<MsgDeleteGlobalVirtualGroupResponse> {
    const data = MsgDeleteGlobalVirtualGroup.encode(request).finish();
    const promise = this.rpc.request("greenfield.virtualgroup.Msg", "DeleteGlobalVirtualGroup", data);
    return promise.then(data => MsgDeleteGlobalVirtualGroupResponse.decode(new BinaryReader(data)));
  }
  Deposit(request: MsgDeposit): Promise<MsgDepositResponse> {
    const data = MsgDeposit.encode(request).finish();
    const promise = this.rpc.request("greenfield.virtualgroup.Msg", "Deposit", data);
    return promise.then(data => MsgDepositResponse.decode(new BinaryReader(data)));
  }
  Withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse> {
    const data = MsgWithdraw.encode(request).finish();
    const promise = this.rpc.request("greenfield.virtualgroup.Msg", "Withdraw", data);
    return promise.then(data => MsgWithdrawResponse.decode(new BinaryReader(data)));
  }
  SwapOut(request: MsgSwapOut): Promise<MsgSwapOutResponse> {
    const data = MsgSwapOut.encode(request).finish();
    const promise = this.rpc.request("greenfield.virtualgroup.Msg", "SwapOut", data);
    return promise.then(data => MsgSwapOutResponse.decode(new BinaryReader(data)));
  }
  Settle(request: MsgSettle): Promise<MsgSettleResponse> {
    const data = MsgSettle.encode(request).finish();
    const promise = this.rpc.request("greenfield.virtualgroup.Msg", "Settle", data);
    return promise.then(data => MsgSettleResponse.decode(new BinaryReader(data)));
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("greenfield.virtualgroup.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  StorageProviderExit(request: MsgStorageProviderExit): Promise<MsgStorageProviderExitResponse> {
    const data = MsgStorageProviderExit.encode(request).finish();
    const promise = this.rpc.request("greenfield.virtualgroup.Msg", "StorageProviderExit", data);
    return promise.then(data => MsgStorageProviderExitResponse.decode(new BinaryReader(data)));
  }
  CompleteStorageProviderExit(request: MsgCompleteStorageProviderExit): Promise<MsgCompleteStorageProviderExitResponse> {
    const data = MsgCompleteStorageProviderExit.encode(request).finish();
    const promise = this.rpc.request("greenfield.virtualgroup.Msg", "CompleteStorageProviderExit", data);
    return promise.then(data => MsgCompleteStorageProviderExitResponse.decode(new BinaryReader(data)));
  }
  CompleteSwapOut(request: MsgCompleteSwapOut): Promise<MsgCompleteSwapOutResponse> {
    const data = MsgCompleteSwapOut.encode(request).finish();
    const promise = this.rpc.request("greenfield.virtualgroup.Msg", "CompleteSwapOut", data);
    return promise.then(data => MsgCompleteSwapOutResponse.decode(new BinaryReader(data)));
  }
  CancelSwapOut(request: MsgCancelSwapOut): Promise<MsgCancelSwapOutResponse> {
    const data = MsgCancelSwapOut.encode(request).finish();
    const promise = this.rpc.request("greenfield.virtualgroup.Msg", "CancelSwapOut", data);
    return promise.then(data => MsgCancelSwapOutResponse.decode(new BinaryReader(data)));
  }
}