    let loadTxtBtn = document.querySelector('#txtBttn');
    let spnVis = document.querySelector('#dots');
    let moreTxt = document.querySelector('#more');

    loadTxtBtn.onclick = () => {
        if(spnVis.style.display === 'none'){
            spnVis.style.display = 'inline',
            loadTxtBtn.innerHTML = 'Read more';
            moreTxt.style.display = 'none';
        }
        else{
            spnVis.style.display = 'none';
            loadTxtBtn.innerHTML = 'Read less';
            moreTxt.style.display = 'inline';
        }
    }