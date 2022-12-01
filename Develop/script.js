//ids password, generate 



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword(){
  //declare global 
  var length = prompt("What is your length?");
  //prompt is declared, try windowconfirm()?
  var numbers = confirm("do you want numbers in your randomised password?");
  var lowercase = confirm("do you want lowercase letters in your randomised password?");
  var uppercase = confirm("do you want uppercase letters in your randomised password?");
  var specialChars = confirm("do you want special characters in your randomised password?");



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
var newpassword = "";
return newpassword;
//return the result
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password; 

}

// Add event listener to generate button - refer to class notes
generateBtn.addEventListener("click", writePassword);
