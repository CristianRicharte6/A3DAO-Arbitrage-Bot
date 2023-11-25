import { ethers } from "ethers";
import { UnisWapV3Pool_ABI } from "./ABIs/UnisWapV3PoolABI";
import { UniswapV3Router_ABI } from "./ABIs/UniswapV3RouterABI";
import { ERC20_ABI } from "./ABIs/ERC20ABI";
require("dotenv").config();

export const PORT = process.env.PORT! || 8080;
export const DEPEG_DIFERENCE = process.env.DEPEG_DIFERENCE!;
export const AMOUNT_TO_SWAP = process.env.AMOUNT_TO_SWAP!;

// End points & Api Keys
export const RPC_NODE = process.env.RPC_NODE!;
export const EXCHANGERATE_APIKEY = process.env.EXCHANGERATE_APIKEY!;

// Smart contract Addresses
export const USDC_EURO3_POOL_ADDRESS = process.env.USDC_EURO3_POOL_ADDRESS!;
export const USDC_ADDRESS = process.env.USDC_ADDRESS!;
export const EURO3_ADDRESS = process.env.EURO3_ADDRESS!;
export const UNISWAPV3_ROUTER_ADDRESS = process.env.UNISWAPV3_ROUTER_ADDRESS!;

// Private key signer
export const SIGNER_PRIVATE_KEY = process.env.SIGNER_PRIVATE_KEY!;

export const Provider = new ethers.JsonRpcProvider(RPC_NODE);
export const Signer = new ethers.Wallet(SIGNER_PRIVATE_KEY, Provider);

// ERC20
export const USDC = new ethers.Contract(USDC_ADDRESS, ERC20_ABI, Signer);
export const EURO3 = new ethers.Contract(EURO3_ADDRESS, ERC20_ABI, Signer);

// UniSwap v3
export const UniswapV3Router = new ethers.Contract(
  UNISWAPV3_ROUTER_ADDRESS,
  UniswapV3Router_ABI,
  Signer
);
export const USDC_EURO3_PoolV3 = new ethers.Contract(
  USDC_EURO3_POOL_ADDRESS,
  UnisWapV3Pool_ABI,
  Signer
);
