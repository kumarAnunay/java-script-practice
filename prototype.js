const parent = {
    id: 1,
    name: "Dad",
    score: 100,
};

// [[Prototype]]

// const child = Object.create(parent)

// const child = {
//   __proto__: parent,
// };

// console.log(child.name);

const child = {
    id: 2,
    score: 50,
};
Object.setPrototypeOf(child, parent);
console.log(child);

console.log(typeof null);