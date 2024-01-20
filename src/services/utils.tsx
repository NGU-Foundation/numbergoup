import { NetworkId, ONE_ALPH } from "@alephium/web3"
import { loadDeployments } from "artifacts/ts/deployments"

//* Interfaces

export interface BurnToken {
  network: NetworkId
  groupIndex: number
  contractAddress: string
  contractId: string
  tokenId: string
}

export interface SwapTemplate {
  network: NetworkId
  groupIndex: number
  contractAddress: string           // Contract Addy
  contractId: string                // Contract Collects Fees
}

export interface Swap {
  network: NetworkId
  groupIndex: number
  contractAddress: string           // Contract Addy
  contractId: string                // Contract Collects Fees
}

export interface SubscribeConfig {
  network: NetworkId
  groupIndex: number
  subscribeAddress: string               
  subscribeID: string                                                           // ID of the contract
  nguID: string
}

export function getNetwork(): NetworkId {
  const network = (process.env.NEXT_PUBLIC_NETWORK ?? 'mainnet') as NetworkId
  return network
}

export function getBackendUrl(): string {
  return process.env.NEXT_PUBLIC_BACKEND_URL ?? 'http://127.0.0.1:3019'
}

export function getMongoUrl(): string {
  return process.env.MONGO_URL ?? 'mongodb://localhost:27017'
}

function getPollingInterval(): number {
  const network = getNetwork()
  return network === 'testnet' ? 1000 : 100000
}

function getTokenBurnConfig(): BurnToken {
  const network = getNetwork()
  const groupIndex = 0
  const burnContract = loadDeployments(network).contracts.BurnToken.contractInstance
  const contractAddress = burnContract.address
  const contractId = burnContract.contractId
  const tokenId = "df3008f43a7cc1d4a37eef71bf581fc4b9c3be4e2d58ed6d1df483bbb83bd200"     // NGU TOKEN
  return {network, groupIndex, contractAddress, contractId, tokenId}
}

// Subscribe Config
function getSubscribeConfig(): SubscribeConfig {
  const network = getNetwork()
  const groupIndex = 0
  const subscribeContract = loadDeployments(network).contracts.Subscribe.contractInstance
  const subscribeAddress = subscribeContract.address
  const subscribeID = subscribeContract.contractId
  const nguID = "df3008f43a7cc1d4a37eef71bf581fc4b9c3be4e2d58ed6d1df483bbb83bd200"     // NGU TOKEN
  return { network, groupIndex, subscribeAddress, subscribeID, nguID }
}

// Swap Config
function getSwapCreateConfig(): Swap {
  const network = getNetwork()
  const groupIndex = 0
  //const swapCreateContract = loadDeployments(network).contracts.Createswap.contractInstance
  const contractAddress = "yu8PMB2yjLgkev6CCpW9xqeaS6f6rxM8XBA4EaSSoM1H"
  const contractId = "4d6905422c3fbb6e404d8ac1af9564098e6c00eff888a1f1fddc6e9960932900"
  return { network, groupIndex, contractAddress, contractId}
}

// SwapTemplate Config
function getSwapConfig(): SwapTemplate {
  const network = getNetwork()
  const groupIndex = 0
  //const swapCreateContract = loadDeployments(network).contracts.Createswap.contractInstance
  const contractAddress = "27PPU1hff2k1e6zRBkzthreo968bNpAAbKv2RiicjUr8F"
  const contractId = "bca824a657e7e7802b88468ab05ec6add6ace29043762ca05217c514406de600"
  return { network, groupIndex, contractAddress, contractId}
}

// Exports
export const TokenBurnConfig = getTokenBurnConfig()
export const SubscribeConfig = getSubscribeConfig()
export const SwapCreateConfig = getSwapCreateConfig()
export const SwapConfig = getSwapConfig()
