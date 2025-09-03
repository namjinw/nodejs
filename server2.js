const express = require("express");
const app = express();

app.use(express.json()); // json데이터 받기
app.get('/user/:id', (req, res) => { // URL치고 값 입력하면 json으로 보여줌
    const userid = req.params.id; // URL params 가뵤 저장하는 객체 => user/5를 저장
    res.json({ message: `${userid}번 조회`})
})

app.get('/search', (req, res) => {
    const qurey = req.query.검색어; // 쿼리 값 담는 객체로 search?검색어=5를 저장
    res.json({ result: `검색어: ${qurey}`})
})

app.get('/', (req, res) => {
    res.send('홈페이지입니다!'); // 홈페이지 보여주기
});

app.listen(3000, () =>{
    console.log("http://localhost:3000")
})

