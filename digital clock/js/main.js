function updateTime() {
    let clockElement = document.querySelector('.clock');
    let timeBrussels = new Date();
    let hoursBrussels = (timeBrussels.getHours() < 10) ? "0" + timeBrussels.getHours() : timeBrussels.getHours();
    let minutesBrussels = (timeBrussels.getMinutes()) < 10 ? "0" + timeBrussels.getMinutes(): timeBrussels.getMinutes();
    let secondsBrussels = (timeBrussels.getSeconds()) < 10 ? "0" + timeBrussels.getUTCSeconds(): timeBrussels.getSeconds();

    let hoursNewYork = hoursBrussels - 6;
    switch(hoursNewYork){
        case -1: 
            hoursNewYork = 23;
            break;
        case -2: 
            hoursNewYork = 22;
            break;
        case -3: 
            hoursNewYork = 21;
        break;
        case -4: 
            hoursNewYork = 20;
            break;
        case -5: 
            hoursNewYork = 19;
            break;
        case -6: 
            hoursNewYork = 18;
        break;
        default:
            break;
    }
    let minutesNewYork = minutesBrussels;
    let secondsNewYork = secondsBrussels;

    clockElement.innerHTML = '<div class="timeBrussels"><h1 class="timezone">Brussels</h1>' + hoursBrussels + ':' + minutesBrussels + ':' + secondsBrussels + '<div>' + '<div class="timeNewYork"><h1 class="timezone">New York</h1>' + hoursNewYork + ':' + minutesNewYork + ':' + secondsNewYork + '<div>';
    console.log(hoursBrussels + ":" + minutesBrussels + ":" + secondsBrussels)
    
}

setInterval(updateTime, 200);