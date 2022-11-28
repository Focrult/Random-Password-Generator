// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword(){
  //list what is to be included in password
  //length - max 128 characters
  //numbers
  //lowercase letters
  //uppercase letters
  //special characters

  //minimum for each? Check!

  //array function for each event - use math random or crypto?

  //if else statements. - each event

//new var for the password that has been randomly generated

//use either a for or while loop - check this

//return the result
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
