// Assignment Code
var generateBtn = document.querySelector("#generate");


const passwordLength = '';
const passwordUpper = '';
const passwordLower = '';
const passwordSpecial = '';

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  
  
}

const randomGen = {
  lower: getRandomLower,
  upper: getRandomUpper,
  special: getRandomSpecial,
  number: getRandomNumber
};


// Generating Random Characters

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}


function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSpecial() {
  const specialChar = '!@#$%^&*()_+{}?';
  return specialChar[Math.floor(Math.random() * specialChar.length)]
}

console.log(getRandomSpecial())

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
