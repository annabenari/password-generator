// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
// parseInt means for example:
//const myNumber = '3';
//console.log(2 + myNumber);
// returns 23
// In the example above, 3 is a string and not an actual number. When we add 2 to the string, we are given 23 because we are just adding 2 to a string that is just in the form of a number.
// With the parseInt function, we can can extract 3 from the string and turn it to an actual number. Here is an example:
// const myNumber = '3';
//console.log(2 + parseInt(myNumber));
// returns 5
//Now the function has removed 3 from the string and converted it to an actual number.
//From '3' to 3.

function getPasswordOptions() {
let length = parseInt(
  prompt ("How many characters would you like your password to contain?")
)
alert (length);

if (isNaN(length) === true){
alert ("Password length must be provided as a number");
return;
}

if (length < 10){
  alert ("Password length must be at least 10 characters.")
  return;
}

if (length > 64) {
  alert ("Password length must be less than 64")
  return;
}

let hasSpecialCharacters = confirm (
  "Click ok to confirm Speacial Characters ")

  let hasNumericCharacters = confirm (
    "Click ok to confirm Numeric Characters ")

let hasLowerCasedCharacters = confirm (
   "Click ok to confirm Lower Case Characters ")

let hasUpperCasedCharacters = confirm (
  "Click ok to confirm Upper Case Characters ")

if (hasSpecialCharacters === false && 
   hasNumericCharacters === false && 
   hasLowerCasedCharacters === false &&
   hasUpperCasedCharacters === false) {
    alert ("Must select at least one character type.")
    return;
   }

let passwordOptions = {
  length: length,
  hasSpecialCharacters : hasSpecialCharacters ,
  hasUpperCasedCharacters : hasUpperCasedCharacters , 
  hasNumericCharacters : hasNumericCharacters ,
  hasLowerCasedCharacters : hasLowerCasedCharacters
}

console.log(passwordOptions);


return passwordOptions;
  

}

// Function for getting a random element from an array
function getRandom(arr) {
  // The Math.floor() method rounds a number DOWN to the nearest integer.
  // Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):
  let randomIndex = Math.floor(Math.random() * arr.length);
  let randomElement = arr[randomIndex];

  return randomElement;

}

// Function to generate password with user input
function generatePassword() {
let options = getPasswordOptions();

console.log (options);
let result = []

let possibleCharacters = []

let guaranteedCharacters = []

if (options.hasSpecialCharacters) {
  possibleCharacters = possibleCharacters.concat(specialCharacters); 
  guaranteedCharacters.push(getRandom(specialCharacters))
}

if (options.hasLowerCasedCharacters) {
  possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
  guaranteedCharacters.push(getRandom(lowerCasedCharacters))
}

if (options.hasUpperCasedCharacters) {
  possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
  guaranteedCharacters.push(getRandom(upperCasedCharacters))
}

if (options.hasNumericCharacters) {
  possibleCharacters = possibleCharacters.concat(numericCharacters);
  guaranteedCharacters.push(getRandom(numericCharacters))
}

console.log(possibleCharacters)

for (let index = 0; index < options.length; index++) {
var generated = getRandom(possibleCharacters);

  console.log(generated);
  result.push(generated);
}
for (let index = 0; index < guaranteedCharacters.length; index++){
  result[index] = guaranteedCharacters[index]
}
console.log(result)
return result.join ("")

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


// Your application must:

// Generate a password when the button is clicked.

// Present a series of prompts for password criteria:

// Length of password:

// At least 10 characters but no more than 64.

// Character types:

// Lowercase

// Uppercase

// Numeric

// Special characters ($@%&*, etc.)

// Code should validate for each input and at least one character type should be selected.

// Once all prompts are answered, the password should be generated and displayed in an alert or written to the page.