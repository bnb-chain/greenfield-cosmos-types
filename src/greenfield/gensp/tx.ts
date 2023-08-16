//@ts-nocheck
/* eslint-disable */
import { Rpc } from "../../helpers";
export const protobufPackage = "greenfield.gensp";
/** Msg defines the Msg service. */

export interface Msg {}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }

}