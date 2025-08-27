const fs = require("fs")

const data = fs.readFileSync("memo.txt", "utf-8")
console.log(data)