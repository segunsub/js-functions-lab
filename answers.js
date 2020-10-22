// Question 1
function hello(name) {
  // Write your code here
  return `Hello, ${name}!`
}

// Question 2
function findProduct(a, b) {
//Write your code here
  let product = a * b
 return product
}


// Question 3
function getSquare(a) {
  //Write your code here
  let area = a * a
  return area
}

// Question 4
function makeOpposite(a, b) {
  //Write your code here
  let opps = a * -1
  return opps
}

// Question 5
function logEvenNumbers() {
  // Write your code here
  for (let i = 1; i <= 50; i++){
    if (i % 2 === 0){
      console.log(i)
    }
  }
  return `Why is 6 afraid of 7?`
}

// Question 6
function sumFoursAndSevens(a) {
    let i = 1;
    let x = 1;
    let b = 0;
    let c = 0;
    while (i <= a) {
        if (i % 4 === 0){
      console.log(i);
      b = b + i;
    }
    i++;
    }
    while (x <= a) {
        if (x % 7 === 0){
       console.log(x);
       c = c + x;
     }
     x++;
    }
    let sum = b + c;
    return sum
}
// Question 7
function exsAndOhs() {
  // Write your code here
}

// Do NOT touch or write anything below this line
module.exports = {
  hello,
  getSquare, 
  makeOpposite,
  logEvenNumbers,
  findProduct,
  sumFoursAndSevens,
  exsAndOhs,
};
