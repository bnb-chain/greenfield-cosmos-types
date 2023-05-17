/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "cosmos.params.v1beta1";
/** ParameterChangeProposal defines a proposal to change one or more parameters. */

export interface ParameterChangeProposal {
  title: string;
  description: string;
  changes: ParamChange[];
  /** cross_chain is a flag to indicate whether it is a cross-chain proposal */

  crossChain: boolean;
  /** addresses is destination smart contract address(es), only used when it is a cross-chain proposal */

  addresses: string[];
}
/** ParameterChangeProposal defines a proposal to change one or more parameters. */

export interface ParameterChangeProposalSDKType {
  title: string;
  description: string;
  changes: ParamChangeSDKType[];
  cross_chain: boolean;
  addresses: string[];
}
/**
 * ParamChange defines an individual parameter change, for use in
 * ParameterChangeProposal.
 */

export interface ParamChange {
  subspace: string;
  key: string;
  value: string;
}
/**
 * ParamChange defines an individual parameter change, for use in
 * ParameterChangeProposal.
 */

export interface ParamChangeSDKType {
  subspace: string;
  key: string;
  value: string;
}

function createBaseParameterChangeProposal(): ParameterChangeProposal {
  return {
    title: "",
    description: "",
    changes: [],
    crossChain: false,
    addresses: []
  };
}

export const ParameterChangeProposal = {
  encode(message: ParameterChangeProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    for (const v of message.changes) {
      ParamChange.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.crossChain === true) {
      writer.uint32(32).bool(message.crossChain);
    }

    for (const v of message.addresses) {
      writer.uint32(42).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ParameterChangeProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParameterChangeProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.changes.push(ParamChange.decode(reader, reader.uint32()));
          break;

        case 4:
          message.crossChain = reader.bool();
          break;

        case 5:
          message.addresses.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ParameterChangeProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      changes: Array.isArray(object?.changes) ? object.changes.map((e: any) => ParamChange.fromJSON(e)) : [],
      crossChain: isSet(object.crossChain) ? Boolean(object.crossChain) : false,
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: ParameterChangeProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);

    if (message.changes) {
      obj.changes = message.changes.map(e => e ? ParamChange.toJSON(e) : undefined);
    } else {
      obj.changes = [];
    }

    message.crossChain !== undefined && (obj.crossChain = message.crossChain);

    if (message.addresses) {
      obj.addresses = message.addresses.map(e => e);
    } else {
      obj.addresses = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ParameterChangeProposal>, I>>(object: I): ParameterChangeProposal {
    const message = createBaseParameterChangeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.changes = object.changes?.map(e => ParamChange.fromPartial(e)) || [];
    message.crossChain = object.crossChain ?? false;
    message.addresses = object.addresses?.map(e => e) || [];
    return message;
  },

  fromSDK(object: ParameterChangeProposalSDKType): ParameterChangeProposal {
    return {
      title: object?.title,
      description: object?.description,
      changes: Array.isArray(object?.changes) ? object.changes.map((e: any) => ParamChange.fromSDK(e)) : [],
      crossChain: object?.cross_chain,
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => e) : []
    };
  },

  toSDK(message: ParameterChangeProposal): ParameterChangeProposalSDKType {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;

    if (message.changes) {
      obj.changes = message.changes.map(e => e ? ParamChange.toSDK(e) : undefined);
    } else {
      obj.changes = [];
    }

    obj.cross_chain = message.crossChain;

    if (message.addresses) {
      obj.addresses = message.addresses.map(e => e);
    } else {
      obj.addresses = [];
    }

    return obj;
  }

};

function createBaseParamChange(): ParamChange {
  return {
    subspace: "",
    key: "",
    value: ""
  };
}

export const ParamChange = {
  encode(message: ParamChange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subspace !== "") {
      writer.uint32(10).string(message.subspace);
    }

    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }

    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ParamChange {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamChange();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.subspace = reader.string();
          break;

        case 2:
          message.key = reader.string();
          break;

        case 3:
          message.value = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ParamChange {
    return {
      subspace: isSet(object.subspace) ? String(object.subspace) : "",
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },

  toJSON(message: ParamChange): unknown {
    const obj: any = {};
    message.subspace !== undefined && (obj.subspace = message.subspace);
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ParamChange>, I>>(object: I): ParamChange {
    const message = createBaseParamChange();
    message.subspace = object.subspace ?? "";
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },

  fromSDK(object: ParamChangeSDKType): ParamChange {
    return {
      subspace: object?.subspace,
      key: object?.key,
      value: object?.value
    };
  },

  toSDK(message: ParamChange): ParamChangeSDKType {
    const obj: any = {};
    obj.subspace = message.subspace;
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  }

};