import getUserName from '../src/cli.js'
import startGame from '../src/logic-brain-even.js'

console.log('Welcome to the Brain Games!')
const userName = getUserName()
console.log(`Hello, ${userName}!`)
startGame(userName)
