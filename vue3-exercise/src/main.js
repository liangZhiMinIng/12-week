import { createApp } from 'vue'

// import {Button,message} from "ant-design-vue";// 局部导入    //第三方工具库的引入，前提是要先下载
// 按需导入
// import { Button } from 'ant-design-vue/lib/button';
// import { message } from 'ant-design-vue/lib/message';
// import "ant-design-vue/dist/antd.css";//引入样式        
import App from './App.vue'
import { useAntD } from './antd';
import {router} from "./router"
import {store} from "./store"

const app = createApp(App)//传进来的是组件

app.use(store)
app.use(router)
useAntD(app)
// app.use(Button)
// // $message是自己定义的名字
// app.provide("$message",message)//使用message的方法一，对应的是inject
// app.config.globalProperties.$message = message;//使用message的方法二
app.mount('#app')
