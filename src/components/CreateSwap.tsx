// Component `Burn.tsx`
import React from 'react'
import { FC, useState } from 'react'
import styles from '../styles/Home.module.css'

// Alephium imports
import { BurnTokenContract } from '@/services/token.service'
import { TxStatus } from './TxStatus'
import { node } from '@alephium/web3'
import { SubscribeConfig, TokenBurnConfig } from '../services/utils'
import { useWallet } from '@alephium/web3-react'

export const SwapCreateAutomation: FC<{
  config: SubscribeConfig
}> = ({ config }) => {
  const { signer, account } = useWallet()
  const addressGroup = config.groupIndex
  const [ongoingTxId, setOngoingTxId] = useState<string>()

  // Token Variables
  const [tokeno, setTokeno] = useState<string>()
  const [tokenoAmt, setTokenoAmt] = useState('')
  const [tokenw, setTokenw] = useState<string>()

  // Handle of Subscription
  const handleBurn = async (e: React.FormEvent) => {
    e.preventDefault()
    if (signer) {
        console.log("You have selected " + tokeno + " .")
      //const tokenBurnValue = BigInt(Number(tokenburn) * 1e7).toString();
      //const result = await BurnTokenContract(signer, tokenBurnValue)
      //setOngoingTxId(result.txId)
    }
  }

  // Gets the TX and updates according to status on chain
  const txStatusCallback = (status: node.TxStatus, numberOfChecks: number): Promise<any> => {
    if ((status.type === 'Confirmed' && numberOfChecks > 2) || (status.type === 'TxNotFound' && numberOfChecks > 3)) {
      setOngoingTxId(undefined)
    }

    return Promise.resolve()
  } 

  console.log('ongoing..', ongoingTxId)

  // Form submit to insert values and receive input
  return (
    <>
      <br/>
      <style>
        @import url(&apos;https://fonts.googleapis.com/css2?family=Tektur&display=swap&apos;);
      </style>
      <div style={{color: 'black'}} >
        <form onSubmit={handleBurn} style={{alignContent: 'center', textAlign: 'center'}}>
          <>
            <h2 className={styles.title} style={{color: 'white', textAlign: 'center'}}> Alephium Swap Creation {/*({config.network})*/}</h2>
            {/*<p>PublicKey: {context.account?.publicKey ?? '???'}</p>*/}
            <label htmlFor="burnOption" style={{color: 'white', textAlign: 'center'}}>What token will you trade?</label>
            <h2 style={{color: 'white', textAlign: 'center'}}> They get? </h2>
            <br/>
            <select
                id="burnOption"
                name="burnOption"
                value={tokeno}
                onChange={(e) => setTokeno(e.target.value)}
            >
                <option value="option1">AYIN</option>
                <option value="option2">PACA</option>
            {/* Add more options as needed */}
            </select>
            {/* Dropdown ends here */}
            <br/>
            <br/>
            <label htmlFor="burnOption" style={{color: 'white', textAlign: 'center'}}>How many of that token?</label>
            <br/>
            <br/>
            <input
                className={styles.inputToken}
                type="number"
                id="burn"
                name="burn"
                value={tokenoAmt}
                onChange={(e) => setTokenoAmt(e.target.value)}
            />
            <br/>
            <br/>
            <h2 style={{color: 'white', textAlign: 'center'}}> You get? </h2>
            <br/>
            <select
                id="burnOption"
                name="burnOption"
                value={tokeno}
                onChange={(e) => setTokeno(e.target.value)}
            >
                <option value="option1">AYIN</option>
                <option value="option2">PACA</option>
            {/* Add more options as needed */}
            </select>
            {/* Dropdown ends here */}
            <br/>
            <br/>
            <label htmlFor="burnOption" style={{color: 'white', textAlign: 'center'}}>How many of that token?</label>
            <br/>
            <br/>
            <input
                className={styles.inputToken}
                type="number"
                id="burn"
                name="burn"
                value={tokenoAmt}
                onChange={(e) => setTokenoAmt(e.target.value)}
            />
            <br/>
            <br/>
            <input className={styles.buttonDapp} type="submit" disabled={!!ongoingTxId} value="Create Swap" />
          </>
        </form>
      </div>

      <br/>

      <div style={{color: 'white'}}>
        {ongoingTxId && <TxStatus txId={ongoingTxId} txStatusCallback={txStatusCallback} />}
      </div>

      <br/>
    </>
  )
}
