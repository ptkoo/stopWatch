let startTime = 0
let elaspsedTime = 0
let splitCount= 1
let update
let lapPanel = document.getElementById("splits")
function startTimer() {

    startTime = new Date().getTime() - elaspsedTime;
    update = setInterval(function calTime(){
        document.getElementById("timer").innerHTML = (() => {
           elaspsedTime = new Date().getTime() - startTime
           
           let sec =(Math.floor(elaspsedTime/1000))
           let miniSec = (((elaspsedTime/1000) - sec)*100).toFixed(0)
           let min = Math.floor(sec/60)
           let hr = Math.floor(sec/3600)
            
           adjustButtons(true,false,false,false)

           return hr? hr : "00" + ":" + (min%60<10? "0" + min%60 : min%60)  + ":" + (sec%60<10? "0" + sec%60 : sec%60) + ":" + miniSec
           
          })()
    },10)
}

function stopTimer(){
   clearInterval(update)
   adjustButtons(false,true,false)
}

function reset(){
  clearInterval(update)
  splitCount = 1
  startTime = 0
  stopTime = 0
  document.getElementById('timer').innerText = "00:00:00:00"
  lapPanel.innerHTML = ` <br>Lap </br>	`
  
  adjustButtons(false,false,false,true)
}

function lap(){
    let sec =(Math.floor(elaspsedTime/1000))
    let miniSec = (((elaspsedTime/1000) - sec)*100).toFixed(0)
    let min = Math.floor(sec/60)
    let hr = Math.floor(sec/3600)
    console.log(sec,miniSec,min,hr)
    document.getElementById("splits").innerHTML += `</br> ${splitCount++}. ${hr ? hr : "00"} : ${min%60 < 10 ? "0" + min%60 : min%60} : ${sec%60 <10 ? "0" + sec%60 : sec%60} : ${miniSec}`
}

function adjustButtons(start,stop,reset,split){
    document.getElementById("start").disabled = start;
	document.getElementById("stop").disabled = stop;
	document.getElementById("reset").disabled = reset;
	document.getElementById("split").disabled = split;
}