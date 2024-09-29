import {clothes} from '../data/clothes.js';


let randomIndex = Math.floor(Math.random() * clothes[0].length);
let randomShirt = clothes[0][randomIndex];



let randomIndex1 = Math.floor(Math.random() * clothes[1].length);
let randomPant = clothes[1][randomIndex1];


const shirt = document.querySelector('.details1-box');

shirt.innerHTML = `
  <div class="content">Brand: ${randomShirt.brand}</div>
  <div class="content">Color: ${randomShirt.color}</div>
  <div class="content">Date of Purchase: ${randomShirt.dateOfPurchase}</div>
  <div class="content">Size: ${randomShirt.size}</div> 
`;

const pant = document.querySelector('.details2-box');


pant.innerHTML = `
  <div class="content">Brand: ${randomPant.brand}</div>
  <div class="content">Color: ${randomPant.color}</div>
  <div class="content">Date of Purchase: ${randomPant.dateOfPurchase}</div>
  <div class="content">Size: ${randomPant.size}</div> 
`;