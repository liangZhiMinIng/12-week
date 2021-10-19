<script setup>
// 做跳转的准备
import { computed } from "vue";
import {useRouter,useRoute} from "vue-router";
// 路由跳转的时候用router，路由传值的时候用route
const router = useRouter()
const route = useRoute()
// 父组件对子组件传参数，通过defineProps
const props = defineProps({
    name:{
        type:String,
        default:"标题"
    },
    icont:{
        type:String,
        default:"iconfont icon-shangpinfenlei"
    },
    path:String
})

const doActive = () => {
    if(route.path !== props.path){
        router.replace({
            path:props.path
        })
    }
}

// 计算属性
const activeStyle = computed(() => {
    /**
     * 1.拿到当前访问的这个路由地址
     * 2.拿到本组件要前往的目的地址
     * 3.判断这两个地址是否一样，如果一样，那说明本标签是被激活的
     */
    // return {
    //     color:"#B620E0"
    // }
    
    // router用于跳转，获取参数用route
    return route.path.indexOf(props.path) > -1 ? {color:"#B620E0"} : null
})

</script>

<template>
    <!-- 进行跳转 -->
        <div @click="doActive" class="tab-bar-item" v-bind:style="activeStyle">
            <!-- 设置插槽可放图片，字体等东西 -->
            <slot name="icon">
                <div :class="icont" style="font-size:20px"></div>
            </slot>
            <div style="font-size:13px;">{{name}}</div>
        </div>
</template>

<style scoped>
.tab-bar-item{
    flex:1;
    display: flex;
    /* 变成纵向 */
    flex-direction: column;
    align-items: center;
}

</style>