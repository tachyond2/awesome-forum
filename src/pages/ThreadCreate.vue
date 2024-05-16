<template>
  <h1 class="push-top">create new thread in {{forum.name}}</h1>

  <thread-editor @save="save" @cancel="cancel"/>
</template>
<script>
import ThreadEditor from '@/components/ThreadEditor.vue'
export default {
  components: {
    ThreadEditor
  },
  props: {
    forumId: {
      type: String,
      required: true
    }
  },
  computed: {
    forum() {
      return this.$store.state.forums.find(f => f.id === this.forumId)
    }
  },
  methods: {
    async save({ title, text }) {
      const thread = await this.$store.dispatch('createThread', { title, text, forumId: this.forum.id })
      this.$router.push({ name: 'ThreadShow', params: { id: thread.id } })
    },
    cancel() {
      this.$router.push({ name: 'Forum', params: { id: this.forumId } })
    }
  }
}
</script>
