//This is how you can export multiple functions from a module in Node.js in commonJS

function simple(){
    console.log('simple function');
}
function simple2(){
    console.log('simple2 function');
}
// // module.exports = simple2, simple;  // This will export only simple2 function
module.exports = {simple2, simple};  // This will export both functions



