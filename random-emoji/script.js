const emoji = document.getElementById("emoji-icon");
const emojiLabel = document.getElementById("emoji-label");

let emojis = [];

const random = (max) => Math.floor(Math.random() * max);
console.log(random());

const fetchEmoji = async () => {
  try {
    const data = await fetch(
      "https://emoji-api.com/emojis?access_key=7e66ebb8f262a8be1a9425ba0574aadfc4e872e8"
    );
    emojis = await data.json();
    // console.log(emojis);

    if (emojis.length > 0) {
      displayRandomEmoji();
    }
  } catch (error) {
    console.error("Error :", error);
  }
};

const displayRandomEmoji = () => {
  if (emojis.length === 0) return;
  const randomIndex = random(emojis.length);
//   console.log(randomIndex);

  emoji.innerText = emojis[randomIndex].character;
  const emojiLabelData = emojis[randomIndex].unicodeName.split(" ").slice(1).join(" ");
  emojiLabel.innerText = emojiLabelData.charAt(0).toUpperCase() + emojiLabelData.slice(1);
//   console.log(emojis[randomIndex].unicodeName.split(" ").slice(1).join(" "));
  
};

emoji.addEventListener("click", () => {
  displayRandomEmoji();
});

fetchEmoji();
