<template>
  <div class="profile-card">
    <form @submit.prevent="save">

      <p class="text-center">
          <img :src="activeUser.avatar" :alt="`${activeUser.avatar} profile card`" class="avatar-xlarge img-update">
      </p>
      <div class="form-group">
          <input type="text" v-model="activeUser.username" placeholder="Username" class="form-input text-lead text-bold">
      </div>

      <div class="form-group">
          <input type="text" v-model="activeUser.name" placeholder="Full Name" class="form-input text-lead">
      </div>

      <div class="form-group">
          <label for="user_bio">Bio</label>
          <textarea class="form-input" id="user_bio" placeholder="Write a few words about yourself" v-model="activeUser.bio"/>
      </div>

      <div class="stats">
          <span>{{ activeUser.postsCount }} posts</span>
          <span>{{ activeUser.threadsCount }} threads</span>
      </div>

      <hr>
      <div class="form-group">
          <label class="form-label" for="user_website">Website</label>
          <input autocomplete="off" class="form-input" id="user_website" v-model="activeUser.website" >
      </div>

      <div class="form-group">
          <label class="form-label" for="user_email">Email</label>
          <input autocomplete="off" class="form-input" id="user_email" v-model="activeUser.email">
      </div>

      <div class="form-group">
          <label class="form-label" for="user_location">Location</label>
          <input autocomplete="off" class="form-input" id="user_location" v-model="activeUser.location">
      </div>

      <div class="btn-group space-between">
          <button class="btn-ghost">Cancel</button>
          <button type="submit" class="btn-blue">Save</button>
      </div>
    </form>

</div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      activeUser: { ...this.user }
    }
  },
  methods: {
    save() {
      // clone the active user to avoid refering same user in state
      this.$store.dispatch('updateUser', { ...this.activeUser })
      this.$router.push({ name: 'Profile' })
    }
  }

}
</script>
