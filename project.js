// 1. Despot some money
// 2. Determine number of lines to bet on
// 3. Collect a bet money
// 4. Spin the slot machine
// 5. Check if the user won
// 6. give the user their winnings
// 7. play again

const prompt = require('prompt-sync')();

const despot = () => {
    while (true) {
        const depositAmount = prompt('Enter a deposit amount: ');
        const numberDepositAmount = parseFloat(depositAmount);


        if(isNaN(numberDepositAmount) || numberDepositAmount <= 0)
        {
            console.log("Invalid deposit amount, try again");
        }else{
            return numberDepositAmount;
        }

    }
};

const depositAmount = despot()
console.log(depositAmount);