# 🎭 BaseMood

Track your mood onchain with NFTs on Base. A Web3 mini app built with Next.js, Coinbase OnchainKit, and Zora Protocol.

![BaseMood](https://img.shields.io/badge/Base-Network-0052FF?style=for-the-badge&logo=ethereum)
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## ✨ Features

### Phase 1 (Current)
- 🎨 **5 Mood Options**: Happy, Neutral, Sad, Angry, Excited
- 🔗 **Onchain NFTs**: Each mood mints a unique ERC-1155 NFT via Zora
- 💰 **Gasless Transactions**: Powered by Coinbase Smart Wallet
- 🎮 **Cyberpunk UI**: Neon-themed, Web3-native design
- 📱 **Base Wallet Ready**: Works seamlessly in Base Wallet mini app

### Phase 2 (Coming Soon)
- 📊 **Streak Tracking**: Daily mood logging with streak counters
- 🏆 **Milestone Rewards**: Special NFTs at 7, 30, 50, 100 day streaks
- 📈 **Analytics Dashboard**: Mood trends and insights
- 🔵 **Farcaster Integration**: Share moods on Warpcast
- 💾 **Persistent Storage**: Supabase/Tableland backend

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Coinbase Wallet or Base Wallet

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/basemood.git
cd basemood

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Blockchain**: Base (Ethereum L2)
- **Wallet**: Coinbase Smart Wallet (gasless)
- **NFT Protocol**: Zora ERC-1155
- **Styling**: TailwindCSS + Custom Cyberpunk Theme
- **Web3 Libraries**: Wagmi v2, Viem, OnchainKit

## 📦 Project Structure

```
basemood/
├── src/
│   ├── app/
│   │   ├── app.tsx           # Main app component
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Home page
│   │   ├── providers.tsx     # Web3 providers
│   │   └── globals.css       # Cyberpunk theme styles
│   ├── components/
│   │   ├── MoodSelector.tsx  # Main mood selection UI
│   │   ├── MoodSuccess.tsx   # Success state component
│   │   └── WalletButton.tsx  # Wallet connection button
│   └── lib/
│       ├── constants.ts      # App configuration
│       ├── moodStorage.ts    # LocalStorage utilities
│       └── zoraMint.ts       # NFT minting logic
├── DEPLOYMENT.md             # Deployment guide
└── PHASE1_PLAN.md           # Implementation plan
```

## 🎨 Mood → NFT Mapping

| Mood | Emoji | Token ID | Color |
|------|-------|----------|-------|
| Happy | 😄 | 1 | Neon Green |
| Neutral | 😐 | 2 | Cyan |
| Sad | 😢 | 3 | Purple |
| Angry | 😡 | 4 | Pink |
| Excited | 🤩 | 5 | Yellow |

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_URL='http://localhost:3000'
NEXT_PUBLIC_ZORA_CONTRACT_ADDRESS='0xYourContractAddress'
NEXT_PUBLIC_USE_WALLET="true"
```

### Network Configuration

**Currently configured for Base Sepolia Testnet (Chain ID: 84532)**

This is perfect for testing without spending real ETH!

### Zora Contract Setup

1. Deploy a Zora ERC-1155 contract on Base Sepolia
2. Create 5 tokens (one for each mood)
3. Update `NEXT_PUBLIC_ZORA_CONTRACT_ADDRESS`

See [BASE_SEPOLIA_SETUP.md](./BASE_SEPOLIA_SETUP.md) for testnet setup guide.
See [DEPLOYMENT.md](./DEPLOYMENT.md) for mainnet deployment instructions.

## 🚢 Deployment

Deploy to Vercel in one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/basemood)

Or follow the [Deployment Guide](./DEPLOYMENT.md) for detailed instructions.

## 🧪 Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [Base](https://base.org) - Ethereum L2 network
- [Zora](https://zora.co) - NFT protocol
- [Coinbase](https://www.coinbase.com) - Smart Wallet & OnchainKit
- [Vercel](https://vercel.com) - Deployment platform

## 📞 Support

- **Documentation**: See [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Issues**: [GitHub Issues](https://github.com/yourusername/basemood/issues)
- **Base Docs**: [docs.base.org](https://docs.base.org)
- **Zora Docs**: [docs.zora.co](https://docs.zora.co)

---

**Phase 1 Complete ✅ — Streaks Coming Soon**

Built with 💙 on Base
