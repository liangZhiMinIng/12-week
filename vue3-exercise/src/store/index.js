import {createStore} from "vuex";
import {getters} from "./getters"
import {mutations} from "./mutations";
import {actions} from "./actions"
// module命名空间
import count02 from "./modules/count02";
import count03 from "./modules/count03";
export const store = createStore({
    modules:{
        "count02":count02,
        count03
    },
    state:function(){
        return {
            count:10
        }
    },
    // mutation => commit 同步
    mutations,
    // action是专门管理网络的
    actions,
    // 全局状态中的计算属性
    getters
})