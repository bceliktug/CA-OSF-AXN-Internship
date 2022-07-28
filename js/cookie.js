let cookieModal = document.querySelector('.cookie');
let cancelButton = document.querySelector('.cookie-x');
let acceptButton = document.querySelector('.cookie-accept');


cancelButton.addEventListener('click', function () {
    cookieModal.classList.remove('active')
})

acceptButton.addEventListener('click', function () {
    cookieModal.classList.remove('active')
    localStorage.setItem("cookieAccepted", "yes")
})

setTimeout(function() {
    let cookieAccepted = localStorage.getItem("cookieAccepted")
    if(cookieAccepted != "yes"){
        cookieModal.classList.add('active')
    }
},10000)