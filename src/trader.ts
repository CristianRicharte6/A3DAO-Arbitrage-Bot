import { parseEther } from "ethers";
import { calculateAbsolutePercentageDifference } from "./utils";
import {
  getExchangeRateUSD_EUR,
  getExchangeRateUSDC_EURO3,
  getFeeProtocol,
} from "./getRates";
import {
  UniswapV3Router,
  USDC,
  EURO3,
  Signer,
  USDC_ADDRESS,
  EURO3_ADDRESS,
  UNISWAPV3_ROUTER_ADDRESS,
  DEPEG_DIFERENCE,
} from "./config";

export const monitorAndTrade = async () => {
  try {
    const amountToSwap = 100; //Amount to buy every time there is under/overPeg
    const depegThreshold = Number(DEPEG_DIFERENCE); // 0.5% below peg

    const USD_EUR = await getExchangeRateUSD_EUR();
    const USDC_EURO3 = await getExchangeRateUSDC_EURO3();
    const feeProtocol = await getFeeProtocol();

    const depeg = calculateAbsolutePercentageDifference(USD_EUR, USDC_EURO3);

    console.log(`\n- USDC/EUR3 Rate in the UniswapV3 Pool: :  ${USDC_EURO3}`);
    console.log(`- USD/EUR Rate in the Forex market: ${USD_EUR}`);
    console.log(`- Peg Diference : ${depeg}%`);

    if (depeg > depegThreshold) {
      // Check if EURO3 has underPeg against USDC
      if (USD_EUR > USDC_EURO3) {
        console.log("\n🟡 Buying EURO3 for USDC as EURO3 is under peg.");

        // Approve Router to manage ERC20 Tokens
        await USDC.approve(UNISWAPV3_ROUTER_ADDRESS, amountToSwap);

        // Swap USDC for EURO3
        await UniswapV3Router.exactInputSingle(
          {
            tokenIn: USDC_ADDRESS,
            tokenOut: EURO3_ADDRESS,
            fee: feeProtocol,
            recipient: Signer.address,
            deadline: Math.floor(Date.now() / 1000) + 60 * 10,
            amountIn: parseEther(amountToSwap.toString()),
            amountOutMinimum: 0,
            sqrtPriceLimitX96: 0,
          },
          { gasLimit: "1000000" }
        ).then((transaction) => {
          console.log(transaction);
        });

        return;
      } else {
        // Check if EURO3 has overPeg against USDC
        console.log("\n🟡 Selling EURO3 for USDC as EURO3 is over peg.");

        // Approve Router to manage ERC20 Tokens
        await EURO3.approve(UNISWAPV3_ROUTER_ADDRESS, amountToSwap);

        // Swap EURO3 for USDC
        await UniswapV3Router.exactInputSingle(
          {
            tokenIn: EURO3_ADDRESS,
            tokenOut: USDC_ADDRESS,
            fee: feeProtocol,
            recipient: Signer.address,
            deadline: Math.floor(Date.now() / 1000) + 60 * 10,
            amountIn: parseEther(amountToSwap.toString()),
            amountOutMinimum: 0,
            sqrtPriceLimitX96: 0,
          },
          { gasLimit: "1000000" }
        ).then((transaction) => {
          console.log(transaction);
        });

        return;
      }
    }

    console.log(
      `\n🟢 Trading not needed as not underpeg or overpeg as there is not ${depeg}% difference.`
    );
    return;
  } catch (error) {
    console.error("Error monitoring and trading:", error);
    throw error;
  }
};
