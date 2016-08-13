var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var point = ["."]
var operators = ['-', '+', '×', '÷', '='];
var sum = [];
var result; 
var subArr =[];
var strArr;
var disp = document.getElementById("display");
var maxLength = 10;

var updateInput = function(num) {
    subArr.push(num);
    strArr = subArr.join('');
    subArr = strArr.split();
    console.log(strArr, strArr.length)
    if(strArr.length >maxLength)
    {disp.innerHTML = "ERR";
    }
        else{
    disp.innerHTML = subArr;
    console.log(subArr);
        }
    
    console.log(strArr.indexOf("."));
    if(strArr.indexOf(".") > 0){
        disableBtn("decimalPoint")
    }
}

var updateSum = function(oper) {
    enableBtn("decimalPoint");
 sum.push(subArr);
    subArr = [];
    strArr = [];
    sum.push(oper);
    disp.innerHTML = oper;
   console.log(sum, subArr);
}

var equals = function(){
enableBtn("decimalPoint")
console.log("equals function")
sum.push(subArr);
   //console.log(sum);
  var numOfTimes = (sum.length/2 +.5)
    for(i=0; i<=numOfTimes; i++){
    if(sum.length >= 3 ){
  result = inThree(Number(sum[0]), sum[1], Number(sum[2]));
       console.log(result);
        sum.splice(0, 3);
        sum.unshift(result);
       console.log(sum); 
        
    }
    }
    console.log(result);
    
    subArr = [];
    sum =[];
    var strLen = result.toString();
    if(result > 9999999999){
        disp.innerHTML = "ERR"
    }
    else if (strLen.length > maxLength ){
    strLen = strLen.slice(0,maxLength);
    disp.innerHTML = (strLen);
    updateInput(strLen);
    }
    
    else {
        disp.innerHTML = (result);
        updateInput(result);
    }
}

function clear(){
    enableBtn("decimalPoint")
     disp.innerHTML = " ";
    sum = [];
    result = 0;
    subArr = [];
}

function inThree(A, B, C) {
  
    var ans;
    switch (B) {
        case "+":
            return A + C ;
        case "-":
            return (A - C);
        case "×":
            return (A * C);
        case "÷":
            return (A / C);
        default:
            return A;
    }
  
}



// 1. Create the button
var button1 = document.createElement("button");
button1.innerHTML = numbers[1];
var button2 = document.createElement("button");
button2.innerHTML = numbers[2];
var button3 = document.createElement("button");
button3.innerHTML = numbers[3];
var button4 = document.createElement("button");
button4.innerHTML = numbers[4];
var button5 = document.createElement("button");
button5.innerHTML = numbers[5];
var button6 = document.createElement("button");
button6.innerHTML = numbers[6];
var button7 = document.createElement("button");
button7.innerHTML = numbers[7];
var button8 = document.createElement("button");
button8.innerHTML = numbers[8];
var button9 = document.createElement("button");
button9.innerHTML = numbers[9];
var button0 = document.createElement("button");
button0.innerHTML = numbers[0];
var buttonPoint = document.createElement("button");
buttonPoint.innerHTML = point[0];
buttonPoint.className = "bigButton"
buttonPoint.setAttribute("id", "decimalPoint");

var buttonPlus = document.createElement("button");
buttonPlus.innerHTML = operators[1];
var buttonMinus = document.createElement("button");
buttonMinus.innerHTML = operators[0];
var buttonMul = document.createElement("button");
buttonMul.innerHTML = operators[2];
var buttonDiv = document.createElement("button");
buttonDiv.innerHTML = operators[3];

var buttonEquals = document.createElement("button");
buttonEquals.innerHTML = operators[4];
buttonEquals.className = "bigButton"
var buttonClear = document.createElement("button");
buttonClear.innerHTML = " CE ";
buttonClear.className = "bigButton"

// 2. Append somewhere
//var row1 = document.getElementById("row1");
row1.appendChild(button1);
row1.appendChild(button2);
row1.appendChild(button3);
row1.appendChild(buttonPlus);

row2.appendChild(button4);
row2.appendChild(button5);
row2.appendChild(button6);
row2.appendChild(buttonMinus);

row3.appendChild(button7);
row3.appendChild(button8);
row3.appendChild(button9);
row3.appendChild(buttonMul);

row4.appendChild(buttonPoint);
row4.appendChild(button0);
row4.appendChild(buttonDiv);

row5.appendChild(buttonClear);
row5.appendChild(buttonEquals);






// 3. Add event handler
button1.addEventListener("click", function(){updateInput(numbers[1])}, false);
button2.addEventListener("click", function(){updateInput(numbers[2])}, false);
button3.addEventListener("click", function(){updateInput(numbers[3])}, false);
button4.addEventListener("click", function(){updateInput(numbers[4])}, false);
button5.addEventListener("click", function(){updateInput(numbers[5])}, false);
button6.addEventListener("click", function(){updateInput(numbers[6])}, false);
button7.addEventListener("click", function(){updateInput(numbers[7])}, false);
button8.addEventListener("click", function(){updateInput(numbers[8])}, false);
button9.addEventListener("click", function(){updateInput(numbers[9])}, false);
button0.addEventListener("click", function(){updateInput(numbers[0])}, false);
buttonPoint.addEventListener("click", function(){updateInput(point[0])}, false);

buttonMinus.addEventListener("click", function(){updateSum(operators[0])}, false);
buttonPlus.addEventListener("click", function(){updateSum(operators[1])}, false);
buttonMul.addEventListener("click", function(){updateSum(operators[2])}, false);
buttonDiv.addEventListener("click", function(){updateSum(operators[3])}, false);

buttonEquals.addEventListener("click", equals, false);
buttonClear.addEventListener("click", clear, false);



function disableBtn(btnName) {
    document.getElementById(btnName).disabled = true;
}
function enableBtn(btnName) {
    document.getElementById(btnName).disabled = false;
  
}