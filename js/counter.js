let addToCartButton = document.getElementById('addToCartButton');
let likeButton = document.getElementById('likeButton');
let itemCounter = 0;
let likeCounter = 0 ;

addToCartButton.onclick = function click() {
  itemCounter += 1;
  localStorage.setItem('cartItem', itemCounter);
  document.getElementById('shopBadge').innerHTML=itemCounter;
  shopBadge.style.visibility = 'visible';
};

likeButton.onclick = function click() {
  likeCounter += 1;
  localStorage.setItem('likeItem', likeCounter);
  document.getElementById('likeBadge').innerHTML=likeCounter;
  likeBadge.style.visibility = 'visible';
  console.log('like like ')
};