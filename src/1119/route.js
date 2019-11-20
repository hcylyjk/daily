const express = require('express')
const server =  express()

server.get('/static',(req,res)=>{
    console.log('get的请求');
    res.send('Hello Get')
})

//启动http服务
let address = server.listen(9090,()=>{
   console.log(address.address()); //访问 http://127.0.0.1:9090
})
