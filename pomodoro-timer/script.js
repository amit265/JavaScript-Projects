const timer = document.getElementById("timer");

const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
let interval;
let timeLeft = 1500;

const timerFunc = () => {
  
   let minutes = Math.floor(timeLeft / 60);
   let seconds = timeLeft % 60;
   let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
   timer.innerHTML = formattedTime;
}






start.addEventListener("click", () => {
    start.disabled = true;
    start.classList.add("disabled")
    interval = setInterval(() => {
        timeLeft--;
        timerFunc();
        if(timeLeft === 0) {
            clearInterval(interval);
            alert("Time for some break");
            timeLeft = 1500;
            timerFunc();
        }
    }, 1000)
   


})

stop.addEventListener("click", () => {
    start.classList.remove("disabled")
    clearInterval(interval)
    start.disabled = false;


})

reset.addEventListener("click", () => {
    clearInterval(interval);
    start.disabled = false;
    start.classList.remove("disabled")
    timeLeft = 1500;
    timerFunc();
})