// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword() {
  
  const length = parseInt(prompt("Enter password length (between 8 and 128 characters):"));

  const includeLowercase = confirm("Include lowercase letters?");
  const includeUppercase = confirm("Include uppercase letters?");
  const includeNumbers = confirm("Include numbers?");
  const includeSymbols = confirm("Include symbols?");
  
  
  let possibleChars = "";
  if (includeLowercase) {
    possibleChars += "abcdefghijklmnopqrstuvwxyz";
  }
  if (includeUppercase) {
    possibleChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (includeNumbers) {
    possibleChars += "0123456789";
  }
  if (includeSymbols) {
    possibleChars += "!@#$%^&*()_+-={}[]|\\:;<>,.?/~";
  }
  
 
  let password = "";
  for (let i = 0; i < length; i++) {
    password += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
  }
  
 
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
}