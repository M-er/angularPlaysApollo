const { books } = require("../data/books.js");

class Book {
  static all() {
    return books;
  }
}
