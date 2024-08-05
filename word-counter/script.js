const textarea = document.getElementById("text-area");
const wordcount = document.getElementById("word-count");
const lettercount = document.getElementById("letter-count");

textarea.addEventListener("keyup", () => {
  count();
});

const count = () => {
  lettercount.innerText = textarea.value.length;
  let letter = textarea.value;
  word = letter.trim().split(" ");
  let filtered = word.filter(function (element) {
    return element !== "";
  });

//   console.log(filtered);

  wordcount.innerText = filtered.length;
};
