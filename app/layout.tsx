"use client";

import type { Metadata } from "next";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Ethereum, Polygon } from "@thirdweb-dev/chains";
import {
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  safeWallet,
} from "@thirdweb-dev/react";

// Create .env file and Replace with your own client id (From thirdweb API KEY)
const clientId = process.env.CLIENT_ID;

export const metadata: Metadata = {
  title: "App router x thirdweb",
  description:
    "How to start a web 3 app with thirdweb and the new Next.js App Router",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThirdwebProvider
      activeChain="polygon"
      clientId={clientId}
      supportedWallets={[
        metamaskWallet(),
        coinbaseWallet(),
        walletConnect(),
        safeWallet(),
      ]}
      supportedChains={[Ethereum, Polygon]}
      dAppMeta={{
        name: "App router x thirdweb",
        description:
          "How to start a web 3 app with thirdweb and the new Next.js App Router",
        isDarkMode: true,
        url: "https://example.com",
      }}
    >
      <html lang="en">
        <body>{children}</body>
      </html>
    </ThirdwebProvider>
  );
}
