functiblock on updateTime() {
    let clockElement = document.querySelector('.clock');
    let timeBrussels = new Date();
    let hoursBrussels = (timeBrussels.getHours() < 10) ? "0" + timeBrussels.getHours() : timeBrussels.getHours();
    let minutesBrussels = (timeBrussels.getMinutes()) < 10 ? "0" + timeBrussels.getMinutes(): timeBrussels.getMinutes();
    let secondsBrussels = (timeBrussels.getSeconds()) < 10 ? "0" + timeBrussels.getUTCSeconds(): timeBrussels.getSeconds();

    clockElement.innerHTML = '<div class="timeBrussels"><h1 class="timezone">Brussels</h1>' + hoursBrussels + ':' + minutesBrussels + ':' + secondsBrussels + '<div>' + '<div class="timeNewYork"><h1 class="timezone">New York</h1>' + hoursNewYork + ':' + minutesNewYork + ':' + secondsNewYork + '<div>';
    console.log(hoursBrussels + ":" + minutesBrussels + ":" + secondsBrussels);
    
}

setInterval(updateTime, 200);

function binairyClockconversion(time) {
    let tempStr="";
    switch(time) {
        case 1:
            tempStr=`
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block on"></div>
            `
            return tempStr;
            break;
            case 2:
            tempStr=`
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block off"></div>
            `
            return tempStr;
            break;
            case 3:
            tempStr=`
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block on"></div>
            `
            return tempStr;
            break;
            case 4:
            tempStr=`
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block off"></div>
            `
            return tempStr;
            break;
            case 5:
            tempStr=`
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block on"></div>
            `
            return tempStr;
            break;
            case 6:
            tempStr=`
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block on"></div>
                <div class="block off"></div>
            `
            return tempStr;
            break;
            case 7:
            tempStr=`
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block on"></div>
                <div class="block on"></div>
            `
            return tempStr;
            break;
            case 8:
            tempStr=`
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block off"></div>
            `
            return tempStr;
            break;
            case 9:
            tempStr=`
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block on"></div>
            `
            return tempStr;
            break;
            case 10:
            tempStr=`
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block off"></div>
            `
            return tempStr;
            break;
            case 11:
            tempStr=`
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block on"></div>
            `
            return tempStr;
            break;
            case 12:
            tempStr=`
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block off"></div>
            `
            return tempStr;
            break;
            case 13:
            tempStr=`
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block on"></div>
            `
            return tempStr;
            break;
            case 14:
            tempStr=`
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block on"></div>
                <div class="block on"></div>
                <div class="block off"></div>
            `
            return tempStr;
            break;
            case 15:
            tempStr=`
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block on"></div>
                <div class="block on"></div>
                <div class="block on"></div>
            `
            return tempStr;
            break;
            case 16:
            tempStr=`
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block off"></div>
            `
            return tempStr;
            break;
            case 17:
            tempStr=`
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block on"></div>
            `
            return tempStr;
            break;
            case 18:
            tempStr=`
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block off"></div>
            `
            return tempStr;
            break;
            case 19:
            tempStr=`
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block on"></div>
            `
            return tempStr;
            break;
            case 20:
            tempStr=`
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block off"></div>
            `
            return tempStr;
            break;
            case 21:
            tempStr=`
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block on"></div>
            `
            return tempStr;
            break;
            case 22:
            tempStr=`
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block on"></div>
                <div class="block off"></div>
            `
            return tempStr;
            break;
            case 23:
            tempStr=`
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block on"></div>
                <div class="block on"></div>
            `
            return tempStr;
            break;
            case 24:
            tempStr=`
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block off"></div>
            `
            return tempStr;
            break;
            case 25:
            tempStr=`
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block on"></div>
            `
            return tempStr;
            break;
            case 26:
            tempStr=`
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block off"></div>
            `
            return tempStr;
            break;
            case 27:
            tempStr=`
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block on"></div>
            `
            return tempStr;
            break;
            case 28:
            tempStr=`
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block on"></div>
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block off"></div>
            `
            return tempStr;
            break;
            case 29:
            tempStr=`
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block on"></div>
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block on"></div>
            `
            return tempStr;
            break;
            case 30:
            tempStr=`
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block on"></div>
                <div class="block on"></div>
                <div class="block on"></div>
                <div class="block off"></div>
            `
            return tempStr;
            break;
            case 31:
            tempStr=`
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block on"></div>
                <div class="block on"></div>
                <div class="block on"></div>
                <div class="block on"></div>
            `
            return tempStr;
            break;
            case 32:
            tempStr=`
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block off"></div>
            `
            return tempStr;
            break;
            case 33:
            tempStr=`
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block on"></div>
            `
            return tempStr;
            break;
            case 34:
            tempStr=`
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block off"></div>
            `
            return tempStr;
            break;
            case 35:
            tempStr=`
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block on"></div>
            `
            return tempStr;
            break;
            case 36:
            tempStr=`
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block off"></div>
            `
            return tempStr;
            break;
            case 37:
            tempStr=`
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block on"></div>
            `
            return tempStr;
            break;
            case 38:
            tempStr=`
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block on"></div>
                <div class="block off"></div>
            `
            return tempStr;
            break;
            case 39:
            tempStr=`
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block on"></div>
                <div class="block on"></div>
            `
            return tempStr;
            break;
            case 40:
            tempStr=`
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block on"></div>
            `
            return tempStr;
            break;
            case 41:
            tempStr=`
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block on"></div>
            `
            return tempStr;
            break;
            case 42:
            tempStr=`
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block off"></div>
            `
            return tempStr;
            break;
            case 43:
            tempStr=`
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block on"></div>
            `
            return tempStr;
            break;
            case 44:
            tempStr=`
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block off"></div>
            `
            return tempStr;
            break;
            case 45:
            tempStr=`
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block on"></div>
            `
            return tempStr;
            break;
            case 46:
            tempStr=`
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block on"></div>
                <div class="block on"></div>
                <div class="block off"></div>
            `
            return tempStr;
            break;
            case 47:
            tempStr=`
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block on"></div>
                <div class="block on"></div>
                <div class="block on"></div>
            `
            return tempStr;
            break;
            case 48:
            tempStr=`
                <div class="block on"></div>
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block off"></div>
            `
            return tempStr;
            break;
            case 49:
            tempStr=`
                <div class="block on"></div>
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block on"></div>
            `
            return tempStr;
            break;
            case 50:
            tempStr=`
                <div class="block on"></div>
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block off"></div>
            `
            return tempStr;
            break;
            case 51:
            tempStr=`
                <div class="block on"></div>
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block on"></div>
            `
            return tempStr;
            break;
            case 52:
            tempStr=`
                <div class="block on"></div>
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block off"></div>
            `
            return tempStr;
            break;
            case 53:
            tempStr=`
                <div class="block on"></div>
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block on"></div>
            `
            return tempStr;
            break;
            case 54:
            tempStr=`
                <div class="block on"></div>
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block on"></div>
                <div class="block off"></div>
            `
            return tempStr;
            break;
            case 55:
            tempStr=`
                <div class="block on"></div>
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block on"></div>
                <div class="block on"></div>
            `
            return tempStr;
            break;
            case 56:
            tempStr=`
                <div class="block on"></div>
                <div class="block on"></div>
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block off"></div>
            `
            return tempStr;
            break;
            case 57:
            tempStr=`
                <div class="block on"></div>
                <div class="block on"></div>
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block on"></div>
            `
            return tempStr;
            break;
            case 58:
            tempStr=`
                <div class="block on"></div>
                <div class="block on"></div>
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block off"></div>
            `
            return tempStr;
            break;
            case 59:
            tempStr=`
                <div class="block on"></div>
                <div class="block on"></div>
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block on"></div>
                <div class="block on"></div>
            `
            return tempStr;
            break;
            case 60:
            tempStr=`
                <div class="block on"></div>
                <div class="block on"></div>
                <div class="block on"></div>
                <div class="block on"></div>
                <div class="block off"></div>
                <div class="block off"></div>
            `
            return tempStr;
            break;
        default:
            tempStr=`
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block off"></div>
                <div class="block off"></div>
            `
            return tempStr;
            break;
            
    }
}