const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const savePassword = (password) => {
    try {
        const directoryPath = path.join(__dirname, '../'); 
        const filePath = path.join(directoryPath,'password.txt');
        
        fs.writeFileSync(filePath, password);
        console.log(chalk.green("Password written to a file"));
    }
    catch(e){
        console.log(chalk.red(e));
    }
   
}

module.exports = savePassword;

