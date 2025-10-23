const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const maxNumber = 100

const getRandomNumber = () => Math.floor(Math.random() * maxNumber)

const isPrime = (number) => {
  if (number < 2) {
    return false
  }

  if (number === 2) {
    return true
  }

  if (number % 2 === 0) {
    return false
  }

  for (let i = 3; i < Math.sqrt(number); i += 2) {
    if (number % i === 0) {
      return false
    }
  }

  return true
}

const checkPrime = number => isPrime(number) ? 'yes' : 'no'

const generateRound = () => {
  const number = getRandomNumber()

  const question = number

  const correctAnswer = checkPrime(number)

  return { question, correctAnswer }
}

export { gameRule, generateRound }
