/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  ExecutableScript,
  ExecuteScriptParams,
  ExecuteScriptResult,
  Script,
  SignerProvider,
  HexString,
} from "@alephium/web3";
import { default as AuctionEndScriptJson } from "../auction/AuctionEnd.ral.json";
import { default as BidScriptJson } from "../auction/Bid.ral.json";
import { default as BuildtokenScriptJson } from "../createtoken/Buildtoken.ral.json";
import { default as BurnScriptJson } from "../burn/Burn.ral.json";
import { default as BuyvirlScriptJson } from "../ico/Buyvirl.ral.json";
import { default as CancelSwapScriptJson } from "../swaps/CancelSwap.ral.json";
import { default as ConfirmSwapScriptJson } from "../swaps/ConfirmSwap.ral.json";
import { default as CreateswapalphScriptJson } from "../swaps/Createswapalph.ral.json";
import { default as CreateswapnguScriptJson } from "../swaps/Createswapngu.ral.json";
import { default as CreateswappacaScriptJson } from "../swaps/Createswappaca.ral.json";
import { default as DepositScriptJson } from "../subscribe/Deposit.ral.json";
import { default as DestroyScriptJson } from "../faucet/Destroy.ral.json";
import { default as DestroyTokenSwapScriptJson } from "../swaps/DestroyTokenSwap.ral.json";
import { default as DestroyburnScriptJson } from "../burn/Destroyburn.ral.json";
import { default as DestroycreateScriptJson } from "../createtoken/Destroycreate.ral.json";
import { default as DestroytokenScriptJson } from "../createtoken/Destroytoken.ral.json";
import { default as EditfeeScriptJson } from "../scripts/Editfee.ral.json";
import { default as FeeAlphScriptJson } from "../swaps/FeeAlph.ral.json";
import { default as FeePacaScriptJson } from "../swaps/FeePaca.ral.json";
import { default as FeenguScriptJson } from "../swaps/Feengu.ral.json";
import { default as GettokenScriptJson } from "../scripts/Gettoken.ral.json";
import { default as ReedeemalphScriptJson } from "../ico/Reedeemalph.ral.json";
import { default as SellvirlScriptJson } from "../ico/Sellvirl.ral.json";
import { default as SendoutScriptJson } from "../faucet/Sendout.ral.json";
import { default as SubdestroyScriptJson } from "../subscribe/Subdestroy.ral.json";
import { default as TopupScriptJson } from "../faucet/Topup.ral.json";
import { default as UpdatedevfeeScriptJson } from "../subscribe/Updatedevfee.ral.json";
import { default as WithdrawScriptJson } from "../auction/Withdraw.ral.json";
import { default as WithdrawdevScriptJson } from "../subscribe/Withdrawdev.ral.json";
import { default as WithdrawlassetsScriptJson } from "../scripts/Withdrawlassets.ral.json";
import { default as WithdrawplatformScriptJson } from "../subscribe/Withdrawplatform.ral.json";

export const AuctionEnd = new ExecutableScript<{ auction: HexString }>(
  Script.fromJson(AuctionEndScriptJson)
);
export const Bid = new ExecutableScript<{ auction: HexString; amount: bigint }>(
  Script.fromJson(BidScriptJson)
);
export const Buildtoken = new ExecutableScript<{
  contract: HexString;
  symbol: HexString;
  name: HexString;
  decimals: bigint;
  tokenTotal: bigint;
}>(Script.fromJson(BuildtokenScriptJson));
export const Burn = new ExecutableScript<{
  contract: HexString;
  amount: bigint;
}>(Script.fromJson(BurnScriptJson));
export const Buyvirl = new ExecutableScript<{
  contract: HexString;
  amount: bigint;
}>(Script.fromJson(BuyvirlScriptJson));
export const CancelSwap = new ExecutableScript<{ contract: HexString }>(
  Script.fromJson(CancelSwapScriptJson)
);
export const ConfirmSwap = new ExecutableScript<{ contract: HexString }>(
  Script.fromJson(ConfirmSwapScriptJson)
);
export const Createswapalph = new ExecutableScript<{
  contract: HexString;
  tokenoffered: HexString;
  tokenofferedamt: bigint;
  tokenwanted: HexString;
  tokenwantedamt: bigint;
}>(Script.fromJson(CreateswapalphScriptJson));
export const Createswapngu = new ExecutableScript<{
  contract: HexString;
  tokenoffered: HexString;
  tokenofferedamt: bigint;
  tokenwanted: HexString;
  tokenwantedamt: bigint;
}>(Script.fromJson(CreateswapnguScriptJson));
export const Createswappaca = new ExecutableScript<{
  contract: HexString;
  tokenoffered: HexString;
  tokenofferedamt: bigint;
  tokenwanted: HexString;
  tokenwantedamt: bigint;
}>(Script.fromJson(CreateswappacaScriptJson));
export const Deposit = new ExecutableScript<{
  contract: HexString;
  discordname: HexString;
}>(Script.fromJson(DepositScriptJson));
export const Destroy = new ExecutableScript<{ contract: HexString }>(
  Script.fromJson(DestroyScriptJson)
);
export const DestroyTokenSwap = new ExecutableScript<{ contract: HexString }>(
  Script.fromJson(DestroyTokenSwapScriptJson)
);
export const Destroyburn = new ExecutableScript<{ contract: HexString }>(
  Script.fromJson(DestroyburnScriptJson)
);
export const Destroycreate = new ExecutableScript<{ contract: HexString }>(
  Script.fromJson(DestroycreateScriptJson)
);
export const Destroytoken = new ExecutableScript<{ contract: HexString }>(
  Script.fromJson(DestroytokenScriptJson)
);
export const Editfee = new ExecutableScript<{
  contract: HexString;
  edit: bigint;
}>(Script.fromJson(EditfeeScriptJson));
export const FeeAlph = new ExecutableScript<{
  contract: HexString;
  amount: bigint;
}>(Script.fromJson(FeeAlphScriptJson));
export const FeePaca = new ExecutableScript<{
  contract: HexString;
  amount: bigint;
}>(Script.fromJson(FeePacaScriptJson));
export const Feengu = new ExecutableScript<{
  contract: HexString;
  amount: bigint;
}>(Script.fromJson(FeenguScriptJson));
export const Gettoken = new ExecutableScript<{
  contract: HexString;
  amount: bigint;
}>(Script.fromJson(GettokenScriptJson));
export const Reedeemalph = new ExecutableScript<{
  contract: HexString;
  amount: bigint;
}>(Script.fromJson(ReedeemalphScriptJson));
export const Sellvirl = new ExecutableScript<{
  contract: HexString;
  amount: bigint;
}>(Script.fromJson(SellvirlScriptJson));
export const Sendout = new ExecutableScript<{
  contract: HexString;
  amount: bigint;
}>(Script.fromJson(SendoutScriptJson));
export const Subdestroy = new ExecutableScript<{ contract: HexString }>(
  Script.fromJson(SubdestroyScriptJson)
);
export const Topup = new ExecutableScript<{
  contract: HexString;
  amount: bigint;
}>(Script.fromJson(TopupScriptJson));
export const Updatedevfee = new ExecutableScript<{
  contract: HexString;
  newfee: bigint;
}>(Script.fromJson(UpdatedevfeeScriptJson));
export const Withdraw = new ExecutableScript<{ auction: HexString }>(
  Script.fromJson(WithdrawScriptJson)
);
export const Withdrawdev = new ExecutableScript<{ contract: HexString }>(
  Script.fromJson(WithdrawdevScriptJson)
);
export const Withdrawlassets = new ExecutableScript<{ contract: HexString }>(
  Script.fromJson(WithdrawlassetsScriptJson)
);
export const Withdrawplatform = new ExecutableScript<{ contract: HexString }>(
  Script.fromJson(WithdrawplatformScriptJson)
);
