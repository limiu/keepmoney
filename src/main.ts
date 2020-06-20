import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'vant/lib/index.css'
import {Button,Tabbar,TabbarItem,Tag,Field,Icon} from 'vant';
Vue.use(Tabbar);
Vue.use(Button);
Vue.use(TabbarItem);
Vue.use(Tag)
Vue.use(Field)
Vue.use(Icon)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
