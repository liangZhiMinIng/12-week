const state = () => {
    return {
        count:3
    }
}
const mutations = {
    add(state){
        state.count += 2
    },
    sub(state){
        state.count -= 2
    }   
}
export default{
    state,
    mutations,
    namespaced:true
}