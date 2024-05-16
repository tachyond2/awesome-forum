<template>
  <div class="col-full push-top">
    <h1>create new thread in {{forum.name}}</h1>
    <form @submit.prevent="save">
      <div class="form-group">
        <label for="thread-title"></label>
        <input type="text" class="form-input" id="thread-title" v-model="title"/>
      </div>

      <div class="from-group">
        <label for="thread-content"></label>
        <textarea name="" id="thread-content" cols="30" rows="10" class="form-input" v-model="text"></textarea>
      </div>

      <div class="btn-group">
        <button @click="cancel" class="btn btn-ghost">cancel</button>
        <button class="btn btn-blue">Publish</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
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
  data() {
    return {
      title: '',
      text: ' '
    }
  },
  methods: {
    async save() {
      const thread = await this.$store.dispatch('createThread', { title: this.title, text: this.text, forumId: this.forum.id })
      this.$router.push({ name: 'ThreadShow', params: { id: thread.id } })
    },
    cancel() {
      this.$router.push({ name: 'Forum', params: { id: this.forumId } })
    }
  }
}
</script>
