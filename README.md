# Smart contracts workshop

![](header.png)

## Getting started

In this workshop every participant will deploy a smart contract on Goerli Testnet and perform some basic tests on a local envorinment using HardHat framework :construction_worker: with some common knowledge of the Ethereum network (or EVM in general) and JS

## Prerequisites

- The recommended Development IDE for HardHat is
  VSCode make sure you have it first: https://code.visualstudio.com/download

- Set up HardHat environemnt using [that guide](https://hardhat.org/tutorial/setting-up-the-environment)

- [hh shorthand installation](https://hardhat.org/hardhat-runner/docs/guides/command-line-completion)

- Create a new MetaMask account from which you'll deploy the contracts

## Setting up the environment

- All the required libraries are already on package.json, in order to init the project, type:

```shell
  npm install
```

- Setting up Infura key:

  - follow Step 1 + 2 on the following [link](https://docs.infura.io/infura/getting-started) </br>
    On step 2 create 'Web3 API' Project
  - Enter your API Key in [.env](.env) file as the `PROVIDER_KEY`

- Setting up Etherscan API:

  Veryfying contracts manually on Etherscan can sometimes be really annoying, luckily we can use HardHat for that purpose

  - Create an Etherscan account following that [link](https://docs.etherscan.io/getting-started/creating-an-account)
  - get an API key using that [link](https://docs.etherscan.io/getting-started/viewing-api-usage-statistics)
  - Enter your API Key in [.env](.env) file as the `ETHERSCAN_KEY`

- Setting up Deployer account private key:

  - Create a new MetaMask account and call it 'Deployer'
  - Copy the account's private key to [.env](.env) file as the `DEPLOY_WALLET_PRIVATE_KEY` [link](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-export-an-account-s-private-key)

## Tests

## Deployment
