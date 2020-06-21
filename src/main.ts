import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'vant/lib/index.css'
import {Button,Tabbar,TabbarItem,Tag,Field,Icon,NavBar } from 'vant';
import tagListModel from '@/models/tagListModel';
Vue.use(Tabbar);
Vue.use(Button);
Vue.use(TabbarItem);
Vue.use(Tag)
Vue.use(Field)
Vue.use(Icon)
Vue.use(NavBar)

window.tagList = tagListModel.fetch();
window.findTag = (id: string) =>{
  return window.tagList.filter(t => t.id === id)[0]
}
window.createTag = (name: string)=>{
  const message = tagListModel.create(name)
  tagListModel.create(name)
  if(message === 'duplicated'){
    window.alert('标签名重复了')
  }else if(message === 'success'){
    window.alert('创建成功')
  }
}
window.removeTag = (id: string)=>{
  return tagListModel.remove(id);
}
window.updateTag = (id: string, name: string)=>{
  return  tagListModel.update(id,name)
}
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
