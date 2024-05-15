import { createStore } from 'vuex'

import sourceData from '@/data.json'
export default createStore({
  state: {
    ...sourceData,
    authId: 'VXjpr2WHa8Ux4Bnggym8QFLdv5C3'
  },
  getters: {
    // map authId to auth usr prepare everywhere we need to access auth user
    authUser: state => state.users.find(u => u.id === state.authId)
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
