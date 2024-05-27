import chalk from "chalk";
import readlineSync from "readline-sync";
import createRouletteTable from "./roulette.js";

export  function gamePresentation() {
    console.clear();
    console.log(" ");
    console.log("     ", chalk.green("=".repeat(50)));
    console.log(" ")
    console.log("              ", chalk.green.bold("    Welcome to the Roulette    "));
    console.log(" "); 
    console.log("     ", chalk.green("=".repeat(50)));
    console.log(" ");
    console.log(createRouletteTable(null));
    console.log(" ");
    console.log("     ", chalk.green("=".repeat(50)));
    console.log(" ");
    console.log("                    ", chalk.green.bold("    Have fun.    "));
    console.log(" ");
    console.log("     ", chalk.green("=".repeat(50)));
    console.log(" ");
    console.log("                   ", chalk.green.bold("    Press enter    "));
    readlineSync.question(" ");
}
export  function showGameRules() {
  console.clear();
  console.log(" ");
  console.log("     ", chalk.green("=".repeat(50)));
  console.log(" ");
  console.log( "         ",  chalk.green.bold("       Roulette Game Rules"));
  console.log(" ");
  console.log("     ", chalk.green("=".repeat(50)));

  console.log(chalk.green("1. The game consists of a spinning wheel with numbers from 0 to 36."));
  console.log(chalk.green("2. Players can place bets on one or more numbers."));
  console.log(chalk.green("3. Each player starts with a certain amount of money in their wallet."));
  console.log(chalk.green("4. Players take turns to place their bets."));
  console.log(chalk.green("5. The payout ratio decreases if a player bets on more than one number."));
  console.log(chalk.green("6. After all players have placed their bets, the roulette wheel is spun."));
  console.log(chalk.green("7. If a player's chosen number comes up, they win based on the payout ratio."));
  console.log(chalk.green("8. If a player runs out of money, they are out of the game."));
  console.log(chalk.green("9. The game ends when all players are out of funds."));
  console.log(chalk.green("\nBetting Payouts:"));
  console.log(chalk.green(" - Single number bet: 35:1 payout."));
  console.log(chalk.green(" - Multiple number bet: Payout ratio decreases proportionally to the number of bets."));
  console.log(" ");
  console.log("         ", chalk.green("=".repeat(50)));
  console.log(" ");
  readlineSync.question(chalk.green.bold("Press enter to continue "));
}

export  function askIfKnowRules() {
  console.clear();
  console.log(" ");
  console.log("     ", chalk.green("=".repeat(50)));
  console.log(" ");
  console.log( "         ",  chalk.green.bold("Do you know the rules of the game? (yes/no): "));
  console.log(" ");
  console.log("     ", chalk.green("=".repeat(50)));
  const knowRules = readlineSync.question().toLowerCase();
  if (knowRules === 'no') {
      showGameRules();
  } return;
}
