const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan angka : ", (input_number) => {
  for (let i = 1; i <= input_number; i++) {
    console.log(`Current Number is : ${i} and the cube is ${i ** 3}\n`);
  }
  rl.close();
});
