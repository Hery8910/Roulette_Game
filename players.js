import chalk from "chalk";
import readlineSync from "readline-sync";
import Table from "cli-table3";

export let players = [];

export function createUsers() {
    const numPlayers = parseInt(
        readlineSync.question(chalk.green.bold("                       How many players: "))
    );

    for (let i = 0; i < numPlayers; i++) {
        const player = {
            id: i + 1,
            name: readlineSync.question(chalk.green.bold("   Please enter your name: ")),
            wallet: parseInt(readlineSync.question(chalk.green.bold("   Please enter amount: "))),
        };
        players.push(player);
    }
}

export function createPlayersTable(players, numbers) {
  const table = new Table({
      head: ['Player', 'Wallet', 'Bets'],
      chars: {
          top: '═', 'top-mid': '╤', 'top-left': '╔', 'top-right': '╗',
          bottom: '═', 'bottom-mid': '╧', 'bottom-left': '╚', 'bottom-right': '╝',
          left: '║', 'left-mid': '╟', mid: '─', 'mid-mid': '┼',
          right: '║', 'right-mid': '╢', middle: '│'
      }
  });

  players.forEach(player => {
      // const playerBets = bets
      //     .filter(bet => bet.player.id === player.id)
      //     .map(bet => bet.number)
      //     .join(', ');
      table.push([player.name, `$${player.wallet}`, numbers.join(", ")]);
  });

  console.log(table.toString());
}