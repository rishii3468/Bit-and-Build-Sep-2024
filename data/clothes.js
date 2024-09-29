export let clothes = JSON.parse(localStorage.getItem('clothes')) || [[],[],[]];

export function saveInfo(){
  localStorage.setItem('clothes',JSON.stringify(clothes));
}

let x = '1';

export function addCloth(cloth){
  if(cloth.category === 'Shirts'){
    clothes[0].push({
      productId: x,
      category: cloth.category,
      brand: cloth.brand,
      dateOfPurchase: cloth.dateOfPurchase,
      size: cloth.size,
      color: cloth.color
    });
  }
  if(cloth.category === 'Pants'){
    clothes[1].push({
      productId: x,
      category: cloth.category,
      brand: cloth.brand,
      dateOfPurchase: cloth.dateOfPurchase,
      size: cloth.size,
      color: cloth.color
    });
  }
  if(cloth.category === 'Others' || cloth.category === 'Traditional Wear' || cloth.category === 'Sweater' ){
    clothes[2].push({
      productId: x,
      category: cloth.category,
      brand: cloth.brand,
      dateOfPurchase: cloth.dateOfPurchase,
      size: cloth.size,
      color: cloth.color
    });
  }


  let y = Number(x);
  y++;
  x = String(y);
}