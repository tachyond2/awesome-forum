<template>
  <div class="flex-grid">
    <div class="col-3 push-top">
<<<<<<< HEAD
        <user-profile-card v-if="!edit" :user="user"/>
        <user-profile-edit v-else :user="user"/>
=======

        <div class="profile-card">

            <p class="text-center">
                <img :src="user.avatar" :alt="`${user.avatar} profile picture`" class="avatar-xlarge">
            </p>

            <h1 class="title">{{user.username}}</h1>

            <p class="text-lead">{{user.name}}</p>
            <p class="text-justify">
                {{user.bio || 'No bio specified.'}}
            </p>

            <span class="online">{{ user.username }} is online</span>

            <div class="stats">
                <span>{{ postsCount }} posts</span>
                <span>{{ threadsCount }} threads</span>
            </div>

            <hr>

            <p class="text-large text-center"><i class="fa fa-globe"></i> <a href="#">{{user.website}}</a></p>

        </div>

        <p class="text-xsmall text-faded text-center">Member since june 2003, last visited 4 hours ago</p>

        <div class="text-center">
          <hr>
          <a href="edit-profile.html" class="btn-green btn-small">Edit Profile</a>
        </div>
>>>>>>> origin/main

    </div>
    <div class="col-7 push-top">
    <PostList :posts="userPosts"/>
    </div>
</div>
</template>

<script>
import PostList from '@/components/PostList.vue'
<<<<<<< HEAD
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
=======
import { mapGetters } from 'vuex'
export default {
  components: {
    PostList
>>>>>>> origin/main
  },
  computed: {
    ...mapGetters({ user: 'authUser' }),
    userPosts() {
      return this.$store.state.posts.filter(p => p.userId === this.user.id)
<<<<<<< HEAD
=======
    },
    postsCount() {
      return this.userPosts.length
    },
    threadsCount() {
      return this.$store.state.threads.filter(t => t.userId === this.user.id).length
>>>>>>> origin/main
    }
  }
}
</script>
