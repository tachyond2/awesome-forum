<template>

  <div class="col-large push-top" >
    <!-- <ul class="breadcrumbs">
      <li>
        <a href="#"><i class="fa fa-home fa-btn"></i>Home</a>
      </li>
      <li><a href="category.html">Discussions</a></li>
      <li class="active"><a href="#">Cooking</a></li>
    </ul> -->
    <h1>{{ thread.title }}
      <router-link :to="{ name: 'ThreadEdit', params: { threadId: id}}"  >
        <button class="btn-small btn-green">Edit THread</button></router-link>
      </h1>

    <!-- <p>
      By <a href="#" class="link-unstyled">Robin</a>, 2 hours ago.
      <span
        style="float: right; margin-top: 2px"
        class="hide-mobile text-faded text-small"
        >3 replies by 3 contributors</span
      >
    </p> -->
    <p>
      By <a href="#" class="link-unstyled">{{thread.author.name}}</a>,  <AppDate :timestamp="thread.publishedAt" />.
      <span style="float:right;" class="text-faded">{{ thread.repliesCount }} replies by {{ thread.contributorsCount }} contributors</span>
    </p>
    <post-list :posts="threadPosts"/>
    <post-editor @save-post="addPost"/>
  </div>
</template>
<script>
import PostList from '@/components/PostList.vue'
import PostEditor from '@/components/PostEditor.vue'
export default {
  components: {
    PostList,
    PostEditor
  },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  computed: {
    // threads() {
    //   return this.$store.state.threads
    // },
    // posts () {
    //   return this.$store.state.posts
    // },
    thread() {
      // return this.$store.state.threads.find(thread => thread.id === this.id)
      return this.$store.getters.thread(this.id)
    },
    threadPosts() {
      return this.$store.state.posts.filter(p => p.threadId === this.id)
    }
  },
  methods: {
    addPost(eventPlayload) {
      console.log(eventPlayload)
      const newPost = {
        ...eventPlayload.newPost,
        threadId: this.id
      }
      // console.log(newPost)
      this.$store.dispatch('createPost', newPost)
    }
  }
}
</script>
