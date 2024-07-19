
let form = document.querySelector("form");
let ul = document.querySelector("ul");

let cardsData = JSON.parse(localStorage.getItem("cards")) || [];

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let title = event.target.elements.title.value;
    let category = event.target.elements.category.value;
    cardsData.push({ title, category });
    localStorage.setItem("cards", JSON.stringify(cardsData));
    createUi(cardsData, ul);
});

function handleEdit(event, info, id, label) {
    let elm = event.target;
    let input = document.createElement("input");
    input.value = info;
    input.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) {
            let updatedValue = e.target.value;
            cardsData[id][label] = updatedValue;
            createUi();
            localStorage.setItem("cards", JSON.stringify(cardsData));
        }
    });
    input.addEventListener("blur", (e) => {
        let updatedValue = e.target.value;
        cardsData[id][label] = updatedValue;
        createUi();
        localStorage.setItem("cards", JSON.stringify(cardsData));
    });

    let parent = event.target.parentElement;
    parent.replaceChild(input, elm);
}

function createUi(data = cardsData, root = ul) {
    root.innerHTML = "";
    let fragment = new DocumentFragment();
    data.forEach((cardsInfo, index) => {
        let cardContainer = document.createElement("div");
        cardContainer.classList.add("card-container");

        let li = document.createElement("li");
        let p = document.createElement("p");

        p.addEventListener("dblclick", (event) => {
            handleEdit(event, cardsInfo.category, index, 'category');
        });
        p.innerText = cardsInfo.category;

        let h2 = document.createElement("h2");
        h2.innerText = cardsInfo.title;
        h2.addEventListener("dblclick", (event) => {
            handleEdit(event, cardsInfo.title, index, 'title');
        });

        li.append(h2, p);
        cardContainer.appendChild(li);

        let delButton = document.createElement("button");
        delButton.innerText = "DELETE";
        delButton.addEventListener("click", () => {
            // Remove the card from the array
            cardsData.splice(index, 1);
            // Update localStorage
            localStorage.setItem("cards", JSON.stringify(cardsData));
            // Update the UI
            createUi();
        });

        cardContainer.appendChild(delButton);
        fragment.appendChild(cardContainer);
    });

    root.append(fragment);
}

createUi(cardsData, ul);
