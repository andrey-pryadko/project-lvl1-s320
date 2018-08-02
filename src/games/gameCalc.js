import { cons } from 'hexlet-pairs';
import startGame from '..';

const generateRandomNumber = () => Math.floor(Math.random() * 10);
const taskGame = 'What is the result of the expression?';

const gameCalc = (i) => {
  const number1 = generateRandomNumber();
  const number2 = generateRandomNumber();
  switch (i) {
    case 0:
      return cons(`${number1} + ${number2}`, String(number1 + number2));
    case 1:
      return cons(`${number1} - ${number2}`, String(number1 - number2));
    default:
      return cons(`${number1} * ${number2}`, String(number1 * number2));
  }
};

export default () => startGame(taskGame, gameCalc);
