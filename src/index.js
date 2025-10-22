import readlineSync from 'readline-sync'
import greetUser from './cli.js'

const ROUND_COUNT = 3

const startGame = (game) => {
  const userName = greetUser()
  console.log(game.gameRule)

  for (let round = 0; round < ROUND_COUNT; round += 1) {
    const { question, correctAnswer } = game.generateRound()

    console.log(`Question: ${question}`)

    const userAnswer = readlineSync.question('Your answer: ')

    if (userAnswer !== correctAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }

    console.log('Correct!')
  }

  console.log(`Congratulations, ${userName}!`)
}

export default startGame
