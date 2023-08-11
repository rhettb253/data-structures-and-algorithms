class AnimalShelter {
  constructor(animal = null) {
    this.front = animal;
    this.rear = animal;
  }

  enqueue(animal) {
    if (!animal.species || !animal.name) return null;
    if (this.front === null) {
      this.front = animal;
      this.rear = animal;
      return;
    }
    if (this.front === this.rear) {
      this.rear = animal;
      this.front.next = this.rear;
    } else {
      this.rear.next = animal;
      this.rear = this.rear.next;
    }
  }


  dequeue(pref) {
    if (this.front === null) return null;
    if (pref !== "cat" && pref !== "dog") return null;
    if (this.front.species === pref) {
      let temp = this.front;
      this.front = temp.next;
      if (this.front === null) this.rear = null;
      return temp;
    }
    let connector = this.front;
    let dequeueNode = this.front;
    let current = this.front.next;
    while (current.species !== pref) {
      if (connector !== dequeueNode) connector = dequeueNode;
      dequeueNode = current;
      current = current.next;
    }
    if (connector !== dequeueNode) connector = dequeueNode;
    dequeueNode = current;
    current = current.next;
    connector.next = current;
    return dequeueNode;
  }
}

module.exports = AnimalShelter;
