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
  clothes.forEach((cloth1,index) => {
    console.log(typeof cloth1);
    cloth1.forEach((cloth2) =>{
      if(index === 0){
        shirtsHTML += `
        <div style="margin-top: 0px;" class="shirt-container"> 
          <div style="margin-left: 5px;">${cloth2.size}</div>
          <div style="margin-left: 5px;">${cloth2.brand}</div>
          <div style="margin-left: 5px;">${cloth2.color}</div>
        </div>
        <hr>
        `;
      }

      if(index === 1){
        
        pantsHTML += `
        <div style="margin-top: 0px;" class="shirt-container"> 
          <div style="margin-left: 5px;">${cloth2.size}</div>
          <div style="margin-left: 5px;">${cloth2.brand}</div>
          <div style="margin-left: 5px;">${cloth2.color}</div>
        </div>
        <hr>
        `;
      }

      if(index === 2){
        
      othersHTML += `
      <div style="margin-top: 0px;" class="shirt-container"> 
        <div style="margin-left: 5px;">${cloth2.size}</div>
        <div style="margin-left: 5px;">${cloth2.brand}</div>
        <div style="margin-left: 5px;">${cloth2.color}</div>
      </div>
      <hr>
      `;
      }
    });


      




  

    
  });

  const shirts = document.getElementById('shirts-display');
  shirts.innerHTML = shirtsHTML;
  const pants = document.querySelector('.category-display-pants');
  pants.innerHTML = pantsHTML;
  const others = document.querySelector('.category-display-others');
  others.innerHTML = othersHTML;
}
