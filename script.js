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

let capitalLetters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
let lowercaseLetters = ["abcdefghijklmnopqrstuvwxyz"];
let numericCharacters = ["0123456789"];
let specialCharacters = [" !#$%&'()*+,-./:<=>?@[]^_`{}~|"];

//Creating the password

function writePassword () {

    let lowercaseQuestion = window.confirm ("Would you like to include lowercase letters?");

    if (lowercaseQuestion) {
        window.alert("You want lowercase letters.");
    } else {
        window.alert("You don't want lowercase letters.");
    }

    let capitalQuestion = window.confirm ("Would you like to include capital letters?");

    if (capitalQuestion) {
        window.alert("You want capital letters.");
    } else {
        window.alert("You don't want capital letters.");
    }

    let numbersQuestion = window.confirm ("Would you like to include numbers?");

    if (numbersQuestion) {
        window.alert("You want numbers.");
    } else {
        window.alert("You don't want numbers.");
    }

    let specialQuestion = window.confirm ("Would you like to include special characters?");

    if (specialQuestion) {
        window.alert("You want special characters.");
    } else {
        window.alert("You don't want special characters.");
    }

    // Results

    // The user chooses to include all characters

    if (lowercaseQuestion && capitalQuestion && numbersQuestion && specialQuestion) {
        window.alert("It sounds like you want it all! This is option 1.");
        var userChoice = [lowercaseLetters + capitalLetters + numericCharacters + specialCharacters]; //This means lowercaseQuestion = true, capitalQuestion = true, numbersQuestion = true, and specialQuestion = true
        runLengthPrompt();

// The user chooses to accept three of the questions

    } else if (lowercaseQuestion && !capitalQuestion && numbersQuestion && specialQuestion) {
        let option2 = window.alert("You want lowercase letters, numbers, and special characters, but you don't want capital letters. This is option 2.");
        runLengthPrompt();

    } else if (lowercaseQuestion && capitalQuestion && !numbersQuestion && specialQuestion) {
        let option3 = window.alert("You want lowercase letters, capital letters, and special characters, but you don't want numbers. This is option 3.");
        runLengthPrompt();

    } else if (lowercaseQuestion && capitalQuestion && numbersQuestion && !specialQuestion) {
        let option4 = window.alert("You want lowercase letters, capital letters, and numbers, but you don't want special characters. This is option 4.");
        runLengthPrompt();
    
    } else if (!lowercaseQuestion && capitalQuestion && numbersQuestion && specialQuestion) {
        let option5 = window.alert("You want capital letters, numbers, and special characters, but you don't want lowercase letters. This is option 5.");
        runLengthPrompt();


// The user chooses to accept two of the questions

    } else if (lowercaseQuestion && capitalQuestion && !numbersQuestion && !specialQuestion) {
        let option6 = window.alert("You only want lowercase and uppercase letters. This is option 6.");
        runLengthPrompt();

    } else if (lowercaseQuestion && !capitalQuestion && numbersQuestion && !specialQuestion) {
        let option7= window.alert("You only want lowercase letters and numbers. This is option 7.");
        runLengthPrompt();

    } else if (lowercaseQuestion && !capitalQuestion && !numbersQuestion && specialQuestion) {
        let option8 = window.alert("You only want lowercase letters and special characters. This is option 8.");
        runLengthPrompt();

    } else if (!lowercaseQuestion && capitalQuestion && numbersQuestion && !specialQuestion) {
        let option9 = window.alert("You only want capital letters and numbers. This is option 9.");
        runLengthPrompt();

    } else if (!lowercaseQuestion && capitalQuestion && !numbersQuestion && specialQuestion) {
        let option10 = window.alert("You only want capital letters and special characters. This is option 10.");
        runLengthPrompt();

    } else if (!lowercaseQuestion && !capitalQuestion && numbersQuestion && specialQuestion) {
        let option11 = window.alert("You only want numbers and special characters. This is option 11.");
        runLengthPrompt();


// The user chooses to accept only one of the questions


    } else if (lowercaseQuestion && !capitalQuestion && !numbersQuestion && !specialQuestion) {
        let option12 = window.alert("You only want lowercase letters. This is option 12.");
        runLengthPrompt();

    } else if (!lowercaseQuestion && capitalQuestion && !numbersQuestion && !specialQuestion) {
        let option13 = window.alert("You only want capital letters. This is option 13.");
        runLengthPrompt();

    } else if (!lowercaseQuestion && !capitalQuestion && numbersQuestion && !specialQuestion) {
        let option14 = window.alert("You only want numbers. This is option 14.");
        runLengthPrompt();

    } else if (!lowercaseQuestion && !capitalQuestion && !numbersQuestion && specialQuestion) {
        let option15 = window.alert("You only want special characters. This is option 15.");
        runLengthPrompt();
   
// The user doesn't accept any of the questions, which is an error

    } else if (!lowercaseQuestion && !capitalQuestion && !numbersQuestion && !specialQuestion) {
        let option16 = window.alert("It's a good thing I asked, because you need to choose at least one type of character for your password. This is option 16.");
    }

// Password length

    function runLengthPrompt () {

    var lengthPrompt =  window.prompt("How long should your password be? Please enter a number this is at least 8 and no more than 128.");

    if (lengthPrompt >= 8 && lengthPrompt <= 128) {
        window.alert("Thank you! You want a password that is " + lengthPrompt + " characters long.");
    } else if (lengthPrompt > 128) {
        window.alert("A password larger than 128 characters is too large. Please try again.");
        window.prompt("How long should your password be? Please enter a number this is at least 8 and no more than 128.");
    } else if (lengthPrompt < 8) {
        window.alert("A password smaller than 8 characters is too small. Please try again.");
        window.prompt("How long should your password be? Please enter a number this is at least 8 and no more than 128.");
    } else {
        window.alert("You have entered an invalid data type. Please try again.");
    }

    let answer = userChoice[Math.floor(Math.random()* lengthPrompt)];
    window.alert("Great! " +  answer);

    }

// Possible options

let option2 = [lowercaseLetters + numericCharacters + specialCharacters]; //This means lowercaseQuestion = true, capitalQuestion = false, numbersQuestion = true, and specialQuestion = true
let option3 = [lowercaseLetters + capitalLetters + specialCharacters]; //This means lowercaseQuestion = true, capitalQuestion = true, numbersQuestion = false, and specialQuestion = true
let option4 = [lowercaseLetters + capitalLetters + numericCharacters]; //This means lowercaseQuestion = true, capitalQuestion = true, numbersQuestion = true, and specialQuestion = false
let option5 = [capitalLetters + numericCharacters + specialCharacters]; //This means lowercaseQuestion = false, capitalQuestion = true, numbersQuestion = true, and specialQuestion = true

let option6 = [lowercaseLetters + capitalLetters]; //This means lowercaseQuestion = true, capitalQuestion = true, numbersQuestion = false, and specialQuestion = false
let option7 = [lowercaseLetters + numericCharacters]; //This means lowercaseQuestion = true, capitalQuestion = false, numbersQuestion = true, and specialQuestion = false
let option8 = [lowercaseLetters + specialCharacters]; //This means lowercaseQuestion = true, capitalQuestion = false, numbersQuestion = false, and specialQuestion = true
let option9 = [capitalLetters + numericCharacters]; //This means lowercaseQuestion = false, capitalQuestion = true, numbersQuestion = true, and specialQuestion = false
let option10 = [capitalLetters + specialCharacters]; //This means lowercaseQuestion = false, capitalQuestion = true, numbersQuestion = false, and specialQuestion = true
let option11 = [numericCharacters + specialCharacters]; //This means lowercaseQuestion = false, capitalQuestion = false, numbersQuestion = true, and specialQuestion = true

let option12 = [lowercaseLetters]; //This means lowercaseQuestion = true, capitalQuestion = false, numbersQuestion = false, and specialQuestion = false
let option13 = [capitalLetters]; //This means lowercaseQuestion = false, capitalQuestion = true, numbersQuestion = false, and specialQuestion = false
let option14 = [numericCharacters]; //This means lowercaseQuestion = false, capitalQuestion = false, numbersQuestion = true, and specialQuestion = false
let option15 = [specialCharacters]; //This means lowercaseQuestion = false, capitalQuestion = false, numbersQuestion = false, and specialQuestion = true

let option16 = "Error; you must select at least one type of characters for your password."; //This means the user tried to choose false for all questions.


//Creating the password based on user input

/* function generatePassword () {
    let answer = userChoice[Math.floor(Math.random()*lengthPrompt)];
    window.alert("Great! " + answer);
    
}

generatePassword (); */

}

