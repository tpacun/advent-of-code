const fs = require('node:fs')

const rawInput = fs.readFileSync('./input.txt', 'utf-8')
const arrLines = rawInput.split('\n')

// Part one
const listOne = arrLines.map((str) => str.split('   ')[0]).sort((a, b) => b - a)
const listTwo = arrLines.map((str) => str.split('   ')[1]).sort((a, b) => b - a)

let diffSum = 0

for (let i = 0; i < listOne.length; i++) {
    let diff = parseInt(listOne[i]) - parseInt(listTwo[i])
    diffSum += Math.abs(diff)
}
console.log(diffSum)

// Part Two