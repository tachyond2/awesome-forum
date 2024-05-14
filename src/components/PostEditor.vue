<template>
  <div class="col-full">
    <form @submit.prevent="save">
      <div class="form-group">
        <!-- <textarea :value="newPost" v-on:input="newPost = $event.target.value" id="" cols="30" rows="10"></textarea> -->
        <textarea v-model="text"/>
      </div>
      <div class="cc-actions">
        <button>submit</button>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      text: ''
    }
  },
  methods: {
    save() {
      const newPostId = crypto.randomUUID()
      const newPost = {
        text: this.text,
        id: newPostId,
        publishedAt: Math.floor(new Date() / 1000),
        userId: '38St7Q8Zi2N1SPa5ahzssq9kbyp1'
      }
      this.$emit('save-post', { newPost })
      // do in parent compoenent
      // this.posts.push(newPost)
      // this.threads.posts.push(newPostId)
      this.newPostText = ''
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
