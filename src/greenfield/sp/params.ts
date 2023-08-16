/* eslint-disable */
import { Long, isSet, DeepPartial, Exact } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
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
}
/** Params defines the parameters for the module. */

export interface ParamsSDKType {
  deposit_denom: string;
  min_deposit: string;
  secondary_sp_store_price_ratio: string;
  num_of_historical_blocks_for_maintenance_records: Long;
  maintenance_duration_quota: Long;
  num_of_lockup_blocks_for_maintenance: Long;
}

function createBaseParams(): Params {
  return {
    depositDenom: "",
    minDeposit: "",
    secondarySpStorePriceRatio: "",
    numOfHistoricalBlocksForMaintenanceRecords: Long.ZERO,
    maintenanceDurationQuota: Long.ZERO,
    numOfLockupBlocksForMaintenance: Long.ZERO
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositDenom !== "") {
      writer.uint32(10).string(message.depositDenom);
    }

    if (message.minDeposit !== "") {
      writer.uint32(18).string(message.minDeposit);
    }

    if (message.secondarySpStorePriceRatio !== "") {
      writer.uint32(26).string(message.secondarySpStorePriceRatio);
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
          message.secondarySpStorePriceRatio = reader.string();
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
      numOfLockupBlocksForMaintenance: isSet(object.numOfLockupBlocksForMaintenance) ? Long.fromValue(object.numOfLockupBlocksForMaintenance) : Long.ZERO
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
    return message;
  },

  fromSDK(object: ParamsSDKType): Params {
    return {
      depositDenom: object?.deposit_denom,
      minDeposit: object?.min_deposit,
      secondarySpStorePriceRatio: object?.secondary_sp_store_price_ratio,
      numOfHistoricalBlocksForMaintenanceRecords: object?.num_of_historical_blocks_for_maintenance_records,
      maintenanceDurationQuota: object?.maintenance_duration_quota,
      numOfLockupBlocksForMaintenance: object?.num_of_lockup_blocks_for_maintenance
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
    return obj;
  }

};