import chalk from "chalk";
import readlineSync from "readline-sync";
import { gamePresentation, showGameRules, askIfKnowRules } from './presentation.js';
import createRouletteTable from './roulette.js';
import { createUsers, players, createPlayersTable } from './players.js';
import { placeBet, spinRoulette, processBets, removeBankruptPlayers } from './bet.js';



function gameLoop() {
    let round = 1;

    let winningNumber = "..";
    let bets = [];
    while (players.length > 0) {
        console.clear();
        console.log(chalk.green.bold(`   We are at round: ${round}   `));
        createRouletteTable(winningNumber);

        players.forEach((player) => {
            console.log(chalk.green.bold(`${player.name} has $${player.wallet}`));
        });

        players.forEach((player) => {
            console.clear();
            console.log(" ");
            
            console.log("     ", chalk.green("=".repeat(50)));
            console.log(" ");
            console.log( "         ",  chalk.green.bold(` Round: ${round}   `));
            console.log(" ");
            console.log("     ", chalk.green("=".repeat(50)));
            console.log(" ");
            createRouletteTable(winningNumber);
            console.log(" ");
            
            console.log("     ", chalk.green("=".repeat(50)));
            console.log(" ");
            console.log( "         ",  chalk.green.bold(`             The winning number is: ${winningNumber}   `));
            console.log(" ");
            console.log("     ", chalk.green("=".repeat(50)));
            console.log(" ");            console.log();
            console.log(" ");
            console.log(createRouletteTable(winningNumber));
            console.log(" ");
            createPlayersTable(players, bets);
            console.log(" ");
            console.log("     ", chalk.green("=".repeat(50)));
            console.log(" ");
            const chooseNumbers = readlineSync.question(chalk.green.bold(` ${player.name}, choose numbers: `));
            let amount = readlineSync.question(chalk.green.bold(` ${player.name}, enter the amount: `));

            while (amount > player.wallet) {
                console.clear();
                console.log("    ", chalk.green("=".repeat(50)));
                console.log(" ");
                console.log(chalk.green.bold(`Round: ${round}`));;
                console.log(" ");
                console.log("    ", chalk.green("=".repeat(50)));
                players.forEach((p) => console.log(chalk.green.bold(`${p.name} has $${p.wallet}`)));
                console.log(`${player.name}, check your wallet, you don't have that much :(`);
                amount = readlineSync.question(`${player.name}, enter the amount you want to bet: `);
            }

            const numbers = chooseNumbers.split(" ");
            placeBet(player, numbers, amount);
        });

        
        winningNumber = spinRoulette();
        createRouletteTable(winningNumber);
        processBets(winningNumber);
        createPlayersTable(players, bets);
        removeBankruptPlayers(players);

        round++;
    }

    console.log("Game over. All players are out of funds.");
}

function initGame() {
    gamePresentation();
    askIfKnowRules();
    console.clear()
    console.log("    ", chalk.green("=".repeat(50)));
    console.log(" ");
    console.log("                         ", chalk.green.bold("Roulette"));
    console.log(" ");
    console.log("    ", chalk.green("=".repeat(50)));
    console.log(createRouletteTable());
    console.log(" ");
    console.log("    ", chalk.green("=".repeat(50)));
    console.log(" ");
    createUsers();
    gameLoop();
}

initGame();
