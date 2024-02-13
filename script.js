function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        let readStatus = this.read ? "read" : "not read yet";
        return `${this.title} by ${this.author}, ${this.pages}, ${readStatus}`; 
       /* sa-mi amintesc sa folosesc backticks cand vreau sa integrez obiecte si selectori mai usor in string return sau console logs */ 
    }
}


Book.prototype.toggleRead = function(){
    this.read = !this.read;

}


function toogleRead(index){
    myLibrary[index].toggleRead();
    render();
}


// let theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 296, false);

// console.log(theHobbit.info());


const myLibrary = [];


function removeBook(index){
    myLibrary.splice(index, 1);
    render();
}


function addBookToLibrary() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("author").value;
  let pages = document.querySelector("pages").value;
  let read = document.querySelector("read").checked;
  let newBook = new Book(title, author, pages, read);
  console.log(newBook);
}


function render(){
    let libraryEl = document.querySelector("#library");
    libraryEl.innerHTML="";
    for(let i = 0; i< myLibrary.length; i++)
    {
       let book = myLibrary[i];
       let bookEl=document.createElement("div");
       bookEl.setAttribute("calls", "book-card");
       bookEl.innerHTML = `<div class="card-header">
       <h3 class="title">${book.title}</h3>
       <h5 class="author">by ${book.author}</h5>
   </div>
   <div class="card-body">
       <p>${book.pages} pages</p>
       <p class="read-status">${book.read ? "Read" : "Not Read Yet"}</p>
       <button class="remove-btn" onclick ="removeBook(${i})">Remove</button>
   </div>`;
       libraryEl.appendChild(bookEl);
       
    }
}


let newBookBtn = document.querySelector("#new-book-btn");
newBookBtn.addEventListener("click", function(){
    let newBookForm = document.querySelector("#new-book-form");
    console.log(newBookForm);
    newBookForm.style.display = "block";
})


document.querySelector("#new-book-form").addEventListener("submit", function(){
    event.preventDefault();
    addBookToLibrary();
    render();
})



