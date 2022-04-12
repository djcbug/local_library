function getTotalBooksCount(books) {
    return books.length;
}

function getTotalAccountsCount(accounts) {
    return accounts.length;
}

function getBooksBorrowedCount(books) {
  let total = 0;
  books.forEach((book) => {
    if (!book.borrows[0].returned) {
      total++;
    }
  });

  return total;
}

function getMostCommonGenres(books) {
  let result = [];
  const genreList = books.map((book) => book.genre);
  const accList = genreList.reduce((tally, genre) => {
    tally[genre] === undefined ? (tally[genre] = 1) : (tally[genre] += 1);
    return tally;
  }, {})

  for(gen in accList) {
    const num = accList[gen];
    const consise = {"name": gen, "count": num };
    result.push(consise);
  };
  
  return sortingArray(result);
}

function getMostPopularBooks(books) {
  let mostPopularBook = [];
  books.forEach((book) => mostPopularBook.push({name: book.title, count: book.borrows.length}))
  
  return sortingArray(mostPopularBook);
}

function getMostPopularAuthors(books, authors) {
  let mostPopularAuthors = [];
  authors.forEach((author)=> {
  let theAuthor = {
    name:`${author.name.first} ${author.name.last}`, 
    count: 0
  };
    
  books.forEach((book) => {
    if (book.authorId === author.id) {
      theAuthor.count += book.borrows.length;
    }
  });
    
  mostPopularAuthors.push(theAuthor);
  });
  
  return sortingArray(mostPopularAuthors);
}


// helper function
function sortingArray(array){
  return array.sort((one, two) => one.count < two.count ? 1 : -1).splice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
