const express = require('express')
const mysql = require('mysql')
//创建express实例，相当于创建一个服务
const server = express()

//get请求 server(path,fn)
server.get('/search',(req,res)=>{
    //设置跨域问题
    res.header("Access-Control-Allow-Origin","*")
    //let GET = req.query
    //console.log(GET)
    res.send('OK') //返回给前端的数据
})

server.listen(9090,()=>{
    console.log('服务已开启');
    
})