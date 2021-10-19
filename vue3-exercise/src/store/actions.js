export const actions = {
    incrementAsync:(context) => {
        new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve()
            },2000)
        }).then(() => {
            context.commit("increment",3)
        })
    },
    decrementAsync:({commit}) => {
        new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve()
            },2000)
        }).then(() => {
            commit("decrement")
        })
    }
}