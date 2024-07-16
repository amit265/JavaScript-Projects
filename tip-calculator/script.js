const amount = document.getElementById("amount");
const percentage = document.getElementById("percentage");
const totalValue = document.getElementById("totalValue");
const calculate = document.getElementById("calculate");

const total = () => {
  const billValue = amount.value;
  const tipValue = percentage.value;
const finalAmount = billValue * (1 + tipValue/100);
  totalValue.innerText = finalAmount.toFixed(2);
};

calculate.addEventListener("click", total);
percentage.addEventListener("keydown", (e) => {
    if (e.key === 'Enter'){
        total();
    }
})
