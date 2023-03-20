# GreenField Cosmos Types

JavaScript and TypeScript types relating to Protocol Buffers used by Cosmos-SDK and other related projects.

> This section needs to cooperate with [greenfield-js-sdk](https://github.com/bnb-chain/gnfd-js-sdk).

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
