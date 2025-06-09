import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    sepolia,
} from 'wagmi/chains';

export const config = getDefaultConfig({
    chains: [
        mainnet,
        polygon,
        optimism,
        arbitrum,
        base,
        sepolia, // Add any other chains you want to support
    ],
    appName: "Ming Open Web HQ",
    projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || "",
    ssr: true,
});