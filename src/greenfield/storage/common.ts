/* eslint-disable */
export const protobufPackage = "bnbchain.greenfield.storage";
export enum SourceType {
  SOURCE_TYPE_ORIGIN = 0,
  SOURCE_TYPE_BSC_CROSS_CHAIN = 1,
  UNRECOGNIZED = -1,
}
export function sourceTypeFromJSON(object: any): SourceType {
  switch (object) {
    case 0:
    case "SOURCE_TYPE_ORIGIN":
      return SourceType.SOURCE_TYPE_ORIGIN;

    case 1:
    case "SOURCE_TYPE_BSC_CROSS_CHAIN":
      return SourceType.SOURCE_TYPE_BSC_CROSS_CHAIN;

    case -1:
    case "UNRECOGNIZED":
    default:
      return SourceType.UNRECOGNIZED;
  }
}
export function sourceTypeToJSON(object: SourceType): string {
  switch (object) {
    case SourceType.SOURCE_TYPE_ORIGIN:
      return "SOURCE_TYPE_ORIGIN";

    case SourceType.SOURCE_TYPE_BSC_CROSS_CHAIN:
      return "SOURCE_TYPE_BSC_CROSS_CHAIN";

    case SourceType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}