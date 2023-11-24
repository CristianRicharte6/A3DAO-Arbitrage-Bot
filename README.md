# A3DAO - Arbitrary Bot (USDC/EUR3)
![image](https://github.com/CristianRicharte6/A3DAO/assets/102038261/208bbfa1-9c1c-4b86-bc4e-fffe2e8e67ce)

## Description

This Arbitrary bot checks every 10 seconds if there is enough depeg between USDC/EURO3. If so:
- Underdepeg: It will buy EURO3 by selling USDC.
- Overdepeg: It will sell EURO3 by buying USDC.
*Note:* You can choose the depeg threshold on the .env


## Prerequisites
- Node.js and npm.
    

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/CristianRicharte6/A3DAO-Arbitrary-Bot.git
   cd A3DAO-Arbitrary-Bot

   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Run the Arbitrary Bot!

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
