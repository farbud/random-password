
function genaratePaasword(length, indcludeLowecase, includUpperCase,
    includeNumbers, includSymbols){
        const lowecaseChas = "abcdefghijklmnopqrstuvwxyz";
        const uppercaseChars = "ABCDEFGHJKLMNOPQRSTUVWXYZ";
        const nummberChars = "0123456789";
        const symbolsChars = "!@#$%^&*()_+-=";

        let allowedChars = "";
        let password = "";

        allowedChars +=indcludeLowecase ? lowecaseChas : "";
        allowedChars += includUpperCase ? uppercaseChars : "";
        allowedChars += includeNumbers ? nummberChars : "";
        allowedChars += includSymbols ? symbolsChars : "";

        if(length <= 0 ){
            return `(password lenght must be at least 1)`;
        };
        if(allowedChars.length === 0){
            return `(At least 1 set of character needs to be selected )`;
        }

        for(let i = 0; i < length; i++){
            const randomIndex = Math.floor(Math.random() * allowedChars.length );
            password += allowedChars[randomIndex];
        }

        return password;
}

const passwordLength = 12;
const indcludeLowecase = true;
const includUpperCase = true;
const includeNumbers = true;
const includSymbols = true;

const password = genaratePaasword(passwordLength
                                ,indcludeLowecase,
                                includUpperCase
                                ,includeNumbers, 
                                includSymbols);

console.log(`Generated password: ${password}`);