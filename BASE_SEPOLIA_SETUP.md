# Base Sepolia Testnet Setup

## ✅ Configuration Updated

BaseMood is now configured to use **Base Sepolia Testnet** (Chain ID: 84532)

## Getting Started with Base Sepolia

### 1. Add Base Sepolia to Your Wallet

**Network Details:**
- **Network Name**: Base Sepolia
- **RPC URL**: https://sepolia.base.org
- **Chain ID**: 84532
- **Currency Symbol**: ETH
- **Block Explorer**: https://sepolia.basescan.org

Most wallets (Coinbase Wallet, MetaMask) will auto-add Base Sepolia when you try to connect.

### 2. Get Testnet ETH

You need testnet ETH to pay for gas (unless using Coinbase Smart Wallet for gasless):

**Option 1: Base Sepolia Faucet**
- Visit: https://www.coinbase.com/faucets/base-ethereum-sepolia-faucet
- Connect your wallet
- Request testnet ETH (free)

**Option 2: Sepolia ETH Bridge**
- Get Sepolia ETH from: https://sepoliafaucet.com
- Bridge to Base Sepolia using: https://bridge.base.org/deposit

### 3. Deploy or Use Zora Contract on Base Sepolia

For testing, you need a Zora ERC-1155 contract on Base Sepolia:

**Option A: Deploy New Contract**
1. Go to https://zora.co/create
2. Switch to Base Sepolia network
3. Create a new ERC-1155 collection
4. Create 5 tokens (one for each mood)
5. Copy the contract address

**Option B: Use Existing Test Contract**
If you have an existing Zora contract on Base Sepolia, just use that address.

**Update Contract Address:**
```bash
# In .env.local
NEXT_PUBLIC_ZORA_CONTRACT_ADDRESS=0xYourSepoliaContractAddress
```

### 4. Test the App

```bash
npm run dev
```

1. Open http://localhost:3000
2. Connect wallet (will auto-switch to Base Sepolia)
3. Select a mood
4. Confirm transaction
5. Check transaction on https://sepolia.basescan.org

## Benefits of Using Testnet

✅ **Free Testing** - No real ETH needed
✅ **Safe Environment** - Test without financial risk
✅ **Fast Iteration** - Quick testing cycles
✅ **Gasless with Smart Wallet** - Coinbase Smart Wallet still sponsors gas
✅ **Real Network Behavior** - Same as mainnet, just test tokens

## Switching to Mainnet Later

When ready for production, update:

1. **constants.ts**: Change `BASE_CHAIN_ID` to `8453`
2. **WagmiProvider.tsx**: Change `baseSepolia` to `base`
3. **Contract Address**: Update to mainnet Zora contract
4. **Test thoroughly** before going live!

## Troubleshooting

### "Wrong Network" Error
- Make sure your wallet is on Base Sepolia (Chain ID: 84532)
- Click "Switch Network" in your wallet

### "Insufficient Funds"
- Get testnet ETH from faucet (see step 2 above)
- Or use Coinbase Smart Wallet for gasless transactions

### Contract Not Found
- Verify contract address is correct
- Make sure contract is deployed on Base Sepolia (not mainnet)
- Check contract on https://sepolia.basescan.org

## Useful Links

- **Base Sepolia Explorer**: https://sepolia.basescan.org
- **Base Faucet**: https://www.coinbase.com/faucets/base-ethereum-sepolia-faucet
- **Zora Docs**: https://docs.zora.co
- **Base Docs**: https://docs.base.org

---

**Current Network: Base Sepolia Testnet (84532)** 🧪
