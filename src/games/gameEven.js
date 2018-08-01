const isEven = number => (number % 2 === 0);

export const task = 'Answer "yes" if number even otherwise answer "no".';
export const question = () => Math.floor(Math.random() * 100);
export const correctAnswer = currentQuestion => (isEven(currentQuestion) ? 'yes' : 'no');
