const http = require("http") // http 모듈

const server = http.createServer((req, res) => { // req = 클라이언트 요청, res = 클라이언트 응답
    res.writeHead(200, {"Content-Type" : "text/plain; charset=utf-8"}) // 200 <= 정상출력
    res.end("Hello node.js!")
})

server.listen(3000, ()=> {
    console.log("http://localhost:3000")
})