import Vue from 'vue'
import Router from 'vue-router'
import ShowBlogs from '../components/ShowBlogs'
import AddBlog from '../components/AddBlog'
import SingleBlog from '../components/SingleBlog'
import EditBlog from '../components/EditBlog'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'showBlogs',
      component: ShowBlogs
    },
    {
      path: '/add',
      name: 'addBlog',
      component: AddBlog
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: SingleBlog
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: EditBlog
    }
  ]
})
