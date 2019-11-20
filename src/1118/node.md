## 1. node.js 出现的时间 2009

## 2. deno

## 3. node.js 内置核心模块

1.http
2.https
3.fs
4.url
5.path 等等

## 4. node 中没有DOM 和 BOM

## 5. js中全局对象是window .  node 中全局对象是global

## 6. node文件需要如何运行 -- 通过cmd 、 powerShell使用node命令来运行的 node 文件名

## 7.ctl+` 打开VScode 的终端

## 8. 启动web服务

## 9. 通过nodemon 工具来实现node.js服务在修改后自动更新
1.npm i -g nodemon   -> npm install -global nodemon

## 10. npm 全局安装 AppData

## 11.res.write()响应中文时，出现乱码
在res.write()之前，先调用res.writeHead()设置响应头，Content-Type

## 12. 需要通过 http://localhost:8080/hcy.html 需引入fs模块 fs.readFile()异步操作。fs.readFileSync(path,[options]) 同步操作


## 13. node.js启动的服务，访问html页面，发现css不起作用
原因是node.js的路径要自己定义

## 14.通过live-server工具模块，对电脑中某个文件做web服务。会自动提供一个8080
npm install -g live-server