const fs = require('fs');
const { console } = require('inspector');

// fs.readFile("file.txt",'utf-8',(err,data)=>{
//     console.log(err, data);
// })

// const a = fs.readFileSync("file.txt");
// console.log(a.toString());
// console.log("Finish reading file:");

try {
  const b = fs.writeFileSync(
    'file.txt',
    'Hello, this is what I have written in file.txt'
  );
  console.log('Finish writing file');
} catch (err) {
  console.error('Error writing file:', err);
}