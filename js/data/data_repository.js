function getUsers() {
    let users =  JSON.parse(localStorage.getItem('users'));
    if(!users){
        users = [];
    }
    return users;
}

function saveUser(userParam){
  let users = getUsers();
  users.push(userParam);
  saveUsers(users); // or localStorage.setItem("users", JSON.stringify(users));
}

function saveUsers(usersParam){
 console.log(usersParam);
 localStorage.setItem("users", JSON.stringify(usersParam));
}



