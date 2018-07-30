import readlineSync from 'readline-sync';

export const whatIsYourName = () => {
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
};

const isNumberEven = number => (number % 2 === 0 ? 'yes' : 'no');

export const questionEvenOrNot = () => {
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if number even otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
    const userAnswer = readlineSync.question(`Question: ${randomNumber}\nYour answer: `);
    const correctAnswer = isNumberEven(randomNumber);
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      return (`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}`);
    }
  }
  return (`Congratulations, ${name}`);
};
