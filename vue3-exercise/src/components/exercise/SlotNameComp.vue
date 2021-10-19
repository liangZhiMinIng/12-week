<template>
    <h2>具名插槽/命名插槽</h2>
    <div class="root">
        <!-- 直接用这个就行 <slot></slot> -->
        <slot name="left"></slot>
        <slot name="right"></slot>
    </div>
</template>
<style scoped>
.root{
    display: flex;
    justify-content: space-between;
}
</style>