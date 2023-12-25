//@ts-nocheck
/* eslint-disable */
import { MsgSubmitProposal, MsgExecLegacyContent, MsgVote, MsgVoteWeighted, MsgDeposit, MsgUpdateParams, MsgUpdateCrossChainParams } from "./tx";
export const AminoConverter = {
  "/cosmos.gov.v1.MsgSubmitProposal": {
    aminoType: "cosmos-sdk/v1/MsgSubmitProposal",
    toAmino: MsgSubmitProposal.toAmino,
    fromAmino: MsgSubmitProposal.fromAmino
  },
  "/cosmos.gov.v1.MsgExecLegacyContent": {
    aminoType: "cosmos-sdk/v1/MsgExecLegacyContent",
    toAmino: MsgExecLegacyContent.toAmino,
    fromAmino: MsgExecLegacyContent.fromAmino
  },
  "/cosmos.gov.v1.MsgVote": {
    aminoType: "cosmos-sdk/v1/MsgVote",
    toAmino: MsgVote.toAmino,
    fromAmino: MsgVote.fromAmino
  },
  "/cosmos.gov.v1.MsgVoteWeighted": {
    aminoType: "cosmos-sdk/v1/MsgVoteWeighted",
    toAmino: MsgVoteWeighted.toAmino,
    fromAmino: MsgVoteWeighted.fromAmino
  },
  "/cosmos.gov.v1.MsgDeposit": {
    aminoType: "cosmos-sdk/v1/MsgDeposit",
    toAmino: MsgDeposit.toAmino,
    fromAmino: MsgDeposit.fromAmino
  },
  "/cosmos.gov.v1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/x/gov/v1/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/cosmos.gov.v1.MsgUpdateCrossChainParams": {
    aminoType: "cosmos-sdk/x/gov/v1/MsgUpdateCrossChainParams",
    toAmino: MsgUpdateCrossChainParams.toAmino,
    fromAmino: MsgUpdateCrossChainParams.fromAmino
  }
};