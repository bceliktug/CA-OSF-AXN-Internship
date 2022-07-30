let testSec = document.getElementById('testCountDown');
let testSecDay = document.getElementById('testCountDownDay');
let testHour = document.getElementById('testCountDownHour');
let testMin = document.getElementById('testCountDownMin');

var currentDate = new Date();
var dd = String(currentDate.getDate()).padStart(2, '0');
var mm = String(currentDate.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = currentDate.getFullYear();
let releaseTime = new Date(`August 29 2022 00:00:00`);

function updateCountDown() {
    let currentTime = new Date().getTime();
    let diff = releaseTime - currentTime;
    console.log(diff);
    let d = Math.floor(diff/1000/60/60/24);
    let h = Math.ceil(diff/1000/60/60) %24;
    let m = Math.floor(diff/1000/60) % 60;
    let s = Math.floor(diff/1000) % 60;
    console.log(h)
    testSecDay.innerHTML = d;
    testHour.innerHTML = h < 10 ? '0' + h:h;
    testMin.innerHTML = m < 10 ? '0' + m:m;
    testSec.innerHTML = s <10 ? '0' + s:s;

    getRangeHours(h,"hour");
    getRangeTime(d,"day");
    getRangeTime(s,"sec");
    getRangeTime(m,"min");
    
     
}
setInterval(updateCountDown, 1000);

function getRangeHours(time, keyId) {
    if(time==0){
        getDegrees(keyId,"0deg","0deg","0deg","0deg");
    }
    else if(time>0 && time<12){
        let calc=`${180*time/12}deg`
        getDegrees(keyId,calc,calc,"0deg","0deg");
    }
    else if (time==12){
        getDegrees(keyId,"180deg","180deg","0deg","0deg");
    }
    else if(time>12 && time<24){
        let calc=`${180*(time-12)/12}deg`
        getDegrees(keyId,"180deg","180deg",calc,calc);
    }
    else {
       getDegrees(keyId,"0deg","0deg","0deg","0deg");
    }  
}

function getRangeTime(time, keyId) {
    if(time==0){
        getDegrees(keyId,"0deg","0deg","0deg","0deg");
    }
    else if(time>0 && time<30){
        let calc=`${180*time/30}deg`
        getDegrees(keyId,calc,calc,"0deg","0deg");
    }
    else if (time==30){
        getDegrees(keyId,"180deg","180deg","0deg","0deg");
    }
    else if(time>30 && time<60){
        let calc=`${180*(time-30)/30}deg`
        getDegrees(keyId,"180deg","180deg",calc,calc);
    }
    else {
       getDegrees(keyId,"0deg","0deg","0deg","0deg");
    }  
}

function getDegrees(keyId,first,second,third,fourth) {
 document.documentElement.style
    .setProperty(`--first-start-deg-${keyId}`, first);
    document.documentElement.style
    .setProperty(`--first-end-deg-${keyId}`, second);
    document.documentElement.style
    .setProperty(`--last-start-deg-${keyId}`, third);
    document.documentElement.style
    .setProperty(`--last-end-deg-${keyId}`, fourth);
}