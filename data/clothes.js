export let clothes = JSON.parse(localStorage.getItem('clothes')) || [];

export function saveInfo(){
  localStorage.setItem('clothes',JSON.stringify(clothes));
}

let x = '1';

export function addCloth(cloth){
  clothes.push({
    productId: x,
    category: cloth.category,
    brand: cloth.brand,
    dateOfPurchase: cloth.dateOfPurchase,
    size: cloth.size,
    color: cloth.color
  });
  let y = Number(x);
  y++;
  x = String(y);
}