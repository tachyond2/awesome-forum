<template>
  <div class="flex-grid">
    <div class="col-3 push-top">
        <user-profile-card :user="user"/>
        <user-profile-edit :user="user"/>
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
import UserProfileCard from '@/components/UserProfileCard.vue'
import UserProfileEdit from '@/components/UserProfileEdit.vue'

import { mapGetters } from 'vuex'
export default {
  components: {
    PostList,
    UserProfileCard,
    UserProfileEdit
  },
  computed: {
    ...mapGetters({ user: 'authUser' }),
    userPosts() {
      return this.$store.state.posts.filter(p => p.userId === this.user.id)
    }
  }
}
</script>
