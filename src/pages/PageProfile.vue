<template>
  <div class="flex-grid">
    <div class="col-3 push-top">
        <user-profile :user="user"/>
        <p class="text-xsmall text-faded text-center">Member since june 2003, last visited 4 hours ago</p>

        <div class="text-center">
          <hr>
          <a href="edit-profile.html" class="btn-green btn-small">Edit Profile</a>
        </div>

    </div>
    <div class="col-7 push-top">
    <PostList :posts="userPosts"/>
    </div>
</div>
</template>

<script>
import PostList from '@/components/PostList.vue'
import UserProfile from '@/components/UserProfile.vue'

import { mapGetters } from 'vuex'
export default {
  components: {
    PostList,
    UserProfile
  },
  computed: {
    ...mapGetters({ user: 'authUser' }),
    userPosts() {
      return this.$store.state.posts.filter(p => p.userId === this.user.id)
    }
  }
}
</script>
