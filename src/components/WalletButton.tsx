"use client";

import { useAccount, useConnect, useDisconnect } from "wagmi";
import { useEffect, useState } from "react";

export default function WalletButton() {
  const { address, isConnected, connector } = useAccount();
  const { connect, connectors, isPending } = useConnect();
  const { disconnect } = useDisconnect();
  const [showConnectors, setShowConnectors] = useState(false);

  // Auto-connect Coinbase Wallet if in Coinbase Wallet browser
  useEffect(() => {
    if (isConnected) return;
    
    const timer = setTimeout(() => {
      if (typeof window !== "undefined" && window.ethereum?.isCoinbaseWallet) {
        const coinbaseConnector = connectors.find(c => c.id === "coinbaseWalletSDK");
        if (coinbaseConnector) {
          try {
            connect({ connector: coinbaseConnector });
          } catch (error) {
            // Silently fail if user rejects
          }
        }
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [isConnected, connect, connectors]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setShowConnectors(false);
    if (showConnectors) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [showConnectors]);

  if (isConnected && address) {
    return (
      <div className="flex items-center gap-3">
        <div className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold glow-purple">
          <span className="text-xs opacity-75 mr-2">{connector?.name}</span>
          {address.slice(0, 6)}...{address.slice(-4)}
        </div>
        <button
          onClick={() => disconnect()}
          className="px-4 py-3 rounded-lg bg-red-600/20 border border-red-500 text-red-400 font-semibold hover:bg-red-600/30 transition-all"
        >
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={(e) => {
          e.stopPropagation();
          setShowConnectors(!showConnectors);
        }}
        disabled={isPending}
        className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:opacity-80 transition-all glow-cyan disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending ? "Connecting..." : "Connect Wallet"}
      </button>

      {/* Connector Dropdown */}
      {showConnectors && !isPending && (
        <div className="absolute top-full mt-2 right-0 w-64 bg-card border-2 border-border rounded-lg shadow-xl z-50 overflow-hidden">
          {connectors.map((connector) => (
            <button
              key={connector.id}
              onClick={() => {
                connect({ connector });
                setShowConnectors(false);
              }}
              className="w-full px-4 py-3 text-left hover:bg-accent/10 transition-colors border-b border-border last:border-b-0 flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold">
                {connector.name[0]}
              </div>
              <div>
                <div className="font-semibold text-foreground">{connector.name}</div>
                <div className="text-xs text-muted-foreground">
                  {connector.id === "coinbaseWalletSDK" && "Recommended for gasless"}
                  {connector.id === "farcasterFrame" && "For Farcaster users"}
                  {connector.id === "metaMaskSDK" && "Browser extension"}
                </div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
