# Smart contracts workshop

![](header.png)

## Getting started

In this workshop every participant will deploy a smart contract on Goerli Testnet and perform some basic tests on a local envorinment using HardHat framework :construction_worker: with some common knowledge of the Ethereum network (or EVM in general) and JS

## Prerequisites

- The recommended Development IDE for HardHat is
  VSCode make sure you have it first: https://code.visualstudio.com/download

- Set up HardHat environemnt using [that guide](https://hardhat.org/tutorial/setting-up-the-environment)

  you might need to enter:

  ```shell
  export NVM_DIR="$HOME/.nvm" [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
  ```

  - Make sure to install HardHat extension for VSCode

- hh shorthand [installation](https://hardhat.org/hardhat-runner/docs/guides/command-line-completion)

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

  - Create a **NEW** MetaMask account and call it 'Deployer' - [guide](https://metamask.zendesk.com/hc/en-us/articles/360015289452-How-to-create-an-additional-account-in-your-wallet)
  - Copy your Deployer account address to the [following doc](https://docs.google.com/document/d/1UhV1ry83E6eavRE_mw7cVpUVN1wQ7MEUUEug0o4VBQw/edit) in a new line
  - Copy your Deployer account private key to [.env](.env) file as the `DEPLOY_WALLET_PRIVATE_KEY` - [guide](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-export-an-account-s-private-key)

- Check that everythink works:
  SOON

## Solidity Basics

- [Common variables types](https://docs.soliditylang.org/en/v0.8.17/types.html)
- [Globally available variables](https://docs.soliditylang.org/en/v0.8.17/units-and-global-variables.html)
- [Function types](https://docs.soliditylang.org/en/v0.8.17/cheatsheet.html?highlight=visibility#function-visibility-specifiers)
- Constructor
- Modifiers (onlyOwner)

## Tests

- Intro to HardHat testing
- Using hardhat.sol in order to debug a contract dynamically
- Write your first NFT contract
- Test it using HardHat


## Deployment

- Deploy a contract to a live Testnet
- Verify your contract on Etherscan using HardHat
- Interact with your contract using a script
- Change a state parameter on your contract using a script

## Additional resources

- [Solidity Cheatsheet](https://docs.soliditylang.org/en/latest/cheatsheet.html)
- [CryptoZombies](https://cryptozombies.io/en/course/)
- [Solidity By Example](https://solidity-by-example.org/)
