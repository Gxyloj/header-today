import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/home/Home";
import Video from "../views/Video";
import Theater from "../views/Theater";
import User from "../views/User";

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/video',
    component: Video
  },
  {
    path:'/theater',
    component: Theater
  },
  {
    path:'/user',
    component:User
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
