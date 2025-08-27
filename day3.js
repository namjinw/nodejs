function add(a, b) {
    return a + b;
}
function subtrac(a, b) {
    return a - b;
}

module.exports = {add, subtrac}; // 함수 모듈화

const c = require("./day4") // 모듈을 담고있는 객체

console.log("오브젝트 모양은 ", c.object) // <= 모듈화 가져와서 출력
console.log("오브젝트 너비는 ", c.width)