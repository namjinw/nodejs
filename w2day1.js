const mo = require("lodash")

const numders = [1, 2, 3, 4, 5];
console.log(mo.shuffle(numders))
console.log(mo.max(numders))
console.log(mo.min(numders))

const me = require("moment")

const day = me();

console.log(day.format("YYYY-MM--DD HH:mm:ss"))

console.log(day.format("YYYY년 MM월 DD일"))
console.log(day.format("HH시 mm분 ss초"))