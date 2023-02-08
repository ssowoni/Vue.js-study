import { createWebHistory, createRouter } from "vue-router"; //경로가 아닌 라이브러리 이름이 들어가면 라이브러리에서 가지고 오겠다.
import List from './components/List.vue'
import Home from './components/Home.vue'
import Detail from './components/Detail.vue'



const routes = [
  {
    path : "/detail/:id",
    component:Detail
  } , 
  {
    path: "/list",
    component: List,
  },
  {
    path: "/",
    component: Home,
  },


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 