const chalk = require('chalk');
const yargs = require('yargs');

const { processCalculation } = require('./src/utils');

//1. Transform the input parameter into object I can work with.
//2. Validate the input: that it has FirstNumber, Operator, SecondNumber
//3. Execute the mathematical expression
//4. Output the results

yargs.command({
    command: 'calculate',
    describe: "Executing calculation",
    handler: function () {
        var arguments = yargs.argv;
        try {
            var result = processCalculation(arguments);
            console.log(chalk.greenBright(result));
        }
        catch (err) {
            console.log(chalk.redBright(err));
        }
    }
})



//console.log(chalk.red.bold("Node.js works"));

yargs.version("1.0.0");

