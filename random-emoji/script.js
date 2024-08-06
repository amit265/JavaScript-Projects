const emoji = document.getElementById("emoji-icon");
const emojiLabel = document.getElementById("emoji-label");

const EMOJI_API = "https://emoji-api.com/emojis?access_key=";
const EMOJI_CATEGORIES_API = "https://emoji-api.com/categories?access_key=";
const API_KEY = "7e66ebb8f262a8be1a9425ba0574aadfc4e872e8"; //use your own api

let emojis = [];

const random = (max) => Math.floor(Math.random() * max);

const fetchEmoji = async (api) => {
  try {
    const data = await fetch(api + API_KEY);
    emojis = await data.json();
    console.log(emojis);

    return emojis;

  } catch (error) {
    console.error("Error :", error);
  }
};





const displayRandomEmoji = () => {
  if (emojis.length === 0) return;
  const randomIndex = random(emojis.length);
  console.log(emojis.length);

    console.log(randomIndex);

  emoji.innerText = emojis[randomIndex].character;
  const emojiLabelData = emojis[randomIndex].unicodeName
    .split(" ")
    .slice(1)
    .join(" ");
  emojiLabel.innerText =
    emojiLabelData.charAt(0).toUpperCase() + emojiLabelData.slice(1);
  //   console.log(emojis[randomIndex].unicodeName.split(" ").slice(1).join(" "));
};

emoji.addEventListener("click", () => {
  displayRandomEmoji();
    
});

fetchEmoji(EMOJI_API);
