import axios from 'axios';
import { MessageBox } from 'element-ui'

import Vue from 'vue'

let options = {
    baseURL: '/'
};
if (process.server) {
    options.baseURL = `http://a1.jancai029.com/index.php/`;
}
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
        if (config.isLoading !== false) { // 如果配置了isLoading: false，则不显示loading
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

            return Promise.reject(error.response)
        }
    })


export default axiosInstance;