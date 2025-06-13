'use client'

// wagmi imports
import '@rainbow-me/rainbowkit/styles.css';
import {
    DisclaimerComponent,
    RainbowKitProvider,
    lightTheme,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';

import {
    QueryClientProvider,
    QueryClient,
} from "@tanstack/react-query";
import { config } from '@/lib/config';
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const queryClient = new QueryClient();

const Disclaimer: DisclaimerComponent = ({ Text, Link }) => (
  <Text>
    By connecting your wallet, you agree to the{' '}
    <Link href="/terms-and-conditions">Terms of Service</Link> and
    acknowledge you have read and understand the protocol.
  </Text>
);

export const RainbowKit = ({ children }: Props) => {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider modalSize="wide" theme={lightTheme({
                    accentColor: '#000000',
                    accentColorForeground: 'white',
                    borderRadius: 'medium',
                    fontStack: 'system',
                    overlayBlur: 'small',
                })} appInfo={{
                    appName: 'Ming Open Web HQ',
                    disclaimer: Disclaimer,
                    learnMoreUrl: 'https://learnaboutcryptowallets.example',
                }}>
                    {children}
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
};