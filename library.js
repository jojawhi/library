

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = function() {
        if (read) {
            return true;
        } else {
            return false;
        }
    },
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
}

const sampleBook = new Book("The Hobbit", "J.R.R. Tolkien", "295", "read");
const libraryContainer = document.querySelector('#libraryContainer');
const addBookButton = document.getElementById('addBookButton');

let libraryArray = [
    {
        title: "Dune",
        author: "Frank Herbert",
        pages: 884,
        read: false
    }, 
    {
        title: "Wizard's First Rule",
        author: "Terry Goodkind",
        pages: 836,
        read: true
    }, 
    {
        title: "Ender's Game",
        author: "Orson Scott-Card",
        pages: 324,
        read: true
    },
];

const displayBooks = () => {

    for (i = 0; i < libraryArray.length; i++) {

        createBookCard(libraryArray[i]);

    }

}

const getBookFromInput = () => {

    const bookTitleInput = document.getElementById('bookTitleInput').value;
    const bookAuthorInput = document.getElementById('bookAuthorInput').value;
    const bookPagesInput = document.getElementById('bookPagesInput').value;
    const readStatusInput = document.getElementById('readStatusInput').value;

    return new Book (bookTitleInput, bookAuthorInput, bookPagesInput, readStatusInput);

}

const addBookToLibrary = () => {

    const newBook = getBookFromInput();

    if (libraryArray.find(({title}) => title === newBook.title)) {

        alert("This book is already in your library.")

    } else {

        libraryArray.push(newBook);

    }

    updateLibraryDisplay();
    
}

const updateLibraryDisplay = () => {

    resetLibraryDisplay();
    displayBooks();

}

const resetLibraryDisplay = () => {
    libraryContainer.innerHTML = '';
}

const createBookCard = (book) => {

    const bookCard = document.createElement('div');
    const bookTitle = document. createElement('h1');
    const bookAuthor = document.createElement('h3');
    const bookPages = document.createElement('p');
    const bookNumberOfPages = document.createElement('span');
    const bookCardReadButton = document.createElement('button');
    const bookCardRemoveButton = document.createElement('button');
    const removeButtonImage = document.createElement('img');

    bookCard.classList.add('book');
    if (book.read === false) {
        bookCard.classList.add('unreadBook');
    } else {
        bookCard.classList.add('readBook');
    }
    bookTitle.classList.add('title', 'text');
    bookAuthor.classList.add('author', 'text');
    bookPages.classList.add('pages', 'text', 'semibold');
    bookNumberOfPages.classList.add('numberOfPages');
    if (book.read === false) {
        bookCardReadButton.textContent = "Not Read Yet";
        bookCardReadButton.classList.add('button', 'notReadButton');
    } else {
        bookCardReadButton.textContent = "Read";
        bookCardReadButton.classList.add('button', 'readButton');
    }
    bookCardRemoveButton.classList.add('removeButton');
    removeButtonImage.setAttribute('src', 'images/recycle.svg');

    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookPages.textContent = `Pages: ${book.pages}`;
    
    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookPages.appendChild(bookNumberOfPages);
    bookCard.appendChild(bookCardReadButton);
    bookCard.appendChild(bookCardRemoveButton);
    bookCardRemoveButton.appendChild(removeButtonImage);
    libraryContainer.appendChild(bookCard);

}

displayBooks();

function removeBookFromLibrary() {
    /*
    
    1. delete book object from libraryArray
    2. run displayBooks() to update display

    */
}

const changeReadStatus = (book) => {
    book.read = !book.read;
    if (book.read === true) {
    }
}


addBookButton.addEventListener("click", (e) => {
    
    e.preventDefault();
    
    getBookFromInput();
    addBookToLibrary();

    console.log(libraryArray);
})

