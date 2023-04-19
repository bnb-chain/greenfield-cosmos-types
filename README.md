# Greenfield Cosmos Types

JavaScript and TypeScript types relating to Protocol Buffers used by [Greenfield JS SDK](https://github.com/bnb-chain/greenfield-js-sdk/) and Cosmos-SDK and other related projects.

> This section needs to cooperate with [greenfield-js-sdk](https://github.com/bnb-chain/greenfield-js-sdk).

## Getting Started

```bash
# Update protobuf files
git submodule init
git submodule update

# Install dependencies
pnpm install
```

## Build Types

```bash
# Generate .ts files into ./src
npm run codegen

# Build .js/.d.js files
npm run build
```

## Build EIP712 domain structor

```bash
npm run convert
```
