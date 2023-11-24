import { ethers } from "ethers";
import { UnisWapV3Pool_ABI } from "./arbitrageBot/ABIs/UnisWapV3PoolABI";
import { ERC20_ABI } from "./arbitrageBot/ABIs/ERC20ABI";

require("dotenv").config();

export const PORT = process.env.PORT! || 8080;

export const RPC_NODE = process.env.RPC_NODE!;

export const USDC_EURO3_POOL_ADDRESS = process.env.USDC_EURO3_POOL_ADDRESS!;
export const USDC_ADDRESS = process.env.USDC_ADDRESS!;
export const EURO3_ADDRESS = process.env.EURO3_ADDRESS!;

export const Provider = new ethers.JsonRpcProvider(RPC_NODE);

export const USDC_EURO3_PoolV3 = new ethers.Contract(
  USDC_EURO3_POOL_ADDRESS,
  UnisWapV3Pool_ABI,
  Provider
);

export const USDC = new ethers.Contract(USDC_ADDRESS, ERC20_ABI, Provider);
export const EURO3 = new ethers.Contract(EURO3_ADDRESS, ERC20_ABI, Provider);
