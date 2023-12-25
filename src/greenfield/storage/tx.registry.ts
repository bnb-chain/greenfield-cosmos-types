//@ts-nocheck
/* eslint-disable */
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateBucket, MsgDeleteBucket, MsgUpdateBucketInfo, MsgMirrorBucket, MsgDiscontinueBucket, MsgCreateObject, MsgSealObject, MsgRejectSealObject, MsgCopyObject, MsgDeleteObject, MsgCancelCreateObject, MsgMirrorObject, MsgDiscontinueObject, MsgUpdateObjectInfo, MsgCreateGroup, MsgDeleteGroup, MsgUpdateGroupMember, MsgUpdateGroupExtra, MsgLeaveGroup, MsgMirrorGroup, MsgRenewGroupMember, MsgPutPolicy, MsgDeletePolicy, MsgUpdateParams, MsgMigrateBucket, MsgCompleteMigrateBucket, MsgCancelMigrateBucket, MsgRejectMigrateBucket, MsgSetTag } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/greenfield.storage.MsgCreateBucket", MsgCreateBucket], ["/greenfield.storage.MsgDeleteBucket", MsgDeleteBucket], ["/greenfield.storage.MsgUpdateBucketInfo", MsgUpdateBucketInfo], ["/greenfield.storage.MsgMirrorBucket", MsgMirrorBucket], ["/greenfield.storage.MsgDiscontinueBucket", MsgDiscontinueBucket], ["/greenfield.storage.MsgCreateObject", MsgCreateObject], ["/greenfield.storage.MsgSealObject", MsgSealObject], ["/greenfield.storage.MsgRejectSealObject", MsgRejectSealObject], ["/greenfield.storage.MsgCopyObject", MsgCopyObject], ["/greenfield.storage.MsgDeleteObject", MsgDeleteObject], ["/greenfield.storage.MsgCancelCreateObject", MsgCancelCreateObject], ["/greenfield.storage.MsgMirrorObject", MsgMirrorObject], ["/greenfield.storage.MsgDiscontinueObject", MsgDiscontinueObject], ["/greenfield.storage.MsgUpdateObjectInfo", MsgUpdateObjectInfo], ["/greenfield.storage.MsgCreateGroup", MsgCreateGroup], ["/greenfield.storage.MsgDeleteGroup", MsgDeleteGroup], ["/greenfield.storage.MsgUpdateGroupMember", MsgUpdateGroupMember], ["/greenfield.storage.MsgUpdateGroupExtra", MsgUpdateGroupExtra], ["/greenfield.storage.MsgLeaveGroup", MsgLeaveGroup], ["/greenfield.storage.MsgMirrorGroup", MsgMirrorGroup], ["/greenfield.storage.MsgRenewGroupMember", MsgRenewGroupMember], ["/greenfield.storage.MsgPutPolicy", MsgPutPolicy], ["/greenfield.storage.MsgDeletePolicy", MsgDeletePolicy], ["/greenfield.storage.MsgUpdateParams", MsgUpdateParams], ["/greenfield.storage.MsgMigrateBucket", MsgMigrateBucket], ["/greenfield.storage.MsgCompleteMigrateBucket", MsgCompleteMigrateBucket], ["/greenfield.storage.MsgCancelMigrateBucket", MsgCancelMigrateBucket], ["/greenfield.storage.MsgRejectMigrateBucket", MsgRejectMigrateBucket], ["/greenfield.storage.MsgSetTag", MsgSetTag]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createBucket(value: MsgCreateBucket) {
      return {
        typeUrl: "/greenfield.storage.MsgCreateBucket",
        value: MsgCreateBucket.encode(value).finish()
      };
    },
    deleteBucket(value: MsgDeleteBucket) {
      return {
        typeUrl: "/greenfield.storage.MsgDeleteBucket",
        value: MsgDeleteBucket.encode(value).finish()
      };
    },
    updateBucketInfo(value: MsgUpdateBucketInfo) {
      return {
        typeUrl: "/greenfield.storage.MsgUpdateBucketInfo",
        value: MsgUpdateBucketInfo.encode(value).finish()
      };
    },
    mirrorBucket(value: MsgMirrorBucket) {
      return {
        typeUrl: "/greenfield.storage.MsgMirrorBucket",
        value: MsgMirrorBucket.encode(value).finish()
      };
    },
    discontinueBucket(value: MsgDiscontinueBucket) {
      return {
        typeUrl: "/greenfield.storage.MsgDiscontinueBucket",
        value: MsgDiscontinueBucket.encode(value).finish()
      };
    },
    createObject(value: MsgCreateObject) {
      return {
        typeUrl: "/greenfield.storage.MsgCreateObject",
        value: MsgCreateObject.encode(value).finish()
      };
    },
    sealObject(value: MsgSealObject) {
      return {
        typeUrl: "/greenfield.storage.MsgSealObject",
        value: MsgSealObject.encode(value).finish()
      };
    },
    rejectSealObject(value: MsgRejectSealObject) {
      return {
        typeUrl: "/greenfield.storage.MsgRejectSealObject",
        value: MsgRejectSealObject.encode(value).finish()
      };
    },
    copyObject(value: MsgCopyObject) {
      return {
        typeUrl: "/greenfield.storage.MsgCopyObject",
        value: MsgCopyObject.encode(value).finish()
      };
    },
    deleteObject(value: MsgDeleteObject) {
      return {
        typeUrl: "/greenfield.storage.MsgDeleteObject",
        value: MsgDeleteObject.encode(value).finish()
      };
    },
    cancelCreateObject(value: MsgCancelCreateObject) {
      return {
        typeUrl: "/greenfield.storage.MsgCancelCreateObject",
        value: MsgCancelCreateObject.encode(value).finish()
      };
    },
    mirrorObject(value: MsgMirrorObject) {
      return {
        typeUrl: "/greenfield.storage.MsgMirrorObject",
        value: MsgMirrorObject.encode(value).finish()
      };
    },
    discontinueObject(value: MsgDiscontinueObject) {
      return {
        typeUrl: "/greenfield.storage.MsgDiscontinueObject",
        value: MsgDiscontinueObject.encode(value).finish()
      };
    },
    updateObjectInfo(value: MsgUpdateObjectInfo) {
      return {
        typeUrl: "/greenfield.storage.MsgUpdateObjectInfo",
        value: MsgUpdateObjectInfo.encode(value).finish()
      };
    },
    createGroup(value: MsgCreateGroup) {
      return {
        typeUrl: "/greenfield.storage.MsgCreateGroup",
        value: MsgCreateGroup.encode(value).finish()
      };
    },
    deleteGroup(value: MsgDeleteGroup) {
      return {
        typeUrl: "/greenfield.storage.MsgDeleteGroup",
        value: MsgDeleteGroup.encode(value).finish()
      };
    },
    updateGroupMember(value: MsgUpdateGroupMember) {
      return {
        typeUrl: "/greenfield.storage.MsgUpdateGroupMember",
        value: MsgUpdateGroupMember.encode(value).finish()
      };
    },
    updateGroupExtra(value: MsgUpdateGroupExtra) {
      return {
        typeUrl: "/greenfield.storage.MsgUpdateGroupExtra",
        value: MsgUpdateGroupExtra.encode(value).finish()
      };
    },
    leaveGroup(value: MsgLeaveGroup) {
      return {
        typeUrl: "/greenfield.storage.MsgLeaveGroup",
        value: MsgLeaveGroup.encode(value).finish()
      };
    },
    mirrorGroup(value: MsgMirrorGroup) {
      return {
        typeUrl: "/greenfield.storage.MsgMirrorGroup",
        value: MsgMirrorGroup.encode(value).finish()
      };
    },
    renewGroupMember(value: MsgRenewGroupMember) {
      return {
        typeUrl: "/greenfield.storage.MsgRenewGroupMember",
        value: MsgRenewGroupMember.encode(value).finish()
      };
    },
    putPolicy(value: MsgPutPolicy) {
      return {
        typeUrl: "/greenfield.storage.MsgPutPolicy",
        value: MsgPutPolicy.encode(value).finish()
      };
    },
    deletePolicy(value: MsgDeletePolicy) {
      return {
        typeUrl: "/greenfield.storage.MsgDeletePolicy",
        value: MsgDeletePolicy.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/greenfield.storage.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    migrateBucket(value: MsgMigrateBucket) {
      return {
        typeUrl: "/greenfield.storage.MsgMigrateBucket",
        value: MsgMigrateBucket.encode(value).finish()
      };
    },
    completeMigrateBucket(value: MsgCompleteMigrateBucket) {
      return {
        typeUrl: "/greenfield.storage.MsgCompleteMigrateBucket",
        value: MsgCompleteMigrateBucket.encode(value).finish()
      };
    },
    cancelMigrateBucket(value: MsgCancelMigrateBucket) {
      return {
        typeUrl: "/greenfield.storage.MsgCancelMigrateBucket",
        value: MsgCancelMigrateBucket.encode(value).finish()
      };
    },
    rejectMigrateBucket(value: MsgRejectMigrateBucket) {
      return {
        typeUrl: "/greenfield.storage.MsgRejectMigrateBucket",
        value: MsgRejectMigrateBucket.encode(value).finish()
      };
    },
    setTag(value: MsgSetTag) {
      return {
        typeUrl: "/greenfield.storage.MsgSetTag",
        value: MsgSetTag.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createBucket(value: MsgCreateBucket) {
      return {
        typeUrl: "/greenfield.storage.MsgCreateBucket",
        value
      };
    },
    deleteBucket(value: MsgDeleteBucket) {
      return {
        typeUrl: "/greenfield.storage.MsgDeleteBucket",
        value
      };
    },
    updateBucketInfo(value: MsgUpdateBucketInfo) {
      return {
        typeUrl: "/greenfield.storage.MsgUpdateBucketInfo",
        value
      };
    },
    mirrorBucket(value: MsgMirrorBucket) {
      return {
        typeUrl: "/greenfield.storage.MsgMirrorBucket",
        value
      };
    },
    discontinueBucket(value: MsgDiscontinueBucket) {
      return {
        typeUrl: "/greenfield.storage.MsgDiscontinueBucket",
        value
      };
    },
    createObject(value: MsgCreateObject) {
      return {
        typeUrl: "/greenfield.storage.MsgCreateObject",
        value
      };
    },
    sealObject(value: MsgSealObject) {
      return {
        typeUrl: "/greenfield.storage.MsgSealObject",
        value
      };
    },
    rejectSealObject(value: MsgRejectSealObject) {
      return {
        typeUrl: "/greenfield.storage.MsgRejectSealObject",
        value
      };
    },
    copyObject(value: MsgCopyObject) {
      return {
        typeUrl: "/greenfield.storage.MsgCopyObject",
        value
      };
    },
    deleteObject(value: MsgDeleteObject) {
      return {
        typeUrl: "/greenfield.storage.MsgDeleteObject",
        value
      };
    },
    cancelCreateObject(value: MsgCancelCreateObject) {
      return {
        typeUrl: "/greenfield.storage.MsgCancelCreateObject",
        value
      };
    },
    mirrorObject(value: MsgMirrorObject) {
      return {
        typeUrl: "/greenfield.storage.MsgMirrorObject",
        value
      };
    },
    discontinueObject(value: MsgDiscontinueObject) {
      return {
        typeUrl: "/greenfield.storage.MsgDiscontinueObject",
        value
      };
    },
    updateObjectInfo(value: MsgUpdateObjectInfo) {
      return {
        typeUrl: "/greenfield.storage.MsgUpdateObjectInfo",
        value
      };
    },
    createGroup(value: MsgCreateGroup) {
      return {
        typeUrl: "/greenfield.storage.MsgCreateGroup",
        value
      };
    },
    deleteGroup(value: MsgDeleteGroup) {
      return {
        typeUrl: "/greenfield.storage.MsgDeleteGroup",
        value
      };
    },
    updateGroupMember(value: MsgUpdateGroupMember) {
      return {
        typeUrl: "/greenfield.storage.MsgUpdateGroupMember",
        value
      };
    },
    updateGroupExtra(value: MsgUpdateGroupExtra) {
      return {
        typeUrl: "/greenfield.storage.MsgUpdateGroupExtra",
        value
      };
    },
    leaveGroup(value: MsgLeaveGroup) {
      return {
        typeUrl: "/greenfield.storage.MsgLeaveGroup",
        value
      };
    },
    mirrorGroup(value: MsgMirrorGroup) {
      return {
        typeUrl: "/greenfield.storage.MsgMirrorGroup",
        value
      };
    },
    renewGroupMember(value: MsgRenewGroupMember) {
      return {
        typeUrl: "/greenfield.storage.MsgRenewGroupMember",
        value
      };
    },
    putPolicy(value: MsgPutPolicy) {
      return {
        typeUrl: "/greenfield.storage.MsgPutPolicy",
        value
      };
    },
    deletePolicy(value: MsgDeletePolicy) {
      return {
        typeUrl: "/greenfield.storage.MsgDeletePolicy",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/greenfield.storage.MsgUpdateParams",
        value
      };
    },
    migrateBucket(value: MsgMigrateBucket) {
      return {
        typeUrl: "/greenfield.storage.MsgMigrateBucket",
        value
      };
    },
    completeMigrateBucket(value: MsgCompleteMigrateBucket) {
      return {
        typeUrl: "/greenfield.storage.MsgCompleteMigrateBucket",
        value
      };
    },
    cancelMigrateBucket(value: MsgCancelMigrateBucket) {
      return {
        typeUrl: "/greenfield.storage.MsgCancelMigrateBucket",
        value
      };
    },
    rejectMigrateBucket(value: MsgRejectMigrateBucket) {
      return {
        typeUrl: "/greenfield.storage.MsgRejectMigrateBucket",
        value
      };
    },
    setTag(value: MsgSetTag) {
      return {
        typeUrl: "/greenfield.storage.MsgSetTag",
        value
      };
    }
  },
  toJSON: {
    createBucket(value: MsgCreateBucket) {
      return {
        typeUrl: "/greenfield.storage.MsgCreateBucket",
        value: MsgCreateBucket.toJSON(value)
      };
    },
    deleteBucket(value: MsgDeleteBucket) {
      return {
        typeUrl: "/greenfield.storage.MsgDeleteBucket",
        value: MsgDeleteBucket.toJSON(value)
      };
    },
    updateBucketInfo(value: MsgUpdateBucketInfo) {
      return {
        typeUrl: "/greenfield.storage.MsgUpdateBucketInfo",
        value: MsgUpdateBucketInfo.toJSON(value)
      };
    },
    mirrorBucket(value: MsgMirrorBucket) {
      return {
        typeUrl: "/greenfield.storage.MsgMirrorBucket",
        value: MsgMirrorBucket.toJSON(value)
      };
    },
    discontinueBucket(value: MsgDiscontinueBucket) {
      return {
        typeUrl: "/greenfield.storage.MsgDiscontinueBucket",
        value: MsgDiscontinueBucket.toJSON(value)
      };
    },
    createObject(value: MsgCreateObject) {
      return {
        typeUrl: "/greenfield.storage.MsgCreateObject",
        value: MsgCreateObject.toJSON(value)
      };
    },
    sealObject(value: MsgSealObject) {
      return {
        typeUrl: "/greenfield.storage.MsgSealObject",
        value: MsgSealObject.toJSON(value)
      };
    },
    rejectSealObject(value: MsgRejectSealObject) {
      return {
        typeUrl: "/greenfield.storage.MsgRejectSealObject",
        value: MsgRejectSealObject.toJSON(value)
      };
    },
    copyObject(value: MsgCopyObject) {
      return {
        typeUrl: "/greenfield.storage.MsgCopyObject",
        value: MsgCopyObject.toJSON(value)
      };
    },
    deleteObject(value: MsgDeleteObject) {
      return {
        typeUrl: "/greenfield.storage.MsgDeleteObject",
        value: MsgDeleteObject.toJSON(value)
      };
    },
    cancelCreateObject(value: MsgCancelCreateObject) {
      return {
        typeUrl: "/greenfield.storage.MsgCancelCreateObject",
        value: MsgCancelCreateObject.toJSON(value)
      };
    },
    mirrorObject(value: MsgMirrorObject) {
      return {
        typeUrl: "/greenfield.storage.MsgMirrorObject",
        value: MsgMirrorObject.toJSON(value)
      };
    },
    discontinueObject(value: MsgDiscontinueObject) {
      return {
        typeUrl: "/greenfield.storage.MsgDiscontinueObject",
        value: MsgDiscontinueObject.toJSON(value)
      };
    },
    updateObjectInfo(value: MsgUpdateObjectInfo) {
      return {
        typeUrl: "/greenfield.storage.MsgUpdateObjectInfo",
        value: MsgUpdateObjectInfo.toJSON(value)
      };
    },
    createGroup(value: MsgCreateGroup) {
      return {
        typeUrl: "/greenfield.storage.MsgCreateGroup",
        value: MsgCreateGroup.toJSON(value)
      };
    },
    deleteGroup(value: MsgDeleteGroup) {
      return {
        typeUrl: "/greenfield.storage.MsgDeleteGroup",
        value: MsgDeleteGroup.toJSON(value)
      };
    },
    updateGroupMember(value: MsgUpdateGroupMember) {
      return {
        typeUrl: "/greenfield.storage.MsgUpdateGroupMember",
        value: MsgUpdateGroupMember.toJSON(value)
      };
    },
    updateGroupExtra(value: MsgUpdateGroupExtra) {
      return {
        typeUrl: "/greenfield.storage.MsgUpdateGroupExtra",
        value: MsgUpdateGroupExtra.toJSON(value)
      };
    },
    leaveGroup(value: MsgLeaveGroup) {
      return {
        typeUrl: "/greenfield.storage.MsgLeaveGroup",
        value: MsgLeaveGroup.toJSON(value)
      };
    },
    mirrorGroup(value: MsgMirrorGroup) {
      return {
        typeUrl: "/greenfield.storage.MsgMirrorGroup",
        value: MsgMirrorGroup.toJSON(value)
      };
    },
    renewGroupMember(value: MsgRenewGroupMember) {
      return {
        typeUrl: "/greenfield.storage.MsgRenewGroupMember",
        value: MsgRenewGroupMember.toJSON(value)
      };
    },
    putPolicy(value: MsgPutPolicy) {
      return {
        typeUrl: "/greenfield.storage.MsgPutPolicy",
        value: MsgPutPolicy.toJSON(value)
      };
    },
    deletePolicy(value: MsgDeletePolicy) {
      return {
        typeUrl: "/greenfield.storage.MsgDeletePolicy",
        value: MsgDeletePolicy.toJSON(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/greenfield.storage.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value)
      };
    },
    migrateBucket(value: MsgMigrateBucket) {
      return {
        typeUrl: "/greenfield.storage.MsgMigrateBucket",
        value: MsgMigrateBucket.toJSON(value)
      };
    },
    completeMigrateBucket(value: MsgCompleteMigrateBucket) {
      return {
        typeUrl: "/greenfield.storage.MsgCompleteMigrateBucket",
        value: MsgCompleteMigrateBucket.toJSON(value)
      };
    },
    cancelMigrateBucket(value: MsgCancelMigrateBucket) {
      return {
        typeUrl: "/greenfield.storage.MsgCancelMigrateBucket",
        value: MsgCancelMigrateBucket.toJSON(value)
      };
    },
    rejectMigrateBucket(value: MsgRejectMigrateBucket) {
      return {
        typeUrl: "/greenfield.storage.MsgRejectMigrateBucket",
        value: MsgRejectMigrateBucket.toJSON(value)
      };
    },
    setTag(value: MsgSetTag) {
      return {
        typeUrl: "/greenfield.storage.MsgSetTag",
        value: MsgSetTag.toJSON(value)
      };
    }
  },
  fromJSON: {
    createBucket(value: any) {
      return {
        typeUrl: "/greenfield.storage.MsgCreateBucket",
        value: MsgCreateBucket.fromJSON(value)
      };
    },
    deleteBucket(value: any) {
      return {
        typeUrl: "/greenfield.storage.MsgDeleteBucket",
        value: MsgDeleteBucket.fromJSON(value)
      };
    },
    updateBucketInfo(value: any) {
      return {
        typeUrl: "/greenfield.storage.MsgUpdateBucketInfo",
        value: MsgUpdateBucketInfo.fromJSON(value)
      };
    },
    mirrorBucket(value: any) {
      return {
        typeUrl: "/greenfield.storage.MsgMirrorBucket",
        value: MsgMirrorBucket.fromJSON(value)
      };
    },
    discontinueBucket(value: any) {
      return {
        typeUrl: "/greenfield.storage.MsgDiscontinueBucket",
        value: MsgDiscontinueBucket.fromJSON(value)
      };
    },
    createObject(value: any) {
      return {
        typeUrl: "/greenfield.storage.MsgCreateObject",
        value: MsgCreateObject.fromJSON(value)
      };
    },
    sealObject(value: any) {
      return {
        typeUrl: "/greenfield.storage.MsgSealObject",
        value: MsgSealObject.fromJSON(value)
      };
    },
    rejectSealObject(value: any) {
      return {
        typeUrl: "/greenfield.storage.MsgRejectSealObject",
        value: MsgRejectSealObject.fromJSON(value)
      };
    },
    copyObject(value: any) {
      return {
        typeUrl: "/greenfield.storage.MsgCopyObject",
        value: MsgCopyObject.fromJSON(value)
      };
    },
    deleteObject(value: any) {
      return {
        typeUrl: "/greenfield.storage.MsgDeleteObject",
        value: MsgDeleteObject.fromJSON(value)
      };
    },
    cancelCreateObject(value: any) {
      return {
        typeUrl: "/greenfield.storage.MsgCancelCreateObject",
        value: MsgCancelCreateObject.fromJSON(value)
      };
    },
    mirrorObject(value: any) {
      return {
        typeUrl: "/greenfield.storage.MsgMirrorObject",
        value: MsgMirrorObject.fromJSON(value)
      };
    },
    discontinueObject(value: any) {
      return {
        typeUrl: "/greenfield.storage.MsgDiscontinueObject",
        value: MsgDiscontinueObject.fromJSON(value)
      };
    },
    updateObjectInfo(value: any) {
      return {
        typeUrl: "/greenfield.storage.MsgUpdateObjectInfo",
        value: MsgUpdateObjectInfo.fromJSON(value)
      };
    },
    createGroup(value: any) {
      return {
        typeUrl: "/greenfield.storage.MsgCreateGroup",
        value: MsgCreateGroup.fromJSON(value)
      };
    },
    deleteGroup(value: any) {
      return {
        typeUrl: "/greenfield.storage.MsgDeleteGroup",
        value: MsgDeleteGroup.fromJSON(value)
      };
    },
    updateGroupMember(value: any) {
      return {
        typeUrl: "/greenfield.storage.MsgUpdateGroupMember",
        value: MsgUpdateGroupMember.fromJSON(value)
      };
    },
    updateGroupExtra(value: any) {
      return {
        typeUrl: "/greenfield.storage.MsgUpdateGroupExtra",
        value: MsgUpdateGroupExtra.fromJSON(value)
      };
    },
    leaveGroup(value: any) {
      return {
        typeUrl: "/greenfield.storage.MsgLeaveGroup",
        value: MsgLeaveGroup.fromJSON(value)
      };
    },
    mirrorGroup(value: any) {
      return {
        typeUrl: "/greenfield.storage.MsgMirrorGroup",
        value: MsgMirrorGroup.fromJSON(value)
      };
    },
    renewGroupMember(value: any) {
      return {
        typeUrl: "/greenfield.storage.MsgRenewGroupMember",
        value: MsgRenewGroupMember.fromJSON(value)
      };
    },
    putPolicy(value: any) {
      return {
        typeUrl: "/greenfield.storage.MsgPutPolicy",
        value: MsgPutPolicy.fromJSON(value)
      };
    },
    deletePolicy(value: any) {
      return {
        typeUrl: "/greenfield.storage.MsgDeletePolicy",
        value: MsgDeletePolicy.fromJSON(value)
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/greenfield.storage.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    },
    migrateBucket(value: any) {
      return {
        typeUrl: "/greenfield.storage.MsgMigrateBucket",
        value: MsgMigrateBucket.fromJSON(value)
      };
    },
    completeMigrateBucket(value: any) {
      return {
        typeUrl: "/greenfield.storage.MsgCompleteMigrateBucket",
        value: MsgCompleteMigrateBucket.fromJSON(value)
      };
    },
    cancelMigrateBucket(value: any) {
      return {
        typeUrl: "/greenfield.storage.MsgCancelMigrateBucket",
        value: MsgCancelMigrateBucket.fromJSON(value)
      };
    },
    rejectMigrateBucket(value: any) {
      return {
        typeUrl: "/greenfield.storage.MsgRejectMigrateBucket",
        value: MsgRejectMigrateBucket.fromJSON(value)
      };
    },
    setTag(value: any) {
      return {
        typeUrl: "/greenfield.storage.MsgSetTag",
        value: MsgSetTag.fromJSON(value)
      };
    }
  },
  fromPartial: {
    createBucket(value: MsgCreateBucket) {
      return {
        typeUrl: "/greenfield.storage.MsgCreateBucket",
        value: MsgCreateBucket.fromPartial(value)
      };
    },
    deleteBucket(value: MsgDeleteBucket) {
      return {
        typeUrl: "/greenfield.storage.MsgDeleteBucket",
        value: MsgDeleteBucket.fromPartial(value)
      };
    },
    updateBucketInfo(value: MsgUpdateBucketInfo) {
      return {
        typeUrl: "/greenfield.storage.MsgUpdateBucketInfo",
        value: MsgUpdateBucketInfo.fromPartial(value)
      };
    },
    mirrorBucket(value: MsgMirrorBucket) {
      return {
        typeUrl: "/greenfield.storage.MsgMirrorBucket",
        value: MsgMirrorBucket.fromPartial(value)
      };
    },
    discontinueBucket(value: MsgDiscontinueBucket) {
      return {
        typeUrl: "/greenfield.storage.MsgDiscontinueBucket",
        value: MsgDiscontinueBucket.fromPartial(value)
      };
    },
    createObject(value: MsgCreateObject) {
      return {
        typeUrl: "/greenfield.storage.MsgCreateObject",
        value: MsgCreateObject.fromPartial(value)
      };
    },
    sealObject(value: MsgSealObject) {
      return {
        typeUrl: "/greenfield.storage.MsgSealObject",
        value: MsgSealObject.fromPartial(value)
      };
    },
    rejectSealObject(value: MsgRejectSealObject) {
      return {
        typeUrl: "/greenfield.storage.MsgRejectSealObject",
        value: MsgRejectSealObject.fromPartial(value)
      };
    },
    copyObject(value: MsgCopyObject) {
      return {
        typeUrl: "/greenfield.storage.MsgCopyObject",
        value: MsgCopyObject.fromPartial(value)
      };
    },
    deleteObject(value: MsgDeleteObject) {
      return {
        typeUrl: "/greenfield.storage.MsgDeleteObject",
        value: MsgDeleteObject.fromPartial(value)
      };
    },
    cancelCreateObject(value: MsgCancelCreateObject) {
      return {
        typeUrl: "/greenfield.storage.MsgCancelCreateObject",
        value: MsgCancelCreateObject.fromPartial(value)
      };
    },
    mirrorObject(value: MsgMirrorObject) {
      return {
        typeUrl: "/greenfield.storage.MsgMirrorObject",
        value: MsgMirrorObject.fromPartial(value)
      };
    },
    discontinueObject(value: MsgDiscontinueObject) {
      return {
        typeUrl: "/greenfield.storage.MsgDiscontinueObject",
        value: MsgDiscontinueObject.fromPartial(value)
      };
    },
    updateObjectInfo(value: MsgUpdateObjectInfo) {
      return {
        typeUrl: "/greenfield.storage.MsgUpdateObjectInfo",
        value: MsgUpdateObjectInfo.fromPartial(value)
      };
    },
    createGroup(value: MsgCreateGroup) {
      return {
        typeUrl: "/greenfield.storage.MsgCreateGroup",
        value: MsgCreateGroup.fromPartial(value)
      };
    },
    deleteGroup(value: MsgDeleteGroup) {
      return {
        typeUrl: "/greenfield.storage.MsgDeleteGroup",
        value: MsgDeleteGroup.fromPartial(value)
      };
    },
    updateGroupMember(value: MsgUpdateGroupMember) {
      return {
        typeUrl: "/greenfield.storage.MsgUpdateGroupMember",
        value: MsgUpdateGroupMember.fromPartial(value)
      };
    },
    updateGroupExtra(value: MsgUpdateGroupExtra) {
      return {
        typeUrl: "/greenfield.storage.MsgUpdateGroupExtra",
        value: MsgUpdateGroupExtra.fromPartial(value)
      };
    },
    leaveGroup(value: MsgLeaveGroup) {
      return {
        typeUrl: "/greenfield.storage.MsgLeaveGroup",
        value: MsgLeaveGroup.fromPartial(value)
      };
    },
    mirrorGroup(value: MsgMirrorGroup) {
      return {
        typeUrl: "/greenfield.storage.MsgMirrorGroup",
        value: MsgMirrorGroup.fromPartial(value)
      };
    },
    renewGroupMember(value: MsgRenewGroupMember) {
      return {
        typeUrl: "/greenfield.storage.MsgRenewGroupMember",
        value: MsgRenewGroupMember.fromPartial(value)
      };
    },
    putPolicy(value: MsgPutPolicy) {
      return {
        typeUrl: "/greenfield.storage.MsgPutPolicy",
        value: MsgPutPolicy.fromPartial(value)
      };
    },
    deletePolicy(value: MsgDeletePolicy) {
      return {
        typeUrl: "/greenfield.storage.MsgDeletePolicy",
        value: MsgDeletePolicy.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/greenfield.storage.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    migrateBucket(value: MsgMigrateBucket) {
      return {
        typeUrl: "/greenfield.storage.MsgMigrateBucket",
        value: MsgMigrateBucket.fromPartial(value)
      };
    },
    completeMigrateBucket(value: MsgCompleteMigrateBucket) {
      return {
        typeUrl: "/greenfield.storage.MsgCompleteMigrateBucket",
        value: MsgCompleteMigrateBucket.fromPartial(value)
      };
    },
    cancelMigrateBucket(value: MsgCancelMigrateBucket) {
      return {
        typeUrl: "/greenfield.storage.MsgCancelMigrateBucket",
        value: MsgCancelMigrateBucket.fromPartial(value)
      };
    },
    rejectMigrateBucket(value: MsgRejectMigrateBucket) {
      return {
        typeUrl: "/greenfield.storage.MsgRejectMigrateBucket",
        value: MsgRejectMigrateBucket.fromPartial(value)
      };
    },
    setTag(value: MsgSetTag) {
      return {
        typeUrl: "/greenfield.storage.MsgSetTag",
        value: MsgSetTag.fromPartial(value)
      };
    }
  }
};