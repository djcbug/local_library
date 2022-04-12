function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA,accountB) => 
    accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) {
  const {id} = account;
  let result = 0;
  
  for (let book in books) {
    const { borrows } = books[book];
    borrows.forEach((element) => {
      if (element.id === id) {
        result++;
      }
    });
  }

  return result;
 
}

function getBooksPossessedByAccount(account, books, authors) {
  const result = books.filter(book => book.borrows.some(entry => entry.id === account.id && !entry.returned)
)
  result.forEach(book => book.author = authors.find(author => author.id === book.authorId))
  
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
