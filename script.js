// Assignment Code
var generateBtn = document.querySelector("#generate");

function get_char_length() {
  var return_val = prompt('Choose a length between 8-128 characters');
  if (return_val > 128 || return_val < 8 || isNaN(return_val)) {
    window.alert('Please input a numeric value between 8-128');
    return_val = get_char_length();
  }
  return return_val;
}

function get_params() {
  var hasLower = confirm('Do you want to include lowercase letters?');
  var hasUpper = confirm('Do you want to include uppercase letters?');
  var hasSpecial = confirm('Do you want to include special characters?');
  var hasNumbers = confirm('Do you want to include numbers?');

  if (!hasSpecial && !hasUpper && !hasLower && !hasNumbers) {
    window.alert('You must pick at least one parameter')
    return get_params();
  };
  return [hasLower, hasUpper, hasSpecial, hasNumbers];
}

function generatePassword() {
  // password parameters
  var lower = 'abcdefghijklmnopqrstuvwxyz';
  var possible = '';
  var upper = lower.toUpperCase();
  var numbers = '0123456789'
  var numbers = '0123456789';
  var special = '"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';
  var password = '';
  var randomPassword = '';


  // character length prompt
  var charLength = get_char_length()

  // pw parameter prompts
  var params = get_params()

  // string building 
  if (params[0]) {
    possible += lower;
  }

  if (params[1]) {
    possible += upper;
  }

  if (params[2]) {
    possible += special;
  }

  if (params[3]) {
    possible += numbers;
  }

  // password generator
  for (var i = 0; i < charLength; i++) {
    var random = Math.floor(Math.random() * possible.length);
    randomPassword = randomPassword + possible.charAt(random);
  }

  return randomPassword;
}



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  return '';
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
