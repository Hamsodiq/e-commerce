window.onload=function(){
    document.getElementById("loginForm").addEventListener("submit", validate);
}

function validate(e) {
    e.preventDefault();
    
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    const user = users.find((user) => user.email === email);
    if (!user) {
        // respond with invalid login details
       return;
    }

    if (user.password !== password) {
        // respond with invalid login details
        return;
    }

    loggedInUser = user;
}

// if (email === 'tola@gmail.com' && password === 'tola')
    // {
    //     alert('Login successfully!');
    // } else {
    //     alert('Login failed');
    // }


// const emailField = document.getElementById('email');
// const passwordField = document.getElementById('password');


        // emailField.addEventListener('click', function(event) {
        //     const emailField = document.getElementById('email').value;
        //     console.log(emailField);
        // });

    //      emailField.addEventListener('click', function(event) {
    //         email = emailField.value;
    //         console.log(email);
    //     });
    
    
    
    
    
    
    // const loginForm = document.getElementById('loginForm');
    // const signInButton = document.getElementById('signIn');
    // const emailInput = document.getElementById('email');
    // const passwordInput = document.getElementById('password');

    //  loginForm.addEventListener('submit', function(event) {
    //         if()
    //     });







//      function loginForm(event) {
//         event.preventDefault(); 

//         const email = emailInput.value;
//         const password = passwordInput.value;

//         console.log('Username:', email);
//         console.log('Password:', password);

//         // Example: simple validation
//         if (username === '' || password === '') {
//             alert('Please enter both username and password.');
//         } else {
//             // Proceed with login logic
//             alert('Attempting login...');
//         }
//     }
    


