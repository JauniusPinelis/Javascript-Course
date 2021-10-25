const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*{}()-+";

const createPassword = (length = 15, hasNumbers = true, hasSymbols = true) => {
    let password = '';
    var possibleChars = alphabet;

    if (hasNumbers){
        possibleChars += numbers;
    }

    if (hasSymbols){
        possibleChars += symbols
    };

    for (let i = 0; i < length; i++) {
        var char = possibleChars[Math.floor(Math.random()*possibleChars.length)];
        password += char;
    }

    return password;
}

module.exports = createPassword;