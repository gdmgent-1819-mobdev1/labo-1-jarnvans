let arrLeft = [];
let arrTemp = [];
let arrEnd = [];
let arcadeEl = document.querySelector('.arcade');


for (let i = 0; i <  12; i++){
    for (let j = 0; j <  7; j++){
        let tempStr = ""
        
        let onOrOff = Math.round(Math.random());
        if (onOrOff == 1) {
            tempStr += '<div class="on block"></div>'
        }
        else {
            tempStr += '<div class="off block"></div>'
        }
        arrLeft.push(tempStr);
    }
    arrTemp = arrLeft.slice(0, 6).reverse();
    arrLeft += arrTemp;
    arrEnd += arrLeft.toString().replace(/,/g,'');
    arrEnd += '<br>';
    
    arrTemp = [];
    arrLeft = [];
}

arcadeEl.innerHTML = arrEnd;

