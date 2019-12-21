// 封装一个axios
import axios from 'axios'
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
}, function () {

})
export default axios
