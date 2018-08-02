import { cons } from 'hexlet-pairs';
import generateRandomNumber from '../utils';
import startGame from '..';

const taskGame = 'What is the result of the expression?';
const minNumber = 1;
const maxNumber = 10;

const gameCalc = (i) => {
  const number1 = generateRandomNumber(minNumber, maxNumber);
  const number2 = generateRandomNumber(minNumber, maxNumber);
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
