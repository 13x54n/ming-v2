import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import { metaMaskWallet } from '@rainbow-me/rainbowkit/wallets';

import { createConfig, http } from "wagmi";
import {
    // mainnet,
    // polygon,
    // optimism,
    // arbitrum,
    // base,
    sepolia,
} from 'wagmi/chains';

const connectors = connectorsForWallets(
    [
        {
            groupName: 'Recommended',
            wallets: [metaMaskWallet],
        },
    ],
    {
        appName: "Ming Open Web HQ",
        projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || "",
    }
);

export const config = createConfig({
    connectors,
    chains: [
        // mainnet,
        // polygon,
        // optimism,
        // arbitrum,
        // base,
        sepolia, // Add any other chains you want to support
    ],
    ssr: true,
    transports: {
        [sepolia.id]: http(`https://eth-sepolia.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`),
        // [mainnet.id]: http('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID'),
    }
});