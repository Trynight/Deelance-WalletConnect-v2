import { createContext } from "react";

const UserContext = createContext({
    provider: null,
    account: null,
    contracts: {},
    connectError: "",
    connectWallet: null,
    disconnectWallet: null
})

export default UserContext;