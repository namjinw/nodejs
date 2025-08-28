const http = require("http")
const fs = require("fs")
const moment = require("moment")

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        const path = require("path");

        const html = fs.readFileSync(path.join(__dirname, "index.html"), "utf-8");
        res.writeHead(200, {"Content-Type" : "text/html"})
        res.end(html);
    }
    else if (req.url === "/time") {
        const now = moment().format("YYYY-MM-DD, HH:mm:ss")
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end(now);
    }
})

server.listen(3000, ()=> {
    console.log("server runnig at http://localhost:3000")
})