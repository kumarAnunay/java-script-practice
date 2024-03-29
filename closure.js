const users = ["Alice", "Dan", "Jessica"];
const query = "A";

const user = users.filter((item) => item.startsWith(query));

console.log(user);

// Function has a closure over a variable
// or
// A function closes over a variable

/************************************************/

// Lexical Scope

function outermost() {
  const user = "Deadpool";
  function inner() {
    function innerMost() {
      const score = 100;
    }
  }
}

/************************************************/

// Garbage Collector
function liveAday() {
  const food = "cheese";
  const one = 1;
  const two = 2;
  function eat() {
    console.log("Eating...", food);
  }
  return eat;
}

const innerFunction = liveAday();

/************************************************/


// Memory Efficiency
// function heavyDuty(index) {
//   const bigArray = new Array(7000).fill("🔥");
//   console.log("Array Created");
//   return bigArray[index];
// }

// console.log(heavyDuty(700));
// console.log(heavyDuty(100));
// console.log(heavyDuty(100));
// console.log(heavyDuty(100));
// console.log(heavyDuty(100));
// console.log(heavyDuty(100));

function heavyDuty2() {
  const bigArray = new Array(7000).fill("🔥");
  console.log("Array Created");
  return function (index) {
    return bigArray[index];
  };
}

const getHeavyDuty = heavyDuty2();
getHeavyDuty(1);
getHeavyDuty(87);
getHeavyDuty(99);

/************************************************/

// Closures

// Encapsulation & Abstraction

const rahulSalary = (function () {
  let salary = 60000;

  function changeBy(amount) {
    salary += amount;
  }

  return {
    raise: function () {
      changeBy(5000);
    },
    lower: function () {
      changeBy(-10000);
    },
    currentAmount: function () {
      return salary;
    },
  };
})();

console.log(rahulSalary.currentAmount());
rahulSalary.raise();
console.log(rahulSalary.currentAmount());
rahulSalary.lower();
console.log(rahulSalary.currentAmount());