import numbers from './roulette.js';

export const bets = [];

export function hasSufficientFunds(player, betAmount) {
    return player.wallet >= betAmount;
}

export function placeBet(player, numbers, amount) {
    if (hasSufficientFunds(player, amount)) {
        player.wallet -= amount;
        numbers.forEach((number) => {
            bets.push({ player, number: parseInt(number), amount });
        });
    } else {
        console.log(`${player.name} does not have enough funds to place this bet.`);
    }
}

export function spinRoulette() {
    return Math.floor(Math.random() * 37);
}

export function filterWinningBets(winningNumber) {
    return bets.filter((bet) => bet.number === winningNumber);
}

export function processBets(winningNumber) {
    const winningBets = filterWinningBets(winningNumber);

    winningBets.forEach((bet) => {
        const winnings = bet.amount * (35 / numbers.length);
        bet.player.wallet += winnings;
        console.log(`${bet.player.name} won ${winnings} Dollars!`);
    });

    bets.length = 0;
}

export function removeBankruptPlayers(players) {
    return players.filter((player) => player.wallet > 0);
}
