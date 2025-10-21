import readlineSync from 'readline-sync'

// consts
const ROUND_COUNT = 3
const MAX_NUMBER = 100
const GAME_RULE = 'Answer "yes" if the number is even, otherwise answer "no".'

const isEven = number => number % 2 === 0

const generateNumber = () => Math.floor(Math.random() * MAX_NUMBER) + 1

const getCorrectAnswer = number => (isEven(number) ? 'yes' : 'no')

const startGame = (userName) => {
  console.log(GAME_RULE)

  for (let round = 0; round < ROUND_COUNT; round += 1) {
    const number = generateNumber()
    console.log(`Question: ${number}`)

    const userAnswer = readlineSync.question('Your answer: ')
    const correctAnswer = getCorrectAnswer(number)

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`)
      console.log(`Let's try again, ${userName}`)
      return
    }

    console.log('Correct!')
  }

  console.log(`Congratulations, ${userName}!`)
}

export default startGame
