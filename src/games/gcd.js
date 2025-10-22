const gameRule = 'Find the greatest common divisor of given numbers.'

const maxNumber = 100

const generateNumber = () => Math.floor(Math.random() * maxNumber) + 1

const getGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1
  }

  while (num2 !== 0) {
    const temp = num2
    num2 = num1 % num2
    num1 = temp
  }

  return num1
}

const generateRound = () => {
  const num1 = generateNumber()
  const num2 = generateNumber()

  const question = `${num1} ${num2}`

  const result = getGcd(num1, num2)
  const correctAnswer = String(result)

  return { question, correctAnswer }
}

export { gameRule, generateRound }
