const fs = require('node:fs')

const rawInput = fs.readFileSync('./input.txt', 'utf-8')

// Part One

let sum = 0;

const regex = /mul\((\d{1,3}),(\d{1,3})\)/g

while ((match = regex.exec(rawInput)) !== null) {
    sum += (parseInt(match[1]) * parseInt(match[2])
)}

// console.log(sum)

// Part Two