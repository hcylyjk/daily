//1.引入express

const express = require('express')

//生成express的实例 相当于开启服务
const server = express()

//处理路由(就是不同url地址需要不同的响应)
//http://localhost:8080
server.get('/',(req,res)=>{
    res.send('hello')
})
//server.get('/',(req,res)=>{})

//http://localhost:8080/login
server.get('/login',(req,res)=>{
    res.send('登录')
})

//监听端口