import { createStore } from 'vuex'

import sourceData from '@/data.json'
export default createStore({
  state: sourceData,
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
