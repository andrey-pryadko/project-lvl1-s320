import { cons } from 'hexlet-pairs';
import startGame from '..';

const isEven = number => (number % 2 === 0);
const taskGame = 'Answer "yes" if number even otherwise answer "no".';

const gameEven = () => {
  const question = Math.floor(Math.random() * 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  const pairOfQuestionAndAnswer = cons(question, correctAnswer);
  return pairOfQuestionAndAnswer;
};

export default () => startGame(taskGame, gameEven);
