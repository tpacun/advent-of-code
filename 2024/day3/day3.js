const fs = require('node:fs')

const rawInput = fs.readFileSync('./input.txt', 'utf-8')

class CorruptedMem {

    multipliedSum(input) {
        let sum = 0
        const regex = /mul\((\d{1,3}),(\d{1,3})\)/g
        
        let match;
        while ((match = regex.exec(input)) !== null) {
            sum += (parseInt(match[1]) * parseInt(match[2]))
        }
        return sum
    }

    conditionalSum(input) {
        const donts = input.split("don\'t()")

        const cleaned = donts.map((str, i) => {
            if (i === 0) {return str}
            const doStart = str.indexOf("do()")
            if(doStart > -1) {
                return str.slice(doStart)
            }
        })
        const cleanedStr = cleaned.join('')
        return this.multipliedSum(cleanedStr)

    }    
    
}    

// Part One

const corrupt = new CorruptedMem()

console.log(corrupt.multipliedSum(rawInput))

// Part Two

console.log(corrupt.conditionalSum(rawInput))