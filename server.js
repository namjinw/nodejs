const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public"))); // 정적파일로 publix

// app.get('/', (req, res) => { // 일일이 라우팅
//     res.sendFile(path.join(__dirname, "public" , "index.html"));
// });

app.get('/api', (req, res) => {
    res.json({message: "서버와 연동되었습니다!"})
})

app.listen(3000, () => {
    console.log("http://localhost:3000")
})