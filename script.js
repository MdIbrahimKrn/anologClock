const clock = document.querySelector(".clock");
const seconds = clock.querySelector("[data-seconds-pin]");
const minutes = clock.querySelector("[data-minutes-pin]");
const hours = clock.querySelector("[data-hours-pin]");
const markWidth = 4;
let width;

for(let i=1; i<=60;i++){
    width = (i%5 == 0)? markWidth:markWidth/2;  

    const el = document.createElement('span');
    el.classList.add("mark");
    el.style.setProperty("--rotation",i)
    el.style.setProperty("--mark-width", width)
    clock.append(el)
}

setInterval(setClock,1000)

function setClock(){
    const newTime = new Date();
    const secondsRatio = newTime.getSeconds()/60;
    const minutesRatio = (secondsRatio + newTime.getMinutes())/60;
    const hoursRatio =(minutesRatio + newTime.getHours())/12;

    setDeeg(hours,hoursRatio)
    setDeeg(minutes,minutesRatio)
    setDeeg(seconds,secondsRatio) 
}

function setDeeg(el,deeg){
    el.style.setProperty("--rotation",deeg*360);
}

setClock();