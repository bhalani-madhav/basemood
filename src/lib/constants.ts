export const APP_URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';
export const APP_NAME = "BaseMood";
export const APP_DESCRIPTION = "Track your mood onchain with NFTs on Base";
export const APP_PRIMARY_CATEGORY = process.env.NEXT_PUBLIC_FRAME_PRIMARY_CATEGORY;
export const APP_TAGS = process.env.NEXT_PUBLIC_FRAME_TAGS?.split(',');
export const APP_ICON_URL = `${APP_URL}/icon.png`;
export const APP_OG_IMAGE_URL = `${APP_URL}/api/opengraph-image`;
export const APP_SPLASH_URL = `${APP_URL}/splash.png`;
export const APP_SPLASH_BACKGROUND_COLOR = "#0a0a0a";
export const APP_BUTTON_TEXT = process.env.NEXT_PUBLIC_FRAME_BUTTON_TEXT;
export const APP_WEBHOOK_URL = process.env.NEYNAR_API_KEY && process.env.NEYNAR_CLIENT_ID 
    ? `https://api.neynar.com/f/app/${process.env.NEYNAR_CLIENT_ID}/event`
    : `${APP_URL}/api/webhook`;
export const USE_WALLET = process.env.NEXT_PUBLIC_USE_WALLET === 'true';

// BaseMood Configuration
export const BASE_CHAIN_ID = 84532; // Base Sepolia Testnet

// Zora ERC-1155 Contract (can be updated via environment variable)
export const ZORA_CONTRACT_ADDRESS = (
  process.env.NEXT_PUBLIC_ZORA_CONTRACT_ADDRESS || 
  "0x0000000000000000000000000000000000000000"
) as `0x${string}`;

// Mood to Token ID mapping
export const MOODS = {
  HAPPY: { emoji: "😄", label: "Happy", tokenId: 1, color: "#00ff88" },
  NEUTRAL: { emoji: "😐", label: "Neutral", tokenId: 2, color: "#00d4ff" },
  SAD: { emoji: "😢", label: "Sad", tokenId: 3, color: "#8b5cf6" },
  ANGRY: { emoji: "😡", label: "Angry", tokenId: 4, color: "#ff0055" },
  EXCITED: { emoji: "🤩", label: "Excited", tokenId: 5, color: "#ffaa00" },
} as const;

export type MoodType = keyof typeof MOODS;
