<script setup>
import {ref,getCurrentInstance} from "vue";
const count = ref(0)
// 第二种使用message的方法
const app = getCurrentInstance()//app 就是main.js中的app
const message = app.appContext.config.globalProperties.$message;

const increment = () => {
    if(count.value < 99){
        count.value += 1
    }else{
        message.warn("最大是99")
    }
}
const decrement = () => {
    if(count.value > 0){
        count.value -= 1
    }else{
        message.warn("已经减到0了，不能再减了")
    }
}
</script>

<template>
    <div>计步器02：{{count}}</div>
    <a-button @click = "increment">+</a-button>
    <a-button @click = "decrement">-</a-button>
</template>

