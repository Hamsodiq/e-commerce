function getUsers() {
    let users =  JSON.parse(localStorage.getItem('users'));
    console.log(users);
    if(!users){
        users = [];
    }
    return users;
}

function saveUser(userParam){
  let users = getUsers();
  users.push(userParam);
  localStorage.setItem("users", JSON.stringify(users));
}


