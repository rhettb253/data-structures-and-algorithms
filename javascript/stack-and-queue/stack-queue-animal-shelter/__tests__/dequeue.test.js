const AnimalShelter = require('../index');

const cat1 = {
  species: 'cat',
  name: 'whiskers'
};

const dog1 = {
  species: 'dog',
  name: 'mcbarksalot'
};

const dog2 = {
  species: 'dog',
  name: 'reginald'
};

const nonAnimal = {
  name: 'idonthavespeciesprop'
};

describe('When dequeueing...', () => {

  test('an incorrect arguement returns null', () => {
    let shelter = new AnimalShelter(dog2);
    expect(shelter.dequeue('mouse')).toBe(null);
  });

  test('an empty shelter returns null', () => {
    let shelter = new AnimalShelter();
    expect(shelter.dequeue('dog')).toBe(null);
  });

  test('the first node matches the arguement', () => {
    let shelter = new AnimalShelter(dog1);
    shelter.enqueue(dog2);
    console.log(shelter);
    let lostNode = shelter.dequeue('dog');
    console.log(shelter);
    expect(lostNode.name).toBe('mcbarksalot');
  });

  test('the third node matches the arguement', () => {
    let shelter = new AnimalShelter(dog1);
    shelter.enqueue(dog2);
    shelter.enqueue(cat1);
    let lostNode = shelter.dequeue('cat');
    console.log(shelter);
    expect(lostNode.name).toBe('whiskers');
  });

});
