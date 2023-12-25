//@ts-nocheck
/* eslint-disable */
import { Long, isSet, DeepPartial, Exact } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { Decimal } from "@cosmjs/math";
export const protobufPackage = "greenfield.sp";
/** Params defines the parameters for the module. */
export interface Params {
  /** deposit_denom defines the staking coin denomination. */
  depositDenom: string;
  /** min_deposit defines the minimum deposit amount for storage providers. */
  minDeposit: string;
  /** the ratio of the store price of the secondary sp to the primary sp, the default value is 80% */
  secondarySpStorePriceRatio: string;
  /** previous blocks that be traced back to for maintenance_records */
  numOfHistoricalBlocksForMaintenanceRecords: Long;
  /** the max duration that a SP can be in_maintenance within num_of_historical_blocks_for_maintenance_records */
  maintenanceDurationQuota: Long;
  /** the number of blocks to be wait for sp to be in maintenance mode again if already requested */
  numOfLockupBlocksForMaintenance: Long;
  /** the time interval to update global storage price, if it is not set then the price will be updated at the first block of each natural month */
  updateGlobalPriceInterval: Long;
  /** the days counting backwards from end of a month in which a sp cannot update its price */
  updatePriceDisallowedDays: number;
}
export interface ParamsProtoMsg {
  typeUrl: "/greenfield.sp.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  deposit_denom: string;
  min_deposit: string;
  secondary_sp_store_price_ratio: string;
  num_of_historical_blocks_for_maintenance_records: Long;
  maintenance_duration_quota: Long;
  num_of_lockup_blocks_for_maintenance: Long;
  update_global_price_interval: Long;
  update_price_disallowed_days: number;
}
function createBaseParams(): Params {
  return {
    depositDenom: "",
    minDeposit: "",
    secondarySpStorePriceRatio: "",
    numOfHistoricalBlocksForMaintenanceRecords: Long.ZERO,
    maintenanceDurationQuota: Long.ZERO,
    numOfLockupBlocksForMaintenance: Long.ZERO,
    updateGlobalPriceInterval: Long.UZERO,
    updatePriceDisallowedDays: 0
  };
}
export const Params = {
  typeUrl: "/greenfield.sp.Params",
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositDenom !== "") {
      writer.uint32(10).string(message.depositDenom);
    }
    if (message.minDeposit !== "") {
      writer.uint32(18).string(message.minDeposit);
    }
    if (message.secondarySpStorePriceRatio !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.secondarySpStorePriceRatio, 18).atomics);
    }
    if (!message.numOfHistoricalBlocksForMaintenanceRecords.isZero()) {
      writer.uint32(32).int64(message.numOfHistoricalBlocksForMaintenanceRecords);
    }
    if (!message.maintenanceDurationQuota.isZero()) {
      writer.uint32(40).int64(message.maintenanceDurationQuota);
    }
    if (!message.numOfLockupBlocksForMaintenance.isZero()) {
      writer.uint32(48).int64(message.numOfLockupBlocksForMaintenance);
    }
    if (!message.updateGlobalPriceInterval.isZero()) {
      writer.uint32(56).uint64(message.updateGlobalPriceInterval);
    }
    if (message.updatePriceDisallowedDays !== 0) {
      writer.uint32(64).uint32(message.updatePriceDisallowedDays);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositDenom = reader.string();
          break;
        case 2:
          message.minDeposit = reader.string();
          break;
        case 3:
          message.secondarySpStorePriceRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.numOfHistoricalBlocksForMaintenanceRecords = (reader.int64() as Long);
          break;
        case 5:
          message.maintenanceDurationQuota = (reader.int64() as Long);
          break;
        case 6:
          message.numOfLockupBlocksForMaintenance = (reader.int64() as Long);
          break;
        case 7:
          message.updateGlobalPriceInterval = (reader.uint64() as Long);
          break;
        case 8:
          message.updatePriceDisallowedDays = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      depositDenom: isSet(object.depositDenom) ? String(object.depositDenom) : "",
      minDeposit: isSet(object.minDeposit) ? String(object.minDeposit) : "",
      secondarySpStorePriceRatio: isSet(object.secondarySpStorePriceRatio) ? String(object.secondarySpStorePriceRatio) : "",
      numOfHistoricalBlocksForMaintenanceRecords: isSet(object.numOfHistoricalBlocksForMaintenanceRecords) ? Long.fromValue(object.numOfHistoricalBlocksForMaintenanceRecords) : Long.ZERO,
      maintenanceDurationQuota: isSet(object.maintenanceDurationQuota) ? Long.fromValue(object.maintenanceDurationQuota) : Long.ZERO,
      numOfLockupBlocksForMaintenance: isSet(object.numOfLockupBlocksForMaintenance) ? Long.fromValue(object.numOfLockupBlocksForMaintenance) : Long.ZERO,
      updateGlobalPriceInterval: isSet(object.updateGlobalPriceInterval) ? Long.fromValue(object.updateGlobalPriceInterval) : Long.UZERO,
      updatePriceDisallowedDays: isSet(object.updatePriceDisallowedDays) ? Number(object.updatePriceDisallowedDays) : 0
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.depositDenom !== undefined && (obj.depositDenom = message.depositDenom);
    message.minDeposit !== undefined && (obj.minDeposit = message.minDeposit);
    message.secondarySpStorePriceRatio !== undefined && (obj.secondarySpStorePriceRatio = message.secondarySpStorePriceRatio);
    message.numOfHistoricalBlocksForMaintenanceRecords !== undefined && (obj.numOfHistoricalBlocksForMaintenanceRecords = (message.numOfHistoricalBlocksForMaintenanceRecords || Long.ZERO).toString());
    message.maintenanceDurationQuota !== undefined && (obj.maintenanceDurationQuota = (message.maintenanceDurationQuota || Long.ZERO).toString());
    message.numOfLockupBlocksForMaintenance !== undefined && (obj.numOfLockupBlocksForMaintenance = (message.numOfLockupBlocksForMaintenance || Long.ZERO).toString());
    message.updateGlobalPriceInterval !== undefined && (obj.updateGlobalPriceInterval = (message.updateGlobalPriceInterval || Long.UZERO).toString());
    message.updatePriceDisallowedDays !== undefined && (obj.updatePriceDisallowedDays = Math.round(message.updatePriceDisallowedDays));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.depositDenom = object.depositDenom ?? "";
    message.minDeposit = object.minDeposit ?? "";
    message.secondarySpStorePriceRatio = object.secondarySpStorePriceRatio ?? "";
    message.numOfHistoricalBlocksForMaintenanceRecords = object.numOfHistoricalBlocksForMaintenanceRecords !== undefined && object.numOfHistoricalBlocksForMaintenanceRecords !== null ? Long.fromValue(object.numOfHistoricalBlocksForMaintenanceRecords) : Long.ZERO;
    message.maintenanceDurationQuota = object.maintenanceDurationQuota !== undefined && object.maintenanceDurationQuota !== null ? Long.fromValue(object.maintenanceDurationQuota) : Long.ZERO;
    message.numOfLockupBlocksForMaintenance = object.numOfLockupBlocksForMaintenance !== undefined && object.numOfLockupBlocksForMaintenance !== null ? Long.fromValue(object.numOfLockupBlocksForMaintenance) : Long.ZERO;
    message.updateGlobalPriceInterval = object.updateGlobalPriceInterval !== undefined && object.updateGlobalPriceInterval !== null ? Long.fromValue(object.updateGlobalPriceInterval) : Long.UZERO;
    message.updatePriceDisallowedDays = object.updatePriceDisallowedDays ?? 0;
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      depositDenom: object?.deposit_denom,
      minDeposit: object?.min_deposit,
      secondarySpStorePriceRatio: object?.secondary_sp_store_price_ratio,
      numOfHistoricalBlocksForMaintenanceRecords: object?.num_of_historical_blocks_for_maintenance_records,
      maintenanceDurationQuota: object?.maintenance_duration_quota,
      numOfLockupBlocksForMaintenance: object?.num_of_lockup_blocks_for_maintenance,
      updateGlobalPriceInterval: object?.update_global_price_interval,
      updatePriceDisallowedDays: object?.update_price_disallowed_days
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.deposit_denom = message.depositDenom;
    obj.min_deposit = message.minDeposit;
    obj.secondary_sp_store_price_ratio = message.secondarySpStorePriceRatio;
    obj.num_of_historical_blocks_for_maintenance_records = message.numOfHistoricalBlocksForMaintenanceRecords;
    obj.maintenance_duration_quota = message.maintenanceDurationQuota;
    obj.num_of_lockup_blocks_for_maintenance = message.numOfLockupBlocksForMaintenance;
    obj.update_global_price_interval = message.updateGlobalPriceInterval;
    obj.update_price_disallowed_days = message.updatePriceDisallowedDays;
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.deposit_denom !== undefined && object.deposit_denom !== null) {
      message.depositDenom = object.deposit_denom;
    }
    if (object.min_deposit !== undefined && object.min_deposit !== null) {
      message.minDeposit = object.min_deposit;
    }
    if (object.secondary_sp_store_price_ratio !== undefined && object.secondary_sp_store_price_ratio !== null) {
      message.secondarySpStorePriceRatio = object.secondary_sp_store_price_ratio;
    }
    if (object.num_of_historical_blocks_for_maintenance_records !== undefined && object.num_of_historical_blocks_for_maintenance_records !== null) {
      message.numOfHistoricalBlocksForMaintenanceRecords = Long.fromString(object.num_of_historical_blocks_for_maintenance_records);
    }
    if (object.maintenance_duration_quota !== undefined && object.maintenance_duration_quota !== null) {
      message.maintenanceDurationQuota = Long.fromString(object.maintenance_duration_quota);
    }
    if (object.num_of_lockup_blocks_for_maintenance !== undefined && object.num_of_lockup_blocks_for_maintenance !== null) {
      message.numOfLockupBlocksForMaintenance = Long.fromString(object.num_of_lockup_blocks_for_maintenance);
    }
    if (object.update_global_price_interval !== undefined && object.update_global_price_interval !== null) {
      message.updateGlobalPriceInterval = Long.fromString(object.update_global_price_interval);
    }
    if (object.update_price_disallowed_days !== undefined && object.update_price_disallowed_days !== null) {
      message.updatePriceDisallowedDays = object.update_price_disallowed_days;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.deposit_denom = message.depositDenom;
    obj.min_deposit = message.minDeposit;
    obj.secondary_sp_store_price_ratio = message.secondarySpStorePriceRatio;
    obj.num_of_historical_blocks_for_maintenance_records = message.numOfHistoricalBlocksForMaintenanceRecords ? message.numOfHistoricalBlocksForMaintenanceRecords.toString() : undefined;
    obj.maintenance_duration_quota = message.maintenanceDurationQuota ? message.maintenanceDurationQuota.toString() : undefined;
    obj.num_of_lockup_blocks_for_maintenance = message.numOfLockupBlocksForMaintenance ? message.numOfLockupBlocksForMaintenance.toString() : undefined;
    obj.update_global_price_interval = message.updateGlobalPriceInterval ? message.updateGlobalPriceInterval.toString() : undefined;
    obj.update_price_disallowed_days = message.updatePriceDisallowedDays;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/greenfield.sp.Params",
      value: Params.encode(message).finish()
    };
  }
};