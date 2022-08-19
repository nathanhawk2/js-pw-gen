// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // password parameters
  var lower = 'abcdefghijklmnopqrstuvwxyz';
  var possible = '';
  var upper = lower.toUpperCase;
  var numbers = '0123456789';
  var special = '"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';
  var password = '';

// character length prompt
  var charLength = prompt ('Choose a length between 8-128 characters');
  if (charLength > 129 || charLength < 8 || typeof charLength !== 'number') {
    window.alert('Please input a numeric value between 8-128')
    var charLength = prompt ('Choose a length between 8-128 characters')
  };

  // pw parameter prompts
  var hasLower = confirm('Do you want to include lowercase letters?');
  var hasUpper = confirm('Do you want to include uppercase letters?');
  var hasSpecial = confirm('Do you want to include special characters?');
  var hasNumbers = confirm('Do you want to include numbers?');

if (!hasSpecial && !hasUpper && !hasLower && !hasNumbers) {
  window.alert ('You must pick at least one parameter')
  return;
};

// string building 
  if (hasLower) {
    possible += lower;
  }

  // password generator
  for (var i = 0; i < characters; i++) {
    // find random letter from possible
    // append to the password string
  }



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
