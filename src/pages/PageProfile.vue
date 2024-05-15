<template>
  <div class="flex-grid">
    <div class="col-3 push-top">
        <user-profile-card v-if="!edit" :user="user"/>
        <user-profile-edit v-else :user="user"/>

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
  props: {
    edit: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters({ user: 'authUser' }),
    userPosts() {
      return this.$store.state.posts.filter(p => p.userId === this.user.id)
    }
  }
}
</script>
