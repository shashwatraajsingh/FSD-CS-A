import readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter two numbers separated by space: ', (input) => {

  const numbers = input.split(' ');
  
  if (numbers.length < 2) {
    console.log('Please enter two numbers separated by space!');
    rl.close();
    return;
  }


  const num1 = parseFloat(numbers[0]);
  const num2 = parseFloat(numbers[1]);

  if (isNaN(num1) || isNaN(num2)) {
    console.log('Please enter valid numbers!');
  } else {
    console.log(`Sum: ${num1 + num2}`);
  }

  rl.close();
});