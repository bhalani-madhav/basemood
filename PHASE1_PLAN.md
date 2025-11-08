# BaseMood - Phase 1 Implementation Plan

## Overview
Building a Base Mini App for mood tracking with NFT minting on Base network using Zora ERC-1155 contracts.

## Phase 1 Goals
- ✅ Mood selection UI (5 emoji buttons)
- ✅ Coinbase Smart Wallet integration (gasless)
- ✅ Zora ERC-1155 NFT minting
- ✅ Success state display
- ✅ Local storage for mood tracking
- ✅ Cyberpunk/Web3 themed UI

## Tech Stack
- Next.js 15 (App Router)
- React 19
- Wagmi v2 + Viem
- Coinbase Smart Wallet (gasless transactions)
- Zora Protocol (ERC-1155)
- TailwindCSS (cyberpunk theme)

## Implementation Steps

### 1. Update Dependencies
- Add @coinbase/onchainkit
- Ensure wagmi/viem are configured for Base network

### 2. Update Constants
- Add Base network config
- Add Zora contract placeholder address
- Add mood-to-tokenId mapping

### 3. Create Components
- `MoodSelector.tsx` - Main mood selection UI with 5 emojis
- `WalletButton.tsx` - Coinbase Smart Wallet connect button
- `MoodSuccess.tsx` - Success state after minting

### 4. Create Utils
- `zoraMint.ts` - Handle ERC-1155 mint transactions
- `moodStorage.ts` - LocalStorage helpers

### 5. Update Styling
- Cyberpunk theme with neon colors
- Glowing effects, gradients
- Dark mode optimized

### 6. Update Main App
- Replace Demo component with BaseMood app
- Integrate wallet connection
- Wire up mood selection → mint flow

## Mood → Token ID Mapping
- 😄 Happy → Token ID 1
- 😐 Neutral → Token ID 2
- 😢 Sad → Token ID 3
- 😡 Angry → Token ID 4
- 🤩 Excited → Token ID 5

## Contract Info
- Network: Base (Chain ID: 8453)
- Contract: Zora ERC-1155 (placeholder: 0x0000000000000000000000000000000000000000)
- Gas: Sponsored via Coinbase Smart Wallet

## Phase 2 (NOT YET)
- Supabase/Tableland storage
- Streak tracking
- Milestone reward NFTs
- Analytics dashboard
- Farcaster integration
