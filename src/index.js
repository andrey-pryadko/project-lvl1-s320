import readlineSync from 'readline-sync';

export const greetByName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
};

const isEven = number => (number % 2 === 0);
const questionsCount = 3;

export const gameEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  for (let i = 0; i < questionsCount; i += 1) {
    const question = Math.floor(Math.random() * 100);
    const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export const gameCalc = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  for (let i = 0; i < questionsCount; i += 1) {
    const number1 = Math.floor(Math.random() * 100);
    const number2 = Math.floor(Math.random() * 100);
    const answer = readlineSync.question(`Question: ${number1} + ${number2}\nYour answer: `);
    const correctAnswer = number1 + number2;
    if (correctAnswer === Number(answer)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
