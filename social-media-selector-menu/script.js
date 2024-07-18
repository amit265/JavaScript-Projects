const menuEl = document.querySelector(".menu");
const menuTextEl = document.querySelector(".menu p");
const socialListEl = document.querySelector(".social-lists");
const liEls = document.querySelectorAll(".social-lists li");

menuEl.addEventListener("click", () => {
    socialListEl.classList.toggle("hide");
    menuEl.classList.toggle("rotate");
});

liEls.forEach((liEl) => {
    liEl.addEventListener("click", () => {
        menuTextEl.innerHTML = liEl.innerHTML;
        socialListEl.classList.add("hide");
        menuEl.classList.toggle("rotate")
    });
});