const user = new User('Hamsodiq', 'tola@gmail.com', 'islahudeen', 'password123', '08146282838'); 

const users = [user];

let lastUserForgotPassowrdEmail = '';

let loggedInUser;


export {users, lastUserForgotPassowrdEmail, loggedInUser};