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
    if(req.url !== '/favicon.ico'){
       
        if(req.url.indexOf('/search')>-1){
            let obj = {}
            let str =  req.url.split('?')[1];//只要参数
           // console.log(str)
            let arr = str.split('&')
            console.log(arr)
            arr.forEach(item =>{
                let key = item.split('=')[0]
                let value = item.split('=')[1]
                console.log(key,value)
                obj[key] = decodeURIComponent(value)
            })
            let username = obj.username;
            console.log(username)
            let arr1 = users.filter(item =>{
                return item.username.indexOf(username)>-1
            })
           if(!username){
               arr1 = users
           }
            res.write(JSON.stringify(arr1))
            res.end()
        }
    }
  })

  server.listen(9090)
  console.log('服务已启动')