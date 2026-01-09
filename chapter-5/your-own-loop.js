// Exercise 2: Your own loop

function loop(value, test, update, body) {
  if (!test(value)) return;
  body(value);
  loop(update(value), test, update, body);
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

// Note: I solved this one using recursion, while
// the answer provided by the book uses a for loop.