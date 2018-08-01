import {
  cons, car, cdr,
} from 'hexlet-pairs';

export const gameQuestion = 'Answer "yes" if number even otherwise answer "no".';

export const question = Math.floor(Math.random() * 100);
const isEven = number => (number % 2 === 0);
export const correctAnswer = isEven(question) ? 'yes' : 'no';

export const gameCalc = () => {

};
