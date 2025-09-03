const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
    fs.readFile("index.html", "utf-8", (err, data) => {
        if (err) {
            res.writeHead(500,{"Content-Type" : "text/plain; charset=utf-8"})
            res.end("서버에러 HTML파일을 읽을 수 없습니다.")
        }
        else {
            res.writeHead(200,{"Content-Type" : "text/html; charset=utf-8"})
            res.end(data)
        }
    })
})

server.listen(3000, () => {
    console.log("http://localhost:3000")
})