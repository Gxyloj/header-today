import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Button,Search,Col,Row,Tab,Tabs} from "vant";
import '@/common/rem'
import '@/assets/css/base.css'
createApp(App)
  .use(store)
  .use(router)
  .use(Button)
  .use(Search)
  .use(Col)
  .use(Row)
  .use(Tab)
  .use(Tabs)
  .mount('#app')
