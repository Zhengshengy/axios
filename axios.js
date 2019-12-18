import axios from 'axios';
import router from '@/router'
import store from '@/store/index'
import Vue from 'vue'

let options = {
    baseURL: process.env.VUE_APP_URL
};
const axiosInstance = axios.create(options)


// loading框设置局部刷新，且所有请求完成后关闭loading框
let loading
let needLoadingRequestCount = 0 // 声明一个对象用于存储请求个数
function startLoading () {
    loading = Vue.prototype.$loading({
        lock: true,
        // text: '努力加载中...',
        background: 'rgba(0,0,0,0.5)',
        spinner: 'my-el-custom-spinner',
        target: document.querySelector('.loading-area') // 设置加载动画区域
    })
}
function endLoading () {
    loading.close()
}
function showFullScreenLoading () {
    if (needLoadingRequestCount === 0) {
        startLoading()
    }
    needLoadingRequestCount++
}
function hideFullScreenLoading () {
    if (needLoadingRequestCount <= 0) return
    needLoadingRequestCount--
    if (needLoadingRequestCount === 0) {
        endLoading()
    }
}
axiosInstance.interceptors.request.use(
    config => {
        if (config.headers.isLoading !== false) { // 如果配置了isLoading: false，则不显示loading
            showFullScreenLoading()
        }
        return config
    },
    error => {
        hideFullScreenLoading()
        return Promise.reject(error)
    })

axiosInstance.interceptors.response.use(
    response => {
        hideFullScreenLoading()
        // 对响应数据做些事
        return Promise.resolve(response)
    },
    // 默认除了2XX之外的都是错误的，就会走这里
    error => {
        hideFullScreenLoading()
        if (error.response.status === 500) {
            // MessageBox.alert('接口报错了 找权鑫', '出错了', {
            //     confirmButtonText: '确定',
            //     type: 'warning',
            //     callback: action => {
            //         //location.reload() // 为了重新实例化vue-router对象 避免bug
            //         // router.replace({ // 跳转到登录页面
            //         //     path: '/login'
            //         //     // query: { redirect: router.currentRoute.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
            //         // })
            //     }
            // })
            return Promise.reject(error.response)
        }else if (error.response.status === 401){
            store.commit('user/del_token')
            router.replace({
                path: '/login',
                query: {redirect: router.currentRoute.fullPath}//登录成功后跳入浏览的当前页面
            })
        }
    })


export default axiosInstance;