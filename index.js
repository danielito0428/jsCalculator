console.log("Script loaded")

let operator = '';
let currentValue = "";
let previousValue = "";

document.addEventListener('DOMContentLoaded',function(){

    let btnsOp = document.querySelectorAll(".op");
    let btnsNums = document.querySelectorAll(".nums");
    let clear = document.querySelector(".clear");
    let equals = document.querySelector(".equal");
    let decimal = document.querySelector(".decimal")

    let prevScreen = document.querySelector(".previous");
    let currentScreen = document.querySelector(".current");

    btnsNums.forEach((num) => num.addEventListener('click', (e)=>{
        handleNumber(e.target.value);
        currentScreen.textContent = currentValue;

    }))

    btnsOp.forEach((op) => op.addEventListener('click', (e)=>{
        handleOperator(e.target.textContent);
        prevScreen.textContent = previousValue + " "+ operator;
        currentScreen.textContent = currentValue;

    }))


})

function handleNumber(num){

    if(currentValue.length <=5){
        currentValue += num;
    };
    

}

function handleOperator(op){
    operator = op;
    previousValue = currentValue;
    currentValue = "";

}








const addition = (num1,num2)=>{
    result = num1 + num2
    return result;
};

const substracion = (num1, num2)=>{
    result = num1 - num2
    return result
};

const multiply = (num1 , num2)=>{
    result = num1 * num2
    return result
};

const division = (num1,num2)=>{
    result = num1 / num2
    return result
};


const operate = (num1,num2, operation)=>{
    
    switch (operation) {
        case "+":
           console.log(addition(num1,num2)) 
            
            break;
        case "-":
            console.log(substracion(num1,num2))
            break;
        case "x":
            console.log(multiply(num1,num2))
            break;
        case "/":
            console.log(division(num1,num2))
            break;
        default:
            break;
    }
}

const display = ()=>{
     
}




