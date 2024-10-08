const userimage = document.getElementById("imageId");
const follower = document.getElementById("followerId");
const following = document.getElementById("followingId");
const userName = document.getElementById("usernameId");
const input = document.getElementById("inputId");
const userLocation = document.getElementById("locationId");
const names = document.getElementById("nameId");
const bio = document.getElementById("bioId");
const caption = document.getElementById("caption");
const repos = document.getElementById("reposId");
const main = document.querySelector(".main");
const errorId = document.getElementById("errorId");

function displayUI(data) {
  if (data.name) {
    console.log(data);
    userimage.src = data.avatar_url;
    caption.innerHTML = `<a  href="${data.html_url}" target="_blank">Go to profile</a>`;
    names.innerHTML = data.name;
    bio.innerHTML = data.bio ? data.bio : "Not available";
    userName.innerHTML = data.login;
    
    repos.innerHTML =  data.public_repos;

    userLocation.innerHTML = data.location;
    follower.innerHTML = data.followers;
    following.innerHTML = data.following;
  } else {
    main.classList.add("invisible");
    errorId.innerText = "No user found, enter valid username";
    setTimeout(() => {
      init();
      errorId.innerText = "";
    }, 2000);
  }
}
// ${event.target.value}
function handleChange() {
  main.classList.remove("invisible");

  if (event.keyCode === 13) {
    let xrh = new XMLHttpRequest();
    xrh.open("GET", `https://api.github.com/users/${event.target.value}`);
    xrh.onload = function () {
      let userData = JSON.parse(xrh.response);
      displayUI(userData);
    };

    xrh.onerror = function () {
      console.log("Something happened....");
    };
    xrh.send();
    event.target.value = "";
  }
}
input.addEventListener("keyup", handleChange);

async function init() {
  main.classList.remove("invisible");

  try {
    const response = await fetch("https://api.github.com/users/torvalds");
    const data = await response.json();
    return displayUI(data);
  } catch (error) {
    const err = new Error("Fetch error: " + error);
    console.log(err);
  }
}

init();
