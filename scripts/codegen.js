#!/usr/bin/env node

const { join } = require('path');
const { writeFileSync } = require('fs');
const telescope = require('@cosmology/telescope').default;

const outPath = join(__dirname, '/../src');

telescope({
    protoDirs: [
      "greenfield/proto",
      "greenfield-cosmos-sdk/proto",
      "third_party/proto",
    ],
    outPath: outPath,
    options: {
        logLevel: 0,
        tsDisable: {
            disableAll: true,
        },
        eslintDisable: {
            disableAll: true
        },
        bundle: {
            enabled: false
        },
        prototypes: {
            includePackageVar: true,
            excluded: {
                protos: [
                    'cosmos/authz/v1beta1/event.proto',
                    'cosmos/autocli/v1/query.proto',
                    'cosmos/autocli/v1/options.proto',
                    'cosmos/base/reflection/v2alpha1/reflection.proto',
                    'cosmos/crypto/secp256r1/keys.proto',
                    'ibc/core/port/v1/query.proto',
                    'ibc/lightclients/solomachine/v2/solomachine.proto',
                    'tendermint/libs/bits/types.proto',
                    'google/api/httpbody.proto',
                    'tendermint/blockchain/types.proto',
                    'tendermint/consensus/types.proto',
                    'tendermint/consensus/wal.proto',
                    'tendermint/mempool/types.proto',
                    'tendermint/p2p/conn.proto',
                    'tendermint/p2p/pex.proto',
                    'tendermint/privval/types.proto',
                    'tendermint/rpc/grpc/types.proto',
                    'tendermint/state/types.proto',
                    'tendermint/statesync/types.proto',
                    'tendermint/store/types.proto',
                    'tendermint/types/canonical.proto',
                    'tendermint/types/events.proto',
                ]
            },
            useOptionalNullable: true,
            fieldDefaultIsOptional: true,
            methods: {
                fromJSON: true,
                toJSON: true,
                fromSDK: true,
                toSDK: true,
            },
            typingsFormat: {
                useDeepPartial: true,
                useExact: true,
                timestamp: 'timestamp',
                duration: 'duration',
                num64: "long"
            },
        },
        lcdClients: {
            enabled: false
        },
        rpcClients: {
            enabled: true,
            inline: true,
            extensions: false,
            camelCase: false,
            enabledServices: [
                'Msg',
                'Query',
                'Service',
                'ReflectionService',
                'ABCIApplication'
            ]
        },
        aminoEncoding: {
            enabled: true
        },
        interfaces: {
            useUnionTypes: true,
        }
    }
}).then(() => {
    // Create index.ts
    const index_ts = `
    // Auto-generated, see scripts/codegen.js!

    // Exports we want to provide at the root of the "cosmjs-types" package

    export { DeepPartial, Exact } from "./helpers";
    `;
    writeFileSync(`${outPath}/index.ts`, index_ts);

    console.log('✨ All Done!');
}, (e) => {
    console.error(e);
    process.exit(1);
});
