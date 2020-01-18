var books = ["Shriek: An Afterword", "Finch", "Annihilation", "Authority", "Acceptance"];

function arrayEx() {
    var booksLen, i, loop;
    booksLen = books.length;
    loop = "<ul>";
    for (i = 0; i < booksLen; i++) {
        loop += "<li>" + books[i] + "</li>";
    }
    loop += "</ul>";
    document.getElementById("demo").innerHTML = loop;
}

function addBook() {
    var book = prompt("Please type a title of the book you've read lately", "");
    if (book != null) {
        books[0] = book;
        arrayEx();
    }
}