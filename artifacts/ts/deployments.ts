/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { RunScriptResult, DeployContractExecutionResult } from "@alephium/cli";
import { NetworkId } from "@alephium/web3";
import {
  Subscribe,
  SubscribeInstance,
  BurnToken,
  BurnTokenInstance,
  Swap,
  SwapInstance,
} from ".";
import { default as mainnetDeployments } from "../.deployments.mainnet.json";
import { default as testnetDeployments } from "../.deployments.testnet.json";

export type Deployments = {
  deployerAddress: string;
  contracts: {
    Subscribe: DeployContractExecutionResult<SubscribeInstance>;
    BurnToken: DeployContractExecutionResult<BurnTokenInstance>;
    Swap?: DeployContractExecutionResult<SwapInstance>;
  };
};

function toDeployments(json: any): Deployments {
  const contracts = {
    Subscribe: {
      ...json.contracts["Subscribe"],
      contractInstance: Subscribe.at(
        json.contracts["Subscribe"].contractInstance.address
      ),
    },
    BurnToken: {
      ...json.contracts["BurnToken"],
      contractInstance: BurnToken.at(
        json.contracts["BurnToken"].contractInstance.address
      ),
    },
    Swap:
      json.contracts["Swap"] === undefined
        ? undefined
        : {
            ...json.contracts["Swap"],
            contractInstance: Swap.at(
              json.contracts["Swap"].contractInstance.address
            ),
          },
  };
  return {
    ...json,
    contracts: contracts as Deployments["contracts"],
  };
}

export function loadDeployments(
  networkId: NetworkId,
  deployerAddress?: string
): Deployments {
  const deployments =
    networkId === "mainnet"
      ? mainnetDeployments
      : networkId === "testnet"
      ? testnetDeployments
      : undefined;
  if (deployments === undefined) {
    throw Error("The contract has not been deployed to the " + networkId);
  }
  const allDeployments = Array.isArray(deployments)
    ? deployments
    : [deployments];
  if (deployerAddress === undefined) {
    if (allDeployments.length > 1) {
      throw Error(
        "The contract has been deployed multiple times on " +
          networkId +
          ", please specify the deployer address"
      );
    } else {
      return toDeployments(allDeployments[0]);
    }
  }
  const result = allDeployments.find(
    (d) => d.deployerAddress === deployerAddress
  );
  if (result === undefined) {
    throw Error("The contract deployment result does not exist");
  }
  return toDeployments(result);
}