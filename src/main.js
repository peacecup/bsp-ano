import Vue from 'vue'
import BSP from './BSP.vue'
import router from './routes.js'
import store from './store/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'


Vue.use(ElementUI);
 
new Vue({
    router,
    store,
    render : (h) => h(BSP)
}).$mount('#app');