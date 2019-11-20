const http = require('http')

const users = [
    {
      username: '张三',
      password: '123'
    },
    {
      username: '张三风',
      password: '123'
    },
    {
      username: '李四',
      password: '456'
    },
    {
      username: '王五',
      password: '789'
    },
    {
      username: '马六',
      password: '000'
    }
  ]

const server = http.createServer((req,res)=>{
    res.writeHead(200,{
        'Access-Control-Allow-Origin':'*',
        'Content-Type':'text/html;charset=utf-8'
    })
   
    if (req.url !== '/favicon.ico') {
        if (req.url === '/login') {
    
          // 得到前端传递过来的 username 与 password的值
          let raw = ''; // 用来接收前端传递过来的参数
    
          req.on('data', (chunk) => {
            // 这里事件就是前端请求时请求内容的数据，如果传递的数据很多的话，这个事件会触发多次。每次里面的chunk是这个数据的一小部分
    
            raw += chunk
          })
    
          req.on('end', () => {
            let obj = {}
            let arr = raw.split('&')
            arr.forEach(str => {
              let key = str.split('=')[0]
              let value = str.split('=')[1]
    
              // decodeURIComponent 解码
              obj[key] = decodeURIComponent(value)
            })
    
            console.log(obj)
    
            // 判断当前用户是否在我 users 数组中
            let user = users.find(user => {
              return user.username === obj.username
            })
    
            if (!user) {
              res.write('用户名不存在');
              res.end()
    
              return
            }
    
            // 判断密码是否一致
            if (user.password === obj.password) {
              res.write('登录成功')
              res.end()
            } else {
              res.write('密码错误')
              res.end()
            }
          })
    
          // res.write('登录处理')
          // res.end()
        }
    }
       
   

})
server.listen(9090)
console.log('服务器启动成功');
