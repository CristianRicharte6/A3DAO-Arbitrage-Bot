import express, { Request, Response, NextFunction } from "express";
import { PORT } from "./config";
import { USDCEUR3Price } from "./arbitrageBot/getPrice";
const app = express();

app.listen(PORT, () => {
  console.log(`Listening on port ${Number(PORT)}`);

  setInterval(async () => {
    // It will return how much is 1USD to EUR3
    await USDCEUR3Price();
    console.log("Checking USDC/EUR3 exchange rate update in 10 seconds...");
  }, 10000);
});
