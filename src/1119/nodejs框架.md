# nodejs框架
1.express
2.koa
3.egg(阿里)
4.thinkjs(360)
5.adoninjs
6.nestjs

## express 快速实现一个web服务
1.先创建一个项目
2.初始化这个项目，生成一个package.json 文件
npm init -y
3.下载安装这个项目依赖的模块
npm install --save express
4.创建一个server.js文件，并写代码

5.运行 node 文件.js

# npm install 自动分析package.json的依赖




# 淘宝镜像

一、cnpm 
1.npm install -g cnpm --registry=https://registry.npm.taobao.org
2.npm 换成cnpm

二、换源
1.先查看当前电脑的npm的源地址
npm config get registry
2.更换为淘宝镜像的源
npm config set registry https://registry.npm.taobao.org

3.后续继续用 npm 即可



# npm 脚本  -> npm script
package.json 可以找到 scripts

运行脚本
npm run <脚本名>

特殊是，如果脚本名是start
npm start


# request.query  获取url中的参数，以对象形式


# 请求模拟工具 或 接口模拟工具
1.postman
2.insomnia

# 让代码支持req.cookies属性，需要使用 cookie-parser中间件，使用步骤
1.安装 cookie-parser
npm install --save cookie-parser
2.引入


# node.js路径处理
## 两个全局对象
1. __dirname 当前文件所在的目录的绝对对象
2. __filename 当前文件的绝对路径

## nodeJs 内置的 path 模块

1. path.resolve(...path)
2. path.join(...path)
区别在于，join()只是简单的对多个路径参数做合并，而resolve（）中，如果有某个根路径的参数，这个根路径参数前面的参数将会被忽略。resolve()总是会返回绝对路径。而join()就得依靠参数


## 模板引擎
> 模板引擎的作用，就是将静态页面给弄活，访问一个url地址，浏览器渲染出来的html的内容。但是不是直接输出一个静态页面，而是后端在输出之前会将一个静态的html页面模板与数据先拼接，然后再输出

## express中的模板引擎很多
1.EJS(模板语法跟js一样)
2.PUG
3.MUSTACHE
4...

## 需求

提供一个动态参数的url地址
http://localhost:8080/hello/李威
渲染到浏览器的是一个html页面。这个html中只有一个 <h1>欢迎，xxx</h1>

1. 新创建一个 express-02
2. 项目初始化
  npm init -y
3. 安装项目需要的依赖
  1. express
  2. ejs
  npm install --save express ejs

4. 写代码
  1. 需要通过 express 的实例的 set('view engine', 'xxx') 来设置当前项目使用哪种模板引擎
  2. 需要通过 express 的实例的 set('views', 'xxx') 来设置当前项目中模板页面的存放路径
  3. 后续需要渲染模板页面的地方，就可以使用 res.render() 来操作


  # 中间件

> 中间件的概念，在一起请求与响应的周期中。它一般都是在请求与响应的周期中对request对象或response做修改。

> 一个中间件其实就是一个函数，这个函数接收到3个参数，分别是 req、res、next。next()是让整个的流程往下面继续执行的。如果你不调用的话，这次的请求响应就直接断开了。

请求 -> 中间件1 -> 中间件2 - 中间件3 -> 响应

1. express.json()
2. express.urlencode()
3. cookieParser()
