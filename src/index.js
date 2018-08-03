import readlineSync from 'readline-sync';

import {
  car, cdr,
} from 'hexlet-pairs';

const questionsCount = 3;

const startGame = (gameTask, makePairOfQuestionAndAnswer) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(`${gameTask}\n`);
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!\n`);
  for (let i = 0; i < questionsCount; i += 1) {
    const questionAndAnswer = makePairOfQuestionAndAnswer();
    const question = car(questionAndAnswer);
    const correctAnswer = cdr(questionAndAnswer);
    const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default startGame;
