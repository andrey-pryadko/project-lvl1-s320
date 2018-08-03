import { cons } from 'hexlet-pairs';
import generateRandomNumber from '../utils';
import startGame from '..';

const gameTask = 'Balance the given number.';
const minNumber = 100;
const maxNumber = 1000;

const getSumDigits = (number) => {
  const stringNumber = String(number);
  const lengthNumber = stringNumber.length;
  let result = 0;
  for (let i = 0; i < lengthNumber; i += 1) {
    result += Number((stringNumber[i]));
  }
  return result;
};

const getBalancedNumber = (number) => {
  const stringNumber = String(number);
  const numberOfDigits = stringNumber.length;
  const sumDigits = getSumDigits(number);
  const extraNumber = sumDigits % numberOfDigits;
  const averageNumber = (sumDigits - extraNumber) / numberOfDigits;
  let result = '';
  for (let i = 0; i < numberOfDigits - extraNumber; i += 1) {
    result += String(averageNumber);
  }
  for (let i = numberOfDigits - extraNumber; i < numberOfDigits; i += 1) {
    result += String(averageNumber + 1);
  }
  return result;
};

const gameBalance = () => {
  const question = generateRandomNumber(minNumber, maxNumber);
  const correctAnswer = getBalancedNumber(question);
  const pairOfQuestionAndAnswer = cons(question, correctAnswer);
  return pairOfQuestionAndAnswer;
};

export default () => startGame(gameTask, gameBalance);
