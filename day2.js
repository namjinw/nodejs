const a = 18;

if (a >= 20) {
    console.log("성인 입니다.")
}
else {
    console.log("미성년자 입니다.")
}

function square(x) {
    return x * x;
}

console.log(square(3))
console.log(square(5))

const math = require("./day3");

console.log(`3 + 5 =`, math.add(3, 5))
console.log(`3 + 5 =`, math.subtrac(3, 5))