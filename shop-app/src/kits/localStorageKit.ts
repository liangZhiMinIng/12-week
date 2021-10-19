export const getArray = function(key:string):string[]{
    let val = localStorage.getItem(key);
    return val === null ? [] : val.split(",")
}

export const setArray = (key:string,val:any) => {
    const arr = getArray(key);

    // 校验原数组中是否含有本次查询的val，如果有会把所在位置的索引返回来
    const index = arr.indexOf(val)
    
    if(index >= 0){
        // 如果所查询的内容已存在原数组中，用splice进行删除
        arr.splice(index,1)
    }
    // 在数组最前面插入新值
    arr.unshift(val)
    localStorage.setItem(key,arr.toString())
}

export const clearItem = (key:string) => {
    localStorage.removeItem(key)
}