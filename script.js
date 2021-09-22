let myLibrary = [{
        title: "The Lord of the Rings",
        author: "J. R. R. Tolkien",
        pages: 1137,
        read: false
    },
    {
        title: "Alice in Wonderland",
        author: "Lewis Caroll",
        pages: 312,
        read: true
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        pages: 180,
        read: false
    },
    {
        title: "Slaughterhouse-Five",
        author: "Kurt Vonnegut",
        pages: 154,
        read: false
    },
    {
        title: "The Naked Lunch",
        author: "William S. Burroughs",
        pages: 112,
        read: false
    },
    {
        title: "The Catcher in the Rye",
        author: "J. D. Salinger",
        pages: 240,
        read: true
    }
];//dummy data

// BOOK CLASS
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;

    };
};

const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookPages = document.querySelector('#pages');
const bookStatus = document.querySelector('#read');
const bookTable = document.querySelector("#book-table");
const submitButton = document.querySelector("#submit");
const bookLibrary = document.querySelector('table');


submitButton.addEventListener('click', addBookToLibrary);

// Listen for Del Button event
// bookLibrary.addEventListener('click', (e) => {
//     const currentTarget = e.target.parentNode.parentNode.childNodes[1];
//     let index = getBook(myLibrary, currentTarget.innerText);
//     if (e.target.classList.contains('status')) {
//         console.log(myLibrary[index].read);
//         if (myLibrary[index].read === true) {
//             myLibrary[index].read = false
//         } else { myLibrary[index].read = true }};
//         renderLibrary();
//     if (e.target.innerText === 'Del') {
//         deleteBook(index);
//         renderLibrary();
//     };
// });


// Get the matching index position in the array ...
function getBook(libraryArray, bookName) {
    for (book of libraryArray) {
        if (bookName === book.title) {
            return libraryArray.indexOf(book);44
        };
    };
};

// Delete a Book
function deleteBook(index) {
    myLibrary.splice(index, 1);
};

// Submit a Book Function
function addBookToLibrary(e) {
    const newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookStatus.checked);
    bookStatus.checked = false;
    myLibrary.push(newBook);
    renderLibrary();
}

function renderLibrary() {
    bookTable.innerHTML = ``;
    document.getElementById('form').style.display = 'none';
    myLibrary.forEach((book) => {
        if (book.read === true) {
            const myBook = `
            <div class="col-md-4">
            <div class="card mb-4 box-shadow">
            <div class="card-body">        
            <h5 class="card-title">${book.title}</h5>
            <div class="card-body">
            <p class="text-muted">${book.author}</p>
            <i class="bi bi-book"></i>
            <p class="text-muted">Pages: ${book.pages}</p>
            <div class="checkbox mb-3">
            <label><input checked type="checkbox" value="read" class="status"> Read</label>
            </div>   
            <button class="btn btn-sm btn-outline-secondary" class="delete">Delete</button>
            </div>
            </div>
            </div>
            `;
            bookTable.insertAdjacentHTML("afterbegin", myBook);          
        } else {
            const myBook = `
            <div class="col-md-4">
            <div class="card mb-4 box-shadow">
            <div class="card-body">        
            <h5 class="card-title">${book.title}</h5>
            <div class="card-body">
            <p class="text-muted">${book.author}</p>
            <i class="bi bi-book"></i>
            <p class="text-muted">Pages: ${book.pages}</p>
            <div class="checkbox mb-3">
            <label><input type="checkbox" value="read" class="status"> Read</label>
            </div>   
            <button class="btn btn-sm btn-outline-secondary" class="delete">Delete</button>
            </div>
            </div>
            </div>
            `;
            bookTable.insertAdjacentHTML("afterbegin", myBook);
        } 
    });
};

renderLibrary();