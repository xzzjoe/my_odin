const myLibrary = [];
function Book(title, author, noPages, read){
    this.title = title;
    this.author = author;
    this.noPages = noPages;
    this.read = read;
    this.info = function(){
        console.log(this.title + "," +this.author);
    };
}

function addBookToLibrary(title, author, noPages, read){
    const newBook = new Book(title, author);
    myLibrary.push(newBook);
}

function displayAllBooks(){
    myLibrary.forEach((x,i)=>x.info());
}

function toggleForm(){
    // const form = document.getElementById("bookForm");
    const form = document.getElementById("bookForm");   
    console.log(myLibrary);
    console.log("pre toggle" + form.style.display);
    form.style.display = form.style.display === "none" ? "block" : "none";
    console.log("post toggle" + form.style.display);
}

// const form = document.getElementById("BookFormSubmit");
function registerListener(){
    const form = document.getElementById("addBookForm");
    form.addEventListener('submit', function(event){
        event.preventDefault();
        console.log("form submitted");
    })
    // const title = form.elements["title"];
    // const author = form.elements["author"];
    // const noPages = form.elements["pages"];
    // const read = form.elements["read"];
    // addBookToLibrary(title, author, noPages, read);
}