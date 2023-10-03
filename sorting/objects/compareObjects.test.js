const {compareByTitle, compareByYear} = require('./compareObjects');

const movie1 = {
  title: 'Gone With The Wind',
  year: 1950,
  genres: []
};

const movie2 = {
  title: 'The Little Drummer Boy',
  year: 1970,
  genres: []
};

const movie3 = {
  title: 'A Walk To Remember',
  year: 1990,
  genres: []
};

let movieArr = [movie1, movie2, movie3];

test('array is sorted alphabetically by title', () => {
  compareByTitle(movieArr);
  expect(movieArr).toEqual([movie1, movie2, movie3]);
});

test('array is sorted in order by most recent release year', () => {
  compareByYear(movieArr);
  expect(movieArr).toEqual([movie3, movie2, movie1]);
});
