//POST http://localhost:9090/login
//两个参数：
//          username  用户名
//          password  密码

// GET http://localhost:9090/search
// 一个参数:
//          username 用户名

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
        'Content-Type':'text/html;charset = utf-8'
    })

    //接受前端传过来的数据
    let datas = '';
   req.on('data',(chunk)=>{
        console.log(decodeURIComponent(chunk));//username=李四&password=456
        datas += decodeURIComponent(chunk);//已经转译好了
   })

   //将数据进行转化成能够进行比较的格式
   req.on('end',()=>{
       let obj = {}
       let arr = datas.split('&')
       console.log(arr);
       arr.forEach(str =>{
           let key = str.split('=')[0]
           let value = str.split('=')[1]
           obj[key] = value
           console.log(obj)
       })
       console.log(obj)
       //判断obj.username是否在users数组中
      let user = users.find(str =>{
          return str.username === obj.username
      })
      console.log(user)
      if(!user){
          res.write('该用户不存在')
          res.end()
          return;
      }
      //判断密码
      console.log(user.password);
      console.log(obj.password);
      //必须从匹配中找密码
      if(user.password===obj.password ){
        res.write('登录成功')
        res.end()
      }else{
          res.write('密码错误')
          res.end()
      }
   })
})
server.listen(9090)