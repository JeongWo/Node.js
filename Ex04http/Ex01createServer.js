//http 모듈
const http = require('http'); //웹 브라우저의 요청/응답 처리

http.createServer((req,res)=>{
    //응답코드 : 200 / 404 /500 ...
    res.writeHead(200, {'Content-Type':'text/html; chatset=ufg-8'});
    //클라이언트로 보낼 데이터, 본문
    res.write('<h1>Hello world!</h1>');
    res.end('<p>node.js</p>');
}) //listen 메서드 사용해서 콜백함수 넣기
.listen(8888, ()=>{
    //서버 연결 대기 동안 뭘한건지
    console.log('8888번 포트에서 서버 연결 대기중!');
});