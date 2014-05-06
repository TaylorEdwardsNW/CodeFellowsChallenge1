// Constructor for a library
function library() {
    // Creates an array to store the shelves that will be created
    this.shelves = [];
    
    // this function will readout everybook on every shelf
    this.readOut = function () {
        console.log("The following books are in the library:\n");
        
        // goes through each element of the shelves array
        for (var i = 0; i < shelves.length; i++) {
            // goes through each element of the books array
            for (var j = 0; j < books.length; j++) {
                // logs out each individual book
                console.log(library.shelves[i].books[j] + "\n");
            }
        }
        
    }
};

// Constructor for a shelf. Takes in the number of the shelf
function shelf(shelfNum) {
    // creates an array to store all the books on this shelf
    this.books = [];
    
    // assigns the shelfNum to the created shelf
    this.shelfNum = shelfNum;
    
    // assigns the shelf to a slot in the library.shelves array
    library.shelves[shelfNum].push(shelfNum, books);
}

// Constructor for a book. Takes in name of book and author
function book(name, author) {
    // assigns given in name to created book
    this.name = name;
    
    // assigns given author to created book
    this.author = author;
    
    // enshelf function adds a book to a specified shelf takes in 
    // the book title, author, and num of shelf
    this.enshelf = function (name, author, numShelf) {
        // pushes the book to the books array of the correct shelf
        // in the library.shelves array
        library.shelves[numShelf].books.push(name, author);
    };
    
    // Deletes a given book from a shelf takes in title, author, and
    // num of shelf
    this.unshelf = function (name, author, numShelf) {
        //deletes that element of the books array from the shelf
        delete library.shelves[numShelf].books[[name][author]];
    };
}