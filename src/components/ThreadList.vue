<template>
  <div v-if="threads" class="col-full">
          <div class="thread-list">

              <h2 class="list-title">Threads</h2>

              <div class="thread" v-for="thread in threads" :key="thread.id">
                  <div>
                      <p>
                          <!-- <router-link :to="`/thread/${thread.id}`">{{thread.title}}</router-link> -->
                          <router-link :to="{name:'ThreadShow', params:{id: thread.id}}">{{thread.title}}</router-link>
                      </p>
                      <p class="text-faded text-xsmall">
                          By <a href="profile.html">{{userById(thread.userId).name}}</a>, <app-date :timestamp="thread.publishedAt"/>
                      </p>
                  </div>

                  <div class="activity">
                      <p class="replies-count">
                          <!-- 1 reply -->
                          {{ thread.posts.length + ' reply' + `${thread.posts.length > 1 ? 's' : ''}`}}
                      </p>

                      <img class="avatar-medium" :src="userById(thread.userId).avatar" alt="">

                      <div>
                          <p class="text-xsmall">
                              <a href="profile.html">{{userById(thread.userId).name}}</a>
                          </p>
                          <p class="text-xsmall text-faded"><app-date :timestamp="thread.publishedAt"/> </p>
                      </div>
                  </div>
              </div>
          </div>

          <div class="pagination">
              <button class="btn-circle" disabled=""><i class="fa fa-angle-left"></i></button>
              1 of 3
              <button class="btn-circle"><i class="fa fa-angle-right"></i></button>
          </div>
  </div>
  <div v-else>
    <h1>This thread seems to not exist</h1>
    <router-link :to="{name: 'Home'}">read some cool threads</router-link>
  </div>
</template>

<script>
import sourceData from '@/data.json'
export default {
  props: {
    threads: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      users: sourceData.users
    }
  },
  methods: {
    userById(userId) {
      return this.users.find(u => u.id === userId)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
