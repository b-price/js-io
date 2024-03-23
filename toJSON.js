if (process.argv.length !== 3) {
    console.error("Error: Invalid amount of arguments")
    process.exit(1)
}

var fs = require("fs")

console.log("txt to JSON")
var filename = process.argv[2]
var input = fs.readFileSync(filename).toString()
var lines = input.split("\n")

if (lines.length < 3) {
    console.error("Error: Text missing data")
    process.exit(1)
}

var JSONob = {}
JSONob["fname"] = lines[0]
JSONob["lname"] = lines[1]
JSONob["location"] = lines[2]
if (lines.length > 3) {
    var other = ""
    for (var i = 3; i < lines.length; i++){
        other += lines[i] + "\n"
    }
    JSONob["other"] = other
} else JSONob["other"] = "N/A"
const JSONstr = JSON.stringify(JSONob)
console.log(JSONstr)