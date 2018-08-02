import {
  cons, car, cdr,
} from 'hexlet-pairs';

const randomNumber = () => Math.floor(Math.random() * 100);

export const task = 'What is the result of the expression?';
export const question = () => {
  const pairNumbers = cons(randomNumber(), randomNumber());
  const number1 = car(pairNumbers);
  const number2 = cdr(pairNumbers);
  return `${number1} + ${number2}`;
};
export const correctAnswer = currentQuestion => (isEven(currentQuestion) ? 'yes' : 'no');





export const gameCalc = () => {
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









export const gameCalc_old = () => {
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
