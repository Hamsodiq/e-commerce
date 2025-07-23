window.onload=function(){
  document.getElementById("registrationForm").addEventListener("submit", validate);
}

function validate(e) {
    e.preventDefault();
    
    let fullName = document.getElementById('fullName').value;
    let phoneNo = document.getElementById('phoneNo').value;
    let address = document.getElementById('address').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

  // // console.log(users.length);


  const newuser = users.find((user) => user.email === email);
  console.log(newuser);
  
    if (!newuser) {
      const newUserInfo = new User(fullName, email, address, password, phoneNo);
      console.log(newUserInfo);
      users.push(newUserInfo);
      
      // respond with invalid login details
      console.log("Email is valid");
      registrationEmailCheck.innerHTML = 'Email addresses is valid';
      registrationEmailCheck.style.color = 'green';
    return;
    
  } else {
    console.log("email is invalid");
    registrationEmailCheck.innerHTML = 'Email addresses has already been registered.';
    registrationEmailCheck.style.color = 'red';
  }

  



  
  
  

  //check if user email is not registered already, collect email if i don't have the same email already
}