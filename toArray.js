var count = 0
const nums = []
process.argv.forEach(evenNums)

function evenNums(item, index) {
    if (index > 1 && item % 2 === 0) {
        nums[count] = item
        count++
    }
}

console.log("The array contains: " + nums)
console.log("The length of the array is: " + nums.length)