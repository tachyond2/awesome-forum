import { createStore } from 'vuex'

import sourceData from '@/data.json'

import { findById, upsert } from '@/helpers'
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
      commit('appendPostToThread', { parentId: post.threadId, childId: post.id })
    },
    async createThread({ commit, state, dispatch }, { title, text, forumId }) {
      // conssturct the thread object
      const publishedAt = Math.floor(Date.now() / 1000)
      const threadId = crypto.randomUUID()
      const thread = {
        threadId,
        forumId,
        publishedAt,
        title,
        userId: state.authId
      }
      commit('setThread', thread)
      dispatch('createPost', { threadId: threadId, text })
      commit('appendThreadToForum', { parentId: forumId, childId: threadId })
      commit('appendThreadToUser', { userId: state.authId, childId: threadId })

      return thread
    },
    async updateThread({ commit, state }, { title, text, id }) {
      // find the old thread  and post in state
      const thread = findById(state.threads, id)
      const post = findById(state.posts, thread.posts[0])
      // consturct the new thread and post
      const newThread = { ...thread, title }
      const newPost = { ...post, text }
      // commit the setThread and setPost
      console.log(newThread, newPost)
      commit('setPost', newPost)
      commit('setThread', newThread)
    },
    updateUser({ commit, state }, user) {
      commit('setUser', { user, userId: user.id })
    }
  },
  mutations: {
    setPost(state, post) {
      console.log(post)
      upsert(state.posts, post)
    },
    setUser(state, { user }) {
      upsert(state.users, user)
    },
    setThread(state, thread) {
      const threadIndex = state.threads.findIndex(t => t.id === thread.id)

      // if post already exist
      if (threadIndex !== -1) {
        state.threads[threadIndex] = thread
      } else {
        state.threads.push(thread)
      }
    },
    appendThreadToForum: appendChildToParent({ parent: 'forums', child: 'threads' }),
    // appendPostToThread(state, { threadId, postId }) {
    appendThreadToUser: appendChildToParent({ parent: 'threads', child: 'users' }),
    //   console.log(threadId, postId)
    //   // const thread = findById(state.threads, threadId)
    //   const thread = state.threads.find(r => r.id === threadId)
    //   thread.posts = thread.posts || []
    //   thread.posts.push(postId)
    // }
    appendPostToThread: appendChildToParent('posts', 'threads')
  }
})

function appendChildToParent({ child, parent }) {
  return (state, { parentId, childId }) => {
    // const thread = findById(state.threads, threadId)
    const resource = findById(state[parent], parentId)
    resource[child] = resource[child] || []
    resource[child].push(childId)
  }
}
