import JSBI from "jsbi";
import { ethers } from "ethers";
import { TickMath, FullMath, Tick } from "@uniswap/v3-sdk";
import {
  USDC_ADDRESS,
  EURO3_ADDRESS,
  Provider,
  USDC_EURO3_PoolV3,
  USDC,
  EURO3,
} from "../config";

// Transcript of getQuoteAtTick from OracleLibrary.sol (from Uniswap V3 periphery repository)
async function getExchangeRate(
  baseToken: string,
  quoteToken: string,
  inputAmount: number,
  currentTick: number, // Tick should be queried from the pool contract
  baseTokenDecimals: number,
  quoteTokenDecimals: number
) {
  const sqrtRatioX96 = TickMath.getSqrtRatioAtTick(currentTick);
  const ratioX192 = JSBI.multiply(sqrtRatioX96, sqrtRatioX96);
  const baseAmount = JSBI.BigInt(inputAmount * 10 ** baseTokenDecimals);
  const shift = JSBI.leftShift(JSBI.BigInt(1), JSBI.BigInt(192));
  const quoteAmount = FullMath.mulDivRoundingUp(ratioX192, baseAmount, shift);
  const quoteAmountString = quoteAmount.toString();
  const formatedPrice = Number(quoteAmountString) / 10 ** quoteTokenDecimals;

  return { baseToken, quoteToken, exchangeRate: formatedPrice };
}

// It will return how much is 1USD to EUR3
export async function USDCEUR3Price() {
  const slot0 = await USDC_EURO3_PoolV3.slot0();
  const USDCDecimals = await USDC.decimals();
  const EURO3Decimals = await EURO3.decimals();

  const exchangeRate = await getExchangeRate(
    USDC_ADDRESS,
    EURO3_ADDRESS,
    1,
    Number(slot0[1]), //Tick is the position 1 on the slot0 response
    Number(USDCDecimals),
    Number(EURO3Decimals)
  );

  const result = { USDC_EUR3: { data: exchangeRate } };
  console.log(result);

  return result;
}

// // It will return how much is 1USD to EUR3
// USDCEUR3Price();
