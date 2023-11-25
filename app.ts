import express from "express";
import { PORT, DEPEG_DIFERENCE, AMOUNT_TO_SWAP } from "./src/config";
import { monitorAndTrade } from "./src/trader";
const app = express();

app.listen(PORT, () => {
  console.log(`Listening on port ${Number(PORT)}`);
  console.log(`\n⚠ Depeg threshold is set to ${DEPEG_DIFERENCE}% ⚠\n`);
  console.log(
    `\n💱 If depeg, It will Buy/Sell ${AMOUNT_TO_SWAP} USDC/EUR3 💱\n`
  );

  setInterval(async () => {
    await monitorAndTrade();
    console.log(
      "\n⏳ Checking USDC/EURO3 exchange rate update in 10 seconds..."
    );
    console.log("-------------------------------------------------------");
  }, 10000);
});
