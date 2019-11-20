const http = require('http')//就是要创建web服务做准备
const fs = require('fs')//引入文件


const server = http.createServer((req, res) => {
    if (req.url !== '/favicon.ico') {
        if (req.url === '/getHtml') {
            res.writeHead(200, {
                'Content-Type': 'text/html;charset=utf-8'
            })
            res.write('姚')
            res.end()
        } else if (req.url === '/index') {
            fs.readFile('./view/index.html', (err, data) => {
                res.write(data)
                res.end()
            })
        } else if(req.url === '/index.css'){
            res.writeHead(200,{
                'Content-Type':'text/css;charset=utf-8'
            })
            const data = fs.readFileSync('./view/index.css')
            console.log(data)
            res.write(data)
            res.end()
        }else if(req.url === '/login-bg.jpg'){
            const data = fs.readFileSync('./view/login-bg.jpg')
            res.write(data)
            res.end()
        }else {
            res.write('<h1>hcy</h1>')
            res.end()
        }
    }
})

server.listen(8080)