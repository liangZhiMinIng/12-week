<script setup>
// this.$router  =>  useRouter()
// this.$route   =>  useRoute()
// this.$store   =>  useStore()
import {createStore, useStore} from "vuex";
const store = useStore()
// 同步加   mutations => commit
const add = () => {
    // 对store文件里的index的 count进行修改
    store.commit("increment",2)
    // store.state.count = store.state.count + 1  这样写虽然控制台没有抛错，但是不能这么写
    // 因为全局状态追踪会产生问题，用Chrome插件查看会更直观
}
// 同步减
const sub = () => {
    store.commit("decrement")
}
// action => dispatch
const addAsybc = () => {
    // 隔一秒再做加法
    store.dispatch("incrementAsync")

}
const subAsync = () => {
    store.dispatch("decrementAsync")
}
</script>

<template>
    <h5>全局状态中的计步器：{{$store.state.count}}</h5>
    <!-- 全局状态中的计算属性 -->
    <h6>计算器平方：{{$store.getters.countSquare}}</h6>
    <a-button @click="add">+</a-button>
    <a-button @click="sub">-</a-button>
    <hr>
    <a-button @click="addAsybc">异步+</a-button>
    <a-button @click="subAsync">异步-</a-button>
</template>