let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

var currentDate = new Date();
var dd = String(currentDate.getDate()).padStart(2, '0');
var mm = String(currentDate.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = currentDate.getFullYear();
let releaseTime = new Date(`August 29 2022 00:00:00`);

function updateCountDown() {
    let currentTime = new Date().getTime();
    let diff = releaseTime - currentTime;
    let d = Math.floor(diff/1000/60/60/24);
    let h = Math.floor(diff/1000/60/60) %24;
    let m = Math.floor(diff/1000/60) % 60;
    let s = Math.floor(diff/1000) % 60;
    days.innerHTML = d;
    hours.innerHTML = h <10 ? '0' + h:h;
    minutes.innerHTML = m <10 ? '0' + m:m;
    seconds.innerHTML = s <10 ? '0' + s:s;
}
setInterval(updateCountDown, 1000);
