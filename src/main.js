import Vue from 'vue'
import BSP from './BSP.vue'
import router from './routes.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import asd from './views/asd.html'
console.log(asd);

Vue.use(ElementUI);
 
new Vue({
    router,
    render : (h) => h(BSP)
}).$mount('#app');