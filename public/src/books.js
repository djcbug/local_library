function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id)
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  let checkedOut = [];
  let returned = [];
  let result = [];
  
  books.forEach(book => (!book.borrows[0].returned) ? checkedOut.push(book) : returned.push(book))
  result.push(checkedOut);
  result.push(returned);
  
  return result;
  
}

function getBorrowersForBook(book, accounts) {
  let result = book.borrows.map((borrows) => {
  let account = accounts.find((account) => account.id === borrows.id);
    return { ...borrows, ...account };
  });

  return result.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
