const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

console.log("hello");
function convertToRoman(input) {
  if (input === "") {
    output.innerText = "Please enter a valid number";
    output.style.color = "#af3c3c";
    output.style.backgroundColor = "#ffadad";
    output.style.border = "2px solid #af3c3c";
    return;
  } else if (input <= 0) {
    output.innerText = "Please enter a number greater than or equal to 1";
    output.style.color = "#af3c3c";
    output.style.backgroundColor = "#ffadad";
    output.style.border = "2px solid #af3c3c";
    return;
  } else if (input > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
    output.style.color = "#af3c3c";
    output.style.backgroundColor = "#ffadad";
    output.style.border = "2px solid #af3c3c";
    return;
  } else {

    const num = parseInt(input);

    const romanNumerals = [
        { value: 1000, symbol: "M" },
        { value: 900, symbol: "CM" },
        { value: 500, symbol: "D" },
        { value: 400, symbol: "CD" },
        { value: 100, symbol: "C" },
        { value: 90, symbol: "XC" },
        { value: 50, symbol: "L" },
        { value: 40, symbol: "XL" },
        { value: 10, symbol: "X" },
        { value: 9, symbol: "IX" },
        { value: 5, symbol: "V" },
        { value: 4, symbol: "IV" },
        { value: 1, symbol: "I" },
      ];

      let newOutput = "";
      let remaining = num;

      for (const {value, symbol} of romanNumerals){
        while (remaining >= value) {
            newOutput += symbol;
            remaining -= value;
        }
      }

    console.log(newOutput);
    output.innerText = newOutput;
    output.style.backgroundColor = "#3b3b4f";
    output.style.border = "2px solid #ffffff";
    output.style.color = "#ffffff";
  }
}

convertBtn.addEventListener("click", () => {
  convertToRoman(number.value);
  number.value = "";
});

number.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    convertToRoman(number.value);
    number.value = "";
  }
});
