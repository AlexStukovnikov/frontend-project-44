const gameRule = 'What is the result of the expression?'

const maxNumber = 100
const operations = ['+', '-', '*']

const generateNumber = () => Math.floor(Math.random() * maxNumber) + 1

const generateRandomOperation = () => operations[Math.floor(Math.random() * operations.length)]

const calculate = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
  }
}

const generateRound = () => {
  const num1 = generateNumber()
  const num2 = generateNumber()
  const operation = generateRandomOperation()

  const question = `${num1} ${operation} ${num2}`

  const result = calculate(num1, num2, operation)
  const correctAnswer = String(result)

  return { question, correctAnswer }
}

export { gameRule, generateRound }
