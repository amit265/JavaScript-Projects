const paraContainer = document.querySelector(".para");
const header = document.querySelector(".header");

console.log(header.offsetHeight);
console.log(paraContainer.offsetTop)

window.addEventListener("scroll", () => {
    if(window.scrollY > paraContainer.offsetTop - header.offsetHeight - 50){
        header.classList.add("active")
    } else {
        header.classList.remove("active")
    }
})