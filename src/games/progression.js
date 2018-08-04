import { cons } from 'hexlet-pairs';
import generateRandomNumber from '../utils';
import startGame from '..';

const gameTask = 'What number is missing in this progression?';

const gameProgression = () => {
  const startElement = generateRandomNumber(1, 100);
  const step = generateRandomNumber(1, 10);
  const progressionLength = 10;
  let progression = '';
  const questionPosition = generateRandomNumber(0, progressionLength - 1);
  const correctAnswer = startElement + step * questionPosition;
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === questionPosition) {
      progression += '.. ';
      i += 1;
    }
    progression += `${startElement + step * i} `;
  }
  const pairOfQuestionAndAnswer = cons(progression, String(correctAnswer));
  return pairOfQuestionAndAnswer;
};

export default () => startGame(gameTask, gameProgression);
