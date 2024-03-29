/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  Contract,
  ContractState,
  TestContractResult,
  HexString,
  ContractFactory,
  EventSubscribeOptions,
  EventSubscription,
  CallContractParams,
  CallContractResult,
  TestContractParams,
  ContractEvent,
  subscribeContractEvent,
  subscribeContractEvents,
  testMethod,
  callMethod,
  multicallMethods,
  fetchContractState,
  ContractInstance,
  getContractEventsCurrentCount,
} from "@alephium/web3";
import { default as SubscribeContractJson } from "../subscribe/Subscribe.ral.json";
import { getContractByCodeHash } from "./contracts";

// Custom types for the contract
export namespace SubscribeTypes {
  export type Fields = {
    subfee: bigint;
    platformfees: bigint;
    devfees: bigint;
    fee: bigint;
    dev: Address;
    lead: Address;
    token: HexString;
  };

  export type State = ContractState<Fields>;

  export type SubscribedEvent = ContractEvent<{
    addy: Address;
    who: HexString;
    when: bigint;
    devamt: bigint;
    platformfees: bigint;
  }>;
  export type WithdrawnguEvent = ContractEvent<{ when: bigint; amt: bigint }>;
  export type FeeupdateEvent = ContractEvent<{
    prevfee: bigint;
    newfee: bigint;
  }>;
  export type DestroysubEvent = ContractEvent<{ who: Address }>;

  export interface CallMethodTable {
    getToken: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    getSubFee: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    getDevFees: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    getPlatformFees: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
  }
  export type CallMethodParams<T extends keyof CallMethodTable> =
    CallMethodTable[T]["params"];
  export type CallMethodResult<T extends keyof CallMethodTable> =
    CallMethodTable[T]["result"];
  export type MultiCallParams = Partial<{
    [Name in keyof CallMethodTable]: CallMethodTable[Name]["params"];
  }>;
  export type MultiCallResults<T extends MultiCallParams> = {
    [MaybeName in keyof T]: MaybeName extends keyof CallMethodTable
      ? CallMethodTable[MaybeName]["result"]
      : undefined;
  };
}

class Factory extends ContractFactory<
  SubscribeInstance,
  SubscribeTypes.Fields
> {
  getInitialFieldsWithDefaultValues() {
    return this.contract.getInitialFieldsWithDefaultValues() as SubscribeTypes.Fields;
  }

  eventIndex = { Subscribed: 0, Withdrawngu: 1, Feeupdate: 2, Destroysub: 3 };
  consts = { Codes: { InvalidCaller: BigInt(1) } };

  at(address: string): SubscribeInstance {
    return new SubscribeInstance(address);
  }

  tests = {
    getToken: async (
      params: Omit<TestContractParams<SubscribeTypes.Fields, never>, "testArgs">
    ): Promise<TestContractResult<HexString>> => {
      return testMethod(this, "getToken", params);
    },
    getSubFee: async (
      params: Omit<TestContractParams<SubscribeTypes.Fields, never>, "testArgs">
    ): Promise<TestContractResult<bigint>> => {
      return testMethod(this, "getSubFee", params);
    },
    getDevFees: async (
      params: Omit<TestContractParams<SubscribeTypes.Fields, never>, "testArgs">
    ): Promise<TestContractResult<bigint>> => {
      return testMethod(this, "getDevFees", params);
    },
    getPlatformFees: async (
      params: Omit<TestContractParams<SubscribeTypes.Fields, never>, "testArgs">
    ): Promise<TestContractResult<bigint>> => {
      return testMethod(this, "getPlatformFees", params);
    },
    deposit: async (
      params: TestContractParams<
        SubscribeTypes.Fields,
        { discordname: HexString }
      >
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "deposit", params);
    },
    withdrawplatform: async (
      params: Omit<TestContractParams<SubscribeTypes.Fields, never>, "testArgs">
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "withdrawplatform", params);
    },
    withdrawdev: async (
      params: Omit<TestContractParams<SubscribeTypes.Fields, never>, "testArgs">
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "withdrawdev", params);
    },
    updatefee: async (
      params: TestContractParams<SubscribeTypes.Fields, { newfee: bigint }>
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "updatefee", params);
    },
    subdestroy: async (
      params: Omit<TestContractParams<SubscribeTypes.Fields, never>, "testArgs">
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "subdestroy", params);
    },
  };
}

// Use this object to test and deploy the contract
export const Subscribe = new Factory(
  Contract.fromJson(
    SubscribeContractJson,
    "",
    "d2df6369c3aa2161dfed0f5164d3940fd294067729d99586d5dea24f42ffbc65"
  )
);

// Use this class to interact with the blockchain
export class SubscribeInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<SubscribeTypes.State> {
    return fetchContractState(Subscribe, this);
  }

  async getContractEventsCurrentCount(): Promise<number> {
    return getContractEventsCurrentCount(this.address);
  }

  subscribeSubscribedEvent(
    options: EventSubscribeOptions<SubscribeTypes.SubscribedEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      Subscribe.contract,
      this,
      options,
      "Subscribed",
      fromCount
    );
  }

  subscribeWithdrawnguEvent(
    options: EventSubscribeOptions<SubscribeTypes.WithdrawnguEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      Subscribe.contract,
      this,
      options,
      "Withdrawngu",
      fromCount
    );
  }

  subscribeFeeupdateEvent(
    options: EventSubscribeOptions<SubscribeTypes.FeeupdateEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      Subscribe.contract,
      this,
      options,
      "Feeupdate",
      fromCount
    );
  }

  subscribeDestroysubEvent(
    options: EventSubscribeOptions<SubscribeTypes.DestroysubEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      Subscribe.contract,
      this,
      options,
      "Destroysub",
      fromCount
    );
  }

  subscribeAllEvents(
    options: EventSubscribeOptions<
      | SubscribeTypes.SubscribedEvent
      | SubscribeTypes.WithdrawnguEvent
      | SubscribeTypes.FeeupdateEvent
      | SubscribeTypes.DestroysubEvent
    >,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvents(
      Subscribe.contract,
      this,
      options,
      fromCount
    );
  }

  methods = {
    getToken: async (
      params?: SubscribeTypes.CallMethodParams<"getToken">
    ): Promise<SubscribeTypes.CallMethodResult<"getToken">> => {
      return callMethod(
        Subscribe,
        this,
        "getToken",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getSubFee: async (
      params?: SubscribeTypes.CallMethodParams<"getSubFee">
    ): Promise<SubscribeTypes.CallMethodResult<"getSubFee">> => {
      return callMethod(
        Subscribe,
        this,
        "getSubFee",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getDevFees: async (
      params?: SubscribeTypes.CallMethodParams<"getDevFees">
    ): Promise<SubscribeTypes.CallMethodResult<"getDevFees">> => {
      return callMethod(
        Subscribe,
        this,
        "getDevFees",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getPlatformFees: async (
      params?: SubscribeTypes.CallMethodParams<"getPlatformFees">
    ): Promise<SubscribeTypes.CallMethodResult<"getPlatformFees">> => {
      return callMethod(
        Subscribe,
        this,
        "getPlatformFees",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
  };

  async multicall<Calls extends SubscribeTypes.MultiCallParams>(
    calls: Calls
  ): Promise<SubscribeTypes.MultiCallResults<Calls>> {
    return (await multicallMethods(
      Subscribe,
      this,
      calls,
      getContractByCodeHash
    )) as SubscribeTypes.MultiCallResults<Calls>;
  }
}
