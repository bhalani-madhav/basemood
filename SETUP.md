# BaseMood - Quick Setup Guide

## Phase 1 Complete! ✅

Your BaseMood app is ready to run. Here's how to get started:

## Prerequisites

1. **Node.js 18+** installed
2. **Coinbase Developer Account** for OnchainKit API key
3. **Zora Contract** on Base network (or use placeholder for testing)

## Step 1: Install Dependencies

Already done! ✅ Dependencies installed:
- `@coinbase/onchainkit` - Wallet & transaction components
- `@tanstack/react-query` - Data fetching
- `wagmi` & `viem` - Web3 libraries

## Step 2: Configure Zora Contract (Optional for Testing)

The app currently uses a placeholder contract address. To use a real contract:

1. Deploy or use existing Zora ERC-1155 contract on Base
2. Update `.env.local`:
   ```
   NEXT_PUBLIC_ZORA_CONTRACT_ADDRESS=0xYourContractAddress
   ```

### Mood → Token ID Mapping
Make sure your contract has these token IDs:
- Token ID 1: Happy 😄
- Token ID 2: Neutral 😐
- Token ID 3: Sad 😢
- Token ID 4: Angry 😡
- Token ID 5: Excited 🤩

## Step 3: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Step 4: Test the App

1. **Connect Wallet**: Click "Connect Wallet" button
   - Use Coinbase Smart Wallet for gasless transactions
   - Make sure you're on Base network

2. **Select Mood**: Click any mood emoji

3. **Mint NFT**: Confirm the transaction
   - Should be gasless with Smart Wallet
   - Wait for confirmation

4. **Success**: See your mood logged!

## Features Implemented

### ✅ Phase 1 Complete
- [x] Cyberpunk UI theme with neon colors
- [x] 5 mood emoji buttons
- [x] Coinbase Smart Wallet integration
- [x] OnchainKit wallet components
- [x] Gasless transactions (via Smart Wallet)
- [x] Zora ERC-1155 mint integration
- [x] Success state with transaction hash
- [x] LocalStorage mood tracking
- [x] Responsive design

### 🔜 Phase 2 (Coming Soon)
- [ ] Supabase/Tableland backend
- [ ] Streak tracking
- [ ] Milestone reward NFTs
- [ ] Analytics dashboard
- [ ] Farcaster integration

## Project Structure

```
basemood/
├── src/
│   ├── app/
│   │   ├── app.tsx              # Main app entry
│   │   ├── layout.tsx           # Root layout
│   │   ├── page.tsx             # Home page
│   │   ├── providers.tsx        # OnchainKit + Wagmi providers
│   │   └── globals.css          # Cyberpunk theme
│   ├── components/
│   │   ├── MoodSelector.tsx     # Main mood UI
│   │   ├── MoodSuccess.tsx      # Success screen
│   │   ├── WalletButton.tsx     # OnchainKit wallet button
│   │   └── providers/
│   │       └── WagmiProvider.tsx # Wagmi config
│   └── lib/
│       ├── constants.ts         # App config & mood mapping
│       ├── moodStorage.ts       # LocalStorage utils
│       └── zoraMint.ts          # Mint transaction helpers
```

## Troubleshooting

### "Please connect your wallet first"
- Make sure you clicked the Connect Wallet button
- Check that Coinbase Wallet extension is installed

### "Please switch to Base network"
- Your wallet needs to be on Base (Chain ID: 8453)
- Coinbase Smart Wallet should auto-switch

### Transaction Fails
- Verify contract address is correct
- Check that token IDs exist in your Zora contract
- Ensure you're using Coinbase Smart Wallet for gasless txs

### Wallet Won't Connect
- Try refreshing the page
- Clear browser cache
- Make sure you have the latest Coinbase Wallet

## Next Steps

### Ready to Deploy?
See [DEPLOYMENT.md](./DEPLOYMENT.md) for Vercel deployment instructions.

### Want to Add Phase 2 Features?
Let me know when you're ready to implement:
- Persistent storage with Supabase
- Streak tracking logic
- Milestone reward NFTs
- Analytics dashboard
- Farcaster integration

## Support

- **OnchainKit Docs**: [onchainkit.xyz](https://onchainkit.xyz)
- **Base Docs**: [docs.base.org](https://docs.base.org)
- **Zora Docs**: [docs.zora.co](https://docs.zora.co)
- **Wagmi Docs**: [wagmi.sh](https://wagmi.sh)

---

**Built with 💙 on Base**

Phase 1 Complete ✅ — Ready for testing!
