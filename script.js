// Assignment Code
var generateBtn = document.querySelector("#generate");
//setting Global Variable Arrays for all possible characters
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","N","Z"];
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var sym = ["!","#","$","%","&","'","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~",";"]
var num = ["0","1","2","3","4","5","6","7","8","9"];

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//function generate password based on ursers answer to prompts
function generatePassword() {
   var charsArr = [];
   var charsStr = "";

  var passLenghth = window.prompt("How many characters long should your password be? password must be between 8 and 128 in lenghth.");

  if (passLenghth< 8 || passLenghth > 128) {
    alert("password must be between 8 and 128 in lenghth")
  }
    //additional prompts that adds various character types to an array of possiple charters depending on users input
    if (isNaN(passLenghth)=== true){
      alert("passwordlength must be a valiable number")
    } 

    else {
      if (window.confirm("Do you want upper case letters in your password?")){
        Array.prototype.push.apply(charsArr, upper);
      }
        
      if (window.confirm("Do you want lowerr case letters in your password?")){
        Array.prototype.push.apply(charsArr, lower);
      }
      
      if (window.confirm("Do you want symbols in your password?")){
        Array.prototype.push.apply(charsArr, sym);
      }

      if (window.confirm("Do you want numbers in your password?")){
        Array.prototype.push.apply(charsArr, num);
      }
      //checks if at least one character type is chosen
      if(charsArr.length===0){
        alert("There must be at least 1 type of character to create a password.")
      }
      else {
      //for loop iterates for chosen length and randomely chooses characters of chosen types for each iteration to be added charsStr or final password
        for(var i=0; i<passLenghth; i++){
          var random = Math.floor(Math.random()*charsArr.length)
          charsStr += charsArr[random];
            }
          }
        return charsStr;
        }
  }

generateBtn.addEventListener("click", writePassword);

