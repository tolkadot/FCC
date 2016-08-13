var boolVar  = 0;

var workLength = 1;
if(workLength < 10){
  document.getElementById("workLengthID").innerHTML =    "0" + workLength +":00";
  document.getElementById("workClockID").innerHTML =    "0" + workLength +":00";
  }
  else {
    document.getElementById("workLengthID").innerHTML =    workLength +":00";
    document.getElementById("workClockID").innerHTML =    workLength +":00";
  }

var breakLength = 1; 
if(breakLength < 10){
  document.getElementById("breakLengthID").innerHTML =    "0" + breakLength +":00"; 
  }
  else {
    document.getElementById("breakLengthID").innerHTML =    breakLength +":00"; 
  }

var updateWorkLengthSub = function() {
workLength = workLength-1;
  if (workLength < 1) {
    workLength = 1;
  }
    correctZero(workLength, "workLengthID")
    updateClockLength();
  };
  
var updateWorkLengthAdd = function() {
workLength = workLength+1;
  correctZero(workLength, "workLengthID")
  updateClockLength();
};


var updateBreakLengthSub = function() {
breakLength = breakLength-1;
  if (breakLength < 1) {
    breakLength = 1;
  }
  correctZero(breakLength, "breakLengthID")
  updateClockLength();
};

var updateBreakLengthAdd = function() {
  breakLength = breakLength+1;
  correctZero(breakLength, "breakLengthID")
};


var updateClockLength = function(){  
  correctZero(workLength, "workClockID")
};

var correctZero = function(numTime, strID){
if(numTime < 10){
  document.getElementById(strID).innerHTML =    "0" + numTime +":00";
  }
  else {
    document.getElementById(strID).innerHTML =    numTime +":00";
  }
};

var workSecondsLength = workLength * 60;
console.log(workSecondsLength);
var breakSecondsLength = breakLength * 60;
console.log(breakSecondsLength);

var counter = 0;
var counter2 = 0;
var timerId;

// UPDATE DISPLAY //
var updateDisplay = function() {
  if(boolVar) { 
    console.log("boolVar = 1"); 
    return; }
  else{
timerId = setInterval(timer, 1000);
 }
}

// STOP CLOCK //

var stopWorkClock = function()
{
    clearInterval(timerId);
    playsound();
    counter = 0;
    boolVar = 0;
  console.log("boolVar = 0;")
  enableBtn("workSub");
  enableBtn("workAdd"); 
  enableBtn("breakAdd");
  enableBtn("breakSub");
};

// SET DISPLAY //

var setDisplay = function(){
 document.getElementById("displayID").innerHTML = "work" 
}

// TIMER //

var timer = function(){
var seconds = 0;
var minutes = 0;
var dispMin = 0;

boolVar = 1;

  disableBtn("workSub", "workAdd", "breakSub", "breakAdd");
  

if (counter === workSecondsLength + 1) {
     counter =0;
  playsound();
  document.getElementById("displayID").innerHTML = "break"
  
    }
  if (counter2 === workSecondsLength+breakSecondsLength +2) {
    counter =0; 
    counter2 = 0;
    playsound();
    document.getElementById("displayID").innerHTML = "work"
    }


 if(counter<= 59){
     minutes = 0;
     dispMin = minutes + '0';
     if(counter < 10) {seconds = '0' + counter;}
     else {seconds = counter;}
 }   
 
    else if(counter%60 === 0)
    {
        minutes = counter/60;
        dispMin = minutes;
        seconds = '00';
    }
    
    else {
       
    minutes = Math.floor(counter/60);
    dispMin = minutes;
    seconds = counter%60;
    if(seconds < 10) {seconds = '0' + seconds;}
     }
     
if(minutes < 10) { dispMin = '0' + minutes;}

console.log(dispMin + ":" + seconds);
  var displayClock = document.getElementById("workClockID");
 displayClock.innerHTML = dispMin + ":" + seconds;  
counter++;
counter2++;
};

document.getElementById("start").addEventListener("click", updateDisplay, false);
document.getElementById("start").addEventListener("click", setDisplay, false);
document.getElementById("stop").addEventListener("click", stopWorkClock, false);

document.getElementById("workSub").addEventListener("click", updateWorkLengthSub, false);
document.getElementById("workAdd").addEventListener("click", updateWorkLengthAdd, false);

document.getElementById("breakAdd").addEventListener("click", updateBreakLengthAdd, false);
document.getElementById("breakSub").addEventListener("click", updateBreakLengthSub, false);

 ///AUDIO ///
var audio = new Audio('http://tolkadot.github.io/water_droplet_2.mp3');
var playsound = function(){
  audio.play();
}

//DISABLE/ENABLE BUTTONS ///
function disableBtn(btnName1, btnName2, btnName3, btnName4) {
    document.getElementById(btnName1).disabled = true;
  document.getElementById(btnName2).disabled = true;
  document.getElementById(btnName3).disabled = true;
  document.getElementById(btnName4).disabled = true;
}

function enableBtn(btnName) {
    document.getElementById(btnName).disabled = false;
  
}