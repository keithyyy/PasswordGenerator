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

  const passLength = prompt("How long would you like your password to be? :");

  if (passLength < 8 || passLength > 128) {
    alert("Password has to be within 8 - 128 characters");
    writePassword();
  }

  const wantsUpper = confirm("Do you want UPPERCASE characters?");
  const wantsLower = confirm("Do you want lowercase characters?");
  const wantsSpecial = confirm("Do you want Special characters?");
  const wantsNumber = confirm("Do you want numbers?");

  var password = generatePassword(wantsUpper, wantsLower, wantsSpecial, wantsNumber, passLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



function generatePassword(upper, lower, special, number, length) {
  
  let passwordgenerated = '';
  const criteriaCount = upper + lower + special + number;

  // if a response is false, then we don't want to include it in array of password criteria to follow.
  const criteriaArray = [{upper}, {lower}, {special}, {number}].filter(item => Object.values(item)[0]);

  console.log(criteriaCount);
  console.log(criteriaArray);

  // if user says no to all prompts, then it will not continue
  if(criteriaCount === 0) {
    return '';
  }

  for (let i = 0; i < length; i += criteriaCount) {
    criteriaArray.forEach(type => {
      const criteriaKind = Object.keys(type)[0];
      console.log(criteriaKind);

      passwordgenerated += randomGen[criteriaKind]();
    });
    
  }
  console.log(passwordgenerated)
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
