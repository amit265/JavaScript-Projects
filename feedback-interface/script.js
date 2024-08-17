const box = document.getElementById("box");
const unhappy = document.getElementById("unhappy");
const happy = document.getElementById("happy");
const neutral = document.getElementById("neutral");
const send = document.getElementById("send");
const main = document.getElementById("main");
const title = document.getElementById("title");
const allEmojis = document.getElementById("allEmojis");

const addSelectedClasses = (emoji) => {
  [unhappy, happy, neutral].forEach((em) => em.classList.remove("selected"));
  emoji.classList.toggle("selected");
};

unhappy.addEventListener("click", () => addSelectedClasses(unhappy));
happy.addEventListener("click", () => addSelectedClasses(happy));
neutral.addEventListener("click", () => addSelectedClasses(neutral));

send.addEventListener("click", () => {
  const selectedEmoji = document.querySelector(".selected");
  if (!selectedEmoji) alert("Please select a response as feedback");
  const message = document.getElementById("message");
  message.textContent = `Your feedback is: ${selectedEmoji.textContent}`;
  box.style.display = "block";
  send.style.display = "none";
  allEmojis.style.display = "none";
  title.style.display = "none";
});
