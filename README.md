# A3DAO - Arbitrage Bot ([USDC](https://polygonscan.com/address/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174) / [EUR3](https://polygonscan.com/address/0xA0e4c84693266a9d3BBef2f394B33712c76599Ab))
<img width="950" alt="image" src="https://github.com/CristianRicharte6/A3DAO-Arbitrage-Bot/assets/102038261/333e72c9-9651-4e9f-b98a-85b9bc625860">


## Description

This Arbitrage bot checks if there is enough depeg in the USDC/EUR3 [Polygon Uniswap V3 pool](https://polygonscan.com/address/0xe1f9709d32db8a79ae44f66299e1a93ca84debe3) every 10 seconds and executes the next actions:
- Underdepeg: It will buy EURO3 by selling USDC.
- Overdepeg: It will sell EURO3 by buying USDC.
*Note:* You can modify the depeg threshold on the .env


## Prerequisites
- Node.js and npm.
- Typescript.    

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/CristianRicharte6/A3DAO-Arbitrage-Bot.git

   cd A3DAO-Arbitrage-Bot

   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Run the Arbitrage Bot!

   ```sh
   npm run dev
   ```
  

## 🛠 Setting up Environments

Follow the `.env.example` file and make sure you update the necessary variables.



## Contributors

[Cristian Richarte Gil](https://linktr.ee/0xcr6)

cristianricharte6@gmail.com


## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For inquiries and feedback, please open an issue on the GitHub repository.
