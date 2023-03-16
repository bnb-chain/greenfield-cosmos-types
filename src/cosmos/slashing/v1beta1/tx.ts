/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact, Rpc } from "../../../helpers";
export const protobufPackage = "cosmos.slashing.v1beta1";
/** MsgUnjail defines the Msg/Unjail request type */

export interface MsgUnjail {
  validator_addr: string;
}
/** MsgUnjailResponse defines the Msg/Unjail response type */

export interface MsgUnjailResponse {}
/** MsgImpeach defines the Msg/Impeach request type */

export interface MsgImpeach {
  from: string;
  validator_address: string;
}
/** MsgImpeachResponse defines the Msg/Impeach response type. */

export interface MsgImpeachResponse {}

function createBaseMsgUnjail(): MsgUnjail {
  return {
    validator_addr: ""
  };
}

export const MsgUnjail = {
  encode(message: MsgUnjail, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator_addr !== "") {
      writer.uint32(10).string(message.validator_addr);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnjail {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnjail();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validator_addr = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUnjail {
    return {
      validator_addr: isSet(object.validator_addr) ? String(object.validator_addr) : ""
    };
  },

  toJSON(message: MsgUnjail): unknown {
    const obj: any = {};
    message.validator_addr !== undefined && (obj.validator_addr = message.validator_addr);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUnjail>, I>>(object: I): MsgUnjail {
    const message = createBaseMsgUnjail();
    message.validator_addr = object.validator_addr ?? "";
    return message;
  }

};

function createBaseMsgUnjailResponse(): MsgUnjailResponse {
  return {};
}

export const MsgUnjailResponse = {
  encode(_: MsgUnjailResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnjailResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnjailResponse();

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

  fromJSON(_: any): MsgUnjailResponse {
    return {};
  },

  toJSON(_: MsgUnjailResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUnjailResponse>, I>>(_: I): MsgUnjailResponse {
    const message = createBaseMsgUnjailResponse();
    return message;
  }

};

function createBaseMsgImpeach(): MsgImpeach {
  return {
    from: "",
    validator_address: ""
  };
}

export const MsgImpeach = {
  encode(message: MsgImpeach, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    if (message.validator_address !== "") {
      writer.uint32(18).string(message.validator_address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgImpeach {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgImpeach();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;

        case 2:
          message.validator_address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgImpeach {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : ""
    };
  },

  toJSON(message: MsgImpeach): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.validator_address !== undefined && (obj.validator_address = message.validator_address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgImpeach>, I>>(object: I): MsgImpeach {
    const message = createBaseMsgImpeach();
    message.from = object.from ?? "";
    message.validator_address = object.validator_address ?? "";
    return message;
  }

};

function createBaseMsgImpeachResponse(): MsgImpeachResponse {
  return {};
}

export const MsgImpeachResponse = {
  encode(_: MsgImpeachResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgImpeachResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgImpeachResponse();

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

  fromJSON(_: any): MsgImpeachResponse {
    return {};
  },

  toJSON(_: MsgImpeachResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgImpeachResponse>, I>>(_: I): MsgImpeachResponse {
    const message = createBaseMsgImpeachResponse();
    return message;
  }

};
/** Msg defines the slashing Msg service. */

export interface Msg {
  /**
   * Unjail defines a method for unjailing a jailed validator, thus returning
   * them into the bonded validator set, so they can begin receiving provisions
   * and rewards again.
   */
  Unjail(request: MsgUnjail): Promise<MsgUnjailResponse>;
  /** Impeach defines a method for removing an existing validator after gov proposal passes. */

  Impeach(request: MsgImpeach): Promise<MsgImpeachResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Unjail = this.Unjail.bind(this);
    this.Impeach = this.Impeach.bind(this);
  }

  Unjail(request: MsgUnjail): Promise<MsgUnjailResponse> {
    const data = MsgUnjail.encode(request).finish();
    const promise = this.rpc.request("cosmos.slashing.v1beta1.Msg", "Unjail", data);
    return promise.then(data => MsgUnjailResponse.decode(new _m0.Reader(data)));
  }

  Impeach(request: MsgImpeach): Promise<MsgImpeachResponse> {
    const data = MsgImpeach.encode(request).finish();
    const promise = this.rpc.request("cosmos.slashing.v1beta1.Msg", "Impeach", data);
    return promise.then(data => MsgImpeachResponse.decode(new _m0.Reader(data)));
  }

}