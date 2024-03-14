//@ts-nocheck
/* eslint-disable */
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Approval, ApprovalAmino, ApprovalSDKType } from "../common/approval";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
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
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/greenfield.virtualgroup.MsgUpdateParams";
  value: Uint8Array;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsAmino {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority?: string;
  /**
   * params defines the x/virtualgroup parameters to update.
   * NOTE: All parameters must be supplied.
   */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "/greenfield.virtualgroup.MsgUpdateParams";
  value: MsgUpdateParamsAmino;
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
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/greenfield.virtualgroup.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
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
export interface MsgCreateGlobalVirtualGroupAmino {
  /** storage_provider defines the operator account address of the storage provider who create the global virtual group. */
  storage_provider?: string;
  /** family_id is the identifier for the virtual group's family. */
  family_id?: number;
  /** secondary_sp_id is a list of secondary storage provider IDs associated with the virtual group. */
  secondary_sp_ids?: number[];
  /**
   * total_deposit is the total deposit amount required for the virtual group.
   * The tokens needs deposited and the size of storage are correlated.
   */
  deposit?: CoinAmino;
}
export interface MsgCreateGlobalVirtualGroupAminoMsg {
  type: "/greenfield.virtualgroup.MsgCreateGlobalVirtualGroup";
  value: MsgCreateGlobalVirtualGroupAmino;
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
export interface MsgCreateGlobalVirtualGroupResponseAmino {}
export interface MsgCreateGlobalVirtualGroupResponseAminoMsg {
  type: "/greenfield.virtualgroup.MsgCreateGlobalVirtualGroupResponse";
  value: MsgCreateGlobalVirtualGroupResponseAmino;
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
export interface MsgDeleteGlobalVirtualGroupAmino {
  /** storage_provider defines the operator account address of the storage provider who delete the global virtual group. */
  storage_provider?: string;
  /** global_virtual_group_id is the identifier of the global virtual group. */
  global_virtual_group_id?: number;
}
export interface MsgDeleteGlobalVirtualGroupAminoMsg {
  type: "/greenfield.virtualgroup.MsgDeleteGlobalVirtualGroup";
  value: MsgDeleteGlobalVirtualGroupAmino;
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
export interface MsgDeleteGlobalVirtualGroupResponseAmino {}
export interface MsgDeleteGlobalVirtualGroupResponseAminoMsg {
  type: "/greenfield.virtualgroup.MsgDeleteGlobalVirtualGroupResponse";
  value: MsgDeleteGlobalVirtualGroupResponseAmino;
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
export interface MsgDepositAmino {
  /** storage_provider defines the operator/funding account address of the storage provider who deposit to the global virtual group. */
  storage_provider?: string;
  /** global_virtual_group_id is the identifier of the global virtual group. */
  global_virtual_group_id?: number;
  /** deposit is the amount of tokens being deposited for the global virtual group. */
  deposit?: CoinAmino;
}
export interface MsgDepositAminoMsg {
  type: "/greenfield.virtualgroup.MsgDeposit";
  value: MsgDepositAmino;
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
export interface MsgDepositResponseAmino {}
export interface MsgDepositResponseAminoMsg {
  type: "/greenfield.virtualgroup.MsgDepositResponse";
  value: MsgDepositResponseAmino;
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
export interface MsgWithdrawAmino {
  /** storage_provider defines the operator/funding account address of the storage provider who withdraw from the global virtual group. */
  storage_provider?: string;
  /** global_virtual_group_id is the identifier of the global virtual group. */
  global_virtual_group_id?: number;
  /**
   * withdraw is the amount of coins to be withdrawn.
   * The amount needs to be smaller than stored_size * storage_staking_price
   */
  withdraw?: CoinAmino;
}
export interface MsgWithdrawAminoMsg {
  type: "/greenfield.virtualgroup.MsgWithdraw";
  value: MsgWithdrawAmino;
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
export interface MsgWithdrawResponseAmino {}
export interface MsgWithdrawResponseAminoMsg {
  type: "/greenfield.virtualgroup.MsgWithdrawResponse";
  value: MsgWithdrawResponseAmino;
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
export interface MsgSwapOutAmino {
  /** storage_provider defines the operator account address of the storage provider who want to swap out from the global virtual group. */
  storage_provider?: string;
  /**
   * virtual_group_family_id is the identifier of the virtual group family.
   * if it set to non-zero, it represents that the operator swap out as the primary storage provider
   * it it set to zero, it represents that the operator swap out as the secondary storage provider.
   */
  global_virtual_group_family_id?: number;
  /**
   * global_virtual_group_ids is a list of global virtual group IDs associated with the swap out.
   * It allows to be empty only when the operator is the primary storage provider.
   */
  global_virtual_group_ids?: number[];
  /** successor_sp_id is the unique id of the successor storage provider. */
  successor_sp_id?: number;
  /**
   * approval includes an expiration time and a signature.
   * The fields to be signed with contains the necessary information of the successor.
   */
  successor_sp_approval?: ApprovalAmino;
}
export interface MsgSwapOutAminoMsg {
  type: "/greenfield.virtualgroup.MsgSwapOut";
  value: MsgSwapOutAmino;
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
export interface MsgSwapOutResponseAmino {}
export interface MsgSwapOutResponseAminoMsg {
  type: "/greenfield.virtualgroup.MsgSwapOutResponse";
  value: MsgSwapOutResponseAmino;
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
export interface MsgCompleteSwapOutAmino {
  /** storage_provider defines the operator account address of the storage provider who complete swap out task. */
  storage_provider?: string;
  /**
   * virtual_group_family_id is the identifier of the virtual group family.
   * if it set to non-zero, it represents that the operator swap out as the primary storage provider
   * it it set to zero, it represents that the operator swap out as the secondary storage provider.
   */
  global_virtual_group_family_id?: number;
  /**
   * global_virtual_group_ids is a list of global virtual group IDs associated with the swap out.
   * It allows to be empty only when the operator is the primary storage provider.
   */
  global_virtual_group_ids?: number[];
}
export interface MsgCompleteSwapOutAminoMsg {
  type: "/greenfield.virtualgroup.MsgCompleteSwapOut";
  value: MsgCompleteSwapOutAmino;
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
export interface MsgCompleteSwapOutResponseAmino {}
export interface MsgCompleteSwapOutResponseAminoMsg {
  type: "/greenfield.virtualgroup.MsgCompleteSwapOutResponse";
  value: MsgCompleteSwapOutResponseAmino;
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
export interface MsgCancelSwapOutAmino {
  /** storage_provider defines the operator account address of the storage provider who cancel the swap out task. */
  storage_provider?: string;
  /**
   * virtual_group_family_id is the identifier of the virtual group family.
   * if it set to non-zero, it represents that the operator swap out as the primary storage provider
   * it it set to zero, it represents that the operator swap out as the secondary storage provider.
   */
  global_virtual_group_family_id?: number;
  /**
   * global_virtual_group_ids is a list of global virtual group IDs associated with the swap out.
   * It allows to be empty only when the operator is the primary storage provider.
   */
  global_virtual_group_ids?: number[];
}
export interface MsgCancelSwapOutAminoMsg {
  type: "/greenfield.virtualgroup.MsgCancelSwapOut";
  value: MsgCancelSwapOutAmino;
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
export interface MsgCancelSwapOutResponseAmino {}
export interface MsgCancelSwapOutResponseAminoMsg {
  type: "/greenfield.virtualgroup.MsgCancelSwapOutResponse";
  value: MsgCancelSwapOutResponseAmino;
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
export interface MsgSettleAmino {
  /**
   * storage_provider defines the account address who initiates the settle request.
   * After Pampas upgrade, not only storage provider, anyone can submit this message.
   */
  storage_provider?: string;
  /** global_virtual_group_family_id is the identifier of the global virtual group family. */
  global_virtual_group_family_id?: number;
  /** global_virtual_group_id is the identifier of the global virtual group. */
  global_virtual_group_ids?: number[];
}
export interface MsgSettleAminoMsg {
  type: "/greenfield.virtualgroup.MsgSettle";
  value: MsgSettleAmino;
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
export interface MsgSettleResponseAmino {}
export interface MsgSettleResponseAminoMsg {
  type: "/greenfield.virtualgroup.MsgSettleResponse";
  value: MsgSettleResponseAmino;
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
export interface MsgStorageProviderExitAmino {
  /** storage_provider defines the operator account address of the storage provider who want to exit from the greenfield storage network. */
  storage_provider?: string;
}
export interface MsgStorageProviderExitAminoMsg {
  type: "/greenfield.virtualgroup.MsgStorageProviderExit";
  value: MsgStorageProviderExitAmino;
}
export interface MsgStorageProviderExitSDKType {
  storage_provider: string;
}
export interface MsgStorageProviderExitResponse {}
export interface MsgStorageProviderExitResponseProtoMsg {
  typeUrl: "/greenfield.virtualgroup.MsgStorageProviderExitResponse";
  value: Uint8Array;
}
export interface MsgStorageProviderExitResponseAmino {}
export interface MsgStorageProviderExitResponseAminoMsg {
  type: "/greenfield.virtualgroup.MsgStorageProviderExitResponse";
  value: MsgStorageProviderExitResponseAmino;
}
export interface MsgStorageProviderExitResponseSDKType {}
export interface MsgCompleteStorageProviderExit {
  /** storage_provider defines the operator account address of the storage provider who will exit */
  storageProvider: string;
  /** operator defines the operator account address who initials this transaction. */
  operator: string;
}
export interface MsgCompleteStorageProviderExitProtoMsg {
  typeUrl: "/greenfield.virtualgroup.MsgCompleteStorageProviderExit";
  value: Uint8Array;
}
export interface MsgCompleteStorageProviderExitAmino {
  /** storage_provider defines the operator account address of the storage provider who will exit */
  storage_provider?: string;
  /** operator defines the operator account address who initials this transaction. */
  operator?: string;
}
export interface MsgCompleteStorageProviderExitAminoMsg {
  type: "/greenfield.virtualgroup.MsgCompleteStorageProviderExit";
  value: MsgCompleteStorageProviderExitAmino;
}
export interface MsgCompleteStorageProviderExitSDKType {
  storage_provider: string;
  operator: string;
}
export interface MsgCompleteStorageProviderExitResponse {}
export interface MsgCompleteStorageProviderExitResponseProtoMsg {
  typeUrl: "/greenfield.virtualgroup.MsgCompleteStorageProviderExitResponse";
  value: Uint8Array;
}
export interface MsgCompleteStorageProviderExitResponseAmino {}
export interface MsgCompleteStorageProviderExitResponseAminoMsg {
  type: "/greenfield.virtualgroup.MsgCompleteStorageProviderExitResponse";
  value: MsgCompleteStorageProviderExitResponseAmino;
}
export interface MsgCompleteStorageProviderExitResponseSDKType {}
export interface MsgReserveSwapIn {
  /** storage_provider defines the operator account address of the storage provider who want to swap into the virtual group family or global virtual group. */
  storageProvider: string;
  /** target_sp_id defines the storage provider id to be replaced by the successor sp. */
  targetSpId: number;
  /**
   * virtual_group_family_id is the identifier of the virtual group family.
   * if it set to non-zero, it represents that the operator swap in as the primary storage provider
   * it it set to zero, it represents that the operator swap in as the secondary storage provider.
   */
  globalVirtualGroupFamilyId: number;
  /**
   * global_virtual_group_id is a global virtual group ID associated with the swap in.
   * It allows to be empty only when the operator wants to be the successor primary storage provider in a family.
   */
  globalVirtualGroupId: number;
}
export interface MsgReserveSwapInProtoMsg {
  typeUrl: "/greenfield.virtualgroup.MsgReserveSwapIn";
  value: Uint8Array;
}
export interface MsgReserveSwapInAmino {
  /** storage_provider defines the operator account address of the storage provider who want to swap into the virtual group family or global virtual group. */
  storage_provider?: string;
  /** target_sp_id defines the storage provider id to be replaced by the successor sp. */
  target_sp_id?: number;
  /**
   * virtual_group_family_id is the identifier of the virtual group family.
   * if it set to non-zero, it represents that the operator swap in as the primary storage provider
   * it it set to zero, it represents that the operator swap in as the secondary storage provider.
   */
  global_virtual_group_family_id?: number;
  /**
   * global_virtual_group_id is a global virtual group ID associated with the swap in.
   * It allows to be empty only when the operator wants to be the successor primary storage provider in a family.
   */
  global_virtual_group_id?: number;
}
export interface MsgReserveSwapInAminoMsg {
  type: "/greenfield.virtualgroup.MsgReserveSwapIn";
  value: MsgReserveSwapInAmino;
}
export interface MsgReserveSwapInSDKType {
  storage_provider: string;
  target_sp_id: number;
  global_virtual_group_family_id: number;
  global_virtual_group_id: number;
}
export interface MsgReserveSwapInResponse {}
export interface MsgReserveSwapInResponseProtoMsg {
  typeUrl: "/greenfield.virtualgroup.MsgReserveSwapInResponse";
  value: Uint8Array;
}
export interface MsgReserveSwapInResponseAmino {}
export interface MsgReserveSwapInResponseAminoMsg {
  type: "/greenfield.virtualgroup.MsgReserveSwapInResponse";
  value: MsgReserveSwapInResponseAmino;
}
export interface MsgReserveSwapInResponseSDKType {}
export interface MsgCompleteSwapIn {
  /** storage_provider defines the operator account address of the storage provider who wants to swap into the virtual group family or global virtual group. */
  storageProvider: string;
  /**
   * virtual_group_family_id is the identifier of the virtual group family.
   * if it set to non-zero, it represents that the operator swap in as the primary storage provider
   * it it set to zero, it represents that the operator swap in as the secondary storage provider.
   */
  globalVirtualGroupFamilyId: number;
  /**
   * global_virtual_group_id is a global virtual group ID associated with the swap in.
   * It allows to be empty only when the operator wants to be the successor primary storage provider in a family.
   */
  globalVirtualGroupId: number;
}
export interface MsgCompleteSwapInProtoMsg {
  typeUrl: "/greenfield.virtualgroup.MsgCompleteSwapIn";
  value: Uint8Array;
}
export interface MsgCompleteSwapInAmino {
  /** storage_provider defines the operator account address of the storage provider who wants to swap into the virtual group family or global virtual group. */
  storage_provider?: string;
  /**
   * virtual_group_family_id is the identifier of the virtual group family.
   * if it set to non-zero, it represents that the operator swap in as the primary storage provider
   * it it set to zero, it represents that the operator swap in as the secondary storage provider.
   */
  global_virtual_group_family_id?: number;
  /**
   * global_virtual_group_id is a global virtual group ID associated with the swap in.
   * It allows to be empty only when the operator wants to be the successor primary storage provider in a family.
   */
  global_virtual_group_id?: number;
}
export interface MsgCompleteSwapInAminoMsg {
  type: "/greenfield.virtualgroup.MsgCompleteSwapIn";
  value: MsgCompleteSwapInAmino;
}
export interface MsgCompleteSwapInSDKType {
  storage_provider: string;
  global_virtual_group_family_id: number;
  global_virtual_group_id: number;
}
export interface MsgCompleteSwapInResponse {}
export interface MsgCompleteSwapInResponseProtoMsg {
  typeUrl: "/greenfield.virtualgroup.MsgCompleteSwapInResponse";
  value: Uint8Array;
}
export interface MsgCompleteSwapInResponseAmino {}
export interface MsgCompleteSwapInResponseAminoMsg {
  type: "/greenfield.virtualgroup.MsgCompleteSwapInResponse";
  value: MsgCompleteSwapInResponseAmino;
}
export interface MsgCompleteSwapInResponseSDKType {}
export interface MsgCancelSwapIn {
  /** storage_provider defines the operator account address of the storage provider who want to swap into the virtual group family or global virtual group. */
  storageProvider: string;
  /**
   * virtual_group_family_id is the identifier of the virtual group family.
   * if it set to non-zero, it represents that the operator swap in as the primary storage provider
   * it it set to zero, it represents that the operator swap in as the secondary storage provider.
   */
  globalVirtualGroupFamilyId: number;
  /**
   * global_virtual_group_id is a global virtual group IDs associated with the swap in.
   * It allows to be empty only when the operator wants to be the successor primary storage provider in a family.
   */
  globalVirtualGroupId: number;
}
export interface MsgCancelSwapInProtoMsg {
  typeUrl: "/greenfield.virtualgroup.MsgCancelSwapIn";
  value: Uint8Array;
}
export interface MsgCancelSwapInAmino {
  /** storage_provider defines the operator account address of the storage provider who want to swap into the virtual group family or global virtual group. */
  storage_provider?: string;
  /**
   * virtual_group_family_id is the identifier of the virtual group family.
   * if it set to non-zero, it represents that the operator swap in as the primary storage provider
   * it it set to zero, it represents that the operator swap in as the secondary storage provider.
   */
  global_virtual_group_family_id?: number;
  /**
   * global_virtual_group_id is a global virtual group IDs associated with the swap in.
   * It allows to be empty only when the operator wants to be the successor primary storage provider in a family.
   */
  global_virtual_group_id?: number;
}
export interface MsgCancelSwapInAminoMsg {
  type: "/greenfield.virtualgroup.MsgCancelSwapIn";
  value: MsgCancelSwapInAmino;
}
export interface MsgCancelSwapInSDKType {
  storage_provider: string;
  global_virtual_group_family_id: number;
  global_virtual_group_id: number;
}
export interface MsgCancelSwapInResponse {}
export interface MsgCancelSwapInResponseProtoMsg {
  typeUrl: "/greenfield.virtualgroup.MsgCancelSwapInResponse";
  value: Uint8Array;
}
export interface MsgCancelSwapInResponseAmino {}
export interface MsgCancelSwapInResponseAminoMsg {
  type: "/greenfield.virtualgroup.MsgCancelSwapInResponse";
  value: MsgCancelSwapInResponseAmino;
}
export interface MsgCancelSwapInResponseSDKType {}
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgStorageProviderForcedExit {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /** storage_provider defines the account address of the storage provider forced to exit */
  storageProvider: string;
}
export interface MsgStorageProviderForcedExitProtoMsg {
  typeUrl: "/greenfield.virtualgroup.MsgStorageProviderForcedExit";
  value: Uint8Array;
}
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgStorageProviderForcedExitAmino {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority?: string;
  /** storage_provider defines the account address of the storage provider forced to exit */
  storage_provider?: string;
}
export interface MsgStorageProviderForcedExitAminoMsg {
  type: "/greenfield.virtualgroup.MsgStorageProviderForcedExit";
  value: MsgStorageProviderForcedExitAmino;
}
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgStorageProviderForcedExitSDKType {
  authority: string;
  storage_provider: string;
}
export interface MsgStorageProviderForcedExitResponse {}
export interface MsgStorageProviderForcedExitResponseProtoMsg {
  typeUrl: "/greenfield.virtualgroup.MsgStorageProviderForcedExitResponse";
  value: Uint8Array;
}
export interface MsgStorageProviderForcedExitResponseAmino {}
export interface MsgStorageProviderForcedExitResponseAminoMsg {
  type: "/greenfield.virtualgroup.MsgStorageProviderForcedExitResponse";
  value: MsgStorageProviderForcedExitResponseAmino;
}
export interface MsgStorageProviderForcedExitResponseSDKType {}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/greenfield.virtualgroup.MsgUpdateParams",
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
    storageProvider: "",
    operator: ""
  };
}
export const MsgCompleteStorageProviderExit = {
  typeUrl: "/greenfield.virtualgroup.MsgCompleteStorageProviderExit",
  encode(message: MsgCompleteStorageProviderExit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storageProvider !== "") {
      writer.uint32(10).string(message.storageProvider);
    }
    if (message.operator !== "") {
      writer.uint32(18).string(message.operator);
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
        case 2:
          message.operator = reader.string();
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
      storageProvider: isSet(object.storageProvider) ? String(object.storageProvider) : "",
      operator: isSet(object.operator) ? String(object.operator) : ""
    };
  },
  toJSON(message: MsgCompleteStorageProviderExit): unknown {
    const obj: any = {};
    message.storageProvider !== undefined && (obj.storageProvider = message.storageProvider);
    message.operator !== undefined && (obj.operator = message.operator);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCompleteStorageProviderExit>, I>>(object: I): MsgCompleteStorageProviderExit {
    const message = createBaseMsgCompleteStorageProviderExit();
    message.storageProvider = object.storageProvider ?? "";
    message.operator = object.operator ?? "";
    return message;
  },
  fromSDK(object: MsgCompleteStorageProviderExitSDKType): MsgCompleteStorageProviderExit {
    return {
      storageProvider: object?.storage_provider,
      operator: object?.operator
    };
  },
  toSDK(message: MsgCompleteStorageProviderExit): MsgCompleteStorageProviderExitSDKType {
    const obj: any = {};
    obj.storage_provider = message.storageProvider;
    obj.operator = message.operator;
    return obj;
  },
  fromAmino(object: MsgCompleteStorageProviderExitAmino): MsgCompleteStorageProviderExit {
    const message = createBaseMsgCompleteStorageProviderExit();
    if (object.storage_provider !== undefined && object.storage_provider !== null) {
      message.storageProvider = object.storage_provider;
    }
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    return message;
  },
  toAmino(message: MsgCompleteStorageProviderExit): MsgCompleteStorageProviderExitAmino {
    const obj: any = {};
    obj.storage_provider = message.storageProvider;
    obj.operator = message.operator;
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
function createBaseMsgReserveSwapIn(): MsgReserveSwapIn {
  return {
    storageProvider: "",
    targetSpId: 0,
    globalVirtualGroupFamilyId: 0,
    globalVirtualGroupId: 0
  };
}
export const MsgReserveSwapIn = {
  typeUrl: "/greenfield.virtualgroup.MsgReserveSwapIn",
  encode(message: MsgReserveSwapIn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storageProvider !== "") {
      writer.uint32(10).string(message.storageProvider);
    }
    if (message.targetSpId !== 0) {
      writer.uint32(16).uint32(message.targetSpId);
    }
    if (message.globalVirtualGroupFamilyId !== 0) {
      writer.uint32(24).uint32(message.globalVirtualGroupFamilyId);
    }
    if (message.globalVirtualGroupId !== 0) {
      writer.uint32(32).uint32(message.globalVirtualGroupId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgReserveSwapIn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReserveSwapIn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storageProvider = reader.string();
          break;
        case 2:
          message.targetSpId = reader.uint32();
          break;
        case 3:
          message.globalVirtualGroupFamilyId = reader.uint32();
          break;
        case 4:
          message.globalVirtualGroupId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgReserveSwapIn {
    return {
      storageProvider: isSet(object.storageProvider) ? String(object.storageProvider) : "",
      targetSpId: isSet(object.targetSpId) ? Number(object.targetSpId) : 0,
      globalVirtualGroupFamilyId: isSet(object.globalVirtualGroupFamilyId) ? Number(object.globalVirtualGroupFamilyId) : 0,
      globalVirtualGroupId: isSet(object.globalVirtualGroupId) ? Number(object.globalVirtualGroupId) : 0
    };
  },
  toJSON(message: MsgReserveSwapIn): unknown {
    const obj: any = {};
    message.storageProvider !== undefined && (obj.storageProvider = message.storageProvider);
    message.targetSpId !== undefined && (obj.targetSpId = Math.round(message.targetSpId));
    message.globalVirtualGroupFamilyId !== undefined && (obj.globalVirtualGroupFamilyId = Math.round(message.globalVirtualGroupFamilyId));
    message.globalVirtualGroupId !== undefined && (obj.globalVirtualGroupId = Math.round(message.globalVirtualGroupId));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgReserveSwapIn>, I>>(object: I): MsgReserveSwapIn {
    const message = createBaseMsgReserveSwapIn();
    message.storageProvider = object.storageProvider ?? "";
    message.targetSpId = object.targetSpId ?? 0;
    message.globalVirtualGroupFamilyId = object.globalVirtualGroupFamilyId ?? 0;
    message.globalVirtualGroupId = object.globalVirtualGroupId ?? 0;
    return message;
  },
  fromSDK(object: MsgReserveSwapInSDKType): MsgReserveSwapIn {
    return {
      storageProvider: object?.storage_provider,
      targetSpId: object?.target_sp_id,
      globalVirtualGroupFamilyId: object?.global_virtual_group_family_id,
      globalVirtualGroupId: object?.global_virtual_group_id
    };
  },
  toSDK(message: MsgReserveSwapIn): MsgReserveSwapInSDKType {
    const obj: any = {};
    obj.storage_provider = message.storageProvider;
    obj.target_sp_id = message.targetSpId;
    obj.global_virtual_group_family_id = message.globalVirtualGroupFamilyId;
    obj.global_virtual_group_id = message.globalVirtualGroupId;
    return obj;
  },
  fromAmino(object: MsgReserveSwapInAmino): MsgReserveSwapIn {
    const message = createBaseMsgReserveSwapIn();
    if (object.storage_provider !== undefined && object.storage_provider !== null) {
      message.storageProvider = object.storage_provider;
    }
    if (object.target_sp_id !== undefined && object.target_sp_id !== null) {
      message.targetSpId = object.target_sp_id;
    }
    if (object.global_virtual_group_family_id !== undefined && object.global_virtual_group_family_id !== null) {
      message.globalVirtualGroupFamilyId = object.global_virtual_group_family_id;
    }
    if (object.global_virtual_group_id !== undefined && object.global_virtual_group_id !== null) {
      message.globalVirtualGroupId = object.global_virtual_group_id;
    }
    return message;
  },
  toAmino(message: MsgReserveSwapIn): MsgReserveSwapInAmino {
    const obj: any = {};
    obj.storage_provider = message.storageProvider;
    obj.target_sp_id = message.targetSpId;
    obj.global_virtual_group_family_id = message.globalVirtualGroupFamilyId;
    obj.global_virtual_group_id = message.globalVirtualGroupId;
    return obj;
  },
  fromAminoMsg(object: MsgReserveSwapInAminoMsg): MsgReserveSwapIn {
    return MsgReserveSwapIn.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgReserveSwapInProtoMsg): MsgReserveSwapIn {
    return MsgReserveSwapIn.decode(message.value);
  },
  toProto(message: MsgReserveSwapIn): Uint8Array {
    return MsgReserveSwapIn.encode(message).finish();
  },
  toProtoMsg(message: MsgReserveSwapIn): MsgReserveSwapInProtoMsg {
    return {
      typeUrl: "/greenfield.virtualgroup.MsgReserveSwapIn",
      value: MsgReserveSwapIn.encode(message).finish()
    };
  }
};
function createBaseMsgReserveSwapInResponse(): MsgReserveSwapInResponse {
  return {};
}
export const MsgReserveSwapInResponse = {
  typeUrl: "/greenfield.virtualgroup.MsgReserveSwapInResponse",
  encode(_: MsgReserveSwapInResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgReserveSwapInResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReserveSwapInResponse();
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
  fromJSON(_: any): MsgReserveSwapInResponse {
    return {};
  },
  toJSON(_: MsgReserveSwapInResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgReserveSwapInResponse>, I>>(_: I): MsgReserveSwapInResponse {
    const message = createBaseMsgReserveSwapInResponse();
    return message;
  },
  fromSDK(_: MsgReserveSwapInResponseSDKType): MsgReserveSwapInResponse {
    return {};
  },
  toSDK(_: MsgReserveSwapInResponse): MsgReserveSwapInResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgReserveSwapInResponseAmino): MsgReserveSwapInResponse {
    const message = createBaseMsgReserveSwapInResponse();
    return message;
  },
  toAmino(_: MsgReserveSwapInResponse): MsgReserveSwapInResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgReserveSwapInResponseAminoMsg): MsgReserveSwapInResponse {
    return MsgReserveSwapInResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgReserveSwapInResponseProtoMsg): MsgReserveSwapInResponse {
    return MsgReserveSwapInResponse.decode(message.value);
  },
  toProto(message: MsgReserveSwapInResponse): Uint8Array {
    return MsgReserveSwapInResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgReserveSwapInResponse): MsgReserveSwapInResponseProtoMsg {
    return {
      typeUrl: "/greenfield.virtualgroup.MsgReserveSwapInResponse",
      value: MsgReserveSwapInResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCompleteSwapIn(): MsgCompleteSwapIn {
  return {
    storageProvider: "",
    globalVirtualGroupFamilyId: 0,
    globalVirtualGroupId: 0
  };
}
export const MsgCompleteSwapIn = {
  typeUrl: "/greenfield.virtualgroup.MsgCompleteSwapIn",
  encode(message: MsgCompleteSwapIn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storageProvider !== "") {
      writer.uint32(10).string(message.storageProvider);
    }
    if (message.globalVirtualGroupFamilyId !== 0) {
      writer.uint32(16).uint32(message.globalVirtualGroupFamilyId);
    }
    if (message.globalVirtualGroupId !== 0) {
      writer.uint32(24).uint32(message.globalVirtualGroupId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCompleteSwapIn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCompleteSwapIn();
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
          message.globalVirtualGroupId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCompleteSwapIn {
    return {
      storageProvider: isSet(object.storageProvider) ? String(object.storageProvider) : "",
      globalVirtualGroupFamilyId: isSet(object.globalVirtualGroupFamilyId) ? Number(object.globalVirtualGroupFamilyId) : 0,
      globalVirtualGroupId: isSet(object.globalVirtualGroupId) ? Number(object.globalVirtualGroupId) : 0
    };
  },
  toJSON(message: MsgCompleteSwapIn): unknown {
    const obj: any = {};
    message.storageProvider !== undefined && (obj.storageProvider = message.storageProvider);
    message.globalVirtualGroupFamilyId !== undefined && (obj.globalVirtualGroupFamilyId = Math.round(message.globalVirtualGroupFamilyId));
    message.globalVirtualGroupId !== undefined && (obj.globalVirtualGroupId = Math.round(message.globalVirtualGroupId));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCompleteSwapIn>, I>>(object: I): MsgCompleteSwapIn {
    const message = createBaseMsgCompleteSwapIn();
    message.storageProvider = object.storageProvider ?? "";
    message.globalVirtualGroupFamilyId = object.globalVirtualGroupFamilyId ?? 0;
    message.globalVirtualGroupId = object.globalVirtualGroupId ?? 0;
    return message;
  },
  fromSDK(object: MsgCompleteSwapInSDKType): MsgCompleteSwapIn {
    return {
      storageProvider: object?.storage_provider,
      globalVirtualGroupFamilyId: object?.global_virtual_group_family_id,
      globalVirtualGroupId: object?.global_virtual_group_id
    };
  },
  toSDK(message: MsgCompleteSwapIn): MsgCompleteSwapInSDKType {
    const obj: any = {};
    obj.storage_provider = message.storageProvider;
    obj.global_virtual_group_family_id = message.globalVirtualGroupFamilyId;
    obj.global_virtual_group_id = message.globalVirtualGroupId;
    return obj;
  },
  fromAmino(object: MsgCompleteSwapInAmino): MsgCompleteSwapIn {
    const message = createBaseMsgCompleteSwapIn();
    if (object.storage_provider !== undefined && object.storage_provider !== null) {
      message.storageProvider = object.storage_provider;
    }
    if (object.global_virtual_group_family_id !== undefined && object.global_virtual_group_family_id !== null) {
      message.globalVirtualGroupFamilyId = object.global_virtual_group_family_id;
    }
    if (object.global_virtual_group_id !== undefined && object.global_virtual_group_id !== null) {
      message.globalVirtualGroupId = object.global_virtual_group_id;
    }
    return message;
  },
  toAmino(message: MsgCompleteSwapIn): MsgCompleteSwapInAmino {
    const obj: any = {};
    obj.storage_provider = message.storageProvider;
    obj.global_virtual_group_family_id = message.globalVirtualGroupFamilyId;
    obj.global_virtual_group_id = message.globalVirtualGroupId;
    return obj;
  },
  fromAminoMsg(object: MsgCompleteSwapInAminoMsg): MsgCompleteSwapIn {
    return MsgCompleteSwapIn.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCompleteSwapInProtoMsg): MsgCompleteSwapIn {
    return MsgCompleteSwapIn.decode(message.value);
  },
  toProto(message: MsgCompleteSwapIn): Uint8Array {
    return MsgCompleteSwapIn.encode(message).finish();
  },
  toProtoMsg(message: MsgCompleteSwapIn): MsgCompleteSwapInProtoMsg {
    return {
      typeUrl: "/greenfield.virtualgroup.MsgCompleteSwapIn",
      value: MsgCompleteSwapIn.encode(message).finish()
    };
  }
};
function createBaseMsgCompleteSwapInResponse(): MsgCompleteSwapInResponse {
  return {};
}
export const MsgCompleteSwapInResponse = {
  typeUrl: "/greenfield.virtualgroup.MsgCompleteSwapInResponse",
  encode(_: MsgCompleteSwapInResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCompleteSwapInResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCompleteSwapInResponse();
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
  fromJSON(_: any): MsgCompleteSwapInResponse {
    return {};
  },
  toJSON(_: MsgCompleteSwapInResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCompleteSwapInResponse>, I>>(_: I): MsgCompleteSwapInResponse {
    const message = createBaseMsgCompleteSwapInResponse();
    return message;
  },
  fromSDK(_: MsgCompleteSwapInResponseSDKType): MsgCompleteSwapInResponse {
    return {};
  },
  toSDK(_: MsgCompleteSwapInResponse): MsgCompleteSwapInResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgCompleteSwapInResponseAmino): MsgCompleteSwapInResponse {
    const message = createBaseMsgCompleteSwapInResponse();
    return message;
  },
  toAmino(_: MsgCompleteSwapInResponse): MsgCompleteSwapInResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCompleteSwapInResponseAminoMsg): MsgCompleteSwapInResponse {
    return MsgCompleteSwapInResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCompleteSwapInResponseProtoMsg): MsgCompleteSwapInResponse {
    return MsgCompleteSwapInResponse.decode(message.value);
  },
  toProto(message: MsgCompleteSwapInResponse): Uint8Array {
    return MsgCompleteSwapInResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCompleteSwapInResponse): MsgCompleteSwapInResponseProtoMsg {
    return {
      typeUrl: "/greenfield.virtualgroup.MsgCompleteSwapInResponse",
      value: MsgCompleteSwapInResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCancelSwapIn(): MsgCancelSwapIn {
  return {
    storageProvider: "",
    globalVirtualGroupFamilyId: 0,
    globalVirtualGroupId: 0
  };
}
export const MsgCancelSwapIn = {
  typeUrl: "/greenfield.virtualgroup.MsgCancelSwapIn",
  encode(message: MsgCancelSwapIn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storageProvider !== "") {
      writer.uint32(10).string(message.storageProvider);
    }
    if (message.globalVirtualGroupFamilyId !== 0) {
      writer.uint32(16).uint32(message.globalVirtualGroupFamilyId);
    }
    if (message.globalVirtualGroupId !== 0) {
      writer.uint32(24).uint32(message.globalVirtualGroupId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelSwapIn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelSwapIn();
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
          message.globalVirtualGroupId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCancelSwapIn {
    return {
      storageProvider: isSet(object.storageProvider) ? String(object.storageProvider) : "",
      globalVirtualGroupFamilyId: isSet(object.globalVirtualGroupFamilyId) ? Number(object.globalVirtualGroupFamilyId) : 0,
      globalVirtualGroupId: isSet(object.globalVirtualGroupId) ? Number(object.globalVirtualGroupId) : 0
    };
  },
  toJSON(message: MsgCancelSwapIn): unknown {
    const obj: any = {};
    message.storageProvider !== undefined && (obj.storageProvider = message.storageProvider);
    message.globalVirtualGroupFamilyId !== undefined && (obj.globalVirtualGroupFamilyId = Math.round(message.globalVirtualGroupFamilyId));
    message.globalVirtualGroupId !== undefined && (obj.globalVirtualGroupId = Math.round(message.globalVirtualGroupId));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCancelSwapIn>, I>>(object: I): MsgCancelSwapIn {
    const message = createBaseMsgCancelSwapIn();
    message.storageProvider = object.storageProvider ?? "";
    message.globalVirtualGroupFamilyId = object.globalVirtualGroupFamilyId ?? 0;
    message.globalVirtualGroupId = object.globalVirtualGroupId ?? 0;
    return message;
  },
  fromSDK(object: MsgCancelSwapInSDKType): MsgCancelSwapIn {
    return {
      storageProvider: object?.storage_provider,
      globalVirtualGroupFamilyId: object?.global_virtual_group_family_id,
      globalVirtualGroupId: object?.global_virtual_group_id
    };
  },
  toSDK(message: MsgCancelSwapIn): MsgCancelSwapInSDKType {
    const obj: any = {};
    obj.storage_provider = message.storageProvider;
    obj.global_virtual_group_family_id = message.globalVirtualGroupFamilyId;
    obj.global_virtual_group_id = message.globalVirtualGroupId;
    return obj;
  },
  fromAmino(object: MsgCancelSwapInAmino): MsgCancelSwapIn {
    const message = createBaseMsgCancelSwapIn();
    if (object.storage_provider !== undefined && object.storage_provider !== null) {
      message.storageProvider = object.storage_provider;
    }
    if (object.global_virtual_group_family_id !== undefined && object.global_virtual_group_family_id !== null) {
      message.globalVirtualGroupFamilyId = object.global_virtual_group_family_id;
    }
    if (object.global_virtual_group_id !== undefined && object.global_virtual_group_id !== null) {
      message.globalVirtualGroupId = object.global_virtual_group_id;
    }
    return message;
  },
  toAmino(message: MsgCancelSwapIn): MsgCancelSwapInAmino {
    const obj: any = {};
    obj.storage_provider = message.storageProvider;
    obj.global_virtual_group_family_id = message.globalVirtualGroupFamilyId;
    obj.global_virtual_group_id = message.globalVirtualGroupId;
    return obj;
  },
  fromAminoMsg(object: MsgCancelSwapInAminoMsg): MsgCancelSwapIn {
    return MsgCancelSwapIn.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelSwapInProtoMsg): MsgCancelSwapIn {
    return MsgCancelSwapIn.decode(message.value);
  },
  toProto(message: MsgCancelSwapIn): Uint8Array {
    return MsgCancelSwapIn.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelSwapIn): MsgCancelSwapInProtoMsg {
    return {
      typeUrl: "/greenfield.virtualgroup.MsgCancelSwapIn",
      value: MsgCancelSwapIn.encode(message).finish()
    };
  }
};
function createBaseMsgCancelSwapInResponse(): MsgCancelSwapInResponse {
  return {};
}
export const MsgCancelSwapInResponse = {
  typeUrl: "/greenfield.virtualgroup.MsgCancelSwapInResponse",
  encode(_: MsgCancelSwapInResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelSwapInResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelSwapInResponse();
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
  fromJSON(_: any): MsgCancelSwapInResponse {
    return {};
  },
  toJSON(_: MsgCancelSwapInResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCancelSwapInResponse>, I>>(_: I): MsgCancelSwapInResponse {
    const message = createBaseMsgCancelSwapInResponse();
    return message;
  },
  fromSDK(_: MsgCancelSwapInResponseSDKType): MsgCancelSwapInResponse {
    return {};
  },
  toSDK(_: MsgCancelSwapInResponse): MsgCancelSwapInResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgCancelSwapInResponseAmino): MsgCancelSwapInResponse {
    const message = createBaseMsgCancelSwapInResponse();
    return message;
  },
  toAmino(_: MsgCancelSwapInResponse): MsgCancelSwapInResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelSwapInResponseAminoMsg): MsgCancelSwapInResponse {
    return MsgCancelSwapInResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelSwapInResponseProtoMsg): MsgCancelSwapInResponse {
    return MsgCancelSwapInResponse.decode(message.value);
  },
  toProto(message: MsgCancelSwapInResponse): Uint8Array {
    return MsgCancelSwapInResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelSwapInResponse): MsgCancelSwapInResponseProtoMsg {
    return {
      typeUrl: "/greenfield.virtualgroup.MsgCancelSwapInResponse",
      value: MsgCancelSwapInResponse.encode(message).finish()
    };
  }
};
function createBaseMsgStorageProviderForcedExit(): MsgStorageProviderForcedExit {
  return {
    authority: "",
    storageProvider: ""
  };
}
export const MsgStorageProviderForcedExit = {
  typeUrl: "/greenfield.virtualgroup.MsgStorageProviderForcedExit",
  encode(message: MsgStorageProviderForcedExit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.storageProvider !== "") {
      writer.uint32(18).string(message.storageProvider);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStorageProviderForcedExit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStorageProviderForcedExit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.storageProvider = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgStorageProviderForcedExit {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      storageProvider: isSet(object.storageProvider) ? String(object.storageProvider) : ""
    };
  },
  toJSON(message: MsgStorageProviderForcedExit): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.storageProvider !== undefined && (obj.storageProvider = message.storageProvider);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgStorageProviderForcedExit>, I>>(object: I): MsgStorageProviderForcedExit {
    const message = createBaseMsgStorageProviderForcedExit();
    message.authority = object.authority ?? "";
    message.storageProvider = object.storageProvider ?? "";
    return message;
  },
  fromSDK(object: MsgStorageProviderForcedExitSDKType): MsgStorageProviderForcedExit {
    return {
      authority: object?.authority,
      storageProvider: object?.storage_provider
    };
  },
  toSDK(message: MsgStorageProviderForcedExit): MsgStorageProviderForcedExitSDKType {
    const obj: any = {};
    obj.authority = message.authority;
    obj.storage_provider = message.storageProvider;
    return obj;
  },
  fromAmino(object: MsgStorageProviderForcedExitAmino): MsgStorageProviderForcedExit {
    const message = createBaseMsgStorageProviderForcedExit();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.storage_provider !== undefined && object.storage_provider !== null) {
      message.storageProvider = object.storage_provider;
    }
    return message;
  },
  toAmino(message: MsgStorageProviderForcedExit): MsgStorageProviderForcedExitAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.storage_provider = message.storageProvider;
    return obj;
  },
  fromAminoMsg(object: MsgStorageProviderForcedExitAminoMsg): MsgStorageProviderForcedExit {
    return MsgStorageProviderForcedExit.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgStorageProviderForcedExitProtoMsg): MsgStorageProviderForcedExit {
    return MsgStorageProviderForcedExit.decode(message.value);
  },
  toProto(message: MsgStorageProviderForcedExit): Uint8Array {
    return MsgStorageProviderForcedExit.encode(message).finish();
  },
  toProtoMsg(message: MsgStorageProviderForcedExit): MsgStorageProviderForcedExitProtoMsg {
    return {
      typeUrl: "/greenfield.virtualgroup.MsgStorageProviderForcedExit",
      value: MsgStorageProviderForcedExit.encode(message).finish()
    };
  }
};
function createBaseMsgStorageProviderForcedExitResponse(): MsgStorageProviderForcedExitResponse {
  return {};
}
export const MsgStorageProviderForcedExitResponse = {
  typeUrl: "/greenfield.virtualgroup.MsgStorageProviderForcedExitResponse",
  encode(_: MsgStorageProviderForcedExitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStorageProviderForcedExitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStorageProviderForcedExitResponse();
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
  fromJSON(_: any): MsgStorageProviderForcedExitResponse {
    return {};
  },
  toJSON(_: MsgStorageProviderForcedExitResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgStorageProviderForcedExitResponse>, I>>(_: I): MsgStorageProviderForcedExitResponse {
    const message = createBaseMsgStorageProviderForcedExitResponse();
    return message;
  },
  fromSDK(_: MsgStorageProviderForcedExitResponseSDKType): MsgStorageProviderForcedExitResponse {
    return {};
  },
  toSDK(_: MsgStorageProviderForcedExitResponse): MsgStorageProviderForcedExitResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgStorageProviderForcedExitResponseAmino): MsgStorageProviderForcedExitResponse {
    const message = createBaseMsgStorageProviderForcedExitResponse();
    return message;
  },
  toAmino(_: MsgStorageProviderForcedExitResponse): MsgStorageProviderForcedExitResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgStorageProviderForcedExitResponseAminoMsg): MsgStorageProviderForcedExitResponse {
    return MsgStorageProviderForcedExitResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgStorageProviderForcedExitResponseProtoMsg): MsgStorageProviderForcedExitResponse {
    return MsgStorageProviderForcedExitResponse.decode(message.value);
  },
  toProto(message: MsgStorageProviderForcedExitResponse): Uint8Array {
    return MsgStorageProviderForcedExitResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgStorageProviderForcedExitResponse): MsgStorageProviderForcedExitResponseProtoMsg {
    return {
      typeUrl: "/greenfield.virtualgroup.MsgStorageProviderForcedExitResponse",
      value: MsgStorageProviderForcedExitResponse.encode(message).finish()
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
  ReserveSwapIn(request: MsgReserveSwapIn): Promise<MsgReserveSwapInResponse>;
  CancelSwapIn(request: MsgCancelSwapIn): Promise<MsgCancelSwapInResponse>;
  CompleteSwapIn(request: MsgCompleteSwapIn): Promise<MsgCompleteSwapInResponse>;
  /**
   * StorageProviderForcedExit defines a governance operation for a SP to be forced to exit
   * The authority is defined in the keeper.
   */
  StorageProviderForcedExit(request: MsgStorageProviderForcedExit): Promise<MsgStorageProviderForcedExitResponse>;
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
    this.ReserveSwapIn = this.ReserveSwapIn.bind(this);
    this.CancelSwapIn = this.CancelSwapIn.bind(this);
    this.CompleteSwapIn = this.CompleteSwapIn.bind(this);
    this.StorageProviderForcedExit = this.StorageProviderForcedExit.bind(this);
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
  ReserveSwapIn(request: MsgReserveSwapIn): Promise<MsgReserveSwapInResponse> {
    const data = MsgReserveSwapIn.encode(request).finish();
    const promise = this.rpc.request("greenfield.virtualgroup.Msg", "ReserveSwapIn", data);
    return promise.then(data => MsgReserveSwapInResponse.decode(new _m0.Reader(data)));
  }
  CancelSwapIn(request: MsgCancelSwapIn): Promise<MsgCancelSwapInResponse> {
    const data = MsgCancelSwapIn.encode(request).finish();
    const promise = this.rpc.request("greenfield.virtualgroup.Msg", "CancelSwapIn", data);
    return promise.then(data => MsgCancelSwapInResponse.decode(new _m0.Reader(data)));
  }
  CompleteSwapIn(request: MsgCompleteSwapIn): Promise<MsgCompleteSwapInResponse> {
    const data = MsgCompleteSwapIn.encode(request).finish();
    const promise = this.rpc.request("greenfield.virtualgroup.Msg", "CompleteSwapIn", data);
    return promise.then(data => MsgCompleteSwapInResponse.decode(new _m0.Reader(data)));
  }
  StorageProviderForcedExit(request: MsgStorageProviderForcedExit): Promise<MsgStorageProviderForcedExitResponse> {
    const data = MsgStorageProviderForcedExit.encode(request).finish();
    const promise = this.rpc.request("greenfield.virtualgroup.Msg", "StorageProviderForcedExit", data);
    return promise.then(data => MsgStorageProviderForcedExitResponse.decode(new _m0.Reader(data)));
  }
}