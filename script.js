// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var lower = 'abcdefghijklmnopqrstuvwxyz';
  var possible = '';
  var upper = lower.toUpperCase;
  var numbers = '0123456789'
  var special = '"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';
  var password = '';

  var characters = 12; // need to get from prompt

  var hasLower = confirm('Do you want to include lowercase letters?');
  var hasUpper = confirm('Do you want to include uppercase letters?');
  var hasSpecial = confirm('Do you want to include special characters?');
  var hasNumbers = confirm('Do you want to include numbers?');

  if (hasLower) {
    possible += lower;
  }

  for (var i = 0; i < characters; i++) {
    // find random letter from possible
    // append to the password string
  }

  debugger;

  return '';
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  return'';
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
