const fs = require('node:fs')

const rawInput = fs.readFileSync('./input.txt', 'utf-8')
const arrLines = rawInput.split('\n')

// Part one
const listOne = arrLines.map((str) => parseInt(str.split('   ')[0])).sort((a, b) => b - a)
const listTwo = arrLines.map((str) => parseInt(str.split('   ')[1])).sort((a, b) => b - a)

let diffSum = 0

for (let i = 0; i < listOne.length; i++) {
    let diff = listOne[i] - listTwo[i]
    diffSum += Math.abs(diff)
}

console.log(`Part One: ${diffSum}`)

// Part Two

const hashOne = {}
const hashTwo = {}

for (let i = 0; i < listOne.length; i++) {
    if (hashOne[listOne[i]]) {
        hashOne[listOne[i]] += 1
    } else {
        hashOne[listOne[i]] = 1
    }

    if (hashTwo[listTwo[i]]) {
        hashTwo[listTwo[i]] += 1
    } else {
        hashTwo[listTwo[i]] = 1
    }
}

let simScore = 0
for (const [key, value] of Object.entries(hashOne)) {
    if (hashTwo[key]) {
        simScore += (parseInt(key) * value * hashTwo[key])
    }
}

console.log(`Part Two: ${simScore}`)