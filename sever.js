const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const net = require('net');
const app = new express();
// 创建 json 解析
app.use(bodyParser.json());
// 创建 application/x-www-form-urlencoded 编码解析
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

const server = app.listen(3000, 'localhost',() => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(host);
    console.log(port);
    console.log('app listening at http://'+host+':'+ port);
});

let data = [
    { name: 'zhangsan', age: 23 },
    { name: 'lisi', age: 24 },
    { name: 'wangwu', age: 26 },
    { name: 'zhaoliu', age: 27 },
    { name: 'tianqi', age: 29 }
];

app.get('/gettest', (req, res) => {
    console.log(req.body);
    res.status(200),
        res.json(data)
});
app.post('/posttest', function(req, res) {
    console.log(req.body);
    res.status(200),
        res.json(data)
});