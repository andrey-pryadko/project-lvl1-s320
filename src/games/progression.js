import { cons } from 'hexlet-pairs';
import generateRandomNumber from '../utils';
import startGame from '..';

const gameTask = 'What number is missing in this progression?';

const gameProgression = () => {
  const progressionStartNumber = generateRandomNumber(1, 100);
  const d = generateRandomNumber(1, 10);
  let result = '';
  let sum = progressionStartNumber;
  let correctAnswer = 0;
  const questionPosition = generateRandomNumber(0, 9);
  for (let i = 0; i < 10; i += 1) {
    if (i === questionPosition) {
      sum += d;
      result += '.. ';
      correctAnswer = sum;
      i += 1;
    }
    sum += d;
    result += `${sum} `;
  }
  const pairOfQuestionAndAnswer = cons(result, String(correctAnswer));
  return pairOfQuestionAndAnswer;
};

export default () => startGame(gameTask, gameProgression);
