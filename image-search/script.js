const searchText = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const imageCards = document.getElementById("image-cards");
const imageApi = "https://api.unsplash.com/search/photos?query=";
const accessKey = "cZkBLec2VWlXBAgs785p7uw9nagFu_G0Zgb8e5lK400";
const fetchImages = async (query) => {
  if (!query) {
    console.log("Query is empty");
    return;
  }
  try {
    const response = await fetch(`${imageApi}${query}&client_id=${accessKey}`);
    const data = await response.json();
    console.log(data);

    displayImages(data.results);
  } catch (error) {
    console.log("Error fetching images:", error);
  }
};

const displayImages = (images) => {
  imageCards.innerHTML = "";
  images.forEach((image) => {
    const imageBlock = document.createElement("div");
    const imgElement = document.createElement("img");
    const imgCaption = document.createElement("p");
    imgCaption.innerText = image.description;
    imgElement.src = image.urls.small;
    imgElement.alt = image.alt_description;
    imageBlock.className = "image-card";
    imageBlock.appendChild(imgElement);
    imageBlock.appendChild(imgCaption);

    imageCards.appendChild(imageBlock);
  });
};

const searchImage = () => {
  const query = searchText.value.trim();
  fetchImages(query);
};

searchBtn.addEventListener("click", searchImage);
