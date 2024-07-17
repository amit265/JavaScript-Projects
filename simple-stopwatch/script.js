const timerReading = document.getElementById("timerReading");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let startTime = 0;
let elapsedTime = 0;
let timerInterval;


const formatTime = (elapsedTime) => {
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor((elapsedTime / (1000 * 60 * 60)));
    return(
        (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + 
        (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" +
        (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") + "." +
        (milliseconds > 9 ? milliseconds : "0" + milliseconds )

    );
}

const startTimer = () => {
    startTime = Date.now() - elapsedTime;

    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        timerReading.textContent = formatTime(elapsedTime);

    }, 10);
    start.disabled = true;
    start.classList.add("disabled");
    stop.disabled = false;
    stop.classList.remove("disabled")
}

const stopTimer = () => {
    clearInterval(timerInterval);
    start.disabled = false;
    start.classList.remove("disabled");
    stop.disabled = true;
    stop.classList.add("disabled")
}

const resetTimer = () => {
    clearInterval(timerInterval);
    elapsedTime = 0;
    timerReading.textContent = "00:00:00";
    start.disabled = false;
    stop.disabled = false;

    start.classList.remove("disabled");
    stop.classList.remove("disabled");
   

} 


start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);










