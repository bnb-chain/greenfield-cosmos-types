//@ts-nocheck
/* eslint-disable */
import { FileDescriptorProto, FileDescriptorProtoSDKType } from "../../../google/protobuf/descriptor";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Exact, Rpc } from "../../../helpers";
export const protobufPackage = "cosmos.reflection.v1";
/** FileDescriptorsRequest is the Query/FileDescriptors request type. */
export interface FileDescriptorsRequest {}
export interface FileDescriptorsRequestProtoMsg {
  typeUrl: "/cosmos.reflection.v1.FileDescriptorsRequest";
  value: Uint8Array;
}
/** FileDescriptorsRequest is the Query/FileDescriptors request type. */
export interface FileDescriptorsRequestSDKType {}
/** FileDescriptorsResponse is the Query/FileDescriptors response type. */
export interface FileDescriptorsResponse {
  /** files is the file descriptors. */
  files: FileDescriptorProto[];
}
export interface FileDescriptorsResponseProtoMsg {
  typeUrl: "/cosmos.reflection.v1.FileDescriptorsResponse";
  value: Uint8Array;
}
/** FileDescriptorsResponse is the Query/FileDescriptors response type. */
export interface FileDescriptorsResponseSDKType {
  files: FileDescriptorProtoSDKType[];
}
function createBaseFileDescriptorsRequest(): FileDescriptorsRequest {
  return {};
}
export const FileDescriptorsRequest = {
  typeUrl: "/cosmos.reflection.v1.FileDescriptorsRequest",
  encode(_: FileDescriptorsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): FileDescriptorsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileDescriptorsRequest();
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
  fromJSON(_: any): FileDescriptorsRequest {
    return {};
  },
  toJSON(_: FileDescriptorsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<FileDescriptorsRequest>, I>>(_: I): FileDescriptorsRequest {
    const message = createBaseFileDescriptorsRequest();
    return message;
  },
  fromSDK(_: FileDescriptorsRequestSDKType): FileDescriptorsRequest {
    return {};
  },
  toSDK(_: FileDescriptorsRequest): FileDescriptorsRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: FileDescriptorsRequestAmino): FileDescriptorsRequest {
    const message = createBaseFileDescriptorsRequest();
    return message;
  },
  toAmino(_: FileDescriptorsRequest): FileDescriptorsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: FileDescriptorsRequestAminoMsg): FileDescriptorsRequest {
    return FileDescriptorsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: FileDescriptorsRequest): FileDescriptorsRequestAminoMsg {
    return {
      type: "cosmos-sdk/FileDescriptorsRequest",
      value: FileDescriptorsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: FileDescriptorsRequestProtoMsg): FileDescriptorsRequest {
    return FileDescriptorsRequest.decode(message.value);
  },
  toProto(message: FileDescriptorsRequest): Uint8Array {
    return FileDescriptorsRequest.encode(message).finish();
  },
  toProtoMsg(message: FileDescriptorsRequest): FileDescriptorsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.reflection.v1.FileDescriptorsRequest",
      value: FileDescriptorsRequest.encode(message).finish()
    };
  }
};
function createBaseFileDescriptorsResponse(): FileDescriptorsResponse {
  return {
    files: []
  };
}
export const FileDescriptorsResponse = {
  typeUrl: "/cosmos.reflection.v1.FileDescriptorsResponse",
  encode(message: FileDescriptorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.files) {
      FileDescriptorProto.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): FileDescriptorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileDescriptorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.files.push(FileDescriptorProto.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FileDescriptorsResponse {
    return {
      files: Array.isArray(object?.files) ? object.files.map((e: any) => FileDescriptorProto.fromJSON(e)) : []
    };
  },
  toJSON(message: FileDescriptorsResponse): unknown {
    const obj: any = {};
    if (message.files) {
      obj.files = message.files.map(e => e ? FileDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.files = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<FileDescriptorsResponse>, I>>(object: I): FileDescriptorsResponse {
    const message = createBaseFileDescriptorsResponse();
    message.files = object.files?.map(e => FileDescriptorProto.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: FileDescriptorsResponseSDKType): FileDescriptorsResponse {
    return {
      files: Array.isArray(object?.files) ? object.files.map((e: any) => FileDescriptorProto.fromSDK(e)) : []
    };
  },
  toSDK(message: FileDescriptorsResponse): FileDescriptorsResponseSDKType {
    const obj: any = {};
    if (message.files) {
      obj.files = message.files.map(e => e ? FileDescriptorProto.toSDK(e) : undefined);
    } else {
      obj.files = [];
    }
    return obj;
  },
  fromAmino(object: FileDescriptorsResponseAmino): FileDescriptorsResponse {
    const message = createBaseFileDescriptorsResponse();
    message.files = object.files?.map(e => FileDescriptorProto.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: FileDescriptorsResponse): FileDescriptorsResponseAmino {
    const obj: any = {};
    if (message.files) {
      obj.files = message.files.map(e => e ? FileDescriptorProto.toAmino(e) : undefined);
    } else {
      obj.files = [];
    }
    return obj;
  },
  fromAminoMsg(object: FileDescriptorsResponseAminoMsg): FileDescriptorsResponse {
    return FileDescriptorsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: FileDescriptorsResponse): FileDescriptorsResponseAminoMsg {
    return {
      type: "cosmos-sdk/FileDescriptorsResponse",
      value: FileDescriptorsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: FileDescriptorsResponseProtoMsg): FileDescriptorsResponse {
    return FileDescriptorsResponse.decode(message.value);
  },
  toProto(message: FileDescriptorsResponse): Uint8Array {
    return FileDescriptorsResponse.encode(message).finish();
  },
  toProtoMsg(message: FileDescriptorsResponse): FileDescriptorsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.reflection.v1.FileDescriptorsResponse",
      value: FileDescriptorsResponse.encode(message).finish()
    };
  }
};
/** Package cosmos.reflection.v1 provides support for inspecting protobuf
 file descriptors. */
export interface ReflectionService {
  /**
   * FileDescriptors queries all the file descriptors in the app in order
   * to enable easier generation of dynamic clients.
   */
  FileDescriptors(request?: FileDescriptorsRequest): Promise<FileDescriptorsResponse>;
}
export class ReflectionServiceClientImpl implements ReflectionService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.FileDescriptors = this.FileDescriptors.bind(this);
  }
  FileDescriptors(request: FileDescriptorsRequest = {}): Promise<FileDescriptorsResponse> {
    const data = FileDescriptorsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.reflection.v1.ReflectionService", "FileDescriptors", data);
    return promise.then(data => FileDescriptorsResponse.decode(new _m0.Reader(data)));
  }
}