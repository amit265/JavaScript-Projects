

// function randomIndex () {
//    return Math.floor(Math.random() * quotes.length) +1;  
// } 
 


// function populate() {
//     while(true) {
//       let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
//       const random = randomIndex();
//       if (windowRelativeBottom > document.documentElement.clientHeight + 100) break;
//       document.body.insertAdjacentHTML("beforeend", `<div class = "quotes-container" ><h2 class = "quote"> 🧿 ${quotes[random].quoteText}</h2> <p class = "author">✍️ ${(quotes[random].quoteAuthor) === "" ? "Anonymous" : (quotes[random].quoteAuthor)}</p></div>`);
//     }
//   }

//   window.addEventListener('scroll', populate);

//   populate();


let root = document.querySelector("ul");

let max = 10;
let index = 0;

function addQuotes () {
    for (let i = 0; i < max; i++ ) {
        let li = document.createElement("li");
        let div = document.createElement("div");
        div.classList.add("quotes-container");
        let h2 = document.createElement("h2");
        let p = document.createElement("p");
        h2.innerText = ` 🧿  ${quotes[index].quoteText}`;
        p.innerText = ` ✍️ ${(quotes[index].quoteAuthor) === "" ? "Anonymous" : (quotes[index].quoteAuthor)}`;
        div.append(h2, p);
        li.append(div);
        root.append(li);
        index++;  
    }
}


document.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight;
    let clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight && index < quotes.length) {
        addQuotes();
    }
});

window.addEventListener("DOMContentLoaded", () => {
  addQuotes();
});