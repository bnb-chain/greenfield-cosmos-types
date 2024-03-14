//@ts-nocheck
/* eslint-disable */
import { VisibilityType, RedundancyType, GVGMapping, GVGMappingAmino, GVGMappingSDKType, visibilityTypeFromJSON, visibilityTypeToJSON, redundancyTypeFromJSON, redundancyTypeToJSON } from "./common";
import { Approval, ApprovalAmino, ApprovalSDKType } from "../common/approval";
import { UInt64Value, UInt64ValueAmino, UInt64ValueSDKType } from "../common/wrapper";
import { Principal, PrincipalAmino, PrincipalSDKType, Statement, StatementAmino, StatementSDKType } from "../permission/common";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { ResourceTags, ResourceTagsAmino, ResourceTagsSDKType } from "./types";
import { Long, isSet, DeepPartial, Exact, bytesFromBase64, base64FromBytes, fromJsonTimestamp, fromTimestamp, Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "greenfield.storage";
export interface MsgCreateBucket {
  /** creator defines the account address of bucket creator, it is also the bucket owner. */
  creator: string;
  /** bucket_name defines a globally unique name of bucket */
  bucketName: string;
  /**
   * visibility means the bucket is private or public. if private, only bucket owner or grantee can read it,
   * otherwise every greenfield user can read it.
   */
  visibility: VisibilityType;
  /** payment_address defines an account address specified by bucket owner to pay the read fee. Default: creator */
  paymentAddress: string;
  /** primary_sp_address defines the address of primary sp. */
  primarySpAddress: string;
  /** primary_sp_approval defines the approval info of the primary SP which indicates that primary sp confirm the user's request. */
  primarySpApproval?: Approval;
  /**
   * charged_read_quota defines the read data that users are charged for, measured in bytes.
   * The available read data for each user is the sum of the free read data provided by SP and
   * the ChargeReadQuota specified here.
   */
  chargedReadQuota: Long;
}
export interface MsgCreateBucketProtoMsg {
  typeUrl: "/greenfield.storage.MsgCreateBucket";
  value: Uint8Array;
}
export interface MsgCreateBucketAmino {
  /** creator defines the account address of bucket creator, it is also the bucket owner. */
  creator?: string;
  /** bucket_name defines a globally unique name of bucket */
  bucket_name?: string;
  /**
   * visibility means the bucket is private or public. if private, only bucket owner or grantee can read it,
   * otherwise every greenfield user can read it.
   */
  visibility?: VisibilityType;
  /** payment_address defines an account address specified by bucket owner to pay the read fee. Default: creator */
  payment_address?: string;
  /** primary_sp_address defines the address of primary sp. */
  primary_sp_address?: string;
  /** primary_sp_approval defines the approval info of the primary SP which indicates that primary sp confirm the user's request. */
  primary_sp_approval?: ApprovalAmino;
  /**
   * charged_read_quota defines the read data that users are charged for, measured in bytes.
   * The available read data for each user is the sum of the free read data provided by SP and
   * the ChargeReadQuota specified here.
   */
  charged_read_quota?: string;
}
export interface MsgCreateBucketAminoMsg {
  type: "/greenfield.storage.MsgCreateBucket";
  value: MsgCreateBucketAmino;
}
export interface MsgCreateBucketSDKType {
  creator: string;
  bucket_name: string;
  visibility: VisibilityType;
  payment_address: string;
  primary_sp_address: string;
  primary_sp_approval?: ApprovalSDKType;
  charged_read_quota: Long;
}
export interface MsgCreateBucketResponse {
  bucketId: string;
}
export interface MsgCreateBucketResponseProtoMsg {
  typeUrl: "/greenfield.storage.MsgCreateBucketResponse";
  value: Uint8Array;
}
export interface MsgCreateBucketResponseAmino {
  bucket_id?: string;
}
export interface MsgCreateBucketResponseAminoMsg {
  type: "/greenfield.storage.MsgCreateBucketResponse";
  value: MsgCreateBucketResponseAmino;
}
export interface MsgCreateBucketResponseSDKType {
  bucket_id: string;
}
export interface MsgDeleteBucket {
  /** creator defines the account address of the grantee who has the DeleteBucket permission of the bucket to be deleted. */
  operator: string;
  /** bucket_name defines the name of the bucket to be deleted. */
  bucketName: string;
}
export interface MsgDeleteBucketProtoMsg {
  typeUrl: "/greenfield.storage.MsgDeleteBucket";
  value: Uint8Array;
}
export interface MsgDeleteBucketAmino {
  /** creator defines the account address of the grantee who has the DeleteBucket permission of the bucket to be deleted. */
  operator?: string;
  /** bucket_name defines the name of the bucket to be deleted. */
  bucket_name?: string;
}
export interface MsgDeleteBucketAminoMsg {
  type: "/greenfield.storage.MsgDeleteBucket";
  value: MsgDeleteBucketAmino;
}
export interface MsgDeleteBucketSDKType {
  operator: string;
  bucket_name: string;
}
export interface MsgDeleteBucketResponse {}
export interface MsgDeleteBucketResponseProtoMsg {
  typeUrl: "/greenfield.storage.MsgDeleteBucketResponse";
  value: Uint8Array;
}
export interface MsgDeleteBucketResponseAmino {}
export interface MsgDeleteBucketResponseAminoMsg {
  type: "/greenfield.storage.MsgDeleteBucketResponse";
  value: MsgDeleteBucketResponseAmino;
}
export interface MsgDeleteBucketResponseSDKType {}
export interface MsgDiscontinueBucket {
  /** operator is the sp who wants to stop serving the bucket. */
  operator: string;
  /** bucket_name defines the name of the bucket where the object which to be discontinued is stored. */
  bucketName: string;
  /** the reason for the request. */
  reason: string;
}
export interface MsgDiscontinueBucketProtoMsg {
  typeUrl: "/greenfield.storage.MsgDiscontinueBucket";
  value: Uint8Array;
}
export interface MsgDiscontinueBucketAmino {
  /** operator is the sp who wants to stop serving the bucket. */
  operator?: string;
  /** bucket_name defines the name of the bucket where the object which to be discontinued is stored. */
  bucket_name?: string;
  /** the reason for the request. */
  reason?: string;
}
export interface MsgDiscontinueBucketAminoMsg {
  type: "/greenfield.storage.MsgDiscontinueBucket";
  value: MsgDiscontinueBucketAmino;
}
export interface MsgDiscontinueBucketSDKType {
  operator: string;
  bucket_name: string;
  reason: string;
}
export interface MsgDiscontinueBucketResponse {}
export interface MsgDiscontinueBucketResponseProtoMsg {
  typeUrl: "/greenfield.storage.MsgDiscontinueBucketResponse";
  value: Uint8Array;
}
export interface MsgDiscontinueBucketResponseAmino {}
export interface MsgDiscontinueBucketResponseAminoMsg {
  type: "/greenfield.storage.MsgDiscontinueBucketResponse";
  value: MsgDiscontinueBucketResponseAmino;
}
export interface MsgDiscontinueBucketResponseSDKType {}
export interface MsgCreateObject {
  /** creator defines the account address of object uploader */
  creator: string;
  /** bucket_name defines the name of the bucket where the object is stored. */
  bucketName: string;
  /** object_name defines the name of object */
  objectName: string;
  /** payload_size defines size of the object's payload */
  payloadSize: Long;
  /**
   * visibility means the object is private or public. if private, only object owner or grantee can access it,
   * otherwise every greenfield user can access it.
   */
  visibility: VisibilityType;
  /** content_type defines a standard MIME type describing the format of the object. */
  contentType: string;
  /** primary_sp_approval defines the approval info of the primary SP which indicates that primary sp confirm the user's request. */
  primarySpApproval?: Approval;
  /** expect_checksums defines a list of hashes which was generate by redundancy algorithm. */
  expectChecksums: Uint8Array[];
  /** redundancy_type can be ec or replica */
  redundancyType: RedundancyType;
}
export interface MsgCreateObjectProtoMsg {
  typeUrl: "/greenfield.storage.MsgCreateObject";
  value: Uint8Array;
}
export interface MsgCreateObjectAmino {
  /** creator defines the account address of object uploader */
  creator?: string;
  /** bucket_name defines the name of the bucket where the object is stored. */
  bucket_name?: string;
  /** object_name defines the name of object */
  object_name?: string;
  /** payload_size defines size of the object's payload */
  payload_size?: string;
  /**
   * visibility means the object is private or public. if private, only object owner or grantee can access it,
   * otherwise every greenfield user can access it.
   */
  visibility?: VisibilityType;
  /** content_type defines a standard MIME type describing the format of the object. */
  content_type?: string;
  /** primary_sp_approval defines the approval info of the primary SP which indicates that primary sp confirm the user's request. */
  primary_sp_approval?: ApprovalAmino;
  /** expect_checksums defines a list of hashes which was generate by redundancy algorithm. */
  expect_checksums?: string[];
  /** redundancy_type can be ec or replica */
  redundancy_type?: RedundancyType;
}
export interface MsgCreateObjectAminoMsg {
  type: "/greenfield.storage.MsgCreateObject";
  value: MsgCreateObjectAmino;
}
export interface MsgCreateObjectSDKType {
  creator: string;
  bucket_name: string;
  object_name: string;
  payload_size: Long;
  visibility: VisibilityType;
  content_type: string;
  primary_sp_approval?: ApprovalSDKType;
  expect_checksums: Uint8Array[];
  redundancy_type: RedundancyType;
}
export interface MsgCreateObjectResponse {
  objectId: string;
}
export interface MsgCreateObjectResponseProtoMsg {
  typeUrl: "/greenfield.storage.MsgCreateObjectResponse";
  value: Uint8Array;
}
export interface MsgCreateObjectResponseAmino {
  object_id?: string;
}
export interface MsgCreateObjectResponseAminoMsg {
  type: "/greenfield.storage.MsgCreateObjectResponse";
  value: MsgCreateObjectResponseAmino;
}
export interface MsgCreateObjectResponseSDKType {
  object_id: string;
}
export interface MsgSealObject {
  /** operator defines the account address of primary SP */
  operator: string;
  /** bucket_name defines the name of the bucket where the object is stored. */
  bucketName: string;
  /** object_name defines the name of object to be sealed. */
  objectName: string;
  /** global_virtual_group_id defines the id of global virtual group */
  globalVirtualGroupId: number;
  /**
   * secondary_sp_bls_agg_signatures defines the aggregate bls signature of the secondary sp that can
   * acknowledge that the payload data has received and stored.
   */
  secondarySpBlsAggSignatures: Uint8Array;
}
export interface MsgSealObjectProtoMsg {
  typeUrl: "/greenfield.storage.MsgSealObject";
  value: Uint8Array;
}
export interface MsgSealObjectAmino {
  /** operator defines the account address of primary SP */
  operator?: string;
  /** bucket_name defines the name of the bucket where the object is stored. */
  bucket_name?: string;
  /** object_name defines the name of object to be sealed. */
  object_name?: string;
  /** global_virtual_group_id defines the id of global virtual group */
  global_virtual_group_id?: number;
  /**
   * secondary_sp_bls_agg_signatures defines the aggregate bls signature of the secondary sp that can
   * acknowledge that the payload data has received and stored.
   */
  secondary_sp_bls_agg_signatures?: string;
}
export interface MsgSealObjectAminoMsg {
  type: "/greenfield.storage.MsgSealObject";
  value: MsgSealObjectAmino;
}
export interface MsgSealObjectSDKType {
  operator: string;
  bucket_name: string;
  object_name: string;
  global_virtual_group_id: number;
  secondary_sp_bls_agg_signatures: Uint8Array;
}
export interface MsgSealObjectResponse {}
export interface MsgSealObjectResponseProtoMsg {
  typeUrl: "/greenfield.storage.MsgSealObjectResponse";
  value: Uint8Array;
}
export interface MsgSealObjectResponseAmino {}
export interface MsgSealObjectResponseAminoMsg {
  type: "/greenfield.storage.MsgSealObjectResponse";
  value: MsgSealObjectResponseAmino;
}
export interface MsgSealObjectResponseSDKType {}
export interface MsgSealObjectV2 {
  /** operator defines the account address of primary SP */
  operator: string;
  /** bucket_name defines the name of the bucket where the object is stored. */
  bucketName: string;
  /** object_name defines the name of object to be sealed. */
  objectName: string;
  /** global_virtual_group_id defines the id of global virtual group */
  globalVirtualGroupId: number;
  /**
   * secondary_sp_bls_agg_signatures defines the aggregate bls signature of the secondary sp that can
   * acknowledge that the payload data has received and stored.
   */
  secondarySpBlsAggSignatures: Uint8Array;
  /**
   * (optional) checksums define the total checksums of the object which generated by redundancy
   * SP might set the checksum of object if it was delegated created by SP, which checksum
   * will not be available until sealing object.
   */
  expectChecksums: Uint8Array[];
}
export interface MsgSealObjectV2ProtoMsg {
  typeUrl: "/greenfield.storage.MsgSealObjectV2";
  value: Uint8Array;
}
export interface MsgSealObjectV2Amino {
  /** operator defines the account address of primary SP */
  operator?: string;
  /** bucket_name defines the name of the bucket where the object is stored. */
  bucket_name?: string;
  /** object_name defines the name of object to be sealed. */
  object_name?: string;
  /** global_virtual_group_id defines the id of global virtual group */
  global_virtual_group_id?: number;
  /**
   * secondary_sp_bls_agg_signatures defines the aggregate bls signature of the secondary sp that can
   * acknowledge that the payload data has received and stored.
   */
  secondary_sp_bls_agg_signatures?: string;
  /**
   * (optional) checksums define the total checksums of the object which generated by redundancy
   * SP might set the checksum of object if it was delegated created by SP, which checksum
   * will not be available until sealing object.
   */
  expect_checksums?: string[];
}
export interface MsgSealObjectV2AminoMsg {
  type: "/greenfield.storage.MsgSealObjectV2";
  value: MsgSealObjectV2Amino;
}
export interface MsgSealObjectV2SDKType {
  operator: string;
  bucket_name: string;
  object_name: string;
  global_virtual_group_id: number;
  secondary_sp_bls_agg_signatures: Uint8Array;
  expect_checksums: Uint8Array[];
}
export interface MsgSealObjectV2Response {}
export interface MsgSealObjectV2ResponseProtoMsg {
  typeUrl: "/greenfield.storage.MsgSealObjectV2Response";
  value: Uint8Array;
}
export interface MsgSealObjectV2ResponseAmino {}
export interface MsgSealObjectV2ResponseAminoMsg {
  type: "/greenfield.storage.MsgSealObjectV2Response";
  value: MsgSealObjectV2ResponseAmino;
}
export interface MsgSealObjectV2ResponseSDKType {}
export interface MsgRejectSealObject {
  /** operator defines the account address of the object owner */
  operator: string;
  /** bucket_name defines the name of the bucket where the object is stored. */
  bucketName: string;
  /** object_name defines the name of unsealed object to be reject. */
  objectName: string;
}
export interface MsgRejectSealObjectProtoMsg {
  typeUrl: "/greenfield.storage.MsgRejectSealObject";
  value: Uint8Array;
}
export interface MsgRejectSealObjectAmino {
  /** operator defines the account address of the object owner */
  operator?: string;
  /** bucket_name defines the name of the bucket where the object is stored. */
  bucket_name?: string;
  /** object_name defines the name of unsealed object to be reject. */
  object_name?: string;
}
export interface MsgRejectSealObjectAminoMsg {
  type: "/greenfield.storage.MsgRejectSealObject";
  value: MsgRejectSealObjectAmino;
}
export interface MsgRejectSealObjectSDKType {
  operator: string;
  bucket_name: string;
  object_name: string;
}
export interface MsgRejectSealObjectResponse {}
export interface MsgRejectSealObjectResponseProtoMsg {
  typeUrl: "/greenfield.storage.MsgRejectSealObjectResponse";
  value: Uint8Array;
}
export interface MsgRejectSealObjectResponseAmino {}
export interface MsgRejectSealObjectResponseAminoMsg {
  type: "/greenfield.storage.MsgRejectSealObjectResponse";
  value: MsgRejectSealObjectResponseAmino;
}
export interface MsgRejectSealObjectResponseSDKType {}
export interface MsgCopyObject {
  /** operator defines the account address of the operator who has the CopyObject permission. */
  operator: string;
  /** src_bucket_name defines the name of the bucket where the object to be copied is located */
  srcBucketName: string;
  /** dst_bucket_name defines the name of the bucket where the object is copied to. */
  dstBucketName: string;
  /** src_object_name defines the name of the object which to be copied */
  srcObjectName: string;
  /** dst_object_name defines the name of the object which is copied to */
  dstObjectName: string;
  /** primary_sp_approval defines the approval info of the primary SP which indicates that primary sp confirm the user's request. */
  dstPrimarySpApproval?: Approval;
}
export interface MsgCopyObjectProtoMsg {
  typeUrl: "/greenfield.storage.MsgCopyObject";
  value: Uint8Array;
}
export interface MsgCopyObjectAmino {
  /** operator defines the account address of the operator who has the CopyObject permission. */
  operator?: string;
  /** src_bucket_name defines the name of the bucket where the object to be copied is located */
  src_bucket_name?: string;
  /** dst_bucket_name defines the name of the bucket where the object is copied to. */
  dst_bucket_name?: string;
  /** src_object_name defines the name of the object which to be copied */
  src_object_name?: string;
  /** dst_object_name defines the name of the object which is copied to */
  dst_object_name?: string;
  /** primary_sp_approval defines the approval info of the primary SP which indicates that primary sp confirm the user's request. */
  dst_primary_sp_approval?: ApprovalAmino;
}
export interface MsgCopyObjectAminoMsg {
  type: "/greenfield.storage.MsgCopyObject";
  value: MsgCopyObjectAmino;
}
export interface MsgCopyObjectSDKType {
  operator: string;
  src_bucket_name: string;
  dst_bucket_name: string;
  src_object_name: string;
  dst_object_name: string;
  dst_primary_sp_approval?: ApprovalSDKType;
}
export interface MsgCopyObjectResponse {
  objectId: string;
}
export interface MsgCopyObjectResponseProtoMsg {
  typeUrl: "/greenfield.storage.MsgCopyObjectResponse";
  value: Uint8Array;
}
export interface MsgCopyObjectResponseAmino {
  object_id?: string;
}
export interface MsgCopyObjectResponseAminoMsg {
  type: "/greenfield.storage.MsgCopyObjectResponse";
  value: MsgCopyObjectResponseAmino;
}
export interface MsgCopyObjectResponseSDKType {
  object_id: string;
}
export interface MsgDeleteObject {
  /** operator defines the account address of the operator who has the DeleteObject permission of the object to be deleted. */
  operator: string;
  /** bucket_name defines the name of the bucket where the object which to be deleted is stored. */
  bucketName: string;
  /** object_name defines the name of the object which to be deleted. */
  objectName: string;
}
export interface MsgDeleteObjectProtoMsg {
  typeUrl: "/greenfield.storage.MsgDeleteObject";
  value: Uint8Array;
}
export interface MsgDeleteObjectAmino {
  /** operator defines the account address of the operator who has the DeleteObject permission of the object to be deleted. */
  operator?: string;
  /** bucket_name defines the name of the bucket where the object which to be deleted is stored. */
  bucket_name?: string;
  /** object_name defines the name of the object which to be deleted. */
  object_name?: string;
}
export interface MsgDeleteObjectAminoMsg {
  type: "/greenfield.storage.MsgDeleteObject";
  value: MsgDeleteObjectAmino;
}
export interface MsgDeleteObjectSDKType {
  operator: string;
  bucket_name: string;
  object_name: string;
}
export interface MsgDeleteObjectResponse {}
export interface MsgDeleteObjectResponseProtoMsg {
  typeUrl: "/greenfield.storage.MsgDeleteObjectResponse";
  value: Uint8Array;
}
export interface MsgDeleteObjectResponseAmino {}
export interface MsgDeleteObjectResponseAminoMsg {
  type: "/greenfield.storage.MsgDeleteObjectResponse";
  value: MsgDeleteObjectResponseAmino;
}
export interface MsgDeleteObjectResponseSDKType {}
export interface MsgDiscontinueObject {
  /** operator is the sp who wants to stop serving the objects. */
  operator: string;
  /** bucket_name defines the name of the bucket where the object which to be discontinued is stored. */
  bucketName: string;
  /** object_ids are the ids of object info. */
  objectIds: string[];
  /** the reason for the request. */
  reason: string;
}
export interface MsgDiscontinueObjectProtoMsg {
  typeUrl: "/greenfield.storage.MsgDiscontinueObject";
  value: Uint8Array;
}
export interface MsgDiscontinueObjectAmino {
  /** operator is the sp who wants to stop serving the objects. */
  operator?: string;
  /** bucket_name defines the name of the bucket where the object which to be discontinued is stored. */
  bucket_name?: string;
  /** object_ids are the ids of object info. */
  object_ids?: string[];
  /** the reason for the request. */
  reason?: string;
}
export interface MsgDiscontinueObjectAminoMsg {
  type: "/greenfield.storage.MsgDiscontinueObject";
  value: MsgDiscontinueObjectAmino;
}
export interface MsgDiscontinueObjectSDKType {
  operator: string;
  bucket_name: string;
  object_ids: string[];
  reason: string;
}
export interface MsgDiscontinueObjectResponse {}
export interface MsgDiscontinueObjectResponseProtoMsg {
  typeUrl: "/greenfield.storage.MsgDiscontinueObjectResponse";
  value: Uint8Array;
}
export interface MsgDiscontinueObjectResponseAmino {}
export interface MsgDiscontinueObjectResponseAminoMsg {
  type: "/greenfield.storage.MsgDiscontinueObjectResponse";
  value: MsgDiscontinueObjectResponseAmino;
}
export interface MsgDiscontinueObjectResponseSDKType {}
export interface MsgCreateGroup {
  /** owner defines the account address of group owner who create the group */
  creator: string;
  /** group_name defines the name of the group. it's not globally unique. */
  groupName: string;
  /** extra defines extra info for the group */
  extra: string;
}
export interface MsgCreateGroupProtoMsg {
  typeUrl: "/greenfield.storage.MsgCreateGroup";
  value: Uint8Array;
}
export interface MsgCreateGroupAmino {
  /** owner defines the account address of group owner who create the group */
  creator?: string;
  /** group_name defines the name of the group. it's not globally unique. */
  group_name?: string;
  /** extra defines extra info for the group */
  extra?: string;
}
export interface MsgCreateGroupAminoMsg {
  type: "/greenfield.storage.MsgCreateGroup";
  value: MsgCreateGroupAmino;
}
export interface MsgCreateGroupSDKType {
  creator: string;
  group_name: string;
  extra: string;
}
export interface MsgCreateGroupResponse {
  groupId: string;
}
export interface MsgCreateGroupResponseProtoMsg {
  typeUrl: "/greenfield.storage.MsgCreateGroupResponse";
  value: Uint8Array;
}
export interface MsgCreateGroupResponseAmino {
  group_id?: string;
}
export interface MsgCreateGroupResponseAminoMsg {
  type: "/greenfield.storage.MsgCreateGroupResponse";
  value: MsgCreateGroupResponseAmino;
}
export interface MsgCreateGroupResponseSDKType {
  group_id: string;
}
export interface MsgDeleteGroup {
  /** operator defines the account address of the operator who has the DeleteGroup permission of the group to be deleted. */
  operator: string;
  /** group_name defines the name of the group which to be deleted */
  groupName: string;
}
export interface MsgDeleteGroupProtoMsg {
  typeUrl: "/greenfield.storage.MsgDeleteGroup";
  value: Uint8Array;
}
export interface MsgDeleteGroupAmino {
  /** operator defines the account address of the operator who has the DeleteGroup permission of the group to be deleted. */
  operator?: string;
  /** group_name defines the name of the group which to be deleted */
  group_name?: string;
}
export interface MsgDeleteGroupAminoMsg {
  type: "/greenfield.storage.MsgDeleteGroup";
  value: MsgDeleteGroupAmino;
}
export interface MsgDeleteGroupSDKType {
  operator: string;
  group_name: string;
}
export interface MsgDeleteGroupResponse {}
export interface MsgDeleteGroupResponseProtoMsg {
  typeUrl: "/greenfield.storage.MsgDeleteGroupResponse";
  value: Uint8Array;
}
export interface MsgDeleteGroupResponseAmino {}
export interface MsgDeleteGroupResponseAminoMsg {
  type: "/greenfield.storage.MsgDeleteGroupResponse";
  value: MsgDeleteGroupResponseAmino;
}
export interface MsgDeleteGroupResponseSDKType {}
export interface MsgUpdateGroupMember {
  /** operator defines the account address of the operator who has the UpdateGroupMember permission of the group. */
  operator: string;
  /** group_owner defines the account address of the group owner */
  groupOwner: string;
  /** group_name defines the name of the group which to be updated */
  groupName: string;
  /** members_to_add defines a list of members account address which will be add to the group */
  membersToAdd: MsgGroupMember[];
  /** members_to_delete defines a list of members account address which will be remove from the group */
  membersToDelete: string[];
}
export interface MsgUpdateGroupMemberProtoMsg {
  typeUrl: "/greenfield.storage.MsgUpdateGroupMember";
  value: Uint8Array;
}
export interface MsgUpdateGroupMemberAmino {
  /** operator defines the account address of the operator who has the UpdateGroupMember permission of the group. */
  operator?: string;
  /** group_owner defines the account address of the group owner */
  group_owner?: string;
  /** group_name defines the name of the group which to be updated */
  group_name?: string;
  /** members_to_add defines a list of members account address which will be add to the group */
  members_to_add?: MsgGroupMemberAmino[];
  /** members_to_delete defines a list of members account address which will be remove from the group */
  members_to_delete?: string[];
}
export interface MsgUpdateGroupMemberAminoMsg {
  type: "/greenfield.storage.MsgUpdateGroupMember";
  value: MsgUpdateGroupMemberAmino;
}
export interface MsgUpdateGroupMemberSDKType {
  operator: string;
  group_owner: string;
  group_name: string;
  members_to_add: MsgGroupMemberSDKType[];
  members_to_delete: string[];
}
export interface MsgUpdateGroupMemberResponse {}
export interface MsgUpdateGroupMemberResponseProtoMsg {
  typeUrl: "/greenfield.storage.MsgUpdateGroupMemberResponse";
  value: Uint8Array;
}
export interface MsgUpdateGroupMemberResponseAmino {}
export interface MsgUpdateGroupMemberResponseAminoMsg {
  type: "/greenfield.storage.MsgUpdateGroupMemberResponse";
  value: MsgUpdateGroupMemberResponseAmino;
}
export interface MsgUpdateGroupMemberResponseSDKType {}
export interface MsgRenewGroupMember {
  /** operator defines the account address of the operator who has the UpdateGroupMember permission of the group. */
  operator: string;
  /** group_owner defines the account address of the group owner */
  groupOwner: string;
  /** group_name defines the name of the group which to be updated */
  groupName: string;
  /** members defines a list of members which will be renew to the group */
  members: MsgGroupMember[];
}
export interface MsgRenewGroupMemberProtoMsg {
  typeUrl: "/greenfield.storage.MsgRenewGroupMember";
  value: Uint8Array;
}
export interface MsgRenewGroupMemberAmino {
  /** operator defines the account address of the operator who has the UpdateGroupMember permission of the group. */
  operator?: string;
  /** group_owner defines the account address of the group owner */
  group_owner?: string;
  /** group_name defines the name of the group which to be updated */
  group_name?: string;
  /** members defines a list of members which will be renew to the group */
  members?: MsgGroupMemberAmino[];
}
export interface MsgRenewGroupMemberAminoMsg {
  type: "/greenfield.storage.MsgRenewGroupMember";
  value: MsgRenewGroupMemberAmino;
}
export interface MsgRenewGroupMemberSDKType {
  operator: string;
  group_owner: string;
  group_name: string;
  members: MsgGroupMemberSDKType[];
}
export interface MsgRenewGroupMemberResponse {}
export interface MsgRenewGroupMemberResponseProtoMsg {
  typeUrl: "/greenfield.storage.MsgRenewGroupMemberResponse";
  value: Uint8Array;
}
export interface MsgRenewGroupMemberResponseAmino {}
export interface MsgRenewGroupMemberResponseAminoMsg {
  type: "/greenfield.storage.MsgRenewGroupMemberResponse";
  value: MsgRenewGroupMemberResponseAmino;
}
export interface MsgRenewGroupMemberResponseSDKType {}
export interface MsgGroupMember {
  /** member defines the account address of the group member */
  member: string;
  /** expiration_time defines the expiration time of the group member */
  expirationTime?: Timestamp;
}
export interface MsgGroupMemberProtoMsg {
  typeUrl: "/greenfield.storage.MsgGroupMember";
  value: Uint8Array;
}
export interface MsgGroupMemberAmino {
  /** member defines the account address of the group member */
  member?: string;
  /** expiration_time defines the expiration time of the group member */
  expiration_time?: string;
}
export interface MsgGroupMemberAminoMsg {
  type: "/greenfield.storage.MsgGroupMember";
  value: MsgGroupMemberAmino;
}
export interface MsgGroupMemberSDKType {
  member: string;
  expiration_time?: TimestampSDKType;
}
export interface MsgUpdateGroupExtra {
  /** operator defines the account address of the operator who has the UpdateGroupMember permission of the group. */
  operator: string;
  /** group_owner defines the account address of the group owner */
  groupOwner: string;
  /** group_name defines the name of the group which to be updated */
  groupName: string;
  /** extra defines extra info for the group to update */
  extra: string;
}
export interface MsgUpdateGroupExtraProtoMsg {
  typeUrl: "/greenfield.storage.MsgUpdateGroupExtra";
  value: Uint8Array;
}
export interface MsgUpdateGroupExtraAmino {
  /** operator defines the account address of the operator who has the UpdateGroupMember permission of the group. */
  operator?: string;
  /** group_owner defines the account address of the group owner */
  group_owner?: string;
  /** group_name defines the name of the group which to be updated */
  group_name?: string;
  /** extra defines extra info for the group to update */
  extra?: string;
}
export interface MsgUpdateGroupExtraAminoMsg {
  type: "/greenfield.storage.MsgUpdateGroupExtra";
  value: MsgUpdateGroupExtraAmino;
}
export interface MsgUpdateGroupExtraSDKType {
  operator: string;
  group_owner: string;
  group_name: string;
  extra: string;
}
export interface MsgUpdateGroupExtraResponse {}
export interface MsgUpdateGroupExtraResponseProtoMsg {
  typeUrl: "/greenfield.storage.MsgUpdateGroupExtraResponse";
  value: Uint8Array;
}
export interface MsgUpdateGroupExtraResponseAmino {}
export interface MsgUpdateGroupExtraResponseAminoMsg {
  type: "/greenfield.storage.MsgUpdateGroupExtraResponse";
  value: MsgUpdateGroupExtraResponseAmino;
}
export interface MsgUpdateGroupExtraResponseSDKType {}
export interface MsgLeaveGroup {
  /** member defines the account address of the member who want to leave the group */
  member: string;
  /** group_owner defines the owner of the group you want to leave */
  groupOwner: string;
  /** group_name defines the name of the group you want to leave */
  groupName: string;
}
export interface MsgLeaveGroupProtoMsg {
  typeUrl: "/greenfield.storage.MsgLeaveGroup";
  value: Uint8Array;
}
export interface MsgLeaveGroupAmino {
  /** member defines the account address of the member who want to leave the group */
  member?: string;
  /** group_owner defines the owner of the group you want to leave */
  group_owner?: string;
  /** group_name defines the name of the group you want to leave */
  group_name?: string;
}
export interface MsgLeaveGroupAminoMsg {
  type: "/greenfield.storage.MsgLeaveGroup";
  value: MsgLeaveGroupAmino;
}
export interface MsgLeaveGroupSDKType {
  member: string;
  group_owner: string;
  group_name: string;
}
export interface MsgLeaveGroupResponse {}
export interface MsgLeaveGroupResponseProtoMsg {
  typeUrl: "/greenfield.storage.MsgLeaveGroupResponse";
  value: Uint8Array;
}
export interface MsgLeaveGroupResponseAmino {}
export interface MsgLeaveGroupResponseAminoMsg {
  type: "/greenfield.storage.MsgLeaveGroupResponse";
  value: MsgLeaveGroupResponseAmino;
}
export interface MsgLeaveGroupResponseSDKType {}
export interface MsgUpdateBucketInfo {
  /** operator defines the account address of the operator */
  operator: string;
  /** bucket_name defines the name of bucket which you'll update */
  bucketName: string;
  /**
   * charged_read_quota defines the traffic quota that you read from primary sp
   * if read_quota is nil, it means don't change the read_quota
   */
  chargedReadQuota?: UInt64Value;
  /**
   * payment_address defines the account address of the payment account
   * if payment_address is empty, it means don't change the payment_address
   */
  paymentAddress: string;
  /**
   * visibility means the bucket is private or public. if private, only bucket owner or grantee can read it,
   * otherwise every greenfield user can read it.
   */
  visibility: VisibilityType;
}
export interface MsgUpdateBucketInfoProtoMsg {
  typeUrl: "/greenfield.storage.MsgUpdateBucketInfo";
  value: Uint8Array;
}
export interface MsgUpdateBucketInfoAmino {
  /** operator defines the account address of the operator */
  operator?: string;
  /** bucket_name defines the name of bucket which you'll update */
  bucket_name?: string;
  /**
   * charged_read_quota defines the traffic quota that you read from primary sp
   * if read_quota is nil, it means don't change the read_quota
   */
  charged_read_quota?: UInt64ValueAmino;
  /**
   * payment_address defines the account address of the payment account
   * if payment_address is empty, it means don't change the payment_address
   */
  payment_address?: string;
  /**
   * visibility means the bucket is private or public. if private, only bucket owner or grantee can read it,
   * otherwise every greenfield user can read it.
   */
  visibility?: VisibilityType;
}
export interface MsgUpdateBucketInfoAminoMsg {
  type: "/greenfield.storage.MsgUpdateBucketInfo";
  value: MsgUpdateBucketInfoAmino;
}
export interface MsgUpdateBucketInfoSDKType {
  operator: string;
  bucket_name: string;
  charged_read_quota?: UInt64ValueSDKType;
  payment_address: string;
  visibility: VisibilityType;
}
export interface MsgUpdateBucketInfoResponse {}
export interface MsgUpdateBucketInfoResponseProtoMsg {
  typeUrl: "/greenfield.storage.MsgUpdateBucketInfoResponse";
  value: Uint8Array;
}
export interface MsgUpdateBucketInfoResponseAmino {}
export interface MsgUpdateBucketInfoResponseAminoMsg {
  type: "/greenfield.storage.MsgUpdateBucketInfoResponse";
  value: MsgUpdateBucketInfoResponseAmino;
}
export interface MsgUpdateBucketInfoResponseSDKType {}
export interface MsgCancelCreateObject {
  /** operator defines the account address of the operator */
  operator: string;
  /** bucket_name defines the name of the bucket */
  bucketName: string;
  /** object_name defines the name of the object */
  objectName: string;
}
export interface MsgCancelCreateObjectProtoMsg {
  typeUrl: "/greenfield.storage.MsgCancelCreateObject";
  value: Uint8Array;
}
export interface MsgCancelCreateObjectAmino {
  /** operator defines the account address of the operator */
  operator?: string;
  /** bucket_name defines the name of the bucket */
  bucket_name?: string;
  /** object_name defines the name of the object */
  object_name?: string;
}
export interface MsgCancelCreateObjectAminoMsg {
  type: "/greenfield.storage.MsgCancelCreateObject";
  value: MsgCancelCreateObjectAmino;
}
export interface MsgCancelCreateObjectSDKType {
  operator: string;
  bucket_name: string;
  object_name: string;
}
export interface MsgCancelCreateObjectResponse {}
export interface MsgCancelCreateObjectResponseProtoMsg {
  typeUrl: "/greenfield.storage.MsgCancelCreateObjectResponse";
  value: Uint8Array;
}
export interface MsgCancelCreateObjectResponseAmino {}
export interface MsgCancelCreateObjectResponseAminoMsg {
  type: "/greenfield.storage.MsgCancelCreateObjectResponse";
  value: MsgCancelCreateObjectResponseAmino;
}
export interface MsgCancelCreateObjectResponseSDKType {}
export interface MsgPutPolicy {
  /** operator defines the granter who grant the permission to another principal */
  operator: string;
  /** Principal defines the roles that can be grant permissions to. Currently, it can be account or group. */
  principal?: Principal;
  /** resource defines a greenfield standard resource name that can be generated by GRN structure */
  resource: string;
  /** statements defines a list of individual statement which describe the detail rules of policy */
  statements: Statement[];
  /**
   * expiration_time defines the whole expiration time of all the statements.
   * Notices: Its priority is higher than the expiration time inside the Statement
   */
  expirationTime?: Timestamp;
}
export interface MsgPutPolicyProtoMsg {
  typeUrl: "/greenfield.storage.MsgPutPolicy";
  value: Uint8Array;
}
export interface MsgPutPolicyAmino {
  /** operator defines the granter who grant the permission to another principal */
  operator?: string;
  /** Principal defines the roles that can be grant permissions to. Currently, it can be account or group. */
  principal?: PrincipalAmino;
  /** resource defines a greenfield standard resource name that can be generated by GRN structure */
  resource?: string;
  /** statements defines a list of individual statement which describe the detail rules of policy */
  statements?: StatementAmino[];
  /**
   * expiration_time defines the whole expiration time of all the statements.
   * Notices: Its priority is higher than the expiration time inside the Statement
   */
  expiration_time?: string;
}
export interface MsgPutPolicyAminoMsg {
  type: "/greenfield.storage.MsgPutPolicy";
  value: MsgPutPolicyAmino;
}
export interface MsgPutPolicySDKType {
  operator: string;
  principal?: PrincipalSDKType;
  resource: string;
  statements: StatementSDKType[];
  expiration_time?: TimestampSDKType;
}
export interface MsgPutPolicyResponse {
  policyId: string;
}
export interface MsgPutPolicyResponseProtoMsg {
  typeUrl: "/greenfield.storage.MsgPutPolicyResponse";
  value: Uint8Array;
}
export interface MsgPutPolicyResponseAmino {
  policy_id?: string;
}
export interface MsgPutPolicyResponseAminoMsg {
  type: "/greenfield.storage.MsgPutPolicyResponse";
  value: MsgPutPolicyResponseAmino;
}
export interface MsgPutPolicyResponseSDKType {
  policy_id: string;
}
export interface MsgDeletePolicy {
  /** operator defines the granter who grant the permission to another principal */
  operator: string;
  /** Principal defines the roles that can grant permissions. Currently, it can be account or group. */
  principal?: Principal;
  /** resource defines a greenfield standard resource name that can be generated by GRN structure */
  resource: string;
}
export interface MsgDeletePolicyProtoMsg {
  typeUrl: "/greenfield.storage.MsgDeletePolicy";
  value: Uint8Array;
}
export interface MsgDeletePolicyAmino {
  /** operator defines the granter who grant the permission to another principal */
  operator?: string;
  /** Principal defines the roles that can grant permissions. Currently, it can be account or group. */
  principal?: PrincipalAmino;
  /** resource defines a greenfield standard resource name that can be generated by GRN structure */
  resource?: string;
}
export interface MsgDeletePolicyAminoMsg {
  type: "/greenfield.storage.MsgDeletePolicy";
  value: MsgDeletePolicyAmino;
}
export interface MsgDeletePolicySDKType {
  operator: string;
  principal?: PrincipalSDKType;
  resource: string;
}
export interface MsgDeletePolicyResponse {
  policyId: string;
}
export interface MsgDeletePolicyResponseProtoMsg {
  typeUrl: "/greenfield.storage.MsgDeletePolicyResponse";
  value: Uint8Array;
}
export interface MsgDeletePolicyResponseAmino {
  policy_id?: string;
}
export interface MsgDeletePolicyResponseAminoMsg {
  type: "/greenfield.storage.MsgDeletePolicyResponse";
  value: MsgDeletePolicyResponseAmino;
}
export interface MsgDeletePolicyResponseSDKType {
  policy_id: string;
}
export interface MsgMirrorObject {
  /** operator defines the account address of the object owner. */
  operator: string;
  /** id defines the unique u256 for object. */
  id: string;
  /** bucket_name defines the name of the bucket where the object is stored */
  bucketName: string;
  /** object_name defines the name of object */
  objectName: string;
  /** destination chain id */
  destChainId: number;
}
export interface MsgMirrorObjectProtoMsg {
  typeUrl: "/greenfield.storage.MsgMirrorObject";
  value: Uint8Array;
}
export interface MsgMirrorObjectAmino {
  /** operator defines the account address of the object owner. */
  operator?: string;
  /** id defines the unique u256 for object. */
  id?: string;
  /** bucket_name defines the name of the bucket where the object is stored */
  bucket_name?: string;
  /** object_name defines the name of object */
  object_name?: string;
  /** destination chain id */
  dest_chain_id?: number;
}
export interface MsgMirrorObjectAminoMsg {
  type: "/greenfield.storage.MsgMirrorObject";
  value: MsgMirrorObjectAmino;
}
export interface MsgMirrorObjectSDKType {
  operator: string;
  id: string;
  bucket_name: string;
  object_name: string;
  dest_chain_id: number;
}
export interface MsgMirrorObjectResponse {}
export interface MsgMirrorObjectResponseProtoMsg {
  typeUrl: "/greenfield.storage.MsgMirrorObjectResponse";
  value: Uint8Array;
}
export interface MsgMirrorObjectResponseAmino {}
export interface MsgMirrorObjectResponseAminoMsg {
  type: "/greenfield.storage.MsgMirrorObjectResponse";
  value: MsgMirrorObjectResponseAmino;
}
export interface MsgMirrorObjectResponseSDKType {}
export interface MsgMirrorBucket {
  /** operator defines the account address of the bucket owner. */
  operator: string;
  /** id defines the unique u256 for bucket. */
  id: string;
  /** bucket_name defines a globally unique name of bucket */
  bucketName: string;
  /** destination chain id */
  destChainId: number;
}
export interface MsgMirrorBucketProtoMsg {
  typeUrl: "/greenfield.storage.MsgMirrorBucket";
  value: Uint8Array;
}
export interface MsgMirrorBucketAmino {
  /** operator defines the account address of the bucket owner. */
  operator?: string;
  /** id defines the unique u256 for bucket. */
  id?: string;
  /** bucket_name defines a globally unique name of bucket */
  bucket_name?: string;
  /** destination chain id */
  dest_chain_id?: number;
}
export interface MsgMirrorBucketAminoMsg {
  type: "/greenfield.storage.MsgMirrorBucket";
  value: MsgMirrorBucketAmino;
}
export interface MsgMirrorBucketSDKType {
  operator: string;
  id: string;
  bucket_name: string;
  dest_chain_id: number;
}
export interface MsgUpdateObjectInfoResponse {}
export interface MsgUpdateObjectInfoResponseProtoMsg {
  typeUrl: "/greenfield.storage.MsgUpdateObjectInfoResponse";
  value: Uint8Array;
}
export interface MsgUpdateObjectInfoResponseAmino {}
export interface MsgUpdateObjectInfoResponseAminoMsg {
  type: "/greenfield.storage.MsgUpdateObjectInfoResponse";
  value: MsgUpdateObjectInfoResponseAmino;
}
export interface MsgUpdateObjectInfoResponseSDKType {}
export interface MsgUpdateObjectInfo {
  /** operator defines the account address of the operator */
  operator: string;
  /** bucket_name is the name of the bucket */
  bucketName: string;
  /** object_name defines the name of bucket which you'll update */
  objectName: string;
  /**
   * visibility means the object is private or public. if private, only bucket owner or grantee can read it,
   * otherwise every greenfield user can read it.
   */
  visibility: VisibilityType;
}
export interface MsgUpdateObjectInfoProtoMsg {
  typeUrl: "/greenfield.storage.MsgUpdateObjectInfo";
  value: Uint8Array;
}
export interface MsgUpdateObjectInfoAmino {
  /** operator defines the account address of the operator */
  operator?: string;
  /** bucket_name is the name of the bucket */
  bucket_name?: string;
  /** object_name defines the name of bucket which you'll update */
  object_name?: string;
  /**
   * visibility means the object is private or public. if private, only bucket owner or grantee can read it,
   * otherwise every greenfield user can read it.
   */
  visibility?: VisibilityType;
}
export interface MsgUpdateObjectInfoAminoMsg {
  type: "/greenfield.storage.MsgUpdateObjectInfo";
  value: MsgUpdateObjectInfoAmino;
}
export interface MsgUpdateObjectInfoSDKType {
  operator: string;
  bucket_name: string;
  object_name: string;
  visibility: VisibilityType;
}
export interface MsgMirrorBucketResponse {}
export interface MsgMirrorBucketResponseProtoMsg {
  typeUrl: "/greenfield.storage.MsgMirrorBucketResponse";
  value: Uint8Array;
}
export interface MsgMirrorBucketResponseAmino {}
export interface MsgMirrorBucketResponseAminoMsg {
  type: "/greenfield.storage.MsgMirrorBucketResponse";
  value: MsgMirrorBucketResponseAmino;
}
export interface MsgMirrorBucketResponseSDKType {}
export interface MsgMirrorGroup {
  /** operator defines the account address of the group owner. */
  operator: string;
  /** id defines the unique u256 for group. */
  id: string;
  /** group_name defines the name of the group */
  groupName: string;
  /** destination chain id */
  destChainId: number;
}
export interface MsgMirrorGroupProtoMsg {
  typeUrl: "/greenfield.storage.MsgMirrorGroup";
  value: Uint8Array;
}
export interface MsgMirrorGroupAmino {
  /** operator defines the account address of the group owner. */
  operator?: string;
  /** id defines the unique u256 for group. */
  id?: string;
  /** group_name defines the name of the group */
  group_name?: string;
  /** destination chain id */
  dest_chain_id?: number;
}
export interface MsgMirrorGroupAminoMsg {
  type: "/greenfield.storage.MsgMirrorGroup";
  value: MsgMirrorGroupAmino;
}
export interface MsgMirrorGroupSDKType {
  operator: string;
  id: string;
  group_name: string;
  dest_chain_id: number;
}
export interface MsgMirrorGroupResponse {}
export interface MsgMirrorGroupResponseProtoMsg {
  typeUrl: "/greenfield.storage.MsgMirrorGroupResponse";
  value: Uint8Array;
}
export interface MsgMirrorGroupResponseAmino {}
export interface MsgMirrorGroupResponseAminoMsg {
  type: "/greenfield.storage.MsgMirrorGroupResponse";
  value: MsgMirrorGroupResponseAmino;
}
export interface MsgMirrorGroupResponseSDKType {}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /**
   * params defines the x/storage parameters to update.
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/greenfield.storage.MsgUpdateParams";
  value: Uint8Array;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsAmino {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority?: string;
  /**
   * params defines the x/storage parameters to update.
   * NOTE: All parameters must be supplied.
   */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "/greenfield.storage.MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/** MsgUpdateParamsResponse defines the response structure for executing a */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/greenfield.storage.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/** MsgUpdateParamsResponse defines the response structure for executing a */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/greenfield.storage.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/** MsgUpdateParamsResponse defines the response structure for executing a */
export interface MsgUpdateParamsResponseSDKType {}
export interface MsgMigrateBucket {
  /** operator defines the account address of the operator who initial the migrate bucket */
  operator: string;
  /** bucket_name defines the name of the bucket that need to be migrated */
  bucketName: string;
  /** dst_primary_sp_id defines the destination SP for migration */
  dstPrimarySpId: number;
  /** dst_primary_sp_approval defines the approval of destination sp */
  dstPrimarySpApproval?: Approval;
}
export interface MsgMigrateBucketProtoMsg {
  typeUrl: "/greenfield.storage.MsgMigrateBucket";
  value: Uint8Array;
}
export interface MsgMigrateBucketAmino {
  /** operator defines the account address of the operator who initial the migrate bucket */
  operator?: string;
  /** bucket_name defines the name of the bucket that need to be migrated */
  bucket_name?: string;
  /** dst_primary_sp_id defines the destination SP for migration */
  dst_primary_sp_id?: number;
  /** dst_primary_sp_approval defines the approval of destination sp */
  dst_primary_sp_approval?: ApprovalAmino;
}
export interface MsgMigrateBucketAminoMsg {
  type: "/greenfield.storage.MsgMigrateBucket";
  value: MsgMigrateBucketAmino;
}
export interface MsgMigrateBucketSDKType {
  operator: string;
  bucket_name: string;
  dst_primary_sp_id: number;
  dst_primary_sp_approval?: ApprovalSDKType;
}
export interface MsgMigrateBucketResponse {}
export interface MsgMigrateBucketResponseProtoMsg {
  typeUrl: "/greenfield.storage.MsgMigrateBucketResponse";
  value: Uint8Array;
}
export interface MsgMigrateBucketResponseAmino {}
export interface MsgMigrateBucketResponseAminoMsg {
  type: "/greenfield.storage.MsgMigrateBucketResponse";
  value: MsgMigrateBucketResponseAmino;
}
export interface MsgMigrateBucketResponseSDKType {}
export interface MsgCompleteMigrateBucket {
  /**
   * operator defines the account address of the msg operator.
   * The CompleteMigrateBucket transaction must be initiated by the destination SP of the migration
   */
  operator: string;
  /** bucket_name defines the name of the bucket that need to be migrated */
  bucketName: string;
  /** global_virtual_group_family_id defines the family id which the bucket migrate to */
  globalVirtualGroupFamilyId: number;
  /** gvg_mappings defines the src and dst gvg mapping relationships which the bucket migrate to */
  gvgMappings: GVGMapping[];
}
export interface MsgCompleteMigrateBucketProtoMsg {
  typeUrl: "/greenfield.storage.MsgCompleteMigrateBucket";
  value: Uint8Array;
}
export interface MsgCompleteMigrateBucketAmino {
  /**
   * operator defines the account address of the msg operator.
   * The CompleteMigrateBucket transaction must be initiated by the destination SP of the migration
   */
  operator?: string;
  /** bucket_name defines the name of the bucket that need to be migrated */
  bucket_name?: string;
  /** global_virtual_group_family_id defines the family id which the bucket migrate to */
  global_virtual_group_family_id?: number;
  /** gvg_mappings defines the src and dst gvg mapping relationships which the bucket migrate to */
  gvg_mappings?: GVGMappingAmino[];
}
export interface MsgCompleteMigrateBucketAminoMsg {
  type: "/greenfield.storage.MsgCompleteMigrateBucket";
  value: MsgCompleteMigrateBucketAmino;
}
export interface MsgCompleteMigrateBucketSDKType {
  operator: string;
  bucket_name: string;
  global_virtual_group_family_id: number;
  gvg_mappings: GVGMappingSDKType[];
}
export interface MsgCompleteMigrateBucketResponse {}
export interface MsgCompleteMigrateBucketResponseProtoMsg {
  typeUrl: "/greenfield.storage.MsgCompleteMigrateBucketResponse";
  value: Uint8Array;
}
export interface MsgCompleteMigrateBucketResponseAmino {}
export interface MsgCompleteMigrateBucketResponseAminoMsg {
  type: "/greenfield.storage.MsgCompleteMigrateBucketResponse";
  value: MsgCompleteMigrateBucketResponseAmino;
}
export interface MsgCompleteMigrateBucketResponseSDKType {}
export interface MsgCancelMigrateBucket {
  /**
   * operator defines the account address of the msg operator.
   * Only the user can send this transaction to cancel the migrate bucket
   */
  operator: string;
  /** bucket_name defines the name of the bucket that need to be migrated */
  bucketName: string;
}
export interface MsgCancelMigrateBucketProtoMsg {
  typeUrl: "/greenfield.storage.MsgCancelMigrateBucket";
  value: Uint8Array;
}
export interface MsgCancelMigrateBucketAmino {
  /**
   * operator defines the account address of the msg operator.
   * Only the user can send this transaction to cancel the migrate bucket
   */
  operator?: string;
  /** bucket_name defines the name of the bucket that need to be migrated */
  bucket_name?: string;
}
export interface MsgCancelMigrateBucketAminoMsg {
  type: "/greenfield.storage.MsgCancelMigrateBucket";
  value: MsgCancelMigrateBucketAmino;
}
export interface MsgCancelMigrateBucketSDKType {
  operator: string;
  bucket_name: string;
}
export interface MsgCancelMigrateBucketResponse {}
export interface MsgCancelMigrateBucketResponseProtoMsg {
  typeUrl: "/greenfield.storage.MsgCancelMigrateBucketResponse";
  value: Uint8Array;
}
export interface MsgCancelMigrateBucketResponseAmino {}
export interface MsgCancelMigrateBucketResponseAminoMsg {
  type: "/greenfield.storage.MsgCancelMigrateBucketResponse";
  value: MsgCancelMigrateBucketResponseAmino;
}
export interface MsgCancelMigrateBucketResponseSDKType {}
export interface MsgRejectMigrateBucket {
  /**
   * operator defines the account address of the msg operator.
   * only the Dest SP can send this transaction to reject the bucket migration.
   */
  operator: string;
  /** bucket_name defines the name of the bucket that need to be migrated */
  bucketName: string;
}
export interface MsgRejectMigrateBucketProtoMsg {
  typeUrl: "/greenfield.storage.MsgRejectMigrateBucket";
  value: Uint8Array;
}
export interface MsgRejectMigrateBucketAmino {
  /**
   * operator defines the account address of the msg operator.
   * only the Dest SP can send this transaction to reject the bucket migration.
   */
  operator?: string;
  /** bucket_name defines the name of the bucket that need to be migrated */
  bucket_name?: string;
}
export interface MsgRejectMigrateBucketAminoMsg {
  type: "/greenfield.storage.MsgRejectMigrateBucket";
  value: MsgRejectMigrateBucketAmino;
}
export interface MsgRejectMigrateBucketSDKType {
  operator: string;
  bucket_name: string;
}
export interface MsgRejectMigrateBucketResponse {}
export interface MsgRejectMigrateBucketResponseProtoMsg {
  typeUrl: "/greenfield.storage.MsgRejectMigrateBucketResponse";
  value: Uint8Array;
}
export interface MsgRejectMigrateBucketResponseAmino {}
export interface MsgRejectMigrateBucketResponseAminoMsg {
  type: "/greenfield.storage.MsgRejectMigrateBucketResponse";
  value: MsgRejectMigrateBucketResponseAmino;
}
export interface MsgRejectMigrateBucketResponseSDKType {}
export interface MsgSetTag {
  /** operator defines the operator who adds the tags */
  operator: string;
  /** resource defines a greenfield standard resource name that can be generated by GRN structure */
  resource: string;
  /** tags defines a list of tags which will be set to the resource */
  tags?: ResourceTags;
}
export interface MsgSetTagProtoMsg {
  typeUrl: "/greenfield.storage.MsgSetTag";
  value: Uint8Array;
}
export interface MsgSetTagAmino {
  /** operator defines the operator who adds the tags */
  operator?: string;
  /** resource defines a greenfield standard resource name that can be generated by GRN structure */
  resource?: string;
  /** tags defines a list of tags which will be set to the resource */
  tags?: ResourceTagsAmino;
}
export interface MsgSetTagAminoMsg {
  type: "/greenfield.storage.MsgSetTag";
  value: MsgSetTagAmino;
}
export interface MsgSetTagSDKType {
  operator: string;
  resource: string;
  tags?: ResourceTagsSDKType;
}
export interface MsgSetTagResponse {}
export interface MsgSetTagResponseProtoMsg {
  typeUrl: "/greenfield.storage.MsgSetTagResponse";
  value: Uint8Array;
}
export interface MsgSetTagResponseAmino {}
export interface MsgSetTagResponseAminoMsg {
  type: "/greenfield.storage.MsgSetTagResponse";
  value: MsgSetTagResponseAmino;
}
export interface MsgSetTagResponseSDKType {}
export interface MsgUpdateObjectContent {
  /** operator defines the account address of the operator, either the object owner or the updater with granted permission. */
  operator: string;
  /** bucket_name defines the name of the bucket where the object is stored. */
  bucketName: string;
  /** object_name defines the name of object */
  objectName: string;
  /** payload_size defines size of the object's payload */
  payloadSize: Long;
  /** content_type defines a standard MIME type describing the format of the object. */
  contentType: string;
  /** expect_checksums defines a list of hashes which was generate by redundancy algorithm. */
  expectChecksums: Uint8Array[];
}
export interface MsgUpdateObjectContentProtoMsg {
  typeUrl: "/greenfield.storage.MsgUpdateObjectContent";
  value: Uint8Array;
}
export interface MsgUpdateObjectContentAmino {
  /** operator defines the account address of the operator, either the object owner or the updater with granted permission. */
  operator?: string;
  /** bucket_name defines the name of the bucket where the object is stored. */
  bucket_name?: string;
  /** object_name defines the name of object */
  object_name?: string;
  /** payload_size defines size of the object's payload */
  payload_size?: string;
  /** content_type defines a standard MIME type describing the format of the object. */
  content_type?: string;
  /** expect_checksums defines a list of hashes which was generate by redundancy algorithm. */
  expect_checksums?: string[];
}
export interface MsgUpdateObjectContentAminoMsg {
  type: "/greenfield.storage.MsgUpdateObjectContent";
  value: MsgUpdateObjectContentAmino;
}
export interface MsgUpdateObjectContentSDKType {
  operator: string;
  bucket_name: string;
  object_name: string;
  payload_size: Long;
  content_type: string;
  expect_checksums: Uint8Array[];
}
export interface MsgUpdateObjectContentResponse {}
export interface MsgUpdateObjectContentResponseProtoMsg {
  typeUrl: "/greenfield.storage.MsgUpdateObjectContentResponse";
  value: Uint8Array;
}
export interface MsgUpdateObjectContentResponseAmino {}
export interface MsgUpdateObjectContentResponseAminoMsg {
  type: "/greenfield.storage.MsgUpdateObjectContentResponse";
  value: MsgUpdateObjectContentResponseAmino;
}
export interface MsgUpdateObjectContentResponseSDKType {}
export interface MsgCancelUpdateObjectContent {
  /** operator defines the account address of the operator, either the object owner or the updater with granted permission. */
  operator: string;
  /** bucket_name defines the name of the bucket */
  bucketName: string;
  /** object_name defines the name of the object */
  objectName: string;
}
export interface MsgCancelUpdateObjectContentProtoMsg {
  typeUrl: "/greenfield.storage.MsgCancelUpdateObjectContent";
  value: Uint8Array;
}
export interface MsgCancelUpdateObjectContentAmino {
  /** operator defines the account address of the operator, either the object owner or the updater with granted permission. */
  operator?: string;
  /** bucket_name defines the name of the bucket */
  bucket_name?: string;
  /** object_name defines the name of the object */
  object_name?: string;
}
export interface MsgCancelUpdateObjectContentAminoMsg {
  type: "/greenfield.storage.MsgCancelUpdateObjectContent";
  value: MsgCancelUpdateObjectContentAmino;
}
export interface MsgCancelUpdateObjectContentSDKType {
  operator: string;
  bucket_name: string;
  object_name: string;
}
export interface MsgCancelUpdateObjectContentResponse {}
export interface MsgCancelUpdateObjectContentResponseProtoMsg {
  typeUrl: "/greenfield.storage.MsgCancelUpdateObjectContentResponse";
  value: Uint8Array;
}
export interface MsgCancelUpdateObjectContentResponseAmino {}
export interface MsgCancelUpdateObjectContentResponseAminoMsg {
  type: "/greenfield.storage.MsgCancelUpdateObjectContentResponse";
  value: MsgCancelUpdateObjectContentResponseAmino;
}
export interface MsgCancelUpdateObjectContentResponseSDKType {}
export interface MsgDelegateCreateObject {
  /** operator defines the account address of the operator, it is the delegated agent that allows to creat object under bucket. */
  operator: string;
  /** creator defines the account address of the object creator. */
  creator: string;
  /** bucket_name defines the name of the bucket where the object is stored. */
  bucketName: string;
  /** object_name defines the name of object */
  objectName: string;
  /** payload_size defines size of the object's payload */
  payloadSize: Long;
  /** content_type define the format of the object which should be a standard MIME type. */
  contentType: string;
  /**
   * visibility means the object is private or public. if private, only object owner or grantee can access it,
   * otherwise every greenfield user can access it.
   */
  visibility: VisibilityType;
  /** expect_checksums defines a list of hashes which was generate by redundancy algorithm. */
  expectChecksums: Uint8Array[];
  /** redundancy_type can be ec or replica */
  redundancyType: RedundancyType;
}
export interface MsgDelegateCreateObjectProtoMsg {
  typeUrl: "/greenfield.storage.MsgDelegateCreateObject";
  value: Uint8Array;
}
export interface MsgDelegateCreateObjectAmino {
  /** operator defines the account address of the operator, it is the delegated agent that allows to creat object under bucket. */
  operator?: string;
  /** creator defines the account address of the object creator. */
  creator?: string;
  /** bucket_name defines the name of the bucket where the object is stored. */
  bucket_name?: string;
  /** object_name defines the name of object */
  object_name?: string;
  /** payload_size defines size of the object's payload */
  payload_size?: string;
  /** content_type define the format of the object which should be a standard MIME type. */
  content_type?: string;
  /**
   * visibility means the object is private or public. if private, only object owner or grantee can access it,
   * otherwise every greenfield user can access it.
   */
  visibility?: VisibilityType;
  /** expect_checksums defines a list of hashes which was generate by redundancy algorithm. */
  expect_checksums?: string[];
  /** redundancy_type can be ec or replica */
  redundancy_type?: RedundancyType;
}
export interface MsgDelegateCreateObjectAminoMsg {
  type: "/greenfield.storage.MsgDelegateCreateObject";
  value: MsgDelegateCreateObjectAmino;
}
export interface MsgDelegateCreateObjectSDKType {
  operator: string;
  creator: string;
  bucket_name: string;
  object_name: string;
  payload_size: Long;
  content_type: string;
  visibility: VisibilityType;
  expect_checksums: Uint8Array[];
  redundancy_type: RedundancyType;
}
export interface MsgDelegateCreateObjectResponse {
  objectId: string;
}
export interface MsgDelegateCreateObjectResponseProtoMsg {
  typeUrl: "/greenfield.storage.MsgDelegateCreateObjectResponse";
  value: Uint8Array;
}
export interface MsgDelegateCreateObjectResponseAmino {
  object_id?: string;
}
export interface MsgDelegateCreateObjectResponseAminoMsg {
  type: "/greenfield.storage.MsgDelegateCreateObjectResponse";
  value: MsgDelegateCreateObjectResponseAmino;
}
export interface MsgDelegateCreateObjectResponseSDKType {
  object_id: string;
}
export interface MsgDelegateUpdateObjectContent {
  /** operator defines the account address of the operator, it is the delegated agent that allows to creat object under bucket. */
  operator: string;
  /** updater defines the account address of the object updater. */
  updater: string;
  /** bucket_name defines the name of the bucket where the object is stored. */
  bucketName: string;
  /** object_name defines the name of object */
  objectName: string;
  /** payload_size defines size of the object's payload */
  payloadSize: Long;
  /** content_type define the format of the object which should be a standard MIME type. */
  contentType: string;
  /** expect_checksums defines a list of hashes which was generate by redundancy algorithm. */
  expectChecksums: Uint8Array[];
}
export interface MsgDelegateUpdateObjectContentProtoMsg {
  typeUrl: "/greenfield.storage.MsgDelegateUpdateObjectContent";
  value: Uint8Array;
}
export interface MsgDelegateUpdateObjectContentAmino {
  /** operator defines the account address of the operator, it is the delegated agent that allows to creat object under bucket. */
  operator?: string;
  /** updater defines the account address of the object updater. */
  updater?: string;
  /** bucket_name defines the name of the bucket where the object is stored. */
  bucket_name?: string;
  /** object_name defines the name of object */
  object_name?: string;
  /** payload_size defines size of the object's payload */
  payload_size?: string;
  /** content_type define the format of the object which should be a standard MIME type. */
  content_type?: string;
  /** expect_checksums defines a list of hashes which was generate by redundancy algorithm. */
  expect_checksums?: string[];
}
export interface MsgDelegateUpdateObjectContentAminoMsg {
  type: "/greenfield.storage.MsgDelegateUpdateObjectContent";
  value: MsgDelegateUpdateObjectContentAmino;
}
export interface MsgDelegateUpdateObjectContentSDKType {
  operator: string;
  updater: string;
  bucket_name: string;
  object_name: string;
  payload_size: Long;
  content_type: string;
  expect_checksums: Uint8Array[];
}
export interface MsgDelegateUpdateObjectContentResponse {}
export interface MsgDelegateUpdateObjectContentResponseProtoMsg {
  typeUrl: "/greenfield.storage.MsgDelegateUpdateObjectContentResponse";
  value: Uint8Array;
}
export interface MsgDelegateUpdateObjectContentResponseAmino {}
export interface MsgDelegateUpdateObjectContentResponseAminoMsg {
  type: "/greenfield.storage.MsgDelegateUpdateObjectContentResponse";
  value: MsgDelegateUpdateObjectContentResponseAmino;
}
export interface MsgDelegateUpdateObjectContentResponseSDKType {}
export interface MsgToggleSPAsDelegatedAgent {
  /** operator defines the account address of the operator, only the bucket owner can send the tx. */
  operator: string;
  /** bucket_name defines the name of the bucket. */
  bucketName: string;
}
export interface MsgToggleSPAsDelegatedAgentProtoMsg {
  typeUrl: "/greenfield.storage.MsgToggleSPAsDelegatedAgent";
  value: Uint8Array;
}
export interface MsgToggleSPAsDelegatedAgentAmino {
  /** operator defines the account address of the operator, only the bucket owner can send the tx. */
  operator?: string;
  /** bucket_name defines the name of the bucket. */
  bucket_name?: string;
}
export interface MsgToggleSPAsDelegatedAgentAminoMsg {
  type: "/greenfield.storage.MsgToggleSPAsDelegatedAgent";
  value: MsgToggleSPAsDelegatedAgentAmino;
}
export interface MsgToggleSPAsDelegatedAgentSDKType {
  operator: string;
  bucket_name: string;
}
export interface MsgToggleSPAsDelegatedAgentResponse {}
export interface MsgToggleSPAsDelegatedAgentResponseProtoMsg {
  typeUrl: "/greenfield.storage.MsgToggleSPAsDelegatedAgentResponse";
  value: Uint8Array;
}
export interface MsgToggleSPAsDelegatedAgentResponseAmino {}
export interface MsgToggleSPAsDelegatedAgentResponseAminoMsg {
  type: "/greenfield.storage.MsgToggleSPAsDelegatedAgentResponse";
  value: MsgToggleSPAsDelegatedAgentResponseAmino;
}
export interface MsgToggleSPAsDelegatedAgentResponseSDKType {}
function createBaseMsgCreateBucket(): MsgCreateBucket {
  return {
    creator: "",
    bucketName: "",
    visibility: 0,
    paymentAddress: "",
    primarySpAddress: "",
    primarySpApproval: undefined,
    chargedReadQuota: Long.UZERO
  };
}
export const MsgCreateBucket = {
  typeUrl: "/greenfield.storage.MsgCreateBucket",
  encode(message: MsgCreateBucket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }
    if (message.visibility !== 0) {
      writer.uint32(24).int32(message.visibility);
    }
    if (message.paymentAddress !== "") {
      writer.uint32(34).string(message.paymentAddress);
    }
    if (message.primarySpAddress !== "") {
      writer.uint32(42).string(message.primarySpAddress);
    }
    if (message.primarySpApproval !== undefined) {
      Approval.encode(message.primarySpApproval, writer.uint32(50).fork()).ldelim();
    }
    if (!message.chargedReadQuota.isZero()) {
      writer.uint32(56).uint64(message.chargedReadQuota);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBucket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBucket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.bucketName = reader.string();
          break;
        case 3:
          message.visibility = (reader.int32() as any);
          break;
        case 4:
          message.paymentAddress = reader.string();
          break;
        case 5:
          message.primarySpAddress = reader.string();
          break;
        case 6:
          message.primarySpApproval = Approval.decode(reader, reader.uint32());
          break;
        case 7:
          message.chargedReadQuota = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateBucket {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      visibility: isSet(object.visibility) ? visibilityTypeFromJSON(object.visibility) : -1,
      paymentAddress: isSet(object.paymentAddress) ? String(object.paymentAddress) : "",
      primarySpAddress: isSet(object.primarySpAddress) ? String(object.primarySpAddress) : "",
      primarySpApproval: isSet(object.primarySpApproval) ? Approval.fromJSON(object.primarySpApproval) : undefined,
      chargedReadQuota: isSet(object.chargedReadQuota) ? Long.fromValue(object.chargedReadQuota) : Long.UZERO
    };
  },
  toJSON(message: MsgCreateBucket): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.visibility !== undefined && (obj.visibility = visibilityTypeToJSON(message.visibility));
    message.paymentAddress !== undefined && (obj.paymentAddress = message.paymentAddress);
    message.primarySpAddress !== undefined && (obj.primarySpAddress = message.primarySpAddress);
    message.primarySpApproval !== undefined && (obj.primarySpApproval = message.primarySpApproval ? Approval.toJSON(message.primarySpApproval) : undefined);
    message.chargedReadQuota !== undefined && (obj.chargedReadQuota = (message.chargedReadQuota || Long.UZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateBucket>, I>>(object: I): MsgCreateBucket {
    const message = createBaseMsgCreateBucket();
    message.creator = object.creator ?? "";
    message.bucketName = object.bucketName ?? "";
    message.visibility = object.visibility ?? 0;
    message.paymentAddress = object.paymentAddress ?? "";
    message.primarySpAddress = object.primarySpAddress ?? "";
    message.primarySpApproval = object.primarySpApproval !== undefined && object.primarySpApproval !== null ? Approval.fromPartial(object.primarySpApproval) : undefined;
    message.chargedReadQuota = object.chargedReadQuota !== undefined && object.chargedReadQuota !== null ? Long.fromValue(object.chargedReadQuota) : Long.UZERO;
    return message;
  },
  fromSDK(object: MsgCreateBucketSDKType): MsgCreateBucket {
    return {
      creator: object?.creator,
      bucketName: object?.bucket_name,
      visibility: isSet(object.visibility) ? visibilityTypeFromJSON(object.visibility) : -1,
      paymentAddress: object?.payment_address,
      primarySpAddress: object?.primary_sp_address,
      primarySpApproval: object.primary_sp_approval ? Approval.fromSDK(object.primary_sp_approval) : undefined,
      chargedReadQuota: object?.charged_read_quota
    };
  },
  toSDK(message: MsgCreateBucket): MsgCreateBucketSDKType {
    const obj: any = {};
    obj.creator = message.creator;
    obj.bucket_name = message.bucketName;
    message.visibility !== undefined && (obj.visibility = visibilityTypeToJSON(message.visibility));
    obj.payment_address = message.paymentAddress;
    obj.primary_sp_address = message.primarySpAddress;
    message.primarySpApproval !== undefined && (obj.primary_sp_approval = message.primarySpApproval ? Approval.toSDK(message.primarySpApproval) : undefined);
    obj.charged_read_quota = message.chargedReadQuota;
    return obj;
  },
  fromAmino(object: MsgCreateBucketAmino): MsgCreateBucket {
    const message = createBaseMsgCreateBucket();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    if (object.visibility !== undefined && object.visibility !== null) {
      message.visibility = visibilityTypeFromJSON(object.visibility);
    }
    if (object.payment_address !== undefined && object.payment_address !== null) {
      message.paymentAddress = object.payment_address;
    }
    if (object.primary_sp_address !== undefined && object.primary_sp_address !== null) {
      message.primarySpAddress = object.primary_sp_address;
    }
    if (object.primary_sp_approval !== undefined && object.primary_sp_approval !== null) {
      message.primarySpApproval = Approval.fromAmino(object.primary_sp_approval);
    }
    if (object.charged_read_quota !== undefined && object.charged_read_quota !== null) {
      message.chargedReadQuota = Long.fromString(object.charged_read_quota);
    }
    return message;
  },
  toAmino(message: MsgCreateBucket): MsgCreateBucketAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.bucket_name = message.bucketName;
    obj.visibility = visibilityTypeToJSON(message.visibility);
    obj.payment_address = message.paymentAddress;
    obj.primary_sp_address = message.primarySpAddress;
    obj.primary_sp_approval = message.primarySpApproval ? Approval.toAmino(message.primarySpApproval) : undefined;
    obj.charged_read_quota = message.chargedReadQuota ? message.chargedReadQuota.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateBucketAminoMsg): MsgCreateBucket {
    return MsgCreateBucket.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateBucketProtoMsg): MsgCreateBucket {
    return MsgCreateBucket.decode(message.value);
  },
  toProto(message: MsgCreateBucket): Uint8Array {
    return MsgCreateBucket.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateBucket): MsgCreateBucketProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgCreateBucket",
      value: MsgCreateBucket.encode(message).finish()
    };
  }
};
function createBaseMsgCreateBucketResponse(): MsgCreateBucketResponse {
  return {
    bucketId: ""
  };
}
export const MsgCreateBucketResponse = {
  typeUrl: "/greenfield.storage.MsgCreateBucketResponse",
  encode(message: MsgCreateBucketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bucketId !== "") {
      writer.uint32(10).string(message.bucketId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBucketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBucketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bucketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateBucketResponse {
    return {
      bucketId: isSet(object.bucketId) ? String(object.bucketId) : ""
    };
  },
  toJSON(message: MsgCreateBucketResponse): unknown {
    const obj: any = {};
    message.bucketId !== undefined && (obj.bucketId = message.bucketId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateBucketResponse>, I>>(object: I): MsgCreateBucketResponse {
    const message = createBaseMsgCreateBucketResponse();
    message.bucketId = object.bucketId ?? "";
    return message;
  },
  fromSDK(object: MsgCreateBucketResponseSDKType): MsgCreateBucketResponse {
    return {
      bucketId: object?.bucket_id
    };
  },
  toSDK(message: MsgCreateBucketResponse): MsgCreateBucketResponseSDKType {
    const obj: any = {};
    obj.bucket_id = message.bucketId;
    return obj;
  },
  fromAmino(object: MsgCreateBucketResponseAmino): MsgCreateBucketResponse {
    const message = createBaseMsgCreateBucketResponse();
    if (object.bucket_id !== undefined && object.bucket_id !== null) {
      message.bucketId = object.bucket_id;
    }
    return message;
  },
  toAmino(message: MsgCreateBucketResponse): MsgCreateBucketResponseAmino {
    const obj: any = {};
    obj.bucket_id = message.bucketId;
    return obj;
  },
  fromAminoMsg(object: MsgCreateBucketResponseAminoMsg): MsgCreateBucketResponse {
    return MsgCreateBucketResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateBucketResponseProtoMsg): MsgCreateBucketResponse {
    return MsgCreateBucketResponse.decode(message.value);
  },
  toProto(message: MsgCreateBucketResponse): Uint8Array {
    return MsgCreateBucketResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateBucketResponse): MsgCreateBucketResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgCreateBucketResponse",
      value: MsgCreateBucketResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteBucket(): MsgDeleteBucket {
  return {
    operator: "",
    bucketName: ""
  };
}
export const MsgDeleteBucket = {
  typeUrl: "/greenfield.storage.MsgDeleteBucket",
  encode(message: MsgDeleteBucket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteBucket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteBucket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.bucketName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDeleteBucket {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : ""
    };
  },
  toJSON(message: MsgDeleteBucket): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteBucket>, I>>(object: I): MsgDeleteBucket {
    const message = createBaseMsgDeleteBucket();
    message.operator = object.operator ?? "";
    message.bucketName = object.bucketName ?? "";
    return message;
  },
  fromSDK(object: MsgDeleteBucketSDKType): MsgDeleteBucket {
    return {
      operator: object?.operator,
      bucketName: object?.bucket_name
    };
  },
  toSDK(message: MsgDeleteBucket): MsgDeleteBucketSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    return obj;
  },
  fromAmino(object: MsgDeleteBucketAmino): MsgDeleteBucket {
    const message = createBaseMsgDeleteBucket();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    return message;
  },
  toAmino(message: MsgDeleteBucket): MsgDeleteBucketAmino {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteBucketAminoMsg): MsgDeleteBucket {
    return MsgDeleteBucket.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteBucketProtoMsg): MsgDeleteBucket {
    return MsgDeleteBucket.decode(message.value);
  },
  toProto(message: MsgDeleteBucket): Uint8Array {
    return MsgDeleteBucket.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteBucket): MsgDeleteBucketProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgDeleteBucket",
      value: MsgDeleteBucket.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteBucketResponse(): MsgDeleteBucketResponse {
  return {};
}
export const MsgDeleteBucketResponse = {
  typeUrl: "/greenfield.storage.MsgDeleteBucketResponse",
  encode(_: MsgDeleteBucketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteBucketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteBucketResponse();
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
  fromJSON(_: any): MsgDeleteBucketResponse {
    return {};
  },
  toJSON(_: MsgDeleteBucketResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteBucketResponse>, I>>(_: I): MsgDeleteBucketResponse {
    const message = createBaseMsgDeleteBucketResponse();
    return message;
  },
  fromSDK(_: MsgDeleteBucketResponseSDKType): MsgDeleteBucketResponse {
    return {};
  },
  toSDK(_: MsgDeleteBucketResponse): MsgDeleteBucketResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgDeleteBucketResponseAmino): MsgDeleteBucketResponse {
    const message = createBaseMsgDeleteBucketResponse();
    return message;
  },
  toAmino(_: MsgDeleteBucketResponse): MsgDeleteBucketResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteBucketResponseAminoMsg): MsgDeleteBucketResponse {
    return MsgDeleteBucketResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteBucketResponseProtoMsg): MsgDeleteBucketResponse {
    return MsgDeleteBucketResponse.decode(message.value);
  },
  toProto(message: MsgDeleteBucketResponse): Uint8Array {
    return MsgDeleteBucketResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteBucketResponse): MsgDeleteBucketResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgDeleteBucketResponse",
      value: MsgDeleteBucketResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDiscontinueBucket(): MsgDiscontinueBucket {
  return {
    operator: "",
    bucketName: "",
    reason: ""
  };
}
export const MsgDiscontinueBucket = {
  typeUrl: "/greenfield.storage.MsgDiscontinueBucket",
  encode(message: MsgDiscontinueBucket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDiscontinueBucket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDiscontinueBucket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.bucketName = reader.string();
          break;
        case 3:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDiscontinueBucket {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      reason: isSet(object.reason) ? String(object.reason) : ""
    };
  },
  toJSON(message: MsgDiscontinueBucket): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.reason !== undefined && (obj.reason = message.reason);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDiscontinueBucket>, I>>(object: I): MsgDiscontinueBucket {
    const message = createBaseMsgDiscontinueBucket();
    message.operator = object.operator ?? "";
    message.bucketName = object.bucketName ?? "";
    message.reason = object.reason ?? "";
    return message;
  },
  fromSDK(object: MsgDiscontinueBucketSDKType): MsgDiscontinueBucket {
    return {
      operator: object?.operator,
      bucketName: object?.bucket_name,
      reason: object?.reason
    };
  },
  toSDK(message: MsgDiscontinueBucket): MsgDiscontinueBucketSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.reason = message.reason;
    return obj;
  },
  fromAmino(object: MsgDiscontinueBucketAmino): MsgDiscontinueBucket {
    const message = createBaseMsgDiscontinueBucket();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: MsgDiscontinueBucket): MsgDiscontinueBucketAmino {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.reason = message.reason;
    return obj;
  },
  fromAminoMsg(object: MsgDiscontinueBucketAminoMsg): MsgDiscontinueBucket {
    return MsgDiscontinueBucket.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDiscontinueBucketProtoMsg): MsgDiscontinueBucket {
    return MsgDiscontinueBucket.decode(message.value);
  },
  toProto(message: MsgDiscontinueBucket): Uint8Array {
    return MsgDiscontinueBucket.encode(message).finish();
  },
  toProtoMsg(message: MsgDiscontinueBucket): MsgDiscontinueBucketProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgDiscontinueBucket",
      value: MsgDiscontinueBucket.encode(message).finish()
    };
  }
};
function createBaseMsgDiscontinueBucketResponse(): MsgDiscontinueBucketResponse {
  return {};
}
export const MsgDiscontinueBucketResponse = {
  typeUrl: "/greenfield.storage.MsgDiscontinueBucketResponse",
  encode(_: MsgDiscontinueBucketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDiscontinueBucketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDiscontinueBucketResponse();
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
  fromJSON(_: any): MsgDiscontinueBucketResponse {
    return {};
  },
  toJSON(_: MsgDiscontinueBucketResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDiscontinueBucketResponse>, I>>(_: I): MsgDiscontinueBucketResponse {
    const message = createBaseMsgDiscontinueBucketResponse();
    return message;
  },
  fromSDK(_: MsgDiscontinueBucketResponseSDKType): MsgDiscontinueBucketResponse {
    return {};
  },
  toSDK(_: MsgDiscontinueBucketResponse): MsgDiscontinueBucketResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgDiscontinueBucketResponseAmino): MsgDiscontinueBucketResponse {
    const message = createBaseMsgDiscontinueBucketResponse();
    return message;
  },
  toAmino(_: MsgDiscontinueBucketResponse): MsgDiscontinueBucketResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDiscontinueBucketResponseAminoMsg): MsgDiscontinueBucketResponse {
    return MsgDiscontinueBucketResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDiscontinueBucketResponseProtoMsg): MsgDiscontinueBucketResponse {
    return MsgDiscontinueBucketResponse.decode(message.value);
  },
  toProto(message: MsgDiscontinueBucketResponse): Uint8Array {
    return MsgDiscontinueBucketResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDiscontinueBucketResponse): MsgDiscontinueBucketResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgDiscontinueBucketResponse",
      value: MsgDiscontinueBucketResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateObject(): MsgCreateObject {
  return {
    creator: "",
    bucketName: "",
    objectName: "",
    payloadSize: Long.UZERO,
    visibility: 0,
    contentType: "",
    primarySpApproval: undefined,
    expectChecksums: [],
    redundancyType: 0
  };
}
export const MsgCreateObject = {
  typeUrl: "/greenfield.storage.MsgCreateObject",
  encode(message: MsgCreateObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }
    if (message.objectName !== "") {
      writer.uint32(26).string(message.objectName);
    }
    if (!message.payloadSize.isZero()) {
      writer.uint32(32).uint64(message.payloadSize);
    }
    if (message.visibility !== 0) {
      writer.uint32(40).int32(message.visibility);
    }
    if (message.contentType !== "") {
      writer.uint32(50).string(message.contentType);
    }
    if (message.primarySpApproval !== undefined) {
      Approval.encode(message.primarySpApproval, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.expectChecksums) {
      writer.uint32(66).bytes(v!);
    }
    if (message.redundancyType !== 0) {
      writer.uint32(72).int32(message.redundancyType);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateObject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateObject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.bucketName = reader.string();
          break;
        case 3:
          message.objectName = reader.string();
          break;
        case 4:
          message.payloadSize = (reader.uint64() as Long);
          break;
        case 5:
          message.visibility = (reader.int32() as any);
          break;
        case 6:
          message.contentType = reader.string();
          break;
        case 7:
          message.primarySpApproval = Approval.decode(reader, reader.uint32());
          break;
        case 8:
          message.expectChecksums.push(reader.bytes());
          break;
        case 9:
          message.redundancyType = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateObject {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      objectName: isSet(object.objectName) ? String(object.objectName) : "",
      payloadSize: isSet(object.payloadSize) ? Long.fromValue(object.payloadSize) : Long.UZERO,
      visibility: isSet(object.visibility) ? visibilityTypeFromJSON(object.visibility) : -1,
      contentType: isSet(object.contentType) ? String(object.contentType) : "",
      primarySpApproval: isSet(object.primarySpApproval) ? Approval.fromJSON(object.primarySpApproval) : undefined,
      expectChecksums: Array.isArray(object?.expectChecksums) ? object.expectChecksums.map((e: any) => bytesFromBase64(e)) : [],
      redundancyType: isSet(object.redundancyType) ? redundancyTypeFromJSON(object.redundancyType) : -1
    };
  },
  toJSON(message: MsgCreateObject): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.objectName !== undefined && (obj.objectName = message.objectName);
    message.payloadSize !== undefined && (obj.payloadSize = (message.payloadSize || Long.UZERO).toString());
    message.visibility !== undefined && (obj.visibility = visibilityTypeToJSON(message.visibility));
    message.contentType !== undefined && (obj.contentType = message.contentType);
    message.primarySpApproval !== undefined && (obj.primarySpApproval = message.primarySpApproval ? Approval.toJSON(message.primarySpApproval) : undefined);
    if (message.expectChecksums) {
      obj.expectChecksums = message.expectChecksums.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.expectChecksums = [];
    }
    message.redundancyType !== undefined && (obj.redundancyType = redundancyTypeToJSON(message.redundancyType));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateObject>, I>>(object: I): MsgCreateObject {
    const message = createBaseMsgCreateObject();
    message.creator = object.creator ?? "";
    message.bucketName = object.bucketName ?? "";
    message.objectName = object.objectName ?? "";
    message.payloadSize = object.payloadSize !== undefined && object.payloadSize !== null ? Long.fromValue(object.payloadSize) : Long.UZERO;
    message.visibility = object.visibility ?? 0;
    message.contentType = object.contentType ?? "";
    message.primarySpApproval = object.primarySpApproval !== undefined && object.primarySpApproval !== null ? Approval.fromPartial(object.primarySpApproval) : undefined;
    message.expectChecksums = object.expectChecksums?.map(e => e) || [];
    message.redundancyType = object.redundancyType ?? 0;
    return message;
  },
  fromSDK(object: MsgCreateObjectSDKType): MsgCreateObject {
    return {
      creator: object?.creator,
      bucketName: object?.bucket_name,
      objectName: object?.object_name,
      payloadSize: object?.payload_size,
      visibility: isSet(object.visibility) ? visibilityTypeFromJSON(object.visibility) : -1,
      contentType: object?.content_type,
      primarySpApproval: object.primary_sp_approval ? Approval.fromSDK(object.primary_sp_approval) : undefined,
      expectChecksums: Array.isArray(object?.expect_checksums) ? object.expect_checksums.map((e: any) => e) : [],
      redundancyType: isSet(object.redundancy_type) ? redundancyTypeFromJSON(object.redundancy_type) : -1
    };
  },
  toSDK(message: MsgCreateObject): MsgCreateObjectSDKType {
    const obj: any = {};
    obj.creator = message.creator;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    obj.payload_size = message.payloadSize;
    message.visibility !== undefined && (obj.visibility = visibilityTypeToJSON(message.visibility));
    obj.content_type = message.contentType;
    message.primarySpApproval !== undefined && (obj.primary_sp_approval = message.primarySpApproval ? Approval.toSDK(message.primarySpApproval) : undefined);
    if (message.expectChecksums) {
      obj.expect_checksums = message.expectChecksums.map(e => e);
    } else {
      obj.expect_checksums = [];
    }
    message.redundancyType !== undefined && (obj.redundancy_type = redundancyTypeToJSON(message.redundancyType));
    return obj;
  },
  fromAmino(object: MsgCreateObjectAmino): MsgCreateObject {
    const message = createBaseMsgCreateObject();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    if (object.object_name !== undefined && object.object_name !== null) {
      message.objectName = object.object_name;
    }
    if (object.payload_size !== undefined && object.payload_size !== null) {
      message.payloadSize = Long.fromString(object.payload_size);
    }
    if (object.visibility !== undefined && object.visibility !== null) {
      message.visibility = visibilityTypeFromJSON(object.visibility);
    }
    if (object.content_type !== undefined && object.content_type !== null) {
      message.contentType = object.content_type;
    }
    if (object.primary_sp_approval !== undefined && object.primary_sp_approval !== null) {
      message.primarySpApproval = Approval.fromAmino(object.primary_sp_approval);
    }
    message.expectChecksums = object.expect_checksums?.map(e => bytesFromBase64(e)) || [];
    if (object.redundancy_type !== undefined && object.redundancy_type !== null) {
      message.redundancyType = redundancyTypeFromJSON(object.redundancy_type);
    }
    return message;
  },
  toAmino(message: MsgCreateObject): MsgCreateObjectAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    obj.payload_size = message.payloadSize ? message.payloadSize.toString() : undefined;
    obj.visibility = visibilityTypeToJSON(message.visibility);
    obj.content_type = message.contentType;
    obj.primary_sp_approval = message.primarySpApproval ? Approval.toAmino(message.primarySpApproval) : undefined;
    if (message.expectChecksums) {
      obj.expect_checksums = message.expectChecksums.map(e => base64FromBytes(e));
    } else {
      obj.expect_checksums = [];
    }
    obj.redundancy_type = redundancyTypeToJSON(message.redundancyType);
    return obj;
  },
  fromAminoMsg(object: MsgCreateObjectAminoMsg): MsgCreateObject {
    return MsgCreateObject.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateObjectProtoMsg): MsgCreateObject {
    return MsgCreateObject.decode(message.value);
  },
  toProto(message: MsgCreateObject): Uint8Array {
    return MsgCreateObject.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateObject): MsgCreateObjectProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgCreateObject",
      value: MsgCreateObject.encode(message).finish()
    };
  }
};
function createBaseMsgCreateObjectResponse(): MsgCreateObjectResponse {
  return {
    objectId: ""
  };
}
export const MsgCreateObjectResponse = {
  typeUrl: "/greenfield.storage.MsgCreateObjectResponse",
  encode(message: MsgCreateObjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.objectId !== "") {
      writer.uint32(10).string(message.objectId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateObjectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateObjectResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.objectId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateObjectResponse {
    return {
      objectId: isSet(object.objectId) ? String(object.objectId) : ""
    };
  },
  toJSON(message: MsgCreateObjectResponse): unknown {
    const obj: any = {};
    message.objectId !== undefined && (obj.objectId = message.objectId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateObjectResponse>, I>>(object: I): MsgCreateObjectResponse {
    const message = createBaseMsgCreateObjectResponse();
    message.objectId = object.objectId ?? "";
    return message;
  },
  fromSDK(object: MsgCreateObjectResponseSDKType): MsgCreateObjectResponse {
    return {
      objectId: object?.object_id
    };
  },
  toSDK(message: MsgCreateObjectResponse): MsgCreateObjectResponseSDKType {
    const obj: any = {};
    obj.object_id = message.objectId;
    return obj;
  },
  fromAmino(object: MsgCreateObjectResponseAmino): MsgCreateObjectResponse {
    const message = createBaseMsgCreateObjectResponse();
    if (object.object_id !== undefined && object.object_id !== null) {
      message.objectId = object.object_id;
    }
    return message;
  },
  toAmino(message: MsgCreateObjectResponse): MsgCreateObjectResponseAmino {
    const obj: any = {};
    obj.object_id = message.objectId;
    return obj;
  },
  fromAminoMsg(object: MsgCreateObjectResponseAminoMsg): MsgCreateObjectResponse {
    return MsgCreateObjectResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateObjectResponseProtoMsg): MsgCreateObjectResponse {
    return MsgCreateObjectResponse.decode(message.value);
  },
  toProto(message: MsgCreateObjectResponse): Uint8Array {
    return MsgCreateObjectResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateObjectResponse): MsgCreateObjectResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgCreateObjectResponse",
      value: MsgCreateObjectResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSealObject(): MsgSealObject {
  return {
    operator: "",
    bucketName: "",
    objectName: "",
    globalVirtualGroupId: 0,
    secondarySpBlsAggSignatures: new Uint8Array()
  };
}
export const MsgSealObject = {
  typeUrl: "/greenfield.storage.MsgSealObject",
  encode(message: MsgSealObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }
    if (message.objectName !== "") {
      writer.uint32(26).string(message.objectName);
    }
    if (message.globalVirtualGroupId !== 0) {
      writer.uint32(32).uint32(message.globalVirtualGroupId);
    }
    if (message.secondarySpBlsAggSignatures.length !== 0) {
      writer.uint32(42).bytes(message.secondarySpBlsAggSignatures);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSealObject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSealObject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.bucketName = reader.string();
          break;
        case 3:
          message.objectName = reader.string();
          break;
        case 4:
          message.globalVirtualGroupId = reader.uint32();
          break;
        case 5:
          message.secondarySpBlsAggSignatures = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSealObject {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      objectName: isSet(object.objectName) ? String(object.objectName) : "",
      globalVirtualGroupId: isSet(object.globalVirtualGroupId) ? Number(object.globalVirtualGroupId) : 0,
      secondarySpBlsAggSignatures: isSet(object.secondarySpBlsAggSignatures) ? bytesFromBase64(object.secondarySpBlsAggSignatures) : new Uint8Array()
    };
  },
  toJSON(message: MsgSealObject): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.objectName !== undefined && (obj.objectName = message.objectName);
    message.globalVirtualGroupId !== undefined && (obj.globalVirtualGroupId = Math.round(message.globalVirtualGroupId));
    message.secondarySpBlsAggSignatures !== undefined && (obj.secondarySpBlsAggSignatures = base64FromBytes(message.secondarySpBlsAggSignatures !== undefined ? message.secondarySpBlsAggSignatures : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSealObject>, I>>(object: I): MsgSealObject {
    const message = createBaseMsgSealObject();
    message.operator = object.operator ?? "";
    message.bucketName = object.bucketName ?? "";
    message.objectName = object.objectName ?? "";
    message.globalVirtualGroupId = object.globalVirtualGroupId ?? 0;
    message.secondarySpBlsAggSignatures = object.secondarySpBlsAggSignatures ?? new Uint8Array();
    return message;
  },
  fromSDK(object: MsgSealObjectSDKType): MsgSealObject {
    return {
      operator: object?.operator,
      bucketName: object?.bucket_name,
      objectName: object?.object_name,
      globalVirtualGroupId: object?.global_virtual_group_id,
      secondarySpBlsAggSignatures: object?.secondary_sp_bls_agg_signatures
    };
  },
  toSDK(message: MsgSealObject): MsgSealObjectSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    obj.global_virtual_group_id = message.globalVirtualGroupId;
    obj.secondary_sp_bls_agg_signatures = message.secondarySpBlsAggSignatures;
    return obj;
  },
  fromAmino(object: MsgSealObjectAmino): MsgSealObject {
    const message = createBaseMsgSealObject();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    if (object.object_name !== undefined && object.object_name !== null) {
      message.objectName = object.object_name;
    }
    if (object.global_virtual_group_id !== undefined && object.global_virtual_group_id !== null) {
      message.globalVirtualGroupId = object.global_virtual_group_id;
    }
    if (object.secondary_sp_bls_agg_signatures !== undefined && object.secondary_sp_bls_agg_signatures !== null) {
      message.secondarySpBlsAggSignatures = bytesFromBase64(object.secondary_sp_bls_agg_signatures);
    }
    return message;
  },
  toAmino(message: MsgSealObject): MsgSealObjectAmino {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    obj.global_virtual_group_id = message.globalVirtualGroupId;
    obj.secondary_sp_bls_agg_signatures = message.secondarySpBlsAggSignatures ? base64FromBytes(message.secondarySpBlsAggSignatures) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSealObjectAminoMsg): MsgSealObject {
    return MsgSealObject.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSealObjectProtoMsg): MsgSealObject {
    return MsgSealObject.decode(message.value);
  },
  toProto(message: MsgSealObject): Uint8Array {
    return MsgSealObject.encode(message).finish();
  },
  toProtoMsg(message: MsgSealObject): MsgSealObjectProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgSealObject",
      value: MsgSealObject.encode(message).finish()
    };
  }
};
function createBaseMsgSealObjectResponse(): MsgSealObjectResponse {
  return {};
}
export const MsgSealObjectResponse = {
  typeUrl: "/greenfield.storage.MsgSealObjectResponse",
  encode(_: MsgSealObjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSealObjectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSealObjectResponse();
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
  fromJSON(_: any): MsgSealObjectResponse {
    return {};
  },
  toJSON(_: MsgSealObjectResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSealObjectResponse>, I>>(_: I): MsgSealObjectResponse {
    const message = createBaseMsgSealObjectResponse();
    return message;
  },
  fromSDK(_: MsgSealObjectResponseSDKType): MsgSealObjectResponse {
    return {};
  },
  toSDK(_: MsgSealObjectResponse): MsgSealObjectResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgSealObjectResponseAmino): MsgSealObjectResponse {
    const message = createBaseMsgSealObjectResponse();
    return message;
  },
  toAmino(_: MsgSealObjectResponse): MsgSealObjectResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSealObjectResponseAminoMsg): MsgSealObjectResponse {
    return MsgSealObjectResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSealObjectResponseProtoMsg): MsgSealObjectResponse {
    return MsgSealObjectResponse.decode(message.value);
  },
  toProto(message: MsgSealObjectResponse): Uint8Array {
    return MsgSealObjectResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSealObjectResponse): MsgSealObjectResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgSealObjectResponse",
      value: MsgSealObjectResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSealObjectV2(): MsgSealObjectV2 {
  return {
    operator: "",
    bucketName: "",
    objectName: "",
    globalVirtualGroupId: 0,
    secondarySpBlsAggSignatures: new Uint8Array(),
    expectChecksums: []
  };
}
export const MsgSealObjectV2 = {
  typeUrl: "/greenfield.storage.MsgSealObjectV2",
  encode(message: MsgSealObjectV2, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }
    if (message.objectName !== "") {
      writer.uint32(26).string(message.objectName);
    }
    if (message.globalVirtualGroupId !== 0) {
      writer.uint32(32).uint32(message.globalVirtualGroupId);
    }
    if (message.secondarySpBlsAggSignatures.length !== 0) {
      writer.uint32(42).bytes(message.secondarySpBlsAggSignatures);
    }
    for (const v of message.expectChecksums) {
      writer.uint32(50).bytes(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSealObjectV2 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSealObjectV2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.bucketName = reader.string();
          break;
        case 3:
          message.objectName = reader.string();
          break;
        case 4:
          message.globalVirtualGroupId = reader.uint32();
          break;
        case 5:
          message.secondarySpBlsAggSignatures = reader.bytes();
          break;
        case 6:
          message.expectChecksums.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSealObjectV2 {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      objectName: isSet(object.objectName) ? String(object.objectName) : "",
      globalVirtualGroupId: isSet(object.globalVirtualGroupId) ? Number(object.globalVirtualGroupId) : 0,
      secondarySpBlsAggSignatures: isSet(object.secondarySpBlsAggSignatures) ? bytesFromBase64(object.secondarySpBlsAggSignatures) : new Uint8Array(),
      expectChecksums: Array.isArray(object?.expectChecksums) ? object.expectChecksums.map((e: any) => bytesFromBase64(e)) : []
    };
  },
  toJSON(message: MsgSealObjectV2): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.objectName !== undefined && (obj.objectName = message.objectName);
    message.globalVirtualGroupId !== undefined && (obj.globalVirtualGroupId = Math.round(message.globalVirtualGroupId));
    message.secondarySpBlsAggSignatures !== undefined && (obj.secondarySpBlsAggSignatures = base64FromBytes(message.secondarySpBlsAggSignatures !== undefined ? message.secondarySpBlsAggSignatures : new Uint8Array()));
    if (message.expectChecksums) {
      obj.expectChecksums = message.expectChecksums.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.expectChecksums = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSealObjectV2>, I>>(object: I): MsgSealObjectV2 {
    const message = createBaseMsgSealObjectV2();
    message.operator = object.operator ?? "";
    message.bucketName = object.bucketName ?? "";
    message.objectName = object.objectName ?? "";
    message.globalVirtualGroupId = object.globalVirtualGroupId ?? 0;
    message.secondarySpBlsAggSignatures = object.secondarySpBlsAggSignatures ?? new Uint8Array();
    message.expectChecksums = object.expectChecksums?.map(e => e) || [];
    return message;
  },
  fromSDK(object: MsgSealObjectV2SDKType): MsgSealObjectV2 {
    return {
      operator: object?.operator,
      bucketName: object?.bucket_name,
      objectName: object?.object_name,
      globalVirtualGroupId: object?.global_virtual_group_id,
      secondarySpBlsAggSignatures: object?.secondary_sp_bls_agg_signatures,
      expectChecksums: Array.isArray(object?.expect_checksums) ? object.expect_checksums.map((e: any) => e) : []
    };
  },
  toSDK(message: MsgSealObjectV2): MsgSealObjectV2SDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    obj.global_virtual_group_id = message.globalVirtualGroupId;
    obj.secondary_sp_bls_agg_signatures = message.secondarySpBlsAggSignatures;
    if (message.expectChecksums) {
      obj.expect_checksums = message.expectChecksums.map(e => e);
    } else {
      obj.expect_checksums = [];
    }
    return obj;
  },
  fromAmino(object: MsgSealObjectV2Amino): MsgSealObjectV2 {
    const message = createBaseMsgSealObjectV2();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    if (object.object_name !== undefined && object.object_name !== null) {
      message.objectName = object.object_name;
    }
    if (object.global_virtual_group_id !== undefined && object.global_virtual_group_id !== null) {
      message.globalVirtualGroupId = object.global_virtual_group_id;
    }
    if (object.secondary_sp_bls_agg_signatures !== undefined && object.secondary_sp_bls_agg_signatures !== null) {
      message.secondarySpBlsAggSignatures = bytesFromBase64(object.secondary_sp_bls_agg_signatures);
    }
    message.expectChecksums = object.expect_checksums?.map(e => bytesFromBase64(e)) || [];
    return message;
  },
  toAmino(message: MsgSealObjectV2): MsgSealObjectV2Amino {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    obj.global_virtual_group_id = message.globalVirtualGroupId;
    obj.secondary_sp_bls_agg_signatures = message.secondarySpBlsAggSignatures ? base64FromBytes(message.secondarySpBlsAggSignatures) : undefined;
    if (message.expectChecksums) {
      obj.expect_checksums = message.expectChecksums.map(e => base64FromBytes(e));
    } else {
      obj.expect_checksums = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgSealObjectV2AminoMsg): MsgSealObjectV2 {
    return MsgSealObjectV2.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSealObjectV2ProtoMsg): MsgSealObjectV2 {
    return MsgSealObjectV2.decode(message.value);
  },
  toProto(message: MsgSealObjectV2): Uint8Array {
    return MsgSealObjectV2.encode(message).finish();
  },
  toProtoMsg(message: MsgSealObjectV2): MsgSealObjectV2ProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgSealObjectV2",
      value: MsgSealObjectV2.encode(message).finish()
    };
  }
};
function createBaseMsgSealObjectV2Response(): MsgSealObjectV2Response {
  return {};
}
export const MsgSealObjectV2Response = {
  typeUrl: "/greenfield.storage.MsgSealObjectV2Response",
  encode(_: MsgSealObjectV2Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSealObjectV2Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSealObjectV2Response();
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
  fromJSON(_: any): MsgSealObjectV2Response {
    return {};
  },
  toJSON(_: MsgSealObjectV2Response): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSealObjectV2Response>, I>>(_: I): MsgSealObjectV2Response {
    const message = createBaseMsgSealObjectV2Response();
    return message;
  },
  fromSDK(_: MsgSealObjectV2ResponseSDKType): MsgSealObjectV2Response {
    return {};
  },
  toSDK(_: MsgSealObjectV2Response): MsgSealObjectV2ResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgSealObjectV2ResponseAmino): MsgSealObjectV2Response {
    const message = createBaseMsgSealObjectV2Response();
    return message;
  },
  toAmino(_: MsgSealObjectV2Response): MsgSealObjectV2ResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSealObjectV2ResponseAminoMsg): MsgSealObjectV2Response {
    return MsgSealObjectV2Response.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSealObjectV2ResponseProtoMsg): MsgSealObjectV2Response {
    return MsgSealObjectV2Response.decode(message.value);
  },
  toProto(message: MsgSealObjectV2Response): Uint8Array {
    return MsgSealObjectV2Response.encode(message).finish();
  },
  toProtoMsg(message: MsgSealObjectV2Response): MsgSealObjectV2ResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgSealObjectV2Response",
      value: MsgSealObjectV2Response.encode(message).finish()
    };
  }
};
function createBaseMsgRejectSealObject(): MsgRejectSealObject {
  return {
    operator: "",
    bucketName: "",
    objectName: ""
  };
}
export const MsgRejectSealObject = {
  typeUrl: "/greenfield.storage.MsgRejectSealObject",
  encode(message: MsgRejectSealObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }
    if (message.objectName !== "") {
      writer.uint32(26).string(message.objectName);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRejectSealObject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRejectSealObject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.bucketName = reader.string();
          break;
        case 3:
          message.objectName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRejectSealObject {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      objectName: isSet(object.objectName) ? String(object.objectName) : ""
    };
  },
  toJSON(message: MsgRejectSealObject): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.objectName !== undefined && (obj.objectName = message.objectName);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRejectSealObject>, I>>(object: I): MsgRejectSealObject {
    const message = createBaseMsgRejectSealObject();
    message.operator = object.operator ?? "";
    message.bucketName = object.bucketName ?? "";
    message.objectName = object.objectName ?? "";
    return message;
  },
  fromSDK(object: MsgRejectSealObjectSDKType): MsgRejectSealObject {
    return {
      operator: object?.operator,
      bucketName: object?.bucket_name,
      objectName: object?.object_name
    };
  },
  toSDK(message: MsgRejectSealObject): MsgRejectSealObjectSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    return obj;
  },
  fromAmino(object: MsgRejectSealObjectAmino): MsgRejectSealObject {
    const message = createBaseMsgRejectSealObject();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    if (object.object_name !== undefined && object.object_name !== null) {
      message.objectName = object.object_name;
    }
    return message;
  },
  toAmino(message: MsgRejectSealObject): MsgRejectSealObjectAmino {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    return obj;
  },
  fromAminoMsg(object: MsgRejectSealObjectAminoMsg): MsgRejectSealObject {
    return MsgRejectSealObject.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRejectSealObjectProtoMsg): MsgRejectSealObject {
    return MsgRejectSealObject.decode(message.value);
  },
  toProto(message: MsgRejectSealObject): Uint8Array {
    return MsgRejectSealObject.encode(message).finish();
  },
  toProtoMsg(message: MsgRejectSealObject): MsgRejectSealObjectProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgRejectSealObject",
      value: MsgRejectSealObject.encode(message).finish()
    };
  }
};
function createBaseMsgRejectSealObjectResponse(): MsgRejectSealObjectResponse {
  return {};
}
export const MsgRejectSealObjectResponse = {
  typeUrl: "/greenfield.storage.MsgRejectSealObjectResponse",
  encode(_: MsgRejectSealObjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRejectSealObjectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRejectSealObjectResponse();
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
  fromJSON(_: any): MsgRejectSealObjectResponse {
    return {};
  },
  toJSON(_: MsgRejectSealObjectResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRejectSealObjectResponse>, I>>(_: I): MsgRejectSealObjectResponse {
    const message = createBaseMsgRejectSealObjectResponse();
    return message;
  },
  fromSDK(_: MsgRejectSealObjectResponseSDKType): MsgRejectSealObjectResponse {
    return {};
  },
  toSDK(_: MsgRejectSealObjectResponse): MsgRejectSealObjectResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgRejectSealObjectResponseAmino): MsgRejectSealObjectResponse {
    const message = createBaseMsgRejectSealObjectResponse();
    return message;
  },
  toAmino(_: MsgRejectSealObjectResponse): MsgRejectSealObjectResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRejectSealObjectResponseAminoMsg): MsgRejectSealObjectResponse {
    return MsgRejectSealObjectResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRejectSealObjectResponseProtoMsg): MsgRejectSealObjectResponse {
    return MsgRejectSealObjectResponse.decode(message.value);
  },
  toProto(message: MsgRejectSealObjectResponse): Uint8Array {
    return MsgRejectSealObjectResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRejectSealObjectResponse): MsgRejectSealObjectResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgRejectSealObjectResponse",
      value: MsgRejectSealObjectResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCopyObject(): MsgCopyObject {
  return {
    operator: "",
    srcBucketName: "",
    dstBucketName: "",
    srcObjectName: "",
    dstObjectName: "",
    dstPrimarySpApproval: undefined
  };
}
export const MsgCopyObject = {
  typeUrl: "/greenfield.storage.MsgCopyObject",
  encode(message: MsgCopyObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.srcBucketName !== "") {
      writer.uint32(18).string(message.srcBucketName);
    }
    if (message.dstBucketName !== "") {
      writer.uint32(26).string(message.dstBucketName);
    }
    if (message.srcObjectName !== "") {
      writer.uint32(34).string(message.srcObjectName);
    }
    if (message.dstObjectName !== "") {
      writer.uint32(42).string(message.dstObjectName);
    }
    if (message.dstPrimarySpApproval !== undefined) {
      Approval.encode(message.dstPrimarySpApproval, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCopyObject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCopyObject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.srcBucketName = reader.string();
          break;
        case 3:
          message.dstBucketName = reader.string();
          break;
        case 4:
          message.srcObjectName = reader.string();
          break;
        case 5:
          message.dstObjectName = reader.string();
          break;
        case 6:
          message.dstPrimarySpApproval = Approval.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCopyObject {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      srcBucketName: isSet(object.srcBucketName) ? String(object.srcBucketName) : "",
      dstBucketName: isSet(object.dstBucketName) ? String(object.dstBucketName) : "",
      srcObjectName: isSet(object.srcObjectName) ? String(object.srcObjectName) : "",
      dstObjectName: isSet(object.dstObjectName) ? String(object.dstObjectName) : "",
      dstPrimarySpApproval: isSet(object.dstPrimarySpApproval) ? Approval.fromJSON(object.dstPrimarySpApproval) : undefined
    };
  },
  toJSON(message: MsgCopyObject): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.srcBucketName !== undefined && (obj.srcBucketName = message.srcBucketName);
    message.dstBucketName !== undefined && (obj.dstBucketName = message.dstBucketName);
    message.srcObjectName !== undefined && (obj.srcObjectName = message.srcObjectName);
    message.dstObjectName !== undefined && (obj.dstObjectName = message.dstObjectName);
    message.dstPrimarySpApproval !== undefined && (obj.dstPrimarySpApproval = message.dstPrimarySpApproval ? Approval.toJSON(message.dstPrimarySpApproval) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCopyObject>, I>>(object: I): MsgCopyObject {
    const message = createBaseMsgCopyObject();
    message.operator = object.operator ?? "";
    message.srcBucketName = object.srcBucketName ?? "";
    message.dstBucketName = object.dstBucketName ?? "";
    message.srcObjectName = object.srcObjectName ?? "";
    message.dstObjectName = object.dstObjectName ?? "";
    message.dstPrimarySpApproval = object.dstPrimarySpApproval !== undefined && object.dstPrimarySpApproval !== null ? Approval.fromPartial(object.dstPrimarySpApproval) : undefined;
    return message;
  },
  fromSDK(object: MsgCopyObjectSDKType): MsgCopyObject {
    return {
      operator: object?.operator,
      srcBucketName: object?.src_bucket_name,
      dstBucketName: object?.dst_bucket_name,
      srcObjectName: object?.src_object_name,
      dstObjectName: object?.dst_object_name,
      dstPrimarySpApproval: object.dst_primary_sp_approval ? Approval.fromSDK(object.dst_primary_sp_approval) : undefined
    };
  },
  toSDK(message: MsgCopyObject): MsgCopyObjectSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.src_bucket_name = message.srcBucketName;
    obj.dst_bucket_name = message.dstBucketName;
    obj.src_object_name = message.srcObjectName;
    obj.dst_object_name = message.dstObjectName;
    message.dstPrimarySpApproval !== undefined && (obj.dst_primary_sp_approval = message.dstPrimarySpApproval ? Approval.toSDK(message.dstPrimarySpApproval) : undefined);
    return obj;
  },
  fromAmino(object: MsgCopyObjectAmino): MsgCopyObject {
    const message = createBaseMsgCopyObject();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.src_bucket_name !== undefined && object.src_bucket_name !== null) {
      message.srcBucketName = object.src_bucket_name;
    }
    if (object.dst_bucket_name !== undefined && object.dst_bucket_name !== null) {
      message.dstBucketName = object.dst_bucket_name;
    }
    if (object.src_object_name !== undefined && object.src_object_name !== null) {
      message.srcObjectName = object.src_object_name;
    }
    if (object.dst_object_name !== undefined && object.dst_object_name !== null) {
      message.dstObjectName = object.dst_object_name;
    }
    if (object.dst_primary_sp_approval !== undefined && object.dst_primary_sp_approval !== null) {
      message.dstPrimarySpApproval = Approval.fromAmino(object.dst_primary_sp_approval);
    }
    return message;
  },
  toAmino(message: MsgCopyObject): MsgCopyObjectAmino {
    const obj: any = {};
    obj.operator = message.operator;
    obj.src_bucket_name = message.srcBucketName;
    obj.dst_bucket_name = message.dstBucketName;
    obj.src_object_name = message.srcObjectName;
    obj.dst_object_name = message.dstObjectName;
    obj.dst_primary_sp_approval = message.dstPrimarySpApproval ? Approval.toAmino(message.dstPrimarySpApproval) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCopyObjectAminoMsg): MsgCopyObject {
    return MsgCopyObject.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCopyObjectProtoMsg): MsgCopyObject {
    return MsgCopyObject.decode(message.value);
  },
  toProto(message: MsgCopyObject): Uint8Array {
    return MsgCopyObject.encode(message).finish();
  },
  toProtoMsg(message: MsgCopyObject): MsgCopyObjectProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgCopyObject",
      value: MsgCopyObject.encode(message).finish()
    };
  }
};
function createBaseMsgCopyObjectResponse(): MsgCopyObjectResponse {
  return {
    objectId: ""
  };
}
export const MsgCopyObjectResponse = {
  typeUrl: "/greenfield.storage.MsgCopyObjectResponse",
  encode(message: MsgCopyObjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.objectId !== "") {
      writer.uint32(10).string(message.objectId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCopyObjectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCopyObjectResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.objectId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCopyObjectResponse {
    return {
      objectId: isSet(object.objectId) ? String(object.objectId) : ""
    };
  },
  toJSON(message: MsgCopyObjectResponse): unknown {
    const obj: any = {};
    message.objectId !== undefined && (obj.objectId = message.objectId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCopyObjectResponse>, I>>(object: I): MsgCopyObjectResponse {
    const message = createBaseMsgCopyObjectResponse();
    message.objectId = object.objectId ?? "";
    return message;
  },
  fromSDK(object: MsgCopyObjectResponseSDKType): MsgCopyObjectResponse {
    return {
      objectId: object?.object_id
    };
  },
  toSDK(message: MsgCopyObjectResponse): MsgCopyObjectResponseSDKType {
    const obj: any = {};
    obj.object_id = message.objectId;
    return obj;
  },
  fromAmino(object: MsgCopyObjectResponseAmino): MsgCopyObjectResponse {
    const message = createBaseMsgCopyObjectResponse();
    if (object.object_id !== undefined && object.object_id !== null) {
      message.objectId = object.object_id;
    }
    return message;
  },
  toAmino(message: MsgCopyObjectResponse): MsgCopyObjectResponseAmino {
    const obj: any = {};
    obj.object_id = message.objectId;
    return obj;
  },
  fromAminoMsg(object: MsgCopyObjectResponseAminoMsg): MsgCopyObjectResponse {
    return MsgCopyObjectResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCopyObjectResponseProtoMsg): MsgCopyObjectResponse {
    return MsgCopyObjectResponse.decode(message.value);
  },
  toProto(message: MsgCopyObjectResponse): Uint8Array {
    return MsgCopyObjectResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCopyObjectResponse): MsgCopyObjectResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgCopyObjectResponse",
      value: MsgCopyObjectResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteObject(): MsgDeleteObject {
  return {
    operator: "",
    bucketName: "",
    objectName: ""
  };
}
export const MsgDeleteObject = {
  typeUrl: "/greenfield.storage.MsgDeleteObject",
  encode(message: MsgDeleteObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }
    if (message.objectName !== "") {
      writer.uint32(26).string(message.objectName);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteObject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteObject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.bucketName = reader.string();
          break;
        case 3:
          message.objectName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDeleteObject {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      objectName: isSet(object.objectName) ? String(object.objectName) : ""
    };
  },
  toJSON(message: MsgDeleteObject): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.objectName !== undefined && (obj.objectName = message.objectName);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteObject>, I>>(object: I): MsgDeleteObject {
    const message = createBaseMsgDeleteObject();
    message.operator = object.operator ?? "";
    message.bucketName = object.bucketName ?? "";
    message.objectName = object.objectName ?? "";
    return message;
  },
  fromSDK(object: MsgDeleteObjectSDKType): MsgDeleteObject {
    return {
      operator: object?.operator,
      bucketName: object?.bucket_name,
      objectName: object?.object_name
    };
  },
  toSDK(message: MsgDeleteObject): MsgDeleteObjectSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    return obj;
  },
  fromAmino(object: MsgDeleteObjectAmino): MsgDeleteObject {
    const message = createBaseMsgDeleteObject();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    if (object.object_name !== undefined && object.object_name !== null) {
      message.objectName = object.object_name;
    }
    return message;
  },
  toAmino(message: MsgDeleteObject): MsgDeleteObjectAmino {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteObjectAminoMsg): MsgDeleteObject {
    return MsgDeleteObject.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteObjectProtoMsg): MsgDeleteObject {
    return MsgDeleteObject.decode(message.value);
  },
  toProto(message: MsgDeleteObject): Uint8Array {
    return MsgDeleteObject.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteObject): MsgDeleteObjectProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgDeleteObject",
      value: MsgDeleteObject.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteObjectResponse(): MsgDeleteObjectResponse {
  return {};
}
export const MsgDeleteObjectResponse = {
  typeUrl: "/greenfield.storage.MsgDeleteObjectResponse",
  encode(_: MsgDeleteObjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteObjectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteObjectResponse();
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
  fromJSON(_: any): MsgDeleteObjectResponse {
    return {};
  },
  toJSON(_: MsgDeleteObjectResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteObjectResponse>, I>>(_: I): MsgDeleteObjectResponse {
    const message = createBaseMsgDeleteObjectResponse();
    return message;
  },
  fromSDK(_: MsgDeleteObjectResponseSDKType): MsgDeleteObjectResponse {
    return {};
  },
  toSDK(_: MsgDeleteObjectResponse): MsgDeleteObjectResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgDeleteObjectResponseAmino): MsgDeleteObjectResponse {
    const message = createBaseMsgDeleteObjectResponse();
    return message;
  },
  toAmino(_: MsgDeleteObjectResponse): MsgDeleteObjectResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteObjectResponseAminoMsg): MsgDeleteObjectResponse {
    return MsgDeleteObjectResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteObjectResponseProtoMsg): MsgDeleteObjectResponse {
    return MsgDeleteObjectResponse.decode(message.value);
  },
  toProto(message: MsgDeleteObjectResponse): Uint8Array {
    return MsgDeleteObjectResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteObjectResponse): MsgDeleteObjectResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgDeleteObjectResponse",
      value: MsgDeleteObjectResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDiscontinueObject(): MsgDiscontinueObject {
  return {
    operator: "",
    bucketName: "",
    objectIds: [],
    reason: ""
  };
}
export const MsgDiscontinueObject = {
  typeUrl: "/greenfield.storage.MsgDiscontinueObject",
  encode(message: MsgDiscontinueObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }
    for (const v of message.objectIds) {
      writer.uint32(26).string(v!);
    }
    if (message.reason !== "") {
      writer.uint32(34).string(message.reason);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDiscontinueObject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDiscontinueObject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.bucketName = reader.string();
          break;
        case 3:
          message.objectIds.push(reader.string());
          break;
        case 4:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDiscontinueObject {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      objectIds: Array.isArray(object?.objectIds) ? object.objectIds.map((e: any) => String(e)) : [],
      reason: isSet(object.reason) ? String(object.reason) : ""
    };
  },
  toJSON(message: MsgDiscontinueObject): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    if (message.objectIds) {
      obj.objectIds = message.objectIds.map(e => e);
    } else {
      obj.objectIds = [];
    }
    message.reason !== undefined && (obj.reason = message.reason);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDiscontinueObject>, I>>(object: I): MsgDiscontinueObject {
    const message = createBaseMsgDiscontinueObject();
    message.operator = object.operator ?? "";
    message.bucketName = object.bucketName ?? "";
    message.objectIds = object.objectIds?.map(e => e) || [];
    message.reason = object.reason ?? "";
    return message;
  },
  fromSDK(object: MsgDiscontinueObjectSDKType): MsgDiscontinueObject {
    return {
      operator: object?.operator,
      bucketName: object?.bucket_name,
      objectIds: Array.isArray(object?.object_ids) ? object.object_ids.map((e: any) => e) : [],
      reason: object?.reason
    };
  },
  toSDK(message: MsgDiscontinueObject): MsgDiscontinueObjectSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    if (message.objectIds) {
      obj.object_ids = message.objectIds.map(e => e);
    } else {
      obj.object_ids = [];
    }
    obj.reason = message.reason;
    return obj;
  },
  fromAmino(object: MsgDiscontinueObjectAmino): MsgDiscontinueObject {
    const message = createBaseMsgDiscontinueObject();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    message.objectIds = object.object_ids?.map(e => e) || [];
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: MsgDiscontinueObject): MsgDiscontinueObjectAmino {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    if (message.objectIds) {
      obj.object_ids = message.objectIds.map(e => e);
    } else {
      obj.object_ids = [];
    }
    obj.reason = message.reason;
    return obj;
  },
  fromAminoMsg(object: MsgDiscontinueObjectAminoMsg): MsgDiscontinueObject {
    return MsgDiscontinueObject.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDiscontinueObjectProtoMsg): MsgDiscontinueObject {
    return MsgDiscontinueObject.decode(message.value);
  },
  toProto(message: MsgDiscontinueObject): Uint8Array {
    return MsgDiscontinueObject.encode(message).finish();
  },
  toProtoMsg(message: MsgDiscontinueObject): MsgDiscontinueObjectProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgDiscontinueObject",
      value: MsgDiscontinueObject.encode(message).finish()
    };
  }
};
function createBaseMsgDiscontinueObjectResponse(): MsgDiscontinueObjectResponse {
  return {};
}
export const MsgDiscontinueObjectResponse = {
  typeUrl: "/greenfield.storage.MsgDiscontinueObjectResponse",
  encode(_: MsgDiscontinueObjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDiscontinueObjectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDiscontinueObjectResponse();
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
  fromJSON(_: any): MsgDiscontinueObjectResponse {
    return {};
  },
  toJSON(_: MsgDiscontinueObjectResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDiscontinueObjectResponse>, I>>(_: I): MsgDiscontinueObjectResponse {
    const message = createBaseMsgDiscontinueObjectResponse();
    return message;
  },
  fromSDK(_: MsgDiscontinueObjectResponseSDKType): MsgDiscontinueObjectResponse {
    return {};
  },
  toSDK(_: MsgDiscontinueObjectResponse): MsgDiscontinueObjectResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgDiscontinueObjectResponseAmino): MsgDiscontinueObjectResponse {
    const message = createBaseMsgDiscontinueObjectResponse();
    return message;
  },
  toAmino(_: MsgDiscontinueObjectResponse): MsgDiscontinueObjectResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDiscontinueObjectResponseAminoMsg): MsgDiscontinueObjectResponse {
    return MsgDiscontinueObjectResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDiscontinueObjectResponseProtoMsg): MsgDiscontinueObjectResponse {
    return MsgDiscontinueObjectResponse.decode(message.value);
  },
  toProto(message: MsgDiscontinueObjectResponse): Uint8Array {
    return MsgDiscontinueObjectResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDiscontinueObjectResponse): MsgDiscontinueObjectResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgDiscontinueObjectResponse",
      value: MsgDiscontinueObjectResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateGroup(): MsgCreateGroup {
  return {
    creator: "",
    groupName: "",
    extra: ""
  };
}
export const MsgCreateGroup = {
  typeUrl: "/greenfield.storage.MsgCreateGroup",
  encode(message: MsgCreateGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.groupName !== "") {
      writer.uint32(18).string(message.groupName);
    }
    if (message.extra !== "") {
      writer.uint32(26).string(message.extra);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.groupName = reader.string();
          break;
        case 3:
          message.extra = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateGroup {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      groupName: isSet(object.groupName) ? String(object.groupName) : "",
      extra: isSet(object.extra) ? String(object.extra) : ""
    };
  },
  toJSON(message: MsgCreateGroup): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.groupName !== undefined && (obj.groupName = message.groupName);
    message.extra !== undefined && (obj.extra = message.extra);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateGroup>, I>>(object: I): MsgCreateGroup {
    const message = createBaseMsgCreateGroup();
    message.creator = object.creator ?? "";
    message.groupName = object.groupName ?? "";
    message.extra = object.extra ?? "";
    return message;
  },
  fromSDK(object: MsgCreateGroupSDKType): MsgCreateGroup {
    return {
      creator: object?.creator,
      groupName: object?.group_name,
      extra: object?.extra
    };
  },
  toSDK(message: MsgCreateGroup): MsgCreateGroupSDKType {
    const obj: any = {};
    obj.creator = message.creator;
    obj.group_name = message.groupName;
    obj.extra = message.extra;
    return obj;
  },
  fromAmino(object: MsgCreateGroupAmino): MsgCreateGroup {
    const message = createBaseMsgCreateGroup();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.group_name !== undefined && object.group_name !== null) {
      message.groupName = object.group_name;
    }
    if (object.extra !== undefined && object.extra !== null) {
      message.extra = object.extra;
    }
    return message;
  },
  toAmino(message: MsgCreateGroup): MsgCreateGroupAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.group_name = message.groupName;
    obj.extra = message.extra;
    return obj;
  },
  fromAminoMsg(object: MsgCreateGroupAminoMsg): MsgCreateGroup {
    return MsgCreateGroup.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateGroupProtoMsg): MsgCreateGroup {
    return MsgCreateGroup.decode(message.value);
  },
  toProto(message: MsgCreateGroup): Uint8Array {
    return MsgCreateGroup.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateGroup): MsgCreateGroupProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgCreateGroup",
      value: MsgCreateGroup.encode(message).finish()
    };
  }
};
function createBaseMsgCreateGroupResponse(): MsgCreateGroupResponse {
  return {
    groupId: ""
  };
}
export const MsgCreateGroupResponse = {
  typeUrl: "/greenfield.storage.MsgCreateGroupResponse",
  encode(message: MsgCreateGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupId !== "") {
      writer.uint32(10).string(message.groupId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateGroupResponse {
    return {
      groupId: isSet(object.groupId) ? String(object.groupId) : ""
    };
  },
  toJSON(message: MsgCreateGroupResponse): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = message.groupId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateGroupResponse>, I>>(object: I): MsgCreateGroupResponse {
    const message = createBaseMsgCreateGroupResponse();
    message.groupId = object.groupId ?? "";
    return message;
  },
  fromSDK(object: MsgCreateGroupResponseSDKType): MsgCreateGroupResponse {
    return {
      groupId: object?.group_id
    };
  },
  toSDK(message: MsgCreateGroupResponse): MsgCreateGroupResponseSDKType {
    const obj: any = {};
    obj.group_id = message.groupId;
    return obj;
  },
  fromAmino(object: MsgCreateGroupResponseAmino): MsgCreateGroupResponse {
    const message = createBaseMsgCreateGroupResponse();
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = object.group_id;
    }
    return message;
  },
  toAmino(message: MsgCreateGroupResponse): MsgCreateGroupResponseAmino {
    const obj: any = {};
    obj.group_id = message.groupId;
    return obj;
  },
  fromAminoMsg(object: MsgCreateGroupResponseAminoMsg): MsgCreateGroupResponse {
    return MsgCreateGroupResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateGroupResponseProtoMsg): MsgCreateGroupResponse {
    return MsgCreateGroupResponse.decode(message.value);
  },
  toProto(message: MsgCreateGroupResponse): Uint8Array {
    return MsgCreateGroupResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateGroupResponse): MsgCreateGroupResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgCreateGroupResponse",
      value: MsgCreateGroupResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteGroup(): MsgDeleteGroup {
  return {
    operator: "",
    groupName: ""
  };
}
export const MsgDeleteGroup = {
  typeUrl: "/greenfield.storage.MsgDeleteGroup",
  encode(message: MsgDeleteGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.groupName !== "") {
      writer.uint32(18).string(message.groupName);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.groupName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDeleteGroup {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      groupName: isSet(object.groupName) ? String(object.groupName) : ""
    };
  },
  toJSON(message: MsgDeleteGroup): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.groupName !== undefined && (obj.groupName = message.groupName);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteGroup>, I>>(object: I): MsgDeleteGroup {
    const message = createBaseMsgDeleteGroup();
    message.operator = object.operator ?? "";
    message.groupName = object.groupName ?? "";
    return message;
  },
  fromSDK(object: MsgDeleteGroupSDKType): MsgDeleteGroup {
    return {
      operator: object?.operator,
      groupName: object?.group_name
    };
  },
  toSDK(message: MsgDeleteGroup): MsgDeleteGroupSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.group_name = message.groupName;
    return obj;
  },
  fromAmino(object: MsgDeleteGroupAmino): MsgDeleteGroup {
    const message = createBaseMsgDeleteGroup();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.group_name !== undefined && object.group_name !== null) {
      message.groupName = object.group_name;
    }
    return message;
  },
  toAmino(message: MsgDeleteGroup): MsgDeleteGroupAmino {
    const obj: any = {};
    obj.operator = message.operator;
    obj.group_name = message.groupName;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteGroupAminoMsg): MsgDeleteGroup {
    return MsgDeleteGroup.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteGroupProtoMsg): MsgDeleteGroup {
    return MsgDeleteGroup.decode(message.value);
  },
  toProto(message: MsgDeleteGroup): Uint8Array {
    return MsgDeleteGroup.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteGroup): MsgDeleteGroupProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgDeleteGroup",
      value: MsgDeleteGroup.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteGroupResponse(): MsgDeleteGroupResponse {
  return {};
}
export const MsgDeleteGroupResponse = {
  typeUrl: "/greenfield.storage.MsgDeleteGroupResponse",
  encode(_: MsgDeleteGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteGroupResponse();
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
  fromJSON(_: any): MsgDeleteGroupResponse {
    return {};
  },
  toJSON(_: MsgDeleteGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteGroupResponse>, I>>(_: I): MsgDeleteGroupResponse {
    const message = createBaseMsgDeleteGroupResponse();
    return message;
  },
  fromSDK(_: MsgDeleteGroupResponseSDKType): MsgDeleteGroupResponse {
    return {};
  },
  toSDK(_: MsgDeleteGroupResponse): MsgDeleteGroupResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgDeleteGroupResponseAmino): MsgDeleteGroupResponse {
    const message = createBaseMsgDeleteGroupResponse();
    return message;
  },
  toAmino(_: MsgDeleteGroupResponse): MsgDeleteGroupResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteGroupResponseAminoMsg): MsgDeleteGroupResponse {
    return MsgDeleteGroupResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteGroupResponseProtoMsg): MsgDeleteGroupResponse {
    return MsgDeleteGroupResponse.decode(message.value);
  },
  toProto(message: MsgDeleteGroupResponse): Uint8Array {
    return MsgDeleteGroupResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteGroupResponse): MsgDeleteGroupResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgDeleteGroupResponse",
      value: MsgDeleteGroupResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupMember(): MsgUpdateGroupMember {
  return {
    operator: "",
    groupOwner: "",
    groupName: "",
    membersToAdd: [],
    membersToDelete: []
  };
}
export const MsgUpdateGroupMember = {
  typeUrl: "/greenfield.storage.MsgUpdateGroupMember",
  encode(message: MsgUpdateGroupMember, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.groupOwner !== "") {
      writer.uint32(18).string(message.groupOwner);
    }
    if (message.groupName !== "") {
      writer.uint32(26).string(message.groupName);
    }
    for (const v of message.membersToAdd) {
      MsgGroupMember.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.membersToDelete) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupMember {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.groupOwner = reader.string();
          break;
        case 3:
          message.groupName = reader.string();
          break;
        case 4:
          message.membersToAdd.push(MsgGroupMember.decode(reader, reader.uint32()));
          break;
        case 5:
          message.membersToDelete.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateGroupMember {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      groupOwner: isSet(object.groupOwner) ? String(object.groupOwner) : "",
      groupName: isSet(object.groupName) ? String(object.groupName) : "",
      membersToAdd: Array.isArray(object?.membersToAdd) ? object.membersToAdd.map((e: any) => MsgGroupMember.fromJSON(e)) : [],
      membersToDelete: Array.isArray(object?.membersToDelete) ? object.membersToDelete.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: MsgUpdateGroupMember): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.groupOwner !== undefined && (obj.groupOwner = message.groupOwner);
    message.groupName !== undefined && (obj.groupName = message.groupName);
    if (message.membersToAdd) {
      obj.membersToAdd = message.membersToAdd.map(e => e ? MsgGroupMember.toJSON(e) : undefined);
    } else {
      obj.membersToAdd = [];
    }
    if (message.membersToDelete) {
      obj.membersToDelete = message.membersToDelete.map(e => e);
    } else {
      obj.membersToDelete = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateGroupMember>, I>>(object: I): MsgUpdateGroupMember {
    const message = createBaseMsgUpdateGroupMember();
    message.operator = object.operator ?? "";
    message.groupOwner = object.groupOwner ?? "";
    message.groupName = object.groupName ?? "";
    message.membersToAdd = object.membersToAdd?.map(e => MsgGroupMember.fromPartial(e)) || [];
    message.membersToDelete = object.membersToDelete?.map(e => e) || [];
    return message;
  },
  fromSDK(object: MsgUpdateGroupMemberSDKType): MsgUpdateGroupMember {
    return {
      operator: object?.operator,
      groupOwner: object?.group_owner,
      groupName: object?.group_name,
      membersToAdd: Array.isArray(object?.members_to_add) ? object.members_to_add.map((e: any) => MsgGroupMember.fromSDK(e)) : [],
      membersToDelete: Array.isArray(object?.members_to_delete) ? object.members_to_delete.map((e: any) => e) : []
    };
  },
  toSDK(message: MsgUpdateGroupMember): MsgUpdateGroupMemberSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.group_owner = message.groupOwner;
    obj.group_name = message.groupName;
    if (message.membersToAdd) {
      obj.members_to_add = message.membersToAdd.map(e => e ? MsgGroupMember.toSDK(e) : undefined);
    } else {
      obj.members_to_add = [];
    }
    if (message.membersToDelete) {
      obj.members_to_delete = message.membersToDelete.map(e => e);
    } else {
      obj.members_to_delete = [];
    }
    return obj;
  },
  fromAmino(object: MsgUpdateGroupMemberAmino): MsgUpdateGroupMember {
    const message = createBaseMsgUpdateGroupMember();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.group_owner !== undefined && object.group_owner !== null) {
      message.groupOwner = object.group_owner;
    }
    if (object.group_name !== undefined && object.group_name !== null) {
      message.groupName = object.group_name;
    }
    message.membersToAdd = object.members_to_add?.map(e => MsgGroupMember.fromAmino(e)) || [];
    message.membersToDelete = object.members_to_delete?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgUpdateGroupMember): MsgUpdateGroupMemberAmino {
    const obj: any = {};
    obj.operator = message.operator;
    obj.group_owner = message.groupOwner;
    obj.group_name = message.groupName;
    if (message.membersToAdd) {
      obj.members_to_add = message.membersToAdd.map(e => e ? MsgGroupMember.toAmino(e) : undefined);
    } else {
      obj.members_to_add = [];
    }
    if (message.membersToDelete) {
      obj.members_to_delete = message.membersToDelete.map(e => e);
    } else {
      obj.members_to_delete = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupMemberAminoMsg): MsgUpdateGroupMember {
    return MsgUpdateGroupMember.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateGroupMemberProtoMsg): MsgUpdateGroupMember {
    return MsgUpdateGroupMember.decode(message.value);
  },
  toProto(message: MsgUpdateGroupMember): Uint8Array {
    return MsgUpdateGroupMember.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupMember): MsgUpdateGroupMemberProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgUpdateGroupMember",
      value: MsgUpdateGroupMember.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupMemberResponse(): MsgUpdateGroupMemberResponse {
  return {};
}
export const MsgUpdateGroupMemberResponse = {
  typeUrl: "/greenfield.storage.MsgUpdateGroupMemberResponse",
  encode(_: MsgUpdateGroupMemberResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupMemberResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupMemberResponse();
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
  fromJSON(_: any): MsgUpdateGroupMemberResponse {
    return {};
  },
  toJSON(_: MsgUpdateGroupMemberResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateGroupMemberResponse>, I>>(_: I): MsgUpdateGroupMemberResponse {
    const message = createBaseMsgUpdateGroupMemberResponse();
    return message;
  },
  fromSDK(_: MsgUpdateGroupMemberResponseSDKType): MsgUpdateGroupMemberResponse {
    return {};
  },
  toSDK(_: MsgUpdateGroupMemberResponse): MsgUpdateGroupMemberResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgUpdateGroupMemberResponseAmino): MsgUpdateGroupMemberResponse {
    const message = createBaseMsgUpdateGroupMemberResponse();
    return message;
  },
  toAmino(_: MsgUpdateGroupMemberResponse): MsgUpdateGroupMemberResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupMemberResponseAminoMsg): MsgUpdateGroupMemberResponse {
    return MsgUpdateGroupMemberResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateGroupMemberResponseProtoMsg): MsgUpdateGroupMemberResponse {
    return MsgUpdateGroupMemberResponse.decode(message.value);
  },
  toProto(message: MsgUpdateGroupMemberResponse): Uint8Array {
    return MsgUpdateGroupMemberResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupMemberResponse): MsgUpdateGroupMemberResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgUpdateGroupMemberResponse",
      value: MsgUpdateGroupMemberResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRenewGroupMember(): MsgRenewGroupMember {
  return {
    operator: "",
    groupOwner: "",
    groupName: "",
    members: []
  };
}
export const MsgRenewGroupMember = {
  typeUrl: "/greenfield.storage.MsgRenewGroupMember",
  encode(message: MsgRenewGroupMember, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.groupOwner !== "") {
      writer.uint32(18).string(message.groupOwner);
    }
    if (message.groupName !== "") {
      writer.uint32(26).string(message.groupName);
    }
    for (const v of message.members) {
      MsgGroupMember.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRenewGroupMember {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRenewGroupMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.groupOwner = reader.string();
          break;
        case 3:
          message.groupName = reader.string();
          break;
        case 4:
          message.members.push(MsgGroupMember.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRenewGroupMember {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      groupOwner: isSet(object.groupOwner) ? String(object.groupOwner) : "",
      groupName: isSet(object.groupName) ? String(object.groupName) : "",
      members: Array.isArray(object?.members) ? object.members.map((e: any) => MsgGroupMember.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgRenewGroupMember): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.groupOwner !== undefined && (obj.groupOwner = message.groupOwner);
    message.groupName !== undefined && (obj.groupName = message.groupName);
    if (message.members) {
      obj.members = message.members.map(e => e ? MsgGroupMember.toJSON(e) : undefined);
    } else {
      obj.members = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRenewGroupMember>, I>>(object: I): MsgRenewGroupMember {
    const message = createBaseMsgRenewGroupMember();
    message.operator = object.operator ?? "";
    message.groupOwner = object.groupOwner ?? "";
    message.groupName = object.groupName ?? "";
    message.members = object.members?.map(e => MsgGroupMember.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgRenewGroupMemberSDKType): MsgRenewGroupMember {
    return {
      operator: object?.operator,
      groupOwner: object?.group_owner,
      groupName: object?.group_name,
      members: Array.isArray(object?.members) ? object.members.map((e: any) => MsgGroupMember.fromSDK(e)) : []
    };
  },
  toSDK(message: MsgRenewGroupMember): MsgRenewGroupMemberSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.group_owner = message.groupOwner;
    obj.group_name = message.groupName;
    if (message.members) {
      obj.members = message.members.map(e => e ? MsgGroupMember.toSDK(e) : undefined);
    } else {
      obj.members = [];
    }
    return obj;
  },
  fromAmino(object: MsgRenewGroupMemberAmino): MsgRenewGroupMember {
    const message = createBaseMsgRenewGroupMember();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.group_owner !== undefined && object.group_owner !== null) {
      message.groupOwner = object.group_owner;
    }
    if (object.group_name !== undefined && object.group_name !== null) {
      message.groupName = object.group_name;
    }
    message.members = object.members?.map(e => MsgGroupMember.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgRenewGroupMember): MsgRenewGroupMemberAmino {
    const obj: any = {};
    obj.operator = message.operator;
    obj.group_owner = message.groupOwner;
    obj.group_name = message.groupName;
    if (message.members) {
      obj.members = message.members.map(e => e ? MsgGroupMember.toAmino(e) : undefined);
    } else {
      obj.members = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgRenewGroupMemberAminoMsg): MsgRenewGroupMember {
    return MsgRenewGroupMember.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRenewGroupMemberProtoMsg): MsgRenewGroupMember {
    return MsgRenewGroupMember.decode(message.value);
  },
  toProto(message: MsgRenewGroupMember): Uint8Array {
    return MsgRenewGroupMember.encode(message).finish();
  },
  toProtoMsg(message: MsgRenewGroupMember): MsgRenewGroupMemberProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgRenewGroupMember",
      value: MsgRenewGroupMember.encode(message).finish()
    };
  }
};
function createBaseMsgRenewGroupMemberResponse(): MsgRenewGroupMemberResponse {
  return {};
}
export const MsgRenewGroupMemberResponse = {
  typeUrl: "/greenfield.storage.MsgRenewGroupMemberResponse",
  encode(_: MsgRenewGroupMemberResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRenewGroupMemberResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRenewGroupMemberResponse();
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
  fromJSON(_: any): MsgRenewGroupMemberResponse {
    return {};
  },
  toJSON(_: MsgRenewGroupMemberResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRenewGroupMemberResponse>, I>>(_: I): MsgRenewGroupMemberResponse {
    const message = createBaseMsgRenewGroupMemberResponse();
    return message;
  },
  fromSDK(_: MsgRenewGroupMemberResponseSDKType): MsgRenewGroupMemberResponse {
    return {};
  },
  toSDK(_: MsgRenewGroupMemberResponse): MsgRenewGroupMemberResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgRenewGroupMemberResponseAmino): MsgRenewGroupMemberResponse {
    const message = createBaseMsgRenewGroupMemberResponse();
    return message;
  },
  toAmino(_: MsgRenewGroupMemberResponse): MsgRenewGroupMemberResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRenewGroupMemberResponseAminoMsg): MsgRenewGroupMemberResponse {
    return MsgRenewGroupMemberResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRenewGroupMemberResponseProtoMsg): MsgRenewGroupMemberResponse {
    return MsgRenewGroupMemberResponse.decode(message.value);
  },
  toProto(message: MsgRenewGroupMemberResponse): Uint8Array {
    return MsgRenewGroupMemberResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRenewGroupMemberResponse): MsgRenewGroupMemberResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgRenewGroupMemberResponse",
      value: MsgRenewGroupMemberResponse.encode(message).finish()
    };
  }
};
function createBaseMsgGroupMember(): MsgGroupMember {
  return {
    member: "",
    expirationTime: undefined
  };
}
export const MsgGroupMember = {
  typeUrl: "/greenfield.storage.MsgGroupMember",
  encode(message: MsgGroupMember, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.member !== "") {
      writer.uint32(10).string(message.member);
    }
    if (message.expirationTime !== undefined) {
      Timestamp.encode(message.expirationTime, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGroupMember {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGroupMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.member = reader.string();
          break;
        case 2:
          message.expirationTime = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgGroupMember {
    return {
      member: isSet(object.member) ? String(object.member) : "",
      expirationTime: isSet(object.expirationTime) ? fromJsonTimestamp(object.expirationTime) : undefined
    };
  },
  toJSON(message: MsgGroupMember): unknown {
    const obj: any = {};
    message.member !== undefined && (obj.member = message.member);
    message.expirationTime !== undefined && (obj.expirationTime = fromTimestamp(message.expirationTime).toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgGroupMember>, I>>(object: I): MsgGroupMember {
    const message = createBaseMsgGroupMember();
    message.member = object.member ?? "";
    message.expirationTime = object.expirationTime !== undefined && object.expirationTime !== null ? Timestamp.fromPartial(object.expirationTime) : undefined;
    return message;
  },
  fromSDK(object: MsgGroupMemberSDKType): MsgGroupMember {
    return {
      member: object?.member,
      expirationTime: object.expiration_time ? Timestamp.fromSDK(object.expiration_time) : undefined
    };
  },
  toSDK(message: MsgGroupMember): MsgGroupMemberSDKType {
    const obj: any = {};
    obj.member = message.member;
    message.expirationTime !== undefined && (obj.expiration_time = message.expirationTime ? Timestamp.toSDK(message.expirationTime) : undefined);
    return obj;
  },
  fromAmino(object: MsgGroupMemberAmino): MsgGroupMember {
    const message = createBaseMsgGroupMember();
    if (object.member !== undefined && object.member !== null) {
      message.member = object.member;
    }
    if (object.expiration_time !== undefined && object.expiration_time !== null) {
      message.expirationTime = Timestamp.fromAmino(object.expiration_time);
    }
    return message;
  },
  toAmino(message: MsgGroupMember): MsgGroupMemberAmino {
    const obj: any = {};
    obj.member = message.member;
    obj.expiration_time = message.expirationTime ? Timestamp.toAmino(message.expirationTime) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgGroupMemberAminoMsg): MsgGroupMember {
    return MsgGroupMember.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGroupMemberProtoMsg): MsgGroupMember {
    return MsgGroupMember.decode(message.value);
  },
  toProto(message: MsgGroupMember): Uint8Array {
    return MsgGroupMember.encode(message).finish();
  },
  toProtoMsg(message: MsgGroupMember): MsgGroupMemberProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgGroupMember",
      value: MsgGroupMember.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupExtra(): MsgUpdateGroupExtra {
  return {
    operator: "",
    groupOwner: "",
    groupName: "",
    extra: ""
  };
}
export const MsgUpdateGroupExtra = {
  typeUrl: "/greenfield.storage.MsgUpdateGroupExtra",
  encode(message: MsgUpdateGroupExtra, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.groupOwner !== "") {
      writer.uint32(18).string(message.groupOwner);
    }
    if (message.groupName !== "") {
      writer.uint32(26).string(message.groupName);
    }
    if (message.extra !== "") {
      writer.uint32(34).string(message.extra);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupExtra {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupExtra();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.groupOwner = reader.string();
          break;
        case 3:
          message.groupName = reader.string();
          break;
        case 4:
          message.extra = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateGroupExtra {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      groupOwner: isSet(object.groupOwner) ? String(object.groupOwner) : "",
      groupName: isSet(object.groupName) ? String(object.groupName) : "",
      extra: isSet(object.extra) ? String(object.extra) : ""
    };
  },
  toJSON(message: MsgUpdateGroupExtra): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.groupOwner !== undefined && (obj.groupOwner = message.groupOwner);
    message.groupName !== undefined && (obj.groupName = message.groupName);
    message.extra !== undefined && (obj.extra = message.extra);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateGroupExtra>, I>>(object: I): MsgUpdateGroupExtra {
    const message = createBaseMsgUpdateGroupExtra();
    message.operator = object.operator ?? "";
    message.groupOwner = object.groupOwner ?? "";
    message.groupName = object.groupName ?? "";
    message.extra = object.extra ?? "";
    return message;
  },
  fromSDK(object: MsgUpdateGroupExtraSDKType): MsgUpdateGroupExtra {
    return {
      operator: object?.operator,
      groupOwner: object?.group_owner,
      groupName: object?.group_name,
      extra: object?.extra
    };
  },
  toSDK(message: MsgUpdateGroupExtra): MsgUpdateGroupExtraSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.group_owner = message.groupOwner;
    obj.group_name = message.groupName;
    obj.extra = message.extra;
    return obj;
  },
  fromAmino(object: MsgUpdateGroupExtraAmino): MsgUpdateGroupExtra {
    const message = createBaseMsgUpdateGroupExtra();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.group_owner !== undefined && object.group_owner !== null) {
      message.groupOwner = object.group_owner;
    }
    if (object.group_name !== undefined && object.group_name !== null) {
      message.groupName = object.group_name;
    }
    if (object.extra !== undefined && object.extra !== null) {
      message.extra = object.extra;
    }
    return message;
  },
  toAmino(message: MsgUpdateGroupExtra): MsgUpdateGroupExtraAmino {
    const obj: any = {};
    obj.operator = message.operator;
    obj.group_owner = message.groupOwner;
    obj.group_name = message.groupName;
    obj.extra = message.extra;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupExtraAminoMsg): MsgUpdateGroupExtra {
    return MsgUpdateGroupExtra.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateGroupExtraProtoMsg): MsgUpdateGroupExtra {
    return MsgUpdateGroupExtra.decode(message.value);
  },
  toProto(message: MsgUpdateGroupExtra): Uint8Array {
    return MsgUpdateGroupExtra.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupExtra): MsgUpdateGroupExtraProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgUpdateGroupExtra",
      value: MsgUpdateGroupExtra.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupExtraResponse(): MsgUpdateGroupExtraResponse {
  return {};
}
export const MsgUpdateGroupExtraResponse = {
  typeUrl: "/greenfield.storage.MsgUpdateGroupExtraResponse",
  encode(_: MsgUpdateGroupExtraResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupExtraResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupExtraResponse();
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
  fromJSON(_: any): MsgUpdateGroupExtraResponse {
    return {};
  },
  toJSON(_: MsgUpdateGroupExtraResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateGroupExtraResponse>, I>>(_: I): MsgUpdateGroupExtraResponse {
    const message = createBaseMsgUpdateGroupExtraResponse();
    return message;
  },
  fromSDK(_: MsgUpdateGroupExtraResponseSDKType): MsgUpdateGroupExtraResponse {
    return {};
  },
  toSDK(_: MsgUpdateGroupExtraResponse): MsgUpdateGroupExtraResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgUpdateGroupExtraResponseAmino): MsgUpdateGroupExtraResponse {
    const message = createBaseMsgUpdateGroupExtraResponse();
    return message;
  },
  toAmino(_: MsgUpdateGroupExtraResponse): MsgUpdateGroupExtraResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupExtraResponseAminoMsg): MsgUpdateGroupExtraResponse {
    return MsgUpdateGroupExtraResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateGroupExtraResponseProtoMsg): MsgUpdateGroupExtraResponse {
    return MsgUpdateGroupExtraResponse.decode(message.value);
  },
  toProto(message: MsgUpdateGroupExtraResponse): Uint8Array {
    return MsgUpdateGroupExtraResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupExtraResponse): MsgUpdateGroupExtraResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgUpdateGroupExtraResponse",
      value: MsgUpdateGroupExtraResponse.encode(message).finish()
    };
  }
};
function createBaseMsgLeaveGroup(): MsgLeaveGroup {
  return {
    member: "",
    groupOwner: "",
    groupName: ""
  };
}
export const MsgLeaveGroup = {
  typeUrl: "/greenfield.storage.MsgLeaveGroup",
  encode(message: MsgLeaveGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.member !== "") {
      writer.uint32(10).string(message.member);
    }
    if (message.groupOwner !== "") {
      writer.uint32(18).string(message.groupOwner);
    }
    if (message.groupName !== "") {
      writer.uint32(26).string(message.groupName);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLeaveGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLeaveGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.member = reader.string();
          break;
        case 2:
          message.groupOwner = reader.string();
          break;
        case 3:
          message.groupName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgLeaveGroup {
    return {
      member: isSet(object.member) ? String(object.member) : "",
      groupOwner: isSet(object.groupOwner) ? String(object.groupOwner) : "",
      groupName: isSet(object.groupName) ? String(object.groupName) : ""
    };
  },
  toJSON(message: MsgLeaveGroup): unknown {
    const obj: any = {};
    message.member !== undefined && (obj.member = message.member);
    message.groupOwner !== undefined && (obj.groupOwner = message.groupOwner);
    message.groupName !== undefined && (obj.groupName = message.groupName);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgLeaveGroup>, I>>(object: I): MsgLeaveGroup {
    const message = createBaseMsgLeaveGroup();
    message.member = object.member ?? "";
    message.groupOwner = object.groupOwner ?? "";
    message.groupName = object.groupName ?? "";
    return message;
  },
  fromSDK(object: MsgLeaveGroupSDKType): MsgLeaveGroup {
    return {
      member: object?.member,
      groupOwner: object?.group_owner,
      groupName: object?.group_name
    };
  },
  toSDK(message: MsgLeaveGroup): MsgLeaveGroupSDKType {
    const obj: any = {};
    obj.member = message.member;
    obj.group_owner = message.groupOwner;
    obj.group_name = message.groupName;
    return obj;
  },
  fromAmino(object: MsgLeaveGroupAmino): MsgLeaveGroup {
    const message = createBaseMsgLeaveGroup();
    if (object.member !== undefined && object.member !== null) {
      message.member = object.member;
    }
    if (object.group_owner !== undefined && object.group_owner !== null) {
      message.groupOwner = object.group_owner;
    }
    if (object.group_name !== undefined && object.group_name !== null) {
      message.groupName = object.group_name;
    }
    return message;
  },
  toAmino(message: MsgLeaveGroup): MsgLeaveGroupAmino {
    const obj: any = {};
    obj.member = message.member;
    obj.group_owner = message.groupOwner;
    obj.group_name = message.groupName;
    return obj;
  },
  fromAminoMsg(object: MsgLeaveGroupAminoMsg): MsgLeaveGroup {
    return MsgLeaveGroup.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgLeaveGroupProtoMsg): MsgLeaveGroup {
    return MsgLeaveGroup.decode(message.value);
  },
  toProto(message: MsgLeaveGroup): Uint8Array {
    return MsgLeaveGroup.encode(message).finish();
  },
  toProtoMsg(message: MsgLeaveGroup): MsgLeaveGroupProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgLeaveGroup",
      value: MsgLeaveGroup.encode(message).finish()
    };
  }
};
function createBaseMsgLeaveGroupResponse(): MsgLeaveGroupResponse {
  return {};
}
export const MsgLeaveGroupResponse = {
  typeUrl: "/greenfield.storage.MsgLeaveGroupResponse",
  encode(_: MsgLeaveGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLeaveGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLeaveGroupResponse();
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
  fromJSON(_: any): MsgLeaveGroupResponse {
    return {};
  },
  toJSON(_: MsgLeaveGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgLeaveGroupResponse>, I>>(_: I): MsgLeaveGroupResponse {
    const message = createBaseMsgLeaveGroupResponse();
    return message;
  },
  fromSDK(_: MsgLeaveGroupResponseSDKType): MsgLeaveGroupResponse {
    return {};
  },
  toSDK(_: MsgLeaveGroupResponse): MsgLeaveGroupResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgLeaveGroupResponseAmino): MsgLeaveGroupResponse {
    const message = createBaseMsgLeaveGroupResponse();
    return message;
  },
  toAmino(_: MsgLeaveGroupResponse): MsgLeaveGroupResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgLeaveGroupResponseAminoMsg): MsgLeaveGroupResponse {
    return MsgLeaveGroupResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgLeaveGroupResponseProtoMsg): MsgLeaveGroupResponse {
    return MsgLeaveGroupResponse.decode(message.value);
  },
  toProto(message: MsgLeaveGroupResponse): Uint8Array {
    return MsgLeaveGroupResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgLeaveGroupResponse): MsgLeaveGroupResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgLeaveGroupResponse",
      value: MsgLeaveGroupResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateBucketInfo(): MsgUpdateBucketInfo {
  return {
    operator: "",
    bucketName: "",
    chargedReadQuota: undefined,
    paymentAddress: "",
    visibility: 0
  };
}
export const MsgUpdateBucketInfo = {
  typeUrl: "/greenfield.storage.MsgUpdateBucketInfo",
  encode(message: MsgUpdateBucketInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }
    if (message.chargedReadQuota !== undefined) {
      UInt64Value.encode(message.chargedReadQuota, writer.uint32(26).fork()).ldelim();
    }
    if (message.paymentAddress !== "") {
      writer.uint32(34).string(message.paymentAddress);
    }
    if (message.visibility !== 0) {
      writer.uint32(40).int32(message.visibility);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateBucketInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateBucketInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.bucketName = reader.string();
          break;
        case 3:
          message.chargedReadQuota = UInt64Value.decode(reader, reader.uint32());
          break;
        case 4:
          message.paymentAddress = reader.string();
          break;
        case 5:
          message.visibility = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateBucketInfo {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      chargedReadQuota: isSet(object.chargedReadQuota) ? UInt64Value.fromJSON(object.chargedReadQuota) : undefined,
      paymentAddress: isSet(object.paymentAddress) ? String(object.paymentAddress) : "",
      visibility: isSet(object.visibility) ? visibilityTypeFromJSON(object.visibility) : -1
    };
  },
  toJSON(message: MsgUpdateBucketInfo): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.chargedReadQuota !== undefined && (obj.chargedReadQuota = message.chargedReadQuota ? UInt64Value.toJSON(message.chargedReadQuota) : undefined);
    message.paymentAddress !== undefined && (obj.paymentAddress = message.paymentAddress);
    message.visibility !== undefined && (obj.visibility = visibilityTypeToJSON(message.visibility));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateBucketInfo>, I>>(object: I): MsgUpdateBucketInfo {
    const message = createBaseMsgUpdateBucketInfo();
    message.operator = object.operator ?? "";
    message.bucketName = object.bucketName ?? "";
    message.chargedReadQuota = object.chargedReadQuota !== undefined && object.chargedReadQuota !== null ? UInt64Value.fromPartial(object.chargedReadQuota) : undefined;
    message.paymentAddress = object.paymentAddress ?? "";
    message.visibility = object.visibility ?? 0;
    return message;
  },
  fromSDK(object: MsgUpdateBucketInfoSDKType): MsgUpdateBucketInfo {
    return {
      operator: object?.operator,
      bucketName: object?.bucket_name,
      chargedReadQuota: object.charged_read_quota ? UInt64Value.fromSDK(object.charged_read_quota) : undefined,
      paymentAddress: object?.payment_address,
      visibility: isSet(object.visibility) ? visibilityTypeFromJSON(object.visibility) : -1
    };
  },
  toSDK(message: MsgUpdateBucketInfo): MsgUpdateBucketInfoSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    message.chargedReadQuota !== undefined && (obj.charged_read_quota = message.chargedReadQuota ? UInt64Value.toSDK(message.chargedReadQuota) : undefined);
    obj.payment_address = message.paymentAddress;
    message.visibility !== undefined && (obj.visibility = visibilityTypeToJSON(message.visibility));
    return obj;
  },
  fromAmino(object: MsgUpdateBucketInfoAmino): MsgUpdateBucketInfo {
    const message = createBaseMsgUpdateBucketInfo();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    if (object.charged_read_quota !== undefined && object.charged_read_quota !== null) {
      message.chargedReadQuota = UInt64Value.fromAmino(object.charged_read_quota);
    }
    if (object.payment_address !== undefined && object.payment_address !== null) {
      message.paymentAddress = object.payment_address;
    }
    if (object.visibility !== undefined && object.visibility !== null) {
      message.visibility = visibilityTypeFromJSON(object.visibility);
    }
    return message;
  },
  toAmino(message: MsgUpdateBucketInfo): MsgUpdateBucketInfoAmino {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.charged_read_quota = message.chargedReadQuota ? UInt64Value.toAmino(message.chargedReadQuota) : undefined;
    obj.payment_address = message.paymentAddress;
    obj.visibility = visibilityTypeToJSON(message.visibility);
    return obj;
  },
  fromAminoMsg(object: MsgUpdateBucketInfoAminoMsg): MsgUpdateBucketInfo {
    return MsgUpdateBucketInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateBucketInfoProtoMsg): MsgUpdateBucketInfo {
    return MsgUpdateBucketInfo.decode(message.value);
  },
  toProto(message: MsgUpdateBucketInfo): Uint8Array {
    return MsgUpdateBucketInfo.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateBucketInfo): MsgUpdateBucketInfoProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgUpdateBucketInfo",
      value: MsgUpdateBucketInfo.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateBucketInfoResponse(): MsgUpdateBucketInfoResponse {
  return {};
}
export const MsgUpdateBucketInfoResponse = {
  typeUrl: "/greenfield.storage.MsgUpdateBucketInfoResponse",
  encode(_: MsgUpdateBucketInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateBucketInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateBucketInfoResponse();
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
  fromJSON(_: any): MsgUpdateBucketInfoResponse {
    return {};
  },
  toJSON(_: MsgUpdateBucketInfoResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateBucketInfoResponse>, I>>(_: I): MsgUpdateBucketInfoResponse {
    const message = createBaseMsgUpdateBucketInfoResponse();
    return message;
  },
  fromSDK(_: MsgUpdateBucketInfoResponseSDKType): MsgUpdateBucketInfoResponse {
    return {};
  },
  toSDK(_: MsgUpdateBucketInfoResponse): MsgUpdateBucketInfoResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgUpdateBucketInfoResponseAmino): MsgUpdateBucketInfoResponse {
    const message = createBaseMsgUpdateBucketInfoResponse();
    return message;
  },
  toAmino(_: MsgUpdateBucketInfoResponse): MsgUpdateBucketInfoResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateBucketInfoResponseAminoMsg): MsgUpdateBucketInfoResponse {
    return MsgUpdateBucketInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateBucketInfoResponseProtoMsg): MsgUpdateBucketInfoResponse {
    return MsgUpdateBucketInfoResponse.decode(message.value);
  },
  toProto(message: MsgUpdateBucketInfoResponse): Uint8Array {
    return MsgUpdateBucketInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateBucketInfoResponse): MsgUpdateBucketInfoResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgUpdateBucketInfoResponse",
      value: MsgUpdateBucketInfoResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCancelCreateObject(): MsgCancelCreateObject {
  return {
    operator: "",
    bucketName: "",
    objectName: ""
  };
}
export const MsgCancelCreateObject = {
  typeUrl: "/greenfield.storage.MsgCancelCreateObject",
  encode(message: MsgCancelCreateObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }
    if (message.objectName !== "") {
      writer.uint32(26).string(message.objectName);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelCreateObject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelCreateObject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.bucketName = reader.string();
          break;
        case 3:
          message.objectName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCancelCreateObject {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      objectName: isSet(object.objectName) ? String(object.objectName) : ""
    };
  },
  toJSON(message: MsgCancelCreateObject): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.objectName !== undefined && (obj.objectName = message.objectName);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCancelCreateObject>, I>>(object: I): MsgCancelCreateObject {
    const message = createBaseMsgCancelCreateObject();
    message.operator = object.operator ?? "";
    message.bucketName = object.bucketName ?? "";
    message.objectName = object.objectName ?? "";
    return message;
  },
  fromSDK(object: MsgCancelCreateObjectSDKType): MsgCancelCreateObject {
    return {
      operator: object?.operator,
      bucketName: object?.bucket_name,
      objectName: object?.object_name
    };
  },
  toSDK(message: MsgCancelCreateObject): MsgCancelCreateObjectSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    return obj;
  },
  fromAmino(object: MsgCancelCreateObjectAmino): MsgCancelCreateObject {
    const message = createBaseMsgCancelCreateObject();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    if (object.object_name !== undefined && object.object_name !== null) {
      message.objectName = object.object_name;
    }
    return message;
  },
  toAmino(message: MsgCancelCreateObject): MsgCancelCreateObjectAmino {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    return obj;
  },
  fromAminoMsg(object: MsgCancelCreateObjectAminoMsg): MsgCancelCreateObject {
    return MsgCancelCreateObject.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelCreateObjectProtoMsg): MsgCancelCreateObject {
    return MsgCancelCreateObject.decode(message.value);
  },
  toProto(message: MsgCancelCreateObject): Uint8Array {
    return MsgCancelCreateObject.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelCreateObject): MsgCancelCreateObjectProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgCancelCreateObject",
      value: MsgCancelCreateObject.encode(message).finish()
    };
  }
};
function createBaseMsgCancelCreateObjectResponse(): MsgCancelCreateObjectResponse {
  return {};
}
export const MsgCancelCreateObjectResponse = {
  typeUrl: "/greenfield.storage.MsgCancelCreateObjectResponse",
  encode(_: MsgCancelCreateObjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelCreateObjectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelCreateObjectResponse();
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
  fromJSON(_: any): MsgCancelCreateObjectResponse {
    return {};
  },
  toJSON(_: MsgCancelCreateObjectResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCancelCreateObjectResponse>, I>>(_: I): MsgCancelCreateObjectResponse {
    const message = createBaseMsgCancelCreateObjectResponse();
    return message;
  },
  fromSDK(_: MsgCancelCreateObjectResponseSDKType): MsgCancelCreateObjectResponse {
    return {};
  },
  toSDK(_: MsgCancelCreateObjectResponse): MsgCancelCreateObjectResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgCancelCreateObjectResponseAmino): MsgCancelCreateObjectResponse {
    const message = createBaseMsgCancelCreateObjectResponse();
    return message;
  },
  toAmino(_: MsgCancelCreateObjectResponse): MsgCancelCreateObjectResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelCreateObjectResponseAminoMsg): MsgCancelCreateObjectResponse {
    return MsgCancelCreateObjectResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelCreateObjectResponseProtoMsg): MsgCancelCreateObjectResponse {
    return MsgCancelCreateObjectResponse.decode(message.value);
  },
  toProto(message: MsgCancelCreateObjectResponse): Uint8Array {
    return MsgCancelCreateObjectResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelCreateObjectResponse): MsgCancelCreateObjectResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgCancelCreateObjectResponse",
      value: MsgCancelCreateObjectResponse.encode(message).finish()
    };
  }
};
function createBaseMsgPutPolicy(): MsgPutPolicy {
  return {
    operator: "",
    principal: undefined,
    resource: "",
    statements: [],
    expirationTime: undefined
  };
}
export const MsgPutPolicy = {
  typeUrl: "/greenfield.storage.MsgPutPolicy",
  encode(message: MsgPutPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.principal !== undefined) {
      Principal.encode(message.principal, writer.uint32(18).fork()).ldelim();
    }
    if (message.resource !== "") {
      writer.uint32(26).string(message.resource);
    }
    for (const v of message.statements) {
      Statement.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.expirationTime !== undefined) {
      Timestamp.encode(message.expirationTime, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPutPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPutPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.principal = Principal.decode(reader, reader.uint32());
          break;
        case 3:
          message.resource = reader.string();
          break;
        case 4:
          message.statements.push(Statement.decode(reader, reader.uint32()));
          break;
        case 7:
          message.expirationTime = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgPutPolicy {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      principal: isSet(object.principal) ? Principal.fromJSON(object.principal) : undefined,
      resource: isSet(object.resource) ? String(object.resource) : "",
      statements: Array.isArray(object?.statements) ? object.statements.map((e: any) => Statement.fromJSON(e)) : [],
      expirationTime: isSet(object.expirationTime) ? fromJsonTimestamp(object.expirationTime) : undefined
    };
  },
  toJSON(message: MsgPutPolicy): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.principal !== undefined && (obj.principal = message.principal ? Principal.toJSON(message.principal) : undefined);
    message.resource !== undefined && (obj.resource = message.resource);
    if (message.statements) {
      obj.statements = message.statements.map(e => e ? Statement.toJSON(e) : undefined);
    } else {
      obj.statements = [];
    }
    message.expirationTime !== undefined && (obj.expirationTime = fromTimestamp(message.expirationTime).toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgPutPolicy>, I>>(object: I): MsgPutPolicy {
    const message = createBaseMsgPutPolicy();
    message.operator = object.operator ?? "";
    message.principal = object.principal !== undefined && object.principal !== null ? Principal.fromPartial(object.principal) : undefined;
    message.resource = object.resource ?? "";
    message.statements = object.statements?.map(e => Statement.fromPartial(e)) || [];
    message.expirationTime = object.expirationTime !== undefined && object.expirationTime !== null ? Timestamp.fromPartial(object.expirationTime) : undefined;
    return message;
  },
  fromSDK(object: MsgPutPolicySDKType): MsgPutPolicy {
    return {
      operator: object?.operator,
      principal: object.principal ? Principal.fromSDK(object.principal) : undefined,
      resource: object?.resource,
      statements: Array.isArray(object?.statements) ? object.statements.map((e: any) => Statement.fromSDK(e)) : [],
      expirationTime: object.expiration_time ? Timestamp.fromSDK(object.expiration_time) : undefined
    };
  },
  toSDK(message: MsgPutPolicy): MsgPutPolicySDKType {
    const obj: any = {};
    obj.operator = message.operator;
    message.principal !== undefined && (obj.principal = message.principal ? Principal.toSDK(message.principal) : undefined);
    obj.resource = message.resource;
    if (message.statements) {
      obj.statements = message.statements.map(e => e ? Statement.toSDK(e) : undefined);
    } else {
      obj.statements = [];
    }
    message.expirationTime !== undefined && (obj.expiration_time = message.expirationTime ? Timestamp.toSDK(message.expirationTime) : undefined);
    return obj;
  },
  fromAmino(object: MsgPutPolicyAmino): MsgPutPolicy {
    const message = createBaseMsgPutPolicy();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.principal !== undefined && object.principal !== null) {
      message.principal = Principal.fromAmino(object.principal);
    }
    if (object.resource !== undefined && object.resource !== null) {
      message.resource = object.resource;
    }
    message.statements = object.statements?.map(e => Statement.fromAmino(e)) || [];
    if (object.expiration_time !== undefined && object.expiration_time !== null) {
      message.expirationTime = Timestamp.fromAmino(object.expiration_time);
    }
    return message;
  },
  toAmino(message: MsgPutPolicy): MsgPutPolicyAmino {
    const obj: any = {};
    obj.operator = message.operator;
    obj.principal = message.principal ? Principal.toAmino(message.principal) : undefined;
    obj.resource = message.resource;
    if (message.statements) {
      obj.statements = message.statements.map(e => e ? Statement.toAmino(e) : undefined);
    } else {
      obj.statements = [];
    }
    obj.expiration_time = message.expirationTime ? Timestamp.toAmino(message.expirationTime) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgPutPolicyAminoMsg): MsgPutPolicy {
    return MsgPutPolicy.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPutPolicyProtoMsg): MsgPutPolicy {
    return MsgPutPolicy.decode(message.value);
  },
  toProto(message: MsgPutPolicy): Uint8Array {
    return MsgPutPolicy.encode(message).finish();
  },
  toProtoMsg(message: MsgPutPolicy): MsgPutPolicyProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgPutPolicy",
      value: MsgPutPolicy.encode(message).finish()
    };
  }
};
function createBaseMsgPutPolicyResponse(): MsgPutPolicyResponse {
  return {
    policyId: ""
  };
}
export const MsgPutPolicyResponse = {
  typeUrl: "/greenfield.storage.MsgPutPolicyResponse",
  encode(message: MsgPutPolicyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.policyId !== "") {
      writer.uint32(34).string(message.policyId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPutPolicyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPutPolicyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          message.policyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgPutPolicyResponse {
    return {
      policyId: isSet(object.policyId) ? String(object.policyId) : ""
    };
  },
  toJSON(message: MsgPutPolicyResponse): unknown {
    const obj: any = {};
    message.policyId !== undefined && (obj.policyId = message.policyId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgPutPolicyResponse>, I>>(object: I): MsgPutPolicyResponse {
    const message = createBaseMsgPutPolicyResponse();
    message.policyId = object.policyId ?? "";
    return message;
  },
  fromSDK(object: MsgPutPolicyResponseSDKType): MsgPutPolicyResponse {
    return {
      policyId: object?.policy_id
    };
  },
  toSDK(message: MsgPutPolicyResponse): MsgPutPolicyResponseSDKType {
    const obj: any = {};
    obj.policy_id = message.policyId;
    return obj;
  },
  fromAmino(object: MsgPutPolicyResponseAmino): MsgPutPolicyResponse {
    const message = createBaseMsgPutPolicyResponse();
    if (object.policy_id !== undefined && object.policy_id !== null) {
      message.policyId = object.policy_id;
    }
    return message;
  },
  toAmino(message: MsgPutPolicyResponse): MsgPutPolicyResponseAmino {
    const obj: any = {};
    obj.policy_id = message.policyId;
    return obj;
  },
  fromAminoMsg(object: MsgPutPolicyResponseAminoMsg): MsgPutPolicyResponse {
    return MsgPutPolicyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPutPolicyResponseProtoMsg): MsgPutPolicyResponse {
    return MsgPutPolicyResponse.decode(message.value);
  },
  toProto(message: MsgPutPolicyResponse): Uint8Array {
    return MsgPutPolicyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgPutPolicyResponse): MsgPutPolicyResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgPutPolicyResponse",
      value: MsgPutPolicyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeletePolicy(): MsgDeletePolicy {
  return {
    operator: "",
    principal: undefined,
    resource: ""
  };
}
export const MsgDeletePolicy = {
  typeUrl: "/greenfield.storage.MsgDeletePolicy",
  encode(message: MsgDeletePolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.principal !== undefined) {
      Principal.encode(message.principal, writer.uint32(18).fork()).ldelim();
    }
    if (message.resource !== "") {
      writer.uint32(26).string(message.resource);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeletePolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeletePolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.principal = Principal.decode(reader, reader.uint32());
          break;
        case 3:
          message.resource = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDeletePolicy {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      principal: isSet(object.principal) ? Principal.fromJSON(object.principal) : undefined,
      resource: isSet(object.resource) ? String(object.resource) : ""
    };
  },
  toJSON(message: MsgDeletePolicy): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.principal !== undefined && (obj.principal = message.principal ? Principal.toJSON(message.principal) : undefined);
    message.resource !== undefined && (obj.resource = message.resource);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeletePolicy>, I>>(object: I): MsgDeletePolicy {
    const message = createBaseMsgDeletePolicy();
    message.operator = object.operator ?? "";
    message.principal = object.principal !== undefined && object.principal !== null ? Principal.fromPartial(object.principal) : undefined;
    message.resource = object.resource ?? "";
    return message;
  },
  fromSDK(object: MsgDeletePolicySDKType): MsgDeletePolicy {
    return {
      operator: object?.operator,
      principal: object.principal ? Principal.fromSDK(object.principal) : undefined,
      resource: object?.resource
    };
  },
  toSDK(message: MsgDeletePolicy): MsgDeletePolicySDKType {
    const obj: any = {};
    obj.operator = message.operator;
    message.principal !== undefined && (obj.principal = message.principal ? Principal.toSDK(message.principal) : undefined);
    obj.resource = message.resource;
    return obj;
  },
  fromAmino(object: MsgDeletePolicyAmino): MsgDeletePolicy {
    const message = createBaseMsgDeletePolicy();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.principal !== undefined && object.principal !== null) {
      message.principal = Principal.fromAmino(object.principal);
    }
    if (object.resource !== undefined && object.resource !== null) {
      message.resource = object.resource;
    }
    return message;
  },
  toAmino(message: MsgDeletePolicy): MsgDeletePolicyAmino {
    const obj: any = {};
    obj.operator = message.operator;
    obj.principal = message.principal ? Principal.toAmino(message.principal) : undefined;
    obj.resource = message.resource;
    return obj;
  },
  fromAminoMsg(object: MsgDeletePolicyAminoMsg): MsgDeletePolicy {
    return MsgDeletePolicy.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeletePolicyProtoMsg): MsgDeletePolicy {
    return MsgDeletePolicy.decode(message.value);
  },
  toProto(message: MsgDeletePolicy): Uint8Array {
    return MsgDeletePolicy.encode(message).finish();
  },
  toProtoMsg(message: MsgDeletePolicy): MsgDeletePolicyProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgDeletePolicy",
      value: MsgDeletePolicy.encode(message).finish()
    };
  }
};
function createBaseMsgDeletePolicyResponse(): MsgDeletePolicyResponse {
  return {
    policyId: ""
  };
}
export const MsgDeletePolicyResponse = {
  typeUrl: "/greenfield.storage.MsgDeletePolicyResponse",
  encode(message: MsgDeletePolicyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.policyId !== "") {
      writer.uint32(34).string(message.policyId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeletePolicyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeletePolicyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          message.policyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDeletePolicyResponse {
    return {
      policyId: isSet(object.policyId) ? String(object.policyId) : ""
    };
  },
  toJSON(message: MsgDeletePolicyResponse): unknown {
    const obj: any = {};
    message.policyId !== undefined && (obj.policyId = message.policyId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeletePolicyResponse>, I>>(object: I): MsgDeletePolicyResponse {
    const message = createBaseMsgDeletePolicyResponse();
    message.policyId = object.policyId ?? "";
    return message;
  },
  fromSDK(object: MsgDeletePolicyResponseSDKType): MsgDeletePolicyResponse {
    return {
      policyId: object?.policy_id
    };
  },
  toSDK(message: MsgDeletePolicyResponse): MsgDeletePolicyResponseSDKType {
    const obj: any = {};
    obj.policy_id = message.policyId;
    return obj;
  },
  fromAmino(object: MsgDeletePolicyResponseAmino): MsgDeletePolicyResponse {
    const message = createBaseMsgDeletePolicyResponse();
    if (object.policy_id !== undefined && object.policy_id !== null) {
      message.policyId = object.policy_id;
    }
    return message;
  },
  toAmino(message: MsgDeletePolicyResponse): MsgDeletePolicyResponseAmino {
    const obj: any = {};
    obj.policy_id = message.policyId;
    return obj;
  },
  fromAminoMsg(object: MsgDeletePolicyResponseAminoMsg): MsgDeletePolicyResponse {
    return MsgDeletePolicyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeletePolicyResponseProtoMsg): MsgDeletePolicyResponse {
    return MsgDeletePolicyResponse.decode(message.value);
  },
  toProto(message: MsgDeletePolicyResponse): Uint8Array {
    return MsgDeletePolicyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeletePolicyResponse): MsgDeletePolicyResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgDeletePolicyResponse",
      value: MsgDeletePolicyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgMirrorObject(): MsgMirrorObject {
  return {
    operator: "",
    id: "",
    bucketName: "",
    objectName: "",
    destChainId: 0
  };
}
export const MsgMirrorObject = {
  typeUrl: "/greenfield.storage.MsgMirrorObject",
  encode(message: MsgMirrorObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.bucketName !== "") {
      writer.uint32(26).string(message.bucketName);
    }
    if (message.objectName !== "") {
      writer.uint32(34).string(message.objectName);
    }
    if (message.destChainId !== 0) {
      writer.uint32(40).uint32(message.destChainId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMirrorObject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMirrorObject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.bucketName = reader.string();
          break;
        case 4:
          message.objectName = reader.string();
          break;
        case 5:
          message.destChainId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgMirrorObject {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      id: isSet(object.id) ? String(object.id) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      objectName: isSet(object.objectName) ? String(object.objectName) : "",
      destChainId: isSet(object.destChainId) ? Number(object.destChainId) : 0
    };
  },
  toJSON(message: MsgMirrorObject): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.id !== undefined && (obj.id = message.id);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.objectName !== undefined && (obj.objectName = message.objectName);
    message.destChainId !== undefined && (obj.destChainId = Math.round(message.destChainId));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgMirrorObject>, I>>(object: I): MsgMirrorObject {
    const message = createBaseMsgMirrorObject();
    message.operator = object.operator ?? "";
    message.id = object.id ?? "";
    message.bucketName = object.bucketName ?? "";
    message.objectName = object.objectName ?? "";
    message.destChainId = object.destChainId ?? 0;
    return message;
  },
  fromSDK(object: MsgMirrorObjectSDKType): MsgMirrorObject {
    return {
      operator: object?.operator,
      id: object?.id,
      bucketName: object?.bucket_name,
      objectName: object?.object_name,
      destChainId: object?.dest_chain_id
    };
  },
  toSDK(message: MsgMirrorObject): MsgMirrorObjectSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.id = message.id;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    obj.dest_chain_id = message.destChainId;
    return obj;
  },
  fromAmino(object: MsgMirrorObjectAmino): MsgMirrorObject {
    const message = createBaseMsgMirrorObject();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    if (object.object_name !== undefined && object.object_name !== null) {
      message.objectName = object.object_name;
    }
    if (object.dest_chain_id !== undefined && object.dest_chain_id !== null) {
      message.destChainId = object.dest_chain_id;
    }
    return message;
  },
  toAmino(message: MsgMirrorObject): MsgMirrorObjectAmino {
    const obj: any = {};
    obj.operator = message.operator;
    obj.id = message.id;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    obj.dest_chain_id = message.destChainId;
    return obj;
  },
  fromAminoMsg(object: MsgMirrorObjectAminoMsg): MsgMirrorObject {
    return MsgMirrorObject.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMirrorObjectProtoMsg): MsgMirrorObject {
    return MsgMirrorObject.decode(message.value);
  },
  toProto(message: MsgMirrorObject): Uint8Array {
    return MsgMirrorObject.encode(message).finish();
  },
  toProtoMsg(message: MsgMirrorObject): MsgMirrorObjectProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgMirrorObject",
      value: MsgMirrorObject.encode(message).finish()
    };
  }
};
function createBaseMsgMirrorObjectResponse(): MsgMirrorObjectResponse {
  return {};
}
export const MsgMirrorObjectResponse = {
  typeUrl: "/greenfield.storage.MsgMirrorObjectResponse",
  encode(_: MsgMirrorObjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMirrorObjectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMirrorObjectResponse();
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
  fromJSON(_: any): MsgMirrorObjectResponse {
    return {};
  },
  toJSON(_: MsgMirrorObjectResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgMirrorObjectResponse>, I>>(_: I): MsgMirrorObjectResponse {
    const message = createBaseMsgMirrorObjectResponse();
    return message;
  },
  fromSDK(_: MsgMirrorObjectResponseSDKType): MsgMirrorObjectResponse {
    return {};
  },
  toSDK(_: MsgMirrorObjectResponse): MsgMirrorObjectResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgMirrorObjectResponseAmino): MsgMirrorObjectResponse {
    const message = createBaseMsgMirrorObjectResponse();
    return message;
  },
  toAmino(_: MsgMirrorObjectResponse): MsgMirrorObjectResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgMirrorObjectResponseAminoMsg): MsgMirrorObjectResponse {
    return MsgMirrorObjectResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMirrorObjectResponseProtoMsg): MsgMirrorObjectResponse {
    return MsgMirrorObjectResponse.decode(message.value);
  },
  toProto(message: MsgMirrorObjectResponse): Uint8Array {
    return MsgMirrorObjectResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMirrorObjectResponse): MsgMirrorObjectResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgMirrorObjectResponse",
      value: MsgMirrorObjectResponse.encode(message).finish()
    };
  }
};
function createBaseMsgMirrorBucket(): MsgMirrorBucket {
  return {
    operator: "",
    id: "",
    bucketName: "",
    destChainId: 0
  };
}
export const MsgMirrorBucket = {
  typeUrl: "/greenfield.storage.MsgMirrorBucket",
  encode(message: MsgMirrorBucket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.bucketName !== "") {
      writer.uint32(26).string(message.bucketName);
    }
    if (message.destChainId !== 0) {
      writer.uint32(32).uint32(message.destChainId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMirrorBucket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMirrorBucket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.bucketName = reader.string();
          break;
        case 4:
          message.destChainId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgMirrorBucket {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      id: isSet(object.id) ? String(object.id) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      destChainId: isSet(object.destChainId) ? Number(object.destChainId) : 0
    };
  },
  toJSON(message: MsgMirrorBucket): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.id !== undefined && (obj.id = message.id);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.destChainId !== undefined && (obj.destChainId = Math.round(message.destChainId));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgMirrorBucket>, I>>(object: I): MsgMirrorBucket {
    const message = createBaseMsgMirrorBucket();
    message.operator = object.operator ?? "";
    message.id = object.id ?? "";
    message.bucketName = object.bucketName ?? "";
    message.destChainId = object.destChainId ?? 0;
    return message;
  },
  fromSDK(object: MsgMirrorBucketSDKType): MsgMirrorBucket {
    return {
      operator: object?.operator,
      id: object?.id,
      bucketName: object?.bucket_name,
      destChainId: object?.dest_chain_id
    };
  },
  toSDK(message: MsgMirrorBucket): MsgMirrorBucketSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.id = message.id;
    obj.bucket_name = message.bucketName;
    obj.dest_chain_id = message.destChainId;
    return obj;
  },
  fromAmino(object: MsgMirrorBucketAmino): MsgMirrorBucket {
    const message = createBaseMsgMirrorBucket();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    if (object.dest_chain_id !== undefined && object.dest_chain_id !== null) {
      message.destChainId = object.dest_chain_id;
    }
    return message;
  },
  toAmino(message: MsgMirrorBucket): MsgMirrorBucketAmino {
    const obj: any = {};
    obj.operator = message.operator;
    obj.id = message.id;
    obj.bucket_name = message.bucketName;
    obj.dest_chain_id = message.destChainId;
    return obj;
  },
  fromAminoMsg(object: MsgMirrorBucketAminoMsg): MsgMirrorBucket {
    return MsgMirrorBucket.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMirrorBucketProtoMsg): MsgMirrorBucket {
    return MsgMirrorBucket.decode(message.value);
  },
  toProto(message: MsgMirrorBucket): Uint8Array {
    return MsgMirrorBucket.encode(message).finish();
  },
  toProtoMsg(message: MsgMirrorBucket): MsgMirrorBucketProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgMirrorBucket",
      value: MsgMirrorBucket.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateObjectInfoResponse(): MsgUpdateObjectInfoResponse {
  return {};
}
export const MsgUpdateObjectInfoResponse = {
  typeUrl: "/greenfield.storage.MsgUpdateObjectInfoResponse",
  encode(_: MsgUpdateObjectInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateObjectInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateObjectInfoResponse();
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
  fromJSON(_: any): MsgUpdateObjectInfoResponse {
    return {};
  },
  toJSON(_: MsgUpdateObjectInfoResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateObjectInfoResponse>, I>>(_: I): MsgUpdateObjectInfoResponse {
    const message = createBaseMsgUpdateObjectInfoResponse();
    return message;
  },
  fromSDK(_: MsgUpdateObjectInfoResponseSDKType): MsgUpdateObjectInfoResponse {
    return {};
  },
  toSDK(_: MsgUpdateObjectInfoResponse): MsgUpdateObjectInfoResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgUpdateObjectInfoResponseAmino): MsgUpdateObjectInfoResponse {
    const message = createBaseMsgUpdateObjectInfoResponse();
    return message;
  },
  toAmino(_: MsgUpdateObjectInfoResponse): MsgUpdateObjectInfoResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateObjectInfoResponseAminoMsg): MsgUpdateObjectInfoResponse {
    return MsgUpdateObjectInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateObjectInfoResponseProtoMsg): MsgUpdateObjectInfoResponse {
    return MsgUpdateObjectInfoResponse.decode(message.value);
  },
  toProto(message: MsgUpdateObjectInfoResponse): Uint8Array {
    return MsgUpdateObjectInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateObjectInfoResponse): MsgUpdateObjectInfoResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgUpdateObjectInfoResponse",
      value: MsgUpdateObjectInfoResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateObjectInfo(): MsgUpdateObjectInfo {
  return {
    operator: "",
    bucketName: "",
    objectName: "",
    visibility: 0
  };
}
export const MsgUpdateObjectInfo = {
  typeUrl: "/greenfield.storage.MsgUpdateObjectInfo",
  encode(message: MsgUpdateObjectInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }
    if (message.objectName !== "") {
      writer.uint32(26).string(message.objectName);
    }
    if (message.visibility !== 0) {
      writer.uint32(32).int32(message.visibility);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateObjectInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateObjectInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.bucketName = reader.string();
          break;
        case 3:
          message.objectName = reader.string();
          break;
        case 4:
          message.visibility = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateObjectInfo {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      objectName: isSet(object.objectName) ? String(object.objectName) : "",
      visibility: isSet(object.visibility) ? visibilityTypeFromJSON(object.visibility) : -1
    };
  },
  toJSON(message: MsgUpdateObjectInfo): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.objectName !== undefined && (obj.objectName = message.objectName);
    message.visibility !== undefined && (obj.visibility = visibilityTypeToJSON(message.visibility));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateObjectInfo>, I>>(object: I): MsgUpdateObjectInfo {
    const message = createBaseMsgUpdateObjectInfo();
    message.operator = object.operator ?? "";
    message.bucketName = object.bucketName ?? "";
    message.objectName = object.objectName ?? "";
    message.visibility = object.visibility ?? 0;
    return message;
  },
  fromSDK(object: MsgUpdateObjectInfoSDKType): MsgUpdateObjectInfo {
    return {
      operator: object?.operator,
      bucketName: object?.bucket_name,
      objectName: object?.object_name,
      visibility: isSet(object.visibility) ? visibilityTypeFromJSON(object.visibility) : -1
    };
  },
  toSDK(message: MsgUpdateObjectInfo): MsgUpdateObjectInfoSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    message.visibility !== undefined && (obj.visibility = visibilityTypeToJSON(message.visibility));
    return obj;
  },
  fromAmino(object: MsgUpdateObjectInfoAmino): MsgUpdateObjectInfo {
    const message = createBaseMsgUpdateObjectInfo();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    if (object.object_name !== undefined && object.object_name !== null) {
      message.objectName = object.object_name;
    }
    if (object.visibility !== undefined && object.visibility !== null) {
      message.visibility = visibilityTypeFromJSON(object.visibility);
    }
    return message;
  },
  toAmino(message: MsgUpdateObjectInfo): MsgUpdateObjectInfoAmino {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    obj.visibility = visibilityTypeToJSON(message.visibility);
    return obj;
  },
  fromAminoMsg(object: MsgUpdateObjectInfoAminoMsg): MsgUpdateObjectInfo {
    return MsgUpdateObjectInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateObjectInfoProtoMsg): MsgUpdateObjectInfo {
    return MsgUpdateObjectInfo.decode(message.value);
  },
  toProto(message: MsgUpdateObjectInfo): Uint8Array {
    return MsgUpdateObjectInfo.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateObjectInfo): MsgUpdateObjectInfoProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgUpdateObjectInfo",
      value: MsgUpdateObjectInfo.encode(message).finish()
    };
  }
};
function createBaseMsgMirrorBucketResponse(): MsgMirrorBucketResponse {
  return {};
}
export const MsgMirrorBucketResponse = {
  typeUrl: "/greenfield.storage.MsgMirrorBucketResponse",
  encode(_: MsgMirrorBucketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMirrorBucketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMirrorBucketResponse();
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
  fromJSON(_: any): MsgMirrorBucketResponse {
    return {};
  },
  toJSON(_: MsgMirrorBucketResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgMirrorBucketResponse>, I>>(_: I): MsgMirrorBucketResponse {
    const message = createBaseMsgMirrorBucketResponse();
    return message;
  },
  fromSDK(_: MsgMirrorBucketResponseSDKType): MsgMirrorBucketResponse {
    return {};
  },
  toSDK(_: MsgMirrorBucketResponse): MsgMirrorBucketResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgMirrorBucketResponseAmino): MsgMirrorBucketResponse {
    const message = createBaseMsgMirrorBucketResponse();
    return message;
  },
  toAmino(_: MsgMirrorBucketResponse): MsgMirrorBucketResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgMirrorBucketResponseAminoMsg): MsgMirrorBucketResponse {
    return MsgMirrorBucketResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMirrorBucketResponseProtoMsg): MsgMirrorBucketResponse {
    return MsgMirrorBucketResponse.decode(message.value);
  },
  toProto(message: MsgMirrorBucketResponse): Uint8Array {
    return MsgMirrorBucketResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMirrorBucketResponse): MsgMirrorBucketResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgMirrorBucketResponse",
      value: MsgMirrorBucketResponse.encode(message).finish()
    };
  }
};
function createBaseMsgMirrorGroup(): MsgMirrorGroup {
  return {
    operator: "",
    id: "",
    groupName: "",
    destChainId: 0
  };
}
export const MsgMirrorGroup = {
  typeUrl: "/greenfield.storage.MsgMirrorGroup",
  encode(message: MsgMirrorGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.groupName !== "") {
      writer.uint32(26).string(message.groupName);
    }
    if (message.destChainId !== 0) {
      writer.uint32(32).uint32(message.destChainId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMirrorGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMirrorGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.groupName = reader.string();
          break;
        case 4:
          message.destChainId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgMirrorGroup {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      id: isSet(object.id) ? String(object.id) : "",
      groupName: isSet(object.groupName) ? String(object.groupName) : "",
      destChainId: isSet(object.destChainId) ? Number(object.destChainId) : 0
    };
  },
  toJSON(message: MsgMirrorGroup): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.id !== undefined && (obj.id = message.id);
    message.groupName !== undefined && (obj.groupName = message.groupName);
    message.destChainId !== undefined && (obj.destChainId = Math.round(message.destChainId));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgMirrorGroup>, I>>(object: I): MsgMirrorGroup {
    const message = createBaseMsgMirrorGroup();
    message.operator = object.operator ?? "";
    message.id = object.id ?? "";
    message.groupName = object.groupName ?? "";
    message.destChainId = object.destChainId ?? 0;
    return message;
  },
  fromSDK(object: MsgMirrorGroupSDKType): MsgMirrorGroup {
    return {
      operator: object?.operator,
      id: object?.id,
      groupName: object?.group_name,
      destChainId: object?.dest_chain_id
    };
  },
  toSDK(message: MsgMirrorGroup): MsgMirrorGroupSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.id = message.id;
    obj.group_name = message.groupName;
    obj.dest_chain_id = message.destChainId;
    return obj;
  },
  fromAmino(object: MsgMirrorGroupAmino): MsgMirrorGroup {
    const message = createBaseMsgMirrorGroup();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.group_name !== undefined && object.group_name !== null) {
      message.groupName = object.group_name;
    }
    if (object.dest_chain_id !== undefined && object.dest_chain_id !== null) {
      message.destChainId = object.dest_chain_id;
    }
    return message;
  },
  toAmino(message: MsgMirrorGroup): MsgMirrorGroupAmino {
    const obj: any = {};
    obj.operator = message.operator;
    obj.id = message.id;
    obj.group_name = message.groupName;
    obj.dest_chain_id = message.destChainId;
    return obj;
  },
  fromAminoMsg(object: MsgMirrorGroupAminoMsg): MsgMirrorGroup {
    return MsgMirrorGroup.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMirrorGroupProtoMsg): MsgMirrorGroup {
    return MsgMirrorGroup.decode(message.value);
  },
  toProto(message: MsgMirrorGroup): Uint8Array {
    return MsgMirrorGroup.encode(message).finish();
  },
  toProtoMsg(message: MsgMirrorGroup): MsgMirrorGroupProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgMirrorGroup",
      value: MsgMirrorGroup.encode(message).finish()
    };
  }
};
function createBaseMsgMirrorGroupResponse(): MsgMirrorGroupResponse {
  return {};
}
export const MsgMirrorGroupResponse = {
  typeUrl: "/greenfield.storage.MsgMirrorGroupResponse",
  encode(_: MsgMirrorGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMirrorGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMirrorGroupResponse();
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
  fromJSON(_: any): MsgMirrorGroupResponse {
    return {};
  },
  toJSON(_: MsgMirrorGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgMirrorGroupResponse>, I>>(_: I): MsgMirrorGroupResponse {
    const message = createBaseMsgMirrorGroupResponse();
    return message;
  },
  fromSDK(_: MsgMirrorGroupResponseSDKType): MsgMirrorGroupResponse {
    return {};
  },
  toSDK(_: MsgMirrorGroupResponse): MsgMirrorGroupResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgMirrorGroupResponseAmino): MsgMirrorGroupResponse {
    const message = createBaseMsgMirrorGroupResponse();
    return message;
  },
  toAmino(_: MsgMirrorGroupResponse): MsgMirrorGroupResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgMirrorGroupResponseAminoMsg): MsgMirrorGroupResponse {
    return MsgMirrorGroupResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMirrorGroupResponseProtoMsg): MsgMirrorGroupResponse {
    return MsgMirrorGroupResponse.decode(message.value);
  },
  toProto(message: MsgMirrorGroupResponse): Uint8Array {
    return MsgMirrorGroupResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMirrorGroupResponse): MsgMirrorGroupResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgMirrorGroupResponse",
      value: MsgMirrorGroupResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/greenfield.storage.MsgUpdateParams",
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
      typeUrl: "/greenfield.storage.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/greenfield.storage.MsgUpdateParamsResponse",
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
      typeUrl: "/greenfield.storage.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgMigrateBucket(): MsgMigrateBucket {
  return {
    operator: "",
    bucketName: "",
    dstPrimarySpId: 0,
    dstPrimarySpApproval: undefined
  };
}
export const MsgMigrateBucket = {
  typeUrl: "/greenfield.storage.MsgMigrateBucket",
  encode(message: MsgMigrateBucket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }
    if (message.dstPrimarySpId !== 0) {
      writer.uint32(24).uint32(message.dstPrimarySpId);
    }
    if (message.dstPrimarySpApproval !== undefined) {
      Approval.encode(message.dstPrimarySpApproval, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMigrateBucket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMigrateBucket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.bucketName = reader.string();
          break;
        case 3:
          message.dstPrimarySpId = reader.uint32();
          break;
        case 4:
          message.dstPrimarySpApproval = Approval.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgMigrateBucket {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      dstPrimarySpId: isSet(object.dstPrimarySpId) ? Number(object.dstPrimarySpId) : 0,
      dstPrimarySpApproval: isSet(object.dstPrimarySpApproval) ? Approval.fromJSON(object.dstPrimarySpApproval) : undefined
    };
  },
  toJSON(message: MsgMigrateBucket): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.dstPrimarySpId !== undefined && (obj.dstPrimarySpId = Math.round(message.dstPrimarySpId));
    message.dstPrimarySpApproval !== undefined && (obj.dstPrimarySpApproval = message.dstPrimarySpApproval ? Approval.toJSON(message.dstPrimarySpApproval) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgMigrateBucket>, I>>(object: I): MsgMigrateBucket {
    const message = createBaseMsgMigrateBucket();
    message.operator = object.operator ?? "";
    message.bucketName = object.bucketName ?? "";
    message.dstPrimarySpId = object.dstPrimarySpId ?? 0;
    message.dstPrimarySpApproval = object.dstPrimarySpApproval !== undefined && object.dstPrimarySpApproval !== null ? Approval.fromPartial(object.dstPrimarySpApproval) : undefined;
    return message;
  },
  fromSDK(object: MsgMigrateBucketSDKType): MsgMigrateBucket {
    return {
      operator: object?.operator,
      bucketName: object?.bucket_name,
      dstPrimarySpId: object?.dst_primary_sp_id,
      dstPrimarySpApproval: object.dst_primary_sp_approval ? Approval.fromSDK(object.dst_primary_sp_approval) : undefined
    };
  },
  toSDK(message: MsgMigrateBucket): MsgMigrateBucketSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.dst_primary_sp_id = message.dstPrimarySpId;
    message.dstPrimarySpApproval !== undefined && (obj.dst_primary_sp_approval = message.dstPrimarySpApproval ? Approval.toSDK(message.dstPrimarySpApproval) : undefined);
    return obj;
  },
  fromAmino(object: MsgMigrateBucketAmino): MsgMigrateBucket {
    const message = createBaseMsgMigrateBucket();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    if (object.dst_primary_sp_id !== undefined && object.dst_primary_sp_id !== null) {
      message.dstPrimarySpId = object.dst_primary_sp_id;
    }
    if (object.dst_primary_sp_approval !== undefined && object.dst_primary_sp_approval !== null) {
      message.dstPrimarySpApproval = Approval.fromAmino(object.dst_primary_sp_approval);
    }
    return message;
  },
  toAmino(message: MsgMigrateBucket): MsgMigrateBucketAmino {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.dst_primary_sp_id = message.dstPrimarySpId;
    obj.dst_primary_sp_approval = message.dstPrimarySpApproval ? Approval.toAmino(message.dstPrimarySpApproval) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgMigrateBucketAminoMsg): MsgMigrateBucket {
    return MsgMigrateBucket.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMigrateBucketProtoMsg): MsgMigrateBucket {
    return MsgMigrateBucket.decode(message.value);
  },
  toProto(message: MsgMigrateBucket): Uint8Array {
    return MsgMigrateBucket.encode(message).finish();
  },
  toProtoMsg(message: MsgMigrateBucket): MsgMigrateBucketProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgMigrateBucket",
      value: MsgMigrateBucket.encode(message).finish()
    };
  }
};
function createBaseMsgMigrateBucketResponse(): MsgMigrateBucketResponse {
  return {};
}
export const MsgMigrateBucketResponse = {
  typeUrl: "/greenfield.storage.MsgMigrateBucketResponse",
  encode(_: MsgMigrateBucketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMigrateBucketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMigrateBucketResponse();
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
  fromJSON(_: any): MsgMigrateBucketResponse {
    return {};
  },
  toJSON(_: MsgMigrateBucketResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgMigrateBucketResponse>, I>>(_: I): MsgMigrateBucketResponse {
    const message = createBaseMsgMigrateBucketResponse();
    return message;
  },
  fromSDK(_: MsgMigrateBucketResponseSDKType): MsgMigrateBucketResponse {
    return {};
  },
  toSDK(_: MsgMigrateBucketResponse): MsgMigrateBucketResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgMigrateBucketResponseAmino): MsgMigrateBucketResponse {
    const message = createBaseMsgMigrateBucketResponse();
    return message;
  },
  toAmino(_: MsgMigrateBucketResponse): MsgMigrateBucketResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgMigrateBucketResponseAminoMsg): MsgMigrateBucketResponse {
    return MsgMigrateBucketResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMigrateBucketResponseProtoMsg): MsgMigrateBucketResponse {
    return MsgMigrateBucketResponse.decode(message.value);
  },
  toProto(message: MsgMigrateBucketResponse): Uint8Array {
    return MsgMigrateBucketResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMigrateBucketResponse): MsgMigrateBucketResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgMigrateBucketResponse",
      value: MsgMigrateBucketResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCompleteMigrateBucket(): MsgCompleteMigrateBucket {
  return {
    operator: "",
    bucketName: "",
    globalVirtualGroupFamilyId: 0,
    gvgMappings: []
  };
}
export const MsgCompleteMigrateBucket = {
  typeUrl: "/greenfield.storage.MsgCompleteMigrateBucket",
  encode(message: MsgCompleteMigrateBucket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }
    if (message.globalVirtualGroupFamilyId !== 0) {
      writer.uint32(24).uint32(message.globalVirtualGroupFamilyId);
    }
    for (const v of message.gvgMappings) {
      GVGMapping.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCompleteMigrateBucket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCompleteMigrateBucket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.bucketName = reader.string();
          break;
        case 3:
          message.globalVirtualGroupFamilyId = reader.uint32();
          break;
        case 4:
          message.gvgMappings.push(GVGMapping.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCompleteMigrateBucket {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      globalVirtualGroupFamilyId: isSet(object.globalVirtualGroupFamilyId) ? Number(object.globalVirtualGroupFamilyId) : 0,
      gvgMappings: Array.isArray(object?.gvgMappings) ? object.gvgMappings.map((e: any) => GVGMapping.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgCompleteMigrateBucket): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.globalVirtualGroupFamilyId !== undefined && (obj.globalVirtualGroupFamilyId = Math.round(message.globalVirtualGroupFamilyId));
    if (message.gvgMappings) {
      obj.gvgMappings = message.gvgMappings.map(e => e ? GVGMapping.toJSON(e) : undefined);
    } else {
      obj.gvgMappings = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCompleteMigrateBucket>, I>>(object: I): MsgCompleteMigrateBucket {
    const message = createBaseMsgCompleteMigrateBucket();
    message.operator = object.operator ?? "";
    message.bucketName = object.bucketName ?? "";
    message.globalVirtualGroupFamilyId = object.globalVirtualGroupFamilyId ?? 0;
    message.gvgMappings = object.gvgMappings?.map(e => GVGMapping.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgCompleteMigrateBucketSDKType): MsgCompleteMigrateBucket {
    return {
      operator: object?.operator,
      bucketName: object?.bucket_name,
      globalVirtualGroupFamilyId: object?.global_virtual_group_family_id,
      gvgMappings: Array.isArray(object?.gvg_mappings) ? object.gvg_mappings.map((e: any) => GVGMapping.fromSDK(e)) : []
    };
  },
  toSDK(message: MsgCompleteMigrateBucket): MsgCompleteMigrateBucketSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.global_virtual_group_family_id = message.globalVirtualGroupFamilyId;
    if (message.gvgMappings) {
      obj.gvg_mappings = message.gvgMappings.map(e => e ? GVGMapping.toSDK(e) : undefined);
    } else {
      obj.gvg_mappings = [];
    }
    return obj;
  },
  fromAmino(object: MsgCompleteMigrateBucketAmino): MsgCompleteMigrateBucket {
    const message = createBaseMsgCompleteMigrateBucket();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    if (object.global_virtual_group_family_id !== undefined && object.global_virtual_group_family_id !== null) {
      message.globalVirtualGroupFamilyId = object.global_virtual_group_family_id;
    }
    message.gvgMappings = object.gvg_mappings?.map(e => GVGMapping.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgCompleteMigrateBucket): MsgCompleteMigrateBucketAmino {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.global_virtual_group_family_id = message.globalVirtualGroupFamilyId;
    if (message.gvgMappings) {
      obj.gvg_mappings = message.gvgMappings.map(e => e ? GVGMapping.toAmino(e) : undefined);
    } else {
      obj.gvg_mappings = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgCompleteMigrateBucketAminoMsg): MsgCompleteMigrateBucket {
    return MsgCompleteMigrateBucket.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCompleteMigrateBucketProtoMsg): MsgCompleteMigrateBucket {
    return MsgCompleteMigrateBucket.decode(message.value);
  },
  toProto(message: MsgCompleteMigrateBucket): Uint8Array {
    return MsgCompleteMigrateBucket.encode(message).finish();
  },
  toProtoMsg(message: MsgCompleteMigrateBucket): MsgCompleteMigrateBucketProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgCompleteMigrateBucket",
      value: MsgCompleteMigrateBucket.encode(message).finish()
    };
  }
};
function createBaseMsgCompleteMigrateBucketResponse(): MsgCompleteMigrateBucketResponse {
  return {};
}
export const MsgCompleteMigrateBucketResponse = {
  typeUrl: "/greenfield.storage.MsgCompleteMigrateBucketResponse",
  encode(_: MsgCompleteMigrateBucketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCompleteMigrateBucketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCompleteMigrateBucketResponse();
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
  fromJSON(_: any): MsgCompleteMigrateBucketResponse {
    return {};
  },
  toJSON(_: MsgCompleteMigrateBucketResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCompleteMigrateBucketResponse>, I>>(_: I): MsgCompleteMigrateBucketResponse {
    const message = createBaseMsgCompleteMigrateBucketResponse();
    return message;
  },
  fromSDK(_: MsgCompleteMigrateBucketResponseSDKType): MsgCompleteMigrateBucketResponse {
    return {};
  },
  toSDK(_: MsgCompleteMigrateBucketResponse): MsgCompleteMigrateBucketResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgCompleteMigrateBucketResponseAmino): MsgCompleteMigrateBucketResponse {
    const message = createBaseMsgCompleteMigrateBucketResponse();
    return message;
  },
  toAmino(_: MsgCompleteMigrateBucketResponse): MsgCompleteMigrateBucketResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCompleteMigrateBucketResponseAminoMsg): MsgCompleteMigrateBucketResponse {
    return MsgCompleteMigrateBucketResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCompleteMigrateBucketResponseProtoMsg): MsgCompleteMigrateBucketResponse {
    return MsgCompleteMigrateBucketResponse.decode(message.value);
  },
  toProto(message: MsgCompleteMigrateBucketResponse): Uint8Array {
    return MsgCompleteMigrateBucketResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCompleteMigrateBucketResponse): MsgCompleteMigrateBucketResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgCompleteMigrateBucketResponse",
      value: MsgCompleteMigrateBucketResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCancelMigrateBucket(): MsgCancelMigrateBucket {
  return {
    operator: "",
    bucketName: ""
  };
}
export const MsgCancelMigrateBucket = {
  typeUrl: "/greenfield.storage.MsgCancelMigrateBucket",
  encode(message: MsgCancelMigrateBucket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelMigrateBucket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelMigrateBucket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.bucketName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCancelMigrateBucket {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : ""
    };
  },
  toJSON(message: MsgCancelMigrateBucket): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCancelMigrateBucket>, I>>(object: I): MsgCancelMigrateBucket {
    const message = createBaseMsgCancelMigrateBucket();
    message.operator = object.operator ?? "";
    message.bucketName = object.bucketName ?? "";
    return message;
  },
  fromSDK(object: MsgCancelMigrateBucketSDKType): MsgCancelMigrateBucket {
    return {
      operator: object?.operator,
      bucketName: object?.bucket_name
    };
  },
  toSDK(message: MsgCancelMigrateBucket): MsgCancelMigrateBucketSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    return obj;
  },
  fromAmino(object: MsgCancelMigrateBucketAmino): MsgCancelMigrateBucket {
    const message = createBaseMsgCancelMigrateBucket();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    return message;
  },
  toAmino(message: MsgCancelMigrateBucket): MsgCancelMigrateBucketAmino {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    return obj;
  },
  fromAminoMsg(object: MsgCancelMigrateBucketAminoMsg): MsgCancelMigrateBucket {
    return MsgCancelMigrateBucket.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelMigrateBucketProtoMsg): MsgCancelMigrateBucket {
    return MsgCancelMigrateBucket.decode(message.value);
  },
  toProto(message: MsgCancelMigrateBucket): Uint8Array {
    return MsgCancelMigrateBucket.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelMigrateBucket): MsgCancelMigrateBucketProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgCancelMigrateBucket",
      value: MsgCancelMigrateBucket.encode(message).finish()
    };
  }
};
function createBaseMsgCancelMigrateBucketResponse(): MsgCancelMigrateBucketResponse {
  return {};
}
export const MsgCancelMigrateBucketResponse = {
  typeUrl: "/greenfield.storage.MsgCancelMigrateBucketResponse",
  encode(_: MsgCancelMigrateBucketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelMigrateBucketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelMigrateBucketResponse();
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
  fromJSON(_: any): MsgCancelMigrateBucketResponse {
    return {};
  },
  toJSON(_: MsgCancelMigrateBucketResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCancelMigrateBucketResponse>, I>>(_: I): MsgCancelMigrateBucketResponse {
    const message = createBaseMsgCancelMigrateBucketResponse();
    return message;
  },
  fromSDK(_: MsgCancelMigrateBucketResponseSDKType): MsgCancelMigrateBucketResponse {
    return {};
  },
  toSDK(_: MsgCancelMigrateBucketResponse): MsgCancelMigrateBucketResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgCancelMigrateBucketResponseAmino): MsgCancelMigrateBucketResponse {
    const message = createBaseMsgCancelMigrateBucketResponse();
    return message;
  },
  toAmino(_: MsgCancelMigrateBucketResponse): MsgCancelMigrateBucketResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelMigrateBucketResponseAminoMsg): MsgCancelMigrateBucketResponse {
    return MsgCancelMigrateBucketResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelMigrateBucketResponseProtoMsg): MsgCancelMigrateBucketResponse {
    return MsgCancelMigrateBucketResponse.decode(message.value);
  },
  toProto(message: MsgCancelMigrateBucketResponse): Uint8Array {
    return MsgCancelMigrateBucketResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelMigrateBucketResponse): MsgCancelMigrateBucketResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgCancelMigrateBucketResponse",
      value: MsgCancelMigrateBucketResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRejectMigrateBucket(): MsgRejectMigrateBucket {
  return {
    operator: "",
    bucketName: ""
  };
}
export const MsgRejectMigrateBucket = {
  typeUrl: "/greenfield.storage.MsgRejectMigrateBucket",
  encode(message: MsgRejectMigrateBucket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRejectMigrateBucket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRejectMigrateBucket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.bucketName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRejectMigrateBucket {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : ""
    };
  },
  toJSON(message: MsgRejectMigrateBucket): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRejectMigrateBucket>, I>>(object: I): MsgRejectMigrateBucket {
    const message = createBaseMsgRejectMigrateBucket();
    message.operator = object.operator ?? "";
    message.bucketName = object.bucketName ?? "";
    return message;
  },
  fromSDK(object: MsgRejectMigrateBucketSDKType): MsgRejectMigrateBucket {
    return {
      operator: object?.operator,
      bucketName: object?.bucket_name
    };
  },
  toSDK(message: MsgRejectMigrateBucket): MsgRejectMigrateBucketSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    return obj;
  },
  fromAmino(object: MsgRejectMigrateBucketAmino): MsgRejectMigrateBucket {
    const message = createBaseMsgRejectMigrateBucket();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    return message;
  },
  toAmino(message: MsgRejectMigrateBucket): MsgRejectMigrateBucketAmino {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    return obj;
  },
  fromAminoMsg(object: MsgRejectMigrateBucketAminoMsg): MsgRejectMigrateBucket {
    return MsgRejectMigrateBucket.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRejectMigrateBucketProtoMsg): MsgRejectMigrateBucket {
    return MsgRejectMigrateBucket.decode(message.value);
  },
  toProto(message: MsgRejectMigrateBucket): Uint8Array {
    return MsgRejectMigrateBucket.encode(message).finish();
  },
  toProtoMsg(message: MsgRejectMigrateBucket): MsgRejectMigrateBucketProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgRejectMigrateBucket",
      value: MsgRejectMigrateBucket.encode(message).finish()
    };
  }
};
function createBaseMsgRejectMigrateBucketResponse(): MsgRejectMigrateBucketResponse {
  return {};
}
export const MsgRejectMigrateBucketResponse = {
  typeUrl: "/greenfield.storage.MsgRejectMigrateBucketResponse",
  encode(_: MsgRejectMigrateBucketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRejectMigrateBucketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRejectMigrateBucketResponse();
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
  fromJSON(_: any): MsgRejectMigrateBucketResponse {
    return {};
  },
  toJSON(_: MsgRejectMigrateBucketResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRejectMigrateBucketResponse>, I>>(_: I): MsgRejectMigrateBucketResponse {
    const message = createBaseMsgRejectMigrateBucketResponse();
    return message;
  },
  fromSDK(_: MsgRejectMigrateBucketResponseSDKType): MsgRejectMigrateBucketResponse {
    return {};
  },
  toSDK(_: MsgRejectMigrateBucketResponse): MsgRejectMigrateBucketResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgRejectMigrateBucketResponseAmino): MsgRejectMigrateBucketResponse {
    const message = createBaseMsgRejectMigrateBucketResponse();
    return message;
  },
  toAmino(_: MsgRejectMigrateBucketResponse): MsgRejectMigrateBucketResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRejectMigrateBucketResponseAminoMsg): MsgRejectMigrateBucketResponse {
    return MsgRejectMigrateBucketResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRejectMigrateBucketResponseProtoMsg): MsgRejectMigrateBucketResponse {
    return MsgRejectMigrateBucketResponse.decode(message.value);
  },
  toProto(message: MsgRejectMigrateBucketResponse): Uint8Array {
    return MsgRejectMigrateBucketResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRejectMigrateBucketResponse): MsgRejectMigrateBucketResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgRejectMigrateBucketResponse",
      value: MsgRejectMigrateBucketResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetTag(): MsgSetTag {
  return {
    operator: "",
    resource: "",
    tags: undefined
  };
}
export const MsgSetTag = {
  typeUrl: "/greenfield.storage.MsgSetTag",
  encode(message: MsgSetTag, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.resource !== "") {
      writer.uint32(18).string(message.resource);
    }
    if (message.tags !== undefined) {
      ResourceTags.encode(message.tags, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetTag {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetTag();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.resource = reader.string();
          break;
        case 3:
          message.tags = ResourceTags.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetTag {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      resource: isSet(object.resource) ? String(object.resource) : "",
      tags: isSet(object.tags) ? ResourceTags.fromJSON(object.tags) : undefined
    };
  },
  toJSON(message: MsgSetTag): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.resource !== undefined && (obj.resource = message.resource);
    message.tags !== undefined && (obj.tags = message.tags ? ResourceTags.toJSON(message.tags) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetTag>, I>>(object: I): MsgSetTag {
    const message = createBaseMsgSetTag();
    message.operator = object.operator ?? "";
    message.resource = object.resource ?? "";
    message.tags = object.tags !== undefined && object.tags !== null ? ResourceTags.fromPartial(object.tags) : undefined;
    return message;
  },
  fromSDK(object: MsgSetTagSDKType): MsgSetTag {
    return {
      operator: object?.operator,
      resource: object?.resource,
      tags: object.tags ? ResourceTags.fromSDK(object.tags) : undefined
    };
  },
  toSDK(message: MsgSetTag): MsgSetTagSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.resource = message.resource;
    message.tags !== undefined && (obj.tags = message.tags ? ResourceTags.toSDK(message.tags) : undefined);
    return obj;
  },
  fromAmino(object: MsgSetTagAmino): MsgSetTag {
    const message = createBaseMsgSetTag();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.resource !== undefined && object.resource !== null) {
      message.resource = object.resource;
    }
    if (object.tags !== undefined && object.tags !== null) {
      message.tags = ResourceTags.fromAmino(object.tags);
    }
    return message;
  },
  toAmino(message: MsgSetTag): MsgSetTagAmino {
    const obj: any = {};
    obj.operator = message.operator;
    obj.resource = message.resource;
    obj.tags = message.tags ? ResourceTags.toAmino(message.tags) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSetTagAminoMsg): MsgSetTag {
    return MsgSetTag.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetTagProtoMsg): MsgSetTag {
    return MsgSetTag.decode(message.value);
  },
  toProto(message: MsgSetTag): Uint8Array {
    return MsgSetTag.encode(message).finish();
  },
  toProtoMsg(message: MsgSetTag): MsgSetTagProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgSetTag",
      value: MsgSetTag.encode(message).finish()
    };
  }
};
function createBaseMsgSetTagResponse(): MsgSetTagResponse {
  return {};
}
export const MsgSetTagResponse = {
  typeUrl: "/greenfield.storage.MsgSetTagResponse",
  encode(_: MsgSetTagResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetTagResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetTagResponse();
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
  fromJSON(_: any): MsgSetTagResponse {
    return {};
  },
  toJSON(_: MsgSetTagResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetTagResponse>, I>>(_: I): MsgSetTagResponse {
    const message = createBaseMsgSetTagResponse();
    return message;
  },
  fromSDK(_: MsgSetTagResponseSDKType): MsgSetTagResponse {
    return {};
  },
  toSDK(_: MsgSetTagResponse): MsgSetTagResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgSetTagResponseAmino): MsgSetTagResponse {
    const message = createBaseMsgSetTagResponse();
    return message;
  },
  toAmino(_: MsgSetTagResponse): MsgSetTagResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetTagResponseAminoMsg): MsgSetTagResponse {
    return MsgSetTagResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetTagResponseProtoMsg): MsgSetTagResponse {
    return MsgSetTagResponse.decode(message.value);
  },
  toProto(message: MsgSetTagResponse): Uint8Array {
    return MsgSetTagResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetTagResponse): MsgSetTagResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgSetTagResponse",
      value: MsgSetTagResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateObjectContent(): MsgUpdateObjectContent {
  return {
    operator: "",
    bucketName: "",
    objectName: "",
    payloadSize: Long.UZERO,
    contentType: "",
    expectChecksums: []
  };
}
export const MsgUpdateObjectContent = {
  typeUrl: "/greenfield.storage.MsgUpdateObjectContent",
  encode(message: MsgUpdateObjectContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }
    if (message.objectName !== "") {
      writer.uint32(26).string(message.objectName);
    }
    if (!message.payloadSize.isZero()) {
      writer.uint32(32).uint64(message.payloadSize);
    }
    if (message.contentType !== "") {
      writer.uint32(42).string(message.contentType);
    }
    for (const v of message.expectChecksums) {
      writer.uint32(50).bytes(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateObjectContent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateObjectContent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.bucketName = reader.string();
          break;
        case 3:
          message.objectName = reader.string();
          break;
        case 4:
          message.payloadSize = (reader.uint64() as Long);
          break;
        case 5:
          message.contentType = reader.string();
          break;
        case 6:
          message.expectChecksums.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateObjectContent {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      objectName: isSet(object.objectName) ? String(object.objectName) : "",
      payloadSize: isSet(object.payloadSize) ? Long.fromValue(object.payloadSize) : Long.UZERO,
      contentType: isSet(object.contentType) ? String(object.contentType) : "",
      expectChecksums: Array.isArray(object?.expectChecksums) ? object.expectChecksums.map((e: any) => bytesFromBase64(e)) : []
    };
  },
  toJSON(message: MsgUpdateObjectContent): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.objectName !== undefined && (obj.objectName = message.objectName);
    message.payloadSize !== undefined && (obj.payloadSize = (message.payloadSize || Long.UZERO).toString());
    message.contentType !== undefined && (obj.contentType = message.contentType);
    if (message.expectChecksums) {
      obj.expectChecksums = message.expectChecksums.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.expectChecksums = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateObjectContent>, I>>(object: I): MsgUpdateObjectContent {
    const message = createBaseMsgUpdateObjectContent();
    message.operator = object.operator ?? "";
    message.bucketName = object.bucketName ?? "";
    message.objectName = object.objectName ?? "";
    message.payloadSize = object.payloadSize !== undefined && object.payloadSize !== null ? Long.fromValue(object.payloadSize) : Long.UZERO;
    message.contentType = object.contentType ?? "";
    message.expectChecksums = object.expectChecksums?.map(e => e) || [];
    return message;
  },
  fromSDK(object: MsgUpdateObjectContentSDKType): MsgUpdateObjectContent {
    return {
      operator: object?.operator,
      bucketName: object?.bucket_name,
      objectName: object?.object_name,
      payloadSize: object?.payload_size,
      contentType: object?.content_type,
      expectChecksums: Array.isArray(object?.expect_checksums) ? object.expect_checksums.map((e: any) => e) : []
    };
  },
  toSDK(message: MsgUpdateObjectContent): MsgUpdateObjectContentSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    obj.payload_size = message.payloadSize;
    obj.content_type = message.contentType;
    if (message.expectChecksums) {
      obj.expect_checksums = message.expectChecksums.map(e => e);
    } else {
      obj.expect_checksums = [];
    }
    return obj;
  },
  fromAmino(object: MsgUpdateObjectContentAmino): MsgUpdateObjectContent {
    const message = createBaseMsgUpdateObjectContent();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    if (object.object_name !== undefined && object.object_name !== null) {
      message.objectName = object.object_name;
    }
    if (object.payload_size !== undefined && object.payload_size !== null) {
      message.payloadSize = Long.fromString(object.payload_size);
    }
    if (object.content_type !== undefined && object.content_type !== null) {
      message.contentType = object.content_type;
    }
    message.expectChecksums = object.expect_checksums?.map(e => bytesFromBase64(e)) || [];
    return message;
  },
  toAmino(message: MsgUpdateObjectContent): MsgUpdateObjectContentAmino {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    obj.payload_size = message.payloadSize ? message.payloadSize.toString() : undefined;
    obj.content_type = message.contentType;
    if (message.expectChecksums) {
      obj.expect_checksums = message.expectChecksums.map(e => base64FromBytes(e));
    } else {
      obj.expect_checksums = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgUpdateObjectContentAminoMsg): MsgUpdateObjectContent {
    return MsgUpdateObjectContent.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateObjectContentProtoMsg): MsgUpdateObjectContent {
    return MsgUpdateObjectContent.decode(message.value);
  },
  toProto(message: MsgUpdateObjectContent): Uint8Array {
    return MsgUpdateObjectContent.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateObjectContent): MsgUpdateObjectContentProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgUpdateObjectContent",
      value: MsgUpdateObjectContent.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateObjectContentResponse(): MsgUpdateObjectContentResponse {
  return {};
}
export const MsgUpdateObjectContentResponse = {
  typeUrl: "/greenfield.storage.MsgUpdateObjectContentResponse",
  encode(_: MsgUpdateObjectContentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateObjectContentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateObjectContentResponse();
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
  fromJSON(_: any): MsgUpdateObjectContentResponse {
    return {};
  },
  toJSON(_: MsgUpdateObjectContentResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateObjectContentResponse>, I>>(_: I): MsgUpdateObjectContentResponse {
    const message = createBaseMsgUpdateObjectContentResponse();
    return message;
  },
  fromSDK(_: MsgUpdateObjectContentResponseSDKType): MsgUpdateObjectContentResponse {
    return {};
  },
  toSDK(_: MsgUpdateObjectContentResponse): MsgUpdateObjectContentResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgUpdateObjectContentResponseAmino): MsgUpdateObjectContentResponse {
    const message = createBaseMsgUpdateObjectContentResponse();
    return message;
  },
  toAmino(_: MsgUpdateObjectContentResponse): MsgUpdateObjectContentResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateObjectContentResponseAminoMsg): MsgUpdateObjectContentResponse {
    return MsgUpdateObjectContentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateObjectContentResponseProtoMsg): MsgUpdateObjectContentResponse {
    return MsgUpdateObjectContentResponse.decode(message.value);
  },
  toProto(message: MsgUpdateObjectContentResponse): Uint8Array {
    return MsgUpdateObjectContentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateObjectContentResponse): MsgUpdateObjectContentResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgUpdateObjectContentResponse",
      value: MsgUpdateObjectContentResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCancelUpdateObjectContent(): MsgCancelUpdateObjectContent {
  return {
    operator: "",
    bucketName: "",
    objectName: ""
  };
}
export const MsgCancelUpdateObjectContent = {
  typeUrl: "/greenfield.storage.MsgCancelUpdateObjectContent",
  encode(message: MsgCancelUpdateObjectContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }
    if (message.objectName !== "") {
      writer.uint32(26).string(message.objectName);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelUpdateObjectContent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelUpdateObjectContent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.bucketName = reader.string();
          break;
        case 3:
          message.objectName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCancelUpdateObjectContent {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      objectName: isSet(object.objectName) ? String(object.objectName) : ""
    };
  },
  toJSON(message: MsgCancelUpdateObjectContent): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.objectName !== undefined && (obj.objectName = message.objectName);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCancelUpdateObjectContent>, I>>(object: I): MsgCancelUpdateObjectContent {
    const message = createBaseMsgCancelUpdateObjectContent();
    message.operator = object.operator ?? "";
    message.bucketName = object.bucketName ?? "";
    message.objectName = object.objectName ?? "";
    return message;
  },
  fromSDK(object: MsgCancelUpdateObjectContentSDKType): MsgCancelUpdateObjectContent {
    return {
      operator: object?.operator,
      bucketName: object?.bucket_name,
      objectName: object?.object_name
    };
  },
  toSDK(message: MsgCancelUpdateObjectContent): MsgCancelUpdateObjectContentSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    return obj;
  },
  fromAmino(object: MsgCancelUpdateObjectContentAmino): MsgCancelUpdateObjectContent {
    const message = createBaseMsgCancelUpdateObjectContent();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    if (object.object_name !== undefined && object.object_name !== null) {
      message.objectName = object.object_name;
    }
    return message;
  },
  toAmino(message: MsgCancelUpdateObjectContent): MsgCancelUpdateObjectContentAmino {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    return obj;
  },
  fromAminoMsg(object: MsgCancelUpdateObjectContentAminoMsg): MsgCancelUpdateObjectContent {
    return MsgCancelUpdateObjectContent.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelUpdateObjectContentProtoMsg): MsgCancelUpdateObjectContent {
    return MsgCancelUpdateObjectContent.decode(message.value);
  },
  toProto(message: MsgCancelUpdateObjectContent): Uint8Array {
    return MsgCancelUpdateObjectContent.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelUpdateObjectContent): MsgCancelUpdateObjectContentProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgCancelUpdateObjectContent",
      value: MsgCancelUpdateObjectContent.encode(message).finish()
    };
  }
};
function createBaseMsgCancelUpdateObjectContentResponse(): MsgCancelUpdateObjectContentResponse {
  return {};
}
export const MsgCancelUpdateObjectContentResponse = {
  typeUrl: "/greenfield.storage.MsgCancelUpdateObjectContentResponse",
  encode(_: MsgCancelUpdateObjectContentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelUpdateObjectContentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelUpdateObjectContentResponse();
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
  fromJSON(_: any): MsgCancelUpdateObjectContentResponse {
    return {};
  },
  toJSON(_: MsgCancelUpdateObjectContentResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCancelUpdateObjectContentResponse>, I>>(_: I): MsgCancelUpdateObjectContentResponse {
    const message = createBaseMsgCancelUpdateObjectContentResponse();
    return message;
  },
  fromSDK(_: MsgCancelUpdateObjectContentResponseSDKType): MsgCancelUpdateObjectContentResponse {
    return {};
  },
  toSDK(_: MsgCancelUpdateObjectContentResponse): MsgCancelUpdateObjectContentResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgCancelUpdateObjectContentResponseAmino): MsgCancelUpdateObjectContentResponse {
    const message = createBaseMsgCancelUpdateObjectContentResponse();
    return message;
  },
  toAmino(_: MsgCancelUpdateObjectContentResponse): MsgCancelUpdateObjectContentResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelUpdateObjectContentResponseAminoMsg): MsgCancelUpdateObjectContentResponse {
    return MsgCancelUpdateObjectContentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelUpdateObjectContentResponseProtoMsg): MsgCancelUpdateObjectContentResponse {
    return MsgCancelUpdateObjectContentResponse.decode(message.value);
  },
  toProto(message: MsgCancelUpdateObjectContentResponse): Uint8Array {
    return MsgCancelUpdateObjectContentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelUpdateObjectContentResponse): MsgCancelUpdateObjectContentResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgCancelUpdateObjectContentResponse",
      value: MsgCancelUpdateObjectContentResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDelegateCreateObject(): MsgDelegateCreateObject {
  return {
    operator: "",
    creator: "",
    bucketName: "",
    objectName: "",
    payloadSize: Long.UZERO,
    contentType: "",
    visibility: 0,
    expectChecksums: [],
    redundancyType: 0
  };
}
export const MsgDelegateCreateObject = {
  typeUrl: "/greenfield.storage.MsgDelegateCreateObject",
  encode(message: MsgDelegateCreateObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.bucketName !== "") {
      writer.uint32(26).string(message.bucketName);
    }
    if (message.objectName !== "") {
      writer.uint32(34).string(message.objectName);
    }
    if (!message.payloadSize.isZero()) {
      writer.uint32(40).uint64(message.payloadSize);
    }
    if (message.contentType !== "") {
      writer.uint32(50).string(message.contentType);
    }
    if (message.visibility !== 0) {
      writer.uint32(56).int32(message.visibility);
    }
    for (const v of message.expectChecksums) {
      writer.uint32(66).bytes(v!);
    }
    if (message.redundancyType !== 0) {
      writer.uint32(72).int32(message.redundancyType);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateCreateObject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateCreateObject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.bucketName = reader.string();
          break;
        case 4:
          message.objectName = reader.string();
          break;
        case 5:
          message.payloadSize = (reader.uint64() as Long);
          break;
        case 6:
          message.contentType = reader.string();
          break;
        case 7:
          message.visibility = (reader.int32() as any);
          break;
        case 8:
          message.expectChecksums.push(reader.bytes());
          break;
        case 9:
          message.redundancyType = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDelegateCreateObject {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      objectName: isSet(object.objectName) ? String(object.objectName) : "",
      payloadSize: isSet(object.payloadSize) ? Long.fromValue(object.payloadSize) : Long.UZERO,
      contentType: isSet(object.contentType) ? String(object.contentType) : "",
      visibility: isSet(object.visibility) ? visibilityTypeFromJSON(object.visibility) : -1,
      expectChecksums: Array.isArray(object?.expectChecksums) ? object.expectChecksums.map((e: any) => bytesFromBase64(e)) : [],
      redundancyType: isSet(object.redundancyType) ? redundancyTypeFromJSON(object.redundancyType) : -1
    };
  },
  toJSON(message: MsgDelegateCreateObject): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.creator !== undefined && (obj.creator = message.creator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.objectName !== undefined && (obj.objectName = message.objectName);
    message.payloadSize !== undefined && (obj.payloadSize = (message.payloadSize || Long.UZERO).toString());
    message.contentType !== undefined && (obj.contentType = message.contentType);
    message.visibility !== undefined && (obj.visibility = visibilityTypeToJSON(message.visibility));
    if (message.expectChecksums) {
      obj.expectChecksums = message.expectChecksums.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.expectChecksums = [];
    }
    message.redundancyType !== undefined && (obj.redundancyType = redundancyTypeToJSON(message.redundancyType));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDelegateCreateObject>, I>>(object: I): MsgDelegateCreateObject {
    const message = createBaseMsgDelegateCreateObject();
    message.operator = object.operator ?? "";
    message.creator = object.creator ?? "";
    message.bucketName = object.bucketName ?? "";
    message.objectName = object.objectName ?? "";
    message.payloadSize = object.payloadSize !== undefined && object.payloadSize !== null ? Long.fromValue(object.payloadSize) : Long.UZERO;
    message.contentType = object.contentType ?? "";
    message.visibility = object.visibility ?? 0;
    message.expectChecksums = object.expectChecksums?.map(e => e) || [];
    message.redundancyType = object.redundancyType ?? 0;
    return message;
  },
  fromSDK(object: MsgDelegateCreateObjectSDKType): MsgDelegateCreateObject {
    return {
      operator: object?.operator,
      creator: object?.creator,
      bucketName: object?.bucket_name,
      objectName: object?.object_name,
      payloadSize: object?.payload_size,
      contentType: object?.content_type,
      visibility: isSet(object.visibility) ? visibilityTypeFromJSON(object.visibility) : -1,
      expectChecksums: Array.isArray(object?.expect_checksums) ? object.expect_checksums.map((e: any) => e) : [],
      redundancyType: isSet(object.redundancy_type) ? redundancyTypeFromJSON(object.redundancy_type) : -1
    };
  },
  toSDK(message: MsgDelegateCreateObject): MsgDelegateCreateObjectSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.creator = message.creator;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    obj.payload_size = message.payloadSize;
    obj.content_type = message.contentType;
    message.visibility !== undefined && (obj.visibility = visibilityTypeToJSON(message.visibility));
    if (message.expectChecksums) {
      obj.expect_checksums = message.expectChecksums.map(e => e);
    } else {
      obj.expect_checksums = [];
    }
    message.redundancyType !== undefined && (obj.redundancy_type = redundancyTypeToJSON(message.redundancyType));
    return obj;
  },
  fromAmino(object: MsgDelegateCreateObjectAmino): MsgDelegateCreateObject {
    const message = createBaseMsgDelegateCreateObject();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    if (object.object_name !== undefined && object.object_name !== null) {
      message.objectName = object.object_name;
    }
    if (object.payload_size !== undefined && object.payload_size !== null) {
      message.payloadSize = Long.fromString(object.payload_size);
    }
    if (object.content_type !== undefined && object.content_type !== null) {
      message.contentType = object.content_type;
    }
    if (object.visibility !== undefined && object.visibility !== null) {
      message.visibility = visibilityTypeFromJSON(object.visibility);
    }
    message.expectChecksums = object.expect_checksums?.map(e => bytesFromBase64(e)) || [];
    if (object.redundancy_type !== undefined && object.redundancy_type !== null) {
      message.redundancyType = redundancyTypeFromJSON(object.redundancy_type);
    }
    return message;
  },
  toAmino(message: MsgDelegateCreateObject): MsgDelegateCreateObjectAmino {
    const obj: any = {};
    obj.operator = message.operator;
    obj.creator = message.creator;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    obj.payload_size = message.payloadSize ? message.payloadSize.toString() : undefined;
    obj.content_type = message.contentType;
    obj.visibility = visibilityTypeToJSON(message.visibility);
    if (message.expectChecksums) {
      obj.expect_checksums = message.expectChecksums.map(e => base64FromBytes(e));
    } else {
      obj.expect_checksums = [];
    }
    obj.redundancy_type = redundancyTypeToJSON(message.redundancyType);
    return obj;
  },
  fromAminoMsg(object: MsgDelegateCreateObjectAminoMsg): MsgDelegateCreateObject {
    return MsgDelegateCreateObject.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDelegateCreateObjectProtoMsg): MsgDelegateCreateObject {
    return MsgDelegateCreateObject.decode(message.value);
  },
  toProto(message: MsgDelegateCreateObject): Uint8Array {
    return MsgDelegateCreateObject.encode(message).finish();
  },
  toProtoMsg(message: MsgDelegateCreateObject): MsgDelegateCreateObjectProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgDelegateCreateObject",
      value: MsgDelegateCreateObject.encode(message).finish()
    };
  }
};
function createBaseMsgDelegateCreateObjectResponse(): MsgDelegateCreateObjectResponse {
  return {
    objectId: ""
  };
}
export const MsgDelegateCreateObjectResponse = {
  typeUrl: "/greenfield.storage.MsgDelegateCreateObjectResponse",
  encode(message: MsgDelegateCreateObjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.objectId !== "") {
      writer.uint32(10).string(message.objectId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateCreateObjectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateCreateObjectResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.objectId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDelegateCreateObjectResponse {
    return {
      objectId: isSet(object.objectId) ? String(object.objectId) : ""
    };
  },
  toJSON(message: MsgDelegateCreateObjectResponse): unknown {
    const obj: any = {};
    message.objectId !== undefined && (obj.objectId = message.objectId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDelegateCreateObjectResponse>, I>>(object: I): MsgDelegateCreateObjectResponse {
    const message = createBaseMsgDelegateCreateObjectResponse();
    message.objectId = object.objectId ?? "";
    return message;
  },
  fromSDK(object: MsgDelegateCreateObjectResponseSDKType): MsgDelegateCreateObjectResponse {
    return {
      objectId: object?.object_id
    };
  },
  toSDK(message: MsgDelegateCreateObjectResponse): MsgDelegateCreateObjectResponseSDKType {
    const obj: any = {};
    obj.object_id = message.objectId;
    return obj;
  },
  fromAmino(object: MsgDelegateCreateObjectResponseAmino): MsgDelegateCreateObjectResponse {
    const message = createBaseMsgDelegateCreateObjectResponse();
    if (object.object_id !== undefined && object.object_id !== null) {
      message.objectId = object.object_id;
    }
    return message;
  },
  toAmino(message: MsgDelegateCreateObjectResponse): MsgDelegateCreateObjectResponseAmino {
    const obj: any = {};
    obj.object_id = message.objectId;
    return obj;
  },
  fromAminoMsg(object: MsgDelegateCreateObjectResponseAminoMsg): MsgDelegateCreateObjectResponse {
    return MsgDelegateCreateObjectResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDelegateCreateObjectResponseProtoMsg): MsgDelegateCreateObjectResponse {
    return MsgDelegateCreateObjectResponse.decode(message.value);
  },
  toProto(message: MsgDelegateCreateObjectResponse): Uint8Array {
    return MsgDelegateCreateObjectResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDelegateCreateObjectResponse): MsgDelegateCreateObjectResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgDelegateCreateObjectResponse",
      value: MsgDelegateCreateObjectResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDelegateUpdateObjectContent(): MsgDelegateUpdateObjectContent {
  return {
    operator: "",
    updater: "",
    bucketName: "",
    objectName: "",
    payloadSize: Long.UZERO,
    contentType: "",
    expectChecksums: []
  };
}
export const MsgDelegateUpdateObjectContent = {
  typeUrl: "/greenfield.storage.MsgDelegateUpdateObjectContent",
  encode(message: MsgDelegateUpdateObjectContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.updater !== "") {
      writer.uint32(18).string(message.updater);
    }
    if (message.bucketName !== "") {
      writer.uint32(26).string(message.bucketName);
    }
    if (message.objectName !== "") {
      writer.uint32(34).string(message.objectName);
    }
    if (!message.payloadSize.isZero()) {
      writer.uint32(40).uint64(message.payloadSize);
    }
    if (message.contentType !== "") {
      writer.uint32(50).string(message.contentType);
    }
    for (const v of message.expectChecksums) {
      writer.uint32(58).bytes(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateUpdateObjectContent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateUpdateObjectContent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.updater = reader.string();
          break;
        case 3:
          message.bucketName = reader.string();
          break;
        case 4:
          message.objectName = reader.string();
          break;
        case 5:
          message.payloadSize = (reader.uint64() as Long);
          break;
        case 6:
          message.contentType = reader.string();
          break;
        case 7:
          message.expectChecksums.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDelegateUpdateObjectContent {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      updater: isSet(object.updater) ? String(object.updater) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      objectName: isSet(object.objectName) ? String(object.objectName) : "",
      payloadSize: isSet(object.payloadSize) ? Long.fromValue(object.payloadSize) : Long.UZERO,
      contentType: isSet(object.contentType) ? String(object.contentType) : "",
      expectChecksums: Array.isArray(object?.expectChecksums) ? object.expectChecksums.map((e: any) => bytesFromBase64(e)) : []
    };
  },
  toJSON(message: MsgDelegateUpdateObjectContent): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.updater !== undefined && (obj.updater = message.updater);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.objectName !== undefined && (obj.objectName = message.objectName);
    message.payloadSize !== undefined && (obj.payloadSize = (message.payloadSize || Long.UZERO).toString());
    message.contentType !== undefined && (obj.contentType = message.contentType);
    if (message.expectChecksums) {
      obj.expectChecksums = message.expectChecksums.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.expectChecksums = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDelegateUpdateObjectContent>, I>>(object: I): MsgDelegateUpdateObjectContent {
    const message = createBaseMsgDelegateUpdateObjectContent();
    message.operator = object.operator ?? "";
    message.updater = object.updater ?? "";
    message.bucketName = object.bucketName ?? "";
    message.objectName = object.objectName ?? "";
    message.payloadSize = object.payloadSize !== undefined && object.payloadSize !== null ? Long.fromValue(object.payloadSize) : Long.UZERO;
    message.contentType = object.contentType ?? "";
    message.expectChecksums = object.expectChecksums?.map(e => e) || [];
    return message;
  },
  fromSDK(object: MsgDelegateUpdateObjectContentSDKType): MsgDelegateUpdateObjectContent {
    return {
      operator: object?.operator,
      updater: object?.updater,
      bucketName: object?.bucket_name,
      objectName: object?.object_name,
      payloadSize: object?.payload_size,
      contentType: object?.content_type,
      expectChecksums: Array.isArray(object?.expect_checksums) ? object.expect_checksums.map((e: any) => e) : []
    };
  },
  toSDK(message: MsgDelegateUpdateObjectContent): MsgDelegateUpdateObjectContentSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.updater = message.updater;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    obj.payload_size = message.payloadSize;
    obj.content_type = message.contentType;
    if (message.expectChecksums) {
      obj.expect_checksums = message.expectChecksums.map(e => e);
    } else {
      obj.expect_checksums = [];
    }
    return obj;
  },
  fromAmino(object: MsgDelegateUpdateObjectContentAmino): MsgDelegateUpdateObjectContent {
    const message = createBaseMsgDelegateUpdateObjectContent();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.updater !== undefined && object.updater !== null) {
      message.updater = object.updater;
    }
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    if (object.object_name !== undefined && object.object_name !== null) {
      message.objectName = object.object_name;
    }
    if (object.payload_size !== undefined && object.payload_size !== null) {
      message.payloadSize = Long.fromString(object.payload_size);
    }
    if (object.content_type !== undefined && object.content_type !== null) {
      message.contentType = object.content_type;
    }
    message.expectChecksums = object.expect_checksums?.map(e => bytesFromBase64(e)) || [];
    return message;
  },
  toAmino(message: MsgDelegateUpdateObjectContent): MsgDelegateUpdateObjectContentAmino {
    const obj: any = {};
    obj.operator = message.operator;
    obj.updater = message.updater;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    obj.payload_size = message.payloadSize ? message.payloadSize.toString() : undefined;
    obj.content_type = message.contentType;
    if (message.expectChecksums) {
      obj.expect_checksums = message.expectChecksums.map(e => base64FromBytes(e));
    } else {
      obj.expect_checksums = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgDelegateUpdateObjectContentAminoMsg): MsgDelegateUpdateObjectContent {
    return MsgDelegateUpdateObjectContent.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDelegateUpdateObjectContentProtoMsg): MsgDelegateUpdateObjectContent {
    return MsgDelegateUpdateObjectContent.decode(message.value);
  },
  toProto(message: MsgDelegateUpdateObjectContent): Uint8Array {
    return MsgDelegateUpdateObjectContent.encode(message).finish();
  },
  toProtoMsg(message: MsgDelegateUpdateObjectContent): MsgDelegateUpdateObjectContentProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgDelegateUpdateObjectContent",
      value: MsgDelegateUpdateObjectContent.encode(message).finish()
    };
  }
};
function createBaseMsgDelegateUpdateObjectContentResponse(): MsgDelegateUpdateObjectContentResponse {
  return {};
}
export const MsgDelegateUpdateObjectContentResponse = {
  typeUrl: "/greenfield.storage.MsgDelegateUpdateObjectContentResponse",
  encode(_: MsgDelegateUpdateObjectContentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateUpdateObjectContentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateUpdateObjectContentResponse();
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
  fromJSON(_: any): MsgDelegateUpdateObjectContentResponse {
    return {};
  },
  toJSON(_: MsgDelegateUpdateObjectContentResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDelegateUpdateObjectContentResponse>, I>>(_: I): MsgDelegateUpdateObjectContentResponse {
    const message = createBaseMsgDelegateUpdateObjectContentResponse();
    return message;
  },
  fromSDK(_: MsgDelegateUpdateObjectContentResponseSDKType): MsgDelegateUpdateObjectContentResponse {
    return {};
  },
  toSDK(_: MsgDelegateUpdateObjectContentResponse): MsgDelegateUpdateObjectContentResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgDelegateUpdateObjectContentResponseAmino): MsgDelegateUpdateObjectContentResponse {
    const message = createBaseMsgDelegateUpdateObjectContentResponse();
    return message;
  },
  toAmino(_: MsgDelegateUpdateObjectContentResponse): MsgDelegateUpdateObjectContentResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDelegateUpdateObjectContentResponseAminoMsg): MsgDelegateUpdateObjectContentResponse {
    return MsgDelegateUpdateObjectContentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDelegateUpdateObjectContentResponseProtoMsg): MsgDelegateUpdateObjectContentResponse {
    return MsgDelegateUpdateObjectContentResponse.decode(message.value);
  },
  toProto(message: MsgDelegateUpdateObjectContentResponse): Uint8Array {
    return MsgDelegateUpdateObjectContentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDelegateUpdateObjectContentResponse): MsgDelegateUpdateObjectContentResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgDelegateUpdateObjectContentResponse",
      value: MsgDelegateUpdateObjectContentResponse.encode(message).finish()
    };
  }
};
function createBaseMsgToggleSPAsDelegatedAgent(): MsgToggleSPAsDelegatedAgent {
  return {
    operator: "",
    bucketName: ""
  };
}
export const MsgToggleSPAsDelegatedAgent = {
  typeUrl: "/greenfield.storage.MsgToggleSPAsDelegatedAgent",
  encode(message: MsgToggleSPAsDelegatedAgent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgToggleSPAsDelegatedAgent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgToggleSPAsDelegatedAgent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.bucketName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgToggleSPAsDelegatedAgent {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : ""
    };
  },
  toJSON(message: MsgToggleSPAsDelegatedAgent): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgToggleSPAsDelegatedAgent>, I>>(object: I): MsgToggleSPAsDelegatedAgent {
    const message = createBaseMsgToggleSPAsDelegatedAgent();
    message.operator = object.operator ?? "";
    message.bucketName = object.bucketName ?? "";
    return message;
  },
  fromSDK(object: MsgToggleSPAsDelegatedAgentSDKType): MsgToggleSPAsDelegatedAgent {
    return {
      operator: object?.operator,
      bucketName: object?.bucket_name
    };
  },
  toSDK(message: MsgToggleSPAsDelegatedAgent): MsgToggleSPAsDelegatedAgentSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    return obj;
  },
  fromAmino(object: MsgToggleSPAsDelegatedAgentAmino): MsgToggleSPAsDelegatedAgent {
    const message = createBaseMsgToggleSPAsDelegatedAgent();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    return message;
  },
  toAmino(message: MsgToggleSPAsDelegatedAgent): MsgToggleSPAsDelegatedAgentAmino {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    return obj;
  },
  fromAminoMsg(object: MsgToggleSPAsDelegatedAgentAminoMsg): MsgToggleSPAsDelegatedAgent {
    return MsgToggleSPAsDelegatedAgent.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgToggleSPAsDelegatedAgentProtoMsg): MsgToggleSPAsDelegatedAgent {
    return MsgToggleSPAsDelegatedAgent.decode(message.value);
  },
  toProto(message: MsgToggleSPAsDelegatedAgent): Uint8Array {
    return MsgToggleSPAsDelegatedAgent.encode(message).finish();
  },
  toProtoMsg(message: MsgToggleSPAsDelegatedAgent): MsgToggleSPAsDelegatedAgentProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgToggleSPAsDelegatedAgent",
      value: MsgToggleSPAsDelegatedAgent.encode(message).finish()
    };
  }
};
function createBaseMsgToggleSPAsDelegatedAgentResponse(): MsgToggleSPAsDelegatedAgentResponse {
  return {};
}
export const MsgToggleSPAsDelegatedAgentResponse = {
  typeUrl: "/greenfield.storage.MsgToggleSPAsDelegatedAgentResponse",
  encode(_: MsgToggleSPAsDelegatedAgentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgToggleSPAsDelegatedAgentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgToggleSPAsDelegatedAgentResponse();
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
  fromJSON(_: any): MsgToggleSPAsDelegatedAgentResponse {
    return {};
  },
  toJSON(_: MsgToggleSPAsDelegatedAgentResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgToggleSPAsDelegatedAgentResponse>, I>>(_: I): MsgToggleSPAsDelegatedAgentResponse {
    const message = createBaseMsgToggleSPAsDelegatedAgentResponse();
    return message;
  },
  fromSDK(_: MsgToggleSPAsDelegatedAgentResponseSDKType): MsgToggleSPAsDelegatedAgentResponse {
    return {};
  },
  toSDK(_: MsgToggleSPAsDelegatedAgentResponse): MsgToggleSPAsDelegatedAgentResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgToggleSPAsDelegatedAgentResponseAmino): MsgToggleSPAsDelegatedAgentResponse {
    const message = createBaseMsgToggleSPAsDelegatedAgentResponse();
    return message;
  },
  toAmino(_: MsgToggleSPAsDelegatedAgentResponse): MsgToggleSPAsDelegatedAgentResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgToggleSPAsDelegatedAgentResponseAminoMsg): MsgToggleSPAsDelegatedAgentResponse {
    return MsgToggleSPAsDelegatedAgentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgToggleSPAsDelegatedAgentResponseProtoMsg): MsgToggleSPAsDelegatedAgentResponse {
    return MsgToggleSPAsDelegatedAgentResponse.decode(message.value);
  },
  toProto(message: MsgToggleSPAsDelegatedAgentResponse): Uint8Array {
    return MsgToggleSPAsDelegatedAgentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgToggleSPAsDelegatedAgentResponse): MsgToggleSPAsDelegatedAgentResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.MsgToggleSPAsDelegatedAgentResponse",
      value: MsgToggleSPAsDelegatedAgentResponse.encode(message).finish()
    };
  }
};
/** Msg defines the Msg service. */
export interface Msg {
  /** basic operation of bucket */
  CreateBucket(request: MsgCreateBucket): Promise<MsgCreateBucketResponse>;
  DeleteBucket(request: MsgDeleteBucket): Promise<MsgDeleteBucketResponse>;
  UpdateBucketInfo(request: MsgUpdateBucketInfo): Promise<MsgUpdateBucketInfoResponse>;
  MirrorBucket(request: MsgMirrorBucket): Promise<MsgMirrorBucketResponse>;
  DiscontinueBucket(request: MsgDiscontinueBucket): Promise<MsgDiscontinueBucketResponse>;
  ToggleSPAsDelegatedAgent(request: MsgToggleSPAsDelegatedAgent): Promise<MsgToggleSPAsDelegatedAgentResponse>;
  /** basic operation of object */
  CreateObject(request: MsgCreateObject): Promise<MsgCreateObjectResponse>;
  SealObject(request: MsgSealObject): Promise<MsgSealObjectResponse>;
  SealObjectV2(request: MsgSealObjectV2): Promise<MsgSealObjectV2Response>;
  RejectSealObject(request: MsgRejectSealObject): Promise<MsgRejectSealObjectResponse>;
  CopyObject(request: MsgCopyObject): Promise<MsgCopyObjectResponse>;
  DeleteObject(request: MsgDeleteObject): Promise<MsgDeleteObjectResponse>;
  CancelCreateObject(request: MsgCancelCreateObject): Promise<MsgCancelCreateObjectResponse>;
  MirrorObject(request: MsgMirrorObject): Promise<MsgMirrorObjectResponse>;
  DiscontinueObject(request: MsgDiscontinueObject): Promise<MsgDiscontinueObjectResponse>;
  UpdateObjectInfo(request: MsgUpdateObjectInfo): Promise<MsgUpdateObjectInfoResponse>;
  UpdateObjectContent(request: MsgUpdateObjectContent): Promise<MsgUpdateObjectContentResponse>;
  CancelUpdateObjectContent(request: MsgCancelUpdateObjectContent): Promise<MsgCancelUpdateObjectContentResponse>;
  DelegateCreateObject(request: MsgDelegateCreateObject): Promise<MsgDelegateCreateObjectResponse>;
  DelegateUpdateObjectContent(request: MsgDelegateUpdateObjectContent): Promise<MsgDelegateUpdateObjectContentResponse>;
  /** basic operation of group */
  CreateGroup(request: MsgCreateGroup): Promise<MsgCreateGroupResponse>;
  DeleteGroup(request: MsgDeleteGroup): Promise<MsgDeleteGroupResponse>;
  UpdateGroupMember(request: MsgUpdateGroupMember): Promise<MsgUpdateGroupMemberResponse>;
  UpdateGroupExtra(request: MsgUpdateGroupExtra): Promise<MsgUpdateGroupExtraResponse>;
  LeaveGroup(request: MsgLeaveGroup): Promise<MsgLeaveGroupResponse>;
  MirrorGroup(request: MsgMirrorGroup): Promise<MsgMirrorGroupResponse>;
  RenewGroupMember(request: MsgRenewGroupMember): Promise<MsgRenewGroupMemberResponse>;
  /** basic operation of policy */
  PutPolicy(request: MsgPutPolicy): Promise<MsgPutPolicyResponse>;
  DeletePolicy(request: MsgDeletePolicy): Promise<MsgDeletePolicyResponse>;
  /** Since: cosmos-sdk 0.47 */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  MigrateBucket(request: MsgMigrateBucket): Promise<MsgMigrateBucketResponse>;
  CompleteMigrateBucket(request: MsgCompleteMigrateBucket): Promise<MsgCompleteMigrateBucketResponse>;
  CancelMigrateBucket(request: MsgCancelMigrateBucket): Promise<MsgCancelMigrateBucketResponse>;
  RejectMigrateBucket(request: MsgRejectMigrateBucket): Promise<MsgRejectMigrateBucketResponse>;
  /** Since: Manchurian upgrade */
  SetTag(request: MsgSetTag): Promise<MsgSetTagResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateBucket = this.CreateBucket.bind(this);
    this.DeleteBucket = this.DeleteBucket.bind(this);
    this.UpdateBucketInfo = this.UpdateBucketInfo.bind(this);
    this.MirrorBucket = this.MirrorBucket.bind(this);
    this.DiscontinueBucket = this.DiscontinueBucket.bind(this);
    this.ToggleSPAsDelegatedAgent = this.ToggleSPAsDelegatedAgent.bind(this);
    this.CreateObject = this.CreateObject.bind(this);
    this.SealObject = this.SealObject.bind(this);
    this.SealObjectV2 = this.SealObjectV2.bind(this);
    this.RejectSealObject = this.RejectSealObject.bind(this);
    this.CopyObject = this.CopyObject.bind(this);
    this.DeleteObject = this.DeleteObject.bind(this);
    this.CancelCreateObject = this.CancelCreateObject.bind(this);
    this.MirrorObject = this.MirrorObject.bind(this);
    this.DiscontinueObject = this.DiscontinueObject.bind(this);
    this.UpdateObjectInfo = this.UpdateObjectInfo.bind(this);
    this.UpdateObjectContent = this.UpdateObjectContent.bind(this);
    this.CancelUpdateObjectContent = this.CancelUpdateObjectContent.bind(this);
    this.DelegateCreateObject = this.DelegateCreateObject.bind(this);
    this.DelegateUpdateObjectContent = this.DelegateUpdateObjectContent.bind(this);
    this.CreateGroup = this.CreateGroup.bind(this);
    this.DeleteGroup = this.DeleteGroup.bind(this);
    this.UpdateGroupMember = this.UpdateGroupMember.bind(this);
    this.UpdateGroupExtra = this.UpdateGroupExtra.bind(this);
    this.LeaveGroup = this.LeaveGroup.bind(this);
    this.MirrorGroup = this.MirrorGroup.bind(this);
    this.RenewGroupMember = this.RenewGroupMember.bind(this);
    this.PutPolicy = this.PutPolicy.bind(this);
    this.DeletePolicy = this.DeletePolicy.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
    this.MigrateBucket = this.MigrateBucket.bind(this);
    this.CompleteMigrateBucket = this.CompleteMigrateBucket.bind(this);
    this.CancelMigrateBucket = this.CancelMigrateBucket.bind(this);
    this.RejectMigrateBucket = this.RejectMigrateBucket.bind(this);
    this.SetTag = this.SetTag.bind(this);
  }
  CreateBucket(request: MsgCreateBucket): Promise<MsgCreateBucketResponse> {
    const data = MsgCreateBucket.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Msg", "CreateBucket", data);
    return promise.then(data => MsgCreateBucketResponse.decode(new _m0.Reader(data)));
  }
  DeleteBucket(request: MsgDeleteBucket): Promise<MsgDeleteBucketResponse> {
    const data = MsgDeleteBucket.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Msg", "DeleteBucket", data);
    return promise.then(data => MsgDeleteBucketResponse.decode(new _m0.Reader(data)));
  }
  UpdateBucketInfo(request: MsgUpdateBucketInfo): Promise<MsgUpdateBucketInfoResponse> {
    const data = MsgUpdateBucketInfo.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Msg", "UpdateBucketInfo", data);
    return promise.then(data => MsgUpdateBucketInfoResponse.decode(new _m0.Reader(data)));
  }
  MirrorBucket(request: MsgMirrorBucket): Promise<MsgMirrorBucketResponse> {
    const data = MsgMirrorBucket.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Msg", "MirrorBucket", data);
    return promise.then(data => MsgMirrorBucketResponse.decode(new _m0.Reader(data)));
  }
  DiscontinueBucket(request: MsgDiscontinueBucket): Promise<MsgDiscontinueBucketResponse> {
    const data = MsgDiscontinueBucket.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Msg", "DiscontinueBucket", data);
    return promise.then(data => MsgDiscontinueBucketResponse.decode(new _m0.Reader(data)));
  }
  ToggleSPAsDelegatedAgent(request: MsgToggleSPAsDelegatedAgent): Promise<MsgToggleSPAsDelegatedAgentResponse> {
    const data = MsgToggleSPAsDelegatedAgent.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Msg", "ToggleSPAsDelegatedAgent", data);
    return promise.then(data => MsgToggleSPAsDelegatedAgentResponse.decode(new _m0.Reader(data)));
  }
  CreateObject(request: MsgCreateObject): Promise<MsgCreateObjectResponse> {
    const data = MsgCreateObject.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Msg", "CreateObject", data);
    return promise.then(data => MsgCreateObjectResponse.decode(new _m0.Reader(data)));
  }
  SealObject(request: MsgSealObject): Promise<MsgSealObjectResponse> {
    const data = MsgSealObject.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Msg", "SealObject", data);
    return promise.then(data => MsgSealObjectResponse.decode(new _m0.Reader(data)));
  }
  SealObjectV2(request: MsgSealObjectV2): Promise<MsgSealObjectV2Response> {
    const data = MsgSealObjectV2.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Msg", "SealObjectV2", data);
    return promise.then(data => MsgSealObjectV2Response.decode(new _m0.Reader(data)));
  }
  RejectSealObject(request: MsgRejectSealObject): Promise<MsgRejectSealObjectResponse> {
    const data = MsgRejectSealObject.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Msg", "RejectSealObject", data);
    return promise.then(data => MsgRejectSealObjectResponse.decode(new _m0.Reader(data)));
  }
  CopyObject(request: MsgCopyObject): Promise<MsgCopyObjectResponse> {
    const data = MsgCopyObject.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Msg", "CopyObject", data);
    return promise.then(data => MsgCopyObjectResponse.decode(new _m0.Reader(data)));
  }
  DeleteObject(request: MsgDeleteObject): Promise<MsgDeleteObjectResponse> {
    const data = MsgDeleteObject.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Msg", "DeleteObject", data);
    return promise.then(data => MsgDeleteObjectResponse.decode(new _m0.Reader(data)));
  }
  CancelCreateObject(request: MsgCancelCreateObject): Promise<MsgCancelCreateObjectResponse> {
    const data = MsgCancelCreateObject.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Msg", "CancelCreateObject", data);
    return promise.then(data => MsgCancelCreateObjectResponse.decode(new _m0.Reader(data)));
  }
  MirrorObject(request: MsgMirrorObject): Promise<MsgMirrorObjectResponse> {
    const data = MsgMirrorObject.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Msg", "MirrorObject", data);
    return promise.then(data => MsgMirrorObjectResponse.decode(new _m0.Reader(data)));
  }
  DiscontinueObject(request: MsgDiscontinueObject): Promise<MsgDiscontinueObjectResponse> {
    const data = MsgDiscontinueObject.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Msg", "DiscontinueObject", data);
    return promise.then(data => MsgDiscontinueObjectResponse.decode(new _m0.Reader(data)));
  }
  UpdateObjectInfo(request: MsgUpdateObjectInfo): Promise<MsgUpdateObjectInfoResponse> {
    const data = MsgUpdateObjectInfo.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Msg", "UpdateObjectInfo", data);
    return promise.then(data => MsgUpdateObjectInfoResponse.decode(new _m0.Reader(data)));
  }
  UpdateObjectContent(request: MsgUpdateObjectContent): Promise<MsgUpdateObjectContentResponse> {
    const data = MsgUpdateObjectContent.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Msg", "UpdateObjectContent", data);
    return promise.then(data => MsgUpdateObjectContentResponse.decode(new _m0.Reader(data)));
  }
  CancelUpdateObjectContent(request: MsgCancelUpdateObjectContent): Promise<MsgCancelUpdateObjectContentResponse> {
    const data = MsgCancelUpdateObjectContent.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Msg", "CancelUpdateObjectContent", data);
    return promise.then(data => MsgCancelUpdateObjectContentResponse.decode(new _m0.Reader(data)));
  }
  DelegateCreateObject(request: MsgDelegateCreateObject): Promise<MsgDelegateCreateObjectResponse> {
    const data = MsgDelegateCreateObject.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Msg", "DelegateCreateObject", data);
    return promise.then(data => MsgDelegateCreateObjectResponse.decode(new _m0.Reader(data)));
  }
  DelegateUpdateObjectContent(request: MsgDelegateUpdateObjectContent): Promise<MsgDelegateUpdateObjectContentResponse> {
    const data = MsgDelegateUpdateObjectContent.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Msg", "DelegateUpdateObjectContent", data);
    return promise.then(data => MsgDelegateUpdateObjectContentResponse.decode(new _m0.Reader(data)));
  }
  CreateGroup(request: MsgCreateGroup): Promise<MsgCreateGroupResponse> {
    const data = MsgCreateGroup.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Msg", "CreateGroup", data);
    return promise.then(data => MsgCreateGroupResponse.decode(new _m0.Reader(data)));
  }
  DeleteGroup(request: MsgDeleteGroup): Promise<MsgDeleteGroupResponse> {
    const data = MsgDeleteGroup.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Msg", "DeleteGroup", data);
    return promise.then(data => MsgDeleteGroupResponse.decode(new _m0.Reader(data)));
  }
  UpdateGroupMember(request: MsgUpdateGroupMember): Promise<MsgUpdateGroupMemberResponse> {
    const data = MsgUpdateGroupMember.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Msg", "UpdateGroupMember", data);
    return promise.then(data => MsgUpdateGroupMemberResponse.decode(new _m0.Reader(data)));
  }
  UpdateGroupExtra(request: MsgUpdateGroupExtra): Promise<MsgUpdateGroupExtraResponse> {
    const data = MsgUpdateGroupExtra.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Msg", "UpdateGroupExtra", data);
    return promise.then(data => MsgUpdateGroupExtraResponse.decode(new _m0.Reader(data)));
  }
  LeaveGroup(request: MsgLeaveGroup): Promise<MsgLeaveGroupResponse> {
    const data = MsgLeaveGroup.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Msg", "LeaveGroup", data);
    return promise.then(data => MsgLeaveGroupResponse.decode(new _m0.Reader(data)));
  }
  MirrorGroup(request: MsgMirrorGroup): Promise<MsgMirrorGroupResponse> {
    const data = MsgMirrorGroup.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Msg", "MirrorGroup", data);
    return promise.then(data => MsgMirrorGroupResponse.decode(new _m0.Reader(data)));
  }
  RenewGroupMember(request: MsgRenewGroupMember): Promise<MsgRenewGroupMemberResponse> {
    const data = MsgRenewGroupMember.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Msg", "RenewGroupMember", data);
    return promise.then(data => MsgRenewGroupMemberResponse.decode(new _m0.Reader(data)));
  }
  PutPolicy(request: MsgPutPolicy): Promise<MsgPutPolicyResponse> {
    const data = MsgPutPolicy.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Msg", "PutPolicy", data);
    return promise.then(data => MsgPutPolicyResponse.decode(new _m0.Reader(data)));
  }
  DeletePolicy(request: MsgDeletePolicy): Promise<MsgDeletePolicyResponse> {
    const data = MsgDeletePolicy.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Msg", "DeletePolicy", data);
    return promise.then(data => MsgDeletePolicyResponse.decode(new _m0.Reader(data)));
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
  }
  MigrateBucket(request: MsgMigrateBucket): Promise<MsgMigrateBucketResponse> {
    const data = MsgMigrateBucket.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Msg", "MigrateBucket", data);
    return promise.then(data => MsgMigrateBucketResponse.decode(new _m0.Reader(data)));
  }
  CompleteMigrateBucket(request: MsgCompleteMigrateBucket): Promise<MsgCompleteMigrateBucketResponse> {
    const data = MsgCompleteMigrateBucket.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Msg", "CompleteMigrateBucket", data);
    return promise.then(data => MsgCompleteMigrateBucketResponse.decode(new _m0.Reader(data)));
  }
  CancelMigrateBucket(request: MsgCancelMigrateBucket): Promise<MsgCancelMigrateBucketResponse> {
    const data = MsgCancelMigrateBucket.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Msg", "CancelMigrateBucket", data);
    return promise.then(data => MsgCancelMigrateBucketResponse.decode(new _m0.Reader(data)));
  }
  RejectMigrateBucket(request: MsgRejectMigrateBucket): Promise<MsgRejectMigrateBucketResponse> {
    const data = MsgRejectMigrateBucket.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Msg", "RejectMigrateBucket", data);
    return promise.then(data => MsgRejectMigrateBucketResponse.decode(new _m0.Reader(data)));
  }
  SetTag(request: MsgSetTag): Promise<MsgSetTagResponse> {
    const data = MsgSetTag.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Msg", "SetTag", data);
    return promise.then(data => MsgSetTagResponse.decode(new _m0.Reader(data)));
  }
}