<script setup>
// 父组件
import TabBar from "@/components/tabbar/TabBar.vue"
// 子组件
import TabBarItem from "@/components/tabbar/TabBarItem.vue"
</script>

<template>
    <div>
        <!-- 用<router-view>进行占位跳转-->
        <router-view></router-view>
        <!-- 父组件 -->
        <tab-bar>
            <!-- 子组件 -->
            <tab-bar-item name="首页" path="/main/home">
                <!-- v-slot是对具名插槽进行绑定，icon是具名插槽的名称 -->
                <template v-slot:icon>
                    <div class="iconfont icon-shouye" style="font-size:20px"></div>
                </template>
            </tab-bar-item>
            <!-- 子组件 -->
            <tab-bar-item name="商品" path="/main/category">
                <template v-slot:icon>
                    <div class="iconfont icon-shangpinfenlei" style="font-size:20px"></div>
                </template>
            </tab-bar-item>
            <!-- 子组件 -->
            <tab-bar-item name="购物车" path="/main/cart" >
                <template v-slot:icon>
                    <div class="iconfont icon-gouwuche1" style="font-size:20px"></div>
                </template>
            </tab-bar-item>
            <!-- 子组件 -->
            <tab-bar-item name="我的" path="/main/account">
                <template v-slot:icon>
                    <div class="iconfont icon-hanhan-01-01" style="font-size:20px;font-weight:500"></div>
                </template>
            </tab-bar-item>
        </tab-bar>
    </div>
</template>