if (process.argv.length !== 3) {
    console.error("Error: Invalid amount of arguments")
    process.exit(1)
}

const fs = require("fs")

const filename = process.argv[2]
const input = fs.readFileSync(filename).toString()
const lines = input.split("\n")

if (lines.length < 3) {
    console.error("Error: Text missing data")
    process.exit(1)
}

const JSONob = {}
JSONob["fname"] = lines[0]
JSONob["lname"] = lines[1]
JSONob["location"] = lines[2]

if (lines.length > 3) {
    var other = ""
    for (var i = 3; i < lines.length; i++){
        if (i === lines.length - 1) {
            other += lines[i]
        } else {
            other += lines[i] + " "
        }
    }
    JSONob["other"] = other
} else JSONob["other"] = "N/A"

const JSONstr = JSON.stringify(JSONob)
console.log(JSONstr)