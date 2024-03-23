if (process.argv.length !== 4) {
    console.error("Error: Invalid amount of arguments")
    process.exit(1)
}

const fs = require("fs")
const path = require("path")

var count = 0

var filepath = process.argv[2]
var filetype = process.argv[3]

fs.readdir(filepath, (err, files) => { 
    if (err) 
      console.log("Error: No such directory")
    else { 
      files.forEach(file => { 
        if (path.extname(file) === filetype) 
          count++
      }) 
      console.log(`The total number of ${filetype} files is: ${count}`)
    } 
  }) 