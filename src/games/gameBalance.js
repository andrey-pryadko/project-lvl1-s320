import { cons } from 'hexlet-pairs';
import generateRandomNumber from '../utils';
import startGame from '..';

const taskGame = 'Balance the given number.';
const minNumber = 100;
const maxNumber = 10000;

const getBalanceNumber = (number) => {

};

const gameBalance = () => {
  const question = generateRandomNumber(minNumber, maxNumber);
  const correctAnswer = getBalanceNumber(question);
  const pairOfQuestionAndAnswer = cons(question, correctAnswer);
  return pairOfQuestionAndAnswer;
};

export default () => startGame(taskGame, gameBalance);
