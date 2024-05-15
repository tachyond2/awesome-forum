import { createStore } from 'vuex'

import sourceData from '@/data.json'
export default createStore({
  state: {
    ...sourceData,
    authId: '7uVPJS9GHoftN58Z2MXCYDqmNAh2'
  },
  getters: {
    // map authId to auth usr prepare everywhere we need to access auth user
    authUser: state => {
      const user = state.users.find(u => u.id === state.authId)
      return {
        ...user,
        get posts() {
          return state.posts.filter(p => p.userId === user.id)
        },
        get postCount() {
          return this.posts.length
        },
        get threads() {
          return state.threads.filter(t => t.userId === user.id)
        }
      }
    }
  },
  actions: {
    createPost(context, post) {
      context.commit('setPost', { post })
      context.commit('appendPostToThread', { threadId: post.threadId, postId: post.id })
    }
  },
  mutations: {
    setPost(state, { post }) {
      state.posts.push(post)
    },
    appendPostToThread(state, { threadId, postId }) {
      const thread = state.threads.find(t => t.id === threadId)
      thread.posts.push(postId)
    }
  }
})
