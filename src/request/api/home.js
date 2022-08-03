import service from "..";
export function getBanner(){
    return service({
        method:"GET",
        url:"/banner?type=2",
    })
}
export function getMusicList(){
    return service({
        method:"GET",
        url:"/personalized?limit=10",
    })
}
export function getSearchMusic(data){
    return service({
        method:"GET",
        url:`/search?keywords=${data}`
    })
}
export function getPhoneLogin(data){
    return service({
        method:"GET",
        url:`/login/cellphone?phone=${data.phone}&password=${data.password}`
    })
}
//获取用户详情
export function getLoginUser(data){
    return service({
        method:"GET",
        url:`/user/detail?uid=${data}`
    })
}