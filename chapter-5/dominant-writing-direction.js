// Exercise 4: Dominant writing direction

function dominantDirection(text) {
  let result = countBy(text, char => {
    return characterScript(char.codePointAt(0))?.direction;
  }); 

  const dominant = result.reduce((a, b) => {
    return a.count > b.count ? a : b
  });
  return dominant.name;
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl