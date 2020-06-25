import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'vant/lib/index.css'
import {Button,Tabbar,TabbarItem,Tag,Field,Icon,NavBar,Tab,Tabs} from 'vant';
Vue.use(Tabs)
Vue.use(Tab)
Vue.use(Tabbar);
Vue.use(Button);
Vue.use(TabbarItem);
Vue.use(Tag)
Vue.use(Field)
Vue.use(Icon)
Vue.use(NavBar)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
