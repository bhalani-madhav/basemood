# BaseMood - Vercel Deployment Guide

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **GitHub Repository**: Push your code to GitHub
3. **Zora Contract**: Deploy or use existing Zora ERC-1155 contract on Base

## Quick Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Configure the project:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`

4. Add Environment Variables:
   ```
   NEXT_PUBLIC_URL=https://your-app.vercel.app
   NEXT_PUBLIC_ZORA_CONTRACT_ADDRESS=0xYourZoraContractAddress
   NEXT_PUBLIC_USE_WALLET=true
   ```

5. Click **Deploy**

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Environment Variables Setup

After deployment, configure these environment variables in Vercel Dashboard:

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_URL` | Your deployed app URL | `https://basemood.vercel.app` |
| `NEXT_PUBLIC_ZORA_CONTRACT_ADDRESS` | Zora ERC-1155 contract address on Base | `0x1234...` |
| `NEXT_PUBLIC_USE_WALLET` | Enable wallet features | `true` |

### Optional Variables (Phase 2)

| Variable | Description |
|----------|-------------|
| `NEYNAR_API_KEY` | For Farcaster integration |
| `NEYNAR_CLIENT_ID` | For Farcaster notifications |
| `KV_REST_API_TOKEN` | Redis/Vercel KV token |
| `KV_REST_API_URL` | Redis/Vercel KV URL |

## Zora Contract Setup

### Option 1: Use Existing Zora Contract

If you have an existing Zora ERC-1155 contract on Base:
1. Copy the contract address
2. Update `NEXT_PUBLIC_ZORA_CONTRACT_ADDRESS` in Vercel

### Option 2: Deploy New Zora Contract

1. Go to [zora.co/create](https://zora.co/create)
2. Create a new ERC-1155 collection on Base
3. Create 5 tokens (one for each mood)
4. Copy the contract address
5. Update environment variable

### Token ID Mapping

Ensure your Zora contract has these token IDs:
- Token ID 1: Happy 😄
- Token ID 2: Neutral 😐
- Token ID 3: Sad 😢
- Token ID 4: Angry 😡
- Token ID 5: Excited 🤩

## Post-Deployment Steps

### 1. Update Contract Address

After deploying your Zora contract:
```bash
# Update environment variable in Vercel
vercel env add NEXT_PUBLIC_ZORA_CONTRACT_ADDRESS production
# Enter your contract address when prompted
```

### 2. Test the App

1. Open your deployed URL
2. Connect Coinbase Smart Wallet
3. Select a mood
4. Confirm the transaction (should be gasless)
5. Verify NFT mint on [BaseScan](https://basescan.org)

### 3. Configure Base Wallet Mini App (Optional)

To make BaseMood available in Base Wallet:

1. Go to Base Wallet Developer Portal
2. Register your app with:
   - **Name**: BaseMood
   - **URL**: Your Vercel deployment URL
   - **Description**: Track your mood onchain with NFTs
   - **Icon**: Upload your app icon

## Troubleshooting

### Build Errors

If you encounter build errors:
```bash
# Clear cache and rebuild locally
rm -rf .next node_modules
npm install
npm run build
```

### Wallet Connection Issues

- Ensure `NEXT_PUBLIC_USE_WALLET=true`
- Check that Base network (Chain ID 8453) is configured
- Verify Coinbase Wallet connector is enabled

### Transaction Failures

- Verify contract address is correct
- Check that token IDs exist in your Zora contract
- Ensure user is on Base network
- Check BaseScan for transaction details

## Monitoring

### Vercel Analytics

Enable Vercel Analytics in your dashboard to track:
- Page views
- User interactions
- Performance metrics

### Transaction Monitoring

Monitor your contract on:
- [BaseScan](https://basescan.org)
- [Zora Dashboard](https://zora.co)

## Updating the App

```bash
# Make changes locally
git add .
git commit -m "Update BaseMood"
git push origin main

# Vercel will automatically deploy
```

## Custom Domain (Optional)

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. Update `NEXT_PUBLIC_URL` environment variable

## Support

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Zora Docs**: [docs.zora.co](https://docs.zora.co)
- **Base Docs**: [docs.base.org](https://docs.base.org)

---

## Phase 1 Complete ✅

Your BaseMood app is now deployed and ready to use!

**Next Steps (Phase 2)**:
- Add Supabase/Tableland for persistent storage
- Implement streak tracking
- Add milestone reward NFTs
- Build analytics dashboard
- Integrate Farcaster/Warpcast
