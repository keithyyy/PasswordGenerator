// Assignment Code
var generateBtn = document.querySelector("#generate");




// Write password to the #password input
const randomGen = {
  lower: getRandomLower,
  upper: getRandomUpper,
  special: getRandomSpecial,
  number: getRandomNumber,
};


function writePassword() {

  // Before a password is generated, User is asked series of questions to figure what password should have.


  // If password is less than 8 or more than 128 characters, they will be alerted about the requirements
  const passLength = prompt("How long would you like your password to be? :");

  if (passLength < 8 || passLength > 128) {
    alert("Password has to be within 8 - 128 characters");
    writePassword();
  }

  const wantsUpper = confirm("Do you want UPPERCASE characters?");
  const wantsLower = confirm("Do you want lowercase characters?");
  const wantsSpecial = confirm("Do you want $pecial characters?");
  const wantsNumber = confirm("Do you want numbers?");
  // The answers to the prompted question will be fed into generatePassword function
  var password = generatePassword(wantsUpper, wantsLower, wantsSpecial, wantsNumber, passLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



function generatePassword(upper, lower, special, number, length) {
  
  let generatedPassword = '';

  // this tells us how criteria rules are active
  const criteriaCount = upper + lower + special + number;

  // if a response is false, then we don't want to include it in array of password criteria to follow.
  const criteriaArray = [{upper}, {lower}, {special}, {number}].filter(item => Object.values(item)[0]);

  
  // if user says no to all prompts, then it will not continue
  if(criteriaCount === 0) {
    return '';
  }

  // we loop based on character length inputed by user. Every loop we call the randomGen function
  // we incremented based on how many criteria rules are set/true
  for (let i = 0; i < length; i += criteriaCount) {
    // for each criteria in the Array, we set criteriaKind to be one of the specific getRandom function (upper, lower, number)
    criteriaArray.forEach(type => {
      const criteriaKind = Object.keys(type)[0];
  
      // results of the function are added together and set as the generatedPassword variable
      generatedPassword += randomGen[criteriaKind]();
    });
    
  }

  return generatedPassword;
  
}


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
