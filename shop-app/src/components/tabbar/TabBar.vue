<template>
    <div>
        <!-- 盛放底部导航栏的整体容器 -->
        <div class="tab-bar tab-bar-extend">
            <!-- 留出卡槽的位置 是为图标进行占位-->
            <slot></slot>
        </div>
    </div>
</template>


<style scoped>
.tab-bar{
    width: 100%;
    height: 58px;
    background-color: #fff;
    box-shadow:0px 0px 8px rgb(0 0 0 /0.5) ;
    position:fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
}
.tab-bar-extend{
    display: flex;
    align-items: center;
    /* justify-content: space-around; */
    /* space-around水平方向均匀分布 */
}
</style>