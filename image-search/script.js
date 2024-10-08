const searchText = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const imageCards = document.getElementById("image-cards");
const searchResultDiv = document.getElementById("search-resultDiv");
const loading = document.getElementById("loading");
const imageApi = "https://api.unsplash.com/search/photos?query=";
const accessKey = "cZkBLec2VWlXBAgs785p7uw9nagFu_G0Zgb8e5lK400";
let currentPage = 1;
let total_pages = "";

const fetchImages = async (query, page = 1) => {
  if (!query) {
    // console.log("Query is empty");
    return;
  }
  try {
    const response = await fetch(
      `${imageApi}${query}&client_id=${accessKey}&page=${page}`
    );
    const data = await response.json();
    total_pages = data.total_pages;
    // console.log(data);
    // console.log(data.total_pages);
    // console.log(total_pages);

    displayImages(data.results);
  } catch (error) {
    // console.log("Error fetching images:", error);
  }
};

const displayImages = (images) => {
  if (currentPage === 1) {
    imageCards.innerHTML = "";
  }
  images.forEach((image) => {
    const imageBlock = document.createElement("div");
    const imgElement = document.createElement("img");
    const imgCaption = document.createElement("p");

    imgCaption.innerText =
      (image.description.length > 50
        ? image.description.slice(0, 50) + "..."
        : image.description) || "no description available";
    imgElement.src = image.urls.small;
    imgElement.alt = image.alt_description || "Image";

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

const searchMoreImage = () => {
  const query = searchText.value.trim();
  if (currentPage < total_pages) {
    currentPage++;
    fetchImages(query, currentPage);
    // console.log("more images" + currentPage);
  }
};

searchBtn.addEventListener("click", searchImage);

searchText.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    searchImage();
  }
});

document.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  let scrollHeight = document.documentElement.scrollHeight;
  let clientHeight = document.documentElement.clientHeight;
  if (scrollTop + clientHeight >= scrollHeight) {
    loading.innerText = "Loading...";
    searchMoreImage();
  }
});
