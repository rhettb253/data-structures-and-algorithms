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

describe('When enqueueing...', () => {

  test('an animal without a species prop we return null', () => {
    const shelter = new AnimalShelter(cat1);
    expect(shelter.enqueue(nonAnimal)).toBe(null);
  });

  test('an animal to an empty shelter we correctly fill the front and rear', () => {
    const shelter = new AnimalShelter();
    shelter.enqueue(cat1);
    expect(shelter.front.species).toBe('cat');
    expect(shelter.rear.name).toBe('whiskers');
  });

  test('an animal to a shelter with existing animals it places itself at the rear', () => {
    const shelter = new AnimalShelter(cat1);
    shelter.enqueue(dog1);
    expect(shelter.rear.name).toBe('mcbarksalot');
    shelter.enqueue(dog2);
    expect(shelter.rear.name).toBe('reginald');
  });

});
