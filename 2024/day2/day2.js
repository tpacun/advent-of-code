const fs = require('node:fs')

const rawInput = fs.readFileSync('./input.txt', 'utf-8')
const arrLines = rawInput.split('\n')

// Part One

const arrInput = arrLines.map(a => a.split(' ').map(n => parseInt(n)))

const filteredInput = arrInput.filter((arr) => {

    // Check for unique numbers
    if (arr.length !== new Set(arr).size) return false
    
    // Check for total diff
    // Still need to check individual diffs
    const firstIdx = arr.at(0)
    const lastIdx = arr.at(-1)
    const diff = Math.abs(firstIdx - lastIdx)

    if (diff > 3 * (arr.length) || diff < arr.length) return false
    // Check for sorted
    const isIncreasing = lastIdx > firstIdx
    if (isIncreasing) {
        if (arr == arr.toSorted((a, b) => b - a)) return false
    } else {
        if (arr == arr.toSorted((a, b) => b - a)) return false
    }

    return true
})

let sum = 0

for (let arr of filteredInput) {
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) continue
        const diff = Math.abs(arr[i] - arr[i-1])
        const check = (diff >= 1 && diff <= 3)
        if (!check) {
            break
        }
        if (i === arr.length - 1) {
            sum ++
        }
    }
}

// console.log(sum)

// Part Two

let sumTwo = 0

const checker = (arr) => {
    let diffs = []
    for (let i = 1; i < arr.length; i++) {
        diffs.push(arr[i] - arr[i - 1])
    }

    const inc = diffs.every((val) => val >= 1 && val <= 3)
    const dec = diffs.every((val) => val >= -3 && val <= -1)

    return inc || dec
}

arrInput.forEach((rep) => {
    for (let i = 0; i < rep.length; i++) {
        const rem = [...rep.slice(0, i), ...rep.slice(i + 1)]
        if (checker(rem)) {
            sumTwo ++
            break
        }
    }
})

console.log(sumTwo)