/* eslint-disable */
import { Data, Commit, BlockID } from "../../../../tendermint/types/types";
import { EvidenceList } from "../../../../tendermint/types/evidence";
import { Consensus } from "../../../../tendermint/version/types";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact, Long, fromJsonTimestamp, bytesFromBase64, fromTimestamp, base64FromBytes } from "../../../../helpers";
export const protobufPackage = "cosmos.base.tendermint.v1beta1";
/**
 * Block is tendermint type Block, with the Header proposer address
 * field converted to bech32 string.
 */

export interface Block {
  header?: Header;
  data?: Data;
  evidence?: EvidenceList;
  last_commit?: Commit;
}
/** Header defines the structure of a Tendermint block header. */

export interface Header {
  /** basic block info */
  version?: Consensus;
  chain_id: string;
  height: Long;
  time?: Timestamp;
  /** prev block info */

  last_block_id?: BlockID;
  /** hashes of block data */

  last_commit_hash: Uint8Array;
  data_hash: Uint8Array;
  /** hashes from the app output from the prev block */

  validators_hash: Uint8Array;
  /** validators for the next block */

  next_validators_hash: Uint8Array;
  /** consensus params for current block */

  consensus_hash: Uint8Array;
  /** state after txs from the previous block */

  app_hash: Uint8Array;
  last_results_hash: Uint8Array;
  /** consensus info */

  evidence_hash: Uint8Array;
  /**
   * proposer_address is the original block proposer address, formatted as a Bech32 string.
   * In Tendermint, this type is `bytes`, but in the SDK, we convert it to a Bech32 string
   * for better UX.
   */

  proposer_address: string;
}

function createBaseBlock(): Block {
  return {
    header: undefined,
    data: undefined,
    evidence: undefined,
    last_commit: undefined
  };
}

export const Block = {
  encode(message: Block, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }

    if (message.data !== undefined) {
      Data.encode(message.data, writer.uint32(18).fork()).ldelim();
    }

    if (message.evidence !== undefined) {
      EvidenceList.encode(message.evidence, writer.uint32(26).fork()).ldelim();
    }

    if (message.last_commit !== undefined) {
      Commit.encode(message.last_commit, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Block {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlock();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.header = Header.decode(reader, reader.uint32());
          break;

        case 2:
          message.data = Data.decode(reader, reader.uint32());
          break;

        case 3:
          message.evidence = EvidenceList.decode(reader, reader.uint32());
          break;

        case 4:
          message.last_commit = Commit.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Block {
    return {
      header: isSet(object.header) ? Header.fromJSON(object.header) : undefined,
      data: isSet(object.data) ? Data.fromJSON(object.data) : undefined,
      evidence: isSet(object.evidence) ? EvidenceList.fromJSON(object.evidence) : undefined,
      last_commit: isSet(object.last_commit) ? Commit.fromJSON(object.last_commit) : undefined
    };
  },

  toJSON(message: Block): unknown {
    const obj: any = {};
    message.header !== undefined && (obj.header = message.header ? Header.toJSON(message.header) : undefined);
    message.data !== undefined && (obj.data = message.data ? Data.toJSON(message.data) : undefined);
    message.evidence !== undefined && (obj.evidence = message.evidence ? EvidenceList.toJSON(message.evidence) : undefined);
    message.last_commit !== undefined && (obj.last_commit = message.last_commit ? Commit.toJSON(message.last_commit) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Block>, I>>(object: I): Block {
    const message = createBaseBlock();
    message.header = object.header !== undefined && object.header !== null ? Header.fromPartial(object.header) : undefined;
    message.data = object.data !== undefined && object.data !== null ? Data.fromPartial(object.data) : undefined;
    message.evidence = object.evidence !== undefined && object.evidence !== null ? EvidenceList.fromPartial(object.evidence) : undefined;
    message.last_commit = object.last_commit !== undefined && object.last_commit !== null ? Commit.fromPartial(object.last_commit) : undefined;
    return message;
  }

};

function createBaseHeader(): Header {
  return {
    version: undefined,
    chain_id: "",
    height: Long.ZERO,
    time: undefined,
    last_block_id: undefined,
    last_commit_hash: new Uint8Array(),
    data_hash: new Uint8Array(),
    validators_hash: new Uint8Array(),
    next_validators_hash: new Uint8Array(),
    consensus_hash: new Uint8Array(),
    app_hash: new Uint8Array(),
    last_results_hash: new Uint8Array(),
    evidence_hash: new Uint8Array(),
    proposer_address: ""
  };
}

export const Header = {
  encode(message: Header, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== undefined) {
      Consensus.encode(message.version, writer.uint32(10).fork()).ldelim();
    }

    if (message.chain_id !== "") {
      writer.uint32(18).string(message.chain_id);
    }

    if (!message.height.isZero()) {
      writer.uint32(24).int64(message.height);
    }

    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(34).fork()).ldelim();
    }

    if (message.last_block_id !== undefined) {
      BlockID.encode(message.last_block_id, writer.uint32(42).fork()).ldelim();
    }

    if (message.last_commit_hash.length !== 0) {
      writer.uint32(50).bytes(message.last_commit_hash);
    }

    if (message.data_hash.length !== 0) {
      writer.uint32(58).bytes(message.data_hash);
    }

    if (message.validators_hash.length !== 0) {
      writer.uint32(66).bytes(message.validators_hash);
    }

    if (message.next_validators_hash.length !== 0) {
      writer.uint32(74).bytes(message.next_validators_hash);
    }

    if (message.consensus_hash.length !== 0) {
      writer.uint32(82).bytes(message.consensus_hash);
    }

    if (message.app_hash.length !== 0) {
      writer.uint32(90).bytes(message.app_hash);
    }

    if (message.last_results_hash.length !== 0) {
      writer.uint32(98).bytes(message.last_results_hash);
    }

    if (message.evidence_hash.length !== 0) {
      writer.uint32(106).bytes(message.evidence_hash);
    }

    if (message.proposer_address !== "") {
      writer.uint32(114).string(message.proposer_address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Header {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeader();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.version = Consensus.decode(reader, reader.uint32());
          break;

        case 2:
          message.chain_id = reader.string();
          break;

        case 3:
          message.height = (reader.int64() as Long);
          break;

        case 4:
          message.time = Timestamp.decode(reader, reader.uint32());
          break;

        case 5:
          message.last_block_id = BlockID.decode(reader, reader.uint32());
          break;

        case 6:
          message.last_commit_hash = reader.bytes();
          break;

        case 7:
          message.data_hash = reader.bytes();
          break;

        case 8:
          message.validators_hash = reader.bytes();
          break;

        case 9:
          message.next_validators_hash = reader.bytes();
          break;

        case 10:
          message.consensus_hash = reader.bytes();
          break;

        case 11:
          message.app_hash = reader.bytes();
          break;

        case 12:
          message.last_results_hash = reader.bytes();
          break;

        case 13:
          message.evidence_hash = reader.bytes();
          break;

        case 14:
          message.proposer_address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Header {
    return {
      version: isSet(object.version) ? Consensus.fromJSON(object.version) : undefined,
      chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      last_block_id: isSet(object.last_block_id) ? BlockID.fromJSON(object.last_block_id) : undefined,
      last_commit_hash: isSet(object.last_commit_hash) ? bytesFromBase64(object.last_commit_hash) : new Uint8Array(),
      data_hash: isSet(object.data_hash) ? bytesFromBase64(object.data_hash) : new Uint8Array(),
      validators_hash: isSet(object.validators_hash) ? bytesFromBase64(object.validators_hash) : new Uint8Array(),
      next_validators_hash: isSet(object.next_validators_hash) ? bytesFromBase64(object.next_validators_hash) : new Uint8Array(),
      consensus_hash: isSet(object.consensus_hash) ? bytesFromBase64(object.consensus_hash) : new Uint8Array(),
      app_hash: isSet(object.app_hash) ? bytesFromBase64(object.app_hash) : new Uint8Array(),
      last_results_hash: isSet(object.last_results_hash) ? bytesFromBase64(object.last_results_hash) : new Uint8Array(),
      evidence_hash: isSet(object.evidence_hash) ? bytesFromBase64(object.evidence_hash) : new Uint8Array(),
      proposer_address: isSet(object.proposer_address) ? String(object.proposer_address) : ""
    };
  },

  toJSON(message: Header): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version ? Consensus.toJSON(message.version) : undefined);
    message.chain_id !== undefined && (obj.chain_id = message.chain_id);
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.time !== undefined && (obj.time = fromTimestamp(message.time).toISOString());
    message.last_block_id !== undefined && (obj.last_block_id = message.last_block_id ? BlockID.toJSON(message.last_block_id) : undefined);
    message.last_commit_hash !== undefined && (obj.last_commit_hash = base64FromBytes(message.last_commit_hash !== undefined ? message.last_commit_hash : new Uint8Array()));
    message.data_hash !== undefined && (obj.data_hash = base64FromBytes(message.data_hash !== undefined ? message.data_hash : new Uint8Array()));
    message.validators_hash !== undefined && (obj.validators_hash = base64FromBytes(message.validators_hash !== undefined ? message.validators_hash : new Uint8Array()));
    message.next_validators_hash !== undefined && (obj.next_validators_hash = base64FromBytes(message.next_validators_hash !== undefined ? message.next_validators_hash : new Uint8Array()));
    message.consensus_hash !== undefined && (obj.consensus_hash = base64FromBytes(message.consensus_hash !== undefined ? message.consensus_hash : new Uint8Array()));
    message.app_hash !== undefined && (obj.app_hash = base64FromBytes(message.app_hash !== undefined ? message.app_hash : new Uint8Array()));
    message.last_results_hash !== undefined && (obj.last_results_hash = base64FromBytes(message.last_results_hash !== undefined ? message.last_results_hash : new Uint8Array()));
    message.evidence_hash !== undefined && (obj.evidence_hash = base64FromBytes(message.evidence_hash !== undefined ? message.evidence_hash : new Uint8Array()));
    message.proposer_address !== undefined && (obj.proposer_address = message.proposer_address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Header>, I>>(object: I): Header {
    const message = createBaseHeader();
    message.version = object.version !== undefined && object.version !== null ? Consensus.fromPartial(object.version) : undefined;
    message.chain_id = object.chain_id ?? "";
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.time = object.time !== undefined && object.time !== null ? Timestamp.fromPartial(object.time) : undefined;
    message.last_block_id = object.last_block_id !== undefined && object.last_block_id !== null ? BlockID.fromPartial(object.last_block_id) : undefined;
    message.last_commit_hash = object.last_commit_hash ?? new Uint8Array();
    message.data_hash = object.data_hash ?? new Uint8Array();
    message.validators_hash = object.validators_hash ?? new Uint8Array();
    message.next_validators_hash = object.next_validators_hash ?? new Uint8Array();
    message.consensus_hash = object.consensus_hash ?? new Uint8Array();
    message.app_hash = object.app_hash ?? new Uint8Array();
    message.last_results_hash = object.last_results_hash ?? new Uint8Array();
    message.evidence_hash = object.evidence_hash ?? new Uint8Array();
    message.proposer_address = object.proposer_address ?? "";
    return message;
  }

};