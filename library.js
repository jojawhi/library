// Since we included js/book.js in the HTML (before this file), we have access to the Book class
// Try to be consistent in single or double quotes usage. Especially if you're going to work in a team later where
// you need consistency in coding style. I would recommend single quotes, it's a bit more common

class Library {
    constructor() {
        this.books = [];
    }

    createSampleBooks = () => {

        let sampleBooks = [
            {
                title: "Dune",
                author: "Frank Herbert",
                totalPages: 884,
                isRead: false
            },
            {
                title: "Wizard's First Rule",
                author: "Terry Goodkind",
                totalPages: 836,
                isRead: true
            },
            {
                title: "Ender's Game",
                author: "Orson Scott-Card",
                totalPages: 324,
                isRead: true
            },
            {
                title: "The Hobbit",
                author: "JRR Tolkien",
                totalPages: 295,
                isRead: true
            }
        ];

        let classBooks = [];

        for (let i = 0; i < sampleBooks.length; i++) {
            classBooks[i] = new Book ().getBookFromInput(sampleBooks[i].title, sampleBooks[i].author, sampleBooks[i].totalPages, sampleBooks[i].isRead);
            this.addBookToLibrary(classBooks[i]);
        }

    }

    displayBooks = () => {

        const libraryArray = this.books;

        for (let i = 0; i < libraryArray.length; i++) {

            libraryArray[i].createBookCard(libraryArray[i]);

            console.log(libraryArray[i].isRead);

        }

    }

    updateLibraryDisplay = () => {

        this.resetLibraryDisplay();
        this.displayBooks();

    }

    resetLibraryDisplay = () => {

        libraryContainer.innerHTML = '';

    }


    addBookToLibrary = (book) => { // You can pass your Library object here "by reference" (https://www.javascripttutorial.net/javascript-pass-by-value/)
        // (will not work now, but you get the idea)

        if (this.books.find(({title}) => title === book.title)) {
            alert('This book is already in your library.')
        } else {
            this.books.push(book)
        }

        this.updateLibraryDisplay();

    }

    removeBookFromLibrary = (book) => {

        const index = this.books.indexOf(book);

        this.books.splice(index, 1);

        library.updateLibraryDisplay();

    }
/*
    removeBookFromLibrary = (book) => {

        const index = this.books.indexOf(book);

        this.books.splice(index, 1);

        this.updateLibraryDisplay();

    }


    createBookCard = (book) => {

        const bookCard = document.createElement('div');
        const bookTitle = document. createElement('h1');
        const bookAuthor = document.createElement('h3');
        const bookPages = document.createElement('p');
        const bookNumberOfPages = document.createElement('span');
        const bookCardReadButton = document.createElement('button');
        const bookCardRemoveButton = document.createElement('button');
        const removeButtonImage = document.createElement('img');
        const readStatus = book.isRead;

        bookCard.classList.add('book');
        //console.log(book.isRead);
        if (readStatus.toString() === 'true') {
            bookCard.classList.add('readBook');
            bookCardReadButton.textContent = "Read";
            bookCardReadButton.classList.add('button', 'read');
        } else {
            bookCardReadButton.textContent = "Not Read Yet";
            bookCardReadButton.classList.add('button');
        }
        bookTitle.classList.add('title', 'text');
        bookAuthor.classList.add('author', 'text');
        bookPages.classList.add('pages', 'text', 'semibold');
        bookNumberOfPages.classList.add('numberOfPages');
        bookCardRemoveButton.classList.add('removeButton');
        removeButtonImage.setAttribute('src', 'images/recycle.svg');

        bookTitle.textContent = book.title;
        bookAuthor.textContent = book.author;
        bookPages.textContent = `Pages: ${book.totalPages}`;

        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPages);
        bookPages.appendChild(bookNumberOfPages);
        bookCard.appendChild(bookCardReadButton);
        bookCard.appendChild(bookCardRemoveButton);
        bookCardRemoveButton.appendChild(removeButtonImage);
        libraryContainer.appendChild(bookCard);

        bookCardReadButton.addEventListener('click', (e) => {

            if (e.target.textContent === "Read") {
                e.target.textContent = "Not Read Yet";
            } else if (e.target.textContent === "Not Read Yet") {
                e.target.textContent = "Read";
            }

            bookCardReadButton.classList.toggle('read');
            bookCard.classList.toggle('readBook');

            book.changeReadStatus();

        });

        bookCardRemoveButton.addEventListener('click', () => {

            this.removeBookFromLibrary(book);

        });

    }
    */

}

const libraryContainer = document.querySelector('#libraryContainer');
const newBookButton = document.querySelector('#newBookButton');
const form = document.querySelector('#formContainer');
const formCloseButton = document.querySelector('#formCloseButton');
const addBookButton = document.querySelector('#addBookButton');

const library = new Library();
library.createSampleBooks();






/*
const displayBooks = () => {

    for (i = 0; i < libraryArray.length; i++) {

        createBookCard(libraryArray[i]);

        console.log(libraryArray[i].isRead);

    }

}

const getBookFromInput = () => {

    const bookTitleInput = document.getElementById('bookTitleInput').value;
    const bookAuthorInput = document.getElementById('bookAuthorInput').value;
    const bookPagesInput = document.getElementById('bookPagesInput').value;
    const readStatusSelect = document.getElementById('readStatusInput');
    const readStatusInput = readStatusSelect.options[readStatusSelect.selectedIndex].value;

    console.log(readStatusInput);

    return new Book(bookTitleInput, bookAuthorInput, bookPagesInput, readStatusInput);

}

const addBookToLibrary = () => {

    const newBook = getBookFromInput();

    if (libraryArray.find(({title}) => title === newBook.title)) {

        alert("This book is already in your library.")

    } else {

        libraryArray.push(newBook);
        updateLibraryDisplay();

    }

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
    const readStatus = book.isRead;

    bookCard.classList.add('book');
    console.log(book.isRead);
    if (readStatus.toString() === 'true') {
        bookCard.classList.add('readBook');
        bookCardReadButton.textContent = "Read";
        bookCardReadButton.classList.add('button', 'read');
    } else {
        bookCardReadButton.textContent = "Not Read Yet";
        bookCardReadButton.classList.add('button');
    }
    bookTitle.classList.add('title', 'text');
    bookAuthor.classList.add('author', 'text');
    bookPages.classList.add('pages', 'text', 'semibold');
    bookNumberOfPages.classList.add('numberOfPages');
    bookCardRemoveButton.classList.add('removeButton');
    removeButtonImage.setAttribute('src', 'images/recycle.svg');

    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookPages.textContent = `Pages: ${book.totalPages}`;

    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookPages.appendChild(bookNumberOfPages);
    bookCard.appendChild(bookCardReadButton);
    bookCard.appendChild(bookCardRemoveButton);
    bookCardRemoveButton.appendChild(removeButtonImage);
    libraryContainer.appendChild(bookCard);

    bookCardReadButton.addEventListener('click', (e) => {

        if (e.target.textContent === "Read") {
            e.target.textContent = "Not Read Yet";
        } else if (e.target.textContent === "Not Read Yet") {
            e.target.textContent = "Read";
        }

        bookCardReadButton.classList.toggle('read');
        bookCard.classList.toggle('readBook');

        changeReadStatus(book);

    });

    bookCardRemoveButton.addEventListener('click', () => {

        removeBookFromLibrary(book);

    });

}


displayBooks();



const removeBookFromLibrary = (book) => {

    const index = libraryArray.indexOf(book);

    libraryArray.splice(index, 1);

    updateLibraryDisplay();

}



const changeReadStatus = (book) => {

    book.isRead = !book.isRead

    console.log(book);

}

*/

addBookButton.addEventListener('click', (e) => {

    e.preventDefault();

    let newBook = new Book ().getBookFromInput();
    library.addBookToLibrary(newBook);

    form.classList.toggle('hiddenForm');

    console.log(library);
})

newBookButton.addEventListener('click', () => {

    form.classList.toggle('hiddenForm');

})

formCloseButton.addEventListener('click', () => {

    form.classList.toggle('hiddenForm');

})

/*

To-do:

- add local storage functionality
- add simple backend, like firebase, for account and save functionality
- prevent sample books from being added when user adds their own books (if user has added books, remove createSampleBooks script or method)

Bugs:

*/
