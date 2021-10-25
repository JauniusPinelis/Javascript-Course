const program = require('commander');
const chalk = require('chalk');
const clipboardy = require('clipboardy');

const createPassword = require('./utils/createPassword');
const savePassword = require('./utils/savePassword');

program.version("1.0.0").description("Console app to generate a random pass");

program
    .option('-l, --length <number>', 'length of pass', '30')
    .option('-nn, --no-numbers', 'remove numbers')
    .option('-ns, --no-symbols', 'remove symbols')
    .option('-s, --save', 'Saves to file')

program.parse();

const { length, numbers, symbols, save } = program.opts();

var password = createPassword(length, numbers, symbols);

console.log(chalk.blueBright(password));

clipboardy.writeSync(password);

console.log(chalk.cyanBright("Password was copied to clipboard"))

if (save){
    savePassword(password);
}