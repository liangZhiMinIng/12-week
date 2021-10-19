import  Button  from 'ant-design-vue/lib/button';
import  message  from 'ant-design-vue/lib/message';
import "ant-design-vue/dist/antd.css";//引入样式 
import {App} from "vue"

export const useAntD = (app:App<Element>) => {
    app.use(Button)
    // $message是自己定义的名字
    app.provide("$message",message)//使用message的方法一，对应的是inject
    app.config.globalProperties.$message = message;//使用message的方法二
}
