// 封装一个axios
import axios from 'axios'
import router from '../router'
import { Message } from 'element-ui'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
//
axios.interceptors.request.use((config) => {
  // 执行请求ok
  // config
  let token = window.localStorage.getItem('user-token')
  config.headers.Authorization = `Bearer ${token}`
  return config// 表示会用改请求
}, function () {
})
// 响应拦截
axios.interceptors.response.use(function (response) {
  // 对响应的数据处理成功时进入
  return response.data ? response.data : {}
}, function (error) {
  // 对响应的数据处理错误的时进入
  let status = error.response.status
  let message = '未知错误'
  switch (status) {
    case 400:
      message = '请求参数错误'
      break
    case 403:
      message = '重新登录'
      break
    case 507:
      message = 'token过期'
      // 过期要清空缓存
      window.localStorage.clear()
      router.push('/login')
      break
    case 404:
      message = '手机号不正确'
      break
    default:
      break
  }
  Message({ message })
  return new Promise(function () {})
})
export default axios
