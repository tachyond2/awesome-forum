<template>
  <div class="col-full">
    <form @submit.prevent="save">
      <div class="form-group">
        <!-- <textarea :value="newPost" v-on:input="newPost = $event.target.value" id="" cols="30" rows="10"></textarea> -->
        <textarea v-model="text" rows="10" cols="30" rules="required"/>
      </div>
      <div class="from-actions">
        <button class="btn-blue">submit</button>
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
      const newPost = {
        text: this.text
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
