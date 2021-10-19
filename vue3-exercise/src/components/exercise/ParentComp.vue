<script setup>
import {ref,reactive} from "vue"
const count = ref(100);
const obj = reactive({
    name:"zhang ",
    claaaname:"3,4"
})
const print = (p) => {
    console.log("父组件中的打印方法",p)
}
</script>

<template>
    <h1>父组件</h1>
    <child-comp @printHandle="print" a="1" b="2" :c="count" v-bind:d="obj"></child-comp>
</template>

