let form = document.querySelector("form");
let bookListRoot = document.querySelector(".book_list");
const nameElm = form.elements.bookName;
const authorElm = form.elements.bookAuthor;
const imageELm = form.elements.bookImage;

class Book{
    constructor(name, author, img){
        this.name = name;
        this.author = author;
        this.img = img;
        this.isRead = false;
    }

    toggleIsRead(){
        this.isRead = !this.isRead;
    }
}

class BookList{
    constructor(books = []){
        this.books = books;
    }

    addBook(name, author, img){
        let book = new Book(name, author, img);
        this.books.push(book);
        this.createUi();
    }

    createUi(){
        bookListRoot.innerHTML = "";
        this.books.forEach((book) => {
            let li = document.createElement("li");
            let h1 = document.createElement("h1");
            h1.innerText = book.name;
            let p = document.createElement("p");
            p.innerText = book.author;
            let img = document.createElement("img");
            img.src = book.img;
            let button = document.createElement("button");
            button.innerText = book.isRead ? "completed" : "Mark as Read";
            button.classList.add("card_button");
            button.addEventListener("click", () => {
                book.toggleIsRead();
                
                this.createUi();
            });
            li.append(img, h1, p, button);
            bookListRoot.append(li);

            
        });
    }

}

let library = new BookList();
function handleSubmit(event) {
    event.preventDefault();
    const name = nameElm.value;
    const author = authorElm.value;
    const img = imageELm.value;
    library.addBook(name, author, img);
    nameElm.value = "";
    authorElm.value = "";
    imageELm.value = "";
    
}

form.addEventListener("submit", handleSubmit);