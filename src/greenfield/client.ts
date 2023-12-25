//@ts-nocheck
/* eslint-disable */
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as greenfieldBridgeTxRegistry from "./bridge/tx.registry";
import * as greenfieldChallengeTxRegistry from "./challenge/tx.registry";
import * as greenfieldPaymentTxRegistry from "./payment/tx.registry";
import * as greenfieldPermissionTxRegistry from "./permission/tx.registry";
import * as greenfieldSpTxRegistry from "./sp/tx.registry";
import * as greenfieldStorageTxRegistry from "./storage/tx.registry";
import * as greenfieldVirtualgroupTxRegistry from "./virtualgroup/tx.registry";
import * as greenfieldBridgeTxAmino from "./bridge/tx.amino";
import * as greenfieldChallengeTxAmino from "./challenge/tx.amino";
import * as greenfieldPaymentTxAmino from "./payment/tx.amino";
import * as greenfieldPermissionTxAmino from "./permission/tx.amino";
import * as greenfieldSpTxAmino from "./sp/tx.amino";
import * as greenfieldStorageTxAmino from "./storage/tx.amino";
import * as greenfieldVirtualgroupTxAmino from "./virtualgroup/tx.amino";
export const greenfieldAminoConverters = {
  ...greenfieldBridgeTxAmino.AminoConverter,
  ...greenfieldChallengeTxAmino.AminoConverter,
  ...greenfieldPaymentTxAmino.AminoConverter,
  ...greenfieldPermissionTxAmino.AminoConverter,
  ...greenfieldSpTxAmino.AminoConverter,
  ...greenfieldStorageTxAmino.AminoConverter,
  ...greenfieldVirtualgroupTxAmino.AminoConverter
};
export const greenfieldProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...greenfieldBridgeTxRegistry.registry, ...greenfieldChallengeTxRegistry.registry, ...greenfieldPaymentTxRegistry.registry, ...greenfieldPermissionTxRegistry.registry, ...greenfieldSpTxRegistry.registry, ...greenfieldStorageTxRegistry.registry, ...greenfieldVirtualgroupTxRegistry.registry];
export const getSigningGreenfieldClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...greenfieldProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...greenfieldAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningGreenfieldClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningGreenfieldClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};