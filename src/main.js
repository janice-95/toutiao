import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui' // 引入UI
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
import './styles/index.less' // 引入我的样式初始化
import component from './components'
import './permission'
import axios from './utils/request'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(component)

Vue.prototype.$axios = axios
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
// 先导出
export default router
