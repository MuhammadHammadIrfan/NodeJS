//This is how you can import multiple functions from a module in Node.js in ES6, for this you have to add type: module in package.json

export function simple() {
  console.log('simple function');
}
export default function simple2() {
  console.log('simple2 function');
}
