// prob 1
let sum = 0;
function addOn(num) {
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
}
console.log(addOn(4));

//prob 2

function numCube(num1 = 0, num2 = 0, num3 = 0) {
  console.log(Math.pow(num1, 3) + Math.pow(num2, 3) + num3 ** 3);
}

numCube(2, 2, 2);

// prob 3

function checkWord(string, word) {
  if (string.search(word) === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(checkWord("array", "arreeb"));

//prob 4

function lessThanOrEqualToZero(x) {
  if (x <= 0) {
    return true;
  } else {
    return false;
  }
}
console.log(lessThanOrEqualToZero(6));

////prob 5

function numberOccurances(word, letter) {
  return word.split(letter).length - 1;
}
console.log(numberOccurances("roar", "r"));

// // prob 6

function calculateBaseToExponent(x, x) {
  return Math.pow(x, x);
}
console.log(calculateBaseToExponent(5, 5));

// prob 7

function dogAge(y) {
  realDoggyAge = y * 7;
  return realDoggyAge;
}
console.log("your doggo is " + dogAge(7) + " year old in dog year");

// prob 8

function calcSupply(age, number) {
  const maxAge = 80;

  return (maxAge - age) * 365 * number;
}
console.log(
  "you will need " +
    calcSupply(25, 2) +
    " of chocolate (2 a day) to last you till the age of 80."
);

//prob 10

function pieDistribution(numberOfSlice, recipient, piePerPerson) {
  if (numberOfSlice === recipient * piePerPerson) {
    return true;
  } else {
    return false;
  }
}
console.log(pieDistribution(17, 4, 5));

// prob 11

function XO(name) {
  if (name.split("x") || name.split("o")) {
    return true;
  } else {
    return false;
  }
}
console.log(XO("ayrra"));

// prob 12

function primeOrNot(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    } else if (num > 1) {
      return true;
    }
  }
}
console.log(primeOrNot(5));

// prob 13

function checkEmail(string) {
  var chechAtCharacter = string.includes("@");
  var checkDot = string.includes(".");
  var oneCharacterInfront = string.indexOf("@") != 0;
  var atAppropiatePlace = string.lastIndexOf(".") - string.indexOf("@") > 2;

  if (
    chechAtCharacter &&
    checkDot &&
    oneCharacterInfront &&
    atAppropiatePlace
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(checkEmail("johnsmith@email.com"));
// string.indexOf("@") - string.lastIndexOf(".") > 2;
