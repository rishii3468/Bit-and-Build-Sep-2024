import { users } from "../data/login-info.js";

const user = document.querySelector('.js-login-button');

user.addEventListener('click',()=>{
  const email = document.querySelector('.js-email-input').value;
  const passwd = document.querySelector('.js-passwd-input').value;
  let flag = false;
  users.forEach(user =>{
    console.log(user.email);
    console.log(user.passwd);
    if(user.email === email && user.passwd === passwd){
      window.location.href = "/home.html";
      flag = true;
    }
  });
  if(flag==false){
    alert('You do no have an account! Sign up!');
  }
  document.querySelector('.js-email-input').value = "";
  document.querySelector('.js-passwd-input').value = "";
});