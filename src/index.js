import readlineSync from 'readline-sync';

import {
  cons, car, cdr,
} from 'hexlet-pairs';

import {
  task, question, correctAnswer,
} from './games/gameEven';

const welcomeText = 'Welcome to the Brain Games!';
const asknameText = 'May I have your name?: ';
const questionsCount = 3;

export const greetByName = () => {
  console.log(welcomeText);
  const name = readlineSync.question(asknameText);
  console.log(`Hello, ${name}!`);
};

export const gameEven = () => {
  console.log(welcomeText);
  console.log(task);
  const name = readlineSync.question(asknameText);
  console.log(`Hello, ${name}!`);
  for (let i = 0; i < questionsCount; i += 1) {
    const currentQuestion = question();
    const currentcorrectAnswer = correctAnswer(currentQuestion);
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

export const gameCalc = () => {
  console.log(welcomeText);
  console.log('What is the result of the expression?');
  const name = readlineSync.question(asknameText);
  console.log(`Hello, ${name}!`);
  for (let i = 0; i < questionsCount; i += 1) {
    const question = cons(Math.floor(Math.random() * 100), Math.floor(Math.random() * 100));
    const answer = readlineSync.question(`Question: ${car(question)} + ${cdr(question)}\nYour answer: `);
    const correctAnswer = car(question) + cdr(question);
    if (correctAnswer === Number(answer)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
