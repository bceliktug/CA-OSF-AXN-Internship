let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 2;

loadMoreBtn.onclick = () =>{
    let boxes = [...document.querySelectorAll('.popular-items .container .items')];
    for (var i = currentItem; i < currentItem + 1; i++){
        boxes[i].style.display = 'flex';
    }
    currentItem += 1;

    if(currentItem >= boxes.length){
        loadMoreBtn.style.display = 'none';
    }
}