import { clothes, addCloth, saveInfo } from "../data/clothes.js";

const addButton = document.querySelector('.js-add-button');

addButton.addEventListener('click',()=>{
  const category = document.querySelector('#category').value;
  const brand = document.querySelector('.js-brand-input').value;
  const dateOfPurchase = document.querySelector('.js-date-input').value;
  const size = document.querySelector('.js-size-input').value;
  const color = document.querySelector('.js-color-input').value;
  addCloth({
    category,
    brand,
    dateOfPurchase,
    size,
    color
  });
  console.log(clothes);
  saveInfo();
  renderPage();
});

renderPage();
function renderPage(){
  let shirtsHTML = '';
  let pantsHTML = '';
  let othersHTML = '';
  clothes.forEach(cloth => {
    if(cloth.category === 'Shirts'){
      
      shirtsHTML += `
      <div style="margin-top: 0px;" class="shirt-container"> 
        <div style="margin-left: 5px;">${cloth.size}</div>
        <div style="margin-left: 5px;">${cloth.brand}</div>
        <div style="margin-left: 5px;">${cloth.color}</div>
      </div>
      <hr>
      `;
    }
    if(cloth.category === 'Pants'){
      pantsHTML += `
      <div style="margin-top: 0px;" class="shirt-container"> 
        <div style="margin-left: 5px;">${cloth.size}</div>
        <div style="margin-left: 5px;">${cloth.brand}</div>
        <div style="margin-left: 5px;">${cloth.color}</div>
      </div>
      <hr>
      `;
    }
    if(cloth.category === 'Others' ){
      othersHTML += `
      <div style="margin-top: 0px;" class="shirt-container"> 
        <div style="margin-left: 5px;">${cloth.size}</div>
        <div style="margin-left: 5px;">${cloth.brand}</div>
        <div style="margin-left: 5px;">${cloth.color}</div>
      </div>
      <hr>
      `;
    }
    if(cloth.category === 'Sweater'){
      othersHTML += `
      <div style="margin-top: 0px;" class="shirt-container"> 
        <div style="margin-left: 5px;">${cloth.size}</div>
        <div style="margin-left: 5px;">${cloth.brand}</div>
        <div style="margin-left: 5px;">${cloth.color}</div>
      </div>
      <hr>
      `;
    }
    if(cloth.category === 'Traditional Wear'){
        othersHTML += `
        <div style="margin-top: 0px;" class="shirt-container"> 
          <div style="margin-left: 5px;">${cloth.size}</div>
          <div style="margin-left: 5px;">${cloth.brand}</div>
          <div style="margin-left: 5px;">${cloth.color}</div>
        </div>
        <hr>
        `;
    }
  });
  const shirts = document.getElementById('shirts-display');
  shirts.innerHTML = shirtsHTML;
  const pants = document.querySelector('.category-display-pants');
  pants.innerHTML = pantsHTML;
  const others = document.querySelector('.category-display-others');
  others.innerHTML = othersHTML;
}
