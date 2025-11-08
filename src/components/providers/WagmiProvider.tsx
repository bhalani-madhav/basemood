import { createConfig, http } from "wagmi";
import { baseSepolia, mainnet, optimism } from "wagmi/chains";
import { coinbaseWallet, metaMask } from "wagmi/connectors";
import { farcasterFrame } from "@farcaster/frame-wagmi-connector";
import { APP_NAME, APP_URL, APP_ICON_URL } from "~/lib/constants";

export const config = createConfig({
  chains: [baseSepolia, mainnet, optimism],
  transports: {
    [baseSepolia.id]: http(),
    [mainnet.id]: http(),
    [optimism.id]: http(),
  },
  connectors: [
    farcasterFrame(),
    coinbaseWallet({
      appName: APP_NAME,
      appLogoUrl: APP_ICON_URL,
      preference: "all",
    }),
    metaMask({
      dappMetadata: {
        name: APP_NAME,
        url: APP_URL,
      },
    }),
  ],
});
