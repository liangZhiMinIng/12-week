// 这个start.js文件夹的作用是将静态文件发布出去 
const express = require("express")

const app = express()

// 发布静态资源
// express 框架里 use 加载中间件（可以使第三方中间件，也可以是本框架自己的）
app.use("/",express.static('./pages'));//把当前目录下的pages文件夹中所有的文件发布到3000（/）端口处

app.use("/vue3",express.static("./dist"))

app.listen(3000,() => console.log("listening port 3000 ..."))
