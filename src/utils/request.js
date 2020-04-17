import axios from 'axios' // 引入axios
// import store from '../store/index' // 引入Vuex
import router from '../router' // 引入vue-router
import { Message, Loading } from 'element-ui' //局部引入UI框架组件
import {getCookie} from "./cookie"
import qs from 'qs'

if (process.env.NODE_ENV === 'development') {
    axios.defaults.baseURL = '/api' // 开发环境
} else if (process.env.NODE_ENV === 'debug') {
    axios.defaults.baseURL = '' // 调试环境
} else if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = 'http://hzsmartit.eicp.net:555' // 生产环境
}
axios.defaults.timeout = 10000;

// 请求拦截器
axios.interceptors.request.use(
    config => {
        if (getCookie('authData')) {
            config.headers[authKey] = getCookie('authData').token_type + " " + getCookie('authData').access_token; //查看是否存在token
            return config;
        } else if (config.isUpload) {
            config.headers = { 'Content-Type': 'application/x-www-form-urlencoded'} // 根据参数是否启用form-data方式
            return config;
        } else {
            config.headers = { 'Content-Type': 'application/json' }
            return config;
        }
    },
    error => {
        return Promise.error(error)
    })

// 响应拦截器
axios.interceptors.response.use(
    // 服务码是200的情况
    response => {
        if (response.status === 200) {
            switch (response.data.code) {
                // 未登录
                case 3:
                    Message({
                        message: '未登录',
                        type: 'error',
                        offset:380,
                        duration:1000
                    });
                    // 清除登录状态，返回首页
                    localStorage.removeItem('Authorization')
                    localStorage.removeItem('info')
                    // store.commit("changeNull")
                    if (router.app._route.name != 'home') {
                        setTimeout(() => {
                            router.push({
                                path: '/',
                            })
                        }, 1000)
                    }
                    break;
                // 课程已添加
                case 100:
                    Message({
                        message: '课程已添加',
                        type: 'error',
                        offset:380,
                        duration:1000
                    });
                    break;
                // token过期
                case 401:
                    Message({
                        message: '登录过期，请重新登录',
                        type: 'error',
                        offset:380,
                        duration:1000
                    });
                    // 清除登录状态，返回首页
                    localStorage.removeItem('Authorization')
                    localStorage.removeItem('info')
                    location.reload() // 刷新页面, 清空整站临时存储数据
                    // store.commit("changeNull")
                    // router.push({ name: 'login' }, () => {
                    //     location.reload() // 刷新页面, 清空整站临时存储数据
                    // })
                    if (router.app._route.name != 'login') {
                        setTimeout(() => {
                            router.push({
                                path: '/login',
                            })
                        }, 1000)
                    }
                    break;
            }
            return Promise.resolve(response);
        } else {
            return Promise.reject(response)
        }
    },
    // 服务器状态码不是200的情况
    error => {
        if (error.response.status) {
            switch (error.response.status) {
                // 404请求不存在
                case 404:
                    Message({
                        message: '网络请求不存在',
                        type: 'error',
                        offset:380,
                        duration:1000
                    });
                    break;
                // 其他错误，直接抛出错误提示
                default:
                    Message({
                        message: error.response.data.message,
                        type: 'error',
                        offset:380,
                        duration:1000
                    });
            }
            return Promise.reject(error.response)
        } else {
            // let authData = http.getAuthData()
            // if (authData.refresh_token) {
            //
            // }
        }
    }
)

export default function request({
                                    method = "GET",
                                    url = "",
                                    params = {},
                                    data = {},
                                    isUpload = false,
                                    openDefultdata = true,
                                    contentType ="json"
                                } = {}) {
    let defaults = {
        't': new Date().getTime()
    }
    data = openDefultdata ? merge(defaults, data) : data
    // console.log(contentType)
    // console.log(contentType === 'json' ? JSON.stringify(data) : qs.stringify(data))
    return contentType === 'json' ? JSON.stringify(data) : qs.stringify(data)
    let loadingInstance = Loading.service({
        fullscreen: true,
        text: "请稍后",
        background: "rgba(0,0,0,.7)",
        spinner: "el-icon-loading"
    });
    return new Promise((resolve, reject) => {
        axios({
            method,
            url,
            params,
            data,
            isUpload
        }).then(res => {
            loadingInstance.close()
            if (res.data.code === 0) {
                resolve(res.data)
            } else {
                Message.error(`请求失败：${res.data.message}`)
            }
        }).catch(err => {
            reject(err)
        })
    })
}
