import { createWebHistory, createRouter } from 'vue-router'
import PageThreadShow from '@/pages/PageThreadShow.vue'
import PageHome from '@/pages/PageHome.vue'
import PageNotFound from '@/pages/PageNotFound.vue'
import sourceData from '@/data.json'
import Forum from '@/pages/Forum.vue'
import PageCategory from '@/pages/PageCategory.vue'
import PageProfile from '@/pages/PageProfile.vue'

const routes = [
  {
    path: '/',
    component: PageHome,
    name: 'Home'
  },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: PageThreadShow,
    props: true,
    beforeEnter(to, from, next) {
      // check if thread exists
      const threadExist = sourceData.threads.find(t => t.id === to.params.id)
      // if exists continute
      if (threadExist) {
        next()
      } else {
        // if doesn't exist redirect to home page
        // but preserve the exsiting path, query and hash
        next({
          name: 'NotFound',
          params: { pathMatch: to.path.substring(1).split('/') },
          query: to.query,
          hash: to.hash
        })
      }
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: PageNotFound
  },
  {
    path: '/forum/:id',
    name: 'Forum',
    component: Forum,
    props: true
  },
  {
    path: '/category/:id',
    name: 'Category',
    component: PageCategory,
    props: true
  },
  {
    path: '/profile/me',
    name: 'Profile',
    component: PageProfile
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
