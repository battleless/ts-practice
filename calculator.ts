import readline from 'readline';

const errors = {
    notNumber: 'Please input a number!',
    notOperator: 'Please input a valid operator!',
};

function prompt(input: string) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise(resolve => rl.question(input, ans => {
        rl.close();
        resolve(ans);
    }))
};

(async () => {
    const firstNumber = Number(await prompt('Input your first number: ') as string);

    if (isNaN(firstNumber)) {
        console.log(errors.notNumber);
        process.exit();
    };

    const operator = await prompt('Input your operator: ') as string;

    if (!['+', '-', '*', '/'].includes(operator)) {
        console.log(errors.notOperator);
        process.exit();
    };

    const secondNumber = Number(await prompt('Input your second number: ') as string);
    
    if (isNaN(secondNumber)) {
        console.log(errors.notNumber);
        process.exit();
    };

    let result;

    switch (operator) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            result = firstNumber / secondNumber;
            break;
    };

    console.log('Results: ' + result);

    process.exit();
})();