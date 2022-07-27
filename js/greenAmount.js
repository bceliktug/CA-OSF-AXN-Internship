let decreaseButton = document.getElementById('decrease');
let greenButton = document.getElementById('greenButton');


let amountNumber = 0;
increaseButton.onclick = () => {
  amountNumber += 1;
  document.getElementById('amount').innerHTML= amountNumber;
 }

 greenButton.onclick = () => {
   let itemNumber = localStorage.getItem('cartItem');
  if(!itemNumber){
    localStorage.setItem('cartItem', 0);
    itemNumber = 0;
  }
    itemNumber = parseInt(itemNumber) + amountNumber;
    localStorage.setItem('cartItem', itemNumber);
    document.getElementById('shopBadge').innerHTML= itemNumber;
 }

 decreaseButton.onclick = () => {
  if(amountNumber > 0){
    amountNumber -= 1;
    document.getElementById('amount').innerHTML= amountNumber;
  }
 }