const container = document.querySelector(".container");

const url = "https://randomfox.ca/images/";

const randomNumber = () => Math.ceil(Math.random() * 100);

console.log(randomNumber(), "random number");

const fetchImage = (numImages = 8) => {
  let i = 0;
  while (i < numImages) {
    const img = document.createElement("img");
    img.src = url + randomNumber() + ".jpg";
    container.appendChild(img);
    console.log("Image loaded");
    i++;
  }
};

fetchImage();

window.addEventListener("scroll", () => {
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    fetchImage();
  }
});
