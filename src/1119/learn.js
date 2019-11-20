//导入express框架
const express = require('express')
const path = require('path')
//创建一个express实例,相当于创建了web服务
const app = express()
app.set('view engin','ejs') //设置使用何种模板引擎
app.set('view',path.resolve(__dirname,'./public'))//模板引擎存放的地方

//处理路由
app.get('/hello/:name',(req,res)=>{
    res.render('welcome',{
        name:req.params.name,
        isLogin:false,
        friuts:[
            {name:'apple'},
            {name:'orange'}
        ]
    })
})
app.get('/about',(req,res)=>{
    res.render('about')
})



//启动服务
app.listen(9090)

