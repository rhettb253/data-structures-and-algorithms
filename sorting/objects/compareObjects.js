// One function will sort the movies, alphabetical by title, but will ignore any leading “A”s, “An”s, or “The”s
// One function will sort the movies by most recent year first.

function compareByTitle(arr) {
  arr.sort((a, b) => {
    // Remove leading articles and convert back to string
    const titleA = a.title.replace(/^(The|A|An) /, '').trim();
    const titleB = b.title.replace(/^(The|A|An) /, '').trim();

    if (titleA === titleB) return 0;
    if (titleA < titleB) return -1;
    if (titleA > titleB) return 1;
  });
}

function compareByYear(arr) {
  arr.sort((a, b) => {
    if (a.year === b.year) return 0;
    if (a.year < b.year) return 1;
    if (a.year > b.year) return -1;
  });
}

module.exports = {compareByTitle, compareByYear};
