

//通过http://localhost:8080/getName 让浏览器输出 hcy
//需要通过 http://localhost:8080/hcy.html 需引入fs模块
//1.引入http模块
const http = require('http')
const fs = require('fs')
const express = require('express')
const path = require('path')
const app = express()
//2.调用http的createServer方法来创建 服务实例
//http.createServer(请求监听函数)

const sever = http.createServer((req,res)=>{
    //console.log(req.url)
    //过滤掉小图标
    if(req.url !== '/favicon.ico'){
        if(req.url === '/getName'){
            res.writeHead(200,{
                'Content-Type':'text/html;charset=utf-8'
            })
            res.write('姚')
            res.end()
        }else if(req.url === '/hcy.html'){
            fs.readFile('./hcy.html','utf8',(err,data)=>{
                if(err){
                    throw err;
                    res.end()
                }else{
                    res.write(data)
                    res.end()
                }
            })         
        }else if(req.url === '/hcy.css'){
            const data = fs.readFileSync('hcy.css')
            res.write(data)
            res.end()
        }else{
            res.write('hellos')
            res.end()
        }     
    } 
})
//3.调用server 的listen 方法来监听端口号
sever.listen(8080)