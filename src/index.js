import readlineSync from 'readline-sync';

import {
  car, cdr,
} from 'hexlet-pairs';

const welcomeText = 'Welcome to the Brain Games!';
const asknameText = 'May I have your name?: ';
const questionsCount = 3;

export const greetByName = () => {
  console.log(welcomeText);
  const name = readlineSync.question(asknameText);
  console.log(`Hello, ${name}!`);
};

const startGame = (taskGame, pairOfQuestionAndAnswer) => {
  console.log(welcomeText);
  console.log(taskGame);
  const name = readlineSync.question(asknameText);
  console.log(`Hello, ${name}!`);
  for (let i = 0; i < questionsCount; i += 1) {
    const currentQuestionAndAnswer = pairOfQuestionAndAnswer();
    const currentQuestion = car(currentQuestionAndAnswer);
    const currentcorrectAnswer = cdr(currentQuestionAndAnswer);
    const answer = readlineSync.question(`Question: ${currentQuestion}\nYour answer: `);
    if (currentcorrectAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${currentcorrectAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default startGame;
