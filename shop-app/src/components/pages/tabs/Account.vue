<script setup>
import {BellOutlined,UserOutlined,RightOutlined} from "@ant-design/icons-vue"
import {useRouter} from "vue-router"
import {ref} from "vue"
import MyContent from "@/components/content/Mycontent.vue"
const router = useRouter();
const loginStatus = ref(false)
const refresh = () => {
    // 模拟网络请求
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(true)
        },500)
    })
}

const uploadImg = () => {
    /*
        判断用户是否登陆
            登陆：直接跳转到头像上传页面
          为登陆：跳转到登陆页面
    */ 
}

const logintoggle = () => {loginStatus.value = !loginStatus.value}

const menus = [
    {
        name:"个人信息",
        path:"/blankpage"
    },
    {
        name:"个人信息",
        path:"/blankpage"
    },
    {
        name:"个人信息",
        path:"/blankpage"
    },
    {
        name:"个人信息",
        path:"/blankpage"
    },
    {
        name:"退出登录",
        path:"/blankpage"
    },
]

const goto = (path) => {
    router.push({path})
}
</script>
<template>
    <my-content pull :refreshFunc = "refresh">
        <div class="top">
            <bell-outlined />
        </div>
        <!-- 上半部分 -->
        <div class="avatar">
            <!-- 未登录的状态 -->
            <template v-if="!loginStatus">
                <a-avatar :size="100" @click="uploadImg">
                    <template #icon><user-outlined /></template>
                </a-avatar>
            </template>
            <!-- 已登录状态 -->
            <template v-else>
                <a-avatar :size="100" @click="uploadImg" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"> </a-avatar>
                <div style="margin-top:12px;font-size:16px;color:rgb(0 0 0 /0.5)">哇哈哈</div>
            </template>
        </div>
        <!-- <a-button @click="logintoggle">切换</a-button> -->
    <a-list :data-source="menus" item-layout="horizontal">
        <template #renderItem="{item}">
            <a-list-item >
                <div>{{item.name}}</div>
                <a slot="actions" @click="goto(item.path)">
                    <right-outlined style="color:rgb(0 0 0 /0.5)"/>
                </a>
            </a-list-item>
        </template>
    </a-list>
    </my-content>
</template>

<style scoped>
.top{
    display: flex;
    justify-content: flex-end;
}

.avatar{
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    height: 280px;
    /* background-color: red; */
}
</style>