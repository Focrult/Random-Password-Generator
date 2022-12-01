//ids password, generate 



// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function generatePassword(){
  //declare global for function
  var length = prompt("What is your length?");
  if(length > 128){
    alert("Length must be less than 128");
    return;
  }
  //prompt is declared, try windowconfirm()?
  //confirm() method returns true if user clicks ok, otherwise it is false!
  var numbers = confirm("do you want numbers in your randomised password?");
  var lowercase = confirm("do you want lowercase letters in your randomised password?");
  var uppercase = confirm("do you want uppercase letters in your randomised password?");
  var specialCharacters = confirm("do you want special characters in your randomised password?");

  //function inside a function 
  var testGeneraterandom = { //single expression function - to return whats to the right of the equals sign
    randomNum: function(){ //randomise numbers ---- method function(){}
      return Math.floor(Math.random() * 10) //0-9 random numbers
    },
    randomlowerCase: function(){  //randomise lowercase
     return Math.random().toString(36); //base 36
    },
    randomUppercase: function(){    //randomise uppercase - added : to remove error
      return toUpperCase(Math.random().toString(36)); //base 36
    }, //added comma to remove error
    /*
    function randomSpecial():{   //randomise specialCharacters
      Math.floor(Math.random() * 10) 
    },
   */
  };


  //if else statements
  if(numbers === true){ //strict equality --> === true
    testGeneraterandom.randomNumber();

  }if(lowercase === true){
    testGeneraterandom.randomlowerCase();

  }if(uppercase === true){
    testGeneraterandom.randomUppercase();
    
  }if(specialCharacters === true){
    testGeneraterandom.randomrandomSpecial();
  }


  //minimum for each? Check! what will happen if minimum ignored? is it necessary.

//new var for the password that has been randomly generated
var newpassword = "";
for(var i = 0; i < length; i++){
  var random = 

newpassword += random;
}

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
