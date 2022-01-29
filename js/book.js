// Class instead of functions. ES6 all the way!
class Book {
    // Later on when you will develop larger and more complex applications, you need to split your code up.
    // Try to think of it as each file has their own "entity" or "responsibility". This book is an example of that.

    constructor(title = null, author = null, totalPages = null, isRead = false) {
        this.title = title,
        this.author = author,
        this.totalPages = totalPages, // pages -> totalPages (makes it more clear what type of var we're dealing with)
        this.isRead = isRead // read -> isRead (makes it more clear what type of var we're dealing with)

        // function() -> () => conversion
        // Check: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
        //this.info = () => `${title} by ${author}, ${totalPages} pages, ${isRead}`
    }


    getBookFromInput = (title, author, pages, readStatus) => {

        const bookTitleInput = document.getElementById('bookTitleInput').value;
        const bookAuthorInput = document.getElementById('bookAuthorInput').value;
        const bookPagesInput = document.getElementById('bookPagesInput').value;
        const readStatusSelect = document.getElementById('readStatusInput');
        const readStatusInput = readStatusSelect.options[readStatusSelect.selectedIndex].value;

        if (bookTitleInput === '') {

            return new Book(title, author, pages, readStatus);

        } else if (bookTitleInput != '') {

            return new Book(bookTitleInput, bookAuthorInput, bookPagesInput, readStatusInput);

        }

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

            this.changeReadStatus(book);

        });

        bookCardRemoveButton.addEventListener('click', () => {

            library.removeBookFromLibrary(book);


        });

    }


    changeReadStatus = (book) => {

        book.isRead = !book.isRead
        console.log(book.isRead);

    }

}
