const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".'

const maxNumber = 100

const isEven = number => number % 2 === 0

const generateNumber = () => Math.floor(Math.random() * maxNumber) + 1

const getCorrectAnswer = number => (isEven(number) ? 'yes' : 'no')

const generateRound = () => {
  const number = generateNumber()
  const question = number
  const correctAnswer = getCorrectAnswer(number)

  return { question, correctAnswer }
}

export { gameRule, generateRound }
