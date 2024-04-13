var generateBtn = document.querySelector("#generate");

function createPassword() {
  // Window prompts for password options
  var char = parseInt(
    window.prompt(
      "Please select between 8 and 128 characters for your password."
    )
  );
  if (char < 8 || char > 128 || isNaN(char)) {
    return "Please select a number between 8 and 128.";
  }

  var lowerCase = window.confirm("Do you want lowercase letters?");
  var upperCase = window.confirm("Do you want uppercase letters?");
  var includeNumbers = window.confirm("Do you want numbers?");
  var includeSpecial = window.confirm("Do you want special characters?");

  // Password allowed characters
  var password = "";
  var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberChars = "0123456789";
  var specialChars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  var required = "";

  if (includeNumbers) required += numberChars;
  if (lowerCase) required += lowerCaseChars;
  if (upperCase) required += upperCaseChars;
  if (includeSpecial) required += specialChars;

  if (required === "") {
    return "Please select at least one character type.";
  }

  for (var i = 0; i < char; i++) {
    var index = Math.floor(Math.random() * required.length);
    password += required[index];
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = createPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
