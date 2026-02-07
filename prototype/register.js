
function checkPasswordsMatch() 
{
  pass1 = document.getElementById("password").value;
  pass2 = document.getElementById("confirmPassword").value;
  errorMessage = document.getElementById("PasswordMatchErrorMessage");

  if(pass1 != pass2){
    errorMessage.innerHTML="Passwords do not match";
    document.getElementById("Register").disabled = true;
  }
  else{
    errorMessage.innerHTML="";
    document.getElementById("Register").disabled = false;
  }

}
