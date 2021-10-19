<template>
    <!-- 把组件放在了exercise-01中，所以在这引用exercise-01，才能显现组件 -->
    <!-- <exercise-01-page />
    <exercise-02-page /> -->
    <h1>公用的头部</h1>
    <!-- <h5>{{$store.state.count}}</h5> -->
    <router-view></router-view>
    <h1>公用的底部</h1>
</template>
