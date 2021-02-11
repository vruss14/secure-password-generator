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

// Generating the password based on user input

function generatePassword () {

    let capitalLetters;
    let lowercaseLetters;
    let numericCharacters;
    let specialCharacters;
    let userChoice;

    let wantLowercase;
    let wantUppercase;
    let wantNumbers;
    let wantSpecialCharacters;

    let lengthPrompt;
    
    let options = getOptions();

    function getOptions() {

        capitalLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        specialCharacters = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "<", "=", ">", "?", "@", "[", "]", "^", "_", "-", "`", "{", "}", "~", "|"];
        userChoice = [];
        
        wantLowercase = window.confirm ("Would you like to include lowercase letters in your password?");
    
        if (wantLowercase) {
            userChoice = userChoice.concat(lowercaseLetters);
        }
    
        wantUppercase = window.confirm ("Would you like to include uppercase letters in your password?");
    
        if (wantUppercase) {
            userChoice = userChoice.concat(capitalLetters);
        }
    
        wantNumbers = window.confirm ("Would you like to include numbers in your password?");
    
        if (wantNumbers) {
            userChoice = userChoice.concat(numericCharacters);
        }
    
        wantSpecialCharacters = window.confirm ("Would you like to include special characters in your password?");
    
        if (wantSpecialCharacters) {
            userChoice = userChoice.concat(specialCharacters);
        }
    
        if(!wantLowercase && !wantUppercase && !wantNumbers && !wantSpecialCharacters) {
            window.alert("Error: You must select at least one type of character for your password.");
            return;
        }
    
        // Specifying password length
        
        lengthPrompt = window.prompt ("How long should your password be? Please enter a number that is at least 8 and no more than 128.");
    
        if (lengthPrompt >= 8 && lengthPrompt <= 128) {
            window.confirm("Thank you! You want a password that is " + lengthPrompt + " characters long.");
            return;
        } 
        
        if (lengthPrompt > 128) {
            window.alert("A password larger than 128 characters is too large. Please try again.");
            getOptions();
        } else if (lengthPrompt < 8) {
            window.alert("A password smaller than 8 characters is too small. Please try again.");
            getOptions();
        } else {
            window.alert("You have entered an invalid data type. Please try again.");
            getOptions();
            
        }

    };

    // Utilizing the user's input for password generation

    let password = [];

    for (let i = 0; i < lengthPrompt; i++) {
        let calculation = userChoice[Math.floor(Math.random() * userChoice.length)];
        password = password.concat(calculation);
    }
    
    return (password.join(""));
};