import { cons } from 'hexlet-pairs';
import generateRandomNumber from '../utils';
import startGame from '..';

const taskGame = 'What is the result of the expression?';
const minNumber = 1;
const maxNumber = 10;

const gameCalc = () => {
  const number1 = generateRandomNumber(minNumber, maxNumber);
  const number2 = generateRandomNumber(minNumber, maxNumber);
  const operandNumber = generateRandomNumber(1, 3);
  switch (operandNumber) {
    case 1:
      return cons(`${number1} * ${number2}`, String(number1 * number2));
    case 2:
      return cons(`${number1} - ${number2}`, String(number1 - number2));
    default:
      return cons(`${number1} + ${number2}`, String(number1 + number2));
  }
};

export default () => startGame(taskGame, gameCalc);
