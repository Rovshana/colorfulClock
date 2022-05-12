const time = document.querySelector('#time');

function getNow (){
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let partOfDay = "AM";
    if(hours > 12){
        partOfDay = "PM"
    }
    if(hours < 10){
        hours = "0" + hours;

    }
    if(minutes < 10){
        minutes = "0" + minutes;

    }
    if(seconds < 10){
        seconds = "0" + seconds;

    }
    let html = `
    <span>${hours}</span>:
    <span>${minutes}</span>:
    <span>${seconds}</span>
    <span>${partOfDay}</span>
    `
    time.innerHTML = html
}
setInterval(getNow, 1000);