<template>
  <div class="col-full">
    <div class="forum-list">
      <h2 class="list-title">
          <a href="category.html">{{categoryName}}</a>
      </h2>
      <div class="forum-listing" v-for="forum in forums" :key="forum.id">
          <div class="forum-details">
              <router-link class="text-xlarge" :to="{name: 'Forum', params:{id: forum.id}}">{{forum.name}}</router-link>
              <p>{{forum.description}}</p>
          </div>
          <div class="threads-count">
              <p>
                <span class="count">{{forum.threads?.length}}</span>
                {{ forumThreadsWord(forum) }}
              </p>
          </div>
          <div class="last-thread">
              <!-- <img class="avatar" src="https://pbs.twimg.com/profile_images/719242842598699008/Nu43rQz1_400x400.jpg" alt="">
              <div class="last-thread-details">
                  <a href="thread.html">Post Reactions</a>
                  <p class="text-xsmall">By <a href="profile.html">Rolf Haug</a>, a month ago</p>
              </div> -->
          </div>
      </div>
  </div>
  </div>
</template>

<script>
// import sourceData from '@/data.json'
export default {
  // computed:{
  //   forums(){
  //     return sourceData.forums.filter()
  //   }
  // }
  props: {
    forums: {
      required: true,
      type: Array
    },
    categoryName: {
      rquired: true,
      type: String
    }
  },
  methods: {
    forumThreadsWord(forum) {
      if (forum.threads?.length) {
        return forum.threads.length > 1 ? 'threads' : 'thread'
      } else {
        return 'no threads'
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
