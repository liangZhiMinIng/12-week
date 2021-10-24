// webpack(打包工具) => vue-cli (脚手架)
// rollup(打包工具)  => vite (脚手架)

// 按需引用 在vite的前提环境下使用
import Button from "ant-design-vue/lib/button"
import input from "ant-design-vue/lib/input"
import List from "ant-design-vue/lib/list"
import Carousel from "ant-design-vue/lib/carousel"
import Avatar from "ant-design-vue/lib/avatar"
import spin from "ant-design-vue/lib/spin"
import message from "ant-design-vue/lib/message"
import Skeleton from 'ant-design-vue/lib/skeleton'
import Form from 'ant-design-vue/lib/form'
import Upload from 'ant-design-vue/lib/upload';
import Popconfirm from 'ant-design-vue/lib/popconfirm';
import "ant-design-vue/dist/antd.css";

export const useAntd = (app) => {
    app.use(Button)
    app.use(input)
    app.use(List)
    app.use(Carousel)
    app.use(Avatar)
    app.use(spin)
    app.use(Skeleton)
    app.use(Form)
    app.use(Upload)
    app.use(Popconfirm)
    app.provide("$message",message)
    message.config({
        top:"100px"
    })
}