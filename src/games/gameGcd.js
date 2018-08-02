import { cons } from 'hexlet-pairs';
import generateRandomNumber from '../utils';
import startGame from '..';

const taskGame = 'Find the greatest common divisor of given numbers.';
const minNumber = 1;
const maxNumber = 50;

const getGcd = (number1, number2) => {
  if (number1 === number2) {
    return number1;
  }
  const smallNumber = number1 < number2 ? number1 : number2;
  const bigNumber = smallNumber === number1 ? number2 : number1;
  for (let i = smallNumber; i > 0; i -= 1) {
    if (smallNumber % i === 0 && bigNumber % i === 0) {
      return i;
    }
  }
  return 1;
};

const gameGcd = () => {
  const number1 = generateRandomNumber(minNumber, maxNumber);
  const number2 = generateRandomNumber(minNumber, maxNumber);
  const correctAnswer = getGcd(number1, number2);
  const pairOfQuestionAndAnswer = cons(`${number1} ${number2}`, String(correctAnswer));
  return pairOfQuestionAndAnswer;
};

export default () => startGame(taskGame, gameGcd);
