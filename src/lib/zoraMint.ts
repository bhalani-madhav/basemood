import { encodeFunctionData, parseEther } from "viem";
import { ZORA_CONTRACT_ADDRESS } from "./constants";

// Zora ERC-1155 mint function ABI
const MINT_ABI = [
  {
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
  },
] as const;

export interface MintParams {
  userAddress: `0x${string}`;
  tokenId: number;
  quantity?: number;
}

export const prepareMintTransaction = ({ 
  userAddress, 
  tokenId, 
  quantity = 1 
}: MintParams) => {
  const data = encodeFunctionData({
    abi: MINT_ABI,
    functionName: "mint",
    args: [
      userAddress,
      BigInt(tokenId),
      BigInt(quantity),
      "0x" as `0x${string}`, // empty minter arguments
    ],
  });

  return {
    to: ZORA_CONTRACT_ADDRESS,
    data,
    value: parseEther("0"), // Free mint
  };
};
