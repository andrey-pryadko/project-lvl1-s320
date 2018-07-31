import readlineSync from 'readline-sync';

export const greetByName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
};

const isEven = number => (number % 2 === 0);

export const playGameEvenOrNot = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if number even otherwise answer "no".');
  const questionsCount = 3;
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
