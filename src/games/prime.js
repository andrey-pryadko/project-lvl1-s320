import { cons } from 'hexlet-pairs';
import generateRandomNumber from '../utils';
import startGame from '..';

const isPrime = (number, i) => (number % i === 0 ? i === number : isPrime(number, i + 1));
const gameTask = 'Is this number prime?';
const minNumber = 1;
const maxNumber = 100;

const gamePrime = () => {
  const question = generateRandomNumber(minNumber, maxNumber);
  const correctAnswer = isPrime(question, 2) ? 'yes' : 'no';
  const pairOfQuestionAndAnswer = cons(question, correctAnswer);
  return pairOfQuestionAndAnswer;
};

export default () => startGame(gameTask, gamePrime);
