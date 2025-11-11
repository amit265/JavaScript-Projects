const counterDisplay = document.getElementById("counter-id");
const incrementButton = document.getElementById("increment-btn");
const decrementButton = document.getElementById("decrement-btn");
const resetButton = document.getElementById("reset-btn");
const container = document.getElementById("container");

let counter = 0;

function updateDisplay() {
  counterDisplay.textContent = counter;
  counterDisplay.style.fontWeight = "bold";
  counterDisplay.style.fontSize = "32px";
  incrementButton.style.padding = "5px";
  decrementButton.style.padding = "5px";
  resetButton.style.padding = "5px";
  container.style.textAlign = "center";
  incrementButton.style.backgroundColor = "#4CAF50";
  incrementButton.style.color = "white";
  decrementButton.style.color = "white";
  resetButton.style.color = "white";
  decrementButton.style.backgroundColor = "#f44336";
  resetButton.style.backgroundColor = "#008CBA";

  if (counter > 0) {
    counterDisplay.style.color = "blue";
  } else if (counter < 0) {
    counterDisplay.style.color = "red";
  } else {
    counterDisplay.style.color = "black";
  }
}

incrementButton.addEventListener("click", () => {
  counter++;
  updateDisplay();
});

decrementButton.addEventListener("click", () => {
  counter--;
  updateDisplay();
});

resetButton.addEventListener("click", () => {
  counter = 0;
  updateDisplay();
});

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    counter++;
    updateDisplay();
  } else if (e.key === "ArrowDown") {
    counter--;
    updateDisplay();
  } else if (e.key === "r" || e.key === "R") {
    counter = 0;
    updateDisplay();
  }
});

// Initial display update
updateDisplay();
