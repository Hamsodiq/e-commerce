
window.onload=function(){
    document.getElementById("newPasswordForm").addEventListener("submit", newPasswordValidate);
     document.getElementById("verifyBtn").addEventListener("click", function() {
    // Get the value entered in the input
    const enteredCode = document.getElementById("codeInput").value;
    const correctCode = "123456";
     const inputCodeOutput = document.getElementById('codeInputFeedback');

    //Check if code is entered

    if (enteredCode.length > 6 || enteredCode != correctCode) {
      inputCodeOutput.innerHTML = 'Invalid Code <br> Hint: code incorrect and verification code must be six characters';
      inputCodeOutput.style.color = 'red';
      document.getElementById("codeInput").style.border = '2px solid red';

      return;
    }
    if (enteredCode === correctCode) {
      inputCodeOutput.innerHTML = 'Email sucessfully verified';
      inputCodeOutput.style.color = 'green';
      document.getElementById("codeInput").style.border = '1px solid #A2A6B0';
      document.getElementById("passwordPage").hidden = false;
    }
  });  
}

function newPasswordValidate(e) {
  e.preventDefault();
  const enteredCode = document.getElementById("codeInput").value;
  const myNewPassword = document.getElementById("newPassowrd").value;
  const confirmMyPassword = document.getElementById("confirmNewPassowrd").value;
  
  if(confirmMyPassword != myNewPassword){
    isPasswordTheSame.innerHTML = 'password not the same';
    isPasswordTheSame.style.color = 'red';
    document.getElementById("confirmNewPassowrd").style.border = '2px solid red';
    return;
  } 

  let lastUserMail = sessionStorage.getItem('lastUserForgotPasswordEmail')
  console.log(lastUserMail);
  const forgetPasswordUserIndex = getUsers().findIndex((user) => user.email === lastUserMail);

  if(forgetPasswordUserIndex == -1){
    console.log('cannot reset');
    return;
  } 

  let forgotPasswordUser = getUsers()[forgetPasswordUserIndex];
  console.log(forgotPasswordUser);
  forgetPasswordUser.password = myNewPassword;

  
  
}