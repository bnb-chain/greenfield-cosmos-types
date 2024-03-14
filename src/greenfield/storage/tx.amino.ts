//@ts-nocheck
/* eslint-disable */
import { MsgCreateBucket, MsgDeleteBucket, MsgUpdateBucketInfo, MsgMirrorBucket, MsgDiscontinueBucket, MsgToggleSPAsDelegatedAgent, MsgCreateObject, MsgSealObject, MsgSealObjectV2, MsgRejectSealObject, MsgCopyObject, MsgDeleteObject, MsgCancelCreateObject, MsgMirrorObject, MsgDiscontinueObject, MsgUpdateObjectInfo, MsgUpdateObjectContent, MsgCancelUpdateObjectContent, MsgDelegateCreateObject, MsgDelegateUpdateObjectContent, MsgCreateGroup, MsgDeleteGroup, MsgUpdateGroupMember, MsgUpdateGroupExtra, MsgLeaveGroup, MsgMirrorGroup, MsgRenewGroupMember, MsgPutPolicy, MsgDeletePolicy, MsgUpdateParams, MsgMigrateBucket, MsgCompleteMigrateBucket, MsgCancelMigrateBucket, MsgRejectMigrateBucket, MsgSetTag } from "./tx";
export const AminoConverter = {
  "/greenfield.storage.MsgCreateBucket": {
    aminoType: "/greenfield.storage.MsgCreateBucket",
    toAmino: MsgCreateBucket.toAmino,
    fromAmino: MsgCreateBucket.fromAmino
  },
  "/greenfield.storage.MsgDeleteBucket": {
    aminoType: "/greenfield.storage.MsgDeleteBucket",
    toAmino: MsgDeleteBucket.toAmino,
    fromAmino: MsgDeleteBucket.fromAmino
  },
  "/greenfield.storage.MsgUpdateBucketInfo": {
    aminoType: "/greenfield.storage.MsgUpdateBucketInfo",
    toAmino: MsgUpdateBucketInfo.toAmino,
    fromAmino: MsgUpdateBucketInfo.fromAmino
  },
  "/greenfield.storage.MsgMirrorBucket": {
    aminoType: "/greenfield.storage.MsgMirrorBucket",
    toAmino: MsgMirrorBucket.toAmino,
    fromAmino: MsgMirrorBucket.fromAmino
  },
  "/greenfield.storage.MsgDiscontinueBucket": {
    aminoType: "/greenfield.storage.MsgDiscontinueBucket",
    toAmino: MsgDiscontinueBucket.toAmino,
    fromAmino: MsgDiscontinueBucket.fromAmino
  },
  "/greenfield.storage.MsgToggleSPAsDelegatedAgent": {
    aminoType: "/greenfield.storage.MsgToggleSPAsDelegatedAgent",
    toAmino: MsgToggleSPAsDelegatedAgent.toAmino,
    fromAmino: MsgToggleSPAsDelegatedAgent.fromAmino
  },
  "/greenfield.storage.MsgCreateObject": {
    aminoType: "/greenfield.storage.MsgCreateObject",
    toAmino: MsgCreateObject.toAmino,
    fromAmino: MsgCreateObject.fromAmino
  },
  "/greenfield.storage.MsgSealObject": {
    aminoType: "/greenfield.storage.MsgSealObject",
    toAmino: MsgSealObject.toAmino,
    fromAmino: MsgSealObject.fromAmino
  },
  "/greenfield.storage.MsgSealObjectV2": {
    aminoType: "/greenfield.storage.MsgSealObjectV2",
    toAmino: MsgSealObjectV2.toAmino,
    fromAmino: MsgSealObjectV2.fromAmino
  },
  "/greenfield.storage.MsgRejectSealObject": {
    aminoType: "/greenfield.storage.MsgRejectSealObject",
    toAmino: MsgRejectSealObject.toAmino,
    fromAmino: MsgRejectSealObject.fromAmino
  },
  "/greenfield.storage.MsgCopyObject": {
    aminoType: "/greenfield.storage.MsgCopyObject",
    toAmino: MsgCopyObject.toAmino,
    fromAmino: MsgCopyObject.fromAmino
  },
  "/greenfield.storage.MsgDeleteObject": {
    aminoType: "/greenfield.storage.MsgDeleteObject",
    toAmino: MsgDeleteObject.toAmino,
    fromAmino: MsgDeleteObject.fromAmino
  },
  "/greenfield.storage.MsgCancelCreateObject": {
    aminoType: "/greenfield.storage.MsgCancelCreateObject",
    toAmino: MsgCancelCreateObject.toAmino,
    fromAmino: MsgCancelCreateObject.fromAmino
  },
  "/greenfield.storage.MsgMirrorObject": {
    aminoType: "/greenfield.storage.MsgMirrorObject",
    toAmino: MsgMirrorObject.toAmino,
    fromAmino: MsgMirrorObject.fromAmino
  },
  "/greenfield.storage.MsgDiscontinueObject": {
    aminoType: "/greenfield.storage.MsgDiscontinueObject",
    toAmino: MsgDiscontinueObject.toAmino,
    fromAmino: MsgDiscontinueObject.fromAmino
  },
  "/greenfield.storage.MsgUpdateObjectInfo": {
    aminoType: "/greenfield.storage.MsgUpdateObjectInfo",
    toAmino: MsgUpdateObjectInfo.toAmino,
    fromAmino: MsgUpdateObjectInfo.fromAmino
  },
  "/greenfield.storage.MsgUpdateObjectContent": {
    aminoType: "/greenfield.storage.MsgUpdateObjectContent",
    toAmino: MsgUpdateObjectContent.toAmino,
    fromAmino: MsgUpdateObjectContent.fromAmino
  },
  "/greenfield.storage.MsgCancelUpdateObjectContent": {
    aminoType: "/greenfield.storage.MsgCancelUpdateObjectContent",
    toAmino: MsgCancelUpdateObjectContent.toAmino,
    fromAmino: MsgCancelUpdateObjectContent.fromAmino
  },
  "/greenfield.storage.MsgDelegateCreateObject": {
    aminoType: "/greenfield.storage.MsgDelegateCreateObject",
    toAmino: MsgDelegateCreateObject.toAmino,
    fromAmino: MsgDelegateCreateObject.fromAmino
  },
  "/greenfield.storage.MsgDelegateUpdateObjectContent": {
    aminoType: "/greenfield.storage.MsgDelegateUpdateObjectContent",
    toAmino: MsgDelegateUpdateObjectContent.toAmino,
    fromAmino: MsgDelegateUpdateObjectContent.fromAmino
  },
  "/greenfield.storage.MsgCreateGroup": {
    aminoType: "/greenfield.storage.MsgCreateGroup",
    toAmino: MsgCreateGroup.toAmino,
    fromAmino: MsgCreateGroup.fromAmino
  },
  "/greenfield.storage.MsgDeleteGroup": {
    aminoType: "/greenfield.storage.MsgDeleteGroup",
    toAmino: MsgDeleteGroup.toAmino,
    fromAmino: MsgDeleteGroup.fromAmino
  },
  "/greenfield.storage.MsgUpdateGroupMember": {
    aminoType: "/greenfield.storage.MsgUpdateGroupMember",
    toAmino: MsgUpdateGroupMember.toAmino,
    fromAmino: MsgUpdateGroupMember.fromAmino
  },
  "/greenfield.storage.MsgUpdateGroupExtra": {
    aminoType: "/greenfield.storage.MsgUpdateGroupExtra",
    toAmino: MsgUpdateGroupExtra.toAmino,
    fromAmino: MsgUpdateGroupExtra.fromAmino
  },
  "/greenfield.storage.MsgLeaveGroup": {
    aminoType: "/greenfield.storage.MsgLeaveGroup",
    toAmino: MsgLeaveGroup.toAmino,
    fromAmino: MsgLeaveGroup.fromAmino
  },
  "/greenfield.storage.MsgMirrorGroup": {
    aminoType: "/greenfield.storage.MsgMirrorGroup",
    toAmino: MsgMirrorGroup.toAmino,
    fromAmino: MsgMirrorGroup.fromAmino
  },
  "/greenfield.storage.MsgRenewGroupMember": {
    aminoType: "/greenfield.storage.MsgRenewGroupMember",
    toAmino: MsgRenewGroupMember.toAmino,
    fromAmino: MsgRenewGroupMember.fromAmino
  },
  "/greenfield.storage.MsgPutPolicy": {
    aminoType: "/greenfield.storage.MsgPutPolicy",
    toAmino: MsgPutPolicy.toAmino,
    fromAmino: MsgPutPolicy.fromAmino
  },
  "/greenfield.storage.MsgDeletePolicy": {
    aminoType: "/greenfield.storage.MsgDeletePolicy",
    toAmino: MsgDeletePolicy.toAmino,
    fromAmino: MsgDeletePolicy.fromAmino
  },
  "/greenfield.storage.MsgUpdateParams": {
    aminoType: "/greenfield.storage.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/greenfield.storage.MsgMigrateBucket": {
    aminoType: "/greenfield.storage.MsgMigrateBucket",
    toAmino: MsgMigrateBucket.toAmino,
    fromAmino: MsgMigrateBucket.fromAmino
  },
  "/greenfield.storage.MsgCompleteMigrateBucket": {
    aminoType: "/greenfield.storage.MsgCompleteMigrateBucket",
    toAmino: MsgCompleteMigrateBucket.toAmino,
    fromAmino: MsgCompleteMigrateBucket.fromAmino
  },
  "/greenfield.storage.MsgCancelMigrateBucket": {
    aminoType: "/greenfield.storage.MsgCancelMigrateBucket",
    toAmino: MsgCancelMigrateBucket.toAmino,
    fromAmino: MsgCancelMigrateBucket.fromAmino
  },
  "/greenfield.storage.MsgRejectMigrateBucket": {
    aminoType: "/greenfield.storage.MsgRejectMigrateBucket",
    toAmino: MsgRejectMigrateBucket.toAmino,
    fromAmino: MsgRejectMigrateBucket.fromAmino
  },
  "/greenfield.storage.MsgSetTag": {
    aminoType: "/greenfield.storage.MsgSetTag",
    toAmino: MsgSetTag.toAmino,
    fromAmino: MsgSetTag.fromAmino
  }
};