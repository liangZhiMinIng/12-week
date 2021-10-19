const state = () => {
    /**
     * forward   跳转到下一个页面，从一级页面向二级页面跳
     * backward  返回上一个页面
     * 
     */
    return {
        // 定义方向的
        direction:"" // ""  |  forward   |   backward
    }
};

const mutations = {
    // 设置方向
    setDirection(state,newVal){
        state.direction = newVal
    }
}



export default {
    namespaced:true,//需设置为true
    state,
    mutations
}