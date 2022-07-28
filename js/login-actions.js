let userLogin = document.querySelector('#user-login')
let loginTab = document.querySelector('.login-tab')

userLogin.addEventListener('click', function () {
    loginTab.style.display = 'flex';
})

window.addEventListener('keydown', function(){
     if (event.key === 'Escape') {
    loginTab.style.display = 'none'
  }
})
