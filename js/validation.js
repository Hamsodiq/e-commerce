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
  const user = new User(fullName, email, address, password, phoneNo);

  users.push(user);
  console.log(users.length);
  
}