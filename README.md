![logo](https://assets.stratusagency.io/logo-large-black.svg)

⚠️ This repo is at its beginning, please wait for more actions to do with it.

# Deploy and Interact with Smart Contracts on Base L2

In this repo, we provide a sample of how to use Base and smart contract in testnets.

[Discover Base](https://base.org/)

## What We Use
- Hardhat
- TypeScript
- NPM

## Usage

1. Install depedencides with NPM:
```
npm i
```

2. Compile and get the ABI of the smart contract:
```
npx hardhat compile
```

3. Deploy the smart contract and mint a new token:
```
npx hardhat run scripts/deploy.ts --network base-goerli
```

🎉 Congrats, you discovered how to deploy and interact with a smart contract on Base!