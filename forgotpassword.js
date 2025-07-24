window.onload=function(){
    document.getElementById("forgotPasswordForm").addEventListener("submit", emailValidate);

}

function emailValidate(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;

    const foundedUser = getUsers().find((user) => user.email === email);

    if (!foundedUser) { 
        // respond with invalid email:
        email.innerHTML = 'Email address is not valid';
        email.style.color = 'red';
    } else {
        // respond with valid email:
        email.innerHTML = 'Email address is valid';
        email.style.color = 'green';
        // lastUserForgotPassowrdEmail = email;
        // load new page if email is valid:
        window.location.href = "newpassword.html";
    }

}