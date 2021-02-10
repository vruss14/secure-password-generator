console.log("Page loaded!");

// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Declaring new variables

let capitalLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specialCharacters = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "<", "=", ">", "?", "@", "[", "]", "^", "_", "-", "`", "{", "}", "~", "|"];
let userChoice = [];

function generatePassword () {
    let wantLowercase = window.confirm ("Would you like to include lowercase letters in your password?");

    if (wantLowercase) {
        userChoice.concat(lowercaseLetters);
    }

    let wantUppercase = window.confirm ("Would you like to include uppercase letters in your password?");

    if (wantUppercase) {
        userChoice.concat(capitalLetters);
    }

    let wantNumbers = window.confirm ("Would you like to include numbers in your password?");

    if (wantNumbers) {
        userChoice.concat(numericCharacters);
    }

    let wantSpecialCharacters = window.confirm ("Would you like to include special characters in your password?");

    if (wantSpecialCharacters) {
        userChoice.concat(specialCharacters);
    }

    let lengthPrompt = window.prompt ("How long should your password be? Please enter a number this is at least 8 and no more than 128.");

    if (lengthPrompt >= 8 && lengthPrompt <= 128) {
        window.alert("Thank you! You want a password that is " + lengthPrompt + " characters long.");
    } else if (lengthPrompt > 128) {
        window.alert("A password larger than 128 characters is too large. Please try again.");
    } else if (lengthPrompt < 8) {
        window.alert("A password smaller than 8 characters is too small. Please try again.");
    } else {
        window.alert("You have entered an invalid data type. Please try again.");
    }

    for (let i = 0; i < lengthPrompt; i++) {
        userChoice[Math.floor(Math.random() * userChoice.length)];
    
        if (lengthPrompt < 8 || lengthPrompt > 128) {
            return undefined;
        } else {
            console.log ("Your password is: " + userChoice[i]);
        }
    }
   

}