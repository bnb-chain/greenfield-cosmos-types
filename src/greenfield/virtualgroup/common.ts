//@ts-nocheck
/* eslint-disable */
export const protobufPackage = "greenfield.virtualgroup";
/** PickVGFStrategy represents the method for selecting the best global virtual group family based on the strategy */
export enum PickVGFStrategy {
  Strategy_Maximize_Free_Store_Size = 0,
  UNRECOGNIZED = -1,
}
export const PickVGFStrategySDKType = PickVGFStrategy;
export const PickVGFStrategyAmino = PickVGFStrategy;
export function pickVGFStrategyFromJSON(object: any): PickVGFStrategy {
  switch (object) {
    case 0:
    case "Strategy_Maximize_Free_Store_Size":
      return PickVGFStrategy.Strategy_Maximize_Free_Store_Size;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PickVGFStrategy.UNRECOGNIZED;
  }
}
export function pickVGFStrategyToJSON(object: PickVGFStrategy): string {
  switch (object) {
    case PickVGFStrategy.Strategy_Maximize_Free_Store_Size:
      return "Strategy_Maximize_Free_Store_Size";
    case PickVGFStrategy.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}