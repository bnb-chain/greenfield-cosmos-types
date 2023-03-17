/* eslint-disable */
export const protobufPackage = "bnbchain.greenfield.resource";
export enum ResourceType {
  RESOURCE_TYPE_BUCKET = 0,
  RESOURCE_TYPE_OBJECT = 1,
  RESOURCE_TYPE_GROUP = 2,
  UNRECOGNIZED = -1,
}
export const ResourceTypeSDKType = ResourceType;
export function resourceTypeFromJSON(object: any): ResourceType {
  switch (object) {
    case 0:
    case "RESOURCE_TYPE_BUCKET":
      return ResourceType.RESOURCE_TYPE_BUCKET;

    case 1:
    case "RESOURCE_TYPE_OBJECT":
      return ResourceType.RESOURCE_TYPE_OBJECT;

    case 2:
    case "RESOURCE_TYPE_GROUP":
      return ResourceType.RESOURCE_TYPE_GROUP;

    case -1:
    case "UNRECOGNIZED":
    default:
      return ResourceType.UNRECOGNIZED;
  }
}
export function resourceTypeToJSON(object: ResourceType): string {
  switch (object) {
    case ResourceType.RESOURCE_TYPE_BUCKET:
      return "RESOURCE_TYPE_BUCKET";

    case ResourceType.RESOURCE_TYPE_OBJECT:
      return "RESOURCE_TYPE_OBJECT";

    case ResourceType.RESOURCE_TYPE_GROUP:
      return "RESOURCE_TYPE_GROUP";

    case ResourceType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}