import { cons } from 'hexlet-pairs';
import generateRandomNumber from '../utils';
import startGame from '..';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number ** 0.5; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const gameTask = 'Is this number prime?';
const minNumber = 1;
const maxNumber = 100;

const gamePrime = () => {
  const question = generateRandomNumber(minNumber, maxNumber);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  const pairOfQuestionAndAnswer = cons(question, correctAnswer);
  return pairOfQuestionAndAnswer;
};

export default () => startGame(gameTask, gamePrime);
