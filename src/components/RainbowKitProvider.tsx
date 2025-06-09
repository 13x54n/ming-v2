'use client'

// wagmi imports
import '@rainbow-me/rainbowkit/styles.css';
import {
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';

import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import { config } from '@/lib/config';

const queryClient = new QueryClient();
export const RainbowKit = ({}) => {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider>
                    {/* Your App */}
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
};