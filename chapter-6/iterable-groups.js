// Exercise 3: Iterable groups

class Group {
  constructor() {
    this.group = [];
  }

  add(value) {
    if (!this.group.includes(value)) this.group.push(value);
  }

  delete(value) {
    const index = this.group.indexOf(value);
    if (index !== -1) this.group.splice(index, 1);
  }

  has(value) {
    return this.group.includes(value);
  }

  static from(iterable) {
    let group = new Group;
    for (let element of iterable) {
      group.add(element);
    }

    return group;
  }
}

class GroupIterator {
  constructor(group) {
    this.group = group;
    this.index = 0;
  }

  next() {
    if (this.index >= this.group.length) {
      return {done: true}
    }
    const index = this.index;
    this.index++;
    return {value: this.group[index], done: false}
  }
}

Group.prototype[Symbol.iterator] = function () {
  return new GroupIterator(this.group);
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c

// The solution in the book doesn't modify Group.prototype directly,
// it instead creates the function binding within the class itself.
// That was something I overlooked when solving this problem.