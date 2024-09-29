import {clothes} from '../data/clothes.js';


let now = new Date();
const today = document.querySelector('.wht');

function getDay(date) {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return daysOfWeek[date.getDay()];
}

const todayDate = getDay(now);
today.innerHTML = `${todayDate}'s, outfit:`;

let randomIndex = Math.floor(Math.random() * clothes[0].length);
let randomShirt = clothes[0][randomIndex];



let randomIndex1 = Math.floor(Math.random() * clothes[1].length);
let randomPant = clothes[1][randomIndex1];


const shirt = document.querySelector('.shirt-suggest-div');

shirt.innerHTML = `
  <div>Brand: ${randomShirt.brand}</div>
  <div>Color: ${randomShirt.color}</div>
  <div>Date of Purchase: ${randomShirt.dateOfPurchase}</div>
  <div>Size: ${randomShirt.size}</div> 
`;

const pant = document.querySelector('.pant-suggest-div');


pant.innerHTML = `
  <div>Brand: ${randomPant.brand}</div>
  <div>Color: ${randomPant.color}</div>
  <div>Date of Purchase: ${randomPant.dateOfPurchase}</div>
  <div>Size: ${randomPant.size}</div> 
`;