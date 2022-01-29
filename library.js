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

}

const libraryContainer = document.querySelector('#libraryContainer');
const newBookButton = document.querySelector('#newBookButton');
const form = document.querySelector('#formContainer');
const formCloseButton = document.querySelector('#formCloseButton');
const addBookButton = document.querySelector('#addBookButton');

const library = new Library();
library.createSampleBooks();


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
