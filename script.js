// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var number ="0123456789"
var symbols = "!@#$%^&*("

var userChoiceArray = []

let finalPassword = []


function generatePassword(){

  var passwordLength = prompt('Please insert any number between 8 and 128')
  
  if(passwordLength > 8 && passwordLength < 128){
    var userChoiceUpper = confirm('Would you like upper case')
    if(userChoiceUpper){
      userChoiceArray.push(...upperCase)
    }
    console.log(userChoiceArray)
    
    var userChoiceLower = confirm('Would you like lower case')
    if(userChoiceLower){
      userChoiceArray.push(...lowerCase)
    }
    console.log(userChoiceArray)
    
    var userChoiceNumber = confirm('Would you like number')
    if(userChoiceNumber){
      userChoiceArray.push(...number)
    }
    console.log(userChoiceArray)
    
    var userChoiceSymbols = confirm('Would you like symbols')
    if(userChoiceSymbols){
      userChoiceArray.push(...symbols)
    }
    console.log(userChoiceArray)

    for (let i = 0; i < passwordLength; i++) {
      finalPassword.push(userChoiceArray[Math.floor(Math.random() * userChoiceArray.length)])
      console.log(finalPassword)
    }
    return finalPassword
  }
  else{
    alert('please follow instructions')
    generatePassword()
  }


}



// Write password to the #password input
function writePassword() {

  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password.join('');

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
