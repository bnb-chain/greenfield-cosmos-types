/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../helpers";
export const protobufPackage = "bnbchain.greenfield.sp";
/** EventCreateStorageProvider is emitted when there is a storage provider created */

export interface EventCreateStorageProvider {
  /** sp_address is the operator address of the storage provider */
  spAddress: string;
  /** funding_address is the funding account address of the storage provider */

  fundingAddress: string;
  /** seal_address is the account address for SealObject Tx */

  sealAddress: string;
  /** approval_address is the account address for approve create bucket/object signature */

  approvalAddress: string;
  /** endpoint is the domain name address used by SP to provide storage services */

  endpoint: string;
  /** total_deposit is the token coin that the storage provider deposit to the storage module */

  totalDeposit: string;
}
/** EventEditStorageProvider is emitted when SP's metadata is edited. */

export interface EventEditStorageProvider {
  /** old_endpoint is the service endpoint of the storage provider before edit */
  oldEndpoint: string;
  /** new_endpoint is the service endpoint of the storage provider after edit */

  newEndpoint: string;
}
/** EventDeposit is emitted when sp deposit tokens. */

export interface EventDeposit {
  /** sp_address is the account address of storage provider */
  spAddress: string;
  /** deposit is the token coin deposited this message */

  deposit: string;
  /** total_deposit is the total token coins this storage provider deposited */

  totalDeposit: string;
}

function createBaseEventCreateStorageProvider(): EventCreateStorageProvider {
  return {
    spAddress: "",
    fundingAddress: "",
    sealAddress: "",
    approvalAddress: "",
    endpoint: "",
    totalDeposit: ""
  };
}

export const EventCreateStorageProvider = {
  encode(message: EventCreateStorageProvider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spAddress !== "") {
      writer.uint32(10).string(message.spAddress);
    }

    if (message.fundingAddress !== "") {
      writer.uint32(18).string(message.fundingAddress);
    }

    if (message.sealAddress !== "") {
      writer.uint32(26).string(message.sealAddress);
    }

    if (message.approvalAddress !== "") {
      writer.uint32(34).string(message.approvalAddress);
    }

    if (message.endpoint !== "") {
      writer.uint32(42).string(message.endpoint);
    }

    if (message.totalDeposit !== "") {
      writer.uint32(50).string(message.totalDeposit);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateStorageProvider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateStorageProvider();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.spAddress = reader.string();
          break;

        case 2:
          message.fundingAddress = reader.string();
          break;

        case 3:
          message.sealAddress = reader.string();
          break;

        case 4:
          message.approvalAddress = reader.string();
          break;

        case 5:
          message.endpoint = reader.string();
          break;

        case 6:
          message.totalDeposit = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventCreateStorageProvider {
    return {
      spAddress: isSet(object.spAddress) ? String(object.spAddress) : "",
      fundingAddress: isSet(object.fundingAddress) ? String(object.fundingAddress) : "",
      sealAddress: isSet(object.sealAddress) ? String(object.sealAddress) : "",
      approvalAddress: isSet(object.approvalAddress) ? String(object.approvalAddress) : "",
      endpoint: isSet(object.endpoint) ? String(object.endpoint) : "",
      totalDeposit: isSet(object.totalDeposit) ? String(object.totalDeposit) : ""
    };
  },

  toJSON(message: EventCreateStorageProvider): unknown {
    const obj: any = {};
    message.spAddress !== undefined && (obj.spAddress = message.spAddress);
    message.fundingAddress !== undefined && (obj.fundingAddress = message.fundingAddress);
    message.sealAddress !== undefined && (obj.sealAddress = message.sealAddress);
    message.approvalAddress !== undefined && (obj.approvalAddress = message.approvalAddress);
    message.endpoint !== undefined && (obj.endpoint = message.endpoint);
    message.totalDeposit !== undefined && (obj.totalDeposit = message.totalDeposit);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCreateStorageProvider>, I>>(object: I): EventCreateStorageProvider {
    const message = createBaseEventCreateStorageProvider();
    message.spAddress = object.spAddress ?? "";
    message.fundingAddress = object.fundingAddress ?? "";
    message.sealAddress = object.sealAddress ?? "";
    message.approvalAddress = object.approvalAddress ?? "";
    message.endpoint = object.endpoint ?? "";
    message.totalDeposit = object.totalDeposit ?? "";
    return message;
  }

};

function createBaseEventEditStorageProvider(): EventEditStorageProvider {
  return {
    oldEndpoint: "",
    newEndpoint: ""
  };
}

export const EventEditStorageProvider = {
  encode(message: EventEditStorageProvider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.oldEndpoint !== "") {
      writer.uint32(10).string(message.oldEndpoint);
    }

    if (message.newEndpoint !== "") {
      writer.uint32(18).string(message.newEndpoint);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventEditStorageProvider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventEditStorageProvider();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.oldEndpoint = reader.string();
          break;

        case 2:
          message.newEndpoint = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventEditStorageProvider {
    return {
      oldEndpoint: isSet(object.oldEndpoint) ? String(object.oldEndpoint) : "",
      newEndpoint: isSet(object.newEndpoint) ? String(object.newEndpoint) : ""
    };
  },

  toJSON(message: EventEditStorageProvider): unknown {
    const obj: any = {};
    message.oldEndpoint !== undefined && (obj.oldEndpoint = message.oldEndpoint);
    message.newEndpoint !== undefined && (obj.newEndpoint = message.newEndpoint);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventEditStorageProvider>, I>>(object: I): EventEditStorageProvider {
    const message = createBaseEventEditStorageProvider();
    message.oldEndpoint = object.oldEndpoint ?? "";
    message.newEndpoint = object.newEndpoint ?? "";
    return message;
  }

};

function createBaseEventDeposit(): EventDeposit {
  return {
    spAddress: "",
    deposit: "",
    totalDeposit: ""
  };
}

export const EventDeposit = {
  encode(message: EventDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spAddress !== "") {
      writer.uint32(10).string(message.spAddress);
    }

    if (message.deposit !== "") {
      writer.uint32(18).string(message.deposit);
    }

    if (message.totalDeposit !== "") {
      writer.uint32(26).string(message.totalDeposit);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventDeposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDeposit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.spAddress = reader.string();
          break;

        case 2:
          message.deposit = reader.string();
          break;

        case 3:
          message.totalDeposit = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventDeposit {
    return {
      spAddress: isSet(object.spAddress) ? String(object.spAddress) : "",
      deposit: isSet(object.deposit) ? String(object.deposit) : "",
      totalDeposit: isSet(object.totalDeposit) ? String(object.totalDeposit) : ""
    };
  },

  toJSON(message: EventDeposit): unknown {
    const obj: any = {};
    message.spAddress !== undefined && (obj.spAddress = message.spAddress);
    message.deposit !== undefined && (obj.deposit = message.deposit);
    message.totalDeposit !== undefined && (obj.totalDeposit = message.totalDeposit);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventDeposit>, I>>(object: I): EventDeposit {
    const message = createBaseEventDeposit();
    message.spAddress = object.spAddress ?? "";
    message.deposit = object.deposit ?? "";
    message.totalDeposit = object.totalDeposit ?? "";
    return message;
  }

};