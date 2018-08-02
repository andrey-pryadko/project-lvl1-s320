import { cons } from 'hexlet-pairs';
import generateRandomNumber from '../utils';
import startGame from '..';

const taskGame = 'Balance the given number.';
const minNumber = 100;
const maxNumber = 10000;

const getBalanceNumber = (number) => {
  const stringNumber = String(number);
  const lengthNumber = stringNumber.length;
};

const getBigNumber = (number, i) => {
  const stringNumber = String(number);
  let result = stringNumber[0];
  if (i === stringNumber.length) {
    return result;
  }
  result = stringNumber[i] > stringNumber[i + 1] ? stringNumber[i] : stringNumber[i + 1];
  return getBigNumber(number, i + 1);
};

const getSmallNumber = (number, i) => {
  const stringNumber = String(number);
  let result = stringNumber[0];
  if (i === stringNumber.length) {
    return result;
  }
  result = stringNumber[i] < stringNumber[i + 1] ? stringNumber[i] : stringNumber[i + 1];
  return getSmallNumber(number, i + 1);
};


// есть мысль разбить задачу на два этапа, 1.большая цифра отдает меньшей.
// 2.расставляем цифры в нужном порядке

const gameBalance = () => {
  const question = generateRandomNumber(minNumber, maxNumber);
  const correctAnswer = getBalanceNumber(question);
  const pairOfQuestionAndAnswer = cons(question, correctAnswer);
  return pairOfQuestionAndAnswer;
};

export default () => startGame(taskGame, gameBalance);
