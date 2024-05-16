<template>
  <h1 class="push-top">Editing thread in {{thread.title}}</h1>
  <thread-editor :title="thread.title" :text="firstPostInThread" @save="save" @cancel="cancel"/>
</template>
<script>
import ThreadEditor from '@/components/ThreadEditor.vue'
export default {
  components: {
    ThreadEditor
  },
  props: {
    threadId: {
      type: String,
      required: true
    }
  },
  computed: {
    thread() {
      return this.$store.state.threads.find(thread => thread.id === this.threadId)
    },
    firstPostInThread() {
      return this.$store.state.posts.find(post => post.id === this.thread.posts[0]).text
    }
  },
  methods: {
    async save({ title, text }) {
      await this.$store.dispatch('updateThread', { title, text, id: this.threadId })
      this.$router.push({ name: 'ThreadShow', params: { id: this.threadId } })
    },
    cancel() {
      this.$router.push({ name: 'ThreadShow', params: { id: this.threadId } })
    }
  }
}
</script>
