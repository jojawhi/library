

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
const bookTitleInput = document.querySelector('#bookTitleInput');
const bookAuthorInput = document.querySelector('#bookAuthorInput');
const bookPagesInput = document.querySelector('#bookPagesInput');
const readStatusInput = document.querySelector('#readStatusInput');

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
    {
        title: "An Astronaut's Guide to Life",
        author: "Chris Hadfield",
        pages: 324,
        read: false
    }
];

const addBookToLibrary = (title, author, pages, read) => {
    /*
    1. accept form input
    2. create new book object from form input
    3. add new book object to libraryArray
    4. run displayBooks() to update display
    */

    new Book (title, author, pages, read);


}

const displayBooks = () => {

    /*
    1. loop through libraryArray
    2. for each book object, run createBookCard()
    3. append bookCards as children of libraryContainer

    */

    for (i = 0; i < libraryArray.length; i++) {

        createBookCard(libraryArray[i]);

    }


}

const createBookCard = (book) => {

    const bookCard = document.createElement('div');
    const bookTitle = document. createElement('h1');
    const bookAuthor = document.createElement('h3');
    const bookPages = document.createElement('p');
    const bookNumberOfPages = document.createElement('span');
    const checkContainer = createCheckmark(book.read);
    const bookCardRemoveButton = document.createElement('button');
    const removeButtonImage = document.createElement('img');

    bookCard.classList.add('book');
    if (book.read === false) {
        bookCard.classList.add('unreadBook')
    } else {
        bookCard.classList.add('readBook');
    }
    bookTitle.classList.add('title', 'text');
    bookAuthor.classList.add('author', 'text');
    bookPages.classList.add('pages', 'text', 'semibold');
    bookNumberOfPages.classList.add('numberOfPages');
    bookCardRemoveButton.classList.add('removeButton');
    removeButtonImage.setAttribute('src', 'images/recycle.svg');

    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookPages.textContent = `Pages: ${book.pages}`;
    
    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookPages.appendChild(bookNumberOfPages);
    bookCard.appendChild(checkContainer);
    bookCard.appendChild(bookCardRemoveButton);
    bookCardRemoveButton.appendChild(removeButtonImage);
    libraryContainer.appendChild(bookCard);

}

const createCheckmark = (boolean) => {

    const checkContainer = document.createElement('div');
    const checkLabel = document.createElement('label');
    const checkLabelText = document.createElement('span');
    const checkbox = document.createElement('input');
    const customCheckmark = document.createElement('span');

    checkContainer.classList.add('readContainer');
    checkLabel.classList.add('text', 'semibold', 'customCheckboxContainer');
    checkLabelText.classList.add('labelText');
    checkLabelText.textContent = "Read: ";
    checkbox.setAttribute('type', 'checkbox');
    if (boolean === true) {
        checkbox.checked = true;
    } else {
        checkbox.checked = false;
    }
    checkbox.classList.add('readStatusTileCheckbox');
    customCheckmark.classList.add('checkmark');

    checkContainer.appendChild(checkLabel);
    checkLabel.appendChild(checkLabelText);
    checkLabel.appendChild(checkbox);
    checkLabel.appendChild(customCheckmark);
    
    return checkContainer;

}

function removeBookFromLibrary() {
    /*
    
    1. delete book object from libraryArray
    2. run displayBooks() to update display

    */
}

function changeReadStatus() {
    this.read = !this.read;
}

console.log(libraryArray);

displayBooks();