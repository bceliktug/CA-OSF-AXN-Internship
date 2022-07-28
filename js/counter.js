let addToCartButton = document.querySelectorAll('.addToCartButton');
let likeButton = document.querySelectorAll('.likeButton');
let increaseButton = document.getElementById('increase');



for(let a = 0; a < likeButton.length; a++){
  likeButton[a].addEventListener('click', () =>{
      likeItem();
    }
  )
}
function likeItem(){
  let likeNumber = localStorage.getItem('likeItem');
  likeNumber = parseInt(likeNumber);

  if(likeNumber){
    localStorage.setItem('likeItem', likeNumber + 1);
    document.getElementById('likeBadge').innerHTML= likeNumber + 1;
    likeBadge.style.visibility = 'visible';
    console.log('sadfasfsa');
  }else {
    localStorage.setItem('likeItem', 1);
    document.getElementById('likeBadge').innerHTML= 1;
    console.log('12345');
    likeBadge.style.visibility = 'visible';
  }
}

for (let i = 0; i < addToCartButton.length; i++){
  addToCartButton[i].addEventListener('click', () => {
    cartItem();
    }
  )
}

function cartItem(){
  let itemNumber = localStorage.getItem('cartItem');
  itemNumber = parseInt(itemNumber);

  if(itemNumber){
    localStorage.setItem('cartItem', itemNumber + 1);
    document.getElementById('shopBadge').innerHTML= itemNumber + 1;
    shopBadge.style.visibility = 'visible';
  }else {
    localStorage.setItem('cartItem', 1);
    document.getElementById('shopBadge').innerHTML= 1;
    shopBadge.style.visibility = 'visible';
  }
}

function onLoadNumber(){
  let likeNumber = localStorage.getItem('likeItem');
  let itemNumber = localStorage.getItem('cartItem');

  if(itemNumber){
    document.getElementById('shopBadge').innerHTML= itemNumber;
    shopBadge.style.visibility = 'visible'
  }
  if(likeNumber){
    document.getElementById('likeBadge').innerHTML= likeNumber;
    likeBadge.style.visibility = 'visible';
  }
}
onLoadNumber();