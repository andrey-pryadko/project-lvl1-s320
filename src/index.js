import readlineSync from 'readline-sync';

import {
  car, cdr,
} from 'hexlet-pairs';

const welcomeText = 'Welcome to the Brain Games!';
const questionsCount = 3;

const startGame = (taskGame, makePairOfQuestionAndAnswer) => {
  console.log(welcomeText);
  console.log(`${taskGame}\n`);
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!\n`);
  for (let i = 0; i < questionsCount; i += 1) {
    const questionAndAnswer = makePairOfQuestionAndAnswer(i);
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
