//nodemon express.js  运行当前文件 
//访问的路径 http://127.0.0.1:8081/   或 http://localhost:8081/  或 http://10.36.147.129:8081/
const express = require('express')
const app = express()
app.get('/',(req,res)=>{
    console.log('主页get请求');
    res.send('hcylyjk')
})

app.post('/kl',(req,res)=>{
    console.log('主post');
    res.send('yjk')
})

app.get('/demo1',(req,res)=>{
    console.log('创建新的子页面请求get');
    res.send('hcy')
})

app.get('/list',(req,res)=>{
    console.log('list');
    res.send('love')
})

const server = app.listen(8081,()=>{
    let host = server.address().address
    let port = server.address().port
    //console.log(host,port)  
})