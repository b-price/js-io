if (process.argv.length !== 3) {
    console.error("Error: Invalid amount of arguments")
    process.exit(1)
}

const keywords = ["towson", "cis", "web", "development"]

var fs = require("fs")

var filename = process.argv[2]
var input = fs.readFileSync(filename).toString()

var words = input.replace(/[,.?!:;()]/g, "").split(/\s+/g)
console.log(words)
var count = 0

words.forEach(wordCheck)

function wordCheck(item) {
    if (keywords.includes(item.toLowerCase())) count++
}

console.log("The total number of occurences is: " + count)