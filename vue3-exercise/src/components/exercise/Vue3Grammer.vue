<template>
    <h1>App 组件</h1>
    <div>{{a}} <input type="text" v-model="b"> <input type="text" v-model="c.val"></div>
    <div>计算属性（b的平方）：{{square}}</div>
</template>

<script>
import {ref,reactive,computed,watch} from "vue"
export default {
  data(){
    return{
      a:0
    }
  },
  setup(){
    const b = ref("10")
    const c = reactive({
      val:100
    })
    // computed
    const square = computed(function(){
      return b.value * b.value
    })
    // watch
    // watch b
    watch(b,(currentVal,preVal) => {
      console.log("b改变了，当前值=",currentVal,"旧值=",preVal)
    })
    // watch c
    watch(() => ({...c}),(currentVal,preVal) => {
      console.log("c改变了，当前值=",currentVal,"旧值=",preVal)
    })
    return {
      b,
      c,
      square
    }
  }
}
</script>

