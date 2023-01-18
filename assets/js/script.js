// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  
  // Array of numeric characters to be included in password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
  
  // Function to prompt user for password options
  function getPasswordOptions() {
    var length = parseInt(prompt("How many characters would you like your password to contain?")); // Conditional statement to check if password length is a number. Prompts end if this evaluates false

    //if the input is not a number or is less than 10 or greater than 64, the user will be alerted and the function will end
    if (isNaN(length) || length < 10 || length > 64) {
      alert("Password length must be between 10 and 64 characters. Number selection must only also contain numbers.");
      return;
    }
    var hasSpecialCharacters = confirm("Click OK to confirm including special characters.");
    var hasNumericCharacters = confirm("Click OK to confirm including numeric characters.");
    var hasLowerCasedCharacters = confirm("Click OK to confirm including lowercase characters.");
    var hasUpperCasedCharacters = confirm("Click OK to confirm including uppercase characters.");
    if (!hasSpecialCharacters && !hasNumericCharacters && !hasLowerCasedCharacters && !hasUpperCasedCharacters) {
      alert("Must select at least one character type.");
      return;
    }
    return {
      length,
      hasSpecialCharacters,
      hasNumericCharacters,
      hasLowerCasedCharacters,
      hasUpperCasedCharacters
    };
  }
  
  // Function for getting a random element from an array
  function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  // Function to generate password with user input
  function generatePassword() { // Get options from user
    var options = getPasswordOptions(); // Variable to store password as it's being concatenated
    if (!options) return; // Array to store types of characters to include in password
    var possibleCharacters = [    ...(options.hasSpecialCharacters ? specialCharacters : []), // Conditional statement that adds array of special characters into array of possible characters based on user input
      ...(options.hasNumericCharacters ? numericCharacters : []), // Conditional statement that adds array of numeric characters into array of possible characters based on user input
      ...(options.hasLowerCasedCharacters ? lowerCasedCharacters : []), // Conditional statement that adds array of lowercase characters into array of possible characters based on user input
      ...(options.hasUpperCasedCharacters ? upperCasedCharacters : []) // Conditional statement that adds array of uppercase characters into array of possible characters based on user input
    ];



    var password = ""; // Loop over length option and add one random character from the possibleCharacters array to the password variable
    for (var i = 0; i < options.length; i++) { // Add final password to the password variable and return
      password += getRandom(possibleCharacters); 
    }
    return password; // Return the generated password
  }
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





