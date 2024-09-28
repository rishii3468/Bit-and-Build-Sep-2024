import { users , saveInfo, adduser} from "../data/login-info.js";


const user = document.querySelector('.js-submit-button');


user.addEventListener('click', ()=>{
  const name = document.querySelector('.js-name-input').value;
  const email = document.querySelector('.js-email-input').value;

  const passwd = document.querySelector('.js-passwd-input').value;
  if(email.includes('@gmail')){
    adduser({
      name,
      email,
      passwd
    });
    saveInfo();
    alert('You have successfully signed up!');
    window.location.href = "/login.html";
  }
  else{
    alert('Enter valid email');
  }


 
});