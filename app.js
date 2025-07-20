const express = require('express');
const app = express();

//req,body를 사용하려면 JSON 미들웨어를 사용해야 합니다. //사용하지 않으면 undefined로 반환
app.use(express.json()); // 2 JSON 미들웨어 활성화
//POST | application/x-www-form-urlencoded인 경우 파싱
app.use(express.urlencoded({ extended: true })); // JSON 미들웨어와 함께 사용

app.get("/", (req, res) => {
    res.json("Hello world!");
});

app.use("/routes/all/methods")
// /로 요청이 오면 실행
// Hello world를 응답

module.exports = app;
