import JSBI from "jsbi";
import axios from "axios";
import { TickMath, FullMath, Tick } from "@uniswap/v3-sdk";
import { USDC_EURO3_PoolV3, USDC, EURO3, EXCHANGERATE_APIKEY } from "./config";

// Transcript of getQuoteAtTick from OracleLibrary.sol (from Uniswap V3 periphery repository)
async function getExchangeRateV3Pool(
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
  const formattedPrice = Number(quoteAmountString) / 10 ** quoteTokenDecimals;

  return formattedPrice;
}

// Get the exchange rate from USD to EUR
export async function getExchangeRateUSD_EUR() {
  const response = await axios.get(
    `http://api.exchangeratesapi.io/v1/latest?access_key=${EXCHANGERATE_APIKEY}&symbols=USD`
  );
  const rateUSD_EUR = 1 / response.data.rates.USD;
  return rateUSD_EUR;
}

// Get the exchange rate from USDC to EURO3
export async function getExchangeRateUSDC_EURO3() {
  const slot0 = await USDC_EURO3_PoolV3.slot0();
  const USDCDecimals = await USDC.decimals();
  const EURO3Decimals = await EURO3.decimals();

  const exchangeRate = await getExchangeRateV3Pool(
    1,
    Number(slot0[1]), // Tick is the position 1 on the slot0 response
    Number(USDCDecimals),
    Number(EURO3Decimals)
  );

  return exchangeRate;
}

// Get the protocol fee
export async function getFeeProtocol() {
  const slot0 = await USDC_EURO3_PoolV3.slot0();
  const fee = slot0[5];
  return fee;
}
