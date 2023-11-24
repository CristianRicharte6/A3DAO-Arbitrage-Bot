# A3DAO - Arbitrage Bot (USDC/EUR3)
![image](https://github.com/CristianRicharte6/A3DAO-Arbitrage-Bot/assets/102038261/30ee28d8-7bdc-4f28-bc17-1862d6e39ed4)

## Description

This Arbitrage bot checks every 10 seconds if there is enough depeg between USDC/EURO3. If so:
- Underdepeg: It will buy EURO3 by selling USDC.
- Overdepeg: It will sell EURO3 by buying USDC.
*Note:* You can choose the depeg threshold on the .env


## Prerequisites
- Node.js and npm.
    

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

Follow the `.env.example` file. Take into account to update the necessary variables.



## Contributors

[Cristian Richarte Gil](https://linktr.ee/0xcr6)

cristianricharte6@gmail.com


## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For inquiries and feedback, please open an issue on the GitHub repository.
