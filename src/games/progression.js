const gameRule = 'What number is missing in the progression?'

const progressionLength = 10
const minStart = 1
const maxStart = 50
const minStep = 2
const maxStep = 10

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

const generateProgression = (start, step, length) => {
  const progression = []

  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i)
  }

  return progression
}

const getRandomIndex = length => Math.floor(Math.random() * length)

const hideElement = (array, hiddenIndex) => {
  const result = [...array]

  result[hiddenIndex] = '..'

  return result.join(' ')
}

const generateRound = () => {
  const start = getRandomNumber(minStart, maxStart)

  const step = getRandomNumber(minStep, maxStep)

  const progression = generateProgression(start, step, progressionLength)

  const hiddenIndex = getRandomIndex(progressionLength)

  const question = hideElement(progression, hiddenIndex)

  const correctAnswer = String(progression[hiddenIndex])

  return { question, correctAnswer }
}

export { gameRule, generateRound }
