// Class instead of functions. ES6 all the way!
class Book {
    // Later on when you will develop larger and more complex applications, you need to split your code up.
    // Try to think of it as each file has their own "entity" or "responsibility". This book is an example of that.

    constructor(title = null, author = null, totalPages = null, isRead = false) {
        this.title = title,
        this.author = author,
        this.totalPages = totalPages, // pages -> totalPages (makes it more clear what type of var we're dealing with)
        this.isRead = false // read -> isRead (makes it more clear what type of var we're dealing with)

        // function() -> () => conversion
        // Check: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
        this.info = () => `${title} by ${author}, ${totalPages} pages, ${isRead}`
    }

    // (Example method that you could later add)
    addToLibrary(library) { // You can pass your Library object here "by reference" (https://www.javascripttutorial.net/javascript-pass-by-value/)
        // (will not work now, but you get the idea)
        const newBook = getBookFromInput()

        if (library.find(({title}) => title === newBook.title)) {
            alert('This book is already in your library.')
        } else {
            library.push(newBook)
        }

        updateLibraryDisplay()
    }
}
