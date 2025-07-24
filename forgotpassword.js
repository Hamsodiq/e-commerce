window.onload=function(){
    document.getElementById("forgotPasswordForm").addEventListener("submit", emailValidate);

}

function emailValidate(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;

    const foundedUser = getUsers().find((user) => user.email === email);
    console.log(foundedUser);
    

    if (!foundedUser) { 
        // respond with invalid email:
        emailAlert.innerHTML = 'Email address is not valid';
        emailAlert.style.color = 'red';
    } else {
        // respond with valid email:
        emailAlert.innerHTML = 'Email address is valid';
        emailAlert.style.color = 'green';
        // lastUserForgotPassowrdEmail = email;
        // load new page if email is valid:
        window.location.href = "newpassword.html";
        sessionStorage.setItem('lastUserForgotPasswordEmail', email);
    }
}