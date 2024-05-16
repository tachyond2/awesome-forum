import { createWebHistory, createRouter } from 'vue-router'
import PageThreadShow from '@/pages/PageThreadShow.vue'
import PageHome from '@/pages/PageHome.vue'
import PageNotFound from '@/pages/PageNotFound.vue'
import sourceData from '@/data.json'
import Forum from '@/pages/Forum.vue'
import PageCategory from '@/pages/PageCategory.vue'
import PageProfile from '@/pages/PageProfile.vue'
import ThreadCreate from '@/pages/ThreadCreate.vue'
import ThreadEdit from '@/pages/ThreadEdit.vue'

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
    path: '/forum/:forumId/thread/create',
    name: 'ThreadCreate',
    component: ThreadCreate,
    props: true
  },
  {
    path: '/thread/:threadId/edit',
    name: 'ThreadEdit',
    component: ThreadEdit,
    props: true
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
    path: '/profile/me',
    name: 'Profile',
    component: PageProfile,
    meta: { toTop: true, smoothScroll: 'true' }
  },
  {
    path: '/category/:id',
    name: 'Category',
    component: PageCategory,
    props: true
  },
  {
    path: '/profile/me/edit',
    name: 'ProfileEdit',
    component: PageProfile,
    props: { edit: true }
  }
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    const scoll = {}
    if (to.meta.toTop) scoll.top = 0
    if (to.meta.smoothScroll) scoll.behavior = 'smooth'
    return scoll
  }
})
