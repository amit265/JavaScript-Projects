const hamburger = document.querySelector(".hamburger-icon");
const sidebar = document.querySelector(".side-bar");
const close = document.querySelector(".close-icon");

close.addEventListener("click", () => {
    // sidebar.classList.add("hidden");
    console.log("hey you clicked me");
    sidebar.classList.toggle("hidden");

})


hamburger.addEventListener("click", () => {
sidebar.classList.toggle("hidden");

})