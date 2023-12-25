//@ts-nocheck
/* eslint-disable */
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../helpers";
export const protobufPackage = "greenfield.sp";
/** DepositAuthorization defines authorization for sp deposit. */
export interface DepositAuthorization {
  /**
   * max_deposit specifies the maximum amount of tokens can be deposit to a storage provider. If it is
   * empty, there is no spend limit and any amount of coins can be deposit.
   */
  maxDeposit?: Coin;
  /** sp_address is the operator address of storage provider. */
  spAddress: string;
}
export interface DepositAuthorizationProtoMsg {
  typeUrl: "/greenfield.sp.DepositAuthorization";
  value: Uint8Array;
}
/** DepositAuthorization defines authorization for sp deposit. */
export interface DepositAuthorizationAmino {
  /**
   * max_deposit specifies the maximum amount of tokens can be deposit to a storage provider. If it is
   * empty, there is no spend limit and any amount of coins can be deposit.
   */
  max_deposit?: CoinAmino;
  /** sp_address is the operator address of storage provider. */
  sp_address?: string;
}
export interface DepositAuthorizationAminoMsg {
  type: "/greenfield.sp.DepositAuthorization";
  value: DepositAuthorizationAmino;
}
/** DepositAuthorization defines authorization for sp deposit. */
export interface DepositAuthorizationSDKType {
  max_deposit?: CoinSDKType;
  sp_address: string;
}
function createBaseDepositAuthorization(): DepositAuthorization {
  return {
    maxDeposit: undefined,
    spAddress: ""
  };
}
export const DepositAuthorization = {
  typeUrl: "/greenfield.sp.DepositAuthorization",
  encode(message: DepositAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxDeposit !== undefined) {
      Coin.encode(message.maxDeposit, writer.uint32(10).fork()).ldelim();
    }
    if (message.spAddress !== "") {
      writer.uint32(18).string(message.spAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DepositAuthorization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxDeposit = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.spAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DepositAuthorization {
    return {
      maxDeposit: isSet(object.maxDeposit) ? Coin.fromJSON(object.maxDeposit) : undefined,
      spAddress: isSet(object.spAddress) ? String(object.spAddress) : ""
    };
  },
  toJSON(message: DepositAuthorization): unknown {
    const obj: any = {};
    message.maxDeposit !== undefined && (obj.maxDeposit = message.maxDeposit ? Coin.toJSON(message.maxDeposit) : undefined);
    message.spAddress !== undefined && (obj.spAddress = message.spAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<DepositAuthorization>, I>>(object: I): DepositAuthorization {
    const message = createBaseDepositAuthorization();
    message.maxDeposit = object.maxDeposit !== undefined && object.maxDeposit !== null ? Coin.fromPartial(object.maxDeposit) : undefined;
    message.spAddress = object.spAddress ?? "";
    return message;
  },
  fromSDK(object: DepositAuthorizationSDKType): DepositAuthorization {
    return {
      maxDeposit: object.max_deposit ? Coin.fromSDK(object.max_deposit) : undefined,
      spAddress: object?.sp_address
    };
  },
  toSDK(message: DepositAuthorization): DepositAuthorizationSDKType {
    const obj: any = {};
    message.maxDeposit !== undefined && (obj.max_deposit = message.maxDeposit ? Coin.toSDK(message.maxDeposit) : undefined);
    obj.sp_address = message.spAddress;
    return obj;
  },
  fromAmino(object: DepositAuthorizationAmino): DepositAuthorization {
    const message = createBaseDepositAuthorization();
    if (object.max_deposit !== undefined && object.max_deposit !== null) {
      message.maxDeposit = Coin.fromAmino(object.max_deposit);
    }
    if (object.sp_address !== undefined && object.sp_address !== null) {
      message.spAddress = object.sp_address;
    }
    return message;
  },
  toAmino(message: DepositAuthorization): DepositAuthorizationAmino {
    const obj: any = {};
    obj.max_deposit = message.maxDeposit ? Coin.toAmino(message.maxDeposit) : undefined;
    obj.sp_address = message.spAddress;
    return obj;
  },
  fromAminoMsg(object: DepositAuthorizationAminoMsg): DepositAuthorization {
    return DepositAuthorization.fromAmino(object.value);
  },
  fromProtoMsg(message: DepositAuthorizationProtoMsg): DepositAuthorization {
    return DepositAuthorization.decode(message.value);
  },
  toProto(message: DepositAuthorization): Uint8Array {
    return DepositAuthorization.encode(message).finish();
  },
  toProtoMsg(message: DepositAuthorization): DepositAuthorizationProtoMsg {
    return {
      typeUrl: "/greenfield.sp.DepositAuthorization",
      value: DepositAuthorization.encode(message).finish()
    };
  }
};