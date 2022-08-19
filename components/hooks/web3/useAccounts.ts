import useSWR from "swr";
import { CryptoHookFactory } from "../../../types/hooks";

// deps -> provider, ethereum, contract (web3State)
export const hookFactory: CryptoHookFactory = (deps) => (params) => {
    const res = useSWR("web3/useAccount", () => {
        console.log(deps);
        console.log(params);
        return "test user"
    })
    return res
}

export const useAccount = hookFactory({ethereum: undefined, provider: undefined})