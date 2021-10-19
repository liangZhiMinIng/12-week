<!--topBar是个子组件-->
<script setup>
import { SearchOutlined,EditOutlined} from '@ant-design/icons-vue';
import {ref,watch} from "vue"
const props = defineProps({
    edit:Boolean ,//这个变量是个状态位，区别输入框的显示位置
    searchInput:String  //输入框需要显示的内容
})
const emit = defineEmits(["focusHandle","searchContentChangeHandle"])
const searchContent = ref(props.searchInput ? props.searchInput : "")
const focusFunc = () => {
    emit("focusHandle")
} 
let timeoutId = null
watch(searchContent,(currentVal,prevVal)=> { 
    clearTimeout(timeoutId)  //清空删除上一次计时器
    // 创建计时器
    timeoutId = setTimeout(() => emit("searchContentChangeHandle",currentVal),500)
    
})


// const searchContent = ref()
</script>
<template>
    <div>
        <!-- 定义的组件 -->
        <div class="top-bar">
            <!-- 在组件中定义插槽 -->
            <div class="left">
                <slot name="left"></slot>
            </div>
            <div class="middle">
                <slot name="middle">
                    <a-input v-if="edit" size="large" v-model:value="searchContent">
                        <template #prefix>
                            <!-- <user-outlined type="user" /> -->
                            <!-- <SearchOutlined style="color:rgb(0 0 0 / 0.25)"/> -->
                            <edit-outlined style="color:rgb(0 0 0 / 0.25)" />
                        </template>
                    </a-input>
                    <!-- <input type="text"> -->
                    <a-input v-else size="large"  @focus="focusFunc">
                        <template #prefix>
                            <!-- <user-outlined type="user" /> -->
                            <!-- <SearchOutlined style="color:rgb(0 0 0 / 0.25)"/> -->
                            <search-outlined style="color:rgb(0 0 0 / 0.25)"></search-outlined>
                        </template>
                    </a-input> 
                </slot>  
            </div>
            <div class="right">
                <slot name="right"></slot>
            </div>
        </div>
    </div>
</template>

<style >
.top-bar{
    width: 100%;
    height: 60px;
    box-shadow: 0px 1px 2px rgba(50, 50, 50, 0.2);
    /* box-shadow: 0px 1px 2px rgb(50 50 50 / 0.2); */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 18px;
}
.middle{
    width: 80%;
}
.ant-input-affix-wrapper{
    background-color: rgba(172, 172, 172, 0.1) !important;
    border: none !important;
    border-radius: 7px !important;
}
.ant-input-affix-wrapper > input.ant-input{
    background-color: unset;
}

</style>