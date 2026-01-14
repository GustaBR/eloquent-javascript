// Exercise 2: Groups

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

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false