let bookName = document.querySelector("#bookName");
let authorName = document.querySelector("#authorName");
let addBookBtn = document.querySelector("#addBook");
let bookCards = document.querySelector("#bookCards");
let warn = document.querySelector(".warn");

let bookArr = [
    {
        name: "Panch Tantra",
        author: "Munsi Prem Chand",
    }
];

function Book(name, author){
    this.name = name;
    this.author = author;
}

// after button click, add the book to array
id = 0;
addBookBtn.addEventListener("click", (e) => {
    e.preventDefault()
    id++;
    let newName = bookName.value;
    let newAuthor = authorName.value;

    if(newName === "" || newAuthor === ""){
        warn.style.display = "block";
        warn.textContent = "Ahh.. Incomplete Details";
        setTimeout(() => {
            warn.style.display = "none";
        },1500)
        return;
    }

    let newBook = new Book(newName, newAuthor);
    bookArr.push(newBook);

    renderCards();
    
    bookName.value = "";
    authorName.value = "";
})

function renderCards(){
    bookCards.innerHTML = bookArr.map((book, index) => {
        return(
            `<div class="card mx-2 my-2 p-4" style="border: 2px solid #082032; background-image: linear-gradient(100deg, #ff4c29, #334756);">
                <div class="card-body">
                    <p class="card-text text-light"><b>Book Name</b> : ${book.name}</p>
                    <p class="card-text text-light"><b>Author</b> : ${book.author}</p>
                    <button id = "${index}" onclick = "deleteNote(${index})" class="btn my-1" style="background-color: #082032; color: #fff; border: none; padding: 8px; border-radius: 3px">Remove</button>
                </div>
            </div>`
        )
    })
}

function deleteNote(index){
    bookArr.splice(index, 1);
    renderCards()
}

renderCards()

