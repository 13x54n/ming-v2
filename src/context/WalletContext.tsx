"use client"

import React, {
    createContext,
    useReducer,
    Dispatch,
    ReactNode,
    useContext,
} from "react"

type WalletState = {
    isConnected: boolean
    address: string | null
    balance: number
}

type WalletAction =
    | { type: "connect"; address: string; balance: number }
    | { type: "disconnect" }
    | { type: "updateBalance"; balance: number }

const initialWalletState: WalletState = {
    isConnected: false,
    address: null,
    balance: 0,
}

const WalletContext = createContext<WalletState | undefined>(undefined)
const WalletDispatchContext = createContext<Dispatch<WalletAction> | undefined>(
    undefined
)

function walletReducer(state: WalletState, action: WalletAction): WalletState {
    switch (action.type) {
        case "connect":
            return {
                ...state,
                isConnected: true,
                address: action.address,
                balance: action.balance,
            }
        case "disconnect":
            return {
                ...state,
                isConnected: false,
                address: null,
                balance: 0,
            }
        case "updateBalance":
            return {
                ...state,
                balance: action.balance,
            }
        default:
            throw new Error("Unknown action")
    }
}

export const WalletProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(walletReducer, initialWalletState)

    return (
        <WalletContext.Provider value={state}>
            <WalletDispatchContext.Provider value={dispatch}>
                {children}
            </WalletDispatchContext.Provider>
        </WalletContext.Provider>
    )
}

// ✅ Hooks for using context in children
export const useWallet = () => {
    const context = useContext(WalletContext)
    if (!context) throw new Error("useWallet must be used within WalletProvider")
    return context
}

export const useWalletDispatch = () => {
    const context = useContext(WalletDispatchContext)
    if (!context)
        throw new Error("useWalletDispatch must be used within WalletProvider")
    return context
}