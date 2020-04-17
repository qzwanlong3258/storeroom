import request from '@/utils/request'
import { GET_UER_LOGIN, GET_UER_LOGIN_XCODE } from '@/assets/constants/api'
import axios from 'axios' // 引入axios
//获取首页数据
export function getXcodePic(e) {
    return `${axios.defaults.baseURL}${GET_UER_LOGIN_XCODE}?refId=${e}`

}

//获取图形数据接口
export function Login(data) {
    return request({
        method: 'POST',
        url: GET_UER_LOGIN,
        isUpload:true,
        contentType:'formdata',
        data
    })
}
