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

export default axios
