export let users = JSON.parse(localStorage.getItem('users')) || [{
  name: 'admin',
  email: 'admin',
  passwd: 'admin'
}];


export function saveInfo(){
  localStorage.setItem('users',JSON.stringify(users));
}

export function adduser(user){
  users.push({
    name: user.name,
    email: user.email,
    passwd: user.passwd
  });
}