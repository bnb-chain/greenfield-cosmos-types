/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact, Rpc } from "../../../helpers";
export const protobufPackage = "cosmos.slashing.v1beta1";
/** MsgUnjail defines the Msg/Unjail request type */

export interface MsgUnjail {
  validatorAddr: string;
}
/** MsgUnjail defines the Msg/Unjail request type */

export interface MsgUnjailSDKType {
  validator_addr: string;
}
/** MsgUnjailResponse defines the Msg/Unjail response type */

export interface MsgUnjailResponse {}
/** MsgUnjailResponse defines the Msg/Unjail response type */

export interface MsgUnjailResponseSDKType {}
/** MsgImpeach defines the Msg/Impeach request type */

export interface MsgImpeach {
  from: string;
  validatorAddress: string;
}
/** MsgImpeach defines the Msg/Impeach request type */

export interface MsgImpeachSDKType {
  from: string;
  validator_address: string;
}
/** MsgImpeachResponse defines the Msg/Impeach response type. */

export interface MsgImpeachResponse {}
/** MsgImpeachResponse defines the Msg/Impeach response type. */

export interface MsgImpeachResponseSDKType {}

function createBaseMsgUnjail(): MsgUnjail {
  return {
    validatorAddr: ""
  };
}

export const MsgUnjail = {
  encode(message: MsgUnjail, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
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
          message.validatorAddr = reader.string();
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
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : ""
    };
  },

  toJSON(message: MsgUnjail): unknown {
    const obj: any = {};
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUnjail>, I>>(object: I): MsgUnjail {
    const message = createBaseMsgUnjail();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },

  fromSDK(object: MsgUnjailSDKType): MsgUnjail {
    return {
      validatorAddr: object?.validator_addr
    };
  },

  toSDK(message: MsgUnjail): MsgUnjailSDKType {
    const obj: any = {};
    obj.validator_addr = message.validatorAddr;
    return obj;
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
  },

  fromSDK(_: MsgUnjailResponseSDKType): MsgUnjailResponse {
    return {};
  },

  toSDK(_: MsgUnjailResponse): MsgUnjailResponseSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgImpeach(): MsgImpeach {
  return {
    from: "",
    validatorAddress: ""
  };
}

export const MsgImpeach = {
  encode(message: MsgImpeach, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
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
          message.validatorAddress = reader.string();
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
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : ""
    };
  },

  toJSON(message: MsgImpeach): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgImpeach>, I>>(object: I): MsgImpeach {
    const message = createBaseMsgImpeach();
    message.from = object.from ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },

  fromSDK(object: MsgImpeachSDKType): MsgImpeach {
    return {
      from: object?.from,
      validatorAddress: object?.validator_address
    };
  },

  toSDK(message: MsgImpeach): MsgImpeachSDKType {
    const obj: any = {};
    obj.from = message.from;
    obj.validator_address = message.validatorAddress;
    return obj;
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
  },

  fromSDK(_: MsgImpeachResponseSDKType): MsgImpeachResponse {
    return {};
  },

  toSDK(_: MsgImpeachResponse): MsgImpeachResponseSDKType {
    const obj: any = {};
    return obj;
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