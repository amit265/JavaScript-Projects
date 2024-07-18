const btns = document.querySelectorAll(".button");
const articles = document.querySelectorAll(".tab");
const tabs = document.querySelector(".content")

tabs.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    console.log(id);
    if(id) {
        btns.forEach((btn) => {
            btn.classList.remove("live");
        });
        e.target.classList.add("live");

        articles.forEach((article) => {
            article.classList.remove("live");
        });
        const element = document.getElementById(id);
        element.classList.add("live");
    }
})