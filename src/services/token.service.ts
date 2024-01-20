
import { DUST_AMOUNT, ExecutableScript, ExecuteScriptResult, SignerProvider, contractIdFromAddress } from '@alephium/web3'
import { Topup, Sendout, Destroy, Buildtoken, Gettoken, Editfee, Destroytoken, Burn, Deposit, Destroyburn, Subdestroy, Updatedevfee, Withdrawdev, Withdrawplatform, Destroycreate } from '../../artifacts/ts/scripts'
import { TokenBurnConfig, SubscribeConfig } from './utils'
import { BurnToken, Faucet } from 'artifacts/ts'
import * as web3 from '@alephium/web3'

//? Token Burn Services
export const BurnTokenContract = async (
  signerProvider: SignerProvider,
  amount: string,
): Promise<ExecuteScriptResult> => {
  return await Burn.execute(signerProvider, {
    initialFields: {
      contract: TokenBurnConfig.contractId,
      amount: BigInt(amount),
    },
    attoAlphAmount: DUST_AMOUNT,
    tokens: [{id: TokenBurnConfig.tokenId, amount: amount}]
  })
}

export const DestroyBurnContract = async (
  signerProvider: SignerProvider
): Promise<ExecuteScriptResult> => {
  return await Destroyburn.execute(signerProvider, {
    initialFields: {
      contract: TokenBurnConfig.contractId
    },
    attoAlphAmount: DUST_AMOUNT
  })
}
//? End of Burn Services

//? Subscription Services
export const SubscribeContract = async (
  signerProvider: SignerProvider,
  discord: string,
): Promise<ExecuteScriptResult> => {
  return await Deposit.execute(signerProvider, {
    initialFields: {
      contract: SubscribeConfig.subscribeID,
      discordname: web3.stringToHex(discord) 
    },
    attoAlphAmount: DUST_AMOUNT,
    tokens: [{id: SubscribeConfig.nguID, amount: 7770000000n }] // - add zero mainnet
  })
}

export const SubscribeDestroyContract = async (
  signerProvider: SignerProvider
): Promise<ExecuteScriptResult> => {
  return await Subdestroy.execute(signerProvider, {
    initialFields: {
      contract: SubscribeConfig.subscribeID
    },
    attoAlphAmount: DUST_AMOUNT
  })
}

export const SubscribeUpdateDevFeeContract = async (
  signerProvider: SignerProvider,
  amount: string,
): Promise<ExecuteScriptResult> => {
  return await Updatedevfee.execute(signerProvider, {
    initialFields: {
      contract: SubscribeConfig.subscribeID,
      newfee: BigInt(amount) 
    },
    attoAlphAmount: DUST_AMOUNT
  })
}

export const SubscribeWithdrawDevContract = async (
  signerProvider: SignerProvider
): Promise<ExecuteScriptResult> => {
  return await Withdrawdev.execute(signerProvider, {
    initialFields: {
      contract: SubscribeConfig.subscribeID
    },
    attoAlphAmount: DUST_AMOUNT
  })
}

export const SubscribeWithdrawPlatformContract = async (
  signerProvider: SignerProvider
): Promise<ExecuteScriptResult> => {
  return await Withdrawplatform.execute(signerProvider, {
    initialFields: {
      contract: SubscribeConfig.subscribeID 
    },
    attoAlphAmount: DUST_AMOUNT
  })
}

/*
export const DestroyTokenCreate = async (
  signerProvider: SignerProvider
): Promise<ExecuteScriptResult> => {
  return await Destroytoken.execute(signerProvider, {
    initialFields: {
      contract: "bb696eaaede2429066c053ca9c5a8d767eb8817a868e40035b4f25884ae76400"
    },
    attoAlphAmount: DUST_AMOUNT
  })
}
*/

//? End of Subscription Services





