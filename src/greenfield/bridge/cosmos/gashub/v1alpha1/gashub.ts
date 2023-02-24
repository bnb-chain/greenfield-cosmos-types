/* eslint-disable */
import { Long, isSet, DeepPartial, Exact } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmos.gashub.v1alpha1";
/** Params defines the parameters for the gashub module. */

export interface Params {
  maxTxSize: Long;
  minGasPerByte: Long;
  msgGrantFixedGas: Long;
  msgGrantPerItemGas: Long;
  msgRevokeGas: Long;
  msgExecGas: Long;
  msgSendGas: Long;
  msgMultiSendFixedGas: Long;
  msgMultiSendPerItemGas: Long;
  msgWithdrawDelegatorRewardGas: Long;
  msgWithdrawValidatorCommissionGas: Long;
  msgSetWithdrawAddressGas: Long;
  msgFundCommunityPoolGas: Long;
  msgGrantAllowanceFixedGas: Long;
  msgGrantAllowancePerItemGas: Long;
  msgRevokeAllowanceGas: Long;
  msgSubmitProposalGas: Long;
  msgVoteGas: Long;
  msgVoteWeightedGas: Long;
  msgDepositGas: Long;
  msgUnjailGas: Long;
  msgImpeachGas: Long;
  msgEditValidatorGas: Long;
  msgDelegateGas: Long;
  msgUndelegateGas: Long;
  msgBeginRedelegateGas: Long;
  msgCancelUnbondingDelegationGas: Long;
  msgCreateValidatorGas: Long;
  msgClaimGas: Long;
  msgTransferOutGas: Long;
  msgCreateStorageProviderGas: Long;
  msgEditStorageProviderGas: Long;
  msgSpDepositGas: Long;
  msgStorageCreateBucketGas: Long;
  msgStorageDeleteBucketGas: Long;
  msgStorageCreateObjectGas: Long;
  msgStorageDeleteObjectGas: Long;
  msgStorageSealObjectGas: Long;
  msgStorageCopyObjectGas: Long;
  msgStorageRejectSealObjectGas: Long;
  msgStorageCreateGroupGas: Long;
  msgStorageDeleteGroupGas: Long;
  msgStorageLeaveGroupGas: Long;
  msgStorageUpdateGroupMemberGas: Long;
}

function createBaseParams(): Params {
  return {
    maxTxSize: Long.UZERO,
    minGasPerByte: Long.UZERO,
    msgGrantFixedGas: Long.UZERO,
    msgGrantPerItemGas: Long.UZERO,
    msgRevokeGas: Long.UZERO,
    msgExecGas: Long.UZERO,
    msgSendGas: Long.UZERO,
    msgMultiSendFixedGas: Long.UZERO,
    msgMultiSendPerItemGas: Long.UZERO,
    msgWithdrawDelegatorRewardGas: Long.UZERO,
    msgWithdrawValidatorCommissionGas: Long.UZERO,
    msgSetWithdrawAddressGas: Long.UZERO,
    msgFundCommunityPoolGas: Long.UZERO,
    msgGrantAllowanceFixedGas: Long.UZERO,
    msgGrantAllowancePerItemGas: Long.UZERO,
    msgRevokeAllowanceGas: Long.UZERO,
    msgSubmitProposalGas: Long.UZERO,
    msgVoteGas: Long.UZERO,
    msgVoteWeightedGas: Long.UZERO,
    msgDepositGas: Long.UZERO,
    msgUnjailGas: Long.UZERO,
    msgImpeachGas: Long.UZERO,
    msgEditValidatorGas: Long.UZERO,
    msgDelegateGas: Long.UZERO,
    msgUndelegateGas: Long.UZERO,
    msgBeginRedelegateGas: Long.UZERO,
    msgCancelUnbondingDelegationGas: Long.UZERO,
    msgCreateValidatorGas: Long.UZERO,
    msgClaimGas: Long.UZERO,
    msgTransferOutGas: Long.UZERO,
    msgCreateStorageProviderGas: Long.UZERO,
    msgEditStorageProviderGas: Long.UZERO,
    msgSpDepositGas: Long.UZERO,
    msgStorageCreateBucketGas: Long.UZERO,
    msgStorageDeleteBucketGas: Long.UZERO,
    msgStorageCreateObjectGas: Long.UZERO,
    msgStorageDeleteObjectGas: Long.UZERO,
    msgStorageSealObjectGas: Long.UZERO,
    msgStorageCopyObjectGas: Long.UZERO,
    msgStorageRejectSealObjectGas: Long.UZERO,
    msgStorageCreateGroupGas: Long.UZERO,
    msgStorageDeleteGroupGas: Long.UZERO,
    msgStorageLeaveGroupGas: Long.UZERO,
    msgStorageUpdateGroupMemberGas: Long.UZERO
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.maxTxSize.isZero()) {
      writer.uint32(8).uint64(message.maxTxSize);
    }

    if (!message.minGasPerByte.isZero()) {
      writer.uint32(16).uint64(message.minGasPerByte);
    }

    if (!message.msgGrantFixedGas.isZero()) {
      writer.uint32(24).uint64(message.msgGrantFixedGas);
    }

    if (!message.msgGrantPerItemGas.isZero()) {
      writer.uint32(32).uint64(message.msgGrantPerItemGas);
    }

    if (!message.msgRevokeGas.isZero()) {
      writer.uint32(40).uint64(message.msgRevokeGas);
    }

    if (!message.msgExecGas.isZero()) {
      writer.uint32(48).uint64(message.msgExecGas);
    }

    if (!message.msgSendGas.isZero()) {
      writer.uint32(56).uint64(message.msgSendGas);
    }

    if (!message.msgMultiSendFixedGas.isZero()) {
      writer.uint32(64).uint64(message.msgMultiSendFixedGas);
    }

    if (!message.msgMultiSendPerItemGas.isZero()) {
      writer.uint32(72).uint64(message.msgMultiSendPerItemGas);
    }

    if (!message.msgWithdrawDelegatorRewardGas.isZero()) {
      writer.uint32(80).uint64(message.msgWithdrawDelegatorRewardGas);
    }

    if (!message.msgWithdrawValidatorCommissionGas.isZero()) {
      writer.uint32(88).uint64(message.msgWithdrawValidatorCommissionGas);
    }

    if (!message.msgSetWithdrawAddressGas.isZero()) {
      writer.uint32(96).uint64(message.msgSetWithdrawAddressGas);
    }

    if (!message.msgFundCommunityPoolGas.isZero()) {
      writer.uint32(104).uint64(message.msgFundCommunityPoolGas);
    }

    if (!message.msgGrantAllowanceFixedGas.isZero()) {
      writer.uint32(112).uint64(message.msgGrantAllowanceFixedGas);
    }

    if (!message.msgGrantAllowancePerItemGas.isZero()) {
      writer.uint32(120).uint64(message.msgGrantAllowancePerItemGas);
    }

    if (!message.msgRevokeAllowanceGas.isZero()) {
      writer.uint32(128).uint64(message.msgRevokeAllowanceGas);
    }

    if (!message.msgSubmitProposalGas.isZero()) {
      writer.uint32(136).uint64(message.msgSubmitProposalGas);
    }

    if (!message.msgVoteGas.isZero()) {
      writer.uint32(144).uint64(message.msgVoteGas);
    }

    if (!message.msgVoteWeightedGas.isZero()) {
      writer.uint32(152).uint64(message.msgVoteWeightedGas);
    }

    if (!message.msgDepositGas.isZero()) {
      writer.uint32(160).uint64(message.msgDepositGas);
    }

    if (!message.msgUnjailGas.isZero()) {
      writer.uint32(168).uint64(message.msgUnjailGas);
    }

    if (!message.msgImpeachGas.isZero()) {
      writer.uint32(176).uint64(message.msgImpeachGas);
    }

    if (!message.msgEditValidatorGas.isZero()) {
      writer.uint32(184).uint64(message.msgEditValidatorGas);
    }

    if (!message.msgDelegateGas.isZero()) {
      writer.uint32(192).uint64(message.msgDelegateGas);
    }

    if (!message.msgUndelegateGas.isZero()) {
      writer.uint32(200).uint64(message.msgUndelegateGas);
    }

    if (!message.msgBeginRedelegateGas.isZero()) {
      writer.uint32(208).uint64(message.msgBeginRedelegateGas);
    }

    if (!message.msgCancelUnbondingDelegationGas.isZero()) {
      writer.uint32(216).uint64(message.msgCancelUnbondingDelegationGas);
    }

    if (!message.msgCreateValidatorGas.isZero()) {
      writer.uint32(224).uint64(message.msgCreateValidatorGas);
    }

    if (!message.msgClaimGas.isZero()) {
      writer.uint32(232).uint64(message.msgClaimGas);
    }

    if (!message.msgTransferOutGas.isZero()) {
      writer.uint32(240).uint64(message.msgTransferOutGas);
    }

    if (!message.msgCreateStorageProviderGas.isZero()) {
      writer.uint32(248).uint64(message.msgCreateStorageProviderGas);
    }

    if (!message.msgEditStorageProviderGas.isZero()) {
      writer.uint32(256).uint64(message.msgEditStorageProviderGas);
    }

    if (!message.msgSpDepositGas.isZero()) {
      writer.uint32(264).uint64(message.msgSpDepositGas);
    }

    if (!message.msgStorageCreateBucketGas.isZero()) {
      writer.uint32(272).uint64(message.msgStorageCreateBucketGas);
    }

    if (!message.msgStorageDeleteBucketGas.isZero()) {
      writer.uint32(280).uint64(message.msgStorageDeleteBucketGas);
    }

    if (!message.msgStorageCreateObjectGas.isZero()) {
      writer.uint32(288).uint64(message.msgStorageCreateObjectGas);
    }

    if (!message.msgStorageDeleteObjectGas.isZero()) {
      writer.uint32(296).uint64(message.msgStorageDeleteObjectGas);
    }

    if (!message.msgStorageSealObjectGas.isZero()) {
      writer.uint32(304).uint64(message.msgStorageSealObjectGas);
    }

    if (!message.msgStorageCopyObjectGas.isZero()) {
      writer.uint32(312).uint64(message.msgStorageCopyObjectGas);
    }

    if (!message.msgStorageRejectSealObjectGas.isZero()) {
      writer.uint32(320).uint64(message.msgStorageRejectSealObjectGas);
    }

    if (!message.msgStorageCreateGroupGas.isZero()) {
      writer.uint32(328).uint64(message.msgStorageCreateGroupGas);
    }

    if (!message.msgStorageDeleteGroupGas.isZero()) {
      writer.uint32(336).uint64(message.msgStorageDeleteGroupGas);
    }

    if (!message.msgStorageLeaveGroupGas.isZero()) {
      writer.uint32(344).uint64(message.msgStorageLeaveGroupGas);
    }

    if (!message.msgStorageUpdateGroupMemberGas.isZero()) {
      writer.uint32(352).uint64(message.msgStorageUpdateGroupMemberGas);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.maxTxSize = (reader.uint64() as Long);
          break;

        case 2:
          message.minGasPerByte = (reader.uint64() as Long);
          break;

        case 3:
          message.msgGrantFixedGas = (reader.uint64() as Long);
          break;

        case 4:
          message.msgGrantPerItemGas = (reader.uint64() as Long);
          break;

        case 5:
          message.msgRevokeGas = (reader.uint64() as Long);
          break;

        case 6:
          message.msgExecGas = (reader.uint64() as Long);
          break;

        case 7:
          message.msgSendGas = (reader.uint64() as Long);
          break;

        case 8:
          message.msgMultiSendFixedGas = (reader.uint64() as Long);
          break;

        case 9:
          message.msgMultiSendPerItemGas = (reader.uint64() as Long);
          break;

        case 10:
          message.msgWithdrawDelegatorRewardGas = (reader.uint64() as Long);
          break;

        case 11:
          message.msgWithdrawValidatorCommissionGas = (reader.uint64() as Long);
          break;

        case 12:
          message.msgSetWithdrawAddressGas = (reader.uint64() as Long);
          break;

        case 13:
          message.msgFundCommunityPoolGas = (reader.uint64() as Long);
          break;

        case 14:
          message.msgGrantAllowanceFixedGas = (reader.uint64() as Long);
          break;

        case 15:
          message.msgGrantAllowancePerItemGas = (reader.uint64() as Long);
          break;

        case 16:
          message.msgRevokeAllowanceGas = (reader.uint64() as Long);
          break;

        case 17:
          message.msgSubmitProposalGas = (reader.uint64() as Long);
          break;

        case 18:
          message.msgVoteGas = (reader.uint64() as Long);
          break;

        case 19:
          message.msgVoteWeightedGas = (reader.uint64() as Long);
          break;

        case 20:
          message.msgDepositGas = (reader.uint64() as Long);
          break;

        case 21:
          message.msgUnjailGas = (reader.uint64() as Long);
          break;

        case 22:
          message.msgImpeachGas = (reader.uint64() as Long);
          break;

        case 23:
          message.msgEditValidatorGas = (reader.uint64() as Long);
          break;

        case 24:
          message.msgDelegateGas = (reader.uint64() as Long);
          break;

        case 25:
          message.msgUndelegateGas = (reader.uint64() as Long);
          break;

        case 26:
          message.msgBeginRedelegateGas = (reader.uint64() as Long);
          break;

        case 27:
          message.msgCancelUnbondingDelegationGas = (reader.uint64() as Long);
          break;

        case 28:
          message.msgCreateValidatorGas = (reader.uint64() as Long);
          break;

        case 29:
          message.msgClaimGas = (reader.uint64() as Long);
          break;

        case 30:
          message.msgTransferOutGas = (reader.uint64() as Long);
          break;

        case 31:
          message.msgCreateStorageProviderGas = (reader.uint64() as Long);
          break;

        case 32:
          message.msgEditStorageProviderGas = (reader.uint64() as Long);
          break;

        case 33:
          message.msgSpDepositGas = (reader.uint64() as Long);
          break;

        case 34:
          message.msgStorageCreateBucketGas = (reader.uint64() as Long);
          break;

        case 35:
          message.msgStorageDeleteBucketGas = (reader.uint64() as Long);
          break;

        case 36:
          message.msgStorageCreateObjectGas = (reader.uint64() as Long);
          break;

        case 37:
          message.msgStorageDeleteObjectGas = (reader.uint64() as Long);
          break;

        case 38:
          message.msgStorageSealObjectGas = (reader.uint64() as Long);
          break;

        case 39:
          message.msgStorageCopyObjectGas = (reader.uint64() as Long);
          break;

        case 40:
          message.msgStorageRejectSealObjectGas = (reader.uint64() as Long);
          break;

        case 41:
          message.msgStorageCreateGroupGas = (reader.uint64() as Long);
          break;

        case 42:
          message.msgStorageDeleteGroupGas = (reader.uint64() as Long);
          break;

        case 43:
          message.msgStorageLeaveGroupGas = (reader.uint64() as Long);
          break;

        case 44:
          message.msgStorageUpdateGroupMemberGas = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Params {
    return {
      maxTxSize: isSet(object.maxTxSize) ? Long.fromValue(object.maxTxSize) : Long.UZERO,
      minGasPerByte: isSet(object.minGasPerByte) ? Long.fromValue(object.minGasPerByte) : Long.UZERO,
      msgGrantFixedGas: isSet(object.msgGrantFixedGas) ? Long.fromValue(object.msgGrantFixedGas) : Long.UZERO,
      msgGrantPerItemGas: isSet(object.msgGrantPerItemGas) ? Long.fromValue(object.msgGrantPerItemGas) : Long.UZERO,
      msgRevokeGas: isSet(object.msgRevokeGas) ? Long.fromValue(object.msgRevokeGas) : Long.UZERO,
      msgExecGas: isSet(object.msgExecGas) ? Long.fromValue(object.msgExecGas) : Long.UZERO,
      msgSendGas: isSet(object.msgSendGas) ? Long.fromValue(object.msgSendGas) : Long.UZERO,
      msgMultiSendFixedGas: isSet(object.msgMultiSendFixedGas) ? Long.fromValue(object.msgMultiSendFixedGas) : Long.UZERO,
      msgMultiSendPerItemGas: isSet(object.msgMultiSendPerItemGas) ? Long.fromValue(object.msgMultiSendPerItemGas) : Long.UZERO,
      msgWithdrawDelegatorRewardGas: isSet(object.msgWithdrawDelegatorRewardGas) ? Long.fromValue(object.msgWithdrawDelegatorRewardGas) : Long.UZERO,
      msgWithdrawValidatorCommissionGas: isSet(object.msgWithdrawValidatorCommissionGas) ? Long.fromValue(object.msgWithdrawValidatorCommissionGas) : Long.UZERO,
      msgSetWithdrawAddressGas: isSet(object.msgSetWithdrawAddressGas) ? Long.fromValue(object.msgSetWithdrawAddressGas) : Long.UZERO,
      msgFundCommunityPoolGas: isSet(object.msgFundCommunityPoolGas) ? Long.fromValue(object.msgFundCommunityPoolGas) : Long.UZERO,
      msgGrantAllowanceFixedGas: isSet(object.msgGrantAllowanceFixedGas) ? Long.fromValue(object.msgGrantAllowanceFixedGas) : Long.UZERO,
      msgGrantAllowancePerItemGas: isSet(object.msgGrantAllowancePerItemGas) ? Long.fromValue(object.msgGrantAllowancePerItemGas) : Long.UZERO,
      msgRevokeAllowanceGas: isSet(object.msgRevokeAllowanceGas) ? Long.fromValue(object.msgRevokeAllowanceGas) : Long.UZERO,
      msgSubmitProposalGas: isSet(object.msgSubmitProposalGas) ? Long.fromValue(object.msgSubmitProposalGas) : Long.UZERO,
      msgVoteGas: isSet(object.msgVoteGas) ? Long.fromValue(object.msgVoteGas) : Long.UZERO,
      msgVoteWeightedGas: isSet(object.msgVoteWeightedGas) ? Long.fromValue(object.msgVoteWeightedGas) : Long.UZERO,
      msgDepositGas: isSet(object.msgDepositGas) ? Long.fromValue(object.msgDepositGas) : Long.UZERO,
      msgUnjailGas: isSet(object.msgUnjailGas) ? Long.fromValue(object.msgUnjailGas) : Long.UZERO,
      msgImpeachGas: isSet(object.msgImpeachGas) ? Long.fromValue(object.msgImpeachGas) : Long.UZERO,
      msgEditValidatorGas: isSet(object.msgEditValidatorGas) ? Long.fromValue(object.msgEditValidatorGas) : Long.UZERO,
      msgDelegateGas: isSet(object.msgDelegateGas) ? Long.fromValue(object.msgDelegateGas) : Long.UZERO,
      msgUndelegateGas: isSet(object.msgUndelegateGas) ? Long.fromValue(object.msgUndelegateGas) : Long.UZERO,
      msgBeginRedelegateGas: isSet(object.msgBeginRedelegateGas) ? Long.fromValue(object.msgBeginRedelegateGas) : Long.UZERO,
      msgCancelUnbondingDelegationGas: isSet(object.msgCancelUnbondingDelegationGas) ? Long.fromValue(object.msgCancelUnbondingDelegationGas) : Long.UZERO,
      msgCreateValidatorGas: isSet(object.msgCreateValidatorGas) ? Long.fromValue(object.msgCreateValidatorGas) : Long.UZERO,
      msgClaimGas: isSet(object.msgClaimGas) ? Long.fromValue(object.msgClaimGas) : Long.UZERO,
      msgTransferOutGas: isSet(object.msgTransferOutGas) ? Long.fromValue(object.msgTransferOutGas) : Long.UZERO,
      msgCreateStorageProviderGas: isSet(object.msgCreateStorageProviderGas) ? Long.fromValue(object.msgCreateStorageProviderGas) : Long.UZERO,
      msgEditStorageProviderGas: isSet(object.msgEditStorageProviderGas) ? Long.fromValue(object.msgEditStorageProviderGas) : Long.UZERO,
      msgSpDepositGas: isSet(object.msgSpDepositGas) ? Long.fromValue(object.msgSpDepositGas) : Long.UZERO,
      msgStorageCreateBucketGas: isSet(object.msgStorageCreateBucketGas) ? Long.fromValue(object.msgStorageCreateBucketGas) : Long.UZERO,
      msgStorageDeleteBucketGas: isSet(object.msgStorageDeleteBucketGas) ? Long.fromValue(object.msgStorageDeleteBucketGas) : Long.UZERO,
      msgStorageCreateObjectGas: isSet(object.msgStorageCreateObjectGas) ? Long.fromValue(object.msgStorageCreateObjectGas) : Long.UZERO,
      msgStorageDeleteObjectGas: isSet(object.msgStorageDeleteObjectGas) ? Long.fromValue(object.msgStorageDeleteObjectGas) : Long.UZERO,
      msgStorageSealObjectGas: isSet(object.msgStorageSealObjectGas) ? Long.fromValue(object.msgStorageSealObjectGas) : Long.UZERO,
      msgStorageCopyObjectGas: isSet(object.msgStorageCopyObjectGas) ? Long.fromValue(object.msgStorageCopyObjectGas) : Long.UZERO,
      msgStorageRejectSealObjectGas: isSet(object.msgStorageRejectSealObjectGas) ? Long.fromValue(object.msgStorageRejectSealObjectGas) : Long.UZERO,
      msgStorageCreateGroupGas: isSet(object.msgStorageCreateGroupGas) ? Long.fromValue(object.msgStorageCreateGroupGas) : Long.UZERO,
      msgStorageDeleteGroupGas: isSet(object.msgStorageDeleteGroupGas) ? Long.fromValue(object.msgStorageDeleteGroupGas) : Long.UZERO,
      msgStorageLeaveGroupGas: isSet(object.msgStorageLeaveGroupGas) ? Long.fromValue(object.msgStorageLeaveGroupGas) : Long.UZERO,
      msgStorageUpdateGroupMemberGas: isSet(object.msgStorageUpdateGroupMemberGas) ? Long.fromValue(object.msgStorageUpdateGroupMemberGas) : Long.UZERO
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.maxTxSize !== undefined && (obj.maxTxSize = (message.maxTxSize || Long.UZERO).toString());
    message.minGasPerByte !== undefined && (obj.minGasPerByte = (message.minGasPerByte || Long.UZERO).toString());
    message.msgGrantFixedGas !== undefined && (obj.msgGrantFixedGas = (message.msgGrantFixedGas || Long.UZERO).toString());
    message.msgGrantPerItemGas !== undefined && (obj.msgGrantPerItemGas = (message.msgGrantPerItemGas || Long.UZERO).toString());
    message.msgRevokeGas !== undefined && (obj.msgRevokeGas = (message.msgRevokeGas || Long.UZERO).toString());
    message.msgExecGas !== undefined && (obj.msgExecGas = (message.msgExecGas || Long.UZERO).toString());
    message.msgSendGas !== undefined && (obj.msgSendGas = (message.msgSendGas || Long.UZERO).toString());
    message.msgMultiSendFixedGas !== undefined && (obj.msgMultiSendFixedGas = (message.msgMultiSendFixedGas || Long.UZERO).toString());
    message.msgMultiSendPerItemGas !== undefined && (obj.msgMultiSendPerItemGas = (message.msgMultiSendPerItemGas || Long.UZERO).toString());
    message.msgWithdrawDelegatorRewardGas !== undefined && (obj.msgWithdrawDelegatorRewardGas = (message.msgWithdrawDelegatorRewardGas || Long.UZERO).toString());
    message.msgWithdrawValidatorCommissionGas !== undefined && (obj.msgWithdrawValidatorCommissionGas = (message.msgWithdrawValidatorCommissionGas || Long.UZERO).toString());
    message.msgSetWithdrawAddressGas !== undefined && (obj.msgSetWithdrawAddressGas = (message.msgSetWithdrawAddressGas || Long.UZERO).toString());
    message.msgFundCommunityPoolGas !== undefined && (obj.msgFundCommunityPoolGas = (message.msgFundCommunityPoolGas || Long.UZERO).toString());
    message.msgGrantAllowanceFixedGas !== undefined && (obj.msgGrantAllowanceFixedGas = (message.msgGrantAllowanceFixedGas || Long.UZERO).toString());
    message.msgGrantAllowancePerItemGas !== undefined && (obj.msgGrantAllowancePerItemGas = (message.msgGrantAllowancePerItemGas || Long.UZERO).toString());
    message.msgRevokeAllowanceGas !== undefined && (obj.msgRevokeAllowanceGas = (message.msgRevokeAllowanceGas || Long.UZERO).toString());
    message.msgSubmitProposalGas !== undefined && (obj.msgSubmitProposalGas = (message.msgSubmitProposalGas || Long.UZERO).toString());
    message.msgVoteGas !== undefined && (obj.msgVoteGas = (message.msgVoteGas || Long.UZERO).toString());
    message.msgVoteWeightedGas !== undefined && (obj.msgVoteWeightedGas = (message.msgVoteWeightedGas || Long.UZERO).toString());
    message.msgDepositGas !== undefined && (obj.msgDepositGas = (message.msgDepositGas || Long.UZERO).toString());
    message.msgUnjailGas !== undefined && (obj.msgUnjailGas = (message.msgUnjailGas || Long.UZERO).toString());
    message.msgImpeachGas !== undefined && (obj.msgImpeachGas = (message.msgImpeachGas || Long.UZERO).toString());
    message.msgEditValidatorGas !== undefined && (obj.msgEditValidatorGas = (message.msgEditValidatorGas || Long.UZERO).toString());
    message.msgDelegateGas !== undefined && (obj.msgDelegateGas = (message.msgDelegateGas || Long.UZERO).toString());
    message.msgUndelegateGas !== undefined && (obj.msgUndelegateGas = (message.msgUndelegateGas || Long.UZERO).toString());
    message.msgBeginRedelegateGas !== undefined && (obj.msgBeginRedelegateGas = (message.msgBeginRedelegateGas || Long.UZERO).toString());
    message.msgCancelUnbondingDelegationGas !== undefined && (obj.msgCancelUnbondingDelegationGas = (message.msgCancelUnbondingDelegationGas || Long.UZERO).toString());
    message.msgCreateValidatorGas !== undefined && (obj.msgCreateValidatorGas = (message.msgCreateValidatorGas || Long.UZERO).toString());
    message.msgClaimGas !== undefined && (obj.msgClaimGas = (message.msgClaimGas || Long.UZERO).toString());
    message.msgTransferOutGas !== undefined && (obj.msgTransferOutGas = (message.msgTransferOutGas || Long.UZERO).toString());
    message.msgCreateStorageProviderGas !== undefined && (obj.msgCreateStorageProviderGas = (message.msgCreateStorageProviderGas || Long.UZERO).toString());
    message.msgEditStorageProviderGas !== undefined && (obj.msgEditStorageProviderGas = (message.msgEditStorageProviderGas || Long.UZERO).toString());
    message.msgSpDepositGas !== undefined && (obj.msgSpDepositGas = (message.msgSpDepositGas || Long.UZERO).toString());
    message.msgStorageCreateBucketGas !== undefined && (obj.msgStorageCreateBucketGas = (message.msgStorageCreateBucketGas || Long.UZERO).toString());
    message.msgStorageDeleteBucketGas !== undefined && (obj.msgStorageDeleteBucketGas = (message.msgStorageDeleteBucketGas || Long.UZERO).toString());
    message.msgStorageCreateObjectGas !== undefined && (obj.msgStorageCreateObjectGas = (message.msgStorageCreateObjectGas || Long.UZERO).toString());
    message.msgStorageDeleteObjectGas !== undefined && (obj.msgStorageDeleteObjectGas = (message.msgStorageDeleteObjectGas || Long.UZERO).toString());
    message.msgStorageSealObjectGas !== undefined && (obj.msgStorageSealObjectGas = (message.msgStorageSealObjectGas || Long.UZERO).toString());
    message.msgStorageCopyObjectGas !== undefined && (obj.msgStorageCopyObjectGas = (message.msgStorageCopyObjectGas || Long.UZERO).toString());
    message.msgStorageRejectSealObjectGas !== undefined && (obj.msgStorageRejectSealObjectGas = (message.msgStorageRejectSealObjectGas || Long.UZERO).toString());
    message.msgStorageCreateGroupGas !== undefined && (obj.msgStorageCreateGroupGas = (message.msgStorageCreateGroupGas || Long.UZERO).toString());
    message.msgStorageDeleteGroupGas !== undefined && (obj.msgStorageDeleteGroupGas = (message.msgStorageDeleteGroupGas || Long.UZERO).toString());
    message.msgStorageLeaveGroupGas !== undefined && (obj.msgStorageLeaveGroupGas = (message.msgStorageLeaveGroupGas || Long.UZERO).toString());
    message.msgStorageUpdateGroupMemberGas !== undefined && (obj.msgStorageUpdateGroupMemberGas = (message.msgStorageUpdateGroupMemberGas || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.maxTxSize = object.maxTxSize !== undefined && object.maxTxSize !== null ? Long.fromValue(object.maxTxSize) : Long.UZERO;
    message.minGasPerByte = object.minGasPerByte !== undefined && object.minGasPerByte !== null ? Long.fromValue(object.minGasPerByte) : Long.UZERO;
    message.msgGrantFixedGas = object.msgGrantFixedGas !== undefined && object.msgGrantFixedGas !== null ? Long.fromValue(object.msgGrantFixedGas) : Long.UZERO;
    message.msgGrantPerItemGas = object.msgGrantPerItemGas !== undefined && object.msgGrantPerItemGas !== null ? Long.fromValue(object.msgGrantPerItemGas) : Long.UZERO;
    message.msgRevokeGas = object.msgRevokeGas !== undefined && object.msgRevokeGas !== null ? Long.fromValue(object.msgRevokeGas) : Long.UZERO;
    message.msgExecGas = object.msgExecGas !== undefined && object.msgExecGas !== null ? Long.fromValue(object.msgExecGas) : Long.UZERO;
    message.msgSendGas = object.msgSendGas !== undefined && object.msgSendGas !== null ? Long.fromValue(object.msgSendGas) : Long.UZERO;
    message.msgMultiSendFixedGas = object.msgMultiSendFixedGas !== undefined && object.msgMultiSendFixedGas !== null ? Long.fromValue(object.msgMultiSendFixedGas) : Long.UZERO;
    message.msgMultiSendPerItemGas = object.msgMultiSendPerItemGas !== undefined && object.msgMultiSendPerItemGas !== null ? Long.fromValue(object.msgMultiSendPerItemGas) : Long.UZERO;
    message.msgWithdrawDelegatorRewardGas = object.msgWithdrawDelegatorRewardGas !== undefined && object.msgWithdrawDelegatorRewardGas !== null ? Long.fromValue(object.msgWithdrawDelegatorRewardGas) : Long.UZERO;
    message.msgWithdrawValidatorCommissionGas = object.msgWithdrawValidatorCommissionGas !== undefined && object.msgWithdrawValidatorCommissionGas !== null ? Long.fromValue(object.msgWithdrawValidatorCommissionGas) : Long.UZERO;
    message.msgSetWithdrawAddressGas = object.msgSetWithdrawAddressGas !== undefined && object.msgSetWithdrawAddressGas !== null ? Long.fromValue(object.msgSetWithdrawAddressGas) : Long.UZERO;
    message.msgFundCommunityPoolGas = object.msgFundCommunityPoolGas !== undefined && object.msgFundCommunityPoolGas !== null ? Long.fromValue(object.msgFundCommunityPoolGas) : Long.UZERO;
    message.msgGrantAllowanceFixedGas = object.msgGrantAllowanceFixedGas !== undefined && object.msgGrantAllowanceFixedGas !== null ? Long.fromValue(object.msgGrantAllowanceFixedGas) : Long.UZERO;
    message.msgGrantAllowancePerItemGas = object.msgGrantAllowancePerItemGas !== undefined && object.msgGrantAllowancePerItemGas !== null ? Long.fromValue(object.msgGrantAllowancePerItemGas) : Long.UZERO;
    message.msgRevokeAllowanceGas = object.msgRevokeAllowanceGas !== undefined && object.msgRevokeAllowanceGas !== null ? Long.fromValue(object.msgRevokeAllowanceGas) : Long.UZERO;
    message.msgSubmitProposalGas = object.msgSubmitProposalGas !== undefined && object.msgSubmitProposalGas !== null ? Long.fromValue(object.msgSubmitProposalGas) : Long.UZERO;
    message.msgVoteGas = object.msgVoteGas !== undefined && object.msgVoteGas !== null ? Long.fromValue(object.msgVoteGas) : Long.UZERO;
    message.msgVoteWeightedGas = object.msgVoteWeightedGas !== undefined && object.msgVoteWeightedGas !== null ? Long.fromValue(object.msgVoteWeightedGas) : Long.UZERO;
    message.msgDepositGas = object.msgDepositGas !== undefined && object.msgDepositGas !== null ? Long.fromValue(object.msgDepositGas) : Long.UZERO;
    message.msgUnjailGas = object.msgUnjailGas !== undefined && object.msgUnjailGas !== null ? Long.fromValue(object.msgUnjailGas) : Long.UZERO;
    message.msgImpeachGas = object.msgImpeachGas !== undefined && object.msgImpeachGas !== null ? Long.fromValue(object.msgImpeachGas) : Long.UZERO;
    message.msgEditValidatorGas = object.msgEditValidatorGas !== undefined && object.msgEditValidatorGas !== null ? Long.fromValue(object.msgEditValidatorGas) : Long.UZERO;
    message.msgDelegateGas = object.msgDelegateGas !== undefined && object.msgDelegateGas !== null ? Long.fromValue(object.msgDelegateGas) : Long.UZERO;
    message.msgUndelegateGas = object.msgUndelegateGas !== undefined && object.msgUndelegateGas !== null ? Long.fromValue(object.msgUndelegateGas) : Long.UZERO;
    message.msgBeginRedelegateGas = object.msgBeginRedelegateGas !== undefined && object.msgBeginRedelegateGas !== null ? Long.fromValue(object.msgBeginRedelegateGas) : Long.UZERO;
    message.msgCancelUnbondingDelegationGas = object.msgCancelUnbondingDelegationGas !== undefined && object.msgCancelUnbondingDelegationGas !== null ? Long.fromValue(object.msgCancelUnbondingDelegationGas) : Long.UZERO;
    message.msgCreateValidatorGas = object.msgCreateValidatorGas !== undefined && object.msgCreateValidatorGas !== null ? Long.fromValue(object.msgCreateValidatorGas) : Long.UZERO;
    message.msgClaimGas = object.msgClaimGas !== undefined && object.msgClaimGas !== null ? Long.fromValue(object.msgClaimGas) : Long.UZERO;
    message.msgTransferOutGas = object.msgTransferOutGas !== undefined && object.msgTransferOutGas !== null ? Long.fromValue(object.msgTransferOutGas) : Long.UZERO;
    message.msgCreateStorageProviderGas = object.msgCreateStorageProviderGas !== undefined && object.msgCreateStorageProviderGas !== null ? Long.fromValue(object.msgCreateStorageProviderGas) : Long.UZERO;
    message.msgEditStorageProviderGas = object.msgEditStorageProviderGas !== undefined && object.msgEditStorageProviderGas !== null ? Long.fromValue(object.msgEditStorageProviderGas) : Long.UZERO;
    message.msgSpDepositGas = object.msgSpDepositGas !== undefined && object.msgSpDepositGas !== null ? Long.fromValue(object.msgSpDepositGas) : Long.UZERO;
    message.msgStorageCreateBucketGas = object.msgStorageCreateBucketGas !== undefined && object.msgStorageCreateBucketGas !== null ? Long.fromValue(object.msgStorageCreateBucketGas) : Long.UZERO;
    message.msgStorageDeleteBucketGas = object.msgStorageDeleteBucketGas !== undefined && object.msgStorageDeleteBucketGas !== null ? Long.fromValue(object.msgStorageDeleteBucketGas) : Long.UZERO;
    message.msgStorageCreateObjectGas = object.msgStorageCreateObjectGas !== undefined && object.msgStorageCreateObjectGas !== null ? Long.fromValue(object.msgStorageCreateObjectGas) : Long.UZERO;
    message.msgStorageDeleteObjectGas = object.msgStorageDeleteObjectGas !== undefined && object.msgStorageDeleteObjectGas !== null ? Long.fromValue(object.msgStorageDeleteObjectGas) : Long.UZERO;
    message.msgStorageSealObjectGas = object.msgStorageSealObjectGas !== undefined && object.msgStorageSealObjectGas !== null ? Long.fromValue(object.msgStorageSealObjectGas) : Long.UZERO;
    message.msgStorageCopyObjectGas = object.msgStorageCopyObjectGas !== undefined && object.msgStorageCopyObjectGas !== null ? Long.fromValue(object.msgStorageCopyObjectGas) : Long.UZERO;
    message.msgStorageRejectSealObjectGas = object.msgStorageRejectSealObjectGas !== undefined && object.msgStorageRejectSealObjectGas !== null ? Long.fromValue(object.msgStorageRejectSealObjectGas) : Long.UZERO;
    message.msgStorageCreateGroupGas = object.msgStorageCreateGroupGas !== undefined && object.msgStorageCreateGroupGas !== null ? Long.fromValue(object.msgStorageCreateGroupGas) : Long.UZERO;
    message.msgStorageDeleteGroupGas = object.msgStorageDeleteGroupGas !== undefined && object.msgStorageDeleteGroupGas !== null ? Long.fromValue(object.msgStorageDeleteGroupGas) : Long.UZERO;
    message.msgStorageLeaveGroupGas = object.msgStorageLeaveGroupGas !== undefined && object.msgStorageLeaveGroupGas !== null ? Long.fromValue(object.msgStorageLeaveGroupGas) : Long.UZERO;
    message.msgStorageUpdateGroupMemberGas = object.msgStorageUpdateGroupMemberGas !== undefined && object.msgStorageUpdateGroupMemberGas !== null ? Long.fromValue(object.msgStorageUpdateGroupMemberGas) : Long.UZERO;
    return message;
  }

};