// Assignment Code
var generateBtn = document.querySelector("#generate");


//Input validation and password calculation
function generatePassword() {

  //password array object that contains all possible password characters
  var pwdArray = [];

  //password array properties
  var pwdLength;

  var pwdUppercase;
  var pwdLowercase;
  var pwdNumeric;
  var pwdSpecialChar;

  //arrays that include the characters for each property
  var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
    'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
    'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  var specialChar = ['!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':',
    ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];

  window.alert('Answer the following questions to generate a secure password:');

  //Input the number of characters in the password.
  var charCountValidates = false;
  do {
    var length = window.prompt('How many characters does the password require? (8 - 128)');
    //Exit pwd generator if user clicks 'Cancel'
    if (length === null) {
      return '';
    }
    else if (Number(length) === NaN) {
      window.alert('Your input was not a number.');
      break;
    }
    else if (Number(length) < 8 || Number(length) > 128) {
      window.alert('The password must be between 8 and 128 characters.');
    }
    else {
      pwdLength = Number(length);
      charCountValidates = true;
    }

  } while (charCountValidates === false)


  //Input if password includes uppercase characters
  pwdUppercase = window.confirm("Does the password include uppercase characters?");
  //Add uppercase characters to the password array
  if (pwdUppercase === true) {
    pwdArray = pwdArray.concat(uppercase);

  }


  //Input if the password includes lowercase characters
  pwdLowercase = window.confirm("Does the password include lowercase characters?");
  //Add lowercase characters to the password array
  if (pwdLowercase === true) {
    pwdArray = pwdArray.concat(lowercase);
  }

  //Input if the password includes numbers
  pwdNumeric = window.confirm("Does the password include numeric characters?");
  //Add numeric characters to the password array
  if (pwdNumeric === true) {
    pwdArray = pwdArray.concat(numeric);
  }

  //Input if the password includes special characters
  pwdSpecialChar = window.confirm("Does the password include special characters?");
  //Add special characters to the password array
  if (pwdSpecialChar === true) {
    pwdArray = pwdArray.concat(specialChar);
  }

  //Calculate password
  password = '';

  for (let i = 0; i < pwdLength; i++) {
    password += pwdArray[Math.floor(Math.random() * pwdArray.length)];
  }

  if (pwdArray.length < 1) {
    return ''
  } else {
    return password;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);