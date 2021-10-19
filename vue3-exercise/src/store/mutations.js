export const mutations = {
    increment:function(state,p){
        state.count += p
        // state.count++
    },
    // 语法糖形式
    decrement(state){
        state.count--
    }
}