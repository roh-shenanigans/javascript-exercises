const getTheTitles = function (bookList) {
    let titles = [];

    for (const book of bookList) {
        if (book.hasOwnProperty("title")) {
            console.log(book.title)
            titles.push(book.title);
    	}
    }

    return titles;
};

const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]

// console.log(getTheTitles(books));
// Do not edit below this line
module.exports = getTheTitles;
