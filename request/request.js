import {axios} from '@bundled-es-modules/axios'
import qs from 'qs'
import {Toast, Dialog} from 'vant'

const baseApi = process.env.VUE_APP_BASE_URL
let timeObj = null
// create an axios instance
const service = axios.create({
    baseURL: baseApi, // url = base api url + request url
    withCredentials: true, // send cookies when cross-domain requests
    timeout: 100000000 // request timeout
})
// request拦截器 request interceptor
service.interceptors.request.use(
    config => {
        // vue.$nprogress.start()
        // 不传递默认开启loading
        if (!config.hideloading) {
            console.log(timeObj)
            // 延迟 100ms 进行loading
            timeObj = setTimeout(() => {
                if (!timeObj) return
                Toast.loading({
                    forbidClick: true,
                    overlay: true,
                    loadingType: 'spinner',
                    message: config.loadingMsg || '加载中'
                })
            }, 500)
        }
        if (config.needToken) {
            const token = localStorage.getItem('token') || sessionStorage.getItem('token')
            config.headers['Authorization'] = `Bearer ${token}`
        }
        config.headers['Content-Type'] = config.contentType || 'application/json;charset=UTF-8'
        if (config.method === 'post') {
            config.contentType && (config.data = qs.stringify(config.data))
        }
        return config
    },
    error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)
// response拦截器
service.interceptors.response.use(
    response => {
        if (timeObj) {
            clearTimeout(timeObj)
            timeObj = null
        }
        Toast.clear()
        const res = response.data
        return Promise.resolve(res)
    },
    error => {
        Toast.clear()
        if (timeObj) {
            clearTimeout(timeObj)
            timeObj = null
        }
        console.log('err' + error) // for debug
        if (error.response && error.response.status === 401) {
            Dialog.alert({
                title: '提示',
                message: '当前登录已过期'
            })
        }
        return Promise.reject(error)
    }
)
export default service
