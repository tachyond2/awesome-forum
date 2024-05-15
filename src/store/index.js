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
        get postsCount() {
          return this.posts.length
        },
        get threads() {
          return state.threads.filter(t => t.userId === user.id)
        },
        get threadsCount() {
          return this.threads.length
        }
      }
    }
  },
  actions: {
    createPost(context, post) {
      context.commit('setPost', { post })
      context.commit('appendPostToThread', { threadId: post.threadId, postId: post.id })
    },
    updateUser({ commit, state }, user) {
      commit('setUser', { user, userId: user.id })
    }
  },
  mutations: {
    setPost(state, { post }) {
      state.posts.push(post)
    },
    setUser(state, { user, userId }) {
      const userIndex = state.users.findIndex(u => u.id === userId)
      state.users[userIndex] = user
    },
    appendPostToThread(state, { threadId, postId }) {
      const thread = state.threads.find(t => t.id === threadId)
      thread.posts.push(postId)
    }
  }
})
