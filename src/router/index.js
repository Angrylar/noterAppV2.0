import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello.vue'
import index from '@/components/index/index.vue'
import noteList from '@/components/noteList/noteList.vue'
import noteDetail from '@/components/noteDetail/noteDetail.vue'
import edit from '@/components/edit/edit.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: 'index'
  },{
    path: '/hello',
    name: 'Hello',
    component: Hello
  }, {
    path: '/index',
    name: 'index',
    component: index
  }, {
    path: '/noteList',
    name: 'noteList',
    component: noteList
  }, {
    path: '/noteDetail',
    name: 'noteDetail',
    component: noteDetail
  }, {
    path: '/edit',
    name: 'edit',
    component: edit
  }]
})
