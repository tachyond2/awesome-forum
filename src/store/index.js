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
    createPost({ commit, state }, post) {
      post.userId = state.authId
      post.id = crypto.randomUUID()
      post.publishedAt = Math.floor(Date.now() / 1000)
      commit('setPost', { post })
      commit('appendPostToThread', { threadId: post.threadId, postId: post.id })
    },
    async createThread({ commit, state, dispatch }, { title, text, forumId }) {
      // conssturct the thread object
      const publishedAt = Math.floor(Date.now() / 1000)
      const id = crypto.randomUUID()
      const thread = {
        id,
        forumId,
        publishedAt,
        title,
        userId: state.authId
      }
      commit('addThread', thread)
      dispatch('createPost', { threadId: id, text })
      commit('appendThreadToForum', { forumId, threadId: id })
      commit('appendThreadToUser', { userId: state.authId, threadId: id })

      return thread
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
    addThread(state, thread) {
      state.threads.push(thread)
    },
    appendThreadToForum(state, { forumId, threadId }) {
      const forum = state.forums.find(f => f.id === forumId)
      forum.threads = forum.threads || [] // thread might be the first thread in the forum
      forum.threads.push(threadId)
    },
    appendThreadToUser(state, { userId, threadId }) {
      const user = state.users.find(u => u.id === userId)
      user.threads = user.threads || [] // thread might be the frist thread use has been written
      user.threads.push(threadId)
    },
    appendPostToThread(state, { threadId, postId }) {
      const thread = state.threads.find(t => t.id === threadId)
      thread.posts = thread.posts || []
      thread.posts.push(postId)
    }
  }
})
