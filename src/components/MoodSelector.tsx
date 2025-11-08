"use client";

import { useState } from "react";
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { MOODS, MoodType, BASE_CHAIN_ID, ZORA_CONTRACT_ADDRESS } from "~/lib/constants";
import { saveMood } from "~/lib/moodStorage";
import WalletButton from "./WalletButton";
import MoodSuccess from "./MoodSuccess";

const MINT_ABI = [{
  inputs: [
    { name: "minter", type: "address" },
    { name: "tokenId", type: "uint256" },
    { name: "quantity", type: "uint256" },
    { name: "minterArguments", type: "bytes" },
  ],
  name: "mint",
  outputs: [],
  stateMutability: "payable",
  type: "function",
}] as const;

export default function MoodSelector() {
  const { address, isConnected, chain } = useAccount();
  const { writeContract, data: hash, isPending, error } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });
  
  const [selectedMood, setSelectedMood] = useState<MoodType | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleMoodSelect = async (mood: MoodType) => {
    if (!address || !isConnected) {
      alert("Please connect your wallet first");
      return;
    }

    if (chain?.id !== BASE_CHAIN_ID) {
      alert("Please switch to Base Sepolia testnet");
      return;
    }

    setSelectedMood(mood);
    
    try {
      writeContract({
        address: ZORA_CONTRACT_ADDRESS,
        abi: MINT_ABI,
        functionName: "mint",
        args: [address, BigInt(MOODS[mood].tokenId), BigInt(1), "0x"],
        value: BigInt(0),
      });
    } catch (err) {
      console.error("Mint error:", err);
      alert("Failed to mint mood NFT");
      setSelectedMood(null);
    }
  };

  // Handle successful transaction
  if (isSuccess && selectedMood && !showSuccess) {
    saveMood(selectedMood, hash);
    setShowSuccess(true);
  }

  const handleReset = () => {
    setShowSuccess(false);
    setSelectedMood(null);
  };

  if (showSuccess && selectedMood) {
    return <MoodSuccess mood={selectedMood} txHash={hash} onReset={handleReset} />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="max-w-2xl w-full space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-glow">
            BaseMood
          </h1>
          <p className="text-xl text-gray-300">
            Track your mood onchain with NFTs
          </p>
        </div>

        {/* Wallet Connection */}
        <div className="flex justify-center">
          <WalletButton />
        </div>

        {/* Mood Selection */}
        {isConnected && (
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-center text-foreground">
              How are you feeling today?
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {Object.entries(MOODS).map(([key, mood]) => (
                <button
                  key={key}
                  onClick={() => handleMoodSelect(key as MoodType)}
                  disabled={isPending || isConfirming}
                  className="group relative p-8 rounded-2xl bg-card border-2 border-border hover:border-opacity-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    borderColor: mood.color,
                    boxShadow: `0 0 20px ${mood.color}40`,
                  }}
                >
                  <div className="flex flex-col items-center space-y-3">
                    <span 
                      className="text-6xl transition-transform group-hover:scale-110"
                      style={{
                        filter: `drop-shadow(0 0 10px ${mood.color})`,
                      }}
                    >
                      {mood.emoji}
                    </span>
                    <span 
                      className="text-lg font-semibold"
                      style={{ color: mood.color }}
                    >
                      {mood.label}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Loading State */}
            {(isPending || isConfirming) && selectedMood && (
              <div className="text-center space-y-4 p-6 rounded-lg bg-card border border-border">
                <div className="animate-spin w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full mx-auto" />
                <p className="text-lg text-gray-300">
                  {isPending && "Confirm transaction in your wallet..."}
                  {isConfirming && "Minting your mood NFT..."}
                </p>
              </div>
            )}

            {/* Error State */}
            {error && (
              <div className="text-center p-4 rounded-lg bg-destructive/10 border border-destructive">
                <p className="text-destructive">
                  Error: {error.message}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Info Footer */}
        {!isConnected && (
          <div className="text-center text-sm text-muted-foreground space-y-2">
            <p>Connect your wallet to get started</p>
            <p className="text-xs">✨ Testing on Base Sepolia Testnet</p>
          </div>
        )}
      </div>
    </div>
  );
}
