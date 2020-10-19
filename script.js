// Assignment Code
var generateBtn = document.querySelector("#generate");


const passwordLength = '';
const passwordUpper = '';
const passwordLower = '';
const passwordSpecial = '';

// Write password to the #password input
function writePassword() {
  const passLength = prompt("How long would you like your password to be? :");
  const wantsUpper = confirm("Do you want UPPERCASE characters?");
  const wantsLower = confirm("Do you want lowercase characters?");
  const wantsSpecial = confirm("Do you want Special characters?");
  const wantsNumber = confirm("Do you want numbers?");


  const passCriteria = [wantsLower, wantsUpper, wantsSpecial, wantsNumber];

  const criteriaArray = [{wantsLower}, {wantsUpper}, {wantsSpecial}, {wantsNumber}]

  console.log(passCriteria);
  console.log(criteriaArray);

  var password = generatePassword(passLength, wantsLower, wantsUpper, wantsSpecial, wantsNumber);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(length, lower, upper, special, number) {

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


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
