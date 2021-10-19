<script setup>
import {ref,watch} from "vue";
import {useRoute} from "vue-router";
import {useStore} from "vuex"
const transitionName = ref("");
const route = useRoute();
const store = useStore()

// console.log(route)
// watch(_,_) 侦听是简单对象 还是 引用对象？
// watch route
watch(() => route.path ,(to,from) => {
  console.log(to,from)
  if(to.indexOf("/main/") >= 0 && from.indexOf("/main/") >=0 ){
    transitionName.value = "";
  }else{
    // transitionName.value = "fold-left";
    // transitionName.value = "fold-right";
    
    if(store.state.pageDirection.direction === "forward"){
        transitionName.value = "fold-left";
    }else{
        transitionName.value = "fold-right"
    }
  } 
})
</script>
<template>
  <router-view v-slot="{ Component,route }">
    <transition :name="transitionName">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
/* 把iconfont导入进来 */
@import "@/assets/iconfont/iconfont.css";

.fold-left-enter-active {
  position:fixed;
  height: 100vh;
  width: 100vw;
  animation-name: fold-left-in;
  animation-duration: 0.4s;
}

.fold-left-leave-active {
  position: fixed;
  height: 100vh;
  width: 100vw;
  animation-name: fold-left-out;
  animation-duration: 0.4s;
}

@keyframes fold-left-in {
  0% {
    -webkit-transform: translate3d(100%,0,0);
    transform: translate3d(100%,0,0);
  }
  100% {
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
  }
}
@keyframes fold-left-out {
  0% {
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
  }
  100% {
    -webkit-transform: translate3d(-100%,0,0);
    transform: translate3d(-100%,0,0);
  }
}
.fold-right-enter-active{
    position: fixed;
    height: 100vh;
    width: 100vw;
    animation-name: fold-right-in;
    animation-duration: .3s;
}
.fold-right-leave-active{
    position: fixed;
    height: 100vh;
    width: 100vw;
    animation: fold-right-out .3s;
}
@keyframes fold-right-in {
  0% {
    -webkit-transform: translate3d(-100%,0,0);
    transform: translate3d(-100%,0,0);
  }
  100%{
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
  }
}

@keyframes fold-right-out {
  0% {
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
  }
  100%{
    -webkit-transform: translate3d(100%,0,0);
    transform: translate3d(100%,0,0);
  }
}

::-webkit-scrollbar {
    display:none;
}
</style>