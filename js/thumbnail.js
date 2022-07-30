let thumbnail = $(".thumbnail");
for (let index = 0; index < thumbnail.length; index++) {
    const element = thumbnail[index];
      element.onclick = () => {
        let newSelection = element.dataset.big;
        let oldSelected = document.querySelector('.selected');
        oldSelected.classList.remove('selected');
        element.classList.add('selected');
        let $img = document.querySelector('.primary');
        $img.style.backgroundImage = `url(${newSelection})`;
    }; 
}

