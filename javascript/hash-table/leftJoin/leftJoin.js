function leftJoin(ob1, ob2) {
  for (const prop in ob2) {
    if (ob1[prop]) {
      ob1[prop] = [ob1[prop], ob2[prop]];
    }
  }
  return ob1;
}

module.exports = leftJoin;
