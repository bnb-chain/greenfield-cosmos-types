//@ts-nocheck
/* eslint-disable */
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { ActionType, Effect, actionTypeFromJSON, actionTypeToJSON, effectFromJSON, effectToJSON } from "../permission/common";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BucketInfo, BucketInfoAmino, BucketInfoSDKType, ObjectInfo, ObjectInfoAmino, ObjectInfoSDKType, BucketMetaData, BucketMetaDataAmino, BucketMetaDataSDKType, ObjectMetaData, ObjectMetaDataAmino, ObjectMetaDataSDKType, GroupMetaData, GroupMetaDataAmino, GroupMetaDataSDKType, GroupInfo, GroupInfoAmino, GroupInfoSDKType, InternalBucketInfo, InternalBucketInfoAmino, InternalBucketInfoSDKType } from "./types";
import { GlobalVirtualGroup, GlobalVirtualGroupAmino, GlobalVirtualGroupSDKType } from "../virtualgroup/types";
import { Policy, PolicyAmino, PolicySDKType, GroupMember, GroupMemberAmino, GroupMemberSDKType } from "../permission/types";
import { Long, DeepPartial, Exact, isSet, isObject, Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { Decimal } from "@cosmjs/math";
export const protobufPackage = "greenfield.storage";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/greenfield.storage.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/greenfield.storage.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/greenfield.storage.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/greenfield.storage.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** QueryVersionedParamsRequest is request type for the Query/Params RPC method with timestamp. */
export interface QueryParamsByTimestampRequest {
  /** the timestamp of the block time you want to query */
  timestamp: Long;
}
export interface QueryParamsByTimestampRequestProtoMsg {
  typeUrl: "/greenfield.storage.QueryParamsByTimestampRequest";
  value: Uint8Array;
}
/** QueryVersionedParamsRequest is request type for the Query/Params RPC method with timestamp. */
export interface QueryParamsByTimestampRequestAmino {
  /** the timestamp of the block time you want to query */
  timestamp?: string;
}
export interface QueryParamsByTimestampRequestAminoMsg {
  type: "/greenfield.storage.QueryParamsByTimestampRequest";
  value: QueryParamsByTimestampRequestAmino;
}
/** QueryVersionedParamsRequest is request type for the Query/Params RPC method with timestamp. */
export interface QueryParamsByTimestampRequestSDKType {
  timestamp: Long;
}
/** QueryVersionedParamsResponse is response type for the Query/Params RPC method with timestamp. */
export interface QueryParamsByTimestampResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsByTimestampResponseProtoMsg {
  typeUrl: "/greenfield.storage.QueryParamsByTimestampResponse";
  value: Uint8Array;
}
/** QueryVersionedParamsResponse is response type for the Query/Params RPC method with timestamp. */
export interface QueryParamsByTimestampResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsByTimestampResponseAminoMsg {
  type: "/greenfield.storage.QueryParamsByTimestampResponse";
  value: QueryParamsByTimestampResponseAmino;
}
/** QueryVersionedParamsResponse is response type for the Query/Params RPC method with timestamp. */
export interface QueryParamsByTimestampResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryHeadBucketRequest {
  bucketName: string;
}
export interface QueryHeadBucketRequestProtoMsg {
  typeUrl: "/greenfield.storage.QueryHeadBucketRequest";
  value: Uint8Array;
}
export interface QueryHeadBucketRequestAmino {
  bucket_name?: string;
}
export interface QueryHeadBucketRequestAminoMsg {
  type: "/greenfield.storage.QueryHeadBucketRequest";
  value: QueryHeadBucketRequestAmino;
}
export interface QueryHeadBucketRequestSDKType {
  bucket_name: string;
}
export interface QueryHeadBucketByIdRequest {
  bucketId: string;
}
export interface QueryHeadBucketByIdRequestProtoMsg {
  typeUrl: "/greenfield.storage.QueryHeadBucketByIdRequest";
  value: Uint8Array;
}
export interface QueryHeadBucketByIdRequestAmino {
  bucket_id?: string;
}
export interface QueryHeadBucketByIdRequestAminoMsg {
  type: "/greenfield.storage.QueryHeadBucketByIdRequest";
  value: QueryHeadBucketByIdRequestAmino;
}
export interface QueryHeadBucketByIdRequestSDKType {
  bucket_id: string;
}
export interface QueryHeadBucketResponse {
  bucketInfo?: BucketInfo;
}
export interface QueryHeadBucketResponseProtoMsg {
  typeUrl: "/greenfield.storage.QueryHeadBucketResponse";
  value: Uint8Array;
}
export interface QueryHeadBucketResponseAmino {
  bucket_info?: BucketInfoAmino;
}
export interface QueryHeadBucketResponseAminoMsg {
  type: "/greenfield.storage.QueryHeadBucketResponse";
  value: QueryHeadBucketResponseAmino;
}
export interface QueryHeadBucketResponseSDKType {
  bucket_info?: BucketInfoSDKType;
}
export interface QueryHeadObjectRequest {
  bucketName: string;
  objectName: string;
}
export interface QueryHeadObjectRequestProtoMsg {
  typeUrl: "/greenfield.storage.QueryHeadObjectRequest";
  value: Uint8Array;
}
export interface QueryHeadObjectRequestAmino {
  bucket_name?: string;
  object_name?: string;
}
export interface QueryHeadObjectRequestAminoMsg {
  type: "/greenfield.storage.QueryHeadObjectRequest";
  value: QueryHeadObjectRequestAmino;
}
export interface QueryHeadObjectRequestSDKType {
  bucket_name: string;
  object_name: string;
}
export interface QueryHeadObjectByIdRequest {
  objectId: string;
}
export interface QueryHeadObjectByIdRequestProtoMsg {
  typeUrl: "/greenfield.storage.QueryHeadObjectByIdRequest";
  value: Uint8Array;
}
export interface QueryHeadObjectByIdRequestAmino {
  object_id?: string;
}
export interface QueryHeadObjectByIdRequestAminoMsg {
  type: "/greenfield.storage.QueryHeadObjectByIdRequest";
  value: QueryHeadObjectByIdRequestAmino;
}
export interface QueryHeadObjectByIdRequestSDKType {
  object_id: string;
}
export interface QueryHeadObjectResponse {
  objectInfo?: ObjectInfo;
  globalVirtualGroup?: GlobalVirtualGroup;
}
export interface QueryHeadObjectResponseProtoMsg {
  typeUrl: "/greenfield.storage.QueryHeadObjectResponse";
  value: Uint8Array;
}
export interface QueryHeadObjectResponseAmino {
  object_info?: ObjectInfoAmino;
  global_virtual_group?: GlobalVirtualGroupAmino;
}
export interface QueryHeadObjectResponseAminoMsg {
  type: "/greenfield.storage.QueryHeadObjectResponse";
  value: QueryHeadObjectResponseAmino;
}
export interface QueryHeadObjectResponseSDKType {
  object_info?: ObjectInfoSDKType;
  global_virtual_group?: GlobalVirtualGroupSDKType;
}
export interface QueryListBucketsRequest {
  pagination?: PageRequest;
}
export interface QueryListBucketsRequestProtoMsg {
  typeUrl: "/greenfield.storage.QueryListBucketsRequest";
  value: Uint8Array;
}
export interface QueryListBucketsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryListBucketsRequestAminoMsg {
  type: "/greenfield.storage.QueryListBucketsRequest";
  value: QueryListBucketsRequestAmino;
}
export interface QueryListBucketsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryListBucketsResponse {
  bucketInfos: BucketInfo[];
  pagination?: PageResponse;
}
export interface QueryListBucketsResponseProtoMsg {
  typeUrl: "/greenfield.storage.QueryListBucketsResponse";
  value: Uint8Array;
}
export interface QueryListBucketsResponseAmino {
  bucket_infos?: BucketInfoAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryListBucketsResponseAminoMsg {
  type: "/greenfield.storage.QueryListBucketsResponse";
  value: QueryListBucketsResponseAmino;
}
export interface QueryListBucketsResponseSDKType {
  bucket_infos: BucketInfoSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryListObjectsRequest {
  pagination?: PageRequest;
  bucketName: string;
}
export interface QueryListObjectsRequestProtoMsg {
  typeUrl: "/greenfield.storage.QueryListObjectsRequest";
  value: Uint8Array;
}
export interface QueryListObjectsRequestAmino {
  pagination?: PageRequestAmino;
  bucket_name?: string;
}
export interface QueryListObjectsRequestAminoMsg {
  type: "/greenfield.storage.QueryListObjectsRequest";
  value: QueryListObjectsRequestAmino;
}
export interface QueryListObjectsRequestSDKType {
  pagination?: PageRequestSDKType;
  bucket_name: string;
}
export interface QueryListObjectsByBucketIdRequest {
  pagination?: PageRequest;
  bucketId: string;
}
export interface QueryListObjectsByBucketIdRequestProtoMsg {
  typeUrl: "/greenfield.storage.QueryListObjectsByBucketIdRequest";
  value: Uint8Array;
}
export interface QueryListObjectsByBucketIdRequestAmino {
  pagination?: PageRequestAmino;
  bucket_id?: string;
}
export interface QueryListObjectsByBucketIdRequestAminoMsg {
  type: "/greenfield.storage.QueryListObjectsByBucketIdRequest";
  value: QueryListObjectsByBucketIdRequestAmino;
}
export interface QueryListObjectsByBucketIdRequestSDKType {
  pagination?: PageRequestSDKType;
  bucket_id: string;
}
export interface QueryListObjectsResponse {
  objectInfos: ObjectInfo[];
  pagination?: PageResponse;
}
export interface QueryListObjectsResponseProtoMsg {
  typeUrl: "/greenfield.storage.QueryListObjectsResponse";
  value: Uint8Array;
}
export interface QueryListObjectsResponseAmino {
  object_infos?: ObjectInfoAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryListObjectsResponseAminoMsg {
  type: "/greenfield.storage.QueryListObjectsResponse";
  value: QueryListObjectsResponseAmino;
}
export interface QueryListObjectsResponseSDKType {
  object_infos: ObjectInfoSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryNFTRequest {
  tokenId: string;
}
export interface QueryNFTRequestProtoMsg {
  typeUrl: "/greenfield.storage.QueryNFTRequest";
  value: Uint8Array;
}
export interface QueryNFTRequestAmino {
  token_id?: string;
}
export interface QueryNFTRequestAminoMsg {
  type: "/greenfield.storage.QueryNFTRequest";
  value: QueryNFTRequestAmino;
}
export interface QueryNFTRequestSDKType {
  token_id: string;
}
export interface QueryBucketNFTResponse {
  metaData?: BucketMetaData;
}
export interface QueryBucketNFTResponseProtoMsg {
  typeUrl: "/greenfield.storage.QueryBucketNFTResponse";
  value: Uint8Array;
}
export interface QueryBucketNFTResponseAmino {
  meta_data?: BucketMetaDataAmino;
}
export interface QueryBucketNFTResponseAminoMsg {
  type: "/greenfield.storage.QueryBucketNFTResponse";
  value: QueryBucketNFTResponseAmino;
}
export interface QueryBucketNFTResponseSDKType {
  meta_data?: BucketMetaDataSDKType;
}
export interface QueryObjectNFTResponse {
  metaData?: ObjectMetaData;
}
export interface QueryObjectNFTResponseProtoMsg {
  typeUrl: "/greenfield.storage.QueryObjectNFTResponse";
  value: Uint8Array;
}
export interface QueryObjectNFTResponseAmino {
  meta_data?: ObjectMetaDataAmino;
}
export interface QueryObjectNFTResponseAminoMsg {
  type: "/greenfield.storage.QueryObjectNFTResponse";
  value: QueryObjectNFTResponseAmino;
}
export interface QueryObjectNFTResponseSDKType {
  meta_data?: ObjectMetaDataSDKType;
}
export interface QueryGroupNFTResponse {
  metaData?: GroupMetaData;
}
export interface QueryGroupNFTResponseProtoMsg {
  typeUrl: "/greenfield.storage.QueryGroupNFTResponse";
  value: Uint8Array;
}
export interface QueryGroupNFTResponseAmino {
  meta_data?: GroupMetaDataAmino;
}
export interface QueryGroupNFTResponseAminoMsg {
  type: "/greenfield.storage.QueryGroupNFTResponse";
  value: QueryGroupNFTResponseAmino;
}
export interface QueryGroupNFTResponseSDKType {
  meta_data?: GroupMetaDataSDKType;
}
export interface QueryPolicyForAccountRequest {
  resource: string;
  principalAddress: string;
}
export interface QueryPolicyForAccountRequestProtoMsg {
  typeUrl: "/greenfield.storage.QueryPolicyForAccountRequest";
  value: Uint8Array;
}
export interface QueryPolicyForAccountRequestAmino {
  resource?: string;
  principal_address?: string;
}
export interface QueryPolicyForAccountRequestAminoMsg {
  type: "/greenfield.storage.QueryPolicyForAccountRequest";
  value: QueryPolicyForAccountRequestAmino;
}
export interface QueryPolicyForAccountRequestSDKType {
  resource: string;
  principal_address: string;
}
export interface QueryPolicyForAccountResponse {
  policy?: Policy;
}
export interface QueryPolicyForAccountResponseProtoMsg {
  typeUrl: "/greenfield.storage.QueryPolicyForAccountResponse";
  value: Uint8Array;
}
export interface QueryPolicyForAccountResponseAmino {
  policy?: PolicyAmino;
}
export interface QueryPolicyForAccountResponseAminoMsg {
  type: "/greenfield.storage.QueryPolicyForAccountResponse";
  value: QueryPolicyForAccountResponseAmino;
}
export interface QueryPolicyForAccountResponseSDKType {
  policy?: PolicySDKType;
}
export interface QueryVerifyPermissionRequest {
  operator: string;
  bucketName: string;
  objectName: string;
  actionType: ActionType;
}
export interface QueryVerifyPermissionRequestProtoMsg {
  typeUrl: "/greenfield.storage.QueryVerifyPermissionRequest";
  value: Uint8Array;
}
export interface QueryVerifyPermissionRequestAmino {
  operator?: string;
  bucket_name?: string;
  object_name?: string;
  action_type?: ActionType;
}
export interface QueryVerifyPermissionRequestAminoMsg {
  type: "/greenfield.storage.QueryVerifyPermissionRequest";
  value: QueryVerifyPermissionRequestAmino;
}
export interface QueryVerifyPermissionRequestSDKType {
  operator: string;
  bucket_name: string;
  object_name: string;
  action_type: ActionType;
}
export interface QueryVerifyPermissionResponse {
  effect: Effect;
}
export interface QueryVerifyPermissionResponseProtoMsg {
  typeUrl: "/greenfield.storage.QueryVerifyPermissionResponse";
  value: Uint8Array;
}
export interface QueryVerifyPermissionResponseAmino {
  effect?: Effect;
}
export interface QueryVerifyPermissionResponseAminoMsg {
  type: "/greenfield.storage.QueryVerifyPermissionResponse";
  value: QueryVerifyPermissionResponseAmino;
}
export interface QueryVerifyPermissionResponseSDKType {
  effect: Effect;
}
export interface QueryHeadGroupRequest {
  groupOwner: string;
  groupName: string;
}
export interface QueryHeadGroupRequestProtoMsg {
  typeUrl: "/greenfield.storage.QueryHeadGroupRequest";
  value: Uint8Array;
}
export interface QueryHeadGroupRequestAmino {
  group_owner?: string;
  group_name?: string;
}
export interface QueryHeadGroupRequestAminoMsg {
  type: "/greenfield.storage.QueryHeadGroupRequest";
  value: QueryHeadGroupRequestAmino;
}
export interface QueryHeadGroupRequestSDKType {
  group_owner: string;
  group_name: string;
}
export interface QueryHeadGroupResponse {
  groupInfo?: GroupInfo;
}
export interface QueryHeadGroupResponseProtoMsg {
  typeUrl: "/greenfield.storage.QueryHeadGroupResponse";
  value: Uint8Array;
}
export interface QueryHeadGroupResponseAmino {
  group_info?: GroupInfoAmino;
}
export interface QueryHeadGroupResponseAminoMsg {
  type: "/greenfield.storage.QueryHeadGroupResponse";
  value: QueryHeadGroupResponseAmino;
}
export interface QueryHeadGroupResponseSDKType {
  group_info?: GroupInfoSDKType;
}
export interface QueryListGroupsRequest {
  pagination?: PageRequest;
  groupOwner: string;
}
export interface QueryListGroupsRequestProtoMsg {
  typeUrl: "/greenfield.storage.QueryListGroupsRequest";
  value: Uint8Array;
}
export interface QueryListGroupsRequestAmino {
  pagination?: PageRequestAmino;
  group_owner?: string;
}
export interface QueryListGroupsRequestAminoMsg {
  type: "/greenfield.storage.QueryListGroupsRequest";
  value: QueryListGroupsRequestAmino;
}
export interface QueryListGroupsRequestSDKType {
  pagination?: PageRequestSDKType;
  group_owner: string;
}
export interface QueryListGroupsResponse {
  pagination?: PageResponse;
  groupInfos: GroupInfo[];
}
export interface QueryListGroupsResponseProtoMsg {
  typeUrl: "/greenfield.storage.QueryListGroupsResponse";
  value: Uint8Array;
}
export interface QueryListGroupsResponseAmino {
  pagination?: PageResponseAmino;
  group_infos?: GroupInfoAmino[];
}
export interface QueryListGroupsResponseAminoMsg {
  type: "/greenfield.storage.QueryListGroupsResponse";
  value: QueryListGroupsResponseAmino;
}
export interface QueryListGroupsResponseSDKType {
  pagination?: PageResponseSDKType;
  group_infos: GroupInfoSDKType[];
}
export interface QueryHeadGroupMemberRequest {
  member: string;
  groupOwner: string;
  groupName: string;
}
export interface QueryHeadGroupMemberRequestProtoMsg {
  typeUrl: "/greenfield.storage.QueryHeadGroupMemberRequest";
  value: Uint8Array;
}
export interface QueryHeadGroupMemberRequestAmino {
  member?: string;
  group_owner?: string;
  group_name?: string;
}
export interface QueryHeadGroupMemberRequestAminoMsg {
  type: "/greenfield.storage.QueryHeadGroupMemberRequest";
  value: QueryHeadGroupMemberRequestAmino;
}
export interface QueryHeadGroupMemberRequestSDKType {
  member: string;
  group_owner: string;
  group_name: string;
}
export interface QueryHeadGroupMemberResponse {
  groupMember?: GroupMember;
}
export interface QueryHeadGroupMemberResponseProtoMsg {
  typeUrl: "/greenfield.storage.QueryHeadGroupMemberResponse";
  value: Uint8Array;
}
export interface QueryHeadGroupMemberResponseAmino {
  group_member?: GroupMemberAmino;
}
export interface QueryHeadGroupMemberResponseAminoMsg {
  type: "/greenfield.storage.QueryHeadGroupMemberResponse";
  value: QueryHeadGroupMemberResponseAmino;
}
export interface QueryHeadGroupMemberResponseSDKType {
  group_member?: GroupMemberSDKType;
}
export interface QueryPolicyForGroupRequest {
  resource: string;
  principalGroupId: string;
}
export interface QueryPolicyForGroupRequestProtoMsg {
  typeUrl: "/greenfield.storage.QueryPolicyForGroupRequest";
  value: Uint8Array;
}
export interface QueryPolicyForGroupRequestAmino {
  resource?: string;
  principal_group_id?: string;
}
export interface QueryPolicyForGroupRequestAminoMsg {
  type: "/greenfield.storage.QueryPolicyForGroupRequest";
  value: QueryPolicyForGroupRequestAmino;
}
export interface QueryPolicyForGroupRequestSDKType {
  resource: string;
  principal_group_id: string;
}
export interface QueryPolicyForGroupResponse {
  policy?: Policy;
}
export interface QueryPolicyForGroupResponseProtoMsg {
  typeUrl: "/greenfield.storage.QueryPolicyForGroupResponse";
  value: Uint8Array;
}
export interface QueryPolicyForGroupResponseAmino {
  policy?: PolicyAmino;
}
export interface QueryPolicyForGroupResponseAminoMsg {
  type: "/greenfield.storage.QueryPolicyForGroupResponse";
  value: QueryPolicyForGroupResponseAmino;
}
export interface QueryPolicyForGroupResponseSDKType {
  policy?: PolicySDKType;
}
export interface QueryPolicyByIdRequest {
  policyId: string;
}
export interface QueryPolicyByIdRequestProtoMsg {
  typeUrl: "/greenfield.storage.QueryPolicyByIdRequest";
  value: Uint8Array;
}
export interface QueryPolicyByIdRequestAmino {
  policy_id?: string;
}
export interface QueryPolicyByIdRequestAminoMsg {
  type: "/greenfield.storage.QueryPolicyByIdRequest";
  value: QueryPolicyByIdRequestAmino;
}
export interface QueryPolicyByIdRequestSDKType {
  policy_id: string;
}
export interface QueryPolicyByIdResponse {
  policy?: Policy;
}
export interface QueryPolicyByIdResponseProtoMsg {
  typeUrl: "/greenfield.storage.QueryPolicyByIdResponse";
  value: Uint8Array;
}
export interface QueryPolicyByIdResponseAmino {
  policy?: PolicyAmino;
}
export interface QueryPolicyByIdResponseAminoMsg {
  type: "/greenfield.storage.QueryPolicyByIdResponse";
  value: QueryPolicyByIdResponseAmino;
}
export interface QueryPolicyByIdResponseSDKType {
  policy?: PolicySDKType;
}
export interface QueryLockFeeRequest {
  /** primary_sp_address is the address of the primary sp. */
  primarySpAddress: string;
  /** create_at define the block timestamp when the object created. */
  createAt: Long;
  /** payloadSize is the total size of the object payload */
  payloadSize: Long;
}
export interface QueryLockFeeRequestProtoMsg {
  typeUrl: "/greenfield.storage.QueryLockFeeRequest";
  value: Uint8Array;
}
export interface QueryLockFeeRequestAmino {
  /** primary_sp_address is the address of the primary sp. */
  primary_sp_address?: string;
  /** create_at define the block timestamp when the object created. */
  create_at?: string;
  /** payloadSize is the total size of the object payload */
  payload_size?: string;
}
export interface QueryLockFeeRequestAminoMsg {
  type: "/greenfield.storage.QueryLockFeeRequest";
  value: QueryLockFeeRequestAmino;
}
export interface QueryLockFeeRequestSDKType {
  primary_sp_address: string;
  create_at: Long;
  payload_size: Long;
}
export interface QueryLockFeeResponse {
  amount: string;
}
export interface QueryLockFeeResponseProtoMsg {
  typeUrl: "/greenfield.storage.QueryLockFeeResponse";
  value: Uint8Array;
}
export interface QueryLockFeeResponseAmino {
  amount?: string;
}
export interface QueryLockFeeResponseAminoMsg {
  type: "/greenfield.storage.QueryLockFeeResponse";
  value: QueryLockFeeResponseAmino;
}
export interface QueryLockFeeResponseSDKType {
  amount: string;
}
export interface QueryHeadBucketExtraRequest {
  bucketName: string;
}
export interface QueryHeadBucketExtraRequestProtoMsg {
  typeUrl: "/greenfield.storage.QueryHeadBucketExtraRequest";
  value: Uint8Array;
}
export interface QueryHeadBucketExtraRequestAmino {
  bucket_name?: string;
}
export interface QueryHeadBucketExtraRequestAminoMsg {
  type: "/greenfield.storage.QueryHeadBucketExtraRequest";
  value: QueryHeadBucketExtraRequestAmino;
}
export interface QueryHeadBucketExtraRequestSDKType {
  bucket_name: string;
}
export interface QueryHeadBucketExtraResponse {
  extraInfo?: InternalBucketInfo;
}
export interface QueryHeadBucketExtraResponseProtoMsg {
  typeUrl: "/greenfield.storage.QueryHeadBucketExtraResponse";
  value: Uint8Array;
}
export interface QueryHeadBucketExtraResponseAmino {
  extra_info?: InternalBucketInfoAmino;
}
export interface QueryHeadBucketExtraResponseAminoMsg {
  type: "/greenfield.storage.QueryHeadBucketExtraResponse";
  value: QueryHeadBucketExtraResponseAmino;
}
export interface QueryHeadBucketExtraResponseSDKType {
  extra_info?: InternalBucketInfoSDKType;
}
export interface QueryIsPriceChangedRequest {
  bucketName: string;
}
export interface QueryIsPriceChangedRequestProtoMsg {
  typeUrl: "/greenfield.storage.QueryIsPriceChangedRequest";
  value: Uint8Array;
}
export interface QueryIsPriceChangedRequestAmino {
  bucket_name?: string;
}
export interface QueryIsPriceChangedRequestAminoMsg {
  type: "/greenfield.storage.QueryIsPriceChangedRequest";
  value: QueryIsPriceChangedRequestAmino;
}
export interface QueryIsPriceChangedRequestSDKType {
  bucket_name: string;
}
export interface QueryIsPriceChangedResponse {
  changed: boolean;
  currentReadPrice: string;
  currentPrimaryStorePrice: string;
  currentSecondaryStorePrice: string;
  currentValidatorTaxRate: string;
  newReadPrice: string;
  newPrimaryStorePrice: string;
  newSecondaryStorePrice: string;
  newValidatorTaxRate: string;
}
export interface QueryIsPriceChangedResponseProtoMsg {
  typeUrl: "/greenfield.storage.QueryIsPriceChangedResponse";
  value: Uint8Array;
}
export interface QueryIsPriceChangedResponseAmino {
  changed?: boolean;
  current_read_price?: string;
  current_primary_store_price?: string;
  current_secondary_store_price?: string;
  current_validator_tax_rate?: string;
  new_read_price?: string;
  new_primary_store_price?: string;
  new_secondary_store_price?: string;
  new_validator_tax_rate?: string;
}
export interface QueryIsPriceChangedResponseAminoMsg {
  type: "/greenfield.storage.QueryIsPriceChangedResponse";
  value: QueryIsPriceChangedResponseAmino;
}
export interface QueryIsPriceChangedResponseSDKType {
  changed: boolean;
  current_read_price: string;
  current_primary_store_price: string;
  current_secondary_store_price: string;
  current_validator_tax_rate: string;
  new_read_price: string;
  new_primary_store_price: string;
  new_secondary_store_price: string;
  new_validator_tax_rate: string;
}
export interface QueryQuoteUpdateTimeRequest {
  bucketName: string;
}
export interface QueryQuoteUpdateTimeRequestProtoMsg {
  typeUrl: "/greenfield.storage.QueryQuoteUpdateTimeRequest";
  value: Uint8Array;
}
export interface QueryQuoteUpdateTimeRequestAmino {
  bucket_name?: string;
}
export interface QueryQuoteUpdateTimeRequestAminoMsg {
  type: "/greenfield.storage.QueryQuoteUpdateTimeRequest";
  value: QueryQuoteUpdateTimeRequestAmino;
}
export interface QueryQuoteUpdateTimeRequestSDKType {
  bucket_name: string;
}
export interface QueryQuoteUpdateTimeResponse {
  updateAt: Long;
}
export interface QueryQuoteUpdateTimeResponseProtoMsg {
  typeUrl: "/greenfield.storage.QueryQuoteUpdateTimeResponse";
  value: Uint8Array;
}
export interface QueryQuoteUpdateTimeResponseAmino {
  update_at?: string;
}
export interface QueryQuoteUpdateTimeResponseAminoMsg {
  type: "/greenfield.storage.QueryQuoteUpdateTimeResponse";
  value: QueryQuoteUpdateTimeResponseAmino;
}
export interface QueryQuoteUpdateTimeResponseSDKType {
  update_at: Long;
}
export interface QueryGroupMembersExistRequest {
  groupId: string;
  members: string[];
}
export interface QueryGroupMembersExistRequestProtoMsg {
  typeUrl: "/greenfield.storage.QueryGroupMembersExistRequest";
  value: Uint8Array;
}
export interface QueryGroupMembersExistRequestAmino {
  group_id?: string;
  members?: string[];
}
export interface QueryGroupMembersExistRequestAminoMsg {
  type: "/greenfield.storage.QueryGroupMembersExistRequest";
  value: QueryGroupMembersExistRequestAmino;
}
export interface QueryGroupMembersExistRequestSDKType {
  group_id: string;
  members: string[];
}
export interface QueryGroupMembersExistResponse_ExistsEntry {
  key: string;
  value: boolean;
}
export interface QueryGroupMembersExistResponse_ExistsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface QueryGroupMembersExistResponse_ExistsEntryAmino {
  key?: string;
  value?: boolean;
}
export interface QueryGroupMembersExistResponse_ExistsEntryAminoMsg {
  type: string;
  value: QueryGroupMembersExistResponse_ExistsEntryAmino;
}
export interface QueryGroupMembersExistResponse_ExistsEntrySDKType {
  key: string;
  value: boolean;
}
export interface QueryGroupMembersExistResponse {
  exists: {
    [key: string]: boolean;
  };
}
export interface QueryGroupMembersExistResponseProtoMsg {
  typeUrl: "/greenfield.storage.QueryGroupMembersExistResponse";
  value: Uint8Array;
}
export interface QueryGroupMembersExistResponseAmino {
  exists?: {
    [key: string]: boolean;
  };
}
export interface QueryGroupMembersExistResponseAminoMsg {
  type: "/greenfield.storage.QueryGroupMembersExistResponse";
  value: QueryGroupMembersExistResponseAmino;
}
export interface QueryGroupMembersExistResponseSDKType {
  exists: {
    [key: string]: boolean;
  };
}
export interface QueryGroupsExistRequest {
  groupOwner: string;
  groupNames: string[];
}
export interface QueryGroupsExistRequestProtoMsg {
  typeUrl: "/greenfield.storage.QueryGroupsExistRequest";
  value: Uint8Array;
}
export interface QueryGroupsExistRequestAmino {
  group_owner?: string;
  group_names?: string[];
}
export interface QueryGroupsExistRequestAminoMsg {
  type: "/greenfield.storage.QueryGroupsExistRequest";
  value: QueryGroupsExistRequestAmino;
}
export interface QueryGroupsExistRequestSDKType {
  group_owner: string;
  group_names: string[];
}
export interface QueryGroupsExistByIdRequest {
  groupIds: string[];
}
export interface QueryGroupsExistByIdRequestProtoMsg {
  typeUrl: "/greenfield.storage.QueryGroupsExistByIdRequest";
  value: Uint8Array;
}
export interface QueryGroupsExistByIdRequestAmino {
  group_ids?: string[];
}
export interface QueryGroupsExistByIdRequestAminoMsg {
  type: "/greenfield.storage.QueryGroupsExistByIdRequest";
  value: QueryGroupsExistByIdRequestAmino;
}
export interface QueryGroupsExistByIdRequestSDKType {
  group_ids: string[];
}
export interface QueryGroupsExistResponse_ExistsEntry {
  key: string;
  value: boolean;
}
export interface QueryGroupsExistResponse_ExistsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface QueryGroupsExistResponse_ExistsEntryAmino {
  key?: string;
  value?: boolean;
}
export interface QueryGroupsExistResponse_ExistsEntryAminoMsg {
  type: string;
  value: QueryGroupsExistResponse_ExistsEntryAmino;
}
export interface QueryGroupsExistResponse_ExistsEntrySDKType {
  key: string;
  value: boolean;
}
export interface QueryGroupsExistResponse {
  exists: {
    [key: string]: boolean;
  };
}
export interface QueryGroupsExistResponseProtoMsg {
  typeUrl: "/greenfield.storage.QueryGroupsExistResponse";
  value: Uint8Array;
}
export interface QueryGroupsExistResponseAmino {
  exists?: {
    [key: string]: boolean;
  };
}
export interface QueryGroupsExistResponseAminoMsg {
  type: "/greenfield.storage.QueryGroupsExistResponse";
  value: QueryGroupsExistResponseAmino;
}
export interface QueryGroupsExistResponseSDKType {
  exists: {
    [key: string]: boolean;
  };
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/greenfield.storage.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromSDK(_: QueryParamsRequestSDKType): QueryParamsRequest {
    return {};
  },
  toSDK(_: QueryParamsRequest): QueryParamsRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/greenfield.storage.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/greenfield.storage.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromSDK(object: QueryParamsResponseSDKType): QueryParamsResponse {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },
  toSDK(message: QueryParamsResponse): QueryParamsResponseSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsByTimestampRequest(): QueryParamsByTimestampRequest {
  return {
    timestamp: Long.ZERO
  };
}
export const QueryParamsByTimestampRequest = {
  typeUrl: "/greenfield.storage.QueryParamsByTimestampRequest",
  encode(message: QueryParamsByTimestampRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.timestamp.isZero()) {
      writer.uint32(8).int64(message.timestamp);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsByTimestampRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsByTimestampRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsByTimestampRequest {
    return {
      timestamp: isSet(object.timestamp) ? Long.fromValue(object.timestamp) : Long.ZERO
    };
  },
  toJSON(message: QueryParamsByTimestampRequest): unknown {
    const obj: any = {};
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || Long.ZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsByTimestampRequest>, I>>(object: I): QueryParamsByTimestampRequest {
    const message = createBaseQueryParamsByTimestampRequest();
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.ZERO;
    return message;
  },
  fromSDK(object: QueryParamsByTimestampRequestSDKType): QueryParamsByTimestampRequest {
    return {
      timestamp: object?.timestamp
    };
  },
  toSDK(message: QueryParamsByTimestampRequest): QueryParamsByTimestampRequestSDKType {
    const obj: any = {};
    obj.timestamp = message.timestamp;
    return obj;
  },
  fromAmino(object: QueryParamsByTimestampRequestAmino): QueryParamsByTimestampRequest {
    const message = createBaseQueryParamsByTimestampRequest();
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Long.fromString(object.timestamp);
    }
    return message;
  },
  toAmino(message: QueryParamsByTimestampRequest): QueryParamsByTimestampRequestAmino {
    const obj: any = {};
    obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsByTimestampRequestAminoMsg): QueryParamsByTimestampRequest {
    return QueryParamsByTimestampRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsByTimestampRequestProtoMsg): QueryParamsByTimestampRequest {
    return QueryParamsByTimestampRequest.decode(message.value);
  },
  toProto(message: QueryParamsByTimestampRequest): Uint8Array {
    return QueryParamsByTimestampRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsByTimestampRequest): QueryParamsByTimestampRequestProtoMsg {
    return {
      typeUrl: "/greenfield.storage.QueryParamsByTimestampRequest",
      value: QueryParamsByTimestampRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsByTimestampResponse(): QueryParamsByTimestampResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsByTimestampResponse = {
  typeUrl: "/greenfield.storage.QueryParamsByTimestampResponse",
  encode(message: QueryParamsByTimestampResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsByTimestampResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsByTimestampResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsByTimestampResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: QueryParamsByTimestampResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsByTimestampResponse>, I>>(object: I): QueryParamsByTimestampResponse {
    const message = createBaseQueryParamsByTimestampResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromSDK(object: QueryParamsByTimestampResponseSDKType): QueryParamsByTimestampResponse {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },
  toSDK(message: QueryParamsByTimestampResponse): QueryParamsByTimestampResponseSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  },
  fromAmino(object: QueryParamsByTimestampResponseAmino): QueryParamsByTimestampResponse {
    const message = createBaseQueryParamsByTimestampResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsByTimestampResponse): QueryParamsByTimestampResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsByTimestampResponseAminoMsg): QueryParamsByTimestampResponse {
    return QueryParamsByTimestampResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsByTimestampResponseProtoMsg): QueryParamsByTimestampResponse {
    return QueryParamsByTimestampResponse.decode(message.value);
  },
  toProto(message: QueryParamsByTimestampResponse): Uint8Array {
    return QueryParamsByTimestampResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsByTimestampResponse): QueryParamsByTimestampResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.QueryParamsByTimestampResponse",
      value: QueryParamsByTimestampResponse.encode(message).finish()
    };
  }
};
function createBaseQueryHeadBucketRequest(): QueryHeadBucketRequest {
  return {
    bucketName: ""
  };
}
export const QueryHeadBucketRequest = {
  typeUrl: "/greenfield.storage.QueryHeadBucketRequest",
  encode(message: QueryHeadBucketRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bucketName !== "") {
      writer.uint32(10).string(message.bucketName);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHeadBucketRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHeadBucketRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bucketName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryHeadBucketRequest {
    return {
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : ""
    };
  },
  toJSON(message: QueryHeadBucketRequest): unknown {
    const obj: any = {};
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryHeadBucketRequest>, I>>(object: I): QueryHeadBucketRequest {
    const message = createBaseQueryHeadBucketRequest();
    message.bucketName = object.bucketName ?? "";
    return message;
  },
  fromSDK(object: QueryHeadBucketRequestSDKType): QueryHeadBucketRequest {
    return {
      bucketName: object?.bucket_name
    };
  },
  toSDK(message: QueryHeadBucketRequest): QueryHeadBucketRequestSDKType {
    const obj: any = {};
    obj.bucket_name = message.bucketName;
    return obj;
  },
  fromAmino(object: QueryHeadBucketRequestAmino): QueryHeadBucketRequest {
    const message = createBaseQueryHeadBucketRequest();
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    return message;
  },
  toAmino(message: QueryHeadBucketRequest): QueryHeadBucketRequestAmino {
    const obj: any = {};
    obj.bucket_name = message.bucketName;
    return obj;
  },
  fromAminoMsg(object: QueryHeadBucketRequestAminoMsg): QueryHeadBucketRequest {
    return QueryHeadBucketRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHeadBucketRequestProtoMsg): QueryHeadBucketRequest {
    return QueryHeadBucketRequest.decode(message.value);
  },
  toProto(message: QueryHeadBucketRequest): Uint8Array {
    return QueryHeadBucketRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryHeadBucketRequest): QueryHeadBucketRequestProtoMsg {
    return {
      typeUrl: "/greenfield.storage.QueryHeadBucketRequest",
      value: QueryHeadBucketRequest.encode(message).finish()
    };
  }
};
function createBaseQueryHeadBucketByIdRequest(): QueryHeadBucketByIdRequest {
  return {
    bucketId: ""
  };
}
export const QueryHeadBucketByIdRequest = {
  typeUrl: "/greenfield.storage.QueryHeadBucketByIdRequest",
  encode(message: QueryHeadBucketByIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bucketId !== "") {
      writer.uint32(10).string(message.bucketId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHeadBucketByIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHeadBucketByIdRequest();
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
  fromJSON(object: any): QueryHeadBucketByIdRequest {
    return {
      bucketId: isSet(object.bucketId) ? String(object.bucketId) : ""
    };
  },
  toJSON(message: QueryHeadBucketByIdRequest): unknown {
    const obj: any = {};
    message.bucketId !== undefined && (obj.bucketId = message.bucketId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryHeadBucketByIdRequest>, I>>(object: I): QueryHeadBucketByIdRequest {
    const message = createBaseQueryHeadBucketByIdRequest();
    message.bucketId = object.bucketId ?? "";
    return message;
  },
  fromSDK(object: QueryHeadBucketByIdRequestSDKType): QueryHeadBucketByIdRequest {
    return {
      bucketId: object?.bucket_id
    };
  },
  toSDK(message: QueryHeadBucketByIdRequest): QueryHeadBucketByIdRequestSDKType {
    const obj: any = {};
    obj.bucket_id = message.bucketId;
    return obj;
  },
  fromAmino(object: QueryHeadBucketByIdRequestAmino): QueryHeadBucketByIdRequest {
    const message = createBaseQueryHeadBucketByIdRequest();
    if (object.bucket_id !== undefined && object.bucket_id !== null) {
      message.bucketId = object.bucket_id;
    }
    return message;
  },
  toAmino(message: QueryHeadBucketByIdRequest): QueryHeadBucketByIdRequestAmino {
    const obj: any = {};
    obj.bucket_id = message.bucketId;
    return obj;
  },
  fromAminoMsg(object: QueryHeadBucketByIdRequestAminoMsg): QueryHeadBucketByIdRequest {
    return QueryHeadBucketByIdRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHeadBucketByIdRequestProtoMsg): QueryHeadBucketByIdRequest {
    return QueryHeadBucketByIdRequest.decode(message.value);
  },
  toProto(message: QueryHeadBucketByIdRequest): Uint8Array {
    return QueryHeadBucketByIdRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryHeadBucketByIdRequest): QueryHeadBucketByIdRequestProtoMsg {
    return {
      typeUrl: "/greenfield.storage.QueryHeadBucketByIdRequest",
      value: QueryHeadBucketByIdRequest.encode(message).finish()
    };
  }
};
function createBaseQueryHeadBucketResponse(): QueryHeadBucketResponse {
  return {
    bucketInfo: undefined
  };
}
export const QueryHeadBucketResponse = {
  typeUrl: "/greenfield.storage.QueryHeadBucketResponse",
  encode(message: QueryHeadBucketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bucketInfo !== undefined) {
      BucketInfo.encode(message.bucketInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHeadBucketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHeadBucketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bucketInfo = BucketInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryHeadBucketResponse {
    return {
      bucketInfo: isSet(object.bucketInfo) ? BucketInfo.fromJSON(object.bucketInfo) : undefined
    };
  },
  toJSON(message: QueryHeadBucketResponse): unknown {
    const obj: any = {};
    message.bucketInfo !== undefined && (obj.bucketInfo = message.bucketInfo ? BucketInfo.toJSON(message.bucketInfo) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryHeadBucketResponse>, I>>(object: I): QueryHeadBucketResponse {
    const message = createBaseQueryHeadBucketResponse();
    message.bucketInfo = object.bucketInfo !== undefined && object.bucketInfo !== null ? BucketInfo.fromPartial(object.bucketInfo) : undefined;
    return message;
  },
  fromSDK(object: QueryHeadBucketResponseSDKType): QueryHeadBucketResponse {
    return {
      bucketInfo: object.bucket_info ? BucketInfo.fromSDK(object.bucket_info) : undefined
    };
  },
  toSDK(message: QueryHeadBucketResponse): QueryHeadBucketResponseSDKType {
    const obj: any = {};
    message.bucketInfo !== undefined && (obj.bucket_info = message.bucketInfo ? BucketInfo.toSDK(message.bucketInfo) : undefined);
    return obj;
  },
  fromAmino(object: QueryHeadBucketResponseAmino): QueryHeadBucketResponse {
    const message = createBaseQueryHeadBucketResponse();
    if (object.bucket_info !== undefined && object.bucket_info !== null) {
      message.bucketInfo = BucketInfo.fromAmino(object.bucket_info);
    }
    return message;
  },
  toAmino(message: QueryHeadBucketResponse): QueryHeadBucketResponseAmino {
    const obj: any = {};
    obj.bucket_info = message.bucketInfo ? BucketInfo.toAmino(message.bucketInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryHeadBucketResponseAminoMsg): QueryHeadBucketResponse {
    return QueryHeadBucketResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHeadBucketResponseProtoMsg): QueryHeadBucketResponse {
    return QueryHeadBucketResponse.decode(message.value);
  },
  toProto(message: QueryHeadBucketResponse): Uint8Array {
    return QueryHeadBucketResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryHeadBucketResponse): QueryHeadBucketResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.QueryHeadBucketResponse",
      value: QueryHeadBucketResponse.encode(message).finish()
    };
  }
};
function createBaseQueryHeadObjectRequest(): QueryHeadObjectRequest {
  return {
    bucketName: "",
    objectName: ""
  };
}
export const QueryHeadObjectRequest = {
  typeUrl: "/greenfield.storage.QueryHeadObjectRequest",
  encode(message: QueryHeadObjectRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bucketName !== "") {
      writer.uint32(10).string(message.bucketName);
    }
    if (message.objectName !== "") {
      writer.uint32(18).string(message.objectName);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHeadObjectRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHeadObjectRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bucketName = reader.string();
          break;
        case 2:
          message.objectName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryHeadObjectRequest {
    return {
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      objectName: isSet(object.objectName) ? String(object.objectName) : ""
    };
  },
  toJSON(message: QueryHeadObjectRequest): unknown {
    const obj: any = {};
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.objectName !== undefined && (obj.objectName = message.objectName);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryHeadObjectRequest>, I>>(object: I): QueryHeadObjectRequest {
    const message = createBaseQueryHeadObjectRequest();
    message.bucketName = object.bucketName ?? "";
    message.objectName = object.objectName ?? "";
    return message;
  },
  fromSDK(object: QueryHeadObjectRequestSDKType): QueryHeadObjectRequest {
    return {
      bucketName: object?.bucket_name,
      objectName: object?.object_name
    };
  },
  toSDK(message: QueryHeadObjectRequest): QueryHeadObjectRequestSDKType {
    const obj: any = {};
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    return obj;
  },
  fromAmino(object: QueryHeadObjectRequestAmino): QueryHeadObjectRequest {
    const message = createBaseQueryHeadObjectRequest();
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    if (object.object_name !== undefined && object.object_name !== null) {
      message.objectName = object.object_name;
    }
    return message;
  },
  toAmino(message: QueryHeadObjectRequest): QueryHeadObjectRequestAmino {
    const obj: any = {};
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    return obj;
  },
  fromAminoMsg(object: QueryHeadObjectRequestAminoMsg): QueryHeadObjectRequest {
    return QueryHeadObjectRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHeadObjectRequestProtoMsg): QueryHeadObjectRequest {
    return QueryHeadObjectRequest.decode(message.value);
  },
  toProto(message: QueryHeadObjectRequest): Uint8Array {
    return QueryHeadObjectRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryHeadObjectRequest): QueryHeadObjectRequestProtoMsg {
    return {
      typeUrl: "/greenfield.storage.QueryHeadObjectRequest",
      value: QueryHeadObjectRequest.encode(message).finish()
    };
  }
};
function createBaseQueryHeadObjectByIdRequest(): QueryHeadObjectByIdRequest {
  return {
    objectId: ""
  };
}
export const QueryHeadObjectByIdRequest = {
  typeUrl: "/greenfield.storage.QueryHeadObjectByIdRequest",
  encode(message: QueryHeadObjectByIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.objectId !== "") {
      writer.uint32(10).string(message.objectId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHeadObjectByIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHeadObjectByIdRequest();
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
  fromJSON(object: any): QueryHeadObjectByIdRequest {
    return {
      objectId: isSet(object.objectId) ? String(object.objectId) : ""
    };
  },
  toJSON(message: QueryHeadObjectByIdRequest): unknown {
    const obj: any = {};
    message.objectId !== undefined && (obj.objectId = message.objectId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryHeadObjectByIdRequest>, I>>(object: I): QueryHeadObjectByIdRequest {
    const message = createBaseQueryHeadObjectByIdRequest();
    message.objectId = object.objectId ?? "";
    return message;
  },
  fromSDK(object: QueryHeadObjectByIdRequestSDKType): QueryHeadObjectByIdRequest {
    return {
      objectId: object?.object_id
    };
  },
  toSDK(message: QueryHeadObjectByIdRequest): QueryHeadObjectByIdRequestSDKType {
    const obj: any = {};
    obj.object_id = message.objectId;
    return obj;
  },
  fromAmino(object: QueryHeadObjectByIdRequestAmino): QueryHeadObjectByIdRequest {
    const message = createBaseQueryHeadObjectByIdRequest();
    if (object.object_id !== undefined && object.object_id !== null) {
      message.objectId = object.object_id;
    }
    return message;
  },
  toAmino(message: QueryHeadObjectByIdRequest): QueryHeadObjectByIdRequestAmino {
    const obj: any = {};
    obj.object_id = message.objectId;
    return obj;
  },
  fromAminoMsg(object: QueryHeadObjectByIdRequestAminoMsg): QueryHeadObjectByIdRequest {
    return QueryHeadObjectByIdRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHeadObjectByIdRequestProtoMsg): QueryHeadObjectByIdRequest {
    return QueryHeadObjectByIdRequest.decode(message.value);
  },
  toProto(message: QueryHeadObjectByIdRequest): Uint8Array {
    return QueryHeadObjectByIdRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryHeadObjectByIdRequest): QueryHeadObjectByIdRequestProtoMsg {
    return {
      typeUrl: "/greenfield.storage.QueryHeadObjectByIdRequest",
      value: QueryHeadObjectByIdRequest.encode(message).finish()
    };
  }
};
function createBaseQueryHeadObjectResponse(): QueryHeadObjectResponse {
  return {
    objectInfo: undefined,
    globalVirtualGroup: undefined
  };
}
export const QueryHeadObjectResponse = {
  typeUrl: "/greenfield.storage.QueryHeadObjectResponse",
  encode(message: QueryHeadObjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.objectInfo !== undefined) {
      ObjectInfo.encode(message.objectInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.globalVirtualGroup !== undefined) {
      GlobalVirtualGroup.encode(message.globalVirtualGroup, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHeadObjectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHeadObjectResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.objectInfo = ObjectInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.globalVirtualGroup = GlobalVirtualGroup.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryHeadObjectResponse {
    return {
      objectInfo: isSet(object.objectInfo) ? ObjectInfo.fromJSON(object.objectInfo) : undefined,
      globalVirtualGroup: isSet(object.globalVirtualGroup) ? GlobalVirtualGroup.fromJSON(object.globalVirtualGroup) : undefined
    };
  },
  toJSON(message: QueryHeadObjectResponse): unknown {
    const obj: any = {};
    message.objectInfo !== undefined && (obj.objectInfo = message.objectInfo ? ObjectInfo.toJSON(message.objectInfo) : undefined);
    message.globalVirtualGroup !== undefined && (obj.globalVirtualGroup = message.globalVirtualGroup ? GlobalVirtualGroup.toJSON(message.globalVirtualGroup) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryHeadObjectResponse>, I>>(object: I): QueryHeadObjectResponse {
    const message = createBaseQueryHeadObjectResponse();
    message.objectInfo = object.objectInfo !== undefined && object.objectInfo !== null ? ObjectInfo.fromPartial(object.objectInfo) : undefined;
    message.globalVirtualGroup = object.globalVirtualGroup !== undefined && object.globalVirtualGroup !== null ? GlobalVirtualGroup.fromPartial(object.globalVirtualGroup) : undefined;
    return message;
  },
  fromSDK(object: QueryHeadObjectResponseSDKType): QueryHeadObjectResponse {
    return {
      objectInfo: object.object_info ? ObjectInfo.fromSDK(object.object_info) : undefined,
      globalVirtualGroup: object.global_virtual_group ? GlobalVirtualGroup.fromSDK(object.global_virtual_group) : undefined
    };
  },
  toSDK(message: QueryHeadObjectResponse): QueryHeadObjectResponseSDKType {
    const obj: any = {};
    message.objectInfo !== undefined && (obj.object_info = message.objectInfo ? ObjectInfo.toSDK(message.objectInfo) : undefined);
    message.globalVirtualGroup !== undefined && (obj.global_virtual_group = message.globalVirtualGroup ? GlobalVirtualGroup.toSDK(message.globalVirtualGroup) : undefined);
    return obj;
  },
  fromAmino(object: QueryHeadObjectResponseAmino): QueryHeadObjectResponse {
    const message = createBaseQueryHeadObjectResponse();
    if (object.object_info !== undefined && object.object_info !== null) {
      message.objectInfo = ObjectInfo.fromAmino(object.object_info);
    }
    if (object.global_virtual_group !== undefined && object.global_virtual_group !== null) {
      message.globalVirtualGroup = GlobalVirtualGroup.fromAmino(object.global_virtual_group);
    }
    return message;
  },
  toAmino(message: QueryHeadObjectResponse): QueryHeadObjectResponseAmino {
    const obj: any = {};
    obj.object_info = message.objectInfo ? ObjectInfo.toAmino(message.objectInfo) : undefined;
    obj.global_virtual_group = message.globalVirtualGroup ? GlobalVirtualGroup.toAmino(message.globalVirtualGroup) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryHeadObjectResponseAminoMsg): QueryHeadObjectResponse {
    return QueryHeadObjectResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHeadObjectResponseProtoMsg): QueryHeadObjectResponse {
    return QueryHeadObjectResponse.decode(message.value);
  },
  toProto(message: QueryHeadObjectResponse): Uint8Array {
    return QueryHeadObjectResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryHeadObjectResponse): QueryHeadObjectResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.QueryHeadObjectResponse",
      value: QueryHeadObjectResponse.encode(message).finish()
    };
  }
};
function createBaseQueryListBucketsRequest(): QueryListBucketsRequest {
  return {
    pagination: undefined
  };
}
export const QueryListBucketsRequest = {
  typeUrl: "/greenfield.storage.QueryListBucketsRequest",
  encode(message: QueryListBucketsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListBucketsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListBucketsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryListBucketsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryListBucketsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryListBucketsRequest>, I>>(object: I): QueryListBucketsRequest {
    const message = createBaseQueryListBucketsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryListBucketsRequestSDKType): QueryListBucketsRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryListBucketsRequest): QueryListBucketsRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryListBucketsRequestAmino): QueryListBucketsRequest {
    const message = createBaseQueryListBucketsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListBucketsRequest): QueryListBucketsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListBucketsRequestAminoMsg): QueryListBucketsRequest {
    return QueryListBucketsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListBucketsRequestProtoMsg): QueryListBucketsRequest {
    return QueryListBucketsRequest.decode(message.value);
  },
  toProto(message: QueryListBucketsRequest): Uint8Array {
    return QueryListBucketsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListBucketsRequest): QueryListBucketsRequestProtoMsg {
    return {
      typeUrl: "/greenfield.storage.QueryListBucketsRequest",
      value: QueryListBucketsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListBucketsResponse(): QueryListBucketsResponse {
  return {
    bucketInfos: [],
    pagination: undefined
  };
}
export const QueryListBucketsResponse = {
  typeUrl: "/greenfield.storage.QueryListBucketsResponse",
  encode(message: QueryListBucketsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.bucketInfos) {
      BucketInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListBucketsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListBucketsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bucketInfos.push(BucketInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryListBucketsResponse {
    return {
      bucketInfos: Array.isArray(object?.bucketInfos) ? object.bucketInfos.map((e: any) => BucketInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryListBucketsResponse): unknown {
    const obj: any = {};
    if (message.bucketInfos) {
      obj.bucketInfos = message.bucketInfos.map(e => e ? BucketInfo.toJSON(e) : undefined);
    } else {
      obj.bucketInfos = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryListBucketsResponse>, I>>(object: I): QueryListBucketsResponse {
    const message = createBaseQueryListBucketsResponse();
    message.bucketInfos = object.bucketInfos?.map(e => BucketInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryListBucketsResponseSDKType): QueryListBucketsResponse {
    return {
      bucketInfos: Array.isArray(object?.bucket_infos) ? object.bucket_infos.map((e: any) => BucketInfo.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryListBucketsResponse): QueryListBucketsResponseSDKType {
    const obj: any = {};
    if (message.bucketInfos) {
      obj.bucket_infos = message.bucketInfos.map(e => e ? BucketInfo.toSDK(e) : undefined);
    } else {
      obj.bucket_infos = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryListBucketsResponseAmino): QueryListBucketsResponse {
    const message = createBaseQueryListBucketsResponse();
    message.bucketInfos = object.bucket_infos?.map(e => BucketInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListBucketsResponse): QueryListBucketsResponseAmino {
    const obj: any = {};
    if (message.bucketInfos) {
      obj.bucket_infos = message.bucketInfos.map(e => e ? BucketInfo.toAmino(e) : undefined);
    } else {
      obj.bucket_infos = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListBucketsResponseAminoMsg): QueryListBucketsResponse {
    return QueryListBucketsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListBucketsResponseProtoMsg): QueryListBucketsResponse {
    return QueryListBucketsResponse.decode(message.value);
  },
  toProto(message: QueryListBucketsResponse): Uint8Array {
    return QueryListBucketsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListBucketsResponse): QueryListBucketsResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.QueryListBucketsResponse",
      value: QueryListBucketsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryListObjectsRequest(): QueryListObjectsRequest {
  return {
    pagination: undefined,
    bucketName: ""
  };
}
export const QueryListObjectsRequest = {
  typeUrl: "/greenfield.storage.QueryListObjectsRequest",
  encode(message: QueryListObjectsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListObjectsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListObjectsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
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
  fromJSON(object: any): QueryListObjectsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : ""
    };
  },
  toJSON(message: QueryListObjectsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryListObjectsRequest>, I>>(object: I): QueryListObjectsRequest {
    const message = createBaseQueryListObjectsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.bucketName = object.bucketName ?? "";
    return message;
  },
  fromSDK(object: QueryListObjectsRequestSDKType): QueryListObjectsRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined,
      bucketName: object?.bucket_name
    };
  },
  toSDK(message: QueryListObjectsRequest): QueryListObjectsRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    obj.bucket_name = message.bucketName;
    return obj;
  },
  fromAmino(object: QueryListObjectsRequestAmino): QueryListObjectsRequest {
    const message = createBaseQueryListObjectsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    return message;
  },
  toAmino(message: QueryListObjectsRequest): QueryListObjectsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.bucket_name = message.bucketName;
    return obj;
  },
  fromAminoMsg(object: QueryListObjectsRequestAminoMsg): QueryListObjectsRequest {
    return QueryListObjectsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListObjectsRequestProtoMsg): QueryListObjectsRequest {
    return QueryListObjectsRequest.decode(message.value);
  },
  toProto(message: QueryListObjectsRequest): Uint8Array {
    return QueryListObjectsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListObjectsRequest): QueryListObjectsRequestProtoMsg {
    return {
      typeUrl: "/greenfield.storage.QueryListObjectsRequest",
      value: QueryListObjectsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListObjectsByBucketIdRequest(): QueryListObjectsByBucketIdRequest {
  return {
    pagination: undefined,
    bucketId: ""
  };
}
export const QueryListObjectsByBucketIdRequest = {
  typeUrl: "/greenfield.storage.QueryListObjectsByBucketIdRequest",
  encode(message: QueryListObjectsByBucketIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.bucketId !== "") {
      writer.uint32(18).string(message.bucketId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListObjectsByBucketIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListObjectsByBucketIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.bucketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryListObjectsByBucketIdRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      bucketId: isSet(object.bucketId) ? String(object.bucketId) : ""
    };
  },
  toJSON(message: QueryListObjectsByBucketIdRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.bucketId !== undefined && (obj.bucketId = message.bucketId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryListObjectsByBucketIdRequest>, I>>(object: I): QueryListObjectsByBucketIdRequest {
    const message = createBaseQueryListObjectsByBucketIdRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.bucketId = object.bucketId ?? "";
    return message;
  },
  fromSDK(object: QueryListObjectsByBucketIdRequestSDKType): QueryListObjectsByBucketIdRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined,
      bucketId: object?.bucket_id
    };
  },
  toSDK(message: QueryListObjectsByBucketIdRequest): QueryListObjectsByBucketIdRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    obj.bucket_id = message.bucketId;
    return obj;
  },
  fromAmino(object: QueryListObjectsByBucketIdRequestAmino): QueryListObjectsByBucketIdRequest {
    const message = createBaseQueryListObjectsByBucketIdRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.bucket_id !== undefined && object.bucket_id !== null) {
      message.bucketId = object.bucket_id;
    }
    return message;
  },
  toAmino(message: QueryListObjectsByBucketIdRequest): QueryListObjectsByBucketIdRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.bucket_id = message.bucketId;
    return obj;
  },
  fromAminoMsg(object: QueryListObjectsByBucketIdRequestAminoMsg): QueryListObjectsByBucketIdRequest {
    return QueryListObjectsByBucketIdRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListObjectsByBucketIdRequestProtoMsg): QueryListObjectsByBucketIdRequest {
    return QueryListObjectsByBucketIdRequest.decode(message.value);
  },
  toProto(message: QueryListObjectsByBucketIdRequest): Uint8Array {
    return QueryListObjectsByBucketIdRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListObjectsByBucketIdRequest): QueryListObjectsByBucketIdRequestProtoMsg {
    return {
      typeUrl: "/greenfield.storage.QueryListObjectsByBucketIdRequest",
      value: QueryListObjectsByBucketIdRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListObjectsResponse(): QueryListObjectsResponse {
  return {
    objectInfos: [],
    pagination: undefined
  };
}
export const QueryListObjectsResponse = {
  typeUrl: "/greenfield.storage.QueryListObjectsResponse",
  encode(message: QueryListObjectsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.objectInfos) {
      ObjectInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListObjectsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListObjectsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.objectInfos.push(ObjectInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryListObjectsResponse {
    return {
      objectInfos: Array.isArray(object?.objectInfos) ? object.objectInfos.map((e: any) => ObjectInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryListObjectsResponse): unknown {
    const obj: any = {};
    if (message.objectInfos) {
      obj.objectInfos = message.objectInfos.map(e => e ? ObjectInfo.toJSON(e) : undefined);
    } else {
      obj.objectInfos = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryListObjectsResponse>, I>>(object: I): QueryListObjectsResponse {
    const message = createBaseQueryListObjectsResponse();
    message.objectInfos = object.objectInfos?.map(e => ObjectInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryListObjectsResponseSDKType): QueryListObjectsResponse {
    return {
      objectInfos: Array.isArray(object?.object_infos) ? object.object_infos.map((e: any) => ObjectInfo.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryListObjectsResponse): QueryListObjectsResponseSDKType {
    const obj: any = {};
    if (message.objectInfos) {
      obj.object_infos = message.objectInfos.map(e => e ? ObjectInfo.toSDK(e) : undefined);
    } else {
      obj.object_infos = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryListObjectsResponseAmino): QueryListObjectsResponse {
    const message = createBaseQueryListObjectsResponse();
    message.objectInfos = object.object_infos?.map(e => ObjectInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListObjectsResponse): QueryListObjectsResponseAmino {
    const obj: any = {};
    if (message.objectInfos) {
      obj.object_infos = message.objectInfos.map(e => e ? ObjectInfo.toAmino(e) : undefined);
    } else {
      obj.object_infos = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListObjectsResponseAminoMsg): QueryListObjectsResponse {
    return QueryListObjectsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListObjectsResponseProtoMsg): QueryListObjectsResponse {
    return QueryListObjectsResponse.decode(message.value);
  },
  toProto(message: QueryListObjectsResponse): Uint8Array {
    return QueryListObjectsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListObjectsResponse): QueryListObjectsResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.QueryListObjectsResponse",
      value: QueryListObjectsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryNFTRequest(): QueryNFTRequest {
  return {
    tokenId: ""
  };
}
export const QueryNFTRequest = {
  typeUrl: "/greenfield.storage.QueryNFTRequest",
  encode(message: QueryNFTRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenId !== "") {
      writer.uint32(10).string(message.tokenId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryNFTRequest {
    return {
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : ""
    };
  },
  toJSON(message: QueryNFTRequest): unknown {
    const obj: any = {};
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryNFTRequest>, I>>(object: I): QueryNFTRequest {
    const message = createBaseQueryNFTRequest();
    message.tokenId = object.tokenId ?? "";
    return message;
  },
  fromSDK(object: QueryNFTRequestSDKType): QueryNFTRequest {
    return {
      tokenId: object?.token_id
    };
  },
  toSDK(message: QueryNFTRequest): QueryNFTRequestSDKType {
    const obj: any = {};
    obj.token_id = message.tokenId;
    return obj;
  },
  fromAmino(object: QueryNFTRequestAmino): QueryNFTRequest {
    const message = createBaseQueryNFTRequest();
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = object.token_id;
    }
    return message;
  },
  toAmino(message: QueryNFTRequest): QueryNFTRequestAmino {
    const obj: any = {};
    obj.token_id = message.tokenId;
    return obj;
  },
  fromAminoMsg(object: QueryNFTRequestAminoMsg): QueryNFTRequest {
    return QueryNFTRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryNFTRequestProtoMsg): QueryNFTRequest {
    return QueryNFTRequest.decode(message.value);
  },
  toProto(message: QueryNFTRequest): Uint8Array {
    return QueryNFTRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryNFTRequest): QueryNFTRequestProtoMsg {
    return {
      typeUrl: "/greenfield.storage.QueryNFTRequest",
      value: QueryNFTRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBucketNFTResponse(): QueryBucketNFTResponse {
  return {
    metaData: undefined
  };
}
export const QueryBucketNFTResponse = {
  typeUrl: "/greenfield.storage.QueryBucketNFTResponse",
  encode(message: QueryBucketNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metaData !== undefined) {
      BucketMetaData.encode(message.metaData, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBucketNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBucketNFTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metaData = BucketMetaData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBucketNFTResponse {
    return {
      metaData: isSet(object.metaData) ? BucketMetaData.fromJSON(object.metaData) : undefined
    };
  },
  toJSON(message: QueryBucketNFTResponse): unknown {
    const obj: any = {};
    message.metaData !== undefined && (obj.metaData = message.metaData ? BucketMetaData.toJSON(message.metaData) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryBucketNFTResponse>, I>>(object: I): QueryBucketNFTResponse {
    const message = createBaseQueryBucketNFTResponse();
    message.metaData = object.metaData !== undefined && object.metaData !== null ? BucketMetaData.fromPartial(object.metaData) : undefined;
    return message;
  },
  fromSDK(object: QueryBucketNFTResponseSDKType): QueryBucketNFTResponse {
    return {
      metaData: object.meta_data ? BucketMetaData.fromSDK(object.meta_data) : undefined
    };
  },
  toSDK(message: QueryBucketNFTResponse): QueryBucketNFTResponseSDKType {
    const obj: any = {};
    message.metaData !== undefined && (obj.meta_data = message.metaData ? BucketMetaData.toSDK(message.metaData) : undefined);
    return obj;
  },
  fromAmino(object: QueryBucketNFTResponseAmino): QueryBucketNFTResponse {
    const message = createBaseQueryBucketNFTResponse();
    if (object.meta_data !== undefined && object.meta_data !== null) {
      message.metaData = BucketMetaData.fromAmino(object.meta_data);
    }
    return message;
  },
  toAmino(message: QueryBucketNFTResponse): QueryBucketNFTResponseAmino {
    const obj: any = {};
    obj.meta_data = message.metaData ? BucketMetaData.toAmino(message.metaData) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBucketNFTResponseAminoMsg): QueryBucketNFTResponse {
    return QueryBucketNFTResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBucketNFTResponseProtoMsg): QueryBucketNFTResponse {
    return QueryBucketNFTResponse.decode(message.value);
  },
  toProto(message: QueryBucketNFTResponse): Uint8Array {
    return QueryBucketNFTResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBucketNFTResponse): QueryBucketNFTResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.QueryBucketNFTResponse",
      value: QueryBucketNFTResponse.encode(message).finish()
    };
  }
};
function createBaseQueryObjectNFTResponse(): QueryObjectNFTResponse {
  return {
    metaData: undefined
  };
}
export const QueryObjectNFTResponse = {
  typeUrl: "/greenfield.storage.QueryObjectNFTResponse",
  encode(message: QueryObjectNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metaData !== undefined) {
      ObjectMetaData.encode(message.metaData, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryObjectNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryObjectNFTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metaData = ObjectMetaData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryObjectNFTResponse {
    return {
      metaData: isSet(object.metaData) ? ObjectMetaData.fromJSON(object.metaData) : undefined
    };
  },
  toJSON(message: QueryObjectNFTResponse): unknown {
    const obj: any = {};
    message.metaData !== undefined && (obj.metaData = message.metaData ? ObjectMetaData.toJSON(message.metaData) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryObjectNFTResponse>, I>>(object: I): QueryObjectNFTResponse {
    const message = createBaseQueryObjectNFTResponse();
    message.metaData = object.metaData !== undefined && object.metaData !== null ? ObjectMetaData.fromPartial(object.metaData) : undefined;
    return message;
  },
  fromSDK(object: QueryObjectNFTResponseSDKType): QueryObjectNFTResponse {
    return {
      metaData: object.meta_data ? ObjectMetaData.fromSDK(object.meta_data) : undefined
    };
  },
  toSDK(message: QueryObjectNFTResponse): QueryObjectNFTResponseSDKType {
    const obj: any = {};
    message.metaData !== undefined && (obj.meta_data = message.metaData ? ObjectMetaData.toSDK(message.metaData) : undefined);
    return obj;
  },
  fromAmino(object: QueryObjectNFTResponseAmino): QueryObjectNFTResponse {
    const message = createBaseQueryObjectNFTResponse();
    if (object.meta_data !== undefined && object.meta_data !== null) {
      message.metaData = ObjectMetaData.fromAmino(object.meta_data);
    }
    return message;
  },
  toAmino(message: QueryObjectNFTResponse): QueryObjectNFTResponseAmino {
    const obj: any = {};
    obj.meta_data = message.metaData ? ObjectMetaData.toAmino(message.metaData) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryObjectNFTResponseAminoMsg): QueryObjectNFTResponse {
    return QueryObjectNFTResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryObjectNFTResponseProtoMsg): QueryObjectNFTResponse {
    return QueryObjectNFTResponse.decode(message.value);
  },
  toProto(message: QueryObjectNFTResponse): Uint8Array {
    return QueryObjectNFTResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryObjectNFTResponse): QueryObjectNFTResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.QueryObjectNFTResponse",
      value: QueryObjectNFTResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGroupNFTResponse(): QueryGroupNFTResponse {
  return {
    metaData: undefined
  };
}
export const QueryGroupNFTResponse = {
  typeUrl: "/greenfield.storage.QueryGroupNFTResponse",
  encode(message: QueryGroupNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metaData !== undefined) {
      GroupMetaData.encode(message.metaData, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupNFTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metaData = GroupMetaData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupNFTResponse {
    return {
      metaData: isSet(object.metaData) ? GroupMetaData.fromJSON(object.metaData) : undefined
    };
  },
  toJSON(message: QueryGroupNFTResponse): unknown {
    const obj: any = {};
    message.metaData !== undefined && (obj.metaData = message.metaData ? GroupMetaData.toJSON(message.metaData) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGroupNFTResponse>, I>>(object: I): QueryGroupNFTResponse {
    const message = createBaseQueryGroupNFTResponse();
    message.metaData = object.metaData !== undefined && object.metaData !== null ? GroupMetaData.fromPartial(object.metaData) : undefined;
    return message;
  },
  fromSDK(object: QueryGroupNFTResponseSDKType): QueryGroupNFTResponse {
    return {
      metaData: object.meta_data ? GroupMetaData.fromSDK(object.meta_data) : undefined
    };
  },
  toSDK(message: QueryGroupNFTResponse): QueryGroupNFTResponseSDKType {
    const obj: any = {};
    message.metaData !== undefined && (obj.meta_data = message.metaData ? GroupMetaData.toSDK(message.metaData) : undefined);
    return obj;
  },
  fromAmino(object: QueryGroupNFTResponseAmino): QueryGroupNFTResponse {
    const message = createBaseQueryGroupNFTResponse();
    if (object.meta_data !== undefined && object.meta_data !== null) {
      message.metaData = GroupMetaData.fromAmino(object.meta_data);
    }
    return message;
  },
  toAmino(message: QueryGroupNFTResponse): QueryGroupNFTResponseAmino {
    const obj: any = {};
    obj.meta_data = message.metaData ? GroupMetaData.toAmino(message.metaData) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupNFTResponseAminoMsg): QueryGroupNFTResponse {
    return QueryGroupNFTResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGroupNFTResponseProtoMsg): QueryGroupNFTResponse {
    return QueryGroupNFTResponse.decode(message.value);
  },
  toProto(message: QueryGroupNFTResponse): Uint8Array {
    return QueryGroupNFTResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupNFTResponse): QueryGroupNFTResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.QueryGroupNFTResponse",
      value: QueryGroupNFTResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPolicyForAccountRequest(): QueryPolicyForAccountRequest {
  return {
    resource: "",
    principalAddress: ""
  };
}
export const QueryPolicyForAccountRequest = {
  typeUrl: "/greenfield.storage.QueryPolicyForAccountRequest",
  encode(message: QueryPolicyForAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resource !== "") {
      writer.uint32(10).string(message.resource);
    }
    if (message.principalAddress !== "") {
      writer.uint32(18).string(message.principalAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPolicyForAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPolicyForAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resource = reader.string();
          break;
        case 2:
          message.principalAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPolicyForAccountRequest {
    return {
      resource: isSet(object.resource) ? String(object.resource) : "",
      principalAddress: isSet(object.principalAddress) ? String(object.principalAddress) : ""
    };
  },
  toJSON(message: QueryPolicyForAccountRequest): unknown {
    const obj: any = {};
    message.resource !== undefined && (obj.resource = message.resource);
    message.principalAddress !== undefined && (obj.principalAddress = message.principalAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryPolicyForAccountRequest>, I>>(object: I): QueryPolicyForAccountRequest {
    const message = createBaseQueryPolicyForAccountRequest();
    message.resource = object.resource ?? "";
    message.principalAddress = object.principalAddress ?? "";
    return message;
  },
  fromSDK(object: QueryPolicyForAccountRequestSDKType): QueryPolicyForAccountRequest {
    return {
      resource: object?.resource,
      principalAddress: object?.principal_address
    };
  },
  toSDK(message: QueryPolicyForAccountRequest): QueryPolicyForAccountRequestSDKType {
    const obj: any = {};
    obj.resource = message.resource;
    obj.principal_address = message.principalAddress;
    return obj;
  },
  fromAmino(object: QueryPolicyForAccountRequestAmino): QueryPolicyForAccountRequest {
    const message = createBaseQueryPolicyForAccountRequest();
    if (object.resource !== undefined && object.resource !== null) {
      message.resource = object.resource;
    }
    if (object.principal_address !== undefined && object.principal_address !== null) {
      message.principalAddress = object.principal_address;
    }
    return message;
  },
  toAmino(message: QueryPolicyForAccountRequest): QueryPolicyForAccountRequestAmino {
    const obj: any = {};
    obj.resource = message.resource;
    obj.principal_address = message.principalAddress;
    return obj;
  },
  fromAminoMsg(object: QueryPolicyForAccountRequestAminoMsg): QueryPolicyForAccountRequest {
    return QueryPolicyForAccountRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPolicyForAccountRequestProtoMsg): QueryPolicyForAccountRequest {
    return QueryPolicyForAccountRequest.decode(message.value);
  },
  toProto(message: QueryPolicyForAccountRequest): Uint8Array {
    return QueryPolicyForAccountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPolicyForAccountRequest): QueryPolicyForAccountRequestProtoMsg {
    return {
      typeUrl: "/greenfield.storage.QueryPolicyForAccountRequest",
      value: QueryPolicyForAccountRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPolicyForAccountResponse(): QueryPolicyForAccountResponse {
  return {
    policy: undefined
  };
}
export const QueryPolicyForAccountResponse = {
  typeUrl: "/greenfield.storage.QueryPolicyForAccountResponse",
  encode(message: QueryPolicyForAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.policy !== undefined) {
      Policy.encode(message.policy, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPolicyForAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPolicyForAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.policy = Policy.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPolicyForAccountResponse {
    return {
      policy: isSet(object.policy) ? Policy.fromJSON(object.policy) : undefined
    };
  },
  toJSON(message: QueryPolicyForAccountResponse): unknown {
    const obj: any = {};
    message.policy !== undefined && (obj.policy = message.policy ? Policy.toJSON(message.policy) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryPolicyForAccountResponse>, I>>(object: I): QueryPolicyForAccountResponse {
    const message = createBaseQueryPolicyForAccountResponse();
    message.policy = object.policy !== undefined && object.policy !== null ? Policy.fromPartial(object.policy) : undefined;
    return message;
  },
  fromSDK(object: QueryPolicyForAccountResponseSDKType): QueryPolicyForAccountResponse {
    return {
      policy: object.policy ? Policy.fromSDK(object.policy) : undefined
    };
  },
  toSDK(message: QueryPolicyForAccountResponse): QueryPolicyForAccountResponseSDKType {
    const obj: any = {};
    message.policy !== undefined && (obj.policy = message.policy ? Policy.toSDK(message.policy) : undefined);
    return obj;
  },
  fromAmino(object: QueryPolicyForAccountResponseAmino): QueryPolicyForAccountResponse {
    const message = createBaseQueryPolicyForAccountResponse();
    if (object.policy !== undefined && object.policy !== null) {
      message.policy = Policy.fromAmino(object.policy);
    }
    return message;
  },
  toAmino(message: QueryPolicyForAccountResponse): QueryPolicyForAccountResponseAmino {
    const obj: any = {};
    obj.policy = message.policy ? Policy.toAmino(message.policy) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPolicyForAccountResponseAminoMsg): QueryPolicyForAccountResponse {
    return QueryPolicyForAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPolicyForAccountResponseProtoMsg): QueryPolicyForAccountResponse {
    return QueryPolicyForAccountResponse.decode(message.value);
  },
  toProto(message: QueryPolicyForAccountResponse): Uint8Array {
    return QueryPolicyForAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPolicyForAccountResponse): QueryPolicyForAccountResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.QueryPolicyForAccountResponse",
      value: QueryPolicyForAccountResponse.encode(message).finish()
    };
  }
};
function createBaseQueryVerifyPermissionRequest(): QueryVerifyPermissionRequest {
  return {
    operator: "",
    bucketName: "",
    objectName: "",
    actionType: 0
  };
}
export const QueryVerifyPermissionRequest = {
  typeUrl: "/greenfield.storage.QueryVerifyPermissionRequest",
  encode(message: QueryVerifyPermissionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }
    if (message.objectName !== "") {
      writer.uint32(26).string(message.objectName);
    }
    if (message.actionType !== 0) {
      writer.uint32(32).int32(message.actionType);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVerifyPermissionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVerifyPermissionRequest();
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
          message.actionType = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVerifyPermissionRequest {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      objectName: isSet(object.objectName) ? String(object.objectName) : "",
      actionType: isSet(object.actionType) ? actionTypeFromJSON(object.actionType) : -1
    };
  },
  toJSON(message: QueryVerifyPermissionRequest): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.objectName !== undefined && (obj.objectName = message.objectName);
    message.actionType !== undefined && (obj.actionType = actionTypeToJSON(message.actionType));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryVerifyPermissionRequest>, I>>(object: I): QueryVerifyPermissionRequest {
    const message = createBaseQueryVerifyPermissionRequest();
    message.operator = object.operator ?? "";
    message.bucketName = object.bucketName ?? "";
    message.objectName = object.objectName ?? "";
    message.actionType = object.actionType ?? 0;
    return message;
  },
  fromSDK(object: QueryVerifyPermissionRequestSDKType): QueryVerifyPermissionRequest {
    return {
      operator: object?.operator,
      bucketName: object?.bucket_name,
      objectName: object?.object_name,
      actionType: isSet(object.action_type) ? actionTypeFromJSON(object.action_type) : -1
    };
  },
  toSDK(message: QueryVerifyPermissionRequest): QueryVerifyPermissionRequestSDKType {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    message.actionType !== undefined && (obj.action_type = actionTypeToJSON(message.actionType));
    return obj;
  },
  fromAmino(object: QueryVerifyPermissionRequestAmino): QueryVerifyPermissionRequest {
    const message = createBaseQueryVerifyPermissionRequest();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    if (object.object_name !== undefined && object.object_name !== null) {
      message.objectName = object.object_name;
    }
    if (object.action_type !== undefined && object.action_type !== null) {
      message.actionType = actionTypeFromJSON(object.action_type);
    }
    return message;
  },
  toAmino(message: QueryVerifyPermissionRequest): QueryVerifyPermissionRequestAmino {
    const obj: any = {};
    obj.operator = message.operator;
    obj.bucket_name = message.bucketName;
    obj.object_name = message.objectName;
    obj.action_type = actionTypeToJSON(message.actionType);
    return obj;
  },
  fromAminoMsg(object: QueryVerifyPermissionRequestAminoMsg): QueryVerifyPermissionRequest {
    return QueryVerifyPermissionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVerifyPermissionRequestProtoMsg): QueryVerifyPermissionRequest {
    return QueryVerifyPermissionRequest.decode(message.value);
  },
  toProto(message: QueryVerifyPermissionRequest): Uint8Array {
    return QueryVerifyPermissionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVerifyPermissionRequest): QueryVerifyPermissionRequestProtoMsg {
    return {
      typeUrl: "/greenfield.storage.QueryVerifyPermissionRequest",
      value: QueryVerifyPermissionRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVerifyPermissionResponse(): QueryVerifyPermissionResponse {
  return {
    effect: 0
  };
}
export const QueryVerifyPermissionResponse = {
  typeUrl: "/greenfield.storage.QueryVerifyPermissionResponse",
  encode(message: QueryVerifyPermissionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.effect !== 0) {
      writer.uint32(8).int32(message.effect);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVerifyPermissionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVerifyPermissionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.effect = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVerifyPermissionResponse {
    return {
      effect: isSet(object.effect) ? effectFromJSON(object.effect) : -1
    };
  },
  toJSON(message: QueryVerifyPermissionResponse): unknown {
    const obj: any = {};
    message.effect !== undefined && (obj.effect = effectToJSON(message.effect));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryVerifyPermissionResponse>, I>>(object: I): QueryVerifyPermissionResponse {
    const message = createBaseQueryVerifyPermissionResponse();
    message.effect = object.effect ?? 0;
    return message;
  },
  fromSDK(object: QueryVerifyPermissionResponseSDKType): QueryVerifyPermissionResponse {
    return {
      effect: isSet(object.effect) ? effectFromJSON(object.effect) : -1
    };
  },
  toSDK(message: QueryVerifyPermissionResponse): QueryVerifyPermissionResponseSDKType {
    const obj: any = {};
    message.effect !== undefined && (obj.effect = effectToJSON(message.effect));
    return obj;
  },
  fromAmino(object: QueryVerifyPermissionResponseAmino): QueryVerifyPermissionResponse {
    const message = createBaseQueryVerifyPermissionResponse();
    if (object.effect !== undefined && object.effect !== null) {
      message.effect = effectFromJSON(object.effect);
    }
    return message;
  },
  toAmino(message: QueryVerifyPermissionResponse): QueryVerifyPermissionResponseAmino {
    const obj: any = {};
    obj.effect = effectToJSON(message.effect);
    return obj;
  },
  fromAminoMsg(object: QueryVerifyPermissionResponseAminoMsg): QueryVerifyPermissionResponse {
    return QueryVerifyPermissionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVerifyPermissionResponseProtoMsg): QueryVerifyPermissionResponse {
    return QueryVerifyPermissionResponse.decode(message.value);
  },
  toProto(message: QueryVerifyPermissionResponse): Uint8Array {
    return QueryVerifyPermissionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVerifyPermissionResponse): QueryVerifyPermissionResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.QueryVerifyPermissionResponse",
      value: QueryVerifyPermissionResponse.encode(message).finish()
    };
  }
};
function createBaseQueryHeadGroupRequest(): QueryHeadGroupRequest {
  return {
    groupOwner: "",
    groupName: ""
  };
}
export const QueryHeadGroupRequest = {
  typeUrl: "/greenfield.storage.QueryHeadGroupRequest",
  encode(message: QueryHeadGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupOwner !== "") {
      writer.uint32(10).string(message.groupOwner);
    }
    if (message.groupName !== "") {
      writer.uint32(18).string(message.groupName);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHeadGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHeadGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupOwner = reader.string();
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
  fromJSON(object: any): QueryHeadGroupRequest {
    return {
      groupOwner: isSet(object.groupOwner) ? String(object.groupOwner) : "",
      groupName: isSet(object.groupName) ? String(object.groupName) : ""
    };
  },
  toJSON(message: QueryHeadGroupRequest): unknown {
    const obj: any = {};
    message.groupOwner !== undefined && (obj.groupOwner = message.groupOwner);
    message.groupName !== undefined && (obj.groupName = message.groupName);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryHeadGroupRequest>, I>>(object: I): QueryHeadGroupRequest {
    const message = createBaseQueryHeadGroupRequest();
    message.groupOwner = object.groupOwner ?? "";
    message.groupName = object.groupName ?? "";
    return message;
  },
  fromSDK(object: QueryHeadGroupRequestSDKType): QueryHeadGroupRequest {
    return {
      groupOwner: object?.group_owner,
      groupName: object?.group_name
    };
  },
  toSDK(message: QueryHeadGroupRequest): QueryHeadGroupRequestSDKType {
    const obj: any = {};
    obj.group_owner = message.groupOwner;
    obj.group_name = message.groupName;
    return obj;
  },
  fromAmino(object: QueryHeadGroupRequestAmino): QueryHeadGroupRequest {
    const message = createBaseQueryHeadGroupRequest();
    if (object.group_owner !== undefined && object.group_owner !== null) {
      message.groupOwner = object.group_owner;
    }
    if (object.group_name !== undefined && object.group_name !== null) {
      message.groupName = object.group_name;
    }
    return message;
  },
  toAmino(message: QueryHeadGroupRequest): QueryHeadGroupRequestAmino {
    const obj: any = {};
    obj.group_owner = message.groupOwner;
    obj.group_name = message.groupName;
    return obj;
  },
  fromAminoMsg(object: QueryHeadGroupRequestAminoMsg): QueryHeadGroupRequest {
    return QueryHeadGroupRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHeadGroupRequestProtoMsg): QueryHeadGroupRequest {
    return QueryHeadGroupRequest.decode(message.value);
  },
  toProto(message: QueryHeadGroupRequest): Uint8Array {
    return QueryHeadGroupRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryHeadGroupRequest): QueryHeadGroupRequestProtoMsg {
    return {
      typeUrl: "/greenfield.storage.QueryHeadGroupRequest",
      value: QueryHeadGroupRequest.encode(message).finish()
    };
  }
};
function createBaseQueryHeadGroupResponse(): QueryHeadGroupResponse {
  return {
    groupInfo: undefined
  };
}
export const QueryHeadGroupResponse = {
  typeUrl: "/greenfield.storage.QueryHeadGroupResponse",
  encode(message: QueryHeadGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupInfo !== undefined) {
      GroupInfo.encode(message.groupInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHeadGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHeadGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupInfo = GroupInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryHeadGroupResponse {
    return {
      groupInfo: isSet(object.groupInfo) ? GroupInfo.fromJSON(object.groupInfo) : undefined
    };
  },
  toJSON(message: QueryHeadGroupResponse): unknown {
    const obj: any = {};
    message.groupInfo !== undefined && (obj.groupInfo = message.groupInfo ? GroupInfo.toJSON(message.groupInfo) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryHeadGroupResponse>, I>>(object: I): QueryHeadGroupResponse {
    const message = createBaseQueryHeadGroupResponse();
    message.groupInfo = object.groupInfo !== undefined && object.groupInfo !== null ? GroupInfo.fromPartial(object.groupInfo) : undefined;
    return message;
  },
  fromSDK(object: QueryHeadGroupResponseSDKType): QueryHeadGroupResponse {
    return {
      groupInfo: object.group_info ? GroupInfo.fromSDK(object.group_info) : undefined
    };
  },
  toSDK(message: QueryHeadGroupResponse): QueryHeadGroupResponseSDKType {
    const obj: any = {};
    message.groupInfo !== undefined && (obj.group_info = message.groupInfo ? GroupInfo.toSDK(message.groupInfo) : undefined);
    return obj;
  },
  fromAmino(object: QueryHeadGroupResponseAmino): QueryHeadGroupResponse {
    const message = createBaseQueryHeadGroupResponse();
    if (object.group_info !== undefined && object.group_info !== null) {
      message.groupInfo = GroupInfo.fromAmino(object.group_info);
    }
    return message;
  },
  toAmino(message: QueryHeadGroupResponse): QueryHeadGroupResponseAmino {
    const obj: any = {};
    obj.group_info = message.groupInfo ? GroupInfo.toAmino(message.groupInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryHeadGroupResponseAminoMsg): QueryHeadGroupResponse {
    return QueryHeadGroupResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHeadGroupResponseProtoMsg): QueryHeadGroupResponse {
    return QueryHeadGroupResponse.decode(message.value);
  },
  toProto(message: QueryHeadGroupResponse): Uint8Array {
    return QueryHeadGroupResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryHeadGroupResponse): QueryHeadGroupResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.QueryHeadGroupResponse",
      value: QueryHeadGroupResponse.encode(message).finish()
    };
  }
};
function createBaseQueryListGroupsRequest(): QueryListGroupsRequest {
  return {
    pagination: undefined,
    groupOwner: ""
  };
}
export const QueryListGroupsRequest = {
  typeUrl: "/greenfield.storage.QueryListGroupsRequest",
  encode(message: QueryListGroupsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.groupOwner !== "") {
      writer.uint32(18).string(message.groupOwner);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListGroupsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListGroupsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.groupOwner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryListGroupsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      groupOwner: isSet(object.groupOwner) ? String(object.groupOwner) : ""
    };
  },
  toJSON(message: QueryListGroupsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.groupOwner !== undefined && (obj.groupOwner = message.groupOwner);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryListGroupsRequest>, I>>(object: I): QueryListGroupsRequest {
    const message = createBaseQueryListGroupsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.groupOwner = object.groupOwner ?? "";
    return message;
  },
  fromSDK(object: QueryListGroupsRequestSDKType): QueryListGroupsRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined,
      groupOwner: object?.group_owner
    };
  },
  toSDK(message: QueryListGroupsRequest): QueryListGroupsRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    obj.group_owner = message.groupOwner;
    return obj;
  },
  fromAmino(object: QueryListGroupsRequestAmino): QueryListGroupsRequest {
    const message = createBaseQueryListGroupsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.group_owner !== undefined && object.group_owner !== null) {
      message.groupOwner = object.group_owner;
    }
    return message;
  },
  toAmino(message: QueryListGroupsRequest): QueryListGroupsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.group_owner = message.groupOwner;
    return obj;
  },
  fromAminoMsg(object: QueryListGroupsRequestAminoMsg): QueryListGroupsRequest {
    return QueryListGroupsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListGroupsRequestProtoMsg): QueryListGroupsRequest {
    return QueryListGroupsRequest.decode(message.value);
  },
  toProto(message: QueryListGroupsRequest): Uint8Array {
    return QueryListGroupsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListGroupsRequest): QueryListGroupsRequestProtoMsg {
    return {
      typeUrl: "/greenfield.storage.QueryListGroupsRequest",
      value: QueryListGroupsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListGroupsResponse(): QueryListGroupsResponse {
  return {
    pagination: undefined,
    groupInfos: []
  };
}
export const QueryListGroupsResponse = {
  typeUrl: "/greenfield.storage.QueryListGroupsResponse",
  encode(message: QueryListGroupsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.groupInfos) {
      GroupInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListGroupsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListGroupsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        case 2:
          message.groupInfos.push(GroupInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryListGroupsResponse {
    return {
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
      groupInfos: Array.isArray(object?.groupInfos) ? object.groupInfos.map((e: any) => GroupInfo.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryListGroupsResponse): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    if (message.groupInfos) {
      obj.groupInfos = message.groupInfos.map(e => e ? GroupInfo.toJSON(e) : undefined);
    } else {
      obj.groupInfos = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryListGroupsResponse>, I>>(object: I): QueryListGroupsResponse {
    const message = createBaseQueryListGroupsResponse();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    message.groupInfos = object.groupInfos?.map(e => GroupInfo.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryListGroupsResponseSDKType): QueryListGroupsResponse {
    return {
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined,
      groupInfos: Array.isArray(object?.group_infos) ? object.group_infos.map((e: any) => GroupInfo.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryListGroupsResponse): QueryListGroupsResponseSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    if (message.groupInfos) {
      obj.group_infos = message.groupInfos.map(e => e ? GroupInfo.toSDK(e) : undefined);
    } else {
      obj.group_infos = [];
    }
    return obj;
  },
  fromAmino(object: QueryListGroupsResponseAmino): QueryListGroupsResponse {
    const message = createBaseQueryListGroupsResponse();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    message.groupInfos = object.group_infos?.map(e => GroupInfo.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryListGroupsResponse): QueryListGroupsResponseAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    if (message.groupInfos) {
      obj.group_infos = message.groupInfos.map(e => e ? GroupInfo.toAmino(e) : undefined);
    } else {
      obj.group_infos = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryListGroupsResponseAminoMsg): QueryListGroupsResponse {
    return QueryListGroupsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListGroupsResponseProtoMsg): QueryListGroupsResponse {
    return QueryListGroupsResponse.decode(message.value);
  },
  toProto(message: QueryListGroupsResponse): Uint8Array {
    return QueryListGroupsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListGroupsResponse): QueryListGroupsResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.QueryListGroupsResponse",
      value: QueryListGroupsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryHeadGroupMemberRequest(): QueryHeadGroupMemberRequest {
  return {
    member: "",
    groupOwner: "",
    groupName: ""
  };
}
export const QueryHeadGroupMemberRequest = {
  typeUrl: "/greenfield.storage.QueryHeadGroupMemberRequest",
  encode(message: QueryHeadGroupMemberRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHeadGroupMemberRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHeadGroupMemberRequest();
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
  fromJSON(object: any): QueryHeadGroupMemberRequest {
    return {
      member: isSet(object.member) ? String(object.member) : "",
      groupOwner: isSet(object.groupOwner) ? String(object.groupOwner) : "",
      groupName: isSet(object.groupName) ? String(object.groupName) : ""
    };
  },
  toJSON(message: QueryHeadGroupMemberRequest): unknown {
    const obj: any = {};
    message.member !== undefined && (obj.member = message.member);
    message.groupOwner !== undefined && (obj.groupOwner = message.groupOwner);
    message.groupName !== undefined && (obj.groupName = message.groupName);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryHeadGroupMemberRequest>, I>>(object: I): QueryHeadGroupMemberRequest {
    const message = createBaseQueryHeadGroupMemberRequest();
    message.member = object.member ?? "";
    message.groupOwner = object.groupOwner ?? "";
    message.groupName = object.groupName ?? "";
    return message;
  },
  fromSDK(object: QueryHeadGroupMemberRequestSDKType): QueryHeadGroupMemberRequest {
    return {
      member: object?.member,
      groupOwner: object?.group_owner,
      groupName: object?.group_name
    };
  },
  toSDK(message: QueryHeadGroupMemberRequest): QueryHeadGroupMemberRequestSDKType {
    const obj: any = {};
    obj.member = message.member;
    obj.group_owner = message.groupOwner;
    obj.group_name = message.groupName;
    return obj;
  },
  fromAmino(object: QueryHeadGroupMemberRequestAmino): QueryHeadGroupMemberRequest {
    const message = createBaseQueryHeadGroupMemberRequest();
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
  toAmino(message: QueryHeadGroupMemberRequest): QueryHeadGroupMemberRequestAmino {
    const obj: any = {};
    obj.member = message.member;
    obj.group_owner = message.groupOwner;
    obj.group_name = message.groupName;
    return obj;
  },
  fromAminoMsg(object: QueryHeadGroupMemberRequestAminoMsg): QueryHeadGroupMemberRequest {
    return QueryHeadGroupMemberRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHeadGroupMemberRequestProtoMsg): QueryHeadGroupMemberRequest {
    return QueryHeadGroupMemberRequest.decode(message.value);
  },
  toProto(message: QueryHeadGroupMemberRequest): Uint8Array {
    return QueryHeadGroupMemberRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryHeadGroupMemberRequest): QueryHeadGroupMemberRequestProtoMsg {
    return {
      typeUrl: "/greenfield.storage.QueryHeadGroupMemberRequest",
      value: QueryHeadGroupMemberRequest.encode(message).finish()
    };
  }
};
function createBaseQueryHeadGroupMemberResponse(): QueryHeadGroupMemberResponse {
  return {
    groupMember: undefined
  };
}
export const QueryHeadGroupMemberResponse = {
  typeUrl: "/greenfield.storage.QueryHeadGroupMemberResponse",
  encode(message: QueryHeadGroupMemberResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupMember !== undefined) {
      GroupMember.encode(message.groupMember, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHeadGroupMemberResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHeadGroupMemberResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupMember = GroupMember.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryHeadGroupMemberResponse {
    return {
      groupMember: isSet(object.groupMember) ? GroupMember.fromJSON(object.groupMember) : undefined
    };
  },
  toJSON(message: QueryHeadGroupMemberResponse): unknown {
    const obj: any = {};
    message.groupMember !== undefined && (obj.groupMember = message.groupMember ? GroupMember.toJSON(message.groupMember) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryHeadGroupMemberResponse>, I>>(object: I): QueryHeadGroupMemberResponse {
    const message = createBaseQueryHeadGroupMemberResponse();
    message.groupMember = object.groupMember !== undefined && object.groupMember !== null ? GroupMember.fromPartial(object.groupMember) : undefined;
    return message;
  },
  fromSDK(object: QueryHeadGroupMemberResponseSDKType): QueryHeadGroupMemberResponse {
    return {
      groupMember: object.group_member ? GroupMember.fromSDK(object.group_member) : undefined
    };
  },
  toSDK(message: QueryHeadGroupMemberResponse): QueryHeadGroupMemberResponseSDKType {
    const obj: any = {};
    message.groupMember !== undefined && (obj.group_member = message.groupMember ? GroupMember.toSDK(message.groupMember) : undefined);
    return obj;
  },
  fromAmino(object: QueryHeadGroupMemberResponseAmino): QueryHeadGroupMemberResponse {
    const message = createBaseQueryHeadGroupMemberResponse();
    if (object.group_member !== undefined && object.group_member !== null) {
      message.groupMember = GroupMember.fromAmino(object.group_member);
    }
    return message;
  },
  toAmino(message: QueryHeadGroupMemberResponse): QueryHeadGroupMemberResponseAmino {
    const obj: any = {};
    obj.group_member = message.groupMember ? GroupMember.toAmino(message.groupMember) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryHeadGroupMemberResponseAminoMsg): QueryHeadGroupMemberResponse {
    return QueryHeadGroupMemberResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHeadGroupMemberResponseProtoMsg): QueryHeadGroupMemberResponse {
    return QueryHeadGroupMemberResponse.decode(message.value);
  },
  toProto(message: QueryHeadGroupMemberResponse): Uint8Array {
    return QueryHeadGroupMemberResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryHeadGroupMemberResponse): QueryHeadGroupMemberResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.QueryHeadGroupMemberResponse",
      value: QueryHeadGroupMemberResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPolicyForGroupRequest(): QueryPolicyForGroupRequest {
  return {
    resource: "",
    principalGroupId: ""
  };
}
export const QueryPolicyForGroupRequest = {
  typeUrl: "/greenfield.storage.QueryPolicyForGroupRequest",
  encode(message: QueryPolicyForGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resource !== "") {
      writer.uint32(10).string(message.resource);
    }
    if (message.principalGroupId !== "") {
      writer.uint32(18).string(message.principalGroupId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPolicyForGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPolicyForGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resource = reader.string();
          break;
        case 2:
          message.principalGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPolicyForGroupRequest {
    return {
      resource: isSet(object.resource) ? String(object.resource) : "",
      principalGroupId: isSet(object.principalGroupId) ? String(object.principalGroupId) : ""
    };
  },
  toJSON(message: QueryPolicyForGroupRequest): unknown {
    const obj: any = {};
    message.resource !== undefined && (obj.resource = message.resource);
    message.principalGroupId !== undefined && (obj.principalGroupId = message.principalGroupId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryPolicyForGroupRequest>, I>>(object: I): QueryPolicyForGroupRequest {
    const message = createBaseQueryPolicyForGroupRequest();
    message.resource = object.resource ?? "";
    message.principalGroupId = object.principalGroupId ?? "";
    return message;
  },
  fromSDK(object: QueryPolicyForGroupRequestSDKType): QueryPolicyForGroupRequest {
    return {
      resource: object?.resource,
      principalGroupId: object?.principal_group_id
    };
  },
  toSDK(message: QueryPolicyForGroupRequest): QueryPolicyForGroupRequestSDKType {
    const obj: any = {};
    obj.resource = message.resource;
    obj.principal_group_id = message.principalGroupId;
    return obj;
  },
  fromAmino(object: QueryPolicyForGroupRequestAmino): QueryPolicyForGroupRequest {
    const message = createBaseQueryPolicyForGroupRequest();
    if (object.resource !== undefined && object.resource !== null) {
      message.resource = object.resource;
    }
    if (object.principal_group_id !== undefined && object.principal_group_id !== null) {
      message.principalGroupId = object.principal_group_id;
    }
    return message;
  },
  toAmino(message: QueryPolicyForGroupRequest): QueryPolicyForGroupRequestAmino {
    const obj: any = {};
    obj.resource = message.resource;
    obj.principal_group_id = message.principalGroupId;
    return obj;
  },
  fromAminoMsg(object: QueryPolicyForGroupRequestAminoMsg): QueryPolicyForGroupRequest {
    return QueryPolicyForGroupRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPolicyForGroupRequestProtoMsg): QueryPolicyForGroupRequest {
    return QueryPolicyForGroupRequest.decode(message.value);
  },
  toProto(message: QueryPolicyForGroupRequest): Uint8Array {
    return QueryPolicyForGroupRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPolicyForGroupRequest): QueryPolicyForGroupRequestProtoMsg {
    return {
      typeUrl: "/greenfield.storage.QueryPolicyForGroupRequest",
      value: QueryPolicyForGroupRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPolicyForGroupResponse(): QueryPolicyForGroupResponse {
  return {
    policy: undefined
  };
}
export const QueryPolicyForGroupResponse = {
  typeUrl: "/greenfield.storage.QueryPolicyForGroupResponse",
  encode(message: QueryPolicyForGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.policy !== undefined) {
      Policy.encode(message.policy, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPolicyForGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPolicyForGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.policy = Policy.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPolicyForGroupResponse {
    return {
      policy: isSet(object.policy) ? Policy.fromJSON(object.policy) : undefined
    };
  },
  toJSON(message: QueryPolicyForGroupResponse): unknown {
    const obj: any = {};
    message.policy !== undefined && (obj.policy = message.policy ? Policy.toJSON(message.policy) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryPolicyForGroupResponse>, I>>(object: I): QueryPolicyForGroupResponse {
    const message = createBaseQueryPolicyForGroupResponse();
    message.policy = object.policy !== undefined && object.policy !== null ? Policy.fromPartial(object.policy) : undefined;
    return message;
  },
  fromSDK(object: QueryPolicyForGroupResponseSDKType): QueryPolicyForGroupResponse {
    return {
      policy: object.policy ? Policy.fromSDK(object.policy) : undefined
    };
  },
  toSDK(message: QueryPolicyForGroupResponse): QueryPolicyForGroupResponseSDKType {
    const obj: any = {};
    message.policy !== undefined && (obj.policy = message.policy ? Policy.toSDK(message.policy) : undefined);
    return obj;
  },
  fromAmino(object: QueryPolicyForGroupResponseAmino): QueryPolicyForGroupResponse {
    const message = createBaseQueryPolicyForGroupResponse();
    if (object.policy !== undefined && object.policy !== null) {
      message.policy = Policy.fromAmino(object.policy);
    }
    return message;
  },
  toAmino(message: QueryPolicyForGroupResponse): QueryPolicyForGroupResponseAmino {
    const obj: any = {};
    obj.policy = message.policy ? Policy.toAmino(message.policy) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPolicyForGroupResponseAminoMsg): QueryPolicyForGroupResponse {
    return QueryPolicyForGroupResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPolicyForGroupResponseProtoMsg): QueryPolicyForGroupResponse {
    return QueryPolicyForGroupResponse.decode(message.value);
  },
  toProto(message: QueryPolicyForGroupResponse): Uint8Array {
    return QueryPolicyForGroupResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPolicyForGroupResponse): QueryPolicyForGroupResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.QueryPolicyForGroupResponse",
      value: QueryPolicyForGroupResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPolicyByIdRequest(): QueryPolicyByIdRequest {
  return {
    policyId: ""
  };
}
export const QueryPolicyByIdRequest = {
  typeUrl: "/greenfield.storage.QueryPolicyByIdRequest",
  encode(message: QueryPolicyByIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.policyId !== "") {
      writer.uint32(10).string(message.policyId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPolicyByIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPolicyByIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.policyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPolicyByIdRequest {
    return {
      policyId: isSet(object.policyId) ? String(object.policyId) : ""
    };
  },
  toJSON(message: QueryPolicyByIdRequest): unknown {
    const obj: any = {};
    message.policyId !== undefined && (obj.policyId = message.policyId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryPolicyByIdRequest>, I>>(object: I): QueryPolicyByIdRequest {
    const message = createBaseQueryPolicyByIdRequest();
    message.policyId = object.policyId ?? "";
    return message;
  },
  fromSDK(object: QueryPolicyByIdRequestSDKType): QueryPolicyByIdRequest {
    return {
      policyId: object?.policy_id
    };
  },
  toSDK(message: QueryPolicyByIdRequest): QueryPolicyByIdRequestSDKType {
    const obj: any = {};
    obj.policy_id = message.policyId;
    return obj;
  },
  fromAmino(object: QueryPolicyByIdRequestAmino): QueryPolicyByIdRequest {
    const message = createBaseQueryPolicyByIdRequest();
    if (object.policy_id !== undefined && object.policy_id !== null) {
      message.policyId = object.policy_id;
    }
    return message;
  },
  toAmino(message: QueryPolicyByIdRequest): QueryPolicyByIdRequestAmino {
    const obj: any = {};
    obj.policy_id = message.policyId;
    return obj;
  },
  fromAminoMsg(object: QueryPolicyByIdRequestAminoMsg): QueryPolicyByIdRequest {
    return QueryPolicyByIdRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPolicyByIdRequestProtoMsg): QueryPolicyByIdRequest {
    return QueryPolicyByIdRequest.decode(message.value);
  },
  toProto(message: QueryPolicyByIdRequest): Uint8Array {
    return QueryPolicyByIdRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPolicyByIdRequest): QueryPolicyByIdRequestProtoMsg {
    return {
      typeUrl: "/greenfield.storage.QueryPolicyByIdRequest",
      value: QueryPolicyByIdRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPolicyByIdResponse(): QueryPolicyByIdResponse {
  return {
    policy: undefined
  };
}
export const QueryPolicyByIdResponse = {
  typeUrl: "/greenfield.storage.QueryPolicyByIdResponse",
  encode(message: QueryPolicyByIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.policy !== undefined) {
      Policy.encode(message.policy, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPolicyByIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPolicyByIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.policy = Policy.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPolicyByIdResponse {
    return {
      policy: isSet(object.policy) ? Policy.fromJSON(object.policy) : undefined
    };
  },
  toJSON(message: QueryPolicyByIdResponse): unknown {
    const obj: any = {};
    message.policy !== undefined && (obj.policy = message.policy ? Policy.toJSON(message.policy) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryPolicyByIdResponse>, I>>(object: I): QueryPolicyByIdResponse {
    const message = createBaseQueryPolicyByIdResponse();
    message.policy = object.policy !== undefined && object.policy !== null ? Policy.fromPartial(object.policy) : undefined;
    return message;
  },
  fromSDK(object: QueryPolicyByIdResponseSDKType): QueryPolicyByIdResponse {
    return {
      policy: object.policy ? Policy.fromSDK(object.policy) : undefined
    };
  },
  toSDK(message: QueryPolicyByIdResponse): QueryPolicyByIdResponseSDKType {
    const obj: any = {};
    message.policy !== undefined && (obj.policy = message.policy ? Policy.toSDK(message.policy) : undefined);
    return obj;
  },
  fromAmino(object: QueryPolicyByIdResponseAmino): QueryPolicyByIdResponse {
    const message = createBaseQueryPolicyByIdResponse();
    if (object.policy !== undefined && object.policy !== null) {
      message.policy = Policy.fromAmino(object.policy);
    }
    return message;
  },
  toAmino(message: QueryPolicyByIdResponse): QueryPolicyByIdResponseAmino {
    const obj: any = {};
    obj.policy = message.policy ? Policy.toAmino(message.policy) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPolicyByIdResponseAminoMsg): QueryPolicyByIdResponse {
    return QueryPolicyByIdResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPolicyByIdResponseProtoMsg): QueryPolicyByIdResponse {
    return QueryPolicyByIdResponse.decode(message.value);
  },
  toProto(message: QueryPolicyByIdResponse): Uint8Array {
    return QueryPolicyByIdResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPolicyByIdResponse): QueryPolicyByIdResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.QueryPolicyByIdResponse",
      value: QueryPolicyByIdResponse.encode(message).finish()
    };
  }
};
function createBaseQueryLockFeeRequest(): QueryLockFeeRequest {
  return {
    primarySpAddress: "",
    createAt: Long.ZERO,
    payloadSize: Long.UZERO
  };
}
export const QueryLockFeeRequest = {
  typeUrl: "/greenfield.storage.QueryLockFeeRequest",
  encode(message: QueryLockFeeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.primarySpAddress !== "") {
      writer.uint32(10).string(message.primarySpAddress);
    }
    if (!message.createAt.isZero()) {
      writer.uint32(16).int64(message.createAt);
    }
    if (!message.payloadSize.isZero()) {
      writer.uint32(24).uint64(message.payloadSize);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLockFeeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockFeeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.primarySpAddress = reader.string();
          break;
        case 2:
          message.createAt = (reader.int64() as Long);
          break;
        case 3:
          message.payloadSize = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLockFeeRequest {
    return {
      primarySpAddress: isSet(object.primarySpAddress) ? String(object.primarySpAddress) : "",
      createAt: isSet(object.createAt) ? Long.fromValue(object.createAt) : Long.ZERO,
      payloadSize: isSet(object.payloadSize) ? Long.fromValue(object.payloadSize) : Long.UZERO
    };
  },
  toJSON(message: QueryLockFeeRequest): unknown {
    const obj: any = {};
    message.primarySpAddress !== undefined && (obj.primarySpAddress = message.primarySpAddress);
    message.createAt !== undefined && (obj.createAt = (message.createAt || Long.ZERO).toString());
    message.payloadSize !== undefined && (obj.payloadSize = (message.payloadSize || Long.UZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryLockFeeRequest>, I>>(object: I): QueryLockFeeRequest {
    const message = createBaseQueryLockFeeRequest();
    message.primarySpAddress = object.primarySpAddress ?? "";
    message.createAt = object.createAt !== undefined && object.createAt !== null ? Long.fromValue(object.createAt) : Long.ZERO;
    message.payloadSize = object.payloadSize !== undefined && object.payloadSize !== null ? Long.fromValue(object.payloadSize) : Long.UZERO;
    return message;
  },
  fromSDK(object: QueryLockFeeRequestSDKType): QueryLockFeeRequest {
    return {
      primarySpAddress: object?.primary_sp_address,
      createAt: object?.create_at,
      payloadSize: object?.payload_size
    };
  },
  toSDK(message: QueryLockFeeRequest): QueryLockFeeRequestSDKType {
    const obj: any = {};
    obj.primary_sp_address = message.primarySpAddress;
    obj.create_at = message.createAt;
    obj.payload_size = message.payloadSize;
    return obj;
  },
  fromAmino(object: QueryLockFeeRequestAmino): QueryLockFeeRequest {
    const message = createBaseQueryLockFeeRequest();
    if (object.primary_sp_address !== undefined && object.primary_sp_address !== null) {
      message.primarySpAddress = object.primary_sp_address;
    }
    if (object.create_at !== undefined && object.create_at !== null) {
      message.createAt = Long.fromString(object.create_at);
    }
    if (object.payload_size !== undefined && object.payload_size !== null) {
      message.payloadSize = Long.fromString(object.payload_size);
    }
    return message;
  },
  toAmino(message: QueryLockFeeRequest): QueryLockFeeRequestAmino {
    const obj: any = {};
    obj.primary_sp_address = message.primarySpAddress;
    obj.create_at = message.createAt ? message.createAt.toString() : undefined;
    obj.payload_size = message.payloadSize ? message.payloadSize.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLockFeeRequestAminoMsg): QueryLockFeeRequest {
    return QueryLockFeeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLockFeeRequestProtoMsg): QueryLockFeeRequest {
    return QueryLockFeeRequest.decode(message.value);
  },
  toProto(message: QueryLockFeeRequest): Uint8Array {
    return QueryLockFeeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLockFeeRequest): QueryLockFeeRequestProtoMsg {
    return {
      typeUrl: "/greenfield.storage.QueryLockFeeRequest",
      value: QueryLockFeeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLockFeeResponse(): QueryLockFeeResponse {
  return {
    amount: ""
  };
}
export const QueryLockFeeResponse = {
  typeUrl: "/greenfield.storage.QueryLockFeeResponse",
  encode(message: QueryLockFeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLockFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockFeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLockFeeResponse {
    return {
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  toJSON(message: QueryLockFeeResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryLockFeeResponse>, I>>(object: I): QueryLockFeeResponse {
    const message = createBaseQueryLockFeeResponse();
    message.amount = object.amount ?? "";
    return message;
  },
  fromSDK(object: QueryLockFeeResponseSDKType): QueryLockFeeResponse {
    return {
      amount: object?.amount
    };
  },
  toSDK(message: QueryLockFeeResponse): QueryLockFeeResponseSDKType {
    const obj: any = {};
    obj.amount = message.amount;
    return obj;
  },
  fromAmino(object: QueryLockFeeResponseAmino): QueryLockFeeResponse {
    const message = createBaseQueryLockFeeResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: QueryLockFeeResponse): QueryLockFeeResponseAmino {
    const obj: any = {};
    obj.amount = message.amount;
    return obj;
  },
  fromAminoMsg(object: QueryLockFeeResponseAminoMsg): QueryLockFeeResponse {
    return QueryLockFeeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLockFeeResponseProtoMsg): QueryLockFeeResponse {
    return QueryLockFeeResponse.decode(message.value);
  },
  toProto(message: QueryLockFeeResponse): Uint8Array {
    return QueryLockFeeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLockFeeResponse): QueryLockFeeResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.QueryLockFeeResponse",
      value: QueryLockFeeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryHeadBucketExtraRequest(): QueryHeadBucketExtraRequest {
  return {
    bucketName: ""
  };
}
export const QueryHeadBucketExtraRequest = {
  typeUrl: "/greenfield.storage.QueryHeadBucketExtraRequest",
  encode(message: QueryHeadBucketExtraRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bucketName !== "") {
      writer.uint32(10).string(message.bucketName);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHeadBucketExtraRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHeadBucketExtraRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bucketName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryHeadBucketExtraRequest {
    return {
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : ""
    };
  },
  toJSON(message: QueryHeadBucketExtraRequest): unknown {
    const obj: any = {};
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryHeadBucketExtraRequest>, I>>(object: I): QueryHeadBucketExtraRequest {
    const message = createBaseQueryHeadBucketExtraRequest();
    message.bucketName = object.bucketName ?? "";
    return message;
  },
  fromSDK(object: QueryHeadBucketExtraRequestSDKType): QueryHeadBucketExtraRequest {
    return {
      bucketName: object?.bucket_name
    };
  },
  toSDK(message: QueryHeadBucketExtraRequest): QueryHeadBucketExtraRequestSDKType {
    const obj: any = {};
    obj.bucket_name = message.bucketName;
    return obj;
  },
  fromAmino(object: QueryHeadBucketExtraRequestAmino): QueryHeadBucketExtraRequest {
    const message = createBaseQueryHeadBucketExtraRequest();
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    return message;
  },
  toAmino(message: QueryHeadBucketExtraRequest): QueryHeadBucketExtraRequestAmino {
    const obj: any = {};
    obj.bucket_name = message.bucketName;
    return obj;
  },
  fromAminoMsg(object: QueryHeadBucketExtraRequestAminoMsg): QueryHeadBucketExtraRequest {
    return QueryHeadBucketExtraRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHeadBucketExtraRequestProtoMsg): QueryHeadBucketExtraRequest {
    return QueryHeadBucketExtraRequest.decode(message.value);
  },
  toProto(message: QueryHeadBucketExtraRequest): Uint8Array {
    return QueryHeadBucketExtraRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryHeadBucketExtraRequest): QueryHeadBucketExtraRequestProtoMsg {
    return {
      typeUrl: "/greenfield.storage.QueryHeadBucketExtraRequest",
      value: QueryHeadBucketExtraRequest.encode(message).finish()
    };
  }
};
function createBaseQueryHeadBucketExtraResponse(): QueryHeadBucketExtraResponse {
  return {
    extraInfo: undefined
  };
}
export const QueryHeadBucketExtraResponse = {
  typeUrl: "/greenfield.storage.QueryHeadBucketExtraResponse",
  encode(message: QueryHeadBucketExtraResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.extraInfo !== undefined) {
      InternalBucketInfo.encode(message.extraInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHeadBucketExtraResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHeadBucketExtraResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.extraInfo = InternalBucketInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryHeadBucketExtraResponse {
    return {
      extraInfo: isSet(object.extraInfo) ? InternalBucketInfo.fromJSON(object.extraInfo) : undefined
    };
  },
  toJSON(message: QueryHeadBucketExtraResponse): unknown {
    const obj: any = {};
    message.extraInfo !== undefined && (obj.extraInfo = message.extraInfo ? InternalBucketInfo.toJSON(message.extraInfo) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryHeadBucketExtraResponse>, I>>(object: I): QueryHeadBucketExtraResponse {
    const message = createBaseQueryHeadBucketExtraResponse();
    message.extraInfo = object.extraInfo !== undefined && object.extraInfo !== null ? InternalBucketInfo.fromPartial(object.extraInfo) : undefined;
    return message;
  },
  fromSDK(object: QueryHeadBucketExtraResponseSDKType): QueryHeadBucketExtraResponse {
    return {
      extraInfo: object.extra_info ? InternalBucketInfo.fromSDK(object.extra_info) : undefined
    };
  },
  toSDK(message: QueryHeadBucketExtraResponse): QueryHeadBucketExtraResponseSDKType {
    const obj: any = {};
    message.extraInfo !== undefined && (obj.extra_info = message.extraInfo ? InternalBucketInfo.toSDK(message.extraInfo) : undefined);
    return obj;
  },
  fromAmino(object: QueryHeadBucketExtraResponseAmino): QueryHeadBucketExtraResponse {
    const message = createBaseQueryHeadBucketExtraResponse();
    if (object.extra_info !== undefined && object.extra_info !== null) {
      message.extraInfo = InternalBucketInfo.fromAmino(object.extra_info);
    }
    return message;
  },
  toAmino(message: QueryHeadBucketExtraResponse): QueryHeadBucketExtraResponseAmino {
    const obj: any = {};
    obj.extra_info = message.extraInfo ? InternalBucketInfo.toAmino(message.extraInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryHeadBucketExtraResponseAminoMsg): QueryHeadBucketExtraResponse {
    return QueryHeadBucketExtraResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHeadBucketExtraResponseProtoMsg): QueryHeadBucketExtraResponse {
    return QueryHeadBucketExtraResponse.decode(message.value);
  },
  toProto(message: QueryHeadBucketExtraResponse): Uint8Array {
    return QueryHeadBucketExtraResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryHeadBucketExtraResponse): QueryHeadBucketExtraResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.QueryHeadBucketExtraResponse",
      value: QueryHeadBucketExtraResponse.encode(message).finish()
    };
  }
};
function createBaseQueryIsPriceChangedRequest(): QueryIsPriceChangedRequest {
  return {
    bucketName: ""
  };
}
export const QueryIsPriceChangedRequest = {
  typeUrl: "/greenfield.storage.QueryIsPriceChangedRequest",
  encode(message: QueryIsPriceChangedRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bucketName !== "") {
      writer.uint32(10).string(message.bucketName);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIsPriceChangedRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIsPriceChangedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bucketName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIsPriceChangedRequest {
    return {
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : ""
    };
  },
  toJSON(message: QueryIsPriceChangedRequest): unknown {
    const obj: any = {};
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryIsPriceChangedRequest>, I>>(object: I): QueryIsPriceChangedRequest {
    const message = createBaseQueryIsPriceChangedRequest();
    message.bucketName = object.bucketName ?? "";
    return message;
  },
  fromSDK(object: QueryIsPriceChangedRequestSDKType): QueryIsPriceChangedRequest {
    return {
      bucketName: object?.bucket_name
    };
  },
  toSDK(message: QueryIsPriceChangedRequest): QueryIsPriceChangedRequestSDKType {
    const obj: any = {};
    obj.bucket_name = message.bucketName;
    return obj;
  },
  fromAmino(object: QueryIsPriceChangedRequestAmino): QueryIsPriceChangedRequest {
    const message = createBaseQueryIsPriceChangedRequest();
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    return message;
  },
  toAmino(message: QueryIsPriceChangedRequest): QueryIsPriceChangedRequestAmino {
    const obj: any = {};
    obj.bucket_name = message.bucketName;
    return obj;
  },
  fromAminoMsg(object: QueryIsPriceChangedRequestAminoMsg): QueryIsPriceChangedRequest {
    return QueryIsPriceChangedRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIsPriceChangedRequestProtoMsg): QueryIsPriceChangedRequest {
    return QueryIsPriceChangedRequest.decode(message.value);
  },
  toProto(message: QueryIsPriceChangedRequest): Uint8Array {
    return QueryIsPriceChangedRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryIsPriceChangedRequest): QueryIsPriceChangedRequestProtoMsg {
    return {
      typeUrl: "/greenfield.storage.QueryIsPriceChangedRequest",
      value: QueryIsPriceChangedRequest.encode(message).finish()
    };
  }
};
function createBaseQueryIsPriceChangedResponse(): QueryIsPriceChangedResponse {
  return {
    changed: false,
    currentReadPrice: "",
    currentPrimaryStorePrice: "",
    currentSecondaryStorePrice: "",
    currentValidatorTaxRate: "",
    newReadPrice: "",
    newPrimaryStorePrice: "",
    newSecondaryStorePrice: "",
    newValidatorTaxRate: ""
  };
}
export const QueryIsPriceChangedResponse = {
  typeUrl: "/greenfield.storage.QueryIsPriceChangedResponse",
  encode(message: QueryIsPriceChangedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.changed === true) {
      writer.uint32(8).bool(message.changed);
    }
    if (message.currentReadPrice !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.currentReadPrice, 18).atomics);
    }
    if (message.currentPrimaryStorePrice !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.currentPrimaryStorePrice, 18).atomics);
    }
    if (message.currentSecondaryStorePrice !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.currentSecondaryStorePrice, 18).atomics);
    }
    if (message.currentValidatorTaxRate !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.currentValidatorTaxRate, 18).atomics);
    }
    if (message.newReadPrice !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.newReadPrice, 18).atomics);
    }
    if (message.newPrimaryStorePrice !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.newPrimaryStorePrice, 18).atomics);
    }
    if (message.newSecondaryStorePrice !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.newSecondaryStorePrice, 18).atomics);
    }
    if (message.newValidatorTaxRate !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.newValidatorTaxRate, 18).atomics);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIsPriceChangedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIsPriceChangedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.changed = reader.bool();
          break;
        case 2:
          message.currentReadPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.currentPrimaryStorePrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.currentSecondaryStorePrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.currentValidatorTaxRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.newReadPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.newPrimaryStorePrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.newSecondaryStorePrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.newValidatorTaxRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIsPriceChangedResponse {
    return {
      changed: isSet(object.changed) ? Boolean(object.changed) : false,
      currentReadPrice: isSet(object.currentReadPrice) ? String(object.currentReadPrice) : "",
      currentPrimaryStorePrice: isSet(object.currentPrimaryStorePrice) ? String(object.currentPrimaryStorePrice) : "",
      currentSecondaryStorePrice: isSet(object.currentSecondaryStorePrice) ? String(object.currentSecondaryStorePrice) : "",
      currentValidatorTaxRate: isSet(object.currentValidatorTaxRate) ? String(object.currentValidatorTaxRate) : "",
      newReadPrice: isSet(object.newReadPrice) ? String(object.newReadPrice) : "",
      newPrimaryStorePrice: isSet(object.newPrimaryStorePrice) ? String(object.newPrimaryStorePrice) : "",
      newSecondaryStorePrice: isSet(object.newSecondaryStorePrice) ? String(object.newSecondaryStorePrice) : "",
      newValidatorTaxRate: isSet(object.newValidatorTaxRate) ? String(object.newValidatorTaxRate) : ""
    };
  },
  toJSON(message: QueryIsPriceChangedResponse): unknown {
    const obj: any = {};
    message.changed !== undefined && (obj.changed = message.changed);
    message.currentReadPrice !== undefined && (obj.currentReadPrice = message.currentReadPrice);
    message.currentPrimaryStorePrice !== undefined && (obj.currentPrimaryStorePrice = message.currentPrimaryStorePrice);
    message.currentSecondaryStorePrice !== undefined && (obj.currentSecondaryStorePrice = message.currentSecondaryStorePrice);
    message.currentValidatorTaxRate !== undefined && (obj.currentValidatorTaxRate = message.currentValidatorTaxRate);
    message.newReadPrice !== undefined && (obj.newReadPrice = message.newReadPrice);
    message.newPrimaryStorePrice !== undefined && (obj.newPrimaryStorePrice = message.newPrimaryStorePrice);
    message.newSecondaryStorePrice !== undefined && (obj.newSecondaryStorePrice = message.newSecondaryStorePrice);
    message.newValidatorTaxRate !== undefined && (obj.newValidatorTaxRate = message.newValidatorTaxRate);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryIsPriceChangedResponse>, I>>(object: I): QueryIsPriceChangedResponse {
    const message = createBaseQueryIsPriceChangedResponse();
    message.changed = object.changed ?? false;
    message.currentReadPrice = object.currentReadPrice ?? "";
    message.currentPrimaryStorePrice = object.currentPrimaryStorePrice ?? "";
    message.currentSecondaryStorePrice = object.currentSecondaryStorePrice ?? "";
    message.currentValidatorTaxRate = object.currentValidatorTaxRate ?? "";
    message.newReadPrice = object.newReadPrice ?? "";
    message.newPrimaryStorePrice = object.newPrimaryStorePrice ?? "";
    message.newSecondaryStorePrice = object.newSecondaryStorePrice ?? "";
    message.newValidatorTaxRate = object.newValidatorTaxRate ?? "";
    return message;
  },
  fromSDK(object: QueryIsPriceChangedResponseSDKType): QueryIsPriceChangedResponse {
    return {
      changed: object?.changed,
      currentReadPrice: object?.current_read_price,
      currentPrimaryStorePrice: object?.current_primary_store_price,
      currentSecondaryStorePrice: object?.current_secondary_store_price,
      currentValidatorTaxRate: object?.current_validator_tax_rate,
      newReadPrice: object?.new_read_price,
      newPrimaryStorePrice: object?.new_primary_store_price,
      newSecondaryStorePrice: object?.new_secondary_store_price,
      newValidatorTaxRate: object?.new_validator_tax_rate
    };
  },
  toSDK(message: QueryIsPriceChangedResponse): QueryIsPriceChangedResponseSDKType {
    const obj: any = {};
    obj.changed = message.changed;
    obj.current_read_price = message.currentReadPrice;
    obj.current_primary_store_price = message.currentPrimaryStorePrice;
    obj.current_secondary_store_price = message.currentSecondaryStorePrice;
    obj.current_validator_tax_rate = message.currentValidatorTaxRate;
    obj.new_read_price = message.newReadPrice;
    obj.new_primary_store_price = message.newPrimaryStorePrice;
    obj.new_secondary_store_price = message.newSecondaryStorePrice;
    obj.new_validator_tax_rate = message.newValidatorTaxRate;
    return obj;
  },
  fromAmino(object: QueryIsPriceChangedResponseAmino): QueryIsPriceChangedResponse {
    const message = createBaseQueryIsPriceChangedResponse();
    if (object.changed !== undefined && object.changed !== null) {
      message.changed = object.changed;
    }
    if (object.current_read_price !== undefined && object.current_read_price !== null) {
      message.currentReadPrice = object.current_read_price;
    }
    if (object.current_primary_store_price !== undefined && object.current_primary_store_price !== null) {
      message.currentPrimaryStorePrice = object.current_primary_store_price;
    }
    if (object.current_secondary_store_price !== undefined && object.current_secondary_store_price !== null) {
      message.currentSecondaryStorePrice = object.current_secondary_store_price;
    }
    if (object.current_validator_tax_rate !== undefined && object.current_validator_tax_rate !== null) {
      message.currentValidatorTaxRate = object.current_validator_tax_rate;
    }
    if (object.new_read_price !== undefined && object.new_read_price !== null) {
      message.newReadPrice = object.new_read_price;
    }
    if (object.new_primary_store_price !== undefined && object.new_primary_store_price !== null) {
      message.newPrimaryStorePrice = object.new_primary_store_price;
    }
    if (object.new_secondary_store_price !== undefined && object.new_secondary_store_price !== null) {
      message.newSecondaryStorePrice = object.new_secondary_store_price;
    }
    if (object.new_validator_tax_rate !== undefined && object.new_validator_tax_rate !== null) {
      message.newValidatorTaxRate = object.new_validator_tax_rate;
    }
    return message;
  },
  toAmino(message: QueryIsPriceChangedResponse): QueryIsPriceChangedResponseAmino {
    const obj: any = {};
    obj.changed = message.changed;
    obj.current_read_price = message.currentReadPrice;
    obj.current_primary_store_price = message.currentPrimaryStorePrice;
    obj.current_secondary_store_price = message.currentSecondaryStorePrice;
    obj.current_validator_tax_rate = message.currentValidatorTaxRate;
    obj.new_read_price = message.newReadPrice;
    obj.new_primary_store_price = message.newPrimaryStorePrice;
    obj.new_secondary_store_price = message.newSecondaryStorePrice;
    obj.new_validator_tax_rate = message.newValidatorTaxRate;
    return obj;
  },
  fromAminoMsg(object: QueryIsPriceChangedResponseAminoMsg): QueryIsPriceChangedResponse {
    return QueryIsPriceChangedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIsPriceChangedResponseProtoMsg): QueryIsPriceChangedResponse {
    return QueryIsPriceChangedResponse.decode(message.value);
  },
  toProto(message: QueryIsPriceChangedResponse): Uint8Array {
    return QueryIsPriceChangedResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryIsPriceChangedResponse): QueryIsPriceChangedResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.QueryIsPriceChangedResponse",
      value: QueryIsPriceChangedResponse.encode(message).finish()
    };
  }
};
function createBaseQueryQuoteUpdateTimeRequest(): QueryQuoteUpdateTimeRequest {
  return {
    bucketName: ""
  };
}
export const QueryQuoteUpdateTimeRequest = {
  typeUrl: "/greenfield.storage.QueryQuoteUpdateTimeRequest",
  encode(message: QueryQuoteUpdateTimeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bucketName !== "") {
      writer.uint32(10).string(message.bucketName);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryQuoteUpdateTimeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQuoteUpdateTimeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bucketName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryQuoteUpdateTimeRequest {
    return {
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : ""
    };
  },
  toJSON(message: QueryQuoteUpdateTimeRequest): unknown {
    const obj: any = {};
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryQuoteUpdateTimeRequest>, I>>(object: I): QueryQuoteUpdateTimeRequest {
    const message = createBaseQueryQuoteUpdateTimeRequest();
    message.bucketName = object.bucketName ?? "";
    return message;
  },
  fromSDK(object: QueryQuoteUpdateTimeRequestSDKType): QueryQuoteUpdateTimeRequest {
    return {
      bucketName: object?.bucket_name
    };
  },
  toSDK(message: QueryQuoteUpdateTimeRequest): QueryQuoteUpdateTimeRequestSDKType {
    const obj: any = {};
    obj.bucket_name = message.bucketName;
    return obj;
  },
  fromAmino(object: QueryQuoteUpdateTimeRequestAmino): QueryQuoteUpdateTimeRequest {
    const message = createBaseQueryQuoteUpdateTimeRequest();
    if (object.bucket_name !== undefined && object.bucket_name !== null) {
      message.bucketName = object.bucket_name;
    }
    return message;
  },
  toAmino(message: QueryQuoteUpdateTimeRequest): QueryQuoteUpdateTimeRequestAmino {
    const obj: any = {};
    obj.bucket_name = message.bucketName;
    return obj;
  },
  fromAminoMsg(object: QueryQuoteUpdateTimeRequestAminoMsg): QueryQuoteUpdateTimeRequest {
    return QueryQuoteUpdateTimeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryQuoteUpdateTimeRequestProtoMsg): QueryQuoteUpdateTimeRequest {
    return QueryQuoteUpdateTimeRequest.decode(message.value);
  },
  toProto(message: QueryQuoteUpdateTimeRequest): Uint8Array {
    return QueryQuoteUpdateTimeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryQuoteUpdateTimeRequest): QueryQuoteUpdateTimeRequestProtoMsg {
    return {
      typeUrl: "/greenfield.storage.QueryQuoteUpdateTimeRequest",
      value: QueryQuoteUpdateTimeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryQuoteUpdateTimeResponse(): QueryQuoteUpdateTimeResponse {
  return {
    updateAt: Long.ZERO
  };
}
export const QueryQuoteUpdateTimeResponse = {
  typeUrl: "/greenfield.storage.QueryQuoteUpdateTimeResponse",
  encode(message: QueryQuoteUpdateTimeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.updateAt.isZero()) {
      writer.uint32(48).int64(message.updateAt);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryQuoteUpdateTimeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQuoteUpdateTimeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 6:
          message.updateAt = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryQuoteUpdateTimeResponse {
    return {
      updateAt: isSet(object.updateAt) ? Long.fromValue(object.updateAt) : Long.ZERO
    };
  },
  toJSON(message: QueryQuoteUpdateTimeResponse): unknown {
    const obj: any = {};
    message.updateAt !== undefined && (obj.updateAt = (message.updateAt || Long.ZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryQuoteUpdateTimeResponse>, I>>(object: I): QueryQuoteUpdateTimeResponse {
    const message = createBaseQueryQuoteUpdateTimeResponse();
    message.updateAt = object.updateAt !== undefined && object.updateAt !== null ? Long.fromValue(object.updateAt) : Long.ZERO;
    return message;
  },
  fromSDK(object: QueryQuoteUpdateTimeResponseSDKType): QueryQuoteUpdateTimeResponse {
    return {
      updateAt: object?.update_at
    };
  },
  toSDK(message: QueryQuoteUpdateTimeResponse): QueryQuoteUpdateTimeResponseSDKType {
    const obj: any = {};
    obj.update_at = message.updateAt;
    return obj;
  },
  fromAmino(object: QueryQuoteUpdateTimeResponseAmino): QueryQuoteUpdateTimeResponse {
    const message = createBaseQueryQuoteUpdateTimeResponse();
    if (object.update_at !== undefined && object.update_at !== null) {
      message.updateAt = Long.fromString(object.update_at);
    }
    return message;
  },
  toAmino(message: QueryQuoteUpdateTimeResponse): QueryQuoteUpdateTimeResponseAmino {
    const obj: any = {};
    obj.update_at = message.updateAt ? message.updateAt.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryQuoteUpdateTimeResponseAminoMsg): QueryQuoteUpdateTimeResponse {
    return QueryQuoteUpdateTimeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryQuoteUpdateTimeResponseProtoMsg): QueryQuoteUpdateTimeResponse {
    return QueryQuoteUpdateTimeResponse.decode(message.value);
  },
  toProto(message: QueryQuoteUpdateTimeResponse): Uint8Array {
    return QueryQuoteUpdateTimeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryQuoteUpdateTimeResponse): QueryQuoteUpdateTimeResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.QueryQuoteUpdateTimeResponse",
      value: QueryQuoteUpdateTimeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGroupMembersExistRequest(): QueryGroupMembersExistRequest {
  return {
    groupId: "",
    members: []
  };
}
export const QueryGroupMembersExistRequest = {
  typeUrl: "/greenfield.storage.QueryGroupMembersExistRequest",
  encode(message: QueryGroupMembersExistRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupId !== "") {
      writer.uint32(10).string(message.groupId);
    }
    for (const v of message.members) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupMembersExistRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupMembersExistRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.string();
          break;
        case 2:
          message.members.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupMembersExistRequest {
    return {
      groupId: isSet(object.groupId) ? String(object.groupId) : "",
      members: Array.isArray(object?.members) ? object.members.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: QueryGroupMembersExistRequest): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = message.groupId);
    if (message.members) {
      obj.members = message.members.map(e => e);
    } else {
      obj.members = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGroupMembersExistRequest>, I>>(object: I): QueryGroupMembersExistRequest {
    const message = createBaseQueryGroupMembersExistRequest();
    message.groupId = object.groupId ?? "";
    message.members = object.members?.map(e => e) || [];
    return message;
  },
  fromSDK(object: QueryGroupMembersExistRequestSDKType): QueryGroupMembersExistRequest {
    return {
      groupId: object?.group_id,
      members: Array.isArray(object?.members) ? object.members.map((e: any) => e) : []
    };
  },
  toSDK(message: QueryGroupMembersExistRequest): QueryGroupMembersExistRequestSDKType {
    const obj: any = {};
    obj.group_id = message.groupId;
    if (message.members) {
      obj.members = message.members.map(e => e);
    } else {
      obj.members = [];
    }
    return obj;
  },
  fromAmino(object: QueryGroupMembersExistRequestAmino): QueryGroupMembersExistRequest {
    const message = createBaseQueryGroupMembersExistRequest();
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = object.group_id;
    }
    message.members = object.members?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryGroupMembersExistRequest): QueryGroupMembersExistRequestAmino {
    const obj: any = {};
    obj.group_id = message.groupId;
    if (message.members) {
      obj.members = message.members.map(e => e);
    } else {
      obj.members = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryGroupMembersExistRequestAminoMsg): QueryGroupMembersExistRequest {
    return QueryGroupMembersExistRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGroupMembersExistRequestProtoMsg): QueryGroupMembersExistRequest {
    return QueryGroupMembersExistRequest.decode(message.value);
  },
  toProto(message: QueryGroupMembersExistRequest): Uint8Array {
    return QueryGroupMembersExistRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupMembersExistRequest): QueryGroupMembersExistRequestProtoMsg {
    return {
      typeUrl: "/greenfield.storage.QueryGroupMembersExistRequest",
      value: QueryGroupMembersExistRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGroupMembersExistResponse_ExistsEntry(): QueryGroupMembersExistResponse_ExistsEntry {
  return {
    key: "",
    value: false
  };
}
export const QueryGroupMembersExistResponse_ExistsEntry = {
  encode(message: QueryGroupMembersExistResponse_ExistsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value === true) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupMembersExistResponse_ExistsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupMembersExistResponse_ExistsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupMembersExistResponse_ExistsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Boolean(object.value) : false
    };
  },
  toJSON(message: QueryGroupMembersExistResponse_ExistsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGroupMembersExistResponse_ExistsEntry>, I>>(object: I): QueryGroupMembersExistResponse_ExistsEntry {
    const message = createBaseQueryGroupMembersExistResponse_ExistsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? false;
    return message;
  },
  fromSDK(object: QueryGroupMembersExistResponse_ExistsEntrySDKType): QueryGroupMembersExistResponse_ExistsEntry {
    return {
      key: object?.key,
      value: object?.value
    };
  },
  toSDK(message: QueryGroupMembersExistResponse_ExistsEntry): QueryGroupMembersExistResponse_ExistsEntrySDKType {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: QueryGroupMembersExistResponse_ExistsEntryAmino): QueryGroupMembersExistResponse_ExistsEntry {
    const message = createBaseQueryGroupMembersExistResponse_ExistsEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: QueryGroupMembersExistResponse_ExistsEntry): QueryGroupMembersExistResponse_ExistsEntryAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object: QueryGroupMembersExistResponse_ExistsEntryAminoMsg): QueryGroupMembersExistResponse_ExistsEntry {
    return QueryGroupMembersExistResponse_ExistsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGroupMembersExistResponse_ExistsEntryProtoMsg): QueryGroupMembersExistResponse_ExistsEntry {
    return QueryGroupMembersExistResponse_ExistsEntry.decode(message.value);
  },
  toProto(message: QueryGroupMembersExistResponse_ExistsEntry): Uint8Array {
    return QueryGroupMembersExistResponse_ExistsEntry.encode(message).finish();
  }
};
function createBaseQueryGroupMembersExistResponse(): QueryGroupMembersExistResponse {
  return {
    exists: {}
  };
}
export const QueryGroupMembersExistResponse = {
  typeUrl: "/greenfield.storage.QueryGroupMembersExistResponse",
  encode(message: QueryGroupMembersExistResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.exists).forEach(([key, value]) => {
      QueryGroupMembersExistResponse_ExistsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(8).fork()).ldelim();
    });
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupMembersExistResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupMembersExistResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = QueryGroupMembersExistResponse_ExistsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.exists[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupMembersExistResponse {
    return {
      exists: isObject(object.exists) ? Object.entries(object.exists).reduce<{
        [key: string]: bool;
      }>((acc, [key, value]) => {
        acc[key] = bool.fromJSON(value);
        return acc;
      }, {}) : {}
    };
  },
  toJSON(message: QueryGroupMembersExistResponse): unknown {
    const obj: any = {};
    obj.exists = {};
    if (message.exists) {
      Object.entries(message.exists).forEach(([k, v]) => {
        obj.exists[k] = bool.toJSON(v);
      });
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGroupMembersExistResponse>, I>>(object: I): QueryGroupMembersExistResponse {
    const message = createBaseQueryGroupMembersExistResponse();
    message.exists = Object.entries(object.exists ?? {}).reduce<{
      [key: string]: bool;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = bool.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
  fromSDK(object: QueryGroupMembersExistResponseSDKType): QueryGroupMembersExistResponse {
    return {
      exists: isObject(object.exists) ? Object.entries(object.exists).reduce<{
        [key: string]: bool;
      }>((acc, [key, value]) => {
        acc[key] = bool.fromSDK(value);
        return acc;
      }, {}) : {}
    };
  },
  toSDK(message: QueryGroupMembersExistResponse): QueryGroupMembersExistResponseSDKType {
    const obj: any = {};
    obj.exists = {};
    if (message.exists) {
      Object.entries(message.exists).forEach(([k, v]) => {
        obj.exists[k] = bool.toSDK(v);
      });
    }
    return obj;
  },
  fromAmino(object: QueryGroupMembersExistResponseAmino): QueryGroupMembersExistResponse {
    const message = createBaseQueryGroupMembersExistResponse();
    message.exists = Object.entries(object.exists ?? {}).reduce<{
      [key: string]: bool;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = bool.fromAmino(value);
      }
      return acc;
    }, {});
    return message;
  },
  toAmino(message: QueryGroupMembersExistResponse): QueryGroupMembersExistResponseAmino {
    const obj: any = {};
    obj.exists = {};
    if (message.exists) {
      Object.entries(message.exists).forEach(([k, v]) => {
        obj.exists[k] = bool.toAmino(v);
      });
    }
    return obj;
  },
  fromAminoMsg(object: QueryGroupMembersExistResponseAminoMsg): QueryGroupMembersExistResponse {
    return QueryGroupMembersExistResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGroupMembersExistResponseProtoMsg): QueryGroupMembersExistResponse {
    return QueryGroupMembersExistResponse.decode(message.value);
  },
  toProto(message: QueryGroupMembersExistResponse): Uint8Array {
    return QueryGroupMembersExistResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupMembersExistResponse): QueryGroupMembersExistResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.QueryGroupMembersExistResponse",
      value: QueryGroupMembersExistResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGroupsExistRequest(): QueryGroupsExistRequest {
  return {
    groupOwner: "",
    groupNames: []
  };
}
export const QueryGroupsExistRequest = {
  typeUrl: "/greenfield.storage.QueryGroupsExistRequest",
  encode(message: QueryGroupsExistRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupOwner !== "") {
      writer.uint32(10).string(message.groupOwner);
    }
    for (const v of message.groupNames) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupsExistRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupsExistRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupOwner = reader.string();
          break;
        case 2:
          message.groupNames.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupsExistRequest {
    return {
      groupOwner: isSet(object.groupOwner) ? String(object.groupOwner) : "",
      groupNames: Array.isArray(object?.groupNames) ? object.groupNames.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: QueryGroupsExistRequest): unknown {
    const obj: any = {};
    message.groupOwner !== undefined && (obj.groupOwner = message.groupOwner);
    if (message.groupNames) {
      obj.groupNames = message.groupNames.map(e => e);
    } else {
      obj.groupNames = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGroupsExistRequest>, I>>(object: I): QueryGroupsExistRequest {
    const message = createBaseQueryGroupsExistRequest();
    message.groupOwner = object.groupOwner ?? "";
    message.groupNames = object.groupNames?.map(e => e) || [];
    return message;
  },
  fromSDK(object: QueryGroupsExistRequestSDKType): QueryGroupsExistRequest {
    return {
      groupOwner: object?.group_owner,
      groupNames: Array.isArray(object?.group_names) ? object.group_names.map((e: any) => e) : []
    };
  },
  toSDK(message: QueryGroupsExistRequest): QueryGroupsExistRequestSDKType {
    const obj: any = {};
    obj.group_owner = message.groupOwner;
    if (message.groupNames) {
      obj.group_names = message.groupNames.map(e => e);
    } else {
      obj.group_names = [];
    }
    return obj;
  },
  fromAmino(object: QueryGroupsExistRequestAmino): QueryGroupsExistRequest {
    const message = createBaseQueryGroupsExistRequest();
    if (object.group_owner !== undefined && object.group_owner !== null) {
      message.groupOwner = object.group_owner;
    }
    message.groupNames = object.group_names?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryGroupsExistRequest): QueryGroupsExistRequestAmino {
    const obj: any = {};
    obj.group_owner = message.groupOwner;
    if (message.groupNames) {
      obj.group_names = message.groupNames.map(e => e);
    } else {
      obj.group_names = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryGroupsExistRequestAminoMsg): QueryGroupsExistRequest {
    return QueryGroupsExistRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGroupsExistRequestProtoMsg): QueryGroupsExistRequest {
    return QueryGroupsExistRequest.decode(message.value);
  },
  toProto(message: QueryGroupsExistRequest): Uint8Array {
    return QueryGroupsExistRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupsExistRequest): QueryGroupsExistRequestProtoMsg {
    return {
      typeUrl: "/greenfield.storage.QueryGroupsExistRequest",
      value: QueryGroupsExistRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGroupsExistByIdRequest(): QueryGroupsExistByIdRequest {
  return {
    groupIds: []
  };
}
export const QueryGroupsExistByIdRequest = {
  typeUrl: "/greenfield.storage.QueryGroupsExistByIdRequest",
  encode(message: QueryGroupsExistByIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.groupIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupsExistByIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupsExistByIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupsExistByIdRequest {
    return {
      groupIds: Array.isArray(object?.groupIds) ? object.groupIds.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: QueryGroupsExistByIdRequest): unknown {
    const obj: any = {};
    if (message.groupIds) {
      obj.groupIds = message.groupIds.map(e => e);
    } else {
      obj.groupIds = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGroupsExistByIdRequest>, I>>(object: I): QueryGroupsExistByIdRequest {
    const message = createBaseQueryGroupsExistByIdRequest();
    message.groupIds = object.groupIds?.map(e => e) || [];
    return message;
  },
  fromSDK(object: QueryGroupsExistByIdRequestSDKType): QueryGroupsExistByIdRequest {
    return {
      groupIds: Array.isArray(object?.group_ids) ? object.group_ids.map((e: any) => e) : []
    };
  },
  toSDK(message: QueryGroupsExistByIdRequest): QueryGroupsExistByIdRequestSDKType {
    const obj: any = {};
    if (message.groupIds) {
      obj.group_ids = message.groupIds.map(e => e);
    } else {
      obj.group_ids = [];
    }
    return obj;
  },
  fromAmino(object: QueryGroupsExistByIdRequestAmino): QueryGroupsExistByIdRequest {
    const message = createBaseQueryGroupsExistByIdRequest();
    message.groupIds = object.group_ids?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryGroupsExistByIdRequest): QueryGroupsExistByIdRequestAmino {
    const obj: any = {};
    if (message.groupIds) {
      obj.group_ids = message.groupIds.map(e => e);
    } else {
      obj.group_ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryGroupsExistByIdRequestAminoMsg): QueryGroupsExistByIdRequest {
    return QueryGroupsExistByIdRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGroupsExistByIdRequestProtoMsg): QueryGroupsExistByIdRequest {
    return QueryGroupsExistByIdRequest.decode(message.value);
  },
  toProto(message: QueryGroupsExistByIdRequest): Uint8Array {
    return QueryGroupsExistByIdRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupsExistByIdRequest): QueryGroupsExistByIdRequestProtoMsg {
    return {
      typeUrl: "/greenfield.storage.QueryGroupsExistByIdRequest",
      value: QueryGroupsExistByIdRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGroupsExistResponse_ExistsEntry(): QueryGroupsExistResponse_ExistsEntry {
  return {
    key: "",
    value: false
  };
}
export const QueryGroupsExistResponse_ExistsEntry = {
  encode(message: QueryGroupsExistResponse_ExistsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value === true) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupsExistResponse_ExistsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupsExistResponse_ExistsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupsExistResponse_ExistsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Boolean(object.value) : false
    };
  },
  toJSON(message: QueryGroupsExistResponse_ExistsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGroupsExistResponse_ExistsEntry>, I>>(object: I): QueryGroupsExistResponse_ExistsEntry {
    const message = createBaseQueryGroupsExistResponse_ExistsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? false;
    return message;
  },
  fromSDK(object: QueryGroupsExistResponse_ExistsEntrySDKType): QueryGroupsExistResponse_ExistsEntry {
    return {
      key: object?.key,
      value: object?.value
    };
  },
  toSDK(message: QueryGroupsExistResponse_ExistsEntry): QueryGroupsExistResponse_ExistsEntrySDKType {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: QueryGroupsExistResponse_ExistsEntryAmino): QueryGroupsExistResponse_ExistsEntry {
    const message = createBaseQueryGroupsExistResponse_ExistsEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: QueryGroupsExistResponse_ExistsEntry): QueryGroupsExistResponse_ExistsEntryAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object: QueryGroupsExistResponse_ExistsEntryAminoMsg): QueryGroupsExistResponse_ExistsEntry {
    return QueryGroupsExistResponse_ExistsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGroupsExistResponse_ExistsEntryProtoMsg): QueryGroupsExistResponse_ExistsEntry {
    return QueryGroupsExistResponse_ExistsEntry.decode(message.value);
  },
  toProto(message: QueryGroupsExistResponse_ExistsEntry): Uint8Array {
    return QueryGroupsExistResponse_ExistsEntry.encode(message).finish();
  }
};
function createBaseQueryGroupsExistResponse(): QueryGroupsExistResponse {
  return {
    exists: {}
  };
}
export const QueryGroupsExistResponse = {
  typeUrl: "/greenfield.storage.QueryGroupsExistResponse",
  encode(message: QueryGroupsExistResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.exists).forEach(([key, value]) => {
      QueryGroupsExistResponse_ExistsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(8).fork()).ldelim();
    });
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupsExistResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupsExistResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = QueryGroupsExistResponse_ExistsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.exists[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupsExistResponse {
    return {
      exists: isObject(object.exists) ? Object.entries(object.exists).reduce<{
        [key: string]: bool;
      }>((acc, [key, value]) => {
        acc[key] = bool.fromJSON(value);
        return acc;
      }, {}) : {}
    };
  },
  toJSON(message: QueryGroupsExistResponse): unknown {
    const obj: any = {};
    obj.exists = {};
    if (message.exists) {
      Object.entries(message.exists).forEach(([k, v]) => {
        obj.exists[k] = bool.toJSON(v);
      });
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGroupsExistResponse>, I>>(object: I): QueryGroupsExistResponse {
    const message = createBaseQueryGroupsExistResponse();
    message.exists = Object.entries(object.exists ?? {}).reduce<{
      [key: string]: bool;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = bool.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
  fromSDK(object: QueryGroupsExistResponseSDKType): QueryGroupsExistResponse {
    return {
      exists: isObject(object.exists) ? Object.entries(object.exists).reduce<{
        [key: string]: bool;
      }>((acc, [key, value]) => {
        acc[key] = bool.fromSDK(value);
        return acc;
      }, {}) : {}
    };
  },
  toSDK(message: QueryGroupsExistResponse): QueryGroupsExistResponseSDKType {
    const obj: any = {};
    obj.exists = {};
    if (message.exists) {
      Object.entries(message.exists).forEach(([k, v]) => {
        obj.exists[k] = bool.toSDK(v);
      });
    }
    return obj;
  },
  fromAmino(object: QueryGroupsExistResponseAmino): QueryGroupsExistResponse {
    const message = createBaseQueryGroupsExistResponse();
    message.exists = Object.entries(object.exists ?? {}).reduce<{
      [key: string]: bool;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = bool.fromAmino(value);
      }
      return acc;
    }, {});
    return message;
  },
  toAmino(message: QueryGroupsExistResponse): QueryGroupsExistResponseAmino {
    const obj: any = {};
    obj.exists = {};
    if (message.exists) {
      Object.entries(message.exists).forEach(([k, v]) => {
        obj.exists[k] = bool.toAmino(v);
      });
    }
    return obj;
  },
  fromAminoMsg(object: QueryGroupsExistResponseAminoMsg): QueryGroupsExistResponse {
    return QueryGroupsExistResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGroupsExistResponseProtoMsg): QueryGroupsExistResponse {
    return QueryGroupsExistResponse.decode(message.value);
  },
  toProto(message: QueryGroupsExistResponse): Uint8Array {
    return QueryGroupsExistResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupsExistResponse): QueryGroupsExistResponseProtoMsg {
    return {
      typeUrl: "/greenfield.storage.QueryGroupsExistResponse",
      value: QueryGroupsExistResponse.encode(message).finish()
    };
  }
};
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Parameters queries the parameters of the module. */
  QueryParamsByTimestamp(request: QueryParamsByTimestampRequest): Promise<QueryParamsByTimestampResponse>;
  /** Queries a bucket with specify name. */
  HeadBucket(request: QueryHeadBucketRequest): Promise<QueryHeadBucketResponse>;
  /** Queries a bucket by id */
  HeadBucketById(request: QueryHeadBucketByIdRequest): Promise<QueryHeadBucketResponse>;
  /** Queries a bucket with EIP712 standard metadata info */
  HeadBucketNFT(request: QueryNFTRequest): Promise<QueryBucketNFTResponse>;
  /** Queries a object with specify name. */
  HeadObject(request: QueryHeadObjectRequest): Promise<QueryHeadObjectResponse>;
  /** Queries an object by id */
  HeadObjectById(request: QueryHeadObjectByIdRequest): Promise<QueryHeadObjectResponse>;
  /** Queries a object with EIP712 standard metadata info */
  HeadObjectNFT(request: QueryNFTRequest): Promise<QueryObjectNFTResponse>;
  /** Queries a list of bucket items. */
  ListBuckets(request?: QueryListBucketsRequest): Promise<QueryListBucketsResponse>;
  /** Queries a list of object items under the bucket. */
  ListObjects(request: QueryListObjectsRequest): Promise<QueryListObjectsResponse>;
  /** Queries a list of object items under the bucket. */
  ListObjectsByBucketId(request: QueryListObjectsByBucketIdRequest): Promise<QueryListObjectsResponse>;
  /** Queries a group with EIP712 standard metadata info */
  HeadGroupNFT(request: QueryNFTRequest): Promise<QueryGroupNFTResponse>;
  /** Queries a policy which grants permission to account */
  QueryPolicyForAccount(request: QueryPolicyForAccountRequest): Promise<QueryPolicyForAccountResponse>;
  /** Queries a list of VerifyPermission items. */
  VerifyPermission(request: QueryVerifyPermissionRequest): Promise<QueryVerifyPermissionResponse>;
  /** Queries a group with specify owner and name . */
  HeadGroup(request: QueryHeadGroupRequest): Promise<QueryHeadGroupResponse>;
  /** Queries a list of ListGroup items. */
  ListGroups(request: QueryListGroupsRequest): Promise<QueryListGroupsResponse>;
  /** Queries a list of HeadGroupMember items. */
  HeadGroupMember(request: QueryHeadGroupMemberRequest): Promise<QueryHeadGroupMemberResponse>;
  /** Queries a policy that grants permission to a group */
  QueryPolicyForGroup(request: QueryPolicyForGroupRequest): Promise<QueryPolicyForGroupResponse>;
  /** Queries a policy by policy id */
  QueryPolicyById(request: QueryPolicyByIdRequest): Promise<QueryPolicyByIdResponse>;
  /** Queries lock fee for storing an object */
  QueryLockFee(request: QueryLockFeeRequest): Promise<QueryLockFeeResponse>;
  /** Queries a bucket extra info (with gvg bindings and price time) with specify name. */
  HeadBucketExtra(request: QueryHeadBucketExtraRequest): Promise<QueryHeadBucketExtraResponse>;
  /** Queries whether read and storage prices changed for the bucket. */
  QueryIsPriceChanged(request: QueryIsPriceChangedRequest): Promise<QueryIsPriceChangedResponse>;
  /** Queries whether read and storage prices changed for the bucket. */
  QueryQuotaUpdateTime(request: QueryQuoteUpdateTimeRequest): Promise<QueryQuoteUpdateTimeResponse>;
  /** Queries whether some members are in the group. */
  QueryGroupMembersExist(request: QueryGroupMembersExistRequest): Promise<QueryGroupMembersExistResponse>;
  /** Queries whether some groups are exist. */
  QueryGroupsExist(request: QueryGroupsExistRequest): Promise<QueryGroupsExistResponse>;
  /** Queries whether some groups are exist by id. */
  QueryGroupsExistById(request: QueryGroupsExistByIdRequest): Promise<QueryGroupsExistResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.QueryParamsByTimestamp = this.QueryParamsByTimestamp.bind(this);
    this.HeadBucket = this.HeadBucket.bind(this);
    this.HeadBucketById = this.HeadBucketById.bind(this);
    this.HeadBucketNFT = this.HeadBucketNFT.bind(this);
    this.HeadObject = this.HeadObject.bind(this);
    this.HeadObjectById = this.HeadObjectById.bind(this);
    this.HeadObjectNFT = this.HeadObjectNFT.bind(this);
    this.ListBuckets = this.ListBuckets.bind(this);
    this.ListObjects = this.ListObjects.bind(this);
    this.ListObjectsByBucketId = this.ListObjectsByBucketId.bind(this);
    this.HeadGroupNFT = this.HeadGroupNFT.bind(this);
    this.QueryPolicyForAccount = this.QueryPolicyForAccount.bind(this);
    this.VerifyPermission = this.VerifyPermission.bind(this);
    this.HeadGroup = this.HeadGroup.bind(this);
    this.ListGroups = this.ListGroups.bind(this);
    this.HeadGroupMember = this.HeadGroupMember.bind(this);
    this.QueryPolicyForGroup = this.QueryPolicyForGroup.bind(this);
    this.QueryPolicyById = this.QueryPolicyById.bind(this);
    this.QueryLockFee = this.QueryLockFee.bind(this);
    this.HeadBucketExtra = this.HeadBucketExtra.bind(this);
    this.QueryIsPriceChanged = this.QueryIsPriceChanged.bind(this);
    this.QueryQuotaUpdateTime = this.QueryQuotaUpdateTime.bind(this);
    this.QueryGroupMembersExist = this.QueryGroupMembersExist.bind(this);
    this.QueryGroupsExist = this.QueryGroupsExist.bind(this);
    this.QueryGroupsExistById = this.QueryGroupsExistById.bind(this);
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  QueryParamsByTimestamp(request: QueryParamsByTimestampRequest): Promise<QueryParamsByTimestampResponse> {
    const data = QueryParamsByTimestampRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Query", "QueryParamsByTimestamp", data);
    return promise.then(data => QueryParamsByTimestampResponse.decode(new _m0.Reader(data)));
  }
  HeadBucket(request: QueryHeadBucketRequest): Promise<QueryHeadBucketResponse> {
    const data = QueryHeadBucketRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Query", "HeadBucket", data);
    return promise.then(data => QueryHeadBucketResponse.decode(new _m0.Reader(data)));
  }
  HeadBucketById(request: QueryHeadBucketByIdRequest): Promise<QueryHeadBucketResponse> {
    const data = QueryHeadBucketByIdRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Query", "HeadBucketById", data);
    return promise.then(data => QueryHeadBucketResponse.decode(new _m0.Reader(data)));
  }
  HeadBucketNFT(request: QueryNFTRequest): Promise<QueryBucketNFTResponse> {
    const data = QueryNFTRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Query", "HeadBucketNFT", data);
    return promise.then(data => QueryBucketNFTResponse.decode(new _m0.Reader(data)));
  }
  HeadObject(request: QueryHeadObjectRequest): Promise<QueryHeadObjectResponse> {
    const data = QueryHeadObjectRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Query", "HeadObject", data);
    return promise.then(data => QueryHeadObjectResponse.decode(new _m0.Reader(data)));
  }
  HeadObjectById(request: QueryHeadObjectByIdRequest): Promise<QueryHeadObjectResponse> {
    const data = QueryHeadObjectByIdRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Query", "HeadObjectById", data);
    return promise.then(data => QueryHeadObjectResponse.decode(new _m0.Reader(data)));
  }
  HeadObjectNFT(request: QueryNFTRequest): Promise<QueryObjectNFTResponse> {
    const data = QueryNFTRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Query", "HeadObjectNFT", data);
    return promise.then(data => QueryObjectNFTResponse.decode(new _m0.Reader(data)));
  }
  ListBuckets(request: QueryListBucketsRequest = {
    pagination: undefined
  }): Promise<QueryListBucketsResponse> {
    const data = QueryListBucketsRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Query", "ListBuckets", data);
    return promise.then(data => QueryListBucketsResponse.decode(new _m0.Reader(data)));
  }
  ListObjects(request: QueryListObjectsRequest): Promise<QueryListObjectsResponse> {
    const data = QueryListObjectsRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Query", "ListObjects", data);
    return promise.then(data => QueryListObjectsResponse.decode(new _m0.Reader(data)));
  }
  ListObjectsByBucketId(request: QueryListObjectsByBucketIdRequest): Promise<QueryListObjectsResponse> {
    const data = QueryListObjectsByBucketIdRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Query", "ListObjectsByBucketId", data);
    return promise.then(data => QueryListObjectsResponse.decode(new _m0.Reader(data)));
  }
  HeadGroupNFT(request: QueryNFTRequest): Promise<QueryGroupNFTResponse> {
    const data = QueryNFTRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Query", "HeadGroupNFT", data);
    return promise.then(data => QueryGroupNFTResponse.decode(new _m0.Reader(data)));
  }
  QueryPolicyForAccount(request: QueryPolicyForAccountRequest): Promise<QueryPolicyForAccountResponse> {
    const data = QueryPolicyForAccountRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Query", "QueryPolicyForAccount", data);
    return promise.then(data => QueryPolicyForAccountResponse.decode(new _m0.Reader(data)));
  }
  VerifyPermission(request: QueryVerifyPermissionRequest): Promise<QueryVerifyPermissionResponse> {
    const data = QueryVerifyPermissionRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Query", "VerifyPermission", data);
    return promise.then(data => QueryVerifyPermissionResponse.decode(new _m0.Reader(data)));
  }
  HeadGroup(request: QueryHeadGroupRequest): Promise<QueryHeadGroupResponse> {
    const data = QueryHeadGroupRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Query", "HeadGroup", data);
    return promise.then(data => QueryHeadGroupResponse.decode(new _m0.Reader(data)));
  }
  ListGroups(request: QueryListGroupsRequest): Promise<QueryListGroupsResponse> {
    const data = QueryListGroupsRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Query", "ListGroups", data);
    return promise.then(data => QueryListGroupsResponse.decode(new _m0.Reader(data)));
  }
  HeadGroupMember(request: QueryHeadGroupMemberRequest): Promise<QueryHeadGroupMemberResponse> {
    const data = QueryHeadGroupMemberRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Query", "HeadGroupMember", data);
    return promise.then(data => QueryHeadGroupMemberResponse.decode(new _m0.Reader(data)));
  }
  QueryPolicyForGroup(request: QueryPolicyForGroupRequest): Promise<QueryPolicyForGroupResponse> {
    const data = QueryPolicyForGroupRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Query", "QueryPolicyForGroup", data);
    return promise.then(data => QueryPolicyForGroupResponse.decode(new _m0.Reader(data)));
  }
  QueryPolicyById(request: QueryPolicyByIdRequest): Promise<QueryPolicyByIdResponse> {
    const data = QueryPolicyByIdRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Query", "QueryPolicyById", data);
    return promise.then(data => QueryPolicyByIdResponse.decode(new _m0.Reader(data)));
  }
  QueryLockFee(request: QueryLockFeeRequest): Promise<QueryLockFeeResponse> {
    const data = QueryLockFeeRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Query", "QueryLockFee", data);
    return promise.then(data => QueryLockFeeResponse.decode(new _m0.Reader(data)));
  }
  HeadBucketExtra(request: QueryHeadBucketExtraRequest): Promise<QueryHeadBucketExtraResponse> {
    const data = QueryHeadBucketExtraRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Query", "HeadBucketExtra", data);
    return promise.then(data => QueryHeadBucketExtraResponse.decode(new _m0.Reader(data)));
  }
  QueryIsPriceChanged(request: QueryIsPriceChangedRequest): Promise<QueryIsPriceChangedResponse> {
    const data = QueryIsPriceChangedRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Query", "QueryIsPriceChanged", data);
    return promise.then(data => QueryIsPriceChangedResponse.decode(new _m0.Reader(data)));
  }
  QueryQuotaUpdateTime(request: QueryQuoteUpdateTimeRequest): Promise<QueryQuoteUpdateTimeResponse> {
    const data = QueryQuoteUpdateTimeRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Query", "QueryQuotaUpdateTime", data);
    return promise.then(data => QueryQuoteUpdateTimeResponse.decode(new _m0.Reader(data)));
  }
  QueryGroupMembersExist(request: QueryGroupMembersExistRequest): Promise<QueryGroupMembersExistResponse> {
    const data = QueryGroupMembersExistRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Query", "QueryGroupMembersExist", data);
    return promise.then(data => QueryGroupMembersExistResponse.decode(new _m0.Reader(data)));
  }
  QueryGroupsExist(request: QueryGroupsExistRequest): Promise<QueryGroupsExistResponse> {
    const data = QueryGroupsExistRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Query", "QueryGroupsExist", data);
    return promise.then(data => QueryGroupsExistResponse.decode(new _m0.Reader(data)));
  }
  QueryGroupsExistById(request: QueryGroupsExistByIdRequest): Promise<QueryGroupsExistResponse> {
    const data = QueryGroupsExistByIdRequest.encode(request).finish();
    const promise = this.rpc.request("greenfield.storage.Query", "QueryGroupsExistById", data);
    return promise.then(data => QueryGroupsExistResponse.decode(new _m0.Reader(data)));
  }
}