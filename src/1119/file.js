const express = require('express')
const fs = require('fs')
//中间件，用于处理JSON、Raw、Text、和URL编码的数据
const bodyParser = require('body-parser')
//中间件，用于处理enctype ="multipart/form-data"的表单数据
const multer = require('multer')
const app = express()
app.use(bodyParser.urlencoded({extended:false}))
//处理文件
app.use(multer({dest:'/tem/'}).array('image'))
//加载静态资源
app.use(express.static('piblic'))

//查询打开某个指定的文件，即路由
app.get('/file.html',(req,res)=>{
    console.log(__dirname)
    //相当于 req.url   req.readFile
    res.sendFile(__dirname+"/"+"public/css/file.html")
   
})

app.get('/static.css',(req,res)=>{
    res.sendFile(__dirname+"/" + "public/css/static.css")
})

//上传的文件
app.post('/file',(req,res)=>{
    //上传文件信息
    console.log(req.files[0]);
    let filePath = __dirname + "/" + req.files[0].originalname;
    console.log(filePath);//获取文件路径
    fs.readFile(req.files[0].path,(err,data)=>{
        fs.writeFile(filePath,data,(err)=>{
            if(err){
                console.log(err);  
            }else{
                response = {
                    message:'File successfully',
                    filename:req.files[0].originalname
                }
            }
            console.log(response);
            res.end(JSON.stringify(response))
        })
    })
    
    
})
app.listen(8080)
console.log('服务启动');
