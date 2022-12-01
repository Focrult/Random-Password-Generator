//ids password, generate 



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword(){
  const characters1 = 'abcdefghijklmnopqrstuvwxyz';
  const characters2 = '!@#$%^&*()';
  const characters3 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  var length = prompt("What is your length?");
  if(length > 128){
    alert("Length must be less than 128");
    return;
  }
  //confirm() method returns true if user clicks ok, otherwise it is false!
  var numbers = confirm("Do you want numbers in your randomised password?");
  var lowercase = confirm("Do you want lowercase letters in your randomised password?");
  var uppercase = confirm("Do you want uppercase letters in your randomised password?");
  var specialCharacters = confirm("Do you want special characters in your randomised password?");

  //function inside a function 
  var RandomGenerator = { //single expression function - to return whats to the right of the equals sign 
    randomNum: function(){ //randomise numbers ---- method function(){}
      return Math.floor(Math.random() * 10); //0-9 random numbers
    },
    randomlowerCase: function(){  //randomise lowercase
     return characters1.charAt(Math.floor(Math.random() * characters1.length));
    },
    randomSpecial: function(){    //randomise uppercase - added : to remove error
      return characters2.charAt(Math.floor(Math.random() * characters2.length));
    }, 
    randomUppercase: function (){   //randomise specialCharacters
      return characters3.charAt(Math.floor(Math.random() * characters3.length)); 
    },
  };
//minimum character
  var MinCount = 0;
  var minNum = ''; //empty
  var minLow = '';
  var minUpper = '';
  var minSChar = '';
  //if else statements

var newpassword = '';
//new var for the password that is to be randomly generated

for(var i = 0; i < (length - MinCount); i++){ //for loop - to generate those random numbers
  if(numbers === true){ //strict equality --> === 
    minNum = RandomGenerator.randomNum();
    MinCount++;
  }if(lowercase === true){
    minLow = RandomGenerator.randomlowerCase();
    MinCount++;
  }if(uppercase === true){
    minUpper = RandomGenerator.randomUppercase();
    MinCount++;
  }if(specialCharacters === true){
    minSChar = RandomGenerator.randomSpecial();
    MinCount++;
  }
var newpasswordarray = newpassword + minNum + minLow + minUpper + minSChar;
} 
return newpassword;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password; 

}

// Add event listener to generate button - refer to class notes
generateBtn.addEventListener("click", writePassword);
