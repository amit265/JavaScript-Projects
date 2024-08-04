const char = document.getElementById("character-set");
const totalChar = document.getElementById("total-char");
const remChar = document.getElementById("rem-char");

const counter = () => {
  totalChar.innerText = char.value.length;
  remChar.innerText = char.getAttribute("maxlength") - char.value.length;
 };

char.addEventListener("keyup", () => {
  counter();
});

counter();

