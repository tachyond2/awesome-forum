<template>
  <div class="col-full push-top">

    <form @submit.prevent="save">
      <div class="form-group">
        <label for="thread-title"></label>
        <input type="text" class="form-input" id="thread-title" v-model="form.title"/>
      </div>

      <div class="from-group">
        <label for="thread-content"></label>
        <textarea name="" id="thread-content" cols="30" rows="10" class="form-input" v-model="form.text"></textarea>
      </div>

      <div class="btn-group">
        <button @click.prevent="cancel" class="btn btn-ghost">cancel</button>
        <button class="btn btn-blue">Publish</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  },
  data() {
    return {

      // renmae local data property with acitve prefix
      // or wrap them into object like thread or forum
      // solve the name colision between props and data while allowing us to reference all the value with a single variable

      form: {
        title: this.title,
        text: this.text
      }
    }
  },
  methods: {
    save() {
      this.$emit('save', { ...this.form })
    },
    cancel() {
      this.$emit('cancel')
    }
  }
}
</script>
